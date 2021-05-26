(window.webpackJsonp=window.webpackJsonp||[]).push([[53,10],{"0zqC":function(wn,gn,e){"use strict";e.r(gn);var U=e("tJVT"),r=e("q1tI"),R=e.n(r),K=e("wx14"),me=e("rePB"),L=e("ODXe"),dn=e("U8pU"),oe=e("Ff2n"),k=e("VTBJ"),Je=e("TSYQ"),ge=e.n(Je),pn=e("Zm9Q"),Rn=e("5Z9U"),en=e("6cGi"),Ge=e("KQm4"),Qe=e("wgJM"),$n=e("t23M");function Wn(n){var i=Object(r.useRef)(),c=Object(r.useRef)(!1);function y(){for(var O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];c.current||(Qe.a.cancel(i.current),i.current=Object(Qe.a)(function(){n.apply(void 0,g)}))}return Object(r.useEffect)(function(){return function(){c.current=!0,Qe.a.cancel(i.current)}},[]),y}function Dn(n){var i=Object(r.useRef)([]),c=Object(r.useState)({}),y=Object(L.a)(c,2),O=y[1],g=Object(r.useRef)(typeof n=="function"?n():n),S=Wn(function(){var W=g.current;i.current.forEach(function($){W=$(W)}),i.current=[],g.current=W,O({})});function j(W){i.current.push(W),S()}return[g.current,j]}var we=e("4IlW");function qn(n,i){var c,y=n.prefixCls,O=n.id,g=n.active,S=n.rtl,j=n.tab,W=j.key,$=j.tab,V=j.disabled,H=j.closeIcon,G=n.tabBarGutter,le=n.tabPosition,X=n.closable,Y=n.renderWrapper,de=n.removeAriaLabel,J=n.editable,_=n.onClick,ae=n.onRemove,Z=n.onFocus,ue="".concat(y,"-tab");r.useEffect(function(){return ae},[]);var q={};le==="top"||le==="bottom"?q[S?"marginLeft":"marginRight"]=G:q.marginBottom=G;var Re=J&&X!==!1&&!V;function te(ie){V||_(ie)}function fe(ie){ie.preventDefault(),ie.stopPropagation(),J.onEdit("remove",{key:W,event:ie})}var pe=r.createElement("div",{key:W,ref:i,className:ge()(ue,(c={},Object(me.a)(c,"".concat(ue,"-with-remove"),Re),Object(me.a)(c,"".concat(ue,"-active"),g),Object(me.a)(c,"".concat(ue,"-disabled"),V),c)),style:q,onClick:te},r.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(W),className:"".concat(ue,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(W),"aria-disabled":V,tabIndex:V?null:0,onClick:function(Q){Q.stopPropagation(),te(Q)},onKeyDown:function(Q){[we.a.SPACE,we.a.ENTER].includes(Q.which)&&(Q.preventDefault(),te(Q))},onFocus:Z},$),Re&&r.createElement("button",{type:"button","aria-label":de||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(Q){Q.stopPropagation(),fe(Q)}},H||J.removeIcon||"\xD7"));return Y&&(pe=Y(pe)),pe}var Vn=r.forwardRef(qn),at={width:0,height:0,left:0,top:0};function E(n,i,c){return Object(r.useMemo)(function(){for(var y,O=new Map,g=i.get((y=n[0])===null||y===void 0?void 0:y.key)||at,S=g.left+g.width,j=0;j<n.length;j+=1){var W=n[j].key,$=i.get(W);if(!$){var V;$=i.get((V=n[j-1])===null||V===void 0?void 0:V.key)||at}var H=O.get(W)||Object(k.a)({},$);H.right=S-H.left-H.width,O.set(W,H)}return O},[n.map(function(y){return y.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function N(n,i,c,y,O){var g=O.tabs,S=O.tabPosition,j=O.rtl,W,$,V;["top","bottom"].includes(S)?(W="width",$=j?"right":"left",V=Math.abs(i.left)):(W="height",$="top",V=-i.top);var H=i[W],G=c[W],le=y[W],X=H;return G+le>H&&(X=H-le),Object(r.useMemo)(function(){if(!g.length)return[0,0];for(var Y=g.length,de=Y,J=0;J<Y;J+=1){var _=n.get(g[J].key)||D;if(_[$]+_[W]>V+X){de=J-1;break}}for(var ae=0,Z=Y-1;Z>=0;Z-=1){var ue=n.get(g[Z].key)||D;if(ue[$]<V){ae=Z+1;break}}return[ae,de]},[n,V,X,S,g.map(function(Y){return Y.key}).join("_"),j])}var d=e("Gytx"),l=e.n(d),p=e("Kwbf");function b(n,i){var c=n.prefixCls,y=n.invalidate,O=n.item,g=n.renderItem,S=n.responsive,j=n.registerSize,W=n.itemKey,$=n.className,V=n.style,H=n.children,G=n.display,le=n.order,X=n.component,Y=X===void 0?"div":X,de=Object(oe.a)(n,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=S&&!G;function _(Re){j(W,Re)}r.useEffect(function(){return function(){_(null)}},[]);var ae=g&&O!==void 0?g(O):H,Z;y||(Z={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:S?le:void 0,pointerEvents:J?"none":void 0});var ue={};J&&(ue["aria-hidden"]=!0);var q=r.createElement(Y,Object(K.a)({className:ge()(!y&&c,$),style:Object(k.a)(Object(k.a)({},Z),V)},ue,de,{ref:i}),ae);return S&&(q=r.createElement($n.default,{onResize:function(te){var fe=te.offsetWidth;_(fe)}},q)),q}var C=r.forwardRef(b);C.displayName="Item";var t=C;function o(){var n=Object(r.useState)({}),i=Object(L.a)(n,2),c=i[1],y=Object(r.useRef)([]),O=Object(r.useRef)(!1),g=0,S=0;Object(r.useEffect)(function(){return function(){O.current=!0}},[]);function j(W){var $=g;g+=1,y.current.length<$+1&&(y.current[$]=W);var V=y.current[$];function H(G){y.current[$]=typeof G=="function"?G(y.current[$]):G,Qe.a.cancel(S),S=Object(Qe.a)(function(){O.current||c({})})}return[V,H]}return j}var s=function(i,c){var y=r.useContext(P);if(!y){var O=i.component,g=O===void 0?"div":O,S=Object(oe.a)(i,["component"]);return r.createElement(g,Object(K.a)({},S,{ref:c}))}var j=y.className,W=Object(oe.a)(y,["className"]),$=i.className,V=Object(oe.a)(i,["className"]);return r.createElement(P.Provider,{value:null},r.createElement(t,Object(K.a)({ref:c,className:ge()(j,$)},W,V)))},A=r.forwardRef(s);A.displayName="RawItem";var F=A,P=r.createContext(null),u="responsive",B="invalidate";function m(n){return"+ ".concat(n.length," ...")}function a(n,i){var c=n.prefixCls,y=c===void 0?"rc-overflow":c,O=n.data,g=O===void 0?[]:O,S=n.renderItem,j=n.renderRawItem,W=n.itemKey,$=n.itemWidth,V=$===void 0?10:$,H=n.ssr,G=n.style,le=n.className,X=n.maxCount,Y=n.renderRest,de=n.renderRawRest,J=n.suffix,_=n.component,ae=_===void 0?"div":_,Z=n.itemComponent,ue=n.onVisibleChange,q=Object(oe.a)(n,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Re=o(),te=H==="full",fe=Re(null),pe=Object(L.a)(fe,2),ie=pe[0],Q=pe[1],ce=ie||0,Oe=Re(new Map),ye=Object(L.a)(Oe,2),Pe=ye[0],Ke=ye[1],Ce=Re(0),je=Object(L.a)(Ce,2),Fe=je[0],Ae=je[1],Ie=Re(0),Ne=Object(L.a)(Ie,2),$e=Ne[0],nn=Ne[1],Ve=Re(0),Ue=Object(L.a)(Ve,2),xe=Ue[0],Le=Ue[1],Nn=Object(r.useState)(null),sn=Object(L.a)(Nn,2),ke=sn[0],cn=sn[1],Cn=Object(r.useState)(null),Sn=Object(L.a)(Cn,2),Me=Sn[0],Ye=Sn[1],tn=r.useMemo(function(){return Me===null&&te?Number.MAX_SAFE_INTEGER:Me||0},[Me,ie]),qe=Object(r.useState)(!1),Kn=Object(L.a)(qe,2),Jn=Kn[0],Ln=Kn[1],on="".concat(y,"-item"),In=Math.max(Fe,$e),mn=g.length&&X===u,Mn=X===B,rn=mn||typeof X=="number"&&g.length>X,ln=Object(r.useMemo)(function(){var he=g;return mn?ie===null&&te?he=g:he=g.slice(0,Math.min(g.length,ce/V)):typeof X=="number"&&(he=g.slice(0,X)),he},[g,V,ie,X,mn]),An=Object(r.useMemo)(function(){return mn?g.slice(tn+1):g.slice(ln.length)},[g,ln,mn,tn]),vn=Object(r.useCallback)(function(he,De){var Be;return typeof W=="function"?W(he):(Be=W&&(he==null?void 0:he[W]))!==null&&Be!==void 0?Be:De},[W]),_e=Object(r.useCallback)(S||function(he){return he},[S]);function Ze(he,De){Ye(he),De||(Ln(he<g.length-1),ue==null||ue(he))}function Gn(he,De){Q(De.clientWidth)}function Hn(he,De){Ke(function(Be){var an=new Map(Be);return De===null?an.delete(he):an.set(he,De),an})}function nt(he,De){nn(De),Ae($e)}function jn(he,De){Le(De)}function On(he){return Pe.get(vn(ln[he],he))}r.useLayoutEffect(function(){if(ce&&In&&ln){var he=xe,De=ln.length,Be=De-1;if(!De){Ze(0),cn(null);return}for(var an=0;an<De;an+=1){var Zn=On(an);if(Zn===void 0){Ze(an-1,!0);break}if(he+=Zn,an===Be-1&&he+On(Be)<=ce){Ze(Be),cn(null);break}else if(he+In>ce){Ze(an-1),cn(he-Zn-xe+$e);break}else if(an===Be){Ze(Be),cn(he-xe);break}}J&&On(0)+xe>ce&&cn(null)}},[ce,Pe,$e,xe,vn,ln]);var Qn=Jn&&!!An.length,Pn={};ke!==null&&mn&&(Pn={position:"absolute",left:ke,top:0});var hn={prefixCls:on,responsive:mn,component:Z,invalidate:Mn},Xn=j?function(he,De){var Be=vn(he,De);return r.createElement(P.Provider,{key:Be,value:Object(k.a)(Object(k.a)({},hn),{},{order:De,item:he,itemKey:Be,registerSize:Hn,display:De<=tn})},j(he,De))}:function(he,De){var Be=vn(he,De);return r.createElement(t,Object(K.a)({},hn,{order:De,key:Be,item:he,renderItem:_e,itemKey:Be,registerSize:Hn,display:De<=tn}))},Tn,Yn={order:Qn?tn:Number.MAX_SAFE_INTEGER,className:"".concat(on,"-rest"),registerSize:nt,display:Qn};if(de)de&&(Tn=r.createElement(P.Provider,{value:Object(k.a)(Object(k.a)({},hn),Yn)},de(An)));else{var fn=Y||m;Tn=r.createElement(t,Object(K.a)({},hn,Yn),typeof fn=="function"?fn(An):fn)}var Fn=r.createElement(ae,Object(K.a)({className:ge()(!Mn&&y,le),style:G,ref:i},q),ln.map(Xn),rn?Tn:null,J&&r.createElement(t,Object(K.a)({},hn,{order:tn,className:"".concat(on,"-suffix"),registerSize:jn,display:!0,style:Pn}),J));return mn&&(Fn=r.createElement($n.default,{onResize:Gn},Fn)),Fn}var h=r.forwardRef(a);h.displayName="Overflow",h.Item=F,h.RESPONSIVE=u,h.INVALIDATE=B;var v=h,I=v,w=e("1OyB"),z=e("vuIU"),ee=e("Ji7U"),se=e("LK+K"),be=e("bT9E"),yn=e("YrtM"),We=r.createContext(null);function Te(n,i){var c=Object(k.a)({},n);return Object.keys(i).forEach(function(y){var O=i[y];O!==void 0&&(c[y]=O)}),c}function En(n){var i=n.children,c=n.locked,y=Object(oe.a)(n,["children","locked"]),O=r.useContext(We),g=Object(yn.a)(function(){return Te(O,y)},[O,y],function(S,j){return!c&&(S[0]!==j[0]||!l()(S[1],j[1]))});return r.createElement(We.Provider,{value:g},i)}function it(n,i,c,y){var O=r.useContext(We),g=O.activeKey,S=O.onActive,j=O.onInactive,W={active:g===n};return i||(W.onMouseEnter=function($){c==null||c({key:n,domEvent:$}),S(n)},W.onMouseLeave=function($){y==null||y({key:n,domEvent:$}),j(n)}),W}function _n(n){var i=n.item,c=Object(oe.a)(n,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function f(n){var i=n.icon,c=n.props,y=n.children,O;return typeof i=="function"?O=r.createElement(i,Object(k.a)({},c)):O=i,O||y||null}function M(n){var i=r.useContext(We),c=i.mode,y=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=n;return y?{paddingRight:g*O}:{paddingLeft:g*O}}var T=[],ve=r.createContext(null);function ne(){return r.useContext(ve)}var Ee=r.createContext(T);function ze(n){var i=r.useContext(Ee);return r.useMemo(function(){return n!==void 0?[].concat(Object(Ge.a)(i),[n]):i},[i,n])}var Xe=r.createContext(null),Ut=r.createContext(null);function Jt(n,i){return n===void 0?null:"".concat(n,"-").concat(i)}function Gt(n){var i=r.useContext(Ut);return Jt(i,n)}var br=function(n){Object(ee.a)(c,n);var i=Object(se.a)(c);function c(){return Object(w.a)(this,c),i.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,S=O.attribute,j=O.elementRef,W=Object(oe.a)(O,["title","attribute","elementRef"]),$=Object(be.a)(W,["eventKey"]);return Object(p.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(I.Item,Object(K.a)({},S,{title:typeof g=="string"?g:void 0},$,{ref:j}))}}]),c}(r.Component),Or=function(i){var c,y=i.style,O=i.className,g=i.eventKey,S=i.disabled,j=i.itemIcon,W=i.children,$=i.role,V=i.onMouseEnter,H=i.onMouseLeave,G=i.onClick,le=i.onKeyDown,X=i.onFocus,Y=Object(oe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),de=Gt(g),J=r.useContext(We),_=J.prefixCls,ae=J.onItemClick,Z=J.disabled,ue=J.overflowDisabled,q=J.itemIcon,Re=J.selectedKeys,te=J.onActive,fe="".concat(_,"-item"),pe=r.useRef(),ie=r.useRef(),Q=Z||S,ce=ze(g),Oe=function(Ve){return{key:g,keyPath:ce,item:pe.current,domEvent:Ve}},ye=j||q,Pe=it(g,Q,V,H),Ke=Pe.active,Ce=Object(oe.a)(Pe,["active"]),je=Re.includes(g),Fe=M(ce.length),Ae=function(Ve){if(!Q){var Ue=Oe(Ve);G==null||G(_n(Ue)),ae(Ue)}},Ie=function(Ve){if(le==null||le(Ve),Ve.which===we.a.ENTER){var Ue=Oe(Ve);G==null||G(_n(Ue)),ae(Ue)}},Ne=function(Ve){te(g),X==null||X(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=je),r.createElement(br,Object(K.a)({ref:pe,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":ue&&de?null:de},Y,Ce,$e,{component:"li","aria-disabled":S,style:Object(k.a)(Object(k.a)({},Fe),y),className:ge()(fe,(c={},Object(me.a)(c,"".concat(fe,"-active"),Ke),Object(me.a)(c,"".concat(fe,"-selected"),je),Object(me.a)(c,"".concat(fe,"-disabled"),Q),c),O),onClick:Ae,onKeyDown:Ie,onFocus:Ne}),W,r.createElement(f,{props:Object(k.a)(Object(k.a)({},i),{},{isSelected:je}),icon:ye}))};function Rr(n){var i=n.eventKey,c=ne(),y=ze(i);return r.useEffect(function(){if(c)return c.registerPath(i,y),function(){c.unregisterPath(i,y)}},[y]),c?null:r.createElement(Or,n)}var Dt=Rr;function Et(n,i){return Object(pn.a)(n).map(function(c,y){if(r.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(Ge.a)(i),[y]).join("-"))),r.cloneElement(c,{key:O,eventKey:O})}return c})}function et(n){var i=r.useRef(n);i.current=n;var c=r.useCallback(function(){for(var y,O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];return(y=i.current)===null||y===void 0?void 0:y.call.apply(y,[i].concat(g))},[]);return n?c:void 0}var Cr=function(i,c){var y=i.className,O=i.children,g=Object(oe.a)(i,["className","children"]),S=r.useContext(We),j=S.prefixCls,W=S.mode;return r.createElement("ul",Object(K.a)({className:ge()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(W==="inline"?"inline":"vertical"),y)},g,{"data-menu-list":!0,ref:c}),O)},Ht=r.forwardRef(Cr);Ht.displayName="SubMenuList";var Qt=Ht,Sr=e("uciX"),zn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},fa=Xt;function Yt(n,i,c){if(i)return i;if(c)return c[n]||c.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(n){var i=n.prefixCls,c=n.visible,y=n.children,O=n.popup,g=n.popupClassName,S=n.popupOffset,j=n.disabled,W=n.mode,$=n.onVisibleChange,V=r.useContext(We),H=V.getPopupContainer,G=V.rtl,le=V.subMenuOpenDelay,X=V.subMenuCloseDelay,Y=V.builtinPlacements,de=V.triggerSubMenuAction,J=V.forceSubMenuRender,_=V.motion,ae=V.defaultMotions,Z=r.useState(!1),ue=Object(L.a)(Z,2),q=ue[0],Re=ue[1],te=G?Object(k.a)(Object(k.a)({},jr),Y):Object(k.a)(Object(k.a)({},Xt),Y),fe=Pr[W],pe=Yt(W,_,ae),ie=Object(k.a)(Object(k.a)({},pe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Q=r.useRef();return r.useEffect(function(){return Q.current=Object(Qe.a)(function(){Re(c)}),function(){Qe.a.cancel(Q.current)}},[c]),r.createElement(Sr.a,{prefixCls:i,popupClassName:ge()("".concat(i,"-popup"),Object(me.a)({},"".concat(i,"-rtl"),G),g),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:te,popupPlacement:fe,popupVisible:q,popup:O,popupAlign:S&&{offset:S},action:j?[]:[de],mouseEnterDelay:le,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:J,popupMotion:ie},y)}var Er=e("8XRh");function Nr(n){var i=n.id,c=n.open,y=n.keyPath,O=n.children,g="inline",S=r.useContext(We),j=S.prefixCls,W=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,H=S.mode,G=r.useRef(!1);G.current=H===g;var le=r.useState(!G.current),X=Object(L.a)(le,2),Y=X[0],de=X[1],J=G.current?c:!1;r.useEffect(function(){G.current&&de(!1)},[H]);var _=Object(k.a)({},Yt(g,$,V));y.length>1&&(_.motionAppear=!1);var ae=_.onVisibleChanged;return _.onVisibleChanged=function(Z){return!G.current&&!Z&&de(!0),ae==null?void 0:ae(Z)},Y?null:r.createElement(En,{mode:g,locked:!G.current},r.createElement(Er.default,Object(K.a)({visible:J},_,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(Z){var ue=Z.className,q=Z.style;return r.createElement(Qt,{id:i,className:ue,style:q},O)}))}var Ir=function(i){var c,y=i.style,O=i.className,g=i.title,S=i.eventKey,j=i.disabled,W=i.internalPopupClose,$=i.children,V=i.itemIcon,H=i.expandIcon,G=i.popupClassName,le=i.popupOffset,X=i.onClick,Y=i.onMouseEnter,de=i.onMouseLeave,J=i.onTitleClick,_=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,Z=Object(oe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=Gt(S),q=r.useContext(We),Re=q.prefixCls,te=q.mode,fe=q.openKeys,pe=q.disabled,ie=q.overflowDisabled,Q=q.activeKey,ce=q.selectedKeys,Oe=q.itemIcon,ye=q.expandIcon,Pe=q.onItemClick,Ke=q.onOpenChange,Ce=q.onActive,je=r.useContext(Xe),Fe=je.isSubPathKey,Ae=ze(),Ie="".concat(Re,"-submenu"),Ne=pe||j,$e=r.useRef(),nn=r.useRef(),Ve=V||Oe,Ue=H||ye,xe=fe.includes(S),Le=!ie&&xe,Nn=Fe(ce,S),sn=it(S,Ne,_,ae),ke=sn.active,cn=Object(oe.a)(sn,["active"]),Cn=r.useState(!1),Sn=Object(L.a)(Cn,2),Me=Sn[0],Ye=Sn[1],tn=function(Ze){Ne||Ye(Ze)},qe=function(Ze){tn(!0),Y==null||Y({key:S,domEvent:Ze})},Kn=function(Ze){tn(!1),de==null||de({key:S,domEvent:Ze})},Jn=r.useMemo(function(){return ke||(te!=="inline"?Me||Fe([Q],S):!1)},[te,ke,Q,Me,S,Fe]),Ln=M(Ae.length),on=function(Ze){Ne||(J==null||J({key:S,domEvent:Ze}),te==="inline"&&Ke(S,!xe))},In=et(function(_e){X==null||X(_n(_e)),Pe(_e)}),mn=function(Ze){te!=="inline"&&Ke(S,Ze)},Mn=function(){Ce(S)},rn=ue&&"".concat(ue,"-popup"),ln=r.createElement("div",Object(K.a)({role:"menuitem",style:Ln,className:"".concat(Ie,"-title"),tabIndex:Ne?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":ie&&ue?null:ue,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":rn,"aria-disabled":Ne,onClick:on,onFocus:Mn},cn),g,r.createElement(f,{icon:te!=="horizontal"?Ue:null,props:Object(k.a)(Object(k.a)({},i),{},{isOpen:Le,isSubMenu:!0})},r.createElement("i",{className:"".concat(Ie,"-arrow")}))),An=r.useRef(te);if(te!=="inline"&&(An.current=Ae.length>1?"vertical":te),!ie){var vn=An.current;ln=r.createElement(Dr,{mode:vn,prefixCls:Ie,visible:!W&&Le&&te!=="inline",popupClassName:G,popupOffset:le,popup:r.createElement(En,{mode:vn},r.createElement(Qt,{id:rn,ref:nn},$)),disabled:Ne,onVisibleChange:mn},ln)}return r.createElement(En,{onItemClick:In,mode:te==="horizontal"?"vertical":te,itemIcon:Ve,expandIcon:Ue},r.createElement(I.Item,Object(K.a)({role:"none"},Z,{component:"li",style:y,className:ge()(Ie,"".concat(Ie,"-").concat(te),O,(c={},Object(me.a)(c,"".concat(Ie,"-open"),Le),Object(me.a)(c,"".concat(Ie,"-active"),Jn),Object(me.a)(c,"".concat(Ie,"-selected"),Nn),Object(me.a)(c,"".concat(Ie,"-disabled"),Ne),c)),onMouseEnter:qe,onMouseLeave:Kn}),ln,!ie&&r.createElement(Nr,{id:rn,open:Le,keyPath:Ae},$)))};function Zt(n){var i=n.eventKey,c=n.children,y=ze(i),O=Et(c,y),g=ne();r.useEffect(function(){if(g)return g.registerPath(i,y),function(){g.unregisterPath(i,y)}},[y]);var S;return g?S=O:S=r.createElement(Ir,n,O),r.createElement(Ee.Provider,{value:y},S)}var Mr=e("x/xZ");function xt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Mr.a)(n)){var c=n.nodeName.toLowerCase(),y=["input","select","textarea","button"].includes(c)||n.isContentEditable||c==="a"&&!!n.getAttribute("href"),O=n.getAttribute("tabindex"),g=Number(O),S=null;return O&&!Number.isNaN(g)?S=g:y&&S===null&&(S=0),y&&n.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(Ge.a)(n.querySelectorAll("*")).filter(function(y){return xt(y,i)});return xt(n,i)&&c.unshift(n),c}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(n){}}function ga(n,i){if(i.keyCode===9){var c=kt(n),y=c[i.shiftKey?0:c.length-1],O=y===document.activeElement||n===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var Nt=we.a.LEFT,It=we.a.RIGHT,Mt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Mt,ft,Nt,It];function Ar(n,i,c,y){var O,g,S,j,W="prev",$="next",V="children",H="parent";if(n==="inline"&&y===pt)return{inlineTrigger:!0};var G=(O={},Object(me.a)(O,Mt,W),Object(me.a)(O,ft,$),O),le=(g={},Object(me.a)(g,Nt,c?$:W),Object(me.a)(g,It,c?W:$),Object(me.a)(g,ft,V),Object(me.a)(g,pt,V),g),X=(S={},Object(me.a)(S,Mt,W),Object(me.a)(S,ft,$),Object(me.a)(S,pt,V),Object(me.a)(S,qt,H),Object(me.a)(S,Nt,c?V:H),Object(me.a)(S,It,c?H:V),S),Y={inline:G,horizontal:le,vertical:X,inlineSub:G,horizontalSub:X,verticalSub:X},de=(j=Y["".concat(n).concat(i?"":"Sub")])===null||j===void 0?void 0:j[y];switch(de){case W:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Tr(n){for(var i=n;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Fr(n,i){for(var c=n||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Br(n,i){var c=kt(n,!0);return c.filter(function(y){return i.has(y)})}function er(n,i,c){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var O=Br(n,i),g=O.length,S=O.findIndex(function(j){return c===j});return y<0?S===-1?S=g-1:S-=1:y>0&&(S+=1),S=(S+g)%g,O[S]}function wr(n,i,c,y,O,g,S,j,W,$){var V=r.useRef(),H=r.useRef();H.current=i;var G=function(){Qe.a.cancel(V.current)};return r.useEffect(function(){return function(){G()}},[]),function(le){var X=le.which;if([].concat(_t,[pt,qt]).includes(X)){var Y,de,J,_=function(){Y=new Set,de=new Map,J=new Map;var Oe=g();return Oe.forEach(function(ye){var Pe=document.querySelector("[data-menu-id='".concat(Jt(y,ye),"']"));Pe&&(Y.add(Pe),J.set(Pe,ye),de.set(ye,Pe))}),Y};_();var ae=de.get(i),Z=Fr(ae,Y),ue=J.get(Z),q=Ar(n,S(ue,!0).length===1,c,X);if(!q)return;_t.includes(X)&&le.preventDefault();var Re=function(Oe){if(Oe){var ye=Oe,Pe=Oe.querySelector("a");(Pe==null?void 0:Pe.getAttribute("href"))&&(ye=Pe);var Ke=J.get(Oe);j(Ke),G(),V.current=Object(Qe.a)(function(){H.current===Ke&&ye.focus()})}};if(q.sibling||!Z){var te;!Z||n==="inline"?te=O.current:te=Tr(Z);var fe=er(te,Y,Z,q.offset);Re(fe)}else if(q.inlineTrigger)W(ue);else if(q.offset>0)W(ue,!0),G(),V.current=Object(Qe.a)(function(){_();var ce=Z.getAttribute("aria-controls"),Oe=document.getElementById(ce),ye=er(Oe,Y);Re(ye)},5);else if(q.offset<0){var pe=S(ue,!0),ie=pe[pe.length-2],Q=de.get(ie);W(ie,!1),Re(Q)}}$==null||$(le)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(n){var i=Object(en.a)(n,{value:n}),c=Object(L.a)(i,2),y=c[0],O=c[1];return r.useEffect(function(){nr+=1;var g="".concat(Wr,"-").concat(nr);O("rc-menu-uuid-".concat(g))},[]),y}var ya=e("p8sG");function Lr(n){Promise.resolve().then(n)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(At)},$r=function(i){return i.split(At)},Tt="rc-menu-more";function Vr(){var n=r.useState({}),i=Object(L.a)(n,2),c=i[1],y=Object(r.useRef)(new Map),O=Object(r.useRef)(new Map),g=r.useState([]),S=Object(L.a)(g,2),j=S[0],W=S[1],$=Object(r.useRef)(0),V=Object(r.useCallback)(function(J,_){var ae=tr(_);O.current.set(ae,J),y.current.set(J,ae),$.current+=1;var Z=$.current;Lr(function(){Z===$.current&&c({})})},[]),H=Object(r.useCallback)(function(J,_){var ae=tr(_);O.current.delete(ae),y.current.delete(J)},[]),G=Object(r.useCallback)(function(J){W(J)},[]),le=Object(r.useCallback)(function(J,_){var ae=y.current.get(J)||"",Z=$r(ae);return _&&j.includes(Z[0])&&Z.unshift(Tt),Z},[j]),X=Object(r.useCallback)(function(J,_){return J.some(function(ae){var Z=le(ae,!0);return Z.includes(_)})},[le]),Y=function(){var _=Object(Ge.a)(y.current.keys());return j.length&&_.push(Tt),_},de=Object(r.useCallback)(function(J){var _="".concat(y.current.get(J)).concat(At),ae=new Set;return Object(Ge.a)(O.current.keys()).forEach(function(Z){Z.startsWith(_)&&ae.add(O.current.get(Z))}),ae},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:G,isSubPathKey:X,getKeyPath:le,getKeys:Y,getSubPathKeys:de}}var vt=[],zr=function(i){var c,y,O=i.prefixCls,g=O===void 0?"rc-menu":O,S=i.style,j=i.className,W=i.tabIndex,$=W===void 0?0:W,V=i.children,H=i.direction,G=i.id,le=i.mode,X=le===void 0?"vertical":le,Y=i.inlineCollapsed,de=i.disabled,J=i.disabledOverflow,_=i.subMenuOpenDelay,ae=_===void 0?.1:_,Z=i.subMenuCloseDelay,ue=Z===void 0?.1:Z,q=i.forceSubMenuRender,Re=i.defaultOpenKeys,te=i.openKeys,fe=i.activeKey,pe=i.defaultActiveFirst,ie=i.selectable,Q=ie===void 0?!0:ie,ce=i.multiple,Oe=ce===void 0?!1:ce,ye=i.defaultSelectedKeys,Pe=i.selectedKeys,Ke=i.onSelect,Ce=i.onDeselect,je=i.inlineIndent,Fe=je===void 0?24:je,Ae=i.motion,Ie=i.defaultMotions,Ne=i.triggerSubMenuAction,$e=Ne===void 0?"hover":Ne,nn=i.builtinPlacements,Ve=i.itemIcon,Ue=i.expandIcon,xe=i.overflowedIndicator,Le=xe===void 0?"...":xe,Nn=i.getPopupContainer,sn=i.onClick,ke=i.onOpenChange,cn=i.onKeyDown,Cn=i.openAnimation,Sn=i.openTransitionName,Me=Object(oe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ye=Et(V,vt),tn=r.useState(!1),qe=Object(L.a)(tn,2),Kn=qe[0],Jn=qe[1],Ln=r.useRef(),on=Kr(G),In=H==="rtl",mn=r.useMemo(function(){return X==="inline"&&Y?["vertical",Y]:[X,!1]},[X,Y]),Mn=Object(L.a)(mn,2),rn=Mn[0],ln=Mn[1],An=r.useState(0),vn=Object(L.a)(An,2),_e=vn[0],Ze=vn[1],Gn=_e>=Ye.length-1||rn!=="horizontal"||J,Hn=Object(en.a)(Re,{value:te,postState:function(x){return x||vt}}),nt=Object(L.a)(Hn,2),jn=nt[0],On=nt[1],Qn=r.useState(jn),Pn=Object(L.a)(Qn,2),hn=Pn[0],Xn=Pn[1],Tn=rn==="inline",Yn=r.useRef(!1);r.useEffect(function(){Tn&&Xn(jn)},[jn]),r.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(Tn)On(hn);else{var re=[];On(re),ke==null||ke(re)}},[Tn]);var fn=Vr(),Fn=fn.registerPath,he=fn.unregisterPath,De=fn.refreshOverflowKeys,Be=fn.isSubPathKey,an=fn.getKeyPath,Zn=fn.getKeys,gt=fn.getSubPathKeys,Wt=r.useMemo(function(){return{registerPath:Fn,unregisterPath:he}},[Fn,he]),Kt=r.useMemo(function(){return{isSubPathKey:Be}},[Be]);r.useEffect(function(){De(Gn?vt:Ye.slice(_e+1).map(function(re){return re.key}))},[_e,Gn]);var Lt=Object(en.a)(fe||pe&&((c=Ye[0])===null||c===void 0?void 0:c.key),{value:fe}),tt=Object(L.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(re){ot(re)}),$t=et(function(){ot(void 0)}),Ot=Object(en.a)(ye||[],{value:Pe,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Rt=Object(L.a)(Ot,2),rt=Rt[0],Bn=Rt[1],Ct=function(x){if(!!Q){var Se=x.key,He=rt.includes(Se),un;He?un=rt.filter(function(kn){return kn!==Se}):Oe?un=[].concat(Object(Ge.a)(rt),[Se]):un=[Se],Bn(un);var Un=Object(k.a)(Object(k.a)({},x),{},{selectedKeys:un});He?Ce==null||Ce(Un):Ke==null||Ke(Un)}},St=et(function(re){sn==null||sn(_n(re)),Ct(re)}),lt=et(function(re,x){var Se=jn.filter(function(un){return un!==re});if(x)Se.push(re);else if(rn!=="inline"){var He=gt(re);Se=Se.filter(function(un){return!He.has(un)})}l()(jn,Se)||(On(Se),ke==null||ke(Se))}),xn=et(Nn),ut=function(x,Se){var He=Se!=null?Se:!jn.includes(x);lt(x,He)},dt=wr(rn,yt,In,on,Ln,Zn,an,ot,ut,cn);r.useEffect(function(){Jn(!0)},[]);var jt=rn!=="horizontal"||J?Ye:Ye.map(function(re,x){return r.createElement(En,{key:re.key,overflowDisabled:x>_e},re)}),Pt=r.createElement(I,Object(K.a)({id:G,ref:Ln,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Dt,className:ge()(g,"".concat(g,"-root"),"".concat(g,"-").concat(rn),j,(y={},Object(me.a)(y,"".concat(g,"-inline-collapsed"),ln),Object(me.a)(y,"".concat(g,"-rtl"),In),y)),dir:H,style:S,role:"menu",tabIndex:$,data:jt,renderRawItem:function(x){return x},renderRawRest:function(x){var Se=x.length,He=Se?Ye.slice(-Se):null;return r.createElement(Zt,{eventKey:Tt,title:Le,disabled:Gn,internalPopupClose:Se===0},He)},maxCount:rn!=="horizontal"||J?I.INVALIDATE:I.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Ze(x)},onKeyDown:dt},Me));return r.createElement(Ut.Provider,{value:on},r.createElement(En,{prefixCls:g,mode:rn,openKeys:jn,rtl:In,disabled:de,motion:Kn?Ae:null,defaultMotions:Kn?Ie:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Fe,subMenuOpenDelay:ae,subMenuCloseDelay:ue,forceSubMenuRender:q,builtinPlacements:nn,triggerSubMenuAction:$e,getPopupContainer:xn,itemIcon:Ve,expandIcon:Ue,onItemClick:St,onOpenChange:lt},r.createElement(Xe.Provider,{value:Kt},Pt),r.createElement(ve.Provider,{value:Wt},Ye)))},Ur=zr,Jr=function(i){var c=i.className,y=i.title,O=i.eventKey,g=i.children,S=Object(oe.a)(i,["className","title","eventKey","children"]),j=r.useContext(We),W=j.prefixCls,$="".concat(W,"-item-group");return r.createElement("li",Object(K.a)({},S,{onClick:function(H){return H.stopPropagation()},className:ge()($,c)}),r.createElement("div",{className:"".concat($,"-title"),title:typeof y=="string"?y:void 0},y),r.createElement("ul",{className:"".concat($,"-list")},g))};function Gr(n){var i=n.children,c=Object(oe.a)(n,["children"]),y=ze(c.eventKey),O=Et(i,y),g=ne();return g?O:r.createElement(Jr,c,O)}function Hr(n){var i=n.className,c=n.style,y=r.useContext(We),O=y.prefixCls,g=ne();return g?null:r.createElement("li",{className:ge()("".concat(O,"-item-divider"),i),style:c})}var st=Ur;st.Item=Dt,st.SubMenu=Zt,st.ItemGroup=Gr,st.Divider=Hr;var Qr=st,Xr=e("eDIo");function Yr(n,i){var c=n.prefixCls,y=n.editable,O=n.locale,g=n.style;return!y||y.showAdd===!1?null:r.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(j){y.onEdit("add",{event:j})}},y.addIcon||"+")}var rr=r.forwardRef(Yr);function Zr(n,i){var c=n.prefixCls,y=n.id,O=n.tabs,g=n.locale,S=n.mobile,j=n.moreIcon,W=j===void 0?"More":j,$=n.moreTransitionName,V=n.style,H=n.className,G=n.editable,le=n.tabBarGutter,X=n.rtl,Y=n.onTabClick,de=Object(r.useState)(!1),J=Object(L.a)(de,2),_=J[0],ae=J[1],Z=Object(r.useState)(null),ue=Object(L.a)(Z,2),q=ue[0],Re=ue[1],te="".concat(y,"-more-popup"),fe="".concat(c,"-dropdown"),pe=q!==null?"".concat(te,"-").concat(q):null,ie=g==null?void 0:g.dropdownAriaLabel,Q=r.createElement(Qr,{onClick:function(je){var Fe=je.key,Ae=je.domEvent;Y(Fe,Ae),ae(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[q],"aria-label":ie!==void 0?ie:"expanded dropdown"},O.map(function(Ce){return r.createElement(Dt,{key:Ce.key,id:"".concat(te,"-").concat(Ce.key),role:"option","aria-controls":y&&"".concat(y,"-panel-").concat(Ce.key),disabled:Ce.disabled},Ce.tab)}));function ce(Ce){for(var je=O.filter(function($e){return!$e.disabled}),Fe=je.findIndex(function($e){return $e.key===q})||0,Ae=je.length,Ie=0;Ie<Ae;Ie+=1){Fe=(Fe+Ce+Ae)%Ae;var Ne=je[Fe];if(!Ne.disabled){Re(Ne.key);return}}}function Oe(Ce){var je=Ce.which;if(!_){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(je)&&(ae(!0),Ce.preventDefault());return}switch(je){case we.a.UP:ce(-1),Ce.preventDefault();break;case we.a.DOWN:ce(1),Ce.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:q!==null&&Y(q,Ce);break}}Object(r.useEffect)(function(){var Ce=document.getElementById(pe);Ce&&Ce.scrollIntoView&&Ce.scrollIntoView(!1)},[q]),Object(r.useEffect)(function(){_||Re(null)},[_]);var ye=Object(me.a)({},X?"marginLeft":"marginRight",le);O.length||(ye.visibility="hidden",ye.order=1);var Pe=ge()(Object(me.a)({},"".concat(fe,"-rtl"),X)),Ke=S?null:r.createElement(Xr.default,{prefixCls:fe,overlay:Q,trigger:["hover"],visible:_,transitionName:$,onVisibleChange:ae,overlayClassName:Pe,mouseEnterDelay:.1,mouseLeaveDelay:.1},r.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:ye,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(y,"-more"),"aria-expanded":_,onKeyDown:Oe},W));return r.createElement("div",{className:ge()("".concat(c,"-nav-operations"),H),style:V,ref:i},Ke,r.createElement(rr,{prefixCls:c,locale:g,editable:G}))}var xr=r.forwardRef(Zr),Ft=Object(r.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(n,i){var c=Object(r.useState)(),y=Object(L.a)(c,2),O=y[0],g=y[1],S=Object(r.useState)(0),j=Object(L.a)(S,2),W=j[0],$=j[1],V=Object(r.useState)(0),H=Object(L.a)(V,2),G=H[0],le=H[1],X=Object(r.useState)(),Y=Object(L.a)(X,2),de=Y[0],J=Y[1],_=Object(r.useRef)();function ae(fe){var pe=fe.touches[0],ie=pe.screenX,Q=pe.screenY;g({x:ie,y:Q}),window.clearInterval(_.current)}function Z(fe){if(!!O){fe.preventDefault();var pe=fe.touches[0],ie=pe.screenX,Q=pe.screenY;g({x:ie,y:Q});var ce=ie-O.x,Oe=Q-O.y;i(ce,Oe);var ye=Date.now();$(ye),le(ye-W),J({x:ce,y:Oe})}}function ue(){if(!!O&&(g(null),J(null),de)){var fe=de.x/G,pe=de.y/G,ie=Math.abs(fe),Q=Math.abs(pe);if(Math.max(ie,Q)<kr)return;var ce=fe,Oe=pe;_.current=window.setInterval(function(){if(Math.abs(ce)<ar&&Math.abs(Oe)<ar){window.clearInterval(_.current);return}ce*=ir,Oe*=ir,i(ce*ht,Oe*ht)},ht)}}var q=Object(r.useRef)();function Re(fe){var pe=fe.deltaX,ie=fe.deltaY,Q=0,ce=Math.abs(pe),Oe=Math.abs(ie);ce===Oe?Q=q.current==="x"?pe:ie:ce>Oe?(Q=pe,q.current="x"):(Q=ie,q.current="y"),i(-Q,-Q)&&fe.preventDefault()}var te=Object(r.useRef)(null);te.current={onTouchStart:ae,onTouchMove:Z,onTouchEnd:ue,onWheel:Re},r.useEffect(function(){function fe(ce){te.current.onTouchStart(ce)}function pe(ce){te.current.onTouchMove(ce)}function ie(ce){te.current.onTouchEnd(ce)}function Q(ce){te.current.onWheel(ce)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),n.current.addEventListener("touchstart",fe,{passive:!1}),n.current.addEventListener("wheel",Q),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",ie)}},[])}function _r(){var n=Object(r.useRef)(new Map);function i(y){return n.current.has(y)||n.current.set(y,r.createRef()),n.current.get(y)}function c(y){n.current.delete(y)}return[i,c]}function sr(n,i){var c=r.useRef(n),y=r.useState({}),O=Object(L.a)(y,2),g=O[1];function S(j){var W=typeof j=="function"?j(c.current):j;W!==c.current&&i(W,c.current),c.current=W,g({})}return[c.current,S]}var or=function(i){var c=i.position,y=i.prefixCls,O=i.extra;if(!O)return null;var g,S=O;return c==="right"&&(g=S.right||!S.left&&S||null),c==="left"&&(g=S.left||null),g?r.createElement("div",{className:"".concat(y,"-extra-content")},g):null};function ea(n,i){var c,y=r.useContext(Ft),O=y.prefixCls,g=y.tabs,S=n.className,j=n.style,W=n.id,$=n.animated,V=n.activeKey,H=n.rtl,G=n.extra,le=n.editable,X=n.locale,Y=n.tabPosition,de=n.tabBarGutter,J=n.children,_=n.onTabClick,ae=n.onTabScroll,Z=Object(r.useRef)(),ue=Object(r.useRef)(),q=Object(r.useRef)(),Re=Object(r.useRef)(),te=_r(),fe=Object(L.a)(te,2),pe=fe[0],ie=fe[1],Q=Y==="top"||Y==="bottom",ce=sr(0,function(re,x){Q&&ae&&ae({direction:re>x?"left":"right"})}),Oe=Object(L.a)(ce,2),ye=Oe[0],Pe=Oe[1],Ke=sr(0,function(re,x){!Q&&ae&&ae({direction:re>x?"top":"bottom"})}),Ce=Object(L.a)(Ke,2),je=Ce[0],Fe=Ce[1],Ae=Object(r.useState)(0),Ie=Object(L.a)(Ae,2),Ne=Ie[0],$e=Ie[1],nn=Object(r.useState)(0),Ve=Object(L.a)(nn,2),Ue=Ve[0],xe=Ve[1],Le=Object(r.useState)(0),Nn=Object(L.a)(Le,2),sn=Nn[0],ke=Nn[1],cn=Object(r.useState)(0),Cn=Object(L.a)(cn,2),Sn=Cn[0],Me=Cn[1],Ye=Object(r.useState)(null),tn=Object(L.a)(Ye,2),qe=tn[0],Kn=tn[1],Jn=Object(r.useState)(null),Ln=Object(L.a)(Jn,2),on=Ln[0],In=Ln[1],mn=Object(r.useState)(0),Mn=Object(L.a)(mn,2),rn=Mn[0],ln=Mn[1],An=Object(r.useState)(0),vn=Object(L.a)(An,2),_e=vn[0],Ze=vn[1],Gn=Dn(new Map),Hn=Object(L.a)(Gn,2),nt=Hn[0],jn=Hn[1],On=E(g,nt,Ne),Qn="".concat(O,"-nav-operations-hidden"),Pn=0,hn=0;Q?H?(Pn=0,hn=Math.max(0,Ne-qe)):(Pn=Math.min(0,qe-Ne),hn=0):(Pn=Math.min(0,on-Ue),hn=0);function Xn(re){return re<Pn?Pn:re>hn?hn:re}var Tn=Object(r.useRef)(),Yn=Object(r.useState)(),fn=Object(L.a)(Yn,2),Fn=fn[0],he=fn[1];function De(){he(Date.now())}function Be(){window.clearTimeout(Tn.current)}qr(Z,function(re,x){function Se(He,un){He(function(Un){var kn=Xn(Un+un);return kn})}if(Q){if(qe>=Ne)return!1;Se(Pe,re)}else{if(on>=Ue)return!1;Se(Fe,x)}return Be(),De(),!0}),Object(r.useEffect)(function(){return Be(),Fn&&(Tn.current=window.setTimeout(function(){he(0)},100)),Be},[Fn]);function an(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,x=On.get(re)||{width:0,height:0,left:0,right:0,top:0};if(Q){var Se=ye;H?x.right<ye?Se=x.right:x.right+x.width>ye+qe&&(Se=x.right+x.width-qe):x.left<-ye?Se=-x.left:x.left+x.width>-ye+qe&&(Se=-(x.left+x.width-qe)),Fe(0),Pe(Xn(Se))}else{var He=je;x.top<-je?He=-x.top:x.top+x.height>-je+on&&(He=-(x.top+x.height-on)),Pe(0),Fe(Xn(He))}}var Zn=N(On,{width:qe,height:on,left:ye,top:je},{width:sn,height:Sn},{width:rn,height:_e},Object(k.a)(Object(k.a)({},n),{},{tabs:g})),gt=Object(L.a)(Zn,2),Wt=gt[0],Kt=gt[1],Lt=g.map(function(re){var x=re.key;return r.createElement(Vn,{id:W,prefixCls:O,key:x,rtl:H,tab:re,closable:re.closable,editable:le,active:x===V,tabPosition:Y,tabBarGutter:de,renderWrapper:J,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:pe(x),onClick:function(He){_(x,He)},onRemove:function(){ie(x)},onFocus:function(){an(x),De(),H||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),tt=Wn(function(){var re,x,Se,He,un,Un,kn,Vt,zt,la=((re=Z.current)===null||re===void 0?void 0:re.offsetWidth)||0,ua=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,mr=((Se=Re.current)===null||Se===void 0?void 0:Se.offsetWidth)||0,fr=((He=Re.current)===null||He===void 0?void 0:He.offsetHeight)||0,da=((un=q.current)===null||un===void 0?void 0:un.offsetWidth)||0,ca=((Un=q.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Kn(la),In(ua),ln(mr),Ze(fr);var pr=(((kn=ue.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=ue.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),xe(vr);var hr=(zt=q.current)===null||zt===void 0?void 0:zt.className.includes(Qn);ke(pr-(hr?0:da)),Me(vr-(hr?0:ca)),jn(function(){var gr=new Map;return g.forEach(function(ma){var yr=ma.key,ct=pe(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=g.slice(0,Wt),ot=g.slice(Kt+1),bt=[].concat(Object(Ge.a)(yt),Object(Ge.a)(ot)),$t=Object(r.useState)(),Ot=Object(L.a)($t,2),Rt=Ot[0],rt=Ot[1],Bn=On.get(V),Ct=Object(r.useRef)();function St(){Qe.a.cancel(Ct.current)}Object(r.useEffect)(function(){var re={};return Bn&&(Q?(H?re.right=Bn.right:re.left=Bn.left,re.width=Bn.width):(re.top=Bn.top,re.height=Bn.height)),St(),Ct.current=Object(Qe.a)(function(){rt(re)}),St},[Bn,Q,H]),Object(r.useEffect)(function(){an()},[V,Bn,On,Q]),Object(r.useEffect)(function(){tt()},[H,de,V,g.map(function(re){return re.key}).join("_")]);var lt=!!bt.length,xn="".concat(O,"-nav-wrap"),ut,dt,jt,Pt;return Q?H?(dt=ye>0,ut=ye+qe<Ne):(ut=ye<0,dt=-ye+qe<Ne):(jt=je<0,Pt=-je+on<Ue),r.createElement("div",{ref:i,role:"tablist",className:ge()("".concat(O,"-nav"),S),style:j,onKeyDown:function(){De()}},r.createElement(or,{position:"left",extra:G,prefixCls:O}),r.createElement($n.default,{onResize:tt},r.createElement("div",{className:ge()(xn,(c={},Object(me.a)(c,"".concat(xn,"-ping-left"),ut),Object(me.a)(c,"".concat(xn,"-ping-right"),dt),Object(me.a)(c,"".concat(xn,"-ping-top"),jt),Object(me.a)(c,"".concat(xn,"-ping-bottom"),Pt),c)),ref:Z},r.createElement($n.default,{onResize:tt},r.createElement("div",{ref:ue,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ye,"px, ").concat(je,"px)"),transition:Fn?"none":void 0}},Lt,r.createElement(rr,{ref:Re,prefixCls:O,locale:X,editable:le,style:{visibility:lt?"hidden":null}}),r.createElement("div",{className:ge()("".concat(O,"-ink-bar"),Object(me.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Rt}))))),r.createElement(xr,Object(K.a)({},n,{ref:q,prefixCls:O,tabs:bt,className:!lt&&Qn})),r.createElement(or,{position:"right",extra:G,prefixCls:O}))}var lr=r.forwardRef(ea);function na(n){var i=n.id,c=n.activeKey,y=n.animated,O=n.tabPosition,g=n.rtl,S=n.destroyInactiveTabPane,j=r.useContext(Ft),W=j.prefixCls,$=j.tabs,V=y.tabPane,H=$.findIndex(function(G){return G.key===c});return r.createElement("div",{className:ge()("".concat(W,"-content-holder"))},r.createElement("div",{className:ge()("".concat(W,"-content"),"".concat(W,"-content-").concat(O),Object(me.a)({},"".concat(W,"-content-animated"),V)),style:H&&V?Object(me.a)({},g?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(G){return r.cloneElement(G.node,{key:G.key,prefixCls:W,tabKey:G.key,id:i,animated:V,active:G.key===c,destroyInactiveTabPane:S})})))}function ur(n){var i=n.prefixCls,c=n.forceRender,y=n.className,O=n.style,g=n.id,S=n.active,j=n.animated,W=n.destroyInactiveTabPane,$=n.tabKey,V=n.children,H=r.useState(c),G=Object(L.a)(H,2),le=G[0],X=G[1];r.useEffect(function(){S?X(!0):W&&X(!1)},[S,W]);var Y={};return S||(j?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),r.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!S,style:Object(k.a)(Object(k.a)({},Y),O),className:ge()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),y)},(S||le||c)&&V)}var dr=0;function ta(n){return Object(pn.a)(n).map(function(i){if(r.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(k.a)(Object(k.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(n,i){var c,y=n.id,O=n.prefixCls,g=O===void 0?"rc-tabs":O,S=n.className,j=n.children,W=n.direction,$=n.activeKey,V=n.defaultActiveKey,H=n.editable,G=n.animated,le=G===void 0?{inkBar:!0,tabPane:!1}:G,X=n.tabPosition,Y=X===void 0?"top":X,de=n.tabBarGutter,J=n.tabBarStyle,_=n.tabBarExtraContent,ae=n.locale,Z=n.moreIcon,ue=n.moreTransitionName,q=n.destroyInactiveTabPane,Re=n.renderTabBar,te=n.onChange,fe=n.onTabClick,pe=n.onTabScroll,ie=Object(oe.a)(n,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Q=ta(j),ce=W==="rtl",Oe;le===!1?Oe={inkBar:!1,tabPane:!1}:le===!0?Oe={inkBar:!0,tabPane:!0}:Oe=Object(k.a)({inkBar:!0,tabPane:!1},Object(dn.a)(le)==="object"?le:{});var ye=Object(r.useState)(!1),Pe=Object(L.a)(ye,2),Ke=Pe[0],Ce=Pe[1];Object(r.useEffect)(function(){Ce(Object(Rn.a)())},[]);var je=Object(en.a)(function(){var Me;return(Me=Q[0])===null||Me===void 0?void 0:Me.key},{value:$,defaultValue:V}),Fe=Object(L.a)(je,2),Ae=Fe[0],Ie=Fe[1],Ne=Object(r.useState)(function(){return Q.findIndex(function(Me){return Me.key===Ae})}),$e=Object(L.a)(Ne,2),nn=$e[0],Ve=$e[1];Object(r.useEffect)(function(){var Me=Q.findIndex(function(tn){return tn.key===Ae});if(Me===-1){var Ye;Me=Math.max(0,Math.min(nn,Q.length-1)),Ie((Ye=Q[Me])===null||Ye===void 0?void 0:Ye.key)}Ve(Me)},[Q.map(function(Me){return Me.key}).join("_"),Ae,nn]);var Ue=Object(en.a)(null,{value:y}),xe=Object(L.a)(Ue,2),Le=xe[0],Nn=xe[1],sn=Y;Ke&&!["left","right"].includes(Y)&&(sn="top"),Object(r.useEffect)(function(){y||(Nn("rc-tabs-".concat(dr)),dr+=1)},[]);function ke(Me,Ye){fe==null||fe(Me,Ye),Ie(Me),te==null||te(Me)}var cn={id:Le,activeKey:Ae,animated:Oe,tabPosition:sn,rtl:ce,mobile:Ke},Cn,Sn=Object(k.a)(Object(k.a)({},cn),{},{editable:H,locale:ae,moreIcon:Z,moreTransitionName:ue,tabBarGutter:de,onTabClick:ke,onTabScroll:pe,extra:_,style:J,panes:j});return Re?Cn=Re(Sn,lr):Cn=r.createElement(lr,Sn),r.createElement(Ft.Provider,{value:{tabs:Q,prefixCls:g}},r.createElement("div",Object(K.a)({ref:i,id:y,className:ge()(g,"".concat(g,"-").concat(sn),(c={},Object(me.a)(c,"".concat(g,"-mobile"),Ke),Object(me.a)(c,"".concat(g,"-editable"),H),Object(me.a)(c,"".concat(g,"-rtl"),ce),c),S)},ie),Cn,r.createElement(na,Object(K.a)({destroyInactiveTabPane:q},cn,{animated:Oe}))))}var cr=r.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,Bt=e("MZF8"),bn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function wt(n,i){var c,y=(c=n.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return y||(y=i.tsx?"tsx":"jsx"),y}var oa=n=>{var i,c,y,O=Object(r.useRef)(),g=Object(r.useContext)(bn.context),S=g.locale,j=Object(bn.useLocaleProps)(S,n),W=Object(bn.useDemoUrl)(j.identifier),$=j.demoUrl||W,V=(Bt.a===null||Bt.a===void 0?void 0:Bt.a.location.hash)==="#".concat(j.identifier),H=Object.keys(j.sources).length===1,G=Object(bn.useCodeSandbox)((i=j.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:j),le=Object(bn.useRiddle)((c=j.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:j),X=Object(bn.useMotions)(j.motions||[],O.current),Y=Object(U.default)(X,2),de=Y[0],J=Y[1],_=Object(bn.useCopy)(),ae=Object(U.default)(_,2),Z=ae[0],ue=ae[1],q=Object(r.useState)("_"),Re=Object(U.default)(q,2),te=Re[0],fe=Re[1],pe=Object(r.useState)(wt(te,j.sources[te])),ie=Object(U.default)(pe,2),Q=ie[0],ce=ie[1],Oe=Object(r.useState)(Boolean(j.defaultShowCode)),ye=Object(U.default)(Oe,2),Pe=ye[0],Ke=ye[1],Ce=Object(r.useState)(Math.random()),je=Object(U.default)(Ce,2),Fe=je[0],Ae=je[1],Ie=j.sources[te][Q]||j.sources[te].content,Ne=Object(bn.useTSPlaygroundUrl)(S,Ie),$e=Object(r.useRef)(),nn=Object(bn.usePrefersColor)(),Ve=Object(U.default)(nn,1),Ue=Ve[0];Object(r.useEffect)(()=>{Ae(Math.random())},[Ue]);function xe(Le){fe(Le),ce(wt(Le,j.sources[Le]))}return R.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&R.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),R.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?R.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:Fe,src:$,ref:$e}):j.children),R.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&R.a.createElement(bn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&R.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),R.a.createElement("div",{className:"__dumi-default-previewer-actions"},G&&R.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:G}),le&&R.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:le}),j.motions&&R.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>de()}),j.iframe&&R.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ae(Math.random())}),!((y=j.hideActions)!==null&&y!==void 0&&y.includes("EXTERNAL"))&&R.a.createElement(bn.Link,{target:"_blank",to:$},R.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),R.a.createElement("span",null),R.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>Z(Ie)}),Q==="tsx"&&Pe&&R.a.createElement(bn.Link,{target:"_blank",to:Ne},R.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),R.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Pe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Pe)})),Pe&&R.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&R.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:xe},Object.keys(j.sources).map(Le=>R.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,j.sources[Le])):Le,key:Le}))),R.a.createElement("div",{className:"__dumi-default-previewer-source"},R.a.createElement(sa.a,{code:Ie,lang:Q,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(wn,gn,e){"use strict";(function(U){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var r=e("MgzW"),R=e("q1tI"),K=e("i8i4"),me=e("QCnb");function L(f){for(var M="https://reactjs.org/docs/error-decoder.html?invariant="+f,T=1;T<arguments.length;T++)M+="&args[]="+encodeURIComponent(arguments[T]);return"Minified React error #"+f+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dn=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;dn.hasOwnProperty("ReactCurrentDispatcher")||(dn.ReactCurrentDispatcher={current:null}),dn.hasOwnProperty("ReactCurrentBatchConfig")||(dn.ReactCurrentBatchConfig={suspense:null});function oe(f){var M=f,T=f;if(f.alternate)for(;M.return;)M=M.return;else{f=M;do M=f,(M.effectTag&1026)!=0&&(T=M.return),f=M.return;while(f)}return M.tag===3?T:null}function k(f){if(oe(f)!==f)throw Error(L(188))}function Je(f){var M=f.alternate;if(!M){if(M=oe(f),M===null)throw Error(L(188));return M!==f?null:f}for(var T=f,ve=M;;){var ne=T.return;if(ne===null)break;var Ee=ne.alternate;if(Ee===null){if(ve=ne.return,ve!==null){T=ve;continue}break}if(ne.child===Ee.child){for(Ee=ne.child;Ee;){if(Ee===T)return k(ne),f;if(Ee===ve)return k(ne),M;Ee=Ee.sibling}throw Error(L(188))}if(T.return!==ve.return)T=ne,ve=Ee;else{for(var ze=!1,Xe=ne.child;Xe;){if(Xe===T){ze=!0,T=ne,ve=Ee;break}if(Xe===ve){ze=!0,ve=ne,T=Ee;break}Xe=Xe.sibling}if(!ze){for(Xe=Ee.child;Xe;){if(Xe===T){ze=!0,T=Ee,ve=ne;break}if(Xe===ve){ze=!0,ve=Ee,T=ne;break}Xe=Xe.sibling}if(!ze)throw Error(L(189))}}if(T.alternate!==ve)throw Error(L(190))}if(T.tag!==3)throw Error(L(188));return T.stateNode.current===T?f:M}function ge(){return!0}function pn(){return!1}function Rn(f,M,T,ve){this.dispatchConfig=f,this._targetInst=M,this.nativeEvent=T,f=this.constructor.Interface;for(var ne in f)f.hasOwnProperty(ne)&&((M=f[ne])?this[ne]=M(T):ne==="target"?this.target=ve:this[ne]=T[ne]);return this.isDefaultPrevented=(T.defaultPrevented!=null?T.defaultPrevented:T.returnValue===!1)?ge:pn,this.isPropagationStopped=pn,this}r(Rn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=ge)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=ge)},persist:function(){this.isPersistent=ge},isPersistent:pn,destructor:function(){var f=this.constructor.Interface,M;for(M in f)this[M]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=pn,this._dispatchInstances=this._dispatchListeners=null}}),Rn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Rn.extend=function(f){function M(){}function T(){return ve.apply(this,arguments)}var ve=this;M.prototype=ve.prototype;var ne=new M;return r(ne,T.prototype),T.prototype=ne,T.prototype.constructor=T,T.Interface=r({},ve.Interface,f),T.extend=ve.extend,Qe(T),T},Qe(Rn);function en(f,M,T,ve){if(this.eventPool.length){var ne=this.eventPool.pop();return this.call(ne,f,M,T,ve),ne}return new this(f,M,T,ve)}function Ge(f){if(!(f instanceof this))throw Error(L(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Qe(f){f.eventPool=[],f.getPooled=en,f.release=Ge}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Wn(f,M){var T={};return T[f.toLowerCase()]=M.toLowerCase(),T["Webkit"+f]="webkit"+M,T["Moz"+f]="moz"+M,T}var Dn={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Vn(f){if(we[f])return we[f];if(!Dn[f])return f;var M=Dn[f],T;for(T in M)if(M.hasOwnProperty(T)&&T in qn)return we[f]=M[T];return f}var at=Vn("animationend"),E=Vn("animationiteration"),D=Vn("animationstart"),N=Vn("transitionend"),d=null;function l(f){if(d===null)try{var M=("require"+Math.random()).slice(0,7);d=(U&&U[M])("timers").setImmediate}catch(T){d=function(ve){var ne=new MessageChannel;ne.port1.onmessage=ve,ne.port2.postMessage(void 0)}}return d(f)}var p=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=p[11],C=p[12],t=K.unstable_batchedUpdates,o=dn.IsSomeRendererActing,s=typeof me.unstable_flushAllWithoutAsserting=="function",A=me.unstable_flushAllWithoutAsserting||function(){for(var f=!1;b();)f=!0;return f};function F(f){try{A(),l(function(){A()?F(f):f()})}catch(M){f(M)}}var P=0,u=!1,B=K.findDOMNode,m=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=m[0],h=m[4],v=m[5],I=m[6],w=m[7],z=m[8],ee=m[9],se=m[10];function be(){}function yn(f,M){if(!f)return[];if(f=Je(f),!f)return[];for(var T=f,ve=[];;){if(T.tag===5||T.tag===6||T.tag===1||T.tag===0){var ne=T.stateNode;M(ne)&&ve.push(ne)}if(T.child)T.child.return=T,T=T.child;else{if(T===f)return ve;for(;!T.sibling;){if(!T.return||T.return===f)return ve;T=T.return}T.sibling.return=T.return,T=T.sibling}}}function We(f,M){if(f&&!f._reactInternalFiber){var T=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":T==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":T,Error(L(286,M,f))}}var Te={renderIntoDocument:function(f){var M=document.createElement("div");return K.render(f,M)},isElement:function(f){return R.isValidElement(f)},isElementOfType:function(f,M){return R.isValidElement(f)&&f.type===M},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&R.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Te.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,M){return Te.isCompositeComponent(f)?f._reactInternalFiber.type===M:!1},findAllInRenderedTree:function(f,M){return We(f,"findAllInRenderedTree"),f?yn(f._reactInternalFiber,M):[]},scryRenderedDOMComponentsWithClass:function(f,M){return We(f,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(f,function(T){if(Te.isDOMComponent(T)){var ve=T.className;typeof ve!="string"&&(ve=T.getAttribute("class")||"");var ne=ve.split(/\s+/);if(!Array.isArray(M)){if(M===void 0)throw Error(L(11));M=M.split(/\s+/)}return M.every(function(Ee){return ne.indexOf(Ee)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,M){if(We(f,"findRenderedDOMComponentWithClass"),f=Te.scryRenderedDOMComponentsWithClass(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+M);return f[0]},scryRenderedDOMComponentsWithTag:function(f,M){return We(f,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(f,function(T){return Te.isDOMComponent(T)&&T.tagName.toUpperCase()===M.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,M){if(We(f,"findRenderedDOMComponentWithTag"),f=Te.scryRenderedDOMComponentsWithTag(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+M);return f[0]},scryRenderedComponentsWithType:function(f,M){return We(f,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(f,function(T){return Te.isCompositeComponentWithType(T,M)})},findRenderedComponentWithType:function(f,M){if(We(f,"findRenderedComponentWithType"),f=Te.scryRenderedComponentsWithType(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+M);return f[0]},mockComponent:function(f,M){return M=M||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return R.createElement(M,null,this.props.children)}),this},nativeTouchData:function(f,M){return{touches:[{pageX:f,pageY:M}]}},Simulate:null,SimulateNative:{},act:function(f){function M(){P--,o.current=T,C.current=ve}u===!1&&(u=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),P++;var T=o.current,ve=C.current;o.current=!0,C.current=!0;try{var ne=t(f)}catch(Ee){throw M(),Ee}if(ne!==null&&typeof ne=="object"&&typeof ne.then=="function")return{then:function(Ee,ze){ne.then(function(){1<P||s===!0&&T===!0?(M(),Ee()):F(function(Xe){M(),Xe?ze(Xe):Ee()})},function(Xe){M(),ze(Xe)})}};try{P!==1||s!==!1&&T!==!1||A(),M()}catch(Ee){throw M(),Ee}return{then:function(Ee){Ee()}}}};function En(f){return function(M,T){if(R.isValidElement(M))throw Error(L(228));if(Te.isCompositeComponent(M))throw Error(L(229));var ve=h[f],ne=new be;ne.target=M,ne.type=f.toLowerCase();var Ee=a(M),ze=new Rn(ve,Ee,ne,M);ze.persist(),r(ze,T),ve.phasedRegistrationNames?v(ze):I(ze),K.unstable_batchedUpdates(function(){w(M),se(ze)}),z()}}Te.Simulate={};for(var it in h)Te.Simulate[it]=En(it);function _n(f,M){return function(T,ve){var ne=new be(f);r(ne,ve),Te.isDOMComponent(T)?(T=B(T),ne.target=T,ee(M,1,document,ne)):T.tagName&&(ne.target=T,ee(M,1,document,ne))}}[["abort","abort"],[at,"animationEnd"],[E,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[N,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var M=f[1];Te.SimulateNative[M]=_n(M,f[0])}),U.exports=Te.default||Te}).call(this,e("hOG+")(wn))},F4QJ:function(wn,gn,e){"use strict";Object.defineProperty(gn,"__esModule",{value:!0}),gn.default=void 0;function U(){var oe=R(e("q1tI"));return U=function(){return oe},oe}function r(){var oe=e("dEAq");return r=function(){return oe},oe}function R(oe){return oe&&oe.__esModule?oe:{default:oe}}function K(oe,k){var Je=Object.keys(oe);if(Object.getOwnPropertySymbols){var ge=Object.getOwnPropertySymbols(oe);k&&(ge=ge.filter(function(pn){return Object.getOwnPropertyDescriptor(oe,pn).enumerable})),Je.push.apply(Je,ge)}return Je}function me(oe){for(var k=1;k<arguments.length;k++){var Je=arguments[k]!=null?arguments[k]:{};k%2?K(Object(Je),!0).forEach(function(ge){L(oe,ge,Je[ge])}):Object.getOwnPropertyDescriptors?Object.defineProperties(oe,Object.getOwnPropertyDescriptors(Je)):K(Object(Je)).forEach(function(ge){Object.defineProperty(oe,ge,Object.getOwnPropertyDescriptor(Je,ge))})}return oe}function L(oe,k,Je){return k in oe?Object.defineProperty(oe,k,{value:Je,enumerable:!0,configurable:!0,writable:!0}):oe[k]=Je,oe}var dn=function(k,Je){var ge=[],pn=k.match.params.uuid,Rn=k.location.query.wrapper===void 0,en=Je[pn];if(en){var Ge=me(me({},en.previewerProps),{},{hideActions:(en.previewerProps.hideActions||[]).concat(["EXTERNAL"])});k.location.query.capture!==void 0&&(Ge.motions=(Ge.motions||[]).slice(),Ge.motions.unshift("autoplay"),Ge.motions.every(function(Qe){return!Qe.startsWith("capture")})&&Ge.motions.push("capture:[id|=root]")),Rn?ge=[U().default.createElement(function(){return(0,r().useMotions)(Ge.motions||[],document.documentElement),U().default.createElement("div",{},U().default.createElement(en.component))})]:ge=[Ge,U().default.createElement(en.component)]}return ge};gn.default=dn},JjdP:function(wn,gn,e){"use strict";e.r(gn);var U=e("9og8"),r=e("WmNS"),R=e.n(r),K=e("LtsZ"),me=`import React, { useRef } from 'react';
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

export default Demo;`,dn=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,oe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,k=`export const basic = {
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
};`,Je=`import React, { Component } from 'react';
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

export default Root;`,ge=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,pn=`{
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
}`,Rn=`import { Select } from 'antd';
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

export default SearchInput;`,en=`import React from 'react';
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

export default Demo;`,Ge=`/* PrismJS 1.16.0
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
}`,Qe=`.markdown p {
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

export default Demo;`,Vn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,at=gn.default={"guide-card":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o;return R.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return t=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var B=C(u);if(B&&B.has(P))return B.get(P);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in P)if(h!=="default"&&Object.prototype.hasOwnProperty.call(P,h)){var v=a?Object.getOwnPropertyDescriptor(P,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=P[h]}return m.default=P,B&&B.set(P,m),m},C=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,B=new WeakMap;return(C=function(a){return a?B:u})(P)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=t,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,p=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=A.sent,o=function(){var P=(0,p.useState)("Line"),u=(0,l.default)(P,2),B=u[0],m=u[1],a={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[B];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},A.abrupt("return",o);case 18:case"end":return A.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=t.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(A,F,P){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(F).length]}},A),l.default.createElement("p",null,JSON.stringify(F)),l.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",b);case 11:case"end":return t.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o;return R.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return t=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var B=C(u);if(B&&B.has(P))return B.get(P);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in P)if(h!=="default"&&Object.prototype.hasOwnProperty.call(P,h)){var v=a?Object.getOwnPropertyDescriptor(P,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=P[h]}return m.default=P,B&&B.set(P,m),m},C=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,B=new WeakMap;return(C=function(a){return a?B:u})(P)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=t,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,p=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=A.sent,o=function(){var P=(0,p.useState)(!1),u=(0,l.default)(P,2),B=u[0],m=u[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:B,onChange:function(){return m(!B)}})),p.default.createElement(b.PivotTable,{leftExpandable:B,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},A.abrupt("return",o);case 18:case"end":return A.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F,P,u,B,m;return R.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return P=function(I,w){if(!w&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var z=F(w);if(z&&z.has(I))return z.get(I);var ee={},se=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var be in I)if(be!=="default"&&Object.prototype.hasOwnProperty.call(I,be)){var yn=se?Object.getOwnPropertyDescriptor(I,be):null;yn&&(yn.get||yn.set)?Object.defineProperty(ee,be,yn):ee[be]=I[be]}return ee.default=I,z&&z.set(I,ee),ee},F=function(I){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(F=function(se){return se?z:w})(I)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,l=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(63).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(64).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,C=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(60).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,t=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,o=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=P,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,A=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(v){(0,C.default)(w,v);var I=(0,t.default)(w);function w(){return(0,p.default)(this,w),I.apply(this,arguments)}return(0,b.default)(w,[{key:"render",value:function(){var ee=this.props.form;return o.default.createElement("div",null,o.default.createElement(A.default,{form:ee,schema:u}),o.default.createElement(l.default,{type:"primary",onClick:ee.submit},"\u63D0\u4EA4"))}}]),w}(o.default.Component),m=(0,A.connectForm)(B),h.abrupt("return",m);case 47:case"end":return h.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F;return R.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=t(a);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=I?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},t=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(I){return I?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){var m=(0,C.useForm)();return p.default.createElement("div",null,p.default.createElement(C.default,{form:m,schema:s}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},F=A,u.abrupt("return",F);case 27:case"end":return u.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F;return R.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=t(a);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=I?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},t=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(I){return I?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},A=function(){var m=(0,C.useForm)(),a=function(v,I){I.length>0?alert("errors:"+JSON.stringify(I)):alert("formData:"+JSON.stringify(v,null,2))};return p.default.createElement("div",null,p.default.createElement(C.default,{form:m,schema:s,onFinish:a}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},F=A,u.abrupt("return",F);case 27:case"end":return u.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s;return R.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return o=function(){var u=(0,p.useForm)(),B=function(a,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(a))};return l.default.createElement("div",null,l.default.createElement(p.default,{form:u,schema:t,onFinish:B}),l.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},C=function(u,B){if(!B&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(B);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(a,v,I):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var B=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:B})(u)},d=e("K+nK"),F.t0=d,F.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return F.t1=F.sent,l=(0,F.t0)(F.t1),F.t2=C,F.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return F.t3=F.sent,p=(0,F.t2)(F.t3),t={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=o,F.abrupt("return",s);case 17:case"end":return F.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C;return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b=function(A){return{type:"object",displayType:A,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(p.default,{schema:b("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(p.default,{schema:b("column")}))},o.abrupt("return",C);case 14:case"end":return o.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C;return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return l.default.createElement(p.default,{schema:b})},o.abrupt("return",C);case 14:case"end":return o.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C;return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return l.default.createElement(p.default,{readOnly:!0,schema:b})},o.abrupt("return",C);case 14:case"end":return o.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C;return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return l.default.createElement(p.default,{labelWidth:"200",schema:b})},o.abrupt("return",C);case 14:case"end":return o.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F,P,u,B;return R.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return P=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=F(I);if(w&&w.has(v))return w.get(v);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in v)if(se!=="default"&&Object.prototype.hasOwnProperty.call(v,se)){var be=ee?Object.getOwnPropertyDescriptor(v,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=v[se]}return z.default=v,w&&w.set(v,z),z},F=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(F=function(ee){return ee?w:I})(v)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.t8=P,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,t=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return o=a.sent,a.t10=P,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,s=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return A=a.sent,u=function(){var v=(0,s.useForm)(),I=(0,t.useState)({}),w=(0,C.default)(I,2),z=w[0],ee=w[1],se=function(){(0,A.fakeApi)("xxx/getForm").then(function(We){v.setValues({input1:"hello world",select1:"c"})})};(0,t.useEffect)(function(){(0,A.delay)(1e3).then(function(yn){ee({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var be=function(We,Te){Te.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Te.map(function(En){return En.name}))):(0,A.fakeApi)("xxx/submit",We).then(function(En){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return t.default.createElement("div",{style:{width:"400px"}},t.default.createElement(s.default,{form:v,schema:z,onFinish:be}),t.default.createElement(l.default,null,t.default.createElement(p.default,{onClick:se},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),t.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},B=u,a.abrupt("return",B);case 48:case"end":return a.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F,P,u,B;return R.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return F=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=A(I);if(w&&w.has(v))return w.get(v);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in v)if(se!=="default"&&Object.prototype.hasOwnProperty.call(v,se)){var be=ee?Object.getOwnPropertyDescriptor(v,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=v[se]}return z.default=v,w&&w.set(v,z),z},A=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(A=function(ee){return ee?w:I})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.t2=d,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=d,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=a.sent,a.t8=F,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=a.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var v=(0,o.useForm)(),I=function(ee,se){se.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(be){return be.name}))):(0,s.fakeApi)("xxx/submit",ee).then(function(be){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(ee){var se=ee.data,be=ee.errors,yn=ee.schema,We=(0,p.default)(ee,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Te){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(o.default,{form:v,schema:P,beforeFinish:w,onFinish:I}),C.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},B=u,a.abrupt("return",B);case 42:case"end":return a.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F,P,u,B;return R.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return F=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=A(I);if(w&&w.has(v))return w.get(v);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in v)if(se!=="default"&&Object.prototype.hasOwnProperty.call(v,se)){var be=ee?Object.getOwnPropertyDescriptor(v,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=v[se]}return z.default=v,w&&w.set(v,z),z},A=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(A=function(ee){return ee?w:I})(v)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return t=a.sent,a.t8=F,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=a.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var v=(0,o.useForm)(),I=function(ee,se){se.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(be){return be.name}))):(0,s.fakeApi)("xxx/submit",ee).then(function(be){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,s.fakeApi)("xxx/getForm").then(function(ee){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(o.default,{form:v,schema:P,onFinish:I}),C.default.createElement(l.default,null,C.default.createElement(p.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},B=u,a.abrupt("return",B);case 44:case"end":return a.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F,P,u;return R.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return A=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var I=s(v);if(I&&I.has(h))return I.get(h);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ee in h)if(ee!=="default"&&Object.prototype.hasOwnProperty.call(h,ee)){var se=z?Object.getOwnPropertyDescriptor(h,ee):null;se&&(se.get||se.set)?Object.defineProperty(w,ee,se):w[ee]=h[ee]}return w.default=h,I&&I.set(h,w),w},s=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,I=new WeakMap;return(s=function(z){return z?I:v})(h)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,l=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=A,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return C=m.sent,m.t6=A,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,t=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=m.sent,F={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var h=(0,t.useForm)(),v=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},I=function(z,ee){ee.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ee.map(function(se){return se.name}))):p.default.info(JSON.stringify(z))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(t.default,{form:h,schema:F,onMount:v,onFinish:I}),b.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=P,m.abrupt("return",u);case 37:case"end":return m.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s;return R.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return C=function(u,B){if(!B&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(B);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(a,v,I):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var B=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:B})(u)},d=e("K+nK"),F.t0=d,F.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return F.t1=F.sent,l=(0,F.t0)(F.t1),F.t2=C,F.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return F.t3=F.sent,p=(0,F.t2)(F.t3),t={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var u=(0,p.useForm)();return l.default.createElement(p.default,{form:u,schema:t})},s=o,F.abrupt("return",s);case 17:case"end":return F.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C;return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,C=function(){return l.default.createElement(p.default,{schema:b.expression})},o.abrupt("return",C);case 16:case"end":return o.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:k}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A;return R.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return C=function(B,m){if(!m&&B&&B.__esModule)return B;if(B===null||typeof B!="object"&&typeof B!="function")return{default:B};var a=b(m);if(a&&a.has(B))return a.get(B);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in B)if(I!=="default"&&Object.prototype.hasOwnProperty.call(B,I)){var w=v?Object.getOwnPropertyDescriptor(B,I):null;w&&(w.get||w.set)?Object.defineProperty(h,I,w):h[I]=B[I]}return h.default=B,a&&a.set(B,h),h},b=function(B){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(b=function(v){return v?a:m})(B)},P.t0=C,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,d=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=P.sent,P.t2=C,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,p=(0,P.t2)(P.t3),t=function(B){return new Promise(function(m){return setTimeout(m,B)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var B=(0,p.useForm)(),m=function(){B.setValues({input1:"hello world"}),t(3e3).then(function(h){B.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:B,schema:o,onMount:m})},A=s,P.abrupt("return",A);case 20:case"end":return P.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(A){var F=A.value;console.log(F)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(p.default,{schema:b})},t=C,s.abrupt("return",t);case 16:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s;return R.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return C=function(u,B){if(!B&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(B);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(a,v,I):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var B=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:B})(u)},F.t0=C,F.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return F.t1=F.sent,d=(0,F.t0)(F.t1),F.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=F.sent,F.t2=C,F.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return F.t3=F.sent,p=(0,F.t2)(F.t3),t={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var u=(0,p.useForm)(),B={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return d.default.createElement(p.default,{form:u,schema:t,watch:B})},s=o,F.abrupt("return",s);case 19:case"end":return F.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F;return R.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=t(a);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=I?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},t=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(t=function(I){return I?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=o,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,C=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},A=function(){var m=(0,C.useForm)(),a=function(I,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(I,null,2))},h={input1:function(I){I.length>2?m.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(ee){return ee+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(C.default,{form:m,schema:s,onFinish:a,watch:h}),p.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},F=A,u.abrupt("return",F);case 27:case"end":return u.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A,F,P,u,B;return R.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return A=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=s(I);if(w&&w.has(v))return w.get(v);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in v)if(se!=="default"&&Object.prototype.hasOwnProperty.call(v,se)){var be=ee?Object.getOwnPropertyDescriptor(v,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=v[se]}return z.default=v,w&&w.set(v,z),z},s=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(s=function(ee){return ee?w:I})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(61)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=d,a.next=15,Promise.all([e.e(0),e.e(13),e.e(59),e.e(62)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.t4=d,a.next=20,e.e(65).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=A,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=a.sent,a.t8=A,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),F={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(v){return console.log("widget props:",v),C.default.createElement(p.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},v))},u=function(){var v=(0,o.useForm)(),I=function(){};return C.default.createElement("div",null,C.default.createElement(o.default,{readOnly:!0,form:v,schema:F,widgets:{site:P},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),C.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},B=u,a.abrupt("return",B);case 40:case"end":return a.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C;return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,C=function(){return l.default.createElement(p.default,{schema:b.basic})},o.abrupt("return",C);case 16:case"end":return o.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:k}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C;return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,C=function(){return l.default.createElement(p.default,{schema:b.titleTrick})},o.abrupt("return",C);case 16:case"end":return o.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:k}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Je},"main.js":{import:"./main",content:ge},"json/simplest.json":{import:"./json/simplest.json",content:pn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Rn},"monaco/index.js":{import:"./monaco",content:en},"theme.css":{import:"./theme.css",content:Ge},"index.css":{import:"./index.css",content:Qe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t,o,s,A;return R.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=e("K+nK"),P.t0=d,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,l=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(58)]).then(e.bind(null,"P2DI"));case 8:for(p=P.sent,b=[],C=0;C<6;C++)b.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return t={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(B,m){return l.default.createElement("a",{onClick:function(){return alert(B.title)}},"\u7F16\u8F91")}}],s=function(){var B=function(){return{rows:b,total:b.length}};return l.default.createElement(p.TableProvider,null,l.default.createElement(p.Search,{schema:t,api:B}),l.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},A=s,P.abrupt("return",A);case 16:case"end":return P.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){var d,l,p,b,C,t;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(p.default,{defaultValue:b}))},t=C,s.abrupt("return",t);case 15:case"end":return s.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.3"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.3"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(K.dynamic)({loader:function(){var E=Object(U.a)(R.a.mark(function N(){return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},N)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Vn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.0.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(wn,gn,e){},Zs1V:function(wn){wn.exports=JSON.parse("{}")},p8sG:function(wn,gn,e){"use strict";wn.exports=e("80pN")}}]);
