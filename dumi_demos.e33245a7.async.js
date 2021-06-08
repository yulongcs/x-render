(window.webpackJsonp=window.webpackJsonp||[]).push([[55,10],{"0zqC":function(wn,gn,e){"use strict";e.r(gn);var U=e("tJVT"),a=e("q1tI"),C=e.n(a),W=e("wx14"),me=e("rePB"),L=e("ODXe"),dn=e("U8pU"),oe=e("Ff2n"),k=e("VTBJ"),Ge=e("TSYQ"),ge=e.n(Ge),pn=e("Zm9Q"),On=e("5Z9U"),en=e("6cGi"),Je=e("KQm4"),He=e("wgJM"),Ln=e("t23M");function Fn(n){var i=Object(a.useRef)(),c=Object(a.useRef)(!1);function b(){for(var O=arguments.length,g=new Array(O),R=0;R<O;R++)g[R]=arguments[R];c.current||(He.a.cancel(i.current),i.current=Object(He.a)(function(){n.apply(void 0,g)}))}return Object(a.useEffect)(function(){return function(){c.current=!0,He.a.cancel(i.current)}},[]),b}function Dn(n){var i=Object(a.useRef)([]),c=Object(a.useState)({}),b=Object(L.a)(c,2),O=b[1],g=Object(a.useRef)(typeof n=="function"?n():n),R=Fn(function(){var B=g.current;i.current.forEach(function($){B=$(B)}),i.current=[],g.current=B,O({})});function j(B){i.current.push(B),R()}return[g.current,j]}var Be=e("4IlW");function Gn(n,i){var c,b=n.prefixCls,O=n.id,g=n.active,R=n.rtl,j=n.tab,B=j.key,$=j.tab,V=j.disabled,x=j.closeIcon,J=n.tabBarGutter,le=n.tabPosition,Q=n.closable,X=n.renderWrapper,de=n.removeAriaLabel,G=n.editable,_=n.onClick,ie=n.onRemove,Y=n.onFocus,ue="".concat(b,"-tab");a.useEffect(function(){return ie},[]);var q={};le==="top"||le==="bottom"?q[R?"marginLeft":"marginRight"]=J:q.marginBottom=J;var Ce=G&&Q!==!1&&!V;function ne(se){V||_(se)}function fe(se){se.preventDefault(),se.stopPropagation(),G.onEdit("remove",{key:B,event:se})}var pe=a.createElement("div",{key:B,ref:i,className:ge()(ue,(c={},Object(me.a)(c,"".concat(ue,"-with-remove"),Ce),Object(me.a)(c,"".concat(ue,"-active"),g),Object(me.a)(c,"".concat(ue,"-disabled"),V),c)),style:q,onClick:ne},a.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(B),className:"".concat(ue,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(B),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[Be.a.SPACE,Be.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Y},$),Ce&&a.createElement("button",{type:"button","aria-label":de||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(H){H.stopPropagation(),fe(H)}},x||G.removeIcon||"\xD7"));return X&&(pe=X(pe)),pe}var $n=a.forwardRef(Gn),_n={width:0,height:0,left:0,top:0};function ct(n,i,c){return Object(a.useMemo)(function(){for(var b,O=new Map,g=i.get((b=n[0])===null||b===void 0?void 0:b.key)||_n,R=g.left+g.width,j=0;j<n.length;j+=1){var B=n[j].key,$=i.get(B);if(!$){var V;$=i.get((V=n[j-1])===null||V===void 0?void 0:V.key)||_n}var x=O.get(B)||Object(k.a)({},$);x.right=R-x.left-x.width,O.set(B,x)}return O},[n.map(function(b){return b.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function I(n,i,c,b,O){var g=O.tabs,R=O.tabPosition,j=O.rtl,B,$,V;["top","bottom"].includes(R)?(B="width",$=j?"right":"left",V=Math.abs(i.left)):(B="height",$="top",V=-i.top);var x=i[B],J=c[B],le=b[B],Q=x;return J+le>x&&(Q=x-le),Object(a.useMemo)(function(){if(!g.length)return[0,0];for(var X=g.length,de=X,G=0;G<X;G+=1){var _=n.get(g[G].key)||D;if(_[$]+_[B]>V+Q){de=G-1;break}}for(var ie=0,Y=X-1;Y>=0;Y-=1){var ue=n.get(g[Y].key)||D;if(ue[$]<V){ie=Y+1;break}}return[ie,de]},[n,V,Q,R,g.map(function(X){return X.key}).join("_"),j])}var P=e("Gytx"),d=e.n(P),o=e("Kwbf");function v(n,i){var c=n.prefixCls,b=n.invalidate,O=n.item,g=n.renderItem,R=n.responsive,j=n.registerSize,B=n.itemKey,$=n.className,V=n.style,x=n.children,J=n.display,le=n.order,Q=n.component,X=Q===void 0?"div":Q,de=Object(oe.a)(n,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),G=R&&!J;function _(Ce){j(B,Ce)}a.useEffect(function(){return function(){_(null)}},[]);var ie=g&&O!==void 0?g(O):x,Y;b||(Y={opacity:G?0:1,height:G?0:void 0,overflowY:G?"hidden":void 0,order:R?le:void 0,pointerEvents:G?"none":void 0});var ue={};G&&(ue["aria-hidden"]=!0);var q=a.createElement(X,Object(W.a)({className:ge()(!b&&c,$),style:Object(k.a)(Object(k.a)({},Y),V)},ue,de,{ref:i}),ie);return R&&(q=a.createElement(Ln.default,{onResize:function(ne){var fe=ne.offsetWidth;_(fe)}},q)),q}var y=a.forwardRef(v);y.displayName="Item";var S=y;function t(){var n=Object(a.useState)({}),i=Object(L.a)(n,2),c=i[1],b=Object(a.useRef)([]),O=Object(a.useRef)(!1),g=0,R=0;Object(a.useEffect)(function(){return function(){O.current=!0}},[]);function j(B){var $=g;g+=1,b.current.length<$+1&&(b.current[$]=B);var V=b.current[$];function x(J){b.current[$]=typeof J=="function"?J(b.current[$]):J,He.a.cancel(R),R=Object(He.a)(function(){O.current||c({})})}return[V,x]}return j}var l=function(i,c){var b=a.useContext(T);if(!b){var O=i.component,g=O===void 0?"div":O,R=Object(oe.a)(i,["component"]);return a.createElement(g,Object(W.a)({},R,{ref:c}))}var j=b.className,B=Object(oe.a)(b,["className"]),$=i.className,V=Object(oe.a)(i,["className"]);return a.createElement(T.Provider,{value:null},a.createElement(S,Object(W.a)({ref:c,className:ge()(j,$)},B,V)))},s=a.forwardRef(l);s.displayName="RawItem";var M=s,T=a.createContext(null),E="responsive",u="invalidate";function K(n){return"+ ".concat(n.length," ...")}function f(n,i){var c=n.prefixCls,b=c===void 0?"rc-overflow":c,O=n.data,g=O===void 0?[]:O,R=n.renderItem,j=n.renderRawItem,B=n.itemKey,$=n.itemWidth,V=$===void 0?10:$,x=n.ssr,J=n.style,le=n.className,Q=n.maxCount,X=n.renderRest,de=n.renderRawRest,G=n.suffix,_=n.component,ie=_===void 0?"div":_,Y=n.itemComponent,ue=n.onVisibleChange,q=Object(oe.a)(n,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ce=t(),ne=x==="full",fe=Ce(null),pe=Object(L.a)(fe,2),se=pe[0],H=pe[1],ce=se||0,be=Ce(new Map),ye=Object(L.a)(be,2),Pe=ye[0],We=ye[1],Se=Ce(0),je=Object(L.a)(Se,2),we=je[0],Me=je[1],Te=Ce(0),Ie=Object(L.a)(Te,2),$e=Ie[0],nn=Ie[1],Ve=Ce(0),Ue=Object(L.a)(Ve,2),Ze=Ue[0],Le=Ue[1],En=Object(a.useState)(null),sn=Object(L.a)(En,2),ke=sn[0],cn=sn[1],Sn=Object(a.useState)(null),Rn=Object(L.a)(Sn,2),Ke=Rn[0],Xe=Rn[1],tn=a.useMemo(function(){return Ke===null&&ne?Number.MAX_SAFE_INTEGER:Ke||0},[Ke,se]),qe=Object(a.useState)(!1),Bn=Object(L.a)(qe,2),Jn=Bn[0],Wn=Bn[1],on="".concat(b,"-item"),In=Math.max(we,$e),mn=g.length&&Q===E,Nn=Q===u,rn=mn||typeof Q=="number"&&g.length>Q,ln=Object(a.useMemo)(function(){var he=g;return mn?se===null&&ne?he=g:he=g.slice(0,Math.min(g.length,ce/V)):typeof Q=="number"&&(he=g.slice(0,Q)),he},[g,V,se,Q,mn]),Tn=Object(a.useMemo)(function(){return mn?g.slice(tn+1):g.slice(ln.length)},[g,ln,mn,tn]),vn=Object(a.useCallback)(function(he,De){var Fe;return typeof B=="function"?B(he):(Fe=B&&(he==null?void 0:he[B]))!==null&&Fe!==void 0?Fe:De},[B]),_e=Object(a.useCallback)(R||function(he){return he},[R]);function Ye(he,De){Xe(he),De||(Wn(he<g.length-1),ue==null||ue(he))}function xn(he,De){H(De.clientWidth)}function Hn(he,De){We(function(Fe){var an=new Map(Fe);return De===null?an.delete(he):an.set(he,De),an})}function tt(he,De){nn(De),Me($e)}function jn(he,De){Le(De)}function bn(he){return Pe.get(vn(ln[he],he))}a.useLayoutEffect(function(){if(ce&&In&&ln){var he=Ze,De=ln.length,Fe=De-1;if(!De){Ye(0),cn(null);return}for(var an=0;an<De;an+=1){var Zn=bn(an);if(Zn===void 0){Ye(an-1,!0);break}if(he+=Zn,an===Fe-1&&he+bn(Fe)<=ce){Ye(Fe),cn(null);break}else if(he+In>ce){Ye(an-1),cn(he-Zn-Ze+$e);break}else if(an===Fe){Ye(Fe),cn(he-Ze);break}}G&&bn(0)+Ze>ce&&cn(null)}},[ce,Pe,$e,Ze,vn,ln]);var Qn=Jn&&!!Tn.length,Pn={};ke!==null&&mn&&(Pn={position:"absolute",left:ke,top:0});var hn={prefixCls:on,responsive:mn,component:Y,invalidate:Nn},Xn=j?function(he,De){var Fe=vn(he,De);return a.createElement(T.Provider,{key:Fe,value:Object(k.a)(Object(k.a)({},hn),{},{order:De,item:he,itemKey:Fe,registerSize:Hn,display:De<=tn})},j(he,De))}:function(he,De){var Fe=vn(he,De);return a.createElement(S,Object(W.a)({},hn,{order:De,key:Fe,item:he,renderItem:_e,itemKey:Fe,registerSize:Hn,display:De<=tn}))},Kn,Yn={order:Qn?tn:Number.MAX_SAFE_INTEGER,className:"".concat(on,"-rest"),registerSize:tt,display:Qn};if(de)de&&(Kn=a.createElement(T.Provider,{value:Object(k.a)(Object(k.a)({},hn),Yn)},de(Tn)));else{var fn=X||K;Kn=a.createElement(S,Object(W.a)({},hn,Yn),typeof fn=="function"?fn(Tn):fn)}var Mn=a.createElement(ie,Object(W.a)({className:ge()(!Nn&&b,le),style:J,ref:i},q),ln.map(Xn),rn?Kn:null,G&&a.createElement(S,Object(W.a)({},hn,{order:tn,className:"".concat(on,"-suffix"),registerSize:jn,display:!0,style:Pn}),G));return mn&&(Mn=a.createElement(Ln.default,{onResize:xn},Mn)),Mn}var r=a.forwardRef(f);r.displayName="Overflow",r.Item=M,r.RESPONSIVE=E,r.INVALIDATE=u;var h=r,p=h,A=e("1OyB"),F=e("vuIU"),z=e("Ji7U"),te=e("LK+K"),ae=e("bT9E"),Oe=e("YrtM"),Ne=a.createContext(null);function Ae(n,i){var c=Object(k.a)({},n);return Object.keys(i).forEach(function(b){var O=i[b];O!==void 0&&(c[b]=O)}),c}function Cn(n){var i=n.children,c=n.locked,b=Object(oe.a)(n,["children","locked"]),O=a.useContext(Ne),g=Object(Oe.a)(function(){return Ae(O,b)},[O,b],function(R,j){return!c&&(R[0]!==j[0]||!d()(R[1],j[1]))});return a.createElement(Ne.Provider,{value:g},i)}function Vn(n,i,c,b){var O=a.useContext(Ne),g=O.activeKey,R=O.onActive,j=O.onInactive,B={active:g===n};return i||(B.onMouseEnter=function($){c==null||c({key:n,domEvent:$}),R(n)},B.onMouseLeave=function($){b==null||b({key:n,domEvent:$}),j(n)}),B}function et(n){var i=n.item,c=Object(oe.a)(n,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(n){var i=n.icon,c=n.props,b=n.children,O;return typeof i=="function"?O=a.createElement(i,Object(k.a)({},c)):O=i,O||b||null}function N(n){var i=a.useContext(Ne),c=i.mode,b=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=n;return b?{paddingRight:g*O}:{paddingLeft:g*O}}var w=[],ve=a.createContext(null);function ee(){return a.useContext(ve)}var Ee=a.createContext(w);function ze(n){var i=a.useContext(Ee);return a.useMemo(function(){return n!==void 0?[].concat(Object(Je.a)(i),[n]):i},[i,n])}var Qe=a.createContext(null),Ut=a.createContext(null);function Gt(n,i){return n===void 0?null:"".concat(n,"-").concat(i)}function Jt(n){var i=a.useContext(Ut);return Gt(i,n)}var br=function(n){Object(z.a)(c,n);var i=Object(te.a)(c);function c(){return Object(A.a)(this,c),i.apply(this,arguments)}return Object(F.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,R=O.attribute,j=O.elementRef,B=Object(oe.a)(O,["title","attribute","elementRef"]),$=Object(ae.a)(B,["eventKey"]);return Object(o.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),a.createElement(p.Item,Object(W.a)({},R,{title:typeof g=="string"?g:void 0},$,{ref:j}))}}]),c}(a.Component),Or=function(i){var c,b=i.style,O=i.className,g=i.eventKey,R=i.disabled,j=i.itemIcon,B=i.children,$=i.role,V=i.onMouseEnter,x=i.onMouseLeave,J=i.onClick,le=i.onKeyDown,Q=i.onFocus,X=Object(oe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),de=Jt(g),G=a.useContext(Ne),_=G.prefixCls,ie=G.onItemClick,Y=G.disabled,ue=G.overflowDisabled,q=G.itemIcon,Ce=G.selectedKeys,ne=G.onActive,fe="".concat(_,"-item"),pe=a.useRef(),se=a.useRef(),H=Y||R,ce=ze(g),be=function(Ve){return{key:g,keyPath:ce,item:pe.current,domEvent:Ve}},ye=j||q,Pe=Vn(g,H,V,x),We=Pe.active,Se=Object(oe.a)(Pe,["active"]),je=Ce.includes(g),we=N(ce.length),Me=function(Ve){if(!H){var Ue=be(Ve);J==null||J(et(Ue)),ie(Ue)}},Te=function(Ve){if(le==null||le(Ve),Ve.which===Be.a.ENTER){var Ue=be(Ve);J==null||J(et(Ue)),ie(Ue)}},Ie=function(Ve){ne(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=je),a.createElement(br,Object(W.a)({ref:pe,elementRef:se,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":ue&&de?null:de},X,Se,$e,{component:"li","aria-disabled":R,style:Object(k.a)(Object(k.a)({},we),b),className:ge()(fe,(c={},Object(me.a)(c,"".concat(fe,"-active"),We),Object(me.a)(c,"".concat(fe,"-selected"),je),Object(me.a)(c,"".concat(fe,"-disabled"),H),c),O),onClick:Me,onKeyDown:Te,onFocus:Ie}),B,a.createElement(m,{props:Object(k.a)(Object(k.a)({},i),{},{isSelected:je}),icon:ye}))};function Cr(n){var i=n.eventKey,c=ee(),b=ze(i);return a.useEffect(function(){if(c)return c.registerPath(i,b),function(){c.unregisterPath(i,b)}},[b]),c?null:a.createElement(Or,n)}var Dt=Cr;function Et(n,i){return Object(pn.a)(n).map(function(c,b){if(a.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(Je.a)(i),[b]).join("-"))),a.cloneElement(c,{key:O,eventKey:O})}return c})}function nt(n){var i=a.useRef(n);i.current=n;var c=a.useCallback(function(){for(var b,O=arguments.length,g=new Array(O),R=0;R<O;R++)g[R]=arguments[R];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(g))},[]);return n?c:void 0}var Sr=function(i,c){var b=i.className,O=i.children,g=Object(oe.a)(i,["className","children"]),R=a.useContext(Ne),j=R.prefixCls,B=R.mode;return a.createElement("ul",Object(W.a)({className:ge()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(B==="inline"?"inline":"vertical"),b)},g,{"data-menu-list":!0,ref:c}),O)},xt=a.forwardRef(Sr);xt.displayName="SubMenuList";var Ht=xt,Rr=e("uciX"),zn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},fa=Qt;function Xt(n,i,c){if(i)return i;if(c)return c[n]||c.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(n){var i=n.prefixCls,c=n.visible,b=n.children,O=n.popup,g=n.popupClassName,R=n.popupOffset,j=n.disabled,B=n.mode,$=n.onVisibleChange,V=a.useContext(Ne),x=V.getPopupContainer,J=V.rtl,le=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,de=V.triggerSubMenuAction,G=V.forceSubMenuRender,_=V.motion,ie=V.defaultMotions,Y=a.useState(!1),ue=Object(L.a)(Y,2),q=ue[0],Ce=ue[1],ne=J?Object(k.a)(Object(k.a)({},jr),X):Object(k.a)(Object(k.a)({},Qt),X),fe=Pr[B],pe=Xt(B,_,ie),se=Object(k.a)(Object(k.a)({},pe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=a.useRef();return a.useEffect(function(){return H.current=Object(He.a)(function(){Ce(c)}),function(){He.a.cancel(H.current)}},[c]),a.createElement(Rr.a,{prefixCls:i,popupClassName:ge()("".concat(i,"-popup"),Object(me.a)({},"".concat(i,"-rtl"),J),g),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:x,builtinPlacements:ne,popupPlacement:fe,popupVisible:q,popup:O,popupAlign:R&&{offset:R},action:j?[]:[de],mouseEnterDelay:le,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:G,popupMotion:se},b)}var Er=e("8XRh");function Ir(n){var i=n.id,c=n.open,b=n.keyPath,O=n.children,g="inline",R=a.useContext(Ne),j=R.prefixCls,B=R.forceSubMenuRender,$=R.motion,V=R.defaultMotions,x=R.mode,J=a.useRef(!1);J.current=x===g;var le=a.useState(!J.current),Q=Object(L.a)(le,2),X=Q[0],de=Q[1],G=J.current?c:!1;a.useEffect(function(){J.current&&de(!1)},[x]);var _=Object(k.a)({},Xt(g,$,V));b.length>1&&(_.motionAppear=!1);var ie=_.onVisibleChanged;return _.onVisibleChanged=function(Y){return!J.current&&!Y&&de(!0),ie==null?void 0:ie(Y)},X?null:a.createElement(Cn,{mode:g,locked:!J.current},a.createElement(Er.default,Object(W.a)({visible:G},_,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(Y){var ue=Y.className,q=Y.style;return a.createElement(Ht,{id:i,className:ue,style:q},O)}))}var Nr=function(i){var c,b=i.style,O=i.className,g=i.title,R=i.eventKey,j=i.disabled,B=i.internalPopupClose,$=i.children,V=i.itemIcon,x=i.expandIcon,J=i.popupClassName,le=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,de=i.onMouseLeave,G=i.onTitleClick,_=i.onTitleMouseEnter,ie=i.onTitleMouseLeave,Y=Object(oe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=Jt(R),q=a.useContext(Ne),Ce=q.prefixCls,ne=q.mode,fe=q.openKeys,pe=q.disabled,se=q.overflowDisabled,H=q.activeKey,ce=q.selectedKeys,be=q.itemIcon,ye=q.expandIcon,Pe=q.onItemClick,We=q.onOpenChange,Se=q.onActive,je=a.useContext(Qe),we=je.isSubPathKey,Me=ze(),Te="".concat(Ce,"-submenu"),Ie=pe||j,$e=a.useRef(),nn=a.useRef(),Ve=V||be,Ue=x||ye,Ze=fe.includes(R),Le=!se&&Ze,En=we(ce,R),sn=Vn(R,Ie,_,ie),ke=sn.active,cn=Object(oe.a)(sn,["active"]),Sn=a.useState(!1),Rn=Object(L.a)(Sn,2),Ke=Rn[0],Xe=Rn[1],tn=function(Ye){Ie||Xe(Ye)},qe=function(Ye){tn(!0),X==null||X({key:R,domEvent:Ye})},Bn=function(Ye){tn(!1),de==null||de({key:R,domEvent:Ye})},Jn=a.useMemo(function(){return ke||(ne!=="inline"?Ke||we([H],R):!1)},[ne,ke,H,Ke,R,we]),Wn=N(Me.length),on=function(Ye){Ie||(G==null||G({key:R,domEvent:Ye}),ne==="inline"&&We(R,!Ze))},In=nt(function(_e){Q==null||Q(et(_e)),Pe(_e)}),mn=function(Ye){ne!=="inline"&&We(R,Ye)},Nn=function(){Se(R)},rn=ue&&"".concat(ue,"-popup"),ln=a.createElement("div",Object(W.a)({role:"menuitem",style:Wn,className:"".concat(Te,"-title"),tabIndex:Ie?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":se&&ue?null:ue,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":rn,"aria-disabled":Ie,onClick:on,onFocus:Nn},cn),g,a.createElement(m,{icon:ne!=="horizontal"?Ue:null,props:Object(k.a)(Object(k.a)({},i),{},{isOpen:Le,isSubMenu:!0})},a.createElement("i",{className:"".concat(Te,"-arrow")}))),Tn=a.useRef(ne);if(ne!=="inline"&&(Tn.current=Me.length>1?"vertical":ne),!se){var vn=Tn.current;ln=a.createElement(Dr,{mode:vn,prefixCls:Te,visible:!B&&Le&&ne!=="inline",popupClassName:J,popupOffset:le,popup:a.createElement(Cn,{mode:vn},a.createElement(Ht,{id:rn,ref:nn},$)),disabled:Ie,onVisibleChange:mn},ln)}return a.createElement(Cn,{onItemClick:In,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},a.createElement(p.Item,Object(W.a)({role:"none"},Y,{component:"li",style:b,className:ge()(Te,"".concat(Te,"-").concat(ne),O,(c={},Object(me.a)(c,"".concat(Te,"-open"),Le),Object(me.a)(c,"".concat(Te,"-active"),Jn),Object(me.a)(c,"".concat(Te,"-selected"),En),Object(me.a)(c,"".concat(Te,"-disabled"),Ie),c)),onMouseEnter:qe,onMouseLeave:Bn}),ln,!se&&a.createElement(Ir,{id:rn,open:Le,keyPath:Me},$)))};function Yt(n){var i=n.eventKey,c=n.children,b=ze(i),O=Et(c,b),g=ee();a.useEffect(function(){if(g)return g.registerPath(i,b),function(){g.unregisterPath(i,b)}},[b]);var R;return g?R=O:R=a.createElement(Nr,n,O),a.createElement(Ee.Provider,{value:b},R)}var Tr=e("x/xZ");function Zt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(n)){var c=n.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(c)||n.isContentEditable||c==="a"&&!!n.getAttribute("href"),O=n.getAttribute("tabindex"),g=Number(O),R=null;return O&&!Number.isNaN(g)?R=g:b&&R===null&&(R=0),b&&n.disabled&&(R=null),R!==null&&(R>=0||i&&R<0)}return!1}function kt(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(Je.a)(n.querySelectorAll("*")).filter(function(b){return Zt(b,i)});return Zt(n,i)&&c.unshift(n),c}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(n){}}function ga(n,i){if(i.keyCode===9){var c=kt(n),b=c[i.shiftKey?0:c.length-1],O=b===document.activeElement||n===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var It=Be.a.LEFT,Nt=Be.a.RIGHT,Tt=Be.a.UP,ft=Be.a.DOWN,pt=Be.a.ENTER,qt=Be.a.ESC,_t=[Tt,ft,It,Nt];function Kr(n,i,c,b){var O,g,R,j,B="prev",$="next",V="children",x="parent";if(n==="inline"&&b===pt)return{inlineTrigger:!0};var J=(O={},Object(me.a)(O,Tt,B),Object(me.a)(O,ft,$),O),le=(g={},Object(me.a)(g,It,c?$:B),Object(me.a)(g,Nt,c?B:$),Object(me.a)(g,ft,V),Object(me.a)(g,pt,V),g),Q=(R={},Object(me.a)(R,Tt,B),Object(me.a)(R,ft,$),Object(me.a)(R,pt,V),Object(me.a)(R,qt,x),Object(me.a)(R,It,c?V:x),Object(me.a)(R,Nt,c?x:V),R),X={inline:J,horizontal:le,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},de=(j=X["".concat(n).concat(i?"":"Sub")])===null||j===void 0?void 0:j[b];switch(de){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case x:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Mr(n){for(var i=n;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ar(n,i){for(var c=n||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function wr(n,i){var c=kt(n,!0);return c.filter(function(b){return i.has(b)})}function er(n,i,c){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var O=wr(n,i),g=O.length,R=O.findIndex(function(j){return c===j});return b<0?R===-1?R=g-1:R-=1:b>0&&(R+=1),R=(R+g)%g,O[R]}function Fr(n,i,c,b,O,g,R,j,B,$){var V=a.useRef(),x=a.useRef();x.current=i;var J=function(){He.a.cancel(V.current)};return a.useEffect(function(){return function(){J()}},[]),function(le){var Q=le.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,de,G,_=function(){X=new Set,de=new Map,G=new Map;var be=g();return be.forEach(function(ye){var Pe=document.querySelector("[data-menu-id='".concat(Gt(b,ye),"']"));Pe&&(X.add(Pe),G.set(Pe,ye),de.set(ye,Pe))}),X};_();var ie=de.get(i),Y=Ar(ie,X),ue=G.get(Y),q=Kr(n,R(ue,!0).length===1,c,Q);if(!q)return;_t.includes(Q)&&le.preventDefault();var Ce=function(be){if(be){var ye=be,Pe=be.querySelector("a");(Pe==null?void 0:Pe.getAttribute("href"))&&(ye=Pe);var We=G.get(be);j(We),J(),V.current=Object(He.a)(function(){x.current===We&&ye.focus()})}};if(q.sibling||!Y){var ne;!Y||n==="inline"?ne=O.current:ne=Mr(Y);var fe=er(ne,X,Y,q.offset);Ce(fe)}else if(q.inlineTrigger)B(ue);else if(q.offset>0)B(ue,!0),J(),V.current=Object(He.a)(function(){_();var ce=Y.getAttribute("aria-controls"),be=document.getElementById(ce),ye=er(be,X);Ce(ye)},5);else if(q.offset<0){var pe=R(ue,!0),se=pe[pe.length-2],H=de.get(se);B(se,!1),Ce(H)}}$==null||$(le)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(n){var i=Object(en.a)(n,{value:n}),c=Object(L.a)(i,2),b=c[0],O=c[1];return a.useEffect(function(){nr+=1;var g="".concat(Br,"-").concat(nr);O("rc-menu-uuid-".concat(g))},[]),b}var ya=e("p8sG");function Lr(n){Promise.resolve().then(n)}var Kt="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(Kt)},$r=function(i){return i.split(Kt)},Mt="rc-menu-more";function Vr(){var n=a.useState({}),i=Object(L.a)(n,2),c=i[1],b=Object(a.useRef)(new Map),O=Object(a.useRef)(new Map),g=a.useState([]),R=Object(L.a)(g,2),j=R[0],B=R[1],$=Object(a.useRef)(0),V=Object(a.useCallback)(function(G,_){var ie=tr(_);O.current.set(ie,G),b.current.set(G,ie),$.current+=1;var Y=$.current;Lr(function(){Y===$.current&&c({})})},[]),x=Object(a.useCallback)(function(G,_){var ie=tr(_);O.current.delete(ie),b.current.delete(G)},[]),J=Object(a.useCallback)(function(G){B(G)},[]),le=Object(a.useCallback)(function(G,_){var ie=b.current.get(G)||"",Y=$r(ie);return _&&j.includes(Y[0])&&Y.unshift(Mt),Y},[j]),Q=Object(a.useCallback)(function(G,_){return G.some(function(ie){var Y=le(ie,!0);return Y.includes(_)})},[le]),X=function(){var _=Object(Je.a)(b.current.keys());return j.length&&_.push(Mt),_},de=Object(a.useCallback)(function(G){var _="".concat(b.current.get(G)).concat(Kt),ie=new Set;return Object(Je.a)(O.current.keys()).forEach(function(Y){Y.startsWith(_)&&ie.add(O.current.get(Y))}),ie},[]);return{registerPath:V,unregisterPath:x,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:le,getKeys:X,getSubPathKeys:de}}var vt=[],zr=function(i){var c,b,O=i.prefixCls,g=O===void 0?"rc-menu":O,R=i.style,j=i.className,B=i.tabIndex,$=B===void 0?0:B,V=i.children,x=i.direction,J=i.id,le=i.mode,Q=le===void 0?"vertical":le,X=i.inlineCollapsed,de=i.disabled,G=i.disabledOverflow,_=i.subMenuOpenDelay,ie=_===void 0?.1:_,Y=i.subMenuCloseDelay,ue=Y===void 0?.1:Y,q=i.forceSubMenuRender,Ce=i.defaultOpenKeys,ne=i.openKeys,fe=i.activeKey,pe=i.defaultActiveFirst,se=i.selectable,H=se===void 0?!0:se,ce=i.multiple,be=ce===void 0?!1:ce,ye=i.defaultSelectedKeys,Pe=i.selectedKeys,We=i.onSelect,Se=i.onDeselect,je=i.inlineIndent,we=je===void 0?24:je,Me=i.motion,Te=i.defaultMotions,Ie=i.triggerSubMenuAction,$e=Ie===void 0?"hover":Ie,nn=i.builtinPlacements,Ve=i.itemIcon,Ue=i.expandIcon,Ze=i.overflowedIndicator,Le=Ze===void 0?"...":Ze,En=i.getPopupContainer,sn=i.onClick,ke=i.onOpenChange,cn=i.onKeyDown,Sn=i.openAnimation,Rn=i.openTransitionName,Ke=Object(oe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Xe=Et(V,vt),tn=a.useState(!1),qe=Object(L.a)(tn,2),Bn=qe[0],Jn=qe[1],Wn=a.useRef(),on=Wr(J),In=x==="rtl",mn=a.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),Nn=Object(L.a)(mn,2),rn=Nn[0],ln=Nn[1],Tn=a.useState(0),vn=Object(L.a)(Tn,2),_e=vn[0],Ye=vn[1],xn=_e>=Xe.length-1||rn!=="horizontal"||G,Hn=Object(en.a)(Ce,{value:ne,postState:function(Z){return Z||vt}}),tt=Object(L.a)(Hn,2),jn=tt[0],bn=tt[1],Qn=a.useState(jn),Pn=Object(L.a)(Qn,2),hn=Pn[0],Xn=Pn[1],Kn=rn==="inline",Yn=a.useRef(!1);a.useEffect(function(){Kn&&Xn(jn)},[jn]),a.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(Kn)bn(hn);else{var re=[];bn(re),ke==null||ke(re)}},[Kn]);var fn=Vr(),Mn=fn.registerPath,he=fn.unregisterPath,De=fn.refreshOverflowKeys,Fe=fn.isSubPathKey,an=fn.getKeyPath,Zn=fn.getKeys,gt=fn.getSubPathKeys,Bt=a.useMemo(function(){return{registerPath:Mn,unregisterPath:he}},[Mn,he]),Wt=a.useMemo(function(){return{isSubPathKey:Fe}},[Fe]);a.useEffect(function(){De(xn?vt:Xe.slice(_e+1).map(function(re){return re.key}))},[_e,xn]);var Lt=Object(en.a)(fe||pe&&((c=Xe[0])===null||c===void 0?void 0:c.key),{value:fe}),rt=Object(L.a)(Lt,2),yt=rt[0],st=rt[1],bt=nt(function(re){st(re)}),$t=nt(function(){st(void 0)}),Ot=Object(en.a)(ye||[],{value:Pe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(Ot,2),at=Ct[0],An=Ct[1],St=function(Z){if(!!H){var Re=Z.key,xe=at.includes(Re),un;xe?un=at.filter(function(qn){return qn!==Re}):be?un=[].concat(Object(Je.a)(at),[Re]):un=[Re],An(un);var Un=Object(k.a)(Object(k.a)({},Z),{},{selectedKeys:un});xe?Se==null||Se(Un):We==null||We(Un)}},Rt=nt(function(re){sn==null||sn(et(re)),St(re)}),ot=nt(function(re,Z){var Re=jn.filter(function(un){return un!==re});if(Z)Re.push(re);else if(rn!=="inline"){var xe=gt(re);Re=Re.filter(function(un){return!xe.has(un)})}d()(jn,Re)||(bn(Re),ke==null||ke(Re))}),kn=nt(En),lt=function(Z,Re){var xe=Re!=null?Re:!jn.includes(Z);ot(Z,xe)},ut=Fr(rn,yt,In,on,Wn,Zn,an,st,lt,cn);a.useEffect(function(){Jn(!0)},[]);var jt=rn!=="horizontal"||G?Xe:Xe.map(function(re,Z){return a.createElement(Cn,{key:re.key,overflowDisabled:Z>_e},re)}),Pt=a.createElement(p,Object(W.a)({id:J,ref:Wn,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Dt,className:ge()(g,"".concat(g,"-root"),"".concat(g,"-").concat(rn),j,(b={},Object(me.a)(b,"".concat(g,"-inline-collapsed"),ln),Object(me.a)(b,"".concat(g,"-rtl"),In),b)),dir:x,style:R,role:"menu",tabIndex:$,data:jt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Re=Z.length,xe=Re?Xe.slice(-Re):null;return a.createElement(Yt,{eventKey:Mt,title:Le,disabled:xn,internalPopupClose:Re===0},xe)},maxCount:rn!=="horizontal"||G?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Ye(Z)},onKeyDown:ut},Ke));return a.createElement(Ut.Provider,{value:on},a.createElement(Cn,{prefixCls:g,mode:rn,openKeys:jn,rtl:In,disabled:de,motion:Bn?Me:null,defaultMotions:Bn?Te:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:we,subMenuOpenDelay:ie,subMenuCloseDelay:ue,forceSubMenuRender:q,builtinPlacements:nn,triggerSubMenuAction:$e,getPopupContainer:kn,itemIcon:Ve,expandIcon:Ue,onItemClick:Rt,onOpenChange:ot},a.createElement(Qe.Provider,{value:Wt},Pt),a.createElement(ve.Provider,{value:Bt},Xe)))},Ur=zr,Gr=function(i){var c=i.className,b=i.title,O=i.eventKey,g=i.children,R=Object(oe.a)(i,["className","title","eventKey","children"]),j=a.useContext(Ne),B=j.prefixCls,$="".concat(B,"-item-group");return a.createElement("li",Object(W.a)({},R,{onClick:function(x){return x.stopPropagation()},className:ge()($,c)}),a.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),a.createElement("ul",{className:"".concat($,"-list")},g))};function Jr(n){var i=n.children,c=Object(oe.a)(n,["children"]),b=ze(c.eventKey),O=Et(i,b),g=ee();return g?O:a.createElement(Gr,c,O)}function xr(n){var i=n.className,c=n.style,b=a.useContext(Ne),O=b.prefixCls,g=ee();return g?null:a.createElement("li",{className:ge()("".concat(O,"-item-divider"),i),style:c})}var it=Ur;it.Item=Dt,it.SubMenu=Yt,it.ItemGroup=Jr,it.Divider=xr;var Hr=it,Qr=e("eDIo");function Xr(n,i){var c=n.prefixCls,b=n.editable,O=n.locale,g=n.style;return!b||b.showAdd===!1?null:a.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(j){b.onEdit("add",{event:j})}},b.addIcon||"+")}var rr=a.forwardRef(Xr);function Yr(n,i){var c=n.prefixCls,b=n.id,O=n.tabs,g=n.locale,R=n.mobile,j=n.moreIcon,B=j===void 0?"More":j,$=n.moreTransitionName,V=n.style,x=n.className,J=n.editable,le=n.tabBarGutter,Q=n.rtl,X=n.onTabClick,de=Object(a.useState)(!1),G=Object(L.a)(de,2),_=G[0],ie=G[1],Y=Object(a.useState)(null),ue=Object(L.a)(Y,2),q=ue[0],Ce=ue[1],ne="".concat(b,"-more-popup"),fe="".concat(c,"-dropdown"),pe=q!==null?"".concat(ne,"-").concat(q):null,se=g==null?void 0:g.dropdownAriaLabel,H=a.createElement(Hr,{onClick:function(je){var we=je.key,Me=je.domEvent;X(we,Me),ie(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[q],"aria-label":se!==void 0?se:"expanded dropdown"},O.map(function(Se){return a.createElement(Dt,{key:Se.key,id:"".concat(ne,"-").concat(Se.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Se.key),disabled:Se.disabled},Se.tab)}));function ce(Se){for(var je=O.filter(function($e){return!$e.disabled}),we=je.findIndex(function($e){return $e.key===q})||0,Me=je.length,Te=0;Te<Me;Te+=1){we=(we+Se+Me)%Me;var Ie=je[we];if(!Ie.disabled){Ce(Ie.key);return}}}function be(Se){var je=Se.which;if(!_){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(je)&&(ie(!0),Se.preventDefault());return}switch(je){case Be.a.UP:ce(-1),Se.preventDefault();break;case Be.a.DOWN:ce(1),Se.preventDefault();break;case Be.a.ESC:ie(!1);break;case Be.a.SPACE:case Be.a.ENTER:q!==null&&X(q,Se);break}}Object(a.useEffect)(function(){var Se=document.getElementById(pe);Se&&Se.scrollIntoView&&Se.scrollIntoView(!1)},[q]),Object(a.useEffect)(function(){_||Ce(null)},[_]);var ye=Object(me.a)({},Q?"marginLeft":"marginRight",le);O.length||(ye.visibility="hidden",ye.order=1);var Pe=ge()(Object(me.a)({},"".concat(fe,"-rtl"),Q)),We=R?null:a.createElement(Qr.default,{prefixCls:fe,overlay:H,trigger:["hover"],visible:_,transitionName:$,onVisibleChange:ie,overlayClassName:Pe,mouseEnterDelay:.1,mouseLeaveDelay:.1},a.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:ye,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(b,"-more"),"aria-expanded":_,onKeyDown:be},B));return a.createElement("div",{className:ge()("".concat(c,"-nav-operations"),x),style:V,ref:i},We,a.createElement(rr,{prefixCls:c,locale:g,editable:J}))}var Zr=a.forwardRef(Yr),At=Object(a.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(n,i){var c=Object(a.useState)(),b=Object(L.a)(c,2),O=b[0],g=b[1],R=Object(a.useState)(0),j=Object(L.a)(R,2),B=j[0],$=j[1],V=Object(a.useState)(0),x=Object(L.a)(V,2),J=x[0],le=x[1],Q=Object(a.useState)(),X=Object(L.a)(Q,2),de=X[0],G=X[1],_=Object(a.useRef)();function ie(fe){var pe=fe.touches[0],se=pe.screenX,H=pe.screenY;g({x:se,y:H}),window.clearInterval(_.current)}function Y(fe){if(!!O){fe.preventDefault();var pe=fe.touches[0],se=pe.screenX,H=pe.screenY;g({x:se,y:H});var ce=se-O.x,be=H-O.y;i(ce,be);var ye=Date.now();$(ye),le(ye-B),G({x:ce,y:be})}}function ue(){if(!!O&&(g(null),G(null),de)){var fe=de.x/J,pe=de.y/J,se=Math.abs(fe),H=Math.abs(pe);if(Math.max(se,H)<kr)return;var ce=fe,be=pe;_.current=window.setInterval(function(){if(Math.abs(ce)<ar&&Math.abs(be)<ar){window.clearInterval(_.current);return}ce*=ir,be*=ir,i(ce*ht,be*ht)},ht)}}var q=Object(a.useRef)();function Ce(fe){var pe=fe.deltaX,se=fe.deltaY,H=0,ce=Math.abs(pe),be=Math.abs(se);ce===be?H=q.current==="x"?pe:se:ce>be?(H=pe,q.current="x"):(H=se,q.current="y"),i(-H,-H)&&fe.preventDefault()}var ne=Object(a.useRef)(null);ne.current={onTouchStart:ie,onTouchMove:Y,onTouchEnd:ue,onWheel:Ce},a.useEffect(function(){function fe(ce){ne.current.onTouchStart(ce)}function pe(ce){ne.current.onTouchMove(ce)}function se(ce){ne.current.onTouchEnd(ce)}function H(ce){ne.current.onWheel(ce)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",se,{passive:!1}),n.current.addEventListener("touchstart",fe,{passive:!1}),n.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",se)}},[])}function _r(){var n=Object(a.useRef)(new Map);function i(b){return n.current.has(b)||n.current.set(b,a.createRef()),n.current.get(b)}function c(b){n.current.delete(b)}return[i,c]}function sr(n,i){var c=a.useRef(n),b=a.useState({}),O=Object(L.a)(b,2),g=O[1];function R(j){var B=typeof j=="function"?j(c.current):j;B!==c.current&&i(B,c.current),c.current=B,g({})}return[c.current,R]}var or=function(i){var c=i.position,b=i.prefixCls,O=i.extra;if(!O)return null;var g,R=O;return c==="right"&&(g=R.right||!R.left&&R||null),c==="left"&&(g=R.left||null),g?a.createElement("div",{className:"".concat(b,"-extra-content")},g):null};function ea(n,i){var c,b=a.useContext(At),O=b.prefixCls,g=b.tabs,R=n.className,j=n.style,B=n.id,$=n.animated,V=n.activeKey,x=n.rtl,J=n.extra,le=n.editable,Q=n.locale,X=n.tabPosition,de=n.tabBarGutter,G=n.children,_=n.onTabClick,ie=n.onTabScroll,Y=Object(a.useRef)(),ue=Object(a.useRef)(),q=Object(a.useRef)(),Ce=Object(a.useRef)(),ne=_r(),fe=Object(L.a)(ne,2),pe=fe[0],se=fe[1],H=X==="top"||X==="bottom",ce=sr(0,function(re,Z){H&&ie&&ie({direction:re>Z?"left":"right"})}),be=Object(L.a)(ce,2),ye=be[0],Pe=be[1],We=sr(0,function(re,Z){!H&&ie&&ie({direction:re>Z?"top":"bottom"})}),Se=Object(L.a)(We,2),je=Se[0],we=Se[1],Me=Object(a.useState)(0),Te=Object(L.a)(Me,2),Ie=Te[0],$e=Te[1],nn=Object(a.useState)(0),Ve=Object(L.a)(nn,2),Ue=Ve[0],Ze=Ve[1],Le=Object(a.useState)(0),En=Object(L.a)(Le,2),sn=En[0],ke=En[1],cn=Object(a.useState)(0),Sn=Object(L.a)(cn,2),Rn=Sn[0],Ke=Sn[1],Xe=Object(a.useState)(null),tn=Object(L.a)(Xe,2),qe=tn[0],Bn=tn[1],Jn=Object(a.useState)(null),Wn=Object(L.a)(Jn,2),on=Wn[0],In=Wn[1],mn=Object(a.useState)(0),Nn=Object(L.a)(mn,2),rn=Nn[0],ln=Nn[1],Tn=Object(a.useState)(0),vn=Object(L.a)(Tn,2),_e=vn[0],Ye=vn[1],xn=Dn(new Map),Hn=Object(L.a)(xn,2),tt=Hn[0],jn=Hn[1],bn=ct(g,tt,Ie),Qn="".concat(O,"-nav-operations-hidden"),Pn=0,hn=0;H?x?(Pn=0,hn=Math.max(0,Ie-qe)):(Pn=Math.min(0,qe-Ie),hn=0):(Pn=Math.min(0,on-Ue),hn=0);function Xn(re){return re<Pn?Pn:re>hn?hn:re}var Kn=Object(a.useRef)(),Yn=Object(a.useState)(),fn=Object(L.a)(Yn,2),Mn=fn[0],he=fn[1];function De(){he(Date.now())}function Fe(){window.clearTimeout(Kn.current)}qr(Y,function(re,Z){function Re(xe,un){xe(function(Un){var qn=Xn(Un+un);return qn})}if(H){if(qe>=Ie)return!1;Re(Pe,re)}else{if(on>=Ue)return!1;Re(we,Z)}return Fe(),De(),!0}),Object(a.useEffect)(function(){return Fe(),Mn&&(Kn.current=window.setTimeout(function(){he(0)},100)),Fe},[Mn]);function an(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=bn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(H){var Re=ye;x?Z.right<ye?Re=Z.right:Z.right+Z.width>ye+qe&&(Re=Z.right+Z.width-qe):Z.left<-ye?Re=-Z.left:Z.left+Z.width>-ye+qe&&(Re=-(Z.left+Z.width-qe)),we(0),Pe(Xn(Re))}else{var xe=je;Z.top<-je?xe=-Z.top:Z.top+Z.height>-je+on&&(xe=-(Z.top+Z.height-on)),Pe(0),we(Xn(xe))}}var Zn=I(bn,{width:qe,height:on,left:ye,top:je},{width:sn,height:Rn},{width:rn,height:_e},Object(k.a)(Object(k.a)({},n),{},{tabs:g})),gt=Object(L.a)(Zn,2),Bt=gt[0],Wt=gt[1],Lt=g.map(function(re){var Z=re.key;return a.createElement($n,{id:B,prefixCls:O,key:Z,rtl:x,tab:re,closable:re.closable,editable:le,active:Z===V,tabPosition:X,tabBarGutter:de,renderWrapper:G,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:pe(Z),onClick:function(xe){_(Z,xe)},onRemove:function(){se(Z)},onFocus:function(){an(Z),De(),x||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),rt=Fn(function(){var re,Z,Re,xe,un,Un,qn,Vt,zt,la=((re=Y.current)===null||re===void 0?void 0:re.offsetWidth)||0,ua=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,mr=((Re=Ce.current)===null||Re===void 0?void 0:Re.offsetWidth)||0,fr=((xe=Ce.current)===null||xe===void 0?void 0:xe.offsetHeight)||0,da=((un=q.current)===null||un===void 0?void 0:un.offsetWidth)||0,ca=((Un=q.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Bn(la),In(ua),ln(mr),Ye(fr);var pr=(((qn=ue.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-mr,vr=(((Vt=ue.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Ze(vr);var hr=(zt=q.current)===null||zt===void 0?void 0:zt.className.includes(Qn);ke(pr-(hr?0:da)),Ke(vr-(hr?0:ca)),jn(function(){var gr=new Map;return g.forEach(function(ma){var yr=ma.key,dt=pe(yr).current;dt&&gr.set(yr,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),gr})}),yt=g.slice(0,Bt),st=g.slice(Wt+1),bt=[].concat(Object(Je.a)(yt),Object(Je.a)(st)),$t=Object(a.useState)(),Ot=Object(L.a)($t,2),Ct=Ot[0],at=Ot[1],An=bn.get(V),St=Object(a.useRef)();function Rt(){He.a.cancel(St.current)}Object(a.useEffect)(function(){var re={};return An&&(H?(x?re.right=An.right:re.left=An.left,re.width=An.width):(re.top=An.top,re.height=An.height)),Rt(),St.current=Object(He.a)(function(){at(re)}),Rt},[An,H,x]),Object(a.useEffect)(function(){an()},[V,An,bn,H]),Object(a.useEffect)(function(){rt()},[x,de,V,g.map(function(re){return re.key}).join("_")]);var ot=!!bt.length,kn="".concat(O,"-nav-wrap"),lt,ut,jt,Pt;return H?x?(ut=ye>0,lt=ye+qe<Ie):(lt=ye<0,ut=-ye+qe<Ie):(jt=je<0,Pt=-je+on<Ue),a.createElement("div",{ref:i,role:"tablist",className:ge()("".concat(O,"-nav"),R),style:j,onKeyDown:function(){De()}},a.createElement(or,{position:"left",extra:J,prefixCls:O}),a.createElement(Ln.default,{onResize:rt},a.createElement("div",{className:ge()(kn,(c={},Object(me.a)(c,"".concat(kn,"-ping-left"),lt),Object(me.a)(c,"".concat(kn,"-ping-right"),ut),Object(me.a)(c,"".concat(kn,"-ping-top"),jt),Object(me.a)(c,"".concat(kn,"-ping-bottom"),Pt),c)),ref:Y},a.createElement(Ln.default,{onResize:rt},a.createElement("div",{ref:ue,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ye,"px, ").concat(je,"px)"),transition:Mn?"none":void 0}},Lt,a.createElement(rr,{ref:Ce,prefixCls:O,locale:Q,editable:le,style:{visibility:ot?"hidden":null}}),a.createElement("div",{className:ge()("".concat(O,"-ink-bar"),Object(me.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),a.createElement(Zr,Object(W.a)({},n,{ref:q,prefixCls:O,tabs:bt,className:!ot&&Qn})),a.createElement(or,{position:"right",extra:J,prefixCls:O}))}var lr=a.forwardRef(ea);function na(n){var i=n.id,c=n.activeKey,b=n.animated,O=n.tabPosition,g=n.rtl,R=n.destroyInactiveTabPane,j=a.useContext(At),B=j.prefixCls,$=j.tabs,V=b.tabPane,x=$.findIndex(function(J){return J.key===c});return a.createElement("div",{className:ge()("".concat(B,"-content-holder"))},a.createElement("div",{className:ge()("".concat(B,"-content"),"".concat(B,"-content-").concat(O),Object(me.a)({},"".concat(B,"-content-animated"),V)),style:x&&V?Object(me.a)({},g?"marginRight":"marginLeft","-".concat(x,"00%")):null},$.map(function(J){return a.cloneElement(J.node,{key:J.key,prefixCls:B,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:R})})))}function ur(n){var i=n.prefixCls,c=n.forceRender,b=n.className,O=n.style,g=n.id,R=n.active,j=n.animated,B=n.destroyInactiveTabPane,$=n.tabKey,V=n.children,x=a.useState(c),J=Object(L.a)(x,2),le=J[0],Q=J[1];a.useEffect(function(){R?Q(!0):B&&Q(!1)},[R,B]);var X={};return R||(j?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),a.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!R,style:Object(k.a)(Object(k.a)({},X),O),className:ge()("".concat(i,"-tabpane"),R&&"".concat(i,"-tabpane-active"),b)},(R||le||c)&&V)}var dr=0;function ta(n){return Object(pn.a)(n).map(function(i){if(a.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(k.a)(Object(k.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(n,i){var c,b=n.id,O=n.prefixCls,g=O===void 0?"rc-tabs":O,R=n.className,j=n.children,B=n.direction,$=n.activeKey,V=n.defaultActiveKey,x=n.editable,J=n.animated,le=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=n.tabPosition,X=Q===void 0?"top":Q,de=n.tabBarGutter,G=n.tabBarStyle,_=n.tabBarExtraContent,ie=n.locale,Y=n.moreIcon,ue=n.moreTransitionName,q=n.destroyInactiveTabPane,Ce=n.renderTabBar,ne=n.onChange,fe=n.onTabClick,pe=n.onTabScroll,se=Object(oe.a)(n,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(j),ce=B==="rtl",be;le===!1?be={inkBar:!1,tabPane:!1}:le===!0?be={inkBar:!0,tabPane:!0}:be=Object(k.a)({inkBar:!0,tabPane:!1},Object(dn.a)(le)==="object"?le:{});var ye=Object(a.useState)(!1),Pe=Object(L.a)(ye,2),We=Pe[0],Se=Pe[1];Object(a.useEffect)(function(){Se(Object(On.a)())},[]);var je=Object(en.a)(function(){var Ke;return(Ke=H[0])===null||Ke===void 0?void 0:Ke.key},{value:$,defaultValue:V}),we=Object(L.a)(je,2),Me=we[0],Te=we[1],Ie=Object(a.useState)(function(){return H.findIndex(function(Ke){return Ke.key===Me})}),$e=Object(L.a)(Ie,2),nn=$e[0],Ve=$e[1];Object(a.useEffect)(function(){var Ke=H.findIndex(function(tn){return tn.key===Me});if(Ke===-1){var Xe;Ke=Math.max(0,Math.min(nn,H.length-1)),Te((Xe=H[Ke])===null||Xe===void 0?void 0:Xe.key)}Ve(Ke)},[H.map(function(Ke){return Ke.key}).join("_"),Me,nn]);var Ue=Object(en.a)(null,{value:b}),Ze=Object(L.a)(Ue,2),Le=Ze[0],En=Ze[1],sn=X;We&&!["left","right"].includes(X)&&(sn="top"),Object(a.useEffect)(function(){b||(En("rc-tabs-".concat(dr)),dr+=1)},[]);function ke(Ke,Xe){fe==null||fe(Ke,Xe),Te(Ke),ne==null||ne(Ke)}var cn={id:Le,activeKey:Me,animated:be,tabPosition:sn,rtl:ce,mobile:We},Sn,Rn=Object(k.a)(Object(k.a)({},cn),{},{editable:x,locale:ie,moreIcon:Y,moreTransitionName:ue,tabBarGutter:de,onTabClick:ke,onTabScroll:pe,extra:_,style:G,panes:j});return Ce?Sn=Ce(Rn,lr):Sn=a.createElement(lr,Rn),a.createElement(At.Provider,{value:{tabs:H,prefixCls:g}},a.createElement("div",Object(W.a)({ref:i,id:b,className:ge()(g,"".concat(g,"-").concat(sn),(c={},Object(me.a)(c,"".concat(g,"-mobile"),We),Object(me.a)(c,"".concat(g,"-editable"),x),Object(me.a)(c,"".concat(g,"-rtl"),ce),c),R)},se),Sn,a.createElement(na,Object(W.a)({destroyInactiveTabPane:q},cn,{animated:be}))))}var cr=a.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,wt=e("MZF8"),yn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function Ft(n,i){var c,b=(c=n.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return b||(b=i.tsx?"tsx":"jsx"),b}var oa=n=>{var i,c,b,O=Object(a.useRef)(),g=Object(a.useContext)(yn.context),R=g.locale,j=Object(yn.useLocaleProps)(R,n),B=Object(yn.useDemoUrl)(j.identifier),$=j.demoUrl||B,V=(wt.a===null||wt.a===void 0?void 0:wt.a.location.hash)==="#".concat(j.identifier),x=Object.keys(j.sources).length===1,J=Object(yn.useCodeSandbox)((i=j.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:j),le=Object(yn.useRiddle)((c=j.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:j),Q=Object(yn.useMotions)(j.motions||[],O.current),X=Object(U.default)(Q,2),de=X[0],G=X[1],_=Object(yn.useCopy)(),ie=Object(U.default)(_,2),Y=ie[0],ue=ie[1],q=Object(a.useState)("_"),Ce=Object(U.default)(q,2),ne=Ce[0],fe=Ce[1],pe=Object(a.useState)(Ft(ne,j.sources[ne])),se=Object(U.default)(pe,2),H=se[0],ce=se[1],be=Object(a.useState)(Boolean(j.defaultShowCode)),ye=Object(U.default)(be,2),Pe=ye[0],We=ye[1],Se=Object(a.useState)(Math.random()),je=Object(U.default)(Se,2),we=je[0],Me=je[1],Te=j.sources[ne][H]||j.sources[ne].content,Ie=Object(yn.useTSPlaygroundUrl)(R,Te),$e=Object(a.useRef)(),nn=Object(yn.usePrefersColor)(),Ve=Object(U.default)(nn,1),Ue=Ve[0];Object(a.useEffect)(()=>{Me(Math.random())},[Ue]);function Ze(Le){fe(Le),ce(Ft(Le,j.sources[Le]))}return C.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:we,src:$,ref:$e}):j.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&C.a.createElement(yn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),le&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:le}),j.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:G,onClick:()=>de()}),j.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Me(Math.random())}),!((b=j.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&C.a.createElement(yn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>Y(Te)}),H==="tsx"&&Pe&&C.a.createElement(yn.Link,{target:"_blank",to:Ie},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Pe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Pe)})),Pe&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!x&&C.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Ze},Object.keys(j.sources).map(Le=>C.a.createElement(ur,{tab:Le==="_"?"index.".concat(Ft(Le,j.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sa.a,{code:Te,lang:H,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(wn,gn,e){"use strict";(function(U){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var a=e("MgzW"),C=e("q1tI"),W=e("i8i4"),me=e("QCnb");function L(m){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+m,w=1;w<arguments.length;w++)N+="&args[]="+encodeURIComponent(arguments[w]);return"Minified React error #"+m+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dn=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;dn.hasOwnProperty("ReactCurrentDispatcher")||(dn.ReactCurrentDispatcher={current:null}),dn.hasOwnProperty("ReactCurrentBatchConfig")||(dn.ReactCurrentBatchConfig={suspense:null});function oe(m){var N=m,w=m;if(m.alternate)for(;N.return;)N=N.return;else{m=N;do N=m,(N.effectTag&1026)!=0&&(w=N.return),m=N.return;while(m)}return N.tag===3?w:null}function k(m){if(oe(m)!==m)throw Error(L(188))}function Ge(m){var N=m.alternate;if(!N){if(N=oe(m),N===null)throw Error(L(188));return N!==m?null:m}for(var w=m,ve=N;;){var ee=w.return;if(ee===null)break;var Ee=ee.alternate;if(Ee===null){if(ve=ee.return,ve!==null){w=ve;continue}break}if(ee.child===Ee.child){for(Ee=ee.child;Ee;){if(Ee===w)return k(ee),m;if(Ee===ve)return k(ee),N;Ee=Ee.sibling}throw Error(L(188))}if(w.return!==ve.return)w=ee,ve=Ee;else{for(var ze=!1,Qe=ee.child;Qe;){if(Qe===w){ze=!0,w=ee,ve=Ee;break}if(Qe===ve){ze=!0,ve=ee,w=Ee;break}Qe=Qe.sibling}if(!ze){for(Qe=Ee.child;Qe;){if(Qe===w){ze=!0,w=Ee,ve=ee;break}if(Qe===ve){ze=!0,ve=Ee,w=ee;break}Qe=Qe.sibling}if(!ze)throw Error(L(189))}}if(w.alternate!==ve)throw Error(L(190))}if(w.tag!==3)throw Error(L(188));return w.stateNode.current===w?m:N}function ge(){return!0}function pn(){return!1}function On(m,N,w,ve){this.dispatchConfig=m,this._targetInst=N,this.nativeEvent=w,m=this.constructor.Interface;for(var ee in m)m.hasOwnProperty(ee)&&((N=m[ee])?this[ee]=N(w):ee==="target"?this.target=ve:this[ee]=w[ee]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?ge:pn,this.isPropagationStopped=pn,this}a(On.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=ge)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=ge)},persist:function(){this.isPersistent=ge},isPersistent:pn,destructor:function(){var m=this.constructor.Interface,N;for(N in m)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=pn,this._dispatchInstances=this._dispatchListeners=null}}),On.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},On.extend=function(m){function N(){}function w(){return ve.apply(this,arguments)}var ve=this;N.prototype=ve.prototype;var ee=new N;return a(ee,w.prototype),w.prototype=ee,w.prototype.constructor=w,w.Interface=a({},ve.Interface,m),w.extend=ve.extend,He(w),w},He(On);function en(m,N,w,ve){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,m,N,w,ve),ee}return new this(m,N,w,ve)}function Je(m){if(!(m instanceof this))throw Error(L(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function He(m){m.eventPool=[],m.getPooled=en,m.release=Je}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Fn(m,N){var w={};return w[m.toLowerCase()]=N.toLowerCase(),w["Webkit"+m]="webkit"+N,w["Moz"+m]="moz"+N,w}var Dn={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionend:Fn("Transition","TransitionEnd")},Be={},Gn={};Ln&&(Gn=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function $n(m){if(Be[m])return Be[m];if(!Dn[m])return m;var N=Dn[m],w;for(w in N)if(N.hasOwnProperty(w)&&w in Gn)return Be[m]=N[w];return m}var _n=$n("animationend"),ct=$n("animationiteration"),D=$n("animationstart"),I=$n("transitionend"),P=null;function d(m){if(P===null)try{var N=("require"+Math.random()).slice(0,7);P=(U&&U[N])("timers").setImmediate}catch(w){P=function(ve){var ee=new MessageChannel;ee.port1.onmessage=ve,ee.port2.postMessage(void 0)}}return P(m)}var o=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=o[11],y=o[12],S=W.unstable_batchedUpdates,t=dn.IsSomeRendererActing,l=typeof me.unstable_flushAllWithoutAsserting=="function",s=me.unstable_flushAllWithoutAsserting||function(){for(var m=!1;v();)m=!0;return m};function M(m){try{s(),d(function(){s()?M(m):m()})}catch(N){m(N)}}var T=0,E=!1,u=W.findDOMNode,K=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=K[0],r=K[4],h=K[5],p=K[6],A=K[7],F=K[8],z=K[9],te=K[10];function ae(){}function Oe(m,N){if(!m)return[];if(m=Ge(m),!m)return[];for(var w=m,ve=[];;){if(w.tag===5||w.tag===6||w.tag===1||w.tag===0){var ee=w.stateNode;N(ee)&&ve.push(ee)}if(w.child)w.child.return=w,w=w.child;else{if(w===m)return ve;for(;!w.sibling;){if(!w.return||w.return===m)return ve;w=w.return}w.sibling.return=w.return,w=w.sibling}}}function Ne(m,N){if(m&&!m._reactInternalFiber){var w=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":w==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":w,Error(L(286,N,m))}}var Ae={renderIntoDocument:function(m){var N=document.createElement("div");return W.render(m,N)},isElement:function(m){return C.isValidElement(m)},isElementOfType:function(m,N){return C.isValidElement(m)&&m.type===N},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&C.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Ae.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,N){return Ae.isCompositeComponent(m)?m._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(m,N){return Ne(m,"findAllInRenderedTree"),m?Oe(m._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(m,N){return Ne(m,"scryRenderedDOMComponentsWithClass"),Ae.findAllInRenderedTree(m,function(w){if(Ae.isDOMComponent(w)){var ve=w.className;typeof ve!="string"&&(ve=w.getAttribute("class")||"");var ee=ve.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(L(11));N=N.split(/\s+/)}return N.every(function(Ee){return ee.indexOf(Ee)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,N){if(Ne(m,"findRenderedDOMComponentWithClass"),m=Ae.scryRenderedDOMComponentsWithClass(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+N);return m[0]},scryRenderedDOMComponentsWithTag:function(m,N){return Ne(m,"scryRenderedDOMComponentsWithTag"),Ae.findAllInRenderedTree(m,function(w){return Ae.isDOMComponent(w)&&w.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,N){if(Ne(m,"findRenderedDOMComponentWithTag"),m=Ae.scryRenderedDOMComponentsWithTag(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+N);return m[0]},scryRenderedComponentsWithType:function(m,N){return Ne(m,"scryRenderedComponentsWithType"),Ae.findAllInRenderedTree(m,function(w){return Ae.isCompositeComponentWithType(w,N)})},findRenderedComponentWithType:function(m,N){if(Ne(m,"findRenderedComponentWithType"),m=Ae.scryRenderedComponentsWithType(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+N);return m[0]},mockComponent:function(m,N){return N=N||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return C.createElement(N,null,this.props.children)}),this},nativeTouchData:function(m,N){return{touches:[{pageX:m,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(m){function N(){T--,t.current=w,y.current=ve}E===!1&&(E=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var w=t.current,ve=y.current;t.current=!0,y.current=!0;try{var ee=S(m)}catch(Ee){throw N(),Ee}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Ee,ze){ee.then(function(){1<T||l===!0&&w===!0?(N(),Ee()):M(function(Qe){N(),Qe?ze(Qe):Ee()})},function(Qe){N(),ze(Qe)})}};try{T!==1||l!==!1&&w!==!1||s(),N()}catch(Ee){throw N(),Ee}return{then:function(Ee){Ee()}}}};function Cn(m){return function(N,w){if(C.isValidElement(N))throw Error(L(228));if(Ae.isCompositeComponent(N))throw Error(L(229));var ve=r[m],ee=new ae;ee.target=N,ee.type=m.toLowerCase();var Ee=f(N),ze=new On(ve,Ee,ee,N);ze.persist(),a(ze,w),ve.phasedRegistrationNames?h(ze):p(ze),W.unstable_batchedUpdates(function(){A(N),te(ze)}),F()}}Ae.Simulate={};for(var Vn in r)Ae.Simulate[Vn]=Cn(Vn);function et(m,N){return function(w,ve){var ee=new ae(m);a(ee,ve),Ae.isDOMComponent(w)?(w=u(w),ee.target=w,z(N,1,document,ee)):w.tagName&&(ee.target=w,z(N,1,document,ee))}}[["abort","abort"],[_n,"animationEnd"],[ct,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var N=m[1];Ae.SimulateNative[N]=et(N,m[0])}),U.exports=Ae.default||Ae}).call(this,e("hOG+")(wn))},F4QJ:function(wn,gn,e){"use strict";Object.defineProperty(gn,"__esModule",{value:!0}),gn.default=void 0;function U(){var oe=C(e("q1tI"));return U=function(){return oe},oe}function a(){var oe=e("dEAq");return a=function(){return oe},oe}function C(oe){return oe&&oe.__esModule?oe:{default:oe}}function W(oe,k){var Ge=Object.keys(oe);if(Object.getOwnPropertySymbols){var ge=Object.getOwnPropertySymbols(oe);k&&(ge=ge.filter(function(pn){return Object.getOwnPropertyDescriptor(oe,pn).enumerable})),Ge.push.apply(Ge,ge)}return Ge}function me(oe){for(var k=1;k<arguments.length;k++){var Ge=arguments[k]!=null?arguments[k]:{};k%2?W(Object(Ge),!0).forEach(function(ge){L(oe,ge,Ge[ge])}):Object.getOwnPropertyDescriptors?Object.defineProperties(oe,Object.getOwnPropertyDescriptors(Ge)):W(Object(Ge)).forEach(function(ge){Object.defineProperty(oe,ge,Object.getOwnPropertyDescriptor(Ge,ge))})}return oe}function L(oe,k,Ge){return k in oe?Object.defineProperty(oe,k,{value:Ge,enumerable:!0,configurable:!0,writable:!0}):oe[k]=Ge,oe}var dn=function(k,Ge){var ge=[],pn=k.match.params.uuid,On=k.location.query.wrapper===void 0,en=Ge[pn];if(en){var Je=me(me({},en.previewerProps),{},{hideActions:(en.previewerProps.hideActions||[]).concat(["EXTERNAL"])});k.location.query.capture!==void 0&&(Je.motions=(Je.motions||[]).slice(),Je.motions.unshift("autoplay"),Je.motions.every(function(He){return!He.startsWith("capture")})&&Je.motions.push("capture:[id|=root]")),On?ge=[U().default.createElement(function(){return(0,a().useMotions)(Je.motions||[],document.documentElement),U().default.createElement("div",{},U().default.createElement(en.component))})]:ge=[Je,U().default.createElement(en.component)]}return ge};gn.default=dn},JjdP:function(wn,gn,e){"use strict";e.r(gn);var U=e("9og8"),a=e("WmNS"),C=e.n(a),W=e("LtsZ"),me=`import React, { useRef } from 'react';
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
};`,Ge=`import React, { Component } from 'react';
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
}`,On=`import { Select } from 'antd';
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

export default Demo;`,Je=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,He=`.markdown p {
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

export default Demo;`,Dn=`import React from 'react';
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

export default Demo;`,Gn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,$n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,_n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ct=gn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l;return C.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return t=function(E,u){if(!u&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var K=S(u);if(K&&K.has(E))return K.get(E);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in E)if(h!=="default"&&Object.prototype.hasOwnProperty.call(E,h)){var p=r?Object.getOwnPropertyDescriptor(E,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=E[h]}return f.default=E,K&&K.set(E,f),f},S=function(E){if(typeof WeakMap!="function")return null;var u=new WeakMap,K=new WeakMap;return(S=function(r){return r?K:u})(E)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=t,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,v=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=M.sent,l=function(){var E=(0,v.useState)("Line"),u=(0,o.default)(E,2),K=u[0],f=u[1],r={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[K];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return d=e("K+nK"),t.t0=d,t.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=t.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(M,T,E){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(T).length]}},M),o.default.createElement("p",null,JSON.stringify(T)),o.default.createElement("p",null,JSON.stringify(E)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},t.abrupt("return",y);case 11:case"end":return t.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l;return C.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return t=function(E,u){if(!u&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var K=S(u);if(K&&K.has(E))return K.get(E);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in E)if(h!=="default"&&Object.prototype.hasOwnProperty.call(E,h)){var p=r?Object.getOwnPropertyDescriptor(E,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=E[h]}return f.default=E,K&&K.set(E,f),f},S=function(E){if(typeof WeakMap!="function")return null;var u=new WeakMap,K=new WeakMap;return(S=function(r){return r?K:u})(E)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=t,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,v=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=M.sent,l=function(){var E=(0,v.useState)(!1),u=(0,o.default)(E,2),K=u[0],f=u[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:K,onChange:function(){return f(!K)}})),v.default.createElement(y.PivotTable,{leftExpandable:K,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T,E,u,K,f;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return E=function(A,F){if(!F&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var z=T(F);if(z&&z.has(A))return z.get(A);var te={},ae=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Oe in A)if(Oe!=="default"&&Object.prototype.hasOwnProperty.call(A,Oe)){var Ne=ae?Object.getOwnPropertyDescriptor(A,Oe):null;Ne&&(Ne.get||Ne.set)?Object.defineProperty(te,Oe,Ne):te[Oe]=A[Oe]}return te.default=A,z&&z.set(A,te),te},T=function(A){if(typeof WeakMap!="function")return null;var F=new WeakMap,z=new WeakMap;return(T=function(ae){return ae?z:F})(A)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,v=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,y=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,S=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,t=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,l=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=E,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,M=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(p){(0,S.default)(F,p);var A=(0,t.default)(F);function F(){return(0,v.default)(this,F),A.apply(this,arguments)}return(0,y.default)(F,[{key:"render",value:function(){var te=this.props.form;return l.default.createElement("div",null,l.default.createElement(M.default,{form:te,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:te.submit},"\u63D0\u4EA4"))}}]),F}(l.default.Component),f=(0,M.connectForm)(K),h.abrupt("return",f);case 47:case"end":return h.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=t(r);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in f)if(F!=="default"&&Object.prototype.hasOwnProperty.call(f,F)){var z=A?Object.getOwnPropertyDescriptor(f,F):null;z&&(z.get||z.set)?Object.defineProperty(p,F,z):p[F]=f[F]}return p.default=f,h&&h.set(f,p),p},t=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(t=function(A){return A?h:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},M=function(){var f=(0,S.useForm)();return v.default.createElement("div",null,v.default.createElement(S.default,{form:f,schema:s}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=M,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=t(r);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in f)if(F!=="default"&&Object.prototype.hasOwnProperty.call(f,F)){var z=A?Object.getOwnPropertyDescriptor(f,F):null;z&&(z.get||z.set)?Object.defineProperty(p,F,z):p[F]=f[F]}return p.default=f,h&&h.set(f,p),p},t=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(t=function(A){return A?h:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},M=function(){var f=(0,S.useForm)(),r=function(p,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(p,null,2))};return v.default.createElement("div",null,v.default.createElement(S.default,{form:f,schema:s,onFinish:r}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=M,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return l=function(){var u=(0,v.useForm)(),K=function(r,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(v.default,{form:u,schema:t,onFinish:K}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},S=function(u,K){if(!K&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(K);if(f&&f.has(u))return f.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(r,p,A):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},y=function(u){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:K})(u)},d=e("K+nK"),T.t0=d,T.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=S,T.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return T.t3=T.sent,v=(0,T.t2)(T.t3),t={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y=function(M){return{type:"object",displayType:M,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(v.default,{schema:y("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(v.default,{schema:y("column")}))},l.abrupt("return",S);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(){return o.default.createElement(v.default,{schema:y})},l.abrupt("return",S);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(v.default,{readOnly:!0,schema:y})},l.abrupt("return",S);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(v.default,{labelWidth:"200",schema:y})},l.abrupt("return",S);case 14:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T,E,u,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return E=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=T(A);if(F&&F.has(p))return F.get(p);var z={},te=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var Oe=te?Object.getOwnPropertyDescriptor(p,ae):null;Oe&&(Oe.get||Oe.set)?Object.defineProperty(z,ae,Oe):z[ae]=p[ae]}return z.default=p,F&&F.set(p,z),z},T=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(T=function(te){return te?F:A})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.t8=E,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,t=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return l=r.sent,r.t10=E,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return M=r.sent,u=function(){var p=(0,s.useForm)(),A=(0,t.useState)({}),F=(0,S.default)(A,2),z=F[0],te=F[1],ae=function(){(0,M.fakeApi)("xxx/getForm").then(function(Ae){p.setValues({input1:"hello world",select1:"c"})})};(0,t.useEffect)(function(){(0,M.delay)(1e3).then(function(Ne){te({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Oe=function(Ae,Cn){Cn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Cn.map(function(Vn){return Vn.name}))):(0,M.fakeApi)("xxx/submit",Ae).then(function(Vn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return t.default.createElement("div",{style:{width:"400px"}},t.default.createElement(s.default,{form:p,schema:z,onFinish:Oe}),t.default.createElement(o.default,null,t.default.createElement(v.default,{onClick:ae},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),t.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=u,r.abrupt("return",K);case 48:case"end":return r.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T,E,u,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=M(A);if(F&&F.has(p))return F.get(p);var z={},te=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var Oe=te?Object.getOwnPropertyDescriptor(p,ae):null;Oe&&(Oe.get||Oe.set)?Object.defineProperty(z,ae,Oe):z[ae]=p[ae]}return z.default=p,F&&F.set(p,z),z},M=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(M=function(te){return te?F:A})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var p=(0,l.useForm)(),A=function(te,ae){ae.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(Oe){return Oe.name}))):(0,s.fakeApi)("xxx/submit",te).then(function(Oe){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},F=function(te){var ae=te.data,Oe=te.errors,Ne=te.schema,Ae=(0,v.default)(te,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:p,schema:E,beforeFinish:F,onFinish:A}),S.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},K=u,r.abrupt("return",K);case 42:case"end":return r.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T,E,u,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=M(A);if(F&&F.has(p))return F.get(p);var z={},te=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var Oe=te?Object.getOwnPropertyDescriptor(p,ae):null;Oe&&(Oe.get||Oe.set)?Object.defineProperty(z,ae,Oe):z[ae]=p[ae]}return z.default=p,F&&F.set(p,z),z},M=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(M=function(te){return te?F:A})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return t=r.sent,r.t8=T,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,E={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var p=(0,l.useForm)(),A=function(te,ae){ae.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(Oe){return Oe.name}))):(0,s.fakeApi)("xxx/submit",te).then(function(Oe){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},F=function(){(0,s.fakeApi)("xxx/getForm").then(function(te){p.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:p,schema:E,onFinish:A}),S.default.createElement(o.default,null,S.default.createElement(v.default,{onClick:F},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=u,r.abrupt("return",K);case 44:case"end":return r.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T,E,u;return C.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return M=function(h,p){if(!p&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var A=s(p);if(A&&A.has(h))return A.get(h);var F={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var te in h)if(te!=="default"&&Object.prototype.hasOwnProperty.call(h,te)){var ae=z?Object.getOwnPropertyDescriptor(h,te):null;ae&&(ae.get||ae.set)?Object.defineProperty(F,te,ae):F[te]=h[te]}return F.default=h,A&&A.set(h,F),F},s=function(h){if(typeof WeakMap!="function")return null;var p=new WeakMap,A=new WeakMap;return(s=function(z){return z?A:p})(h)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,o=(0,f.t0)(f.t1),f.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,v=(0,f.t2)(f.t3),f.t4=M,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,y=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return S=f.sent,f.t6=M,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,t=(0,f.t6)(f.t7),f.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=f.sent,T={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},E=function(){var h=(0,t.useForm)(),p=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(z,te){te.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(te.map(function(ae){return ae.name}))):v.default.info(JSON.stringify(z))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(t.default,{form:h,schema:T,onMount:p,onFinish:A}),y.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=E,f.abrupt("return",u);case 37:case"end":return f.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return S=function(u,K){if(!K&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(K);if(f&&f.has(u))return f.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(r,p,A):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},y=function(u){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:K})(u)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=S,T.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return T.t3=T.sent,v=(0,T.t2)(T.t3),t={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,v.useForm)();return o.default.createElement(v.default,{form:u,schema:t})},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,S=function(){return o.default.createElement(v.default,{schema:y.expression})},l.abrupt("return",S);case 16:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:k}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M;return C.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return S=function(K,f){if(!f&&K&&K.__esModule)return K;if(K===null||typeof K!="object"&&typeof K!="function")return{default:K};var r=y(f);if(r&&r.has(K))return r.get(K);var h={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in K)if(A!=="default"&&Object.prototype.hasOwnProperty.call(K,A)){var F=p?Object.getOwnPropertyDescriptor(K,A):null;F&&(F.get||F.set)?Object.defineProperty(h,A,F):h[A]=K[A]}return h.default=K,r&&r.set(K,h),h},y=function(K){if(typeof WeakMap!="function")return null;var f=new WeakMap,r=new WeakMap;return(y=function(p){return p?r:f})(K)},E.t0=S,E.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return E.t1=E.sent,d=(0,E.t0)(E.t1),E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=E.sent,E.t2=S,E.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return E.t3=E.sent,v=(0,E.t2)(E.t3),t=function(K){return new Promise(function(f){return setTimeout(f,K)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var K=(0,v.useForm)(),f=function(){K.setValues({input1:"hello world"}),t(3e3).then(function(h){K.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:K,schema:l,onMount:f})},M=s,E.abrupt("return",M);case 20:case"end":return E.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),window.hello=function(M){var T=M.value;console.log(T)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(v.default,{schema:y})},t=S,s.abrupt("return",t);case 16:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return S=function(u,K){if(!K&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(K);if(f&&f.has(u))return f.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(r,p,A):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},y=function(u){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:K})(u)},T.t0=S,T.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return T.t1=T.sent,d=(0,T.t0)(T.t1),T.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=T.sent,T.t2=S,T.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return T.t3=T.sent,v=(0,T.t2)(T.t3),t={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,v.useForm)(),K={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){u.setValueByPath("input2",r)}};return d.default.createElement(v.default,{form:u,schema:t,watch:K})},s=l,T.abrupt("return",s);case 19:case"end":return T.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=t(r);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var F in f)if(F!=="default"&&Object.prototype.hasOwnProperty.call(f,F)){var z=A?Object.getOwnPropertyDescriptor(f,F):null;z&&(z.get||z.set)?Object.defineProperty(p,F,z):p[F]=f[F]}return p.default=f,h&&h.set(f,p),p},t=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(t=function(A){return A?h:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},M=function(){var f=(0,S.useForm)(),r=function(A,F){F.length>0?alert("errorFields:"+JSON.stringify(F)):alert("formData:"+JSON.stringify(A,null,2))},h={input1:function(A){A.length>2?f.setSchemaByPath("obj1.select",function(F){var z=F.enumNames;return{enumNames:z.map(function(te){return te+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(S.default,{form:f,schema:s,onFinish:r,watch:h}),v.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=M,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M,T,E,u,K;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var F=s(A);if(F&&F.has(p))return F.get(p);var z={},te=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var Oe=te?Object.getOwnPropertyDescriptor(p,ae):null;Oe&&(Oe.get||Oe.set)?Object.defineProperty(z,ae,Oe):z[ae]=p[ae]}return z.default=p,F&&F.set(p,z),z},s=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,F=new WeakMap;return(s=function(te){return te?F:A})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=M,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return t=r.sent,r.t8=M,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),T={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},E=function(p){return console.log("widget props:",p),S.default.createElement(v.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},p))},u=function(){var p=(0,l.useForm)(),A=function(){};return S.default.createElement("div",null,S.default.createElement(l.default,{readOnly:!0,form:p,schema:T,widgets:{site:E},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),S.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},K=u,r.abrupt("return",K);case 40:case"end":return r.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,S=function(){return o.default.createElement(v.default,{schema:y.basic})},l.abrupt("return",S);case 16:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:k}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,S=function(){return o.default.createElement(v.default,{schema:y.titleTrick})},l.abrupt("return",S);case 16:case"end":return l.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:k}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Ge},"main.js":{import:"./main",content:ge},"json/simplest.json":{import:"./json/simplest.json",content:pn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:On},"monaco/index.js":{import:"./monaco",content:en},"suggestionsMap.js":{import:"./suggestionsMap",content:Je},"index.css":{import:"./index.css",content:He}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t,l,s,M;return C.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return d=e("K+nK"),E.t0=d,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,o=(0,E.t0)(E.t1),E.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(v=E.sent,y=[],S=0;S<6;S++)y.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return t={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(K,f){return o.default.createElement("a",{onClick:function(){return alert(K.title)}},"\u7F16\u8F91")}}],s=function(){var K=function(){return{rows:y,total:y.length}};return o.default.createElement(v.TableProvider,null,o.default.createElement(v.Search,{schema:t,api:K}),o.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},M=s,E.abrupt("return",M);case 16:case"end":return E.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){var d,o,v,y,S,t;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(v.default,{defaultValue:y}))},t=S,s.abrupt("return",t);case 15:case"end":return s.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Fn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Be},"index.less":{import:"./index.less",content:Gn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var D=Object(U.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return D.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:_n},"index.less":{import:"./index.less",content:Gn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(wn,gn,e){},Zs1V:function(wn){wn.exports=JSON.parse("{}")},p8sG:function(wn,gn,e){"use strict";wn.exports=e("80pN")}}]);
