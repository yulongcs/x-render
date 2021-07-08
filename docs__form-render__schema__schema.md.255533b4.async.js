(window.webpackJsonp=window.webpackJsonp||[]).push([[49,12],{"0zqC":function(Tn,bn,e){"use strict";e.r(bn);var J=e("tJVT"),n=e("q1tI"),p=e.n(n),L=e("wx14"),ce=e("rePB"),x=e("ODXe"),Ie=e("U8pU"),Pe=e("Ff2n"),ve=e("VTBJ"),pn=e("TSYQ"),Be=e.n(pn),wn=e("Zm9Q"),Kn=e("5Z9U"),Sn=e("6cGi"),hn=e("KQm4"),Qe=e("wgJM"),$n=e("t23M");function Mn(a){var i=Object(n.useRef)(),h=Object(n.useRef)(!1);function E(){for(var O=arguments.length,b=new Array(O),S=0;S<O;S++)b[S]=arguments[S];h.current||(Qe.a.cancel(i.current),i.current=Object(Qe.a)(function(){a.apply(void 0,b)}))}return Object(n.useEffect)(function(){return function(){h.current=!0,Qe.a.cancel(i.current)}},[]),E}function Rn(a){var i=Object(n.useRef)([]),h=Object(n.useState)({}),E=Object(x.a)(h,2),O=E[1],b=Object(n.useRef)(typeof a=="function"?a():a),S=Mn(function(){var M=b.current;i.current.forEach(function($){M=$(M)}),i.current=[],b.current=M,O({})});function j(M){i.current.push(M),S()}return[b.current,j]}var Me=e("4IlW");function qn(a,i){var h,E=a.prefixCls,O=a.id,b=a.active,S=a.rtl,j=a.tab,M=j.key,$=j.tab,V=j.disabled,H=j.closeIcon,z=a.tabBarGutter,ue=a.tabPosition,Z=a.closable,k=a.renderWrapper,oe=a.removeAriaLabel,U=a.editable,ne=a.onClick,ie=a.onRemove,q=a.onFocus,le="".concat(E,"-tab");n.useEffect(function(){return ie},[]);var ee={};ue==="top"||ue==="bottom"?ee[S?"marginLeft":"marginRight"]=z:ee.marginBottom=z;var be=U&&Z!==!1&&!V;function ae(se){V||ne(se)}function me(se){se.preventDefault(),se.stopPropagation(),U.onEdit("remove",{key:M,event:se})}var fe=n.createElement("div",{key:M,ref:i,className:Be()(le,(h={},Object(ce.a)(h,"".concat(le,"-with-remove"),be),Object(ce.a)(h,"".concat(le,"-active"),b),Object(ce.a)(h,"".concat(le,"-disabled"),V),h)),style:ee,onClick:ae},n.createElement("div",{role:"tab","aria-selected":b,id:O&&"".concat(O,"-tab-").concat(M),className:"".concat(le,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(M),"aria-disabled":V,tabIndex:V?null:0,onClick:function(Q){Q.stopPropagation(),ae(Q)},onKeyDown:function(Q){[Me.a.SPACE,Me.a.ENTER].includes(Q.which)&&(Q.preventDefault(),ae(Q))},onFocus:q},$),be&&n.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(Q){Q.stopPropagation(),me(Q)}},H||U.removeIcon||"\xD7"));return k&&(fe=k(fe)),fe}var Wn=n.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function rt(a,i,h){return Object(n.useMemo)(function(){for(var E,O=new Map,b=i.get((E=a[0])===null||E===void 0?void 0:E.key)||_n,S=b.left+b.width,j=0;j<a.length;j+=1){var M=a[j].key,$=i.get(M);if(!$){var V;$=i.get((V=a[j-1])===null||V===void 0?void 0:V.key)||_n}var H=O.get(M)||Object(ve.a)({},$);H.right=S-H.left-H.width,O.set(M,H)}return O},[a.map(function(E){return E.key}).join("_"),i,h])}var it={width:0,height:0,left:0,top:0,right:0};function N(a,i,h,E,O){var b=O.tabs,S=O.tabPosition,j=O.rtl,M,$,V;["top","bottom"].includes(S)?(M="width",$=j?"right":"left",V=Math.abs(i.left)):(M="height",$="top",V=-i.top);var H=i[M],z=h[M],ue=E[M],Z=H;return z+ue>H&&(Z=H-ue),Object(n.useMemo)(function(){if(!b.length)return[0,0];for(var k=b.length,oe=k,U=0;U<k;U+=1){var ne=a.get(b[U].key)||it;if(ne[$]+ne[M]>V+Z){oe=U-1;break}}for(var ie=0,q=k-1;q>=0;q-=1){var le=a.get(b[q].key)||it;if(le[$]<V){ie=q+1;break}}return[ie,oe]},[a,V,Z,S,b.map(function(k){return k.key}).join("_"),j])}var A=e("Gytx"),B=e.n(A),d=e("Kwbf");function u(a,i){var h=a.prefixCls,E=a.invalidate,O=a.item,b=a.renderItem,S=a.responsive,j=a.registerSize,M=a.itemKey,$=a.className,V=a.style,H=a.children,z=a.display,ue=a.order,Z=a.component,k=Z===void 0?"div":Z,oe=Object(Pe.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=S&&!z;function ne(be){j(M,be)}n.useEffect(function(){return function(){ne(null)}},[]);var ie=b&&O!==void 0?b(O):H,q;E||(q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:S?ue:void 0,pointerEvents:U?"none":void 0});var le={};U&&(le["aria-hidden"]=!0);var ee=n.createElement(k,Object(L.a)({className:Be()(!E&&h,$),style:Object(ve.a)(Object(ve.a)({},q),V)},le,oe,{ref:i}),ie);return S&&(ee=n.createElement($n.default,{onResize:function(ae){var me=ae.offsetWidth;ne(me)}},ee)),ee}var f=n.forwardRef(u);f.displayName="Item";var y=f;function C(){var a=Object(n.useState)({}),i=Object(x.a)(a,2),h=i[1],E=Object(n.useRef)([]),O=Object(n.useRef)(!1),b=0,S=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function j(M){var $=b;b+=1,E.current.length<$+1&&(E.current[$]=M);var V=E.current[$];function H(z){E.current[$]=typeof z=="function"?z(E.current[$]):z,Qe.a.cancel(S),S=Object(Qe.a)(function(){O.current||h({})})}return[V,H]}return j}var r=function(i,h){var E=n.useContext(I);if(!E){var O=i.component,b=O===void 0?"div":O,S=Object(Pe.a)(i,["component"]);return n.createElement(b,Object(L.a)({},S,{ref:h}))}var j=E.className,M=Object(Pe.a)(E,["className"]),$=i.className,V=Object(Pe.a)(i,["className"]);return n.createElement(I.Provider,{value:null},n.createElement(y,Object(L.a)({ref:h,className:Be()(j,$)},M,V)))},l=n.forwardRef(r);l.displayName="RawItem";var s=l,I=n.createContext(null),w="responsive",F="invalidate";function o(a){return"+ ".concat(a.length," ...")}function R(a,i){var h=a.prefixCls,E=h===void 0?"rc-overflow":h,O=a.data,b=O===void 0?[]:O,S=a.renderItem,j=a.renderRawItem,M=a.itemKey,$=a.itemWidth,V=$===void 0?10:$,H=a.ssr,z=a.style,ue=a.className,Z=a.maxCount,k=a.renderRest,oe=a.renderRawRest,U=a.suffix,ne=a.component,ie=ne===void 0?"div":ne,q=a.itemComponent,le=a.onVisibleChange,ee=Object(Pe.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=C(),ae=H==="full",me=be(null),fe=Object(x.a)(me,2),se=fe[0],Q=fe[1],de=se||0,ye=be(new Map),ge=Object(x.a)(ye,2),Se=ge[0],We=ge[1],Ee=be(0),Oe=Object(x.a)(Ee,2),we=Oe[0],Te=Oe[1],Ae=be(0),De=Object(x.a)(Ae,2),xe=De[0],_e=De[1],$e=be(0),Je=Object(x.a)($e,2),He=Je[0],Le=Je[1],jn=Object(n.useState)(null),an=Object(x.a)(jn,2),Xe=an[0],ln=an[1],En=Object(n.useState)(null),Cn=Object(x.a)(En,2),Ne=Cn[0],Ye=Cn[1],en=n.useMemo(function(){return Ne===null&&ae?Number.MAX_SAFE_INTEGER:Ne||0},[Ne,se]),Ze=Object(n.useState)(!1),Ln=Object(x.a)(Ze,2),Un=Ln[0],xn=Ln[1],rn="".concat(E,"-item"),Dn=Math.max(we,xe),on=b.length&&Z===w,An=Z===F,nn=on||typeof Z=="number"&&b.length>Z,sn=Object(n.useMemo)(function(){var he=b;return on?se===null&&ae?he=b:he=b.slice(0,Math.min(b.length,de/V)):typeof Z=="number"&&(he=b.slice(0,Z)),he},[b,V,se,Z,on]),Pn=Object(n.useMemo)(function(){return on?b.slice(en+1):b.slice(sn.length)},[b,sn,on,en]),mn=Object(n.useCallback)(function(he,Re){var Ke;return typeof M=="function"?M(he):(Ke=M&&(he==null?void 0:he[M]))!==null&&Ke!==void 0?Ke:Re},[M]),ke=Object(n.useCallback)(S||function(he){return he},[S]);function Ge(he,Re){Ye(he),Re||(xn(he<b.length-1),le==null||le(he))}function zn(he,Re){Q(Re.clientWidth)}function Yn(he,Re){We(function(Ke){var tn=new Map(Ke);return Re===null?tn.delete(he):tn.set(he,Re),tn})}function nt(he,Re){_e(Re),Te(xe)}function On(he,Re){Le(Re)}function yn(he){return Se.get(mn(sn[he],he))}n.useLayoutEffect(function(){if(de&&Dn&&sn){var he=He,Re=sn.length,Ke=Re-1;if(!Re){Ge(0),ln(null);return}for(var tn=0;tn<Re;tn+=1){var Xn=yn(tn);if(Xn===void 0){Ge(tn-1,!0);break}if(he+=Xn,tn===Ke-1&&he+yn(Ke)<=de){Ge(Ke),ln(null);break}else if(he+Dn>de){Ge(tn-1),ln(he-Xn-He+xe);break}else if(tn===Ke){Ge(Ke),ln(he-He);break}}U&&yn(0)+He>de&&ln(null)}},[de,Se,xe,He,mn,sn]);var Gn=Un&&!!Pn.length,Fn={};Xe!==null&&on&&(Fn={position:"absolute",left:Xe,top:0});var fn={prefixCls:rn,responsive:on,component:q,invalidate:An},Hn=j?function(he,Re){var Ke=mn(he,Re);return n.createElement(I.Provider,{key:Ke,value:Object(ve.a)(Object(ve.a)({},fn),{},{order:Re,item:he,itemKey:Ke,registerSize:Yn,display:Re<=en})},j(he,Re))}:function(he,Re){var Ke=mn(he,Re);return n.createElement(y,Object(L.a)({},fn,{order:Re,key:Ke,item:he,renderItem:ke,itemKey:Ke,registerSize:Yn,display:Re<=en}))},Bn,Qn={order:Gn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Gn};if(oe)oe&&(Bn=n.createElement(I.Provider,{value:Object(ve.a)(Object(ve.a)({},fn),Qn)},oe(Pn)));else{var dn=k||o;Bn=n.createElement(y,Object(L.a)({},fn,Qn),typeof dn=="function"?dn(Pn):dn)}var Nn=n.createElement(ie,Object(L.a)({className:Be()(!An&&E,ue),style:z,ref:i},ee),sn.map(Hn),nn?Bn:null,U&&n.createElement(y,Object(L.a)({},fn,{order:en,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Fn}),U));return on&&(Nn=n.createElement($n.default,{onResize:zn},Nn)),Nn}var m=n.forwardRef(R);m.displayName="Overflow",m.Item=s,m.RESPONSIVE=w,m.INVALIDATE=F;var t=m,g=t,c=e("1OyB"),D=e("vuIU"),P=e("Ji7U"),W=e("LK+K"),X=e("bT9E"),Y=e("YrtM"),G=n.createContext(null);function Fe(a,i){var h=Object(ve.a)({},a);return Object.keys(i).forEach(function(E){var O=i[E];O!==void 0&&(h[E]=O)}),h}function qe(a){var i=a.children,h=a.locked,E=Object(Pe.a)(a,["children","locked"]),O=n.useContext(G),b=Object(Y.a)(function(){return Fe(O,E)},[O,E],function(S,j){return!h&&(S[0]!==j[0]||!B()(S[1],j[1]))});return n.createElement(G.Provider,{value:b},i)}function cn(a,i,h,E){var O=n.useContext(G),b=O.activeKey,S=O.onActive,j=O.onInactive,M={active:b===a};return i||(M.onMouseEnter=function($){h==null||h({key:a,domEvent:$}),S(a)},M.onMouseLeave=function($){E==null||E({key:a,domEvent:$}),j(a)}),M}function vn(a){var i=a.item,h=Object(Pe.a)(a,["item"]);return Object.defineProperty(h,"item",{get:function(){return Object(d.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),h}function v(a){var i=a.icon,h=a.props,E=a.children,O;return typeof i=="function"?O=n.createElement(i,Object(ve.a)({},h)):O=i,O||E||null}function T(a){var i=n.useContext(G),h=i.mode,E=i.rtl,O=i.inlineIndent;if(h!=="inline")return null;var b=a;return E?{paddingRight:b*O}:{paddingLeft:b*O}}var K=[],pe=n.createContext(null);function te(){return n.useContext(pe)}var je=n.createContext(K);function Ve(a){var i=n.useContext(je);return n.useMemo(function(){return a!==void 0?[].concat(Object(hn.a)(i),[a]):i},[i,a])}var ze=n.createContext(null),Jt=n.createContext(null);function Ut(a,i){return a===void 0?null:"".concat(a,"-").concat(i)}function zt(a){var i=n.useContext(Jt);return Ut(i,a)}var ba=function(a){Object(P.a)(h,a);var i=Object(W.a)(h);function h(){return Object(c.a)(this,h),i.apply(this,arguments)}return Object(D.a)(h,[{key:"render",value:function(){var O=this.props,b=O.title,S=O.attribute,j=O.elementRef,M=Object(Pe.a)(O,["title","attribute","elementRef"]),$=Object(X.a)(M,["eventKey"]);return Object(d.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(g.Item,Object(L.a)({},S,{title:typeof b=="string"?b:void 0},$,{ref:j}))}}]),h}(n.Component),Ea=function(i){var h,E=i.style,O=i.className,b=i.eventKey,S=i.disabled,j=i.itemIcon,M=i.children,$=i.role,V=i.onMouseEnter,H=i.onMouseLeave,z=i.onClick,ue=i.onKeyDown,Z=i.onFocus,k=Object(Pe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=zt(b),U=n.useContext(G),ne=U.prefixCls,ie=U.onItemClick,q=U.disabled,le=U.overflowDisabled,ee=U.itemIcon,be=U.selectedKeys,ae=U.onActive,me="".concat(ne,"-item"),fe=n.useRef(),se=n.useRef(),Q=q||S,de=Ve(b),ye=function($e){return{key:b,keyPath:de,item:fe.current,domEvent:$e}},ge=j||ee,Se=cn(b,Q,V,H),We=Se.active,Ee=Object(Pe.a)(Se,["active"]),Oe=be.includes(b),we=T(de.length),Te=function($e){if(!Q){var Je=ye($e);z==null||z(vn(Je)),ie(Je)}},Ae=function($e){if(ue==null||ue($e),$e.which===Me.a.ENTER){var Je=ye($e);z==null||z(vn(Je)),ie(Je)}},De=function($e){ae(b),Z==null||Z($e)},xe={};return i.role==="option"&&(xe["aria-selected"]=Oe),n.createElement(ba,Object(L.a)({ref:fe,elementRef:se,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":le&&oe?null:oe},k,Ee,xe,{component:"li","aria-disabled":S,style:Object(ve.a)(Object(ve.a)({},we),E),className:Be()(me,(h={},Object(ce.a)(h,"".concat(me,"-active"),We),Object(ce.a)(h,"".concat(me,"-selected"),Oe),Object(ce.a)(h,"".concat(me,"-disabled"),Q),h),O),onClick:Te,onKeyDown:Ae,onFocus:De}),M,n.createElement(v,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Oe}),icon:ge}))};function Ca(a){var i=a.eventKey,h=te(),E=Ve(i);return n.useEffect(function(){if(h)return h.registerPath(i,E),function(){h.unregisterPath(i,E)}},[E]),h?null:n.createElement(Ea,a)}var jt=Ca;function Dt(a,i){return Object(wn.a)(a).map(function(h,E){if(n.isValidElement(h)){var O=h.key;return O==null&&(O="tmp_key-".concat([].concat(Object(hn.a)(i),[E]).join("-"))),n.cloneElement(h,{key:O,eventKey:O})}return h})}function et(a){var i=n.useRef(a);i.current=a;var h=n.useCallback(function(){for(var E,O=arguments.length,b=new Array(O),S=0;S<O;S++)b[S]=arguments[S];return(E=i.current)===null||E===void 0?void 0:E.call.apply(E,[i].concat(b))},[]);return a?h:void 0}var Oa=function(i,h){var E=i.className,O=i.children,b=Object(Pe.a)(i,["className","children"]),S=n.useContext(G),j=S.prefixCls,M=S.mode;return n.createElement("ul",Object(L.a)({className:Be()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(M==="inline"?"inline":"vertical"),E)},b,{"data-menu-list":!0,ref:h}),O)},Yt=n.forwardRef(Oa);Yt.displayName="SubMenuList";var Gt=Yt,Fa=e("uciX"),Vn={adjustX:1,adjustY:1},Ht={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Sa={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Ht;function Qt(a,i,h){if(i)return i;if(h)return h[a]||h.other}var Ra={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ja(a){var i=a.prefixCls,h=a.visible,E=a.children,O=a.popup,b=a.popupClassName,S=a.popupOffset,j=a.disabled,M=a.mode,$=a.onVisibleChange,V=n.useContext(G),H=V.getPopupContainer,z=V.rtl,ue=V.subMenuOpenDelay,Z=V.subMenuCloseDelay,k=V.builtinPlacements,oe=V.triggerSubMenuAction,U=V.forceSubMenuRender,ne=V.motion,ie=V.defaultMotions,q=n.useState(!1),le=Object(x.a)(q,2),ee=le[0],be=le[1],ae=z?Object(ve.a)(Object(ve.a)({},Sa),k):Object(ve.a)(Object(ve.a)({},Ht),k),me=Ra[M],fe=Qt(M,ne,ie),se=Object(ve.a)(Object(ve.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Q=n.useRef();return n.useEffect(function(){return Q.current=Object(Qe.a)(function(){be(h)}),function(){Qe.a.cancel(Q.current)}},[h]),n.createElement(Fa.a,{prefixCls:i,popupClassName:Be()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),z),b),stretch:M==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ae,popupPlacement:me,popupVisible:ee,popup:O,popupAlign:S&&{offset:S},action:j?[]:[oe],mouseEnterDelay:ue,mouseLeaveDelay:Z,onPopupVisibleChange:$,forceRender:U,popupMotion:se},E)}var Da=e("8XRh");function Aa(a){var i=a.id,h=a.open,E=a.keyPath,O=a.children,b="inline",S=n.useContext(G),j=S.prefixCls,M=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,H=S.mode,z=n.useRef(!1);z.current=H===b;var ue=n.useState(!z.current),Z=Object(x.a)(ue,2),k=Z[0],oe=Z[1],U=z.current?h:!1;n.useEffect(function(){z.current&&oe(!1)},[H]);var ne=Object(ve.a)({},Qt(b,$,V));E.length>1&&(ne.motionAppear=!1);var ie=ne.onVisibleChanged;return ne.onVisibleChanged=function(q){return!z.current&&!q&&oe(!0),ie==null?void 0:ie(q)},k?null:n.createElement(qe,{mode:b,locked:!z.current},n.createElement(Da.default,Object(L.a)({visible:U},ne,{forceRender:M,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(q){var le=q.className,ee=q.style;return n.createElement(Gt,{id:i,className:le,style:ee},O)}))}var Pa=function(i){var h,E=i.style,O=i.className,b=i.title,S=i.eventKey,j=i.disabled,M=i.internalPopupClose,$=i.children,V=i.itemIcon,H=i.expandIcon,z=i.popupClassName,ue=i.popupOffset,Z=i.onClick,k=i.onMouseEnter,oe=i.onMouseLeave,U=i.onTitleClick,ne=i.onTitleMouseEnter,ie=i.onTitleMouseLeave,q=Object(Pe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=zt(S),ee=n.useContext(G),be=ee.prefixCls,ae=ee.mode,me=ee.openKeys,fe=ee.disabled,se=ee.overflowDisabled,Q=ee.activeKey,de=ee.selectedKeys,ye=ee.itemIcon,ge=ee.expandIcon,Se=ee.onItemClick,We=ee.onOpenChange,Ee=ee.onActive,Oe=n.useContext(ze),we=Oe.isSubPathKey,Te=Ve(),Ae="".concat(be,"-submenu"),De=fe||j,xe=n.useRef(),_e=n.useRef(),$e=V||ye,Je=H||ge,He=me.includes(S),Le=!se&&He,jn=we(de,S),an=cn(S,De,ne,ie),Xe=an.active,ln=Object(Pe.a)(an,["active"]),En=n.useState(!1),Cn=Object(x.a)(En,2),Ne=Cn[0],Ye=Cn[1],en=function(Ge){De||Ye(Ge)},Ze=function(Ge){en(!0),k==null||k({key:S,domEvent:Ge})},Ln=function(Ge){en(!1),oe==null||oe({key:S,domEvent:Ge})},Un=n.useMemo(function(){return Xe||(ae!=="inline"?Ne||we([Q],S):!1)},[ae,Xe,Q,Ne,S,we]),xn=T(Te.length),rn=function(Ge){De||(U==null||U({key:S,domEvent:Ge}),ae==="inline"&&We(S,!He))},Dn=et(function(ke){Z==null||Z(vn(ke)),Se(ke)}),on=function(Ge){ae!=="inline"&&We(S,Ge)},An=function(){Ee(S)},nn=le&&"".concat(le,"-popup"),sn=n.createElement("div",Object(L.a)({role:"menuitem",style:xn,className:"".concat(Ae,"-title"),tabIndex:De?null:-1,ref:xe,title:typeof b=="string"?b:null,"data-menu-id":se&&le?null:le,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":De,onClick:rn,onFocus:An},ln),b,n.createElement(v,{icon:ae!=="horizontal"?Je:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ae,"-arrow")}))),Pn=n.useRef(ae);if(ae!=="inline"&&(Pn.current=Te.length>1?"vertical":ae),!se){var mn=Pn.current;sn=n.createElement(ja,{mode:mn,prefixCls:Ae,visible:!M&&Le&&ae!=="inline",popupClassName:z,popupOffset:ue,popup:n.createElement(qe,{mode:mn},n.createElement(Gt,{id:nn,ref:_e},$)),disabled:De,onVisibleChange:on},sn)}return n.createElement(qe,{onItemClick:Dn,mode:ae==="horizontal"?"vertical":ae,itemIcon:$e,expandIcon:Je},n.createElement(g.Item,Object(L.a)({role:"none"},q,{component:"li",style:E,className:Be()(Ae,"".concat(Ae,"-").concat(ae),O,(h={},Object(ce.a)(h,"".concat(Ae,"-open"),Le),Object(ce.a)(h,"".concat(Ae,"-active"),Un),Object(ce.a)(h,"".concat(Ae,"-selected"),jn),Object(ce.a)(h,"".concat(Ae,"-disabled"),De),h)),onMouseEnter:Ze,onMouseLeave:Ln}),sn,!se&&n.createElement(Aa,{id:nn,open:Le,keyPath:Te},$)))};function Xt(a){var i=a.eventKey,h=a.children,E=Ve(i),O=Dt(h,E),b=te();n.useEffect(function(){if(b)return b.registerPath(i,E),function(){b.unregisterPath(i,E)}},[E]);var S;return b?S=O:S=n.createElement(Pa,a,O),n.createElement(je.Provider,{value:E},S)}var Ba=e("x/xZ");function Zt(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(a)){var h=a.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(h)||a.isContentEditable||h==="a"&&!!a.getAttribute("href"),O=a.getAttribute("tabindex"),b=Number(O),S=null;return O&&!Number.isNaN(b)?S=b:E&&S===null&&(S=0),E&&a.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,h=Object(hn.a)(a.querySelectorAll("*")).filter(function(E){return Zt(E,i)});return Zt(a,i)&&h.unshift(a),h}var mt=null;function pr(){mt=document.activeElement}function hr(){mt=null}function vr(){if(mt)try{mt.focus()}catch(a){}}function gr(a,i){if(i.keyCode===9){var h=kt(a),E=h[i.shiftKey?0:h.length-1],O=E===document.activeElement||a===document.activeElement;if(O){var b=h[i.shiftKey?h.length-1:0];b.focus(),i.preventDefault()}}}var At=Me.a.LEFT,Pt=Me.a.RIGHT,Bt=Me.a.UP,ft=Me.a.DOWN,pt=Me.a.ENTER,qt=Me.a.ESC,_t=[Bt,ft,At,Pt];function Na(a,i,h,E){var O,b,S,j,M="prev",$="next",V="children",H="parent";if(a==="inline"&&E===pt)return{inlineTrigger:!0};var z=(O={},Object(ce.a)(O,Bt,M),Object(ce.a)(O,ft,$),O),ue=(b={},Object(ce.a)(b,At,h?$:M),Object(ce.a)(b,Pt,h?M:$),Object(ce.a)(b,ft,V),Object(ce.a)(b,pt,V),b),Z=(S={},Object(ce.a)(S,Bt,M),Object(ce.a)(S,ft,$),Object(ce.a)(S,pt,V),Object(ce.a)(S,qt,H),Object(ce.a)(S,At,h?V:H),Object(ce.a)(S,Pt,h?H:V),S),k={inline:z,horizontal:ue,vertical:Z,inlineSub:z,horizontalSub:Z,verticalSub:Z},oe=(j=k["".concat(a).concat(i?"":"Sub")])===null||j===void 0?void 0:j[E];switch(oe){case M:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ia(a){for(var i=a;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ta(a,i){for(var h=a||document.activeElement;h;){if(i.has(h))return h;h=h.parentElement}return null}function wa(a,i){var h=kt(a,!0);return h.filter(function(E){return i.has(E)})}function ea(a,i,h){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var O=wa(a,i),b=O.length,S=O.findIndex(function(j){return h===j});return E<0?S===-1?S=b-1:S-=1:E>0&&(S+=1),S=(S+b)%b,O[S]}function Ka(a,i,h,E,O,b,S,j,M,$){var V=n.useRef(),H=n.useRef();H.current=i;var z=function(){Qe.a.cancel(V.current)};return n.useEffect(function(){return function(){z()}},[]),function(ue){var Z=ue.which;if([].concat(_t,[pt,qt]).includes(Z)){var k,oe,U,ne=function(){k=new Set,oe=new Map,U=new Map;var ye=b();return ye.forEach(function(ge){var Se=document.querySelector("[data-menu-id='".concat(Ut(E,ge),"']"));Se&&(k.add(Se),U.set(Se,ge),oe.set(ge,Se))}),k};ne();var ie=oe.get(i),q=Ta(ie,k),le=U.get(q),ee=Na(a,S(le,!0).length===1,h,Z);if(!ee)return;_t.includes(Z)&&ue.preventDefault();var be=function(ye){if(ye){var ge=ye,Se=ye.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(ge=Se);var We=U.get(ye);j(We),z(),V.current=Object(Qe.a)(function(){H.current===We&&ge.focus()})}};if(ee.sibling||!q){var ae;!q||a==="inline"?ae=O.current:ae=Ia(q);var me=ea(ae,k,q,ee.offset);be(me)}else if(ee.inlineTrigger)M(le);else if(ee.offset>0)M(le,!0),z(),V.current=Object(Qe.a)(function(){ne();var de=q.getAttribute("aria-controls"),ye=document.getElementById(de),ge=ea(ye,k);be(ge)},5);else if(ee.offset<0){var fe=S(le,!0),se=fe[fe.length-2],Q=oe.get(se);M(se,!1),be(Q)}}$==null||$(ue)}}var Ma=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(a){var i=Object(Sn.a)(a,{value:a}),h=Object(x.a)(i,2),E=h[0],O=h[1];return n.useEffect(function(){na+=1;var b="".concat(Ma,"-").concat(na);O("rc-menu-uuid-".concat(b))},[]),E}var yr=e("p8sG");function La(a){Promise.resolve().then(a)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Nt)},xa=function(i){return i.split(Nt)},It="rc-menu-more";function $a(){var a=n.useState({}),i=Object(x.a)(a,2),h=i[1],E=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),b=n.useState([]),S=Object(x.a)(b,2),j=S[0],M=S[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(U,ne){var ie=ta(ne);O.current.set(ie,U),E.current.set(U,ie),$.current+=1;var q=$.current;La(function(){q===$.current&&h({})})},[]),H=Object(n.useCallback)(function(U,ne){var ie=ta(ne);O.current.delete(ie),E.current.delete(U)},[]),z=Object(n.useCallback)(function(U){M(U)},[]),ue=Object(n.useCallback)(function(U,ne){var ie=E.current.get(U)||"",q=xa(ie);return ne&&j.includes(q[0])&&q.unshift(It),q},[j]),Z=Object(n.useCallback)(function(U,ne){return U.some(function(ie){var q=ue(ie,!0);return q.includes(ne)})},[ue]),k=function(){var ne=Object(hn.a)(E.current.keys());return j.length&&ne.push(It),ne},oe=Object(n.useCallback)(function(U){var ne="".concat(E.current.get(U)).concat(Nt),ie=new Set;return Object(hn.a)(O.current.keys()).forEach(function(q){q.startsWith(ne)&&ie.add(O.current.get(q))}),ie},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:z,isSubPathKey:Z,getKeyPath:ue,getKeys:k,getSubPathKeys:oe}}var ht=[],Va=function(i){var h,E,O=i.prefixCls,b=O===void 0?"rc-menu":O,S=i.style,j=i.className,M=i.tabIndex,$=M===void 0?0:M,V=i.children,H=i.direction,z=i.id,ue=i.mode,Z=ue===void 0?"vertical":ue,k=i.inlineCollapsed,oe=i.disabled,U=i.disabledOverflow,ne=i.subMenuOpenDelay,ie=ne===void 0?.1:ne,q=i.subMenuCloseDelay,le=q===void 0?.1:q,ee=i.forceSubMenuRender,be=i.defaultOpenKeys,ae=i.openKeys,me=i.activeKey,fe=i.defaultActiveFirst,se=i.selectable,Q=se===void 0?!0:se,de=i.multiple,ye=de===void 0?!1:de,ge=i.defaultSelectedKeys,Se=i.selectedKeys,We=i.onSelect,Ee=i.onDeselect,Oe=i.inlineIndent,we=Oe===void 0?24:Oe,Te=i.motion,Ae=i.defaultMotions,De=i.triggerSubMenuAction,xe=De===void 0?"hover":De,_e=i.builtinPlacements,$e=i.itemIcon,Je=i.expandIcon,He=i.overflowedIndicator,Le=He===void 0?"...":He,jn=i.getPopupContainer,an=i.onClick,Xe=i.onOpenChange,ln=i.onKeyDown,En=i.openAnimation,Cn=i.openTransitionName,Ne=Object(Pe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ye=Dt(V,ht),en=n.useState(!1),Ze=Object(x.a)(en,2),Ln=Ze[0],Un=Ze[1],xn=n.useRef(),rn=Wa(z),Dn=H==="rtl",on=n.useMemo(function(){return Z==="inline"&&k?["vertical",k]:[Z,!1]},[Z,k]),An=Object(x.a)(on,2),nn=An[0],sn=An[1],Pn=n.useState(0),mn=Object(x.a)(Pn,2),ke=mn[0],Ge=mn[1],zn=ke>=Ye.length-1||nn!=="horizontal"||U,Yn=Object(Sn.a)(be,{value:ae,postState:function(_){return _||ht}}),nt=Object(x.a)(Yn,2),On=nt[0],yn=nt[1],Gn=n.useState(On),Fn=Object(x.a)(Gn,2),fn=Fn[0],Hn=Fn[1],Bn=nn==="inline",Qn=n.useRef(!1);n.useEffect(function(){Bn&&Hn(On)},[On]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(Bn)yn(fn);else{var re=[];yn(re),Xe==null||Xe(re)}},[Bn]);var dn=$a(),Nn=dn.registerPath,he=dn.unregisterPath,Re=dn.refreshOverflowKeys,Ke=dn.isSubPathKey,tn=dn.getKeyPath,Xn=dn.getKeys,gt=dn.getSubPathKeys,Mt=n.useMemo(function(){return{registerPath:Nn,unregisterPath:he}},[Nn,he]),Wt=n.useMemo(function(){return{isSubPathKey:Ke}},[Ke]);n.useEffect(function(){Re(zn?ht:Ye.slice(ke+1).map(function(re){return re.key}))},[ke,zn]);var Lt=Object(Sn.a)(me||fe&&((h=Ye[0])===null||h===void 0?void 0:h.key),{value:me}),tt=Object(x.a)(Lt,2),yt=tt[0],ut=tt[1],bt=et(function(re){ut(re)}),xt=et(function(){ut(void 0)}),Et=Object(Sn.a)(ge||[],{value:Se,postState:function(_){return Array.isArray(_)?_:_==null?ht:[_]}}),Ct=Object(x.a)(Et,2),at=Ct[0],In=Ct[1],Ot=function(_){if(!!Q){var Ce=_.key,Ue=at.includes(Ce),un;Ue?un=at.filter(function(kn){return kn!==Ce}):ye?un=[].concat(Object(hn.a)(at),[Ce]):un=[Ce],In(un);var Jn=Object(ve.a)(Object(ve.a)({},_),{},{selectedKeys:un});Ue?Ee==null||Ee(Jn):We==null||We(Jn)}},Ft=et(function(re){an==null||an(vn(re)),Ot(re)}),lt=et(function(re,_){var Ce=On.filter(function(un){return un!==re});if(_)Ce.push(re);else if(nn!=="inline"){var Ue=gt(re);Ce=Ce.filter(function(un){return!Ue.has(un)})}B()(On,Ce)||(yn(Ce),Xe==null||Xe(Ce))}),Zn=et(jn),ot=function(_,Ce){var Ue=Ce!=null?Ce:!On.includes(_);lt(_,Ue)},dt=Ka(nn,yt,Dn,rn,xn,Xn,tn,ut,ot,ln);n.useEffect(function(){Un(!0)},[]);var St=nn!=="horizontal"||U?Ye:Ye.map(function(re,_){return n.createElement(qe,{key:re.key,overflowDisabled:_>ke},re)}),Rt=n.createElement(g,Object(L.a)({id:z,ref:xn,prefixCls:"".concat(b,"-overflow"),component:"ul",itemComponent:jt,className:Be()(b,"".concat(b,"-root"),"".concat(b,"-").concat(nn),j,(E={},Object(ce.a)(E,"".concat(b,"-inline-collapsed"),sn),Object(ce.a)(E,"".concat(b,"-rtl"),Dn),E)),dir:H,style:S,role:"menu",tabIndex:$,data:St,renderRawItem:function(_){return _},renderRawRest:function(_){var Ce=_.length,Ue=Ce?Ye.slice(-Ce):null;return n.createElement(Xt,{eventKey:It,title:Le,disabled:zn,internalPopupClose:Ce===0},Ue)},maxCount:nn!=="horizontal"||U?g.INVALIDATE:g.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(_){Ge(_)},onKeyDown:dt},Ne));return n.createElement(Jt.Provider,{value:rn},n.createElement(qe,{prefixCls:b,mode:nn,openKeys:On,rtl:Dn,disabled:oe,motion:Ln?Te:null,defaultMotions:Ln?Ae:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:at,inlineIndent:we,subMenuOpenDelay:ie,subMenuCloseDelay:le,forceSubMenuRender:ee,builtinPlacements:_e,triggerSubMenuAction:xe,getPopupContainer:Zn,itemIcon:$e,expandIcon:Je,onItemClick:Ft,onOpenChange:lt},n.createElement(ze.Provider,{value:Wt},Rt),n.createElement(pe.Provider,{value:Mt},Ye)))},Ja=Va,Ua=function(i){var h=i.className,E=i.title,O=i.eventKey,b=i.children,S=Object(Pe.a)(i,["className","title","eventKey","children"]),j=n.useContext(G),M=j.prefixCls,$="".concat(M,"-item-group");return n.createElement("li",Object(L.a)({},S,{onClick:function(H){return H.stopPropagation()},className:Be()($,h)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat($,"-list")},b))};function za(a){var i=a.children,h=Object(Pe.a)(a,["children"]),E=Ve(h.eventKey),O=Dt(i,E),b=te();return b?O:n.createElement(Ua,h,O)}function Ya(a){var i=a.className,h=a.style,E=n.useContext(G),O=E.prefixCls,b=te();return b?null:n.createElement("li",{className:Be()("".concat(O,"-item-divider"),i),style:h})}var st=Ja;st.Item=jt,st.SubMenu=Xt,st.ItemGroup=za,st.Divider=Ya;var Ga=st,Ha=e("eDIo");function Qa(a,i){var h=a.prefixCls,E=a.editable,O=a.locale,b=a.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(h,"-nav-add"),style:b,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(j){E.onEdit("add",{event:j})}},E.addIcon||"+")}var aa=n.forwardRef(Qa);function Xa(a,i){var h=a.prefixCls,E=a.id,O=a.tabs,b=a.locale,S=a.mobile,j=a.moreIcon,M=j===void 0?"More":j,$=a.moreTransitionName,V=a.style,H=a.className,z=a.editable,ue=a.tabBarGutter,Z=a.rtl,k=a.onTabClick,oe=Object(n.useState)(!1),U=Object(x.a)(oe,2),ne=U[0],ie=U[1],q=Object(n.useState)(null),le=Object(x.a)(q,2),ee=le[0],be=le[1],ae="".concat(E,"-more-popup"),me="".concat(h,"-dropdown"),fe=ee!==null?"".concat(ae,"-").concat(ee):null,se=b==null?void 0:b.dropdownAriaLabel,Q=n.createElement(Ga,{onClick:function(Oe){var we=Oe.key,Te=Oe.domEvent;k(we,Te),ie(!1)},id:ae,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[ee],"aria-label":se!==void 0?se:"expanded dropdown"},O.map(function(Ee){return n.createElement(jt,{key:Ee.key,id:"".concat(ae,"-").concat(Ee.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function de(Ee){for(var Oe=O.filter(function(xe){return!xe.disabled}),we=Oe.findIndex(function(xe){return xe.key===ee})||0,Te=Oe.length,Ae=0;Ae<Te;Ae+=1){we=(we+Ee+Te)%Te;var De=Oe[we];if(!De.disabled){be(De.key);return}}}function ye(Ee){var Oe=Ee.which;if(!ne){[Me.a.DOWN,Me.a.SPACE,Me.a.ENTER].includes(Oe)&&(ie(!0),Ee.preventDefault());return}switch(Oe){case Me.a.UP:de(-1),Ee.preventDefault();break;case Me.a.DOWN:de(1),Ee.preventDefault();break;case Me.a.ESC:ie(!1);break;case Me.a.SPACE:case Me.a.ENTER:ee!==null&&k(ee,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[ee]),Object(n.useEffect)(function(){ne||be(null)},[ne]);var ge=Object(ce.a)({},Z?"marginLeft":"marginRight",ue);O.length||(ge.visibility="hidden",ge.order=1);var Se=Be()(Object(ce.a)({},"".concat(me,"-rtl"),Z)),We=S?null:n.createElement(Ha.default,{prefixCls:me,overlay:Q,trigger:["hover"],visible:ne,transitionName:$,onVisibleChange:ie,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(h,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ae,id:"".concat(E,"-more"),"aria-expanded":ne,onKeyDown:ye},M));return n.createElement("div",{className:Be()("".concat(h,"-nav-operations"),H),style:V,ref:i},We,n.createElement(aa,{prefixCls:h,locale:b,editable:z}))}var Za=n.forwardRef(Xa),Tt=Object(n.createContext)(null),ka=.1,ra=.01,vt=20,ia=Math.pow(.995,vt);function qa(a,i){var h=Object(n.useState)(),E=Object(x.a)(h,2),O=E[0],b=E[1],S=Object(n.useState)(0),j=Object(x.a)(S,2),M=j[0],$=j[1],V=Object(n.useState)(0),H=Object(x.a)(V,2),z=H[0],ue=H[1],Z=Object(n.useState)(),k=Object(x.a)(Z,2),oe=k[0],U=k[1],ne=Object(n.useRef)();function ie(me){var fe=me.touches[0],se=fe.screenX,Q=fe.screenY;b({x:se,y:Q}),window.clearInterval(ne.current)}function q(me){if(!!O){me.preventDefault();var fe=me.touches[0],se=fe.screenX,Q=fe.screenY;b({x:se,y:Q});var de=se-O.x,ye=Q-O.y;i(de,ye);var ge=Date.now();$(ge),ue(ge-M),U({x:de,y:ye})}}function le(){if(!!O&&(b(null),U(null),oe)){var me=oe.x/z,fe=oe.y/z,se=Math.abs(me),Q=Math.abs(fe);if(Math.max(se,Q)<ka)return;var de=me,ye=fe;ne.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ye)<ra){window.clearInterval(ne.current);return}de*=ia,ye*=ia,i(de*vt,ye*vt)},vt)}}var ee=Object(n.useRef)();function be(me){var fe=me.deltaX,se=me.deltaY,Q=0,de=Math.abs(fe),ye=Math.abs(se);de===ye?Q=ee.current==="x"?fe:se:de>ye?(Q=fe,ee.current="x"):(Q=se,ee.current="y"),i(-Q,-Q)&&me.preventDefault()}var ae=Object(n.useRef)(null);ae.current={onTouchStart:ie,onTouchMove:q,onTouchEnd:le,onWheel:be},n.useEffect(function(){function me(de){ae.current.onTouchStart(de)}function fe(de){ae.current.onTouchMove(de)}function se(de){ae.current.onTouchEnd(de)}function Q(de){ae.current.onWheel(de)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",se,{passive:!1}),a.current.addEventListener("touchstart",me,{passive:!1}),a.current.addEventListener("wheel",Q),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",se)}},[])}function _a(){var a=Object(n.useRef)(new Map);function i(E){return a.current.has(E)||a.current.set(E,n.createRef()),a.current.get(E)}function h(E){a.current.delete(E)}return[i,h]}function sa(a,i){var h=n.useRef(a),E=n.useState({}),O=Object(x.a)(E,2),b=O[1];function S(j){var M=typeof j=="function"?j(h.current):j;M!==h.current&&i(M,h.current),h.current=M,b({})}return[h.current,S]}var ua=function(i){var h=i.position,E=i.prefixCls,O=i.extra;if(!O)return null;var b,S=O;return h==="right"&&(b=S.right||!S.left&&S||null),h==="left"&&(b=S.left||null),b?n.createElement("div",{className:"".concat(E,"-extra-content")},b):null};function er(a,i){var h,E=n.useContext(Tt),O=E.prefixCls,b=E.tabs,S=a.className,j=a.style,M=a.id,$=a.animated,V=a.activeKey,H=a.rtl,z=a.extra,ue=a.editable,Z=a.locale,k=a.tabPosition,oe=a.tabBarGutter,U=a.children,ne=a.onTabClick,ie=a.onTabScroll,q=Object(n.useRef)(),le=Object(n.useRef)(),ee=Object(n.useRef)(),be=Object(n.useRef)(),ae=_a(),me=Object(x.a)(ae,2),fe=me[0],se=me[1],Q=k==="top"||k==="bottom",de=sa(0,function(re,_){Q&&ie&&ie({direction:re>_?"left":"right"})}),ye=Object(x.a)(de,2),ge=ye[0],Se=ye[1],We=sa(0,function(re,_){!Q&&ie&&ie({direction:re>_?"top":"bottom"})}),Ee=Object(x.a)(We,2),Oe=Ee[0],we=Ee[1],Te=Object(n.useState)(0),Ae=Object(x.a)(Te,2),De=Ae[0],xe=Ae[1],_e=Object(n.useState)(0),$e=Object(x.a)(_e,2),Je=$e[0],He=$e[1],Le=Object(n.useState)(0),jn=Object(x.a)(Le,2),an=jn[0],Xe=jn[1],ln=Object(n.useState)(0),En=Object(x.a)(ln,2),Cn=En[0],Ne=En[1],Ye=Object(n.useState)(null),en=Object(x.a)(Ye,2),Ze=en[0],Ln=en[1],Un=Object(n.useState)(null),xn=Object(x.a)(Un,2),rn=xn[0],Dn=xn[1],on=Object(n.useState)(0),An=Object(x.a)(on,2),nn=An[0],sn=An[1],Pn=Object(n.useState)(0),mn=Object(x.a)(Pn,2),ke=mn[0],Ge=mn[1],zn=Rn(new Map),Yn=Object(x.a)(zn,2),nt=Yn[0],On=Yn[1],yn=rt(b,nt,De),Gn="".concat(O,"-nav-operations-hidden"),Fn=0,fn=0;Q?H?(Fn=0,fn=Math.max(0,De-Ze)):(Fn=Math.min(0,Ze-De),fn=0):(Fn=Math.min(0,rn-Je),fn=0);function Hn(re){return re<Fn?Fn:re>fn?fn:re}var Bn=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(x.a)(Qn,2),Nn=dn[0],he=dn[1];function Re(){he(Date.now())}function Ke(){window.clearTimeout(Bn.current)}qa(q,function(re,_){function Ce(Ue,un){Ue(function(Jn){var kn=Hn(Jn+un);return kn})}if(Q){if(Ze>=De)return!1;Ce(Se,re)}else{if(rn>=Je)return!1;Ce(we,_)}return Ke(),Re(),!0}),Object(n.useEffect)(function(){return Ke(),Nn&&(Bn.current=window.setTimeout(function(){he(0)},100)),Ke},[Nn]);function tn(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,_=yn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(Q){var Ce=ge;H?_.right<ge?Ce=_.right:_.right+_.width>ge+Ze&&(Ce=_.right+_.width-Ze):_.left<-ge?Ce=-_.left:_.left+_.width>-ge+Ze&&(Ce=-(_.left+_.width-Ze)),we(0),Se(Hn(Ce))}else{var Ue=Oe;_.top<-Oe?Ue=-_.top:_.top+_.height>-Oe+rn&&(Ue=-(_.top+_.height-rn)),Se(0),we(Hn(Ue))}}var Xn=N(yn,{width:Ze,height:rn,left:ge,top:Oe},{width:an,height:Cn},{width:nn,height:ke},Object(ve.a)(Object(ve.a)({},a),{},{tabs:b})),gt=Object(x.a)(Xn,2),Mt=gt[0],Wt=gt[1],Lt=b.map(function(re){var _=re.key;return n.createElement(Wn,{id:M,prefixCls:O,key:_,rtl:H,tab:re,closable:re.closable,editable:ue,active:_===V,tabPosition:k,tabBarGutter:oe,renderWrapper:U,removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:fe(_),onClick:function(Ue){ne(_,Ue)},onRemove:function(){se(_)},onFocus:function(){tn(_),Re(),H||(q.current.scrollLeft=0),q.current.scrollTop=0}})}),tt=Mn(function(){var re,_,Ce,Ue,un,Jn,kn,$t,Vt,lr=((re=q.current)===null||re===void 0?void 0:re.offsetWidth)||0,or=((_=q.current)===null||_===void 0?void 0:_.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Ue=be.current)===null||Ue===void 0?void 0:Ue.offsetHeight)||0,dr=((un=ee.current)===null||un===void 0?void 0:un.offsetWidth)||0,cr=((Jn=ee.current)===null||Jn===void 0?void 0:Jn.offsetHeight)||0;Ln(lr),Dn(or),sn(ma),Ge(fa);var pa=(((kn=le.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,ha=((($t=le.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-fa;xe(pa),He(ha);var va=(Vt=ee.current)===null||Vt===void 0?void 0:Vt.className.includes(Gn);Xe(pa-(va?0:dr)),Ne(ha-(va?0:cr)),On(function(){var ga=new Map;return b.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=b.slice(0,Mt),ut=b.slice(Wt+1),bt=[].concat(Object(hn.a)(yt),Object(hn.a)(ut)),xt=Object(n.useState)(),Et=Object(x.a)(xt,2),Ct=Et[0],at=Et[1],In=yn.get(V),Ot=Object(n.useRef)();function Ft(){Qe.a.cancel(Ot.current)}Object(n.useEffect)(function(){var re={};return In&&(Q?(H?re.right=In.right:re.left=In.left,re.width=In.width):(re.top=In.top,re.height=In.height)),Ft(),Ot.current=Object(Qe.a)(function(){at(re)}),Ft},[In,Q,H]),Object(n.useEffect)(function(){tn()},[V,In,yn,Q]),Object(n.useEffect)(function(){tt()},[H,oe,V,b.map(function(re){return re.key}).join("_")]);var lt=!!bt.length,Zn="".concat(O,"-nav-wrap"),ot,dt,St,Rt;return Q?H?(dt=ge>0,ot=ge+Ze<De):(ot=ge<0,dt=-ge+Ze<De):(St=Oe<0,Rt=-Oe+rn<Je),n.createElement("div",{ref:i,role:"tablist",className:Be()("".concat(O,"-nav"),S),style:j,onKeyDown:function(){Re()}},n.createElement(ua,{position:"left",extra:z,prefixCls:O}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Be()(Zn,(h={},Object(ce.a)(h,"".concat(Zn,"-ping-left"),ot),Object(ce.a)(h,"".concat(Zn,"-ping-right"),dt),Object(ce.a)(h,"".concat(Zn,"-ping-top"),St),Object(ce.a)(h,"".concat(Zn,"-ping-bottom"),Rt),h)),ref:q},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:le,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Oe,"px)"),transition:Nn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:O,locale:Z,editable:ue,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Be()("".concat(O,"-ink-bar"),Object(ce.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Za,Object(L.a)({},a,{ref:ee,prefixCls:O,tabs:bt,className:!lt&&Gn})),n.createElement(ua,{position:"right",extra:z,prefixCls:O}))}var la=n.forwardRef(er);function nr(a){var i=a.id,h=a.activeKey,E=a.animated,O=a.tabPosition,b=a.rtl,S=a.destroyInactiveTabPane,j=n.useContext(Tt),M=j.prefixCls,$=j.tabs,V=E.tabPane,H=$.findIndex(function(z){return z.key===h});return n.createElement("div",{className:Be()("".concat(M,"-content-holder"))},n.createElement("div",{className:Be()("".concat(M,"-content"),"".concat(M,"-content-").concat(O),Object(ce.a)({},"".concat(M,"-content-animated"),V)),style:H&&V?Object(ce.a)({},b?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:M,tabKey:z.key,id:i,animated:V,active:z.key===h,destroyInactiveTabPane:S})})))}function oa(a){var i=a.prefixCls,h=a.forceRender,E=a.className,O=a.style,b=a.id,S=a.active,j=a.animated,M=a.destroyInactiveTabPane,$=a.tabKey,V=a.children,H=n.useState(h),z=Object(x.a)(H,2),ue=z[0],Z=z[1];n.useEffect(function(){S?Z(!0):M&&Z(!1)},[S,M]);var k={};return S||(j?(k.visibility="hidden",k.height=0,k.overflowY="hidden"):k.display="none"),n.createElement("div",{id:b&&"".concat(b,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":b&&"".concat(b,"-tab-").concat($),"aria-hidden":!S,style:Object(ve.a)(Object(ve.a)({},k),O),className:Be()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),E)},(S||ue||h)&&V)}var da=0;function tr(a){return Object(wn.a)(a).map(function(i){if(n.isValidElement(i)){var h=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:h},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(a,i){var h,E=a.id,O=a.prefixCls,b=O===void 0?"rc-tabs":O,S=a.className,j=a.children,M=a.direction,$=a.activeKey,V=a.defaultActiveKey,H=a.editable,z=a.animated,ue=z===void 0?{inkBar:!0,tabPane:!1}:z,Z=a.tabPosition,k=Z===void 0?"top":Z,oe=a.tabBarGutter,U=a.tabBarStyle,ne=a.tabBarExtraContent,ie=a.locale,q=a.moreIcon,le=a.moreTransitionName,ee=a.destroyInactiveTabPane,be=a.renderTabBar,ae=a.onChange,me=a.onTabClick,fe=a.onTabScroll,se=Object(Pe.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Q=tr(j),de=M==="rtl",ye;ue===!1?ye={inkBar:!1,tabPane:!1}:ue===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Ie.a)(ue)==="object"?ue:{});var ge=Object(n.useState)(!1),Se=Object(x.a)(ge,2),We=Se[0],Ee=Se[1];Object(n.useEffect)(function(){Ee(Object(Kn.a)())},[]);var Oe=Object(Sn.a)(function(){var Ne;return(Ne=Q[0])===null||Ne===void 0?void 0:Ne.key},{value:$,defaultValue:V}),we=Object(x.a)(Oe,2),Te=we[0],Ae=we[1],De=Object(n.useState)(function(){return Q.findIndex(function(Ne){return Ne.key===Te})}),xe=Object(x.a)(De,2),_e=xe[0],$e=xe[1];Object(n.useEffect)(function(){var Ne=Q.findIndex(function(en){return en.key===Te});if(Ne===-1){var Ye;Ne=Math.max(0,Math.min(_e,Q.length-1)),Ae((Ye=Q[Ne])===null||Ye===void 0?void 0:Ye.key)}$e(Ne)},[Q.map(function(Ne){return Ne.key}).join("_"),Te,_e]);var Je=Object(Sn.a)(null,{value:E}),He=Object(x.a)(Je,2),Le=He[0],jn=He[1],an=k;We&&!["left","right"].includes(k)&&(an="top"),Object(n.useEffect)(function(){E||(jn("rc-tabs-".concat(da)),da+=1)},[]);function Xe(Ne,Ye){me==null||me(Ne,Ye),Ae(Ne),ae==null||ae(Ne)}var ln={id:Le,activeKey:Te,animated:ye,tabPosition:an,rtl:de,mobile:We},En,Cn=Object(ve.a)(Object(ve.a)({},ln),{},{editable:H,locale:ie,moreIcon:q,moreTransitionName:le,tabBarGutter:oe,onTabClick:Xe,onTabScroll:fe,extra:ne,style:U,panes:j});return be?En=be(Cn,la):En=n.createElement(la,Cn),n.createElement(Tt.Provider,{value:{tabs:Q,prefixCls:b}},n.createElement("div",Object(L.a)({ref:i,id:E,className:Be()(b,"".concat(b,"-").concat(an),(h={},Object(ce.a)(h,"".concat(b,"-mobile"),We),Object(ce.a)(h,"".concat(b,"-editable"),H),Object(ce.a)(h,"".concat(b,"-rtl"),de),h),S)},se),En,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:ee},ln,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ir=rr,wt=e("MZF8"),gn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function Kt(a,i){var h,E=(h=a.match(/\.(\w+)$/))===null||h===void 0?void 0:h[1];return E||(E=i.tsx?"tsx":"jsx"),E}var ur=a=>{var i,h,E,O=Object(n.useRef)(),b=Object(n.useContext)(gn.context),S=b.locale,j=Object(gn.useLocaleProps)(S,a),M=Object(gn.useDemoUrl)(j.identifier),$=j.demoUrl||M,V=(wt.a===null||wt.a===void 0?void 0:wt.a.location.hash)==="#".concat(j.identifier),H=Object.keys(j.sources).length===1,z=Object(gn.useCodeSandbox)((i=j.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:j),ue=Object(gn.useRiddle)((h=j.hideActions)!==null&&h!==void 0&&h.includes("RIDDLE")?null:j),Z=Object(gn.useMotions)(j.motions||[],O.current),k=Object(J.default)(Z,2),oe=k[0],U=k[1],ne=Object(gn.useCopy)(),ie=Object(J.default)(ne,2),q=ie[0],le=ie[1],ee=Object(n.useState)("_"),be=Object(J.default)(ee,2),ae=be[0],me=be[1],fe=Object(n.useState)(Kt(ae,j.sources[ae])),se=Object(J.default)(fe,2),Q=se[0],de=se[1],ye=Object(n.useState)(Boolean(j.defaultShowCode)),ge=Object(J.default)(ye,2),Se=ge[0],We=ge[1],Ee=Object(n.useState)(Math.random()),Oe=Object(J.default)(Ee,2),we=Oe[0],Te=Oe[1],Ae=j.sources[ae][Q]||j.sources[ae].content,De=Object(gn.useTSPlaygroundUrl)(S,Ae),xe=Object(n.useRef)(),_e=Object(gn.usePrefersColor)(),$e=Object(J.default)(_e,1),Je=$e[0];Object(n.useEffect)(()=>{Te(Math.random())},[Je]);function He(Le){me(Le),de(Kt(Le,j.sources[Le]))}return p.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&p.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),p.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?p.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:we,src:$,ref:xe}):j.children),p.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&p.a.createElement(gn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&p.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),p.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&p.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),ue&&p.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ue}),j.motions&&p.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>oe()}),j.iframe&&p.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((E=j.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&p.a.createElement(gn.Link,{target:"_blank",to:$},p.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),p.a.createElement("span",null),p.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>q(Ae)}),Q==="tsx"&&Se&&p.a.createElement(gn.Link,{target:"_blank",to:De},p.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),p.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Se)})),Se&&p.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&p.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ae,onChange:He},Object.keys(j.sources).map(Le=>p.a.createElement(oa,{tab:Le==="_"?"index.".concat(Kt(Le,j.sources[Le])):Le,key:Le}))),p.a.createElement("div",{className:"__dumi-default-previewer-source"},p.a.createElement(sr.a,{code:Ae,lang:Q,showCopy:!1}))))},Er=bn.default=ur},"80pN":function(Tn,bn,e){"use strict";(function(J){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),p=e("q1tI"),L=e("i8i4"),ce=e("QCnb");function x(v){for(var T="https://reactjs.org/docs/error-decoder.html?invariant="+v,K=1;K<arguments.length;K++)T+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+v+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ie=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ie.hasOwnProperty("ReactCurrentDispatcher")||(Ie.ReactCurrentDispatcher={current:null}),Ie.hasOwnProperty("ReactCurrentBatchConfig")||(Ie.ReactCurrentBatchConfig={suspense:null});function Pe(v){var T=v,K=v;if(v.alternate)for(;T.return;)T=T.return;else{v=T;do T=v,(T.effectTag&1026)!=0&&(K=T.return),v=T.return;while(v)}return T.tag===3?K:null}function ve(v){if(Pe(v)!==v)throw Error(x(188))}function pn(v){var T=v.alternate;if(!T){if(T=Pe(v),T===null)throw Error(x(188));return T!==v?null:v}for(var K=v,pe=T;;){var te=K.return;if(te===null)break;var je=te.alternate;if(je===null){if(pe=te.return,pe!==null){K=pe;continue}break}if(te.child===je.child){for(je=te.child;je;){if(je===K)return ve(te),v;if(je===pe)return ve(te),T;je=je.sibling}throw Error(x(188))}if(K.return!==pe.return)K=te,pe=je;else{for(var Ve=!1,ze=te.child;ze;){if(ze===K){Ve=!0,K=te,pe=je;break}if(ze===pe){Ve=!0,pe=te,K=je;break}ze=ze.sibling}if(!Ve){for(ze=je.child;ze;){if(ze===K){Ve=!0,K=je,pe=te;break}if(ze===pe){Ve=!0,pe=je,K=te;break}ze=ze.sibling}if(!Ve)throw Error(x(189))}}if(K.alternate!==pe)throw Error(x(190))}if(K.tag!==3)throw Error(x(188));return K.stateNode.current===K?v:T}function Be(){return!0}function wn(){return!1}function Kn(v,T,K,pe){this.dispatchConfig=v,this._targetInst=T,this.nativeEvent=K,v=this.constructor.Interface;for(var te in v)v.hasOwnProperty(te)&&((T=v[te])?this[te]=T(K):te==="target"?this.target=pe:this[te]=K[te]);return this.isDefaultPrevented=(K.defaultPrevented!=null?K.defaultPrevented:K.returnValue===!1)?Be:wn,this.isPropagationStopped=wn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var v=this.nativeEvent;v&&(v.preventDefault?v.preventDefault():typeof v.returnValue!="unknown"&&(v.returnValue=!1),this.isDefaultPrevented=Be)},stopPropagation:function(){var v=this.nativeEvent;v&&(v.stopPropagation?v.stopPropagation():typeof v.cancelBubble!="unknown"&&(v.cancelBubble=!0),this.isPropagationStopped=Be)},persist:function(){this.isPersistent=Be},isPersistent:wn,destructor:function(){var v=this.constructor.Interface,T;for(T in v)this[T]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=wn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(v){return v.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(v){function T(){}function K(){return pe.apply(this,arguments)}var pe=this;T.prototype=pe.prototype;var te=new T;return n(te,K.prototype),K.prototype=te,K.prototype.constructor=K,K.Interface=n({},pe.Interface,v),K.extend=pe.extend,Qe(K),K},Qe(Kn);function Sn(v,T,K,pe){if(this.eventPool.length){var te=this.eventPool.pop();return this.call(te,v,T,K,pe),te}return new this(v,T,K,pe)}function hn(v){if(!(v instanceof this))throw Error(x(279));v.destructor(),10>this.eventPool.length&&this.eventPool.push(v)}function Qe(v){v.eventPool=[],v.getPooled=Sn,v.release=hn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(v,T){var K={};return K[v.toLowerCase()]=T.toLowerCase(),K["Webkit"+v]="webkit"+T,K["Moz"+v]="moz"+T,K}var Rn={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},Me={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function Wn(v){if(Me[v])return Me[v];if(!Rn[v])return v;var T=Rn[v],K;for(K in T)if(T.hasOwnProperty(K)&&K in qn)return Me[v]=T[K];return v}var _n=Wn("animationend"),rt=Wn("animationiteration"),it=Wn("animationstart"),N=Wn("transitionend"),A=null;function B(v){if(A===null)try{var T=("require"+Math.random()).slice(0,7);A=(J&&J[T])("timers").setImmediate}catch(K){A=function(pe){var te=new MessageChannel;te.port1.onmessage=pe,te.port2.postMessage(void 0)}}return A(v)}var d=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,u=d[11],f=d[12],y=L.unstable_batchedUpdates,C=Ie.IsSomeRendererActing,r=typeof ce.unstable_flushAllWithoutAsserting=="function",l=ce.unstable_flushAllWithoutAsserting||function(){for(var v=!1;u();)v=!0;return v};function s(v){try{l(),B(function(){l()?s(v):v()})}catch(T){v(T)}}var I=0,w=!1,F=L.findDOMNode,o=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,R=o[0],m=o[4],t=o[5],g=o[6],c=o[7],D=o[8],P=o[9],W=o[10];function X(){}function Y(v,T){if(!v)return[];if(v=pn(v),!v)return[];for(var K=v,pe=[];;){if(K.tag===5||K.tag===6||K.tag===1||K.tag===0){var te=K.stateNode;T(te)&&pe.push(te)}if(K.child)K.child.return=K,K=K.child;else{if(K===v)return pe;for(;!K.sibling;){if(!K.return||K.return===v)return pe;K=K.return}K.sibling.return=K.return,K=K.sibling}}}function G(v,T){if(v&&!v._reactInternalFiber){var K=""+v;throw v=Array.isArray(v)?"an array":v&&v.nodeType===1&&v.tagName?"a DOM node":K==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":K,Error(x(286,T,v))}}var Fe={renderIntoDocument:function(v){var T=document.createElement("div");return L.render(v,T)},isElement:function(v){return p.isValidElement(v)},isElementOfType:function(v,T){return p.isValidElement(v)&&v.type===T},isDOMComponent:function(v){return!(!v||v.nodeType!==1||!v.tagName)},isDOMComponentElement:function(v){return!!(v&&p.isValidElement(v)&&v.tagName)},isCompositeComponent:function(v){return Fe.isDOMComponent(v)?!1:v!=null&&typeof v.render=="function"&&typeof v.setState=="function"},isCompositeComponentWithType:function(v,T){return Fe.isCompositeComponent(v)?v._reactInternalFiber.type===T:!1},findAllInRenderedTree:function(v,T){return G(v,"findAllInRenderedTree"),v?Y(v._reactInternalFiber,T):[]},scryRenderedDOMComponentsWithClass:function(v,T){return G(v,"scryRenderedDOMComponentsWithClass"),Fe.findAllInRenderedTree(v,function(K){if(Fe.isDOMComponent(K)){var pe=K.className;typeof pe!="string"&&(pe=K.getAttribute("class")||"");var te=pe.split(/\s+/);if(!Array.isArray(T)){if(T===void 0)throw Error(x(11));T=T.split(/\s+/)}return T.every(function(je){return te.indexOf(je)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(v,T){if(G(v,"findRenderedDOMComponentWithClass"),v=Fe.scryRenderedDOMComponentsWithClass(v,T),v.length!==1)throw Error("Did not find exactly one match (found: "+v.length+") for class:"+T);return v[0]},scryRenderedDOMComponentsWithTag:function(v,T){return G(v,"scryRenderedDOMComponentsWithTag"),Fe.findAllInRenderedTree(v,function(K){return Fe.isDOMComponent(K)&&K.tagName.toUpperCase()===T.toUpperCase()})},findRenderedDOMComponentWithTag:function(v,T){if(G(v,"findRenderedDOMComponentWithTag"),v=Fe.scryRenderedDOMComponentsWithTag(v,T),v.length!==1)throw Error("Did not find exactly one match (found: "+v.length+") for tag:"+T);return v[0]},scryRenderedComponentsWithType:function(v,T){return G(v,"scryRenderedComponentsWithType"),Fe.findAllInRenderedTree(v,function(K){return Fe.isCompositeComponentWithType(K,T)})},findRenderedComponentWithType:function(v,T){if(G(v,"findRenderedComponentWithType"),v=Fe.scryRenderedComponentsWithType(v,T),v.length!==1)throw Error("Did not find exactly one match (found: "+v.length+") for componentType:"+T);return v[0]},mockComponent:function(v,T){return T=T||v.mockTagName||"div",v.prototype.render.mockImplementation(function(){return p.createElement(T,null,this.props.children)}),this},nativeTouchData:function(v,T){return{touches:[{pageX:v,pageY:T}]}},Simulate:null,SimulateNative:{},act:function(v){function T(){I--,C.current=K,f.current=pe}w===!1&&(w=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),I++;var K=C.current,pe=f.current;C.current=!0,f.current=!0;try{var te=y(v)}catch(je){throw T(),je}if(te!==null&&typeof te=="object"&&typeof te.then=="function")return{then:function(je,Ve){te.then(function(){1<I||r===!0&&K===!0?(T(),je()):s(function(ze){T(),ze?Ve(ze):je()})},function(ze){T(),Ve(ze)})}};try{I!==1||r!==!1&&K!==!1||l(),T()}catch(je){throw T(),je}return{then:function(je){je()}}}};function qe(v){return function(T,K){if(p.isValidElement(T))throw Error(x(228));if(Fe.isCompositeComponent(T))throw Error(x(229));var pe=m[v],te=new X;te.target=T,te.type=v.toLowerCase();var je=R(T),Ve=new Kn(pe,je,te,T);Ve.persist(),n(Ve,K),pe.phasedRegistrationNames?t(Ve):g(Ve),L.unstable_batchedUpdates(function(){c(T),W(Ve)}),D()}}Fe.Simulate={};for(var cn in m)Fe.Simulate[cn]=qe(cn);function vn(v,T){return function(K,pe){var te=new X(v);n(te,pe),Fe.isDOMComponent(K)?(K=F(K),te.target=K,P(T,1,document,te)):K.tagName&&(te.target=K,P(T,1,document,te))}}[["abort","abort"],[_n,"animationEnd"],[rt,"animationIteration"],[it,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[N,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(v){var T=v[1];Fe.SimulateNative[T]=vn(T,v[0])}),J.exports=Fe.default||Fe}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,bn,e){"use strict";e.r(bn);var J=e("9og8"),n=e("WmNS"),p=e.n(n),L=e("LtsZ"),ce=`import React, { useRef } from 'react';
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
      width: '25%',
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

export default Demo;`,x=`import { get, set, cloneDeep } from 'lodash-es';

// \u540E\u9762\u4E09\u4E2A\u53C2\u6570\u90FD\u662F\u5185\u90E8\u9012\u5F52\u4F7F\u7528\u7684\uFF0C\u5C06schema\u7684\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u6210\u4E00\u5C42, \u6BCF\u4E2Aitem\u7684\u7ED3\u6784
// {
//   parent: '#',
//   schema: ...,
//   children: []
// }

// TODO: \u53D1\u5E03\u540E\u53BB\u6389
window.log1 = value => {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = value => {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = value => {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = value => {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return schema && schema.type === 'object' && schema.properties;
}

// TODO: \u652F\u6301\u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u9879
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: \u68C0\u9A8C\u662F\u5426\u4E22\u8FDB\u53BB\u5404\u79CDschema\u90FD\u80FD\u515C\u5E95\u4E0D\u4F1Acrash
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema); // TODO: \u662F\u5426\u9700\u8981deepClone\uFF0C\u8FD9\u4E2A\u82B1\u8D39\u662F\u4E0D\u662F\u6709\u70B9\u5927
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // \u7ED9\u751F\u6210\u7684schema\u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0C\u65B9\u4FBF\u4ECEschema\u4E2D\u76F4\u63A5\u8BFB\u53D6
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.items.properties = {};
  }

  const rules = Array.isArray(schema.rules) ? [...schema.rules] : [];
  if (['boolean', 'function', 'string'].indexOf(typeof schema.required) > -1) {
    rules.push({ required: schema.required }); // TODO: \u4E07\u4E00\u5185\u90E8\u5DF2\u7ECF\u7528\u91CD\u590D\u7684required\u89C4\u5219\uFF1F
  }

  if (schema.type) {
    // Check: \u4E3A\u5565\u4E00\u5B9A\u8981\u6709type\uFF1F
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema: schema, children, rules };
  }
  return result;
}

//////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u514B\u9686\u5BF9\u8C61
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

export const clone = cloneDeep;
// export const clone = clone1;

// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

// \u6DF1\u5EA6\u5BF9\u6BD4
export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

// \u65F6\u95F4\u7EC4\u4EF6
export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

// ----------------- schema \u76F8\u5173

// \u5408\u5E76propsSchema\u548CUISchema\u3002\u7531\u4E8E\u4E24\u8005\u7684\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u5408\u5E76\u4E3A\u4E00\u4E2A\u5927schema\u80FD\u7B80\u5316\u5185\u90E8\u5904\u7406
export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren(schema) {
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
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// \u5408\u5E76\u591A\u4E2Aschema\u6811\uFF0C\u6BD4\u5982\u4E00\u4E2Aschema\u7684\u6811\u8282\u70B9\u662F\u53E6\u4E00\u4E2Aschema
export function combine() {}

// \u4EE3\u66FFeval\u7684\u51FD\u6570
export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

// \u89E3\u6790\u51FD\u6570\u5B57\u7B26\u4E32\u503C
export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

// \u5224\u65ADschema\u7684\u503C\u662F\u662F\u5426\u662F\u201C\u51FD\u6570\u201D
// JSON\u65E0\u6CD5\u4F7F\u7528\u51FD\u6570\u503C\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u4F7F\u7528"{{...}}"\u6765\u6807\u8BB0\u4E3A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528@\u6807\u8BB0\uFF0C\u4E0D\u63A8\u8350\u3002
export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // \u4E0D\u518D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u4E86\uFF01
  if (typeof func !== 'string') return false;
  // \u8FD9\u6837\u7684pattern {{.....}}
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (
    typeof func === 'string' &&
    func.match(pattern) &&
    !func.match(reg1) &&
    !func.match(reg2)
  ) {
    return true;
  }
  return false;
}

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return func;
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = (schema, shallow = true) => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (
        typeof key === 'string' &&
        key.toLowerCase().indexOf('props') > -1
      ) {
        const propsObj = schema[key];
        if (isObject(propsObj)) {
          return Object.keys(propsObj).some(k => {
            return isExpression(propsObj[k]);
          });
        }
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }
      return false;
    });
  } else {
    return false;
  }
};

// TODO: \u4E24\u4E2A\u4F18\u5316\uFF0C1. \u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684path\u6765\u5224\u65AD\uFF0C\u907F\u514D\u4E00\u4E9B\u91CD\u590D\u8BA1\u7B97
export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      // TODO: dataPath \u8FD9\u8FB9\u8981\u5904\u7406\u4E00\u4E0B\uFF0C\u5426\u5219rootValue\u7C7B\u7684\u6CA1\u6709\u6548\u679C
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
      // console.log(
      //   formData.materialType,
      //   dataPath,
      //   parseSingleExpression(value, formData, dataPath)
      // );
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

// \u5224\u65ADschema\u4E2D\u662F\u5426\u6709\u5C5E\u6027\u503C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

// \u4F8B\u5982\u5F53\u524Ditem\u7684id = '#/obj/input'  propName: 'ui:labelWidth' \u5F80\u4E0A\u4E00\u76F4\u627E\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u662Fundefined\u7684\u503C TODO: \u770B\u770B\u662F\u5426ok
export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren2(schema) {
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

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = path => {
  try {
    const keyList = path.split('.');
    const last = keyList.slice(-1)[0];
    return last;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        // \u6682\u65F6\u5148\u53BB\u6389\uFF0C\u5E94\u8BE5\u6CA1\u4E8B\u4E86\uFF0C\u5728range\u7EC4\u4EF6\u7684\u6E90\u5934\u4E0A\u628A\u5947\u602A\u7684case\u5E72\u6389\u4E86
        // const rangeValidator = {
        //   validator: (rule, value) => {
        //     const rangeRequired = schema.required === true && isRequired;
        //     // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
        //     // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [undefined,undefined]
        //     const notValid1 = value[0] === '' && value[1] === '';
        //     const notValid2 = value[0] === undefined && value[1] === undefined;
        //     if (rangeRequired) {
        //       if (!value) return false;
        //       if (Array.isArray(value)) {
        //         if (notValid1 || notValid2) {
        //           return false;
        //         }
        //         return true;
        //       }
        //       return true;
        //     } else {
        //       return true;
        //     }
        //   },
        //   type: 'array',
        //   message: '\${title}\u5FC5\u586B',
        // };
        // singleResult = rangeValidator;
        singleResult.type = 'array';
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData, _path = '') => {
  let result = {};
  let _formData = clone(formData);
  result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(
        childSchema,
        childData,
        \`\${_path}.\${key}\`
      );
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean') {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (JSON.stringify(schema.props) === '{}') {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u65E7\u7248schema\u8F6C\u65B0\u7248schema
export const parseExpression = (schema, formData) => {
  let schema1 = parseRootValue(schema);
  let schema2 = replaceParseValue(schema1);
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};`,Ie=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Pe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ve=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,pn=`export const basic = {
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
};`,Be=`import React, { Component } from 'react';
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

export default Root;`,wn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Kn=`{
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
}`,Sn=`import { Select } from 'antd';
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

export default SearchInput;`,hn=`import React from 'react';
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

export default Demo;`,Qe=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,$n=`.markdown p {
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
}`,Mn=`import React from 'react';
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
      width: '25%',
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

export default Demo;`,Rn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Me=`import React from 'react';
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

export default Demo;`,qn=`import React from 'react';
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

export default Demo;`,Wn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,_n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,rt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,it=bn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"oLxE"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l;return p.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return r=function(F,o){if(!o&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var R=C(o);if(R&&R.has(F))return R.get(F);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in F)if(g!=="default"&&Object.prototype.hasOwnProperty.call(F,g)){var c=t?Object.getOwnPropertyDescriptor(F,g):null;c&&(c.get||c.set)?Object.defineProperty(m,g,c):m[g]=F[g]}return m.default=F,R&&R.set(F,m),m},C=function(F){if(typeof WeakMap!="function")return null;var o=new WeakMap,R=new WeakMap;return(C=function(t){return t?R:o})(F)},d=e("K+nK"),I.t0=d,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,u=(0,I.t0)(I.t1),I.t2=r,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,f=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return y=I.sent,l=function(){var F=(0,f.useState)("Line"),o=(0,u.default)(F,2),R=o[0],m=o[1],t={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[R];return f.default.createElement("div",null,f.default.createElement("div",{style:{marginBottom:10}},f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),f.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},I.abrupt("return",l);case 18:case"end":return I.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return u.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(I,w,F){return u.default.createElement("div",null,u.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),u.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},I),u.default.createElement("p",null,JSON.stringify(w)),u.default.createElement("p",null,JSON.stringify(F)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l;return p.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return r=function(F,o){if(!o&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var R=C(o);if(R&&R.has(F))return R.get(F);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in F)if(g!=="default"&&Object.prototype.hasOwnProperty.call(F,g)){var c=t?Object.getOwnPropertyDescriptor(F,g):null;c&&(c.get||c.set)?Object.defineProperty(m,g,c):m[g]=F[g]}return m.default=F,R&&R.set(F,m),m},C=function(F){if(typeof WeakMap!="function")return null;var o=new WeakMap,R=new WeakMap;return(C=function(t){return t?R:o})(F)},d=e("K+nK"),I.t0=d,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,u=(0,I.t0)(I.t1),I.t2=r,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,f=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return y=I.sent,l=function(){var F=(0,f.useState)(!1),o=(0,u.default)(F,2),R=o[0],m=o[1];return f.default.createElement(f.default.Fragment,null,f.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",f.default.createElement("input",{type:"checkbox",value:R,onChange:function(){return m(!R)}})),f.default.createElement(y.PivotTable,{leftExpandable:R,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},I.abrupt("return",l);case 18:case"end":return I.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w,F,o,R,m;return p.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return F=function(D,P){if(!P&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var W=w(P);if(W&&W.has(D))return W.get(D);var X={},Y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in D)if(G!=="default"&&Object.prototype.hasOwnProperty.call(D,G)){var Fe=Y?Object.getOwnPropertyDescriptor(D,G):null;Fe&&(Fe.get||Fe.set)?Object.defineProperty(X,G,Fe):X[G]=D[G]}return X.default=D,W&&W.set(D,X),X},w=function(D){if(typeof WeakMap!="function")return null;var P=new WeakMap,W=new WeakMap;return(w=function(Y){return Y?W:P})(D)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,u=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(82).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,f=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(83).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,y=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(73).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,C=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(71).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,r=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,l=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return s=g.sent,g.t12=F,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,I=(0,g.t12)(g.t13),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(c){(0,C.default)(P,c);var D=(0,r.default)(P);function P(){return(0,f.default)(this,P),D.apply(this,arguments)}return(0,y.default)(P,[{key:"render",value:function(){var X=this.props.form;return l.default.createElement("div",null,l.default.createElement(I.default,{form:X,schema:o}),l.default.createElement(u.default,{type:"primary",onClick:X.submit},"\u63D0\u4EA4"))}}]),P}(l.default.Component),m=(0,I.connectForm)(R),g.abrupt("return",m);case 47:case"end":return g.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w;return p.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=r(t);if(g&&g.has(m))return g.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in m)if(P!=="default"&&Object.prototype.hasOwnProperty.call(m,P)){var W=D?Object.getOwnPropertyDescriptor(m,P):null;W&&(W.get||W.set)?Object.defineProperty(c,P,W):c[P]=m[P]}return c.default=m,g&&g.set(m,c),c},r=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(D){return D?g:t})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,f=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=o.sent,o.t4=l,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,C=(0,o.t4)(o.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(){var m=(0,C.useForm)();return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:s}),f.default.createElement(u.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=I,o.abrupt("return",w);case 27:case"end":return o.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w;return p.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=r(t);if(g&&g.has(m))return g.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in m)if(P!=="default"&&Object.prototype.hasOwnProperty.call(m,P)){var W=D?Object.getOwnPropertyDescriptor(m,P):null;W&&(W.get||W.set)?Object.defineProperty(c,P,W):c[P]=m[P]}return c.default=m,g&&g.set(m,c),c},r=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(D){return D?g:t})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,f=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=o.sent,o.t4=l,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,C=(0,o.t4)(o.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},I=function(){var m=(0,C.useForm)(),t=function(c,D){D.length>0?alert("errors:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(c,null,2))};return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:s,onFinish:t}),f.default.createElement(u.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=I,o.abrupt("return",w);case 27:case"end":return o.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s;return p.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return l=function(){var o=(0,f.useForm)(),R=function(t,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(t))};return u.default.createElement("div",null,u.default.createElement(f.default,{form:o,schema:r,onFinish:R}),u.default.createElement("button",{onClick:o.submit},"\u63D0\u4EA4"))},C=function(o,R){if(!R&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=y(R);if(m&&m.has(o))return m.get(o);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in o)if(c!=="default"&&Object.prototype.hasOwnProperty.call(o,c)){var D=g?Object.getOwnPropertyDescriptor(o,c):null;D&&(D.get||D.set)?Object.defineProperty(t,c,D):t[c]=o[c]}return t.default=o,m&&m.set(o,t),t},y=function(o){if(typeof WeakMap!="function")return null;var R=new WeakMap,m=new WeakMap;return(y=function(g){return g?m:R})(o)},d=e("K+nK"),w.t0=d,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,u=(0,w.t0)(w.t1),w.t2=C,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,f=(0,w.t2)(w.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,w.abrupt("return",s);case 17:case"end":return w.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w,F,o,R;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return I=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var P=s(D);if(P&&P.has(c))return P.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in c)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(c,Y)){var G=X?Object.getOwnPropertyDescriptor(c,Y):null;G&&(G.get||G.set)?Object.defineProperty(W,Y,G):W[Y]=c[Y]}return W.default=c,P&&P.set(c,W),W},s=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,P=new WeakMap;return(s=function(X){return X?P:D})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=I,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.next=32,Promise.all([e.e(67),e.e(78)]).then(e.bind(null,"7t+U"));case 32:return l=t.sent,w=y.default.TextArea,F={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},o=function(){var c=(0,C.useState)(JSON.stringify(F)),D=(0,f.default)(c,2),P=D[0],W=D[1],X=(0,C.useState)({}),Y=(0,f.default)(X,2),G=Y[0],Fe=Y[1],qe=function(){try{var T=(0,l.updateSchemaToNewVersion)(JSON.parse(P));Fe(T)}catch(K){console.log(K)}},cn=function(T){W(T.target.value)},vn=function(){W(JSON.stringify(JSON.parse(P),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:P,onChange:cn}),C.default.createElement(u.default,{style:{marginRight:12},onClick:vn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(u.default,{type:"primary",onClick:qe},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(G,null,2)}))},R=o,t.abrupt("return",R);case 38:case"end":return t.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:x}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I;return p.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return s=function(){var R=(0,f.useState)({}),m=(0,u.default)(R,2),t=m[0],g=m[1],c=(0,f.useState)([]),D=(0,u.default)(c,2),P=D[0],W=D[1],X=(0,f.useState)(!1),Y=(0,u.default)(X,2),G=Y[0],Fe=Y[1],qe=(0,y.useForm)({formData:t,onChange:g,onValidate:W,showValidate:G});(0,f.useEffect)(function(){qe.init()},[]);var cn=function(){Fe(!0),P.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(P))):alert(JSON.stringify(t))};return f.default.createElement("div",null,f.default.createElement(y.default,{form:qe,schema:l}),f.default.createElement("button",{onClick:cn},"\u63D0\u4EA4"))},r=function(R,m){if(!m&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var t=C(m);if(t&&t.has(R))return t.get(R);var g={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in R)if(D!=="default"&&Object.prototype.hasOwnProperty.call(R,D)){var P=c?Object.getOwnPropertyDescriptor(R,D):null;P&&(P.get||P.set)?Object.defineProperty(g,D,P):g[D]=R[D]}return g.default=R,t&&t.set(R,g),g},C=function(R){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(C=function(c){return c?t:m})(R)},d=e("K+nK"),F.t0=d,F.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return F.t1=F.sent,u=(0,F.t0)(F.t1),F.t2=r,F.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return F.t3=F.sent,f=(0,F.t2)(F.t3),F.t4=r,F.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 17:return F.t5=F.sent,y=(0,F.t4)(F.t5),l={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},I=s,F.abrupt("return",I);case 22:case"end":return F.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C;return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),y=function(I){return{type:"object",displayType:I,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"display: row"),u.default.createElement(f.default,{schema:y("row")}),u.default.createElement("h2",null,"display: column"),u.default.createElement(f.default,{schema:y("column")}))},l.abrupt("return",C);case 14:case"end":return l.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C;return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),y={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return u.default.createElement(f.default,{schema:y})},l.abrupt("return",C);case 14:case"end":return l.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C;return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return u.default.createElement(f.default,{readOnly:!0,schema:y})},l.abrupt("return",C);case 14:case"end":return l.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C;return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return u.default.createElement(f.default,{labelWidth:"200",schema:y})},l.abrupt("return",C);case 14:case"end":return l.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
            props: {
              hideMove: true,
            },
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w,F,o,R;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return F=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var P=w(D);if(P&&P.has(c))return P.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in c)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(c,Y)){var G=X?Object.getOwnPropertyDescriptor(c,Y):null;G&&(G.get||G.set)?Object.defineProperty(W,Y,G):W[Y]=c[Y]}return W.default=c,P&&P.set(c,W),W},w=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,P=new WeakMap;return(w=function(X){return X?P:D})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=F,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,r=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=t.sent,t.t10=F,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,s=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return I=t.sent,o=function(){var c=(0,s.useForm)(),D=(0,r.useState)({}),P=(0,C.default)(D,2),W=P[0],X=P[1],Y=function(){(0,I.fakeApi)("xxx/getForm").then(function(qe){c.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,I.delay)(1e3).then(function(Fe){X({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var G=function(qe,cn){cn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(cn.map(function(vn){return vn.name}))):(0,I.fakeApi)("xxx/submit",qe).then(function(vn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(s.default,{form:c,schema:W,onFinish:G}),r.default.createElement(u.default,null,r.default.createElement(f.default,{onClick:Y},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=o,t.abrupt("return",R);case 48:case"end":return t.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w,F,o,R;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var P=I(D);if(P&&P.has(c))return P.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in c)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(c,Y)){var G=X?Object.getOwnPropertyDescriptor(c,Y):null;G&&(G.get||G.set)?Object.defineProperty(W,Y,G):W[Y]=c[Y]}return W.default=c,P&&P.set(c,W),W},I=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,P=new WeakMap;return(I=function(X){return X?P:D})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=w,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return s=t.sent,F={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},o=function(){var c=(0,l.useForm)(),D=function(X,Y){Y.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Y.map(function(G){return G.name}))):(0,s.fakeApi)("xxx/submit",X).then(function(G){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},P=function(X){var Y=X.data,G=X.errors,Fe=X.schema,qe=(0,f.default)(X,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:c,schema:F,beforeFinish:P,onFinish:D}),C.default.createElement(u.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},R=o,t.abrupt("return",R);case 42:case"end":return t.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w,F,o,R;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var P=I(D);if(P&&P.has(c))return P.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in c)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(c,Y)){var G=X?Object.getOwnPropertyDescriptor(c,Y):null;G&&(G.get||G.set)?Object.defineProperty(W,Y,G):W[Y]=c[Y]}return W.default=c,P&&P.set(c,W),W},I=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,P=new WeakMap;return(I=function(X){return X?P:D})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=t.sent,t.t8=w,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return s=t.sent,F={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},o=function(){var c=(0,l.useForm)(),D=function(X,Y){Y.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Y.map(function(G){return G.name}))):(0,s.fakeApi)("xxx/submit",X).then(function(G){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},P=function(){(0,s.fakeApi)("xxx/getForm").then(function(X){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:c,schema:F,onFinish:D}),C.default.createElement(u.default,null,C.default.createElement(f.default,{onClick:P},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=o,t.abrupt("return",R);case 44:case"end":return t.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w,F,o;return p.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return I=function(g,c){if(!c&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var D=s(c);if(D&&D.has(g))return D.get(g);var P={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var X in g)if(X!=="default"&&Object.prototype.hasOwnProperty.call(g,X)){var Y=W?Object.getOwnPropertyDescriptor(g,X):null;Y&&(Y.get||Y.set)?Object.defineProperty(P,X,Y):P[X]=g[X]}return P.default=g,D&&D.set(g,P),P},s=function(g){if(typeof WeakMap!="function")return null;var c=new WeakMap,D=new WeakMap;return(s=function(W){return W?D:c})(g)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,u=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,f=(0,m.t2)(m.t3),m.t4=I,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,y=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=m.sent,m.t6=I,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,r=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return l=m.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},F=function(){var g=(0,r.useForm)(),c=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},D=function(W,X){X.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(X.map(function(Y){return Y.name}))):f.default.info(JSON.stringify(W))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(r.default,{form:g,schema:w,onMount:c,onFinish:D}),y.default.createElement(u.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},o=F,m.abrupt("return",o);case 37:case"end":return m.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s;return p.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return C=function(o,R){if(!R&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=y(R);if(m&&m.has(o))return m.get(o);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in o)if(c!=="default"&&Object.prototype.hasOwnProperty.call(o,c)){var D=g?Object.getOwnPropertyDescriptor(o,c):null;D&&(D.get||D.set)?Object.defineProperty(t,c,D):t[c]=o[c]}return t.default=o,m&&m.set(o,t),t},y=function(o){if(typeof WeakMap!="function")return null;var R=new WeakMap,m=new WeakMap;return(y=function(g){return g?m:R})(o)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,u=(0,w.t0)(w.t1),w.t2=C,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,f=(0,w.t2)(w.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var o=(0,f.useForm)();return u.default.createElement(f.default,{form:o,schema:r})},s=l,w.abrupt("return",s);case 17:case"end":return w.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C;return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return y=l.sent,C=function(){return u.default.createElement(f.default,{schema:y.expression})},l.abrupt("return",C);case 16:case"end":return l.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I;return p.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return C=function(R,m){if(!m&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var t=y(m);if(t&&t.has(R))return t.get(R);var g={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in R)if(D!=="default"&&Object.prototype.hasOwnProperty.call(R,D)){var P=c?Object.getOwnPropertyDescriptor(R,D):null;P&&(P.get||P.set)?Object.defineProperty(g,D,P):g[D]=R[D]}return g.default=R,t&&t.set(R,g),g},y=function(R){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(y=function(c){return c?t:m})(R)},F.t0=C,F.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return F.t1=F.sent,d=(0,F.t0)(F.t1),F.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=F.sent,F.t2=C,F.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return F.t3=F.sent,f=(0,F.t2)(F.t3),r=function(R){return new Promise(function(m){return setTimeout(m,R)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var R=(0,f.useForm)(),m=function(){R.setValues({input1:"hello world"}),r(3e3).then(function(g){R.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(f.default,{form:R,schema:l,onMount:m})},I=s,F.abrupt("return",I);case 20:case"end":return F.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
            props: {
              hideMove: true,
            },
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),window.hello=function(I){var w=I.value;console.log(w)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(f.default,{schema:y})},r=C,s.abrupt("return",r);case 16:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ie}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s;return p.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return C=function(o,R){if(!R&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=y(R);if(m&&m.has(o))return m.get(o);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in o)if(c!=="default"&&Object.prototype.hasOwnProperty.call(o,c)){var D=g?Object.getOwnPropertyDescriptor(o,c):null;D&&(D.get||D.set)?Object.defineProperty(t,c,D):t[c]=o[c]}return t.default=o,m&&m.set(o,t),t},y=function(o){if(typeof WeakMap!="function")return null;var R=new WeakMap,m=new WeakMap;return(y=function(g){return g?m:R})(o)},w.t0=C,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,d=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=w.sent,w.t2=C,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,f=(0,w.t2)(w.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var o=(0,f.useForm)(),R={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){o.setValueByPath("input2",t)}};return d.default.createElement(f.default,{form:o,schema:r,watch:R})},s=l,w.abrupt("return",s);case 19:case"end":return w.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w;return p.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=r(t);if(g&&g.has(m))return g.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in m)if(P!=="default"&&Object.prototype.hasOwnProperty.call(m,P)){var W=D?Object.getOwnPropertyDescriptor(m,P):null;W&&(W.get||W.set)?Object.defineProperty(c,P,W):c[P]=m[P]}return c.default=m,g&&g.set(m,c),c},r=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(D){return D?g:t})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=l,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,f=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=o.sent,o.t4=l,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,C=(0,o.t4)(o.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},I=function(){var m=(0,C.useForm)(),t=function(D,P){P.length>0?alert("errorFields:"+JSON.stringify(P)):alert("formData:"+JSON.stringify(D,null,2))},g={input1:function(D){D.length>2?m.setSchemaByPath("obj1.select",function(P){var W=P.enumNames;return{enumNames:W.map(function(X){return X+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:s,onFinish:t,watch:g}),f.default.createElement(u.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),f.default.createElement(u.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=I,o.abrupt("return",w);case 27:case"end":return o.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I,w,F,o,R;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return I=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var P=s(D);if(P&&P.has(c))return P.get(c);var W={},X=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in c)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(c,Y)){var G=X?Object.getOwnPropertyDescriptor(c,Y):null;G&&(G.get||G.set)?Object.defineProperty(W,Y,G):W[Y]=c[Y]}return W.default=c,P&&P.set(c,W),W},s=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,P=new WeakMap;return(s=function(X){return X?P:D})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(84).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=I,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=I,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},F=function(c){return console.log("widget props:",c),C.default.createElement(f.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},c))},o=function(){var c=(0,l.useForm)(),D=function(){};return C.default.createElement("div",null,C.default.createElement(l.default,{readOnly:!0,form:c,schema:w,widgets:{site:F},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),C.default.createElement(u.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},R=o,t.abrupt("return",R);case 40:case"end":return t.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C;return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return y=l.sent,C=function(){return u.default.createElement(f.default,{schema:y.basic})},l.abrupt("return",C);case 16:case"end":return l.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C;return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return y=l.sent,C=function(){return u.default.createElement(f.default,{schema:y.titleTrick})},l.abrupt("return",C);case 16:case"end":return l.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8-beta.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"BASV"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Be},"main.js":{import:"./main",content:wn},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Sn},"monaco/index.js":{import:"./monaco",content:hn},"suggestionsMap.js":{import:"./suggestionsMap",content:Qe},"index.css":{import:"./index.css",content:$n}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.5.8-beta.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"7ZP+"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r,l,s,I;return p.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return d=e("K+nK"),F.t0=d,F.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return F.t1=F.sent,u=(0,F.t0)(F.t1),F.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(65)]).then(e.bind(null,"P2DI"));case 8:for(f=F.sent,y=[],C=0;C<6;C++)y.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(R,m){return u.default.createElement("a",{onClick:function(){return alert(R.title)}},"\u7F16\u8F91")}}],s=function(){var R=function(){return{rows:y,total:y.length}};return u.default.createElement(f.TableProvider,null,u.default.createElement(f.Search,{schema:r,api:R}),u.default.createElement(f.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},I=s,F.abrupt("return",I);case 16:case"end":return F.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){var d,u,f,y,C,r;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(64)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,f=(0,s.t2)(s.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return u.default.createElement("div",{style:{height:"80vh"}},u.default.createElement(f.default,{defaultValue:y}))},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"PPgD"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"M63W"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Me}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"SOdT"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"jktF"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var N=Object(J.a)(p.a.mark(function B(){return p.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"TYW4"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},B)}));function A(){return N.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:rt},"index.less":{import:"./index.less",content:Wn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,bn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},dKoY:function(Tn,bn,e){"use strict";e.r(bn);var J=e("q1tI"),n=e.n(J),p=e("dEAq"),L=e.n(p),ce=e("0zqC"),x=e("ZpkN"),Ie=e("JjdP"),Pe=n.a.memo(Ie.default["schema-demo"].component),ve=n.a.memo(Ie.default["schema-demo-1"].component);bn.default=pn=>(n.a.useEffect(()=>{pn!=null&&pn.location.hash&&p.AnchorLink.scrollToAnchor(decodeURIComponent(pn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"schema-\u89C4\u8303"},n.a.createElement(p.AnchorLink,{to:"#schema-\u89C4\u8303","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u89C4\u8303"),n.a.createElement("h2",{id:"\u6982\u8FF0"},n.a.createElement(p.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,n.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",n.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",n.a.createElement(p.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(x.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
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
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",n.a.createElement("code",null,"rules")," \u548C ",n.a.createElement("code",null,"props"),"\uFF0C",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",n.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",n.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(x.a,{code:`{
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
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,"\u201C\u6211\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F\u201D \u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(p.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema"))),n.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027"},n.a.createElement(p.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027"),n.a.createElement("p",null,"\u4E3A\u4E86\u66F4\u597D\u7406\u89E3\u57FA\u7840\u5C5E\u6027\u7684\u4F5C\u7528\uFF0C\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"enum")," \u548C ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",n.a.createElement(p.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"min"),", ",n.a.createElement("code",null,"max"),", ",n.a.createElement("code",null,"required")," \u548C ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),n.a.createElement("li",null,n.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),n.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),n.a.createElement(x.a,{code:`export const basic = {
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
};`,lang:"js"})),n.a.createElement(ce.default,Ie.default["schema-demo"].previewerProps,n.a.createElement(Pe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"title"},n.a.createElement(p.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"title"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),n.a.createElement("p",null,"\u5982\u4E0B\u4F8B\uFF0C\u901A\u8FC7\u9009\u62E9\u6027\u4E0D\u4F7F\u7528 title\uFF0C\u8FBE\u5230\u5C55\u793A\u6548\u679C")),n.a.createElement(ce.default,Ie.default["schema-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"description"},n.a.createElement(p.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"description"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),n.a.createElement("h3",{id:"type"},n.a.createElement(p.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"type"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'string'"),", ",n.a.createElement("code",null,"'number'"),", ",n.a.createElement("code",null,"'boolean'"),", ",n.a.createElement("code",null,"'array'"),", ",n.a.createElement("code",null,"'object'"),", ",n.a.createElement("code",null,"'range'"),", ",n.a.createElement("code",null,"'html'"),"]"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002")),n.a.createElement("p",null,"\u6CE8 1\uFF1Arange \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u533A\u95F4\u7C7B\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u65F6\u95F4\u533A\u95F4\u9009\u62E9\u3002"),n.a.createElement(x.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 2\uFF1Ahtml \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u7C7B\u7EC4\u4EF6"),n.a.createElement(x.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),n.a.createElement("h3",{id:"format"},n.a.createElement(p.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"format"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'image'"),", ",n.a.createElement("code",null,"'textarea'"),", ",n.a.createElement("code",null,"'color'"),", ",n.a.createElement("code",null,"'email'"),", ",n.a.createElement("code",null,"'url'"),", ",n.a.createElement("code",null,"'dateTime'"),", ",n.a.createElement("code",null,"'date'"),", ",n.a.createElement("code",null,"'time'"),", ",n.a.createElement("code",null,"'upload'"),"]")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),n.a.createElement(x.a,{code:`// \u9ED8\u8BA4 input
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
}`,lang:"json"}))),n.a.createElement("h3",{id:"default"},n.a.createElement(p.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"default"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),n.a.createElement(x.a,{code:`"list": {
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
}`,lang:"json"}))),n.a.createElement("h3",{id:"required"},n.a.createElement(p.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"required"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),n.a.createElement(x.a,{code:`"requiredInput": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "required": true
}`,lang:"json"}),n.a.createElement("h3",{id:"placeholder"},n.a.createElement(p.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"placeholder"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u3002\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\uFF1A")),n.a.createElement(x.a,{code:`"dateRange": {
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"js"}),n.a.createElement("h3",{id:"bind"},n.a.createElement(p.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"bind"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",n.a.createElement(p.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),n.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",n.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),n.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),n.a.createElement("h3",{id:"min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min"},n.a.createElement(p.AnchorLink,{to:"#min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"min (0.x \u7248\u672C ",n.a.createElement("code",null,"min"),",",n.a.createElement("code",null,"minItem")," \u548C ",n.a.createElement("code",null,"minLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"min"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),n.a.createElement("h3",{id:"max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max"},n.a.createElement(p.AnchorLink,{to:"#max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"max (0.x \u7248\u672C ",n.a.createElement("code",null,"max"),",",n.a.createElement("code",null,"maxItem")," \u548C ",n.a.createElement("code",null,"maxLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"max"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),n.a.createElement("h3",{id:"disabled-0x-\u7248\u672C-uidisabled"},n.a.createElement(p.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:disabled"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),n.a.createElement("h3",{id:"readonly-0x-\u7248\u672C-uireadonly"},n.a.createElement(p.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:readonly"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),n.a.createElement("h3",{id:"hidden-0x-\u7248\u672C-uihidden"},n.a.createElement(p.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:hidden"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),n.a.createElement("h3",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},n.a.createElement(p.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:displayType"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"'row'")," | ",n.a.createElement("code",null,"'column'")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),n.a.createElement("h3",{id:"width-0x-\u7248\u672C-uiwidth"},n.a.createElement(p.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:width"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),n.a.createElement("h3",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},n.a.createElement(p.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:labelWidth"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),n.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),n.a.createElement("h3",{id:"classname-0x-\u7248\u672C-uiclassname"},n.a.createElement(p.AnchorLink,{to:"#classname-0x-\u7248\u672C-uiclassname","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"className (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:className"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u660E\u5355\u4E2A\u8868\u5355\u5143\u7D20\u7684 className\uFF0C\u65B9\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F")),n.a.createElement("p",null,"\u4F8B\u5982\u5982\u4E0B\u7684 schema \u4F1A\u5728\u751F\u6210\u5143\u7D20\u7684 ",n.a.createElement("code",null,"fr-field")," \u8FD9\u5C42\u6DFB\u52A0\u4E0A\u7528\u6237\u5B9A\u4E49\u7684 ",n.a.createElement("code",null,"my-className")),n.a.createElement(x.a,{code:`audio_on_mic_limit: {
  className: 'my-className',
  title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}`,lang:"js"}),n.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png",width:"600px"}),n.a.createElement("h3",{id:"widget-0x-\u7248\u672C-uiwidget"},n.a.createElement(p.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:widget"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u201C\u5185\u7F6E\u7EC4\u4EF6\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u4F8B\u5982\uFF1A")),n.a.createElement(x.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "widget": "select" // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
}`,lang:"json"}),n.a.createElement("p",null,"FR \u9ED8\u8BA4\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u8BE6\u7EC6\u5339\u914D\u89C4\u5219\u89C1",n.a.createElement(p.Link,{to:"/form-render/schema/inner-widget"},"\u5185\u7F6E\u7EC4\u4EF6"),"\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"widget"),"\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5339\u914D\u201C\u81EA\u5B9A\u4E49\u201D\u7684\u7EC4\u4EF6\uFF0C\u5982\u4F55\u4F7F\u7528 ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",n.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u5143\u7D20\u6E32\u67D3\uFF0C\u53C2\u89C1",n.a.createElement(p.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),n.a.createElement("h3",{id:"readonlywidget"},n.a.createElement(p.AnchorLink,{to:"#readonlywidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnlyWidget"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3")),n.a.createElement("p",null,"readOnly=true \u7684\u60C5\u51B5\uFF0CFormRender \u9ED8\u8BA4\u4F7F\u7528 html \u7EC4\u4EF6\u6E32\u67D3\u3002\u7279\u6B8A\u60C5\u51B5 html \u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6B64\u65F6\u901A\u8FC7\u6307\u660E readOnlyWidget \u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6E32\u67D3"),n.a.createElement(x.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "widget": "myWidget", // \u6307\u660E\u4F7F\u7528 myWidget \u6765\u6E32\u67D3
  "readOnlyWidget": "myReadOnlyWidget" // \u6307\u660E\u5728\u53EA\u8BFB\u6A21\u5F0F\u4F7F\u7528 myReadOnlyWidget \u6765\u6E32\u67D3
}`,lang:"json"}),n.a.createElement("h3",{id:"extra"},n.a.createElement(p.AnchorLink,{to:"#extra","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"extra"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5728\u5143\u7D20\u4E0B\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F\uFF0Cextra \u53EF\u4EE5\u662F html string\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EAF\u6587\u6848\uFF0C\u4F1A\u5C55\u793A\u5728\u5143\u7D20\u4E0B\u9762\u4E00\u884C\u7D27\u8D34")),n.a.createElement(x.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "extra": "<a href='xxx'>\u8BE6\u7EC6\u89C4\u8303</a>"
}`,lang:"json"}),n.a.createElement("h3",{id:"properties"},n.a.createElement(p.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"properties"),n.a.createElement("p",null,"\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\uFF08type: object\uFF09\u4E2D\u4F7F\u7528\uFF0C",n.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),n.a.createElement(x.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"items"},n.a.createElement(p.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"items"),n.a.createElement("p",null,"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61"),n.a.createElement(x.a,{code:`{
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
}`,lang:"json"}),n.a.createElement("h3",{id:"enum--enumnames"},n.a.createElement(p.AnchorLink,{to:"#enum--enumnames","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"enum & enumNames"),n.a.createElement("p",null,"\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C & \u9009\u9879\u7684\u6587\u6848")),n.a.createElement(x.a,{code:`// \u5355\u9009
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
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),n.a.createElement("h3",{id:"rules"},n.a.createElement(p.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"rules"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A\u6570\u7EC4"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u6240\u6709\u9664\u4E86\u5FC5\u586B\u4EE5\u5916\u7684\u8868\u5355\u6821\u9A8C\u63CF\u8FF0\u901A\u8FC7 ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",n.a.createElement(p.Link,{to:"/form-render/schema/rules"},"rules \u4E66\u5199\u89C4\u8303"))),n.a.createElement("h3",{id:"props-0x-\u7248\u672C-uioptions"},n.a.createElement(p.AnchorLink,{to:"#props-0x-\u7248\u672C-uioptions","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"props (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:options"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aobject"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",n.a.createElement("code",null,"props")," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",n.a.createElement("code",null,"props")," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",n.a.createElement("code",null,"props")," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),n.a.createElement(x.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),n.a.createElement("p",null,"\u8BE6\u89C1 ",n.a.createElement(p.Link,{to:"/form-render/schema/props"},"props \u4E66\u5199\u89C4\u8303"))))))},p8sG:function(Tn,bn,e){"use strict";Tn.exports=e("80pN")}}]);
