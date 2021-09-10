(window.webpackJsonp=window.webpackJsonp||[]).push([[68,13],{"0zqC":function(En,un,e){"use strict";e.r(un);var L=e("tJVT"),u=e("q1tI"),b=e.n(u),B=e("wx14"),ue=e("rePB"),z=e("ODXe"),we=e("U8pU"),ae=e("Ff2n"),k=e("VTBJ"),Ae=e("TSYQ"),fe=e.n(Ae),sn=e("Zm9Q"),fn=e("5Z9U"),He=e("6cGi"),Be=e("KQm4"),Le=e("wgJM"),Fn=e("t23M");function Tn(a){var d=Object(u.useRef)(),g=Object(u.useRef)(!1);function P(){for(var D=arguments.length,j=new Array(D),T=0;T<D;T++)j[T]=arguments[T];g.current||(Le.a.cancel(d.current),d.current=Object(Le.a)(function(){a.apply(void 0,j)}))}return Object(u.useEffect)(function(){return function(){g.current=!0,Le.a.cancel(d.current)}},[]),P}function yn(a){var d=Object(u.useRef)([]),g=Object(u.useState)({}),P=Object(z.a)(g,2),D=P[1],j=Object(u.useRef)(typeof a=="function"?a():a),T=Tn(function(){var W=j.current;d.current.forEach(function(x){W=x(W)}),d.current=[],j.current=W,D({})});function w(W){d.current.push(W),T()}return[j.current,w]}var Te=e("4IlW");function nt(a,d){var g,P=a.prefixCls,D=a.id,j=a.active,T=a.rtl,w=a.tab,W=w.key,x=w.tab,V=w.disabled,G=w.closeIcon,U=a.tabBarGutter,se=a.tabPosition,Y=a.closable,X=a.renderWrapper,oe=a.removeAriaLabel,J=a.editable,_=a.onClick,te=a.onRemove,Q=a.onFocus,ie="".concat(P,"-tab");u.useEffect(function(){return te},[]);var q={};se==="top"||se==="bottom"?q[T?"marginLeft":"marginRight"]=U:q.marginBottom=U;var ve=J&&Y!==!1&&!V;function ee(re){V||_(re)}function de(re){re.preventDefault(),re.stopPropagation(),J.onEdit("remove",{key:W,event:re})}var ce=u.createElement("div",{key:W,ref:d,className:fe()(ie,(g={},Object(ue.a)(g,"".concat(ie,"-with-remove"),ve),Object(ue.a)(g,"".concat(ie,"-active"),j),Object(ue.a)(g,"".concat(ie,"-disabled"),V),g)),style:q,onClick:ee},u.createElement("div",{role:"tab","aria-selected":j,id:D&&"".concat(D,"-tab-").concat(W),className:"".concat(ie,"-btn"),"aria-controls":D&&"".concat(D,"-panel-").concat(W),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[Te.a.SPACE,Te.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Q},x),ve&&u.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(ie,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},G||J.removeIcon||"\xD7"));return X&&(ce=X(ce)),ce}var Mn=u.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function dt(a,d,g){return Object(u.useMemo)(function(){for(var P,D=new Map,j=d.get((P=a[0])===null||P===void 0?void 0:P.key)||tt,T=j.left+j.width,w=0;w<a.length;w+=1){var W=a[w].key,x=d.get(W);if(!x){var V;x=d.get((V=a[w-1])===null||V===void 0?void 0:V.key)||tt}var G=D.get(W)||Object(k.a)({},x);G.right=T-G.left-G.width,D.set(W,G)}return D},[a.map(function(P){return P.key}).join("_"),d,g])}var rt={width:0,height:0,left:0,top:0,right:0};function ct(a,d,g,P,D){var j=D.tabs,T=D.tabPosition,w=D.rtl,W,x,V;["top","bottom"].includes(T)?(W="width",x=w?"right":"left",V=Math.abs(d.left)):(W="height",x="top",V=-d.top);var G=d[W],U=g[W],se=P[W],Y=G;return U+se>G&&(Y=G-se),Object(u.useMemo)(function(){if(!j.length)return[0,0];for(var X=j.length,oe=X,J=0;J<X;J+=1){var _=a.get(j[J].key)||rt;if(_[x]+_[W]>V+Y){oe=J-1;break}}for(var te=0,Q=X-1;Q>=0;Q-=1){var ie=a.get(j[Q].key)||rt;if(ie[x]<V){te=Q+1;break}}return[te,oe]},[a,V,Y,T,j.map(function(X){return X.key}).join("_"),w])}var Kn=e("Gytx"),at=e.n(Kn),Vn=e("Kwbf");function mt(a,d){var g=a.prefixCls,P=a.invalidate,D=a.item,j=a.renderItem,T=a.responsive,w=a.registerSize,W=a.itemKey,x=a.className,V=a.style,G=a.children,U=a.display,se=a.order,Y=a.component,X=Y===void 0?"div":Y,oe=Object(ae.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=T&&!U;function _(ve){w(W,ve)}u.useEffect(function(){return function(){_(null)}},[]);var te=j&&D!==void 0?j(D):G,Q;P||(Q={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:T?se:void 0,pointerEvents:J?"none":void 0});var ie={};J&&(ie["aria-hidden"]=!0);var q=u.createElement(X,Object(B.a)({className:fe()(!P&&g,x),style:Object(k.a)(Object(k.a)({},Q),V)},ie,oe,{ref:d}),te);return T&&(q=u.createElement(Fn.default,{onResize:function(ee){var de=ee.offsetWidth;_(de)}},q)),q}var Bn=u.forwardRef(mt);Bn.displayName="Item";var Wn=Bn;function Jn(){var a=Object(u.useState)({}),d=Object(z.a)(a,2),g=d[1],P=Object(u.useRef)([]),D=Object(u.useRef)(!1),j=0,T=0;Object(u.useEffect)(function(){return function(){D.current=!0}},[]);function w(W){var x=j;j+=1,P.current.length<x+1&&(P.current[x]=W);var V=P.current[x];function G(U){P.current[x]=typeof U=="function"?U(P.current[x]):U,Le.a.cancel(T),T=Object(Le.a)(function(){D.current||g({})})}return[V,G]}return w}var zn=function(d,g){var P=u.useContext(bn);if(!P){var D=d.component,j=D===void 0?"div":D,T=Object(ae.a)(d,["component"]);return u.createElement(j,Object(B.a)({},T,{ref:g}))}var w=P.className,W=Object(ae.a)(P,["className"]),x=d.className,V=Object(ae.a)(d,["className"]);return u.createElement(bn.Provider,{value:null},u.createElement(Wn,Object(B.a)({ref:g,className:fe()(w,x)},W,V)))},Ln=u.forwardRef(zn);Ln.displayName="RawItem";var st=Ln,bn=u.createContext(null),N="responsive",I="invalidate";function E(a){return"+ ".concat(a.length," ...")}function m(a,d){var g=a.prefixCls,P=g===void 0?"rc-overflow":g,D=a.data,j=D===void 0?[]:D,T=a.renderItem,w=a.renderRawItem,W=a.itemKey,x=a.itemWidth,V=x===void 0?10:x,G=a.ssr,U=a.style,se=a.className,Y=a.maxCount,X=a.renderRest,oe=a.renderRawRest,J=a.suffix,_=a.component,te=_===void 0?"div":_,Q=a.itemComponent,ie=a.onVisibleChange,q=Object(ae.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),ve=Jn(),ee=G==="full",de=ve(null),ce=Object(z.a)(de,2),re=ce[0],H=ce[1],le=re||0,he=ve(new Map),pe=Object(z.a)(he,2),Oe=pe[0],Ne=pe[1],ge=ve(0),be=Object(z.a)(ge,2),De=be[0],Pe=be[1],Re=ve(0),Ce=Object(z.a)(Re,2),Fe=Ce[0],Ye=Ce[1],Me=ve(0),Ke=Object(z.a)(Me,2),Je=Ke[0],Ie=Ke[1],On=Object(u.useState)(null),qe=Object(z.a)(On,2),ze=qe[0],tn=qe[1],pn=Object(u.useState)(null),hn=Object(z.a)(pn,2),je=hn[0],$e=hn[1],Xe=u.useMemo(function(){return je===null&&ee?Number.MAX_SAFE_INTEGER:je||0},[je,re]),Ue=Object(u.useState)(!1),wn=Object(z.a)(Ue,2),Hn=wn[0],An=wn[1],_e="".concat(P,"-item"),Sn=Math.max(De,Fe),rn=j.length&&Y===N,Cn=Y===I,Qe=rn||typeof Y=="number"&&j.length>Y,en=Object(u.useMemo)(function(){var me=j;return rn?re===null&&ee?me=j:me=j.slice(0,Math.min(j.length,le/V)):typeof Y=="number"&&(me=j.slice(0,Y)),me},[j,V,re,Y,rn]),Rn=Object(u.useMemo)(function(){return rn?j.slice(Xe+1):j.slice(en.length)},[j,en,rn,Xe]),on=Object(u.useCallback)(function(me,Se){var Ee;return typeof W=="function"?W(me):(Ee=W&&(me==null?void 0:me[W]))!==null&&Ee!==void 0?Ee:Se},[W]),Ge=Object(u.useCallback)(T||function(me){return me},[T]);function Ve(me,Se){$e(me),Se||(An(me<j.length-1),ie==null||ie(me))}function Yn(me,Se){H(Se.clientWidth)}function Xn(me,Se){Ne(function(Ee){var Ze=new Map(Ee);return Se===null?Ze.delete(me):Ze.set(me,Se),Ze})}function ot(me,Se){Ye(Se),Pe(Fe)}function vn(me,Se){Ie(Se)}function mn(me){return Oe.get(on(en[me],me))}u.useLayoutEffect(function(){if(le&&Sn&&en){var me=Je,Se=en.length,Ee=Se-1;if(!Se){Ve(0),tn(null);return}for(var Ze=0;Ze<Se;Ze+=1){var qn=mn(Ze);if(qn===void 0){Ve(Ze-1,!0);break}if(me+=qn,Ze===Ee-1&&me+mn(Ee)<=le){Ve(Ee),tn(null);break}else if(me+Sn>le){Ve(Ze-1),tn(me-qn-Je+Fe);break}else if(Ze===Ee){Ve(Ee),tn(me-Je);break}}J&&mn(0)+Je>le&&tn(null)}},[le,Oe,Fe,Je,on,en]);var Qn=Hn&&!!Rn.length,gn={};ze!==null&&rn&&(gn={position:"absolute",left:ze,top:0});var ln={prefixCls:_e,responsive:rn,component:Q,invalidate:Cn},Zn=w?function(me,Se){var Ee=on(me,Se);return u.createElement(bn.Provider,{key:Ee,value:Object(k.a)(Object(k.a)({},ln),{},{order:Se,item:me,itemKey:Ee,registerSize:Xn,display:Se<=Xe})},w(me,Se))}:function(me,Se){var Ee=on(me,Se);return u.createElement(Wn,Object(B.a)({},ln,{order:Se,key:Ee,item:me,renderItem:Ge,itemKey:Ee,registerSize:Xn,display:Se<=Xe}))},jn,kn={order:Qn?Xe:Number.MAX_SAFE_INTEGER,className:"".concat(_e,"-rest"),registerSize:ot,display:Qn};if(oe)oe&&(jn=u.createElement(bn.Provider,{value:Object(k.a)(Object(k.a)({},ln),kn)},oe(Rn)));else{var an=X||E;jn=u.createElement(Wn,Object(B.a)({},ln,kn),typeof an=="function"?an(Rn):an)}var Pn=u.createElement(te,Object(B.a)({className:fe()(!Cn&&P,se),style:U,ref:d},q),en.map(Zn),Qe?jn:null,J&&u.createElement(Wn,Object(B.a)({},ln,{order:Xe,className:"".concat(_e,"-suffix"),registerSize:vn,display:!0,style:gn}),J));return rn&&(Pn=u.createElement(Fn.default,{onResize:Yn},Pn)),Pn}var s=u.forwardRef(m);s.displayName="Overflow",s.Item=st,s.RESPONSIVE=N,s.INVALIDATE=I;var h=s,y=h,S=e("1OyB"),i=e("vuIU"),p=e("Ji7U"),o=e("LK+K"),A=e("bT9E"),F=e("YrtM"),C=u.createContext(null);function c(a,d){var g=Object(k.a)({},a);return Object.keys(d).forEach(function(P){var D=d[P];D!==void 0&&(g[P]=D)}),g}function R(a){var d=a.children,g=a.locked,P=Object(ae.a)(a,["children","locked"]),D=u.useContext(C),j=Object(F.a)(function(){return c(D,P)},[D,P],function(T,w){return!g&&(T[0]!==w[0]||!at()(T[1],w[1]))});return u.createElement(C.Provider,{value:j},d)}function f(a,d,g,P){var D=u.useContext(C),j=D.activeKey,T=D.onActive,w=D.onInactive,W={active:j===a};return d||(W.onMouseEnter=function(x){g==null||g({key:a,domEvent:x}),T(a)},W.onMouseLeave=function(x){P==null||P({key:a,domEvent:x}),w(a)}),W}function n(a){var d=a.item,g=Object(ae.a)(a,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),d}}),g}function t(a){var d=a.icon,g=a.props,P=a.children,D;return typeof d=="function"?D=u.createElement(d,Object(k.a)({},g)):D=d,D||P||null}function r(a){var d=u.useContext(C),g=d.mode,P=d.rtl,D=d.inlineIndent;if(g!=="inline")return null;var j=a;return P?{paddingRight:j*D}:{paddingLeft:j*D}}var l=[],v=u.createContext(null);function O(){return u.useContext(v)}var M=u.createContext(l);function K(a){var d=u.useContext(M);return u.useMemo(function(){return a!==void 0?[].concat(Object(Be.a)(d),[a]):d},[d,a])}var $=u.createContext(null),xe=u.createContext(null);function ke(a,d){return a===void 0?null:"".concat(a,"-").concat(d)}function dn(a){var d=u.useContext(xe);return ke(d,a)}var Nn=function(a){Object(p.a)(g,a);var d=Object(o.a)(g);function g(){return Object(S.a)(this,g),d.apply(this,arguments)}return Object(i.a)(g,[{key:"render",value:function(){var D=this.props,j=D.title,T=D.attribute,w=D.elementRef,W=Object(ae.a)(D,["title","attribute","elementRef"]),x=Object(A.a)(W,["eventKey"]);return Object(Vn.a)(!T,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),u.createElement(y.Item,Object(B.a)({},T,{title:typeof j=="string"?j:void 0},x,{ref:w}))}}]),g}(u.Component),Un=function(d){var g,P=d.style,D=d.className,j=d.eventKey,T=d.disabled,w=d.itemIcon,W=d.children,x=d.role,V=d.onMouseEnter,G=d.onMouseLeave,U=d.onClick,se=d.onKeyDown,Y=d.onFocus,X=Object(ae.a)(d,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=dn(j),J=u.useContext(C),_=J.prefixCls,te=J.onItemClick,Q=J.disabled,ie=J.overflowDisabled,q=J.itemIcon,ve=J.selectedKeys,ee=J.onActive,de="".concat(_,"-item"),ce=u.useRef(),re=u.useRef(),H=Q||T,le=K(j),he=function(Me){return{key:j,keyPath:le,item:ce.current,domEvent:Me}},pe=w||q,Oe=f(j,H,V,G),Ne=Oe.active,ge=Object(ae.a)(Oe,["active"]),be=ve.includes(j),De=r(le.length),Pe=function(Me){if(!H){var Ke=he(Me);U==null||U(n(Ke)),te(Ke)}},Re=function(Me){if(se==null||se(Me),Me.which===Te.a.ENTER){var Ke=he(Me);U==null||U(n(Ke)),te(Ke)}},Ce=function(Me){ee(j),Y==null||Y(Me)},Fe={};return d.role==="option"&&(Fe["aria-selected"]=be),u.createElement(Nn,Object(B.a)({ref:ce,elementRef:re,role:x===null?"none":x||"menuitem",tabIndex:T?null:-1,"data-menu-id":ie&&oe?null:oe},X,ge,Fe,{component:"li","aria-disabled":T,style:Object(k.a)(Object(k.a)({},De),P),className:fe()(de,(g={},Object(ue.a)(g,"".concat(de,"-active"),Ne),Object(ue.a)(g,"".concat(de,"-selected"),be),Object(ue.a)(g,"".concat(de,"-disabled"),H),g),D),onClick:Pe,onKeyDown:Re,onFocus:Ce}),W,u.createElement(t,{props:Object(k.a)(Object(k.a)({},d),{},{isSelected:be}),icon:pe}))};function In(a){var d=a.eventKey,g=O(),P=K(d);return u.useEffect(function(){if(g)return g.registerPath(d,P),function(){g.unregisterPath(d,P)}},[P]),g?null:u.createElement(Un,a)}var Gn=In;function Ft(a,d){return Object(sn.a)(a).map(function(g,P){if(u.isValidElement(g)){var D=g.key;return D==null&&(D="tmp_key-".concat([].concat(Object(Be.a)(d),[P]).join("-"))),u.cloneElement(g,{key:D,eventKey:D})}return g})}function it(a){var d=u.useRef(a);d.current=a;var g=u.useCallback(function(){for(var P,D=arguments.length,j=new Array(D),T=0;T<D;T++)j[T]=arguments[T];return(P=d.current)===null||P===void 0?void 0:P.call.apply(P,[d].concat(j))},[]);return a?g:void 0}var Cr=function(d,g){var P=d.className,D=d.children,j=Object(ae.a)(d,["className","children"]),T=u.useContext(C),w=T.prefixCls,W=T.mode;return u.createElement("ul",Object(B.a)({className:fe()(w,"".concat(w,"-sub"),"".concat(w,"-").concat(W==="inline"?"inline":"vertical"),P)},j,{"data-menu-list":!0,ref:g}),D)},Xt=u.forwardRef(Cr);Xt.displayName="SubMenuList";var Qt=Xt,Rr=e("uciX"),xn={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},fa=Zt;function kt(a,d,g){if(d)return d;if(g)return g[a]||g.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(a){var d=a.prefixCls,g=a.visible,P=a.children,D=a.popup,j=a.popupClassName,T=a.popupOffset,w=a.disabled,W=a.mode,x=a.onVisibleChange,V=u.useContext(C),G=V.getPopupContainer,U=V.rtl,se=V.subMenuOpenDelay,Y=V.subMenuCloseDelay,X=V.builtinPlacements,oe=V.triggerSubMenuAction,J=V.forceSubMenuRender,_=V.motion,te=V.defaultMotions,Q=u.useState(!1),ie=Object(z.a)(Q,2),q=ie[0],ve=ie[1],ee=U?Object(k.a)(Object(k.a)({},jr),X):Object(k.a)(Object(k.a)({},Zt),X),de=Pr[W],ce=kt(W,_,te),re=Object(k.a)(Object(k.a)({},ce),{},{leavedClassName:"".concat(d,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=u.useRef();return u.useEffect(function(){return H.current=Object(Le.a)(function(){ve(g)}),function(){Le.a.cancel(H.current)}},[g]),u.createElement(Rr.a,{prefixCls:d,popupClassName:fe()("".concat(d,"-popup"),Object(ue.a)({},"".concat(d,"-rtl"),U),j),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ee,popupPlacement:de,popupVisible:q,popup:D,popupAlign:T&&{offset:T},action:w?[]:[oe],mouseEnterDelay:se,mouseLeaveDelay:Y,onPopupVisibleChange:x,forceRender:J,popupMotion:re},P)}var Er=e("8XRh");function Tr(a){var d=a.id,g=a.open,P=a.keyPath,D=a.children,j="inline",T=u.useContext(C),w=T.prefixCls,W=T.forceSubMenuRender,x=T.motion,V=T.defaultMotions,G=T.mode,U=u.useRef(!1);U.current=G===j;var se=u.useState(!U.current),Y=Object(z.a)(se,2),X=Y[0],oe=Y[1],J=U.current?g:!1;u.useEffect(function(){U.current&&oe(!1)},[G]);var _=Object(k.a)({},kt(j,x,V));P.length>1&&(_.motionAppear=!1);var te=_.onVisibleChanged;return _.onVisibleChanged=function(Q){return!U.current&&!Q&&oe(!0),te==null?void 0:te(Q)},X?null:u.createElement(R,{mode:j,locked:!U.current},u.createElement(Er.default,Object(B.a)({visible:J},_,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(w,"-hidden")}),function(Q){var ie=Q.className,q=Q.style;return u.createElement(Qt,{id:d,className:ie,style:q},D)}))}var Nr=function(d){var g,P=d.style,D=d.className,j=d.title,T=d.eventKey,w=d.disabled,W=d.internalPopupClose,x=d.children,V=d.itemIcon,G=d.expandIcon,U=d.popupClassName,se=d.popupOffset,Y=d.onClick,X=d.onMouseEnter,oe=d.onMouseLeave,J=d.onTitleClick,_=d.onTitleMouseEnter,te=d.onTitleMouseLeave,Q=Object(ae.a)(d,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ie=dn(T),q=u.useContext(C),ve=q.prefixCls,ee=q.mode,de=q.openKeys,ce=q.disabled,re=q.overflowDisabled,H=q.activeKey,le=q.selectedKeys,he=q.itemIcon,pe=q.expandIcon,Oe=q.onItemClick,Ne=q.onOpenChange,ge=q.onActive,be=u.useContext($),De=be.isSubPathKey,Pe=K(),Re="".concat(ve,"-submenu"),Ce=ce||w,Fe=u.useRef(),Ye=u.useRef(),Me=V||he,Ke=G||pe,Je=de.includes(T),Ie=!re&&Je,On=De(le,T),qe=f(T,Ce,_,te),ze=qe.active,tn=Object(ae.a)(qe,["active"]),pn=u.useState(!1),hn=Object(z.a)(pn,2),je=hn[0],$e=hn[1],Xe=function(Ve){Ce||$e(Ve)},Ue=function(Ve){Xe(!0),X==null||X({key:T,domEvent:Ve})},wn=function(Ve){Xe(!1),oe==null||oe({key:T,domEvent:Ve})},Hn=u.useMemo(function(){return ze||(ee!=="inline"?je||De([H],T):!1)},[ee,ze,H,je,T,De]),An=r(Pe.length),_e=function(Ve){Ce||(J==null||J({key:T,domEvent:Ve}),ee==="inline"&&Ne(T,!Je))},Sn=it(function(Ge){Y==null||Y(n(Ge)),Oe(Ge)}),rn=function(Ve){ee!=="inline"&&Ne(T,Ve)},Cn=function(){ge(T)},Qe=ie&&"".concat(ie,"-popup"),en=u.createElement("div",Object(B.a)({role:"menuitem",style:An,className:"".concat(Re,"-title"),tabIndex:Ce?null:-1,ref:Fe,title:typeof j=="string"?j:null,"data-menu-id":re&&ie?null:ie,"aria-expanded":Ie,"aria-haspopup":!0,"aria-controls":Qe,"aria-disabled":Ce,onClick:_e,onFocus:Cn},tn),j,u.createElement(t,{icon:ee!=="horizontal"?Ke:null,props:Object(k.a)(Object(k.a)({},d),{},{isOpen:Ie,isSubMenu:!0})},u.createElement("i",{className:"".concat(Re,"-arrow")}))),Rn=u.useRef(ee);if(ee!=="inline"&&(Rn.current=Pe.length>1?"vertical":ee),!re){var on=Rn.current;en=u.createElement(Dr,{mode:on,prefixCls:Re,visible:!W&&Ie&&ee!=="inline",popupClassName:U,popupOffset:se,popup:u.createElement(R,{mode:on},u.createElement(Qt,{id:Qe,ref:Ye},x)),disabled:Ce,onVisibleChange:rn},en)}return u.createElement(R,{onItemClick:Sn,mode:ee==="horizontal"?"vertical":ee,itemIcon:Me,expandIcon:Ke},u.createElement(y.Item,Object(B.a)({role:"none"},Q,{component:"li",style:P,className:fe()(Re,"".concat(Re,"-").concat(ee),D,(g={},Object(ue.a)(g,"".concat(Re,"-open"),Ie),Object(ue.a)(g,"".concat(Re,"-active"),Hn),Object(ue.a)(g,"".concat(Re,"-selected"),On),Object(ue.a)(g,"".concat(Re,"-disabled"),Ce),g)),onMouseEnter:Ue,onMouseLeave:wn}),en,!re&&u.createElement(Tr,{id:Qe,open:Ie,keyPath:Pe},x)))};function qt(a){var d=a.eventKey,g=a.children,P=K(d),D=Ft(g,P),j=O();u.useEffect(function(){if(j)return j.registerPath(d,P),function(){j.unregisterPath(d,P)}},[P]);var T;return j?T=D:T=u.createElement(Nr,a,D),u.createElement(M.Provider,{value:P},T)}var Ir=e("x/xZ");function _t(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(a)){var g=a.nodeName.toLowerCase(),P=["input","select","textarea","button"].includes(g)||a.isContentEditable||g==="a"&&!!a.getAttribute("href"),D=a.getAttribute("tabindex"),j=Number(D),T=null;return D&&!Number.isNaN(j)?T=j:P&&T===null&&(T=0),P&&a.disabled&&(T=null),T!==null&&(T>=0||d&&T<0)}return!1}function er(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(Be.a)(a.querySelectorAll("*")).filter(function(P){return _t(P,d)});return _t(a,d)&&g.unshift(a),g}var bt=null;function pa(){bt=document.activeElement}function ha(){bt=null}function va(){if(bt)try{bt.focus()}catch(a){}}function ga(a,d){if(d.keyCode===9){var g=er(a),P=g[d.shiftKey?0:g.length-1],D=P===document.activeElement||a===document.activeElement;if(D){var j=g[d.shiftKey?g.length-1:0];j.focus(),d.preventDefault()}}}var Mt=Te.a.LEFT,Kt=Te.a.RIGHT,Bt=Te.a.UP,Ot=Te.a.DOWN,St=Te.a.ENTER,nr=Te.a.ESC,tr=[Bt,Ot,Mt,Kt];function wr(a,d,g,P){var D,j,T,w,W="prev",x="next",V="children",G="parent";if(a==="inline"&&P===St)return{inlineTrigger:!0};var U=(D={},Object(ue.a)(D,Bt,W),Object(ue.a)(D,Ot,x),D),se=(j={},Object(ue.a)(j,Mt,g?x:W),Object(ue.a)(j,Kt,g?W:x),Object(ue.a)(j,Ot,V),Object(ue.a)(j,St,V),j),Y=(T={},Object(ue.a)(T,Bt,W),Object(ue.a)(T,Ot,x),Object(ue.a)(T,St,V),Object(ue.a)(T,nr,G),Object(ue.a)(T,Mt,g?V:G),Object(ue.a)(T,Kt,g?G:V),T),X={inline:U,horizontal:se,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},oe=(w=X["".concat(a).concat(d?"":"Sub")])===null||w===void 0?void 0:w[P];switch(oe){case W:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ar(a){for(var d=a;d;){if(d.getAttribute("data-menu-list"))return d;d=d.parentElement}return null}function Fr(a,d){for(var g=a||document.activeElement;g;){if(d.has(g))return g;g=g.parentElement}return null}function Mr(a,d){var g=er(a,!0);return g.filter(function(P){return d.has(P)})}function rr(a,d,g){var P=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var D=Mr(a,d),j=D.length,T=D.findIndex(function(w){return g===w});return P<0?T===-1?T=j-1:T-=1:P>0&&(T+=1),T=(T+j)%j,D[T]}function Kr(a,d,g,P,D,j,T,w,W,x){var V=u.useRef(),G=u.useRef();G.current=d;var U=function(){Le.a.cancel(V.current)};return u.useEffect(function(){return function(){U()}},[]),function(se){var Y=se.which;if([].concat(tr,[St,nr]).includes(Y)){var X,oe,J,_=function(){X=new Set,oe=new Map,J=new Map;var he=j();return he.forEach(function(pe){var Oe=document.querySelector("[data-menu-id='".concat(ke(P,pe),"']"));Oe&&(X.add(Oe),J.set(Oe,pe),oe.set(pe,Oe))}),X};_();var te=oe.get(d),Q=Fr(te,X),ie=J.get(Q),q=wr(a,T(ie,!0).length===1,g,Y);if(!q)return;tr.includes(Y)&&se.preventDefault();var ve=function(he){if(he){var pe=he,Oe=he.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(pe=Oe);var Ne=J.get(he);w(Ne),U(),V.current=Object(Le.a)(function(){G.current===Ne&&pe.focus()})}};if(q.sibling||!Q){var ee;!Q||a==="inline"?ee=D.current:ee=Ar(Q);var de=rr(ee,X,Q,q.offset);ve(de)}else if(q.inlineTrigger)W(ie);else if(q.offset>0)W(ie,!0),U(),V.current=Object(Le.a)(function(){_();var le=Q.getAttribute("aria-controls"),he=document.getElementById(le),pe=rr(he,X);ve(pe)},5);else if(q.offset<0){var ce=T(ie,!0),re=ce[ce.length-2],H=oe.get(re);W(re,!1),ve(H)}}x==null||x(se)}}var Br=Math.random().toFixed(5).toString().slice(2),ar=0;function Wr(a){var d=Object(He.a)(a,{value:a}),g=Object(z.a)(d,2),P=g[0],D=g[1];return u.useEffect(function(){ar+=1;var j="".concat(Br,"-").concat(ar);D("rc-menu-uuid-".concat(j))},[]),P}var ya=e("p8sG");function Lr(a){Promise.resolve().then(a)}var Wt="__RC_UTIL_PATH_SPLIT__",sr=function(d){return d.join(Wt)},xr=function(d){return d.split(Wt)},Lt="rc-menu-more";function $r(){var a=u.useState({}),d=Object(z.a)(a,2),g=d[1],P=Object(u.useRef)(new Map),D=Object(u.useRef)(new Map),j=u.useState([]),T=Object(z.a)(j,2),w=T[0],W=T[1],x=Object(u.useRef)(0),V=Object(u.useCallback)(function(J,_){var te=sr(_);D.current.set(te,J),P.current.set(J,te),x.current+=1;var Q=x.current;Lr(function(){Q===x.current&&g({})})},[]),G=Object(u.useCallback)(function(J,_){var te=sr(_);D.current.delete(te),P.current.delete(J)},[]),U=Object(u.useCallback)(function(J){W(J)},[]),se=Object(u.useCallback)(function(J,_){var te=P.current.get(J)||"",Q=xr(te);return _&&w.includes(Q[0])&&Q.unshift(Lt),Q},[w]),Y=Object(u.useCallback)(function(J,_){return J.some(function(te){var Q=se(te,!0);return Q.includes(_)})},[se]),X=function(){var _=Object(Be.a)(P.current.keys());return w.length&&_.push(Lt),_},oe=Object(u.useCallback)(function(J){var _="".concat(P.current.get(J)).concat(Wt),te=new Set;return Object(Be.a)(D.current.keys()).forEach(function(Q){Q.startsWith(_)&&te.add(D.current.get(Q))}),te},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:se,getKeys:X,getSubPathKeys:oe}}var Ct=[],Vr=function(d){var g,P,D=d.prefixCls,j=D===void 0?"rc-menu":D,T=d.style,w=d.className,W=d.tabIndex,x=W===void 0?0:W,V=d.children,G=d.direction,U=d.id,se=d.mode,Y=se===void 0?"vertical":se,X=d.inlineCollapsed,oe=d.disabled,J=d.disabledOverflow,_=d.subMenuOpenDelay,te=_===void 0?.1:_,Q=d.subMenuCloseDelay,ie=Q===void 0?.1:Q,q=d.forceSubMenuRender,ve=d.defaultOpenKeys,ee=d.openKeys,de=d.activeKey,ce=d.defaultActiveFirst,re=d.selectable,H=re===void 0?!0:re,le=d.multiple,he=le===void 0?!1:le,pe=d.defaultSelectedKeys,Oe=d.selectedKeys,Ne=d.onSelect,ge=d.onDeselect,be=d.inlineIndent,De=be===void 0?24:be,Pe=d.motion,Re=d.defaultMotions,Ce=d.triggerSubMenuAction,Fe=Ce===void 0?"hover":Ce,Ye=d.builtinPlacements,Me=d.itemIcon,Ke=d.expandIcon,Je=d.overflowedIndicator,Ie=Je===void 0?"...":Je,On=d.getPopupContainer,qe=d.onClick,ze=d.onOpenChange,tn=d.onKeyDown,pn=d.openAnimation,hn=d.openTransitionName,je=Object(ae.a)(d,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),$e=Ft(V,Ct),Xe=u.useState(!1),Ue=Object(z.a)(Xe,2),wn=Ue[0],Hn=Ue[1],An=u.useRef(),_e=Wr(U),Sn=G==="rtl",rn=u.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),Cn=Object(z.a)(rn,2),Qe=Cn[0],en=Cn[1],Rn=u.useState(0),on=Object(z.a)(Rn,2),Ge=on[0],Ve=on[1],Yn=Ge>=$e.length-1||Qe!=="horizontal"||J,Xn=Object(He.a)(ve,{value:ee,postState:function(Z){return Z||Ct}}),ot=Object(z.a)(Xn,2),vn=ot[0],mn=ot[1],Qn=u.useState(vn),gn=Object(z.a)(Qn,2),ln=gn[0],Zn=gn[1],jn=Qe==="inline",kn=u.useRef(!1);u.useEffect(function(){jn&&Zn(vn)},[vn]),u.useEffect(function(){if(!kn.current){kn.current=!0;return}if(jn)mn(ln);else{var ne=[];mn(ne),ze==null||ze(ne)}},[jn]);var an=$r(),Pn=an.registerPath,me=an.unregisterPath,Se=an.refreshOverflowKeys,Ee=an.isSubPathKey,Ze=an.getKeyPath,qn=an.getKeys,jt=an.getSubPathKeys,Jt=u.useMemo(function(){return{registerPath:Pn,unregisterPath:me}},[Pn,me]),zt=u.useMemo(function(){return{isSubPathKey:Ee}},[Ee]);u.useEffect(function(){Se(Yn?Ct:$e.slice(Ge+1).map(function(ne){return ne.key}))},[Ge,Yn]);var Ut=Object(He.a)(de||ce&&((g=$e[0])===null||g===void 0?void 0:g.key),{value:de}),lt=Object(z.a)(Ut,2),Pt=lt[0],pt=lt[1],Dt=it(function(ne){pt(ne)}),Gt=it(function(){pt(void 0)}),Et=Object(He.a)(pe||[],{value:Oe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ct:[Z]}}),Tt=Object(z.a)(Et,2),ut=Tt[0],Dn=Tt[1],Nt=function(Z){if(!!H){var ye=Z.key,We=ut.includes(ye),nn;We?nn=ut.filter(function(et){return et!==ye}):he?nn=[].concat(Object(Be.a)(ut),[ye]):nn=[ye],Dn(nn);var $n=Object(k.a)(Object(k.a)({},Z),{},{selectedKeys:nn});We?ge==null||ge($n):Ne==null||Ne($n)}},It=it(function(ne){qe==null||qe(n(ne)),Nt(ne)}),ht=it(function(ne,Z){var ye=vn.filter(function(nn){return nn!==ne});if(Z)ye.push(ne);else if(Qe!=="inline"){var We=jt(ne);ye=ye.filter(function(nn){return!We.has(nn)})}at()(vn,ye)||(mn(ye),ze==null||ze(ye))}),_n=it(On),vt=function(Z,ye){var We=ye!=null?ye:!vn.includes(Z);ht(Z,We)},gt=Kr(Qe,Pt,Sn,_e,An,qn,Ze,pt,vt,tn);u.useEffect(function(){Hn(!0)},[]);var wt=Qe!=="horizontal"||J?$e:$e.map(function(ne,Z){return u.createElement(R,{key:ne.key,overflowDisabled:Z>Ge},ne)}),At=u.createElement(y,Object(B.a)({id:U,ref:An,prefixCls:"".concat(j,"-overflow"),component:"ul",itemComponent:Gn,className:fe()(j,"".concat(j,"-root"),"".concat(j,"-").concat(Qe),w,(P={},Object(ue.a)(P,"".concat(j,"-inline-collapsed"),en),Object(ue.a)(P,"".concat(j,"-rtl"),Sn),P)),dir:G,style:T,role:"menu",tabIndex:x,data:wt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ye=Z.length,We=ye?$e.slice(-ye):null;return u.createElement(qt,{eventKey:Lt,title:Ie,disabled:Yn,internalPopupClose:ye===0},We)},maxCount:Qe!=="horizontal"||J?y.INVALIDATE:y.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Ve(Z)},onKeyDown:gt},je));return u.createElement(xe.Provider,{value:_e},u.createElement(R,{prefixCls:j,mode:Qe,openKeys:vn,rtl:Sn,disabled:oe,motion:wn?Pe:null,defaultMotions:wn?Re:null,activeKey:Pt,onActive:Dt,onInactive:Gt,selectedKeys:ut,inlineIndent:De,subMenuOpenDelay:te,subMenuCloseDelay:ie,forceSubMenuRender:q,builtinPlacements:Ye,triggerSubMenuAction:Fe,getPopupContainer:_n,itemIcon:Me,expandIcon:Ke,onItemClick:It,onOpenChange:ht},u.createElement($.Provider,{value:zt},At),u.createElement(v.Provider,{value:Jt},$e)))},Jr=Vr,zr=function(d){var g=d.className,P=d.title,D=d.eventKey,j=d.children,T=Object(ae.a)(d,["className","title","eventKey","children"]),w=u.useContext(C),W=w.prefixCls,x="".concat(W,"-item-group");return u.createElement("li",Object(B.a)({},T,{onClick:function(G){return G.stopPropagation()},className:fe()(x,g)}),u.createElement("div",{className:"".concat(x,"-title"),title:typeof P=="string"?P:void 0},P),u.createElement("ul",{className:"".concat(x,"-list")},j))};function Ur(a){var d=a.children,g=Object(ae.a)(a,["children"]),P=K(g.eventKey),D=Ft(d,P),j=O();return j?D:u.createElement(zr,g,D)}function Gr(a){var d=a.className,g=a.style,P=u.useContext(C),D=P.prefixCls,j=O();return j?null:u.createElement("li",{className:fe()("".concat(D,"-item-divider"),d),style:g})}var ft=Jr;ft.Item=Gn,ft.SubMenu=qt,ft.ItemGroup=Ur,ft.Divider=Gr;var Hr=ft,Yr=e("eDIo");function Xr(a,d){var g=a.prefixCls,P=a.editable,D=a.locale,j=a.style;return!P||P.showAdd===!1?null:u.createElement("button",{ref:d,type:"button",className:"".concat(g,"-nav-add"),style:j,"aria-label":(D==null?void 0:D.addAriaLabel)||"Add tab",onClick:function(w){P.onEdit("add",{event:w})}},P.addIcon||"+")}var ir=u.forwardRef(Xr);function Qr(a,d){var g=a.prefixCls,P=a.id,D=a.tabs,j=a.locale,T=a.mobile,w=a.moreIcon,W=w===void 0?"More":w,x=a.moreTransitionName,V=a.style,G=a.className,U=a.editable,se=a.tabBarGutter,Y=a.rtl,X=a.onTabClick,oe=Object(u.useState)(!1),J=Object(z.a)(oe,2),_=J[0],te=J[1],Q=Object(u.useState)(null),ie=Object(z.a)(Q,2),q=ie[0],ve=ie[1],ee="".concat(P,"-more-popup"),de="".concat(g,"-dropdown"),ce=q!==null?"".concat(ee,"-").concat(q):null,re=j==null?void 0:j.dropdownAriaLabel,H=u.createElement(Hr,{onClick:function(be){var De=be.key,Pe=be.domEvent;X(De,Pe),te(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":ce,selectedKeys:[q],"aria-label":re!==void 0?re:"expanded dropdown"},D.map(function(ge){return u.createElement(Gn,{key:ge.key,id:"".concat(ee,"-").concat(ge.key),role:"option","aria-controls":P&&"".concat(P,"-panel-").concat(ge.key),disabled:ge.disabled},ge.tab)}));function le(ge){for(var be=D.filter(function(Fe){return!Fe.disabled}),De=be.findIndex(function(Fe){return Fe.key===q})||0,Pe=be.length,Re=0;Re<Pe;Re+=1){De=(De+ge+Pe)%Pe;var Ce=be[De];if(!Ce.disabled){ve(Ce.key);return}}}function he(ge){var be=ge.which;if(!_){[Te.a.DOWN,Te.a.SPACE,Te.a.ENTER].includes(be)&&(te(!0),ge.preventDefault());return}switch(be){case Te.a.UP:le(-1),ge.preventDefault();break;case Te.a.DOWN:le(1),ge.preventDefault();break;case Te.a.ESC:te(!1);break;case Te.a.SPACE:case Te.a.ENTER:q!==null&&X(q,ge);break}}Object(u.useEffect)(function(){var ge=document.getElementById(ce);ge&&ge.scrollIntoView&&ge.scrollIntoView(!1)},[q]),Object(u.useEffect)(function(){_||ve(null)},[_]);var pe=Object(ue.a)({},Y?"marginLeft":"marginRight",se);D.length||(pe.visibility="hidden",pe.order=1);var Oe=fe()(Object(ue.a)({},"".concat(de,"-rtl"),Y)),Ne=T?null:u.createElement(Yr.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:_,transitionName:x,onVisibleChange:te,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},u.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:pe,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(P,"-more"),"aria-expanded":_,onKeyDown:he},W));return u.createElement("div",{className:fe()("".concat(g,"-nav-operations"),G),style:V,ref:d},Ne,u.createElement(ir,{prefixCls:g,locale:j,editable:U}))}var Zr=u.forwardRef(Qr),xt=Object(u.createContext)(null),kr=.1,or=.01,Rt=20,lr=Math.pow(.995,Rt);function qr(a,d){var g=Object(u.useState)(),P=Object(z.a)(g,2),D=P[0],j=P[1],T=Object(u.useState)(0),w=Object(z.a)(T,2),W=w[0],x=w[1],V=Object(u.useState)(0),G=Object(z.a)(V,2),U=G[0],se=G[1],Y=Object(u.useState)(),X=Object(z.a)(Y,2),oe=X[0],J=X[1],_=Object(u.useRef)();function te(de){var ce=de.touches[0],re=ce.screenX,H=ce.screenY;j({x:re,y:H}),window.clearInterval(_.current)}function Q(de){if(!!D){de.preventDefault();var ce=de.touches[0],re=ce.screenX,H=ce.screenY;j({x:re,y:H});var le=re-D.x,he=H-D.y;d(le,he);var pe=Date.now();x(pe),se(pe-W),J({x:le,y:he})}}function ie(){if(!!D&&(j(null),J(null),oe)){var de=oe.x/U,ce=oe.y/U,re=Math.abs(de),H=Math.abs(ce);if(Math.max(re,H)<kr)return;var le=de,he=ce;_.current=window.setInterval(function(){if(Math.abs(le)<or&&Math.abs(he)<or){window.clearInterval(_.current);return}le*=lr,he*=lr,d(le*Rt,he*Rt)},Rt)}}var q=Object(u.useRef)();function ve(de){var ce=de.deltaX,re=de.deltaY,H=0,le=Math.abs(ce),he=Math.abs(re);le===he?H=q.current==="x"?ce:re:le>he?(H=ce,q.current="x"):(H=re,q.current="y"),d(-H,-H)&&de.preventDefault()}var ee=Object(u.useRef)(null);ee.current={onTouchStart:te,onTouchMove:Q,onTouchEnd:ie,onWheel:ve},u.useEffect(function(){function de(le){ee.current.onTouchStart(le)}function ce(le){ee.current.onTouchMove(le)}function re(le){ee.current.onTouchEnd(le)}function H(le){ee.current.onWheel(le)}return document.addEventListener("touchmove",ce,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),a.current.addEventListener("touchstart",de,{passive:!1}),a.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",ce),document.removeEventListener("touchend",re)}},[])}function _r(){var a=Object(u.useRef)(new Map);function d(P){return a.current.has(P)||a.current.set(P,u.createRef()),a.current.get(P)}function g(P){a.current.delete(P)}return[d,g]}function ur(a,d){var g=u.useRef(a),P=u.useState({}),D=Object(z.a)(P,2),j=D[1];function T(w){var W=typeof w=="function"?w(g.current):w;W!==g.current&&d(W,g.current),g.current=W,j({})}return[g.current,T]}var dr=function(d){var g=d.position,P=d.prefixCls,D=d.extra;if(!D)return null;var j,T=D;return g==="right"&&(j=T.right||!T.left&&T||null),g==="left"&&(j=T.left||null),j?u.createElement("div",{className:"".concat(P,"-extra-content")},j):null};function ea(a,d){var g,P=u.useContext(xt),D=P.prefixCls,j=P.tabs,T=a.className,w=a.style,W=a.id,x=a.animated,V=a.activeKey,G=a.rtl,U=a.extra,se=a.editable,Y=a.locale,X=a.tabPosition,oe=a.tabBarGutter,J=a.children,_=a.onTabClick,te=a.onTabScroll,Q=Object(u.useRef)(),ie=Object(u.useRef)(),q=Object(u.useRef)(),ve=Object(u.useRef)(),ee=_r(),de=Object(z.a)(ee,2),ce=de[0],re=de[1],H=X==="top"||X==="bottom",le=ur(0,function(ne,Z){H&&te&&te({direction:ne>Z?"left":"right"})}),he=Object(z.a)(le,2),pe=he[0],Oe=he[1],Ne=ur(0,function(ne,Z){!H&&te&&te({direction:ne>Z?"top":"bottom"})}),ge=Object(z.a)(Ne,2),be=ge[0],De=ge[1],Pe=Object(u.useState)(0),Re=Object(z.a)(Pe,2),Ce=Re[0],Fe=Re[1],Ye=Object(u.useState)(0),Me=Object(z.a)(Ye,2),Ke=Me[0],Je=Me[1],Ie=Object(u.useState)(0),On=Object(z.a)(Ie,2),qe=On[0],ze=On[1],tn=Object(u.useState)(0),pn=Object(z.a)(tn,2),hn=pn[0],je=pn[1],$e=Object(u.useState)(null),Xe=Object(z.a)($e,2),Ue=Xe[0],wn=Xe[1],Hn=Object(u.useState)(null),An=Object(z.a)(Hn,2),_e=An[0],Sn=An[1],rn=Object(u.useState)(0),Cn=Object(z.a)(rn,2),Qe=Cn[0],en=Cn[1],Rn=Object(u.useState)(0),on=Object(z.a)(Rn,2),Ge=on[0],Ve=on[1],Yn=yn(new Map),Xn=Object(z.a)(Yn,2),ot=Xn[0],vn=Xn[1],mn=dt(j,ot,Ce),Qn="".concat(D,"-nav-operations-hidden"),gn=0,ln=0;H?G?(gn=0,ln=Math.max(0,Ce-Ue)):(gn=Math.min(0,Ue-Ce),ln=0):(gn=Math.min(0,_e-Ke),ln=0);function Zn(ne){return ne<gn?gn:ne>ln?ln:ne}var jn=Object(u.useRef)(),kn=Object(u.useState)(),an=Object(z.a)(kn,2),Pn=an[0],me=an[1];function Se(){me(Date.now())}function Ee(){window.clearTimeout(jn.current)}qr(Q,function(ne,Z){function ye(We,nn){We(function($n){var et=Zn($n+nn);return et})}if(H){if(Ue>=Ce)return!1;ye(Oe,ne)}else{if(_e>=Ke)return!1;ye(De,Z)}return Ee(),Se(),!0}),Object(u.useEffect)(function(){return Ee(),Pn&&(jn.current=window.setTimeout(function(){me(0)},100)),Ee},[Pn]);function Ze(){var ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=mn.get(ne)||{width:0,height:0,left:0,right:0,top:0};if(H){var ye=pe;G?Z.right<pe?ye=Z.right:Z.right+Z.width>pe+Ue&&(ye=Z.right+Z.width-Ue):Z.left<-pe?ye=-Z.left:Z.left+Z.width>-pe+Ue&&(ye=-(Z.left+Z.width-Ue)),De(0),Oe(Zn(ye))}else{var We=be;Z.top<-be?We=-Z.top:Z.top+Z.height>-be+_e&&(We=-(Z.top+Z.height-_e)),Oe(0),De(Zn(We))}}var qn=ct(mn,{width:Ue,height:_e,left:pe,top:be},{width:qe,height:hn},{width:Qe,height:Ge},Object(k.a)(Object(k.a)({},a),{},{tabs:j})),jt=Object(z.a)(qn,2),Jt=jt[0],zt=jt[1],Ut=j.map(function(ne){var Z=ne.key;return u.createElement(Mn,{id:W,prefixCls:D,key:Z,rtl:G,tab:ne,closable:ne.closable,editable:se,active:Z===V,tabPosition:X,tabBarGutter:oe,renderWrapper:J,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:ce(Z),onClick:function(We){_(Z,We)},onRemove:function(){re(Z)},onFocus:function(){Ze(Z),Se(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),lt=Tn(function(){var ne,Z,ye,We,nn,$n,et,Ht,Yt,la=((ne=Q.current)===null||ne===void 0?void 0:ne.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,hr=((ye=ve.current)===null||ye===void 0?void 0:ye.offsetWidth)||0,vr=((We=ve.current)===null||We===void 0?void 0:We.offsetHeight)||0,da=((nn=q.current)===null||nn===void 0?void 0:nn.offsetWidth)||0,ca=(($n=q.current)===null||$n===void 0?void 0:$n.offsetHeight)||0;wn(la),Sn(ua),en(hr),Ve(vr);var gr=(((et=ie.current)===null||et===void 0?void 0:et.offsetWidth)||0)-hr,yr=(((Ht=ie.current)===null||Ht===void 0?void 0:Ht.offsetHeight)||0)-vr;Fe(gr),Je(yr);var br=(Yt=q.current)===null||Yt===void 0?void 0:Yt.className.includes(Qn);ze(gr-(br?0:da)),je(yr-(br?0:ca)),vn(function(){var Or=new Map;return j.forEach(function(ma){var Sr=ma.key,yt=ce(Sr).current;yt&&Or.set(Sr,{width:yt.offsetWidth,height:yt.offsetHeight,left:yt.offsetLeft,top:yt.offsetTop})}),Or})}),Pt=j.slice(0,Jt),pt=j.slice(zt+1),Dt=[].concat(Object(Be.a)(Pt),Object(Be.a)(pt)),Gt=Object(u.useState)(),Et=Object(z.a)(Gt,2),Tt=Et[0],ut=Et[1],Dn=mn.get(V),Nt=Object(u.useRef)();function It(){Le.a.cancel(Nt.current)}Object(u.useEffect)(function(){var ne={};return Dn&&(H?(G?ne.right=Dn.right:ne.left=Dn.left,ne.width=Dn.width):(ne.top=Dn.top,ne.height=Dn.height)),It(),Nt.current=Object(Le.a)(function(){ut(ne)}),It},[Dn,H,G]),Object(u.useEffect)(function(){Ze()},[V,Dn,mn,H]),Object(u.useEffect)(function(){lt()},[G,oe,V,j.map(function(ne){return ne.key}).join("_")]);var ht=!!Dt.length,_n="".concat(D,"-nav-wrap"),vt,gt,wt,At;return H?G?(gt=pe>0,vt=pe+Ue<Ce):(vt=pe<0,gt=-pe+Ue<Ce):(wt=be<0,At=-be+_e<Ke),u.createElement("div",{ref:d,role:"tablist",className:fe()("".concat(D,"-nav"),T),style:w,onKeyDown:function(){Se()}},u.createElement(dr,{position:"left",extra:U,prefixCls:D}),u.createElement(Fn.default,{onResize:lt},u.createElement("div",{className:fe()(_n,(g={},Object(ue.a)(g,"".concat(_n,"-ping-left"),vt),Object(ue.a)(g,"".concat(_n,"-ping-right"),gt),Object(ue.a)(g,"".concat(_n,"-ping-top"),wt),Object(ue.a)(g,"".concat(_n,"-ping-bottom"),At),g)),ref:Q},u.createElement(Fn.default,{onResize:lt},u.createElement("div",{ref:ie,className:"".concat(D,"-nav-list"),style:{transform:"translate(".concat(pe,"px, ").concat(be,"px)"),transition:Pn?"none":void 0}},Ut,u.createElement(ir,{ref:ve,prefixCls:D,locale:Y,editable:se,style:{visibility:ht?"hidden":null}}),u.createElement("div",{className:fe()("".concat(D,"-ink-bar"),Object(ue.a)({},"".concat(D,"-ink-bar-animated"),x.inkBar)),style:Tt}))))),u.createElement(Zr,Object(B.a)({},a,{ref:q,prefixCls:D,tabs:Dt,className:!ht&&Qn})),u.createElement(dr,{position:"right",extra:U,prefixCls:D}))}var cr=u.forwardRef(ea);function na(a){var d=a.id,g=a.activeKey,P=a.animated,D=a.tabPosition,j=a.rtl,T=a.destroyInactiveTabPane,w=u.useContext(xt),W=w.prefixCls,x=w.tabs,V=P.tabPane,G=x.findIndex(function(U){return U.key===g});return u.createElement("div",{className:fe()("".concat(W,"-content-holder"))},u.createElement("div",{className:fe()("".concat(W,"-content"),"".concat(W,"-content-").concat(D),Object(ue.a)({},"".concat(W,"-content-animated"),V)),style:G&&V?Object(ue.a)({},j?"marginRight":"marginLeft","-".concat(G,"00%")):null},x.map(function(U){return u.cloneElement(U.node,{key:U.key,prefixCls:W,tabKey:U.key,id:d,animated:V,active:U.key===g,destroyInactiveTabPane:T})})))}function mr(a){var d=a.prefixCls,g=a.forceRender,P=a.className,D=a.style,j=a.id,T=a.active,w=a.animated,W=a.destroyInactiveTabPane,x=a.tabKey,V=a.children,G=u.useState(g),U=Object(z.a)(G,2),se=U[0],Y=U[1];u.useEffect(function(){T?Y(!0):W&&Y(!1)},[T,W]);var X={};return T||(w?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),u.createElement("div",{id:j&&"".concat(j,"-panel-").concat(x),role:"tabpanel",tabIndex:T?0:-1,"aria-labelledby":j&&"".concat(j,"-tab-").concat(x),"aria-hidden":!T,style:Object(k.a)(Object(k.a)({},X),D),className:fe()("".concat(d,"-tabpane"),T&&"".concat(d,"-tabpane-active"),P)},(T||se||g)&&V)}var fr=0;function ta(a){return Object(sn.a)(a).map(function(d){if(u.isValidElement(d)){var g=d.key!==void 0?String(d.key):void 0;return Object(k.a)(Object(k.a)({key:g},d.props),{},{node:d})}return null}).filter(function(d){return d})}function ra(a,d){var g,P=a.id,D=a.prefixCls,j=D===void 0?"rc-tabs":D,T=a.className,w=a.children,W=a.direction,x=a.activeKey,V=a.defaultActiveKey,G=a.editable,U=a.animated,se=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=a.tabPosition,X=Y===void 0?"top":Y,oe=a.tabBarGutter,J=a.tabBarStyle,_=a.tabBarExtraContent,te=a.locale,Q=a.moreIcon,ie=a.moreTransitionName,q=a.destroyInactiveTabPane,ve=a.renderTabBar,ee=a.onChange,de=a.onTabClick,ce=a.onTabScroll,re=Object(ae.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(w),le=W==="rtl",he;se===!1?he={inkBar:!1,tabPane:!1}:se===!0?he={inkBar:!0,tabPane:!0}:he=Object(k.a)({inkBar:!0,tabPane:!1},Object(we.a)(se)==="object"?se:{});var pe=Object(u.useState)(!1),Oe=Object(z.a)(pe,2),Ne=Oe[0],ge=Oe[1];Object(u.useEffect)(function(){ge(Object(fn.a)())},[]);var be=Object(He.a)(function(){var je;return(je=H[0])===null||je===void 0?void 0:je.key},{value:x,defaultValue:V}),De=Object(z.a)(be,2),Pe=De[0],Re=De[1],Ce=Object(u.useState)(function(){return H.findIndex(function(je){return je.key===Pe})}),Fe=Object(z.a)(Ce,2),Ye=Fe[0],Me=Fe[1];Object(u.useEffect)(function(){var je=H.findIndex(function(Xe){return Xe.key===Pe});if(je===-1){var $e;je=Math.max(0,Math.min(Ye,H.length-1)),Re(($e=H[je])===null||$e===void 0?void 0:$e.key)}Me(je)},[H.map(function(je){return je.key}).join("_"),Pe,Ye]);var Ke=Object(He.a)(null,{value:P}),Je=Object(z.a)(Ke,2),Ie=Je[0],On=Je[1],qe=X;Ne&&!["left","right"].includes(X)&&(qe="top"),Object(u.useEffect)(function(){P||(On("rc-tabs-".concat(fr)),fr+=1)},[]);function ze(je,$e){de==null||de(je,$e),Re(je),ee==null||ee(je)}var tn={id:Ie,activeKey:Pe,animated:he,tabPosition:qe,rtl:le,mobile:Ne},pn,hn=Object(k.a)(Object(k.a)({},tn),{},{editable:G,locale:te,moreIcon:Q,moreTransitionName:ie,tabBarGutter:oe,onTabClick:ze,onTabScroll:ce,extra:_,style:J,panes:w});return ve?pn=ve(hn,cr):pn=u.createElement(cr,hn),u.createElement(xt.Provider,{value:{tabs:H,prefixCls:j}},u.createElement("div",Object(B.a)({ref:d,id:P,className:fe()(j,"".concat(j,"-").concat(qe),(g={},Object(ue.a)(g,"".concat(j,"-mobile"),Ne),Object(ue.a)(g,"".concat(j,"-editable"),G),Object(ue.a)(g,"".concat(j,"-rtl"),le),g),T)},re),pn,u.createElement(na,Object(B.a)({destroyInactiveTabPane:q},tn,{animated:he}))))}var pr=u.forwardRef(ra);pr.TabPane=mr;var aa=pr,sa=aa,$t=e("MZF8"),cn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Vt(a,d){var g,P=(g=a.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return P||(P=d.tsx?"tsx":"jsx"),P}var oa=a=>{var d,g,P,D=Object(u.useRef)(),j=Object(u.useContext)(cn.context),T=j.locale,w=Object(cn.useLocaleProps)(T,a),W=Object(cn.useDemoUrl)(w.identifier),x=w.demoUrl||W,V=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(w.identifier),G=Object.keys(w.sources).length===1,U=Object(cn.useCodeSandbox)((d=w.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:w),se=Object(cn.useRiddle)((g=w.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:w),Y=Object(cn.useMotions)(w.motions||[],D.current),X=Object(L.default)(Y,2),oe=X[0],J=X[1],_=Object(cn.useCopy)(),te=Object(L.default)(_,2),Q=te[0],ie=te[1],q=Object(u.useState)("_"),ve=Object(L.default)(q,2),ee=ve[0],de=ve[1],ce=Object(u.useState)(Vt(ee,w.sources[ee])),re=Object(L.default)(ce,2),H=re[0],le=re[1],he=Object(u.useState)(Boolean(w.defaultShowCode)),pe=Object(L.default)(he,2),Oe=pe[0],Ne=pe[1],ge=Object(u.useState)(Math.random()),be=Object(L.default)(ge,2),De=be[0],Pe=be[1],Re=w.sources[ee][H]||w.sources[ee].content,Ce=Object(cn.useTSPlaygroundUrl)(T,Re),Fe=Object(u.useRef)(),Ye=Object(cn.usePrefersColor)(),Me=Object(L.default)(Ye,1),Ke=Me[0];Object(u.useEffect)(()=>{Pe(Math.random())},[Ke]);function Je(Ie){de(Ie),le(Vt(Ie,w.sources[Ie]))}return b.a.createElement("div",{style:w.style,className:[w.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:w.identifier,"data-debug":w.debug||void 0,"data-iframe":w.iframe||void 0},w.iframe&&b.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),b.a.createElement("div",{ref:D,className:"__dumi-default-previewer-demo",style:{transform:w.transform?"translate(0, 0)":void 0,padding:w.compact||w.iframe&&w.compact!==!1?"0":void 0,background:w.background}},w.iframe?b.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(w.iframe).replace(/(\d)$/,"$1px")},key:De,src:x,ref:Fe}):w.children),b.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":w.title},w.title&&b.a.createElement(cn.AnchorLink,{to:"#".concat(w.identifier)},w.title),w.description&&b.a.createElement("div",{dangerouslySetInnerHTML:{__html:w.description}})),b.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&b.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),se&&b.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),w.motions&&b.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>oe()}),w.iframe&&b.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Pe(Math.random())}),!((P=w.hideActions)!==null&&P!==void 0&&P.includes("EXTERNAL"))&&b.a.createElement(cn.Link,{target:"_blank",to:x},b.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),b.a.createElement("span",null),b.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ie,onClick:()=>Q(Re)}),H==="tsx"&&Oe&&b.a.createElement(cn.Link,{target:"_blank",to:Ce},b.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),b.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ne(!Oe)})),Oe&&b.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&b.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Je},Object.keys(w.sources).map(Ie=>b.a.createElement(mr,{tab:Ie==="_"?"index.".concat(Vt(Ie,w.sources[Ie])):Ie,key:Ie}))),b.a.createElement("div",{className:"__dumi-default-previewer-source"},b.a.createElement(ia.a,{code:Re,lang:H,showCopy:!1}))))},Oa=un.default=oa},"80pN":function(En,un,e){"use strict";(function(L){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var u=e("MgzW"),b=e("q1tI"),B=e("i8i4"),ue=e("QCnb");function z(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var we=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;we.hasOwnProperty("ReactCurrentDispatcher")||(we.ReactCurrentDispatcher={current:null}),we.hasOwnProperty("ReactCurrentBatchConfig")||(we.ReactCurrentBatchConfig={suspense:null});function ae(t){var r=t,l=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.effectTag&1026)!=0&&(l=r.return),t=r.return;while(t)}return r.tag===3?l:null}function k(t){if(ae(t)!==t)throw Error(z(188))}function Ae(t){var r=t.alternate;if(!r){if(r=ae(t),r===null)throw Error(z(188));return r!==t?null:t}for(var l=t,v=r;;){var O=l.return;if(O===null)break;var M=O.alternate;if(M===null){if(v=O.return,v!==null){l=v;continue}break}if(O.child===M.child){for(M=O.child;M;){if(M===l)return k(O),t;if(M===v)return k(O),r;M=M.sibling}throw Error(z(188))}if(l.return!==v.return)l=O,v=M;else{for(var K=!1,$=O.child;$;){if($===l){K=!0,l=O,v=M;break}if($===v){K=!0,v=O,l=M;break}$=$.sibling}if(!K){for($=M.child;$;){if($===l){K=!0,l=M,v=O;break}if($===v){K=!0,v=M,l=O;break}$=$.sibling}if(!K)throw Error(z(189))}}if(l.alternate!==v)throw Error(z(190))}if(l.tag!==3)throw Error(z(188));return l.stateNode.current===l?t:r}function fe(){return!0}function sn(){return!1}function fn(t,r,l,v){this.dispatchConfig=t,this._targetInst=r,this.nativeEvent=l,t=this.constructor.Interface;for(var O in t)t.hasOwnProperty(O)&&((r=t[O])?this[O]=r(l):O==="target"?this.target=v:this[O]=l[O]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?fe:sn,this.isPropagationStopped=sn,this}u(fn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=fe)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=fe)},persist:function(){this.isPersistent=fe},isPersistent:sn,destructor:function(){var t=this.constructor.Interface,r;for(r in t)this[r]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=sn,this._dispatchInstances=this._dispatchListeners=null}}),fn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},fn.extend=function(t){function r(){}function l(){return v.apply(this,arguments)}var v=this;r.prototype=v.prototype;var O=new r;return u(O,l.prototype),l.prototype=O,l.prototype.constructor=l,l.Interface=u({},v.Interface,t),l.extend=v.extend,Le(l),l},Le(fn);function He(t,r,l,v){if(this.eventPool.length){var O=this.eventPool.pop();return this.call(O,t,r,l,v),O}return new this(t,r,l,v)}function Be(t){if(!(t instanceof this))throw Error(z(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function Le(t){t.eventPool=[],t.getPooled=He,t.release=Be}var Fn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Tn(t,r){var l={};return l[t.toLowerCase()]=r.toLowerCase(),l["Webkit"+t]="webkit"+r,l["Moz"+t]="moz"+r,l}var yn={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Te={},nt={};Fn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Mn(t){if(Te[t])return Te[t];if(!yn[t])return t;var r=yn[t],l;for(l in r)if(r.hasOwnProperty(l)&&l in nt)return Te[t]=r[l];return t}var tt=Mn("animationend"),dt=Mn("animationiteration"),rt=Mn("animationstart"),ct=Mn("transitionend"),Kn=null;function at(t){if(Kn===null)try{var r=("require"+Math.random()).slice(0,7);Kn=(L&&L[r])("timers").setImmediate}catch(l){Kn=function(v){var O=new MessageChannel;O.port1.onmessage=v,O.port2.postMessage(void 0)}}return Kn(t)}var Vn=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,mt=Vn[11],Bn=Vn[12],Wn=B.unstable_batchedUpdates,Jn=we.IsSomeRendererActing,zn=typeof ue.unstable_flushAllWithoutAsserting=="function",Ln=ue.unstable_flushAllWithoutAsserting||function(){for(var t=!1;mt();)t=!0;return t};function st(t){try{Ln(),at(function(){Ln()?st(t):t()})}catch(r){t(r)}}var bn=0,N=!1,I=B.findDOMNode,E=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,m=E[0],s=E[4],h=E[5],y=E[6],S=E[7],i=E[8],p=E[9],o=E[10];function A(){}function F(t,r){if(!t)return[];if(t=Ae(t),!t)return[];for(var l=t,v=[];;){if(l.tag===5||l.tag===6||l.tag===1||l.tag===0){var O=l.stateNode;r(O)&&v.push(O)}if(l.child)l.child.return=l,l=l.child;else{if(l===t)return v;for(;!l.sibling;){if(!l.return||l.return===t)return v;l=l.return}l.sibling.return=l.return,l=l.sibling}}}function C(t,r){if(t&&!t._reactInternalFiber){var l=""+t;throw t=Array.isArray(t)?"an array":t&&t.nodeType===1&&t.tagName?"a DOM node":l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l,Error(z(286,r,t))}}var c={renderIntoDocument:function(t){var r=document.createElement("div");return B.render(t,r)},isElement:function(t){return b.isValidElement(t)},isElementOfType:function(t,r){return b.isValidElement(t)&&t.type===r},isDOMComponent:function(t){return!(!t||t.nodeType!==1||!t.tagName)},isDOMComponentElement:function(t){return!!(t&&b.isValidElement(t)&&t.tagName)},isCompositeComponent:function(t){return c.isDOMComponent(t)?!1:t!=null&&typeof t.render=="function"&&typeof t.setState=="function"},isCompositeComponentWithType:function(t,r){return c.isCompositeComponent(t)?t._reactInternalFiber.type===r:!1},findAllInRenderedTree:function(t,r){return C(t,"findAllInRenderedTree"),t?F(t._reactInternalFiber,r):[]},scryRenderedDOMComponentsWithClass:function(t,r){return C(t,"scryRenderedDOMComponentsWithClass"),c.findAllInRenderedTree(t,function(l){if(c.isDOMComponent(l)){var v=l.className;typeof v!="string"&&(v=l.getAttribute("class")||"");var O=v.split(/\s+/);if(!Array.isArray(r)){if(r===void 0)throw Error(z(11));r=r.split(/\s+/)}return r.every(function(M){return O.indexOf(M)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(t,r){if(C(t,"findRenderedDOMComponentWithClass"),t=c.scryRenderedDOMComponentsWithClass(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for class:"+r);return t[0]},scryRenderedDOMComponentsWithTag:function(t,r){return C(t,"scryRenderedDOMComponentsWithTag"),c.findAllInRenderedTree(t,function(l){return c.isDOMComponent(l)&&l.tagName.toUpperCase()===r.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,r){if(C(t,"findRenderedDOMComponentWithTag"),t=c.scryRenderedDOMComponentsWithTag(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for tag:"+r);return t[0]},scryRenderedComponentsWithType:function(t,r){return C(t,"scryRenderedComponentsWithType"),c.findAllInRenderedTree(t,function(l){return c.isCompositeComponentWithType(l,r)})},findRenderedComponentWithType:function(t,r){if(C(t,"findRenderedComponentWithType"),t=c.scryRenderedComponentsWithType(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for componentType:"+r);return t[0]},mockComponent:function(t,r){return r=r||t.mockTagName||"div",t.prototype.render.mockImplementation(function(){return b.createElement(r,null,this.props.children)}),this},nativeTouchData:function(t,r){return{touches:[{pageX:t,pageY:r}]}},Simulate:null,SimulateNative:{},act:function(t){function r(){bn--,Jn.current=l,Bn.current=v}N===!1&&(N=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),bn++;var l=Jn.current,v=Bn.current;Jn.current=!0,Bn.current=!0;try{var O=Wn(t)}catch(M){throw r(),M}if(O!==null&&typeof O=="object"&&typeof O.then=="function")return{then:function(M,K){O.then(function(){1<bn||zn===!0&&l===!0?(r(),M()):st(function($){r(),$?K($):M()})},function($){r(),K($)})}};try{bn!==1||zn!==!1&&l!==!1||Ln(),r()}catch(M){throw r(),M}return{then:function(M){M()}}}};function R(t){return function(r,l){if(b.isValidElement(r))throw Error(z(228));if(c.isCompositeComponent(r))throw Error(z(229));var v=s[t],O=new A;O.target=r,O.type=t.toLowerCase();var M=m(r),K=new fn(v,M,O,r);K.persist(),u(K,l),v.phasedRegistrationNames?h(K):y(K),B.unstable_batchedUpdates(function(){S(r),o(K)}),i()}}c.Simulate={};for(var f in s)c.Simulate[f]=R(f);function n(t,r){return function(l,v){var O=new A(t);u(O,v),c.isDOMComponent(l)?(l=I(l),O.target=l,p(r,1,document,O)):l.tagName&&(O.target=l,p(r,1,document,O))}}[["abort","abort"],[tt,"animationEnd"],[dt,"animationIteration"],[rt,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ct,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(t){var r=t[1];c.SimulateNative[r]=n(r,t[0])}),L.exports=c.default||c}).call(this,e("hOG+")(En))},F4QJ:function(En,un,e){"use strict";Object.defineProperty(un,"__esModule",{value:!0}),un.default=void 0;function L(){var ae=b(e("q1tI"));return L=function(){return ae},ae}function u(){var ae=e("dEAq");return u=function(){return ae},ae}function b(ae){return ae&&ae.__esModule?ae:{default:ae}}function B(ae,k){var Ae=Object.keys(ae);if(Object.getOwnPropertySymbols){var fe=Object.getOwnPropertySymbols(ae);k&&(fe=fe.filter(function(sn){return Object.getOwnPropertyDescriptor(ae,sn).enumerable})),Ae.push.apply(Ae,fe)}return Ae}function ue(ae){for(var k=1;k<arguments.length;k++){var Ae=arguments[k]!=null?arguments[k]:{};k%2?B(Object(Ae),!0).forEach(function(fe){z(ae,fe,Ae[fe])}):Object.getOwnPropertyDescriptors?Object.defineProperties(ae,Object.getOwnPropertyDescriptors(Ae)):B(Object(Ae)).forEach(function(fe){Object.defineProperty(ae,fe,Object.getOwnPropertyDescriptor(Ae,fe))})}return ae}function z(ae,k,Ae){return k in ae?Object.defineProperty(ae,k,{value:Ae,enumerable:!0,configurable:!0,writable:!0}):ae[k]=Ae,ae}var we=function(k,Ae){var fe=[],sn=k.match.params.uuid,fn=k.location.query.wrapper===void 0,He=Ae[sn];if(He){var Be=ue(ue({},He.previewerProps),{},{hideActions:(He.previewerProps.hideActions||[]).concat(["EXTERNAL"])});k.location.query.capture!==void 0&&(Be.motions=(Be.motions||[]).slice(),Be.motions.unshift("autoplay"),Be.motions.every(function(Le){return!Le.startsWith("capture")})&&Be.motions.push("capture:[id|=root]")),fn?fe=[L().default.createElement(function(){return(0,u().useMotions)(Be.motions||[],document.documentElement),L().default.createElement("div",{},L().default.createElement(He.component))})]:fe=[Be,L().default.createElement(He.component)]}return fe};un.default=we},JjdP:function(En,un,e){"use strict";e.r(un);var L=e("9og8"),u=e("WmNS"),b=e.n(u),B=e("LtsZ"),ue=`import React, { useRef } from 'react';
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

export default Demo;`,z=`import { get, set, cloneDeep } from 'lodash-es';

// window.log1 = value => {
//   console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
// };

// window.log2 = value => {
//   console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
// };

// window.log3 = value => {
//   console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
// };

// window.log4 = value => {
//   console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
// };

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
  return (
    schema && schema.type === 'object' && schema.properties && !schema.widget
  );
}

// TODO: to support case that item is not an object
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: more tests to make sure weird & wrong schema won't crush
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema);
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // path as $id, for easy access to path in schema
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.items.properties = {};
  }

  if (schema.type) {
    result[_name] = { parent, schema, children };
  }
  return result;
}

export function getSchemaFromFlatten(flatten, path = '#') {
  let schema = {};
  const item = clone(flatten[path]);
  if (item) {
    schema = item.schema;
    // schema.$id && delete schema.$id;
    if (item.children.length > 0) {
      item.children.forEach(child => {
        if (!flatten[child]) return;
        const key = getKeyFromPath(child);
        if (isObjType(schema)) {
          schema.properties[key] = getSchemaFromFlatten(flatten, child);
        }
        if (isListType(schema)) {
          schema.items.properties[key] = getSchemaFromFlatten(flatten, child);
        }
      });
    }
  }
  return schema;
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

export const clone = cloneDeep;

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

export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  if (typeof func !== 'string') return false;
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{function\\(.+}}$/;
  // const reg2 = /^{{(.+=>.+)}}$/;
  if (typeof func === 'string' && func.match(pattern) && !func.match(reg1)) {
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
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
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

export const schemaContainsExpression = schema => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (isObject(value)) {
        return schemaContainsExpression(value);
      } else {
        return false;
      }
    });
  }
  return false;
};

export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
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

export const isFunctionString = fString => {
  return typeof fString === 'string' && fString.indexOf('function(') === 0;
};

export function parseFunction(fString) {
  if (isFunctionString(fString)) {
    return Function('return ' + fString)();
  }
  return fString;
}

// \u83B7\u5F97propsSchema\u7684children
// function getChildren2(schema) {
//   if (!schema) return [];
//   const {
//     // object
//     properties,
//     // array
//     items,
//     type,
//   } = schema;
//   if (!properties && !items) {
//     return [];
//   }
//   let schemaSubs = {};
//   if (type === 'object') {
//     schemaSubs = properties;
//   }
//   if (type === 'array') {
//     schemaSubs = items.properties;
//   }
//   return Object.keys(schemaSubs).map(name => ({
//     schema: schemaSubs[name],
//     name,
//   }));
// }

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

export const getKeyFromPath = (path = '#') => {
  try {
    const arr = path.split('.');
    const last = arr.slice(-1)[0];
    const result = last.replace('[]', '');
    return result;
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
export const generateDataSkeleton = (schema, formData) => {
  let _formData = clone(formData);
  let result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(childSchema, childData);
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean' && !schema.widget) {
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
};

export function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}

export function yymmdd(timeStamp) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = num => ('0' + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return \`\${year}-\${month}-\${day} \${hours}:\${minutes}:\${seconds}\`;
}`,we=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,ae=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,k=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Ae=`export const basic = {
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
};`,fe=`import React from 'react';
import { Button, message, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const { TextArea } = Input;

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
      },
      select2: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(data));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ MyTextEditor }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

const MyTextEditor = props => {
  const { addons } = props;
  console.log(addons.dependValues);
  let rows;
  if (addons && addons.dependValues) {
    rows = addons.dependValues[0] || 2;
  }
  return <TextArea rows={rows} />;
};

export default Demo;`,sn=`import React, { Component } from 'react';
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

export default Root;`,fn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,He=`{
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
}`,Be=`import { Select } from 'antd';
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
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
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

export default SearchInput;`,Le=`import React from 'react';
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

export default Demo;`,Fn=`/* PrismJS 1.16.0
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
}`,Tn=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
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
}`,yn=`import React, { Component } from 'react';
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

export default Demo;`,nt=`{
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
}`,Mn=`import { Select } from 'antd';
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

export default SearchInput;`,tt=`import React from 'react';
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

export default Demo;`,dt=`import { monaco } from 'react-monaco-editor';

const valueMap = range => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6',
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4',
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9',
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009',
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009',
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846',
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846',
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09',
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761',
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206',
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61',
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)',
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)',
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string',
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number',
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean',
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array',
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object',
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html',
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color',
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email',
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url',
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload',
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A',
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A',
      },
    ],
  };
};

const keySuggestions = range => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F',
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F',
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B',
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F',
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C',
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B',
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder',
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind',
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C',
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C',
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528',
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB',
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF',
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40',
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6',
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6',
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className',
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F',
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C',
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848',
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules',
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027',
  },
];

