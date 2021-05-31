(window.webpackJsonp=window.webpackJsonp||[]).push([[33,10],{"0zqC":function(Kn,gn,e){"use strict";e.r(gn);var G=e("tJVT"),n=e("q1tI"),C=e.n(n),W=e("wx14"),de=e("rePB"),L=e("ODXe"),Qe=e("U8pU"),Ne=e("Ff2n"),ve=e("VTBJ"),Rn=e("TSYQ"),Fe=e.n(Rn),Mn=e("Zm9Q"),Bn=e("5Z9U"),En=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),$n=e("t23M");function wn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function y(){for(var O=arguments.length,g=new Array(O),E=0;E<O;E++)g[E]=arguments[E];c.current||(Ye.a.cancel(i.current),i.current=Object(Ye.a)(function(){t.apply(void 0,g)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ye.a.cancel(i.current)}},[]),y}function Sn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),y=Object(L.a)(c,2),O=y[1],g=Object(n.useRef)(typeof t=="function"?t():t),E=wn(function(){var w=g.current;i.current.forEach(function($){w=$(w)}),i.current=[],g.current=w,O({})});function S(w){i.current.push(w),E()}return[g.current,S]}var Be=e("4IlW");function qn(t,i){var c,y=t.prefixCls,O=t.id,g=t.active,E=t.rtl,S=t.tab,w=S.key,$=S.tab,V=S.disabled,H=S.closeIcon,J=t.tabBarGutter,se=t.tabPosition,X=t.closable,Q=t.renderWrapper,le=t.removeAriaLabel,z=t.editable,q=t.onClick,ae=t.onRemove,Y=t.onFocus,oe="".concat(y,"-tab");n.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[E?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=z&&X!==!1&&!V;function ne(re){V||q(re)}function ce(re){re.preventDefault(),re.stopPropagation(),z.onEdit("remove",{key:w,event:re})}var me=n.createElement("div",{key:w,ref:i,className:Fe()(oe,(c={},Object(de.a)(c,"".concat(oe,"-with-remove"),be),Object(de.a)(c,"".concat(oe,"-active"),g),Object(de.a)(c,"".concat(oe,"-disabled"),V),c)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(w),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(w),"aria-disabled":V,tabIndex:V?null:0,onClick:function(x){x.stopPropagation(),ne(x)},onKeyDown:function(x){[Be.a.SPACE,Be.a.ENTER].includes(x.which)&&(x.preventDefault(),ne(x))},onFocus:Y},$),be&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(x){x.stopPropagation(),ce(x)}},H||z.removeIcon||"\xD7"));return Q&&(me=Q(me)),me}var Vn=n.forwardRef(qn),rt={width:0,height:0,left:0,top:0};function j(t,i,c){return Object(n.useMemo)(function(){for(var y,O=new Map,g=i.get((y=t[0])===null||y===void 0?void 0:y.key)||rt,E=g.left+g.width,S=0;S<t.length;S+=1){var w=t[S].key,$=i.get(w);if(!$){var V;$=i.get((V=t[S-1])===null||V===void 0?void 0:V.key)||rt}var H=O.get(w)||Object(ve.a)({},$);H.right=E-H.left-H.width,O.set(w,H)}return O},[t.map(function(y){return y.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function F(t,i,c,y,O){var g=O.tabs,E=O.tabPosition,S=O.rtl,w,$,V;["top","bottom"].includes(E)?(w="width",$=S?"right":"left",V=Math.abs(i.left)):(w="height",$="top",V=-i.top);var H=i[w],J=c[w],se=y[w],X=H;return J+se>H&&(X=H-se),Object(n.useMemo)(function(){if(!g.length)return[0,0];for(var Q=g.length,le=Q,z=0;z<Q;z+=1){var q=t.get(g[z].key)||D;if(q[$]+q[w]>V+X){le=z-1;break}}for(var ae=0,Y=Q-1;Y>=0;Y-=1){var oe=t.get(g[Y].key)||D;if(oe[$]<V){ae=Y+1;break}}return[ae,le]},[t,V,X,E,g.map(function(Q){return Q.key}).join("_"),S])}var d=e("Gytx"),l=e.n(d),p=e("Kwbf");function b(t,i){var c=t.prefixCls,y=t.invalidate,O=t.item,g=t.renderItem,E=t.responsive,S=t.registerSize,w=t.itemKey,$=t.className,V=t.style,H=t.children,J=t.display,se=t.order,X=t.component,Q=X===void 0?"div":X,le=Object(Ne.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=E&&!J;function q(be){S(w,be)}n.useEffect(function(){return function(){q(null)}},[]);var ae=g&&O!==void 0?g(O):H,Y;y||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:E?se:void 0,pointerEvents:z?"none":void 0});var oe={};z&&(oe["aria-hidden"]=!0);var k=n.createElement(Q,Object(W.a)({className:Fe()(!y&&c,$),style:Object(ve.a)(Object(ve.a)({},Y),V)},oe,le,{ref:i}),ae);return E&&(k=n.createElement($n.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var R=n.forwardRef(b);R.displayName="Item";var a=R;function o(){var t=Object(n.useState)({}),i=Object(L.a)(t,2),c=i[1],y=Object(n.useRef)([]),O=Object(n.useRef)(!1),g=0,E=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function S(w){var $=g;g+=1,y.current.length<$+1&&(y.current[$]=w);var V=y.current[$];function H(J){y.current[$]=typeof J=="function"?J(y.current[$]):J,Ye.a.cancel(E),E=Object(Ye.a)(function(){O.current||c({})})}return[V,H]}return S}var s=function(i,c){var y=n.useContext(P);if(!y){var O=i.component,g=O===void 0?"div":O,E=Object(Ne.a)(i,["component"]);return n.createElement(g,Object(W.a)({},E,{ref:c}))}var S=y.className,w=Object(Ne.a)(y,["className"]),$=i.className,V=Object(Ne.a)(i,["className"]);return n.createElement(P.Provider,{value:null},n.createElement(a,Object(W.a)({ref:c,className:Fe()(S,$)},w,V)))},T=n.forwardRef(s);T.displayName="RawItem";var K=T,P=n.createContext(null),u="responsive",M="invalidate";function m(t){return"+ ".concat(t.length," ...")}function r(t,i){var c=t.prefixCls,y=c===void 0?"rc-overflow":c,O=t.data,g=O===void 0?[]:O,E=t.renderItem,S=t.renderRawItem,w=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,H=t.ssr,J=t.style,se=t.className,X=t.maxCount,Q=t.renderRest,le=t.renderRawRest,z=t.suffix,q=t.component,ae=q===void 0?"div":q,Y=t.itemComponent,oe=t.onVisibleChange,k=Object(Ne.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=o(),ne=H==="full",ce=be(null),me=Object(L.a)(ce,2),re=me[0],x=me[1],ue=re||0,ye=be(new Map),he=Object(L.a)(ye,2),Ee=he[0],We=he[1],Ce=be(0),Re=Object(L.a)(Ce,2),Ke=Re[0],Te=Re[1],je=be(0),De=Object(L.a)(je,2),$e=De[0],_e=De[1],Ve=be(0),ze=Object(L.a)(Ve,2),Xe=ze[0],Le=ze[1],Dn=Object(n.useState)(null),an=Object(L.a)(Dn,2),Ze=an[0],ln=an[1],yn=Object(n.useState)(null),bn=Object(L.a)(yn,2),Ie=bn[0],He=bn[1],en=n.useMemo(function(){return Ie===null&&ne?Number.MAX_SAFE_INTEGER:Ie||0},[Ie,re]),ke=Object(n.useState)(!1),Wn=Object(L.a)(ke,2),Jn=Wn[0],Ln=Wn[1],rn="".concat(y,"-item"),jn=Math.max(Ke,$e),un=g.length&&X===u,Fn=X===M,nn=un||typeof X=="number"&&g.length>X,sn=Object(n.useMemo)(function(){var pe=g;return un?re===null&&ne?pe=g:pe=g.slice(0,Math.min(g.length,ue/V)):typeof X=="number"&&(pe=g.slice(0,X)),pe},[g,V,re,X,un]),In=Object(n.useMemo)(function(){return un?g.slice(en+1):g.slice(sn.length)},[g,sn,un,en]),cn=Object(n.useCallback)(function(pe,Se){var Me;return typeof w=="function"?w(pe):(Me=w&&(pe==null?void 0:pe[w]))!==null&&Me!==void 0?Me:Se},[w]),qe=Object(n.useCallback)(E||function(pe){return pe},[E]);function xe(pe,Se){He(pe),Se||(Ln(pe<g.length-1),oe==null||oe(pe))}function Gn(pe,Se){x(Se.clientWidth)}function Hn(pe,Se){We(function(Me){var tn=new Map(Me);return Se===null?tn.delete(pe):tn.set(pe,Se),tn})}function nt(pe,Se){_e(Se),Te($e)}function Cn(pe,Se){Le(Se)}function hn(pe){return Ee.get(cn(sn[pe],pe))}n.useLayoutEffect(function(){if(ue&&jn&&sn){var pe=Xe,Se=sn.length,Me=Se-1;if(!Se){xe(0),ln(null);return}for(var tn=0;tn<Se;tn+=1){var Yn=hn(tn);if(Yn===void 0){xe(tn-1,!0);break}if(pe+=Yn,tn===Me-1&&pe+hn(Me)<=ue){xe(Me),ln(null);break}else if(pe+jn>ue){xe(tn-1),ln(pe-Yn-Xe+$e);break}else if(tn===Me){xe(Me),ln(pe-Xe);break}}z&&hn(0)+Xe>ue&&ln(null)}},[ue,Ee,$e,Xe,cn,sn]);var xn=Jn&&!!In.length,On={};Ze!==null&&un&&(On={position:"absolute",left:Ze,top:0});var mn={prefixCls:rn,responsive:un,component:Y,invalidate:Fn},Xn=S?function(pe,Se){var Me=cn(pe,Se);return n.createElement(P.Provider,{key:Me,value:Object(ve.a)(Object(ve.a)({},mn),{},{order:Se,item:pe,itemKey:Me,registerSize:Hn,display:Se<=en})},S(pe,Se))}:function(pe,Se){var Me=cn(pe,Se);return n.createElement(a,Object(W.a)({},mn,{order:Se,key:Me,item:pe,renderItem:qe,itemKey:Me,registerSize:Hn,display:Se<=en}))},Nn,Qn={order:xn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:xn};if(le)le&&(Nn=n.createElement(P.Provider,{value:Object(ve.a)(Object(ve.a)({},mn),Qn)},le(In)));else{var dn=Q||m;Nn=n.createElement(a,Object(W.a)({},mn,Qn),typeof dn=="function"?dn(In):dn)}var Tn=n.createElement(ae,Object(W.a)({className:Fe()(!Fn&&y,se),style:J,ref:i},k),sn.map(Xn),nn?Nn:null,z&&n.createElement(a,Object(W.a)({},mn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:On}),z));return un&&(Tn=n.createElement($n.default,{onResize:Gn},Tn)),Tn}var h=n.forwardRef(r);h.displayName="Overflow",h.Item=K,h.RESPONSIVE=u,h.INVALIDATE=M;var v=h,I=v,B=e("1OyB"),U=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),we=n.createContext(null);function Ae(t,i){var c=Object(ve.a)({},t);return Object.keys(i).forEach(function(y){var O=i[y];O!==void 0&&(c[y]=O)}),c}function Pn(t){var i=t.children,c=t.locked,y=Object(Ne.a)(t,["children","locked"]),O=n.useContext(we),g=Object(pn.a)(function(){return Ae(O,y)},[O,y],function(E,S){return!c&&(E[0]!==S[0]||!l()(E[1],S[1]))});return n.createElement(we.Provider,{value:g},i)}function it(t,i,c,y){var O=n.useContext(we),g=O.activeKey,E=O.onActive,S=O.onInactive,w={active:g===t};return i||(w.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),E(t)},w.onMouseLeave=function($){y==null||y({key:t,domEvent:$}),S(t)}),w}function _n(t){var i=t.item,c=Object(Ne.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function f(t){var i=t.icon,c=t.props,y=t.children,O;return typeof i=="function"?O=n.createElement(i,Object(ve.a)({},c)):O=i,O||y||null}function N(t){var i=n.useContext(we),c=i.mode,y=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=t;return y?{paddingRight:g*O}:{paddingLeft:g*O}}var A=[],fe=n.createContext(null);function ee(){return n.useContext(fe)}var Pe=n.createContext(A);function Ue(t){var i=n.useContext(Pe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Ge=n.createContext(null),zt=n.createContext(null);function Jt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Gt(t){var i=n.useContext(zt);return Jt(i,t)}var ba=function(t){Object(_.a)(c,t);var i=Object(ie.a)(c);function c(){return Object(B.a)(this,c),i.apply(this,arguments)}return Object(U.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,E=O.attribute,S=O.elementRef,w=Object(Ne.a)(O,["title","attribute","elementRef"]),$=Object(ge.a)(w,["eventKey"]);return Object(p.a)(!E,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(I.Item,Object(W.a)({},E,{title:typeof g=="string"?g:void 0},$,{ref:S}))}}]),c}(n.Component),Ca=function(i){var c,y=i.style,O=i.className,g=i.eventKey,E=i.disabled,S=i.itemIcon,w=i.children,$=i.role,V=i.onMouseEnter,H=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,X=i.onFocus,Q=Object(Ne.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Gt(g),z=n.useContext(we),q=z.prefixCls,ae=z.onItemClick,Y=z.disabled,oe=z.overflowDisabled,k=z.itemIcon,be=z.selectedKeys,ne=z.onActive,ce="".concat(q,"-item"),me=n.useRef(),re=n.useRef(),x=Y||E,ue=Ue(g),ye=function(Ve){return{key:g,keyPath:ue,item:me.current,domEvent:Ve}},he=S||k,Ee=it(g,x,V,H),We=Ee.active,Ce=Object(Ne.a)(Ee,["active"]),Re=be.includes(g),Ke=N(ue.length),Te=function(Ve){if(!x){var ze=ye(Ve);J==null||J(_n(ze)),ae(ze)}},je=function(Ve){if(se==null||se(Ve),Ve.which===Be.a.ENTER){var ze=ye(Ve);J==null||J(_n(ze)),ae(ze)}},De=function(Ve){ne(g),X==null||X(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Re),n.createElement(ba,Object(W.a)({ref:me,elementRef:re,role:$===null?"none":$||"menuitem",tabIndex:E?null:-1,"data-menu-id":oe&&le?null:le},Q,Ce,$e,{component:"li","aria-disabled":E,style:Object(ve.a)(Object(ve.a)({},Ke),y),className:Fe()(ce,(c={},Object(de.a)(c,"".concat(ce,"-active"),We),Object(de.a)(c,"".concat(ce,"-selected"),Re),Object(de.a)(c,"".concat(ce,"-disabled"),x),c),O),onClick:Te,onKeyDown:je,onFocus:De}),w,n.createElement(f,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Re}),icon:he}))};function Oa(t){var i=t.eventKey,c=ee(),y=Ue(i);return n.useEffect(function(){if(c)return c.registerPath(i,y),function(){c.unregisterPath(i,y)}},[y]),c?null:n.createElement(Ca,t)}var Dt=Oa;function jt(t,i){return Object(Mn.a)(t).map(function(c,y){if(n.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(fn.a)(i),[y]).join("-"))),n.cloneElement(c,{key:O,eventKey:O})}return c})}function et(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var y,O=arguments.length,g=new Array(O),E=0;E<O;E++)g[E]=arguments[E];return(y=i.current)===null||y===void 0?void 0:y.call.apply(y,[i].concat(g))},[]);return t?c:void 0}var Ra=function(i,c){var y=i.className,O=i.children,g=Object(Ne.a)(i,["className","children"]),E=n.useContext(we),S=E.prefixCls,w=E.mode;return n.createElement("ul",Object(W.a)({className:Fe()(S,"".concat(S,"-sub"),"".concat(S,"-").concat(w==="inline"?"inline":"vertical"),y)},g,{"data-menu-list":!0,ref:c}),O)},Ht=n.forwardRef(Ra);Ht.displayName="SubMenuList";var xt=Ht,Ea=e("uciX"),Un={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},Sa={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},fr=Xt;function Qt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Pa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(t){var i=t.prefixCls,c=t.visible,y=t.children,O=t.popup,g=t.popupClassName,E=t.popupOffset,S=t.disabled,w=t.mode,$=t.onVisibleChange,V=n.useContext(we),H=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,X=V.subMenuCloseDelay,Q=V.builtinPlacements,le=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ae=V.defaultMotions,Y=n.useState(!1),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ne=J?Object(ve.a)(Object(ve.a)({},Sa),Q):Object(ve.a)(Object(ve.a)({},Xt),Q),ce=Pa[w],me=Qt(w,q,ae),re=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),x=n.useRef();return n.useEffect(function(){return x.current=Object(Ye.a)(function(){be(c)}),function(){Ye.a.cancel(x.current)}},[c]),n.createElement(Ea.a,{prefixCls:i,popupClassName:Fe()("".concat(i,"-popup"),Object(de.a)({},"".concat(i,"-rtl"),J),g),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:O,popupAlign:E&&{offset:E},action:S?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:z,popupMotion:re},y)}var ja=e("8XRh");function Fa(t){var i=t.id,c=t.open,y=t.keyPath,O=t.children,g="inline",E=n.useContext(we),S=E.prefixCls,w=E.forceSubMenuRender,$=E.motion,V=E.defaultMotions,H=E.mode,J=n.useRef(!1);J.current=H===g;var se=n.useState(!J.current),X=Object(L.a)(se,2),Q=X[0],le=X[1],z=J.current?c:!1;n.useEffect(function(){J.current&&le(!1)},[H]);var q=Object(ve.a)({},Qt(g,$,V));y.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&le(!0),ae==null?void 0:ae(Y)},Q?null:n.createElement(Pn,{mode:g,locked:!J.current},n.createElement(ja.default,Object(W.a)({visible:z},q,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(S,"-hidden")}),function(Y){var oe=Y.className,k=Y.style;return n.createElement(xt,{id:i,className:oe,style:k},O)}))}var Ia=function(i){var c,y=i.style,O=i.className,g=i.title,E=i.eventKey,S=i.disabled,w=i.internalPopupClose,$=i.children,V=i.itemIcon,H=i.expandIcon,J=i.popupClassName,se=i.popupOffset,X=i.onClick,Q=i.onMouseEnter,le=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,Y=Object(Ne.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(E),k=n.useContext(we),be=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,re=k.overflowDisabled,x=k.activeKey,ue=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Ee=k.onItemClick,We=k.onOpenChange,Ce=k.onActive,Re=n.useContext(Ge),Ke=Re.isSubPathKey,Te=Ue(),je="".concat(be,"-submenu"),De=me||S,$e=n.useRef(),_e=n.useRef(),Ve=V||ye,ze=H||he,Xe=ce.includes(E),Le=!re&&Xe,Dn=Ke(ue,E),an=it(E,De,q,ae),Ze=an.active,ln=Object(Ne.a)(an,["active"]),yn=n.useState(!1),bn=Object(L.a)(yn,2),Ie=bn[0],He=bn[1],en=function(xe){De||He(xe)},ke=function(xe){en(!0),Q==null||Q({key:E,domEvent:xe})},Wn=function(xe){en(!1),le==null||le({key:E,domEvent:xe})},Jn=n.useMemo(function(){return Ze||(ne!=="inline"?Ie||Ke([x],E):!1)},[ne,Ze,x,Ie,E,Ke]),Ln=N(Te.length),rn=function(xe){De||(z==null||z({key:E,domEvent:xe}),ne==="inline"&&We(E,!Xe))},jn=et(function(qe){X==null||X(_n(qe)),Ee(qe)}),un=function(xe){ne!=="inline"&&We(E,xe)},Fn=function(){Ce(E)},nn=oe&&"".concat(oe,"-popup"),sn=n.createElement("div",Object(W.a)({role:"menuitem",style:Ln,className:"".concat(je,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":re&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":De,onClick:rn,onFocus:Fn},ln),g,n.createElement(f,{icon:ne!=="horizontal"?ze:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(je,"-arrow")}))),In=n.useRef(ne);if(ne!=="inline"&&(In.current=Te.length>1?"vertical":ne),!re){var cn=In.current;sn=n.createElement(Da,{mode:cn,prefixCls:je,visible:!w&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(Pn,{mode:cn},n.createElement(xt,{id:nn,ref:_e},$)),disabled:De,onVisibleChange:un},sn)}return n.createElement(Pn,{onItemClick:jn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:ze},n.createElement(I.Item,Object(W.a)({role:"none"},Y,{component:"li",style:y,className:Fe()(je,"".concat(je,"-").concat(ne),O,(c={},Object(de.a)(c,"".concat(je,"-open"),Le),Object(de.a)(c,"".concat(je,"-active"),Jn),Object(de.a)(c,"".concat(je,"-selected"),Dn),Object(de.a)(c,"".concat(je,"-disabled"),De),c)),onMouseEnter:ke,onMouseLeave:Wn}),sn,!re&&n.createElement(Fa,{id:nn,open:Le,keyPath:Te},$)))};function Yt(t){var i=t.eventKey,c=t.children,y=Ue(i),O=jt(c,y),g=ee();n.useEffect(function(){if(g)return g.registerPath(i,y),function(){g.unregisterPath(i,y)}},[y]);var E;return g?E=O:E=n.createElement(Ia,t,O),n.createElement(Pe.Provider,{value:y},E)}var Na=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Na.a)(t)){var c=t.nodeName.toLowerCase(),y=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),O=t.getAttribute("tabindex"),g=Number(O),E=null;return O&&!Number.isNaN(g)?E=g:y&&E===null&&(E=0),y&&t.disabled&&(E=null),E!==null&&(E>=0||i&&E<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(y){return Zt(y,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),y=c[i.shiftKey?0:c.length-1],O=y===document.activeElement||t===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var Ft=Be.a.LEFT,It=Be.a.RIGHT,Nt=Be.a.UP,ft=Be.a.DOWN,pt=Be.a.ENTER,qt=Be.a.ESC,_t=[Nt,ft,Ft,It];function Ta(t,i,c,y){var O,g,E,S,w="prev",$="next",V="children",H="parent";if(t==="inline"&&y===pt)return{inlineTrigger:!0};var J=(O={},Object(de.a)(O,Nt,w),Object(de.a)(O,ft,$),O),se=(g={},Object(de.a)(g,Ft,c?$:w),Object(de.a)(g,It,c?w:$),Object(de.a)(g,ft,V),Object(de.a)(g,pt,V),g),X=(E={},Object(de.a)(E,Nt,w),Object(de.a)(E,ft,$),Object(de.a)(E,pt,V),Object(de.a)(E,qt,H),Object(de.a)(E,Ft,c?V:H),Object(de.a)(E,It,c?H:V),E),Q={inline:J,horizontal:se,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},le=(S=Q["".concat(t).concat(i?"":"Sub")])===null||S===void 0?void 0:S[y];switch(le){case w:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Aa(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ka(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ma(t,i){var c=kt(t,!0);return c.filter(function(y){return i.has(y)})}function ea(t,i,c){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var O=Ma(t,i),g=O.length,E=O.findIndex(function(S){return c===S});return y<0?E===-1?E=g-1:E-=1:y>0&&(E+=1),E=(E+g)%g,O[E]}function Ba(t,i,c,y,O,g,E,S,w,$){var V=n.useRef(),H=n.useRef();H.current=i;var J=function(){Ye.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,le,z,q=function(){Q=new Set,le=new Map,z=new Map;var ye=g();return ye.forEach(function(he){var Ee=document.querySelector("[data-menu-id='".concat(Jt(y,he),"']"));Ee&&(Q.add(Ee),z.set(Ee,he),le.set(he,Ee))}),Q};q();var ae=le.get(i),Y=Ka(ae,Q),oe=z.get(Y),k=Ta(t,E(oe,!0).length===1,c,X);if(!k)return;_t.includes(X)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Ee=ye.querySelector("a");(Ee==null?void 0:Ee.getAttribute("href"))&&(he=Ee);var We=z.get(ye);S(We),J(),V.current=Object(Ye.a)(function(){H.current===We&&he.focus()})}};if(k.sibling||!Y){var ne;!Y||t==="inline"?ne=O.current:ne=Aa(Y);var ce=ea(ne,Q,Y,k.offset);be(ce)}else if(k.inlineTrigger)w(oe);else if(k.offset>0)w(oe,!0),J(),V.current=Object(Ye.a)(function(){q();var ue=Y.getAttribute("aria-controls"),ye=document.getElementById(ue),he=ea(ye,Q);be(he)},5);else if(k.offset<0){var me=E(oe,!0),re=me[me.length-2],x=le.get(re);w(re,!1),be(x)}}$==null||$(se)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(t){var i=Object(En.a)(t,{value:t}),c=Object(L.a)(i,2),y=c[0],O=c[1];return n.useEffect(function(){na+=1;var g="".concat(wa,"-").concat(na);O("rc-menu-uuid-".concat(g))},[]),y}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Tt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Tt)},$a=function(i){return i.split(Tt)},At="rc-menu-more";function Va(){var t=n.useState({}),i=Object(L.a)(t,2),c=i[1],y=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),g=n.useState([]),E=Object(L.a)(g,2),S=E[0],w=E[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var ae=ta(q);O.current.set(ae,z),y.current.set(z,ae),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),H=Object(n.useCallback)(function(z,q){var ae=ta(q);O.current.delete(ae),y.current.delete(z)},[]),J=Object(n.useCallback)(function(z){w(z)},[]),se=Object(n.useCallback)(function(z,q){var ae=y.current.get(z)||"",Y=$a(ae);return q&&S.includes(Y[0])&&Y.unshift(At),Y},[S]),X=Object(n.useCallback)(function(z,q){return z.some(function(ae){var Y=se(ae,!0);return Y.includes(q)})},[se]),Q=function(){var q=Object(fn.a)(y.current.keys());return S.length&&q.push(At),q},le=Object(n.useCallback)(function(z){var q="".concat(y.current.get(z)).concat(Tt),ae=new Set;return Object(fn.a)(O.current.keys()).forEach(function(Y){Y.startsWith(q)&&ae.add(O.current.get(Y))}),ae},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:se,getKeys:Q,getSubPathKeys:le}}var vt=[],Ua=function(i){var c,y,O=i.prefixCls,g=O===void 0?"rc-menu":O,E=i.style,S=i.className,w=i.tabIndex,$=w===void 0?0:w,V=i.children,H=i.direction,J=i.id,se=i.mode,X=se===void 0?"vertical":se,Q=i.inlineCollapsed,le=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,ae=q===void 0?.1:q,Y=i.subMenuCloseDelay,oe=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ne=i.openKeys,ce=i.activeKey,me=i.defaultActiveFirst,re=i.selectable,x=re===void 0?!0:re,ue=i.multiple,ye=ue===void 0?!1:ue,he=i.defaultSelectedKeys,Ee=i.selectedKeys,We=i.onSelect,Ce=i.onDeselect,Re=i.inlineIndent,Ke=Re===void 0?24:Re,Te=i.motion,je=i.defaultMotions,De=i.triggerSubMenuAction,$e=De===void 0?"hover":De,_e=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Xe=i.overflowedIndicator,Le=Xe===void 0?"...":Xe,Dn=i.getPopupContainer,an=i.onClick,Ze=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ie=Object(Ne.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=jt(V,vt),en=n.useState(!1),ke=Object(L.a)(en,2),Wn=ke[0],Jn=ke[1],Ln=n.useRef(),rn=Wa(J),jn=H==="rtl",un=n.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),Fn=Object(L.a)(un,2),nn=Fn[0],sn=Fn[1],In=n.useState(0),cn=Object(L.a)(In,2),qe=cn[0],xe=cn[1],Gn=qe>=He.length-1||nn!=="horizontal"||z,Hn=Object(En.a)(be,{value:ne,postState:function(Z){return Z||vt}}),nt=Object(L.a)(Hn,2),Cn=nt[0],hn=nt[1],xn=n.useState(Cn),On=Object(L.a)(xn,2),mn=On[0],Xn=On[1],Nn=nn==="inline",Qn=n.useRef(!1);n.useEffect(function(){Nn&&Xn(Cn)},[Cn]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(Nn)hn(mn);else{var te=[];hn(te),Ze==null||Ze(te)}},[Nn]);var dn=Va(),Tn=dn.registerPath,pe=dn.unregisterPath,Se=dn.refreshOverflowKeys,Me=dn.isSubPathKey,tn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:Tn,unregisterPath:pe}},[Tn,pe]),Wt=n.useMemo(function(){return{isSubPathKey:Me}},[Me]);n.useEffect(function(){Se(Gn?vt:He.slice(qe+1).map(function(te){return te.key}))},[qe,Gn]);var Lt=Object(En.a)(ce||me&&((c=He[0])===null||c===void 0?void 0:c.key),{value:ce}),tt=Object(L.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(te){ot(te)}),$t=et(function(){ot(void 0)}),Ct=Object(En.a)(he||[],{value:Ee,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ot=Object(L.a)(Ct,2),at=Ot[0],An=Ot[1],Rt=function(Z){if(!!x){var Oe=Z.key,Je=at.includes(Oe),on;Je?on=at.filter(function(kn){return kn!==Oe}):ye?on=[].concat(Object(fn.a)(at),[Oe]):on=[Oe],An(on);var zn=Object(ve.a)(Object(ve.a)({},Z),{},{selectedKeys:on});Je?Ce==null||Ce(zn):We==null||We(zn)}},Et=et(function(te){an==null||an(_n(te)),Rt(te)}),lt=et(function(te,Z){var Oe=Cn.filter(function(on){return on!==te});if(Z)Oe.push(te);else if(nn!=="inline"){var Je=gt(te);Oe=Oe.filter(function(on){return!Je.has(on)})}l()(Cn,Oe)||(hn(Oe),Ze==null||Ze(Oe))}),Zn=et(Dn),ut=function(Z,Oe){var Je=Oe!=null?Oe:!Cn.includes(Z);lt(Z,Je)},dt=Ba(nn,yt,jn,rn,Ln,Yn,tn,ot,ut,ln);n.useEffect(function(){Jn(!0)},[]);var St=nn!=="horizontal"||z?He:He.map(function(te,Z){return n.createElement(Pn,{key:te.key,overflowDisabled:Z>qe},te)}),Pt=n.createElement(I,Object(W.a)({id:J,ref:Ln,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Dt,className:Fe()(g,"".concat(g,"-root"),"".concat(g,"-").concat(nn),S,(y={},Object(de.a)(y,"".concat(g,"-inline-collapsed"),sn),Object(de.a)(y,"".concat(g,"-rtl"),jn),y)),dir:H,style:E,role:"menu",tabIndex:$,data:St,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Oe=Z.length,Je=Oe?He.slice(-Oe):null;return n.createElement(Yt,{eventKey:At,title:Le,disabled:Gn,internalPopupClose:Oe===0},Je)},maxCount:nn!=="horizontal"||z?I.INVALIDATE:I.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:dt},Ie));return n.createElement(zt.Provider,{value:rn},n.createElement(Pn,{prefixCls:g,mode:nn,openKeys:Cn,rtl:jn,disabled:le,motion:Wn?Te:null,defaultMotions:Wn?je:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:Ke,subMenuOpenDelay:ae,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:ze,onItemClick:Et,onOpenChange:lt},n.createElement(Ge.Provider,{value:Wt},Pt),n.createElement(fe.Provider,{value:wt},He)))},za=Ua,Ja=function(i){var c=i.className,y=i.title,O=i.eventKey,g=i.children,E=Object(Ne.a)(i,["className","title","eventKey","children"]),S=n.useContext(we),w=S.prefixCls,$="".concat(w,"-item-group");return n.createElement("li",Object(W.a)({},E,{onClick:function(H){return H.stopPropagation()},className:Fe()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof y=="string"?y:void 0},y),n.createElement("ul",{className:"".concat($,"-list")},g))};function Ga(t){var i=t.children,c=Object(Ne.a)(t,["children"]),y=Ue(c.eventKey),O=jt(i,y),g=ee();return g?O:n.createElement(Ja,c,O)}function Ha(t){var i=t.className,c=t.style,y=n.useContext(we),O=y.prefixCls,g=ee();return g?null:n.createElement("li",{className:Fe()("".concat(O,"-item-divider"),i),style:c})}var st=za;st.Item=Dt,st.SubMenu=Yt,st.ItemGroup=Ga,st.Divider=Ha;var xa=st,Xa=e("eDIo");function Qa(t,i){var c=t.prefixCls,y=t.editable,O=t.locale,g=t.style;return!y||y.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(S){y.onEdit("add",{event:S})}},y.addIcon||"+")}var aa=n.forwardRef(Qa);function Ya(t,i){var c=t.prefixCls,y=t.id,O=t.tabs,g=t.locale,E=t.mobile,S=t.moreIcon,w=S===void 0?"More":S,$=t.moreTransitionName,V=t.style,H=t.className,J=t.editable,se=t.tabBarGutter,X=t.rtl,Q=t.onTabClick,le=Object(n.useState)(!1),z=Object(L.a)(le,2),q=z[0],ae=z[1],Y=Object(n.useState)(null),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ne="".concat(y,"-more-popup"),ce="".concat(c,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,re=g==null?void 0:g.dropdownAriaLabel,x=n.createElement(xa,{onClick:function(Re){var Ke=Re.key,Te=Re.domEvent;Q(Ke,Te),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},O.map(function(Ce){return n.createElement(Dt,{key:Ce.key,id:"".concat(ne,"-").concat(Ce.key),role:"option","aria-controls":y&&"".concat(y,"-panel-").concat(Ce.key),disabled:Ce.disabled},Ce.tab)}));function ue(Ce){for(var Re=O.filter(function($e){return!$e.disabled}),Ke=Re.findIndex(function($e){return $e.key===k})||0,Te=Re.length,je=0;je<Te;je+=1){Ke=(Ke+Ce+Te)%Te;var De=Re[Ke];if(!De.disabled){be(De.key);return}}}function ye(Ce){var Re=Ce.which;if(!q){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(Re)&&(ae(!0),Ce.preventDefault());return}switch(Re){case Be.a.UP:ue(-1),Ce.preventDefault();break;case Be.a.DOWN:ue(1),Ce.preventDefault();break;case Be.a.ESC:ae(!1);break;case Be.a.SPACE:case Be.a.ENTER:k!==null&&Q(k,Ce);break}}Object(n.useEffect)(function(){var Ce=document.getElementById(me);Ce&&Ce.scrollIntoView&&Ce.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(de.a)({},X?"marginLeft":"marginRight",se);O.length||(he.visibility="hidden",he.order=1);var Ee=Fe()(Object(de.a)({},"".concat(ce,"-rtl"),X)),We=E?null:n.createElement(Xa.default,{prefixCls:ce,overlay:x,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ae,overlayClassName:Ee,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(y,"-more"),"aria-expanded":q,onKeyDown:ye},w));return n.createElement("div",{className:Fe()("".concat(c,"-nav-operations"),H),style:V,ref:i},We,n.createElement(aa,{prefixCls:c,locale:g,editable:J}))}var Za=n.forwardRef(Ya),Kt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),y=Object(L.a)(c,2),O=y[0],g=y[1],E=Object(n.useState)(0),S=Object(L.a)(E,2),w=S[0],$=S[1],V=Object(n.useState)(0),H=Object(L.a)(V,2),J=H[0],se=H[1],X=Object(n.useState)(),Q=Object(L.a)(X,2),le=Q[0],z=Q[1],q=Object(n.useRef)();function ae(ce){var me=ce.touches[0],re=me.screenX,x=me.screenY;g({x:re,y:x}),window.clearInterval(q.current)}function Y(ce){if(!!O){ce.preventDefault();var me=ce.touches[0],re=me.screenX,x=me.screenY;g({x:re,y:x});var ue=re-O.x,ye=x-O.y;i(ue,ye);var he=Date.now();$(he),se(he-w),z({x:ue,y:ye})}}function oe(){if(!!O&&(g(null),z(null),le)){var ce=le.x/J,me=le.y/J,re=Math.abs(ce),x=Math.abs(me);if(Math.max(re,x)<ka)return;var ue=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(ue)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}ue*=ia,ye*=ia,i(ue*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,re=ce.deltaY,x=0,ue=Math.abs(me),ye=Math.abs(re);ue===ye?x=k.current==="x"?me:re:ue>ye?(x=me,k.current="x"):(x=re,k.current="y"),i(-x,-x)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Y,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function ce(ue){ne.current.onTouchStart(ue)}function me(ue){ne.current.onTouchMove(ue)}function re(ue){ne.current.onTouchEnd(ue)}function x(ue){ne.current.onWheel(ue)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",x),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(y){return t.current.has(y)||t.current.set(y,n.createRef()),t.current.get(y)}function c(y){t.current.delete(y)}return[i,c]}function sa(t,i){var c=n.useRef(t),y=n.useState({}),O=Object(L.a)(y,2),g=O[1];function E(S){var w=typeof S=="function"?S(c.current):S;w!==c.current&&i(w,c.current),c.current=w,g({})}return[c.current,E]}var oa=function(i){var c=i.position,y=i.prefixCls,O=i.extra;if(!O)return null;var g,E=O;return c==="right"&&(g=E.right||!E.left&&E||null),c==="left"&&(g=E.left||null),g?n.createElement("div",{className:"".concat(y,"-extra-content")},g):null};function er(t,i){var c,y=n.useContext(Kt),O=y.prefixCls,g=y.tabs,E=t.className,S=t.style,w=t.id,$=t.animated,V=t.activeKey,H=t.rtl,J=t.extra,se=t.editable,X=t.locale,Q=t.tabPosition,le=t.tabBarGutter,z=t.children,q=t.onTabClick,ae=t.onTabScroll,Y=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_a(),ce=Object(L.a)(ne,2),me=ce[0],re=ce[1],x=Q==="top"||Q==="bottom",ue=sa(0,function(te,Z){x&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(L.a)(ue,2),he=ye[0],Ee=ye[1],We=sa(0,function(te,Z){!x&&ae&&ae({direction:te>Z?"top":"bottom"})}),Ce=Object(L.a)(We,2),Re=Ce[0],Ke=Ce[1],Te=Object(n.useState)(0),je=Object(L.a)(Te,2),De=je[0],$e=je[1],_e=Object(n.useState)(0),Ve=Object(L.a)(_e,2),ze=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Dn=Object(L.a)(Le,2),an=Dn[0],Ze=Dn[1],ln=Object(n.useState)(0),yn=Object(L.a)(ln,2),bn=yn[0],Ie=yn[1],He=Object(n.useState)(null),en=Object(L.a)(He,2),ke=en[0],Wn=en[1],Jn=Object(n.useState)(null),Ln=Object(L.a)(Jn,2),rn=Ln[0],jn=Ln[1],un=Object(n.useState)(0),Fn=Object(L.a)(un,2),nn=Fn[0],sn=Fn[1],In=Object(n.useState)(0),cn=Object(L.a)(In,2),qe=cn[0],xe=cn[1],Gn=Sn(new Map),Hn=Object(L.a)(Gn,2),nt=Hn[0],Cn=Hn[1],hn=j(g,nt,De),xn="".concat(O,"-nav-operations-hidden"),On=0,mn=0;x?H?(On=0,mn=Math.max(0,De-ke)):(On=Math.min(0,ke-De),mn=0):(On=Math.min(0,rn-ze),mn=0);function Xn(te){return te<On?On:te>mn?mn:te}var Nn=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(L.a)(Qn,2),Tn=dn[0],pe=dn[1];function Se(){pe(Date.now())}function Me(){window.clearTimeout(Nn.current)}qa(Y,function(te,Z){function Oe(Je,on){Je(function(zn){var kn=Xn(zn+on);return kn})}if(x){if(ke>=De)return!1;Oe(Ee,te)}else{if(rn>=ze)return!1;Oe(Ke,Z)}return Me(),Se(),!0}),Object(n.useEffect)(function(){return Me(),Tn&&(Nn.current=window.setTimeout(function(){pe(0)},100)),Me},[Tn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(x){var Oe=he;H?Z.right<he?Oe=Z.right:Z.right+Z.width>he+ke&&(Oe=Z.right+Z.width-ke):Z.left<-he?Oe=-Z.left:Z.left+Z.width>-he+ke&&(Oe=-(Z.left+Z.width-ke)),Ke(0),Ee(Xn(Oe))}else{var Je=Re;Z.top<-Re?Je=-Z.top:Z.top+Z.height>-Re+rn&&(Je=-(Z.top+Z.height-rn)),Ee(0),Ke(Xn(Je))}}var Yn=F(hn,{width:ke,height:rn,left:he,top:Re},{width:an,height:bn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:g})),gt=Object(L.a)(Yn,2),wt=gt[0],Wt=gt[1],Lt=g.map(function(te){var Z=te.key;return n.createElement(Vn,{id:w,prefixCls:O,key:Z,rtl:H,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:Q,tabBarGutter:le,renderWrapper:z,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:me(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){re(Z)},onFocus:function(){tn(Z),Se(),H||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),tt=wn(function(){var te,Z,Oe,Je,on,zn,kn,Vt,Ut,lr=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ur=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Oe=be.current)===null||Oe===void 0?void 0:Oe.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((on=k.current)===null||on===void 0?void 0:on.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(lr),jn(ur),sn(ma),xe(fa);var pa=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,va=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(xn);Ze(pa-(ha?0:dr)),Ie(va-(ha?0:cr)),Cn(function(){var ga=new Map;return g.forEach(function(mr){var ya=mr.key,ct=me(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=g.slice(0,wt),ot=g.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(n.useState)(),Ct=Object(L.a)($t,2),Ot=Ct[0],at=Ct[1],An=hn.get(V),Rt=Object(n.useRef)();function Et(){Ye.a.cancel(Rt.current)}Object(n.useEffect)(function(){var te={};return An&&(x?(H?te.right=An.right:te.left=An.left,te.width=An.width):(te.top=An.top,te.height=An.height)),Et(),Rt.current=Object(Ye.a)(function(){at(te)}),Et},[An,x,H]),Object(n.useEffect)(function(){tn()},[V,An,hn,x]),Object(n.useEffect)(function(){tt()},[H,le,V,g.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,Zn="".concat(O,"-nav-wrap"),ut,dt,St,Pt;return x?H?(dt=he>0,ut=he+ke<De):(ut=he<0,dt=-he+ke<De):(St=Re<0,Pt=-Re+rn<ze),n.createElement("div",{ref:i,role:"tablist",className:Fe()("".concat(O,"-nav"),E),style:S,onKeyDown:function(){Se()}},n.createElement(oa,{position:"left",extra:J,prefixCls:O}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Fe()(Zn,(c={},Object(de.a)(c,"".concat(Zn,"-ping-left"),ut),Object(de.a)(c,"".concat(Zn,"-ping-right"),dt),Object(de.a)(c,"".concat(Zn,"-ping-top"),St),Object(de.a)(c,"".concat(Zn,"-ping-bottom"),Pt),c)),ref:Y},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Re,"px)"),transition:Tn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:O,locale:X,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Fe()("".concat(O,"-ink-bar"),Object(de.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ot}))))),n.createElement(Za,Object(W.a)({},t,{ref:k,prefixCls:O,tabs:bt,className:!lt&&xn})),n.createElement(oa,{position:"right",extra:J,prefixCls:O}))}var la=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,y=t.animated,O=t.tabPosition,g=t.rtl,E=t.destroyInactiveTabPane,S=n.useContext(Kt),w=S.prefixCls,$=S.tabs,V=y.tabPane,H=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:Fe()("".concat(w,"-content-holder"))},n.createElement("div",{className:Fe()("".concat(w,"-content"),"".concat(w,"-content-").concat(O),Object(de.a)({},"".concat(w,"-content-animated"),V)),style:H&&V?Object(de.a)({},g?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:w,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:E})})))}function ua(t){var i=t.prefixCls,c=t.forceRender,y=t.className,O=t.style,g=t.id,E=t.active,S=t.animated,w=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,H=n.useState(c),J=Object(L.a)(H,2),se=J[0],X=J[1];n.useEffect(function(){E?X(!0):w&&X(!1)},[E,w]);var Q={};return E||(S?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:E?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!E,style:Object(ve.a)(Object(ve.a)({},Q),O),className:Fe()("".concat(i,"-tabpane"),E&&"".concat(i,"-tabpane-active"),y)},(E||se||c)&&V)}var da=0;function tr(t){return Object(Mn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,y=t.id,O=t.prefixCls,g=O===void 0?"rc-tabs":O,E=t.className,S=t.children,w=t.direction,$=t.activeKey,V=t.defaultActiveKey,H=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,X=t.tabPosition,Q=X===void 0?"top":X,le=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Y=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,re=Object(Ne.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),x=tr(S),ue=w==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Qe.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Ee=Object(L.a)(he,2),We=Ee[0],Ce=Ee[1];Object(n.useEffect)(function(){Ce(Object(Bn.a)())},[]);var Re=Object(En.a)(function(){var Ie;return(Ie=x[0])===null||Ie===void 0?void 0:Ie.key},{value:$,defaultValue:V}),Ke=Object(L.a)(Re,2),Te=Ke[0],je=Ke[1],De=Object(n.useState)(function(){return x.findIndex(function(Ie){return Ie.key===Te})}),$e=Object(L.a)(De,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ie=x.findIndex(function(en){return en.key===Te});if(Ie===-1){var He;Ie=Math.max(0,Math.min(_e,x.length-1)),je((He=x[Ie])===null||He===void 0?void 0:He.key)}Ve(Ie)},[x.map(function(Ie){return Ie.key}).join("_"),Te,_e]);var ze=Object(En.a)(null,{value:y}),Xe=Object(L.a)(ze,2),Le=Xe[0],Dn=Xe[1],an=Q;We&&!["left","right"].includes(Q)&&(an="top"),Object(n.useEffect)(function(){y||(Dn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Ie,He){ce==null||ce(Ie,He),je(Ie),ne==null||ne(Ie)}var ln={id:Le,activeKey:Te,animated:ye,tabPosition:an,rtl:ue,mobile:We},yn,bn=Object(ve.a)(Object(ve.a)({},ln),{},{editable:H,locale:ae,moreIcon:Y,moreTransitionName:oe,tabBarGutter:le,onTabClick:Ze,onTabScroll:me,extra:q,style:z,panes:S});return be?yn=be(bn,la):yn=n.createElement(la,bn),n.createElement(Kt.Provider,{value:{tabs:x,prefixCls:g}},n.createElement("div",Object(W.a)({ref:i,id:y,className:Fe()(g,"".concat(g,"-").concat(an),(c={},Object(de.a)(c,"".concat(g,"-mobile"),We),Object(de.a)(c,"".concat(g,"-editable"),H),Object(de.a)(c,"".concat(g,"-rtl"),ue),c),E)},re),yn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=ua;var rr=ca,ir=rr,Mt=e("MZF8"),vn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function Bt(t,i){var c,y=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return y||(y=i.tsx?"tsx":"jsx"),y}var or=t=>{var i,c,y,O=Object(n.useRef)(),g=Object(n.useContext)(vn.context),E=g.locale,S=Object(vn.useLocaleProps)(E,t),w=Object(vn.useDemoUrl)(S.identifier),$=S.demoUrl||w,V=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(S.identifier),H=Object.keys(S.sources).length===1,J=Object(vn.useCodeSandbox)((i=S.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:S),se=Object(vn.useRiddle)((c=S.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:S),X=Object(vn.useMotions)(S.motions||[],O.current),Q=Object(G.default)(X,2),le=Q[0],z=Q[1],q=Object(vn.useCopy)(),ae=Object(G.default)(q,2),Y=ae[0],oe=ae[1],k=Object(n.useState)("_"),be=Object(G.default)(k,2),ne=be[0],ce=be[1],me=Object(n.useState)(Bt(ne,S.sources[ne])),re=Object(G.default)(me,2),x=re[0],ue=re[1],ye=Object(n.useState)(Boolean(S.defaultShowCode)),he=Object(G.default)(ye,2),Ee=he[0],We=he[1],Ce=Object(n.useState)(Math.random()),Re=Object(G.default)(Ce,2),Ke=Re[0],Te=Re[1],je=S.sources[ne][x]||S.sources[ne].content,De=Object(vn.useTSPlaygroundUrl)(E,je),$e=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),Ve=Object(G.default)(_e,1),ze=Ve[0];Object(n.useEffect)(()=>{Te(Math.random())},[ze]);function Xe(Le){ce(Le),ue(Bt(Le,S.sources[Le]))}return C.a.createElement("div",{style:S.style,className:[S.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:S.identifier,"data-debug":S.debug||void 0,"data-iframe":S.iframe||void 0},S.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:S.transform?"translate(0, 0)":void 0,padding:S.compact||S.iframe&&S.compact!==!1?"0":void 0,background:S.background}},S.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(S.iframe).replace(/(\d)$/,"$1px")},key:Ke,src:$,ref:$e}):S.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":S.title},S.title&&C.a.createElement(vn.AnchorLink,{to:"#".concat(S.identifier)},S.title),S.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),S.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>le()}),S.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((y=S.hideActions)!==null&&y!==void 0&&y.includes("EXTERNAL"))&&C.a.createElement(vn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Y(je)}),x==="tsx"&&Ee&&C.a.createElement(vn.Link,{target:"_blank",to:De},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Ee?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Ee)})),Ee&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&C.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Xe},Object.keys(S.sources).map(Le=>C.a.createElement(ua,{tab:Le==="_"?"index.".concat(Bt(Le,S.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sr.a,{code:je,lang:x,showCopy:!1}))))},Cr=gn.default=or},"80pN":function(Kn,gn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),W=e("i8i4"),de=e("QCnb");function L(f){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+f,A=1;A<arguments.length;A++)N+="&args[]="+encodeURIComponent(arguments[A]);return"Minified React error #"+f+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qe=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Qe.hasOwnProperty("ReactCurrentDispatcher")||(Qe.ReactCurrentDispatcher={current:null}),Qe.hasOwnProperty("ReactCurrentBatchConfig")||(Qe.ReactCurrentBatchConfig={suspense:null});function Ne(f){var N=f,A=f;if(f.alternate)for(;N.return;)N=N.return;else{f=N;do N=f,(N.effectTag&1026)!=0&&(A=N.return),f=N.return;while(f)}return N.tag===3?A:null}function ve(f){if(Ne(f)!==f)throw Error(L(188))}function Rn(f){var N=f.alternate;if(!N){if(N=Ne(f),N===null)throw Error(L(188));return N!==f?null:f}for(var A=f,fe=N;;){var ee=A.return;if(ee===null)break;var Pe=ee.alternate;if(Pe===null){if(fe=ee.return,fe!==null){A=fe;continue}break}if(ee.child===Pe.child){for(Pe=ee.child;Pe;){if(Pe===A)return ve(ee),f;if(Pe===fe)return ve(ee),N;Pe=Pe.sibling}throw Error(L(188))}if(A.return!==fe.return)A=ee,fe=Pe;else{for(var Ue=!1,Ge=ee.child;Ge;){if(Ge===A){Ue=!0,A=ee,fe=Pe;break}if(Ge===fe){Ue=!0,fe=ee,A=Pe;break}Ge=Ge.sibling}if(!Ue){for(Ge=Pe.child;Ge;){if(Ge===A){Ue=!0,A=Pe,fe=ee;break}if(Ge===fe){Ue=!0,fe=Pe,A=ee;break}Ge=Ge.sibling}if(!Ue)throw Error(L(189))}}if(A.alternate!==fe)throw Error(L(190))}if(A.tag!==3)throw Error(L(188));return A.stateNode.current===A?f:N}function Fe(){return!0}function Mn(){return!1}function Bn(f,N,A,fe){this.dispatchConfig=f,this._targetInst=N,this.nativeEvent=A,f=this.constructor.Interface;for(var ee in f)f.hasOwnProperty(ee)&&((N=f[ee])?this[ee]=N(A):ee==="target"?this.target=fe:this[ee]=A[ee]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?Fe:Mn,this.isPropagationStopped=Mn,this}n(Bn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Fe)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Fe)},persist:function(){this.isPersistent=Fe},isPersistent:Mn,destructor:function(){var f=this.constructor.Interface,N;for(N in f)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Bn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Bn.extend=function(f){function N(){}function A(){return fe.apply(this,arguments)}var fe=this;N.prototype=fe.prototype;var ee=new N;return n(ee,A.prototype),A.prototype=ee,A.prototype.constructor=A,A.Interface=n({},fe.Interface,f),A.extend=fe.extend,Ye(A),A},Ye(Bn);function En(f,N,A,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,f,N,A,fe),ee}return new this(f,N,A,fe)}function fn(f){if(!(f instanceof this))throw Error(L(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Ye(f){f.eventPool=[],f.getPooled=En,f.release=fn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(f,N){var A={};return A[f.toLowerCase()]=N.toLowerCase(),A["Webkit"+f]="webkit"+N,A["Moz"+f]="moz"+N,A}var Sn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Be={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Vn(f){if(Be[f])return Be[f];if(!Sn[f])return f;var N=Sn[f],A;for(A in N)if(N.hasOwnProperty(A)&&A in qn)return Be[f]=N[A];return f}var rt=Vn("animationend"),j=Vn("animationiteration"),D=Vn("animationstart"),F=Vn("transitionend"),d=null;function l(f){if(d===null)try{var N=("require"+Math.random()).slice(0,7);d=(G&&G[N])("timers").setImmediate}catch(A){d=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return d(f)}var p=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=p[11],R=p[12],a=W.unstable_batchedUpdates,o=Qe.IsSomeRendererActing,s=typeof de.unstable_flushAllWithoutAsserting=="function",T=de.unstable_flushAllWithoutAsserting||function(){for(var f=!1;b();)f=!0;return f};function K(f){try{T(),l(function(){T()?K(f):f()})}catch(N){f(N)}}var P=0,u=!1,M=W.findDOMNode,m=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=m[0],h=m[4],v=m[5],I=m[6],B=m[7],U=m[8],_=m[9],ie=m[10];function ge(){}function pn(f,N){if(!f)return[];if(f=Rn(f),!f)return[];for(var A=f,fe=[];;){if(A.tag===5||A.tag===6||A.tag===1||A.tag===0){var ee=A.stateNode;N(ee)&&fe.push(ee)}if(A.child)A.child.return=A,A=A.child;else{if(A===f)return fe;for(;!A.sibling;){if(!A.return||A.return===f)return fe;A=A.return}A.sibling.return=A.return,A=A.sibling}}}function we(f,N){if(f&&!f._reactInternalFiber){var A=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":A==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":A,Error(L(286,N,f))}}var Ae={renderIntoDocument:function(f){var N=document.createElement("div");return W.render(f,N)},isElement:function(f){return C.isValidElement(f)},isElementOfType:function(f,N){return C.isValidElement(f)&&f.type===N},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&C.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Ae.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,N){return Ae.isCompositeComponent(f)?f._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(f,N){return we(f,"findAllInRenderedTree"),f?pn(f._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(f,N){return we(f,"scryRenderedDOMComponentsWithClass"),Ae.findAllInRenderedTree(f,function(A){if(Ae.isDOMComponent(A)){var fe=A.className;typeof fe!="string"&&(fe=A.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(L(11));N=N.split(/\s+/)}return N.every(function(Pe){return ee.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,N){if(we(f,"findRenderedDOMComponentWithClass"),f=Ae.scryRenderedDOMComponentsWithClass(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+N);return f[0]},scryRenderedDOMComponentsWithTag:function(f,N){return we(f,"scryRenderedDOMComponentsWithTag"),Ae.findAllInRenderedTree(f,function(A){return Ae.isDOMComponent(A)&&A.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,N){if(we(f,"findRenderedDOMComponentWithTag"),f=Ae.scryRenderedDOMComponentsWithTag(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+N);return f[0]},scryRenderedComponentsWithType:function(f,N){return we(f,"scryRenderedComponentsWithType"),Ae.findAllInRenderedTree(f,function(A){return Ae.isCompositeComponentWithType(A,N)})},findRenderedComponentWithType:function(f,N){if(we(f,"findRenderedComponentWithType"),f=Ae.scryRenderedComponentsWithType(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+N);return f[0]},mockComponent:function(f,N){return N=N||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return C.createElement(N,null,this.props.children)}),this},nativeTouchData:function(f,N){return{touches:[{pageX:f,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(f){function N(){P--,o.current=A,R.current=fe}u===!1&&(u=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),P++;var A=o.current,fe=R.current;o.current=!0,R.current=!0;try{var ee=a(f)}catch(Pe){throw N(),Pe}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Pe,Ue){ee.then(function(){1<P||s===!0&&A===!0?(N(),Pe()):K(function(Ge){N(),Ge?Ue(Ge):Pe()})},function(Ge){N(),Ue(Ge)})}};try{P!==1||s!==!1&&A!==!1||T(),N()}catch(Pe){throw N(),Pe}return{then:function(Pe){Pe()}}}};function Pn(f){return function(N,A){if(C.isValidElement(N))throw Error(L(228));if(Ae.isCompositeComponent(N))throw Error(L(229));var fe=h[f],ee=new ge;ee.target=N,ee.type=f.toLowerCase();var Pe=r(N),Ue=new Bn(fe,Pe,ee,N);Ue.persist(),n(Ue,A),fe.phasedRegistrationNames?v(Ue):I(Ue),W.unstable_batchedUpdates(function(){B(N),ie(Ue)}),U()}}Ae.Simulate={};for(var it in h)Ae.Simulate[it]=Pn(it);function _n(f,N){return function(A,fe){var ee=new ge(f);n(ee,fe),Ae.isDOMComponent(A)?(A=M(A),ee.target=A,_(N,1,document,ee)):A.tagName&&(ee.target=A,_(N,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[j,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[F,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var N=f[1];Ae.SimulateNative[N]=_n(N,f[0])}),G.exports=Ae.default||Ae}).call(this,e("hOG+")(Kn))},IfXp:function(Kn,gn,e){"use strict";e.r(gn);var G=e("q1tI"),n=e.n(G),C=e("dEAq"),W=e.n(C),de=e("0zqC"),L=e("ZpkN"),Qe=e("JjdP"),Ne=n.a.memo(Qe.default["function-demo"].component),ve=n.a.memo(Qe.default["function-demo-1"].component);gn.default=Rn=>(n.a.useEffect(()=>{Rn!=null&&Rn.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(Rn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8868\u5355\u8054\u52A8"},n.a.createElement(C.AnchorLink,{to:"#\u8868\u5355\u8054\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u8054\u52A8"),n.a.createElement("p",null,"\u8868\u5355\u7EC4\u4EF6\u95F4\u7684\u8054\u52A8\u662F\u5F00\u53D1\u4E2D\u666E\u904D\u7684\u95EE\u9898\uFF0CFormRender \u5E0C\u671B\u80FD\u4FDD\u6301\u7B80\u6D01\u6613\u7528\u7684 api \u7684\u540C\u65F6\u652F\u6301\u8054\u52A8\u3002\u4E3A\u6B64\u6211\u4EEC\u63D0\u4F9B\u4E86\u201C\u51FD\u6570\u8868\u8FBE\u5F0F\u201D\u3002"),n.a.createElement("h3",{id:"\u51FD\u6570\u8868\u8FBE\u5F0F"},n.a.createElement(C.AnchorLink,{to:"#\u51FD\u6570\u8868\u8FBE\u5F0F","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u51FD\u6570\u8868\u8FBE\u5F0F"),n.a.createElement("p",null,"\u51FD\u6570\u8868\u8FBE\u5F0F\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u4EE5\u53CC\u62EC\u53F7",n.a.createElement("code",null,'"',"{","{","...","}","}",'"'),"\u4E3A\u8BED\u6CD5\u7279\u5F81\u3002schema \u91CC\u9664\u4E86 default (\u9ED8\u8BA4\u503C) / rules \u5B57\u6BB5(\u6821\u9A8C\u4FE1\u606F) \u4EE5\u5916\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u652F\u6301\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982"),n.a.createElement(L.a,{code:`{
  "title": "{{formData.x.y === 'us' ? '\u7F8E\u5143':'\u4EBA\u6C11\u5E01'}}",
  "type": "string"
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 1\uFF1Arules \u5B57\u6BB5\u6682\u4E0D\u652F\u6301\u8868\u8FBE\u5F0F\uFF0C\u800C\u662F\u7528 ",n.a.createElement("code",null,"validator")," \u65B9\u6CD5\u5199\u590D\u6742\u6821\u9A8C\uFF0C\u8BE6\u89C1 ",n.a.createElement(C.Link,{to:"https://github.com/yiminghe/async-validator#type"},"async-validator \u6587\u6863"),"\u3002",n.a.createElement("br",null),"\u6CE8 2\uFF1Adefault \u5B57\u6BB5\u5BF9\u5E94\u7684\u662F <Input /> \u7684 defaultValue\uFF0CdefaultValue \u662F\u4E0D\u4F1A\u6839\u636E\u503C\u7684\u540E\u7EED\u53D8\u5316\u800C\u53D8\u5316\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F\u4E0D\u5141\u8BB8 default \u5B57\u6BB5\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u9047\u5230\u4E00\u4E2A\u7EC4\u4EF6\u9700\u8981\u4FEE\u6539\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u7684\u503C\u7684\u60C5\u51B5\uFF0C\u8BF7\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u7684 ",n.a.createElement("code",null,"addons.onItemChange")," \u65B9\u6CD5\u3002"),n.a.createElement("p",null,"\u51FD\u6570\u8868\u8FBE\u5F0F\u53EF\u4F7F\u7528\u4EE5\u4E0B 2 \u5173\u952E\u5B57\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u540D\u79F0"),n.a.createElement("th",{align:"center"},"\u8BF4\u660E"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"formData"),n.a.createElement("td",{align:"center"},"\u6574\u4E2A form \u7684\u503C \uFF08\u6700\u5E38\u7528\uFF0C\u5F53\u4E24\u4E2A\u5173\u8054\u7EC4\u4EF6\u8DDD\u79BB\u8F83\u8FDC\u65F6\uFF0C\u53EF\u4EE5\u4ECE\u9876\u5C42\u7684 formData \u91CC\u83B7\u53D6\uFF09")),n.a.createElement("tr",null,n.a.createElement("td",null,"rootValue"),n.a.createElement("td",{align:"center"},"\u7236\u7EC4\u4EF6\u7684\u503C \uFF08\u4E0A\u4E00\u7EA7\u7684\u503C\uFF0C\u4E00\u822C\u5728\u5217\u8868\u573A\u666F\u4E2D\u7684\u5B50\u5143\u7D20\u83B7\u53D6\u5BF9\u5E94 index \u7684 item \u65F6\u4F7F\u7528\uFF09")))),n.a.createElement("h3",{id:"\u4F7F\u7528"},n.a.createElement(C.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528")),n.a.createElement(de.default,Qe.default["function-demo"].previewerProps,n.a.createElement(Ne,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("ol",null,n.a.createElement("li",null,"\u5728\u4EE5\u4E0A\u573A\u666F\uFF0C",n.a.createElement("code",null,"formData.select1"),"\u7684\u7236\u7EA7\u5C31\u662F formData\uFF0C\u6240\u4EE5",n.a.createElement("code",null,"rootValue"),"\u5B57\u6BB5\u4E0E",n.a.createElement("code",null,"formData"),"\u5B57\u6BB5\u4F7F\u7528\u8D77\u6765\u6CA1\u6709\u533A\u522B\u3002"),n.a.createElement("li",null,"\u5199\u8868\u8FBE\u5F0F\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u6240\u6709\u6CA1\u6709\u6307\u660E default \u503C\u7684\u5143\u7D20\u7684\u503C\u90FD\u662F undefined\u3002\u6240\u4EE5\u4F8B\u5982 checkbox \u7684\u521D\u59CB\u503C\u5E76\u4E0D\u662F false\uFF0C\u800C\u662F undefined\u3002\u5199\u7C7B\u4F3C\u4E8E ",n.a.createElement("code",null,'"',"{","{","formData.checkbox === false","}","}",'"')," \u7684\u8868\u8FBE\u5F0F\u5728\u9996\u6B21\u6E32\u67D3\u4E2D\u662F\u65E0\u6548\u7684\uFF0C\u66F4\u597D\u7684\u5904\u7406\u65B9\u5F0F\u662F\u66F2\u7EBF\u6551\u56FD\u7684 ",n.a.createElement("code",null,'"',"{","{","formData.checkbox !== true","}","}",'"'))),n.a.createElement("h3",{id:"\u66F4\u591A\u5C5E\u6027\u7684-demo"},n.a.createElement(C.AnchorLink,{to:"#\u66F4\u591A\u5C5E\u6027\u7684-demo","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u66F4\u591A\u5C5E\u6027\u7684 demo")),n.a.createElement(de.default,Qe.default["function-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u6700\u540E"},n.a.createElement(C.AnchorLink,{to:"#\u6700\u540E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6700\u540E"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5982\u679C\u6D89\u53CA\u5230\u503C\u7684\u8054\u52A8\uFF0C\u6216\u8005\u6781\u5176\u590D\u6742\u7684\u8868\u5355\u5C55\u793A\u8054\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",n.a.createElement(C.Link,{to:"/form-render/advanced/watch"},"watch")),n.a.createElement("li",null,"\u66F4\u590D\u6742\u548C\u5B9A\u5236\u5316\u7684\u8868\u5355\u9700\u6C42\u5EFA\u8BAE\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002FormRender \u7684\u8BBE\u8BA1\u7406\u5FF5\u975E\u5E38\u63A8\u5D07\u7EC4\u4EF6\u7684\u5373\u63D2\u5373\u7528\uFF0C\u8BE6\u89C1",n.a.createElement(C.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u7AE0\u8282\u3002"))))))},JjdP:function(Kn,gn,e){"use strict";e.r(gn);var G=e("9og8"),n=e("WmNS"),C=e.n(n),W=e("LtsZ"),de=`import React, { useRef } from 'react';
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

export default Demo;`,Qe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Root;`,Fe=`import React, { useState, useEffect } from 'react';
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

export default SearchInput;`,En=`import React from 'react';
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

export { valueMap, keySuggestions }`,Ye=`.markdown p {
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

export default Demo;`,Be=`import React from 'react';
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
          },
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
}`,rt=gn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return a=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var M=R(u);if(M&&M.has(P))return M.get(P);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in P)if(h!=="default"&&Object.prototype.hasOwnProperty.call(P,h)){var v=r?Object.getOwnPropertyDescriptor(P,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=P[h]}return m.default=P,M&&M.set(P,m),m},R=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,M=new WeakMap;return(R=function(r){return r?M:u})(P)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,l=(0,T.t0)(T.t1),T.t2=a,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,p=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=T.sent,o=function(){var P=(0,p.useState)("Line"),u=(0,l.default)(P,2),M=u[0],m=u[1],r={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[M];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",o);case 18:case"end":return T.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,K,P){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(K).length]}},T),l.default.createElement("p",null,JSON.stringify(K)),l.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return a=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var M=R(u);if(M&&M.has(P))return M.get(P);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in P)if(h!=="default"&&Object.prototype.hasOwnProperty.call(P,h)){var v=r?Object.getOwnPropertyDescriptor(P,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=P[h]}return m.default=P,M&&M.set(P,m),m},R=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,M=new WeakMap;return(R=function(r){return r?M:u})(P)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,l=(0,T.t0)(T.t1),T.t2=a,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,p=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=T.sent,o=function(){var P=(0,p.useState)(!1),u=(0,l.default)(P,2),M=u[0],m=u[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:M,onChange:function(){return m(!M)}})),p.default.createElement(b.PivotTable,{leftExpandable:M,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",o);case 18:case"end":return T.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K,P,u,M,m;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return P=function(I,B){if(!B&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var U=K(B);if(U&&U.has(I))return U.get(I);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in I)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(I,ge)){var pn=ie?Object.getOwnPropertyDescriptor(I,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=I[ge]}return _.default=I,U&&U.set(I,_),_},K=function(I){if(typeof WeakMap!="function")return null;var B=new WeakMap,U=new WeakMap;return(K=function(ie){return ie?U:B})(I)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,l=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,R=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,a=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,o=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=P,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,T=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},M=function(v){(0,R.default)(B,v);var I=(0,a.default)(B);function B(){return(0,p.default)(this,B),I.apply(this,arguments)}return(0,b.default)(B,[{key:"render",value:function(){var _=this.props.form;return o.default.createElement("div",null,o.default.createElement(T.default,{form:_,schema:u}),o.default.createElement(l.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),B}(o.default.Component),m=(0,T.connectForm)(M),h.abrupt("return",m);case 47:case"end":return h.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in m)if(B!=="default"&&Object.prototype.hasOwnProperty.call(m,B)){var U=I?Object.getOwnPropertyDescriptor(m,B):null;U&&(U.get||U.set)?Object.defineProperty(v,B,U):v[B]=m[B]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(I){return I?h:r})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var m=(0,R.useForm)();return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in m)if(B!=="default"&&Object.prototype.hasOwnProperty.call(m,B)){var U=I?Object.getOwnPropertyDescriptor(m,B):null;U&&(U.get||U.set)?Object.defineProperty(v,B,U):v[B]=m[B]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(I){return I?h:r})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var m=(0,R.useForm)(),r=function(v,I){I.length>0?alert("errors:"+JSON.stringify(I)):alert("formData:"+JSON.stringify(v,null,2))};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:r}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s;return C.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return o=function(){var u=(0,p.useForm)(),M=function(r,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(r))};return l.default.createElement("div",null,l.default.createElement(p.default,{form:u,schema:a,onFinish:M}),l.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},R=function(u,M){if(!M&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(M);if(m&&m.has(u))return m.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(r,v,I):r[v]=u[v]}return r.default=u,m&&m.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var M=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:M})(u)},d=e("K+nK"),K.t0=d,K.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=R,K.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return K.t3=K.sent,p=(0,K.t2)(K.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=o,K.abrupt("return",s);case 17:case"end":return K.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(p.default,{schema:b("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(p.default,{schema:b("column")}))},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return l.default.createElement(p.default,{schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{readOnly:!0,schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{labelWidth:"200",schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K,P,u,M;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return P=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var B=K(I);if(B&&B.has(v))return B.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,B&&B.set(v,U),U},K=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(K=function(_){return _?B:I})(v)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.t8=P,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return o=r.sent,r.t10=P,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return T=r.sent,u=function(){var v=(0,s.useForm)(),I=(0,a.useState)({}),B=(0,R.default)(I,2),U=B[0],_=B[1],ie=function(){(0,T.fakeApi)("xxx/getForm").then(function(we){v.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,T.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(we,Ae){Ae.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ae.map(function(Pn){return Pn.name}))):(0,T.fakeApi)("xxx/submit",we).then(function(Pn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(s.default,{form:v,schema:U,onFinish:ge}),a.default.createElement(l.default,null,a.default.createElement(p.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},M=u,r.abrupt("return",M);case 48:case"end":return r.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K,P,u,M;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return K=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var B=T(I);if(B&&B.has(v))return B.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,B&&B.set(v,U),U},T=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(T=function(_){return _?B:I})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=K,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var v=(0,o.useForm)(),I=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(_){var ie=_.data,ge=_.errors,pn=_.schema,we=(0,p.default)(_,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Ae){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:v,schema:P,beforeFinish:B,onFinish:I}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},M=u,r.abrupt("return",M);case 42:case"end":return r.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K,P,u,M;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return K=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var B=T(I);if(B&&B.has(v))return B.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,B&&B.set(v,U),U},T=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(T=function(_){return _?B:I})(v)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=K,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var v=(0,o.useForm)(),I=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(){(0,s.fakeApi)("xxx/getForm").then(function(_){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:v,schema:P,onFinish:I}),R.default.createElement(l.default,null,R.default.createElement(p.default,{onClick:B},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},M=u,r.abrupt("return",M);case 44:case"end":return r.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K,P,u;return C.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return T=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var I=s(v);if(I&&I.has(h))return I.get(h);var B={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in h)if(_!=="default"&&Object.prototype.hasOwnProperty.call(h,_)){var ie=U?Object.getOwnPropertyDescriptor(h,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(B,_,ie):B[_]=h[_]}return B.default=h,I&&I.set(h,B),B},s=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,I=new WeakMap;return(s=function(U){return U?I:v})(h)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,l=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=T,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return R=m.sent,m.t6=T,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,a=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=m.sent,K={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var h=(0,a.useForm)(),v=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},I=function(U,_){_.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):p.default.info(JSON.stringify(U))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(a.default,{form:h,schema:K,onMount:v,onFinish:I}),b.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=P,m.abrupt("return",u);case 37:case"end":return m.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s;return C.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return R=function(u,M){if(!M&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(M);if(m&&m.has(u))return m.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(r,v,I):r[v]=u[v]}return r.default=u,m&&m.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var M=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:M})(u)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=R,K.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return K.t3=K.sent,p=(0,K.t2)(K.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var u=(0,p.useForm)();return l.default.createElement(p.default,{form:u,schema:a})},s=o,K.abrupt("return",s);case 17:case"end":return K.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.expression})},o.abrupt("return",R);case 16:case"end":return o.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T;return C.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return R=function(M,m){if(!m&&M&&M.__esModule)return M;if(M===null||typeof M!="object"&&typeof M!="function")return{default:M};var r=b(m);if(r&&r.has(M))return r.get(M);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in M)if(I!=="default"&&Object.prototype.hasOwnProperty.call(M,I)){var B=v?Object.getOwnPropertyDescriptor(M,I):null;B&&(B.get||B.set)?Object.defineProperty(h,I,B):h[I]=M[I]}return h.default=M,r&&r.set(M,h),h},b=function(M){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(b=function(v){return v?r:m})(M)},P.t0=R,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,d=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=P.sent,P.t2=R,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,p=(0,P.t2)(P.t3),a=function(M){return new Promise(function(m){return setTimeout(m,M)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var M=(0,p.useForm)(),m=function(){M.setValues({input1:"hello world"}),a(3e3).then(function(h){M.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:M,schema:o,onMount:m})},T=s,P.abrupt("return",T);case 20:case"end":return P.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(T){var K=T.value;console.log(K)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},a=R,s.abrupt("return",a);case 16:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s;return C.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return R=function(u,M){if(!M&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(M);if(m&&m.has(u))return m.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(r,v,I):r[v]=u[v]}return r.default=u,m&&m.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var M=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:M})(u)},K.t0=R,K.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return K.t1=K.sent,d=(0,K.t0)(K.t1),K.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=K.sent,K.t2=R,K.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return K.t3=K.sent,p=(0,K.t2)(K.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var u=(0,p.useForm)(),M={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){u.setValueByPath("input2",r)}};return d.default.createElement(p.default,{form:u,schema:a,watch:M})},s=o,K.abrupt("return",s);case 19:case"end":return K.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in m)if(B!=="default"&&Object.prototype.hasOwnProperty.call(m,B)){var U=I?Object.getOwnPropertyDescriptor(m,B):null;U&&(U.get||U.set)?Object.defineProperty(v,B,U):v[B]=m[B]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(I){return I?h:r})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=o,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var m=(0,R.useForm)(),r=function(I,B){B.length>0?alert("errorFields:"+JSON.stringify(B)):alert("formData:"+JSON.stringify(I,null,2))},h={input1:function(I){I.length>2?m.setSchemaByPath("obj1.select",function(B){var U=B.enumNames;return{enumNames:U.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:r,watch:h}),p.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=T,u.abrupt("return",K);case 27:case"end":return u.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T,K,P,u,M;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var B=s(I);if(B&&B.has(v))return B.get(v);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ie,ge):U[ie]=v[ie]}return U.default=v,B&&B.set(v,U),U},s=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(s=function(_){return _?B:I})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=T,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,o=(0,r.t8)(r.t9),K={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(v){return console.log("widget props:",v),R.default.createElement(p.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},v))},u=function(){var v=(0,o.useForm)(),I=function(){};return R.default.createElement("div",null,R.default.createElement(o.default,{readOnly:!0,form:v,schema:K,widgets:{site:P},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},M=u,r.abrupt("return",M);case 40:case"end":return r.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.basic})},o.abrupt("return",R);case 16:case"end":return o.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.titleTrick})},o.abrupt("return",R);case 16:case"end":return o.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Rn},"main.js":{import:"./main",content:Fe},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Bn},"monaco/index.js":{import:"./monaco",content:En},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a,o,s,T;return C.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=e("K+nK"),P.t0=d,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,l=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"P2DI"));case 8:for(p=P.sent,b=[],R=0;R<6;R++)b.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(M,m){return l.default.createElement("a",{onClick:function(){return alert(M.title)}},"\u7F16\u8F91")}}],s=function(){var M=function(){return{rows:b,total:b.length}};return l.default.createElement(p.TableProvider,null,l.default.createElement(p.Search,{schema:a,api:M}),l.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},T=s,P.abrupt("return",T);case 16:case"end":return P.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){var d,l,p,b,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(p.default,{defaultValue:b}))},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Be}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var j=Object(G.a)(C.a.mark(function F(){return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Vn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Kn,gn,e){},Zs1V:function(Kn){Kn.exports=JSON.parse("{}")},p8sG:function(Kn,gn,e){"use strict";Kn.exports=e("80pN")}}]);
