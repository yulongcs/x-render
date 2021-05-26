(window.webpackJsonp=window.webpackJsonp||[]).push([[37,10],{"0zqC":function(En,ln,e){"use strict";e.r(ln);var J=e("tJVT"),n=e("q1tI"),p=e.n(n),L=e("wx14"),de=e("rePB"),K=e("ODXe"),Xe=e("U8pU"),Re=e("Ff2n"),ve=e("VTBJ"),zn=e("TSYQ"),Pe=e.n(zn),on=e("Zm9Q"),Tn=e("5Z9U"),Rn=e("6cGi"),vn=e("KQm4"),Ze=e("wgJM"),Ln=e("t23M");function wn(t){var u=Object(n.useRef)(),c=Object(n.useRef)(!1);function E(){for(var C=arguments.length,y=new Array(C),O=0;O<C;O++)y[O]=arguments[O];c.current||(Ze.a.cancel(u.current),u.current=Object(Ze.a)(function(){t.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ze.a.cancel(u.current)}},[]),E}function Dn(t){var u=Object(n.useRef)([]),c=Object(n.useState)({}),E=Object(K.a)(c,2),C=E[1],y=Object(n.useRef)(typeof t=="function"?t():t),O=wn(function(){var W=y.current;u.current.forEach(function($){W=$(W)}),u.current=[],y.current=W,C({})});function R(W){u.current.push(W),O()}return[y.current,R]}var we=e("4IlW");function qn(t,u){var c,E=t.prefixCls,C=t.id,y=t.active,O=t.rtl,R=t.tab,W=R.key,$=R.tab,V=R.disabled,H=R.closeIcon,G=t.tabBarGutter,se=t.tabPosition,X=t.closable,Y=t.renderWrapper,le=t.removeAriaLabel,z=t.editable,q=t.onClick,ae=t.onRemove,Z=t.onFocus,ie="".concat(E,"-tab");n.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[O?"marginLeft":"marginRight"]=G:k.marginBottom=G;var Ee=z&&X!==!1&&!V;function ne(re){V||q(re)}function ce(re){re.preventDefault(),re.stopPropagation(),z.onEdit("remove",{key:W,event:re})}var me=n.createElement("div",{key:W,ref:u,className:Pe()(ie,(c={},Object(de.a)(c,"".concat(ie,"-with-remove"),Ee),Object(de.a)(c,"".concat(ie,"-active"),y),Object(de.a)(c,"".concat(ie,"-disabled"),V),c)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(W),className:"".concat(ie,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(W),"aria-disabled":V,tabIndex:V?null:0,onClick:function(Q){Q.stopPropagation(),ne(Q)},onKeyDown:function(Q){[we.a.SPACE,we.a.ENTER].includes(Q.which)&&(Q.preventDefault(),ne(Q))},onFocus:Z},$),Ee&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(ie,"-remove"),onClick:function(Q){Q.stopPropagation(),ce(Q)}},H||z.removeIcon||"\xD7"));return Y&&(me=Y(me)),me}var $n=n.forwardRef(qn),rt={width:0,height:0,left:0,top:0};function P(t,u,c){return Object(n.useMemo)(function(){for(var E,C=new Map,y=u.get((E=t[0])===null||E===void 0?void 0:E.key)||rt,O=y.left+y.width,R=0;R<t.length;R+=1){var W=t[R].key,$=u.get(W);if(!$){var V;$=u.get((V=t[R-1])===null||V===void 0?void 0:V.key)||rt}var H=C.get(W)||Object(ve.a)({},$);H.right=O-H.left-H.width,C.set(W,H)}return C},[t.map(function(E){return E.key}).join("_"),u,c])}var S={width:0,height:0,left:0,top:0,right:0};function j(t,u,c,E,C){var y=C.tabs,O=C.tabPosition,R=C.rtl,W,$,V;["top","bottom"].includes(O)?(W="width",$=R?"right":"left",V=Math.abs(u.left)):(W="height",$="top",V=-u.top);var H=u[W],G=c[W],se=E[W],X=H;return G+se>H&&(X=H-se),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var Y=y.length,le=Y,z=0;z<Y;z+=1){var q=t.get(y[z].key)||S;if(q[$]+q[W]>V+X){le=z-1;break}}for(var ae=0,Z=Y-1;Z>=0;Z-=1){var ie=t.get(y[Z].key)||S;if(ie[$]<V){ae=Z+1;break}}return[ae,le]},[t,V,X,O,y.map(function(Y){return Y.key}).join("_"),R])}var d=e("Gytx"),l=e.n(d),v=e("Kwbf");function b(t,u){var c=t.prefixCls,E=t.invalidate,C=t.item,y=t.renderItem,O=t.responsive,R=t.registerSize,W=t.itemKey,$=t.className,V=t.style,H=t.children,G=t.display,se=t.order,X=t.component,Y=X===void 0?"div":X,le=Object(Re.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=O&&!G;function q(Ee){R(W,Ee)}n.useEffect(function(){return function(){q(null)}},[]);var ae=y&&C!==void 0?y(C):H,Z;E||(Z={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:O?se:void 0,pointerEvents:z?"none":void 0});var ie={};z&&(ie["aria-hidden"]=!0);var k=n.createElement(Y,Object(L.a)({className:Pe()(!E&&c,$),style:Object(ve.a)(Object(ve.a)({},Z),V)},ie,le,{ref:u}),ae);return O&&(k=n.createElement(Ln.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var F=n.forwardRef(b);F.displayName="Item";var a=F;function i(){var t=Object(n.useState)({}),u=Object(K.a)(t,2),c=u[1],E=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,O=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function R(W){var $=y;y+=1,E.current.length<$+1&&(E.current[$]=W);var V=E.current[$];function H(G){E.current[$]=typeof G=="function"?G(E.current[$]):G,Ze.a.cancel(O),O=Object(Ze.a)(function(){C.current||c({})})}return[V,H]}return R}var s=function(u,c){var E=n.useContext(D);if(!E){var C=u.component,y=C===void 0?"div":C,O=Object(Re.a)(u,["component"]);return n.createElement(y,Object(L.a)({},O,{ref:c}))}var R=E.className,W=Object(Re.a)(E,["className"]),$=u.className,V=Object(Re.a)(u,["className"]);return n.createElement(D.Provider,{value:null},n.createElement(a,Object(L.a)({ref:c,className:Pe()(R,$)},W,V)))},I=n.forwardRef(s);I.displayName="RawItem";var M=I,D=n.createContext(null),o="responsive",T="invalidate";function m(t){return"+ ".concat(t.length," ...")}function r(t,u){var c=t.prefixCls,E=c===void 0?"rc-overflow":c,C=t.data,y=C===void 0?[]:C,O=t.renderItem,R=t.renderRawItem,W=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,H=t.ssr,G=t.style,se=t.className,X=t.maxCount,Y=t.renderRest,le=t.renderRawRest,z=t.suffix,q=t.component,ae=q===void 0?"div":q,Z=t.itemComponent,ie=t.onVisibleChange,k=Object(Re.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ee=i(),ne=H==="full",ce=Ee(null),me=Object(K.a)(ce,2),re=me[0],Q=me[1],oe=re||0,ye=Ee(new Map),he=Object(K.a)(ye,2),Oe=he[0],Ke=he[1],be=Ee(0),Fe=Object(K.a)(be,2),Me=Fe[0],Ie=Fe[1],Ae=Ee(0),je=Object(K.a)(Ae,2),$e=je[0],_e=je[1],Ve=Ee(0),ze=Object(K.a)(Ve,2),Ye=ze[0],Le=ze[1],Pn=Object(n.useState)(null),an=Object(K.a)(Pn,2),xe=an[0],dn=an[1],bn=Object(n.useState)(null),Cn=Object(K.a)(bn,2),Be=Cn[0],He=Cn[1],en=n.useMemo(function(){return Be===null&&ne?Number.MAX_SAFE_INTEGER:Be||0},[Be,re]),ke=Object(n.useState)(!1),Wn=Object(K.a)(ke,2),Jn=Wn[0],Kn=Wn[1],rn="".concat(E,"-item"),jn=Math.max(Me,$e),cn=y.length&&X===o,An=X===T,nn=cn||typeof X=="number"&&y.length>X,un=Object(n.useMemo)(function(){var pe=y;return cn?re===null&&ne?pe=y:pe=y.slice(0,Math.min(y.length,oe/V)):typeof X=="number"&&(pe=y.slice(0,X)),pe},[y,V,re,X,cn]),Bn=Object(n.useMemo)(function(){return cn?y.slice(en+1):y.slice(un.length)},[y,un,cn,en]),fn=Object(n.useCallback)(function(pe,De){var Te;return typeof W=="function"?W(pe):(Te=W&&(pe==null?void 0:pe[W]))!==null&&Te!==void 0?Te:De},[W]),qe=Object(n.useCallback)(O||function(pe){return pe},[O]);function Qe(pe,De){He(pe),De||(Kn(pe<y.length-1),ie==null||ie(pe))}function Gn(pe,De){Q(De.clientWidth)}function Hn(pe,De){Ke(function(Te){var tn=new Map(Te);return De===null?tn.delete(pe):tn.set(pe,De),tn})}function nt(pe,De){_e(De),Ie($e)}function Fn(pe,De){Le(De)}function yn(pe){return Oe.get(fn(un[pe],pe))}n.useLayoutEffect(function(){if(oe&&jn&&un){var pe=Ye,De=un.length,Te=De-1;if(!De){Qe(0),dn(null);return}for(var tn=0;tn<De;tn+=1){var Zn=yn(tn);if(Zn===void 0){Qe(tn-1,!0);break}if(pe+=Zn,tn===Te-1&&pe+yn(Te)<=oe){Qe(Te),dn(null);break}else if(pe+jn>oe){Qe(tn-1),dn(pe-Zn-Ye+$e);break}else if(tn===Te){Qe(Te),dn(pe-Ye);break}}z&&yn(0)+Ye>oe&&dn(null)}},[oe,Oe,$e,Ye,fn,un]);var Qn=Jn&&!!Bn.length,On={};xe!==null&&cn&&(On={position:"absolute",left:xe,top:0});var pn={prefixCls:rn,responsive:cn,component:Z,invalidate:An},Xn=R?function(pe,De){var Te=fn(pe,De);return n.createElement(D.Provider,{key:Te,value:Object(ve.a)(Object(ve.a)({},pn),{},{order:De,item:pe,itemKey:Te,registerSize:Hn,display:De<=en})},R(pe,De))}:function(pe,De){var Te=fn(pe,De);return n.createElement(a,Object(L.a)({},pn,{order:De,key:Te,item:pe,renderItem:qe,itemKey:Te,registerSize:Hn,display:De<=en}))},In,Yn={order:Qn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Qn};if(le)le&&(In=n.createElement(D.Provider,{value:Object(ve.a)(Object(ve.a)({},pn),Yn)},le(Bn)));else{var mn=Y||m;In=n.createElement(a,Object(L.a)({},pn,Yn),typeof mn=="function"?mn(Bn):mn)}var Nn=n.createElement(ae,Object(L.a)({className:Pe()(!An&&E,se),style:G,ref:u},k),un.map(Xn),nn?In:null,z&&n.createElement(a,Object(L.a)({},pn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Fn,display:!0,style:On}),z));return cn&&(Nn=n.createElement(Ln.default,{onResize:Gn},Nn)),Nn}var g=n.forwardRef(r);g.displayName="Overflow",g.Item=M,g.RESPONSIVE=o,g.INVALIDATE=T;var h=g,A=h,w=e("1OyB"),U=e("vuIU"),_=e("Ji7U"),ue=e("LK+K"),ge=e("bT9E"),hn=e("YrtM"),We=n.createContext(null);function Ne(t,u){var c=Object(ve.a)({},t);return Object.keys(u).forEach(function(E){var C=u[E];C!==void 0&&(c[E]=C)}),c}function Sn(t){var u=t.children,c=t.locked,E=Object(Re.a)(t,["children","locked"]),C=n.useContext(We),y=Object(hn.a)(function(){return Ne(C,E)},[C,E],function(O,R){return!c&&(O[0]!==R[0]||!l()(O[1],R[1]))});return n.createElement(We.Provider,{value:y},u)}function ut(t,u,c,E){var C=n.useContext(We),y=C.activeKey,O=C.onActive,R=C.onInactive,W={active:y===t};return u||(W.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),O(t)},W.onMouseLeave=function($){E==null||E({key:t,domEvent:$}),R(t)}),W}function _n(t){var u=t.item,c=Object(Re.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(v.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),u}}),c}function f(t){var u=t.icon,c=t.props,E=t.children,C;return typeof u=="function"?C=n.createElement(u,Object(ve.a)({},c)):C=u,C||E||null}function B(t){var u=n.useContext(We),c=u.mode,E=u.rtl,C=u.inlineIndent;if(c!=="inline")return null;var y=t;return E?{paddingRight:y*C}:{paddingLeft:y*C}}var N=[],fe=n.createContext(null);function ee(){return n.useContext(fe)}var Se=n.createContext(N);function Ue(t){var u=n.useContext(Se);return n.useMemo(function(){return t!==void 0?[].concat(Object(vn.a)(u),[t]):u},[u,t])}var Ge=n.createContext(null),zt=n.createContext(null);function Jt(t,u){return t===void 0?null:"".concat(t,"-").concat(u)}function Gt(t){var u=n.useContext(zt);return Jt(u,t)}var Ea=function(t){Object(_.a)(c,t);var u=Object(ue.a)(c);function c(){return Object(w.a)(this,c),u.apply(this,arguments)}return Object(U.a)(c,[{key:"render",value:function(){var C=this.props,y=C.title,O=C.attribute,R=C.elementRef,W=Object(Re.a)(C,["title","attribute","elementRef"]),$=Object(ge.a)(W,["eventKey"]);return Object(v.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(A.Item,Object(L.a)({},O,{title:typeof y=="string"?y:void 0},$,{ref:R}))}}]),c}(n.Component),ba=function(u){var c,E=u.style,C=u.className,y=u.eventKey,O=u.disabled,R=u.itemIcon,W=u.children,$=u.role,V=u.onMouseEnter,H=u.onMouseLeave,G=u.onClick,se=u.onKeyDown,X=u.onFocus,Y=Object(Re.a)(u,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Gt(y),z=n.useContext(We),q=z.prefixCls,ae=z.onItemClick,Z=z.disabled,ie=z.overflowDisabled,k=z.itemIcon,Ee=z.selectedKeys,ne=z.onActive,ce="".concat(q,"-item"),me=n.useRef(),re=n.useRef(),Q=Z||O,oe=Ue(y),ye=function(Ve){return{key:y,keyPath:oe,item:me.current,domEvent:Ve}},he=R||k,Oe=ut(y,Q,V,H),Ke=Oe.active,be=Object(Re.a)(Oe,["active"]),Fe=Ee.includes(y),Me=B(oe.length),Ie=function(Ve){if(!Q){var ze=ye(Ve);G==null||G(_n(ze)),ae(ze)}},Ae=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var ze=ye(Ve);G==null||G(_n(ze)),ae(ze)}},je=function(Ve){ne(y),X==null||X(Ve)},$e={};return u.role==="option"&&($e["aria-selected"]=Fe),n.createElement(Ea,Object(L.a)({ref:me,elementRef:re,role:$===null?"none":$||"menuitem",tabIndex:O?null:-1,"data-menu-id":ie&&le?null:le},Y,be,$e,{component:"li","aria-disabled":O,style:Object(ve.a)(Object(ve.a)({},Me),E),className:Pe()(ce,(c={},Object(de.a)(c,"".concat(ce,"-active"),Ke),Object(de.a)(c,"".concat(ce,"-selected"),Fe),Object(de.a)(c,"".concat(ce,"-disabled"),Q),c),C),onClick:Ie,onKeyDown:Ae,onFocus:je}),W,n.createElement(f,{props:Object(ve.a)(Object(ve.a)({},u),{},{isSelected:Fe}),icon:he}))};function Ca(t){var u=t.eventKey,c=ee(),E=Ue(u);return n.useEffect(function(){if(c)return c.registerPath(u,E),function(){c.unregisterPath(u,E)}},[E]),c?null:n.createElement(ba,t)}var St=Ca;function Pt(t,u){return Object(on.a)(t).map(function(c,E){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(vn.a)(u),[E]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function et(t){var u=n.useRef(t);u.current=t;var c=n.useCallback(function(){for(var E,C=arguments.length,y=new Array(C),O=0;O<C;O++)y[O]=arguments[O];return(E=u.current)===null||E===void 0?void 0:E.call.apply(E,[u].concat(y))},[]);return t?c:void 0}var Fa=function(u,c){var E=u.className,C=u.children,y=Object(Re.a)(u,["className","children"]),O=n.useContext(We),R=O.prefixCls,W=O.mode;return n.createElement("ul",Object(L.a)({className:Pe()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(W==="inline"?"inline":"vertical"),E)},y,{"data-menu-list":!0,ref:c}),C)},Ht=n.forwardRef(Fa);Ht.displayName="SubMenuList";var Qt=Ht,Oa=e("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Yt(t,u,c){if(u)return u;if(c)return c[t]||c.other}var Da={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Sa(t){var u=t.prefixCls,c=t.visible,E=t.children,C=t.popup,y=t.popupClassName,O=t.popupOffset,R=t.disabled,W=t.mode,$=t.onVisibleChange,V=n.useContext(We),H=V.getPopupContainer,G=V.rtl,se=V.subMenuOpenDelay,X=V.subMenuCloseDelay,Y=V.builtinPlacements,le=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ae=V.defaultMotions,Z=n.useState(!1),ie=Object(K.a)(Z,2),k=ie[0],Ee=ie[1],ne=G?Object(ve.a)(Object(ve.a)({},Ra),Y):Object(ve.a)(Object(ve.a)({},Xt),Y),ce=Da[W],me=Yt(W,q,ae),re=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(u,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Q=n.useRef();return n.useEffect(function(){return Q.current=Object(Ze.a)(function(){Ee(c)}),function(){Ze.a.cancel(Q.current)}},[c]),n.createElement(Oa.a,{prefixCls:u,popupClassName:Pe()("".concat(u,"-popup"),Object(de.a)({},"".concat(u,"-rtl"),G),y),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:C,popupAlign:O&&{offset:O},action:R?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:z,popupMotion:re},E)}var Pa=e("8XRh");function ja(t){var u=t.id,c=t.open,E=t.keyPath,C=t.children,y="inline",O=n.useContext(We),R=O.prefixCls,W=O.forceSubMenuRender,$=O.motion,V=O.defaultMotions,H=O.mode,G=n.useRef(!1);G.current=H===y;var se=n.useState(!G.current),X=Object(K.a)(se,2),Y=X[0],le=X[1],z=G.current?c:!1;n.useEffect(function(){G.current&&le(!1)},[H]);var q=Object(ve.a)({},Yt(y,$,V));E.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Z){return!G.current&&!Z&&le(!0),ae==null?void 0:ae(Z)},Y?null:n.createElement(Sn,{mode:y,locked:!G.current},n.createElement(Pa.default,Object(L.a)({visible:z},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Z){var ie=Z.className,k=Z.style;return n.createElement(Qt,{id:u,className:ie,style:k},C)}))}var Aa=function(u){var c,E=u.style,C=u.className,y=u.title,O=u.eventKey,R=u.disabled,W=u.internalPopupClose,$=u.children,V=u.itemIcon,H=u.expandIcon,G=u.popupClassName,se=u.popupOffset,X=u.onClick,Y=u.onMouseEnter,le=u.onMouseLeave,z=u.onTitleClick,q=u.onTitleMouseEnter,ae=u.onTitleMouseLeave,Z=Object(Re.a)(u,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ie=Gt(O),k=n.useContext(We),Ee=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,re=k.overflowDisabled,Q=k.activeKey,oe=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Oe=k.onItemClick,Ke=k.onOpenChange,be=k.onActive,Fe=n.useContext(Ge),Me=Fe.isSubPathKey,Ie=Ue(),Ae="".concat(Ee,"-submenu"),je=me||R,$e=n.useRef(),_e=n.useRef(),Ve=V||ye,ze=H||he,Ye=ce.includes(O),Le=!re&&Ye,Pn=Me(oe,O),an=ut(O,je,q,ae),xe=an.active,dn=Object(Re.a)(an,["active"]),bn=n.useState(!1),Cn=Object(K.a)(bn,2),Be=Cn[0],He=Cn[1],en=function(Qe){je||He(Qe)},ke=function(Qe){en(!0),Y==null||Y({key:O,domEvent:Qe})},Wn=function(Qe){en(!1),le==null||le({key:O,domEvent:Qe})},Jn=n.useMemo(function(){return xe||(ne!=="inline"?Be||Me([Q],O):!1)},[ne,xe,Q,Be,O,Me]),Kn=B(Ie.length),rn=function(Qe){je||(z==null||z({key:O,domEvent:Qe}),ne==="inline"&&Ke(O,!Ye))},jn=et(function(qe){X==null||X(_n(qe)),Oe(qe)}),cn=function(Qe){ne!=="inline"&&Ke(O,Qe)},An=function(){be(O)},nn=ie&&"".concat(ie,"-popup"),un=n.createElement("div",Object(L.a)({role:"menuitem",style:Kn,className:"".concat(Ae,"-title"),tabIndex:je?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":re&&ie?null:ie,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":je,onClick:rn,onFocus:An},dn),y,n.createElement(f,{icon:ne!=="horizontal"?ze:null,props:Object(ve.a)(Object(ve.a)({},u),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ae,"-arrow")}))),Bn=n.useRef(ne);if(ne!=="inline"&&(Bn.current=Ie.length>1?"vertical":ne),!re){var fn=Bn.current;un=n.createElement(Sa,{mode:fn,prefixCls:Ae,visible:!W&&Le&&ne!=="inline",popupClassName:G,popupOffset:se,popup:n.createElement(Sn,{mode:fn},n.createElement(Qt,{id:nn,ref:_e},$)),disabled:je,onVisibleChange:cn},un)}return n.createElement(Sn,{onItemClick:jn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:ze},n.createElement(A.Item,Object(L.a)({role:"none"},Z,{component:"li",style:E,className:Pe()(Ae,"".concat(Ae,"-").concat(ne),C,(c={},Object(de.a)(c,"".concat(Ae,"-open"),Le),Object(de.a)(c,"".concat(Ae,"-active"),Jn),Object(de.a)(c,"".concat(Ae,"-selected"),Pn),Object(de.a)(c,"".concat(Ae,"-disabled"),je),c)),onMouseEnter:ke,onMouseLeave:Wn}),un,!re&&n.createElement(ja,{id:nn,open:Le,keyPath:Ie},$)))};function Zt(t){var u=t.eventKey,c=t.children,E=Ue(u),C=Pt(c,E),y=ee();n.useEffect(function(){if(y)return y.registerPath(u,E),function(){y.unregisterPath(u,E)}},[E]);var O;return y?O=C:O=n.createElement(Aa,t,C),n.createElement(Se.Provider,{value:E},O)}var Ba=e("x/xZ");function xt(t){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(t)){var c=t.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),O=null;return C&&!Number.isNaN(y)?O=y:E&&O===null&&(O=0),E&&t.disabled&&(O=null),O!==null&&(O>=0||u&&O<0)}return!1}function kt(t){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(vn.a)(t.querySelectorAll("*")).filter(function(E){return xt(E,u)});return xt(t,u)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,u){if(u.keyCode===9){var c=kt(t),E=c[u.shiftKey?0:c.length-1],C=E===document.activeElement||t===document.activeElement;if(C){var y=c[u.shiftKey?c.length-1:0];y.focus(),u.preventDefault()}}}var jt=we.a.LEFT,At=we.a.RIGHT,Bt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Bt,ft,jt,At];function Ia(t,u,c,E){var C,y,O,R,W="prev",$="next",V="children",H="parent";if(t==="inline"&&E===pt)return{inlineTrigger:!0};var G=(C={},Object(de.a)(C,Bt,W),Object(de.a)(C,ft,$),C),se=(y={},Object(de.a)(y,jt,c?$:W),Object(de.a)(y,At,c?W:$),Object(de.a)(y,ft,V),Object(de.a)(y,pt,V),y),X=(O={},Object(de.a)(O,Bt,W),Object(de.a)(O,ft,$),Object(de.a)(O,pt,V),Object(de.a)(O,qt,H),Object(de.a)(O,jt,c?V:H),Object(de.a)(O,At,c?H:V),O),Y={inline:G,horizontal:se,vertical:X,inlineSub:G,horizontalSub:X,verticalSub:X},le=(R=Y["".concat(t).concat(u?"":"Sub")])===null||R===void 0?void 0:R[E];switch(le){case W:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var u=t;u;){if(u.getAttribute("data-menu-list"))return u;u=u.parentElement}return null}function Ma(t,u){for(var c=t||document.activeElement;c;){if(u.has(c))return c;c=c.parentElement}return null}function Ta(t,u){var c=kt(t,!0);return c.filter(function(E){return u.has(E)})}function ea(t,u,c){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Ta(t,u),y=C.length,O=C.findIndex(function(R){return c===R});return E<0?O===-1?O=y-1:O-=1:E>0&&(O+=1),O=(O+y)%y,C[O]}function wa(t,u,c,E,C,y,O,R,W,$){var V=n.useRef(),H=n.useRef();H.current=u;var G=function(){Ze.a.cancel(V.current)};return n.useEffect(function(){return function(){G()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Y,le,z,q=function(){Y=new Set,le=new Map,z=new Map;var ye=y();return ye.forEach(function(he){var Oe=document.querySelector("[data-menu-id='".concat(Jt(E,he),"']"));Oe&&(Y.add(Oe),z.set(Oe,he),le.set(he,Oe))}),Y};q();var ae=le.get(u),Z=Ma(ae,Y),ie=z.get(Z),k=Ia(t,O(ie,!0).length===1,c,X);if(!k)return;_t.includes(X)&&se.preventDefault();var Ee=function(ye){if(ye){var he=ye,Oe=ye.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(he=Oe);var Ke=z.get(ye);R(Ke),G(),V.current=Object(Ze.a)(function(){H.current===Ke&&he.focus()})}};if(k.sibling||!Z){var ne;!Z||t==="inline"?ne=C.current:ne=Na(Z);var ce=ea(ne,Y,Z,k.offset);Ee(ce)}else if(k.inlineTrigger)W(ie);else if(k.offset>0)W(ie,!0),G(),V.current=Object(Ze.a)(function(){q();var oe=Z.getAttribute("aria-controls"),ye=document.getElementById(oe),he=ea(ye,Y);Ee(he)},5);else if(k.offset<0){var me=O(ie,!0),re=me[me.length-2],Q=le.get(re);W(re,!1),Ee(Q)}}$==null||$(se)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var u=Object(Rn.a)(t,{value:t}),c=Object(K.a)(u,2),E=c[0],C=c[1];return n.useEffect(function(){na+=1;var y="".concat(Wa,"-").concat(na);C("rc-menu-uuid-".concat(y))},[]),E}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var It="__RC_UTIL_PATH_SPLIT__",ta=function(u){return u.join(It)},$a=function(u){return u.split(It)},Nt="rc-menu-more";function Va(){var t=n.useState({}),u=Object(K.a)(t,2),c=u[1],E=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),O=Object(K.a)(y,2),R=O[0],W=O[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var ae=ta(q);C.current.set(ae,z),E.current.set(z,ae),$.current+=1;var Z=$.current;La(function(){Z===$.current&&c({})})},[]),H=Object(n.useCallback)(function(z,q){var ae=ta(q);C.current.delete(ae),E.current.delete(z)},[]),G=Object(n.useCallback)(function(z){W(z)},[]),se=Object(n.useCallback)(function(z,q){var ae=E.current.get(z)||"",Z=$a(ae);return q&&R.includes(Z[0])&&Z.unshift(Nt),Z},[R]),X=Object(n.useCallback)(function(z,q){return z.some(function(ae){var Z=se(ae,!0);return Z.includes(q)})},[se]),Y=function(){var q=Object(vn.a)(E.current.keys());return R.length&&q.push(Nt),q},le=Object(n.useCallback)(function(z){var q="".concat(E.current.get(z)).concat(It),ae=new Set;return Object(vn.a)(C.current.keys()).forEach(function(Z){Z.startsWith(q)&&ae.add(C.current.get(Z))}),ae},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:G,isSubPathKey:X,getKeyPath:se,getKeys:Y,getSubPathKeys:le}}var vt=[],Ua=function(u){var c,E,C=u.prefixCls,y=C===void 0?"rc-menu":C,O=u.style,R=u.className,W=u.tabIndex,$=W===void 0?0:W,V=u.children,H=u.direction,G=u.id,se=u.mode,X=se===void 0?"vertical":se,Y=u.inlineCollapsed,le=u.disabled,z=u.disabledOverflow,q=u.subMenuOpenDelay,ae=q===void 0?.1:q,Z=u.subMenuCloseDelay,ie=Z===void 0?.1:Z,k=u.forceSubMenuRender,Ee=u.defaultOpenKeys,ne=u.openKeys,ce=u.activeKey,me=u.defaultActiveFirst,re=u.selectable,Q=re===void 0?!0:re,oe=u.multiple,ye=oe===void 0?!1:oe,he=u.defaultSelectedKeys,Oe=u.selectedKeys,Ke=u.onSelect,be=u.onDeselect,Fe=u.inlineIndent,Me=Fe===void 0?24:Fe,Ie=u.motion,Ae=u.defaultMotions,je=u.triggerSubMenuAction,$e=je===void 0?"hover":je,_e=u.builtinPlacements,Ve=u.itemIcon,ze=u.expandIcon,Ye=u.overflowedIndicator,Le=Ye===void 0?"...":Ye,Pn=u.getPopupContainer,an=u.onClick,xe=u.onOpenChange,dn=u.onKeyDown,bn=u.openAnimation,Cn=u.openTransitionName,Be=Object(Re.a)(u,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Pt(V,vt),en=n.useState(!1),ke=Object(K.a)(en,2),Wn=ke[0],Jn=ke[1],Kn=n.useRef(),rn=Ka(G),jn=H==="rtl",cn=n.useMemo(function(){return X==="inline"&&Y?["vertical",Y]:[X,!1]},[X,Y]),An=Object(K.a)(cn,2),nn=An[0],un=An[1],Bn=n.useState(0),fn=Object(K.a)(Bn,2),qe=fn[0],Qe=fn[1],Gn=qe>=He.length-1||nn!=="horizontal"||z,Hn=Object(Rn.a)(Ee,{value:ne,postState:function(x){return x||vt}}),nt=Object(K.a)(Hn,2),Fn=nt[0],yn=nt[1],Qn=n.useState(Fn),On=Object(K.a)(Qn,2),pn=On[0],Xn=On[1],In=nn==="inline",Yn=n.useRef(!1);n.useEffect(function(){In&&Xn(Fn)},[Fn]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(In)yn(pn);else{var te=[];yn(te),xe==null||xe(te)}},[In]);var mn=Va(),Nn=mn.registerPath,pe=mn.unregisterPath,De=mn.refreshOverflowKeys,Te=mn.isSubPathKey,tn=mn.getKeyPath,Zn=mn.getKeys,gt=mn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Nn,unregisterPath:pe}},[Nn,pe]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){De(Gn?vt:He.slice(qe+1).map(function(te){return te.key}))},[qe,Gn]);var Lt=Object(Rn.a)(ce||me&&((c=He[0])===null||c===void 0?void 0:c.key),{value:ce}),tt=Object(K.a)(Lt,2),yt=tt[0],it=tt[1],Et=et(function(te){it(te)}),$t=et(function(){it(void 0)}),bt=Object(Rn.a)(he||[],{value:Oe,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ct=Object(K.a)(bt,2),at=Ct[0],Mn=Ct[1],Ft=function(x){if(!!Q){var Ce=x.key,Je=at.includes(Ce),sn;Je?sn=at.filter(function(kn){return kn!==Ce}):ye?sn=[].concat(Object(vn.a)(at),[Ce]):sn=[Ce],Mn(sn);var Un=Object(ve.a)(Object(ve.a)({},x),{},{selectedKeys:sn});Je?be==null||be(Un):Ke==null||Ke(Un)}},Ot=et(function(te){an==null||an(_n(te)),Ft(te)}),lt=et(function(te,x){var Ce=Fn.filter(function(sn){return sn!==te});if(x)Ce.push(te);else if(nn!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}l()(Fn,Ce)||(yn(Ce),xe==null||xe(Ce))}),xn=et(Pn),ot=function(x,Ce){var Je=Ce!=null?Ce:!Fn.includes(x);lt(x,Je)},dt=wa(nn,yt,jn,rn,Kn,Zn,tn,it,ot,dn);n.useEffect(function(){Jn(!0)},[]);var Rt=nn!=="horizontal"||z?He:He.map(function(te,x){return n.createElement(Sn,{key:te.key,overflowDisabled:x>qe},te)}),Dt=n.createElement(A,Object(L.a)({id:G,ref:Kn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:St,className:Pe()(y,"".concat(y,"-root"),"".concat(y,"-").concat(nn),R,(E={},Object(de.a)(E,"".concat(y,"-inline-collapsed"),un),Object(de.a)(E,"".concat(y,"-rtl"),jn),E)),dir:H,style:O,role:"menu",tabIndex:$,data:Rt,renderRawItem:function(x){return x},renderRawRest:function(x){var Ce=x.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Zt,{eventKey:Nt,title:Le,disabled:Gn,internalPopupClose:Ce===0},Je)},maxCount:nn!=="horizontal"||z?A.INVALIDATE:A.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Qe(x)},onKeyDown:dt},Be));return n.createElement(zt.Provider,{value:rn},n.createElement(Sn,{prefixCls:y,mode:nn,openKeys:Fn,rtl:jn,disabled:le,motion:Wn?Ie:null,defaultMotions:Wn?Ae:null,activeKey:yt,onActive:Et,onInactive:$t,selectedKeys:at,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:ie,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:xn,itemIcon:Ve,expandIcon:ze,onItemClick:Ot,onOpenChange:lt},n.createElement(Ge.Provider,{value:Kt},Dt),n.createElement(fe.Provider,{value:Wt},He)))},za=Ua,Ja=function(u){var c=u.className,E=u.title,C=u.eventKey,y=u.children,O=Object(Re.a)(u,["className","title","eventKey","children"]),R=n.useContext(We),W=R.prefixCls,$="".concat(W,"-item-group");return n.createElement("li",Object(L.a)({},O,{onClick:function(H){return H.stopPropagation()},className:Pe()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat($,"-list")},y))};function Ga(t){var u=t.children,c=Object(Re.a)(t,["children"]),E=Ue(c.eventKey),C=Pt(u,E),y=ee();return y?C:n.createElement(Ja,c,C)}function Ha(t){var u=t.className,c=t.style,E=n.useContext(We),C=E.prefixCls,y=ee();return y?null:n.createElement("li",{className:Pe()("".concat(C,"-item-divider"),u),style:c})}var st=za;st.Item=St,st.SubMenu=Zt,st.ItemGroup=Ga,st.Divider=Ha;var Qa=st,Xa=e("eDIo");function Ya(t,u){var c=t.prefixCls,E=t.editable,C=t.locale,y=t.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:u,type:"button",className:"".concat(c,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(R){E.onEdit("add",{event:R})}},E.addIcon||"+")}var aa=n.forwardRef(Ya);function Za(t,u){var c=t.prefixCls,E=t.id,C=t.tabs,y=t.locale,O=t.mobile,R=t.moreIcon,W=R===void 0?"More":R,$=t.moreTransitionName,V=t.style,H=t.className,G=t.editable,se=t.tabBarGutter,X=t.rtl,Y=t.onTabClick,le=Object(n.useState)(!1),z=Object(K.a)(le,2),q=z[0],ae=z[1],Z=Object(n.useState)(null),ie=Object(K.a)(Z,2),k=ie[0],Ee=ie[1],ne="".concat(E,"-more-popup"),ce="".concat(c,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,re=y==null?void 0:y.dropdownAriaLabel,Q=n.createElement(Qa,{onClick:function(Fe){var Me=Fe.key,Ie=Fe.domEvent;Y(Me,Ie),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},C.map(function(be){return n.createElement(St,{key:be.key,id:"".concat(ne,"-").concat(be.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(be.key),disabled:be.disabled},be.tab)}));function oe(be){for(var Fe=C.filter(function($e){return!$e.disabled}),Me=Fe.findIndex(function($e){return $e.key===k})||0,Ie=Fe.length,Ae=0;Ae<Ie;Ae+=1){Me=(Me+be+Ie)%Ie;var je=Fe[Me];if(!je.disabled){Ee(je.key);return}}}function ye(be){var Fe=be.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Fe)&&(ae(!0),be.preventDefault());return}switch(Fe){case we.a.UP:oe(-1),be.preventDefault();break;case we.a.DOWN:oe(1),be.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,be);break}}Object(n.useEffect)(function(){var be=document.getElementById(me);be&&be.scrollIntoView&&be.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||Ee(null)},[q]);var he=Object(de.a)({},X?"marginLeft":"marginRight",se);C.length||(he.visibility="hidden",he.order=1);var Oe=Pe()(Object(de.a)({},"".concat(ce,"-rtl"),X)),Ke=O?null:n.createElement(Xa.default,{prefixCls:ce,overlay:Q,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ae,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(E,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:Pe()("".concat(c,"-nav-operations"),H),style:V,ref:u},Ke,n.createElement(aa,{prefixCls:c,locale:y,editable:G}))}var xa=n.forwardRef(Za),Mt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ua=Math.pow(.995,ht);function qa(t,u){var c=Object(n.useState)(),E=Object(K.a)(c,2),C=E[0],y=E[1],O=Object(n.useState)(0),R=Object(K.a)(O,2),W=R[0],$=R[1],V=Object(n.useState)(0),H=Object(K.a)(V,2),G=H[0],se=H[1],X=Object(n.useState)(),Y=Object(K.a)(X,2),le=Y[0],z=Y[1],q=Object(n.useRef)();function ae(ce){var me=ce.touches[0],re=me.screenX,Q=me.screenY;y({x:re,y:Q}),window.clearInterval(q.current)}function Z(ce){if(!!C){ce.preventDefault();var me=ce.touches[0],re=me.screenX,Q=me.screenY;y({x:re,y:Q});var oe=re-C.x,ye=Q-C.y;u(oe,ye);var he=Date.now();$(he),se(he-W),z({x:oe,y:ye})}}function ie(){if(!!C&&(y(null),z(null),le)){var ce=le.x/G,me=le.y/G,re=Math.abs(ce),Q=Math.abs(me);if(Math.max(re,Q)<ka)return;var oe=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}oe*=ua,ye*=ua,u(oe*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function Ee(ce){var me=ce.deltaX,re=ce.deltaY,Q=0,oe=Math.abs(me),ye=Math.abs(re);oe===ye?Q=k.current==="x"?me:re:oe>ye?(Q=me,k.current="x"):(Q=re,k.current="y"),u(-Q,-Q)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Z,onTouchEnd:ie,onWheel:Ee},n.useEffect(function(){function ce(oe){ne.current.onTouchStart(oe)}function me(oe){ne.current.onTouchMove(oe)}function re(oe){ne.current.onTouchEnd(oe)}function Q(oe){ne.current.onWheel(oe)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",Q),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function u(E){return t.current.has(E)||t.current.set(E,n.createRef()),t.current.get(E)}function c(E){t.current.delete(E)}return[u,c]}function sa(t,u){var c=n.useRef(t),E=n.useState({}),C=Object(K.a)(E,2),y=C[1];function O(R){var W=typeof R=="function"?R(c.current):R;W!==c.current&&u(W,c.current),c.current=W,y({})}return[c.current,O]}var ia=function(u){var c=u.position,E=u.prefixCls,C=u.extra;if(!C)return null;var y,O=C;return c==="right"&&(y=O.right||!O.left&&O||null),c==="left"&&(y=O.left||null),y?n.createElement("div",{className:"".concat(E,"-extra-content")},y):null};function er(t,u){var c,E=n.useContext(Mt),C=E.prefixCls,y=E.tabs,O=t.className,R=t.style,W=t.id,$=t.animated,V=t.activeKey,H=t.rtl,G=t.extra,se=t.editable,X=t.locale,Y=t.tabPosition,le=t.tabBarGutter,z=t.children,q=t.onTabClick,ae=t.onTabScroll,Z=Object(n.useRef)(),ie=Object(n.useRef)(),k=Object(n.useRef)(),Ee=Object(n.useRef)(),ne=_a(),ce=Object(K.a)(ne,2),me=ce[0],re=ce[1],Q=Y==="top"||Y==="bottom",oe=sa(0,function(te,x){Q&&ae&&ae({direction:te>x?"left":"right"})}),ye=Object(K.a)(oe,2),he=ye[0],Oe=ye[1],Ke=sa(0,function(te,x){!Q&&ae&&ae({direction:te>x?"top":"bottom"})}),be=Object(K.a)(Ke,2),Fe=be[0],Me=be[1],Ie=Object(n.useState)(0),Ae=Object(K.a)(Ie,2),je=Ae[0],$e=Ae[1],_e=Object(n.useState)(0),Ve=Object(K.a)(_e,2),ze=Ve[0],Ye=Ve[1],Le=Object(n.useState)(0),Pn=Object(K.a)(Le,2),an=Pn[0],xe=Pn[1],dn=Object(n.useState)(0),bn=Object(K.a)(dn,2),Cn=bn[0],Be=bn[1],He=Object(n.useState)(null),en=Object(K.a)(He,2),ke=en[0],Wn=en[1],Jn=Object(n.useState)(null),Kn=Object(K.a)(Jn,2),rn=Kn[0],jn=Kn[1],cn=Object(n.useState)(0),An=Object(K.a)(cn,2),nn=An[0],un=An[1],Bn=Object(n.useState)(0),fn=Object(K.a)(Bn,2),qe=fn[0],Qe=fn[1],Gn=Dn(new Map),Hn=Object(K.a)(Gn,2),nt=Hn[0],Fn=Hn[1],yn=P(y,nt,je),Qn="".concat(C,"-nav-operations-hidden"),On=0,pn=0;Q?H?(On=0,pn=Math.max(0,je-ke)):(On=Math.min(0,ke-je),pn=0):(On=Math.min(0,rn-ze),pn=0);function Xn(te){return te<On?On:te>pn?pn:te}var In=Object(n.useRef)(),Yn=Object(n.useState)(),mn=Object(K.a)(Yn,2),Nn=mn[0],pe=mn[1];function De(){pe(Date.now())}function Te(){window.clearTimeout(In.current)}qa(Z,function(te,x){function Ce(Je,sn){Je(function(Un){var kn=Xn(Un+sn);return kn})}if(Q){if(ke>=je)return!1;Ce(Oe,te)}else{if(rn>=ze)return!1;Ce(Me,x)}return Te(),De(),!0}),Object(n.useEffect)(function(){return Te(),Nn&&(In.current=window.setTimeout(function(){pe(0)},100)),Te},[Nn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,x=yn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(Q){var Ce=he;H?x.right<he?Ce=x.right:x.right+x.width>he+ke&&(Ce=x.right+x.width-ke):x.left<-he?Ce=-x.left:x.left+x.width>-he+ke&&(Ce=-(x.left+x.width-ke)),Me(0),Oe(Xn(Ce))}else{var Je=Fe;x.top<-Fe?Je=-x.top:x.top+x.height>-Fe+rn&&(Je=-(x.top+x.height-rn)),Oe(0),Me(Xn(Je))}}var Zn=j(yn,{width:ke,height:rn,left:he,top:Fe},{width:an,height:Cn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:y})),gt=Object(K.a)(Zn,2),Wt=gt[0],Kt=gt[1],Lt=y.map(function(te){var x=te.key;return n.createElement($n,{id:W,prefixCls:C,key:x,rtl:H,tab:te,closable:te.closable,editable:se,active:x===V,tabPosition:Y,tabBarGutter:le,renderWrapper:z,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:me(x),onClick:function(Je){q(x,Je)},onRemove:function(){re(x)},onFocus:function(){tn(x),De(),H||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),tt=wn(function(){var te,x,Ce,Je,sn,Un,kn,Vt,Ut,lr=((te=Z.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,ma=((Ce=Ee.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=Ee.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Wn(lr),jn(or),un(ma),Qe(fa);var pa=(((kn=ie.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,va=(((Vt=ie.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Ye(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Qn);xe(pa-(ha?0:dr)),Be(va-(ha?0:cr)),Fn(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,ct=me(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=y.slice(0,Wt),it=y.slice(Kt+1),Et=[].concat(Object(vn.a)(yt),Object(vn.a)(it)),$t=Object(n.useState)(),bt=Object(K.a)($t,2),Ct=bt[0],at=bt[1],Mn=yn.get(V),Ft=Object(n.useRef)();function Ot(){Ze.a.cancel(Ft.current)}Object(n.useEffect)(function(){var te={};return Mn&&(Q?(H?te.right=Mn.right:te.left=Mn.left,te.width=Mn.width):(te.top=Mn.top,te.height=Mn.height)),Ot(),Ft.current=Object(Ze.a)(function(){at(te)}),Ot},[Mn,Q,H]),Object(n.useEffect)(function(){tn()},[V,Mn,yn,Q]),Object(n.useEffect)(function(){tt()},[H,le,V,y.map(function(te){return te.key}).join("_")]);var lt=!!Et.length,xn="".concat(C,"-nav-wrap"),ot,dt,Rt,Dt;return Q?H?(dt=he>0,ot=he+ke<je):(ot=he<0,dt=-he+ke<je):(Rt=Fe<0,Dt=-Fe+rn<ze),n.createElement("div",{ref:u,role:"tablist",className:Pe()("".concat(C,"-nav"),O),style:R,onKeyDown:function(){De()}},n.createElement(ia,{position:"left",extra:G,prefixCls:C}),n.createElement(Ln.default,{onResize:tt},n.createElement("div",{className:Pe()(xn,(c={},Object(de.a)(c,"".concat(xn,"-ping-left"),ot),Object(de.a)(c,"".concat(xn,"-ping-right"),dt),Object(de.a)(c,"".concat(xn,"-ping-top"),Rt),Object(de.a)(c,"".concat(xn,"-ping-bottom"),Dt),c)),ref:Z},n.createElement(Ln.default,{onResize:tt},n.createElement("div",{ref:ie,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Fe,"px)"),transition:Nn?"none":void 0}},Lt,n.createElement(aa,{ref:Ee,prefixCls:C,locale:X,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Pe()("".concat(C,"-ink-bar"),Object(de.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(xa,Object(L.a)({},t,{ref:k,prefixCls:C,tabs:Et,className:!lt&&Qn})),n.createElement(ia,{position:"right",extra:G,prefixCls:C}))}var la=n.forwardRef(er);function nr(t){var u=t.id,c=t.activeKey,E=t.animated,C=t.tabPosition,y=t.rtl,O=t.destroyInactiveTabPane,R=n.useContext(Mt),W=R.prefixCls,$=R.tabs,V=E.tabPane,H=$.findIndex(function(G){return G.key===c});return n.createElement("div",{className:Pe()("".concat(W,"-content-holder"))},n.createElement("div",{className:Pe()("".concat(W,"-content"),"".concat(W,"-content-").concat(C),Object(de.a)({},"".concat(W,"-content-animated"),V)),style:H&&V?Object(de.a)({},y?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(G){return n.cloneElement(G.node,{key:G.key,prefixCls:W,tabKey:G.key,id:u,animated:V,active:G.key===c,destroyInactiveTabPane:O})})))}function oa(t){var u=t.prefixCls,c=t.forceRender,E=t.className,C=t.style,y=t.id,O=t.active,R=t.animated,W=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,H=n.useState(c),G=Object(K.a)(H,2),se=G[0],X=G[1];n.useEffect(function(){O?X(!0):W&&X(!1)},[O,W]);var Y={};return O||(R?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!O,style:Object(ve.a)(Object(ve.a)({},Y),C),className:Pe()("".concat(u,"-tabpane"),O&&"".concat(u,"-tabpane-active"),E)},(O||se||c)&&V)}var da=0;function tr(t){return Object(on.a)(t).map(function(u){if(n.isValidElement(u)){var c=u.key!==void 0?String(u.key):void 0;return Object(ve.a)(Object(ve.a)({key:c},u.props),{},{node:u})}return null}).filter(function(u){return u})}function ar(t,u){var c,E=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,O=t.className,R=t.children,W=t.direction,$=t.activeKey,V=t.defaultActiveKey,H=t.editable,G=t.animated,se=G===void 0?{inkBar:!0,tabPane:!1}:G,X=t.tabPosition,Y=X===void 0?"top":X,le=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Z=t.moreIcon,ie=t.moreTransitionName,k=t.destroyInactiveTabPane,Ee=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,re=Object(Re.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Q=tr(R),oe=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Xe.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Oe=Object(K.a)(he,2),Ke=Oe[0],be=Oe[1];Object(n.useEffect)(function(){be(Object(Tn.a)())},[]);var Fe=Object(Rn.a)(function(){var Be;return(Be=Q[0])===null||Be===void 0?void 0:Be.key},{value:$,defaultValue:V}),Me=Object(K.a)(Fe,2),Ie=Me[0],Ae=Me[1],je=Object(n.useState)(function(){return Q.findIndex(function(Be){return Be.key===Ie})}),$e=Object(K.a)(je,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Be=Q.findIndex(function(en){return en.key===Ie});if(Be===-1){var He;Be=Math.max(0,Math.min(_e,Q.length-1)),Ae((He=Q[Be])===null||He===void 0?void 0:He.key)}Ve(Be)},[Q.map(function(Be){return Be.key}).join("_"),Ie,_e]);var ze=Object(Rn.a)(null,{value:E}),Ye=Object(K.a)(ze,2),Le=Ye[0],Pn=Ye[1],an=Y;Ke&&!["left","right"].includes(Y)&&(an="top"),Object(n.useEffect)(function(){E||(Pn("rc-tabs-".concat(da)),da+=1)},[]);function xe(Be,He){ce==null||ce(Be,He),Ae(Be),ne==null||ne(Be)}var dn={id:Le,activeKey:Ie,animated:ye,tabPosition:an,rtl:oe,mobile:Ke},bn,Cn=Object(ve.a)(Object(ve.a)({},dn),{},{editable:H,locale:ae,moreIcon:Z,moreTransitionName:ie,tabBarGutter:le,onTabClick:xe,onTabScroll:me,extra:q,style:z,panes:R});return Ee?bn=Ee(Cn,la):bn=n.createElement(la,Cn),n.createElement(Mt.Provider,{value:{tabs:Q,prefixCls:y}},n.createElement("div",Object(L.a)({ref:u,id:E,className:Pe()(y,"".concat(y,"-").concat(an),(c={},Object(de.a)(c,"".concat(y,"-mobile"),Ke),Object(de.a)(c,"".concat(y,"-editable"),H),Object(de.a)(c,"".concat(y,"-rtl"),oe),c),O)},re),bn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:k},dn,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ur=rr,Tt=e("MZF8"),gn=e("dEAq"),sr=e("ZpkN"),Er=e("TIsu");function wt(t,u){var c,E=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return E||(E=u.tsx?"tsx":"jsx"),E}var ir=t=>{var u,c,E,C=Object(n.useRef)(),y=Object(n.useContext)(gn.context),O=y.locale,R=Object(gn.useLocaleProps)(O,t),W=Object(gn.useDemoUrl)(R.identifier),$=R.demoUrl||W,V=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(R.identifier),H=Object.keys(R.sources).length===1,G=Object(gn.useCodeSandbox)((u=R.hideActions)!==null&&u!==void 0&&u.includes("CSB")?null:R),se=Object(gn.useRiddle)((c=R.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:R),X=Object(gn.useMotions)(R.motions||[],C.current),Y=Object(J.default)(X,2),le=Y[0],z=Y[1],q=Object(gn.useCopy)(),ae=Object(J.default)(q,2),Z=ae[0],ie=ae[1],k=Object(n.useState)("_"),Ee=Object(J.default)(k,2),ne=Ee[0],ce=Ee[1],me=Object(n.useState)(wt(ne,R.sources[ne])),re=Object(J.default)(me,2),Q=re[0],oe=re[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(J.default)(ye,2),Oe=he[0],Ke=he[1],be=Object(n.useState)(Math.random()),Fe=Object(J.default)(be,2),Me=Fe[0],Ie=Fe[1],Ae=R.sources[ne][Q]||R.sources[ne].content,je=Object(gn.useTSPlaygroundUrl)(O,Ae),$e=Object(n.useRef)(),_e=Object(gn.usePrefersColor)(),Ve=Object(J.default)(_e,1),ze=Ve[0];Object(n.useEffect)(()=>{Ie(Math.random())},[ze]);function Ye(Le){ce(Le),oe(wt(Le,R.sources[Le]))}return p.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&p.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),p.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?p.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:$e}):R.children),p.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&p.a.createElement(gn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&p.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),p.a.createElement("div",{className:"__dumi-default-previewer-actions"},G&&p.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:G}),se&&p.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),R.motions&&p.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>le()}),R.iframe&&p.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ie(Math.random())}),!((E=R.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&p.a.createElement(gn.Link,{target:"_blank",to:$},p.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),p.a.createElement("span",null),p.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ie,onClick:()=>Z(Ae)}),Q==="tsx"&&Oe&&p.a.createElement(gn.Link,{target:"_blank",to:je},p.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),p.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Oe)})),Oe&&p.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&p.a.createElement(ur,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Ye},Object.keys(R.sources).map(Le=>p.a.createElement(oa,{tab:Le==="_"?"index.".concat(wt(Le,R.sources[Le])):Le,key:Le}))),p.a.createElement("div",{className:"__dumi-default-previewer-source"},p.a.createElement(sr.a,{code:Ae,lang:Q,showCopy:!1}))))},br=ln.default=ir},"80pN":function(En,ln,e){"use strict";(function(J){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),p=e("q1tI"),L=e("i8i4"),de=e("QCnb");function K(f){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+f,N=1;N<arguments.length;N++)B+="&args[]="+encodeURIComponent(arguments[N]);return"Minified React error #"+f+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xe=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xe.hasOwnProperty("ReactCurrentDispatcher")||(Xe.ReactCurrentDispatcher={current:null}),Xe.hasOwnProperty("ReactCurrentBatchConfig")||(Xe.ReactCurrentBatchConfig={suspense:null});function Re(f){var B=f,N=f;if(f.alternate)for(;B.return;)B=B.return;else{f=B;do B=f,(B.effectTag&1026)!=0&&(N=B.return),f=B.return;while(f)}return B.tag===3?N:null}function ve(f){if(Re(f)!==f)throw Error(K(188))}function zn(f){var B=f.alternate;if(!B){if(B=Re(f),B===null)throw Error(K(188));return B!==f?null:f}for(var N=f,fe=B;;){var ee=N.return;if(ee===null)break;var Se=ee.alternate;if(Se===null){if(fe=ee.return,fe!==null){N=fe;continue}break}if(ee.child===Se.child){for(Se=ee.child;Se;){if(Se===N)return ve(ee),f;if(Se===fe)return ve(ee),B;Se=Se.sibling}throw Error(K(188))}if(N.return!==fe.return)N=ee,fe=Se;else{for(var Ue=!1,Ge=ee.child;Ge;){if(Ge===N){Ue=!0,N=ee,fe=Se;break}if(Ge===fe){Ue=!0,fe=ee,N=Se;break}Ge=Ge.sibling}if(!Ue){for(Ge=Se.child;Ge;){if(Ge===N){Ue=!0,N=Se,fe=ee;break}if(Ge===fe){Ue=!0,fe=Se,N=ee;break}Ge=Ge.sibling}if(!Ue)throw Error(K(189))}}if(N.alternate!==fe)throw Error(K(190))}if(N.tag!==3)throw Error(K(188));return N.stateNode.current===N?f:B}function Pe(){return!0}function on(){return!1}function Tn(f,B,N,fe){this.dispatchConfig=f,this._targetInst=B,this.nativeEvent=N,f=this.constructor.Interface;for(var ee in f)f.hasOwnProperty(ee)&&((B=f[ee])?this[ee]=B(N):ee==="target"?this.target=fe:this[ee]=N[ee]);return this.isDefaultPrevented=(N.defaultPrevented!=null?N.defaultPrevented:N.returnValue===!1)?Pe:on,this.isPropagationStopped=on,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Pe)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Pe)},persist:function(){this.isPersistent=Pe},isPersistent:on,destructor:function(){var f=this.constructor.Interface,B;for(B in f)this[B]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=on,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(f){function B(){}function N(){return fe.apply(this,arguments)}var fe=this;B.prototype=fe.prototype;var ee=new B;return n(ee,N.prototype),N.prototype=ee,N.prototype.constructor=N,N.Interface=n({},fe.Interface,f),N.extend=fe.extend,Ze(N),N},Ze(Tn);function Rn(f,B,N,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,f,B,N,fe),ee}return new this(f,B,N,fe)}function vn(f){if(!(f instanceof this))throw Error(K(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Ze(f){f.eventPool=[],f.getPooled=Rn,f.release=vn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(f,B){var N={};return N[f.toLowerCase()]=B.toLowerCase(),N["Webkit"+f]="webkit"+B,N["Moz"+f]="moz"+B,N}var Dn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},qn={};Ln&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function $n(f){if(we[f])return we[f];if(!Dn[f])return f;var B=Dn[f],N;for(N in B)if(B.hasOwnProperty(N)&&N in qn)return we[f]=B[N];return f}var rt=$n("animationend"),P=$n("animationiteration"),S=$n("animationstart"),j=$n("transitionend"),d=null;function l(f){if(d===null)try{var B=("require"+Math.random()).slice(0,7);d=(J&&J[B])("timers").setImmediate}catch(N){d=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return d(f)}var v=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=v[11],F=v[12],a=L.unstable_batchedUpdates,i=Xe.IsSomeRendererActing,s=typeof de.unstable_flushAllWithoutAsserting=="function",I=de.unstable_flushAllWithoutAsserting||function(){for(var f=!1;b();)f=!0;return f};function M(f){try{I(),l(function(){I()?M(f):f()})}catch(B){f(B)}}var D=0,o=!1,T=L.findDOMNode,m=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=m[0],g=m[4],h=m[5],A=m[6],w=m[7],U=m[8],_=m[9],ue=m[10];function ge(){}function hn(f,B){if(!f)return[];if(f=zn(f),!f)return[];for(var N=f,fe=[];;){if(N.tag===5||N.tag===6||N.tag===1||N.tag===0){var ee=N.stateNode;B(ee)&&fe.push(ee)}if(N.child)N.child.return=N,N=N.child;else{if(N===f)return fe;for(;!N.sibling;){if(!N.return||N.return===f)return fe;N=N.return}N.sibling.return=N.return,N=N.sibling}}}function We(f,B){if(f&&!f._reactInternalFiber){var N=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":N==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":N,Error(K(286,B,f))}}var Ne={renderIntoDocument:function(f){var B=document.createElement("div");return L.render(f,B)},isElement:function(f){return p.isValidElement(f)},isElementOfType:function(f,B){return p.isValidElement(f)&&f.type===B},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&p.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Ne.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,B){return Ne.isCompositeComponent(f)?f._reactInternalFiber.type===B:!1},findAllInRenderedTree:function(f,B){return We(f,"findAllInRenderedTree"),f?hn(f._reactInternalFiber,B):[]},scryRenderedDOMComponentsWithClass:function(f,B){return We(f,"scryRenderedDOMComponentsWithClass"),Ne.findAllInRenderedTree(f,function(N){if(Ne.isDOMComponent(N)){var fe=N.className;typeof fe!="string"&&(fe=N.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(B)){if(B===void 0)throw Error(K(11));B=B.split(/\s+/)}return B.every(function(Se){return ee.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,B){if(We(f,"findRenderedDOMComponentWithClass"),f=Ne.scryRenderedDOMComponentsWithClass(f,B),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+B);return f[0]},scryRenderedDOMComponentsWithTag:function(f,B){return We(f,"scryRenderedDOMComponentsWithTag"),Ne.findAllInRenderedTree(f,function(N){return Ne.isDOMComponent(N)&&N.tagName.toUpperCase()===B.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,B){if(We(f,"findRenderedDOMComponentWithTag"),f=Ne.scryRenderedDOMComponentsWithTag(f,B),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+B);return f[0]},scryRenderedComponentsWithType:function(f,B){return We(f,"scryRenderedComponentsWithType"),Ne.findAllInRenderedTree(f,function(N){return Ne.isCompositeComponentWithType(N,B)})},findRenderedComponentWithType:function(f,B){if(We(f,"findRenderedComponentWithType"),f=Ne.scryRenderedComponentsWithType(f,B),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+B);return f[0]},mockComponent:function(f,B){return B=B||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return p.createElement(B,null,this.props.children)}),this},nativeTouchData:function(f,B){return{touches:[{pageX:f,pageY:B}]}},Simulate:null,SimulateNative:{},act:function(f){function B(){D--,i.current=N,F.current=fe}o===!1&&(o=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),D++;var N=i.current,fe=F.current;i.current=!0,F.current=!0;try{var ee=a(f)}catch(Se){throw B(),Se}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Se,Ue){ee.then(function(){1<D||s===!0&&N===!0?(B(),Se()):M(function(Ge){B(),Ge?Ue(Ge):Se()})},function(Ge){B(),Ue(Ge)})}};try{D!==1||s!==!1&&N!==!1||I(),B()}catch(Se){throw B(),Se}return{then:function(Se){Se()}}}};function Sn(f){return function(B,N){if(p.isValidElement(B))throw Error(K(228));if(Ne.isCompositeComponent(B))throw Error(K(229));var fe=g[f],ee=new ge;ee.target=B,ee.type=f.toLowerCase();var Se=r(B),Ue=new Tn(fe,Se,ee,B);Ue.persist(),n(Ue,N),fe.phasedRegistrationNames?h(Ue):A(Ue),L.unstable_batchedUpdates(function(){w(B),ue(Ue)}),U()}}Ne.Simulate={};for(var ut in g)Ne.Simulate[ut]=Sn(ut);function _n(f,B){return function(N,fe){var ee=new ge(f);n(ee,fe),Ne.isDOMComponent(N)?(N=T(N),ee.target=N,_(B,1,document,ee)):N.tagName&&(ee.target=N,_(B,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[P,"animationIteration"],[S,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[j,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var B=f[1];Ne.SimulateNative[B]=_n(B,f[0])}),J.exports=Ne.default||Ne}).call(this,e("hOG+")(En))},JjdP:function(En,ln,e){"use strict";e.r(ln);var J=e("9og8"),n=e("WmNS"),p=e.n(n),L=e("LtsZ"),de=`import React, { useRef } from 'react';
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

export default Demo;`,K=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Xe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Re=`import React from 'react';
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
};`,zn=`import React, { Component } from 'react';
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

export default Root;`,Pe=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,on=`{
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

export default Demo;`,vn=`/* PrismJS 1.16.0
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

export default Demo;`,Dn=`import React, { useState, useRef } from 'react';
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
}`,rt=ln.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i;return p.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return a=function(D,o){if(!o&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var T=F(o);if(T&&T.has(D))return T.get(D);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in D)if(g!=="default"&&Object.prototype.hasOwnProperty.call(D,g)){var h=r?Object.getOwnPropertyDescriptor(D,g):null;h&&(h.get||h.set)?Object.defineProperty(m,g,h):m[g]=D[g]}return m.default=D,T&&T.set(D,m),m},F=function(D){if(typeof WeakMap!="function")return null;var o=new WeakMap,T=new WeakMap;return(F=function(r){return r?T:o})(D)},d=e("K+nK"),I.t0=d,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,l=(0,I.t0)(I.t1),I.t2=a,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,v=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,i=function(){var D=(0,v.useState)("Line"),o=(0,l.default)(D,2),T=o[0],m=o[1],r={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[T];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},I.abrupt("return",i);case 18:case"end":return I.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(I,M,D){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},I),l.default.createElement("p",null,JSON.stringify(M)),l.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i;return p.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return a=function(D,o){if(!o&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var T=F(o);if(T&&T.has(D))return T.get(D);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in D)if(g!=="default"&&Object.prototype.hasOwnProperty.call(D,g)){var h=r?Object.getOwnPropertyDescriptor(D,g):null;h&&(h.get||h.set)?Object.defineProperty(m,g,h):m[g]=D[g]}return m.default=D,T&&T.set(D,m),m},F=function(D){if(typeof WeakMap!="function")return null;var o=new WeakMap,T=new WeakMap;return(F=function(r){return r?T:o})(D)},d=e("K+nK"),I.t0=d,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,l=(0,I.t0)(I.t1),I.t2=a,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,v=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,i=function(){var D=(0,v.useState)(!1),o=(0,l.default)(D,2),T=o[0],m=o[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:T,onChange:function(){return m(!T)}})),v.default.createElement(b.PivotTable,{leftExpandable:T,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},I.abrupt("return",i);case 18:case"end":return I.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M,D,o,T,m;return p.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return D=function(A,w){if(!w&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var U=M(w);if(U&&U.has(A))return U.get(A);var _={},ue=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in A)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(A,ge)){var hn=ue?Object.getOwnPropertyDescriptor(A,ge):null;hn&&(hn.get||hn.set)?Object.defineProperty(_,ge,hn):_[ge]=A[ge]}return _.default=A,U&&U.set(A,_),_},M=function(A){if(typeof WeakMap!="function")return null;var w=new WeakMap,U=new WeakMap;return(M=function(ue){return ue?U:w})(A)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,l=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(63).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,v=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(64).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,b=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,F=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(60).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,a=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,i=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=g.sent,g.t12=D,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,I=(0,g.t12)(g.t13),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(h){(0,F.default)(w,h);var A=(0,a.default)(w);function w(){return(0,v.default)(this,w),A.apply(this,arguments)}return(0,b.default)(w,[{key:"render",value:function(){var _=this.props.form;return i.default.createElement("div",null,i.default.createElement(I.default,{form:_,schema:o}),i.default.createElement(l.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(i.default.Component),m=(0,I.connectForm)(T),g.abrupt("return",m);case 47:case"end":return g.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M;return p.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=a(r);if(g&&g.has(m))return g.get(m);var h={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var U=A?Object.getOwnPropertyDescriptor(m,w):null;U&&(U.get||U.set)?Object.defineProperty(h,w,U):h[w]=m[w]}return h.default=m,g&&g.set(m,h),h},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(A){return A?g:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=o.sent,o.t4=i,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,F=(0,o.t4)(o.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(){var m=(0,F.useForm)();return v.default.createElement("div",null,v.default.createElement(F.default,{form:m,schema:s}),v.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=I,o.abrupt("return",M);case 27:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M;return p.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=a(r);if(g&&g.has(m))return g.get(m);var h={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var U=A?Object.getOwnPropertyDescriptor(m,w):null;U&&(U.get||U.set)?Object.defineProperty(h,w,U):h[w]=m[w]}return h.default=m,g&&g.set(m,h),h},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(A){return A?g:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=o.sent,o.t4=i,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,F=(0,o.t4)(o.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},I=function(){var m=(0,F.useForm)(),r=function(h,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(h,null,2))};return v.default.createElement("div",null,v.default.createElement(F.default,{form:m,schema:s,onFinish:r}),v.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=I,o.abrupt("return",M);case 27:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s;return p.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return i=function(){var o=(0,v.useForm)(),T=function(r,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(r))};return l.default.createElement("div",null,l.default.createElement(v.default,{form:o,schema:a,onFinish:T}),l.default.createElement("button",{onClick:o.submit},"\u63D0\u4EA4"))},F=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=b(T);if(m&&m.has(o))return m.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!=="default"&&Object.prototype.hasOwnProperty.call(o,h)){var A=g?Object.getOwnPropertyDescriptor(o,h):null;A&&(A.get||A.set)?Object.defineProperty(r,h,A):r[h]=o[h]}return r.default=o,m&&m.set(o,r),r},b=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:T})(o)},d=e("K+nK"),M.t0=d,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,l=(0,M.t0)(M.t1),M.t2=F,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,v=(0,M.t2)(M.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=i,M.abrupt("return",s);case 17:case"end":return M.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F;return p.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,v=(0,i.t2)(i.t3),b=function(I){return{type:"object",displayType:I,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(v.default,{schema:b("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(v.default,{schema:b("column")}))},i.abrupt("return",F);case 14:case"end":return i.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F;return p.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,v=(0,i.t2)(i.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return l.default.createElement(v.default,{schema:b})},i.abrupt("return",F);case 14:case"end":return i.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F;return p.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,v=(0,i.t2)(i.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return l.default.createElement(v.default,{readOnly:!0,schema:b})},i.abrupt("return",F);case 14:case"end":return i.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F;return p.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,v=(0,i.t2)(i.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return l.default.createElement(v.default,{labelWidth:"200",schema:b})},i.abrupt("return",F);case 14:case"end":return i.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M,D,o,T;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return D=function(h,A){if(!A&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=M(A);if(w&&w.has(h))return w.get(h);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in h)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(h,ue)){var ge=_?Object.getOwnPropertyDescriptor(h,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=h[ue]}return U.default=h,w&&w.set(h,U),U},M=function(h){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:A})(h)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.t8=D,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return i=r.sent,r.t10=D,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return I=r.sent,o=function(){var h=(0,s.useForm)(),A=(0,a.useState)({}),w=(0,F.default)(A,2),U=w[0],_=w[1],ue=function(){(0,I.fakeApi)("xxx/getForm").then(function(We){h.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,I.delay)(1e3).then(function(hn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Ne){Ne.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ne.map(function(Sn){return Sn.name}))):(0,I.fakeApi)("xxx/submit",We).then(function(Sn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(s.default,{form:h,schema:U,onFinish:ge}),a.default.createElement(l.default,null,a.default.createElement(v.default,{onClick:ue},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(v.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=o,r.abrupt("return",T);case 48:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M,D,o,T;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(h,A){if(!A&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=I(A);if(w&&w.has(h))return w.get(h);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in h)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(h,ue)){var ge=_?Object.getOwnPropertyDescriptor(h,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=h[ue]}return U.default=h,w&&w.set(h,U),U},I=function(h){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(I=function(_){return _?w:A})(h)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=M,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,i=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},o=function(){var h=(0,i.useForm)(),A=function(_,ue){ue.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ue=_.data,ge=_.errors,hn=_.schema,We=(0,v.default)(_,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Ne){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(i.default,{form:h,schema:D,beforeFinish:w,onFinish:A}),F.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},T=o,r.abrupt("return",T);case 42:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M,D,o,T;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(h,A){if(!A&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=I(A);if(w&&w.has(h))return w.get(h);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in h)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(h,ue)){var ge=_?Object.getOwnPropertyDescriptor(h,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=h[ue]}return U.default=h,w&&w.set(h,U),U},I=function(h){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(I=function(_){return _?w:A})(h)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=M,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,i=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},o=function(){var h=(0,i.useForm)(),A=function(_,ue){ue.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,s.fakeApi)("xxx/getForm").then(function(_){h.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(i.default,{form:h,schema:D,onFinish:A}),F.default.createElement(l.default,null,F.default.createElement(v.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),F.default.createElement(v.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=o,r.abrupt("return",T);case 44:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M,D,o;return p.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return I=function(g,h){if(!h&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var A=s(h);if(A&&A.has(g))return A.get(g);var w={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in g)if(_!=="default"&&Object.prototype.hasOwnProperty.call(g,_)){var ue=U?Object.getOwnPropertyDescriptor(g,_):null;ue&&(ue.get||ue.set)?Object.defineProperty(w,_,ue):w[_]=g[_]}return w.default=g,A&&A.set(g,w),w},s=function(g){if(typeof WeakMap!="function")return null;var h=new WeakMap,A=new WeakMap;return(s=function(U){return U?A:h})(g)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,l=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,v=(0,m.t2)(m.t3),m.t4=I,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return F=m.sent,m.t6=I,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,a=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return i=m.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var g=(0,a.useForm)(),h=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(U,_){_.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ue){return ue.name}))):v.default.info(JSON.stringify(U))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(a.default,{form:g,schema:M,onMount:h,onFinish:A}),b.default.createElement(l.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},o=D,m.abrupt("return",o);case 37:case"end":return m.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s;return p.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return F=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=b(T);if(m&&m.has(o))return m.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!=="default"&&Object.prototype.hasOwnProperty.call(o,h)){var A=g?Object.getOwnPropertyDescriptor(o,h):null;A&&(A.get||A.set)?Object.defineProperty(r,h,A):r[h]=o[h]}return r.default=o,m&&m.set(o,r),r},b=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:T})(o)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,l=(0,M.t0)(M.t1),M.t2=F,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,v=(0,M.t2)(M.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},i=function(){var o=(0,v.useForm)();return l.default.createElement(v.default,{form:o,schema:a})},s=i,M.abrupt("return",s);case 17:case"end":return M.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F;return p.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return i.t3=i.sent,v=(0,i.t2)(i.t3),i.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=i.sent,F=function(){return l.default.createElement(v.default,{schema:b.expression})},i.abrupt("return",F);case 16:case"end":return i.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Re},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I;return p.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return F=function(T,m){if(!m&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var r=b(m);if(r&&r.has(T))return r.get(T);var g={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in T)if(A!=="default"&&Object.prototype.hasOwnProperty.call(T,A)){var w=h?Object.getOwnPropertyDescriptor(T,A):null;w&&(w.get||w.set)?Object.defineProperty(g,A,w):g[A]=T[A]}return g.default=T,r&&r.set(T,g),g},b=function(T){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(b=function(h){return h?r:m})(T)},D.t0=F,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,d=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=D.sent,D.t2=F,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,v=(0,D.t2)(D.t3),a=function(T){return new Promise(function(m){return setTimeout(m,T)})},i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var T=(0,v.useForm)(),m=function(){T.setValues({input1:"hello world"}),a(3e3).then(function(g){T.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:T,schema:i,onMount:m})},I=s,D.abrupt("return",I);case 20:case"end":return D.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),window.hello=function(I){var M=I.value;console.log(M)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return l.default.createElement(v.default,{schema:b})},a=F,s.abrupt("return",a);case 16:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s;return p.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return F=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=b(T);if(m&&m.has(o))return m.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!=="default"&&Object.prototype.hasOwnProperty.call(o,h)){var A=g?Object.getOwnPropertyDescriptor(o,h):null;A&&(A.get||A.set)?Object.defineProperty(r,h,A):r[h]=o[h]}return r.default=o,m&&m.set(o,r),r},b=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:T})(o)},M.t0=F,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,d=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=M.sent,M.t2=F,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,v=(0,M.t2)(M.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},i=function(){var o=(0,v.useForm)(),T={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){o.setValueByPath("input2",r)}};return d.default.createElement(v.default,{form:o,schema:a,watch:T})},s=i,M.abrupt("return",s);case 19:case"end":return M.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M;return p.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=a(r);if(g&&g.has(m))return g.get(m);var h={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var U=A?Object.getOwnPropertyDescriptor(m,w):null;U&&(U.get||U.set)?Object.defineProperty(h,w,U):h[w]=m[w]}return h.default=m,g&&g.set(m,h),h},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(A){return A?g:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=i,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=o.sent,o.t4=i,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,F=(0,o.t4)(o.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},I=function(){var m=(0,F.useForm)(),r=function(A,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(A,null,2))},g={input1:function(A){A.length>2?m.setSchemaByPath("obj1.select",function(w){var U=w.enumNames;return{enumNames:U.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(F.default,{form:m,schema:s,onFinish:r,watch:g}),v.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=I,o.abrupt("return",M);case 27:case"end":return o.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I,M,D,o,T;return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return I=function(h,A){if(!A&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=s(A);if(w&&w.has(h))return w.get(h);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in h)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(h,ue)){var ge=_?Object.getOwnPropertyDescriptor(h,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=h[ue]}return U.default=h,w&&w.set(h,U),U},s=function(h){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(s=function(_){return _?w:A})(h)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(61)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(59),e.e(62)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(65).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=I,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=I,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,i=(0,r.t8)(r.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(h){return console.log("widget props:",h),F.default.createElement(v.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},h))},o=function(){var h=(0,i.useForm)(),A=function(){};return F.default.createElement("div",null,F.default.createElement(i.default,{readOnly:!0,form:h,schema:M,widgets:{site:D},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),F.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=o,r.abrupt("return",T);case 40:case"end":return r.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F;return p.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return i.t3=i.sent,v=(0,i.t2)(i.t3),i.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=i.sent,F=function(){return l.default.createElement(v.default,{schema:b.basic})},i.abrupt("return",F);case 16:case"end":return i.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Re},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F;return p.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return i.t3=i.sent,v=(0,i.t2)(i.t3),i.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=i.sent,F=function(){return l.default.createElement(v.default,{schema:b.titleTrick})},i.abrupt("return",F);case 16:case"end":return i.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Re},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:zn},"main.js":{import:"./main",content:Pe},"json/simplest.json":{import:"./json/simplest.json",content:on},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:Rn},"theme.css":{import:"./theme.css",content:vn},"index.css":{import:"./index.css",content:Ze}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a,i,s,I;return p.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return d=e("K+nK"),D.t0=d,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,l=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(58)]).then(e.bind(null,"P2DI"));case 8:for(v=D.sent,b=[],F=0;F<6;F++)b.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},i=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(T,m){return l.default.createElement("a",{onClick:function(){return alert(T.title)}},"\u7F16\u8F91")}}],s=function(){var T=function(){return{rows:b,total:b.length}};return l.default.createElement(v.TableProvider,null,l.default.createElement(v.Search,{schema:a,api:T}),l.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:i,rowKey:"id"}))},I=s,D.abrupt("return",I);case 16:case"end":return D.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){var d,l,v,b,F,a;return p.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},F=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(v.default,{defaultValue:b}))},a=F,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(J.a)(p.a.mark(function j(){return p.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function S(){return P.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(En,ln,e){},"TN5+":function(En,ln,e){"use strict";var J=e("0Owb"),n=e("q1tI"),p=e.n(n),L=e("kERV"),de=e.n(L);ln.a=K=>p.a.createElement("div",Object(J.default)({className:"__dumi-default-alert"},K))},Zs1V:function(En){En.exports=JSON.parse("{}")},kERV:function(En,ln,e){},p8sG:function(En,ln,e){"use strict";En.exports=e("80pN")},"unS/":function(En,ln,e){"use strict";e.r(ln);var J=e("q1tI"),n=e.n(J),p=e("dEAq"),L=e.n(p),de=e("TN5+"),K=e("0zqC"),Xe=e("ZpkN"),Re=e("JjdP"),ve=n.a.memo(Re.default["form-render-demo"].component),zn=n.a.memo(Re.default["form-render-demo-1"].component),Pe=n.a.memo(Re.default["form-render-demo-2"].component);ln.default=on=>(n.a.useEffect(()=>{on!=null&&on.location.hash&&p.AnchorLink.scrollToAnchor(decodeURIComponent(on.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"FormRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(p.Link,{to:"https://www.npmjs.com/package/form-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/form-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(p.Link,{to:"https://npmjs.org/package/form-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/form-render.svg?style=flat-square"})),n.a.createElement(p.Link,{to:"https://npmjs.org/package/form-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/form-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u4E00\u7AD9\u5F0F\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u8868\u5355\u89E3\u51B3\u65B9\u6848"))),n.a.createElement("p",null,"FormRender 1.0 \u662F\u4E0B\u4E00\u4EE3\u7684 ",n.a.createElement("code",null,"React.js")," \u8868\u5355\u89E3\u51B3\u65B9\u6848\u3002\u9879\u76EE\u4ECE\u5185\u6838\u7EA7\u522B\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u4E3A\u4E86\u80FD\u5207\u5B9E\u627F\u63A5\u65E5\u76CA\u590D\u6742\u7684\u8868\u5355\u573A\u666F\u9700\u6C42\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u4EE5\u5F3A\u5927\u7684\u6269\u5C55\u80FD\u529B\u5BF9\u8868\u5355\u573A\u666F 100%\u7684\u8986\u76D6\u652F\u6301\uFF0C\u540C\u65F6\u4FDD\u6301\u5F00\u53D1\u8005\u80FD\u5FEB\u901F\u4E0A\u624B\uFF0C\u5E76\u4EE5\u8868\u5355\u7F16\u8F91\u5668\u3001\u63D2\u4EF6\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7B49\u4E00\u7CFB\u5217\u5468\u8FB9\u4EA7\u54C1\u5E26\u6765\u6781\u81F4\u7684\u5F00\u53D1\u4F53\u9A8C\u3002\u5728\u5F00\u53D1 1.0 \u7684\u9053\u8DEF\u4E0A\uFF0C\u6211\u4EEC\u505A\u4E86\u4E00\u7CFB\u5217\u7684\u53D6\u820D\uFF0C\u8BE6\u89C1",n.a.createElement(p.Link,{to:"/form-render/migrate"},"0.x - 1.0 \u8FC1\u79FB\u6587\u6863")),n.a.createElement(de.a,null,n.a.createElement("span",null,"FormRender \u5DF2\u5347\u7EA7\u5230 v1.x \u7248\u672C\uFF0C\u5E76\u5BF9\u5916\u63D0\u4F9B\u4E2D\u540E\u53F0\u5F00\u7BB1\u5373\u7528 XRender \u8868\u5355 / \u8868\u683C / \u56FE\u8868\u65B9\u6848\uFF0C\u5982\u9700\u4F7F\u7528\u8001\u7248\u672C(v0.x)\uFF0C\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2 ",n.a.createElement(p.Link,{to:"http://x-components.gitee.io/form-render/",target:"_blank_"}," \u65E7\u6587\u6863 "))),n.a.createElement("h2",{id:"\u5B89\u88C5"},n.a.createElement(p.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"FormRender \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u540C\u65F6\u5B89\u88C5 ",n.a.createElement("code",null,"antd")),n.a.createElement(Xe.a,{code:"npm i form-render --save",lang:"shell"}),n.a.createElement("h2",{id:"\u4F7F\u7528"},n.a.createElement(p.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6700\u7B80\u4F7F\u7528 demo\uFF1A"))),n.a.createElement(K.default,Re.default["form-render-demo"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\uFF0CFormRender \u63D0\u4F9B\u4E86 ",n.a.createElement("code",null,"useForm")," hooks, \u4E66\u5199\u66F4\u4E3A\u7075\u6D3B"))),n.a.createElement(K.default,Re.default["form-render-demo-1"].previewerProps,n.a.createElement(zn,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u6362\u4E00\u4E2A\u66F4\u590D\u6742\u4E00\u70B9\u7684 schema\uFF0C\u6211\u4EEC\u652F\u6301\u6570\u636E\u7ED1\u5B9A\u3001antd \u7684 props \u900F\u4F20\u7B49\u4E00\u7CFB\u5217\u529F\u80FD\uFF1A"))),n.a.createElement(K.default,Re.default["form-render-demo-2"].previewerProps,n.a.createElement(Pe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u4ECE demo \u4E2D\u6211\u4EEC\u4E0D\u96BE\u53D1\u73B0 FormRender \u7684\u4E00\u4E9B\u8BBE\u8BA1\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u4EE5 schema \u6765\u63CF\u8FF0\u8868\u5355\u5C55\u793A\uFF0C\u63D0\u4EA4\u65B9\u5F0F\u4E0E antd v4 \u7684\u65B9\u5F0F\u7C7B\u4F3C"),n.a.createElement("li",null,"schema \u4EE5\u56FD\u9645\u6807\u51C6\u7684 JSON schema \u4E3A\u57FA\u7840\uFF0C\u540C\u65F6\u80FD\u591F\u65B9\u4FBF\u4F7F\u7528\u4EFB\u4F55 antd \u7684 props"),n.a.createElement("li",null,"\u901A\u8FC7 bind \u5B57\u6BB5\uFF0C\u6211\u4EEC\u5141\u8BB8\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6570\u636E\u5C55\u793A\u548C\u771F\u5B9E\u63D0\u4EA4\u7684\u6570\u636E\u53EF\u4EE5\u6839\u636E\u5F00\u53D1\u9700\u6C42\u4E0D\u540C\uFF08\u4F8B\u5982\u4ECE\u670D\u52A1\u7AEF\u63A5\u53E3\u62FF\u5230\u4E0D\u89C4\u5219\u6570\u636E\u65F6\uFF0C\u4E5F\u80FD\u76F4\u63A5\u4F7F\u7528\uFF09"),n.a.createElement("li",null,"\u53EF\u4EE5\u901A\u8FC7",n.a.createElement("code",null,"displayType"),",",n.a.createElement("code",null,"labelWidth"),"\u7B49\u5B57\u6BB5\u8F7B\u6613\u4FEE\u6539\u5C55\u793A")),n.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},n.a.createElement(p.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(p.Link,{to:"/form-render/advanced/function"},"\u5982\u4F55\u5199\u8868\u5355\u95F4\u7684\u7B80\u5355\u8054\u52A8\u5173\u7CFB\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(p.Link,{to:"/form-render/advanced/watch"},"\u5982\u4F55\u901A\u8FC7\u76D1\u542C\u5B9E\u73B0\u590D\u6742\u8054\u52A8\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(p.Link,{to:"/form-render/advanced/widget"},"\u5982\u4F55\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B8C\u6210\u5B9A\u5236\u5143\u7D20\u7684\u5C55\u793A\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(p.Link,{to:"/form-render/advanced/form-methods"},"\u5982\u4F55\u5199\u4E00\u4E2A\u5B8C\u6574\u7684\u670D\u52A1\u7AEF\u6570\u636E\u8868\u5355\u52A0\u8F7D\u548C\u63D0\u4EA4\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,"\u60F3\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F"),n.a.createElement("p",null,"\u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(p.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(p.Link,{to:"/form-render/faq"},"\u5176\u4ED6\u5E38\u89C1\u95EE\u9898 FAQ")))),n.a.createElement("h2",{id:"\u7EC4\u4EF6-props"},n.a.createElement(p.AnchorLink,{to:"#\u7EC4\u4EF6-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6 Props"),n.a.createElement(Xe.a,{code:"import Form, { useForm, connectForm } from 'form-render';",lang:"js"}),n.a.createElement("h3",{id:"form--\u5E38\u7528-props"},n.a.createElement(p.AnchorLink,{to:"#form--\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"<Form /> (\u5E38\u7528 props)"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u63CF\u8FF0\u8868\u5355\u7684 schema\uFF0C\u8BE6\u89C1"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u662F"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"form"),n.a.createElement("td",null,n.a.createElement("code",null,"useForm"),"\u521B\u5EFA\u7684\u8868\u5355\u5B9E\u4F8B\uFF0C\u4E0E Form \u4E00\u5BF9\u4E00\u7ED1\u5B9A"),n.a.createElement("td",null,n.a.createElement("code",null,"FormInstance")),n.a.createElement("td",null,"\u662F"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onFinish"),n.a.createElement("td",null,"\u63D0\u4EA4\u540E\u7684\u56DE\u8C03\uFF0C\u6267\u884C form.submit() \u540E\u89E6\u53D1"),n.a.createElement("td",null,n.a.createElement("code",null,"(data, errors: Error[]) => void")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"() => ","{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"beforeFinish"),n.a.createElement("td",null,"\u5728 onFinish \u524D\u89E6\u53D1\uFF0C\u4E00\u822C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u903B\u8F91\u7684\u56DE\u586B\uFF0C\u5165\u53C2\u662F\u4E2A\u5BF9\u8C61\uFF0C\u4FBF\u4E8E\u6269\u5C55"),n.a.createElement("td",null,"`(","{"," data, errors, schema, ...rest ","}",") => Error[]"),n.a.createElement("td",null,"Promise<Error[]>`"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"onMount"),n.a.createElement("td",null,"\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u8BE6\u89C1",n.a.createElement(p.Link,{to:"/form-render/advanced/life-cycle"},"\u751F\u547D\u5468\u671F")),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"() => ","{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"displayType"),n.a.createElement("td",null,"\u8868\u5355\u5143\u7D20\u4E0E label \u540C\u884C or \u5206\u4E24\u884C\u5C55\u793A, inline \u5219\u6574\u4E2A\u5C55\u793A\u81EA\u7136\u987A\u6392"),n.a.createElement("td",null,n.a.createElement("code",null,"string('column' / 'row' / 'inline')")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"'column'")),n.a.createElement("tr",null,n.a.createElement("td",null,"widgets"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5F53\u5185\u7F6E\u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u65F6\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"watch"),n.a.createElement("td",null,"\u7C7B\u4F3C\u4E8E vue \u7684 watch \u7684\u7528\u6CD5\uFF0C\u8BE6\u89C1",n.a.createElement(p.Link,{to:"/form-render/advanced/watch"},"\u8868\u5355\u76D1\u542C & \u56DE\u8C03")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"{","}")))),n.a.createElement("p",null,"\u6CE8 1\uFF1A"),n.a.createElement("h3",{id:"form--\u4E0D\u5E38\u7528-props"},n.a.createElement(p.AnchorLink,{to:"#form--\u4E0D\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"<Form /> (\u4E0D\u5E38\u7528 props)"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"column"),n.a.createElement("td",null,"\u4E00\u884C\u5C55\u793A\u591A\u5C11\u5217"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"1")),n.a.createElement("tr",null,n.a.createElement("td",null,"mapping"),n.a.createElement("td",null,"schema \u4E0E\u7EC4\u4EF6\u7684\u6620\u5C04\u5173\u7CFB\u8868\uFF0C\u5F53\u5185\u7F6E\u7684\u8868\u4E0D\u6EE1\u8DB3\u65F6\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"readOnly"),n.a.createElement("td",null,"\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u4E00\u822C\u7528\u4E8E\u9884\u89C8\u5C55\u793A\uFF0C\u5168\u6587 text \u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u7981\u7528\u6A21\u5F0F\uFF0C\u5168\u90E8\u8868\u5355\u5143\u7D20\u7981\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debug"),n.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u8868\u5355\u5185\u90E8\u72B6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debugCss"),n.a.createElement("td",null,"\u7528\u4E8E css \u95EE\u9898\u7684\u8C03\u6574\uFF0C\u663E\u793A css \u5E03\u5C40\u63D0\u793A\u7EBF"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"locale"),n.a.createElement("td",null,"\u5C55\u793A\u8BED\u8A00\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587"),n.a.createElement("td",null,n.a.createElement("code",null,"string('cn'/'en')")),n.a.createElement("td",null,"'cn'")),n.a.createElement("tr",null,n.a.createElement("td",null,"configProvider"),n.a.createElement("td",null,"antd \u7684 configProvider\uFF0C\u914D\u7F6E\u900F\u4F20"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"allCollapsed"),n.a.createElement("td",null,"\u5BF9\u8C61\u7EC4\u4EF6\u662F\u5426\u9ED8\u8BA4\u6298\u53E0\uFF08\u5168\u5C40\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debounceInput"),n.a.createElement("td",null,"\u662F\u5426\u5F00\u542F\u8F93\u5165\u65F6\u4F7F\u7528\u5FEB\u7167\u6A21\u5F0F\u3002\u4EC5\u5EFA\u8BAE\u5728\u8868\u5355\u5DE8\u5927\u4E14\u8868\u8FBE\u5F0F\u975E\u5E38\u591A\u65F6\u5F00\u542F"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"validateMessages"),n.a.createElement("td",null,"\u4FEE\u6539\u9ED8\u8BA4\u7684\u6821\u9A8C\u63D0\u793A\u4FE1\u606F\u3002\u8BE6\u89C1\u4E0B"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"{","}")))),n.a.createElement("h4",{id:"validatemessages"},n.a.createElement(p.AnchorLink,{to:"#validatemessages","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"validateMessages"),n.a.createElement("p",null,n.a.createElement("code",null,"Form")," \u4E3A\u9A8C\u8BC1\u63D0\u4F9B\u4E86",n.a.createElement(p.Link,{to:"https://github.com/alibaba/x-render/blob/master/packages/form-render/src/validateMessageCN.js"},"\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F"),"\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",n.a.createElement("code",null,"validateMessages")," \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\uFF1A"),n.a.createElement(Xe.a,{code:`const validateMessages = {
  required: '\${title}\u662F\u5FC5\u9009\u5B57\u6BB5',
  // ...
};

<Form validateMessages={validateMessages} />;`,lang:"js"}),n.a.createElement("p",null,"\u76EE\u524D\u53EF\u4EE5\u7528\u7684\u8F6C\u4E49\u5B57\u6BB5\u4E3A ",n.a.createElement("code",null,"$","{","title","}"),"/",n.a.createElement("code",null,"$","{","min","}"),"/",n.a.createElement("code",null,"$","{","max","}"),"/",n.a.createElement("code",null,"$","{","len","}"),"/",n.a.createElement("code",null,"$","{","pattern","}"),", \u5982\u679C\u6709\u66F4\u591A\u9700\u6C42\u8BF7\u63D0 ",n.a.createElement(p.Link,{to:"https://github.com/alibaba/x-render/issues/new/choose"},"issue")),n.a.createElement("h3",{id:"useform--connectform"},n.a.createElement(p.AnchorLink,{to:"#useform--connectform","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"useForm / connectForm"),n.a.createElement("p",null,n.a.createElement("code",null,"useForm")," / ",n.a.createElement("code",null,"connectForm")," \u7528\u4E8E\u521B\u5EFA\u8868\u5355\u5B9E\u4F8B\uFF0C\u6240\u6709\u5BF9\u8868\u5355\u7684\u5916\u90E8\u64CD\u4F5C\u548C\u56DE\u8C03\u51FD\u6570\u5168\u6302\u5728\u5176\u751F\u4EA7\u7684\u5B9E\u4F8B\u4E0A,\u4F8B\u5982\u8868\u5355\u63D0\u4EA4\u662F ",n.a.createElement("code",null,"form.submit"),"\u3002\u6CE8\u610F ",n.a.createElement("code",null,"useForm")," \u662F hooks\uFF0C\u800C ",n.a.createElement("code",null,"connectForm")," \u662F\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u524D\u8005\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u540E\u8005\u53EF\u7528\u4E8E class \u7EC4\u4EF6\u3002\u4E24\u8005\u65E0\u5176\u4ED6\u533A\u522B\u3002\u4F7F\u7528\u65F6\u9700\u8981\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u901A\u8FC7 props \u6302\u94A9\u5230\u4E0E\u5176\u5BF9\u5E94\u7684\u8868\u5355\u4E0A\uFF1A"),n.a.createElement(Xe.a,{code:`import Form, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();
  return <Form form={form} schema={...} />;
};`,lang:"js"}),n.a.createElement(Xe.a,{code:`import Form, { connectForm } from 'form-render';

const Demo = ({ form }) => {
  return <Form form={form} schema={...} />;
};

export default connectForm(Demo);`,lang:"js"}),n.a.createElement("p",null,n.a.createElement("strong",null,"form \u65B9\u6CD5")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"submit"),n.a.createElement("td",null,"\u89E6\u53D1\u63D0\u4EA4\u6D41\u7A0B\uFF0C\u4E00\u822C\u5728\u63D0\u4EA4\u6309\u94AE\u4E0A\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"resetFields"),n.a.createElement("td",null,"\u6E05\u7A7A\u8868\u5355\uFF08\u4E5F\u4F1A\u6E05\u7A7A\u4E00\u4E9B\u5185\u7F6E\u72B6\u6001\uFF0C\u4F8B\u5982\u6821\u9A8C\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"errorFields"),n.a.createElement("td",null,"\u8868\u5355\u6821\u9A8C\u9519\u8BEF\u7684\u6570\u7EC4"),n.a.createElement("td",null,n.a.createElement("code",null,"array,[","{","name, error: []","}","]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setErrorFields"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 errorFields \u6821\u9A8C\u4FE1\u606F\uFF0C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u56DE\u586B"),n.a.createElement("td",null,"`(error: Error")),n.a.createElement("tr",null,n.a.createElement("td",null,"setValues"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 formData\uFF0C\u7528\u4E8E\u5DF2\u586B\u5199\u7684\u8868\u5355\u7684\u6570\u636E\u56DE\u586B"),n.a.createElement("td",null,n.a.createElement("code",null,"(formData: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setValueByPath"),n.a.createElement("td",null,"\u5916\u90E8\u4FEE\u6539\u6307\u5B9A\u5355\u4E2A field \u7684\u6570\u636E(\u539F\u540D onItemChange)"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string, value: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setSchemaByPath"),n.a.createElement("td",null,"\u6307\u5B9A\u8DEF\u5F84\u4FEE\u6539 schema"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string, value: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getValues"),n.a.createElement("td",null,"\u83B7\u53D6\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E formData"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u8868\u5355\u7684 schema"),n.a.createElement("td",null,"object")),n.a.createElement("tr",null,n.a.createElement("td",null,"touchedKeys"),n.a.createElement("td",null,"\u5DF2\u7ECF\u89E6\u78B0\u8FC7\u7684 field \u7684\u6570\u636E\u8DEF\u5F84"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"removeErrorField"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u5220\u9664\u67D0\u4E00\u4E2A path \u4E0B\u6240\u6709\u7684\u6821\u9A8C\u4FE1\u606F"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"formData"),n.a.createElement("td",null,"\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E\uFF0C\u5EFA\u8BAE\u4F7F\u7528 getValues/setValues"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))))),n.a.createElement("h2",{id:"\u5982\u4F55\u901F\u5199-schema"},n.a.createElement(p.AnchorLink,{to:"#\u5982\u4F55\u901F\u5199-schema","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u901F\u5199 Schema"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BF9\u4E8E\u521D\u5B66\u8005\u6765\u8BF4\u8BB0\u4F4F schema \u6240\u6709\u7684\u5B57\u6BB5\u548C\u4F7F\u7528\u65B9\u5F0F\u5E76\u975E\u6613\u4E8B\u3002\u4E3A\u4E86\u8BA9\u5927\u5BB6\u80FD\u591F\u5FEB\u901F\u4E0A\u624B\uFF0C\u5EFA\u8BAE\u4EE5\u4EE5\u4E0B\u7684\u987A\u5E8F\u5C1D\u8BD5\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u53BB ",n.a.createElement(p.Link,{to:"/playground"},"Playground")," \u901B\u901B\uFF0C\u90A3\u91CC\u6709\u4ECE\u57FA\u7840\u73A9\u6CD5\u3001\u9AD8\u7EA7\u529F\u80FD\u5230\u5B8C\u6574\u6837\u4F8B\u7684\u6240\u6709 schema \u6837\u4F8B")),n.a.createElement("li",null,n.a.createElement("p",null,"\u73A9\u8F6C\u4E00\u4E0B ",n.a.createElement(p.Link,{to:"https://x-render.gitee.io/tools/generator"},"\u8868\u5355\u8BBE\u8BA1\u5668"),"\uFF0C\u62D6\u62D6\u62FD\u62FD\u5BFC\u51FA schema\uFF0C\u4E22\u5230\u4EE3\u7801\u91CC\u751F\u6210\u53EF\u7528\u8868\u5355\u3002\u672C\u8D28\u4E0A\u8FD9\u662F\u4E00\u4E2A\u53EF\u89C6\u5316\u7684 schema \u751F\u6210\u5668\uFF0C\u652F\u6301 schema \u7684\u5BFC\u5165 & \u5BFC\u51FA"),n.a.createElement("div",null,n.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*4QYNTbKU6xAAAAAAAAAAAABkARQnAQ?raw=true",width:"500px"}),n.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*FfTuRYjRd1AAAAAAAAAAAABkARQnAQ?raw=true",alt:"schema\u7F16\u8F91\u5668",width:"500px"}))),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\u7684 schema \u89C4\u8303\u89C1 ",n.a.createElement(p.Link,{to:"/form-render/schema"},"schema \u7684\u6587\u6863"),"\u3002\u540C\u65F6\u5728 vscode \u4E0A\u641C\u7D22 ",n.a.createElement("code",null,"formrender")," \u53EF\u4EE5\u627E\u5230 snippets \u63D2\u4EF6\uFF0C\u624B\u719F\u8D77\u6765\u4E00\u6574\u9875\u8868\u5355\u7684 schema \u5F39\u6307\u95F4\u5B8C\u6210")))))))}}]);
