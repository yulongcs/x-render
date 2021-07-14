(window.webpackJsonp=window.webpackJsonp||[]).push([[34,12],{"0zqC":function(Tn,yn,e){"use strict";e.r(yn);var V=e("tJVT"),n=e("q1tI"),g=e.n(n),L=e("wx14"),fe=e("rePB"),J=e("ODXe"),Be=e("U8pU"),Ae=e("Ff2n"),ce=e("VTBJ"),Un=e("TSYQ"),Ie=e.n(Un),Bn=e("Zm9Q"),Kn=e("5Z9U"),Sn=e("6cGi"),pn=e("KQm4"),Xe=e("wgJM"),xn=e("t23M");function Mn(a){var s=Object(n.useRef)(),p=Object(n.useRef)(!1);function E(){for(var O=arguments.length,b=new Array(O),R=0;R<O;R++)b[R]=arguments[R];p.current||(Xe.a.cancel(s.current),s.current=Object(Xe.a)(function(){a.apply(void 0,b)}))}return Object(n.useEffect)(function(){return function(){p.current=!0,Xe.a.cancel(s.current)}},[]),E}function Rn(a){var s=Object(n.useRef)([]),p=Object(n.useState)({}),E=Object(J.a)(p,2),O=E[1],b=Object(n.useRef)(typeof a=="function"?a():a),R=Mn(function(){var w=b.current;s.current.forEach(function(x){w=x(w)}),s.current=[],b.current=w,O({})});function j(w){s.current.push(w),R()}return[b.current,j]}var we=e("4IlW");function qn(a,s){var p,E=a.prefixCls,O=a.id,b=a.active,R=a.rtl,j=a.tab,w=j.key,x=j.tab,$=j.disabled,H=j.closeIcon,z=a.tabBarGutter,le=a.tabPosition,Z=a.closable,k=a.renderWrapper,ue=a.removeAriaLabel,U=a.editable,ne=a.onClick,se=a.onRemove,q=a.onFocus,oe="".concat(E,"-tab");n.useEffect(function(){return se},[]);var ee={};le==="top"||le==="bottom"?ee[R?"marginLeft":"marginRight"]=z:ee.marginBottom=z;var be=U&&Z!==!1&&!$;function ae(ie){$||ne(ie)}function me(ie){ie.preventDefault(),ie.stopPropagation(),U.onEdit("remove",{key:w,event:ie})}var pe=n.createElement("div",{key:w,ref:s,className:Ie()(oe,(p={},Object(fe.a)(p,"".concat(oe,"-with-remove"),be),Object(fe.a)(p,"".concat(oe,"-active"),b),Object(fe.a)(p,"".concat(oe,"-disabled"),$),p)),style:ee,onClick:ae},n.createElement("div",{role:"tab","aria-selected":b,id:O&&"".concat(O,"-tab-").concat(w),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(w),"aria-disabled":$,tabIndex:$?null:0,onClick:function(X){X.stopPropagation(),ae(X)},onKeyDown:function(X){[we.a.SPACE,we.a.ENTER].includes(X.which)&&(X.preventDefault(),ae(X))},onFocus:q},x),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(X){X.stopPropagation(),me(X)}},H||U.removeIcon||"\xD7"));return k&&(pe=k(pe)),pe}var wn=n.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function rt(a,s,p){return Object(n.useMemo)(function(){for(var E,O=new Map,b=s.get((E=a[0])===null||E===void 0?void 0:E.key)||_n,R=b.left+b.width,j=0;j<a.length;j+=1){var w=a[j].key,x=s.get(w);if(!x){var $;x=s.get(($=a[j-1])===null||$===void 0?void 0:$.key)||_n}var H=O.get(w)||Object(ce.a)({},x);H.right=R-H.left-H.width,O.set(w,H)}return O},[a.map(function(E){return E.key}).join("_"),s,p])}var st={width:0,height:0,left:0,top:0,right:0};function N(a,s,p,E,O){var b=O.tabs,R=O.tabPosition,j=O.rtl,w,x,$;["top","bottom"].includes(R)?(w="width",x=j?"right":"left",$=Math.abs(s.left)):(w="height",x="top",$=-s.top);var H=s[w],z=p[w],le=E[w],Z=H;return z+le>H&&(Z=H-le),Object(n.useMemo)(function(){if(!b.length)return[0,0];for(var k=b.length,ue=k,U=0;U<k;U+=1){var ne=a.get(b[U].key)||st;if(ne[x]+ne[w]>$+Z){ue=U-1;break}}for(var se=0,q=k-1;q>=0;q-=1){var oe=a.get(b[q].key)||st;if(oe[x]<$){se=q+1;break}}return[se,ue]},[a,$,Z,R,b.map(function(k){return k.key}).join("_"),j])}var P=e("Gytx"),I=e.n(P),d=e("Kwbf");function l(a,s){var p=a.prefixCls,E=a.invalidate,O=a.item,b=a.renderItem,R=a.responsive,j=a.registerSize,w=a.itemKey,x=a.className,$=a.style,H=a.children,z=a.display,le=a.order,Z=a.component,k=Z===void 0?"div":Z,ue=Object(Ae.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=R&&!z;function ne(be){j(w,be)}n.useEffect(function(){return function(){ne(null)}},[]);var se=b&&O!==void 0?b(O):H,q;E||(q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:R?le:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var ee=n.createElement(k,Object(L.a)({className:Ie()(!E&&p,x),style:Object(ce.a)(Object(ce.a)({},q),$)},oe,ue,{ref:s}),se);return R&&(ee=n.createElement(xn.default,{onResize:function(ae){var me=ae.offsetWidth;ne(me)}},ee)),ee}var f=n.forwardRef(l);f.displayName="Item";var y=f;function C(){var a=Object(n.useState)({}),s=Object(J.a)(a,2),p=s[1],E=Object(n.useRef)([]),O=Object(n.useRef)(!1),b=0,R=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function j(w){var x=b;b+=1,E.current.length<x+1&&(E.current[x]=w);var $=E.current[x];function H(z){E.current[x]=typeof z=="function"?z(E.current[x]):z,Xe.a.cancel(R),R=Object(Xe.a)(function(){O.current||p({})})}return[$,H]}return j}var r=function(s,p){var E=n.useContext(T);if(!E){var O=s.component,b=O===void 0?"div":O,R=Object(Ae.a)(s,["component"]);return n.createElement(b,Object(L.a)({},R,{ref:p}))}var j=E.className,w=Object(Ae.a)(E,["className"]),x=s.className,$=Object(Ae.a)(s,["className"]);return n.createElement(T.Provider,{value:null},n.createElement(y,Object(L.a)({ref:p,className:Ie()(j,x)},w,$)))},o=n.forwardRef(r);o.displayName="RawItem";var i=o,T=n.createContext(null),K="responsive",S="invalidate";function u(a){return"+ ".concat(a.length," ...")}function F(a,s){var p=a.prefixCls,E=p===void 0?"rc-overflow":p,O=a.data,b=O===void 0?[]:O,R=a.renderItem,j=a.renderRawItem,w=a.itemKey,x=a.itemWidth,$=x===void 0?10:x,H=a.ssr,z=a.style,le=a.className,Z=a.maxCount,k=a.renderRest,ue=a.renderRawRest,U=a.suffix,ne=a.component,se=ne===void 0?"div":ne,q=a.itemComponent,oe=a.onVisibleChange,ee=Object(Ae.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=C(),ae=H==="full",me=be(null),pe=Object(J.a)(me,2),ie=pe[0],X=pe[1],de=ie||0,ye=be(new Map),ge=Object(J.a)(ye,2),Re=ge[0],We=ge[1],Ee=be(0),Oe=Object(J.a)(Ee,2),Ke=Oe[0],Te=Oe[1],Pe=be(0),De=Object(J.a)(Pe,2),xe=De[0],_e=De[1],$e=be(0),Ue=Object(J.a)($e,2),He=Ue[0],Le=Ue[1],Fn=Object(n.useState)(null),an=Object(J.a)(Fn,2),Qe=an[0],on=an[1],bn=Object(n.useState)(null),En=Object(J.a)(bn,2),Ne=En[0],Ge=En[1],en=n.useMemo(function(){return Ne===null&&ae?Number.MAX_SAFE_INTEGER:Ne||0},[Ne,ie]),Ze=Object(n.useState)(!1),Wn=Object(J.a)(Ze,2),Jn=Wn[0],Ln=Wn[1],rn="".concat(E,"-item"),jn=Math.max(Ke,xe),un=b.length&&Z===K,Dn=Z===S,nn=un||typeof Z=="number"&&b.length>Z,sn=Object(n.useMemo)(function(){var ve=b;return un?ie===null&&ae?ve=b:ve=b.slice(0,Math.min(b.length,de/$)):typeof Z=="number"&&(ve=b.slice(0,Z)),ve},[b,$,ie,Z,un]),Pn=Object(n.useMemo)(function(){return un?b.slice(en+1):b.slice(sn.length)},[b,sn,un,en]),mn=Object(n.useCallback)(function(ve,Fe){var Me;return typeof w=="function"?w(ve):(Me=w&&(ve==null?void 0:ve[w]))!==null&&Me!==void 0?Me:Fe},[w]),ke=Object(n.useCallback)(R||function(ve){return ve},[R]);function Ye(ve,Fe){Ge(ve),Fe||(Ln(ve<b.length-1),oe==null||oe(ve))}function zn(ve,Fe){X(Fe.clientWidth)}function Gn(ve,Fe){We(function(Me){var tn=new Map(Me);return Fe===null?tn.delete(ve):tn.set(ve,Fe),tn})}function nt(ve,Fe){_e(Fe),Te(xe)}function Cn(ve,Fe){Le(Fe)}function gn(ve){return Re.get(mn(sn[ve],ve))}n.useLayoutEffect(function(){if(de&&jn&&sn){var ve=He,Fe=sn.length,Me=Fe-1;if(!Fe){Ye(0),on(null);return}for(var tn=0;tn<Fe;tn+=1){var Qn=gn(tn);if(Qn===void 0){Ye(tn-1,!0);break}if(ve+=Qn,tn===Me-1&&ve+gn(Me)<=de){Ye(Me),on(null);break}else if(ve+jn>de){Ye(tn-1),on(ve-Qn-He+xe);break}else if(tn===Me){Ye(Me),on(ve-He);break}}U&&gn(0)+He>de&&on(null)}},[de,Re,xe,He,mn,sn]);var Yn=Jn&&!!Pn.length,On={};Qe!==null&&un&&(On={position:"absolute",left:Qe,top:0});var fn={prefixCls:rn,responsive:un,component:q,invalidate:Dn},Hn=j?function(ve,Fe){var Me=mn(ve,Fe);return n.createElement(T.Provider,{key:Me,value:Object(ce.a)(Object(ce.a)({},fn),{},{order:Fe,item:ve,itemKey:Me,registerSize:Gn,display:Fe<=en})},j(ve,Fe))}:function(ve,Fe){var Me=mn(ve,Fe);return n.createElement(y,Object(L.a)({},fn,{order:Fe,key:Me,item:ve,renderItem:ke,itemKey:Me,registerSize:Gn,display:Fe<=en}))},An,Xn={order:Yn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Yn};if(ue)ue&&(An=n.createElement(T.Provider,{value:Object(ce.a)(Object(ce.a)({},fn),Xn)},ue(Pn)));else{var dn=k||u;An=n.createElement(y,Object(L.a)({},fn,Xn),typeof dn=="function"?dn(Pn):dn)}var In=n.createElement(se,Object(L.a)({className:Ie()(!Dn&&E,le),style:z,ref:s},ee),sn.map(Hn),nn?An:null,U&&n.createElement(y,Object(L.a)({},fn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:On}),U));return un&&(In=n.createElement(xn.default,{onResize:zn},In)),In}var m=n.forwardRef(F);m.displayName="Overflow",m.Item=i,m.RESPONSIVE=K,m.INVALIDATE=S;var t=m,v=t,c=e("1OyB"),D=e("vuIU"),A=e("Ji7U"),W=e("LK+K"),Q=e("bT9E"),G=e("YrtM"),Y=n.createContext(null);function Se(a,s){var p=Object(ce.a)({},a);return Object.keys(s).forEach(function(E){var O=s[E];O!==void 0&&(p[E]=O)}),p}function qe(a){var s=a.children,p=a.locked,E=Object(Ae.a)(a,["children","locked"]),O=n.useContext(Y),b=Object(G.a)(function(){return Se(O,E)},[O,E],function(R,j){return!p&&(R[0]!==j[0]||!I()(R[1],j[1]))});return n.createElement(Y.Provider,{value:b},s)}function cn(a,s,p,E){var O=n.useContext(Y),b=O.activeKey,R=O.onActive,j=O.onInactive,w={active:b===a};return s||(w.onMouseEnter=function(x){p==null||p({key:a,domEvent:x}),R(a)},w.onMouseLeave=function(x){E==null||E({key:a,domEvent:x}),j(a)}),w}function hn(a){var s=a.item,p=Object(Ae.a)(a,["item"]);return Object.defineProperty(p,"item",{get:function(){return Object(d.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),p}function h(a){var s=a.icon,p=a.props,E=a.children,O;return typeof s=="function"?O=n.createElement(s,Object(ce.a)({},p)):O=s,O||E||null}function B(a){var s=n.useContext(Y),p=s.mode,E=s.rtl,O=s.inlineIndent;if(p!=="inline")return null;var b=a;return E?{paddingRight:b*O}:{paddingLeft:b*O}}var M=[],he=n.createContext(null);function te(){return n.useContext(he)}var je=n.createContext(M);function Ve(a){var s=n.useContext(je);return n.useMemo(function(){return a!==void 0?[].concat(Object(pn.a)(s),[a]):s},[s,a])}var ze=n.createContext(null),Ut=n.createContext(null);function Jt(a,s){return a===void 0?null:"".concat(a,"-").concat(s)}function zt(a){var s=n.useContext(Ut);return Jt(s,a)}var ba=function(a){Object(A.a)(p,a);var s=Object(W.a)(p);function p(){return Object(c.a)(this,p),s.apply(this,arguments)}return Object(D.a)(p,[{key:"render",value:function(){var O=this.props,b=O.title,R=O.attribute,j=O.elementRef,w=Object(Ae.a)(O,["title","attribute","elementRef"]),x=Object(Q.a)(w,["eventKey"]);return Object(d.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(v.Item,Object(L.a)({},R,{title:typeof b=="string"?b:void 0},x,{ref:j}))}}]),p}(n.Component),Ea=function(s){var p,E=s.style,O=s.className,b=s.eventKey,R=s.disabled,j=s.itemIcon,w=s.children,x=s.role,$=s.onMouseEnter,H=s.onMouseLeave,z=s.onClick,le=s.onKeyDown,Z=s.onFocus,k=Object(Ae.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=zt(b),U=n.useContext(Y),ne=U.prefixCls,se=U.onItemClick,q=U.disabled,oe=U.overflowDisabled,ee=U.itemIcon,be=U.selectedKeys,ae=U.onActive,me="".concat(ne,"-item"),pe=n.useRef(),ie=n.useRef(),X=q||R,de=Ve(b),ye=function($e){return{key:b,keyPath:de,item:pe.current,domEvent:$e}},ge=j||ee,Re=cn(b,X,$,H),We=Re.active,Ee=Object(Ae.a)(Re,["active"]),Oe=be.includes(b),Ke=B(de.length),Te=function($e){if(!X){var Ue=ye($e);z==null||z(hn(Ue)),se(Ue)}},Pe=function($e){if(le==null||le($e),$e.which===we.a.ENTER){var Ue=ye($e);z==null||z(hn(Ue)),se(Ue)}},De=function($e){ae(b),Z==null||Z($e)},xe={};return s.role==="option"&&(xe["aria-selected"]=Oe),n.createElement(ba,Object(L.a)({ref:pe,elementRef:ie,role:x===null?"none":x||"menuitem",tabIndex:R?null:-1,"data-menu-id":oe&&ue?null:ue},k,Ee,xe,{component:"li","aria-disabled":R,style:Object(ce.a)(Object(ce.a)({},Ke),E),className:Ie()(me,(p={},Object(fe.a)(p,"".concat(me,"-active"),We),Object(fe.a)(p,"".concat(me,"-selected"),Oe),Object(fe.a)(p,"".concat(me,"-disabled"),X),p),O),onClick:Te,onKeyDown:Pe,onFocus:De}),w,n.createElement(h,{props:Object(ce.a)(Object(ce.a)({},s),{},{isSelected:Oe}),icon:ge}))};function Ca(a){var s=a.eventKey,p=te(),E=Ve(s);return n.useEffect(function(){if(p)return p.registerPath(s,E),function(){p.unregisterPath(s,E)}},[E]),p?null:n.createElement(Ea,a)}var jt=Ca;function Dt(a,s){return Object(Bn.a)(a).map(function(p,E){if(n.isValidElement(p)){var O=p.key;return O==null&&(O="tmp_key-".concat([].concat(Object(pn.a)(s),[E]).join("-"))),n.cloneElement(p,{key:O,eventKey:O})}return p})}function et(a){var s=n.useRef(a);s.current=a;var p=n.useCallback(function(){for(var E,O=arguments.length,b=new Array(O),R=0;R<O;R++)b[R]=arguments[R];return(E=s.current)===null||E===void 0?void 0:E.call.apply(E,[s].concat(b))},[]);return a?p:void 0}var Oa=function(s,p){var E=s.className,O=s.children,b=Object(Ae.a)(s,["className","children"]),R=n.useContext(Y),j=R.prefixCls,w=R.mode;return n.createElement("ul",Object(L.a)({className:Ie()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(w==="inline"?"inline":"vertical"),E)},b,{"data-menu-list":!0,ref:p}),O)},Gt=n.forwardRef(Oa);Gt.displayName="SubMenuList";var Yt=Gt,Sa=e("uciX"),$n={adjustX:1,adjustY:1},Ht={topLeft:{points:["bl","tl"],overflow:$n,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:$n,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:$n,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:$n,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:$n,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:$n,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:$n,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:$n,offset:[4,0]}},fr=Ht;function Xt(a,s,p){if(s)return s;if(p)return p[a]||p.other}var Fa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ja(a){var s=a.prefixCls,p=a.visible,E=a.children,O=a.popup,b=a.popupClassName,R=a.popupOffset,j=a.disabled,w=a.mode,x=a.onVisibleChange,$=n.useContext(Y),H=$.getPopupContainer,z=$.rtl,le=$.subMenuOpenDelay,Z=$.subMenuCloseDelay,k=$.builtinPlacements,ue=$.triggerSubMenuAction,U=$.forceSubMenuRender,ne=$.motion,se=$.defaultMotions,q=n.useState(!1),oe=Object(J.a)(q,2),ee=oe[0],be=oe[1],ae=z?Object(ce.a)(Object(ce.a)({},Ra),k):Object(ce.a)(Object(ce.a)({},Ht),k),me=Fa[w],pe=Xt(w,ne,se),ie=Object(ce.a)(Object(ce.a)({},pe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),X=n.useRef();return n.useEffect(function(){return X.current=Object(Xe.a)(function(){be(p)}),function(){Xe.a.cancel(X.current)}},[p]),n.createElement(Sa.a,{prefixCls:s,popupClassName:Ie()("".concat(s,"-popup"),Object(fe.a)({},"".concat(s,"-rtl"),z),b),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ae,popupPlacement:me,popupVisible:ee,popup:O,popupAlign:R&&{offset:R},action:j?[]:[ue],mouseEnterDelay:le,mouseLeaveDelay:Z,onPopupVisibleChange:x,forceRender:U,popupMotion:ie},E)}var Da=e("8XRh");function Pa(a){var s=a.id,p=a.open,E=a.keyPath,O=a.children,b="inline",R=n.useContext(Y),j=R.prefixCls,w=R.forceSubMenuRender,x=R.motion,$=R.defaultMotions,H=R.mode,z=n.useRef(!1);z.current=H===b;var le=n.useState(!z.current),Z=Object(J.a)(le,2),k=Z[0],ue=Z[1],U=z.current?p:!1;n.useEffect(function(){z.current&&ue(!1)},[H]);var ne=Object(ce.a)({},Xt(b,x,$));E.length>1&&(ne.motionAppear=!1);var se=ne.onVisibleChanged;return ne.onVisibleChanged=function(q){return!z.current&&!q&&ue(!0),se==null?void 0:se(q)},k?null:n.createElement(qe,{mode:b,locked:!z.current},n.createElement(Da.default,Object(L.a)({visible:U},ne,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(q){var oe=q.className,ee=q.style;return n.createElement(Yt,{id:s,className:oe,style:ee},O)}))}var Aa=function(s){var p,E=s.style,O=s.className,b=s.title,R=s.eventKey,j=s.disabled,w=s.internalPopupClose,x=s.children,$=s.itemIcon,H=s.expandIcon,z=s.popupClassName,le=s.popupOffset,Z=s.onClick,k=s.onMouseEnter,ue=s.onMouseLeave,U=s.onTitleClick,ne=s.onTitleMouseEnter,se=s.onTitleMouseLeave,q=Object(Ae.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=zt(R),ee=n.useContext(Y),be=ee.prefixCls,ae=ee.mode,me=ee.openKeys,pe=ee.disabled,ie=ee.overflowDisabled,X=ee.activeKey,de=ee.selectedKeys,ye=ee.itemIcon,ge=ee.expandIcon,Re=ee.onItemClick,We=ee.onOpenChange,Ee=ee.onActive,Oe=n.useContext(ze),Ke=Oe.isSubPathKey,Te=Ve(),Pe="".concat(be,"-submenu"),De=pe||j,xe=n.useRef(),_e=n.useRef(),$e=$||ye,Ue=H||ge,He=me.includes(R),Le=!ie&&He,Fn=Ke(de,R),an=cn(R,De,ne,se),Qe=an.active,on=Object(Ae.a)(an,["active"]),bn=n.useState(!1),En=Object(J.a)(bn,2),Ne=En[0],Ge=En[1],en=function(Ye){De||Ge(Ye)},Ze=function(Ye){en(!0),k==null||k({key:R,domEvent:Ye})},Wn=function(Ye){en(!1),ue==null||ue({key:R,domEvent:Ye})},Jn=n.useMemo(function(){return Qe||(ae!=="inline"?Ne||Ke([X],R):!1)},[ae,Qe,X,Ne,R,Ke]),Ln=B(Te.length),rn=function(Ye){De||(U==null||U({key:R,domEvent:Ye}),ae==="inline"&&We(R,!He))},jn=et(function(ke){Z==null||Z(hn(ke)),Re(ke)}),un=function(Ye){ae!=="inline"&&We(R,Ye)},Dn=function(){Ee(R)},nn=oe&&"".concat(oe,"-popup"),sn=n.createElement("div",Object(L.a)({role:"menuitem",style:Ln,className:"".concat(Pe,"-title"),tabIndex:De?null:-1,ref:xe,title:typeof b=="string"?b:null,"data-menu-id":ie&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":De,onClick:rn,onFocus:Dn},on),b,n.createElement(h,{icon:ae!=="horizontal"?Ue:null,props:Object(ce.a)(Object(ce.a)({},s),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),Pn=n.useRef(ae);if(ae!=="inline"&&(Pn.current=Te.length>1?"vertical":ae),!ie){var mn=Pn.current;sn=n.createElement(ja,{mode:mn,prefixCls:Pe,visible:!w&&Le&&ae!=="inline",popupClassName:z,popupOffset:le,popup:n.createElement(qe,{mode:mn},n.createElement(Yt,{id:nn,ref:_e},x)),disabled:De,onVisibleChange:un},sn)}return n.createElement(qe,{onItemClick:jn,mode:ae==="horizontal"?"vertical":ae,itemIcon:$e,expandIcon:Ue},n.createElement(v.Item,Object(L.a)({role:"none"},q,{component:"li",style:E,className:Ie()(Pe,"".concat(Pe,"-").concat(ae),O,(p={},Object(fe.a)(p,"".concat(Pe,"-open"),Le),Object(fe.a)(p,"".concat(Pe,"-active"),Jn),Object(fe.a)(p,"".concat(Pe,"-selected"),Fn),Object(fe.a)(p,"".concat(Pe,"-disabled"),De),p)),onMouseEnter:Ze,onMouseLeave:Wn}),sn,!ie&&n.createElement(Pa,{id:nn,open:Le,keyPath:Te},x)))};function Qt(a){var s=a.eventKey,p=a.children,E=Ve(s),O=Dt(p,E),b=te();n.useEffect(function(){if(b)return b.registerPath(s,E),function(){b.unregisterPath(s,E)}},[E]);var R;return b?R=O:R=n.createElement(Aa,a,O),n.createElement(je.Provider,{value:E},R)}var Ia=e("x/xZ");function Zt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(a)){var p=a.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(p)||a.isContentEditable||p==="a"&&!!a.getAttribute("href"),O=a.getAttribute("tabindex"),b=Number(O),R=null;return O&&!Number.isNaN(b)?R=b:E&&R===null&&(R=0),E&&a.disabled&&(R=null),R!==null&&(R>=0||s&&R<0)}return!1}function kt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=Object(pn.a)(a.querySelectorAll("*")).filter(function(E){return Zt(E,s)});return Zt(a,s)&&p.unshift(a),p}var mt=null;function pr(){mt=document.activeElement}function hr(){mt=null}function vr(){if(mt)try{mt.focus()}catch(a){}}function gr(a,s){if(s.keyCode===9){var p=kt(a),E=p[s.shiftKey?0:p.length-1],O=E===document.activeElement||a===document.activeElement;if(O){var b=p[s.shiftKey?p.length-1:0];b.focus(),s.preventDefault()}}}var Pt=we.a.LEFT,At=we.a.RIGHT,It=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[It,ft,Pt,At];function Na(a,s,p,E){var O,b,R,j,w="prev",x="next",$="children",H="parent";if(a==="inline"&&E===pt)return{inlineTrigger:!0};var z=(O={},Object(fe.a)(O,It,w),Object(fe.a)(O,ft,x),O),le=(b={},Object(fe.a)(b,Pt,p?x:w),Object(fe.a)(b,At,p?w:x),Object(fe.a)(b,ft,$),Object(fe.a)(b,pt,$),b),Z=(R={},Object(fe.a)(R,It,w),Object(fe.a)(R,ft,x),Object(fe.a)(R,pt,$),Object(fe.a)(R,qt,H),Object(fe.a)(R,Pt,p?$:H),Object(fe.a)(R,At,p?H:$),R),k={inline:z,horizontal:le,vertical:Z,inlineSub:z,horizontalSub:Z,verticalSub:Z},ue=(j=k["".concat(a).concat(s?"":"Sub")])===null||j===void 0?void 0:j[E];switch(ue){case w:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ta(a){for(var s=a;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function Ba(a,s){for(var p=a||document.activeElement;p;){if(s.has(p))return p;p=p.parentElement}return null}function Ka(a,s){var p=kt(a,!0);return p.filter(function(E){return s.has(E)})}function ea(a,s,p){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var O=Ka(a,s),b=O.length,R=O.findIndex(function(j){return p===j});return E<0?R===-1?R=b-1:R-=1:E>0&&(R+=1),R=(R+b)%b,O[R]}function Ma(a,s,p,E,O,b,R,j,w,x){var $=n.useRef(),H=n.useRef();H.current=s;var z=function(){Xe.a.cancel($.current)};return n.useEffect(function(){return function(){z()}},[]),function(le){var Z=le.which;if([].concat(_t,[pt,qt]).includes(Z)){var k,ue,U,ne=function(){k=new Set,ue=new Map,U=new Map;var ye=b();return ye.forEach(function(ge){var Re=document.querySelector("[data-menu-id='".concat(Jt(E,ge),"']"));Re&&(k.add(Re),U.set(Re,ge),ue.set(ge,Re))}),k};ne();var se=ue.get(s),q=Ba(se,k),oe=U.get(q),ee=Na(a,R(oe,!0).length===1,p,Z);if(!ee)return;_t.includes(Z)&&le.preventDefault();var be=function(ye){if(ye){var ge=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(ge=Re);var We=U.get(ye);j(We),z(),$.current=Object(Xe.a)(function(){H.current===We&&ge.focus()})}};if(ee.sibling||!q){var ae;!q||a==="inline"?ae=O.current:ae=Ta(q);var me=ea(ae,k,q,ee.offset);be(me)}else if(ee.inlineTrigger)w(oe);else if(ee.offset>0)w(oe,!0),z(),$.current=Object(Xe.a)(function(){ne();var de=q.getAttribute("aria-controls"),ye=document.getElementById(de),ge=ea(ye,k);be(ge)},5);else if(ee.offset<0){var pe=R(oe,!0),ie=pe[pe.length-2],X=ue.get(ie);w(ie,!1),be(X)}}x==null||x(le)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(a){var s=Object(Sn.a)(a,{value:a}),p=Object(J.a)(s,2),E=p[0],O=p[1];return n.useEffect(function(){na+=1;var b="".concat(wa,"-").concat(na);O("rc-menu-uuid-".concat(b))},[]),E}var yr=e("p8sG");function La(a){Promise.resolve().then(a)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(s){return s.join(Nt)},xa=function(s){return s.split(Nt)},Tt="rc-menu-more";function $a(){var a=n.useState({}),s=Object(J.a)(a,2),p=s[1],E=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),b=n.useState([]),R=Object(J.a)(b,2),j=R[0],w=R[1],x=Object(n.useRef)(0),$=Object(n.useCallback)(function(U,ne){var se=ta(ne);O.current.set(se,U),E.current.set(U,se),x.current+=1;var q=x.current;La(function(){q===x.current&&p({})})},[]),H=Object(n.useCallback)(function(U,ne){var se=ta(ne);O.current.delete(se),E.current.delete(U)},[]),z=Object(n.useCallback)(function(U){w(U)},[]),le=Object(n.useCallback)(function(U,ne){var se=E.current.get(U)||"",q=xa(se);return ne&&j.includes(q[0])&&q.unshift(Tt),q},[j]),Z=Object(n.useCallback)(function(U,ne){return U.some(function(se){var q=le(se,!0);return q.includes(ne)})},[le]),k=function(){var ne=Object(pn.a)(E.current.keys());return j.length&&ne.push(Tt),ne},ue=Object(n.useCallback)(function(U){var ne="".concat(E.current.get(U)).concat(Nt),se=new Set;return Object(pn.a)(O.current.keys()).forEach(function(q){q.startsWith(ne)&&se.add(O.current.get(q))}),se},[]);return{registerPath:$,unregisterPath:H,refreshOverflowKeys:z,isSubPathKey:Z,getKeyPath:le,getKeys:k,getSubPathKeys:ue}}var ht=[],Va=function(s){var p,E,O=s.prefixCls,b=O===void 0?"rc-menu":O,R=s.style,j=s.className,w=s.tabIndex,x=w===void 0?0:w,$=s.children,H=s.direction,z=s.id,le=s.mode,Z=le===void 0?"vertical":le,k=s.inlineCollapsed,ue=s.disabled,U=s.disabledOverflow,ne=s.subMenuOpenDelay,se=ne===void 0?.1:ne,q=s.subMenuCloseDelay,oe=q===void 0?.1:q,ee=s.forceSubMenuRender,be=s.defaultOpenKeys,ae=s.openKeys,me=s.activeKey,pe=s.defaultActiveFirst,ie=s.selectable,X=ie===void 0?!0:ie,de=s.multiple,ye=de===void 0?!1:de,ge=s.defaultSelectedKeys,Re=s.selectedKeys,We=s.onSelect,Ee=s.onDeselect,Oe=s.inlineIndent,Ke=Oe===void 0?24:Oe,Te=s.motion,Pe=s.defaultMotions,De=s.triggerSubMenuAction,xe=De===void 0?"hover":De,_e=s.builtinPlacements,$e=s.itemIcon,Ue=s.expandIcon,He=s.overflowedIndicator,Le=He===void 0?"...":He,Fn=s.getPopupContainer,an=s.onClick,Qe=s.onOpenChange,on=s.onKeyDown,bn=s.openAnimation,En=s.openTransitionName,Ne=Object(Ae.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=Dt($,ht),en=n.useState(!1),Ze=Object(J.a)(en,2),Wn=Ze[0],Jn=Ze[1],Ln=n.useRef(),rn=Wa(z),jn=H==="rtl",un=n.useMemo(function(){return Z==="inline"&&k?["vertical",k]:[Z,!1]},[Z,k]),Dn=Object(J.a)(un,2),nn=Dn[0],sn=Dn[1],Pn=n.useState(0),mn=Object(J.a)(Pn,2),ke=mn[0],Ye=mn[1],zn=ke>=Ge.length-1||nn!=="horizontal"||U,Gn=Object(Sn.a)(be,{value:ae,postState:function(_){return _||ht}}),nt=Object(J.a)(Gn,2),Cn=nt[0],gn=nt[1],Yn=n.useState(Cn),On=Object(J.a)(Yn,2),fn=On[0],Hn=On[1],An=nn==="inline",Xn=n.useRef(!1);n.useEffect(function(){An&&Hn(Cn)},[Cn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(An)gn(fn);else{var re=[];gn(re),Qe==null||Qe(re)}},[An]);var dn=$a(),In=dn.registerPath,ve=dn.unregisterPath,Fe=dn.refreshOverflowKeys,Me=dn.isSubPathKey,tn=dn.getKeyPath,Qn=dn.getKeys,gt=dn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Wt=n.useMemo(function(){return{isSubPathKey:Me}},[Me]);n.useEffect(function(){Fe(zn?ht:Ge.slice(ke+1).map(function(re){return re.key}))},[ke,zn]);var Lt=Object(Sn.a)(me||pe&&((p=Ge[0])===null||p===void 0?void 0:p.key),{value:me}),tt=Object(J.a)(Lt,2),yt=tt[0],lt=tt[1],bt=et(function(re){lt(re)}),xt=et(function(){lt(void 0)}),Et=Object(Sn.a)(ge||[],{value:Re,postState:function(_){return Array.isArray(_)?_:_==null?ht:[_]}}),Ct=Object(J.a)(Et,2),at=Ct[0],Nn=Ct[1],Ot=function(_){if(!!X){var Ce=_.key,Je=at.includes(Ce),ln;Je?ln=at.filter(function(kn){return kn!==Ce}):ye?ln=[].concat(Object(pn.a)(at),[Ce]):ln=[Ce],Nn(ln);var Vn=Object(ce.a)(Object(ce.a)({},_),{},{selectedKeys:ln});Je?Ee==null||Ee(Vn):We==null||We(Vn)}},St=et(function(re){an==null||an(hn(re)),Ot(re)}),ot=et(function(re,_){var Ce=Cn.filter(function(ln){return ln!==re});if(_)Ce.push(re);else if(nn!=="inline"){var Je=gt(re);Ce=Ce.filter(function(ln){return!Je.has(ln)})}I()(Cn,Ce)||(gn(Ce),Qe==null||Qe(Ce))}),Zn=et(Fn),ut=function(_,Ce){var Je=Ce!=null?Ce:!Cn.includes(_);ot(_,Je)},dt=Ma(nn,yt,jn,rn,Ln,Qn,tn,lt,ut,on);n.useEffect(function(){Jn(!0)},[]);var Rt=nn!=="horizontal"||U?Ge:Ge.map(function(re,_){return n.createElement(qe,{key:re.key,overflowDisabled:_>ke},re)}),Ft=n.createElement(v,Object(L.a)({id:z,ref:Ln,prefixCls:"".concat(b,"-overflow"),component:"ul",itemComponent:jt,className:Ie()(b,"".concat(b,"-root"),"".concat(b,"-").concat(nn),j,(E={},Object(fe.a)(E,"".concat(b,"-inline-collapsed"),sn),Object(fe.a)(E,"".concat(b,"-rtl"),jn),E)),dir:H,style:R,role:"menu",tabIndex:x,data:Rt,renderRawItem:function(_){return _},renderRawRest:function(_){var Ce=_.length,Je=Ce?Ge.slice(-Ce):null;return n.createElement(Qt,{eventKey:Tt,title:Le,disabled:zn,internalPopupClose:Ce===0},Je)},maxCount:nn!=="horizontal"||U?v.INVALIDATE:v.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(_){Ye(_)},onKeyDown:dt},Ne));return n.createElement(Ut.Provider,{value:rn},n.createElement(qe,{prefixCls:b,mode:nn,openKeys:Cn,rtl:jn,disabled:ue,motion:Wn?Te:null,defaultMotions:Wn?Pe:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:at,inlineIndent:Ke,subMenuOpenDelay:se,subMenuCloseDelay:oe,forceSubMenuRender:ee,builtinPlacements:_e,triggerSubMenuAction:xe,getPopupContainer:Zn,itemIcon:$e,expandIcon:Ue,onItemClick:St,onOpenChange:ot},n.createElement(ze.Provider,{value:Wt},Ft),n.createElement(he.Provider,{value:wt},Ge)))},Ua=Va,Ja=function(s){var p=s.className,E=s.title,O=s.eventKey,b=s.children,R=Object(Ae.a)(s,["className","title","eventKey","children"]),j=n.useContext(Y),w=j.prefixCls,x="".concat(w,"-item-group");return n.createElement("li",Object(L.a)({},R,{onClick:function(H){return H.stopPropagation()},className:Ie()(x,p)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat(x,"-list")},b))};function za(a){var s=a.children,p=Object(Ae.a)(a,["children"]),E=Ve(p.eventKey),O=Dt(s,E),b=te();return b?O:n.createElement(Ja,p,O)}function Ga(a){var s=a.className,p=a.style,E=n.useContext(Y),O=E.prefixCls,b=te();return b?null:n.createElement("li",{className:Ie()("".concat(O,"-item-divider"),s),style:p})}var it=Ua;it.Item=jt,it.SubMenu=Qt,it.ItemGroup=za,it.Divider=Ga;var Ya=it,Ha=e("eDIo");function Xa(a,s){var p=a.prefixCls,E=a.editable,O=a.locale,b=a.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:s,type:"button",className:"".concat(p,"-nav-add"),style:b,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(j){E.onEdit("add",{event:j})}},E.addIcon||"+")}var aa=n.forwardRef(Xa);function Qa(a,s){var p=a.prefixCls,E=a.id,O=a.tabs,b=a.locale,R=a.mobile,j=a.moreIcon,w=j===void 0?"More":j,x=a.moreTransitionName,$=a.style,H=a.className,z=a.editable,le=a.tabBarGutter,Z=a.rtl,k=a.onTabClick,ue=Object(n.useState)(!1),U=Object(J.a)(ue,2),ne=U[0],se=U[1],q=Object(n.useState)(null),oe=Object(J.a)(q,2),ee=oe[0],be=oe[1],ae="".concat(E,"-more-popup"),me="".concat(p,"-dropdown"),pe=ee!==null?"".concat(ae,"-").concat(ee):null,ie=b==null?void 0:b.dropdownAriaLabel,X=n.createElement(Ya,{onClick:function(Oe){var Ke=Oe.key,Te=Oe.domEvent;k(Ke,Te),se(!1)},id:ae,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[ee],"aria-label":ie!==void 0?ie:"expanded dropdown"},O.map(function(Ee){return n.createElement(jt,{key:Ee.key,id:"".concat(ae,"-").concat(Ee.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function de(Ee){for(var Oe=O.filter(function(xe){return!xe.disabled}),Ke=Oe.findIndex(function(xe){return xe.key===ee})||0,Te=Oe.length,Pe=0;Pe<Te;Pe+=1){Ke=(Ke+Ee+Te)%Te;var De=Oe[Ke];if(!De.disabled){be(De.key);return}}}function ye(Ee){var Oe=Ee.which;if(!ne){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(se(!0),Ee.preventDefault());return}switch(Oe){case we.a.UP:de(-1),Ee.preventDefault();break;case we.a.DOWN:de(1),Ee.preventDefault();break;case we.a.ESC:se(!1);break;case we.a.SPACE:case we.a.ENTER:ee!==null&&k(ee,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(pe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[ee]),Object(n.useEffect)(function(){ne||be(null)},[ne]);var ge=Object(fe.a)({},Z?"marginLeft":"marginRight",le);O.length||(ge.visibility="hidden",ge.order=1);var Re=Ie()(Object(fe.a)({},"".concat(me,"-rtl"),Z)),We=R?null:n.createElement(Ha.default,{prefixCls:me,overlay:X,trigger:["hover"],visible:ne,transitionName:x,onVisibleChange:se,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(p,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ae,id:"".concat(E,"-more"),"aria-expanded":ne,onKeyDown:ye},w));return n.createElement("div",{className:Ie()("".concat(p,"-nav-operations"),H),style:$,ref:s},We,n.createElement(aa,{prefixCls:p,locale:b,editable:z}))}var Za=n.forwardRef(Qa),Bt=Object(n.createContext)(null),ka=.1,ra=.01,vt=20,sa=Math.pow(.995,vt);function qa(a,s){var p=Object(n.useState)(),E=Object(J.a)(p,2),O=E[0],b=E[1],R=Object(n.useState)(0),j=Object(J.a)(R,2),w=j[0],x=j[1],$=Object(n.useState)(0),H=Object(J.a)($,2),z=H[0],le=H[1],Z=Object(n.useState)(),k=Object(J.a)(Z,2),ue=k[0],U=k[1],ne=Object(n.useRef)();function se(me){var pe=me.touches[0],ie=pe.screenX,X=pe.screenY;b({x:ie,y:X}),window.clearInterval(ne.current)}function q(me){if(!!O){me.preventDefault();var pe=me.touches[0],ie=pe.screenX,X=pe.screenY;b({x:ie,y:X});var de=ie-O.x,ye=X-O.y;s(de,ye);var ge=Date.now();x(ge),le(ge-w),U({x:de,y:ye})}}function oe(){if(!!O&&(b(null),U(null),ue)){var me=ue.x/z,pe=ue.y/z,ie=Math.abs(me),X=Math.abs(pe);if(Math.max(ie,X)<ka)return;var de=me,ye=pe;ne.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ye)<ra){window.clearInterval(ne.current);return}de*=sa,ye*=sa,s(de*vt,ye*vt)},vt)}}var ee=Object(n.useRef)();function be(me){var pe=me.deltaX,ie=me.deltaY,X=0,de=Math.abs(pe),ye=Math.abs(ie);de===ye?X=ee.current==="x"?pe:ie:de>ye?(X=pe,ee.current="x"):(X=ie,ee.current="y"),s(-X,-X)&&me.preventDefault()}var ae=Object(n.useRef)(null);ae.current={onTouchStart:se,onTouchMove:q,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function me(de){ae.current.onTouchStart(de)}function pe(de){ae.current.onTouchMove(de)}function ie(de){ae.current.onTouchEnd(de)}function X(de){ae.current.onWheel(de)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),a.current.addEventListener("touchstart",me,{passive:!1}),a.current.addEventListener("wheel",X),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",ie)}},[])}function _a(){var a=Object(n.useRef)(new Map);function s(E){return a.current.has(E)||a.current.set(E,n.createRef()),a.current.get(E)}function p(E){a.current.delete(E)}return[s,p]}function ia(a,s){var p=n.useRef(a),E=n.useState({}),O=Object(J.a)(E,2),b=O[1];function R(j){var w=typeof j=="function"?j(p.current):j;w!==p.current&&s(w,p.current),p.current=w,b({})}return[p.current,R]}var la=function(s){var p=s.position,E=s.prefixCls,O=s.extra;if(!O)return null;var b,R=O;return p==="right"&&(b=R.right||!R.left&&R||null),p==="left"&&(b=R.left||null),b?n.createElement("div",{className:"".concat(E,"-extra-content")},b):null};function er(a,s){var p,E=n.useContext(Bt),O=E.prefixCls,b=E.tabs,R=a.className,j=a.style,w=a.id,x=a.animated,$=a.activeKey,H=a.rtl,z=a.extra,le=a.editable,Z=a.locale,k=a.tabPosition,ue=a.tabBarGutter,U=a.children,ne=a.onTabClick,se=a.onTabScroll,q=Object(n.useRef)(),oe=Object(n.useRef)(),ee=Object(n.useRef)(),be=Object(n.useRef)(),ae=_a(),me=Object(J.a)(ae,2),pe=me[0],ie=me[1],X=k==="top"||k==="bottom",de=ia(0,function(re,_){X&&se&&se({direction:re>_?"left":"right"})}),ye=Object(J.a)(de,2),ge=ye[0],Re=ye[1],We=ia(0,function(re,_){!X&&se&&se({direction:re>_?"top":"bottom"})}),Ee=Object(J.a)(We,2),Oe=Ee[0],Ke=Ee[1],Te=Object(n.useState)(0),Pe=Object(J.a)(Te,2),De=Pe[0],xe=Pe[1],_e=Object(n.useState)(0),$e=Object(J.a)(_e,2),Ue=$e[0],He=$e[1],Le=Object(n.useState)(0),Fn=Object(J.a)(Le,2),an=Fn[0],Qe=Fn[1],on=Object(n.useState)(0),bn=Object(J.a)(on,2),En=bn[0],Ne=bn[1],Ge=Object(n.useState)(null),en=Object(J.a)(Ge,2),Ze=en[0],Wn=en[1],Jn=Object(n.useState)(null),Ln=Object(J.a)(Jn,2),rn=Ln[0],jn=Ln[1],un=Object(n.useState)(0),Dn=Object(J.a)(un,2),nn=Dn[0],sn=Dn[1],Pn=Object(n.useState)(0),mn=Object(J.a)(Pn,2),ke=mn[0],Ye=mn[1],zn=Rn(new Map),Gn=Object(J.a)(zn,2),nt=Gn[0],Cn=Gn[1],gn=rt(b,nt,De),Yn="".concat(O,"-nav-operations-hidden"),On=0,fn=0;X?H?(On=0,fn=Math.max(0,De-Ze)):(On=Math.min(0,Ze-De),fn=0):(On=Math.min(0,rn-Ue),fn=0);function Hn(re){return re<On?On:re>fn?fn:re}var An=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(J.a)(Xn,2),In=dn[0],ve=dn[1];function Fe(){ve(Date.now())}function Me(){window.clearTimeout(An.current)}qa(q,function(re,_){function Ce(Je,ln){Je(function(Vn){var kn=Hn(Vn+ln);return kn})}if(X){if(Ze>=De)return!1;Ce(Re,re)}else{if(rn>=Ue)return!1;Ce(Ke,_)}return Me(),Fe(),!0}),Object(n.useEffect)(function(){return Me(),In&&(An.current=window.setTimeout(function(){ve(0)},100)),Me},[In]);function tn(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,_=gn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(X){var Ce=ge;H?_.right<ge?Ce=_.right:_.right+_.width>ge+Ze&&(Ce=_.right+_.width-Ze):_.left<-ge?Ce=-_.left:_.left+_.width>-ge+Ze&&(Ce=-(_.left+_.width-Ze)),Ke(0),Re(Hn(Ce))}else{var Je=Oe;_.top<-Oe?Je=-_.top:_.top+_.height>-Oe+rn&&(Je=-(_.top+_.height-rn)),Re(0),Ke(Hn(Je))}}var Qn=N(gn,{width:Ze,height:rn,left:ge,top:Oe},{width:an,height:En},{width:nn,height:ke},Object(ce.a)(Object(ce.a)({},a),{},{tabs:b})),gt=Object(J.a)(Qn,2),wt=gt[0],Wt=gt[1],Lt=b.map(function(re){var _=re.key;return n.createElement(wn,{id:w,prefixCls:O,key:_,rtl:H,tab:re,closable:re.closable,editable:le,active:_===$,tabPosition:k,tabBarGutter:ue,renderWrapper:U,removeAriaLabel:Z==null?void 0:Z.removeAriaLabel,ref:pe(_),onClick:function(Je){ne(_,Je)},onRemove:function(){ie(_)},onFocus:function(){tn(_),Fe(),H||(q.current.scrollLeft=0),q.current.scrollTop=0}})}),tt=Mn(function(){var re,_,Ce,Je,ln,Vn,kn,$t,Vt,or=((re=q.current)===null||re===void 0?void 0:re.offsetWidth)||0,ur=((_=q.current)===null||_===void 0?void 0:_.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((ln=ee.current)===null||ln===void 0?void 0:ln.offsetWidth)||0,cr=((Vn=ee.current)===null||Vn===void 0?void 0:Vn.offsetHeight)||0;Wn(or),jn(ur),sn(ma),Ye(fa);var pa=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,ha=((($t=oe.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-fa;xe(pa),He(ha);var va=(Vt=ee.current)===null||Vt===void 0?void 0:Vt.className.includes(Yn);Qe(pa-(va?0:dr)),Ne(ha-(va?0:cr)),Cn(function(){var ga=new Map;return b.forEach(function(mr){var ya=mr.key,ct=pe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=b.slice(0,wt),lt=b.slice(Wt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(lt)),xt=Object(n.useState)(),Et=Object(J.a)(xt,2),Ct=Et[0],at=Et[1],Nn=gn.get($),Ot=Object(n.useRef)();function St(){Xe.a.cancel(Ot.current)}Object(n.useEffect)(function(){var re={};return Nn&&(X?(H?re.right=Nn.right:re.left=Nn.left,re.width=Nn.width):(re.top=Nn.top,re.height=Nn.height)),St(),Ot.current=Object(Xe.a)(function(){at(re)}),St},[Nn,X,H]),Object(n.useEffect)(function(){tn()},[$,Nn,gn,X]),Object(n.useEffect)(function(){tt()},[H,ue,$,b.map(function(re){return re.key}).join("_")]);var ot=!!bt.length,Zn="".concat(O,"-nav-wrap"),ut,dt,Rt,Ft;return X?H?(dt=ge>0,ut=ge+Ze<De):(ut=ge<0,dt=-ge+Ze<De):(Rt=Oe<0,Ft=-Oe+rn<Ue),n.createElement("div",{ref:s,role:"tablist",className:Ie()("".concat(O,"-nav"),R),style:j,onKeyDown:function(){Fe()}},n.createElement(la,{position:"left",extra:z,prefixCls:O}),n.createElement(xn.default,{onResize:tt},n.createElement("div",{className:Ie()(Zn,(p={},Object(fe.a)(p,"".concat(Zn,"-ping-left"),ut),Object(fe.a)(p,"".concat(Zn,"-ping-right"),dt),Object(fe.a)(p,"".concat(Zn,"-ping-top"),Rt),Object(fe.a)(p,"".concat(Zn,"-ping-bottom"),Ft),p)),ref:q},n.createElement(xn.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Oe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:O,locale:Z,editable:le,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(O,"-ink-bar"),Object(fe.a)({},"".concat(O,"-ink-bar-animated"),x.inkBar)),style:Ct}))))),n.createElement(Za,Object(L.a)({},a,{ref:ee,prefixCls:O,tabs:bt,className:!ot&&Yn})),n.createElement(la,{position:"right",extra:z,prefixCls:O}))}var oa=n.forwardRef(er);function nr(a){var s=a.id,p=a.activeKey,E=a.animated,O=a.tabPosition,b=a.rtl,R=a.destroyInactiveTabPane,j=n.useContext(Bt),w=j.prefixCls,x=j.tabs,$=E.tabPane,H=x.findIndex(function(z){return z.key===p});return n.createElement("div",{className:Ie()("".concat(w,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(w,"-content"),"".concat(w,"-content-").concat(O),Object(fe.a)({},"".concat(w,"-content-animated"),$)),style:H&&$?Object(fe.a)({},b?"marginRight":"marginLeft","-".concat(H,"00%")):null},x.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:w,tabKey:z.key,id:s,animated:$,active:z.key===p,destroyInactiveTabPane:R})})))}function ua(a){var s=a.prefixCls,p=a.forceRender,E=a.className,O=a.style,b=a.id,R=a.active,j=a.animated,w=a.destroyInactiveTabPane,x=a.tabKey,$=a.children,H=n.useState(p),z=Object(J.a)(H,2),le=z[0],Z=z[1];n.useEffect(function(){R?Z(!0):w&&Z(!1)},[R,w]);var k={};return R||(j?(k.visibility="hidden",k.height=0,k.overflowY="hidden"):k.display="none"),n.createElement("div",{id:b&&"".concat(b,"-panel-").concat(x),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":b&&"".concat(b,"-tab-").concat(x),"aria-hidden":!R,style:Object(ce.a)(Object(ce.a)({},k),O),className:Ie()("".concat(s,"-tabpane"),R&&"".concat(s,"-tabpane-active"),E)},(R||le||p)&&$)}var da=0;function tr(a){return Object(Bn.a)(a).map(function(s){if(n.isValidElement(s)){var p=s.key!==void 0?String(s.key):void 0;return Object(ce.a)(Object(ce.a)({key:p},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ar(a,s){var p,E=a.id,O=a.prefixCls,b=O===void 0?"rc-tabs":O,R=a.className,j=a.children,w=a.direction,x=a.activeKey,$=a.defaultActiveKey,H=a.editable,z=a.animated,le=z===void 0?{inkBar:!0,tabPane:!1}:z,Z=a.tabPosition,k=Z===void 0?"top":Z,ue=a.tabBarGutter,U=a.tabBarStyle,ne=a.tabBarExtraContent,se=a.locale,q=a.moreIcon,oe=a.moreTransitionName,ee=a.destroyInactiveTabPane,be=a.renderTabBar,ae=a.onChange,me=a.onTabClick,pe=a.onTabScroll,ie=Object(Ae.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),X=tr(j),de=w==="rtl",ye;le===!1?ye={inkBar:!1,tabPane:!1}:le===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ce.a)({inkBar:!0,tabPane:!1},Object(Be.a)(le)==="object"?le:{});var ge=Object(n.useState)(!1),Re=Object(J.a)(ge,2),We=Re[0],Ee=Re[1];Object(n.useEffect)(function(){Ee(Object(Kn.a)())},[]);var Oe=Object(Sn.a)(function(){var Ne;return(Ne=X[0])===null||Ne===void 0?void 0:Ne.key},{value:x,defaultValue:$}),Ke=Object(J.a)(Oe,2),Te=Ke[0],Pe=Ke[1],De=Object(n.useState)(function(){return X.findIndex(function(Ne){return Ne.key===Te})}),xe=Object(J.a)(De,2),_e=xe[0],$e=xe[1];Object(n.useEffect)(function(){var Ne=X.findIndex(function(en){return en.key===Te});if(Ne===-1){var Ge;Ne=Math.max(0,Math.min(_e,X.length-1)),Pe((Ge=X[Ne])===null||Ge===void 0?void 0:Ge.key)}$e(Ne)},[X.map(function(Ne){return Ne.key}).join("_"),Te,_e]);var Ue=Object(Sn.a)(null,{value:E}),He=Object(J.a)(Ue,2),Le=He[0],Fn=He[1],an=k;We&&!["left","right"].includes(k)&&(an="top"),Object(n.useEffect)(function(){E||(Fn("rc-tabs-".concat(da)),da+=1)},[]);function Qe(Ne,Ge){me==null||me(Ne,Ge),Pe(Ne),ae==null||ae(Ne)}var on={id:Le,activeKey:Te,animated:ye,tabPosition:an,rtl:de,mobile:We},bn,En=Object(ce.a)(Object(ce.a)({},on),{},{editable:H,locale:se,moreIcon:q,moreTransitionName:oe,tabBarGutter:ue,onTabClick:Qe,onTabScroll:pe,extra:ne,style:U,panes:j});return be?bn=be(En,oa):bn=n.createElement(oa,En),n.createElement(Bt.Provider,{value:{tabs:X,prefixCls:b}},n.createElement("div",Object(L.a)({ref:s,id:E,className:Ie()(b,"".concat(b,"-").concat(an),(p={},Object(fe.a)(p,"".concat(b,"-mobile"),We),Object(fe.a)(p,"".concat(b,"-editable"),H),Object(fe.a)(p,"".concat(b,"-rtl"),de),p),R)},ie),bn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:ee},on,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=ua;var rr=ca,sr=rr,Kt=e("MZF8"),vn=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function Mt(a,s){var p,E=(p=a.match(/\.(\w+)$/))===null||p===void 0?void 0:p[1];return E||(E=s.tsx?"tsx":"jsx"),E}var lr=a=>{var s,p,E,O=Object(n.useRef)(),b=Object(n.useContext)(vn.context),R=b.locale,j=Object(vn.useLocaleProps)(R,a),w=Object(vn.useDemoUrl)(j.identifier),x=j.demoUrl||w,$=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(j.identifier),H=Object.keys(j.sources).length===1,z=Object(vn.useCodeSandbox)((s=j.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:j),le=Object(vn.useRiddle)((p=j.hideActions)!==null&&p!==void 0&&p.includes("RIDDLE")?null:j),Z=Object(vn.useMotions)(j.motions||[],O.current),k=Object(V.default)(Z,2),ue=k[0],U=k[1],ne=Object(vn.useCopy)(),se=Object(V.default)(ne,2),q=se[0],oe=se[1],ee=Object(n.useState)("_"),be=Object(V.default)(ee,2),ae=be[0],me=be[1],pe=Object(n.useState)(Mt(ae,j.sources[ae])),ie=Object(V.default)(pe,2),X=ie[0],de=ie[1],ye=Object(n.useState)(Boolean(j.defaultShowCode)),ge=Object(V.default)(ye,2),Re=ge[0],We=ge[1],Ee=Object(n.useState)(Math.random()),Oe=Object(V.default)(Ee,2),Ke=Oe[0],Te=Oe[1],Pe=j.sources[ae][X]||j.sources[ae].content,De=Object(vn.useTSPlaygroundUrl)(R,Pe),xe=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),$e=Object(V.default)(_e,1),Ue=$e[0];Object(n.useEffect)(()=>{Te(Math.random())},[Ue]);function He(Le){me(Le),de(Mt(Le,j.sources[Le]))}return g.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&g.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),g.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?g.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:Ke,src:x,ref:xe}):j.children),g.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&g.a.createElement(vn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&g.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),g.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&g.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),le&&g.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:le}),j.motions&&g.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ue()}),j.iframe&&g.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((E=j.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&g.a.createElement(vn.Link,{target:"_blank",to:x},g.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),g.a.createElement("span",null),g.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>q(Pe)}),X==="tsx"&&Re&&g.a.createElement(vn.Link,{target:"_blank",to:De},g.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),g.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Re)})),Re&&g.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&g.a.createElement(sr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ae,onChange:He},Object.keys(j.sources).map(Le=>g.a.createElement(ua,{tab:Le==="_"?"index.".concat(Mt(Le,j.sources[Le])):Le,key:Le}))),g.a.createElement("div",{className:"__dumi-default-previewer-source"},g.a.createElement(ir.a,{code:Pe,lang:X,showCopy:!1}))))},Er=yn.default=lr},"2XY2":function(Tn,yn,e){"use strict";e.r(yn);var V=e("q1tI"),n=e.n(V),g=e("dEAq"),L=e.n(g),fe=e("0zqC"),J=e("ZpkN"),Be=e("JjdP"),Ae=n.a.memo(Be.default["chart-render-demo"].component);yn.default=ce=>(n.a.useEffect(()=>{ce!=null&&ce.location.hash&&g.AnchorLink.scrollToAnchor(decodeURIComponent(ce.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"ChartRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(g.Link,{to:"https://www.npmjs.com/package/chart-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/chart-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/chart-render.svg?style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/chart-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u56FE\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u56FE\u8868\u5C55\u793A\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(g.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u53EA\u9700\u8981\u5173\u5FC3\u4F60\u7684\u6570\u636E\uFF0C\u4F20\u5165 ",n.a.createElement("code",null,"meta"),"\u3001",n.a.createElement("code",null,"data")," \u5373\u53EF\u51FA\u56FE\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u5F00\u53D1\u4F53\u9A8C\u8212\u9002"),"\uFF1A\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u56FE\u8868\u7528 Ant Design Charts \u6765\u63D0\u4F9B\uFF0C\u81EA\u5B9A\u4E49\u7684\u6837\u5F0F\u652F\u6301\u53C2\u6570\u900F\u4F20\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u9700\u8981\u9488\u5BF9\u4E00\u5806\u6570\u636E\u5FEB\u901F\u5EFA\u7ACB\u53EF\u89C6\u5316\u56FE\u8868\uFF0C\u5E76\u4E14\u9700\u8981 ",n.a.createElement("strong",null,"\u6298\u7EBF\u56FE/\u67F1\u72B6\u56FE/\u4EA4\u53C9\u8868")," \u9891\u7E41\u5207\u6362\u67E5\u770B\u3002"),n.a.createElement("li",null,"\u524D\u7AEF\u5C0F\u767D\uFF0C\u53EA\u5173\u5FC3\u624B\u91CC\u7684\u6570\u636E\uFF0C\u4E0D\u60F3\u770B\u957F\u7BC7\u5927\u8BBA\u4E86\u89E3\u90A3\u4E9B\u56FE\u8868\u5E93\u8BE5\u600E\u4E48\u4F7F\u7528\uFF0C\u53EA\u60F3\u642D\u4E2A\u56FE\u8868\u770B\u3002"),n.a.createElement("li",null,"\u63D0\u4F9B\u6298\u7EBF\u56FE\u3001\u67F1\u72B6\u56FE\u3001\u4EA4\u53C9\u8868\u4E09\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u56FE\u8868\u7ED8\u5236\uFF1A",n.a.createElement("ul",null,n.a.createElement("li",null,"\u6298\u7EBF\u56FE\uFF1A\u5E38\u7528\u6765\u89C2\u5BDF\u8D44\u6599\u5728\u4E00\u6BB5\u7EF4\u5EA6\u4E4B\u5185\u7684\u53D8\u5316\uFF0C\u5982\u679C X \u8F74\u4E3A\u65F6\u95F4\uFF0C\u8FD9\u79CD\u6298\u7EBF\u56FE\u53C8\u79F0\u4E3A\u8D8B\u52BF\u56FE\u3002"),n.a.createElement("li",null,"\u67F1\u72B6\u56FE\uFF1A\u63CF\u8FF0\u7684\u662F\u5206\u7C7B\u6570\u636E\uFF0C\u5E38\u7528\u6765\u56DE\u7B54\u7684\u662F\u6BCF\u4E00\u4E2A\u5206\u7C7B\u4E2D\u300C\u6709\u591A\u5C11\uFF1F\u300D\u8FD9\u4E2A\u95EE\u9898\u3002"),n.a.createElement("li",null,"\u4EA4\u53C9\u8868\uFF1A\u662F\u4E00\u79CD\u77E9\u9635\u5F62\u5F0F\u7684\u8868\u683C\uFF0C\u62E5\u6709\u6700\u5F3A\u5927\u7684\u6570\u636E\u5206\u6790\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C55\u793A\u65E0\u9650\u6307\u6807\u548C\u65E0\u9650\u7EF4\u5EA6\u95F4\u7684\u5173\u7CFB\u3002")))),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(g.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"chart-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(J.a,{code:"$ npm install chart-render --save",lang:"bash"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(g.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(fe.default,Be.default["chart-render-demo"].previewerProps,n.a.createElement(Ae,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(g.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"\u901A\u7528\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#\u901A\u7528\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u901A\u7528\u53C2\u6570"),n.a.createElement("p",null,"\u6240\u6709\u7684\u56FE\u8868\u7EC4\u4EF6\u90FD\u6709\u4EE5\u4E0B 4 \u4E2A\u5165\u53C2\uFF08",n.a.createElement("strong",null,n.a.createElement("code",null,"data")," \u548C ",n.a.createElement("code",null,"meta")," \u662F\u5FC5\u4F20\u7684\u53C2\u6570"),"\uFF0C\u8BF7\u52A1\u5FC5\u6CE8\u610F\uFF09\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE81")),n.a.createElement("td",null,n.a.createElement("code",null,"IDataItem[]")),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"meta"),n.a.createElement("td",null,"\u5143\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE82")),n.a.createElement("td",null,n.a.createElement("code",null,"IMetaItem[]")),n.a.createElement("td",null,"\u662F")))),n.a.createElement("h5",{id:"\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(g.AnchorLink,{to:"#\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 1\uFF1A\u901A\u7528\u53C2\u6570 - data \u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u662F\u666E\u901A\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(J.a,{code:`[
  { date: '20200101', pv: 100, uv: 50 },
  { date: '20200102', pv: 120, uv: 60 },
  { date: '20200103', pv: 140, uv: 70 },
  { date: '20200104', pv: 160, uv: 80 },
];`,lang:"js"}),n.a.createElement("h5",{id:"\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(g.AnchorLink,{to:"#\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 2\uFF1A\u901A\u7528\u53C2\u6570 - meta \u5143\u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u7528\u6765\u63CF\u8FF0 data \u7684\u5404\u4E2A\u5B57\u6BB5\u7684\u4E1C\u897F\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(J.a,{code:`/**
 * id: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u540D
 * name: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u7684\u63CF\u8FF0
 * isDim: \u662F\u5426\u662F\u7EF4\u5EA6\uFF0C\`true\`-\u7EF4\u5EA6\uFF0C\`false\`-\u6307\u6807
 * isRate: \u662F\u5426\u662F\u767E\u5206\u6570\uFF0C\u4EC5\u9650\u6307\u6807\u4F7F\u7528\uFF0C\u542F\u7528\u540E\uFF0C\u6570\u503C \`0.5\` \u4F1A\u4EE5 \`50%\` \u6765\u8F93\u51FA\u6E32\u67D3
 */
[
  { id: 'date', name: '\u65E5\u671F', isDim: true, isRate: false },
  { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false, isRate: false },
  { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false, isRate: false },
];`,lang:"js"}),n.a.createElement("h3",{id:"line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Line \u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"withArea"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u9762\u79EF\u56FE\u5C55\u793A",n.a.createElement("br",null)," - \u6CE8\u610F\u9762\u79EF\u56FE\u9ED8\u8BA4\u5806\u53E0\u5C55\u793A\uFF0C\u5982\u4E0D\u9700\u8981\u53EF\u4EE5\u4F20\u5165 ",n.a.createElement("code",null,"isStack=","{","false","}")," \u8986\u76D6",n.a.createElement("br",null)," - \u5F00\u542F\u9762\u79EF\u56FE\u540E\u65B9\u53EF\u4F7F\u7528 ",n.a.createElement("code",null,"areaStyle")," ",n.a.createElement("code",null,"startOnZero")," ",n.a.createElement("code",null,"isPercent")," \u5C5E\u6027"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u70B9\u3001\u7EBF\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/line?type=api"},"\u6298\u7EBF\u56FE\u53C2\u6570\u8868")," ",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/area?type=api"},"\u9762\u79EF\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column \u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"inverted"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u6761\u5F62\u56FE\u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u989C\u8272\u3001\u67F1\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/column?type=api"},"\u67F1\u72B6\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"PivotTable \u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"showSubtotal"),n.a.createElement("td",null,"\u662F\u5426\u5C55\u793A\u603B\u8BA1\u5C0F\u8BA1"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"subtotalText"),n.a.createElement("td",null,"\u603B\u8BA1\u5C0F\u8BA1\u7684\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"[string, string]")),n.a.createElement("td",null,n.a.createElement("code",null,"['\u603B\u8BA1', '\u5C0F\u8BA1']")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"indicatorSide"),n.a.createElement("td",null,"\u6307\u6807\u7684\u5C55\u793A\u4F4D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"'left' | 'top'")),n.a.createElement("td",null,n.a.createElement("code",null,"'top'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"\u8868\u683C\u5C3A\u5BF8"),n.a.createElement("td",null,n.a.createElement("code",null,"'small' | 'middle' | 'large'")),n.a.createElement("td",null,n.a.createElement("code",null,"'middle'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftDimensionLength"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u653E\u591A\u5C11\u4E2A\uFF0C\u8D85\u51FA\u7684\u7EF4\u5EA6\u4F1A\u653E\u5230\u8868\u683C\u9876\u90E8"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftExpandable"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"topExpandable"),n.a.createElement("td",null,"\u9876\u90E8\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"cellRender"),n.a.createElement("td",null,"\u5355\u5143\u683C\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u53EF\u89C1",n.a.createElement(g.AnchorLink,{to:"./demo/pivot-table#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%95%E5%85%83%E6%A0%BC%E6%B8%B2%E6%9F%93"},"\u4EA4\u53C9\u8868\u6848\u4F8B - \u9AD8\u7EA7\u6848\u4F8B - \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),n.a.createElement("td",null,n.a.createElement("code",null,"(value: any, dimRecord: IDataItem, indId: string ) => React.ReactNode")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426"))))))))},"80pN":function(Tn,yn,e){"use strict";(function(V){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),g=e("q1tI"),L=e("i8i4"),fe=e("QCnb");function J(h){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+h,M=1;M<arguments.length;M++)B+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+h+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Be=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Be.hasOwnProperty("ReactCurrentDispatcher")||(Be.ReactCurrentDispatcher={current:null}),Be.hasOwnProperty("ReactCurrentBatchConfig")||(Be.ReactCurrentBatchConfig={suspense:null});function Ae(h){var B=h,M=h;if(h.alternate)for(;B.return;)B=B.return;else{h=B;do B=h,(B.effectTag&1026)!=0&&(M=B.return),h=B.return;while(h)}return B.tag===3?M:null}function ce(h){if(Ae(h)!==h)throw Error(J(188))}function Un(h){var B=h.alternate;if(!B){if(B=Ae(h),B===null)throw Error(J(188));return B!==h?null:h}for(var M=h,he=B;;){var te=M.return;if(te===null)break;var je=te.alternate;if(je===null){if(he=te.return,he!==null){M=he;continue}break}if(te.child===je.child){for(je=te.child;je;){if(je===M)return ce(te),h;if(je===he)return ce(te),B;je=je.sibling}throw Error(J(188))}if(M.return!==he.return)M=te,he=je;else{for(var Ve=!1,ze=te.child;ze;){if(ze===M){Ve=!0,M=te,he=je;break}if(ze===he){Ve=!0,he=te,M=je;break}ze=ze.sibling}if(!Ve){for(ze=je.child;ze;){if(ze===M){Ve=!0,M=je,he=te;break}if(ze===he){Ve=!0,he=je,M=te;break}ze=ze.sibling}if(!Ve)throw Error(J(189))}}if(M.alternate!==he)throw Error(J(190))}if(M.tag!==3)throw Error(J(188));return M.stateNode.current===M?h:B}function Ie(){return!0}function Bn(){return!1}function Kn(h,B,M,he){this.dispatchConfig=h,this._targetInst=B,this.nativeEvent=M,h=this.constructor.Interface;for(var te in h)h.hasOwnProperty(te)&&((B=h[te])?this[te]=B(M):te==="target"?this.target=he:this[te]=M[te]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ie:Bn,this.isPropagationStopped=Bn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var h=this.nativeEvent;h&&(h.preventDefault?h.preventDefault():typeof h.returnValue!="unknown"&&(h.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var h=this.nativeEvent;h&&(h.stopPropagation?h.stopPropagation():typeof h.cancelBubble!="unknown"&&(h.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Bn,destructor:function(){var h=this.constructor.Interface,B;for(B in h)this[B]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(h){return h.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(h){function B(){}function M(){return he.apply(this,arguments)}var he=this;B.prototype=he.prototype;var te=new B;return n(te,M.prototype),M.prototype=te,M.prototype.constructor=M,M.Interface=n({},he.Interface,h),M.extend=he.extend,Xe(M),M},Xe(Kn);function Sn(h,B,M,he){if(this.eventPool.length){var te=this.eventPool.pop();return this.call(te,h,B,M,he),te}return new this(h,B,M,he)}function pn(h){if(!(h instanceof this))throw Error(J(279));h.destructor(),10>this.eventPool.length&&this.eventPool.push(h)}function Xe(h){h.eventPool=[],h.getPooled=Sn,h.release=pn}var xn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(h,B){var M={};return M[h.toLowerCase()]=B.toLowerCase(),M["Webkit"+h]="webkit"+B,M["Moz"+h]="moz"+B,M}var Rn={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},we={},qn={};xn&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function wn(h){if(we[h])return we[h];if(!Rn[h])return h;var B=Rn[h],M;for(M in B)if(B.hasOwnProperty(M)&&M in qn)return we[h]=B[M];return h}var _n=wn("animationend"),rt=wn("animationiteration"),st=wn("animationstart"),N=wn("transitionend"),P=null;function I(h){if(P===null)try{var B=("require"+Math.random()).slice(0,7);P=(V&&V[B])("timers").setImmediate}catch(M){P=function(he){var te=new MessageChannel;te.port1.onmessage=he,te.port2.postMessage(void 0)}}return P(h)}var d=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,l=d[11],f=d[12],y=L.unstable_batchedUpdates,C=Be.IsSomeRendererActing,r=typeof fe.unstable_flushAllWithoutAsserting=="function",o=fe.unstable_flushAllWithoutAsserting||function(){for(var h=!1;l();)h=!0;return h};function i(h){try{o(),I(function(){o()?i(h):h()})}catch(B){h(B)}}var T=0,K=!1,S=L.findDOMNode,u=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,F=u[0],m=u[4],t=u[5],v=u[6],c=u[7],D=u[8],A=u[9],W=u[10];function Q(){}function G(h,B){if(!h)return[];if(h=Un(h),!h)return[];for(var M=h,he=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var te=M.stateNode;B(te)&&he.push(te)}if(M.child)M.child.return=M,M=M.child;else{if(M===h)return he;for(;!M.sibling;){if(!M.return||M.return===h)return he;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function Y(h,B){if(h&&!h._reactInternalFiber){var M=""+h;throw h=Array.isArray(h)?"an array":h&&h.nodeType===1&&h.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":M,Error(J(286,B,h))}}var Se={renderIntoDocument:function(h){var B=document.createElement("div");return L.render(h,B)},isElement:function(h){return g.isValidElement(h)},isElementOfType:function(h,B){return g.isValidElement(h)&&h.type===B},isDOMComponent:function(h){return!(!h||h.nodeType!==1||!h.tagName)},isDOMComponentElement:function(h){return!!(h&&g.isValidElement(h)&&h.tagName)},isCompositeComponent:function(h){return Se.isDOMComponent(h)?!1:h!=null&&typeof h.render=="function"&&typeof h.setState=="function"},isCompositeComponentWithType:function(h,B){return Se.isCompositeComponent(h)?h._reactInternalFiber.type===B:!1},findAllInRenderedTree:function(h,B){return Y(h,"findAllInRenderedTree"),h?G(h._reactInternalFiber,B):[]},scryRenderedDOMComponentsWithClass:function(h,B){return Y(h,"scryRenderedDOMComponentsWithClass"),Se.findAllInRenderedTree(h,function(M){if(Se.isDOMComponent(M)){var he=M.className;typeof he!="string"&&(he=M.getAttribute("class")||"");var te=he.split(/\s+/);if(!Array.isArray(B)){if(B===void 0)throw Error(J(11));B=B.split(/\s+/)}return B.every(function(je){return te.indexOf(je)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(h,B){if(Y(h,"findRenderedDOMComponentWithClass"),h=Se.scryRenderedDOMComponentsWithClass(h,B),h.length!==1)throw Error("Did not find exactly one match (found: "+h.length+") for class:"+B);return h[0]},scryRenderedDOMComponentsWithTag:function(h,B){return Y(h,"scryRenderedDOMComponentsWithTag"),Se.findAllInRenderedTree(h,function(M){return Se.isDOMComponent(M)&&M.tagName.toUpperCase()===B.toUpperCase()})},findRenderedDOMComponentWithTag:function(h,B){if(Y(h,"findRenderedDOMComponentWithTag"),h=Se.scryRenderedDOMComponentsWithTag(h,B),h.length!==1)throw Error("Did not find exactly one match (found: "+h.length+") for tag:"+B);return h[0]},scryRenderedComponentsWithType:function(h,B){return Y(h,"scryRenderedComponentsWithType"),Se.findAllInRenderedTree(h,function(M){return Se.isCompositeComponentWithType(M,B)})},findRenderedComponentWithType:function(h,B){if(Y(h,"findRenderedComponentWithType"),h=Se.scryRenderedComponentsWithType(h,B),h.length!==1)throw Error("Did not find exactly one match (found: "+h.length+") for componentType:"+B);return h[0]},mockComponent:function(h,B){return B=B||h.mockTagName||"div",h.prototype.render.mockImplementation(function(){return g.createElement(B,null,this.props.children)}),this},nativeTouchData:function(h,B){return{touches:[{pageX:h,pageY:B}]}},Simulate:null,SimulateNative:{},act:function(h){function B(){T--,C.current=M,f.current=he}K===!1&&(K=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var M=C.current,he=f.current;C.current=!0,f.current=!0;try{var te=y(h)}catch(je){throw B(),je}if(te!==null&&typeof te=="object"&&typeof te.then=="function")return{then:function(je,Ve){te.then(function(){1<T||r===!0&&M===!0?(B(),je()):i(function(ze){B(),ze?Ve(ze):je()})},function(ze){B(),Ve(ze)})}};try{T!==1||r!==!1&&M!==!1||o(),B()}catch(je){throw B(),je}return{then:function(je){je()}}}};function qe(h){return function(B,M){if(g.isValidElement(B))throw Error(J(228));if(Se.isCompositeComponent(B))throw Error(J(229));var he=m[h],te=new Q;te.target=B,te.type=h.toLowerCase();var je=F(B),Ve=new Kn(he,je,te,B);Ve.persist(),n(Ve,M),he.phasedRegistrationNames?t(Ve):v(Ve),L.unstable_batchedUpdates(function(){c(B),W(Ve)}),D()}}Se.Simulate={};for(var cn in m)Se.Simulate[cn]=qe(cn);function hn(h,B){return function(M,he){var te=new Q(h);n(te,he),Se.isDOMComponent(M)?(M=S(M),te.target=M,A(B,1,document,te)):M.tagName&&(te.target=M,A(B,1,document,te))}}[["abort","abort"],[_n,"animationEnd"],[rt,"animationIteration"],[st,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[N,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(h){var B=h[1];Se.SimulateNative[B]=hn(B,h[0])}),V.exports=Se.default||Se}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,yn,e){"use strict";e.r(yn);var V=e("9og8"),n=e("WmNS"),g=e.n(n),L=e("LtsZ"),fe=`import React, { useRef } from 'react';
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

export default Demo;`,J=`import { get, set, cloneDeep } from 'lodash-es';

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
};`,Be=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Ae=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ce=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Un=`export const basic = {
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
};`,Ie=`import React, { Component } from 'react';
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

export default Root;`,Bn=`import React, { useState, useEffect } from 'react';
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

export default SearchInput;`,pn=`import React from 'react';
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

export default Demo;`,Xe=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,xn=`.markdown p {
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

export default Demo;`,wn=`.fr-generator-playground {
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

export default Demo;`,st=yn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o;return g.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return r=function(S,u){if(!u&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var F=C(u);if(F&&F.has(S))return F.get(S);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in S)if(v!=="default"&&Object.prototype.hasOwnProperty.call(S,v)){var c=t?Object.getOwnPropertyDescriptor(S,v):null;c&&(c.get||c.set)?Object.defineProperty(m,v,c):m[v]=S[v]}return m.default=S,F&&F.set(S,m),m},C=function(S){if(typeof WeakMap!="function")return null;var u=new WeakMap,F=new WeakMap;return(C=function(t){return t?F:u})(S)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,l=(0,T.t0)(T.t1),T.t2=r,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,f=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return y=T.sent,o=function(){var S=(0,f.useState)("Line"),u=(0,l.default)(S,2),F=u[0],m=u[1],t={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[F];return f.default.createElement("div",null,f.default.createElement("div",{style:{marginBottom:10}},f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),f.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),f.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",o);case 18:case"end":return T.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 8:return f=r.sent,y=function(){return l.default.createElement(f.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,K,S){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(K).length]}},T),l.default.createElement("p",null,JSON.stringify(K)),l.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o;return g.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return r=function(S,u){if(!u&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var F=C(u);if(F&&F.has(S))return F.get(S);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in S)if(v!=="default"&&Object.prototype.hasOwnProperty.call(S,v)){var c=t?Object.getOwnPropertyDescriptor(S,v):null;c&&(c.get||c.set)?Object.defineProperty(m,v,c):m[v]=S[v]}return m.default=S,F&&F.set(S,m),m},C=function(S){if(typeof WeakMap!="function")return null;var u=new WeakMap,F=new WeakMap;return(C=function(t){return t?F:u})(S)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,l=(0,T.t0)(T.t1),T.t2=r,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,f=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(9)]).then(e.bind(null,"36SN"));case 15:return y=T.sent,o=function(){var S=(0,f.useState)(!1),u=(0,l.default)(S,2),F=u[0],m=u[1];return f.default.createElement(f.default.Fragment,null,f.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",f.default.createElement("input",{type:"checkbox",value:F,onChange:function(){return m(!F)}})),f.default.createElement(y.PivotTable,{leftExpandable:F,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",o);case 18:case"end":return T.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K,S,u,F,m;return g.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return S=function(D,A){if(!A&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var W=K(A);if(W&&W.has(D))return W.get(D);var Q={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Y in D)if(Y!=="default"&&Object.prototype.hasOwnProperty.call(D,Y)){var Se=G?Object.getOwnPropertyDescriptor(D,Y):null;Se&&(Se.get||Se.set)?Object.defineProperty(Q,Y,Se):Q[Y]=D[Y]}return Q.default=D,W&&W.set(D,Q),Q},K=function(D){if(typeof WeakMap!="function")return null;var A=new WeakMap,W=new WeakMap;return(K=function(G){return G?W:A})(D)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,l=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(82).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,f=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(83).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,y=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(73).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,C=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(71).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,r=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,o=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=v.sent,v.t12=S,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,T=(0,v.t12)(v.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(c){(0,C.default)(A,c);var D=(0,r.default)(A);function A(){return(0,f.default)(this,A),D.apply(this,arguments)}return(0,y.default)(A,[{key:"render",value:function(){var Q=this.props.form;return o.default.createElement("div",null,o.default.createElement(T.default,{form:Q,schema:u}),o.default.createElement(l.default,{type:"primary",onClick:Q.submit},"\u63D0\u4EA4"))}}]),A}(o.default.Component),m=(0,T.connectForm)(F),v.abrupt("return",m);case 47:case"end":return v.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=r(t);if(v&&v.has(m))return v.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in m)if(A!=="default"&&Object.prototype.hasOwnProperty.call(m,A)){var W=D?Object.getOwnPropertyDescriptor(m,A):null;W&&(W.get||W.set)?Object.defineProperty(c,A,W):c[A]=m[A]}return c.default=m,v&&v.set(m,c),c},r=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(D){return D?v:t})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,f=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var m=(0,C.useForm)();return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:i}),f.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=r(t);if(v&&v.has(m))return v.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in m)if(A!=="default"&&Object.prototype.hasOwnProperty.call(m,A)){var W=D?Object.getOwnPropertyDescriptor(m,A):null;W&&(W.get||W.set)?Object.defineProperty(c,A,W):c[A]=m[A]}return c.default=m,v&&v.set(m,c),c},r=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(D){return D?v:t})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,f=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var m=(0,C.useForm)(),t=function(c,D){D.length>0?alert("errors:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(c,null,2))};return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:i,onFinish:t}),f.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i;return g.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return o=function(){var u=(0,f.useForm)(),F=function(t,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(t))};return l.default.createElement("div",null,l.default.createElement(f.default,{form:u,schema:r,onFinish:F}),l.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},C=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=y(F);if(m&&m.has(u))return m.get(u);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var D=v?Object.getOwnPropertyDescriptor(u,c):null;D&&(D.get||D.set)?Object.defineProperty(t,c,D):t[c]=u[c]}return t.default=u,m&&m.set(u,t),t},y=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,m=new WeakMap;return(y=function(v){return v?m:F})(u)},d=e("K+nK"),K.t0=d,K.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=C,K.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return K.t3=K.sent,f=(0,K.t2)(K.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=o,K.abrupt("return",i);case 17:case"end":return K.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K,S,u,F;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var A=i(D);if(A&&A.has(c))return A.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=Q?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,A&&A.set(c,W),W},i=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,A=new WeakMap;return(i=function(Q){return Q?A:D})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=T,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.next=32,Promise.all([e.e(67),e.e(78)]).then(e.bind(null,"7t+U"));case 32:return o=t.sent,K=y.default.TextArea,S={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},u=function(){var c=(0,C.useState)(JSON.stringify(S)),D=(0,f.default)(c,2),A=D[0],W=D[1],Q=(0,C.useState)({}),G=(0,f.default)(Q,2),Y=G[0],Se=G[1],qe=function(){try{var B=(0,o.updateSchemaToNewVersion)(JSON.parse(A));Se(B)}catch(M){console.log(M)}},cn=function(B){W(B.target.value)},hn=function(){W(JSON.stringify(JSON.parse(A),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(K,{style:{minHeight:400,marginTop:12,marginBottom:12},value:A,onChange:cn}),C.default.createElement(l.default,{style:{marginRight:12},onClick:hn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(l.default,{type:"primary",onClick:qe},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(K,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Y,null,2)}))},F=u,t.abrupt("return",F);case 38:case"end":return t.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T;return g.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return i=function(){var F=(0,f.useState)({}),m=(0,l.default)(F,2),t=m[0],v=m[1],c=(0,f.useState)([]),D=(0,l.default)(c,2),A=D[0],W=D[1],Q=(0,f.useState)(!1),G=(0,l.default)(Q,2),Y=G[0],Se=G[1],qe=(0,y.useForm)({formData:t,onChange:v,onValidate:W,showValidate:Y});(0,f.useEffect)(function(){qe.init()},[]);var cn=function(){Se(!0),A.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(A))):alert(JSON.stringify(t))};return f.default.createElement("div",null,f.default.createElement(y.default,{form:qe,schema:o}),f.default.createElement("button",{onClick:cn},"\u63D0\u4EA4"))},r=function(F,m){if(!m&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var t=C(m);if(t&&t.has(F))return t.get(F);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in F)if(D!=="default"&&Object.prototype.hasOwnProperty.call(F,D)){var A=c?Object.getOwnPropertyDescriptor(F,D):null;A&&(A.get||A.set)?Object.defineProperty(v,D,A):v[D]=F[D]}return v.default=F,t&&t.set(F,v),v},C=function(F){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(C=function(c){return c?t:m})(F)},d=e("K+nK"),S.t0=d,S.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return S.t1=S.sent,l=(0,S.t0)(S.t1),S.t2=r,S.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return S.t3=S.sent,f=(0,S.t2)(S.t3),S.t4=r,S.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 17:return S.t5=S.sent,y=(0,S.t4)(S.t5),o={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},T=i,S.abrupt("return",T);case 22:case"end":return S.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),y=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(f.default,{schema:y("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(f.default,{schema:y("column")}))},o.abrupt("return",C);case 14:case"end":return o.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),y={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return l.default.createElement(f.default,{schema:y})},o.abrupt("return",C);case 14:case"end":return o.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return l.default.createElement(f.default,{readOnly:!0,schema:y})},o.abrupt("return",C);case 14:case"end":return o.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return l.default.createElement(f.default,{labelWidth:"200",schema:y})},o.abrupt("return",C);case 14:case"end":return o.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K,S,u,F;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return S=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var A=K(D);if(A&&A.has(c))return A.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=Q?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,A&&A.set(c,W),W},K=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,A=new WeakMap;return(K=function(Q){return Q?A:D})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=S,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,r=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return o=t.sent,t.t10=S,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,i=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return T=t.sent,u=function(){var c=(0,i.useForm)(),D=(0,r.useState)({}),A=(0,C.default)(D,2),W=A[0],Q=A[1],G=function(){(0,T.fakeApi)("xxx/getForm").then(function(qe){c.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,T.delay)(1e3).then(function(Se){Q({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Y=function(qe,cn){cn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(cn.map(function(hn){return hn.name}))):(0,T.fakeApi)("xxx/submit",qe).then(function(hn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(i.default,{form:c,schema:W,onFinish:Y}),r.default.createElement(l.default,null,r.default.createElement(f.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=u,t.abrupt("return",F);case 48:case"end":return t.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K,S,u,F;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return K=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var A=T(D);if(A&&A.has(c))return A.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=Q?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,A&&A.set(c,W),W},T=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,A=new WeakMap;return(T=function(Q){return Q?A:D})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=K,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return i=t.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var c=(0,o.useForm)(),D=function(Q,G){G.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(Y){return Y.name}))):(0,i.fakeApi)("xxx/submit",Q).then(function(Y){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},A=function(Q){var G=Q.data,Y=Q.errors,Se=Q.schema,qe=(0,f.default)(Q,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(o.default,{form:c,schema:S,beforeFinish:A,onFinish:D}),C.default.createElement(l.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},F=u,t.abrupt("return",F);case 42:case"end":return t.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K,S,u,F;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return K=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var A=T(D);if(A&&A.has(c))return A.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=Q?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,A&&A.set(c,W),W},T=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,A=new WeakMap;return(T=function(Q){return Q?A:D})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=t.sent,t.t8=K,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return i=t.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var c=(0,o.useForm)(),D=function(Q,G){G.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(Y){return Y.name}))):(0,i.fakeApi)("xxx/submit",Q).then(function(Y){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},A=function(){(0,i.fakeApi)("xxx/getForm").then(function(Q){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(o.default,{form:c,schema:S,onFinish:D}),C.default.createElement(l.default,null,C.default.createElement(f.default,{onClick:A},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(f.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=u,t.abrupt("return",F);case 44:case"end":return t.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K,S,u;return g.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return T=function(v,c){if(!c&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var D=i(c);if(D&&D.has(v))return D.get(v);var A={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in v)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(v,Q)){var G=W?Object.getOwnPropertyDescriptor(v,Q):null;G&&(G.get||G.set)?Object.defineProperty(A,Q,G):A[Q]=v[Q]}return A.default=v,D&&D.set(v,A),A},i=function(v){if(typeof WeakMap!="function")return null;var c=new WeakMap,D=new WeakMap;return(i=function(W){return W?D:c})(v)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,l=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,f=(0,m.t2)(m.t3),m.t4=T,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,y=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=m.sent,m.t6=T,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,r=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return o=m.sent,K={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var v=(0,r.useForm)(),c=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},D=function(W,Q){Q.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Q.map(function(G){return G.name}))):f.default.info(JSON.stringify(W))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(r.default,{form:v,schema:K,onMount:c,onFinish:D}),y.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=S,m.abrupt("return",u);case 37:case"end":return m.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i;return g.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=y(F);if(m&&m.has(u))return m.get(u);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var D=v?Object.getOwnPropertyDescriptor(u,c):null;D&&(D.get||D.set)?Object.defineProperty(t,c,D):t[c]=u[c]}return t.default=u,m&&m.set(u,t),t},y=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,m=new WeakMap;return(y=function(v){return v?m:F})(u)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=C,K.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return K.t3=K.sent,f=(0,K.t2)(K.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var u=(0,f.useForm)();return l.default.createElement(f.default,{form:u,schema:r})},i=o,K.abrupt("return",i);case 17:case"end":return K.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),o.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return y=o.sent,C=function(){return l.default.createElement(f.default,{schema:y.expression})},o.abrupt("return",C);case 16:case"end":return o.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Un}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T;return g.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return C=function(F,m){if(!m&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var t=y(m);if(t&&t.has(F))return t.get(F);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in F)if(D!=="default"&&Object.prototype.hasOwnProperty.call(F,D)){var A=c?Object.getOwnPropertyDescriptor(F,D):null;A&&(A.get||A.set)?Object.defineProperty(v,D,A):v[D]=F[D]}return v.default=F,t&&t.set(F,v),v},y=function(F){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(y=function(c){return c?t:m})(F)},S.t0=C,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,d=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return l=S.sent,S.t2=C,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,f=(0,S.t2)(S.t3),r=function(F){return new Promise(function(m){return setTimeout(m,F)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var F=(0,f.useForm)(),m=function(){F.setValues({input1:"hello world"}),r(3e3).then(function(v){F.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(f.default,{form:F,schema:o,onMount:m})},T=i,S.abrupt("return",T);case 20:case"end":return S.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),window.hello=function(T){var K=T.value;console.log(K)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(f.default,{schema:y})},r=C,i.abrupt("return",r);case 16:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i;return g.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=y(F);if(m&&m.has(u))return m.get(u);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var D=v?Object.getOwnPropertyDescriptor(u,c):null;D&&(D.get||D.set)?Object.defineProperty(t,c,D):t[c]=u[c]}return t.default=u,m&&m.set(u,t),t},y=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,m=new WeakMap;return(y=function(v){return v?m:F})(u)},K.t0=C,K.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return K.t1=K.sent,d=(0,K.t0)(K.t1),K.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return l=K.sent,K.t2=C,K.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return K.t3=K.sent,f=(0,K.t2)(K.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var u=(0,f.useForm)(),F={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){u.setValueByPath("input2",t)}};return d.default.createElement(f.default,{form:u,schema:r,watch:F})},i=o,K.abrupt("return",i);case 19:case"end":return K.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=r(t);if(v&&v.has(m))return v.get(m);var c={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in m)if(A!=="default"&&Object.prototype.hasOwnProperty.call(m,A)){var W=D?Object.getOwnPropertyDescriptor(m,A):null;W&&(W.get||W.set)?Object.defineProperty(c,A,W):c[A]=m[A]}return c.default=m,v&&v.set(m,c),c},r=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(D){return D?v:t})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=o,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,f=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var m=(0,C.useForm)(),t=function(D,A){A.length>0?alert("errorFields:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(D,null,2))},v={input1:function(D){D.length>2?m.setSchemaByPath("obj1.select",function(A){var W=A.enumNames;return{enumNames:W.map(function(Q){return Q+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return f.default.createElement("div",null,f.default.createElement(C.default,{form:m,schema:i,onFinish:t,watch:v}),f.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),f.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T,K,S,u,F;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T=function(c,D){if(!D&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var A=i(D);if(A&&A.has(c))return A.get(c);var W={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in c)if(G!=="default"&&Object.prototype.hasOwnProperty.call(c,G)){var Y=Q?Object.getOwnPropertyDescriptor(c,G):null;Y&&(Y.get||Y.set)?Object.defineProperty(W,G,Y):W[G]=c[G]}return W.default=c,A&&A.set(c,W),W},i=function(c){if(typeof WeakMap!="function")return null;var D=new WeakMap,A=new WeakMap;return(i=function(Q){return Q?A:D})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,f=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(84).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=T,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=T,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,o=(0,t.t8)(t.t9),K={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(c){return console.log("widget props:",c),C.default.createElement(f.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},c))},u=function(){var c=(0,o.useForm)(),D=function(){};return C.default.createElement("div",null,C.default.createElement(o.default,{readOnly:!0,form:c,schema:K,widgets:{site:S},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),C.default.createElement(l.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},F=u,t.abrupt("return",F);case 40:case"end":return t.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),o.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return y=o.sent,C=function(){return l.default.createElement(f.default,{schema:y.basic})},o.abrupt("return",C);case 16:case"end":return o.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Un}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,f=(0,o.t2)(o.t3),o.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return y=o.sent,C=function(){return l.default.createElement(f.default,{schema:y.titleTrick})},o.abrupt("return",C);case 16:case"end":return o.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Un}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Ie},"main.js":{import:"./main",content:Bn},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Sn},"monaco/index.js":{import:"./monaco",content:pn},"suggestionsMap.js":{import:"./suggestionsMap",content:Xe},"index.css":{import:"./index.css",content:xn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.5.8"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r,o,i,T;return g.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return d=e("K+nK"),S.t0=d,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,l=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(65)]).then(e.bind(null,"P2DI"));case 8:for(f=S.sent,y=[],C=0;C<6;C++)y.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(F,m){return l.default.createElement("a",{onClick:function(){return alert(F.title)}},"\u7F16\u8F91")}}],i=function(){var F=function(){return{rows:y,total:y.length}};return l.default.createElement(f.TableProvider,null,l.default.createElement(f.Search,{schema:r,api:F}),l.default.createElement(f.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},T=i,S.abrupt("return",T);case 16:case"end":return S.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){var d,l,f,y,C,r;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(64)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,f=(0,i.t2)(i.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(f.default,{defaultValue:y}))},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"SOdT"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var N=Object(V.a)(g.a.mark(function I(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:rt},"index.less":{import:"./index.less",content:wn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,yn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,yn,e){"use strict";Tn.exports=e("80pN")}}]);