export { valueMap, keySuggestions };`,rt=`.markdown p {
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
}`,ct=`import React from 'react';
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

  const searchApi = (params, sorter) => {
    console.group(sorter);
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

  const searchApi2 = (params, sorter) => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
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
      sorter: true,
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
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi2,
          },
        ]}
      />
      <Table
        // size="small"
        pagination={{ pageSize: 4 }}
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

export default withTable(Demo);`,at=`import React from 'react';
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

export default withTable(Demo);`,Vn=`import React, { useEffect } from 'react';
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

export default withTable(Demo);`,mt=`import React from 'react';
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
    title: {
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
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const App = () => {
  const searchApi = () => {
    return Promise.resolve({
      rows: dataSource,
      total: dataSource.length,
    });
  };
  return (
    <>
      <Search debug schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(App);`,Bn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Wn=`import React from 'react';
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

export default Demo;`,Jn=`import React from 'react';
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

export default Demo;`,st=`import React, { useState, useRef } from 'react';
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
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,bn=un.default={"guide-card":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return i=function(C,c){if(!c&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var R=S(c);if(R&&R.has(C))return R.get(C);var f={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in C)if(t!=="default"&&Object.prototype.hasOwnProperty.call(C,t)){var r=n?Object.getOwnPropertyDescriptor(C,t):null;r&&(r.get||r.set)?Object.defineProperty(f,t,r):f[t]=C[t]}return f.default=C,R&&R.set(C,f),f},S=function(C){if(typeof WeakMap!="function")return null;var c=new WeakMap,R=new WeakMap;return(S=function(n){return n?R:c})(C)},m=e("K+nK"),A.t0=m,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,s=(0,A.t0)(A.t1),A.t2=i,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return y=A.sent,p=function(){var C=(0,h.useState)("Line"),c=(0,s.default)(C,2),R=c[0],f=c[1],n={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[R];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return m=e("K+nK"),i.t0=m,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=i.sent,y=function(){return s.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(A,F,C){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(F).length]}},A),s.default.createElement("p",null,JSON.stringify(F)),s.default.createElement("p",null,JSON.stringify(C)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",y);case 11:case"end":return i.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return i=function(C,c){if(!c&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var R=S(c);if(R&&R.has(C))return R.get(C);var f={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in C)if(t!=="default"&&Object.prototype.hasOwnProperty.call(C,t)){var r=n?Object.getOwnPropertyDescriptor(C,t):null;r&&(r.get||r.set)?Object.defineProperty(f,t,r):f[t]=C[t]}return f.default=C,R&&R.set(C,f),f},S=function(C){if(typeof WeakMap!="function")return null;var c=new WeakMap,R=new WeakMap;return(S=function(n){return n?R:c})(C)},m=e("K+nK"),A.t0=m,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,s=(0,A.t0)(A.t1),A.t2=i,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return y=A.sent,p=function(){var C=(0,h.useState)(!1),c=(0,s.default)(C,2),R=c[0],f=c[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:R,onChange:function(){return f(!R)}})),h.default.createElement(y.PivotTable,{leftExpandable:R,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=o(l);if(v&&v.has(r))return v.get(r);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in r)if(K!=="default"&&Object.prototype.hasOwnProperty.call(r,K)){var $=M?Object.getOwnPropertyDescriptor(r,K):null;$&&($.get||$.set)?Object.defineProperty(O,K,$):O[K]=r[K]}return O.default=r,v&&v.set(r,O),O},o=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,v=new WeakMap;return(o=function(M){return M?v:l})(r)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=m,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=A,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,F=y.default.TextArea,C={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var r=(0,S.useState)(JSON.stringify(C)),l=(0,h.default)(r,2),v=l[0],O=l[1],M=(0,S.useState)({}),K=(0,h.default)(M,2),$=K[0],xe=K[1],ke=function(){try{var In=(0,p.updateSchemaToNewVersion)(JSON.parse(v));xe(In)}catch(Gn){console.log(Gn)}},dn=function(In){O(In.target.value)},Nn=function(){O(JSON.stringify(JSON.parse(v),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(F,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:dn}),S.default.createElement(s.default,{style:{marginRight:12},onClick:Nn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(s.default,{type:"primary",onClick:ke},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(F,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},R=c,n.abrupt("return",R);case 38:case"end":return n.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:z}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=i(n);if(t&&t.has(f))return t.get(f);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=l?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(r,v,O):r[v]=f[v]}return r.default=f,t&&t.set(f,r),r},i=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(i=function(l){return l?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,s=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,S=(0,c.t4)(c.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){var f=(0,S.useForm)(),n=function(r,l){console.log("formData:",r,"errors",l)};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:o,onFinish:n}),h.default.createElement(s.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},F=A,c.abrupt("return",F);case 27:case"end":return c.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c,R,f;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return C=function(l,v){if(!v&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var O=F(v);if(O&&O.has(l))return O.get(l);var M={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in l)if($!=="default"&&Object.prototype.hasOwnProperty.call(l,$)){var xe=K?Object.getOwnPropertyDescriptor(l,$):null;xe&&(xe.get||xe.set)?Object.defineProperty(M,$,xe):M[$]=l[$]}return M.default=l,O&&O.set(l,M),M},F=function(l){if(typeof WeakMap!="function")return null;var v=new WeakMap,O=new WeakMap;return(F=function(K){return K?O:v})(l)},m=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=m,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=m,t.next=13,e.e(86).then(e.bind(null,"fWQN"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=m,t.next=18,e.e(87).then(e.bind(null,"mtLc"));case 18:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=m,t.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.t8=m,t.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return t.t9=t.sent,i=(0,t.t8)(t.t9),t.t10=m,t.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return t.t11=t.sent,p=(0,t.t10)(t.t11),t.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return o=t.sent,t.t12=C,t.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return t.t13=t.sent,A=(0,t.t12)(t.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(r){(0,S.default)(v,r);var l=(0,i.default)(v);function v(){var O;(0,h.default)(this,v);for(var M=arguments.length,K=new Array(M),$=0;$<M;$++)K[$]=arguments[$];return O=l.call.apply(l,[this].concat(K)),O.onFinish=function(xe,ke){console.log("formData:",xe,"errors",ke)},O}return(0,y.default)(v,[{key:"render",value:function(){var M=this.props.form;return p.default.createElement("div",null,p.default.createElement(A.default,{form:M,schema:c,onFinish:this.onFinish}),p.default.createElement(s.default,{type:"primary",onClick:M.submit},"\u63D0\u4EA4"))}}]),v}(p.default.Component),f=(0,A.connectForm)(R),t.abrupt("return",f);case 47:case"end":return t.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=i(n);if(t&&t.has(f))return t.get(f);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=l?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(r,v,O):r[v]=f[v]}return r.default=f,t&&t.set(f,r),r},i=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(i=function(l){return l?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,s=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,S=(0,c.t4)(c.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},A=function(){var f=(0,S.useForm)(),n=function(r,l){l.length>0?alert("errors:"+JSON.stringify(l)):alert("formData:"+JSON.stringify(r,null,2))};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:o,onFinish:n}),h.default.createElement(s.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},F=A,c.abrupt("return",F);case 27:case"end":return c.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    showSetting: {
      title: '\u662F\u5426\u5C55\u793A\u7F51\u5740',
      type: 'boolean',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      hidden: '{{formData.showSetting !== true}}',
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y=function(A){return{type:"object",displayType:A,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(h.default,{schema:y("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(h.default,{schema:y("column")}))},p.abrupt("return",S);case 14:case"end":return p.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return s.default.createElement(h.default,{readOnly:!0,schema:y})},p.abrupt("return",S);case 14:case"end":return p.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return s.default.createElement(h.default,{labelWidth:"200",schema:y})},p.abrupt("return",S);case 14:case"end":return p.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return C=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=F(l);if(v&&v.has(r))return v.get(r);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in r)if(K!=="default"&&Object.prototype.hasOwnProperty.call(r,K)){var $=M?Object.getOwnPropertyDescriptor(r,K):null;$&&($.get||$.set)?Object.defineProperty(O,K,$):O[K]=r[K]}return O.default=r,v&&v.set(r,O),O},F=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,v=new WeakMap;return(F=function(M){return M?v:l})(r)},m=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=m,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=m,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=m,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.t8=C,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,i=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=n.sent,n.t10=C,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,o=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return A=n.sent,c=function(){var r=(0,o.useForm)(),l=(0,i.useState)({}),v=(0,S.default)(l,2),O=v[0],M=v[1],K=function(){(0,A.fakeApi)("xxx/getForm").then(function(ke){r.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,A.delay)(1e3).then(function(xe){M({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var $=function(ke,dn){dn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(dn.map(function(Nn){return Nn.name}))):(0,A.fakeApi)("xxx/submit",ke).then(function(Nn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(o.default,{form:r,schema:O,onFinish:$}),i.default.createElement(s.default,null,i.default.createElement(h.default,{onClick:K},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=c,n.abrupt("return",R);case 48:case"end":return n.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return F=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=A(l);if(v&&v.has(r))return v.get(r);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in r)if(K!=="default"&&Object.prototype.hasOwnProperty.call(r,K)){var $=M?Object.getOwnPropertyDescriptor(r,K):null;$&&($.get||$.set)?Object.defineProperty(O,K,$):O[K]=r[K]}return O.default=r,v&&v.set(r,O),O},A=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,v=new WeakMap;return(A=function(M){return M?v:l})(r)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=m,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=n.sent,n.t8=F,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=n.sent,C={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var r=(0,p.useForm)(),l=function(M,K){K.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(K.map(function($){return $.name}))):(0,o.fakeApi)("xxx/submit",M).then(function($){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(M){var K=M.data,$=M.errors,xe=M.schema,ke=(0,h.default)(M,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(dn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:r,schema:C,beforeFinish:v,onFinish:l}),S.default.createElement(s.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},R=c,n.abrupt("return",R);case 42:case"end":return n.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return F=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=A(l);if(v&&v.has(r))return v.get(r);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in r)if(K!=="default"&&Object.prototype.hasOwnProperty.call(r,K)){var $=M?Object.getOwnPropertyDescriptor(r,K):null;$&&($.get||$.set)?Object.defineProperty(O,K,$):O[K]=r[K]}return O.default=r,v&&v.set(r,O),O},A=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,v=new WeakMap;return(A=function(M){return M?v:l})(r)},m=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=m,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=m,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=m,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return i=n.sent,n.t8=F,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=n.sent,C={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var r=(0,p.useForm)(),l=function(M,K){K.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(K.map(function($){return $.name}))):(0,o.fakeApi)("xxx/submit",M).then(function($){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,o.fakeApi)("xxx/getForm").then(function(M){r.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:r,schema:C,onFinish:l}),S.default.createElement(s.default,null,S.default.createElement(h.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=c,n.abrupt("return",R);case 44:case"end":return n.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c;return b.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return A=function(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var l=o(r);if(l&&l.has(t))return l.get(t);var v={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in t)if(M!=="default"&&Object.prototype.hasOwnProperty.call(t,M)){var K=O?Object.getOwnPropertyDescriptor(t,M):null;K&&(K.get||K.set)?Object.defineProperty(v,M,K):v[M]=t[M]}return v.default=t,l&&l.set(t,v),v},o=function(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(o=function(O){return O?l:r})(t)},m=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=m,f.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=m,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,h=(0,f.t2)(f.t3),f.t4=A,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,y=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return S=f.sent,f.t6=A,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,i=(0,f.t6)(f.t7),f.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=f.sent,F={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},C=function(){var t=(0,i.useForm)(),r=function(){t.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},l=function(O,M){M.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(K){return K.name}))):h.default.info(JSON.stringify(O))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(i.default,{form:t,schema:F,onMount:r,onFinish:l}),y.default.createElement(s.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=C,f.abrupt("return",c);case 37:case"end":return f.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o;return b.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return S=function(c,R){if(!R&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=y(R);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in c)if(r!=="default"&&Object.prototype.hasOwnProperty.call(c,r)){var l=t?Object.getOwnPropertyDescriptor(c,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=c[r]}return n.default=c,f&&f.set(c,n),n},y=function(c){if(typeof WeakMap!="function")return null;var R=new WeakMap,f=new WeakMap;return(y=function(t){return t?f:R})(c)},m=e("K+nK"),F.t0=m,F.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return F.t1=F.sent,s=(0,F.t0)(F.t1),F.t2=S,F.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return F.t3=F.sent,h=(0,F.t2)(F.t3),i={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var c=(0,h.useForm)();return s.default.createElement(h.default,{form:c,schema:i})},o=p,F.abrupt("return",o);case 17:case"end":return F.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,S=function(){return s.default.createElement(h.default,{schema:y.expression})},p.abrupt("return",S);case 16:case"end":return p.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:k},"json/schema.js":{import:"../json/schema",content:Ae}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A;return b.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return S=function(R,f){if(!f&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var n=y(f);if(n&&n.has(R))return n.get(R);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in R)if(l!=="default"&&Object.prototype.hasOwnProperty.call(R,l)){var v=r?Object.getOwnPropertyDescriptor(R,l):null;v&&(v.get||v.set)?Object.defineProperty(t,l,v):t[l]=R[l]}return t.default=R,n&&n.set(R,t),t},y=function(R){if(typeof WeakMap!="function")return null;var f=new WeakMap,n=new WeakMap;return(y=function(r){return r?n:f})(R)},C.t0=S,C.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return C.t1=C.sent,m=(0,C.t0)(C.t1),C.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=C.sent,C.t2=S,C.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return C.t3=C.sent,h=(0,C.t2)(C.t3),i=function(R){return new Promise(function(f){return setTimeout(f,R)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var R=(0,h.useForm)(),f=function(){R.setValues({input1:"hello world"}),i(3e3).then(function(t){R.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return m.default.createElement(h.default,{form:R,schema:p,onMount:f})},A=o,C.abrupt("return",A);case 20:case"end":return C.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),window.hello=function(A){var F=A.value;console.log(F)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return s.default.createElement(h.default,{schema:y})},i=S,o.abrupt("return",i);case 16:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C;return b.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return p=function(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var r=i(t);if(r&&r.has(n))return r.get(n);var l={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in n)if(O!=="default"&&Object.prototype.hasOwnProperty.call(n,O)){var M=v?Object.getOwnPropertyDescriptor(n,O):null;M&&(M.get||M.set)?Object.defineProperty(l,O,M):l[O]=n[O]}return l.default=n,r&&r.set(n,l),l},i=function(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,r=new WeakMap;return(i=function(v){return v?r:t})(n)},m=e("K+nK"),R.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return R.t0=m,R.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return R.t1=R.sent,s=(0,R.t0)(R.t1),R.t2=m,R.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return R.t3=R.sent,h=(0,R.t2)(R.t3),R.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=R.sent,R.t4=p,R.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return R.t5=R.sent,S=(0,R.t4)(R.t5),o=function(n){var t=n.schema;return t.$id==="#"?h.default.createElement("div",null,n.children):h.default.createElement("div",null,"my custom object:",n.children)},A={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},F=function(){var n=(0,S.useForm)(),t=function(l,v){console.log("formData:",l,"errors",v)};return h.default.createElement("div",null,h.default.createElement(S.default,{form:n,schema:A,onFinish:t,mapping:{object:"CustomComA"},widgets:{CustomComA:o}}),h.default.createElement(s.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},C=F,R.abrupt("return",C);case 28:case"end":return R.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema } = props;
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      my custom object:
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    object2: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u8F93\u5165\u6846',
          type: 'string',
        },
      },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        mapping={{ object: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o;return b.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return S=function(c,R){if(!R&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=y(R);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in c)if(r!=="default"&&Object.prototype.hasOwnProperty.call(c,r)){var l=t?Object.getOwnPropertyDescriptor(c,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=c[r]}return n.default=c,f&&f.set(c,n),n},y=function(c){if(typeof WeakMap!="function")return null;var R=new WeakMap,f=new WeakMap;return(y=function(t){return t?f:R})(c)},F.t0=S,F.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return F.t1=F.sent,m=(0,F.t0)(F.t1),F.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=F.sent,F.t2=S,F.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return F.t3=F.sent,h=(0,F.t2)(F.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var c=(0,h.useForm)(),R={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){c.setValueByPath("input2",n)}};return m.default.createElement(h.default,{form:c,schema:i,watch:R})},o=p,F.abrupt("return",o);case 19:case"end":return F.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=i(n);if(t&&t.has(f))return t.get(f);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=l?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(r,v,O):r[v]=f[v]}return r.default=f,t&&t.set(f,r),r},i=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(i=function(l){return l?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,s=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,S=(0,c.t4)(c.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},A=function(){var f=(0,S.useForm)(),n=function(l,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(l,null,2))},t={input1:function(l){l&&l.length>2?f.setSchemaByPath("obj1.select",function(v){var O=v.enumNames;return{enumNames:O.map(function(M){return M+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:o,onFinish:n,watch:t}),h.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(s.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},F=A,c.abrupt("return",F);case 27:case"end":return c.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      if (val && val.length > 2) {
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=o(l);if(v&&v.has(r))return v.get(r);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in r)if(K!=="default"&&Object.prototype.hasOwnProperty.call(r,K)){var $=M?Object.getOwnPropertyDescriptor(r,K):null;$&&($.get||$.set)?Object.defineProperty(O,K,$):O[K]=r[K]}return O.default=r,v&&v.set(r,O),O},o=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,v=new WeakMap;return(o=function(M){return M?v:l})(r)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=m,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.t4=m,n.next=20,e.e(88).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=n.sent,n.t8=A,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),F={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},C=function(r){return console.log("widget props:",r),S.default.createElement(h.default,(0,y.default)({addonBefore:"https://",addonAfter:".com"},r))},c=function(){var r=(0,p.useForm)();return S.default.createElement("div",null,S.default.createElement(p.default,{form:r,schema:F,widgets:{site:C},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),S.default.createElement(s.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4"))},R=c,n.abrupt("return",R);case 40:case"end":return n.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"ODQR"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-dependencies"}},"measure-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=p(n);if(t&&t.has(f))return t.get(f);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=l?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(r,v,O):r[v]=f[v]}return r.default=f,t&&t.set(f,r),r},p=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(p=function(l){return l?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,s=(0,c.t0)(c.t1),c.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=m,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.t4=o,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,y=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return S=c.sent,c.t6=o,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,i=(0,c.t6)(c.t7),A=function(){var f=(0,i.useForm)({logOnMount:function(l){console.log("onMount",l)},logOnSubmit:function(l){console.log("onSubmit",l)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},t=function(l,v){v.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(O){return O.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return y.default.createElement("div",null,y.default.createElement(i.default,{id:"my-demo-form",form:f,schema:n,onFinish:t}),y.default.createElement(s.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},F=A,c.abrupt("return",F);case 33:case"end":return c.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o;return b.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return p=function(){var c=(0,h.useForm)(),R=function(n,t){t.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(t))):alert(JSON.stringify(n))};return s.default.createElement("div",null,s.default.createElement(h.default,{form:c,schema:i,onFinish:R}),s.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},S=function(c,R){if(!R&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=y(R);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in c)if(r!=="default"&&Object.prototype.hasOwnProperty.call(c,r)){var l=t?Object.getOwnPropertyDescriptor(c,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=c[r]}return n.default=c,f&&f.set(c,n),n},y=function(c){if(typeof WeakMap!="function")return null;var R=new WeakMap,f=new WeakMap;return(y=function(t){return t?f:R})(c)},m=e("K+nK"),F.t0=m,F.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return F.t1=F.sent,s=(0,F.t0)(F.t1),F.t2=S,F.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return F.t3=F.sent,h=(0,F.t2)(F.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=p,F.abrupt("return",o);case 17:case"end":return F.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A,F,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=o(l);if(v&&v.has(r))return v.get(r);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in r)if(K!=="default"&&Object.prototype.hasOwnProperty.call(r,K)){var $=M?Object.getOwnPropertyDescriptor(r,K):null;$&&($.get||$.set)?Object.defineProperty(O,K,$):O[K]=r[K]}return O.default=r,v&&v.set(r,O),O},o=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,v=new WeakMap;return(o=function(M){return M?v:l})(r)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,s=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=m,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=A,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,F=y.default.TextArea,C={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var r=(0,S.useState)(JSON.stringify(C)),l=(0,h.default)(r,2),v=l[0],O=l[1],M=(0,S.useState)({}),K=(0,h.default)(M,2),$=K[0],xe=K[1],ke=function(){try{var In=(0,p.updateSchemaToNewVersion)(JSON.parse(v));xe(In)}catch(Gn){console.log(Gn)}},dn=function(In){O(In.target.value)},Nn=function(){O(JSON.stringify(JSON.parse(v),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(F,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:dn}),S.default.createElement(s.default,{style:{marginRight:12},onClick:Nn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(s.default,{type:"primary",onClick:ke},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(F,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},R=c,n.abrupt("return",R);case 38:case"end":return n.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../../packages/form-render/src/utils.js';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:z}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A;return b.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return o=function(){var R=(0,h.useState)({}),f=(0,s.default)(R,2),n=f[0],t=f[1],r=(0,h.useState)([]),l=(0,s.default)(r,2),v=l[0],O=l[1],M=(0,h.useState)(!1),K=(0,s.default)(M,2),$=K[0],xe=K[1],ke=(0,y.useForm)({formData:n,onChange:t,onValidate:O,showValidate:$});(0,h.useEffect)(function(){ke.init()},[]);var dn=function(){xe(!0),v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return h.default.createElement("div",null,h.default.createElement(y.default,{form:ke,schema:p}),h.default.createElement("button",{onClick:dn},"\u63D0\u4EA4"))},i=function(R,f){if(!f&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var n=S(f);if(n&&n.has(R))return n.get(R);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in R)if(l!=="default"&&Object.prototype.hasOwnProperty.call(R,l)){var v=r?Object.getOwnPropertyDescriptor(R,l):null;v&&(v.get||v.set)?Object.defineProperty(t,l,v):t[l]=R[l]}return t.default=R,n&&n.set(R,t),t},S=function(R){if(typeof WeakMap!="function")return null;var f=new WeakMap,n=new WeakMap;return(S=function(r){return r?n:f})(R)},m=e("K+nK"),C.t0=m,C.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return C.t1=C.sent,s=(0,C.t0)(C.t1),C.t2=i,C.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return C.t3=C.sent,h=(0,C.t2)(C.t3),C.t4=i,C.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return C.t5=C.sent,y=(0,C.t4)(C.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},A=o,C.abrupt("return",A);case 22:case"end":return C.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,S=function(){return s.default.createElement(h.default,{schema:y.basic})},p.abrupt("return",S);case 16:case"end":return p.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:k},"json/schema.js":{import:"../json/schema",content:Ae}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,S=function(){return s.default.createElement(h.default,{schema:y.titleTrick})},p.abrupt("return",S);case 16:case"end":return p.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:k},"json/schema.js":{import:"../json/schema",content:Ae}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:sn},"main.js":{import:"./main",content:fn},"json/simplest.json":{import:"./json/simplest.json",content:He},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Be},"monaco/index.js":{import:"./monaco",content:Le},"theme.css":{import:"./theme.css",content:Fn},"index.css":{import:"./index.css",content:Tn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:yn},"main.js":{import:"./main",content:Te},"json/simplest.json":{import:"./json/simplest.json",content:nt},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Mn},"monaco/index.js":{import:"./monaco",content:tt},"suggestionsMap.js":{import:"./suggestionsMap",content:dt},"index.css":{import:"./index.css",content:rt}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:ct}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:at}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i,p,o,A;return b.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return m=e("K+nK"),C.t0=m,C.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return C.t1=C.sent,s=(0,C.t0)(C.t1),C.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(73)]).then(e.bind(null,"P2DI"));case 8:for(h=C.sent,y=[],S=0;S<6;S++)y.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return i={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(R,f){return s.default.createElement("a",{onClick:function(){return alert(R.title)}},"\u7F16\u8F91")}}],o=function(){var R=function(){return{rows:y,total:y.length}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(h.Search,{schema:i,api:R}),s.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},A=(0,h.withTable)(o),C.abrupt("return",A);case 16:case"end":return C.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    title: {
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"aMwh"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:mt}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){var m,s,h,y,S,i;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=m,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(72)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(h.default,{defaultValue:y}))},i=S,o.abrupt("return",i);case 15:case"end":return o.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Jn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(B.dynamic)({loader:function(){var N=Object(L.a)(b.a.mark(function E(){return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},E)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(En,un,e){},Zs1V:function(En){En.exports=JSON.parse("{}")},p8sG:function(En,un,e){"use strict";En.exports=e("80pN")}}]);
