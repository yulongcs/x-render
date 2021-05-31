(window.webpackJsonp=window.webpackJsonp||[]).push([[46,10],{"0zqC":function(Mn,gn,e){"use strict";e.r(gn);var G=e("tJVT"),r=e("q1tI"),C=e.n(r),W=e("wx14"),ce=e("rePB"),L=e("ODXe"),on=e("U8pU"),De=e("Ff2n"),he=e("VTBJ"),rt=e("TSYQ"),Ne=e.n(rt),An=e("Zm9Q"),wn=e("5Z9U"),Rn=e("6cGi"),fn=e("KQm4"),Xe=e("wgJM"),Ln=e("t23M");function Fn(n){var i=Object(r.useRef)(),c=Object(r.useRef)(!1);function y(){for(var O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];c.current||(Xe.a.cancel(i.current),i.current=Object(Xe.a)(function(){n.apply(void 0,g)}))}return Object(r.useEffect)(function(){return function(){c.current=!0,Xe.a.cancel(i.current)}},[]),y}function Sn(n){var i=Object(r.useRef)([]),c=Object(r.useState)({}),y=Object(L.a)(c,2),O=y[1],g=Object(r.useRef)(typeof n=="function"?n():n),S=Fn(function(){var B=g.current;i.current.forEach(function($){B=$(B)}),i.current=[],g.current=B,O({})});function P(B){i.current.push(B),S()}return[g.current,P]}var Fe=e("4IlW");function kn(n,i){var c,y=n.prefixCls,O=n.id,g=n.active,S=n.rtl,P=n.tab,B=P.key,$=P.tab,V=P.disabled,H=P.closeIcon,J=n.tabBarGutter,se=n.tabPosition,Q=n.closable,X=n.renderWrapper,le=n.removeAriaLabel,z=n.editable,q=n.onClick,re=n.onRemove,Y=n.onFocus,oe="".concat(y,"-tab");r.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[S?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=z&&Q!==!1&&!V;function ne(ae){V||q(ae)}function de(ae){ae.preventDefault(),ae.stopPropagation(),z.onEdit("remove",{key:B,event:ae})}var me=r.createElement("div",{key:B,ref:i,className:Ne()(oe,(c={},Object(ce.a)(c,"".concat(oe,"-with-remove"),be),Object(ce.a)(c,"".concat(oe,"-active"),g),Object(ce.a)(c,"".concat(oe,"-disabled"),V),c)),style:k,onClick:ne},r.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(B),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(B),"aria-disabled":V,tabIndex:V?null:0,onClick:function(x){x.stopPropagation(),ne(x)},onKeyDown:function(x){[Fe.a.SPACE,Fe.a.ENTER].includes(x.which)&&(x.preventDefault(),ne(x))},onFocus:Y},$),be&&r.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(x){x.stopPropagation(),de(x)}},H||z.removeIcon||"\xD7"));return X&&(me=X(me)),me}var $n=r.forwardRef(kn),at={width:0,height:0,left:0,top:0};function E(n,i,c){return Object(r.useMemo)(function(){for(var y,O=new Map,g=i.get((y=n[0])===null||y===void 0?void 0:y.key)||at,S=g.left+g.width,P=0;P<n.length;P+=1){var B=n[P].key,$=i.get(B);if(!$){var V;$=i.get((V=n[P-1])===null||V===void 0?void 0:V.key)||at}var H=O.get(B)||Object(he.a)({},$);H.right=S-H.left-H.width,O.set(B,H)}return O},[n.map(function(y){return y.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function I(n,i,c,y,O){var g=O.tabs,S=O.tabPosition,P=O.rtl,B,$,V;["top","bottom"].includes(S)?(B="width",$=P?"right":"left",V=Math.abs(i.left)):(B="height",$="top",V=-i.top);var H=i[B],J=c[B],se=y[B],Q=H;return J+se>H&&(Q=H-se),Object(r.useMemo)(function(){if(!g.length)return[0,0];for(var X=g.length,le=X,z=0;z<X;z+=1){var q=n.get(g[z].key)||D;if(q[$]+q[B]>V+Q){le=z-1;break}}for(var re=0,Y=X-1;Y>=0;Y-=1){var oe=n.get(g[Y].key)||D;if(oe[$]<V){re=Y+1;break}}return[re,le]},[n,V,Q,S,g.map(function(X){return X.key}).join("_"),P])}var d=e("Gytx"),l=e.n(d),p=e("Kwbf");function b(n,i){var c=n.prefixCls,y=n.invalidate,O=n.item,g=n.renderItem,S=n.responsive,P=n.registerSize,B=n.itemKey,$=n.className,V=n.style,H=n.children,J=n.display,se=n.order,Q=n.component,X=Q===void 0?"div":Q,le=Object(De.a)(n,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=S&&!J;function q(be){P(B,be)}r.useEffect(function(){return function(){q(null)}},[]);var re=g&&O!==void 0?g(O):H,Y;y||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:S?se:void 0,pointerEvents:z?"none":void 0});var oe={};z&&(oe["aria-hidden"]=!0);var k=r.createElement(X,Object(W.a)({className:Ne()(!y&&c,$),style:Object(he.a)(Object(he.a)({},Y),V)},oe,le,{ref:i}),re);return S&&(k=r.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var R=r.forwardRef(b);R.displayName="Item";var t=R;function o(){var n=Object(r.useState)({}),i=Object(L.a)(n,2),c=i[1],y=Object(r.useRef)([]),O=Object(r.useRef)(!1),g=0,S=0;Object(r.useEffect)(function(){return function(){O.current=!0}},[]);function P(B){var $=g;g+=1,y.current.length<$+1&&(y.current[$]=B);var V=y.current[$];function H(J){y.current[$]=typeof J=="function"?J(y.current[$]):J,Xe.a.cancel(S),S=Object(Xe.a)(function(){O.current||c({})})}return[V,H]}return P}var s=function(i,c){var y=r.useContext(j);if(!y){var O=i.component,g=O===void 0?"div":O,S=Object(De.a)(i,["component"]);return r.createElement(g,Object(W.a)({},S,{ref:c}))}var P=y.className,B=Object(De.a)(y,["className"]),$=i.className,V=Object(De.a)(i,["className"]);return r.createElement(j.Provider,{value:null},r.createElement(t,Object(W.a)({ref:c,className:Ne()(P,$)},B,V)))},K=r.forwardRef(s);K.displayName="RawItem";var A=K,j=r.createContext(null),u="responsive",w="invalidate";function m(n){return"+ ".concat(n.length," ...")}function a(n,i){var c=n.prefixCls,y=c===void 0?"rc-overflow":c,O=n.data,g=O===void 0?[]:O,S=n.renderItem,P=n.renderRawItem,B=n.itemKey,$=n.itemWidth,V=$===void 0?10:$,H=n.ssr,J=n.style,se=n.className,Q=n.maxCount,X=n.renderRest,le=n.renderRawRest,z=n.suffix,q=n.component,re=q===void 0?"div":q,Y=n.itemComponent,oe=n.onVisibleChange,k=Object(De.a)(n,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=o(),ne=H==="full",de=be(null),me=Object(L.a)(de,2),ae=me[0],x=me[1],ue=ae||0,ye=be(new Map),ve=Object(L.a)(ye,2),Se=ve[0],We=ve[1],Oe=be(0),Re=Object(L.a)(Oe,2),Ae=Re[0],Ke=Re[1],Ie=be(0),Ee=Object(L.a)(Ie,2),$e=Ee[0],qe=Ee[1],Ve=be(0),ze=Object(L.a)(Ve,2),Qe=ze[0],Le=ze[1],jn=Object(r.useState)(null),tn=Object(L.a)(jn,2),Ye=tn[0],ln=tn[1],yn=Object(r.useState)(null),bn=Object(L.a)(yn,2),Te=bn[0],He=bn[1],_e=r.useMemo(function(){return Te===null&&ne?Number.MAX_SAFE_INTEGER:Te||0},[Te,ae]),Ze=Object(r.useState)(!1),Bn=Object(L.a)(Ze,2),zn=Bn[0],Wn=Bn[1],rn="".concat(y,"-item"),Dn=Math.max(Ae,$e),un=g.length&&Q===u,En=Q===w,en=un||typeof Q=="number"&&g.length>Q,an=Object(r.useMemo)(function(){var pe=g;return un?ae===null&&ne?pe=g:pe=g.slice(0,Math.min(g.length,ue/V)):typeof Q=="number"&&(pe=g.slice(0,Q)),pe},[g,V,ae,Q,un]),In=Object(r.useMemo)(function(){return un?g.slice(_e+1):g.slice(an.length)},[g,an,un,_e]),cn=Object(r.useCallback)(function(pe,Pe){var we;return typeof B=="function"?B(pe):(we=B&&(pe==null?void 0:pe[B]))!==null&&we!==void 0?we:Pe},[B]),ke=Object(r.useCallback)(S||function(pe){return pe},[S]);function xe(pe,Pe){He(pe),Pe||(Wn(pe<g.length-1),oe==null||oe(pe))}function Jn(pe,Pe){x(Pe.clientWidth)}function Gn(pe,Pe){We(function(we){var nn=new Map(we);return Pe===null?nn.delete(pe):nn.set(pe,Pe),nn})}function et(pe,Pe){qe(Pe),Ke($e)}function On(pe,Pe){Le(Pe)}function hn(pe){return Se.get(cn(an[pe],pe))}r.useLayoutEffect(function(){if(ue&&Dn&&an){var pe=Qe,Pe=an.length,we=Pe-1;if(!Pe){xe(0),ln(null);return}for(var nn=0;nn<Pe;nn+=1){var Xn=hn(nn);if(Xn===void 0){xe(nn-1,!0);break}if(pe+=Xn,nn===we-1&&pe+hn(we)<=ue){xe(we),ln(null);break}else if(pe+Dn>ue){xe(nn-1),ln(pe-Xn-Qe+$e);break}else if(nn===we){xe(we),ln(pe-Qe);break}}z&&hn(0)+Qe>ue&&ln(null)}},[ue,Se,$e,Qe,cn,an]);var Hn=zn&&!!In.length,Cn={};Ye!==null&&un&&(Cn={position:"absolute",left:Ye,top:0});var mn={prefixCls:rn,responsive:un,component:Y,invalidate:En},xn=P?function(pe,Pe){var we=cn(pe,Pe);return r.createElement(j.Provider,{key:we,value:Object(he.a)(Object(he.a)({},mn),{},{order:Pe,item:pe,itemKey:we,registerSize:Gn,display:Pe<=_e})},P(pe,Pe))}:function(pe,Pe){var we=cn(pe,Pe);return r.createElement(t,Object(W.a)({},mn,{order:Pe,key:we,item:pe,renderItem:ke,itemKey:we,registerSize:Gn,display:Pe<=_e}))},Nn,Qn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Hn};if(le)le&&(Nn=r.createElement(j.Provider,{value:Object(he.a)(Object(he.a)({},mn),Qn)},le(In)));else{var dn=X||m;Nn=r.createElement(t,Object(W.a)({},mn,Qn),typeof dn=="function"?dn(In):dn)}var Tn=r.createElement(re,Object(W.a)({className:Ne()(!En&&y,se),style:J,ref:i},k),an.map(xn),en?Nn:null,z&&r.createElement(t,Object(W.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Cn}),z));return un&&(Tn=r.createElement(Ln.default,{onResize:Jn},Tn)),Tn}var h=r.forwardRef(a);h.displayName="Overflow",h.Item=A,h.RESPONSIVE=u,h.INVALIDATE=w;var v=h,N=v,F=e("1OyB"),U=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),Be=r.createContext(null);function Me(n,i){var c=Object(he.a)({},n);return Object.keys(i).forEach(function(y){var O=i[y];O!==void 0&&(c[y]=O)}),c}function Pn(n){var i=n.children,c=n.locked,y=Object(De.a)(n,["children","locked"]),O=r.useContext(Be),g=Object(pn.a)(function(){return Me(O,y)},[O,y],function(S,P){return!c&&(S[0]!==P[0]||!l()(S[1],P[1]))});return r.createElement(Be.Provider,{value:g},i)}function it(n,i,c,y){var O=r.useContext(Be),g=O.activeKey,S=O.onActive,P=O.onInactive,B={active:g===n};return i||(B.onMouseEnter=function($){c==null||c({key:n,domEvent:$}),S(n)},B.onMouseLeave=function($){y==null||y({key:n,domEvent:$}),P(n)}),B}function qn(n){var i=n.item,c=Object(De.a)(n,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function f(n){var i=n.icon,c=n.props,y=n.children,O;return typeof i=="function"?O=r.createElement(i,Object(he.a)({},c)):O=i,O||y||null}function T(n){var i=r.useContext(Be),c=i.mode,y=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=n;return y?{paddingRight:g*O}:{paddingLeft:g*O}}var M=[],fe=r.createContext(null);function ee(){return r.useContext(fe)}var je=r.createContext(M);function Ue(n){var i=r.useContext(je);return r.useMemo(function(){return n!==void 0?[].concat(Object(fn.a)(i),[n]):i},[i,n])}var Ge=r.createContext(null),zt=r.createContext(null);function Jt(n,i){return n===void 0?null:"".concat(n,"-").concat(i)}function Gt(n){var i=r.useContext(zt);return Jt(i,n)}var br=function(n){Object(_.a)(c,n);var i=Object(ie.a)(c);function c(){return Object(F.a)(this,c),i.apply(this,arguments)}return Object(U.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,S=O.attribute,P=O.elementRef,B=Object(De.a)(O,["title","attribute","elementRef"]),$=Object(ge.a)(B,["eventKey"]);return Object(p.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(N.Item,Object(W.a)({},S,{title:typeof g=="string"?g:void 0},$,{ref:P}))}}]),c}(r.Component),Or=function(i){var c,y=i.style,O=i.className,g=i.eventKey,S=i.disabled,P=i.itemIcon,B=i.children,$=i.role,V=i.onMouseEnter,H=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(De.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Gt(g),z=r.useContext(Be),q=z.prefixCls,re=z.onItemClick,Y=z.disabled,oe=z.overflowDisabled,k=z.itemIcon,be=z.selectedKeys,ne=z.onActive,de="".concat(q,"-item"),me=r.useRef(),ae=r.useRef(),x=Y||S,ue=Ue(g),ye=function(Ve){return{key:g,keyPath:ue,item:me.current,domEvent:Ve}},ve=P||k,Se=it(g,x,V,H),We=Se.active,Oe=Object(De.a)(Se,["active"]),Re=be.includes(g),Ae=T(ue.length),Ke=function(Ve){if(!x){var ze=ye(Ve);J==null||J(qn(ze)),re(ze)}},Ie=function(Ve){if(se==null||se(Ve),Ve.which===Fe.a.ENTER){var ze=ye(Ve);J==null||J(qn(ze)),re(ze)}},Ee=function(Ve){ne(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Re),r.createElement(br,Object(W.a)({ref:me,elementRef:ae,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":oe&&le?null:le},X,Oe,$e,{component:"li","aria-disabled":S,style:Object(he.a)(Object(he.a)({},Ae),y),className:Ne()(de,(c={},Object(ce.a)(c,"".concat(de,"-active"),We),Object(ce.a)(c,"".concat(de,"-selected"),Re),Object(ce.a)(c,"".concat(de,"-disabled"),x),c),O),onClick:Ke,onKeyDown:Ie,onFocus:Ee}),B,r.createElement(f,{props:Object(he.a)(Object(he.a)({},i),{},{isSelected:Re}),icon:ve}))};function Cr(n){var i=n.eventKey,c=ee(),y=Ue(i);return r.useEffect(function(){if(c)return c.registerPath(i,y),function(){c.unregisterPath(i,y)}},[y]),c?null:r.createElement(Or,n)}var Dt=Cr;function Et(n,i){return Object(An.a)(n).map(function(c,y){if(r.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(fn.a)(i),[y]).join("-"))),r.cloneElement(c,{key:O,eventKey:O})}return c})}function _n(n){var i=r.useRef(n);i.current=n;var c=r.useCallback(function(){for(var y,O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];return(y=i.current)===null||y===void 0?void 0:y.call.apply(y,[i].concat(g))},[]);return n?c:void 0}var Rr=function(i,c){var y=i.className,O=i.children,g=Object(De.a)(i,["className","children"]),S=r.useContext(Be),P=S.prefixCls,B=S.mode;return r.createElement("ul",Object(W.a)({className:Ne()(P,"".concat(P,"-sub"),"".concat(P,"-").concat(B==="inline"?"inline":"vertical"),y)},g,{"data-menu-list":!0,ref:c}),O)},Ht=r.forwardRef(Rr);Ht.displayName="SubMenuList";var xt=Ht,Sr=e("uciX"),Vn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Pr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=Qt;function Xt(n,i,c){if(i)return i;if(c)return c[n]||c.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(n){var i=n.prefixCls,c=n.visible,y=n.children,O=n.popup,g=n.popupClassName,S=n.popupOffset,P=n.disabled,B=n.mode,$=n.onVisibleChange,V=r.useContext(Be),H=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,le=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Y=r.useState(!1),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ne=J?Object(he.a)(Object(he.a)({},Pr),X):Object(he.a)(Object(he.a)({},Qt),X),de=jr[B],me=Xt(B,q,re),ae=Object(he.a)(Object(he.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),x=r.useRef();return r.useEffect(function(){return x.current=Object(Xe.a)(function(){be(c)}),function(){Xe.a.cancel(x.current)}},[c]),r.createElement(Sr.a,{prefixCls:i,popupClassName:Ne()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),J),g),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:O,popupAlign:S&&{offset:S},action:P?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:z,popupMotion:ae},y)}var Er=e("8XRh");function Ir(n){var i=n.id,c=n.open,y=n.keyPath,O=n.children,g="inline",S=r.useContext(Be),P=S.prefixCls,B=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,H=S.mode,J=r.useRef(!1);J.current=H===g;var se=r.useState(!J.current),Q=Object(L.a)(se,2),X=Q[0],le=Q[1],z=J.current?c:!1;r.useEffect(function(){J.current&&le(!1)},[H]);var q=Object(he.a)({},Xt(g,$,V));y.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&le(!0),re==null?void 0:re(Y)},X?null:r.createElement(Pn,{mode:g,locked:!J.current},r.createElement(Er.default,Object(W.a)({visible:z},q,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(P,"-hidden")}),function(Y){var oe=Y.className,k=Y.style;return r.createElement(xt,{id:i,className:oe,style:k},O)}))}var Nr=function(i){var c,y=i.style,O=i.className,g=i.title,S=i.eventKey,P=i.disabled,B=i.internalPopupClose,$=i.children,V=i.itemIcon,H=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,le=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Y=Object(De.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(S),k=r.useContext(Be),be=k.prefixCls,ne=k.mode,de=k.openKeys,me=k.disabled,ae=k.overflowDisabled,x=k.activeKey,ue=k.selectedKeys,ye=k.itemIcon,ve=k.expandIcon,Se=k.onItemClick,We=k.onOpenChange,Oe=k.onActive,Re=r.useContext(Ge),Ae=Re.isSubPathKey,Ke=Ue(),Ie="".concat(be,"-submenu"),Ee=me||P,$e=r.useRef(),qe=r.useRef(),Ve=V||ye,ze=H||ve,Qe=de.includes(S),Le=!ae&&Qe,jn=Ae(ue,S),tn=it(S,Ee,q,re),Ye=tn.active,ln=Object(De.a)(tn,["active"]),yn=r.useState(!1),bn=Object(L.a)(yn,2),Te=bn[0],He=bn[1],_e=function(xe){Ee||He(xe)},Ze=function(xe){_e(!0),X==null||X({key:S,domEvent:xe})},Bn=function(xe){_e(!1),le==null||le({key:S,domEvent:xe})},zn=r.useMemo(function(){return Ye||(ne!=="inline"?Te||Ae([x],S):!1)},[ne,Ye,x,Te,S,Ae]),Wn=T(Ke.length),rn=function(xe){Ee||(z==null||z({key:S,domEvent:xe}),ne==="inline"&&We(S,!Qe))},Dn=_n(function(ke){Q==null||Q(qn(ke)),Se(ke)}),un=function(xe){ne!=="inline"&&We(S,xe)},En=function(){Oe(S)},en=oe&&"".concat(oe,"-popup"),an=r.createElement("div",Object(W.a)({role:"menuitem",style:Wn,className:"".concat(Ie,"-title"),tabIndex:Ee?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":ae&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Ee,onClick:rn,onFocus:En},ln),g,r.createElement(f,{icon:ne!=="horizontal"?ze:null,props:Object(he.a)(Object(he.a)({},i),{},{isOpen:Le,isSubMenu:!0})},r.createElement("i",{className:"".concat(Ie,"-arrow")}))),In=r.useRef(ne);if(ne!=="inline"&&(In.current=Ke.length>1?"vertical":ne),!ae){var cn=In.current;an=r.createElement(Dr,{mode:cn,prefixCls:Ie,visible:!B&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:r.createElement(Pn,{mode:cn},r.createElement(xt,{id:en,ref:qe},$)),disabled:Ee,onVisibleChange:un},an)}return r.createElement(Pn,{onItemClick:Dn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:ze},r.createElement(N.Item,Object(W.a)({role:"none"},Y,{component:"li",style:y,className:Ne()(Ie,"".concat(Ie,"-").concat(ne),O,(c={},Object(ce.a)(c,"".concat(Ie,"-open"),Le),Object(ce.a)(c,"".concat(Ie,"-active"),zn),Object(ce.a)(c,"".concat(Ie,"-selected"),jn),Object(ce.a)(c,"".concat(Ie,"-disabled"),Ee),c)),onMouseEnter:Ze,onMouseLeave:Bn}),an,!ae&&r.createElement(Ir,{id:en,open:Le,keyPath:Ke},$)))};function Yt(n){var i=n.eventKey,c=n.children,y=Ue(i),O=Et(c,y),g=ee();r.useEffect(function(){if(g)return g.registerPath(i,y),function(){g.unregisterPath(i,y)}},[y]);var S;return g?S=O:S=r.createElement(Nr,n,O),r.createElement(je.Provider,{value:y},S)}var Tr=e("x/xZ");function Zt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(n)){var c=n.nodeName.toLowerCase(),y=["input","select","textarea","button"].includes(c)||n.isContentEditable||c==="a"&&!!n.getAttribute("href"),O=n.getAttribute("tabindex"),g=Number(O),S=null;return O&&!Number.isNaN(g)?S=g:y&&S===null&&(S=0),y&&n.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(n.querySelectorAll("*")).filter(function(y){return Zt(y,i)});return Zt(n,i)&&c.unshift(n),c}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(n){}}function ga(n,i){if(i.keyCode===9){var c=kt(n),y=c[i.shiftKey?0:c.length-1],O=y===document.activeElement||n===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var It=Fe.a.LEFT,Nt=Fe.a.RIGHT,Tt=Fe.a.UP,ft=Fe.a.DOWN,pt=Fe.a.ENTER,qt=Fe.a.ESC,_t=[Tt,ft,It,Nt];function Kr(n,i,c,y){var O,g,S,P,B="prev",$="next",V="children",H="parent";if(n==="inline"&&y===pt)return{inlineTrigger:!0};var J=(O={},Object(ce.a)(O,Tt,B),Object(ce.a)(O,ft,$),O),se=(g={},Object(ce.a)(g,It,c?$:B),Object(ce.a)(g,Nt,c?B:$),Object(ce.a)(g,ft,V),Object(ce.a)(g,pt,V),g),Q=(S={},Object(ce.a)(S,Tt,B),Object(ce.a)(S,ft,$),Object(ce.a)(S,pt,V),Object(ce.a)(S,qt,H),Object(ce.a)(S,It,c?V:H),Object(ce.a)(S,Nt,c?H:V),S),X={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},le=(P=X["".concat(n).concat(i?"":"Sub")])===null||P===void 0?void 0:P[y];switch(le){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Mr(n){for(var i=n;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ar(n,i){for(var c=n||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function wr(n,i){var c=kt(n,!0);return c.filter(function(y){return i.has(y)})}function er(n,i,c){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var O=wr(n,i),g=O.length,S=O.findIndex(function(P){return c===P});return y<0?S===-1?S=g-1:S-=1:y>0&&(S+=1),S=(S+g)%g,O[S]}function Fr(n,i,c,y,O,g,S,P,B,$){var V=r.useRef(),H=r.useRef();H.current=i;var J=function(){Xe.a.cancel(V.current)};return r.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,le,z,q=function(){X=new Set,le=new Map,z=new Map;var ye=g();return ye.forEach(function(ve){var Se=document.querySelector("[data-menu-id='".concat(Jt(y,ve),"']"));Se&&(X.add(Se),z.set(Se,ve),le.set(ve,Se))}),X};q();var re=le.get(i),Y=Ar(re,X),oe=z.get(Y),k=Kr(n,S(oe,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ye){if(ye){var ve=ye,Se=ye.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(ve=Se);var We=z.get(ye);P(We),J(),V.current=Object(Xe.a)(function(){H.current===We&&ve.focus()})}};if(k.sibling||!Y){var ne;!Y||n==="inline"?ne=O.current:ne=Mr(Y);var de=er(ne,X,Y,k.offset);be(de)}else if(k.inlineTrigger)B(oe);else if(k.offset>0)B(oe,!0),J(),V.current=Object(Xe.a)(function(){q();var ue=Y.getAttribute("aria-controls"),ye=document.getElementById(ue),ve=er(ye,X);be(ve)},5);else if(k.offset<0){var me=S(oe,!0),ae=me[me.length-2],x=le.get(ae);B(ae,!1),be(x)}}$==null||$(se)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(n){var i=Object(Rn.a)(n,{value:n}),c=Object(L.a)(i,2),y=c[0],O=c[1];return r.useEffect(function(){nr+=1;var g="".concat(Br,"-").concat(nr);O("rc-menu-uuid-".concat(g))},[]),y}var ya=e("p8sG");function Lr(n){Promise.resolve().then(n)}var Kt="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(Kt)},$r=function(i){return i.split(Kt)},Mt="rc-menu-more";function Vr(){var n=r.useState({}),i=Object(L.a)(n,2),c=i[1],y=Object(r.useRef)(new Map),O=Object(r.useRef)(new Map),g=r.useState([]),S=Object(L.a)(g,2),P=S[0],B=S[1],$=Object(r.useRef)(0),V=Object(r.useCallback)(function(z,q){var re=tr(q);O.current.set(re,z),y.current.set(z,re),$.current+=1;var Y=$.current;Lr(function(){Y===$.current&&c({})})},[]),H=Object(r.useCallback)(function(z,q){var re=tr(q);O.current.delete(re),y.current.delete(z)},[]),J=Object(r.useCallback)(function(z){B(z)},[]),se=Object(r.useCallback)(function(z,q){var re=y.current.get(z)||"",Y=$r(re);return q&&P.includes(Y[0])&&Y.unshift(Mt),Y},[P]),Q=Object(r.useCallback)(function(z,q){return z.some(function(re){var Y=se(re,!0);return Y.includes(q)})},[se]),X=function(){var q=Object(fn.a)(y.current.keys());return P.length&&q.push(Mt),q},le=Object(r.useCallback)(function(z){var q="".concat(y.current.get(z)).concat(Kt),re=new Set;return Object(fn.a)(O.current.keys()).forEach(function(Y){Y.startsWith(q)&&re.add(O.current.get(Y))}),re},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:le}}var vt=[],Ur=function(i){var c,y,O=i.prefixCls,g=O===void 0?"rc-menu":O,S=i.style,P=i.className,B=i.tabIndex,$=B===void 0?0:B,V=i.children,H=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,le=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Y=i.subMenuCloseDelay,oe=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ne=i.openKeys,de=i.activeKey,me=i.defaultActiveFirst,ae=i.selectable,x=ae===void 0?!0:ae,ue=i.multiple,ye=ue===void 0?!1:ue,ve=i.defaultSelectedKeys,Se=i.selectedKeys,We=i.onSelect,Oe=i.onDeselect,Re=i.inlineIndent,Ae=Re===void 0?24:Re,Ke=i.motion,Ie=i.defaultMotions,Ee=i.triggerSubMenuAction,$e=Ee===void 0?"hover":Ee,qe=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,jn=i.getPopupContainer,tn=i.onClick,Ye=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Te=Object(De.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Et(V,vt),_e=r.useState(!1),Ze=Object(L.a)(_e,2),Bn=Ze[0],zn=Ze[1],Wn=r.useRef(),rn=Wr(J),Dn=H==="rtl",un=r.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),En=Object(L.a)(un,2),en=En[0],an=En[1],In=r.useState(0),cn=Object(L.a)(In,2),ke=cn[0],xe=cn[1],Jn=ke>=He.length-1||en!=="horizontal"||z,Gn=Object(Rn.a)(be,{value:ne,postState:function(Z){return Z||vt}}),et=Object(L.a)(Gn,2),On=et[0],hn=et[1],Hn=r.useState(On),Cn=Object(L.a)(Hn,2),mn=Cn[0],xn=Cn[1],Nn=en==="inline",Qn=r.useRef(!1);r.useEffect(function(){Nn&&xn(On)},[On]),r.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(Nn)hn(mn);else{var te=[];hn(te),Ye==null||Ye(te)}},[Nn]);var dn=Vr(),Tn=dn.registerPath,pe=dn.unregisterPath,Pe=dn.refreshOverflowKeys,we=dn.isSubPathKey,nn=dn.getKeyPath,Xn=dn.getKeys,gt=dn.getSubPathKeys,Bt=r.useMemo(function(){return{registerPath:Tn,unregisterPath:pe}},[Tn,pe]),Wt=r.useMemo(function(){return{isSubPathKey:we}},[we]);r.useEffect(function(){Pe(Jn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(Rn.a)(de||me&&((c=He[0])===null||c===void 0?void 0:c.key),{value:de}),nt=Object(L.a)(Lt,2),yt=nt[0],ot=nt[1],bt=_n(function(te){ot(te)}),$t=_n(function(){ot(void 0)}),Ot=Object(Rn.a)(ve||[],{value:Se,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(Ot,2),tt=Ct[0],Kn=Ct[1],Rt=function(Z){if(!!x){var Ce=Z.key,Je=tt.includes(Ce),sn;Je?sn=tt.filter(function(Zn){return Zn!==Ce}):ye?sn=[].concat(Object(fn.a)(tt),[Ce]):sn=[Ce],Kn(sn);var Un=Object(he.a)(Object(he.a)({},Z),{},{selectedKeys:sn});Je?Oe==null||Oe(Un):We==null||We(Un)}},St=_n(function(te){tn==null||tn(qn(te)),Rt(te)}),lt=_n(function(te,Z){var Ce=On.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}l()(On,Ce)||(hn(Ce),Ye==null||Ye(Ce))}),Yn=_n(jn),ut=function(Z,Ce){var Je=Ce!=null?Ce:!On.includes(Z);lt(Z,Je)},dt=Fr(en,yt,Dn,rn,Wn,Xn,nn,ot,ut,ln);r.useEffect(function(){zn(!0)},[]);var Pt=en!=="horizontal"||z?He:He.map(function(te,Z){return r.createElement(Pn,{key:te.key,overflowDisabled:Z>ke},te)}),jt=r.createElement(N,Object(W.a)({id:J,ref:Wn,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Dt,className:Ne()(g,"".concat(g,"-root"),"".concat(g,"-").concat(en),P,(y={},Object(ce.a)(y,"".concat(g,"-inline-collapsed"),an),Object(ce.a)(y,"".concat(g,"-rtl"),Dn),y)),dir:H,style:S,role:"menu",tabIndex:$,data:Pt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Je=Ce?He.slice(-Ce):null;return r.createElement(Yt,{eventKey:Mt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||z?N.INVALIDATE:N.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:dt},Te));return r.createElement(zt.Provider,{value:rn},r.createElement(Pn,{prefixCls:g,mode:en,openKeys:On,rtl:Dn,disabled:le,motion:Bn?Ke:null,defaultMotions:Bn?Ie:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Ae,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Yn,itemIcon:Ve,expandIcon:ze,onItemClick:St,onOpenChange:lt},r.createElement(Ge.Provider,{value:Wt},jt),r.createElement(fe.Provider,{value:Bt},He)))},zr=Ur,Jr=function(i){var c=i.className,y=i.title,O=i.eventKey,g=i.children,S=Object(De.a)(i,["className","title","eventKey","children"]),P=r.useContext(Be),B=P.prefixCls,$="".concat(B,"-item-group");return r.createElement("li",Object(W.a)({},S,{onClick:function(H){return H.stopPropagation()},className:Ne()($,c)}),r.createElement("div",{className:"".concat($,"-title"),title:typeof y=="string"?y:void 0},y),r.createElement("ul",{className:"".concat($,"-list")},g))};function Gr(n){var i=n.children,c=Object(De.a)(n,["children"]),y=Ue(c.eventKey),O=Et(i,y),g=ee();return g?O:r.createElement(Jr,c,O)}function Hr(n){var i=n.className,c=n.style,y=r.useContext(Be),O=y.prefixCls,g=ee();return g?null:r.createElement("li",{className:Ne()("".concat(O,"-item-divider"),i),style:c})}var st=zr;st.Item=Dt,st.SubMenu=Yt,st.ItemGroup=Gr,st.Divider=Hr;var xr=st,Qr=e("eDIo");function Xr(n,i){var c=n.prefixCls,y=n.editable,O=n.locale,g=n.style;return!y||y.showAdd===!1?null:r.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(P){y.onEdit("add",{event:P})}},y.addIcon||"+")}var rr=r.forwardRef(Xr);function Yr(n,i){var c=n.prefixCls,y=n.id,O=n.tabs,g=n.locale,S=n.mobile,P=n.moreIcon,B=P===void 0?"More":P,$=n.moreTransitionName,V=n.style,H=n.className,J=n.editable,se=n.tabBarGutter,Q=n.rtl,X=n.onTabClick,le=Object(r.useState)(!1),z=Object(L.a)(le,2),q=z[0],re=z[1],Y=Object(r.useState)(null),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ne="".concat(y,"-more-popup"),de="".concat(c,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,ae=g==null?void 0:g.dropdownAriaLabel,x=r.createElement(xr,{onClick:function(Re){var Ae=Re.key,Ke=Re.domEvent;X(Ae,Ke),re(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ae!==void 0?ae:"expanded dropdown"},O.map(function(Oe){return r.createElement(Dt,{key:Oe.key,id:"".concat(ne,"-").concat(Oe.key),role:"option","aria-controls":y&&"".concat(y,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function ue(Oe){for(var Re=O.filter(function($e){return!$e.disabled}),Ae=Re.findIndex(function($e){return $e.key===k})||0,Ke=Re.length,Ie=0;Ie<Ke;Ie+=1){Ae=(Ae+Oe+Ke)%Ke;var Ee=Re[Ae];if(!Ee.disabled){be(Ee.key);return}}}function ye(Oe){var Re=Oe.which;if(!q){[Fe.a.DOWN,Fe.a.SPACE,Fe.a.ENTER].includes(Re)&&(re(!0),Oe.preventDefault());return}switch(Re){case Fe.a.UP:ue(-1),Oe.preventDefault();break;case Fe.a.DOWN:ue(1),Oe.preventDefault();break;case Fe.a.ESC:re(!1);break;case Fe.a.SPACE:case Fe.a.ENTER:k!==null&&X(k,Oe);break}}Object(r.useEffect)(function(){var Oe=document.getElementById(me);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[k]),Object(r.useEffect)(function(){q||be(null)},[q]);var ve=Object(ce.a)({},Q?"marginLeft":"marginRight",se);O.length||(ve.visibility="hidden",ve.order=1);var Se=Ne()(Object(ce.a)({},"".concat(de,"-rtl"),Q)),We=S?null:r.createElement(Qr.default,{prefixCls:de,overlay:x,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},r.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(y,"-more"),"aria-expanded":q,onKeyDown:ye},B));return r.createElement("div",{className:Ne()("".concat(c,"-nav-operations"),H),style:V,ref:i},We,r.createElement(rr,{prefixCls:c,locale:g,editable:J}))}var Zr=r.forwardRef(Yr),At=Object(r.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(n,i){var c=Object(r.useState)(),y=Object(L.a)(c,2),O=y[0],g=y[1],S=Object(r.useState)(0),P=Object(L.a)(S,2),B=P[0],$=P[1],V=Object(r.useState)(0),H=Object(L.a)(V,2),J=H[0],se=H[1],Q=Object(r.useState)(),X=Object(L.a)(Q,2),le=X[0],z=X[1],q=Object(r.useRef)();function re(de){var me=de.touches[0],ae=me.screenX,x=me.screenY;g({x:ae,y:x}),window.clearInterval(q.current)}function Y(de){if(!!O){de.preventDefault();var me=de.touches[0],ae=me.screenX,x=me.screenY;g({x:ae,y:x});var ue=ae-O.x,ye=x-O.y;i(ue,ye);var ve=Date.now();$(ve),se(ve-B),z({x:ue,y:ye})}}function oe(){if(!!O&&(g(null),z(null),le)){var de=le.x/J,me=le.y/J,ae=Math.abs(de),x=Math.abs(me);if(Math.max(ae,x)<kr)return;var ue=de,ye=me;q.current=window.setInterval(function(){if(Math.abs(ue)<ar&&Math.abs(ye)<ar){window.clearInterval(q.current);return}ue*=ir,ye*=ir,i(ue*ht,ye*ht)},ht)}}var k=Object(r.useRef)();function be(de){var me=de.deltaX,ae=de.deltaY,x=0,ue=Math.abs(me),ye=Math.abs(ae);ue===ye?x=k.current==="x"?me:ae:ue>ye?(x=me,k.current="x"):(x=ae,k.current="y"),i(-x,-x)&&de.preventDefault()}var ne=Object(r.useRef)(null);ne.current={onTouchStart:re,onTouchMove:Y,onTouchEnd:oe,onWheel:be},r.useEffect(function(){function de(ue){ne.current.onTouchStart(ue)}function me(ue){ne.current.onTouchMove(ue)}function ae(ue){ne.current.onTouchEnd(ue)}function x(ue){ne.current.onWheel(ue)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ae,{passive:!1}),n.current.addEventListener("touchstart",de,{passive:!1}),n.current.addEventListener("wheel",x),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ae)}},[])}function _r(){var n=Object(r.useRef)(new Map);function i(y){return n.current.has(y)||n.current.set(y,r.createRef()),n.current.get(y)}function c(y){n.current.delete(y)}return[i,c]}function sr(n,i){var c=r.useRef(n),y=r.useState({}),O=Object(L.a)(y,2),g=O[1];function S(P){var B=typeof P=="function"?P(c.current):P;B!==c.current&&i(B,c.current),c.current=B,g({})}return[c.current,S]}var or=function(i){var c=i.position,y=i.prefixCls,O=i.extra;if(!O)return null;var g,S=O;return c==="right"&&(g=S.right||!S.left&&S||null),c==="left"&&(g=S.left||null),g?r.createElement("div",{className:"".concat(y,"-extra-content")},g):null};function ea(n,i){var c,y=r.useContext(At),O=y.prefixCls,g=y.tabs,S=n.className,P=n.style,B=n.id,$=n.animated,V=n.activeKey,H=n.rtl,J=n.extra,se=n.editable,Q=n.locale,X=n.tabPosition,le=n.tabBarGutter,z=n.children,q=n.onTabClick,re=n.onTabScroll,Y=Object(r.useRef)(),oe=Object(r.useRef)(),k=Object(r.useRef)(),be=Object(r.useRef)(),ne=_r(),de=Object(L.a)(ne,2),me=de[0],ae=de[1],x=X==="top"||X==="bottom",ue=sr(0,function(te,Z){x&&re&&re({direction:te>Z?"left":"right"})}),ye=Object(L.a)(ue,2),ve=ye[0],Se=ye[1],We=sr(0,function(te,Z){!x&&re&&re({direction:te>Z?"top":"bottom"})}),Oe=Object(L.a)(We,2),Re=Oe[0],Ae=Oe[1],Ke=Object(r.useState)(0),Ie=Object(L.a)(Ke,2),Ee=Ie[0],$e=Ie[1],qe=Object(r.useState)(0),Ve=Object(L.a)(qe,2),ze=Ve[0],Qe=Ve[1],Le=Object(r.useState)(0),jn=Object(L.a)(Le,2),tn=jn[0],Ye=jn[1],ln=Object(r.useState)(0),yn=Object(L.a)(ln,2),bn=yn[0],Te=yn[1],He=Object(r.useState)(null),_e=Object(L.a)(He,2),Ze=_e[0],Bn=_e[1],zn=Object(r.useState)(null),Wn=Object(L.a)(zn,2),rn=Wn[0],Dn=Wn[1],un=Object(r.useState)(0),En=Object(L.a)(un,2),en=En[0],an=En[1],In=Object(r.useState)(0),cn=Object(L.a)(In,2),ke=cn[0],xe=cn[1],Jn=Sn(new Map),Gn=Object(L.a)(Jn,2),et=Gn[0],On=Gn[1],hn=E(g,et,Ee),Hn="".concat(O,"-nav-operations-hidden"),Cn=0,mn=0;x?H?(Cn=0,mn=Math.max(0,Ee-Ze)):(Cn=Math.min(0,Ze-Ee),mn=0):(Cn=Math.min(0,rn-ze),mn=0);function xn(te){return te<Cn?Cn:te>mn?mn:te}var Nn=Object(r.useRef)(),Qn=Object(r.useState)(),dn=Object(L.a)(Qn,2),Tn=dn[0],pe=dn[1];function Pe(){pe(Date.now())}function we(){window.clearTimeout(Nn.current)}qr(Y,function(te,Z){function Ce(Je,sn){Je(function(Un){var Zn=xn(Un+sn);return Zn})}if(x){if(Ze>=Ee)return!1;Ce(Se,te)}else{if(rn>=ze)return!1;Ce(Ae,Z)}return we(),Pe(),!0}),Object(r.useEffect)(function(){return we(),Tn&&(Nn.current=window.setTimeout(function(){pe(0)},100)),we},[Tn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(x){var Ce=ve;H?Z.right<ve?Ce=Z.right:Z.right+Z.width>ve+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-ve?Ce=-Z.left:Z.left+Z.width>-ve+Ze&&(Ce=-(Z.left+Z.width-Ze)),Ae(0),Se(xn(Ce))}else{var Je=Re;Z.top<-Re?Je=-Z.top:Z.top+Z.height>-Re+rn&&(Je=-(Z.top+Z.height-rn)),Se(0),Ae(xn(Je))}}var Xn=I(hn,{width:Ze,height:rn,left:ve,top:Re},{width:tn,height:bn},{width:en,height:ke},Object(he.a)(Object(he.a)({},n),{},{tabs:g})),gt=Object(L.a)(Xn,2),Bt=gt[0],Wt=gt[1],Lt=g.map(function(te){var Z=te.key;return r.createElement($n,{id:B,prefixCls:O,key:Z,rtl:H,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:X,tabBarGutter:le,renderWrapper:z,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){ae(Z)},onFocus:function(){nn(Z),Pe(),H||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),nt=Fn(function(){var te,Z,Ce,Je,sn,Un,Zn,Vt,Ut,la=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ua=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Bn(la),Dn(ua),an(mr),xe(fr);var pr=(((Zn=oe.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Qe(vr);var hr=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Hn);Ye(pr-(hr?0:da)),Te(vr-(hr?0:ca)),On(function(){var gr=new Map;return g.forEach(function(ma){var yr=ma.key,ct=me(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=g.slice(0,Bt),ot=g.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(r.useState)(),Ot=Object(L.a)($t,2),Ct=Ot[0],tt=Ot[1],Kn=hn.get(V),Rt=Object(r.useRef)();function St(){Xe.a.cancel(Rt.current)}Object(r.useEffect)(function(){var te={};return Kn&&(x?(H?te.right=Kn.right:te.left=Kn.left,te.width=Kn.width):(te.top=Kn.top,te.height=Kn.height)),St(),Rt.current=Object(Xe.a)(function(){tt(te)}),St},[Kn,x,H]),Object(r.useEffect)(function(){nn()},[V,Kn,hn,x]),Object(r.useEffect)(function(){nt()},[H,le,V,g.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,Yn="".concat(O,"-nav-wrap"),ut,dt,Pt,jt;return x?H?(dt=ve>0,ut=ve+Ze<Ee):(ut=ve<0,dt=-ve+Ze<Ee):(Pt=Re<0,jt=-Re+rn<ze),r.createElement("div",{ref:i,role:"tablist",className:Ne()("".concat(O,"-nav"),S),style:P,onKeyDown:function(){Pe()}},r.createElement(or,{position:"left",extra:J,prefixCls:O}),r.createElement(Ln.default,{onResize:nt},r.createElement("div",{className:Ne()(Yn,(c={},Object(ce.a)(c,"".concat(Yn,"-ping-left"),ut),Object(ce.a)(c,"".concat(Yn,"-ping-right"),dt),Object(ce.a)(c,"".concat(Yn,"-ping-top"),Pt),Object(ce.a)(c,"".concat(Yn,"-ping-bottom"),jt),c)),ref:Y},r.createElement(Ln.default,{onResize:nt},r.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Re,"px)"),transition:Tn?"none":void 0}},Lt,r.createElement(rr,{ref:be,prefixCls:O,locale:Q,editable:se,style:{visibility:lt?"hidden":null}}),r.createElement("div",{className:Ne()("".concat(O,"-ink-bar"),Object(ce.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),r.createElement(Zr,Object(W.a)({},n,{ref:k,prefixCls:O,tabs:bt,className:!lt&&Hn})),r.createElement(or,{position:"right",extra:J,prefixCls:O}))}var lr=r.forwardRef(ea);function na(n){var i=n.id,c=n.activeKey,y=n.animated,O=n.tabPosition,g=n.rtl,S=n.destroyInactiveTabPane,P=r.useContext(At),B=P.prefixCls,$=P.tabs,V=y.tabPane,H=$.findIndex(function(J){return J.key===c});return r.createElement("div",{className:Ne()("".concat(B,"-content-holder"))},r.createElement("div",{className:Ne()("".concat(B,"-content"),"".concat(B,"-content-").concat(O),Object(ce.a)({},"".concat(B,"-content-animated"),V)),style:H&&V?Object(ce.a)({},g?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(J){return r.cloneElement(J.node,{key:J.key,prefixCls:B,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:S})})))}function ur(n){var i=n.prefixCls,c=n.forceRender,y=n.className,O=n.style,g=n.id,S=n.active,P=n.animated,B=n.destroyInactiveTabPane,$=n.tabKey,V=n.children,H=r.useState(c),J=Object(L.a)(H,2),se=J[0],Q=J[1];r.useEffect(function(){S?Q(!0):B&&Q(!1)},[S,B]);var X={};return S||(P?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),r.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!S,style:Object(he.a)(Object(he.a)({},X),O),className:Ne()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),y)},(S||se||c)&&V)}var dr=0;function ta(n){return Object(An.a)(n).map(function(i){if(r.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(he.a)(Object(he.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(n,i){var c,y=n.id,O=n.prefixCls,g=O===void 0?"rc-tabs":O,S=n.className,P=n.children,B=n.direction,$=n.activeKey,V=n.defaultActiveKey,H=n.editable,J=n.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=n.tabPosition,X=Q===void 0?"top":Q,le=n.tabBarGutter,z=n.tabBarStyle,q=n.tabBarExtraContent,re=n.locale,Y=n.moreIcon,oe=n.moreTransitionName,k=n.destroyInactiveTabPane,be=n.renderTabBar,ne=n.onChange,de=n.onTabClick,me=n.onTabScroll,ae=Object(De.a)(n,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),x=ta(P),ue=B==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(he.a)({inkBar:!0,tabPane:!1},Object(on.a)(se)==="object"?se:{});var ve=Object(r.useState)(!1),Se=Object(L.a)(ve,2),We=Se[0],Oe=Se[1];Object(r.useEffect)(function(){Oe(Object(wn.a)())},[]);var Re=Object(Rn.a)(function(){var Te;return(Te=x[0])===null||Te===void 0?void 0:Te.key},{value:$,defaultValue:V}),Ae=Object(L.a)(Re,2),Ke=Ae[0],Ie=Ae[1],Ee=Object(r.useState)(function(){return x.findIndex(function(Te){return Te.key===Ke})}),$e=Object(L.a)(Ee,2),qe=$e[0],Ve=$e[1];Object(r.useEffect)(function(){var Te=x.findIndex(function(_e){return _e.key===Ke});if(Te===-1){var He;Te=Math.max(0,Math.min(qe,x.length-1)),Ie((He=x[Te])===null||He===void 0?void 0:He.key)}Ve(Te)},[x.map(function(Te){return Te.key}).join("_"),Ke,qe]);var ze=Object(Rn.a)(null,{value:y}),Qe=Object(L.a)(ze,2),Le=Qe[0],jn=Qe[1],tn=X;We&&!["left","right"].includes(X)&&(tn="top"),Object(r.useEffect)(function(){y||(jn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ye(Te,He){de==null||de(Te,He),Ie(Te),ne==null||ne(Te)}var ln={id:Le,activeKey:Ke,animated:ye,tabPosition:tn,rtl:ue,mobile:We},yn,bn=Object(he.a)(Object(he.a)({},ln),{},{editable:H,locale:re,moreIcon:Y,moreTransitionName:oe,tabBarGutter:le,onTabClick:Ye,onTabScroll:me,extra:q,style:z,panes:P});return be?yn=be(bn,lr):yn=r.createElement(lr,bn),r.createElement(At.Provider,{value:{tabs:x,prefixCls:g}},r.createElement("div",Object(W.a)({ref:i,id:y,className:Ne()(g,"".concat(g,"-").concat(tn),(c={},Object(ce.a)(c,"".concat(g,"-mobile"),We),Object(ce.a)(c,"".concat(g,"-editable"),H),Object(ce.a)(c,"".concat(g,"-rtl"),ue),c),S)},ae),yn,r.createElement(na,Object(W.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var cr=r.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,wt=e("MZF8"),vn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function Ft(n,i){var c,y=(c=n.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return y||(y=i.tsx?"tsx":"jsx"),y}var oa=n=>{var i,c,y,O=Object(r.useRef)(),g=Object(r.useContext)(vn.context),S=g.locale,P=Object(vn.useLocaleProps)(S,n),B=Object(vn.useDemoUrl)(P.identifier),$=P.demoUrl||B,V=(wt.a===null||wt.a===void 0?void 0:wt.a.location.hash)==="#".concat(P.identifier),H=Object.keys(P.sources).length===1,J=Object(vn.useCodeSandbox)((i=P.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:P),se=Object(vn.useRiddle)((c=P.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:P),Q=Object(vn.useMotions)(P.motions||[],O.current),X=Object(G.default)(Q,2),le=X[0],z=X[1],q=Object(vn.useCopy)(),re=Object(G.default)(q,2),Y=re[0],oe=re[1],k=Object(r.useState)("_"),be=Object(G.default)(k,2),ne=be[0],de=be[1],me=Object(r.useState)(Ft(ne,P.sources[ne])),ae=Object(G.default)(me,2),x=ae[0],ue=ae[1],ye=Object(r.useState)(Boolean(P.defaultShowCode)),ve=Object(G.default)(ye,2),Se=ve[0],We=ve[1],Oe=Object(r.useState)(Math.random()),Re=Object(G.default)(Oe,2),Ae=Re[0],Ke=Re[1],Ie=P.sources[ne][x]||P.sources[ne].content,Ee=Object(vn.useTSPlaygroundUrl)(S,Ie),$e=Object(r.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(G.default)(qe,1),ze=Ve[0];Object(r.useEffect)(()=>{Ke(Math.random())},[ze]);function Qe(Le){de(Le),ue(Ft(Le,P.sources[Le]))}return C.a.createElement("div",{style:P.style,className:[P.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:P.identifier,"data-debug":P.debug||void 0,"data-iframe":P.iframe||void 0},P.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:P.transform?"translate(0, 0)":void 0,padding:P.compact||P.iframe&&P.compact!==!1?"0":void 0,background:P.background}},P.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(P.iframe).replace(/(\d)$/,"$1px")},key:Ae,src:$,ref:$e}):P.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":P.title},P.title&&C.a.createElement(vn.AnchorLink,{to:"#".concat(P.identifier)},P.title),P.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:P.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),P.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>le()}),P.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ke(Math.random())}),!((y=P.hideActions)!==null&&y!==void 0&&y.includes("EXTERNAL"))&&C.a.createElement(vn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Y(Ie)}),x==="tsx"&&Se&&C.a.createElement(vn.Link,{target:"_blank",to:Ee},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Se)})),Se&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&C.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Qe},Object.keys(P.sources).map(Le=>C.a.createElement(ur,{tab:Le==="_"?"index.".concat(Ft(Le,P.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sa.a,{code:Ie,lang:x,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(Mn,gn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var r=e("MgzW"),C=e("q1tI"),W=e("i8i4"),ce=e("QCnb");function L(f){for(var T="https://reactjs.org/docs/error-decoder.html?invariant="+f,M=1;M<arguments.length;M++)T+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+f+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var on=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;on.hasOwnProperty("ReactCurrentDispatcher")||(on.ReactCurrentDispatcher={current:null}),on.hasOwnProperty("ReactCurrentBatchConfig")||(on.ReactCurrentBatchConfig={suspense:null});function De(f){var T=f,M=f;if(f.alternate)for(;T.return;)T=T.return;else{f=T;do T=f,(T.effectTag&1026)!=0&&(M=T.return),f=T.return;while(f)}return T.tag===3?M:null}function he(f){if(De(f)!==f)throw Error(L(188))}function rt(f){var T=f.alternate;if(!T){if(T=De(f),T===null)throw Error(L(188));return T!==f?null:f}for(var M=f,fe=T;;){var ee=M.return;if(ee===null)break;var je=ee.alternate;if(je===null){if(fe=ee.return,fe!==null){M=fe;continue}break}if(ee.child===je.child){for(je=ee.child;je;){if(je===M)return he(ee),f;if(je===fe)return he(ee),T;je=je.sibling}throw Error(L(188))}if(M.return!==fe.return)M=ee,fe=je;else{for(var Ue=!1,Ge=ee.child;Ge;){if(Ge===M){Ue=!0,M=ee,fe=je;break}if(Ge===fe){Ue=!0,fe=ee,M=je;break}Ge=Ge.sibling}if(!Ue){for(Ge=je.child;Ge;){if(Ge===M){Ue=!0,M=je,fe=ee;break}if(Ge===fe){Ue=!0,fe=je,M=ee;break}Ge=Ge.sibling}if(!Ue)throw Error(L(189))}}if(M.alternate!==fe)throw Error(L(190))}if(M.tag!==3)throw Error(L(188));return M.stateNode.current===M?f:T}function Ne(){return!0}function An(){return!1}function wn(f,T,M,fe){this.dispatchConfig=f,this._targetInst=T,this.nativeEvent=M,f=this.constructor.Interface;for(var ee in f)f.hasOwnProperty(ee)&&((T=f[ee])?this[ee]=T(M):ee==="target"?this.target=fe:this[ee]=M[ee]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ne:An,this.isPropagationStopped=An,this}r(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Ne)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Ne)},persist:function(){this.isPersistent=Ne},isPersistent:An,destructor:function(){var f=this.constructor.Interface,T;for(T in f)this[T]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=An,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(f){function T(){}function M(){return fe.apply(this,arguments)}var fe=this;T.prototype=fe.prototype;var ee=new T;return r(ee,M.prototype),M.prototype=ee,M.prototype.constructor=M,M.Interface=r({},fe.Interface,f),M.extend=fe.extend,Xe(M),M},Xe(wn);function Rn(f,T,M,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,f,T,M,fe),ee}return new this(f,T,M,fe)}function fn(f){if(!(f instanceof this))throw Error(L(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Xe(f){f.eventPool=[],f.getPooled=Rn,f.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Fn(f,T){var M={};return M[f.toLowerCase()]=T.toLowerCase(),M["Webkit"+f]="webkit"+T,M["Moz"+f]="moz"+T,M}var Sn={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionend:Fn("Transition","TransitionEnd")},Fe={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function $n(f){if(Fe[f])return Fe[f];if(!Sn[f])return f;var T=Sn[f],M;for(M in T)if(T.hasOwnProperty(M)&&M in kn)return Fe[f]=T[M];return f}var at=$n("animationend"),E=$n("animationiteration"),D=$n("animationstart"),I=$n("transitionend"),d=null;function l(f){if(d===null)try{var T=("require"+Math.random()).slice(0,7);d=(G&&G[T])("timers").setImmediate}catch(M){d=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return d(f)}var p=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=p[11],R=p[12],t=W.unstable_batchedUpdates,o=on.IsSomeRendererActing,s=typeof ce.unstable_flushAllWithoutAsserting=="function",K=ce.unstable_flushAllWithoutAsserting||function(){for(var f=!1;b();)f=!0;return f};function A(f){try{K(),l(function(){K()?A(f):f()})}catch(T){f(T)}}var j=0,u=!1,w=W.findDOMNode,m=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=m[0],h=m[4],v=m[5],N=m[6],F=m[7],U=m[8],_=m[9],ie=m[10];function ge(){}function pn(f,T){if(!f)return[];if(f=rt(f),!f)return[];for(var M=f,fe=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var ee=M.stateNode;T(ee)&&fe.push(ee)}if(M.child)M.child.return=M,M=M.child;else{if(M===f)return fe;for(;!M.sibling;){if(!M.return||M.return===f)return fe;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function Be(f,T){if(f&&!f._reactInternalFiber){var M=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":M,Error(L(286,T,f))}}var Me={renderIntoDocument:function(f){var T=document.createElement("div");return W.render(f,T)},isElement:function(f){return C.isValidElement(f)},isElementOfType:function(f,T){return C.isValidElement(f)&&f.type===T},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&C.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Me.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,T){return Me.isCompositeComponent(f)?f._reactInternalFiber.type===T:!1},findAllInRenderedTree:function(f,T){return Be(f,"findAllInRenderedTree"),f?pn(f._reactInternalFiber,T):[]},scryRenderedDOMComponentsWithClass:function(f,T){return Be(f,"scryRenderedDOMComponentsWithClass"),Me.findAllInRenderedTree(f,function(M){if(Me.isDOMComponent(M)){var fe=M.className;typeof fe!="string"&&(fe=M.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(T)){if(T===void 0)throw Error(L(11));T=T.split(/\s+/)}return T.every(function(je){return ee.indexOf(je)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,T){if(Be(f,"findRenderedDOMComponentWithClass"),f=Me.scryRenderedDOMComponentsWithClass(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+T);return f[0]},scryRenderedDOMComponentsWithTag:function(f,T){return Be(f,"scryRenderedDOMComponentsWithTag"),Me.findAllInRenderedTree(f,function(M){return Me.isDOMComponent(M)&&M.tagName.toUpperCase()===T.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,T){if(Be(f,"findRenderedDOMComponentWithTag"),f=Me.scryRenderedDOMComponentsWithTag(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+T);return f[0]},scryRenderedComponentsWithType:function(f,T){return Be(f,"scryRenderedComponentsWithType"),Me.findAllInRenderedTree(f,function(M){return Me.isCompositeComponentWithType(M,T)})},findRenderedComponentWithType:function(f,T){if(Be(f,"findRenderedComponentWithType"),f=Me.scryRenderedComponentsWithType(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+T);return f[0]},mockComponent:function(f,T){return T=T||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return C.createElement(T,null,this.props.children)}),this},nativeTouchData:function(f,T){return{touches:[{pageX:f,pageY:T}]}},Simulate:null,SimulateNative:{},act:function(f){function T(){j--,o.current=M,R.current=fe}u===!1&&(u=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),j++;var M=o.current,fe=R.current;o.current=!0,R.current=!0;try{var ee=t(f)}catch(je){throw T(),je}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(je,Ue){ee.then(function(){1<j||s===!0&&M===!0?(T(),je()):A(function(Ge){T(),Ge?Ue(Ge):je()})},function(Ge){T(),Ue(Ge)})}};try{j!==1||s!==!1&&M!==!1||K(),T()}catch(je){throw T(),je}return{then:function(je){je()}}}};function Pn(f){return function(T,M){if(C.isValidElement(T))throw Error(L(228));if(Me.isCompositeComponent(T))throw Error(L(229));var fe=h[f],ee=new ge;ee.target=T,ee.type=f.toLowerCase();var je=a(T),Ue=new wn(fe,je,ee,T);Ue.persist(),r(Ue,M),fe.phasedRegistrationNames?v(Ue):N(Ue),W.unstable_batchedUpdates(function(){F(T),ie(Ue)}),U()}}Me.Simulate={};for(var it in h)Me.Simulate[it]=Pn(it);function qn(f,T){return function(M,fe){var ee=new ge(f);r(ee,fe),Me.isDOMComponent(M)?(M=w(M),ee.target=M,_(T,1,document,ee)):M.tagName&&(ee.target=M,_(T,1,document,ee))}}[["abort","abort"],[at,"animationEnd"],[E,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var T=f[1];Me.SimulateNative[T]=qn(T,f[0])}),G.exports=Me.default||Me}).call(this,e("hOG+")(Mn))},JjdP:function(Mn,gn,e){"use strict";e.r(gn);var G=e("9og8"),r=e("WmNS"),C=e.n(r),W=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Root;`,Ne=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,An=`{
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

export default Demo;`,Fn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Fe=`import React from 'react';
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
          },
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
}`,at=gn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o;return C.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return t=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var w=R(u);if(w&&w.has(j))return w.get(j);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in j)if(h!=="default"&&Object.prototype.hasOwnProperty.call(j,h)){var v=a?Object.getOwnPropertyDescriptor(j,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=j[h]}return m.default=j,w&&w.set(j,m),m},R=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,w=new WeakMap;return(R=function(a){return a?w:u})(j)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=t,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,p=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=K.sent,o=function(){var j=(0,p.useState)("Line"),u=(0,l.default)(j,2),w=u[0],m=u[1],a={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[w];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},K.abrupt("return",o);case 18:case"end":return K.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(K,A,j){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},K),l.default.createElement("p",null,JSON.stringify(A)),l.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o;return C.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return t=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var w=R(u);if(w&&w.has(j))return w.get(j);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in j)if(h!=="default"&&Object.prototype.hasOwnProperty.call(j,h)){var v=a?Object.getOwnPropertyDescriptor(j,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=j[h]}return m.default=j,w&&w.set(j,m),m},R=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,w=new WeakMap;return(R=function(a){return a?w:u})(j)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=t,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,p=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=K.sent,o=function(){var j=(0,p.useState)(!1),u=(0,l.default)(j,2),w=u[0],m=u[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:w,onChange:function(){return m(!w)}})),p.default.createElement(b.PivotTable,{leftExpandable:w,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},K.abrupt("return",o);case 18:case"end":return K.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A,j,u,w,m;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return j=function(N,F){if(!F&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var U=A(F);if(U&&U.has(N))return U.get(N);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in N)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(N,ge)){var pn=ie?Object.getOwnPropertyDescriptor(N,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=N[ge]}return _.default=N,U&&U.set(N,_),_},A=function(N){if(typeof WeakMap!="function")return null;var F=new WeakMap,U=new WeakMap;return(A=function(ie){return ie?U:F})(N)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,l=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,R=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,t=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,o=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=j,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,K=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(v){(0,R.default)(F,v);var N=(0,t.default)(F);function F(){return(0,p.default)(this,F),N.apply(this,arguments)}return(0,b.default)(F,[{key:"render",value:function(){var _=this.props.form;return o.default.createElement("div",null,o.default.createElement(K.default,{form:_,schema:u}),o.default.createElement(l.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),F}(o.default.Component),m=(0,K.connectForm)(w),h.abrupt("return",m);case 47:case"end":return h.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=t(a);if(h&&h.has(m))return h.get(m);var v={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in m)if(F!=="default"&&Object.prototype.hasOwnProperty.call(m,F)){var U=N?Object.getOwnPropertyDescriptor(m,F):null;U&&(U.get||U.set)?Object.defineProperty(v,F,U):v[F]=m[F]}return v.default=m,h&&h.set(m,v),v},t=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(N){return N?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(){var m=(0,R.useForm)();return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},A=K,u.abrupt("return",A);case 27:case"end":return u.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=t(a);if(h&&h.has(m))return h.get(m);var v={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in m)if(F!=="default"&&Object.prototype.hasOwnProperty.call(m,F)){var U=N?Object.getOwnPropertyDescriptor(m,F):null;U&&(U.get||U.set)?Object.defineProperty(v,F,U):v[F]=m[F]}return v.default=m,h&&h.set(m,v),v},t=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(N){return N?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},K=function(){var m=(0,R.useForm)(),a=function(v,N){N.length>0?alert("errors:"+JSON.stringify(N)):alert("formData:"+JSON.stringify(v,null,2))};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:a}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},A=K,u.abrupt("return",A);case 27:case"end":return u.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return o=function(){var u=(0,p.useForm)(),w=function(a,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(a))};return l.default.createElement("div",null,l.default.createElement(p.default,{form:u,schema:t,onFinish:w}),l.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},R=function(u,w){if(!w&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(w);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var N=h?Object.getOwnPropertyDescriptor(u,v):null;N&&(N.get||N.set)?Object.defineProperty(a,v,N):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var w=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:w})(u)},d=e("K+nK"),A.t0=d,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=R,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,p=(0,A.t2)(A.t3),t={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=o,A.abrupt("return",s);case 17:case"end":return A.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b=function(K){return{type:"object",displayType:K,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(p.default,{schema:b("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(p.default,{schema:b("column")}))},o.abrupt("return",R);case 14:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return l.default.createElement(p.default,{schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{readOnly:!0,schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{labelWidth:"200",schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A,j,u,w;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return j=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var F=A(N);if(F&&F.has(v))return F.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,F&&F.set(v,U),U},A=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,F=new WeakMap;return(A=function(_){return _?F:N})(v)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.t8=j,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,t=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return o=a.sent,a.t10=j,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,s=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return K=a.sent,u=function(){var v=(0,s.useForm)(),N=(0,t.useState)({}),F=(0,R.default)(N,2),U=F[0],_=F[1],ie=function(){(0,K.fakeApi)("xxx/getForm").then(function(Be){v.setValues({input1:"hello world",select1:"c"})})};(0,t.useEffect)(function(){(0,K.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(Be,Me){Me.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Me.map(function(Pn){return Pn.name}))):(0,K.fakeApi)("xxx/submit",Be).then(function(Pn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return t.default.createElement("div",{style:{width:"400px"}},t.default.createElement(s.default,{form:v,schema:U,onFinish:ge}),t.default.createElement(l.default,null,t.default.createElement(p.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),t.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},w=u,a.abrupt("return",w);case 48:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A,j,u,w;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return A=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var F=K(N);if(F&&F.has(v))return F.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,F&&F.set(v,U),U},K=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,F=new WeakMap;return(K=function(_){return _?F:N})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.t2=d,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=d,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=a.sent,a.t8=A,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=a.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var v=(0,o.useForm)(),N=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},F=function(_){var ie=_.data,ge=_.errors,pn=_.schema,Be=(0,p.default)(_,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Me){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:v,schema:j,beforeFinish:F,onFinish:N}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=u,a.abrupt("return",w);case 42:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A,j,u,w;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return A=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var F=K(N);if(F&&F.has(v))return F.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,F&&F.set(v,U),U},K=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,F=new WeakMap;return(K=function(_){return _?F:N})(v)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return t=a.sent,a.t8=A,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=a.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var v=(0,o.useForm)(),N=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},F=function(){(0,s.fakeApi)("xxx/getForm").then(function(_){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:v,schema:j,onFinish:N}),R.default.createElement(l.default,null,R.default.createElement(p.default,{onClick:F},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},w=u,a.abrupt("return",w);case 44:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A,j,u;return C.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return K=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var N=s(v);if(N&&N.has(h))return N.get(h);var F={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in h)if(_!=="default"&&Object.prototype.hasOwnProperty.call(h,_)){var ie=U?Object.getOwnPropertyDescriptor(h,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(F,_,ie):F[_]=h[_]}return F.default=h,N&&N.set(h,F),F},s=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,N=new WeakMap;return(s=function(U){return U?N:v})(h)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,l=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=K,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return R=m.sent,m.t6=K,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,t=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=m.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var h=(0,t.useForm)(),v=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},N=function(U,_){_.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):p.default.info(JSON.stringify(U))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(t.default,{form:h,schema:A,onMount:v,onFinish:N}),b.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=j,m.abrupt("return",u);case 37:case"end":return m.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return R=function(u,w){if(!w&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(w);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var N=h?Object.getOwnPropertyDescriptor(u,v):null;N&&(N.get||N.set)?Object.defineProperty(a,v,N):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var w=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:w})(u)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=R,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,p=(0,A.t2)(A.t3),t={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var u=(0,p.useForm)();return l.default.createElement(p.default,{form:u,schema:t})},s=o,A.abrupt("return",s);case 17:case"end":return A.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.expression})},o.abrupt("return",R);case 16:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K;return C.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return R=function(w,m){if(!m&&w&&w.__esModule)return w;if(w===null||typeof w!="object"&&typeof w!="function")return{default:w};var a=b(m);if(a&&a.has(w))return a.get(w);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in w)if(N!=="default"&&Object.prototype.hasOwnProperty.call(w,N)){var F=v?Object.getOwnPropertyDescriptor(w,N):null;F&&(F.get||F.set)?Object.defineProperty(h,N,F):h[N]=w[N]}return h.default=w,a&&a.set(w,h),h},b=function(w){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(b=function(v){return v?a:m})(w)},j.t0=R,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,d=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=j.sent,j.t2=R,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,p=(0,j.t2)(j.t3),t=function(w){return new Promise(function(m){return setTimeout(m,w)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var w=(0,p.useForm)(),m=function(){w.setValues({input1:"hello world"}),t(3e3).then(function(h){w.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:w,schema:o,onMount:m})},K=s,j.abrupt("return",K);case 20:case"end":return j.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(K){var A=K.value;console.log(A)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},t=R,s.abrupt("return",t);case 16:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return R=function(u,w){if(!w&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(w);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var N=h?Object.getOwnPropertyDescriptor(u,v):null;N&&(N.get||N.set)?Object.defineProperty(a,v,N):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var w=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:w})(u)},A.t0=R,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,d=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=A.sent,A.t2=R,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,p=(0,A.t2)(A.t3),t={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var u=(0,p.useForm)(),w={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return d.default.createElement(p.default,{form:u,schema:t,watch:w})},s=o,A.abrupt("return",s);case 19:case"end":return A.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=t(a);if(h&&h.has(m))return h.get(m);var v={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in m)if(F!=="default"&&Object.prototype.hasOwnProperty.call(m,F)){var U=N?Object.getOwnPropertyDescriptor(m,F):null;U&&(U.get||U.set)?Object.defineProperty(v,F,U):v[F]=m[F]}return v.default=m,h&&h.set(m,v),v},t=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(N){return N?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=o,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},K=function(){var m=(0,R.useForm)(),a=function(N,F){F.length>0?alert("errorFields:"+JSON.stringify(F)):alert("formData:"+JSON.stringify(N,null,2))},h={input1:function(N){N.length>2?m.setSchemaByPath("obj1.select",function(F){var U=F.enumNames;return{enumNames:U.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:a,watch:h}),p.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},A=K,u.abrupt("return",A);case 27:case"end":return u.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K,A,j,u,w;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return K=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var F=s(N);if(F&&F.has(v))return F.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,F&&F.set(v,U),U},s=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,F=new WeakMap;return(s=function(_){return _?F:N})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=d,a.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.t4=d,a.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=K,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=a.sent,a.t8=K,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(v){return console.log("widget props:",v),R.default.createElement(p.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},v))},u=function(){var v=(0,o.useForm)(),N=function(){};return R.default.createElement("div",null,R.default.createElement(o.default,{readOnly:!0,form:v,schema:A,widgets:{site:j},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},w=u,a.abrupt("return",w);case 40:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.basic})},o.abrupt("return",R);case 16:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.titleTrick})},o.abrupt("return",R);case 16:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:rt},"main.js":{import:"./main",content:Ne},"json/simplest.json":{import:"./json/simplest.json",content:An},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:Rn},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Xe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t,o,s,K;return C.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return d=e("K+nK"),j.t0=d,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,l=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"P2DI"));case 8:for(p=j.sent,b=[],R=0;R<6;R++)b.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return t={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(w,m){return l.default.createElement("a",{onClick:function(){return alert(w.title)}},"\u7F16\u8F91")}}],s=function(){var w=function(){return{rows:b,total:b.length}};return l.default.createElement(p.TableProvider,null,l.default.createElement(p.Search,{schema:t,api:w}),l.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},K=s,j.abrupt("return",K);case 16:case"end":return j.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,l,p,b,R,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(p.default,{defaultValue:b}))},t=R,s.abrupt("return",t);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Fn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Fe}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Mn,gn,e){},Zs1V:function(Mn){Mn.exports=JSON.parse("{}")},f3kx:function(Mn,gn,e){"use strict";e.r(gn);var G=e("q1tI"),r=e.n(G),C=e("dEAq"),W=e.n(C),ce=e("0zqC"),L=e("JjdP"),on=r.a.memo(L.default["docs-playground"].component);gn.default=De=>(r.a.useEffect(()=>{De!=null&&De.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(De.location.hash.slice(1)))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"}),r.a.createElement(ce.default,L.default["docs-playground"].previewerProps,r.a.createElement(on,null)))))},p8sG:function(Mn,gn,e){"use strict";Mn.exports=e("80pN")}}]);
