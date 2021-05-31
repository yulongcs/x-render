(window.webpackJsonp=window.webpackJsonp||[]).push([[40,10],{"0zqC":function(Nn,gn,e){"use strict";e.r(gn);var x=e("tJVT"),n=e("q1tI"),C=e.n(n),L=e("wx14"),me=e("rePB"),W=e("ODXe"),tn=e("U8pU"),Ie=e("Ff2n"),de=e("VTBJ"),at=e("TSYQ"),je=e.n(at),Tn=e("Zm9Q"),Kn=e("5Z9U"),Fn=e("6cGi"),fn=e("KQm4"),Xe=e("wgJM"),Ln=e("t23M");function Mn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function y(){for(var E=arguments.length,g=new Array(E),O=0;O<E;O++)g[O]=arguments[O];c.current||(Xe.a.cancel(i.current),i.current=Object(Xe.a)(function(){t.apply(void 0,g)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Xe.a.cancel(i.current)}},[]),y}function On(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),y=Object(W.a)(c,2),E=y[1],g=Object(n.useRef)(typeof t=="function"?t():t),O=Mn(function(){var w=g.current;i.current.forEach(function($){w=$(w)}),i.current=[],g.current=w,E({})});function R(w){i.current.push(w),O()}return[g.current,R]}var Me=e("4IlW");function kn(t,i){var c,y=t.prefixCls,E=t.id,g=t.active,O=t.rtl,R=t.tab,w=R.key,$=R.tab,V=R.disabled,G=R.closeIcon,J=t.tabBarGutter,se=t.tabPosition,Q=t.closable,X=t.renderWrapper,oe=t.removeAriaLabel,z=t.editable,q=t.onClick,ae=t.onRemove,Y=t.onFocus,ue="".concat(y,"-tab");n.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=z&&Q!==!1&&!V;function ne(re){V||q(re)}function ce(re){re.preventDefault(),re.stopPropagation(),z.onEdit("remove",{key:w,event:re})}var fe=n.createElement("div",{key:w,ref:i,className:je()(ue,(c={},Object(me.a)(c,"".concat(ue,"-with-remove"),be),Object(me.a)(c,"".concat(ue,"-active"),g),Object(me.a)(c,"".concat(ue,"-disabled"),V),c)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":g,id:E&&"".concat(E,"-tab-").concat(w),className:"".concat(ue,"-btn"),"aria-controls":E&&"".concat(E,"-panel-").concat(w),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[Me.a.SPACE,Me.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Y},$),be&&n.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},G||z.removeIcon||"\xD7"));return X&&(fe=X(fe)),fe}var $n=n.forwardRef(kn),rt={width:0,height:0,left:0,top:0};function P(t,i,c){return Object(n.useMemo)(function(){for(var y,E=new Map,g=i.get((y=t[0])===null||y===void 0?void 0:y.key)||rt,O=g.left+g.width,R=0;R<t.length;R+=1){var w=t[R].key,$=i.get(w);if(!$){var V;$=i.get((V=t[R-1])===null||V===void 0?void 0:V.key)||rt}var G=E.get(w)||Object(de.a)({},$);G.right=O-G.left-G.width,E.set(w,G)}return E},[t.map(function(y){return y.key}).join("_"),i,c])}var S={width:0,height:0,left:0,top:0,right:0};function j(t,i,c,y,E){var g=E.tabs,O=E.tabPosition,R=E.rtl,w,$,V;["top","bottom"].includes(O)?(w="width",$=R?"right":"left",V=Math.abs(i.left)):(w="height",$="top",V=-i.top);var G=i[w],J=c[w],se=y[w],Q=G;return J+se>G&&(Q=G-se),Object(n.useMemo)(function(){if(!g.length)return[0,0];for(var X=g.length,oe=X,z=0;z<X;z+=1){var q=t.get(g[z].key)||S;if(q[$]+q[w]>V+Q){oe=z-1;break}}for(var ae=0,Y=X-1;Y>=0;Y-=1){var ue=t.get(g[Y].key)||S;if(ue[$]<V){ae=Y+1;break}}return[ae,oe]},[t,V,Q,O,g.map(function(X){return X.key}).join("_"),R])}var d=e("Gytx"),o=e.n(d),p=e("Kwbf");function b(t,i){var c=t.prefixCls,y=t.invalidate,E=t.item,g=t.renderItem,O=t.responsive,R=t.registerSize,w=t.itemKey,$=t.className,V=t.style,G=t.children,J=t.display,se=t.order,Q=t.component,X=Q===void 0?"div":Q,oe=Object(Ie.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=O&&!J;function q(be){R(w,be)}n.useEffect(function(){return function(){q(null)}},[]);var ae=g&&E!==void 0?g(E):G,Y;y||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:O?se:void 0,pointerEvents:z?"none":void 0});var ue={};z&&(ue["aria-hidden"]=!0);var k=n.createElement(X,Object(L.a)({className:je()(!y&&c,$),style:Object(de.a)(Object(de.a)({},Y),V)},ue,oe,{ref:i}),ae);return O&&(k=n.createElement(Ln.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var F=n.forwardRef(b);F.displayName="Item";var a=F;function u(){var t=Object(n.useState)({}),i=Object(W.a)(t,2),c=i[1],y=Object(n.useRef)([]),E=Object(n.useRef)(!1),g=0,O=0;Object(n.useEffect)(function(){return function(){E.current=!0}},[]);function R(w){var $=g;g+=1,y.current.length<$+1&&(y.current[$]=w);var V=y.current[$];function G(J){y.current[$]=typeof J=="function"?J(y.current[$]):J,Xe.a.cancel(O),O=Object(Xe.a)(function(){E.current||c({})})}return[V,G]}return R}var s=function(i,c){var y=n.useContext(D);if(!y){var E=i.component,g=E===void 0?"div":E,O=Object(Ie.a)(i,["component"]);return n.createElement(g,Object(L.a)({},O,{ref:c}))}var R=y.className,w=Object(Ie.a)(y,["className"]),$=i.className,V=Object(Ie.a)(i,["className"]);return n.createElement(D.Provider,{value:null},n.createElement(a,Object(L.a)({ref:c,className:je()(R,$)},w,V)))},B=n.forwardRef(s);B.displayName="RawItem";var T=B,D=n.createContext(null),l="responsive",K="invalidate";function m(t){return"+ ".concat(t.length," ...")}function r(t,i){var c=t.prefixCls,y=c===void 0?"rc-overflow":c,E=t.data,g=E===void 0?[]:E,O=t.renderItem,R=t.renderRawItem,w=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,G=t.ssr,J=t.style,se=t.className,Q=t.maxCount,X=t.renderRest,oe=t.renderRawRest,z=t.suffix,q=t.component,ae=q===void 0?"div":q,Y=t.itemComponent,ue=t.onVisibleChange,k=Object(Ie.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=u(),ne=G==="full",ce=be(null),fe=Object(W.a)(ce,2),re=fe[0],H=fe[1],le=re||0,ye=be(new Map),he=Object(W.a)(ye,2),Oe=he[0],We=he[1],Ce=be(0),Fe=Object(W.a)(Ce,2),Te=Fe[0],Be=Fe[1],Pe=be(0),Se=Object(W.a)(Pe,2),$e=Se[0],qe=Se[1],Ve=be(0),ze=Object(W.a)(Ve,2),Qe=ze[0],Le=ze[1],Dn=Object(n.useState)(null),an=Object(W.a)(Dn,2),Ye=an[0],on=an[1],yn=Object(n.useState)(null),bn=Object(W.a)(yn,2),Ae=bn[0],Ge=bn[1],_e=n.useMemo(function(){return Ae===null&&ne?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,re]),Ze=Object(n.useState)(!1),wn=Object(W.a)(Ze,2),zn=wn[0],Wn=wn[1],rn="".concat(y,"-item"),Sn=Math.max(Te,$e),ln=g.length&&Q===l,Pn=Q===K,en=ln||typeof Q=="number"&&g.length>Q,sn=Object(n.useMemo)(function(){var ve=g;return ln?re===null&&ne?ve=g:ve=g.slice(0,Math.min(g.length,le/V)):typeof Q=="number"&&(ve=g.slice(0,Q)),ve},[g,V,re,Q,ln]),jn=Object(n.useMemo)(function(){return ln?g.slice(_e+1):g.slice(sn.length)},[g,sn,ln,_e]),cn=Object(n.useCallback)(function(ve,Re){var Ke;return typeof w=="function"?w(ve):(Ke=w&&(ve==null?void 0:ve[w]))!==null&&Ke!==void 0?Ke:Re},[w]),ke=Object(n.useCallback)(O||function(ve){return ve},[O]);function He(ve,Re){Ge(ve),Re||(Wn(ve<g.length-1),ue==null||ue(ve))}function Jn(ve,Re){H(Re.clientWidth)}function xn(ve,Re){We(function(Ke){var nn=new Map(Ke);return Re===null?nn.delete(ve):nn.set(ve,Re),nn})}function et(ve,Re){qe(Re),Be($e)}function Cn(ve,Re){Le(Re)}function hn(ve){return Oe.get(cn(sn[ve],ve))}n.useLayoutEffect(function(){if(le&&Sn&&sn){var ve=Qe,Re=sn.length,Ke=Re-1;if(!Re){He(0),on(null);return}for(var nn=0;nn<Re;nn+=1){var Xn=hn(nn);if(Xn===void 0){He(nn-1,!0);break}if(ve+=Xn,nn===Ke-1&&ve+hn(Ke)<=le){He(Ke),on(null);break}else if(ve+Sn>le){He(nn-1),on(ve-Xn-Qe+$e);break}else if(nn===Ke){He(Ke),on(ve-Qe);break}}z&&hn(0)+Qe>le&&on(null)}},[le,Oe,$e,Qe,cn,sn]);var Gn=zn&&!!jn.length,En={};Ye!==null&&ln&&(En={position:"absolute",left:Ye,top:0});var mn={prefixCls:rn,responsive:ln,component:Y,invalidate:Pn},Hn=R?function(ve,Re){var Ke=cn(ve,Re);return n.createElement(D.Provider,{key:Ke,value:Object(de.a)(Object(de.a)({},mn),{},{order:Re,item:ve,itemKey:Ke,registerSize:xn,display:Re<=_e})},R(ve,Re))}:function(ve,Re){var Ke=cn(ve,Re);return n.createElement(a,Object(L.a)({},mn,{order:Re,key:Ke,item:ve,renderItem:ke,itemKey:Ke,registerSize:xn,display:Re<=_e}))},An,Qn={order:Gn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Gn};if(oe)oe&&(An=n.createElement(D.Provider,{value:Object(de.a)(Object(de.a)({},mn),Qn)},oe(jn)));else{var dn=X||m;An=n.createElement(a,Object(L.a)({},mn,Qn),typeof dn=="function"?dn(jn):dn)}var In=n.createElement(ae,Object(L.a)({className:je()(!Pn&&y,se),style:J,ref:i},k),sn.map(Hn),en?An:null,z&&n.createElement(a,Object(L.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:En}),z));return ln&&(In=n.createElement(Ln.default,{onResize:Jn},In)),In}var h=n.forwardRef(r);h.displayName="Overflow",h.Item=T,h.RESPONSIVE=l,h.INVALIDATE=K;var v=h,A=v,M=e("1OyB"),U=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),we=n.createContext(null);function Ne(t,i){var c=Object(de.a)({},t);return Object.keys(i).forEach(function(y){var E=i[y];E!==void 0&&(c[y]=E)}),c}function Rn(t){var i=t.children,c=t.locked,y=Object(Ie.a)(t,["children","locked"]),E=n.useContext(we),g=Object(pn.a)(function(){return Ne(E,y)},[E,y],function(O,R){return!c&&(O[0]!==R[0]||!o()(O[1],R[1]))});return n.createElement(we.Provider,{value:g},i)}function it(t,i,c,y){var E=n.useContext(we),g=E.activeKey,O=E.onActive,R=E.onInactive,w={active:g===t};return i||(w.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),O(t)},w.onMouseLeave=function($){y==null||y({key:t,domEvent:$}),R(t)}),w}function qn(t){var i=t.item,c=Object(Ie.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function f(t){var i=t.icon,c=t.props,y=t.children,E;return typeof i=="function"?E=n.createElement(i,Object(de.a)({},c)):E=i,E||y||null}function I(t){var i=n.useContext(we),c=i.mode,y=i.rtl,E=i.inlineIndent;if(c!=="inline")return null;var g=t;return y?{paddingRight:g*E}:{paddingLeft:g*E}}var N=[],pe=n.createContext(null);function ee(){return n.useContext(pe)}var De=n.createContext(N);function Ue(t){var i=n.useContext(De);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var xe=n.createContext(null),zt=n.createContext(null);function Jt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function xt(t){var i=n.useContext(zt);return Jt(i,t)}var ba=function(t){Object(_.a)(c,t);var i=Object(ie.a)(c);function c(){return Object(M.a)(this,c),i.apply(this,arguments)}return Object(U.a)(c,[{key:"render",value:function(){var E=this.props,g=E.title,O=E.attribute,R=E.elementRef,w=Object(Ie.a)(E,["title","attribute","elementRef"]),$=Object(ge.a)(w,["eventKey"]);return Object(p.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(A.Item,Object(L.a)({},O,{title:typeof g=="string"?g:void 0},$,{ref:R}))}}]),c}(n.Component),Ca=function(i){var c,y=i.style,E=i.className,g=i.eventKey,O=i.disabled,R=i.itemIcon,w=i.children,$=i.role,V=i.onMouseEnter,G=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(Ie.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=xt(g),z=n.useContext(we),q=z.prefixCls,ae=z.onItemClick,Y=z.disabled,ue=z.overflowDisabled,k=z.itemIcon,be=z.selectedKeys,ne=z.onActive,ce="".concat(q,"-item"),fe=n.useRef(),re=n.useRef(),H=Y||O,le=Ue(g),ye=function(Ve){return{key:g,keyPath:le,item:fe.current,domEvent:Ve}},he=R||k,Oe=it(g,H,V,G),We=Oe.active,Ce=Object(Ie.a)(Oe,["active"]),Fe=be.includes(g),Te=I(le.length),Be=function(Ve){if(!H){var ze=ye(Ve);J==null||J(qn(ze)),ae(ze)}},Pe=function(Ve){if(se==null||se(Ve),Ve.which===Me.a.ENTER){var ze=ye(Ve);J==null||J(qn(ze)),ae(ze)}},Se=function(Ve){ne(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Fe),n.createElement(ba,Object(L.a)({ref:fe,elementRef:re,role:$===null?"none":$||"menuitem",tabIndex:O?null:-1,"data-menu-id":ue&&oe?null:oe},X,Ce,$e,{component:"li","aria-disabled":O,style:Object(de.a)(Object(de.a)({},Te),y),className:je()(ce,(c={},Object(me.a)(c,"".concat(ce,"-active"),We),Object(me.a)(c,"".concat(ce,"-selected"),Fe),Object(me.a)(c,"".concat(ce,"-disabled"),H),c),E),onClick:Be,onKeyDown:Pe,onFocus:Se}),w,n.createElement(f,{props:Object(de.a)(Object(de.a)({},i),{},{isSelected:Fe}),icon:he}))};function Ea(t){var i=t.eventKey,c=ee(),y=Ue(i);return n.useEffect(function(){if(c)return c.registerPath(i,y),function(){c.unregisterPath(i,y)}},[y]),c?null:n.createElement(Ca,t)}var St=Ea;function Pt(t,i){return Object(Tn.a)(t).map(function(c,y){if(n.isValidElement(c)){var E=c.key;return E==null&&(E="tmp_key-".concat([].concat(Object(fn.a)(i),[y]).join("-"))),n.cloneElement(c,{key:E,eventKey:E})}return c})}function _n(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var y,E=arguments.length,g=new Array(E),O=0;O<E;O++)g[O]=arguments[O];return(y=i.current)===null||y===void 0?void 0:y.call.apply(y,[i].concat(g))},[]);return t?c:void 0}var Fa=function(i,c){var y=i.className,E=i.children,g=Object(Ie.a)(i,["className","children"]),O=n.useContext(we),R=O.prefixCls,w=O.mode;return n.createElement("ul",Object(L.a)({className:je()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(w==="inline"?"inline":"vertical"),y)},g,{"data-menu-list":!0,ref:c}),E)},Gt=n.forwardRef(Fa);Gt.displayName="SubMenuList";var Ht=Gt,Oa=e("uciX"),Vn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Qt;function Xt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Da={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Sa(t){var i=t.prefixCls,c=t.visible,y=t.children,E=t.popup,g=t.popupClassName,O=t.popupOffset,R=t.disabled,w=t.mode,$=t.onVisibleChange,V=n.useContext(we),G=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,oe=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ae=V.defaultMotions,Y=n.useState(!1),ue=Object(W.a)(Y,2),k=ue[0],be=ue[1],ne=J?Object(de.a)(Object(de.a)({},Ra),X):Object(de.a)(Object(de.a)({},Qt),X),ce=Da[w],fe=Xt(w,q,ae),re=Object(de.a)(Object(de.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Xe.a)(function(){be(c)}),function(){Xe.a.cancel(H.current)}},[c]),n.createElement(Oa.a,{prefixCls:i,popupClassName:je()("".concat(i,"-popup"),Object(me.a)({},"".concat(i,"-rtl"),J),g),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:E,popupAlign:O&&{offset:O},action:R?[]:[oe],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:z,popupMotion:re},y)}var Pa=e("8XRh");function ja(t){var i=t.id,c=t.open,y=t.keyPath,E=t.children,g="inline",O=n.useContext(we),R=O.prefixCls,w=O.forceSubMenuRender,$=O.motion,V=O.defaultMotions,G=O.mode,J=n.useRef(!1);J.current=G===g;var se=n.useState(!J.current),Q=Object(W.a)(se,2),X=Q[0],oe=Q[1],z=J.current?c:!1;n.useEffect(function(){J.current&&oe(!1)},[G]);var q=Object(de.a)({},Xt(g,$,V));y.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&oe(!0),ae==null?void 0:ae(Y)},X?null:n.createElement(Rn,{mode:g,locked:!J.current},n.createElement(Pa.default,Object(L.a)({visible:z},q,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Y){var ue=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:ue,style:k},E)}))}var Aa=function(i){var c,y=i.style,E=i.className,g=i.title,O=i.eventKey,R=i.disabled,w=i.internalPopupClose,$=i.children,V=i.itemIcon,G=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,oe=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,Y=Object(Ie.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=xt(O),k=n.useContext(we),be=k.prefixCls,ne=k.mode,ce=k.openKeys,fe=k.disabled,re=k.overflowDisabled,H=k.activeKey,le=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Oe=k.onItemClick,We=k.onOpenChange,Ce=k.onActive,Fe=n.useContext(xe),Te=Fe.isSubPathKey,Be=Ue(),Pe="".concat(be,"-submenu"),Se=fe||R,$e=n.useRef(),qe=n.useRef(),Ve=V||ye,ze=G||he,Qe=ce.includes(O),Le=!re&&Qe,Dn=Te(le,O),an=it(O,Se,q,ae),Ye=an.active,on=Object(Ie.a)(an,["active"]),yn=n.useState(!1),bn=Object(W.a)(yn,2),Ae=bn[0],Ge=bn[1],_e=function(He){Se||Ge(He)},Ze=function(He){_e(!0),X==null||X({key:O,domEvent:He})},wn=function(He){_e(!1),oe==null||oe({key:O,domEvent:He})},zn=n.useMemo(function(){return Ye||(ne!=="inline"?Ae||Te([H],O):!1)},[ne,Ye,H,Ae,O,Te]),Wn=I(Be.length),rn=function(He){Se||(z==null||z({key:O,domEvent:He}),ne==="inline"&&We(O,!Qe))},Sn=_n(function(ke){Q==null||Q(qn(ke)),Oe(ke)}),ln=function(He){ne!=="inline"&&We(O,He)},Pn=function(){Ce(O)},en=ue&&"".concat(ue,"-popup"),sn=n.createElement("div",Object(L.a)({role:"menuitem",style:Wn,className:"".concat(Pe,"-title"),tabIndex:Se?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":re&&ue?null:ue,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Se,onClick:rn,onFocus:Pn},on),g,n.createElement(f,{icon:ne!=="horizontal"?ze:null,props:Object(de.a)(Object(de.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),jn=n.useRef(ne);if(ne!=="inline"&&(jn.current=Be.length>1?"vertical":ne),!re){var cn=jn.current;sn=n.createElement(Sa,{mode:cn,prefixCls:Pe,visible:!w&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(Rn,{mode:cn},n.createElement(Ht,{id:en,ref:qe},$)),disabled:Se,onVisibleChange:ln},sn)}return n.createElement(Rn,{onItemClick:Sn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:ze},n.createElement(A.Item,Object(L.a)({role:"none"},Y,{component:"li",style:y,className:je()(Pe,"".concat(Pe,"-").concat(ne),E,(c={},Object(me.a)(c,"".concat(Pe,"-open"),Le),Object(me.a)(c,"".concat(Pe,"-active"),zn),Object(me.a)(c,"".concat(Pe,"-selected"),Dn),Object(me.a)(c,"".concat(Pe,"-disabled"),Se),c)),onMouseEnter:Ze,onMouseLeave:wn}),sn,!re&&n.createElement(ja,{id:en,open:Le,keyPath:Be},$)))};function Yt(t){var i=t.eventKey,c=t.children,y=Ue(i),E=Pt(c,y),g=ee();n.useEffect(function(){if(g)return g.registerPath(i,y),function(){g.unregisterPath(i,y)}},[y]);var O;return g?O=E:O=n.createElement(Aa,t,E),n.createElement(De.Provider,{value:y},O)}var Ia=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(t)){var c=t.nodeName.toLowerCase(),y=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),E=t.getAttribute("tabindex"),g=Number(E),O=null;return E&&!Number.isNaN(g)?O=g:y&&O===null&&(O=0),y&&t.disabled&&(O=null),O!==null&&(O>=0||i&&O<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(y){return Zt(y,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),y=c[i.shiftKey?0:c.length-1],E=y===document.activeElement||t===document.activeElement;if(E){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var jt=Me.a.LEFT,At=Me.a.RIGHT,It=Me.a.UP,ft=Me.a.DOWN,pt=Me.a.ENTER,qt=Me.a.ESC,_t=[It,ft,jt,At];function Ba(t,i,c,y){var E,g,O,R,w="prev",$="next",V="children",G="parent";if(t==="inline"&&y===pt)return{inlineTrigger:!0};var J=(E={},Object(me.a)(E,It,w),Object(me.a)(E,ft,$),E),se=(g={},Object(me.a)(g,jt,c?$:w),Object(me.a)(g,At,c?w:$),Object(me.a)(g,ft,V),Object(me.a)(g,pt,V),g),Q=(O={},Object(me.a)(O,It,w),Object(me.a)(O,ft,$),Object(me.a)(O,pt,V),Object(me.a)(O,qt,G),Object(me.a)(O,jt,c?V:G),Object(me.a)(O,At,c?G:V),O),X={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},oe=(R=X["".concat(t).concat(i?"":"Sub")])===null||R===void 0?void 0:R[y];switch(oe){case w:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ta(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ka(t,i){var c=kt(t,!0);return c.filter(function(y){return i.has(y)})}function ea(t,i,c){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var E=Ka(t,i),g=E.length,O=E.findIndex(function(R){return c===R});return y<0?O===-1?O=g-1:O-=1:y>0&&(O+=1),O=(O+g)%g,E[O]}function Ma(t,i,c,y,E,g,O,R,w,$){var V=n.useRef(),G=n.useRef();G.current=i;var J=function(){Xe.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,oe,z,q=function(){X=new Set,oe=new Map,z=new Map;var ye=g();return ye.forEach(function(he){var Oe=document.querySelector("[data-menu-id='".concat(Jt(y,he),"']"));Oe&&(X.add(Oe),z.set(Oe,he),oe.set(he,Oe))}),X};q();var ae=oe.get(i),Y=Ta(ae,X),ue=z.get(Y),k=Ba(t,O(ue,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Oe=ye.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(he=Oe);var We=z.get(ye);R(We),J(),V.current=Object(Xe.a)(function(){G.current===We&&he.focus()})}};if(k.sibling||!Y){var ne;!Y||t==="inline"?ne=E.current:ne=Na(Y);var ce=ea(ne,X,Y,k.offset);be(ce)}else if(k.inlineTrigger)w(ue);else if(k.offset>0)w(ue,!0),J(),V.current=Object(Xe.a)(function(){q();var le=Y.getAttribute("aria-controls"),ye=document.getElementById(le),he=ea(ye,X);be(he)},5);else if(k.offset<0){var fe=O(ue,!0),re=fe[fe.length-2],H=oe.get(re);w(re,!1),be(H)}}$==null||$(se)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(t){var i=Object(Fn.a)(t,{value:t}),c=Object(W.a)(i,2),y=c[0],E=c[1];return n.useEffect(function(){na+=1;var g="".concat(wa,"-").concat(na);E("rc-menu-uuid-".concat(g))},[]),y}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Bt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Bt)},$a=function(i){return i.split(Bt)},Nt="rc-menu-more";function Va(){var t=n.useState({}),i=Object(W.a)(t,2),c=i[1],y=Object(n.useRef)(new Map),E=Object(n.useRef)(new Map),g=n.useState([]),O=Object(W.a)(g,2),R=O[0],w=O[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var ae=ta(q);E.current.set(ae,z),y.current.set(z,ae),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),G=Object(n.useCallback)(function(z,q){var ae=ta(q);E.current.delete(ae),y.current.delete(z)},[]),J=Object(n.useCallback)(function(z){w(z)},[]),se=Object(n.useCallback)(function(z,q){var ae=y.current.get(z)||"",Y=$a(ae);return q&&R.includes(Y[0])&&Y.unshift(Nt),Y},[R]),Q=Object(n.useCallback)(function(z,q){return z.some(function(ae){var Y=se(ae,!0);return Y.includes(q)})},[se]),X=function(){var q=Object(fn.a)(y.current.keys());return R.length&&q.push(Nt),q},oe=Object(n.useCallback)(function(z){var q="".concat(y.current.get(z)).concat(Bt),ae=new Set;return Object(fn.a)(E.current.keys()).forEach(function(Y){Y.startsWith(q)&&ae.add(E.current.get(Y))}),ae},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:oe}}var vt=[],Ua=function(i){var c,y,E=i.prefixCls,g=E===void 0?"rc-menu":E,O=i.style,R=i.className,w=i.tabIndex,$=w===void 0?0:w,V=i.children,G=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,oe=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,ae=q===void 0?.1:q,Y=i.subMenuCloseDelay,ue=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ne=i.openKeys,ce=i.activeKey,fe=i.defaultActiveFirst,re=i.selectable,H=re===void 0?!0:re,le=i.multiple,ye=le===void 0?!1:le,he=i.defaultSelectedKeys,Oe=i.selectedKeys,We=i.onSelect,Ce=i.onDeselect,Fe=i.inlineIndent,Te=Fe===void 0?24:Fe,Be=i.motion,Pe=i.defaultMotions,Se=i.triggerSubMenuAction,$e=Se===void 0?"hover":Se,qe=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,Dn=i.getPopupContainer,an=i.onClick,Ye=i.onOpenChange,on=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ae=Object(Ie.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=Pt(V,vt),_e=n.useState(!1),Ze=Object(W.a)(_e,2),wn=Ze[0],zn=Ze[1],Wn=n.useRef(),rn=Wa(J),Sn=G==="rtl",ln=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),Pn=Object(W.a)(ln,2),en=Pn[0],sn=Pn[1],jn=n.useState(0),cn=Object(W.a)(jn,2),ke=cn[0],He=cn[1],Jn=ke>=Ge.length-1||en!=="horizontal"||z,xn=Object(Fn.a)(be,{value:ne,postState:function(Z){return Z||vt}}),et=Object(W.a)(xn,2),Cn=et[0],hn=et[1],Gn=n.useState(Cn),En=Object(W.a)(Gn,2),mn=En[0],Hn=En[1],An=en==="inline",Qn=n.useRef(!1);n.useEffect(function(){An&&Hn(Cn)},[Cn]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),Ye==null||Ye(te)}},[An]);var dn=Va(),In=dn.registerPath,ve=dn.unregisterPath,Re=dn.refreshOverflowKeys,Ke=dn.isSubPathKey,nn=dn.getKeyPath,Xn=dn.getKeys,gt=dn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Wt=n.useMemo(function(){return{isSubPathKey:Ke}},[Ke]);n.useEffect(function(){Re(Jn?vt:Ge.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(Fn.a)(ce||fe&&((c=Ge[0])===null||c===void 0?void 0:c.key),{value:ce}),nt=Object(W.a)(Lt,2),yt=nt[0],ut=nt[1],bt=_n(function(te){ut(te)}),$t=_n(function(){ut(void 0)}),Ct=Object(Fn.a)(he||[],{value:Oe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Et=Object(W.a)(Ct,2),tt=Et[0],Bn=Et[1],Ft=function(Z){if(!!H){var Ee=Z.key,Je=tt.includes(Ee),un;Je?un=tt.filter(function(Zn){return Zn!==Ee}):ye?un=[].concat(Object(fn.a)(tt),[Ee]):un=[Ee],Bn(un);var Un=Object(de.a)(Object(de.a)({},Z),{},{selectedKeys:un});Je?Ce==null||Ce(Un):We==null||We(Un)}},Ot=_n(function(te){an==null||an(qn(te)),Ft(te)}),ot=_n(function(te,Z){var Ee=Cn.filter(function(un){return un!==te});if(Z)Ee.push(te);else if(en!=="inline"){var Je=gt(te);Ee=Ee.filter(function(un){return!Je.has(un)})}o()(Cn,Ee)||(hn(Ee),Ye==null||Ye(Ee))}),Yn=_n(Dn),lt=function(Z,Ee){var Je=Ee!=null?Ee:!Cn.includes(Z);ot(Z,Je)},dt=Ma(en,yt,Sn,rn,Wn,Xn,nn,ut,lt,on);n.useEffect(function(){zn(!0)},[]);var Rt=en!=="horizontal"||z?Ge:Ge.map(function(te,Z){return n.createElement(Rn,{key:te.key,overflowDisabled:Z>ke},te)}),Dt=n.createElement(A,Object(L.a)({id:J,ref:Wn,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:St,className:je()(g,"".concat(g,"-root"),"".concat(g,"-").concat(en),R,(y={},Object(me.a)(y,"".concat(g,"-inline-collapsed"),sn),Object(me.a)(y,"".concat(g,"-rtl"),Sn),y)),dir:G,style:O,role:"menu",tabIndex:$,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ee=Z.length,Je=Ee?Ge.slice(-Ee):null;return n.createElement(Yt,{eventKey:Nt,title:Le,disabled:Jn,internalPopupClose:Ee===0},Je)},maxCount:en!=="horizontal"||z?A.INVALIDATE:A.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:dt},Ae));return n.createElement(zt.Provider,{value:rn},n.createElement(Rn,{prefixCls:g,mode:en,openKeys:Cn,rtl:Sn,disabled:oe,motion:wn?Be:null,defaultMotions:wn?Pe:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Te,subMenuOpenDelay:ae,subMenuCloseDelay:ue,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Yn,itemIcon:Ve,expandIcon:ze,onItemClick:Ot,onOpenChange:ot},n.createElement(xe.Provider,{value:Wt},Dt),n.createElement(pe.Provider,{value:wt},Ge)))},za=Ua,Ja=function(i){var c=i.className,y=i.title,E=i.eventKey,g=i.children,O=Object(Ie.a)(i,["className","title","eventKey","children"]),R=n.useContext(we),w=R.prefixCls,$="".concat(w,"-item-group");return n.createElement("li",Object(L.a)({},O,{onClick:function(G){return G.stopPropagation()},className:je()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof y=="string"?y:void 0},y),n.createElement("ul",{className:"".concat($,"-list")},g))};function xa(t){var i=t.children,c=Object(Ie.a)(t,["children"]),y=Ue(c.eventKey),E=Pt(i,y),g=ee();return g?E:n.createElement(Ja,c,E)}function Ga(t){var i=t.className,c=t.style,y=n.useContext(we),E=y.prefixCls,g=ee();return g?null:n.createElement("li",{className:je()("".concat(E,"-item-divider"),i),style:c})}var st=za;st.Item=St,st.SubMenu=Yt,st.ItemGroup=xa,st.Divider=Ga;var Ha=st,Qa=e("eDIo");function Xa(t,i){var c=t.prefixCls,y=t.editable,E=t.locale,g=t.style;return!y||y.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(E==null?void 0:E.addAriaLabel)||"Add tab",onClick:function(R){y.onEdit("add",{event:R})}},y.addIcon||"+")}var aa=n.forwardRef(Xa);function Ya(t,i){var c=t.prefixCls,y=t.id,E=t.tabs,g=t.locale,O=t.mobile,R=t.moreIcon,w=R===void 0?"More":R,$=t.moreTransitionName,V=t.style,G=t.className,J=t.editable,se=t.tabBarGutter,Q=t.rtl,X=t.onTabClick,oe=Object(n.useState)(!1),z=Object(W.a)(oe,2),q=z[0],ae=z[1],Y=Object(n.useState)(null),ue=Object(W.a)(Y,2),k=ue[0],be=ue[1],ne="".concat(y,"-more-popup"),ce="".concat(c,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,re=g==null?void 0:g.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Fe){var Te=Fe.key,Be=Fe.domEvent;X(Te,Be),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},E.map(function(Ce){return n.createElement(St,{key:Ce.key,id:"".concat(ne,"-").concat(Ce.key),role:"option","aria-controls":y&&"".concat(y,"-panel-").concat(Ce.key),disabled:Ce.disabled},Ce.tab)}));function le(Ce){for(var Fe=E.filter(function($e){return!$e.disabled}),Te=Fe.findIndex(function($e){return $e.key===k})||0,Be=Fe.length,Pe=0;Pe<Be;Pe+=1){Te=(Te+Ce+Be)%Be;var Se=Fe[Te];if(!Se.disabled){be(Se.key);return}}}function ye(Ce){var Fe=Ce.which;if(!q){[Me.a.DOWN,Me.a.SPACE,Me.a.ENTER].includes(Fe)&&(ae(!0),Ce.preventDefault());return}switch(Fe){case Me.a.UP:le(-1),Ce.preventDefault();break;case Me.a.DOWN:le(1),Ce.preventDefault();break;case Me.a.ESC:ae(!1);break;case Me.a.SPACE:case Me.a.ENTER:k!==null&&X(k,Ce);break}}Object(n.useEffect)(function(){var Ce=document.getElementById(fe);Ce&&Ce.scrollIntoView&&Ce.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(me.a)({},Q?"marginLeft":"marginRight",se);E.length||(he.visibility="hidden",he.order=1);var Oe=je()(Object(me.a)({},"".concat(ce,"-rtl"),Q)),We=O?null:n.createElement(Qa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ae,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(y,"-more"),"aria-expanded":q,onKeyDown:ye},w));return n.createElement("div",{className:je()("".concat(c,"-nav-operations"),G),style:V,ref:i},We,n.createElement(aa,{prefixCls:c,locale:g,editable:J}))}var Za=n.forwardRef(Ya),Tt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),y=Object(W.a)(c,2),E=y[0],g=y[1],O=Object(n.useState)(0),R=Object(W.a)(O,2),w=R[0],$=R[1],V=Object(n.useState)(0),G=Object(W.a)(V,2),J=G[0],se=G[1],Q=Object(n.useState)(),X=Object(W.a)(Q,2),oe=X[0],z=X[1],q=Object(n.useRef)();function ae(ce){var fe=ce.touches[0],re=fe.screenX,H=fe.screenY;g({x:re,y:H}),window.clearInterval(q.current)}function Y(ce){if(!!E){ce.preventDefault();var fe=ce.touches[0],re=fe.screenX,H=fe.screenY;g({x:re,y:H});var le=re-E.x,ye=H-E.y;i(le,ye);var he=Date.now();$(he),se(he-w),z({x:le,y:ye})}}function ue(){if(!!E&&(g(null),z(null),oe)){var ce=oe.x/J,fe=oe.y/J,re=Math.abs(ce),H=Math.abs(fe);if(Math.max(re,H)<ka)return;var le=ce,ye=fe;q.current=window.setInterval(function(){if(Math.abs(le)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}le*=ia,ye*=ia,i(le*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var fe=ce.deltaX,re=ce.deltaY,H=0,le=Math.abs(fe),ye=Math.abs(re);le===ye?H=k.current==="x"?fe:re:le>ye?(H=fe,k.current="x"):(H=re,k.current="y"),i(-H,-H)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Y,onTouchEnd:ue,onWheel:be},n.useEffect(function(){function ce(le){ne.current.onTouchStart(le)}function fe(le){ne.current.onTouchMove(le)}function re(le){ne.current.onTouchEnd(le)}function H(le){ne.current.onWheel(le)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(y){return t.current.has(y)||t.current.set(y,n.createRef()),t.current.get(y)}function c(y){t.current.delete(y)}return[i,c]}function sa(t,i){var c=n.useRef(t),y=n.useState({}),E=Object(W.a)(y,2),g=E[1];function O(R){var w=typeof R=="function"?R(c.current):R;w!==c.current&&i(w,c.current),c.current=w,g({})}return[c.current,O]}var ua=function(i){var c=i.position,y=i.prefixCls,E=i.extra;if(!E)return null;var g,O=E;return c==="right"&&(g=O.right||!O.left&&O||null),c==="left"&&(g=O.left||null),g?n.createElement("div",{className:"".concat(y,"-extra-content")},g):null};function er(t,i){var c,y=n.useContext(Tt),E=y.prefixCls,g=y.tabs,O=t.className,R=t.style,w=t.id,$=t.animated,V=t.activeKey,G=t.rtl,J=t.extra,se=t.editable,Q=t.locale,X=t.tabPosition,oe=t.tabBarGutter,z=t.children,q=t.onTabClick,ae=t.onTabScroll,Y=Object(n.useRef)(),ue=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_a(),ce=Object(W.a)(ne,2),fe=ce[0],re=ce[1],H=X==="top"||X==="bottom",le=sa(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(W.a)(le,2),he=ye[0],Oe=ye[1],We=sa(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),Ce=Object(W.a)(We,2),Fe=Ce[0],Te=Ce[1],Be=Object(n.useState)(0),Pe=Object(W.a)(Be,2),Se=Pe[0],$e=Pe[1],qe=Object(n.useState)(0),Ve=Object(W.a)(qe,2),ze=Ve[0],Qe=Ve[1],Le=Object(n.useState)(0),Dn=Object(W.a)(Le,2),an=Dn[0],Ye=Dn[1],on=Object(n.useState)(0),yn=Object(W.a)(on,2),bn=yn[0],Ae=yn[1],Ge=Object(n.useState)(null),_e=Object(W.a)(Ge,2),Ze=_e[0],wn=_e[1],zn=Object(n.useState)(null),Wn=Object(W.a)(zn,2),rn=Wn[0],Sn=Wn[1],ln=Object(n.useState)(0),Pn=Object(W.a)(ln,2),en=Pn[0],sn=Pn[1],jn=Object(n.useState)(0),cn=Object(W.a)(jn,2),ke=cn[0],He=cn[1],Jn=On(new Map),xn=Object(W.a)(Jn,2),et=xn[0],Cn=xn[1],hn=P(g,et,Se),Gn="".concat(E,"-nav-operations-hidden"),En=0,mn=0;H?G?(En=0,mn=Math.max(0,Se-Ze)):(En=Math.min(0,Ze-Se),mn=0):(En=Math.min(0,rn-ze),mn=0);function Hn(te){return te<En?En:te>mn?mn:te}var An=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(W.a)(Qn,2),In=dn[0],ve=dn[1];function Re(){ve(Date.now())}function Ke(){window.clearTimeout(An.current)}qa(Y,function(te,Z){function Ee(Je,un){Je(function(Un){var Zn=Hn(Un+un);return Zn})}if(H){if(Ze>=Se)return!1;Ee(Oe,te)}else{if(rn>=ze)return!1;Ee(Te,Z)}return Ke(),Re(),!0}),Object(n.useEffect)(function(){return Ke(),In&&(An.current=window.setTimeout(function(){ve(0)},100)),Ke},[In]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ee=he;G?Z.right<he?Ee=Z.right:Z.right+Z.width>he+Ze&&(Ee=Z.right+Z.width-Ze):Z.left<-he?Ee=-Z.left:Z.left+Z.width>-he+Ze&&(Ee=-(Z.left+Z.width-Ze)),Te(0),Oe(Hn(Ee))}else{var Je=Fe;Z.top<-Fe?Je=-Z.top:Z.top+Z.height>-Fe+rn&&(Je=-(Z.top+Z.height-rn)),Oe(0),Te(Hn(Je))}}var Xn=j(hn,{width:Ze,height:rn,left:he,top:Fe},{width:an,height:bn},{width:en,height:ke},Object(de.a)(Object(de.a)({},t),{},{tabs:g})),gt=Object(W.a)(Xn,2),wt=gt[0],Wt=gt[1],Lt=g.map(function(te){var Z=te.key;return n.createElement($n,{id:w,prefixCls:E,key:Z,rtl:G,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:X,tabBarGutter:oe,renderWrapper:z,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:fe(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){re(Z)},onFocus:function(){nn(Z),Re(),G||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),nt=Mn(function(){var te,Z,Ee,Je,un,Un,Zn,Vt,Ut,or=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,lr=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ee=be.current)===null||Ee===void 0?void 0:Ee.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((un=k.current)===null||un===void 0?void 0:un.offsetWidth)||0,cr=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;wn(or),Sn(lr),sn(ma),He(fa);var pa=(((Zn=ue.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-ma,va=(((Vt=ue.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Qe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Gn);Ye(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),Cn(function(){var ga=new Map;return g.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=g.slice(0,wt),ut=g.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ut)),$t=Object(n.useState)(),Ct=Object(W.a)($t,2),Et=Ct[0],tt=Ct[1],Bn=hn.get(V),Ft=Object(n.useRef)();function Ot(){Xe.a.cancel(Ft.current)}Object(n.useEffect)(function(){var te={};return Bn&&(H?(G?te.right=Bn.right:te.left=Bn.left,te.width=Bn.width):(te.top=Bn.top,te.height=Bn.height)),Ot(),Ft.current=Object(Xe.a)(function(){tt(te)}),Ot},[Bn,H,G]),Object(n.useEffect)(function(){nn()},[V,Bn,hn,H]),Object(n.useEffect)(function(){nt()},[G,oe,V,g.map(function(te){return te.key}).join("_")]);var ot=!!bt.length,Yn="".concat(E,"-nav-wrap"),lt,dt,Rt,Dt;return H?G?(dt=he>0,lt=he+Ze<Se):(lt=he<0,dt=-he+Ze<Se):(Rt=Fe<0,Dt=-Fe+rn<ze),n.createElement("div",{ref:i,role:"tablist",className:je()("".concat(E,"-nav"),O),style:R,onKeyDown:function(){Re()}},n.createElement(ua,{position:"left",extra:J,prefixCls:E}),n.createElement(Ln.default,{onResize:nt},n.createElement("div",{className:je()(Yn,(c={},Object(me.a)(c,"".concat(Yn,"-ping-left"),lt),Object(me.a)(c,"".concat(Yn,"-ping-right"),dt),Object(me.a)(c,"".concat(Yn,"-ping-top"),Rt),Object(me.a)(c,"".concat(Yn,"-ping-bottom"),Dt),c)),ref:Y},n.createElement(Ln.default,{onResize:nt},n.createElement("div",{ref:ue,className:"".concat(E,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Fe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:E,locale:Q,editable:se,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:je()("".concat(E,"-ink-bar"),Object(me.a)({},"".concat(E,"-ink-bar-animated"),$.inkBar)),style:Et}))))),n.createElement(Za,Object(L.a)({},t,{ref:k,prefixCls:E,tabs:bt,className:!ot&&Gn})),n.createElement(ua,{position:"right",extra:J,prefixCls:E}))}var oa=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,y=t.animated,E=t.tabPosition,g=t.rtl,O=t.destroyInactiveTabPane,R=n.useContext(Tt),w=R.prefixCls,$=R.tabs,V=y.tabPane,G=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:je()("".concat(w,"-content-holder"))},n.createElement("div",{className:je()("".concat(w,"-content"),"".concat(w,"-content-").concat(E),Object(me.a)({},"".concat(w,"-content-animated"),V)),style:G&&V?Object(me.a)({},g?"marginRight":"marginLeft","-".concat(G,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:w,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:O})})))}function la(t){var i=t.prefixCls,c=t.forceRender,y=t.className,E=t.style,g=t.id,O=t.active,R=t.animated,w=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,G=n.useState(c),J=Object(W.a)(G,2),se=J[0],Q=J[1];n.useEffect(function(){O?Q(!0):w&&Q(!1)},[O,w]);var X={};return O||(R?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!O,style:Object(de.a)(Object(de.a)({},X),E),className:je()("".concat(i,"-tabpane"),O&&"".concat(i,"-tabpane-active"),y)},(O||se||c)&&V)}var da=0;function tr(t){return Object(Tn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(de.a)(Object(de.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,y=t.id,E=t.prefixCls,g=E===void 0?"rc-tabs":E,O=t.className,R=t.children,w=t.direction,$=t.activeKey,V=t.defaultActiveKey,G=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=t.tabPosition,X=Q===void 0?"top":Q,oe=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Y=t.moreIcon,ue=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,fe=t.onTabScroll,re=Object(Ie.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),le=w==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(de.a)({inkBar:!0,tabPane:!1},Object(tn.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Oe=Object(W.a)(he,2),We=Oe[0],Ce=Oe[1];Object(n.useEffect)(function(){Ce(Object(Kn.a)())},[]);var Fe=Object(Fn.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:V}),Te=Object(W.a)(Fe,2),Be=Te[0],Pe=Te[1],Se=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Be})}),$e=Object(W.a)(Se,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(_e){return _e.key===Be});if(Ae===-1){var Ge;Ae=Math.max(0,Math.min(qe,H.length-1)),Pe((Ge=H[Ae])===null||Ge===void 0?void 0:Ge.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Be,qe]);var ze=Object(Fn.a)(null,{value:y}),Qe=Object(W.a)(ze,2),Le=Qe[0],Dn=Qe[1],an=X;We&&!["left","right"].includes(X)&&(an="top"),Object(n.useEffect)(function(){y||(Dn("rc-tabs-".concat(da)),da+=1)},[]);function Ye(Ae,Ge){ce==null||ce(Ae,Ge),Pe(Ae),ne==null||ne(Ae)}var on={id:Le,activeKey:Be,animated:ye,tabPosition:an,rtl:le,mobile:We},yn,bn=Object(de.a)(Object(de.a)({},on),{},{editable:G,locale:ae,moreIcon:Y,moreTransitionName:ue,tabBarGutter:oe,onTabClick:Ye,onTabScroll:fe,extra:q,style:z,panes:R});return be?yn=be(bn,oa):yn=n.createElement(oa,bn),n.createElement(Tt.Provider,{value:{tabs:H,prefixCls:g}},n.createElement("div",Object(L.a)({ref:i,id:y,className:je()(g,"".concat(g,"-").concat(an),(c={},Object(me.a)(c,"".concat(g,"-mobile"),We),Object(me.a)(c,"".concat(g,"-editable"),G),Object(me.a)(c,"".concat(g,"-rtl"),le),c),O)},re),yn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:k},on,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=la;var rr=ca,ir=rr,Kt=e("MZF8"),vn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function Mt(t,i){var c,y=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return y||(y=i.tsx?"tsx":"jsx"),y}var ur=t=>{var i,c,y,E=Object(n.useRef)(),g=Object(n.useContext)(vn.context),O=g.locale,R=Object(vn.useLocaleProps)(O,t),w=Object(vn.useDemoUrl)(R.identifier),$=R.demoUrl||w,V=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(vn.useCodeSandbox)((i=R.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:R),se=Object(vn.useRiddle)((c=R.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:R),Q=Object(vn.useMotions)(R.motions||[],E.current),X=Object(x.default)(Q,2),oe=X[0],z=X[1],q=Object(vn.useCopy)(),ae=Object(x.default)(q,2),Y=ae[0],ue=ae[1],k=Object(n.useState)("_"),be=Object(x.default)(k,2),ne=be[0],ce=be[1],fe=Object(n.useState)(Mt(ne,R.sources[ne])),re=Object(x.default)(fe,2),H=re[0],le=re[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(x.default)(ye,2),Oe=he[0],We=he[1],Ce=Object(n.useState)(Math.random()),Fe=Object(x.default)(Ce,2),Te=Fe[0],Be=Fe[1],Pe=R.sources[ne][H]||R.sources[ne].content,Se=Object(vn.useTSPlaygroundUrl)(O,Pe),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(x.default)(qe,1),ze=Ve[0];Object(n.useEffect)(()=>{Be(Math.random())},[ze]);function Qe(Le){ce(Le),le(Mt(Le,R.sources[Le]))}return C.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Te,src:$,ref:$e}):R.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&C.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),R.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>oe()}),R.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Be(Math.random())}),!((y=R.hideActions)!==null&&y!==void 0&&y.includes("EXTERNAL"))&&C.a.createElement(vn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>Y(Pe)}),H==="tsx"&&Oe&&C.a.createElement(vn.Link,{target:"_blank",to:Se},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Oe)})),Oe&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&C.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Qe},Object.keys(R.sources).map(Le=>C.a.createElement(la,{tab:Le==="_"?"index.".concat(Mt(Le,R.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sr.a,{code:Pe,lang:H,showCopy:!1}))))},Cr=gn.default=ur},"80pN":function(Nn,gn,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),L=e("i8i4"),me=e("QCnb");function W(f){for(var I="https://reactjs.org/docs/error-decoder.html?invariant="+f,N=1;N<arguments.length;N++)I+="&args[]="+encodeURIComponent(arguments[N]);return"Minified React error #"+f+"; visit "+I+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Ie(f){var I=f,N=f;if(f.alternate)for(;I.return;)I=I.return;else{f=I;do I=f,(I.effectTag&1026)!=0&&(N=I.return),f=I.return;while(f)}return I.tag===3?N:null}function de(f){if(Ie(f)!==f)throw Error(W(188))}function at(f){var I=f.alternate;if(!I){if(I=Ie(f),I===null)throw Error(W(188));return I!==f?null:f}for(var N=f,pe=I;;){var ee=N.return;if(ee===null)break;var De=ee.alternate;if(De===null){if(pe=ee.return,pe!==null){N=pe;continue}break}if(ee.child===De.child){for(De=ee.child;De;){if(De===N)return de(ee),f;if(De===pe)return de(ee),I;De=De.sibling}throw Error(W(188))}if(N.return!==pe.return)N=ee,pe=De;else{for(var Ue=!1,xe=ee.child;xe;){if(xe===N){Ue=!0,N=ee,pe=De;break}if(xe===pe){Ue=!0,pe=ee,N=De;break}xe=xe.sibling}if(!Ue){for(xe=De.child;xe;){if(xe===N){Ue=!0,N=De,pe=ee;break}if(xe===pe){Ue=!0,pe=De,N=ee;break}xe=xe.sibling}if(!Ue)throw Error(W(189))}}if(N.alternate!==pe)throw Error(W(190))}if(N.tag!==3)throw Error(W(188));return N.stateNode.current===N?f:I}function je(){return!0}function Tn(){return!1}function Kn(f,I,N,pe){this.dispatchConfig=f,this._targetInst=I,this.nativeEvent=N,f=this.constructor.Interface;for(var ee in f)f.hasOwnProperty(ee)&&((I=f[ee])?this[ee]=I(N):ee==="target"?this.target=pe:this[ee]=N[ee]);return this.isDefaultPrevented=(N.defaultPrevented!=null?N.defaultPrevented:N.returnValue===!1)?je:Tn,this.isPropagationStopped=Tn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){this.isPersistent=je},isPersistent:Tn,destructor:function(){var f=this.constructor.Interface,I;for(I in f)this[I]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Tn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(f){function I(){}function N(){return pe.apply(this,arguments)}var pe=this;I.prototype=pe.prototype;var ee=new I;return n(ee,N.prototype),N.prototype=ee,N.prototype.constructor=N,N.Interface=n({},pe.Interface,f),N.extend=pe.extend,Xe(N),N},Xe(Kn);function Fn(f,I,N,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,f,I,N,pe),ee}return new this(f,I,N,pe)}function fn(f){if(!(f instanceof this))throw Error(W(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Xe(f){f.eventPool=[],f.getPooled=Fn,f.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(f,I){var N={};return N[f.toLowerCase()]=I.toLowerCase(),N["Webkit"+f]="webkit"+I,N["Moz"+f]="moz"+I,N}var On={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},Me={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function $n(f){if(Me[f])return Me[f];if(!On[f])return f;var I=On[f],N;for(N in I)if(I.hasOwnProperty(N)&&N in kn)return Me[f]=I[N];return f}var rt=$n("animationend"),P=$n("animationiteration"),S=$n("animationstart"),j=$n("transitionend"),d=null;function o(f){if(d===null)try{var I=("require"+Math.random()).slice(0,7);d=(x&&x[I])("timers").setImmediate}catch(N){d=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return d(f)}var p=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=p[11],F=p[12],a=L.unstable_batchedUpdates,u=tn.IsSomeRendererActing,s=typeof me.unstable_flushAllWithoutAsserting=="function",B=me.unstable_flushAllWithoutAsserting||function(){for(var f=!1;b();)f=!0;return f};function T(f){try{B(),o(function(){B()?T(f):f()})}catch(I){f(I)}}var D=0,l=!1,K=L.findDOMNode,m=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=m[0],h=m[4],v=m[5],A=m[6],M=m[7],U=m[8],_=m[9],ie=m[10];function ge(){}function pn(f,I){if(!f)return[];if(f=at(f),!f)return[];for(var N=f,pe=[];;){if(N.tag===5||N.tag===6||N.tag===1||N.tag===0){var ee=N.stateNode;I(ee)&&pe.push(ee)}if(N.child)N.child.return=N,N=N.child;else{if(N===f)return pe;for(;!N.sibling;){if(!N.return||N.return===f)return pe;N=N.return}N.sibling.return=N.return,N=N.sibling}}}function we(f,I){if(f&&!f._reactInternalFiber){var N=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":N==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":N,Error(W(286,I,f))}}var Ne={renderIntoDocument:function(f){var I=document.createElement("div");return L.render(f,I)},isElement:function(f){return C.isValidElement(f)},isElementOfType:function(f,I){return C.isValidElement(f)&&f.type===I},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&C.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Ne.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,I){return Ne.isCompositeComponent(f)?f._reactInternalFiber.type===I:!1},findAllInRenderedTree:function(f,I){return we(f,"findAllInRenderedTree"),f?pn(f._reactInternalFiber,I):[]},scryRenderedDOMComponentsWithClass:function(f,I){return we(f,"scryRenderedDOMComponentsWithClass"),Ne.findAllInRenderedTree(f,function(N){if(Ne.isDOMComponent(N)){var pe=N.className;typeof pe!="string"&&(pe=N.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(I)){if(I===void 0)throw Error(W(11));I=I.split(/\s+/)}return I.every(function(De){return ee.indexOf(De)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,I){if(we(f,"findRenderedDOMComponentWithClass"),f=Ne.scryRenderedDOMComponentsWithClass(f,I),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+I);return f[0]},scryRenderedDOMComponentsWithTag:function(f,I){return we(f,"scryRenderedDOMComponentsWithTag"),Ne.findAllInRenderedTree(f,function(N){return Ne.isDOMComponent(N)&&N.tagName.toUpperCase()===I.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,I){if(we(f,"findRenderedDOMComponentWithTag"),f=Ne.scryRenderedDOMComponentsWithTag(f,I),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+I);return f[0]},scryRenderedComponentsWithType:function(f,I){return we(f,"scryRenderedComponentsWithType"),Ne.findAllInRenderedTree(f,function(N){return Ne.isCompositeComponentWithType(N,I)})},findRenderedComponentWithType:function(f,I){if(we(f,"findRenderedComponentWithType"),f=Ne.scryRenderedComponentsWithType(f,I),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+I);return f[0]},mockComponent:function(f,I){return I=I||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return C.createElement(I,null,this.props.children)}),this},nativeTouchData:function(f,I){return{touches:[{pageX:f,pageY:I}]}},Simulate:null,SimulateNative:{},act:function(f){function I(){D--,u.current=N,F.current=pe}l===!1&&(l=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),D++;var N=u.current,pe=F.current;u.current=!0,F.current=!0;try{var ee=a(f)}catch(De){throw I(),De}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(De,Ue){ee.then(function(){1<D||s===!0&&N===!0?(I(),De()):T(function(xe){I(),xe?Ue(xe):De()})},function(xe){I(),Ue(xe)})}};try{D!==1||s!==!1&&N!==!1||B(),I()}catch(De){throw I(),De}return{then:function(De){De()}}}};function Rn(f){return function(I,N){if(C.isValidElement(I))throw Error(W(228));if(Ne.isCompositeComponent(I))throw Error(W(229));var pe=h[f],ee=new ge;ee.target=I,ee.type=f.toLowerCase();var De=r(I),Ue=new Kn(pe,De,ee,I);Ue.persist(),n(Ue,N),pe.phasedRegistrationNames?v(Ue):A(Ue),L.unstable_batchedUpdates(function(){M(I),ie(Ue)}),U()}}Ne.Simulate={};for(var it in h)Ne.Simulate[it]=Rn(it);function qn(f,I){return function(N,pe){var ee=new ge(f);n(ee,pe),Ne.isDOMComponent(N)?(N=K(N),ee.target=N,_(I,1,document,ee)):N.tagName&&(ee.target=N,_(I,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[P,"animationIteration"],[S,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[j,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var I=f[1];Ne.SimulateNative[I]=qn(I,f[0])}),x.exports=Ne.default||Ne}).call(this,e("hOG+")(Nn))},JjdP:function(Nn,gn,e){"use strict";e.r(gn);var x=e("9og8"),n=e("WmNS"),C=e.n(n),L=e("LtsZ"),me=`import React, { useRef } from 'react';
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

export default Demo;`,W=`import React from 'react';
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

export default Demo;`,de=`export const basic = {
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

export default Root;`,je=`import React, { useState, useEffect } from 'react';
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
}`,Kn=`import { Select } from 'antd';
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

export default Demo;`,Mn=`import React, { useState, useRef } from 'react';
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
}`,rt=gn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return a=function(D,l){if(!l&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var K=F(l);if(K&&K.has(D))return K.get(D);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in D)if(h!=="default"&&Object.prototype.hasOwnProperty.call(D,h)){var v=r?Object.getOwnPropertyDescriptor(D,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=D[h]}return m.default=D,K&&K.set(D,m),m},F=function(D){if(typeof WeakMap!="function")return null;var l=new WeakMap,K=new WeakMap;return(F=function(r){return r?K:l})(D)},d=e("K+nK"),B.t0=d,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,o=(0,B.t0)(B.t1),B.t2=a,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,p=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,u=function(){var D=(0,p.useState)("Line"),l=(0,o.default)(D,2),K=l[0],m=l[1],r={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[K];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},B.abrupt("return",u);case 18:case"end":return B.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(B,T,D){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(T).length]}},B),o.default.createElement("p",null,JSON.stringify(T)),o.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return a=function(D,l){if(!l&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var K=F(l);if(K&&K.has(D))return K.get(D);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in D)if(h!=="default"&&Object.prototype.hasOwnProperty.call(D,h)){var v=r?Object.getOwnPropertyDescriptor(D,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=D[h]}return m.default=D,K&&K.set(D,m),m},F=function(D){if(typeof WeakMap!="function")return null;var l=new WeakMap,K=new WeakMap;return(F=function(r){return r?K:l})(D)},d=e("K+nK"),B.t0=d,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,o=(0,B.t0)(B.t1),B.t2=a,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,p=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,u=function(){var D=(0,p.useState)(!1),l=(0,o.default)(D,2),K=l[0],m=l[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:K,onChange:function(){return m(!K)}})),p.default.createElement(b.PivotTable,{leftExpandable:K,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},B.abrupt("return",u);case 18:case"end":return B.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T,D,l,K,m;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return D=function(A,M){if(!M&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var U=T(M);if(U&&U.has(A))return U.get(A);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in A)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(A,ge)){var pn=ie?Object.getOwnPropertyDescriptor(A,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=A[ge]}return _.default=A,U&&U.set(A,_),_},T=function(A){if(typeof WeakMap!="function")return null;var M=new WeakMap,U=new WeakMap;return(T=function(ie){return ie?U:M})(A)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,F=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,a=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,u=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=D,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,B=(0,h.t12)(h.t13),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(v){(0,F.default)(M,v);var A=(0,a.default)(M);function M(){return(0,p.default)(this,M),A.apply(this,arguments)}return(0,b.default)(M,[{key:"render",value:function(){var _=this.props.form;return u.default.createElement("div",null,u.default.createElement(B.default,{form:_,schema:l}),u.default.createElement(o.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),M}(u.default.Component),m=(0,B.connectForm)(K),h.abrupt("return",m);case 47:case"end":return h.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in m)if(M!=="default"&&Object.prototype.hasOwnProperty.call(m,M)){var U=A?Object.getOwnPropertyDescriptor(m,M):null;U&&(U.get||U.set)?Object.defineProperty(v,M,U):v[M]=m[M]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(m)},d=e("K+nK"),l.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return l.t0=d,l.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=l.sent,l.t4=u,l.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return l.t5=l.sent,F=(0,l.t4)(l.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(){var m=(0,F.useForm)();return p.default.createElement("div",null,p.default.createElement(F.default,{form:m,schema:s}),p.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},T=B,l.abrupt("return",T);case 27:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in m)if(M!=="default"&&Object.prototype.hasOwnProperty.call(m,M)){var U=A?Object.getOwnPropertyDescriptor(m,M):null;U&&(U.get||U.set)?Object.defineProperty(v,M,U):v[M]=m[M]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(m)},d=e("K+nK"),l.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return l.t0=d,l.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=l.sent,l.t4=u,l.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return l.t5=l.sent,F=(0,l.t4)(l.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},B=function(){var m=(0,F.useForm)(),r=function(v,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(v,null,2))};return p.default.createElement("div",null,p.default.createElement(F.default,{form:m,schema:s,onFinish:r}),p.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},T=B,l.abrupt("return",T);case 27:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return u=function(){var l=(0,p.useForm)(),K=function(r,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(p.default,{form:l,schema:a,onFinish:K}),o.default.createElement("button",{onClick:l.submit},"\u63D0\u4EA4"))},F=function(l,K){if(!K&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=b(K);if(m&&m.has(l))return m.get(l);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in l)if(v!=="default"&&Object.prototype.hasOwnProperty.call(l,v)){var A=h?Object.getOwnPropertyDescriptor(l,v):null;A&&(A.get||A.set)?Object.defineProperty(r,v,A):r[v]=l[v]}return r.default=l,m&&m.set(l,r),r},b=function(l){if(typeof WeakMap!="function")return null;var K=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:K})(l)},d=e("K+nK"),T.t0=d,T.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=F,T.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return T.t3=T.sent,p=(0,T.t2)(T.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=u,T.abrupt("return",s);case 17:case"end":return T.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),b=function(B){return{type:"object",displayType:B,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(p.default,{schema:b("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(p.default,{schema:b("column")}))},u.abrupt("return",F);case 14:case"end":return u.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return o.default.createElement(p.default,{schema:b})},u.abrupt("return",F);case 14:case"end":return u.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return o.default.createElement(p.default,{readOnly:!0,schema:b})},u.abrupt("return",F);case 14:case"end":return u.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return o.default.createElement(p.default,{labelWidth:"200",schema:b})},u.abrupt("return",F);case 14:case"end":return u.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T,D,l,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return D=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=T(A);if(M&&M.has(v))return M.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,M&&M.set(v,U),U},T=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,M=new WeakMap;return(T=function(_){return _?M:A})(v)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.t8=D,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return u=r.sent,r.t10=D,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return B=r.sent,l=function(){var v=(0,s.useForm)(),A=(0,a.useState)({}),M=(0,F.default)(A,2),U=M[0],_=M[1],ie=function(){(0,B.fakeApi)("xxx/getForm").then(function(we){v.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,B.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(we,Ne){Ne.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ne.map(function(Rn){return Rn.name}))):(0,B.fakeApi)("xxx/submit",we).then(function(Rn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(s.default,{form:v,schema:U,onFinish:ge}),a.default.createElement(o.default,null,a.default.createElement(p.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=l,r.abrupt("return",K);case 48:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T,D,l,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=B(A);if(M&&M.has(v))return M.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,M&&M.set(v,U),U},B=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,M=new WeakMap;return(B=function(_){return _?M:A})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},l=function(){var v=(0,u.useForm)(),A=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(_){var ie=_.data,ge=_.errors,pn=_.schema,we=(0,p.default)(_,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Ne){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(u.default,{form:v,schema:D,beforeFinish:M,onFinish:A}),F.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},K=l,r.abrupt("return",K);case 42:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T,D,l,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=B(A);if(M&&M.has(v))return M.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,M&&M.set(v,U),U},B=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,M=new WeakMap;return(B=function(_){return _?M:A})(v)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=T,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},l=function(){var v=(0,u.useForm)(),A=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(){(0,s.fakeApi)("xxx/getForm").then(function(_){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(u.default,{form:v,schema:D,onFinish:A}),F.default.createElement(o.default,null,F.default.createElement(p.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),F.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=l,r.abrupt("return",K);case 44:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T,D,l;return C.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return B=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var A=s(v);if(A&&A.has(h))return A.get(h);var M={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in h)if(_!=="default"&&Object.prototype.hasOwnProperty.call(h,_)){var ie=U?Object.getOwnPropertyDescriptor(h,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(M,_,ie):M[_]=h[_]}return M.default=h,A&&A.set(h,M),M},s=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,A=new WeakMap;return(s=function(U){return U?A:v})(h)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,o=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=B,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return F=m.sent,m.t6=B,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,a=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return u=m.sent,T={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var h=(0,a.useForm)(),v=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(U,_){_.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):p.default.info(JSON.stringify(U))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(a.default,{form:h,schema:T,onMount:v,onFinish:A}),b.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},l=D,m.abrupt("return",l);case 37:case"end":return m.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return F=function(l,K){if(!K&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=b(K);if(m&&m.has(l))return m.get(l);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in l)if(v!=="default"&&Object.prototype.hasOwnProperty.call(l,v)){var A=h?Object.getOwnPropertyDescriptor(l,v):null;A&&(A.get||A.set)?Object.defineProperty(r,v,A):r[v]=l[v]}return r.default=l,m&&m.set(l,r),r},b=function(l){if(typeof WeakMap!="function")return null;var K=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:K})(l)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=F,T.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return T.t3=T.sent,p=(0,T.t2)(T.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},u=function(){var l=(0,p.useForm)();return o.default.createElement(p.default,{form:l,schema:a})},s=u,T.abrupt("return",s);case 17:case"end":return T.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=u.sent,F=function(){return o.default.createElement(p.default,{schema:b.expression})},u.abrupt("return",F);case 16:case"end":return u.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B;return C.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return F=function(K,m){if(!m&&K&&K.__esModule)return K;if(K===null||typeof K!="object"&&typeof K!="function")return{default:K};var r=b(m);if(r&&r.has(K))return r.get(K);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in K)if(A!=="default"&&Object.prototype.hasOwnProperty.call(K,A)){var M=v?Object.getOwnPropertyDescriptor(K,A):null;M&&(M.get||M.set)?Object.defineProperty(h,A,M):h[A]=K[A]}return h.default=K,r&&r.set(K,h),h},b=function(K){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(b=function(v){return v?r:m})(K)},D.t0=F,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,d=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=D.sent,D.t2=F,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,p=(0,D.t2)(D.t3),a=function(K){return new Promise(function(m){return setTimeout(m,K)})},u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var K=(0,p.useForm)(),m=function(){K.setValues({input1:"hello world"}),a(3e3).then(function(h){K.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:K,schema:u,onMount:m})},B=s,D.abrupt("return",B);case 20:case"end":return D.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(B){var T=B.value;console.log(T)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return o.default.createElement(p.default,{schema:b})},a=F,s.abrupt("return",a);case 16:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return F=function(l,K){if(!K&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var m=b(K);if(m&&m.has(l))return m.get(l);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in l)if(v!=="default"&&Object.prototype.hasOwnProperty.call(l,v)){var A=h?Object.getOwnPropertyDescriptor(l,v):null;A&&(A.get||A.set)?Object.defineProperty(r,v,A):r[v]=l[v]}return r.default=l,m&&m.set(l,r),r},b=function(l){if(typeof WeakMap!="function")return null;var K=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:K})(l)},T.t0=F,T.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return T.t1=T.sent,d=(0,T.t0)(T.t1),T.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=T.sent,T.t2=F,T.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return T.t3=T.sent,p=(0,T.t2)(T.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},u=function(){var l=(0,p.useForm)(),K={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){l.setValueByPath("input2",r)}};return d.default.createElement(p.default,{form:l,schema:a,watch:K})},s=u,T.abrupt("return",s);case 19:case"end":return T.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return u=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in m)if(M!=="default"&&Object.prototype.hasOwnProperty.call(m,M)){var U=A?Object.getOwnPropertyDescriptor(m,M):null;U&&(U.get||U.set)?Object.defineProperty(v,M,U):v[M]=m[M]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(m)},d=e("K+nK"),l.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return l.t0=d,l.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=u,l.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=l.sent,l.t4=u,l.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return l.t5=l.sent,F=(0,l.t4)(l.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},B=function(){var m=(0,F.useForm)(),r=function(A,M){M.length>0?alert("errorFields:"+JSON.stringify(M)):alert("formData:"+JSON.stringify(A,null,2))},h={input1:function(A){A.length>2?m.setSchemaByPath("obj1.select",function(M){var U=M.enumNames;return{enumNames:U.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(F.default,{form:m,schema:s,onFinish:r,watch:h}),p.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},T=B,l.abrupt("return",T);case 27:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B,T,D,l,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return B=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=s(A);if(M&&M.has(v))return M.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,M&&M.set(v,U),U},s=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,M=new WeakMap;return(s=function(_){return _?M:A})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=B,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=B,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),T={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(v){return console.log("widget props:",v),F.default.createElement(p.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},v))},l=function(){var v=(0,u.useForm)(),A=function(){};return F.default.createElement("div",null,F.default.createElement(u.default,{readOnly:!0,form:v,schema:T,widgets:{site:D},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),F.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},K=l,r.abrupt("return",K);case 40:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=u.sent,F=function(){return o.default.createElement(p.default,{schema:b.basic})},u.abrupt("return",F);case 16:case"end":return u.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=u.sent,F=function(){return o.default.createElement(p.default,{schema:b.titleTrick})},u.abrupt("return",F);case 16:case"end":return u.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:je},"json/simplest.json":{import:"./json/simplest.json",content:Tn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Kn},"monaco/index.js":{import:"./monaco",content:Fn},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Xe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a,u,s,B;return C.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return d=e("K+nK"),D.t0=d,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,o=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"P2DI"));case 8:for(p=D.sent,b=[],F=0;F<6;F++)b.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},u=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(K,m){return o.default.createElement("a",{onClick:function(){return alert(K.title)}},"\u7F16\u8F91")}}],s=function(){var K=function(){return{rows:b,total:b.length}};return o.default.createElement(p.TableProvider,null,o.default.createElement(p.Search,{schema:a,api:K}),o.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:u,rowKey:"id"}))},B=s,D.abrupt("return",B);case 16:case"end":return D.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){var d,o,p,b,F,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},F=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(p.default,{defaultValue:b}))},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:On}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:Me}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(x.a)(C.a.mark(function j(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Nn,gn,e){},Zs1V:function(Nn){Nn.exports=JSON.parse("{}")},p8sG:function(Nn,gn,e){"use strict";Nn.exports=e("80pN")},pz0r:function(Nn,gn,e){"use strict";e.r(gn);var x=e("q1tI"),n=e.n(x),C=e("dEAq"),L=e.n(C),me=e("0zqC"),W=e("ZpkN"),tn=e("JjdP"),Ie=n.a.memo(tn.default["migrate-demo"].component);gn.default=de=>(n.a.useEffect(()=>{de!=null&&de.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(de.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"0x-\u5230-1x"},n.a.createElement(C.AnchorLink,{to:"#0x-\u5230-1x","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"0.x \u5230 1.x"),n.a.createElement("h2",{id:"\u4E09\u4E2A\u6539\u53D8"},n.a.createElement(C.AnchorLink,{to:"#\u4E09\u4E2A\u6539\u53D8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u4E2A\u6539\u53D8"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v1.0.0 \u7684\u5347\u7EA7\uFF0C\u4ECE\u4F7F\u7528\u65B9\u89C6\u89D2\u6765\u770B\uFF0C\u6700\u4E3B\u8981\u7684\u53D8\u52A8\u5F52\u7ED3\u4E3A\u4E09\u6761\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u63D0\u4EA4\u7684\u65B9\u6CD5\u6536\u675F\uFF08\u5373\u7EDF\u4E00\u63D0\u4F9B submit \u65B9\u6CD5\uFF09\uFF0CformData \u548C\u6821\u9A8C\u4FE1\u606F\u5185\u7F6E")),n.a.createElement("li",null,n.a.createElement("p",null,"Schema \u4E66\u5199\u89C4\u5219\u66F4\u52A0\u6E05\u6670\uFF0C\u66F4\u52A0\u8D34\u8FD1\u7EC4\u4EF6 props")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u518D\u8981\u201C\u5957\u58F3\u201D\uFF0C\u5F88\u591A antd \u7EC4\u4EF6\u76F4\u63A5\u62FF\u6765\u80FD\u7528"))),n.a.createElement("p",null,"\u7B2C 1 \u6761\u662F\u4E3A\u4E86\u66F4\u52A0\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u540E\u4E24\u6761\u5219\u4E3A\u4E86\u66F4\u52A0\u5FEB\u6377\u548C\u8212\u9002\u7684\u5F00\u53D1\u4F53\u9A8C\u3002FormRender 1.0 \u5E26\u6765\u4E86\u54EA\u4E9B\u65B0\u529F\u80FD\uFF0C\u8BE6\u89C1\u6587\u7AE0\u5E95\u90E8 ",n.a.createElement("code",null,"Changelog \u601D\u8003")),n.a.createElement("h2",{id:"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"},n.a.createElement(C.AnchorLink,{to:"#\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),n.a.createElement(W.a,{code:`import React, { useState } from 'react';
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

export default Demo;`,lang:"js"}),n.a.createElement("h3",{id:"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"},n.a.createElement(C.AnchorLink,{to:"#\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"),n.a.createElement("p",null,"\u5B8C\u5168\u4F7F\u7528\u65B0 api\uFF0CformData \u548C onChange \u8FD9\u4E9B\u539F\u672C\u66B4\u9732\u5728\u5916\u7684\u5C5E\u6027\u6536\u675F\uFF0Csubmit \u65B9\u6CD5\u7531 form \u5B9E\u4F8B\u63D0\u4F9B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8FC1\u79FB\u4E5F\u5FEB\u7684\uFF0C\u53EA\u662F\u8981\u6CE8\u610F\u6240\u6709\u5728\u5916\u90E8\u4F7F\u7528\u5230 formData \u7684\u573A\u666F\uFF0C\u9700\u8981\u66FF\u6362\u4E3A ",n.a.createElement("code",null,"form.getValues()"),"\uFF0C\u6240\u6709\u4F7F\u7528\u5230 onChange \u7684\u5730\u65B9\u9700\u8981\u4FEE\u6539\u4E3A ",n.a.createElement("code",null,"form.setValues()"))),n.a.createElement(me.default,tn.default["migrate-demo"].previewerProps,n.a.createElement(Ie,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u7531\u4E8E\u65B0\u7248\u7684 formData/onChange/validate/onValidate \u5168\u90E8\u5185\u7F6E\u4E86\uFF0C\u6240\u4EE5\u5728\u8FC1\u79FB\u65F6\uFF0C\u5916\u90E8\u6240\u6709\u4F7F\u7528\u5230\u4E09\u8005\u7684\u5730\u65B9\u4E00\u5F8B\u4F7F\u7528 form \u65B9\u6CD5\u66FF\u6362\uFF1A"),n.a.createElement(W.a,{code:`formData  ->  form.getValues()
onChange  ->  form.setValues(data)
validate  ->  form.errorFields
onValidate  ->  \u76F4\u63A5\u53BB\u6389`,lang:"js"}),n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4FA7\u7684 0.x \u4E0E 1.x \u7684\u4F7F\u7528\u5BF9\u6BD4\uFF1A"),n.a.createElement(W.a,{code:`// 0.x
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
};`,lang:"js"}),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"onChange")," \u4E0D\u518D\u63A5\u6536 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u800C\u6539\u4E3A\u66F4\u4E3A\u81EA\u7136\u7684\u53EA\u6709\u4E00\u4E2A\u5165\u53C2 value"),n.a.createElement("li",null,"\u6240\u6709",n.a.createElement("code",null,"ui:options"),"\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u5728 props \u91CC\u62FF\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u4ECE props.options \u91CC\u83B7\u53D6 \uFF08ui:options \u5DF2\u66F4\u540D\u4E3A props\uFF0C\u4E0D\u8FC7\u5728\u9876\u5C42\u505A\u4E86 schema \u5B57\u6BB5\u7684\u517C\u5BB9\uFF09")),n.a.createElement("h2",{id:"schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8"},n.a.createElement(C.AnchorLink,{to:"#schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u7EC6\u8282\u4E0A\u7684\u6539\u52A8"),n.a.createElement("p",null,"\u5355\u9009\u7EC4\u4EF6\u4E0D\u518D\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u9ED8\u8BA4\u503C\u4E3A undefined\uFF0C\u9664\u975E\u901A\u8FC7 default \u5B57\u6BB5\u6307\u660E\u3002"),n.a.createElement(W.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}`,lang:"js"}),n.a.createElement("h2",{id:"changelog-\u601D\u8003"},n.a.createElement(C.AnchorLink,{to:"#changelog-\u601D\u8003","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Changelog \u601D\u8003"),n.a.createElement("p",null,"\u5728\u6700\u540E\u7F57\u5217\u4E00\u4E0B\u7EC6\u8282\u4E0A FormRender 0.x -> 1.0 \u7EC6\u8282\u4E0A\u7684\u6539\u52A8 & \u601D\u8003"),n.a.createElement("h3",{id:"\u529F\u80FD\u589E\u5F3A"},n.a.createElement(C.AnchorLink,{to:"#\u529F\u80FD\u589E\u5F3A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD\u589E\u5F3A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5C55\u793A\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5217\u8868\u7684\u5C55\u793A\u652F\u6301\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5206\u522B\u652F\u6301\u6BCF\u4E2A item 1-2 \u4E2A\u5143\u7D20\uFF0C3-5 \u4E2A\u5143\u7D20\u548C\u590D\u6742\u7ED3\u6784"),n.a.createElement("li",null,"\u5BF9\u8C61\u7684\u5C55\u793A\u652F\u6301\u4E8C\u79CD\u6A21\u5F0F"),n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A\u548C antd \u6548\u679C\u4E00\u81F4"),n.a.createElement("li",null,"\u5C55\u793A\u7C7B\u578B\u9664\u4E86\u57FA\u7840\u7684 column \u548C row\uFF0C\u8FD8\u652F\u6301\u4E86 inline \u6A21\u5F0F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5185\u7F6E\u7EC4\u4EF6\u66F4\u4E30\u5BCC")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u65B0\u589E\u4E86 rate\uFF0CtreeSelect, cascader \u7B49\u7EC4\u4EF6\u7684\u5185\u7F6E\u652F\u6301"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u66F4\u4FBF\u6377\uFF0C\u529F\u80FD\u66F4\u5F3A\u5927")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"props \u76F4\u63A5\u900F\u4F20\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4ECE options \u5B57\u6BB5\u91CC\u53BB\u53D6\u5F97")),n.a.createElement("li",null,n.a.createElement("p",null,"onChange \u65B9\u6CD5\u7684\u5165\u53C2\u4E0D\u518D\u9700\u8981\u4F20 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u8FD9\u4E2A\u8BBE\u8BA1\u5176\u5B9E\u5F88\u4E0D\u81EA\u7136\u548C\u6CA1\u6709\u5FC5\u8981\uFF09\uFF0C\u540C\u65F6\u5982\u679C\u539F\u751F\u7EC4\u4EF6\u7684 onChange \u8FD4\u56DE\u7684\u662F event\uFF0C\u4E5F\u4F1A\u5904\u7406\u4E00\u6B65\u81EA\u52A8\u80FD\u62FF\u5230 value \u503C")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u4E86 onItemChange(namePath, value) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u8868\u5355\u4EFB\u4F55\u6570\u636E\u7684\u503C")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u8FD9\u4E9B\u7EC6\u8282\u7684\u76EE\u6807\uFF0C\u662F\u8BA9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4E66\u5199\u8D34\u8FD1\u62FF\u6765\u4E00\u4E2A\u7EC4\u4EF6\u76F4\u63A5\u80FD\u7528\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u4E00\u6837\u518D\u7B80\u5355\u7684\u573A\u666F\u4E5F\u9700\u8981\u505A\u4E00\u6B65\u5305\u88C5\u5904\u7406\uFF0C\u4ECE\u539F\u672C\u7684\uFF1A")),n.a.createElement(W.a,{code:`const schema = {
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
};`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53D8\u4E3A\uFF1A")),n.a.createElement(W.a,{code:`const schema = {
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
};`,lang:"js"})))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6821\u9A8C\u4E30\u5BCC\u5EA6\u548C\u4F53\u9A8C\u5927\u5E45\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A & \u5C55\u793A\u5B9E\u9645\u7EC8\u4E8E\u7B26\u5408\u7528\u6237\u4E60\u60EF\u4E86"),n.a.createElement("li",null,"\u4E0D\u518D\u53EA\u652F\u6301 pattern \u6821\u9A8C\u4E86\uFF0C\u73B0\u5728\u652F\u6301\u5305\u62EC\u81EA\u5B9A\u4E49 validator \u7684\u6240\u6709 antd form \u652F\u6301\u7684\u6821\u9A8C"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5F02\u6B65\u4E86"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5916\u90E8\u6821\u9A8C\u7ED3\u679C\u56DE\u586B\u5C55\u793A\u4E86"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4ED6")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u672A\u538B\u7F29\u7684\u5305\u4F53\u79EF\u4ECE 76k -> 11k"),n.a.createElement("li",null,"\u5BF9 typescript \u7684\u5185\u7F6E\u652F\u6301"),n.a.createElement("li",null,"\u6E32\u67D3\u4F1A\u6839\u636E schema \u7684\u7ED3\u6784\u6765\u6E32\u67D3\uFF0C\u4E0D\u518D\u4F1A\u56E0\u4E3A formData \u503C\u7684\u987A\u5E8F\u53D8\u5316\u5F71\u54CD\u5230\u5C55\u793A"),n.a.createElement("li",null,"\u63D0\u4EA4\u7684 formData\uFF0C\u4E0D\u5C55\u793A\u7684 key \u4E0D\u4F1A\u8FD4\u56DE")))),n.a.createElement("h3",{id:"\u8BBE\u8BA1\u53D6\u820D"},n.a.createElement(C.AnchorLink,{to:"#\u8BBE\u8BA1\u53D6\u820D","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u53D6\u820D"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6682\u65F6\u4E0D\u652F\u6301 fusion \u4E86"),"\uFF1Afusion \u4E0E antd \u5C55\u793A\u4E0A\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u7EC4\u4EF6 api \u672C\u8EAB\u4EE5\u53CA\u6784\u5EFA\u5C42\u9762\u7684\u914D\u7F6E\u4E0A\u8FD8\u662F\u6709\u4E0D\u5C11\u4E0D\u540C\u7684\uFF0C\u5BF9\u4E24\u8005\u7684\u540C\u65F6\u652F\u6301\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u3002FormRender \u9009\u62E9\u6682\u65F6\u653E\u5F03 fusion\uFF0C\u66F4\u52A0\u8D34\u5408 antd\uFF0C\u5728\u529F\u80FD\u6DF1\u5165\u5B9E\u73B0\u548C\u8FED\u4EE3\u6548\u7387\u4E0A\u90FD\u4F1A\u6709\u5F88\u5927\u7684\u63D0\u9AD8\u3002\u4F46\u7EC4\u4EF6\u5E93\u7684\u5165\u53E3\u662F\u4E00\u76F4\u5F00\u653E\u7740\u7684\uFF08widgets props\uFF09\uFF0C\u6B22\u8FCE pr \u652F\u6301 fusion \u4FA7\u7684\u7EC4\u4EF6\u7684\u72EC\u7ACB\u652F\u6301\u3002")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u51FD\u6570\u8868\u8FBE\u5F0F"),"\uFF1A\u7531\u4E8E schema \u53EF\u4EE5\u662F js \u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E4B\u524D\u652F\u6301 schema \u91CC\u6709\u51FD\u6570\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5728\u6E32\u67D3\u524D\u8BA1\u7B97\u51FA\u51FD\u6570\u7684 return \u4F5C\u4E3A\u6E32\u67D3\u503C\u3002\u4F46\u7EC4\u4EF6\u7684 props \u4EE5\u53CA\u6821\u9A8C\u51FD\u6570\u53EF\u80FD\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u662F\u4E0D\u5E0C\u671B\u88AB\u63D0\u524D\u8BA1\u7B97\u7684\uFF0C\u800C\u53EA\u662F\u4F5C\u4E3A props \u4F20\u5165\u3002FR \u5E76\u6CA1\u6709\u5F88\u597D\u7684\u529E\u6CD5\u533A\u5206\u4E00\u4E2A\u51FD\u6570\u662F\u9700\u8981\u88AB\u76F4\u63A5\u6267\u884C\u8FD8\u662F\u539F\u6837\u4F5C\u4E3A\u51FD\u6570\u900F\u4F20\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u53D6\u820D\u662F\uFF0C\u4E0D\u5141\u8BB8\u51FD\u6570 props \u6216\u8005\u4E0D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u3002\u7531\u4E8E\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u6709\u5B57\u7B26\u4E32\u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u529F\u80FD\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5141\u8BB8\u51FD\u6570\u4F5C\u4E3A props\uFF0C\u6211\u4EEC\u4E0D\u518D\u652F\u6301\u51FD\u6570\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u3002"),n.a.createElement(W.a,{code:`showMore: {
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
