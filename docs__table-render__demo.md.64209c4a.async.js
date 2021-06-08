(window.webpackJsonp=window.webpackJsonp||[]).push([[47,10],{"0zqC":function(Kn,hn,e){"use strict";e.r(hn);var G=e("tJVT"),r=e("q1tI"),C=e.n(r),W=e("wx14"),ce=e("rePB"),L=e("ODXe"),on=e("U8pU"),De=e("Ff2n"),he=e("VTBJ"),at=e("TSYQ"),Te=e.n(at),Mn=e("Zm9Q"),An=e("5Z9U"),Rn=e("6cGi"),fn=e("KQm4"),Xe=e("wgJM"),Wn=e("t23M");function wn(n){var i=Object(r.useRef)(),c=Object(r.useRef)(!1);function b(){for(var O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];c.current||(Xe.a.cancel(i.current),i.current=Object(Xe.a)(function(){n.apply(void 0,g)}))}return Object(r.useEffect)(function(){return function(){c.current=!0,Xe.a.cancel(i.current)}},[]),b}function Sn(n){var i=Object(r.useRef)([]),c=Object(r.useState)({}),b=Object(L.a)(c,2),O=b[1],g=Object(r.useRef)(typeof n=="function"?n():n),S=wn(function(){var B=g.current;i.current.forEach(function($){B=$(B)}),i.current=[],g.current=B,O({})});function j(B){i.current.push(B),S()}return[g.current,j]}var Be=e("4IlW");function zn(n,i){var c,b=n.prefixCls,O=n.id,g=n.active,S=n.rtl,j=n.tab,B=j.key,$=j.tab,V=j.disabled,x=j.closeIcon,J=n.tabBarGutter,se=n.tabPosition,Q=n.closable,X=n.renderWrapper,le=n.removeAriaLabel,z=n.editable,q=n.onClick,ae=n.onRemove,Y=n.onFocus,oe="".concat(b,"-tab");r.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[S?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=z&&Q!==!1&&!V;function ee(ie){V||q(ie)}function de(ie){ie.preventDefault(),ie.stopPropagation(),z.onEdit("remove",{key:B,event:ie})}var me=r.createElement("div",{key:B,ref:i,className:Te()(oe,(c={},Object(ce.a)(c,"".concat(oe,"-with-remove"),be),Object(ce.a)(c,"".concat(oe,"-active"),g),Object(ce.a)(c,"".concat(oe,"-disabled"),V),c)),style:k,onClick:ee},r.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(B),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(B),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[Be.a.SPACE,Be.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Y},$),be&&r.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},x||z.removeIcon||"\xD7"));return X&&(me=X(me)),me}var Ln=r.forwardRef(zn),qn={width:0,height:0,left:0,top:0};function ct(n,i,c){return Object(r.useMemo)(function(){for(var b,O=new Map,g=i.get((b=n[0])===null||b===void 0?void 0:b.key)||qn,S=g.left+g.width,j=0;j<n.length;j+=1){var B=n[j].key,$=i.get(B);if(!$){var V;$=i.get((V=n[j-1])===null||V===void 0?void 0:V.key)||qn}var x=O.get(B)||Object(he.a)({},$);x.right=S-x.left-x.width,O.set(B,x)}return O},[n.map(function(b){return b.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function I(n,i,c,b,O){var g=O.tabs,S=O.tabPosition,j=O.rtl,B,$,V;["top","bottom"].includes(S)?(B="width",$=j?"right":"left",V=Math.abs(i.left)):(B="height",$="top",V=-i.top);var x=i[B],J=c[B],se=b[B],Q=x;return J+se>x&&(Q=x-se),Object(r.useMemo)(function(){if(!g.length)return[0,0];for(var X=g.length,le=X,z=0;z<X;z+=1){var q=n.get(g[z].key)||D;if(q[$]+q[B]>V+Q){le=z-1;break}}for(var ae=0,Y=X-1;Y>=0;Y-=1){var oe=n.get(g[Y].key)||D;if(oe[$]<V){ae=Y+1;break}}return[ae,le]},[n,V,Q,S,g.map(function(X){return X.key}).join("_"),j])}var P=e("Gytx"),d=e.n(P),o=e("Kwbf");function v(n,i){var c=n.prefixCls,b=n.invalidate,O=n.item,g=n.renderItem,S=n.responsive,j=n.registerSize,B=n.itemKey,$=n.className,V=n.style,x=n.children,J=n.display,se=n.order,Q=n.component,X=Q===void 0?"div":Q,le=Object(De.a)(n,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=S&&!J;function q(be){j(B,be)}r.useEffect(function(){return function(){q(null)}},[]);var ae=g&&O!==void 0?g(O):x,Y;b||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:S?se:void 0,pointerEvents:z?"none":void 0});var oe={};z&&(oe["aria-hidden"]=!0);var k=r.createElement(X,Object(W.a)({className:Te()(!b&&c,$),style:Object(he.a)(Object(he.a)({},Y),V)},oe,le,{ref:i}),ae);return S&&(k=r.createElement(Wn.default,{onResize:function(ee){var de=ee.offsetWidth;q(de)}},k)),k}var y=r.forwardRef(v);y.displayName="Item";var R=y;function t(){var n=Object(r.useState)({}),i=Object(L.a)(n,2),c=i[1],b=Object(r.useRef)([]),O=Object(r.useRef)(!1),g=0,S=0;Object(r.useEffect)(function(){return function(){O.current=!0}},[]);function j(B){var $=g;g+=1,b.current.length<$+1&&(b.current[$]=B);var V=b.current[$];function x(J){b.current[$]=typeof J=="function"?J(b.current[$]):J,Xe.a.cancel(S),S=Object(Xe.a)(function(){O.current||c({})})}return[V,x]}return j}var l=function(i,c){var b=r.useContext(T);if(!b){var O=i.component,g=O===void 0?"div":O,S=Object(De.a)(i,["component"]);return r.createElement(g,Object(W.a)({},S,{ref:c}))}var j=b.className,B=Object(De.a)(b,["className"]),$=i.className,V=Object(De.a)(i,["className"]);return r.createElement(T.Provider,{value:null},r.createElement(R,Object(W.a)({ref:c,className:Te()(j,$)},B,V)))},s=r.forwardRef(l);s.displayName="RawItem";var M=s,T=r.createContext(null),E="responsive",u="invalidate";function K(n){return"+ ".concat(n.length," ...")}function f(n,i){var c=n.prefixCls,b=c===void 0?"rc-overflow":c,O=n.data,g=O===void 0?[]:O,S=n.renderItem,j=n.renderRawItem,B=n.itemKey,$=n.itemWidth,V=$===void 0?10:$,x=n.ssr,J=n.style,se=n.className,Q=n.maxCount,X=n.renderRest,le=n.renderRawRest,z=n.suffix,q=n.component,ae=q===void 0?"div":q,Y=n.itemComponent,oe=n.onVisibleChange,k=Object(De.a)(n,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=t(),ee=x==="full",de=be(null),me=Object(L.a)(de,2),ie=me[0],H=me[1],ue=ie||0,ge=be(new Map),ve=Object(L.a)(ge,2),Se=ve[0],We=ve[1],Oe=be(0),Re=Object(L.a)(Oe,2),we=Re[0],Me=Re[1],Ne=be(0),Ee=Object(L.a)(Ne,2),$e=Ee[0],qe=Ee[1],Ve=be(0),ze=Object(L.a)(Ve,2),Qe=ze[0],Le=ze[1],jn=Object(r.useState)(null),tn=Object(L.a)(jn,2),Ye=tn[0],ln=tn[1],yn=Object(r.useState)(null),bn=Object(L.a)(yn,2),Ke=bn[0],xe=bn[1],_e=r.useMemo(function(){return Ke===null&&ee?Number.MAX_SAFE_INTEGER:Ke||0},[Ke,ie]),Ze=Object(r.useState)(!1),Fn=Object(L.a)(Ze,2),Gn=Fn[0],Bn=Fn[1],rn="".concat(b,"-item"),Pn=Math.max(we,$e),un=g.length&&Q===E,Dn=Q===u,en=un||typeof Q=="number"&&g.length>Q,an=Object(r.useMemo)(function(){var pe=g;return un?ie===null&&ee?pe=g:pe=g.slice(0,Math.min(g.length,ue/V)):typeof Q=="number"&&(pe=g.slice(0,Q)),pe},[g,V,ie,Q,un]),En=Object(r.useMemo)(function(){return un?g.slice(_e+1):g.slice(an.length)},[g,an,un,_e]),cn=Object(r.useCallback)(function(pe,je){var Fe;return typeof B=="function"?B(pe):(Fe=B&&(pe==null?void 0:pe[B]))!==null&&Fe!==void 0?Fe:je},[B]),ke=Object(r.useCallback)(S||function(pe){return pe},[S]);function He(pe,je){xe(pe),je||(Bn(pe<g.length-1),oe==null||oe(pe))}function Jn(pe,je){H(je.clientWidth)}function xn(pe,je){We(function(Fe){var nn=new Map(Fe);return je===null?nn.delete(pe):nn.set(pe,je),nn})}function nt(pe,je){qe(je),Me($e)}function On(pe,je){Le(je)}function vn(pe){return Se.get(cn(an[pe],pe))}r.useLayoutEffect(function(){if(ue&&Pn&&an){var pe=Qe,je=an.length,Fe=je-1;if(!je){He(0),ln(null);return}for(var nn=0;nn<je;nn+=1){var Yn=vn(nn);if(Yn===void 0){He(nn-1,!0);break}if(pe+=Yn,nn===Fe-1&&pe+vn(Fe)<=ue){He(Fe),ln(null);break}else if(pe+Pn>ue){He(nn-1),ln(pe-Yn-Qe+$e);break}else if(nn===Fe){He(Fe),ln(pe-Qe);break}}z&&vn(0)+Qe>ue&&ln(null)}},[ue,Se,$e,Qe,cn,an]);var Hn=Gn&&!!En.length,Cn={};Ye!==null&&un&&(Cn={position:"absolute",left:Ye,top:0});var mn={prefixCls:rn,responsive:un,component:Y,invalidate:Dn},Qn=j?function(pe,je){var Fe=cn(pe,je);return r.createElement(T.Provider,{key:Fe,value:Object(he.a)(Object(he.a)({},mn),{},{order:je,item:pe,itemKey:Fe,registerSize:xn,display:je<=_e})},j(pe,je))}:function(pe,je){var Fe=cn(pe,je);return r.createElement(R,Object(W.a)({},mn,{order:je,key:Fe,item:pe,renderItem:ke,itemKey:Fe,registerSize:xn,display:je<=_e}))},In,Xn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Hn};if(le)le&&(In=r.createElement(T.Provider,{value:Object(he.a)(Object(he.a)({},mn),Xn)},le(En)));else{var dn=X||K;In=r.createElement(R,Object(W.a)({},mn,Xn),typeof dn=="function"?dn(En):dn)}var Nn=r.createElement(ae,Object(W.a)({className:Te()(!Dn&&b,se),style:J,ref:i},k),an.map(Qn),en?In:null,z&&r.createElement(R,Object(W.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Cn}),z));return un&&(Nn=r.createElement(Wn.default,{onResize:Jn},Nn)),Nn}var a=r.forwardRef(f);a.displayName="Overflow",a.Item=M,a.RESPONSIVE=E,a.INVALIDATE=u;var h=a,p=h,A=e("1OyB"),F=e("vuIU"),U=e("Ji7U"),ne=e("LK+K"),re=e("bT9E"),ye=e("YrtM"),Ie=r.createContext(null);function Ae(n,i){var c=Object(he.a)({},n);return Object.keys(i).forEach(function(b){var O=i[b];O!==void 0&&(c[b]=O)}),c}function gn(n){var i=n.children,c=n.locked,b=Object(De.a)(n,["children","locked"]),O=r.useContext(Ie),g=Object(ye.a)(function(){return Ae(O,b)},[O,b],function(S,j){return!c&&(S[0]!==j[0]||!d()(S[1],j[1]))});return r.createElement(Ie.Provider,{value:g},i)}function $n(n,i,c,b){var O=r.useContext(Ie),g=O.activeKey,S=O.onActive,j=O.onInactive,B={active:g===n};return i||(B.onMouseEnter=function($){c==null||c({key:n,domEvent:$}),S(n)},B.onMouseLeave=function($){b==null||b({key:n,domEvent:$}),j(n)}),B}function _n(n){var i=n.item,c=Object(De.a)(n,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(n){var i=n.icon,c=n.props,b=n.children,O;return typeof i=="function"?O=r.createElement(i,Object(he.a)({},c)):O=i,O||b||null}function N(n){var i=r.useContext(Ie),c=i.mode,b=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=n;return b?{paddingRight:g*O}:{paddingLeft:g*O}}var w=[],fe=r.createContext(null);function _(){return r.useContext(fe)}var Pe=r.createContext(w);function Ue(n){var i=r.useContext(Pe);return r.useMemo(function(){return n!==void 0?[].concat(Object(fn.a)(i),[n]):i},[i,n])}var Je=r.createContext(null),zt=r.createContext(null);function Gt(n,i){return n===void 0?null:"".concat(n,"-").concat(i)}function Jt(n){var i=r.useContext(zt);return Gt(i,n)}var br=function(n){Object(U.a)(c,n);var i=Object(ne.a)(c);function c(){return Object(A.a)(this,c),i.apply(this,arguments)}return Object(F.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,S=O.attribute,j=O.elementRef,B=Object(De.a)(O,["title","attribute","elementRef"]),$=Object(re.a)(B,["eventKey"]);return Object(o.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(p.Item,Object(W.a)({},S,{title:typeof g=="string"?g:void 0},$,{ref:j}))}}]),c}(r.Component),Or=function(i){var c,b=i.style,O=i.className,g=i.eventKey,S=i.disabled,j=i.itemIcon,B=i.children,$=i.role,V=i.onMouseEnter,x=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(De.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Jt(g),z=r.useContext(Ie),q=z.prefixCls,ae=z.onItemClick,Y=z.disabled,oe=z.overflowDisabled,k=z.itemIcon,be=z.selectedKeys,ee=z.onActive,de="".concat(q,"-item"),me=r.useRef(),ie=r.useRef(),H=Y||S,ue=Ue(g),ge=function(Ve){return{key:g,keyPath:ue,item:me.current,domEvent:Ve}},ve=j||k,Se=$n(g,H,V,x),We=Se.active,Oe=Object(De.a)(Se,["active"]),Re=be.includes(g),we=N(ue.length),Me=function(Ve){if(!H){var ze=ge(Ve);J==null||J(_n(ze)),ae(ze)}},Ne=function(Ve){if(se==null||se(Ve),Ve.which===Be.a.ENTER){var ze=ge(Ve);J==null||J(_n(ze)),ae(ze)}},Ee=function(Ve){ee(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Re),r.createElement(br,Object(W.a)({ref:me,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":oe&&le?null:le},X,Oe,$e,{component:"li","aria-disabled":S,style:Object(he.a)(Object(he.a)({},we),b),className:Te()(de,(c={},Object(ce.a)(c,"".concat(de,"-active"),We),Object(ce.a)(c,"".concat(de,"-selected"),Re),Object(ce.a)(c,"".concat(de,"-disabled"),H),c),O),onClick:Me,onKeyDown:Ne,onFocus:Ee}),B,r.createElement(m,{props:Object(he.a)(Object(he.a)({},i),{},{isSelected:Re}),icon:ve}))};function Cr(n){var i=n.eventKey,c=_(),b=Ue(i);return r.useEffect(function(){if(c)return c.registerPath(i,b),function(){c.unregisterPath(i,b)}},[b]),c?null:r.createElement(Or,n)}var Dt=Cr;function Et(n,i){return Object(Mn.a)(n).map(function(c,b){if(r.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(fn.a)(i),[b]).join("-"))),r.cloneElement(c,{key:O,eventKey:O})}return c})}function et(n){var i=r.useRef(n);i.current=n;var c=r.useCallback(function(){for(var b,O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(g))},[]);return n?c:void 0}var Rr=function(i,c){var b=i.className,O=i.children,g=Object(De.a)(i,["className","children"]),S=r.useContext(Ie),j=S.prefixCls,B=S.mode;return r.createElement("ul",Object(W.a)({className:Te()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(B==="inline"?"inline":"vertical"),b)},g,{"data-menu-list":!0,ref:c}),O)},xt=r.forwardRef(Rr);xt.displayName="SubMenuList";var Ht=xt,Sr=e("uciX"),Vn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=Qt;function Xt(n,i,c){if(i)return i;if(c)return c[n]||c.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(n){var i=n.prefixCls,c=n.visible,b=n.children,O=n.popup,g=n.popupClassName,S=n.popupOffset,j=n.disabled,B=n.mode,$=n.onVisibleChange,V=r.useContext(Ie),x=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,le=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ae=V.defaultMotions,Y=r.useState(!1),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ee=J?Object(he.a)(Object(he.a)({},jr),X):Object(he.a)(Object(he.a)({},Qt),X),de=Pr[B],me=Xt(B,q,ae),ie=Object(he.a)(Object(he.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=r.useRef();return r.useEffect(function(){return H.current=Object(Xe.a)(function(){be(c)}),function(){Xe.a.cancel(H.current)}},[c]),r.createElement(Sr.a,{prefixCls:i,popupClassName:Te()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),J),g),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:x,builtinPlacements:ee,popupPlacement:de,popupVisible:k,popup:O,popupAlign:S&&{offset:S},action:j?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:z,popupMotion:ie},b)}var Er=e("8XRh");function Ir(n){var i=n.id,c=n.open,b=n.keyPath,O=n.children,g="inline",S=r.useContext(Ie),j=S.prefixCls,B=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,x=S.mode,J=r.useRef(!1);J.current=x===g;var se=r.useState(!J.current),Q=Object(L.a)(se,2),X=Q[0],le=Q[1],z=J.current?c:!1;r.useEffect(function(){J.current&&le(!1)},[x]);var q=Object(he.a)({},Xt(g,$,V));b.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&le(!0),ae==null?void 0:ae(Y)},X?null:r.createElement(gn,{mode:g,locked:!J.current},r.createElement(Er.default,Object(W.a)({visible:z},q,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(Y){var oe=Y.className,k=Y.style;return r.createElement(Ht,{id:i,className:oe,style:k},O)}))}var Nr=function(i){var c,b=i.style,O=i.className,g=i.title,S=i.eventKey,j=i.disabled,B=i.internalPopupClose,$=i.children,V=i.itemIcon,x=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,le=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,Y=Object(De.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Jt(S),k=r.useContext(Ie),be=k.prefixCls,ee=k.mode,de=k.openKeys,me=k.disabled,ie=k.overflowDisabled,H=k.activeKey,ue=k.selectedKeys,ge=k.itemIcon,ve=k.expandIcon,Se=k.onItemClick,We=k.onOpenChange,Oe=k.onActive,Re=r.useContext(Je),we=Re.isSubPathKey,Me=Ue(),Ne="".concat(be,"-submenu"),Ee=me||j,$e=r.useRef(),qe=r.useRef(),Ve=V||ge,ze=x||ve,Qe=de.includes(S),Le=!ie&&Qe,jn=we(ue,S),tn=$n(S,Ee,q,ae),Ye=tn.active,ln=Object(De.a)(tn,["active"]),yn=r.useState(!1),bn=Object(L.a)(yn,2),Ke=bn[0],xe=bn[1],_e=function(He){Ee||xe(He)},Ze=function(He){_e(!0),X==null||X({key:S,domEvent:He})},Fn=function(He){_e(!1),le==null||le({key:S,domEvent:He})},Gn=r.useMemo(function(){return Ye||(ee!=="inline"?Ke||we([H],S):!1)},[ee,Ye,H,Ke,S,we]),Bn=N(Me.length),rn=function(He){Ee||(z==null||z({key:S,domEvent:He}),ee==="inline"&&We(S,!Qe))},Pn=et(function(ke){Q==null||Q(_n(ke)),Se(ke)}),un=function(He){ee!=="inline"&&We(S,He)},Dn=function(){Oe(S)},en=oe&&"".concat(oe,"-popup"),an=r.createElement("div",Object(W.a)({role:"menuitem",style:Bn,className:"".concat(Ne,"-title"),tabIndex:Ee?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":ie&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Ee,onClick:rn,onFocus:Dn},ln),g,r.createElement(m,{icon:ee!=="horizontal"?ze:null,props:Object(he.a)(Object(he.a)({},i),{},{isOpen:Le,isSubMenu:!0})},r.createElement("i",{className:"".concat(Ne,"-arrow")}))),En=r.useRef(ee);if(ee!=="inline"&&(En.current=Me.length>1?"vertical":ee),!ie){var cn=En.current;an=r.createElement(Dr,{mode:cn,prefixCls:Ne,visible:!B&&Le&&ee!=="inline",popupClassName:J,popupOffset:se,popup:r.createElement(gn,{mode:cn},r.createElement(Ht,{id:en,ref:qe},$)),disabled:Ee,onVisibleChange:un},an)}return r.createElement(gn,{onItemClick:Pn,mode:ee==="horizontal"?"vertical":ee,itemIcon:Ve,expandIcon:ze},r.createElement(p.Item,Object(W.a)({role:"none"},Y,{component:"li",style:b,className:Te()(Ne,"".concat(Ne,"-").concat(ee),O,(c={},Object(ce.a)(c,"".concat(Ne,"-open"),Le),Object(ce.a)(c,"".concat(Ne,"-active"),Gn),Object(ce.a)(c,"".concat(Ne,"-selected"),jn),Object(ce.a)(c,"".concat(Ne,"-disabled"),Ee),c)),onMouseEnter:Ze,onMouseLeave:Fn}),an,!ie&&r.createElement(Ir,{id:en,open:Le,keyPath:Me},$)))};function Yt(n){var i=n.eventKey,c=n.children,b=Ue(i),O=Et(c,b),g=_();r.useEffect(function(){if(g)return g.registerPath(i,b),function(){g.unregisterPath(i,b)}},[b]);var S;return g?S=O:S=r.createElement(Nr,n,O),r.createElement(Pe.Provider,{value:b},S)}var Tr=e("x/xZ");function Zt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(n)){var c=n.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(c)||n.isContentEditable||c==="a"&&!!n.getAttribute("href"),O=n.getAttribute("tabindex"),g=Number(O),S=null;return O&&!Number.isNaN(g)?S=g:b&&S===null&&(S=0),b&&n.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(n.querySelectorAll("*")).filter(function(b){return Zt(b,i)});return Zt(n,i)&&c.unshift(n),c}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(n){}}function ga(n,i){if(i.keyCode===9){var c=kt(n),b=c[i.shiftKey?0:c.length-1],O=b===document.activeElement||n===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var It=Be.a.LEFT,Nt=Be.a.RIGHT,Tt=Be.a.UP,ft=Be.a.DOWN,pt=Be.a.ENTER,qt=Be.a.ESC,_t=[Tt,ft,It,Nt];function Kr(n,i,c,b){var O,g,S,j,B="prev",$="next",V="children",x="parent";if(n==="inline"&&b===pt)return{inlineTrigger:!0};var J=(O={},Object(ce.a)(O,Tt,B),Object(ce.a)(O,ft,$),O),se=(g={},Object(ce.a)(g,It,c?$:B),Object(ce.a)(g,Nt,c?B:$),Object(ce.a)(g,ft,V),Object(ce.a)(g,pt,V),g),Q=(S={},Object(ce.a)(S,Tt,B),Object(ce.a)(S,ft,$),Object(ce.a)(S,pt,V),Object(ce.a)(S,qt,x),Object(ce.a)(S,It,c?V:x),Object(ce.a)(S,Nt,c?x:V),S),X={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},le=(j=X["".concat(n).concat(i?"":"Sub")])===null||j===void 0?void 0:j[b];switch(le){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case x:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Mr(n){for(var i=n;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ar(n,i){for(var c=n||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function wr(n,i){var c=kt(n,!0);return c.filter(function(b){return i.has(b)})}function er(n,i,c){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var O=wr(n,i),g=O.length,S=O.findIndex(function(j){return c===j});return b<0?S===-1?S=g-1:S-=1:b>0&&(S+=1),S=(S+g)%g,O[S]}function Fr(n,i,c,b,O,g,S,j,B,$){var V=r.useRef(),x=r.useRef();x.current=i;var J=function(){Xe.a.cancel(V.current)};return r.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,le,z,q=function(){X=new Set,le=new Map,z=new Map;var ge=g();return ge.forEach(function(ve){var Se=document.querySelector("[data-menu-id='".concat(Gt(b,ve),"']"));Se&&(X.add(Se),z.set(Se,ve),le.set(ve,Se))}),X};q();var ae=le.get(i),Y=Ar(ae,X),oe=z.get(Y),k=Kr(n,S(oe,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ge){if(ge){var ve=ge,Se=ge.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(ve=Se);var We=z.get(ge);j(We),J(),V.current=Object(Xe.a)(function(){x.current===We&&ve.focus()})}};if(k.sibling||!Y){var ee;!Y||n==="inline"?ee=O.current:ee=Mr(Y);var de=er(ee,X,Y,k.offset);be(de)}else if(k.inlineTrigger)B(oe);else if(k.offset>0)B(oe,!0),J(),V.current=Object(Xe.a)(function(){q();var ue=Y.getAttribute("aria-controls"),ge=document.getElementById(ue),ve=er(ge,X);be(ve)},5);else if(k.offset<0){var me=S(oe,!0),ie=me[me.length-2],H=le.get(ie);B(ie,!1),be(H)}}$==null||$(se)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(n){var i=Object(Rn.a)(n,{value:n}),c=Object(L.a)(i,2),b=c[0],O=c[1];return r.useEffect(function(){nr+=1;var g="".concat(Br,"-").concat(nr);O("rc-menu-uuid-".concat(g))},[]),b}var ya=e("p8sG");function Lr(n){Promise.resolve().then(n)}var Kt="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(Kt)},$r=function(i){return i.split(Kt)},Mt="rc-menu-more";function Vr(){var n=r.useState({}),i=Object(L.a)(n,2),c=i[1],b=Object(r.useRef)(new Map),O=Object(r.useRef)(new Map),g=r.useState([]),S=Object(L.a)(g,2),j=S[0],B=S[1],$=Object(r.useRef)(0),V=Object(r.useCallback)(function(z,q){var ae=tr(q);O.current.set(ae,z),b.current.set(z,ae),$.current+=1;var Y=$.current;Lr(function(){Y===$.current&&c({})})},[]),x=Object(r.useCallback)(function(z,q){var ae=tr(q);O.current.delete(ae),b.current.delete(z)},[]),J=Object(r.useCallback)(function(z){B(z)},[]),se=Object(r.useCallback)(function(z,q){var ae=b.current.get(z)||"",Y=$r(ae);return q&&j.includes(Y[0])&&Y.unshift(Mt),Y},[j]),Q=Object(r.useCallback)(function(z,q){return z.some(function(ae){var Y=se(ae,!0);return Y.includes(q)})},[se]),X=function(){var q=Object(fn.a)(b.current.keys());return j.length&&q.push(Mt),q},le=Object(r.useCallback)(function(z){var q="".concat(b.current.get(z)).concat(Kt),ae=new Set;return Object(fn.a)(O.current.keys()).forEach(function(Y){Y.startsWith(q)&&ae.add(O.current.get(Y))}),ae},[]);return{registerPath:V,unregisterPath:x,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:le}}var vt=[],Ur=function(i){var c,b,O=i.prefixCls,g=O===void 0?"rc-menu":O,S=i.style,j=i.className,B=i.tabIndex,$=B===void 0?0:B,V=i.children,x=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,le=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,ae=q===void 0?.1:q,Y=i.subMenuCloseDelay,oe=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ee=i.openKeys,de=i.activeKey,me=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,ue=i.multiple,ge=ue===void 0?!1:ue,ve=i.defaultSelectedKeys,Se=i.selectedKeys,We=i.onSelect,Oe=i.onDeselect,Re=i.inlineIndent,we=Re===void 0?24:Re,Me=i.motion,Ne=i.defaultMotions,Ee=i.triggerSubMenuAction,$e=Ee===void 0?"hover":Ee,qe=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,jn=i.getPopupContainer,tn=i.onClick,Ye=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ke=Object(De.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),xe=Et(V,vt),_e=r.useState(!1),Ze=Object(L.a)(_e,2),Fn=Ze[0],Gn=Ze[1],Bn=r.useRef(),rn=Wr(J),Pn=x==="rtl",un=r.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),Dn=Object(L.a)(un,2),en=Dn[0],an=Dn[1],En=r.useState(0),cn=Object(L.a)(En,2),ke=cn[0],He=cn[1],Jn=ke>=xe.length-1||en!=="horizontal"||z,xn=Object(Rn.a)(be,{value:ee,postState:function(Z){return Z||vt}}),nt=Object(L.a)(xn,2),On=nt[0],vn=nt[1],Hn=r.useState(On),Cn=Object(L.a)(Hn,2),mn=Cn[0],Qn=Cn[1],In=en==="inline",Xn=r.useRef(!1);r.useEffect(function(){In&&Qn(On)},[On]),r.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(In)vn(mn);else{var te=[];vn(te),Ye==null||Ye(te)}},[In]);var dn=Vr(),Nn=dn.registerPath,pe=dn.unregisterPath,je=dn.refreshOverflowKeys,Fe=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Bt=r.useMemo(function(){return{registerPath:Nn,unregisterPath:pe}},[Nn,pe]),Wt=r.useMemo(function(){return{isSubPathKey:Fe}},[Fe]);r.useEffect(function(){je(Jn?vt:xe.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(Rn.a)(de||me&&((c=xe[0])===null||c===void 0?void 0:c.key),{value:de}),tt=Object(L.a)(Lt,2),yt=tt[0],st=tt[1],bt=et(function(te){st(te)}),$t=et(function(){st(void 0)}),Ot=Object(Rn.a)(ve||[],{value:Se,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(Ot,2),rt=Ct[0],Tn=Ct[1],Rt=function(Z){if(!!H){var Ce=Z.key,Ge=rt.includes(Ce),sn;Ge?sn=rt.filter(function(kn){return kn!==Ce}):ge?sn=[].concat(Object(fn.a)(rt),[Ce]):sn=[Ce],Tn(sn);var Un=Object(he.a)(Object(he.a)({},Z),{},{selectedKeys:sn});Ge?Oe==null||Oe(Un):We==null||We(Un)}},St=et(function(te){tn==null||tn(_n(te)),Rt(te)}),ot=et(function(te,Z){var Ce=On.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Ge=gt(te);Ce=Ce.filter(function(sn){return!Ge.has(sn)})}d()(On,Ce)||(vn(Ce),Ye==null||Ye(Ce))}),Zn=et(jn),lt=function(Z,Ce){var Ge=Ce!=null?Ce:!On.includes(Z);ot(Z,Ge)},ut=Fr(en,yt,Pn,rn,Bn,Yn,nn,st,lt,ln);r.useEffect(function(){Gn(!0)},[]);var jt=en!=="horizontal"||z?xe:xe.map(function(te,Z){return r.createElement(gn,{key:te.key,overflowDisabled:Z>ke},te)}),Pt=r.createElement(p,Object(W.a)({id:J,ref:Bn,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Dt,className:Te()(g,"".concat(g,"-root"),"".concat(g,"-").concat(en),j,(b={},Object(ce.a)(b,"".concat(g,"-inline-collapsed"),an),Object(ce.a)(b,"".concat(g,"-rtl"),Pn),b)),dir:x,style:S,role:"menu",tabIndex:$,data:jt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Ge=Ce?xe.slice(-Ce):null;return r.createElement(Yt,{eventKey:Mt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Ge)},maxCount:en!=="horizontal"||z?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:ut},Ke));return r.createElement(zt.Provider,{value:rn},r.createElement(gn,{prefixCls:g,mode:en,openKeys:On,rtl:Pn,disabled:le,motion:Fn?Me:null,defaultMotions:Fn?Ne:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:we,subMenuOpenDelay:ae,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:ze,onItemClick:St,onOpenChange:ot},r.createElement(Je.Provider,{value:Wt},Pt),r.createElement(fe.Provider,{value:Bt},xe)))},zr=Ur,Gr=function(i){var c=i.className,b=i.title,O=i.eventKey,g=i.children,S=Object(De.a)(i,["className","title","eventKey","children"]),j=r.useContext(Ie),B=j.prefixCls,$="".concat(B,"-item-group");return r.createElement("li",Object(W.a)({},S,{onClick:function(x){return x.stopPropagation()},className:Te()($,c)}),r.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),r.createElement("ul",{className:"".concat($,"-list")},g))};function Jr(n){var i=n.children,c=Object(De.a)(n,["children"]),b=Ue(c.eventKey),O=Et(i,b),g=_();return g?O:r.createElement(Gr,c,O)}function xr(n){var i=n.className,c=n.style,b=r.useContext(Ie),O=b.prefixCls,g=_();return g?null:r.createElement("li",{className:Te()("".concat(O,"-item-divider"),i),style:c})}var it=zr;it.Item=Dt,it.SubMenu=Yt,it.ItemGroup=Jr,it.Divider=xr;var Hr=it,Qr=e("eDIo");function Xr(n,i){var c=n.prefixCls,b=n.editable,O=n.locale,g=n.style;return!b||b.showAdd===!1?null:r.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(j){b.onEdit("add",{event:j})}},b.addIcon||"+")}var rr=r.forwardRef(Xr);function Yr(n,i){var c=n.prefixCls,b=n.id,O=n.tabs,g=n.locale,S=n.mobile,j=n.moreIcon,B=j===void 0?"More":j,$=n.moreTransitionName,V=n.style,x=n.className,J=n.editable,se=n.tabBarGutter,Q=n.rtl,X=n.onTabClick,le=Object(r.useState)(!1),z=Object(L.a)(le,2),q=z[0],ae=z[1],Y=Object(r.useState)(null),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ee="".concat(b,"-more-popup"),de="".concat(c,"-dropdown"),me=k!==null?"".concat(ee,"-").concat(k):null,ie=g==null?void 0:g.dropdownAriaLabel,H=r.createElement(Hr,{onClick:function(Re){var we=Re.key,Me=Re.domEvent;X(we,Me),ae(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},O.map(function(Oe){return r.createElement(Dt,{key:Oe.key,id:"".concat(ee,"-").concat(Oe.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function ue(Oe){for(var Re=O.filter(function($e){return!$e.disabled}),we=Re.findIndex(function($e){return $e.key===k})||0,Me=Re.length,Ne=0;Ne<Me;Ne+=1){we=(we+Oe+Me)%Me;var Ee=Re[we];if(!Ee.disabled){be(Ee.key);return}}}function ge(Oe){var Re=Oe.which;if(!q){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(Re)&&(ae(!0),Oe.preventDefault());return}switch(Re){case Be.a.UP:ue(-1),Oe.preventDefault();break;case Be.a.DOWN:ue(1),Oe.preventDefault();break;case Be.a.ESC:ae(!1);break;case Be.a.SPACE:case Be.a.ENTER:k!==null&&X(k,Oe);break}}Object(r.useEffect)(function(){var Oe=document.getElementById(me);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[k]),Object(r.useEffect)(function(){q||be(null)},[q]);var ve=Object(ce.a)({},Q?"marginLeft":"marginRight",se);O.length||(ve.visibility="hidden",ve.order=1);var Se=Te()(Object(ce.a)({},"".concat(de,"-rtl"),Q)),We=S?null:r.createElement(Qr.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ae,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},r.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(b,"-more"),"aria-expanded":q,onKeyDown:ge},B));return r.createElement("div",{className:Te()("".concat(c,"-nav-operations"),x),style:V,ref:i},We,r.createElement(rr,{prefixCls:c,locale:g,editable:J}))}var Zr=r.forwardRef(Yr),At=Object(r.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(n,i){var c=Object(r.useState)(),b=Object(L.a)(c,2),O=b[0],g=b[1],S=Object(r.useState)(0),j=Object(L.a)(S,2),B=j[0],$=j[1],V=Object(r.useState)(0),x=Object(L.a)(V,2),J=x[0],se=x[1],Q=Object(r.useState)(),X=Object(L.a)(Q,2),le=X[0],z=X[1],q=Object(r.useRef)();function ae(de){var me=de.touches[0],ie=me.screenX,H=me.screenY;g({x:ie,y:H}),window.clearInterval(q.current)}function Y(de){if(!!O){de.preventDefault();var me=de.touches[0],ie=me.screenX,H=me.screenY;g({x:ie,y:H});var ue=ie-O.x,ge=H-O.y;i(ue,ge);var ve=Date.now();$(ve),se(ve-B),z({x:ue,y:ge})}}function oe(){if(!!O&&(g(null),z(null),le)){var de=le.x/J,me=le.y/J,ie=Math.abs(de),H=Math.abs(me);if(Math.max(ie,H)<kr)return;var ue=de,ge=me;q.current=window.setInterval(function(){if(Math.abs(ue)<ar&&Math.abs(ge)<ar){window.clearInterval(q.current);return}ue*=ir,ge*=ir,i(ue*ht,ge*ht)},ht)}}var k=Object(r.useRef)();function be(de){var me=de.deltaX,ie=de.deltaY,H=0,ue=Math.abs(me),ge=Math.abs(ie);ue===ge?H=k.current==="x"?me:ie:ue>ge?(H=me,k.current="x"):(H=ie,k.current="y"),i(-H,-H)&&de.preventDefault()}var ee=Object(r.useRef)(null);ee.current={onTouchStart:ae,onTouchMove:Y,onTouchEnd:oe,onWheel:be},r.useEffect(function(){function de(ue){ee.current.onTouchStart(ue)}function me(ue){ee.current.onTouchMove(ue)}function ie(ue){ee.current.onTouchEnd(ue)}function H(ue){ee.current.onWheel(ue)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),n.current.addEventListener("touchstart",de,{passive:!1}),n.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ie)}},[])}function _r(){var n=Object(r.useRef)(new Map);function i(b){return n.current.has(b)||n.current.set(b,r.createRef()),n.current.get(b)}function c(b){n.current.delete(b)}return[i,c]}function sr(n,i){var c=r.useRef(n),b=r.useState({}),O=Object(L.a)(b,2),g=O[1];function S(j){var B=typeof j=="function"?j(c.current):j;B!==c.current&&i(B,c.current),c.current=B,g({})}return[c.current,S]}var or=function(i){var c=i.position,b=i.prefixCls,O=i.extra;if(!O)return null;var g,S=O;return c==="right"&&(g=S.right||!S.left&&S||null),c==="left"&&(g=S.left||null),g?r.createElement("div",{className:"".concat(b,"-extra-content")},g):null};function ea(n,i){var c,b=r.useContext(At),O=b.prefixCls,g=b.tabs,S=n.className,j=n.style,B=n.id,$=n.animated,V=n.activeKey,x=n.rtl,J=n.extra,se=n.editable,Q=n.locale,X=n.tabPosition,le=n.tabBarGutter,z=n.children,q=n.onTabClick,ae=n.onTabScroll,Y=Object(r.useRef)(),oe=Object(r.useRef)(),k=Object(r.useRef)(),be=Object(r.useRef)(),ee=_r(),de=Object(L.a)(ee,2),me=de[0],ie=de[1],H=X==="top"||X==="bottom",ue=sr(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ge=Object(L.a)(ue,2),ve=ge[0],Se=ge[1],We=sr(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),Oe=Object(L.a)(We,2),Re=Oe[0],we=Oe[1],Me=Object(r.useState)(0),Ne=Object(L.a)(Me,2),Ee=Ne[0],$e=Ne[1],qe=Object(r.useState)(0),Ve=Object(L.a)(qe,2),ze=Ve[0],Qe=Ve[1],Le=Object(r.useState)(0),jn=Object(L.a)(Le,2),tn=jn[0],Ye=jn[1],ln=Object(r.useState)(0),yn=Object(L.a)(ln,2),bn=yn[0],Ke=yn[1],xe=Object(r.useState)(null),_e=Object(L.a)(xe,2),Ze=_e[0],Fn=_e[1],Gn=Object(r.useState)(null),Bn=Object(L.a)(Gn,2),rn=Bn[0],Pn=Bn[1],un=Object(r.useState)(0),Dn=Object(L.a)(un,2),en=Dn[0],an=Dn[1],En=Object(r.useState)(0),cn=Object(L.a)(En,2),ke=cn[0],He=cn[1],Jn=Sn(new Map),xn=Object(L.a)(Jn,2),nt=xn[0],On=xn[1],vn=ct(g,nt,Ee),Hn="".concat(O,"-nav-operations-hidden"),Cn=0,mn=0;H?x?(Cn=0,mn=Math.max(0,Ee-Ze)):(Cn=Math.min(0,Ze-Ee),mn=0):(Cn=Math.min(0,rn-ze),mn=0);function Qn(te){return te<Cn?Cn:te>mn?mn:te}var In=Object(r.useRef)(),Xn=Object(r.useState)(),dn=Object(L.a)(Xn,2),Nn=dn[0],pe=dn[1];function je(){pe(Date.now())}function Fe(){window.clearTimeout(In.current)}qr(Y,function(te,Z){function Ce(Ge,sn){Ge(function(Un){var kn=Qn(Un+sn);return kn})}if(H){if(Ze>=Ee)return!1;Ce(Se,te)}else{if(rn>=ze)return!1;Ce(we,Z)}return Fe(),je(),!0}),Object(r.useEffect)(function(){return Fe(),Nn&&(In.current=window.setTimeout(function(){pe(0)},100)),Fe},[Nn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=vn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=ve;x?Z.right<ve?Ce=Z.right:Z.right+Z.width>ve+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-ve?Ce=-Z.left:Z.left+Z.width>-ve+Ze&&(Ce=-(Z.left+Z.width-Ze)),we(0),Se(Qn(Ce))}else{var Ge=Re;Z.top<-Re?Ge=-Z.top:Z.top+Z.height>-Re+rn&&(Ge=-(Z.top+Z.height-rn)),Se(0),we(Qn(Ge))}}var Yn=I(vn,{width:Ze,height:rn,left:ve,top:Re},{width:tn,height:bn},{width:en,height:ke},Object(he.a)(Object(he.a)({},n),{},{tabs:g})),gt=Object(L.a)(Yn,2),Bt=gt[0],Wt=gt[1],Lt=g.map(function(te){var Z=te.key;return r.createElement(Ln,{id:B,prefixCls:O,key:Z,rtl:x,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:X,tabBarGutter:le,renderWrapper:z,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(Z),onClick:function(Ge){q(Z,Ge)},onRemove:function(){ie(Z)},onFocus:function(){nn(Z),je(),x||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),tt=wn(function(){var te,Z,Ce,Ge,sn,Un,kn,Vt,Ut,la=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ua=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Ge=be.current)===null||Ge===void 0?void 0:Ge.offsetHeight)||0,da=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Fn(la),Pn(ua),an(mr),He(fr);var pr=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Qe(vr);var hr=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Hn);Ye(pr-(hr?0:da)),Ke(vr-(hr?0:ca)),On(function(){var gr=new Map;return g.forEach(function(ma){var yr=ma.key,dt=me(yr).current;dt&&gr.set(yr,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),gr})}),yt=g.slice(0,Bt),st=g.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(r.useState)(),Ot=Object(L.a)($t,2),Ct=Ot[0],rt=Ot[1],Tn=vn.get(V),Rt=Object(r.useRef)();function St(){Xe.a.cancel(Rt.current)}Object(r.useEffect)(function(){var te={};return Tn&&(H?(x?te.right=Tn.right:te.left=Tn.left,te.width=Tn.width):(te.top=Tn.top,te.height=Tn.height)),St(),Rt.current=Object(Xe.a)(function(){rt(te)}),St},[Tn,H,x]),Object(r.useEffect)(function(){nn()},[V,Tn,vn,H]),Object(r.useEffect)(function(){tt()},[x,le,V,g.map(function(te){return te.key}).join("_")]);var ot=!!bt.length,Zn="".concat(O,"-nav-wrap"),lt,ut,jt,Pt;return H?x?(ut=ve>0,lt=ve+Ze<Ee):(lt=ve<0,ut=-ve+Ze<Ee):(jt=Re<0,Pt=-Re+rn<ze),r.createElement("div",{ref:i,role:"tablist",className:Te()("".concat(O,"-nav"),S),style:j,onKeyDown:function(){je()}},r.createElement(or,{position:"left",extra:J,prefixCls:O}),r.createElement(Wn.default,{onResize:tt},r.createElement("div",{className:Te()(Zn,(c={},Object(ce.a)(c,"".concat(Zn,"-ping-left"),lt),Object(ce.a)(c,"".concat(Zn,"-ping-right"),ut),Object(ce.a)(c,"".concat(Zn,"-ping-top"),jt),Object(ce.a)(c,"".concat(Zn,"-ping-bottom"),Pt),c)),ref:Y},r.createElement(Wn.default,{onResize:tt},r.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Re,"px)"),transition:Nn?"none":void 0}},Lt,r.createElement(rr,{ref:be,prefixCls:O,locale:Q,editable:se,style:{visibility:ot?"hidden":null}}),r.createElement("div",{className:Te()("".concat(O,"-ink-bar"),Object(ce.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),r.createElement(Zr,Object(W.a)({},n,{ref:k,prefixCls:O,tabs:bt,className:!ot&&Hn})),r.createElement(or,{position:"right",extra:J,prefixCls:O}))}var lr=r.forwardRef(ea);function na(n){var i=n.id,c=n.activeKey,b=n.animated,O=n.tabPosition,g=n.rtl,S=n.destroyInactiveTabPane,j=r.useContext(At),B=j.prefixCls,$=j.tabs,V=b.tabPane,x=$.findIndex(function(J){return J.key===c});return r.createElement("div",{className:Te()("".concat(B,"-content-holder"))},r.createElement("div",{className:Te()("".concat(B,"-content"),"".concat(B,"-content-").concat(O),Object(ce.a)({},"".concat(B,"-content-animated"),V)),style:x&&V?Object(ce.a)({},g?"marginRight":"marginLeft","-".concat(x,"00%")):null},$.map(function(J){return r.cloneElement(J.node,{key:J.key,prefixCls:B,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:S})})))}function ur(n){var i=n.prefixCls,c=n.forceRender,b=n.className,O=n.style,g=n.id,S=n.active,j=n.animated,B=n.destroyInactiveTabPane,$=n.tabKey,V=n.children,x=r.useState(c),J=Object(L.a)(x,2),se=J[0],Q=J[1];r.useEffect(function(){S?Q(!0):B&&Q(!1)},[S,B]);var X={};return S||(j?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),r.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!S,style:Object(he.a)(Object(he.a)({},X),O),className:Te()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),b)},(S||se||c)&&V)}var dr=0;function ta(n){return Object(Mn.a)(n).map(function(i){if(r.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(he.a)(Object(he.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(n,i){var c,b=n.id,O=n.prefixCls,g=O===void 0?"rc-tabs":O,S=n.className,j=n.children,B=n.direction,$=n.activeKey,V=n.defaultActiveKey,x=n.editable,J=n.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=n.tabPosition,X=Q===void 0?"top":Q,le=n.tabBarGutter,z=n.tabBarStyle,q=n.tabBarExtraContent,ae=n.locale,Y=n.moreIcon,oe=n.moreTransitionName,k=n.destroyInactiveTabPane,be=n.renderTabBar,ee=n.onChange,de=n.onTabClick,me=n.onTabScroll,ie=Object(De.a)(n,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(j),ue=B==="rtl",ge;se===!1?ge={inkBar:!1,tabPane:!1}:se===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(he.a)({inkBar:!0,tabPane:!1},Object(on.a)(se)==="object"?se:{});var ve=Object(r.useState)(!1),Se=Object(L.a)(ve,2),We=Se[0],Oe=Se[1];Object(r.useEffect)(function(){Oe(Object(An.a)())},[]);var Re=Object(Rn.a)(function(){var Ke;return(Ke=H[0])===null||Ke===void 0?void 0:Ke.key},{value:$,defaultValue:V}),we=Object(L.a)(Re,2),Me=we[0],Ne=we[1],Ee=Object(r.useState)(function(){return H.findIndex(function(Ke){return Ke.key===Me})}),$e=Object(L.a)(Ee,2),qe=$e[0],Ve=$e[1];Object(r.useEffect)(function(){var Ke=H.findIndex(function(_e){return _e.key===Me});if(Ke===-1){var xe;Ke=Math.max(0,Math.min(qe,H.length-1)),Ne((xe=H[Ke])===null||xe===void 0?void 0:xe.key)}Ve(Ke)},[H.map(function(Ke){return Ke.key}).join("_"),Me,qe]);var ze=Object(Rn.a)(null,{value:b}),Qe=Object(L.a)(ze,2),Le=Qe[0],jn=Qe[1],tn=X;We&&!["left","right"].includes(X)&&(tn="top"),Object(r.useEffect)(function(){b||(jn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ye(Ke,xe){de==null||de(Ke,xe),Ne(Ke),ee==null||ee(Ke)}var ln={id:Le,activeKey:Me,animated:ge,tabPosition:tn,rtl:ue,mobile:We},yn,bn=Object(he.a)(Object(he.a)({},ln),{},{editable:x,locale:ae,moreIcon:Y,moreTransitionName:oe,tabBarGutter:le,onTabClick:Ye,onTabScroll:me,extra:q,style:z,panes:j});return be?yn=be(bn,lr):yn=r.createElement(lr,bn),r.createElement(At.Provider,{value:{tabs:H,prefixCls:g}},r.createElement("div",Object(W.a)({ref:i,id:b,className:Te()(g,"".concat(g,"-").concat(tn),(c={},Object(ce.a)(c,"".concat(g,"-mobile"),We),Object(ce.a)(c,"".concat(g,"-editable"),x),Object(ce.a)(c,"".concat(g,"-rtl"),ue),c),S)},ie),yn,r.createElement(na,Object(W.a)({destroyInactiveTabPane:k},ln,{animated:ge}))))}var cr=r.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,wt=e("MZF8"),pn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function Ft(n,i){var c,b=(c=n.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return b||(b=i.tsx?"tsx":"jsx"),b}var oa=n=>{var i,c,b,O=Object(r.useRef)(),g=Object(r.useContext)(pn.context),S=g.locale,j=Object(pn.useLocaleProps)(S,n),B=Object(pn.useDemoUrl)(j.identifier),$=j.demoUrl||B,V=(wt.a===null||wt.a===void 0?void 0:wt.a.location.hash)==="#".concat(j.identifier),x=Object.keys(j.sources).length===1,J=Object(pn.useCodeSandbox)((i=j.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:j),se=Object(pn.useRiddle)((c=j.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:j),Q=Object(pn.useMotions)(j.motions||[],O.current),X=Object(G.default)(Q,2),le=X[0],z=X[1],q=Object(pn.useCopy)(),ae=Object(G.default)(q,2),Y=ae[0],oe=ae[1],k=Object(r.useState)("_"),be=Object(G.default)(k,2),ee=be[0],de=be[1],me=Object(r.useState)(Ft(ee,j.sources[ee])),ie=Object(G.default)(me,2),H=ie[0],ue=ie[1],ge=Object(r.useState)(Boolean(j.defaultShowCode)),ve=Object(G.default)(ge,2),Se=ve[0],We=ve[1],Oe=Object(r.useState)(Math.random()),Re=Object(G.default)(Oe,2),we=Re[0],Me=Re[1],Ne=j.sources[ee][H]||j.sources[ee].content,Ee=Object(pn.useTSPlaygroundUrl)(S,Ne),$e=Object(r.useRef)(),qe=Object(pn.usePrefersColor)(),Ve=Object(G.default)(qe,1),ze=Ve[0];Object(r.useEffect)(()=>{Me(Math.random())},[ze]);function Qe(Le){de(Le),ue(Ft(Le,j.sources[Le]))}return C.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:we,src:$,ref:$e}):j.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&C.a.createElement(pn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),j.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>le()}),j.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Me(Math.random())}),!((b=j.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&C.a.createElement(pn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Y(Ne)}),H==="tsx"&&Se&&C.a.createElement(pn.Link,{target:"_blank",to:Ee},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Se)})),Se&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!x&&C.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Qe},Object.keys(j.sources).map(Le=>C.a.createElement(ur,{tab:Le==="_"?"index.".concat(Ft(Le,j.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sa.a,{code:Ne,lang:H,showCopy:!1}))))},Oa=hn.default=oa},"80pN":function(Kn,hn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var r=e("MgzW"),C=e("q1tI"),W=e("i8i4"),ce=e("QCnb");function L(m){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+m,w=1;w<arguments.length;w++)N+="&args[]="+encodeURIComponent(arguments[w]);return"Minified React error #"+m+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var on=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;on.hasOwnProperty("ReactCurrentDispatcher")||(on.ReactCurrentDispatcher={current:null}),on.hasOwnProperty("ReactCurrentBatchConfig")||(on.ReactCurrentBatchConfig={suspense:null});function De(m){var N=m,w=m;if(m.alternate)for(;N.return;)N=N.return;else{m=N;do N=m,(N.effectTag&1026)!=0&&(w=N.return),m=N.return;while(m)}return N.tag===3?w:null}function he(m){if(De(m)!==m)throw Error(L(188))}function at(m){var N=m.alternate;if(!N){if(N=De(m),N===null)throw Error(L(188));return N!==m?null:m}for(var w=m,fe=N;;){var _=w.return;if(_===null)break;var Pe=_.alternate;if(Pe===null){if(fe=_.return,fe!==null){w=fe;continue}break}if(_.child===Pe.child){for(Pe=_.child;Pe;){if(Pe===w)return he(_),m;if(Pe===fe)return he(_),N;Pe=Pe.sibling}throw Error(L(188))}if(w.return!==fe.return)w=_,fe=Pe;else{for(var Ue=!1,Je=_.child;Je;){if(Je===w){Ue=!0,w=_,fe=Pe;break}if(Je===fe){Ue=!0,fe=_,w=Pe;break}Je=Je.sibling}if(!Ue){for(Je=Pe.child;Je;){if(Je===w){Ue=!0,w=Pe,fe=_;break}if(Je===fe){Ue=!0,fe=Pe,w=_;break}Je=Je.sibling}if(!Ue)throw Error(L(189))}}if(w.alternate!==fe)throw Error(L(190))}if(w.tag!==3)throw Error(L(188));return w.stateNode.current===w?m:N}function Te(){return!0}function Mn(){return!1}function An(m,N,w,fe){this.dispatchConfig=m,this._targetInst=N,this.nativeEvent=w,m=this.constructor.Interface;for(var _ in m)m.hasOwnProperty(_)&&((N=m[_])?this[_]=N(w):_==="target"?this.target=fe:this[_]=w[_]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?Te:Mn,this.isPropagationStopped=Mn,this}r(An.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=Te)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=Te)},persist:function(){this.isPersistent=Te},isPersistent:Mn,destructor:function(){var m=this.constructor.Interface,N;for(N in m)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),An.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},An.extend=function(m){function N(){}function w(){return fe.apply(this,arguments)}var fe=this;N.prototype=fe.prototype;var _=new N;return r(_,w.prototype),w.prototype=_,w.prototype.constructor=w,w.Interface=r({},fe.Interface,m),w.extend=fe.extend,Xe(w),w},Xe(An);function Rn(m,N,w,fe){if(this.eventPool.length){var _=this.eventPool.pop();return this.call(_,m,N,w,fe),_}return new this(m,N,w,fe)}function fn(m){if(!(m instanceof this))throw Error(L(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function Xe(m){m.eventPool=[],m.getPooled=Rn,m.release=fn}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(m,N){var w={};return w[m.toLowerCase()]=N.toLowerCase(),w["Webkit"+m]="webkit"+N,w["Moz"+m]="moz"+N,w}var Sn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Be={},zn={};Wn&&(zn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Ln(m){if(Be[m])return Be[m];if(!Sn[m])return m;var N=Sn[m],w;for(w in N)if(N.hasOwnProperty(w)&&w in zn)return Be[m]=N[w];return m}var qn=Ln("animationend"),ct=Ln("animationiteration"),D=Ln("animationstart"),I=Ln("transitionend"),P=null;function d(m){if(P===null)try{var N=("require"+Math.random()).slice(0,7);P=(G&&G[N])("timers").setImmediate}catch(w){P=function(fe){var _=new MessageChannel;_.port1.onmessage=fe,_.port2.postMessage(void 0)}}return P(m)}var o=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=o[11],y=o[12],R=W.unstable_batchedUpdates,t=on.IsSomeRendererActing,l=typeof ce.unstable_flushAllWithoutAsserting=="function",s=ce.unstable_flushAllWithoutAsserting||function(){for(var m=!1;v();)m=!0;return m};function M(m){try{s(),d(function(){s()?M(m):m()})}catch(N){m(N)}}var T=0,E=!1,u=W.findDOMNode,K=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=K[0],a=K[4],h=K[5],p=K[6],A=K[7],F=K[8],U=K[9],ne=K[10];function re(){}function ye(m,N){if(!m)return[];if(m=at(m),!m)return[];for(var w=m,fe=[];;){if(w.tag===5||w.tag===6||w.tag===1||w.tag===0){var _=w.stateNode;N(_)&&fe.push(_)}if(w.child)w.child.return=w,w=w.child;else{if(w===m)return fe;for(;!w.sibling;){if(!w.return||w.return===m)return fe;w=w.return}w.sibling.return=w.return,w=w.sibling}}}function Ie(m,N){if(m&&!m._reactInternalFiber){var w=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":w==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":w,Error(L(286,N,m))}}var Ae={renderIntoDocument:function(m){var N=document.createElement("div");return W.render(m,N)},isElement:function(m){return C.isValidElement(m)},isElementOfType:function(m,N){return C.isValidElement(m)&&m.type===N},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&C.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Ae.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,N){return Ae.isCompositeComponent(m)?m._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(m,N){return Ie(m,"findAllInRenderedTree"),m?ye(m._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(m,N){return Ie(m,"scryRenderedDOMComponentsWithClass"),Ae.findAllInRenderedTree(m,function(w){if(Ae.isDOMComponent(w)){var fe=w.className;typeof fe!="string"&&(fe=w.getAttribute("class")||"");var _=fe.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(L(11));N=N.split(/\s+/)}return N.every(function(Pe){return _.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,N){if(Ie(m,"findRenderedDOMComponentWithClass"),m=Ae.scryRenderedDOMComponentsWithClass(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+N);return m[0]},scryRenderedDOMComponentsWithTag:function(m,N){return Ie(m,"scryRenderedDOMComponentsWithTag"),Ae.findAllInRenderedTree(m,function(w){return Ae.isDOMComponent(w)&&w.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,N){if(Ie(m,"findRenderedDOMComponentWithTag"),m=Ae.scryRenderedDOMComponentsWithTag(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+N);return m[0]},scryRenderedComponentsWithType:function(m,N){return Ie(m,"scryRenderedComponentsWithType"),Ae.findAllInRenderedTree(m,function(w){return Ae.isCompositeComponentWithType(w,N)})},findRenderedComponentWithType:function(m,N){if(Ie(m,"findRenderedComponentWithType"),m=Ae.scryRenderedComponentsWithType(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+N);return m[0]},mockComponent:function(m,N){return N=N||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return C.createElement(N,null,this.props.children)}),this},nativeTouchData:function(m,N){return{touches:[{pageX:m,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(m){function N(){T--,t.current=w,y.current=fe}E===!1&&(E=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var w=t.current,fe=y.current;t.current=!0,y.current=!0;try{var _=R(m)}catch(Pe){throw N(),Pe}if(_!==null&&typeof _=="object"&&typeof _.then=="function")return{then:function(Pe,Ue){_.then(function(){1<T||l===!0&&w===!0?(N(),Pe()):M(function(Je){N(),Je?Ue(Je):Pe()})},function(Je){N(),Ue(Je)})}};try{T!==1||l!==!1&&w!==!1||s(),N()}catch(Pe){throw N(),Pe}return{then:function(Pe){Pe()}}}};function gn(m){return function(N,w){if(C.isValidElement(N))throw Error(L(228));if(Ae.isCompositeComponent(N))throw Error(L(229));var fe=a[m],_=new re;_.target=N,_.type=m.toLowerCase();var Pe=f(N),Ue=new An(fe,Pe,_,N);Ue.persist(),r(Ue,w),fe.phasedRegistrationNames?h(Ue):p(Ue),W.unstable_batchedUpdates(function(){A(N),ne(Ue)}),F()}}Ae.Simulate={};for(var $n in a)Ae.Simulate[$n]=gn($n);function _n(m,N){return function(w,fe){var _=new re(m);r(_,fe),Ae.isDOMComponent(w)?(w=u(w),_.target=w,U(N,1,document,_)):w.tagName&&(_.target=w,U(N,1,document,_))}}[["abort","abort"],[qn,"animationEnd"],[ct,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var N=m[1];Ae.SimulateNative[N]=_n(N,m[0])}),G.exports=Ae.default||Ae}).call(this,e("hOG+")(Kn))},JjdP:function(Kn,hn,e){"use strict";e.r(hn);var G=e("9og8"),r=e("WmNS"),C=e.n(r),W=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,on=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,De=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,he=`export const basic = {
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

export default Root;`,Te=`import React, { useState, useEffect } from 'react';
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
}`,An=`import { Select } from 'antd';
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

export default Demo;`,fn=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,Xe=`.markdown p {
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
}`,Wn=`import React from 'react';
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

export default Demo;`,Sn=`import React from 'react';
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

export default Demo;`,Be=`import React from 'react';
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

export default Demo;`,zn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Ln=`import React, { useState, useRef } from 'react';
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

export default Demo;`,qn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ct=hn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l;return C.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return t=function(E,u){if(!u&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var K=R(u);if(K&&K.has(E))return K.get(E);var f={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in E)if(h!=="default"&&Object.prototype.hasOwnProperty.call(E,h)){var p=a?Object.getOwnPropertyDescriptor(E,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=E[h]}return f.default=E,K&&K.set(E,f),f},R=function(E){if(typeof WeakMap!="function")return null;var u=new WeakMap,K=new WeakMap;return(R=function(a){return a?K:u})(E)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=t,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,v=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=M.sent,l=function(){var E=(0,v.useState)("Line"),u=(0,o.default)(E,2),K=u[0],f=u[1],a={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[K];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(M,T,E){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(T).length]}},M),o.default.createElement("p",null,JSON.stringify(T)),o.default.createElement("p",null,JSON.stringify(E)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l;return C.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return t=function(E,u){if(!u&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var K=R(u);if(K&&K.has(E))return K.get(E);var f={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in E)if(h!=="default"&&Object.prototype.hasOwnProperty.call(E,h)){var p=a?Object.getOwnPropertyDescriptor(E,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=E[h]}return f.default=E,K&&K.set(E,f),f},R=function(E){if(typeof WeakMap!="function")return null;var u=new WeakMap,K=new WeakMap;return(R=function(a){return a?K:u})(E)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=t,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,v=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=M.sent,l=function(){var E=(0,v.useState)(!1),u=(0,o.default)(E,2),K=u[0],f=u[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:K,onChange:function(){return f(!K)}})),v.default.createElement(y.PivotTable,{leftExpandable:K,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T,E,u,K,f;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return E=function(A,F){if(!F&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var U=T(F);if(U&&U.has(A))return U.get(A);var ne={},re=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ye in A)if(ye!=="default"&&Object.prototype.hasOwnProperty.call(A,ye)){var Ie=re?Object.getOwnPropertyDescriptor(A,ye):null;Ie&&(Ie.get||Ie.set)?Object.defineProperty(ne,ye,Ie):ne[ye]=A[ye]}return ne.default=A,U&&U.set(A,ne),ne},T=function(A){if(typeof WeakMap!="function")return null;var F=new WeakMap,U=new WeakMap;return(T=function(re){return re?U:F})(A)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,v=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,y=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,R=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,t=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,l=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=E,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,M=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(p){(0,R.default)(F,p);var A=(0,t.default)(F);function F(){return(0,v.default)(this,F),A.apply(this,arguments)}return(0,y.default)(F,[{key:"render",value:function(){var ne=this.props.form;return l.default.createElement("div",null,l.default.createElement(M.default,{form:ne,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))}}]),F}(l.default.Component),f=(0,M.connectForm)(K),h.abrupt("return",f);case 47:case"end":return h.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,a){if(!a&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=t(a);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in f)if(F!=="default"&&Object.prototype.hasOwnProperty.call(f,F)){var U=A?Object.getOwnPropertyDescriptor(f,F):null;U&&(U.get||U.set)?Object.defineProperty(p,F,U):p[F]=f[F]}return p.default=f,h&&h.set(f,p),p},t=function(f){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(A){return A?h:a})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},M=function(){var f=(0,R.useForm)();return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=M,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,a){if(!a&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=t(a);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in f)if(F!=="default"&&Object.prototype.hasOwnProperty.call(f,F)){var U=A?Object.getOwnPropertyDescriptor(f,F):null;U&&(U.get||U.set)?Object.defineProperty(p,F,U):p[F]=f[F]}return p.default=f,h&&h.set(f,p),p},t=function(f){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(A){return A?h:a})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},M=function(){var f=(0,R.useForm)(),a=function(p,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(p,null,2))};return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s,onFinish:a}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=M,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return l=function(){var u=(0,v.useForm)(),K=function(a,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(a))};return o.default.createElement("div",null,o.default.createElement(v.default,{form:u,schema:t,onFinish:K}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},R=function(u,K){if(!K&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(K);if(f&&f.has(u))return f.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(a,p,A):a[p]=u[p]}return a.default=u,f&&f.set(u,a),a},y=function(u){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:K})(u)},d=e("K+nK"),T.t0=d,T.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=R,T.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return T.t3=T.sent,v=(0,T.t2)(T.t3),t={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y=function(M){return{type:"object",displayType:M,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(v.default,{schema:y("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(v.default,{schema:y("column")}))},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return o.default.createElement(v.default,{schema:y})},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return o.default.createElement(v.default,{readOnly:!0,schema:y})},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return o.default.createElement(v.default,{labelWidth:"200",schema:y})},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T,E,u,K;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return E=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=T(A);if(F&&F.has(p))return F.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,F&&F.set(p,U),U},T=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(T=function(ne){return ne?F:A})(p)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.t8=E,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,t=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return l=a.sent,a.t10=E,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,s=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return M=a.sent,u=function(){var p=(0,s.useForm)(),A=(0,t.useState)({}),F=(0,R.default)(A,2),U=F[0],ne=F[1],re=function(){(0,M.fakeApi)("xxx/getForm").then(function(Ae){p.setValues({input1:"hello world",select1:"c"})})};(0,t.useEffect)(function(){(0,M.delay)(1e3).then(function(Ie){ne({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ye=function(Ae,gn){gn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(gn.map(function($n){return $n.name}))):(0,M.fakeApi)("xxx/submit",Ae).then(function($n){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return t.default.createElement("div",{style:{width:"400px"}},t.default.createElement(s.default,{form:p,schema:U,onFinish:ye}),t.default.createElement(o.default,null,t.default.createElement(v.default,{onClick:re},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),t.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=u,a.abrupt("return",K);case 48:case"end":return a.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T,E,u,K;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return T=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=M(A);if(F&&F.has(p))return F.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,F&&F.set(p,U),U},M=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(M=function(ne){return ne?F:A})(p)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.t2=d,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=d,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=d,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=a.sent,a.t8=T,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=a.sent,E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var p=(0,l.useForm)(),A=function(ne,re){re.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(re.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},F=function(ne){var re=ne.data,ye=ne.errors,Ie=ne.schema,Ae=(0,v.default)(ne,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(gn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:p,schema:E,beforeFinish:F,onFinish:A}),R.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},K=u,a.abrupt("return",K);case 42:case"end":return a.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T,E,u,K;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return T=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=M(A);if(F&&F.has(p))return F.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,F&&F.set(p,U),U},M=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(M=function(ne){return ne?F:A})(p)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return t=a.sent,a.t8=T,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=a.sent,E={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var p=(0,l.useForm)(),A=function(ne,re){re.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(re.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},F=function(){(0,s.fakeApi)("xxx/getForm").then(function(ne){p.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:p,schema:E,onFinish:A}),R.default.createElement(o.default,null,R.default.createElement(v.default,{onClick:F},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=u,a.abrupt("return",K);case 44:case"end":return a.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T,E,u;return C.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return M=function(h,p){if(!p&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var A=s(p);if(A&&A.has(h))return A.get(h);var F={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ne in h)if(ne!=="default"&&Object.prototype.hasOwnProperty.call(h,ne)){var re=U?Object.getOwnPropertyDescriptor(h,ne):null;re&&(re.get||re.set)?Object.defineProperty(F,ne,re):F[ne]=h[ne]}return F.default=h,A&&A.set(h,F),F},s=function(h){if(typeof WeakMap!="function")return null;var p=new WeakMap,A=new WeakMap;return(s=function(U){return U?A:p})(h)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,o=(0,f.t0)(f.t1),f.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,v=(0,f.t2)(f.t3),f.t4=M,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,y=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return R=f.sent,f.t6=M,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,t=(0,f.t6)(f.t7),f.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=f.sent,T={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},E=function(){var h=(0,t.useForm)(),p=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(U,ne){ne.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ne.map(function(re){return re.name}))):v.default.info(JSON.stringify(U))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(t.default,{form:h,schema:T,onMount:p,onFinish:A}),y.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=E,f.abrupt("return",u);case 37:case"end":return f.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return R=function(u,K){if(!K&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(K);if(f&&f.has(u))return f.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(a,p,A):a[p]=u[p]}return a.default=u,f&&f.set(u,a),a},y=function(u){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:K})(u)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=R,T.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return T.t3=T.sent,v=(0,T.t2)(T.t3),t={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,v.useForm)();return o.default.createElement(v.default,{form:u,schema:t})},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,R=function(){return o.default.createElement(v.default,{schema:y.expression})},l.abrupt("return",R);case 16:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M;return C.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return R=function(K,f){if(!f&&K&&K.__esModule)return K;if(K===null||typeof K!="object"&&typeof K!="function")return{default:K};var a=y(f);if(a&&a.has(K))return a.get(K);var h={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in K)if(A!=="default"&&Object.prototype.hasOwnProperty.call(K,A)){var F=p?Object.getOwnPropertyDescriptor(K,A):null;F&&(F.get||F.set)?Object.defineProperty(h,A,F):h[A]=K[A]}return h.default=K,a&&a.set(K,h),h},y=function(K){if(typeof WeakMap!="function")return null;var f=new WeakMap,a=new WeakMap;return(y=function(p){return p?a:f})(K)},E.t0=R,E.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return E.t1=E.sent,d=(0,E.t0)(E.t1),E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=E.sent,E.t2=R,E.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return E.t3=E.sent,v=(0,E.t2)(E.t3),t=function(K){return new Promise(function(f){return setTimeout(f,K)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var K=(0,v.useForm)(),f=function(){K.setValues({input1:"hello world"}),t(3e3).then(function(h){K.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:K,schema:l,onMount:f})},M=s,E.abrupt("return",M);case 20:case"end":return E.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),window.hello=function(M){var T=M.value;console.log(T)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},t=R,s.abrupt("return",t);case 16:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return R=function(u,K){if(!K&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(K);if(f&&f.has(u))return f.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(a,p,A):a[p]=u[p]}return a.default=u,f&&f.set(u,a),a},y=function(u){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:K})(u)},T.t0=R,T.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return T.t1=T.sent,d=(0,T.t0)(T.t1),T.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=T.sent,T.t2=R,T.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return T.t3=T.sent,v=(0,T.t2)(T.t3),t={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,v.useForm)(),K={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return d.default.createElement(v.default,{form:u,schema:t,watch:K})},s=l,T.abrupt("return",s);case 19:case"end":return T.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,a){if(!a&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=t(a);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in f)if(F!=="default"&&Object.prototype.hasOwnProperty.call(f,F)){var U=A?Object.getOwnPropertyDescriptor(f,F):null;U&&(U.get||U.set)?Object.defineProperty(p,F,U):p[F]=f[F]}return p.default=f,h&&h.set(f,p),p},t=function(f){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(A){return A?h:a})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},M=function(){var f=(0,R.useForm)(),a=function(A,F){F.length>0?alert("errorFields:"+JSON.stringify(F)):alert("formData:"+JSON.stringify(A,null,2))},h={input1:function(A){A.length>2?f.setSchemaByPath("obj1.select",function(F){var U=F.enumNames;return{enumNames:U.map(function(ne){return ne+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s,onFinish:a,watch:h}),v.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=M,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M,T,E,u,K;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return M=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=s(A);if(F&&F.has(p))return F.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,F&&F.set(p,U),U},s=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(s=function(ne){return ne?F:A})(p)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=d,a.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.t4=d,a.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=M,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=a.sent,a.t8=M,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),T={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},E=function(p){return console.log("widget props:",p),R.default.createElement(v.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},p))},u=function(){var p=(0,l.useForm)(),A=function(){};return R.default.createElement("div",null,R.default.createElement(l.default,{readOnly:!0,form:p,schema:T,widgets:{site:E},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),R.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},K=u,a.abrupt("return",K);case 40:case"end":return a.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,R=function(){return o.default.createElement(v.default,{schema:y.basic})},l.abrupt("return",R);case 16:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,R=function(){return o.default.createElement(v.default,{schema:y.titleTrick})},l.abrupt("return",R);case 16:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:Te},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:An},"monaco/index.js":{import:"./monaco",content:Rn},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Xe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t,l,s,M;return C.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return d=e("K+nK"),E.t0=d,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,o=(0,E.t0)(E.t1),E.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(v=E.sent,y=[],R=0;R<6;R++)y.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return t={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(K,f){return o.default.createElement("a",{onClick:function(){return alert(K.title)}},"\u7F16\u8F91")}}],s=function(){var K=function(){return{rows:y,total:y.length}};return o.default.createElement(v.TableProvider,null,o.default.createElement(v.Search,{schema:t,api:K}),o.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},M=s,E.abrupt("return",M);case 16:case"end":return E.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(v.default,{defaultValue:y}))},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Be},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var D=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},R1DA:function(Kn,hn,e){"use strict";e.r(hn);var G=e("q1tI"),r=e.n(G),C=e("dEAq"),W=e.n(C),ce=e("0zqC"),L=e("JjdP"),on=r.a.memo(L.default["table-render-advanced"].component);hn.default=De=>(r.a.useEffect(()=>{De!=null&&De.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(De.location.hash.slice(1)))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"}),r.a.createElement(ce.default,L.default["table-render-advanced"].previewerProps,r.a.createElement(on,null)))))},TIsu:function(Kn,hn,e){},Zs1V:function(Kn){Kn.exports=JSON.parse("{}")},p8sG:function(Kn,hn,e){"use strict";Kn.exports=e("80pN")}}]);
