(window.webpackJsonp=window.webpackJsonp||[]).push([[45,12],{"0zqC":function(Tn,pn,e){"use strict";e.r(pn);var V=e("tJVT"),t=e("q1tI"),y=e.n(t),L=e("wx14"),me=e("rePB"),H=e("ODXe"),dn=e("U8pU"),Pe=e("Ff2n"),pe=e("VTBJ"),He=e("TSYQ"),De=e.n(He),hn=e("Zm9Q"),In=e("5Z9U"),On=e("6cGi"),cn=e("KQm4"),Ge=e("wgJM"),Mn=e("t23M");function Nn(r){var i=Object(t.useRef)(),h=Object(t.useRef)(!1);function O(){for(var S=arguments.length,b=new Array(S),D=0;D<S;D++)b[D]=arguments[D];h.current||(Ge.a.cancel(i.current),i.current=Object(Ge.a)(function(){r.apply(void 0,b)}))}return Object(t.useEffect)(function(){return function(){h.current=!0,Ge.a.cancel(i.current)}},[]),O}function Cn(r){var i=Object(t.useRef)([]),h=Object(t.useState)({}),O=Object(H.a)(h,2),S=O[1],b=Object(t.useRef)(typeof r=="function"?r():r),D=Nn(function(){var K=b.current;i.current.forEach(function(x){K=x(K)}),i.current=[],b.current=K,S({})});function N(K){i.current.push(K),D()}return[b.current,N]}var Be=e("4IlW");function Xn(r,i){var h,O=r.prefixCls,S=r.id,b=r.active,D=r.rtl,N=r.tab,K=N.key,x=N.tab,$=N.disabled,G=N.closeIcon,z=r.tabBarGutter,oe=r.tabPosition,X=r.closable,k=r.renderWrapper,ue=r.removeAriaLabel,J=r.editable,ne=r.onClick,ae=r.onRemove,q=r.onFocus,le="".concat(O,"-tab");t.useEffect(function(){return ae},[]);var ee={};oe==="top"||oe==="bottom"?ee[D?"marginLeft":"marginRight"]=z:ee.marginBottom=z;var ye=J&&X!==!1&&!$;function te(se){$||ne(se)}function ce(se){se.preventDefault(),se.stopPropagation(),J.onEdit("remove",{key:K,event:se})}var fe=t.createElement("div",{key:K,ref:i,className:De()(le,(h={},Object(me.a)(h,"".concat(le,"-with-remove"),ye),Object(me.a)(h,"".concat(le,"-active"),b),Object(me.a)(h,"".concat(le,"-disabled"),$),h)),style:ee,onClick:te},t.createElement("div",{role:"tab","aria-selected":b,id:S&&"".concat(S,"-tab-").concat(K),className:"".concat(le,"-btn"),"aria-controls":S&&"".concat(S,"-panel-").concat(K),"aria-disabled":$,tabIndex:$?null:0,onClick:function(Y){Y.stopPropagation(),te(Y)},onKeyDown:function(Y){[Be.a.SPACE,Be.a.ENTER].includes(Y.which)&&(Y.preventDefault(),te(Y))},onFocus:q},x),ye&&t.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(Y){Y.stopPropagation(),ce(Y)}},G||J.removeIcon||"\xD7"));return k&&(fe=k(fe)),fe}var Kn=t.forwardRef(Xn),Zn={width:0,height:0,left:0,top:0};function rt(r,i,h){return Object(t.useMemo)(function(){for(var O,S=new Map,b=i.get((O=r[0])===null||O===void 0?void 0:O.key)||Zn,D=b.left+b.width,N=0;N<r.length;N+=1){var K=r[N].key,x=i.get(K);if(!x){var $;x=i.get(($=r[N-1])===null||$===void 0?void 0:$.key)||Zn}var G=S.get(K)||Object(pe.a)({},x);G.right=D-G.left-G.width,S.set(K,G)}return S},[r.map(function(O){return O.key}).join("_"),i,h])}var kn={width:0,height:0,left:0,top:0,right:0};function at(r,i,h,O,S){var b=S.tabs,D=S.tabPosition,N=S.rtl,K,x,$;["top","bottom"].includes(D)?(K="width",x=N?"right":"left",$=Math.abs(i.left)):(K="height",x="top",$=-i.top);var G=i[K],z=h[K],oe=O[K],X=G;return z+oe>G&&(X=G-oe),Object(t.useMemo)(function(){if(!b.length)return[0,0];for(var k=b.length,ue=k,J=0;J<k;J+=1){var ne=r.get(b[J].key)||kn;if(ne[x]+ne[K]>$+X){ue=J-1;break}}for(var ae=0,q=k-1;q>=0;q-=1){var le=r.get(b[q].key)||kn;if(le[x]<$){ae=q+1;break}}return[ae,ue]},[r,$,X,D,b.map(function(k){return k.key}).join("_"),N])}var An=e("Gytx"),qn=e.n(An),xn=e("Kwbf");function ct(r,i){var h=r.prefixCls,O=r.invalidate,S=r.item,b=r.renderItem,D=r.responsive,N=r.registerSize,K=r.itemKey,x=r.className,$=r.style,G=r.children,z=r.display,oe=r.order,X=r.component,k=X===void 0?"div":X,ue=Object(Pe.a)(r,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=D&&!z;function ne(ye){N(K,ye)}t.useEffect(function(){return function(){ne(null)}},[]);var ae=b&&S!==void 0?b(S):G,q;O||(q={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:D?oe:void 0,pointerEvents:J?"none":void 0});var le={};J&&(le["aria-hidden"]=!0);var ee=t.createElement(k,Object(L.a)({className:De()(!O&&h,x),style:Object(pe.a)(Object(pe.a)({},q),$)},le,ue,{ref:i}),ae);return D&&(ee=t.createElement(Mn.default,{onResize:function(te){var ce=te.offsetWidth;ne(ce)}},ee)),ee}var P=t.forwardRef(ct);P.displayName="Item";var F=P;function T(){var r=Object(t.useState)({}),i=Object(H.a)(r,2),h=i[1],O=Object(t.useRef)([]),S=Object(t.useRef)(!1),b=0,D=0;Object(t.useEffect)(function(){return function(){S.current=!0}},[]);function N(K){var x=b;b+=1,O.current.length<x+1&&(O.current[x]=K);var $=O.current[x];function G(z){O.current[x]=typeof z=="function"?z(O.current[x]):z,Ge.a.cancel(D),D=Object(Ge.a)(function(){S.current||h({})})}return[$,G]}return N}var d=function(i,h){var O=t.useContext(g);if(!O){var S=i.component,b=S===void 0?"div":S,D=Object(Pe.a)(i,["component"]);return t.createElement(b,Object(L.a)({},D,{ref:h}))}var N=O.className,K=Object(Pe.a)(O,["className"]),x=i.className,$=Object(Pe.a)(i,["className"]);return t.createElement(g.Provider,{value:null},t.createElement(F,Object(L.a)({ref:h,className:De()(N,x)},K,$)))},s=t.forwardRef(d);s.displayName="RawItem";var f=s,g=t.createContext(null),C="responsive",a="invalidate";function l(r){return"+ ".concat(r.length," ...")}function o(r,i){var h=r.prefixCls,O=h===void 0?"rc-overflow":h,S=r.data,b=S===void 0?[]:S,D=r.renderItem,N=r.renderRawItem,K=r.itemKey,x=r.itemWidth,$=x===void 0?10:x,G=r.ssr,z=r.style,oe=r.className,X=r.maxCount,k=r.renderRest,ue=r.renderRawRest,J=r.suffix,ne=r.component,ae=ne===void 0?"div":ne,q=r.itemComponent,le=r.onVisibleChange,ee=Object(Pe.a)(r,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),ye=T(),te=G==="full",ce=ye(null),fe=Object(H.a)(ce,2),se=fe[0],Y=fe[1],de=se||0,ge=ye(new Map),ve=Object(H.a)(ge,2),Re=ve[0],Me=ve[1],be=ye(0),Ce=Object(H.a)(be,2),Ae=Ce[0],Ne=Ce[1],Fe=ye(0),je=Object(H.a)(Fe,2),We=je[0],Ze=je[1],Le=ye(0),$e=Object(H.a)(Le,2),ze=$e[0],Ke=$e[1],Sn=Object(t.useState)(null),en=Object(H.a)(Sn,2),Ye=en[0],an=en[1],vn=Object(t.useState)(null),gn=Object(H.a)(vn,2),Te=gn[0],Je=gn[1],ke=t.useMemo(function(){return Te===null&&te?Number.MAX_SAFE_INTEGER:Te||0},[Te,se]),Qe=Object(t.useState)(!1),wn=Object(H.a)(Qe,2),$n=wn[0],Bn=wn[1],nn="".concat(O,"-item"),Rn=Math.max(Ae,We),sn=b.length&&X===C,En=X===a,qe=sn||typeof X=="number"&&b.length>X,tn=Object(t.useMemo)(function(){var he=b;return sn?se===null&&te?he=b:he=b.slice(0,Math.min(b.length,de/$)):typeof X=="number"&&(he=b.slice(0,X)),he},[b,$,se,X,sn]),Dn=Object(t.useMemo)(function(){return sn?b.slice(ke+1):b.slice(tn.length)},[b,tn,sn,ke]),ln=Object(t.useCallback)(function(he,Ee){var we;return typeof K=="function"?K(he):(we=K&&(he==null?void 0:he[K]))!==null&&we!==void 0?we:Ee},[K]),Xe=Object(t.useCallback)(D||function(he){return he},[D]);function Ue(he,Ee){Je(he),Ee||(Bn(he<b.length-1),le==null||le(he))}function Vn(he,Ee){Y(Ee.clientWidth)}function Jn(he,Ee){Me(function(we){var _e=new Map(we);return Ee===null?_e.delete(he):_e.set(he,Ee),_e})}function et(he,Ee){Ze(Ee),Ne(We)}function yn(he,Ee){Ke(Ee)}function fn(he){return Re.get(ln(tn[he],he))}t.useLayoutEffect(function(){if(de&&Rn&&tn){var he=ze,Ee=tn.length,we=Ee-1;if(!Ee){Ue(0),an(null);return}for(var _e=0;_e<Ee;_e+=1){var Gn=fn(_e);if(Gn===void 0){Ue(_e-1,!0);break}if(he+=Gn,_e===we-1&&he+fn(we)<=de){Ue(we),an(null);break}else if(he+Rn>de){Ue(_e-1),an(he-Gn-ze+We);break}else if(_e===we){Ue(we),an(he-ze);break}}J&&fn(0)+ze>de&&an(null)}},[de,Re,We,ze,ln,tn]);var Un=$n&&!!Dn.length,bn={};Ye!==null&&sn&&(bn={position:"absolute",left:Ye,top:0});var un={prefixCls:nn,responsive:sn,component:q,invalidate:En},zn=N?function(he,Ee){var we=ln(he,Ee);return t.createElement(g.Provider,{key:we,value:Object(pe.a)(Object(pe.a)({},un),{},{order:Ee,item:he,itemKey:we,registerSize:Jn,display:Ee<=ke})},N(he,Ee))}:function(he,Ee){var we=ln(he,Ee);return t.createElement(F,Object(L.a)({},un,{order:Ee,key:we,item:he,renderItem:Xe,itemKey:we,registerSize:Jn,display:Ee<=ke}))},jn,Hn={order:Un?ke:Number.MAX_SAFE_INTEGER,className:"".concat(nn,"-rest"),registerSize:et,display:Un};if(ue)ue&&(jn=t.createElement(g.Provider,{value:Object(pe.a)(Object(pe.a)({},un),Hn)},ue(Dn)));else{var on=k||l;jn=t.createElement(F,Object(L.a)({},un,Hn),typeof on=="function"?on(Dn):on)}var Pn=t.createElement(ae,Object(L.a)({className:De()(!En&&O,oe),style:z,ref:i},ee),tn.map(zn),qe?jn:null,J&&t.createElement(F,Object(L.a)({},un,{order:ke,className:"".concat(nn,"-suffix"),registerSize:yn,display:!0,style:bn}),J));return sn&&(Pn=t.createElement(Mn.default,{onResize:Vn},Pn)),Pn}var w=t.forwardRef(o);w.displayName="Overflow",w.Item=f,w.RESPONSIVE=C,w.INVALIDATE=a;var M=w,R=M,m=e("1OyB"),I=e("vuIU"),p=e("Ji7U"),n=e("LK+K"),v=e("bT9E"),c=e("YrtM"),E=t.createContext(null);function j(r,i){var h=Object(pe.a)({},r);return Object.keys(i).forEach(function(O){var S=i[O];S!==void 0&&(h[O]=S)}),h}function W(r){var i=r.children,h=r.locked,O=Object(Pe.a)(r,["children","locked"]),S=t.useContext(E),b=Object(c.a)(function(){return j(S,O)},[S,O],function(D,N){return!h&&(D[0]!==N[0]||!qn()(D[1],N[1]))});return t.createElement(E.Provider,{value:b},i)}function Q(r,i,h,O){var S=t.useContext(E),b=S.activeKey,D=S.onActive,N=S.onInactive,K={active:b===r};return i||(K.onMouseEnter=function(x){h==null||h({key:r,domEvent:x}),D(r)},K.onMouseLeave=function(x){O==null||O({key:r,domEvent:x}),N(r)}),K}function U(r){var i=r.item,h=Object(Pe.a)(r,["item"]);return Object.defineProperty(h,"item",{get:function(){return Object(xn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),h}function u(r){var i=r.icon,h=r.props,O=r.children,S;return typeof i=="function"?S=t.createElement(i,Object(pe.a)({},h)):S=i,S||O||null}function A(r){var i=t.useContext(E),h=i.mode,O=i.rtl,S=i.inlineIndent;if(h!=="inline")return null;var b=r;return O?{paddingRight:b*S}:{paddingLeft:b*S}}var B=[],ie=t.createContext(null);function Z(){return t.useContext(ie)}var Se=t.createContext(B);function Ie(r){var i=t.useContext(Se);return t.useMemo(function(){return r!==void 0?[].concat(Object(cn.a)(i),[r]):i},[i,r])}var xe=t.createContext(null),Jt=t.createContext(null);function Ut(r,i){return r===void 0?null:"".concat(r,"-").concat(i)}function zt(r){var i=t.useContext(Jt);return Ut(i,r)}var br=function(r){Object(p.a)(h,r);var i=Object(n.a)(h);function h(){return Object(m.a)(this,h),i.apply(this,arguments)}return Object(I.a)(h,[{key:"render",value:function(){var S=this.props,b=S.title,D=S.attribute,N=S.elementRef,K=Object(Pe.a)(S,["title","attribute","elementRef"]),x=Object(v.a)(K,["eventKey"]);return Object(xn.a)(!D,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(R.Item,Object(L.a)({},D,{title:typeof b=="string"?b:void 0},x,{ref:N}))}}]),h}(t.Component),Or=function(i){var h,O=i.style,S=i.className,b=i.eventKey,D=i.disabled,N=i.itemIcon,K=i.children,x=i.role,$=i.onMouseEnter,G=i.onMouseLeave,z=i.onClick,oe=i.onKeyDown,X=i.onFocus,k=Object(Pe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=zt(b),J=t.useContext(E),ne=J.prefixCls,ae=J.onItemClick,q=J.disabled,le=J.overflowDisabled,ee=J.itemIcon,ye=J.selectedKeys,te=J.onActive,ce="".concat(ne,"-item"),fe=t.useRef(),se=t.useRef(),Y=q||D,de=Ie(b),ge=function(Le){return{key:b,keyPath:de,item:fe.current,domEvent:Le}},ve=N||ee,Re=Q(b,Y,$,G),Me=Re.active,be=Object(Pe.a)(Re,["active"]),Ce=ye.includes(b),Ae=A(de.length),Ne=function(Le){if(!Y){var $e=ge(Le);z==null||z(U($e)),ae($e)}},Fe=function(Le){if(oe==null||oe(Le),Le.which===Be.a.ENTER){var $e=ge(Le);z==null||z(U($e)),ae($e)}},je=function(Le){te(b),X==null||X(Le)},We={};return i.role==="option"&&(We["aria-selected"]=Ce),t.createElement(br,Object(L.a)({ref:fe,elementRef:se,role:x===null?"none":x||"menuitem",tabIndex:D?null:-1,"data-menu-id":le&&ue?null:ue},k,be,We,{component:"li","aria-disabled":D,style:Object(pe.a)(Object(pe.a)({},Ae),O),className:De()(ce,(h={},Object(me.a)(h,"".concat(ce,"-active"),Me),Object(me.a)(h,"".concat(ce,"-selected"),Ce),Object(me.a)(h,"".concat(ce,"-disabled"),Y),h),S),onClick:Ne,onKeyDown:Fe,onFocus:je}),K,t.createElement(u,{props:Object(pe.a)(Object(pe.a)({},i),{},{isSelected:Ce}),icon:ve}))};function Cr(r){var i=r.eventKey,h=Z(),O=Ie(i);return t.useEffect(function(){if(h)return h.registerPath(i,O),function(){h.unregisterPath(i,O)}},[O]),h?null:t.createElement(Or,r)}var jt=Cr;function Pt(r,i){return Object(hn.a)(r).map(function(h,O){if(t.isValidElement(h)){var S=h.key;return S==null&&(S="tmp_key-".concat([].concat(Object(cn.a)(i),[O]).join("-"))),t.cloneElement(h,{key:S,eventKey:S})}return h})}function _n(r){var i=t.useRef(r);i.current=r;var h=t.useCallback(function(){for(var O,S=arguments.length,b=new Array(S),D=0;D<S;D++)b[D]=arguments[D];return(O=i.current)===null||O===void 0?void 0:O.call.apply(O,[i].concat(b))},[]);return r?h:void 0}var Sr=function(i,h){var O=i.className,S=i.children,b=Object(Pe.a)(i,["className","children"]),D=t.useContext(E),N=D.prefixCls,K=D.mode;return t.createElement("ul",Object(L.a)({className:De()(N,"".concat(N,"-sub"),"".concat(N,"-").concat(K==="inline"?"inline":"vertical"),O)},b,{"data-menu-list":!0,ref:h}),S)},Ht=t.forwardRef(Sr);Ht.displayName="SubMenuList";var Gt=Ht,Rr=e("uciX"),Wn={adjustX:1,adjustY:1},Yt={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},fa=Yt;function Qt(r,i,h){if(i)return i;if(h)return h[r]||h.other}var Dr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function jr(r){var i=r.prefixCls,h=r.visible,O=r.children,S=r.popup,b=r.popupClassName,D=r.popupOffset,N=r.disabled,K=r.mode,x=r.onVisibleChange,$=t.useContext(E),G=$.getPopupContainer,z=$.rtl,oe=$.subMenuOpenDelay,X=$.subMenuCloseDelay,k=$.builtinPlacements,ue=$.triggerSubMenuAction,J=$.forceSubMenuRender,ne=$.motion,ae=$.defaultMotions,q=t.useState(!1),le=Object(H.a)(q,2),ee=le[0],ye=le[1],te=z?Object(pe.a)(Object(pe.a)({},Er),k):Object(pe.a)(Object(pe.a)({},Yt),k),ce=Dr[K],fe=Qt(K,ne,ae),se=Object(pe.a)(Object(pe.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Y=t.useRef();return t.useEffect(function(){return Y.current=Object(Ge.a)(function(){ye(h)}),function(){Ge.a.cancel(Y.current)}},[h]),t.createElement(Rr.a,{prefixCls:i,popupClassName:De()("".concat(i,"-popup"),Object(me.a)({},"".concat(i,"-rtl"),z),b),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:te,popupPlacement:ce,popupVisible:ee,popup:S,popupAlign:D&&{offset:D},action:N?[]:[ue],mouseEnterDelay:oe,mouseLeaveDelay:X,onPopupVisibleChange:x,forceRender:J,popupMotion:se},O)}var Pr=e("8XRh");function Fr(r){var i=r.id,h=r.open,O=r.keyPath,S=r.children,b="inline",D=t.useContext(E),N=D.prefixCls,K=D.forceSubMenuRender,x=D.motion,$=D.defaultMotions,G=D.mode,z=t.useRef(!1);z.current=G===b;var oe=t.useState(!z.current),X=Object(H.a)(oe,2),k=X[0],ue=X[1],J=z.current?h:!1;t.useEffect(function(){z.current&&ue(!1)},[G]);var ne=Object(pe.a)({},Qt(b,x,$));O.length>1&&(ne.motionAppear=!1);var ae=ne.onVisibleChanged;return ne.onVisibleChanged=function(q){return!z.current&&!q&&ue(!0),ae==null?void 0:ae(q)},k?null:t.createElement(W,{mode:b,locked:!z.current},t.createElement(Pr.default,Object(L.a)({visible:J},ne,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(N,"-hidden")}),function(q){var le=q.className,ee=q.style;return t.createElement(Gt,{id:i,className:le,style:ee},S)}))}var Tr=function(i){var h,O=i.style,S=i.className,b=i.title,D=i.eventKey,N=i.disabled,K=i.internalPopupClose,x=i.children,$=i.itemIcon,G=i.expandIcon,z=i.popupClassName,oe=i.popupOffset,X=i.onClick,k=i.onMouseEnter,ue=i.onMouseLeave,J=i.onTitleClick,ne=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,q=Object(Pe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=zt(D),ee=t.useContext(E),ye=ee.prefixCls,te=ee.mode,ce=ee.openKeys,fe=ee.disabled,se=ee.overflowDisabled,Y=ee.activeKey,de=ee.selectedKeys,ge=ee.itemIcon,ve=ee.expandIcon,Re=ee.onItemClick,Me=ee.onOpenChange,be=ee.onActive,Ce=t.useContext(xe),Ae=Ce.isSubPathKey,Ne=Ie(),Fe="".concat(ye,"-submenu"),je=fe||N,We=t.useRef(),Ze=t.useRef(),Le=$||ge,$e=G||ve,ze=ce.includes(D),Ke=!se&&ze,Sn=Ae(de,D),en=Q(D,je,ne,ae),Ye=en.active,an=Object(Pe.a)(en,["active"]),vn=t.useState(!1),gn=Object(H.a)(vn,2),Te=gn[0],Je=gn[1],ke=function(Ue){je||Je(Ue)},Qe=function(Ue){ke(!0),k==null||k({key:D,domEvent:Ue})},wn=function(Ue){ke(!1),ue==null||ue({key:D,domEvent:Ue})},$n=t.useMemo(function(){return Ye||(te!=="inline"?Te||Ae([Y],D):!1)},[te,Ye,Y,Te,D,Ae]),Bn=A(Ne.length),nn=function(Ue){je||(J==null||J({key:D,domEvent:Ue}),te==="inline"&&Me(D,!ze))},Rn=_n(function(Xe){X==null||X(U(Xe)),Re(Xe)}),sn=function(Ue){te!=="inline"&&Me(D,Ue)},En=function(){be(D)},qe=le&&"".concat(le,"-popup"),tn=t.createElement("div",Object(L.a)({role:"menuitem",style:Bn,className:"".concat(Fe,"-title"),tabIndex:je?null:-1,ref:We,title:typeof b=="string"?b:null,"data-menu-id":se&&le?null:le,"aria-expanded":Ke,"aria-haspopup":!0,"aria-controls":qe,"aria-disabled":je,onClick:nn,onFocus:En},an),b,t.createElement(u,{icon:te!=="horizontal"?$e:null,props:Object(pe.a)(Object(pe.a)({},i),{},{isOpen:Ke,isSubMenu:!0})},t.createElement("i",{className:"".concat(Fe,"-arrow")}))),Dn=t.useRef(te);if(te!=="inline"&&(Dn.current=Ne.length>1?"vertical":te),!se){var ln=Dn.current;tn=t.createElement(jr,{mode:ln,prefixCls:Fe,visible:!K&&Ke&&te!=="inline",popupClassName:z,popupOffset:oe,popup:t.createElement(W,{mode:ln},t.createElement(Gt,{id:qe,ref:Ze},x)),disabled:je,onVisibleChange:sn},tn)}return t.createElement(W,{onItemClick:Rn,mode:te==="horizontal"?"vertical":te,itemIcon:Le,expandIcon:$e},t.createElement(R.Item,Object(L.a)({role:"none"},q,{component:"li",style:O,className:De()(Fe,"".concat(Fe,"-").concat(te),S,(h={},Object(me.a)(h,"".concat(Fe,"-open"),Ke),Object(me.a)(h,"".concat(Fe,"-active"),$n),Object(me.a)(h,"".concat(Fe,"-selected"),Sn),Object(me.a)(h,"".concat(Fe,"-disabled"),je),h)),onMouseEnter:Qe,onMouseLeave:wn}),tn,!se&&t.createElement(Fr,{id:qe,open:Ke,keyPath:Ne},x)))};function Xt(r){var i=r.eventKey,h=r.children,O=Ie(i),S=Pt(h,O),b=Z();t.useEffect(function(){if(b)return b.registerPath(i,O),function(){b.unregisterPath(i,O)}},[O]);var D;return b?D=S:D=t.createElement(Tr,r,S),t.createElement(Se.Provider,{value:O},D)}var Ir=e("x/xZ");function Zt(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(r)){var h=r.nodeName.toLowerCase(),O=["input","select","textarea","button"].includes(h)||r.isContentEditable||h==="a"&&!!r.getAttribute("href"),S=r.getAttribute("tabindex"),b=Number(S),D=null;return S&&!Number.isNaN(b)?D=b:O&&D===null&&(D=0),O&&r.disabled&&(D=null),D!==null&&(D>=0||i&&D<0)}return!1}function kt(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,h=Object(cn.a)(r.querySelectorAll("*")).filter(function(O){return Zt(O,i)});return Zt(r,i)&&h.unshift(r),h}var mt=null;function pa(){mt=document.activeElement}function ha(){mt=null}function va(){if(mt)try{mt.focus()}catch(r){}}function ga(r,i){if(i.keyCode===9){var h=kt(r),O=h[i.shiftKey?0:h.length-1],S=O===document.activeElement||r===document.activeElement;if(S){var b=h[i.shiftKey?h.length-1:0];b.focus(),i.preventDefault()}}}var Ft=Be.a.LEFT,Tt=Be.a.RIGHT,It=Be.a.UP,ft=Be.a.DOWN,pt=Be.a.ENTER,qt=Be.a.ESC,_t=[It,ft,Ft,Tt];function Nr(r,i,h,O){var S,b,D,N,K="prev",x="next",$="children",G="parent";if(r==="inline"&&O===pt)return{inlineTrigger:!0};var z=(S={},Object(me.a)(S,It,K),Object(me.a)(S,ft,x),S),oe=(b={},Object(me.a)(b,Ft,h?x:K),Object(me.a)(b,Tt,h?K:x),Object(me.a)(b,ft,$),Object(me.a)(b,pt,$),b),X=(D={},Object(me.a)(D,It,K),Object(me.a)(D,ft,x),Object(me.a)(D,pt,$),Object(me.a)(D,qt,G),Object(me.a)(D,Ft,h?$:G),Object(me.a)(D,Tt,h?G:$),D),k={inline:z,horizontal:oe,vertical:X,inlineSub:z,horizontalSub:X,verticalSub:X},ue=(N=k["".concat(r).concat(i?"":"Sub")])===null||N===void 0?void 0:N[O];switch(ue){case K:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ar(r){for(var i=r;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function wr(r,i){for(var h=r||document.activeElement;h;){if(i.has(h))return h;h=h.parentElement}return null}function Br(r,i){var h=kt(r,!0);return h.filter(function(O){return i.has(O)})}function er(r,i,h){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var S=Br(r,i),b=S.length,D=S.findIndex(function(N){return h===N});return O<0?D===-1?D=b-1:D-=1:O>0&&(D+=1),D=(D+b)%b,S[D]}function Mr(r,i,h,O,S,b,D,N,K,x){var $=t.useRef(),G=t.useRef();G.current=i;var z=function(){Ge.a.cancel($.current)};return t.useEffect(function(){return function(){z()}},[]),function(oe){var X=oe.which;if([].concat(_t,[pt,qt]).includes(X)){var k,ue,J,ne=function(){k=new Set,ue=new Map,J=new Map;var ge=b();return ge.forEach(function(ve){var Re=document.querySelector("[data-menu-id='".concat(Ut(O,ve),"']"));Re&&(k.add(Re),J.set(Re,ve),ue.set(ve,Re))}),k};ne();var ae=ue.get(i),q=wr(ae,k),le=J.get(q),ee=Nr(r,D(le,!0).length===1,h,X);if(!ee)return;_t.includes(X)&&oe.preventDefault();var ye=function(ge){if(ge){var ve=ge,Re=ge.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(ve=Re);var Me=J.get(ge);N(Me),z(),$.current=Object(Ge.a)(function(){G.current===Me&&ve.focus()})}};if(ee.sibling||!q){var te;!q||r==="inline"?te=S.current:te=Ar(q);var ce=er(te,k,q,ee.offset);ye(ce)}else if(ee.inlineTrigger)K(le);else if(ee.offset>0)K(le,!0),z(),$.current=Object(Ge.a)(function(){ne();var de=q.getAttribute("aria-controls"),ge=document.getElementById(de),ve=er(ge,k);ye(ve)},5);else if(ee.offset<0){var fe=D(le,!0),se=fe[fe.length-2],Y=ue.get(se);K(se,!1),ye(Y)}}x==null||x(oe)}}var Kr=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(r){var i=Object(On.a)(r,{value:r}),h=Object(H.a)(i,2),O=h[0],S=h[1];return t.useEffect(function(){nr+=1;var b="".concat(Kr,"-").concat(nr);S("rc-menu-uuid-".concat(b))},[]),O}var ya=e("p8sG");function Lr(r){Promise.resolve().then(r)}var Nt="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(Nt)},xr=function(i){return i.split(Nt)},At="rc-menu-more";function $r(){var r=t.useState({}),i=Object(H.a)(r,2),h=i[1],O=Object(t.useRef)(new Map),S=Object(t.useRef)(new Map),b=t.useState([]),D=Object(H.a)(b,2),N=D[0],K=D[1],x=Object(t.useRef)(0),$=Object(t.useCallback)(function(J,ne){var ae=tr(ne);S.current.set(ae,J),O.current.set(J,ae),x.current+=1;var q=x.current;Lr(function(){q===x.current&&h({})})},[]),G=Object(t.useCallback)(function(J,ne){var ae=tr(ne);S.current.delete(ae),O.current.delete(J)},[]),z=Object(t.useCallback)(function(J){K(J)},[]),oe=Object(t.useCallback)(function(J,ne){var ae=O.current.get(J)||"",q=xr(ae);return ne&&N.includes(q[0])&&q.unshift(At),q},[N]),X=Object(t.useCallback)(function(J,ne){return J.some(function(ae){var q=oe(ae,!0);return q.includes(ne)})},[oe]),k=function(){var ne=Object(cn.a)(O.current.keys());return N.length&&ne.push(At),ne},ue=Object(t.useCallback)(function(J){var ne="".concat(O.current.get(J)).concat(Nt),ae=new Set;return Object(cn.a)(S.current.keys()).forEach(function(q){q.startsWith(ne)&&ae.add(S.current.get(q))}),ae},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:z,isSubPathKey:X,getKeyPath:oe,getKeys:k,getSubPathKeys:ue}}var ht=[],Vr=function(i){var h,O,S=i.prefixCls,b=S===void 0?"rc-menu":S,D=i.style,N=i.className,K=i.tabIndex,x=K===void 0?0:K,$=i.children,G=i.direction,z=i.id,oe=i.mode,X=oe===void 0?"vertical":oe,k=i.inlineCollapsed,ue=i.disabled,J=i.disabledOverflow,ne=i.subMenuOpenDelay,ae=ne===void 0?.1:ne,q=i.subMenuCloseDelay,le=q===void 0?.1:q,ee=i.forceSubMenuRender,ye=i.defaultOpenKeys,te=i.openKeys,ce=i.activeKey,fe=i.defaultActiveFirst,se=i.selectable,Y=se===void 0?!0:se,de=i.multiple,ge=de===void 0?!1:de,ve=i.defaultSelectedKeys,Re=i.selectedKeys,Me=i.onSelect,be=i.onDeselect,Ce=i.inlineIndent,Ae=Ce===void 0?24:Ce,Ne=i.motion,Fe=i.defaultMotions,je=i.triggerSubMenuAction,We=je===void 0?"hover":je,Ze=i.builtinPlacements,Le=i.itemIcon,$e=i.expandIcon,ze=i.overflowedIndicator,Ke=ze===void 0?"...":ze,Sn=i.getPopupContainer,en=i.onClick,Ye=i.onOpenChange,an=i.onKeyDown,vn=i.openAnimation,gn=i.openTransitionName,Te=Object(Pe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Je=Pt($,ht),ke=t.useState(!1),Qe=Object(H.a)(ke,2),wn=Qe[0],$n=Qe[1],Bn=t.useRef(),nn=Wr(z),Rn=G==="rtl",sn=t.useMemo(function(){return X==="inline"&&k?["vertical",k]:[X,!1]},[X,k]),En=Object(H.a)(sn,2),qe=En[0],tn=En[1],Dn=t.useState(0),ln=Object(H.a)(Dn,2),Xe=ln[0],Ue=ln[1],Vn=Xe>=Je.length-1||qe!=="horizontal"||J,Jn=Object(On.a)(ye,{value:te,postState:function(_){return _||ht}}),et=Object(H.a)(Jn,2),yn=et[0],fn=et[1],Un=t.useState(yn),bn=Object(H.a)(Un,2),un=bn[0],zn=bn[1],jn=qe==="inline",Hn=t.useRef(!1);t.useEffect(function(){jn&&zn(yn)},[yn]),t.useEffect(function(){if(!Hn.current){Hn.current=!0;return}if(jn)fn(un);else{var re=[];fn(re),Ye==null||Ye(re)}},[jn]);var on=$r(),Pn=on.registerPath,he=on.unregisterPath,Ee=on.refreshOverflowKeys,we=on.isSubPathKey,_e=on.getKeyPath,Gn=on.getKeys,gt=on.getSubPathKeys,Kt=t.useMemo(function(){return{registerPath:Pn,unregisterPath:he}},[Pn,he]),Wt=t.useMemo(function(){return{isSubPathKey:we}},[we]);t.useEffect(function(){Ee(Vn?ht:Je.slice(Xe+1).map(function(re){return re.key}))},[Xe,Vn]);var Lt=Object(On.a)(ce||fe&&((h=Je[0])===null||h===void 0?void 0:h.key),{value:ce}),nt=Object(H.a)(Lt,2),yt=nt[0],it=nt[1],bt=_n(function(re){it(re)}),xt=_n(function(){it(void 0)}),Ot=Object(On.a)(ve||[],{value:Re,postState:function(_){return Array.isArray(_)?_:_==null?ht:[_]}}),Ct=Object(H.a)(Ot,2),tt=Ct[0],Fn=Ct[1],St=function(_){if(!!Y){var Oe=_.key,Ve=tt.includes(Oe),rn;Ve?rn=tt.filter(function(Qn){return Qn!==Oe}):ge?rn=[].concat(Object(cn.a)(tt),[Oe]):rn=[Oe],Fn(rn);var Ln=Object(pe.a)(Object(pe.a)({},_),{},{selectedKeys:rn});Ve?be==null||be(Ln):Me==null||Me(Ln)}},Rt=_n(function(re){en==null||en(U(re)),St(re)}),ot=_n(function(re,_){var Oe=yn.filter(function(rn){return rn!==re});if(_)Oe.push(re);else if(qe!=="inline"){var Ve=gt(re);Oe=Oe.filter(function(rn){return!Ve.has(rn)})}qn()(yn,Oe)||(fn(Oe),Ye==null||Ye(Oe))}),Yn=_n(Sn),lt=function(_,Oe){var Ve=Oe!=null?Oe:!yn.includes(_);ot(_,Ve)},ut=Mr(qe,yt,Rn,nn,Bn,Gn,_e,it,lt,an);t.useEffect(function(){$n(!0)},[]);var Et=qe!=="horizontal"||J?Je:Je.map(function(re,_){return t.createElement(W,{key:re.key,overflowDisabled:_>Xe},re)}),Dt=t.createElement(R,Object(L.a)({id:z,ref:Bn,prefixCls:"".concat(b,"-overflow"),component:"ul",itemComponent:jt,className:De()(b,"".concat(b,"-root"),"".concat(b,"-").concat(qe),N,(O={},Object(me.a)(O,"".concat(b,"-inline-collapsed"),tn),Object(me.a)(O,"".concat(b,"-rtl"),Rn),O)),dir:G,style:D,role:"menu",tabIndex:x,data:Et,renderRawItem:function(_){return _},renderRawRest:function(_){var Oe=_.length,Ve=Oe?Je.slice(-Oe):null;return t.createElement(Xt,{eventKey:At,title:Ke,disabled:Vn,internalPopupClose:Oe===0},Ve)},maxCount:qe!=="horizontal"||J?R.INVALIDATE:R.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(_){Ue(_)},onKeyDown:ut},Te));return t.createElement(Jt.Provider,{value:nn},t.createElement(W,{prefixCls:b,mode:qe,openKeys:yn,rtl:Rn,disabled:ue,motion:wn?Ne:null,defaultMotions:wn?Fe:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:tt,inlineIndent:Ae,subMenuOpenDelay:ae,subMenuCloseDelay:le,forceSubMenuRender:ee,builtinPlacements:Ze,triggerSubMenuAction:We,getPopupContainer:Yn,itemIcon:Le,expandIcon:$e,onItemClick:Rt,onOpenChange:ot},t.createElement(xe.Provider,{value:Wt},Dt),t.createElement(ie.Provider,{value:Kt},Je)))},Jr=Vr,Ur=function(i){var h=i.className,O=i.title,S=i.eventKey,b=i.children,D=Object(Pe.a)(i,["className","title","eventKey","children"]),N=t.useContext(E),K=N.prefixCls,x="".concat(K,"-item-group");return t.createElement("li",Object(L.a)({},D,{onClick:function(G){return G.stopPropagation()},className:De()(x,h)}),t.createElement("div",{className:"".concat(x,"-title"),title:typeof O=="string"?O:void 0},O),t.createElement("ul",{className:"".concat(x,"-list")},b))};function zr(r){var i=r.children,h=Object(Pe.a)(r,["children"]),O=Ie(h.eventKey),S=Pt(i,O),b=Z();return b?S:t.createElement(Ur,h,S)}function Hr(r){var i=r.className,h=r.style,O=t.useContext(E),S=O.prefixCls,b=Z();return b?null:t.createElement("li",{className:De()("".concat(S,"-item-divider"),i),style:h})}var st=Jr;st.Item=jt,st.SubMenu=Xt,st.ItemGroup=zr,st.Divider=Hr;var Gr=st,Yr=e("eDIo");function Qr(r,i){var h=r.prefixCls,O=r.editable,S=r.locale,b=r.style;return!O||O.showAdd===!1?null:t.createElement("button",{ref:i,type:"button",className:"".concat(h,"-nav-add"),style:b,"aria-label":(S==null?void 0:S.addAriaLabel)||"Add tab",onClick:function(N){O.onEdit("add",{event:N})}},O.addIcon||"+")}var rr=t.forwardRef(Qr);function Xr(r,i){var h=r.prefixCls,O=r.id,S=r.tabs,b=r.locale,D=r.mobile,N=r.moreIcon,K=N===void 0?"More":N,x=r.moreTransitionName,$=r.style,G=r.className,z=r.editable,oe=r.tabBarGutter,X=r.rtl,k=r.onTabClick,ue=Object(t.useState)(!1),J=Object(H.a)(ue,2),ne=J[0],ae=J[1],q=Object(t.useState)(null),le=Object(H.a)(q,2),ee=le[0],ye=le[1],te="".concat(O,"-more-popup"),ce="".concat(h,"-dropdown"),fe=ee!==null?"".concat(te,"-").concat(ee):null,se=b==null?void 0:b.dropdownAriaLabel,Y=t.createElement(Gr,{onClick:function(Ce){var Ae=Ce.key,Ne=Ce.domEvent;k(Ae,Ne),ae(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[ee],"aria-label":se!==void 0?se:"expanded dropdown"},S.map(function(be){return t.createElement(jt,{key:be.key,id:"".concat(te,"-").concat(be.key),role:"option","aria-controls":O&&"".concat(O,"-panel-").concat(be.key),disabled:be.disabled},be.tab)}));function de(be){for(var Ce=S.filter(function(We){return!We.disabled}),Ae=Ce.findIndex(function(We){return We.key===ee})||0,Ne=Ce.length,Fe=0;Fe<Ne;Fe+=1){Ae=(Ae+be+Ne)%Ne;var je=Ce[Ae];if(!je.disabled){ye(je.key);return}}}function ge(be){var Ce=be.which;if(!ne){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(Ce)&&(ae(!0),be.preventDefault());return}switch(Ce){case Be.a.UP:de(-1),be.preventDefault();break;case Be.a.DOWN:de(1),be.preventDefault();break;case Be.a.ESC:ae(!1);break;case Be.a.SPACE:case Be.a.ENTER:ee!==null&&k(ee,be);break}}Object(t.useEffect)(function(){var be=document.getElementById(fe);be&&be.scrollIntoView&&be.scrollIntoView(!1)},[ee]),Object(t.useEffect)(function(){ne||ye(null)},[ne]);var ve=Object(me.a)({},X?"marginLeft":"marginRight",oe);S.length||(ve.visibility="hidden",ve.order=1);var Re=De()(Object(me.a)({},"".concat(ce,"-rtl"),X)),Me=D?null:t.createElement(Yr.default,{prefixCls:ce,overlay:Y,trigger:["hover"],visible:ne,transitionName:x,onVisibleChange:ae,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(h,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(O,"-more"),"aria-expanded":ne,onKeyDown:ge},K));return t.createElement("div",{className:De()("".concat(h,"-nav-operations"),G),style:$,ref:i},Me,t.createElement(rr,{prefixCls:h,locale:b,editable:z}))}var Zr=t.forwardRef(Xr),wt=Object(t.createContext)(null),kr=.1,ar=.01,vt=20,sr=Math.pow(.995,vt);function qr(r,i){var h=Object(t.useState)(),O=Object(H.a)(h,2),S=O[0],b=O[1],D=Object(t.useState)(0),N=Object(H.a)(D,2),K=N[0],x=N[1],$=Object(t.useState)(0),G=Object(H.a)($,2),z=G[0],oe=G[1],X=Object(t.useState)(),k=Object(H.a)(X,2),ue=k[0],J=k[1],ne=Object(t.useRef)();function ae(ce){var fe=ce.touches[0],se=fe.screenX,Y=fe.screenY;b({x:se,y:Y}),window.clearInterval(ne.current)}function q(ce){if(!!S){ce.preventDefault();var fe=ce.touches[0],se=fe.screenX,Y=fe.screenY;b({x:se,y:Y});var de=se-S.x,ge=Y-S.y;i(de,ge);var ve=Date.now();x(ve),oe(ve-K),J({x:de,y:ge})}}function le(){if(!!S&&(b(null),J(null),ue)){var ce=ue.x/z,fe=ue.y/z,se=Math.abs(ce),Y=Math.abs(fe);if(Math.max(se,Y)<kr)return;var de=ce,ge=fe;ne.current=window.setInterval(function(){if(Math.abs(de)<ar&&Math.abs(ge)<ar){window.clearInterval(ne.current);return}de*=sr,ge*=sr,i(de*vt,ge*vt)},vt)}}var ee=Object(t.useRef)();function ye(ce){var fe=ce.deltaX,se=ce.deltaY,Y=0,de=Math.abs(fe),ge=Math.abs(se);de===ge?Y=ee.current==="x"?fe:se:de>ge?(Y=fe,ee.current="x"):(Y=se,ee.current="y"),i(-Y,-Y)&&ce.preventDefault()}var te=Object(t.useRef)(null);te.current={onTouchStart:ae,onTouchMove:q,onTouchEnd:le,onWheel:ye},t.useEffect(function(){function ce(de){te.current.onTouchStart(de)}function fe(de){te.current.onTouchMove(de)}function se(de){te.current.onTouchEnd(de)}function Y(de){te.current.onWheel(de)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",se,{passive:!1}),r.current.addEventListener("touchstart",ce,{passive:!1}),r.current.addEventListener("wheel",Y),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",se)}},[])}function _r(){var r=Object(t.useRef)(new Map);function i(O){return r.current.has(O)||r.current.set(O,t.createRef()),r.current.get(O)}function h(O){r.current.delete(O)}return[i,h]}function ir(r,i){var h=t.useRef(r),O=t.useState({}),S=Object(H.a)(O,2),b=S[1];function D(N){var K=typeof N=="function"?N(h.current):N;K!==h.current&&i(K,h.current),h.current=K,b({})}return[h.current,D]}var or=function(i){var h=i.position,O=i.prefixCls,S=i.extra;if(!S)return null;var b,D=S;return h==="right"&&(b=D.right||!D.left&&D||null),h==="left"&&(b=D.left||null),b?t.createElement("div",{className:"".concat(O,"-extra-content")},b):null};function ea(r,i){var h,O=t.useContext(wt),S=O.prefixCls,b=O.tabs,D=r.className,N=r.style,K=r.id,x=r.animated,$=r.activeKey,G=r.rtl,z=r.extra,oe=r.editable,X=r.locale,k=r.tabPosition,ue=r.tabBarGutter,J=r.children,ne=r.onTabClick,ae=r.onTabScroll,q=Object(t.useRef)(),le=Object(t.useRef)(),ee=Object(t.useRef)(),ye=Object(t.useRef)(),te=_r(),ce=Object(H.a)(te,2),fe=ce[0],se=ce[1],Y=k==="top"||k==="bottom",de=ir(0,function(re,_){Y&&ae&&ae({direction:re>_?"left":"right"})}),ge=Object(H.a)(de,2),ve=ge[0],Re=ge[1],Me=ir(0,function(re,_){!Y&&ae&&ae({direction:re>_?"top":"bottom"})}),be=Object(H.a)(Me,2),Ce=be[0],Ae=be[1],Ne=Object(t.useState)(0),Fe=Object(H.a)(Ne,2),je=Fe[0],We=Fe[1],Ze=Object(t.useState)(0),Le=Object(H.a)(Ze,2),$e=Le[0],ze=Le[1],Ke=Object(t.useState)(0),Sn=Object(H.a)(Ke,2),en=Sn[0],Ye=Sn[1],an=Object(t.useState)(0),vn=Object(H.a)(an,2),gn=vn[0],Te=vn[1],Je=Object(t.useState)(null),ke=Object(H.a)(Je,2),Qe=ke[0],wn=ke[1],$n=Object(t.useState)(null),Bn=Object(H.a)($n,2),nn=Bn[0],Rn=Bn[1],sn=Object(t.useState)(0),En=Object(H.a)(sn,2),qe=En[0],tn=En[1],Dn=Object(t.useState)(0),ln=Object(H.a)(Dn,2),Xe=ln[0],Ue=ln[1],Vn=Cn(new Map),Jn=Object(H.a)(Vn,2),et=Jn[0],yn=Jn[1],fn=rt(b,et,je),Un="".concat(S,"-nav-operations-hidden"),bn=0,un=0;Y?G?(bn=0,un=Math.max(0,je-Qe)):(bn=Math.min(0,Qe-je),un=0):(bn=Math.min(0,nn-$e),un=0);function zn(re){return re<bn?bn:re>un?un:re}var jn=Object(t.useRef)(),Hn=Object(t.useState)(),on=Object(H.a)(Hn,2),Pn=on[0],he=on[1];function Ee(){he(Date.now())}function we(){window.clearTimeout(jn.current)}qr(q,function(re,_){function Oe(Ve,rn){Ve(function(Ln){var Qn=zn(Ln+rn);return Qn})}if(Y){if(Qe>=je)return!1;Oe(Re,re)}else{if(nn>=$e)return!1;Oe(Ae,_)}return we(),Ee(),!0}),Object(t.useEffect)(function(){return we(),Pn&&(jn.current=window.setTimeout(function(){he(0)},100)),we},[Pn]);function _e(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,_=fn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(Y){var Oe=ve;G?_.right<ve?Oe=_.right:_.right+_.width>ve+Qe&&(Oe=_.right+_.width-Qe):_.left<-ve?Oe=-_.left:_.left+_.width>-ve+Qe&&(Oe=-(_.left+_.width-Qe)),Ae(0),Re(zn(Oe))}else{var Ve=Ce;_.top<-Ce?Ve=-_.top:_.top+_.height>-Ce+nn&&(Ve=-(_.top+_.height-nn)),Re(0),Ae(zn(Ve))}}var Gn=at(fn,{width:Qe,height:nn,left:ve,top:Ce},{width:en,height:gn},{width:qe,height:Xe},Object(pe.a)(Object(pe.a)({},r),{},{tabs:b})),gt=Object(H.a)(Gn,2),Kt=gt[0],Wt=gt[1],Lt=b.map(function(re){var _=re.key;return t.createElement(Kn,{id:K,prefixCls:S,key:_,rtl:G,tab:re,closable:re.closable,editable:oe,active:_===$,tabPosition:k,tabBarGutter:ue,renderWrapper:J,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:fe(_),onClick:function(Ve){ne(_,Ve)},onRemove:function(){se(_)},onFocus:function(){_e(_),Ee(),G||(q.current.scrollLeft=0),q.current.scrollTop=0}})}),nt=Nn(function(){var re,_,Oe,Ve,rn,Ln,Qn,$t,Vt,la=((re=q.current)===null||re===void 0?void 0:re.offsetWidth)||0,ua=((_=q.current)===null||_===void 0?void 0:_.offsetHeight)||0,mr=((Oe=ye.current)===null||Oe===void 0?void 0:Oe.offsetWidth)||0,fr=((Ve=ye.current)===null||Ve===void 0?void 0:Ve.offsetHeight)||0,da=((rn=ee.current)===null||rn===void 0?void 0:rn.offsetWidth)||0,ca=((Ln=ee.current)===null||Ln===void 0?void 0:Ln.offsetHeight)||0;wn(la),Rn(ua),tn(mr),Ue(fr);var pr=(((Qn=le.current)===null||Qn===void 0?void 0:Qn.offsetWidth)||0)-mr,hr=((($t=le.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-fr;We(pr),ze(hr);var vr=(Vt=ee.current)===null||Vt===void 0?void 0:Vt.className.includes(Un);Ye(pr-(vr?0:da)),Te(hr-(vr?0:ca)),yn(function(){var gr=new Map;return b.forEach(function(ma){var yr=ma.key,dt=fe(yr).current;dt&&gr.set(yr,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),gr})}),yt=b.slice(0,Kt),it=b.slice(Wt+1),bt=[].concat(Object(cn.a)(yt),Object(cn.a)(it)),xt=Object(t.useState)(),Ot=Object(H.a)(xt,2),Ct=Ot[0],tt=Ot[1],Fn=fn.get($),St=Object(t.useRef)();function Rt(){Ge.a.cancel(St.current)}Object(t.useEffect)(function(){var re={};return Fn&&(Y?(G?re.right=Fn.right:re.left=Fn.left,re.width=Fn.width):(re.top=Fn.top,re.height=Fn.height)),Rt(),St.current=Object(Ge.a)(function(){tt(re)}),Rt},[Fn,Y,G]),Object(t.useEffect)(function(){_e()},[$,Fn,fn,Y]),Object(t.useEffect)(function(){nt()},[G,ue,$,b.map(function(re){return re.key}).join("_")]);var ot=!!bt.length,Yn="".concat(S,"-nav-wrap"),lt,ut,Et,Dt;return Y?G?(ut=ve>0,lt=ve+Qe<je):(lt=ve<0,ut=-ve+Qe<je):(Et=Ce<0,Dt=-Ce+nn<$e),t.createElement("div",{ref:i,role:"tablist",className:De()("".concat(S,"-nav"),D),style:N,onKeyDown:function(){Ee()}},t.createElement(or,{position:"left",extra:z,prefixCls:S}),t.createElement(Mn.default,{onResize:nt},t.createElement("div",{className:De()(Yn,(h={},Object(me.a)(h,"".concat(Yn,"-ping-left"),lt),Object(me.a)(h,"".concat(Yn,"-ping-right"),ut),Object(me.a)(h,"".concat(Yn,"-ping-top"),Et),Object(me.a)(h,"".concat(Yn,"-ping-bottom"),Dt),h)),ref:q},t.createElement(Mn.default,{onResize:nt},t.createElement("div",{ref:le,className:"".concat(S,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Ce,"px)"),transition:Pn?"none":void 0}},Lt,t.createElement(rr,{ref:ye,prefixCls:S,locale:X,editable:oe,style:{visibility:ot?"hidden":null}}),t.createElement("div",{className:De()("".concat(S,"-ink-bar"),Object(me.a)({},"".concat(S,"-ink-bar-animated"),x.inkBar)),style:Ct}))))),t.createElement(Zr,Object(L.a)({},r,{ref:ee,prefixCls:S,tabs:bt,className:!ot&&Un})),t.createElement(or,{position:"right",extra:z,prefixCls:S}))}var lr=t.forwardRef(ea);function na(r){var i=r.id,h=r.activeKey,O=r.animated,S=r.tabPosition,b=r.rtl,D=r.destroyInactiveTabPane,N=t.useContext(wt),K=N.prefixCls,x=N.tabs,$=O.tabPane,G=x.findIndex(function(z){return z.key===h});return t.createElement("div",{className:De()("".concat(K,"-content-holder"))},t.createElement("div",{className:De()("".concat(K,"-content"),"".concat(K,"-content-").concat(S),Object(me.a)({},"".concat(K,"-content-animated"),$)),style:G&&$?Object(me.a)({},b?"marginRight":"marginLeft","-".concat(G,"00%")):null},x.map(function(z){return t.cloneElement(z.node,{key:z.key,prefixCls:K,tabKey:z.key,id:i,animated:$,active:z.key===h,destroyInactiveTabPane:D})})))}function ur(r){var i=r.prefixCls,h=r.forceRender,O=r.className,S=r.style,b=r.id,D=r.active,N=r.animated,K=r.destroyInactiveTabPane,x=r.tabKey,$=r.children,G=t.useState(h),z=Object(H.a)(G,2),oe=z[0],X=z[1];t.useEffect(function(){D?X(!0):K&&X(!1)},[D,K]);var k={};return D||(N?(k.visibility="hidden",k.height=0,k.overflowY="hidden"):k.display="none"),t.createElement("div",{id:b&&"".concat(b,"-panel-").concat(x),role:"tabpanel",tabIndex:D?0:-1,"aria-labelledby":b&&"".concat(b,"-tab-").concat(x),"aria-hidden":!D,style:Object(pe.a)(Object(pe.a)({},k),S),className:De()("".concat(i,"-tabpane"),D&&"".concat(i,"-tabpane-active"),O)},(D||oe||h)&&$)}var dr=0;function ta(r){return Object(hn.a)(r).map(function(i){if(t.isValidElement(i)){var h=i.key!==void 0?String(i.key):void 0;return Object(pe.a)(Object(pe.a)({key:h},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(r,i){var h,O=r.id,S=r.prefixCls,b=S===void 0?"rc-tabs":S,D=r.className,N=r.children,K=r.direction,x=r.activeKey,$=r.defaultActiveKey,G=r.editable,z=r.animated,oe=z===void 0?{inkBar:!0,tabPane:!1}:z,X=r.tabPosition,k=X===void 0?"top":X,ue=r.tabBarGutter,J=r.tabBarStyle,ne=r.tabBarExtraContent,ae=r.locale,q=r.moreIcon,le=r.moreTransitionName,ee=r.destroyInactiveTabPane,ye=r.renderTabBar,te=r.onChange,ce=r.onTabClick,fe=r.onTabScroll,se=Object(Pe.a)(r,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Y=ta(N),de=K==="rtl",ge;oe===!1?ge={inkBar:!1,tabPane:!1}:oe===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(pe.a)({inkBar:!0,tabPane:!1},Object(dn.a)(oe)==="object"?oe:{});var ve=Object(t.useState)(!1),Re=Object(H.a)(ve,2),Me=Re[0],be=Re[1];Object(t.useEffect)(function(){be(Object(In.a)())},[]);var Ce=Object(On.a)(function(){var Te;return(Te=Y[0])===null||Te===void 0?void 0:Te.key},{value:x,defaultValue:$}),Ae=Object(H.a)(Ce,2),Ne=Ae[0],Fe=Ae[1],je=Object(t.useState)(function(){return Y.findIndex(function(Te){return Te.key===Ne})}),We=Object(H.a)(je,2),Ze=We[0],Le=We[1];Object(t.useEffect)(function(){var Te=Y.findIndex(function(ke){return ke.key===Ne});if(Te===-1){var Je;Te=Math.max(0,Math.min(Ze,Y.length-1)),Fe((Je=Y[Te])===null||Je===void 0?void 0:Je.key)}Le(Te)},[Y.map(function(Te){return Te.key}).join("_"),Ne,Ze]);var $e=Object(On.a)(null,{value:O}),ze=Object(H.a)($e,2),Ke=ze[0],Sn=ze[1],en=k;Me&&!["left","right"].includes(k)&&(en="top"),Object(t.useEffect)(function(){O||(Sn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ye(Te,Je){ce==null||ce(Te,Je),Fe(Te),te==null||te(Te)}var an={id:Ke,activeKey:Ne,animated:ge,tabPosition:en,rtl:de,mobile:Me},vn,gn=Object(pe.a)(Object(pe.a)({},an),{},{editable:G,locale:ae,moreIcon:q,moreTransitionName:le,tabBarGutter:ue,onTabClick:Ye,onTabScroll:fe,extra:ne,style:J,panes:N});return ye?vn=ye(gn,lr):vn=t.createElement(lr,gn),t.createElement(wt.Provider,{value:{tabs:Y,prefixCls:b}},t.createElement("div",Object(L.a)({ref:i,id:O,className:De()(b,"".concat(b,"-").concat(en),(h={},Object(me.a)(h,"".concat(b,"-mobile"),Me),Object(me.a)(h,"".concat(b,"-editable"),G),Object(me.a)(h,"".concat(b,"-rtl"),de),h),D)},se),vn,t.createElement(na,Object(L.a)({destroyInactiveTabPane:ee},an,{animated:ge}))))}var cr=t.forwardRef(ra);cr.TabPane=ur;var aa=cr,sa=aa,Bt=e("MZF8"),mn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Mt(r,i){var h,O=(h=r.match(/\.(\w+)$/))===null||h===void 0?void 0:h[1];return O||(O=i.tsx?"tsx":"jsx"),O}var oa=r=>{var i,h,O,S=Object(t.useRef)(),b=Object(t.useContext)(mn.context),D=b.locale,N=Object(mn.useLocaleProps)(D,r),K=Object(mn.useDemoUrl)(N.identifier),x=N.demoUrl||K,$=(Bt.a===null||Bt.a===void 0?void 0:Bt.a.location.hash)==="#".concat(N.identifier),G=Object.keys(N.sources).length===1,z=Object(mn.useCodeSandbox)((i=N.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:N),oe=Object(mn.useRiddle)((h=N.hideActions)!==null&&h!==void 0&&h.includes("RIDDLE")?null:N),X=Object(mn.useMotions)(N.motions||[],S.current),k=Object(V.default)(X,2),ue=k[0],J=k[1],ne=Object(mn.useCopy)(),ae=Object(V.default)(ne,2),q=ae[0],le=ae[1],ee=Object(t.useState)("_"),ye=Object(V.default)(ee,2),te=ye[0],ce=ye[1],fe=Object(t.useState)(Mt(te,N.sources[te])),se=Object(V.default)(fe,2),Y=se[0],de=se[1],ge=Object(t.useState)(Boolean(N.defaultShowCode)),ve=Object(V.default)(ge,2),Re=ve[0],Me=ve[1],be=Object(t.useState)(Math.random()),Ce=Object(V.default)(be,2),Ae=Ce[0],Ne=Ce[1],Fe=N.sources[te][Y]||N.sources[te].content,je=Object(mn.useTSPlaygroundUrl)(D,Fe),We=Object(t.useRef)(),Ze=Object(mn.usePrefersColor)(),Le=Object(V.default)(Ze,1),$e=Le[0];Object(t.useEffect)(()=>{Ne(Math.random())},[$e]);function ze(Ke){ce(Ke),de(Mt(Ke,N.sources[Ke]))}return y.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:S,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:Ae,src:x,ref:We}):N.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&y.a.createElement(mn.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),oe&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:oe}),N.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>ue()}),N.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ne(Math.random())}),!((O=N.hideActions)!==null&&O!==void 0&&O.includes("EXTERNAL"))&&y.a.createElement(mn.Link,{target:"_blank",to:x},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>q(Fe)}),Y==="tsx"&&Re&&y.a.createElement(mn.Link,{target:"_blank",to:je},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Me(!Re)})),Re&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&y.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:ze},Object.keys(N.sources).map(Ke=>y.a.createElement(ur,{tab:Ke==="_"?"index.".concat(Mt(Ke,N.sources[Ke])):Ke,key:Ke}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(ia.a,{code:Fe,lang:Y,showCopy:!1}))))},Oa=pn.default=oa},"50YJ":function(Tn,pn,e){"use strict";e.r(pn);var V=e("q1tI"),t=e.n(V),y=e("dEAq"),L=e.n(y),me=e("0zqC"),H=e("ZpkN"),dn=e("JjdP"),Pe=t.a.memo(dn.default["migrate2-demo"].component);pn.default=pe=>(t.a.useEffect(()=>{pe!=null&&pe.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(pe.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u6298\u4E2D\u8FC1\u79FB\u65B9\u6848"},t.a.createElement(y.AnchorLink,{to:"#\u6298\u4E2D\u8FC1\u79FB\u65B9\u6848","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6298\u4E2D\u8FC1\u79FB\u65B9\u6848"),t.a.createElement("h3",{id:"\u80CC\u666F\u7B80\u8FF0"},t.a.createElement(y.AnchorLink,{to:"#\u80CC\u666F\u7B80\u8FF0","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u80CC\u666F\u7B80\u8FF0"),t.a.createElement("p",null,"0.x \u5230 1.x \u7248\u672C\u7684\u5347\u7EA7\u6700\u5927\u7684\u6539\u52A8\u662F formData \u4ECE\u5916\u7F6E\u53D8\u6210\u4E86\u5185\u7F6E\uFF0C\u597D\u5904\u662F\uFF1A"),t.a.createElement("ol",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u8868\u5355\u63D0\u4EA4\u6536\u675F\u5230\u4E86 FR \u5185\u90E8\uFF0C\u786E\u4FDD\u670D\u52A1\u7AEF\u6821\u9A8C\u3001\u5F02\u6B65\u64CD\u4F5C\u3001\u63D0\u4EA4\u524D\u7684\u6570\u636E\u5904\u7406\u548C\u6027\u80FD\u4F18\u5316\u7B49\u4E00\u7CFB\u5217\u4E8B\u6210\u4E3A\u53EF\u80FD\uFF0C\u4E4B\u524D\u7684\u6784\u5EFA FR \u5B8C\u5168\u65E0\u6CD5\u611F\u77E5\u7528\u6237\u4F55\u65F6\u63D0\u4EA4\u4E86\u8868\u5355\uFF0C\u6240\u4EE5\u5B8C\u5168\u65E0\u6CD5\u5E72\u6D89")),t.a.createElement("li",null,t.a.createElement("p",null,"\u7528\u6237\u4E0D\u7528\u6BCF\u6B21\u90FD\u6A21\u677F\u5316\u5730\u53BB\u5199 formData\u3001onChange\u3001onValidate \u7B49 props\uFF0CshowValidate \u8FD9\u7C7B\u4E0D\u81EA\u7136\u7684 props \u4E5F\u76F4\u63A5\u6210\u4E3A\u5185\u90E8\u903B\u8F91\uFF0C\u800C\u4E0D\u9700\u8981\u7528\u6237\u64CD\u5FC3\u3002\u540C\u65F6\u4E5F\u907F\u514D\u4E86\u5BF9 onChange \u7684\u8BEF\u7528\uFF0C\u6709\u4E0D\u5C11 case \u7528\u6237\u5728 onChange \u91CC\u5199\u4E86\u975E\u5E38\u590D\u6742\u7684\u903B\u8F91\uFF0C\u6CE8\u610F\u8FD9\u4F1A\u5728\u6BCF\u6B21\u8868\u5355\u8F93\u5165\u65F6\u90FD\u89E6\u53D1\uFF0C\u662F\u975E\u5E38\u5F71\u54CD\u6027\u80FD\u7684")),t.a.createElement("li",null,t.a.createElement("p",null,"\u6709\u5F88\u591A\u7EC6\u8282\u4E0A\u7684\u8001\u5927\u96BE\u95EE\u9898\u5728\u65E7\u6A21\u5F0F\u4E0B\u662F\u65E0\u6CD5\u5904\u7406\u7684\uFF0C\u4F8B\u5982\u81EA\u7136\u5224\u65AD\u662F\u5426\u663E\u793A\u6821\u9A8C\u4FE1\u606F\uFF08\u56E0\u4E3A FR \u4E0D\u77E5\u9053\u5408\u9002\u63D0\u4EA4\u4E86\uFF09\uFF0C\u4F8B\u5982\u9690\u85CF\u503C\u3001\u7A7A\u503C\u5728\u63D0\u4EA4\u65F6\u53BB\u9664\uFF0C\u4F8B\u5982\u8F93\u5165\u5B57\u7B26\u4E32\u5E26\u524D\u540E\u7A7A\u683C\u63D0\u4EA4\u65F6 trim \u6389\uFF0C\u7B49\u7B49"))),t.a.createElement("h3",{id:"\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE"},t.a.createElement(y.AnchorLink,{to:"#\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE"),t.a.createElement("p",null,"\u5F7B\u5E95\u8FC1\u79FB\u5C31\u662F\u5C06\u66B4\u9732\u5728\u5916\u90E8\u7684 formData/onChange/onValidate \u65B9\u6CD5\u6536\u675F\u5230\u8868\u5355\u5185\u90E8\u81EA\u884C\u5904\u7406\uFF0C\u800C\u5728\u5916\u90E8\u7EDF\u4E00\u4F7F\u7528 form.getValues() \u548C form.setValues() \u6765\u66FF\u6362\u3002\u5F53\u66B4\u9732\u5728\u5916\u90E8\u7684 formData \u5B58\u653E\u5728 context/redux/dva \u91CC\u65F6\uFF0C\u8981\u627E\u5230\u6240\u6709\u5728\u5916\u90E8\u5BF9 formData \u7684\u4F7F\u7528\u548C\u64CD\u4F5C\u4F1A\u53D8\u6210\u8DE8\u591A\u4E2A\u6587\u4EF6\u7684\u201C\u5927\u5DE5\u7A0B\u201D\u3002\u6240\u4EE5\u5BF9\u4E8E\u6B64\u7C7B\u60C5\u51B5\u6211\u4EEC\u9700\u8981\u4E00\u4E2A"),t.a.createElement("h3",{id:"\u6298\u4E2D\u65B9\u6848"},t.a.createElement(y.AnchorLink,{to:"#\u6298\u4E2D\u65B9\u6848","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6298\u4E2D\u65B9\u6848"),t.a.createElement("p",null,"\u7B14\u8005\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u7684\u6298\u4E2D\u5347\u7EA7\u65B9\u6848\uFF0C\u80FD\u591F\u5728\u6781\u5C0F\u7684\u6539\u52A8\u4E0B\u201C\u517C\u5BB9\u201D\u5B8C\u6210\u5347\u7EA7\uFF1A"),t.a.createElement("p",null,t.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),t.a.createElement(H.a,{code:`import React, { useState } from 'react';
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
  const [showValidate, setShowValidate] = useState(false);

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
        schema={schema}
        formData={formData}
        onChange={setData}
        onValidate={setValid}
        showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}

export default Demo;`,lang:"js"}),t.a.createElement("p",null,"\u8FC1\u79FB\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),t.a.createElement(me.default,dn.default["migrate2-demo"].previewerProps,t.a.createElement(Pe,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("p",null,"\u6211\u4EEC\u770B\u5230\u57FA\u672C\u6539\u52A8\u5206\u4E24\u6B65"),t.a.createElement("ol",null,t.a.createElement("li",null,"formData/onChange/onValidate/showValidate \u4ECE FR \u7684 props \u53D8\u4E3A useForm \u7684\u5165\u53C2"),t.a.createElement("li",null,"\u5728\u7EC4\u4EF6\u52A0\u8F7D\u65F6\uFF0C\u8C03\u7528 form.init() \u65B9\u6CD5\u521D\u59CB\u5316")),t.a.createElement("h3",{id:"\u7ED3\u8BBA"},t.a.createElement(y.AnchorLink,{to:"#\u7ED3\u8BBA","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u7ED3\u8BBA"),t.a.createElement("p",null,"\u6298\u4E2D\u7684\u5347\u7EA7\u65B9\u6848\u4EE5\u7528\u65B0\u7248 FormRender \u4E3A\u58F3\uFF0C\u7EE7\u7EED\u8D70\u4E86 0.x \u7248\u7684\u72B6\u6001\u5916\u7F6E\u7684\u6A21\u5F0F\uFF0C\u6240\u4EE5\u5347\u7EA7\u6210\u672C\u5F88\u5C0F\uFF0C\u4F46\u540C\u65F6\u4E5F\u65E0\u6CD5\u4EAB\u53D7\u5230 100% \u7684\u65B0\u529F\u80FD\u3002\u6240\u4EE5\u7B14\u8005\u5EFA\u8BAE\u7684\u4F7F\u7528\u573A\u666F\u662F\u5927\u9762\u79EF\u7684\u65E7\u9879\u76EE\u5FEB\u901F\u5347\u7EA7\uFF0C\u4E14\u5F7B\u5E95\u5347\u7EA7\u65B9\u6848\u5F00\u9500\u8F83\u5927\u7684\u60C5\u51B5\u3002")))))},"80pN":function(Tn,pn,e){"use strict";(function(V){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),y=e("q1tI"),L=e("i8i4"),me=e("QCnb");function H(u){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+u,B=1;B<arguments.length;B++)A+="&args[]="+encodeURIComponent(arguments[B]);return"Minified React error #"+u+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dn=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;dn.hasOwnProperty("ReactCurrentDispatcher")||(dn.ReactCurrentDispatcher={current:null}),dn.hasOwnProperty("ReactCurrentBatchConfig")||(dn.ReactCurrentBatchConfig={suspense:null});function Pe(u){var A=u,B=u;if(u.alternate)for(;A.return;)A=A.return;else{u=A;do A=u,(A.effectTag&1026)!=0&&(B=A.return),u=A.return;while(u)}return A.tag===3?B:null}function pe(u){if(Pe(u)!==u)throw Error(H(188))}function He(u){var A=u.alternate;if(!A){if(A=Pe(u),A===null)throw Error(H(188));return A!==u?null:u}for(var B=u,ie=A;;){var Z=B.return;if(Z===null)break;var Se=Z.alternate;if(Se===null){if(ie=Z.return,ie!==null){B=ie;continue}break}if(Z.child===Se.child){for(Se=Z.child;Se;){if(Se===B)return pe(Z),u;if(Se===ie)return pe(Z),A;Se=Se.sibling}throw Error(H(188))}if(B.return!==ie.return)B=Z,ie=Se;else{for(var Ie=!1,xe=Z.child;xe;){if(xe===B){Ie=!0,B=Z,ie=Se;break}if(xe===ie){Ie=!0,ie=Z,B=Se;break}xe=xe.sibling}if(!Ie){for(xe=Se.child;xe;){if(xe===B){Ie=!0,B=Se,ie=Z;break}if(xe===ie){Ie=!0,ie=Se,B=Z;break}xe=xe.sibling}if(!Ie)throw Error(H(189))}}if(B.alternate!==ie)throw Error(H(190))}if(B.tag!==3)throw Error(H(188));return B.stateNode.current===B?u:A}function De(){return!0}function hn(){return!1}function In(u,A,B,ie){this.dispatchConfig=u,this._targetInst=A,this.nativeEvent=B,u=this.constructor.Interface;for(var Z in u)u.hasOwnProperty(Z)&&((A=u[Z])?this[Z]=A(B):Z==="target"?this.target=ie:this[Z]=B[Z]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?De:hn,this.isPropagationStopped=hn,this}t(In.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=De)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=De)},persist:function(){this.isPersistent=De},isPersistent:hn,destructor:function(){var u=this.constructor.Interface,A;for(A in u)this[A]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=hn,this._dispatchInstances=this._dispatchListeners=null}}),In.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(u){return u.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},In.extend=function(u){function A(){}function B(){return ie.apply(this,arguments)}var ie=this;A.prototype=ie.prototype;var Z=new A;return t(Z,B.prototype),B.prototype=Z,B.prototype.constructor=B,B.Interface=t({},ie.Interface,u),B.extend=ie.extend,Ge(B),B},Ge(In);function On(u,A,B,ie){if(this.eventPool.length){var Z=this.eventPool.pop();return this.call(Z,u,A,B,ie),Z}return new this(u,A,B,ie)}function cn(u){if(!(u instanceof this))throw Error(H(279));u.destructor(),10>this.eventPool.length&&this.eventPool.push(u)}function Ge(u){u.eventPool=[],u.getPooled=On,u.release=cn}var Mn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Nn(u,A){var B={};return B[u.toLowerCase()]=A.toLowerCase(),B["Webkit"+u]="webkit"+A,B["Moz"+u]="moz"+A,B}var Cn={animationend:Nn("Animation","AnimationEnd"),animationiteration:Nn("Animation","AnimationIteration"),animationstart:Nn("Animation","AnimationStart"),transitionend:Nn("Transition","TransitionEnd")},Be={},Xn={};Mn&&(Xn=document.createElement("div").style,"AnimationEvent"in window||(delete Cn.animationend.animation,delete Cn.animationiteration.animation,delete Cn.animationstart.animation),"TransitionEvent"in window||delete Cn.transitionend.transition);function Kn(u){if(Be[u])return Be[u];if(!Cn[u])return u;var A=Cn[u],B;for(B in A)if(A.hasOwnProperty(B)&&B in Xn)return Be[u]=A[B];return u}var Zn=Kn("animationend"),rt=Kn("animationiteration"),kn=Kn("animationstart"),at=Kn("transitionend"),An=null;function qn(u){if(An===null)try{var A=("require"+Math.random()).slice(0,7);An=(V&&V[A])("timers").setImmediate}catch(B){An=function(ie){var Z=new MessageChannel;Z.port1.onmessage=ie,Z.port2.postMessage(void 0)}}return An(u)}var xn=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ct=xn[11],P=xn[12],F=L.unstable_batchedUpdates,T=dn.IsSomeRendererActing,d=typeof me.unstable_flushAllWithoutAsserting=="function",s=me.unstable_flushAllWithoutAsserting||function(){for(var u=!1;ct();)u=!0;return u};function f(u){try{s(),qn(function(){s()?f(u):u()})}catch(A){u(A)}}var g=0,C=!1,a=L.findDOMNode,l=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,o=l[0],w=l[4],M=l[5],R=l[6],m=l[7],I=l[8],p=l[9],n=l[10];function v(){}function c(u,A){if(!u)return[];if(u=He(u),!u)return[];for(var B=u,ie=[];;){if(B.tag===5||B.tag===6||B.tag===1||B.tag===0){var Z=B.stateNode;A(Z)&&ie.push(Z)}if(B.child)B.child.return=B,B=B.child;else{if(B===u)return ie;for(;!B.sibling;){if(!B.return||B.return===u)return ie;B=B.return}B.sibling.return=B.return,B=B.sibling}}}function E(u,A){if(u&&!u._reactInternalFiber){var B=""+u;throw u=Array.isArray(u)?"an array":u&&u.nodeType===1&&u.tagName?"a DOM node":B==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":B,Error(H(286,A,u))}}var j={renderIntoDocument:function(u){var A=document.createElement("div");return L.render(u,A)},isElement:function(u){return y.isValidElement(u)},isElementOfType:function(u,A){return y.isValidElement(u)&&u.type===A},isDOMComponent:function(u){return!(!u||u.nodeType!==1||!u.tagName)},isDOMComponentElement:function(u){return!!(u&&y.isValidElement(u)&&u.tagName)},isCompositeComponent:function(u){return j.isDOMComponent(u)?!1:u!=null&&typeof u.render=="function"&&typeof u.setState=="function"},isCompositeComponentWithType:function(u,A){return j.isCompositeComponent(u)?u._reactInternalFiber.type===A:!1},findAllInRenderedTree:function(u,A){return E(u,"findAllInRenderedTree"),u?c(u._reactInternalFiber,A):[]},scryRenderedDOMComponentsWithClass:function(u,A){return E(u,"scryRenderedDOMComponentsWithClass"),j.findAllInRenderedTree(u,function(B){if(j.isDOMComponent(B)){var ie=B.className;typeof ie!="string"&&(ie=B.getAttribute("class")||"");var Z=ie.split(/\s+/);if(!Array.isArray(A)){if(A===void 0)throw Error(H(11));A=A.split(/\s+/)}return A.every(function(Se){return Z.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(u,A){if(E(u,"findRenderedDOMComponentWithClass"),u=j.scryRenderedDOMComponentsWithClass(u,A),u.length!==1)throw Error("Did not find exactly one match (found: "+u.length+") for class:"+A);return u[0]},scryRenderedDOMComponentsWithTag:function(u,A){return E(u,"scryRenderedDOMComponentsWithTag"),j.findAllInRenderedTree(u,function(B){return j.isDOMComponent(B)&&B.tagName.toUpperCase()===A.toUpperCase()})},findRenderedDOMComponentWithTag:function(u,A){if(E(u,"findRenderedDOMComponentWithTag"),u=j.scryRenderedDOMComponentsWithTag(u,A),u.length!==1)throw Error("Did not find exactly one match (found: "+u.length+") for tag:"+A);return u[0]},scryRenderedComponentsWithType:function(u,A){return E(u,"scryRenderedComponentsWithType"),j.findAllInRenderedTree(u,function(B){return j.isCompositeComponentWithType(B,A)})},findRenderedComponentWithType:function(u,A){if(E(u,"findRenderedComponentWithType"),u=j.scryRenderedComponentsWithType(u,A),u.length!==1)throw Error("Did not find exactly one match (found: "+u.length+") for componentType:"+A);return u[0]},mockComponent:function(u,A){return A=A||u.mockTagName||"div",u.prototype.render.mockImplementation(function(){return y.createElement(A,null,this.props.children)}),this},nativeTouchData:function(u,A){return{touches:[{pageX:u,pageY:A}]}},Simulate:null,SimulateNative:{},act:function(u){function A(){g--,T.current=B,P.current=ie}C===!1&&(C=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),g++;var B=T.current,ie=P.current;T.current=!0,P.current=!0;try{var Z=F(u)}catch(Se){throw A(),Se}if(Z!==null&&typeof Z=="object"&&typeof Z.then=="function")return{then:function(Se,Ie){Z.then(function(){1<g||d===!0&&B===!0?(A(),Se()):f(function(xe){A(),xe?Ie(xe):Se()})},function(xe){A(),Ie(xe)})}};try{g!==1||d!==!1&&B!==!1||s(),A()}catch(Se){throw A(),Se}return{then:function(Se){Se()}}}};function W(u){return function(A,B){if(y.isValidElement(A))throw Error(H(228));if(j.isCompositeComponent(A))throw Error(H(229));var ie=w[u],Z=new v;Z.target=A,Z.type=u.toLowerCase();var Se=o(A),Ie=new In(ie,Se,Z,A);Ie.persist(),t(Ie,B),ie.phasedRegistrationNames?M(Ie):R(Ie),L.unstable_batchedUpdates(function(){m(A),n(Ie)}),I()}}j.Simulate={};for(var Q in w)j.Simulate[Q]=W(Q);function U(u,A){return function(B,ie){var Z=new v(u);t(Z,ie),j.isDOMComponent(B)?(B=a(B),Z.target=B,p(A,1,document,Z)):B.tagName&&(Z.target=B,p(A,1,document,Z))}}[["abort","abort"],[Zn,"animationEnd"],[rt,"animationIteration"],[kn,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[at,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(u){var A=u[1];j.SimulateNative[A]=U(A,u[0])}),V.exports=j.default||j}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,pn,e){"use strict";e.r(pn);var V=e("9og8"),t=e("WmNS"),y=e.n(t),L=e("LtsZ"),me=`import React, { useRef } from 'react';
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

export default Demo;`,H=`import { get, set, cloneDeep } from 'lodash-es';

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
};`,dn=`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './advanced/utils';
import RichTextEditor from '../../widgets/RichText/src';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  const test = {
    type: 'object',
    properties: {
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b'],
        enumNames: ['haha', 'hehe'],
      },
      input1: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
      },
      StayTime: {
        title: '\u505C\u7559\u65F6\u95F4\u6BB5',
        type: 'range',
        // bind: ['StayStartTime', 'StayEndTime'],
        format: 'date',
        // required: true,
      },
    },
  };

  useEffect(() => {
    setSchema(test);
  }, []);

  const onMount = () => {
    form.setValues({ a: 1 });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const onValuesChange = (a, b) => {
    console.log(a, b);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{
          richText: RichTextEditor,
        }}
        debug
        theme="1"
        onMount={onMount}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`,Pe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,pe=`import React, { useState, useEffect } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

const { createEditorState } = BraftEditor;

const RichTextEditor = ({ name, onChange, value, ...rest }) => {
  const [editor, set] = useState(null);

  useEffect(() => {
    if (value !== undefined) {
      set(createEditorState(value));
    }
  }, [value]);

  const handleChange = editor => {
    set(editor);
    // const htmlContent = editor.toHTML();
    // onChange(name, htmlContent);
  };

  const onSave = () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = editor.toHTML();
    if (name) {
      onChange(name, htmlContent);
    } else {
      onChange(htmlContent);
    }
  };

  return (
    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
      <BraftEditor
        contentStyle={{ minHeight: 100, height: 'auto', maxHeight: 500 }}
        value={editor}
        onChange={handleChange}
        onSave={onSave}
        onBlur={onSave}
      />
    </div>
  );
};

export default RichTextEditor;`,He=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,De=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,hn=`export const basic = {
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
};`,In=`import React, { Component } from 'react';
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

export default Root;`,On=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,cn=`{
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
}`,Ge=`import { Select } from 'antd';
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

export default SearchInput;`,Mn=`import React from 'react';
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

export default Demo;`,Nn=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,Cn=`.markdown p {
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
}`,Be=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
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

export default withTable(Demo);`,Xn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
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
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
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

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
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

export default withTable(Demo);`,Kn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
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
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
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

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,Zn=`import React, { useEffect } from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';
import { history } from 'umi';

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
  const { refresh, tableState, form }: any = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

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

  const showData = () => {
    refresh(null, { extra: 1 });
  };
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
  const onSearch = search => {
    console.log('onSearch', search);
  };
  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
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
    </div>
  );
};

export default withTable(Demo);`,rt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,kn=`import React from 'react';
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

export default Demo;`,at=`import React from 'react';
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
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,An=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,qn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,xn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ct=pn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return a=function(R,m){if(!m&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var I=C(m);if(I&&I.has(R))return I.get(R);var p={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in R)if(v!=="default"&&Object.prototype.hasOwnProperty.call(R,v)){var c=n?Object.getOwnPropertyDescriptor(R,v):null;c&&(c.get||c.set)?Object.defineProperty(p,v,c):p[v]=R[v]}return p.default=R,I&&I.set(R,p),p},C=function(R){if(typeof WeakMap!="function")return null;var m=new WeakMap,I=new WeakMap;return(C=function(n){return n?I:m})(R)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=a,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,f=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=w.sent,l=function(){var R=(0,f.useState)("Line"),m=(0,s.default)(R,2),I=m[0],p=m[1],n={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[I];return f.default.createElement("div",null,f.default.createElement("div",{style:{marginBottom:10}},f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return p("Line")}},"\u6298\u7EBF\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return p("Column")}},"\u67F1\u72B6\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return p("PivotTable")}},"\u4EA4\u53C9\u8868")),f.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=a.sent,g=function(){return s.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(w,M,R){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},w),s.default.createElement("p",null,JSON.stringify(M)),s.default.createElement("p",null,JSON.stringify(R)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return a=function(R,m){if(!m&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var I=C(m);if(I&&I.has(R))return I.get(R);var p={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in R)if(v!=="default"&&Object.prototype.hasOwnProperty.call(R,v)){var c=n?Object.getOwnPropertyDescriptor(R,v):null;c&&(c.get||c.set)?Object.defineProperty(p,v,c):p[v]=R[v]}return p.default=R,I&&I.set(R,p),p},C=function(R){if(typeof WeakMap!="function")return null;var m=new WeakMap,I=new WeakMap;return(C=function(n){return n?I:m})(R)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=a,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,f=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=w.sent,l=function(){var R=(0,f.useState)(!1),m=(0,s.default)(R,2),I=m[0],p=m[1];return f.default.createElement(f.default.Fragment,null,f.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",f.default.createElement("input",{type:"checkbox",value:I,onChange:function(){return p(!I)}})),f.default.createElement(g.PivotTable,{leftExpandable:I,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M,R,m,I,p;return y.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return R=function(E,j){if(!j&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var W=M(j);if(W&&W.has(E))return W.get(E);var Q={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in E)if(u!=="default"&&Object.prototype.hasOwnProperty.call(E,u)){var A=U?Object.getOwnPropertyDescriptor(E,u):null;A&&(A.get||A.set)?Object.defineProperty(Q,u,A):Q[u]=E[u]}return Q.default=E,W&&W.set(E,Q),Q},M=function(E){if(typeof WeakMap!="function")return null;var j=new WeakMap,W=new WeakMap;return(M=function(U){return U?W:j})(E)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,s=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(83).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,f=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(84).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(74).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,C=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(72).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,a=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return o=v.sent,v.t12=R,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,w=(0,v.t12)(v.t13),m={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(c){(0,C.default)(j,c);var E=(0,a.default)(j);function j(){return(0,f.default)(this,j),E.apply(this,arguments)}return(0,g.default)(j,[{key:"render",value:function(){var Q=this.props.form;return l.default.createElement("div",null,l.default.createElement(w.default,{form:Q,schema:m}),l.default.createElement(s.default,{type:"primary",onClick:Q.submit},"\u63D0\u4EA4"))}}]),j}(l.default.Component),p=(0,w.connectForm)(I),v.abrupt("return",p);case 47:case"end":return v.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=function(p,n){if(!n&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var v=a(n);if(v&&v.has(p))return v.get(p);var c={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in p)if(j!=="default"&&Object.prototype.hasOwnProperty.call(p,j)){var W=E?Object.getOwnPropertyDescriptor(p,j):null;W&&(W.get||W.set)?Object.defineProperty(c,j,W):c[j]=p[j]}return c.default=p,v&&v.set(p,c),c},a=function(p){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(E){return E?v:n})(p)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,s=(0,m.t0)(m.t1),m.t2=d,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,f=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=m.sent,m.t4=l,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,C=(0,m.t4)(m.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(){var p=(0,C.useForm)();return f.default.createElement("div",null,f.default.createElement(C.default,{form:p,schema:o}),f.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},M=w,m.abrupt("return",M);case 27:case"end":return m.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=function(p,n){if(!n&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var v=a(n);if(v&&v.has(p))return v.get(p);var c={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in p)if(j!=="default"&&Object.prototype.hasOwnProperty.call(p,j)){var W=E?Object.getOwnPropertyDescriptor(p,j):null;W&&(W.get||W.set)?Object.defineProperty(c,j,W):c[j]=p[j]}return c.default=p,v&&v.set(p,c),c},a=function(p){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(E){return E?v:n})(p)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,s=(0,m.t0)(m.t1),m.t2=d,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,f=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=m.sent,m.t4=l,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,C=(0,m.t4)(m.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},w=function(){var p=(0,C.useForm)(),n=function(c,E){E.length>0?alert("errors:"+JSON.stringify(E)):alert("formData:"+JSON.stringify(c,null,2))};return f.default.createElement("div",null,f.default.createElement(C.default,{form:p,schema:o,onFinish:n}),f.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},M=w,m.abrupt("return",M);case 27:case"end":return m.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o;return y.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return l=function(){var m=(0,f.useForm)(),I=function(n,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return s.default.createElement("div",null,s.default.createElement(f.default,{form:m,schema:a,onFinish:I}),s.default.createElement("button",{onClick:m.submit},"\u63D0\u4EA4"))},C=function(m,I){if(!I&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var p=g(I);if(p&&p.has(m))return p.get(m);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in m)if(c!=="default"&&Object.prototype.hasOwnProperty.call(m,c)){var E=v?Object.getOwnPropertyDescriptor(m,c):null;E&&(E.get||E.set)?Object.defineProperty(n,c,E):n[c]=m[c]}return n.default=m,p&&p.set(m,n),n},g=function(m){if(typeof WeakMap!="function")return null;var I=new WeakMap,p=new WeakMap;return(g=function(v){return v?p:I})(m)},d=e("K+nK"),M.t0=d,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,s=(0,M.t0)(M.t1),M.t2=C,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,f=(0,M.t2)(M.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=l,M.abrupt("return",o);case 17:case"end":return M.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M,R,m,I;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var j=o(E);if(j&&j.has(c))return j.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var U in c)if(U!=="default"&&Object.prototype.hasOwnProperty.call(c,U)){var u=Q?Object.getOwnPropertyDescriptor(c,U):null;u&&(u.get||u.set)?Object.defineProperty(W,U,u):W[U]=c[U]}return W.default=c,j&&j.set(c,W),W},o=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,j=new WeakMap;return(o=function(Q){return Q?j:E})(c)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=d,n.next=20,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.next=32,Promise.all([e.e(68),e.e(79)]).then(e.bind(null,"7t+U"));case 32:return l=n.sent,M=g.default.TextArea,R={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},m=function(){var c=(0,C.useState)(JSON.stringify(R)),E=(0,f.default)(c,2),j=E[0],W=E[1],Q=(0,C.useState)({}),U=(0,f.default)(Q,2),u=U[0],A=U[1],B=function(){try{var Ie=(0,l.updateSchemaToNewVersion)(JSON.parse(j));A(Ie)}catch(xe){console.log(xe)}},ie=function(Ie){W(Ie.target.value)},Z=function(){W(JSON.stringify(JSON.parse(j),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(M,{style:{minHeight:400,marginTop:12,marginBottom:12},value:j,onChange:ie}),C.default.createElement(s.default,{style:{marginRight:12},onClick:Z},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(s.default,{type:"primary",onClick:B},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(M,{style:{minHeight:400,marginTop:12},value:JSON.stringify(u,null,2)}))},I=m,n.abrupt("return",I);case 38:case"end":return n.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:H}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return o=function(){var I=(0,f.useState)({}),p=(0,s.default)(I,2),n=p[0],v=p[1],c=(0,f.useState)([]),E=(0,s.default)(c,2),j=E[0],W=E[1],Q=(0,f.useState)(!1),U=(0,s.default)(Q,2),u=U[0],A=U[1],B=(0,g.useForm)({formData:n,onChange:v,onValidate:W,showValidate:u});(0,f.useEffect)(function(){B.init()},[]);var ie=function(){A(!0),j.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(j))):alert(JSON.stringify(n))};return f.default.createElement("div",null,f.default.createElement(g.default,{form:B,schema:l}),f.default.createElement("button",{onClick:ie},"\u63D0\u4EA4"))},a=function(I,p){if(!p&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var n=C(p);if(n&&n.has(I))return n.get(I);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in I)if(E!=="default"&&Object.prototype.hasOwnProperty.call(I,E)){var j=c?Object.getOwnPropertyDescriptor(I,E):null;j&&(j.get||j.set)?Object.defineProperty(v,E,j):v[E]=I[E]}return v.default=I,n&&n.set(I,v),v},C=function(I){if(typeof WeakMap!="function")return null;var p=new WeakMap,n=new WeakMap;return(C=function(c){return c?n:p})(I)},d=e("K+nK"),R.t0=d,R.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return R.t1=R.sent,s=(0,R.t0)(R.t1),R.t2=a,R.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return R.t3=R.sent,f=(0,R.t2)(R.t3),R.t4=a,R.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 17:return R.t5=R.sent,g=(0,R.t4)(R.t5),l={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},w=o,R.abrupt("return",w);case 22:case"end":return R.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"form-render-tester":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"9Yrf"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:dn},"advanced/utils/index.js":{import:"./advanced/utils",content:Pe},"widgets/RichText/src/index.js":{import:"../../widgets/RichText/src",content:pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"form-render":{version:"1.5.8"},"react-dom":{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"braft-editor":{version:"2.3.9",css:"braft-editor/dist/index.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-tester"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g=function(w){return{type:"object",displayType:w,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(f.default,{schema:g("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(f.default,{schema:g("column")}))},l.abrupt("return",C);case 14:case"end":return l.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return s.default.createElement(f.default,{schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return s.default.createElement(f.default,{readOnly:!0,schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return s.default.createElement(f.default,{labelWidth:"200",schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M,R,m,I;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return R=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var j=M(E);if(j&&j.has(c))return j.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var U in c)if(U!=="default"&&Object.prototype.hasOwnProperty.call(c,U)){var u=Q?Object.getOwnPropertyDescriptor(c,U):null;u&&(u.get||u.set)?Object.defineProperty(W,U,u):W[U]=c[U]}return W.default=c,j&&j.set(c,W),W},M=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,j=new WeakMap;return(M=function(Q){return Q?j:E})(c)},d=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.t8=R,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,a=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=n.sent,n.t10=R,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,o=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return w=n.sent,m=function(){var c=(0,o.useForm)(),E=(0,a.useState)({}),j=(0,C.default)(E,2),W=j[0],Q=j[1],U=function(){(0,w.fakeApi)("xxx/getForm").then(function(B){c.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,w.delay)(1e3).then(function(A){Q({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var u=function(B,ie){ie.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(Z){return Z.name}))):(0,w.fakeApi)("xxx/submit",B).then(function(Z){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(o.default,{form:c,schema:W,onFinish:u}),a.default.createElement(s.default,null,a.default.createElement(f.default,{onClick:U},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=m,n.abrupt("return",I);case 48:case"end":return n.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M,R,m,I;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return M=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var j=w(E);if(j&&j.has(c))return j.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var U in c)if(U!=="default"&&Object.prototype.hasOwnProperty.call(c,U)){var u=Q?Object.getOwnPropertyDescriptor(c,U):null;u&&(u.get||u.set)?Object.defineProperty(W,U,u):W[U]=c[U]}return W.default=c,j&&j.set(c,W),W},w=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,j=new WeakMap;return(w=function(Q){return Q?j:E})(c)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=d,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.t8=M,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=n.sent,R={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},m=function(){var c=(0,l.useForm)(),E=function(Q,U){U.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(U.map(function(u){return u.name}))):(0,o.fakeApi)("xxx/submit",Q).then(function(u){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},j=function(Q){var U=Q.data,u=Q.errors,A=Q.schema,B=(0,f.default)(Q,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(ie){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:c,schema:R,beforeFinish:j,onFinish:E}),C.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},I=m,n.abrupt("return",I);case 42:case"end":return n.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M,R,m,I;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return M=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var j=w(E);if(j&&j.has(c))return j.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var U in c)if(U!=="default"&&Object.prototype.hasOwnProperty.call(c,U)){var u=Q?Object.getOwnPropertyDescriptor(c,U):null;u&&(u.get||u.set)?Object.defineProperty(W,U,u):W[U]=c[U]}return W.default=c,j&&j.set(c,W),W},w=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,j=new WeakMap;return(w=function(Q){return Q?j:E})(c)},d=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return a=n.sent,n.t8=M,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=n.sent,R={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},m=function(){var c=(0,l.useForm)(),E=function(Q,U){U.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(U.map(function(u){return u.name}))):(0,o.fakeApi)("xxx/submit",Q).then(function(u){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},j=function(){(0,o.fakeApi)("xxx/getForm").then(function(Q){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:c,schema:R,onFinish:E}),C.default.createElement(s.default,null,C.default.createElement(f.default,{onClick:j},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=m,n.abrupt("return",I);case 44:case"end":return n.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M,R,m;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return w=function(v,c){if(!c&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var E=o(c);if(E&&E.has(v))return E.get(v);var j={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in v)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(v,Q)){var U=W?Object.getOwnPropertyDescriptor(v,Q):null;U&&(U.get||U.set)?Object.defineProperty(j,Q,U):j[Q]=v[Q]}return j.default=v,E&&E.set(v,j),j},o=function(v){if(typeof WeakMap!="function")return null;var c=new WeakMap,E=new WeakMap;return(o=function(W){return W?E:c})(v)},d=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=d,p.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return p.t2=d,p.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return p.t3=p.sent,f=(0,p.t2)(p.t3),p.t4=w,p.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return p.t5=p.sent,g=(0,p.t4)(p.t5),p.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=p.sent,p.t6=w,p.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return p.t7=p.sent,a=(0,p.t6)(p.t7),p.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return l=p.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},R=function(){var v=(0,a.useForm)(),c=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},E=function(W,Q){Q.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Q.map(function(U){return U.name}))):f.default.info(JSON.stringify(W))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(a.default,{form:v,schema:M,onMount:c,onFinish:E}),g.default.createElement(s.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},m=R,p.abrupt("return",m);case 37:case"end":return p.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o;return y.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return C=function(m,I){if(!I&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var p=g(I);if(p&&p.has(m))return p.get(m);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in m)if(c!=="default"&&Object.prototype.hasOwnProperty.call(m,c)){var E=v?Object.getOwnPropertyDescriptor(m,c):null;E&&(E.get||E.set)?Object.defineProperty(n,c,E):n[c]=m[c]}return n.default=m,p&&p.set(m,n),n},g=function(m){if(typeof WeakMap!="function")return null;var I=new WeakMap,p=new WeakMap;return(g=function(v){return v?p:I})(m)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,s=(0,M.t0)(M.t1),M.t2=C,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,f=(0,M.t2)(M.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var m=(0,f.useForm)();return s.default.createElement(f.default,{form:m,schema:a})},o=l,M.abrupt("return",o);case 17:case"end":return M.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return s.default.createElement(f.default,{schema:g.expression})},l.abrupt("return",C);case 16:case"end":return l.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:hn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return C=function(I,p){if(!p&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var n=g(p);if(n&&n.has(I))return n.get(I);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in I)if(E!=="default"&&Object.prototype.hasOwnProperty.call(I,E)){var j=c?Object.getOwnPropertyDescriptor(I,E):null;j&&(j.get||j.set)?Object.defineProperty(v,E,j):v[E]=I[E]}return v.default=I,n&&n.set(I,v),v},g=function(I){if(typeof WeakMap!="function")return null;var p=new WeakMap,n=new WeakMap;return(g=function(c){return c?n:p})(I)},R.t0=C,R.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return R.t1=R.sent,d=(0,R.t0)(R.t1),R.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return s=R.sent,R.t2=C,R.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return R.t3=R.sent,f=(0,R.t2)(R.t3),a=function(I){return new Promise(function(p){return setTimeout(p,I)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},o=function(){var I=(0,f.useForm)(),p=function(){I.setValues({input1:"hello world"}),a(3e3).then(function(v){I.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(f.default,{form:I,schema:l,onMount:p})},w=o,R.abrupt("return",w);case 20:case"end":return R.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),window.hello=function(w){var M=w.value;console.log(M)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return s.default.createElement(f.default,{schema:g})},a=C,o.abrupt("return",a);case 16:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:He}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o;return y.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return C=function(m,I){if(!I&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var p=g(I);if(p&&p.has(m))return p.get(m);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in m)if(c!=="default"&&Object.prototype.hasOwnProperty.call(m,c)){var E=v?Object.getOwnPropertyDescriptor(m,c):null;E&&(E.get||E.set)?Object.defineProperty(n,c,E):n[c]=m[c]}return n.default=m,p&&p.set(m,n),n},g=function(m){if(typeof WeakMap!="function")return null;var I=new WeakMap,p=new WeakMap;return(g=function(v){return v?p:I})(m)},M.t0=C,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,d=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return s=M.sent,M.t2=C,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,f=(0,M.t2)(M.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var m=(0,f.useForm)(),I={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){m.setValueByPath("input2",n)}};return d.default.createElement(f.default,{form:m,schema:a,watch:I})},o=l,M.abrupt("return",o);case 19:case"end":return M.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=function(p,n){if(!n&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var v=a(n);if(v&&v.has(p))return v.get(p);var c={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in p)if(j!=="default"&&Object.prototype.hasOwnProperty.call(p,j)){var W=E?Object.getOwnPropertyDescriptor(p,j):null;W&&(W.get||W.set)?Object.defineProperty(c,j,W):c[j]=p[j]}return c.default=p,v&&v.set(p,c),c},a=function(p){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(a=function(E){return E?v:n})(p)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,s=(0,m.t0)(m.t1),m.t2=l,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,f=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=m.sent,m.t4=l,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,C=(0,m.t4)(m.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},w=function(){var p=(0,C.useForm)(),n=function(E,j){j.length>0?alert("errorFields:"+JSON.stringify(j)):alert("formData:"+JSON.stringify(E,null,2))},v={input1:function(E){E.length>2?p.setSchemaByPath("obj1.select",function(j){var W=j.enumNames;return{enumNames:W.map(function(Q){return Q+"a"})}}):p.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return f.default.createElement("div",null,f.default.createElement(C.default,{form:p,schema:o,onFinish:n,watch:v}),f.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return p.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),f.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},M=w,m.abrupt("return",M);case 27:case"end":return m.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w,M,R,m,I;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var j=o(E);if(j&&j.has(c))return j.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var U in c)if(U!=="default"&&Object.prototype.hasOwnProperty.call(c,U)){var u=Q?Object.getOwnPropertyDescriptor(c,U):null;u&&(u.get||u.set)?Object.defineProperty(W,U,u):W[U]=c[U]}return W.default=c,j&&j.set(c,W),W},o=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,j=new WeakMap;return(o=function(Q){return Q?j:E})(c)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=d,n.next=15,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,f=(0,n.t2)(n.t3),n.t4=d,n.next=20,e.e(85).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},R=function(c){return console.log("widget props:",c),C.default.createElement(f.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},c))},m=function(){var c=(0,l.useForm)(),E=function(){};return C.default.createElement("div",null,C.default.createElement(l.default,{readOnly:!0,form:c,schema:M,widgets:{site:R},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),C.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},I=m,n.abrupt("return",I);case 40:case"end":return n.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return s.default.createElement(f.default,{schema:g.basic})},l.abrupt("return",C);case 16:case"end":return l.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:hn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,f=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return s.default.createElement(f.default,{schema:g.titleTrick})},l.abrupt("return",C);case 16:case"end":return l.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:hn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:In},"main.js":{import:"./main",content:On},"json/simplest.json":{import:"./json/simplest.json",content:cn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Ge},"monaco/index.js":{import:"./monaco",content:Mn},"suggestionsMap.js":{import:"./suggestionsMap",content:Nn},"index.css":{import:"./index.css",content:Cn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.5.8"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Be}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"CfUQ"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Xn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"/usH"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"48jF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Zn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a,l,o,w;return y.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return d=e("K+nK"),R.t0=d,R.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return R.t1=R.sent,s=(0,R.t0)(R.t1),R.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(66)]).then(e.bind(null,"P2DI"));case 8:for(f=R.sent,g=[],C=0;C<6;C++)g.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(I,p){return s.default.createElement("a",{onClick:function(){return alert(I.title)}},"\u7F16\u8F91")}}],o=function(){var I=function(){return{rows:g,total:g.length}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(f.Search,{schema:a,api:I}),s.default.createElement(f.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},w=(0,f.withTable)(o),R.abrupt("return",w);case 16:case"end":return R.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

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
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){var d,s,f,g,C,a;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(65)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(f.default,{defaultValue:g}))},a=C,o.abrupt("return",a);case 15:case"end":return o.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:rt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:kn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:at},"index.less":{import:"./index.less",content:An}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:qn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(V.a)(y.a.mark(function T(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function F(){return P.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:xn},"index.less":{import:"./index.less",content:An}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,pn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,pn,e){"use strict";Tn.exports=e("80pN")}}]);
