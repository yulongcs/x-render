(window.webpackJsonp=window.webpackJsonp||[]).push([[31,10],{"0zqC":function(Mn,gn,e){"use strict";e.r(gn);var G=e("tJVT"),n=e("q1tI"),O=e.n(n),K=e("wx14"),de=e("rePB"),L=e("ODXe"),Ye=e("U8pU"),Ne=e("Ff2n"),ve=e("VTBJ"),Rn=e("TSYQ"),Fe=e.n(Rn),Tn=e("Zm9Q"),wn=e("5Z9U"),En=e("6cGi"),fn=e("KQm4"),Ze=e("wgJM"),$n=e("t23M");function Wn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function y(){for(var C=arguments.length,g=new Array(C),E=0;E<C;E++)g[E]=arguments[E];c.current||(Ze.a.cancel(i.current),i.current=Object(Ze.a)(function(){t.apply(void 0,g)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ze.a.cancel(i.current)}},[]),y}function Sn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),y=Object(L.a)(c,2),C=y[1],g=Object(n.useRef)(typeof t=="function"?t():t),E=Wn(function(){var W=g.current;i.current.forEach(function($){W=$(W)}),i.current=[],g.current=W,C({})});function S(W){i.current.push(W),E()}return[g.current,S]}var we=e("4IlW");function qn(t,i){var c,y=t.prefixCls,C=t.id,g=t.active,E=t.rtl,S=t.tab,W=S.key,$=S.tab,V=S.disabled,H=S.closeIcon,J=t.tabBarGutter,se=t.tabPosition,Q=t.closable,Y=t.renderWrapper,le=t.removeAriaLabel,U=t.editable,q=t.onClick,re=t.onRemove,Z=t.onFocus,oe="".concat(y,"-tab");n.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[E?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&Q!==!1&&!V;function ne(ae){V||q(ae)}function ce(ae){ae.preventDefault(),ae.stopPropagation(),U.onEdit("remove",{key:W,event:ae})}var me=n.createElement("div",{key:W,ref:i,className:Fe()(oe,(c={},Object(de.a)(c,"".concat(oe,"-with-remove"),be),Object(de.a)(c,"".concat(oe,"-active"),g),Object(de.a)(c,"".concat(oe,"-disabled"),V),c)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":g,id:C&&"".concat(C,"-tab-").concat(W),className:"".concat(oe,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(W),"aria-disabled":V,tabIndex:V?null:0,onClick:function(X){X.stopPropagation(),ne(X)},onKeyDown:function(X){[we.a.SPACE,we.a.ENTER].includes(X.which)&&(X.preventDefault(),ne(X))},onFocus:Z},$),be&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(X){X.stopPropagation(),ce(X)}},H||U.removeIcon||"\xD7"));return Y&&(me=Y(me)),me}var Vn=n.forwardRef(qn),at={width:0,height:0,left:0,top:0};function D(t,i,c){return Object(n.useMemo)(function(){for(var y,C=new Map,g=i.get((y=t[0])===null||y===void 0?void 0:y.key)||at,E=g.left+g.width,S=0;S<t.length;S+=1){var W=t[S].key,$=i.get(W);if(!$){var V;$=i.get((V=t[S-1])===null||V===void 0?void 0:V.key)||at}var H=C.get(W)||Object(ve.a)({},$);H.right=E-H.left-H.width,C.set(W,H)}return C},[t.map(function(y){return y.key}).join("_"),i,c])}var j={width:0,height:0,left:0,top:0,right:0};function F(t,i,c,y,C){var g=C.tabs,E=C.tabPosition,S=C.rtl,W,$,V;["top","bottom"].includes(E)?(W="width",$=S?"right":"left",V=Math.abs(i.left)):(W="height",$="top",V=-i.top);var H=i[W],J=c[W],se=y[W],Q=H;return J+se>H&&(Q=H-se),Object(n.useMemo)(function(){if(!g.length)return[0,0];for(var Y=g.length,le=Y,U=0;U<Y;U+=1){var q=t.get(g[U].key)||j;if(q[$]+q[W]>V+Q){le=U-1;break}}for(var re=0,Z=Y-1;Z>=0;Z-=1){var oe=t.get(g[Z].key)||j;if(oe[$]<V){re=Z+1;break}}return[re,le]},[t,V,Q,E,g.map(function(Y){return Y.key}).join("_"),S])}var d=e("Gytx"),l=e.n(d),p=e("Kwbf");function b(t,i){var c=t.prefixCls,y=t.invalidate,C=t.item,g=t.renderItem,E=t.responsive,S=t.registerSize,W=t.itemKey,$=t.className,V=t.style,H=t.children,J=t.display,se=t.order,Q=t.component,Y=Q===void 0?"div":Q,le=Object(Ne.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=E&&!J;function q(be){S(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=g&&C!==void 0?g(C):H,Z;y||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:E?se:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var k=n.createElement(Y,Object(K.a)({className:Fe()(!y&&c,$),style:Object(ve.a)(Object(ve.a)({},Z),V)},oe,le,{ref:i}),re);return E&&(k=n.createElement($n.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var R=n.forwardRef(b);R.displayName="Item";var r=R;function o(){var t=Object(n.useState)({}),i=Object(L.a)(t,2),c=i[1],y=Object(n.useRef)([]),C=Object(n.useRef)(!1),g=0,E=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function S(W){var $=g;g+=1,y.current.length<$+1&&(y.current[$]=W);var V=y.current[$];function H(J){y.current[$]=typeof J=="function"?J(y.current[$]):J,Ze.a.cancel(E),E=Object(Ze.a)(function(){C.current||c({})})}return[V,H]}return S}var s=function(i,c){var y=n.useContext(P);if(!y){var C=i.component,g=C===void 0?"div":C,E=Object(Ne.a)(i,["component"]);return n.createElement(g,Object(K.a)({},E,{ref:c}))}var S=y.className,W=Object(Ne.a)(y,["className"]),$=i.className,V=Object(Ne.a)(i,["className"]);return n.createElement(P.Provider,{value:null},n.createElement(r,Object(K.a)({ref:c,className:Fe()(S,$)},W,V)))},A=n.forwardRef(s);A.displayName="RawItem";var M=A,P=n.createContext(null),u="responsive",T="invalidate";function m(t){return"+ ".concat(t.length," ...")}function a(t,i){var c=t.prefixCls,y=c===void 0?"rc-overflow":c,C=t.data,g=C===void 0?[]:C,E=t.renderItem,S=t.renderRawItem,W=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,H=t.ssr,J=t.style,se=t.className,Q=t.maxCount,Y=t.renderRest,le=t.renderRawRest,U=t.suffix,q=t.component,re=q===void 0?"div":q,Z=t.itemComponent,oe=t.onVisibleChange,k=Object(Ne.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=o(),ne=H==="full",ce=be(null),me=Object(L.a)(ce,2),ae=me[0],X=me[1],ue=ae||0,ye=be(new Map),he=Object(L.a)(ye,2),Ee=he[0],Ke=he[1],Oe=be(0),Re=Object(L.a)(Oe,2),Me=Re[0],Ae=Re[1],De=be(0),je=Object(L.a)(De,2),$e=je[0],_e=je[1],Ve=be(0),Ue=Object(L.a)(Ve,2),Qe=Ue[0],Le=Ue[1],jn=Object(n.useState)(null),rn=Object(L.a)(jn,2),xe=rn[0],ln=rn[1],yn=Object(n.useState)(null),bn=Object(L.a)(yn,2),Ie=bn[0],He=bn[1],en=n.useMemo(function(){return Ie===null&&ne?Number.MAX_SAFE_INTEGER:Ie||0},[Ie,ae]),ke=Object(n.useState)(!1),Kn=Object(L.a)(ke,2),Jn=Kn[0],Ln=Kn[1],an="".concat(y,"-item"),Dn=Math.max(Me,$e),un=g.length&&Q===u,Fn=Q===T,nn=un||typeof Q=="number"&&g.length>Q,sn=Object(n.useMemo)(function(){var pe=g;return un?ae===null&&ne?pe=g:pe=g.slice(0,Math.min(g.length,ue/V)):typeof Q=="number"&&(pe=g.slice(0,Q)),pe},[g,V,ae,Q,un]),In=Object(n.useMemo)(function(){return un?g.slice(en+1):g.slice(sn.length)},[g,sn,un,en]),cn=Object(n.useCallback)(function(pe,Se){var Te;return typeof W=="function"?W(pe):(Te=W&&(pe==null?void 0:pe[W]))!==null&&Te!==void 0?Te:Se},[W]),qe=Object(n.useCallback)(E||function(pe){return pe},[E]);function Xe(pe,Se){He(pe),Se||(Ln(pe<g.length-1),oe==null||oe(pe))}function Gn(pe,Se){X(Se.clientWidth)}function Hn(pe,Se){Ke(function(Te){var tn=new Map(Te);return Se===null?tn.delete(pe):tn.set(pe,Se),tn})}function nt(pe,Se){_e(Se),Ae($e)}function On(pe,Se){Le(Se)}function hn(pe){return Ee.get(cn(sn[pe],pe))}n.useLayoutEffect(function(){if(ue&&Dn&&sn){var pe=Qe,Se=sn.length,Te=Se-1;if(!Se){Xe(0),ln(null);return}for(var tn=0;tn<Se;tn+=1){var Zn=hn(tn);if(Zn===void 0){Xe(tn-1,!0);break}if(pe+=Zn,tn===Te-1&&pe+hn(Te)<=ue){Xe(Te),ln(null);break}else if(pe+Dn>ue){Xe(tn-1),ln(pe-Zn-Qe+$e);break}else if(tn===Te){Xe(Te),ln(pe-Qe);break}}U&&hn(0)+Qe>ue&&ln(null)}},[ue,Ee,$e,Qe,cn,sn]);var Xn=Jn&&!!In.length,Cn={};xe!==null&&un&&(Cn={position:"absolute",left:xe,top:0});var mn={prefixCls:an,responsive:un,component:Z,invalidate:Fn},Qn=S?function(pe,Se){var Te=cn(pe,Se);return n.createElement(P.Provider,{key:Te,value:Object(ve.a)(Object(ve.a)({},mn),{},{order:Se,item:pe,itemKey:Te,registerSize:Hn,display:Se<=en})},S(pe,Se))}:function(pe,Se){var Te=cn(pe,Se);return n.createElement(r,Object(K.a)({},mn,{order:Se,key:Te,item:pe,renderItem:qe,itemKey:Te,registerSize:Hn,display:Se<=en}))},Nn,Yn={order:Xn?en:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:nt,display:Xn};if(le)le&&(Nn=n.createElement(P.Provider,{value:Object(ve.a)(Object(ve.a)({},mn),Yn)},le(In)));else{var dn=Y||m;Nn=n.createElement(r,Object(K.a)({},mn,Yn),typeof dn=="function"?dn(In):dn)}var An=n.createElement(re,Object(K.a)({className:Fe()(!Fn&&y,se),style:J,ref:i},k),sn.map(Qn),nn?Nn:null,U&&n.createElement(r,Object(K.a)({},mn,{order:en,className:"".concat(an,"-suffix"),registerSize:On,display:!0,style:Cn}),U));return un&&(An=n.createElement($n.default,{onResize:Gn},An)),An}var h=n.forwardRef(a);h.displayName="Overflow",h.Item=M,h.RESPONSIVE=u,h.INVALIDATE=T;var v=h,I=v,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Be(t,i){var c=Object(ve.a)({},t);return Object.keys(i).forEach(function(y){var C=i[y];C!==void 0&&(c[y]=C)}),c}function Pn(t){var i=t.children,c=t.locked,y=Object(Ne.a)(t,["children","locked"]),C=n.useContext(We),g=Object(pn.a)(function(){return Be(C,y)},[C,y],function(E,S){return!c&&(E[0]!==S[0]||!l()(E[1],S[1]))});return n.createElement(We.Provider,{value:g},i)}function it(t,i,c,y){var C=n.useContext(We),g=C.activeKey,E=C.onActive,S=C.onInactive,W={active:g===t};return i||(W.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),E(t)},W.onMouseLeave=function($){y==null||y({key:t,domEvent:$}),S(t)}),W}function _n(t){var i=t.item,c=Object(Ne.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function f(t){var i=t.icon,c=t.props,y=t.children,C;return typeof i=="function"?C=n.createElement(i,Object(ve.a)({},c)):C=i,C||y||null}function N(t){var i=n.useContext(We),c=i.mode,y=i.rtl,C=i.inlineIndent;if(c!=="inline")return null;var g=t;return y?{paddingRight:g*C}:{paddingLeft:g*C}}var B=[],fe=n.createContext(null);function ee(){return n.useContext(fe)}var Pe=n.createContext(B);function ze(t){var i=n.useContext(Pe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Gt(t){var i=n.useContext(Ut);return Jt(i,t)}var br=function(t){Object(_.a)(c,t);var i=Object(ie.a)(c);function c(){return Object(w.a)(this,c),i.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){var C=this.props,g=C.title,E=C.attribute,S=C.elementRef,W=Object(Ne.a)(C,["title","attribute","elementRef"]),$=Object(ge.a)(W,["eventKey"]);return Object(p.a)(!E,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(I.Item,Object(K.a)({},E,{title:typeof g=="string"?g:void 0},$,{ref:S}))}}]),c}(n.Component),Or=function(i){var c,y=i.style,C=i.className,g=i.eventKey,E=i.disabled,S=i.itemIcon,W=i.children,$=i.role,V=i.onMouseEnter,H=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,Y=Object(Ne.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Gt(g),U=n.useContext(We),q=U.prefixCls,re=U.onItemClick,Z=U.disabled,oe=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,ce="".concat(q,"-item"),me=n.useRef(),ae=n.useRef(),X=Z||E,ue=ze(g),ye=function(Ve){return{key:g,keyPath:ue,item:me.current,domEvent:Ve}},he=S||k,Ee=it(g,X,V,H),Ke=Ee.active,Oe=Object(Ne.a)(Ee,["active"]),Re=be.includes(g),Me=N(ue.length),Ae=function(Ve){if(!X){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},De=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},je=function(Ve){ne(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Re),n.createElement(br,Object(K.a)({ref:me,elementRef:ae,role:$===null?"none":$||"menuitem",tabIndex:E?null:-1,"data-menu-id":oe&&le?null:le},Y,Oe,$e,{component:"li","aria-disabled":E,style:Object(ve.a)(Object(ve.a)({},Me),y),className:Fe()(ce,(c={},Object(de.a)(c,"".concat(ce,"-active"),Ke),Object(de.a)(c,"".concat(ce,"-selected"),Re),Object(de.a)(c,"".concat(ce,"-disabled"),X),c),C),onClick:Ae,onKeyDown:De,onFocus:je}),W,n.createElement(f,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Re}),icon:he}))};function Cr(t){var i=t.eventKey,c=ee(),y=ze(i);return n.useEffect(function(){if(c)return c.registerPath(i,y),function(){c.unregisterPath(i,y)}},[y]),c?null:n.createElement(Or,t)}var jt=Cr;function Dt(t,i){return Object(Tn.a)(t).map(function(c,y){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(fn.a)(i),[y]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function et(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var y,C=arguments.length,g=new Array(C),E=0;E<C;E++)g[E]=arguments[E];return(y=i.current)===null||y===void 0?void 0:y.call.apply(y,[i].concat(g))},[]);return t?c:void 0}var Rr=function(i,c){var y=i.className,C=i.children,g=Object(Ne.a)(i,["className","children"]),E=n.useContext(We),S=E.prefixCls,W=E.mode;return n.createElement("ul",Object(K.a)({className:Fe()(S,"".concat(S,"-sub"),"".concat(S,"-").concat(W==="inline"?"inline":"vertical"),y)},g,{"data-menu-list":!0,ref:c}),C)},Ht=n.forwardRef(Rr);Ht.displayName="SubMenuList";var Xt=Ht,Er=e("uciX"),zn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},Sr={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},fa=Qt;function Yt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function jr(t){var i=t.prefixCls,c=t.visible,y=t.children,C=t.popup,g=t.popupClassName,E=t.popupOffset,S=t.disabled,W=t.mode,$=t.onVisibleChange,V=n.useContext(We),H=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,Y=V.builtinPlacements,le=V.triggerSubMenuAction,U=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Z=n.useState(!1),oe=Object(L.a)(Z,2),k=oe[0],be=oe[1],ne=J?Object(ve.a)(Object(ve.a)({},Sr),Y):Object(ve.a)(Object(ve.a)({},Qt),Y),ce=Pr[W],me=Yt(W,q,re),ae=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),X=n.useRef();return n.useEffect(function(){return X.current=Object(Ze.a)(function(){be(c)}),function(){Ze.a.cancel(X.current)}},[c]),n.createElement(Er.a,{prefixCls:i,popupClassName:Fe()("".concat(i,"-popup"),Object(de.a)({},"".concat(i,"-rtl"),J),g),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:C,popupAlign:E&&{offset:E},action:S?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:U,popupMotion:ae},y)}var Dr=e("8XRh");function Fr(t){var i=t.id,c=t.open,y=t.keyPath,C=t.children,g="inline",E=n.useContext(We),S=E.prefixCls,W=E.forceSubMenuRender,$=E.motion,V=E.defaultMotions,H=E.mode,J=n.useRef(!1);J.current=H===g;var se=n.useState(!J.current),Q=Object(L.a)(se,2),Y=Q[0],le=Q[1],U=J.current?c:!1;n.useEffect(function(){J.current&&le(!1)},[H]);var q=Object(ve.a)({},Yt(g,$,V));y.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Z){return!J.current&&!Z&&le(!0),re==null?void 0:re(Z)},Y?null:n.createElement(Pn,{mode:g,locked:!J.current},n.createElement(Dr.default,Object(K.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(S,"-hidden")}),function(Z){var oe=Z.className,k=Z.style;return n.createElement(Xt,{id:i,className:oe,style:k},C)}))}var Ir=function(i){var c,y=i.style,C=i.className,g=i.title,E=i.eventKey,S=i.disabled,W=i.internalPopupClose,$=i.children,V=i.itemIcon,H=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,Y=i.onMouseEnter,le=i.onMouseLeave,U=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Z=Object(Ne.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(E),k=n.useContext(We),be=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,ae=k.overflowDisabled,X=k.activeKey,ue=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Ee=k.onItemClick,Ke=k.onOpenChange,Oe=k.onActive,Re=n.useContext(Ge),Me=Re.isSubPathKey,Ae=ze(),De="".concat(be,"-submenu"),je=me||S,$e=n.useRef(),_e=n.useRef(),Ve=V||ye,Ue=H||he,Qe=ce.includes(E),Le=!ae&&Qe,jn=Me(ue,E),rn=it(E,je,q,re),xe=rn.active,ln=Object(Ne.a)(rn,["active"]),yn=n.useState(!1),bn=Object(L.a)(yn,2),Ie=bn[0],He=bn[1],en=function(Xe){je||He(Xe)},ke=function(Xe){en(!0),Y==null||Y({key:E,domEvent:Xe})},Kn=function(Xe){en(!1),le==null||le({key:E,domEvent:Xe})},Jn=n.useMemo(function(){return xe||(ne!=="inline"?Ie||Me([X],E):!1)},[ne,xe,X,Ie,E,Me]),Ln=N(Ae.length),an=function(Xe){je||(U==null||U({key:E,domEvent:Xe}),ne==="inline"&&Ke(E,!Qe))},Dn=et(function(qe){Q==null||Q(_n(qe)),Ee(qe)}),un=function(Xe){ne!=="inline"&&Ke(E,Xe)},Fn=function(){Oe(E)},nn=oe&&"".concat(oe,"-popup"),sn=n.createElement("div",Object(K.a)({role:"menuitem",style:Ln,className:"".concat(De,"-title"),tabIndex:je?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":ae&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":je,onClick:an,onFocus:Fn},ln),g,n.createElement(f,{icon:ne!=="horizontal"?Ue:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(De,"-arrow")}))),In=n.useRef(ne);if(ne!=="inline"&&(In.current=Ae.length>1?"vertical":ne),!ae){var cn=In.current;sn=n.createElement(jr,{mode:cn,prefixCls:De,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(Pn,{mode:cn},n.createElement(Xt,{id:nn,ref:_e},$)),disabled:je,onVisibleChange:un},sn)}return n.createElement(Pn,{onItemClick:Dn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(I.Item,Object(K.a)({role:"none"},Z,{component:"li",style:y,className:Fe()(De,"".concat(De,"-").concat(ne),C,(c={},Object(de.a)(c,"".concat(De,"-open"),Le),Object(de.a)(c,"".concat(De,"-active"),Jn),Object(de.a)(c,"".concat(De,"-selected"),jn),Object(de.a)(c,"".concat(De,"-disabled"),je),c)),onMouseEnter:ke,onMouseLeave:Kn}),sn,!ae&&n.createElement(Fr,{id:nn,open:Le,keyPath:Ae},$)))};function Zt(t){var i=t.eventKey,c=t.children,y=ze(i),C=Dt(c,y),g=ee();n.useEffect(function(){if(g)return g.registerPath(i,y),function(){g.unregisterPath(i,y)}},[y]);var E;return g?E=C:E=n.createElement(Ir,t,C),n.createElement(Pe.Provider,{value:y},E)}var Nr=e("x/xZ");function xt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Nr.a)(t)){var c=t.nodeName.toLowerCase(),y=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),g=Number(C),E=null;return C&&!Number.isNaN(g)?E=g:y&&E===null&&(E=0),y&&t.disabled&&(E=null),E!==null&&(E>=0||i&&E<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(y){return xt(y,i)});return xt(t,i)&&c.unshift(t),c}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(t){}}function ga(t,i){if(i.keyCode===9){var c=kt(t),y=c[i.shiftKey?0:c.length-1],C=y===document.activeElement||t===document.activeElement;if(C){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var Ft=we.a.LEFT,It=we.a.RIGHT,Nt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Nt,ft,Ft,It];function Ar(t,i,c,y){var C,g,E,S,W="prev",$="next",V="children",H="parent";if(t==="inline"&&y===pt)return{inlineTrigger:!0};var J=(C={},Object(de.a)(C,Nt,W),Object(de.a)(C,ft,$),C),se=(g={},Object(de.a)(g,Ft,c?$:W),Object(de.a)(g,It,c?W:$),Object(de.a)(g,ft,V),Object(de.a)(g,pt,V),g),Q=(E={},Object(de.a)(E,Nt,W),Object(de.a)(E,ft,$),Object(de.a)(E,pt,V),Object(de.a)(E,qt,H),Object(de.a)(E,Ft,c?V:H),Object(de.a)(E,It,c?H:V),E),Y={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},le=(S=Y["".concat(t).concat(i?"":"Sub")])===null||S===void 0?void 0:S[y];switch(le){case W:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Br(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Mr(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Tr(t,i){var c=kt(t,!0);return c.filter(function(y){return i.has(y)})}function er(t,i,c){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Tr(t,i),g=C.length,E=C.findIndex(function(S){return c===S});return y<0?E===-1?E=g-1:E-=1:y>0&&(E+=1),E=(E+g)%g,C[E]}function wr(t,i,c,y,C,g,E,S,W,$){var V=n.useRef(),H=n.useRef();H.current=i;var J=function(){Ze.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var Y,le,U,q=function(){Y=new Set,le=new Map,U=new Map;var ye=g();return ye.forEach(function(he){var Ee=document.querySelector("[data-menu-id='".concat(Jt(y,he),"']"));Ee&&(Y.add(Ee),U.set(Ee,he),le.set(he,Ee))}),Y};q();var re=le.get(i),Z=Mr(re,Y),oe=U.get(Z),k=Ar(t,E(oe,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Ee=ye.querySelector("a");(Ee==null?void 0:Ee.getAttribute("href"))&&(he=Ee);var Ke=U.get(ye);S(Ke),J(),V.current=Object(Ze.a)(function(){H.current===Ke&&he.focus()})}};if(k.sibling||!Z){var ne;!Z||t==="inline"?ne=C.current:ne=Br(Z);var ce=er(ne,Y,Z,k.offset);be(ce)}else if(k.inlineTrigger)W(oe);else if(k.offset>0)W(oe,!0),J(),V.current=Object(Ze.a)(function(){q();var ue=Z.getAttribute("aria-controls"),ye=document.getElementById(ue),he=er(ye,Y);be(he)},5);else if(k.offset<0){var me=E(oe,!0),ae=me[me.length-2],X=le.get(ae);W(ae,!1),be(X)}}$==null||$(se)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(t){var i=Object(En.a)(t,{value:t}),c=Object(L.a)(i,2),y=c[0],C=c[1];return n.useEffect(function(){nr+=1;var g="".concat(Wr,"-").concat(nr);C("rc-menu-uuid-".concat(g))},[]),y}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(At)},$r=function(i){return i.split(At)},Bt="rc-menu-more";function Vr(){var t=n.useState({}),i=Object(L.a)(t,2),c=i[1],y=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),g=n.useState([]),E=Object(L.a)(g,2),S=E[0],W=E[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(U,q){var re=tr(q);C.current.set(re,U),y.current.set(U,re),$.current+=1;var Z=$.current;Lr(function(){Z===$.current&&c({})})},[]),H=Object(n.useCallback)(function(U,q){var re=tr(q);C.current.delete(re),y.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),se=Object(n.useCallback)(function(U,q){var re=y.current.get(U)||"",Z=$r(re);return q&&S.includes(Z[0])&&Z.unshift(Bt),Z},[S]),Q=Object(n.useCallback)(function(U,q){return U.some(function(re){var Z=se(re,!0);return Z.includes(q)})},[se]),Y=function(){var q=Object(fn.a)(y.current.keys());return S.length&&q.push(Bt),q},le=Object(n.useCallback)(function(U){var q="".concat(y.current.get(U)).concat(At),re=new Set;return Object(fn.a)(C.current.keys()).forEach(function(Z){Z.startsWith(q)&&re.add(C.current.get(Z))}),re},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:Y,getSubPathKeys:le}}var vt=[],zr=function(i){var c,y,C=i.prefixCls,g=C===void 0?"rc-menu":C,E=i.style,S=i.className,W=i.tabIndex,$=W===void 0?0:W,V=i.children,H=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,Y=i.inlineCollapsed,le=i.disabled,U=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Z=i.subMenuCloseDelay,oe=Z===void 0?.1:Z,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ne=i.openKeys,ce=i.activeKey,me=i.defaultActiveFirst,ae=i.selectable,X=ae===void 0?!0:ae,ue=i.multiple,ye=ue===void 0?!1:ue,he=i.defaultSelectedKeys,Ee=i.selectedKeys,Ke=i.onSelect,Oe=i.onDeselect,Re=i.inlineIndent,Me=Re===void 0?24:Re,Ae=i.motion,De=i.defaultMotions,je=i.triggerSubMenuAction,$e=je===void 0?"hover":je,_e=i.builtinPlacements,Ve=i.itemIcon,Ue=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,jn=i.getPopupContainer,rn=i.onClick,xe=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ie=Object(Ne.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Dt(V,vt),en=n.useState(!1),ke=Object(L.a)(en,2),Kn=ke[0],Jn=ke[1],Ln=n.useRef(),an=Kr(J),Dn=H==="rtl",un=n.useMemo(function(){return Q==="inline"&&Y?["vertical",Y]:[Q,!1]},[Q,Y]),Fn=Object(L.a)(un,2),nn=Fn[0],sn=Fn[1],In=n.useState(0),cn=Object(L.a)(In,2),qe=cn[0],Xe=cn[1],Gn=qe>=He.length-1||nn!=="horizontal"||U,Hn=Object(En.a)(be,{value:ne,postState:function(x){return x||vt}}),nt=Object(L.a)(Hn,2),On=nt[0],hn=nt[1],Xn=n.useState(On),Cn=Object(L.a)(Xn,2),mn=Cn[0],Qn=Cn[1],Nn=nn==="inline",Yn=n.useRef(!1);n.useEffect(function(){Nn&&Qn(On)},[On]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(Nn)hn(mn);else{var te=[];hn(te),xe==null||xe(te)}},[Nn]);var dn=Vr(),An=dn.registerPath,pe=dn.unregisterPath,Se=dn.refreshOverflowKeys,Te=dn.isSubPathKey,tn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:An,unregisterPath:pe}},[An,pe]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Se(Gn?vt:He.slice(qe+1).map(function(te){return te.key}))},[qe,Gn]);var Lt=Object(En.a)(ce||me&&((c=He[0])===null||c===void 0?void 0:c.key),{value:ce}),tt=Object(L.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(te){ot(te)}),$t=et(function(){ot(void 0)}),Ot=Object(En.a)(he||[],{value:Ee,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ct=Object(L.a)(Ot,2),rt=Ct[0],Bn=Ct[1],Rt=function(x){if(!!X){var Ce=x.key,Je=rt.includes(Ce),on;Je?on=rt.filter(function(kn){return kn!==Ce}):ye?on=[].concat(Object(fn.a)(rt),[Ce]):on=[Ce],Bn(on);var Un=Object(ve.a)(Object(ve.a)({},x),{},{selectedKeys:on});Je?Oe==null||Oe(Un):Ke==null||Ke(Un)}},Et=et(function(te){rn==null||rn(_n(te)),Rt(te)}),lt=et(function(te,x){var Ce=On.filter(function(on){return on!==te});if(x)Ce.push(te);else if(nn!=="inline"){var Je=gt(te);Ce=Ce.filter(function(on){return!Je.has(on)})}l()(On,Ce)||(hn(Ce),xe==null||xe(Ce))}),xn=et(jn),ut=function(x,Ce){var Je=Ce!=null?Ce:!On.includes(x);lt(x,Je)},dt=wr(nn,yt,Dn,an,Ln,Zn,tn,ot,ut,ln);n.useEffect(function(){Jn(!0)},[]);var St=nn!=="horizontal"||U?He:He.map(function(te,x){return n.createElement(Pn,{key:te.key,overflowDisabled:x>qe},te)}),Pt=n.createElement(I,Object(K.a)({id:J,ref:Ln,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:jt,className:Fe()(g,"".concat(g,"-root"),"".concat(g,"-").concat(nn),S,(y={},Object(de.a)(y,"".concat(g,"-inline-collapsed"),sn),Object(de.a)(y,"".concat(g,"-rtl"),Dn),y)),dir:H,style:E,role:"menu",tabIndex:$,data:St,renderRawItem:function(x){return x},renderRawRest:function(x){var Ce=x.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Zt,{eventKey:Bt,title:Le,disabled:Gn,internalPopupClose:Ce===0},Je)},maxCount:nn!=="horizontal"||U?I.INVALIDATE:I.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Xe(x)},onKeyDown:dt},Ie));return n.createElement(Ut.Provider,{value:an},n.createElement(Pn,{prefixCls:g,mode:nn,openKeys:On,rtl:Dn,disabled:le,motion:Kn?Ae:null,defaultMotions:Kn?De:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:xn,itemIcon:Ve,expandIcon:Ue,onItemClick:Et,onOpenChange:lt},n.createElement(Ge.Provider,{value:Kt},Pt),n.createElement(fe.Provider,{value:Wt},He)))},Ur=zr,Jr=function(i){var c=i.className,y=i.title,C=i.eventKey,g=i.children,E=Object(Ne.a)(i,["className","title","eventKey","children"]),S=n.useContext(We),W=S.prefixCls,$="".concat(W,"-item-group");return n.createElement("li",Object(K.a)({},E,{onClick:function(H){return H.stopPropagation()},className:Fe()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof y=="string"?y:void 0},y),n.createElement("ul",{className:"".concat($,"-list")},g))};function Gr(t){var i=t.children,c=Object(Ne.a)(t,["children"]),y=ze(c.eventKey),C=Dt(i,y),g=ee();return g?C:n.createElement(Jr,c,C)}function Hr(t){var i=t.className,c=t.style,y=n.useContext(We),C=y.prefixCls,g=ee();return g?null:n.createElement("li",{className:Fe()("".concat(C,"-item-divider"),i),style:c})}var st=Ur;st.Item=jt,st.SubMenu=Zt,st.ItemGroup=Gr,st.Divider=Hr;var Xr=st,Qr=e("eDIo");function Yr(t,i){var c=t.prefixCls,y=t.editable,C=t.locale,g=t.style;return!y||y.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(S){y.onEdit("add",{event:S})}},y.addIcon||"+")}var rr=n.forwardRef(Yr);function Zr(t,i){var c=t.prefixCls,y=t.id,C=t.tabs,g=t.locale,E=t.mobile,S=t.moreIcon,W=S===void 0?"More":S,$=t.moreTransitionName,V=t.style,H=t.className,J=t.editable,se=t.tabBarGutter,Q=t.rtl,Y=t.onTabClick,le=Object(n.useState)(!1),U=Object(L.a)(le,2),q=U[0],re=U[1],Z=Object(n.useState)(null),oe=Object(L.a)(Z,2),k=oe[0],be=oe[1],ne="".concat(y,"-more-popup"),ce="".concat(c,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,ae=g==null?void 0:g.dropdownAriaLabel,X=n.createElement(Xr,{onClick:function(Re){var Me=Re.key,Ae=Re.domEvent;Y(Me,Ae),re(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ae!==void 0?ae:"expanded dropdown"},C.map(function(Oe){return n.createElement(jt,{key:Oe.key,id:"".concat(ne,"-").concat(Oe.key),role:"option","aria-controls":y&&"".concat(y,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function ue(Oe){for(var Re=C.filter(function($e){return!$e.disabled}),Me=Re.findIndex(function($e){return $e.key===k})||0,Ae=Re.length,De=0;De<Ae;De+=1){Me=(Me+Oe+Ae)%Ae;var je=Re[Me];if(!je.disabled){be(je.key);return}}}function ye(Oe){var Re=Oe.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Re)&&(re(!0),Oe.preventDefault());return}switch(Re){case we.a.UP:ue(-1),Oe.preventDefault();break;case we.a.DOWN:ue(1),Oe.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Oe);break}}Object(n.useEffect)(function(){var Oe=document.getElementById(me);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(de.a)({},Q?"marginLeft":"marginRight",se);C.length||(he.visibility="hidden",he.order=1);var Ee=Fe()(Object(de.a)({},"".concat(ce,"-rtl"),Q)),Ke=E?null:n.createElement(Qr.default,{prefixCls:ce,overlay:X,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Ee,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(y,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:Fe()("".concat(c,"-nav-operations"),H),style:V,ref:i},Ke,n.createElement(rr,{prefixCls:c,locale:g,editable:J}))}var xr=n.forwardRef(Zr),Mt=Object(n.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(t,i){var c=Object(n.useState)(),y=Object(L.a)(c,2),C=y[0],g=y[1],E=Object(n.useState)(0),S=Object(L.a)(E,2),W=S[0],$=S[1],V=Object(n.useState)(0),H=Object(L.a)(V,2),J=H[0],se=H[1],Q=Object(n.useState)(),Y=Object(L.a)(Q,2),le=Y[0],U=Y[1],q=Object(n.useRef)();function re(ce){var me=ce.touches[0],ae=me.screenX,X=me.screenY;g({x:ae,y:X}),window.clearInterval(q.current)}function Z(ce){if(!!C){ce.preventDefault();var me=ce.touches[0],ae=me.screenX,X=me.screenY;g({x:ae,y:X});var ue=ae-C.x,ye=X-C.y;i(ue,ye);var he=Date.now();$(he),se(he-W),U({x:ue,y:ye})}}function oe(){if(!!C&&(g(null),U(null),le)){var ce=le.x/J,me=le.y/J,ae=Math.abs(ce),X=Math.abs(me);if(Math.max(ae,X)<kr)return;var ue=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(ue)<ar&&Math.abs(ye)<ar){window.clearInterval(q.current);return}ue*=ir,ye*=ir,i(ue*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,ae=ce.deltaY,X=0,ue=Math.abs(me),ye=Math.abs(ae);ue===ye?X=k.current==="x"?me:ae:ue>ye?(X=me,k.current="x"):(X=ae,k.current="y"),i(-X,-X)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:re,onTouchMove:Z,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function ce(ue){ne.current.onTouchStart(ue)}function me(ue){ne.current.onTouchMove(ue)}function ae(ue){ne.current.onTouchEnd(ue)}function X(ue){ne.current.onWheel(ue)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ae,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",X),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ae)}},[])}function _r(){var t=Object(n.useRef)(new Map);function i(y){return t.current.has(y)||t.current.set(y,n.createRef()),t.current.get(y)}function c(y){t.current.delete(y)}return[i,c]}function sr(t,i){var c=n.useRef(t),y=n.useState({}),C=Object(L.a)(y,2),g=C[1];function E(S){var W=typeof S=="function"?S(c.current):S;W!==c.current&&i(W,c.current),c.current=W,g({})}return[c.current,E]}var or=function(i){var c=i.position,y=i.prefixCls,C=i.extra;if(!C)return null;var g,E=C;return c==="right"&&(g=E.right||!E.left&&E||null),c==="left"&&(g=E.left||null),g?n.createElement("div",{className:"".concat(y,"-extra-content")},g):null};function ea(t,i){var c,y=n.useContext(Mt),C=y.prefixCls,g=y.tabs,E=t.className,S=t.style,W=t.id,$=t.animated,V=t.activeKey,H=t.rtl,J=t.extra,se=t.editable,Q=t.locale,Y=t.tabPosition,le=t.tabBarGutter,U=t.children,q=t.onTabClick,re=t.onTabScroll,Z=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_r(),ce=Object(L.a)(ne,2),me=ce[0],ae=ce[1],X=Y==="top"||Y==="bottom",ue=sr(0,function(te,x){X&&re&&re({direction:te>x?"left":"right"})}),ye=Object(L.a)(ue,2),he=ye[0],Ee=ye[1],Ke=sr(0,function(te,x){!X&&re&&re({direction:te>x?"top":"bottom"})}),Oe=Object(L.a)(Ke,2),Re=Oe[0],Me=Oe[1],Ae=Object(n.useState)(0),De=Object(L.a)(Ae,2),je=De[0],$e=De[1],_e=Object(n.useState)(0),Ve=Object(L.a)(_e,2),Ue=Ve[0],Qe=Ve[1],Le=Object(n.useState)(0),jn=Object(L.a)(Le,2),rn=jn[0],xe=jn[1],ln=Object(n.useState)(0),yn=Object(L.a)(ln,2),bn=yn[0],Ie=yn[1],He=Object(n.useState)(null),en=Object(L.a)(He,2),ke=en[0],Kn=en[1],Jn=Object(n.useState)(null),Ln=Object(L.a)(Jn,2),an=Ln[0],Dn=Ln[1],un=Object(n.useState)(0),Fn=Object(L.a)(un,2),nn=Fn[0],sn=Fn[1],In=Object(n.useState)(0),cn=Object(L.a)(In,2),qe=cn[0],Xe=cn[1],Gn=Sn(new Map),Hn=Object(L.a)(Gn,2),nt=Hn[0],On=Hn[1],hn=D(g,nt,je),Xn="".concat(C,"-nav-operations-hidden"),Cn=0,mn=0;X?H?(Cn=0,mn=Math.max(0,je-ke)):(Cn=Math.min(0,ke-je),mn=0):(Cn=Math.min(0,an-Ue),mn=0);function Qn(te){return te<Cn?Cn:te>mn?mn:te}var Nn=Object(n.useRef)(),Yn=Object(n.useState)(),dn=Object(L.a)(Yn,2),An=dn[0],pe=dn[1];function Se(){pe(Date.now())}function Te(){window.clearTimeout(Nn.current)}qr(Z,function(te,x){function Ce(Je,on){Je(function(Un){var kn=Qn(Un+on);return kn})}if(X){if(ke>=je)return!1;Ce(Ee,te)}else{if(an>=Ue)return!1;Ce(Me,x)}return Te(),Se(),!0}),Object(n.useEffect)(function(){return Te(),An&&(Nn.current=window.setTimeout(function(){pe(0)},100)),Te},[An]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,x=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(X){var Ce=he;H?x.right<he?Ce=x.right:x.right+x.width>he+ke&&(Ce=x.right+x.width-ke):x.left<-he?Ce=-x.left:x.left+x.width>-he+ke&&(Ce=-(x.left+x.width-ke)),Me(0),Ee(Qn(Ce))}else{var Je=Re;x.top<-Re?Je=-x.top:x.top+x.height>-Re+an&&(Je=-(x.top+x.height-an)),Ee(0),Me(Qn(Je))}}var Zn=F(hn,{width:ke,height:an,left:he,top:Re},{width:rn,height:bn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:g})),gt=Object(L.a)(Zn,2),Wt=gt[0],Kt=gt[1],Lt=g.map(function(te){var x=te.key;return n.createElement(Vn,{id:W,prefixCls:C,key:x,rtl:H,tab:te,closable:te.closable,editable:se,active:x===V,tabPosition:Y,tabBarGutter:le,renderWrapper:U,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(x),onClick:function(Je){q(x,Je)},onRemove:function(){ae(x)},onFocus:function(){tn(x),Se(),H||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),tt=Wn(function(){var te,x,Ce,Je,on,Un,kn,Vt,zt,la=((te=Z.current)===null||te===void 0?void 0:te.offsetWidth)||0,ua=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((on=k.current)===null||on===void 0?void 0:on.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Kn(la),Dn(ua),sn(mr),Xe(fr);var pr=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Qe(vr);var hr=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Xn);xe(pr-(hr?0:da)),Ie(vr-(hr?0:ca)),On(function(){var gr=new Map;return g.forEach(function(ma){var yr=ma.key,ct=me(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=g.slice(0,Wt),ot=g.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(n.useState)(),Ot=Object(L.a)($t,2),Ct=Ot[0],rt=Ot[1],Bn=hn.get(V),Rt=Object(n.useRef)();function Et(){Ze.a.cancel(Rt.current)}Object(n.useEffect)(function(){var te={};return Bn&&(X?(H?te.right=Bn.right:te.left=Bn.left,te.width=Bn.width):(te.top=Bn.top,te.height=Bn.height)),Et(),Rt.current=Object(Ze.a)(function(){rt(te)}),Et},[Bn,X,H]),Object(n.useEffect)(function(){tn()},[V,Bn,hn,X]),Object(n.useEffect)(function(){tt()},[H,le,V,g.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,xn="".concat(C,"-nav-wrap"),ut,dt,St,Pt;return X?H?(dt=he>0,ut=he+ke<je):(ut=he<0,dt=-he+ke<je):(St=Re<0,Pt=-Re+an<Ue),n.createElement("div",{ref:i,role:"tablist",className:Fe()("".concat(C,"-nav"),E),style:S,onKeyDown:function(){Se()}},n.createElement(or,{position:"left",extra:J,prefixCls:C}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Fe()(xn,(c={},Object(de.a)(c,"".concat(xn,"-ping-left"),ut),Object(de.a)(c,"".concat(xn,"-ping-right"),dt),Object(de.a)(c,"".concat(xn,"-ping-top"),St),Object(de.a)(c,"".concat(xn,"-ping-bottom"),Pt),c)),ref:Z},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Re,"px)"),transition:An?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:C,locale:Q,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Fe()("".concat(C,"-ink-bar"),Object(de.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(xr,Object(K.a)({},t,{ref:k,prefixCls:C,tabs:bt,className:!lt&&Xn})),n.createElement(or,{position:"right",extra:J,prefixCls:C}))}var lr=n.forwardRef(ea);function na(t){var i=t.id,c=t.activeKey,y=t.animated,C=t.tabPosition,g=t.rtl,E=t.destroyInactiveTabPane,S=n.useContext(Mt),W=S.prefixCls,$=S.tabs,V=y.tabPane,H=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:Fe()("".concat(W,"-content-holder"))},n.createElement("div",{className:Fe()("".concat(W,"-content"),"".concat(W,"-content-").concat(C),Object(de.a)({},"".concat(W,"-content-animated"),V)),style:H&&V?Object(de.a)({},g?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:E})})))}function ur(t){var i=t.prefixCls,c=t.forceRender,y=t.className,C=t.style,g=t.id,E=t.active,S=t.animated,W=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,H=n.useState(c),J=Object(L.a)(H,2),se=J[0],Q=J[1];n.useEffect(function(){E?Q(!0):W&&Q(!1)},[E,W]);var Y={};return E||(S?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:E?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!E,style:Object(ve.a)(Object(ve.a)({},Y),C),className:Fe()("".concat(i,"-tabpane"),E&&"".concat(i,"-tabpane-active"),y)},(E||se||c)&&V)}var dr=0;function ta(t){return Object(Tn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(t,i){var c,y=t.id,C=t.prefixCls,g=C===void 0?"rc-tabs":C,E=t.className,S=t.children,W=t.direction,$=t.activeKey,V=t.defaultActiveKey,H=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=t.tabPosition,Y=Q===void 0?"top":Q,le=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Z=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,ae=Object(Ne.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),X=ta(S),ue=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Ye.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Ee=Object(L.a)(he,2),Ke=Ee[0],Oe=Ee[1];Object(n.useEffect)(function(){Oe(Object(wn.a)())},[]);var Re=Object(En.a)(function(){var Ie;return(Ie=X[0])===null||Ie===void 0?void 0:Ie.key},{value:$,defaultValue:V}),Me=Object(L.a)(Re,2),Ae=Me[0],De=Me[1],je=Object(n.useState)(function(){return X.findIndex(function(Ie){return Ie.key===Ae})}),$e=Object(L.a)(je,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ie=X.findIndex(function(en){return en.key===Ae});if(Ie===-1){var He;Ie=Math.max(0,Math.min(_e,X.length-1)),De((He=X[Ie])===null||He===void 0?void 0:He.key)}Ve(Ie)},[X.map(function(Ie){return Ie.key}).join("_"),Ae,_e]);var Ue=Object(En.a)(null,{value:y}),Qe=Object(L.a)(Ue,2),Le=Qe[0],jn=Qe[1],rn=Y;Ke&&!["left","right"].includes(Y)&&(rn="top"),Object(n.useEffect)(function(){y||(jn("rc-tabs-".concat(dr)),dr+=1)},[]);function xe(Ie,He){ce==null||ce(Ie,He),De(Ie),ne==null||ne(Ie)}var ln={id:Le,activeKey:Ae,animated:ye,tabPosition:rn,rtl:ue,mobile:Ke},yn,bn=Object(ve.a)(Object(ve.a)({},ln),{},{editable:H,locale:re,moreIcon:Z,moreTransitionName:oe,tabBarGutter:le,onTabClick:xe,onTabScroll:me,extra:q,style:U,panes:S});return be?yn=be(bn,lr):yn=n.createElement(lr,bn),n.createElement(Mt.Provider,{value:{tabs:X,prefixCls:g}},n.createElement("div",Object(K.a)({ref:i,id:y,className:Fe()(g,"".concat(g,"-").concat(rn),(c={},Object(de.a)(c,"".concat(g,"-mobile"),Ke),Object(de.a)(c,"".concat(g,"-editable"),H),Object(de.a)(c,"".concat(g,"-rtl"),ue),c),E)},ae),yn,n.createElement(na,Object(K.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var cr=n.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,Tt=e("MZF8"),vn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function wt(t,i){var c,y=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return y||(y=i.tsx?"tsx":"jsx"),y}var oa=t=>{var i,c,y,C=Object(n.useRef)(),g=Object(n.useContext)(vn.context),E=g.locale,S=Object(vn.useLocaleProps)(E,t),W=Object(vn.useDemoUrl)(S.identifier),$=S.demoUrl||W,V=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(S.identifier),H=Object.keys(S.sources).length===1,J=Object(vn.useCodeSandbox)((i=S.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:S),se=Object(vn.useRiddle)((c=S.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:S),Q=Object(vn.useMotions)(S.motions||[],C.current),Y=Object(G.default)(Q,2),le=Y[0],U=Y[1],q=Object(vn.useCopy)(),re=Object(G.default)(q,2),Z=re[0],oe=re[1],k=Object(n.useState)("_"),be=Object(G.default)(k,2),ne=be[0],ce=be[1],me=Object(n.useState)(wt(ne,S.sources[ne])),ae=Object(G.default)(me,2),X=ae[0],ue=ae[1],ye=Object(n.useState)(Boolean(S.defaultShowCode)),he=Object(G.default)(ye,2),Ee=he[0],Ke=he[1],Oe=Object(n.useState)(Math.random()),Re=Object(G.default)(Oe,2),Me=Re[0],Ae=Re[1],De=S.sources[ne][X]||S.sources[ne].content,je=Object(vn.useTSPlaygroundUrl)(E,De),$e=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),Ve=Object(G.default)(_e,1),Ue=Ve[0];Object(n.useEffect)(()=>{Ae(Math.random())},[Ue]);function Qe(Le){ce(Le),ue(wt(Le,S.sources[Le]))}return O.a.createElement("div",{style:S.style,className:[S.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:S.identifier,"data-debug":S.debug||void 0,"data-iframe":S.iframe||void 0},S.iframe&&O.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),O.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:S.transform?"translate(0, 0)":void 0,padding:S.compact||S.iframe&&S.compact!==!1?"0":void 0,background:S.background}},S.iframe?O.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(S.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:$e}):S.children),O.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":S.title},S.title&&O.a.createElement(vn.AnchorLink,{to:"#".concat(S.identifier)},S.title),S.description&&O.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.description}})),O.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&O.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&O.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),S.motions&&O.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>le()}),S.iframe&&O.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ae(Math.random())}),!((y=S.hideActions)!==null&&y!==void 0&&y.includes("EXTERNAL"))&&O.a.createElement(vn.Link,{target:"_blank",to:$},O.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),O.a.createElement("span",null),O.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Z(De)}),X==="tsx"&&Ee&&O.a.createElement(vn.Link,{target:"_blank",to:je},O.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),O.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Ee?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Ee)})),Ee&&O.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&O.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Qe},Object.keys(S.sources).map(Le=>O.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,S.sources[Le])):Le,key:Le}))),O.a.createElement("div",{className:"__dumi-default-previewer-source"},O.a.createElement(sa.a,{code:De,lang:X,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(Mn,gn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),O=e("q1tI"),K=e("i8i4"),de=e("QCnb");function L(f){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+f,B=1;B<arguments.length;B++)N+="&args[]="+encodeURIComponent(arguments[B]);return"Minified React error #"+f+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ye=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ye.hasOwnProperty("ReactCurrentDispatcher")||(Ye.ReactCurrentDispatcher={current:null}),Ye.hasOwnProperty("ReactCurrentBatchConfig")||(Ye.ReactCurrentBatchConfig={suspense:null});function Ne(f){var N=f,B=f;if(f.alternate)for(;N.return;)N=N.return;else{f=N;do N=f,(N.effectTag&1026)!=0&&(B=N.return),f=N.return;while(f)}return N.tag===3?B:null}function ve(f){if(Ne(f)!==f)throw Error(L(188))}function Rn(f){var N=f.alternate;if(!N){if(N=Ne(f),N===null)throw Error(L(188));return N!==f?null:f}for(var B=f,fe=N;;){var ee=B.return;if(ee===null)break;var Pe=ee.alternate;if(Pe===null){if(fe=ee.return,fe!==null){B=fe;continue}break}if(ee.child===Pe.child){for(Pe=ee.child;Pe;){if(Pe===B)return ve(ee),f;if(Pe===fe)return ve(ee),N;Pe=Pe.sibling}throw Error(L(188))}if(B.return!==fe.return)B=ee,fe=Pe;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===B){ze=!0,B=ee,fe=Pe;break}if(Ge===fe){ze=!0,fe=ee,B=Pe;break}Ge=Ge.sibling}if(!ze){for(Ge=Pe.child;Ge;){if(Ge===B){ze=!0,B=Pe,fe=ee;break}if(Ge===fe){ze=!0,fe=Pe,B=ee;break}Ge=Ge.sibling}if(!ze)throw Error(L(189))}}if(B.alternate!==fe)throw Error(L(190))}if(B.tag!==3)throw Error(L(188));return B.stateNode.current===B?f:N}function Fe(){return!0}function Tn(){return!1}function wn(f,N,B,fe){this.dispatchConfig=f,this._targetInst=N,this.nativeEvent=B,f=this.constructor.Interface;for(var ee in f)f.hasOwnProperty(ee)&&((N=f[ee])?this[ee]=N(B):ee==="target"?this.target=fe:this[ee]=B[ee]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?Fe:Tn,this.isPropagationStopped=Tn,this}n(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Fe)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Fe)},persist:function(){this.isPersistent=Fe},isPersistent:Tn,destructor:function(){var f=this.constructor.Interface,N;for(N in f)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Tn,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(f){function N(){}function B(){return fe.apply(this,arguments)}var fe=this;N.prototype=fe.prototype;var ee=new N;return n(ee,B.prototype),B.prototype=ee,B.prototype.constructor=B,B.Interface=n({},fe.Interface,f),B.extend=fe.extend,Ze(B),B},Ze(wn);function En(f,N,B,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,f,N,B,fe),ee}return new this(f,N,B,fe)}function fn(f){if(!(f instanceof this))throw Error(L(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Ze(f){f.eventPool=[],f.getPooled=En,f.release=fn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Wn(f,N){var B={};return B[f.toLowerCase()]=N.toLowerCase(),B["Webkit"+f]="webkit"+N,B["Moz"+f]="moz"+N,B}var Sn={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Vn(f){if(we[f])return we[f];if(!Sn[f])return f;var N=Sn[f],B;for(B in N)if(N.hasOwnProperty(B)&&B in qn)return we[f]=N[B];return f}var at=Vn("animationend"),D=Vn("animationiteration"),j=Vn("animationstart"),F=Vn("transitionend"),d=null;function l(f){if(d===null)try{var N=("require"+Math.random()).slice(0,7);d=(G&&G[N])("timers").setImmediate}catch(B){d=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return d(f)}var p=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=p[11],R=p[12],r=K.unstable_batchedUpdates,o=Ye.IsSomeRendererActing,s=typeof de.unstable_flushAllWithoutAsserting=="function",A=de.unstable_flushAllWithoutAsserting||function(){for(var f=!1;b();)f=!0;return f};function M(f){try{A(),l(function(){A()?M(f):f()})}catch(N){f(N)}}var P=0,u=!1,T=K.findDOMNode,m=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=m[0],h=m[4],v=m[5],I=m[6],w=m[7],z=m[8],_=m[9],ie=m[10];function ge(){}function pn(f,N){if(!f)return[];if(f=Rn(f),!f)return[];for(var B=f,fe=[];;){if(B.tag===5||B.tag===6||B.tag===1||B.tag===0){var ee=B.stateNode;N(ee)&&fe.push(ee)}if(B.child)B.child.return=B,B=B.child;else{if(B===f)return fe;for(;!B.sibling;){if(!B.return||B.return===f)return fe;B=B.return}B.sibling.return=B.return,B=B.sibling}}}function We(f,N){if(f&&!f._reactInternalFiber){var B=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":B==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":B,Error(L(286,N,f))}}var Be={renderIntoDocument:function(f){var N=document.createElement("div");return K.render(f,N)},isElement:function(f){return O.isValidElement(f)},isElementOfType:function(f,N){return O.isValidElement(f)&&f.type===N},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&O.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Be.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,N){return Be.isCompositeComponent(f)?f._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(f,N){return We(f,"findAllInRenderedTree"),f?pn(f._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(f,N){return We(f,"scryRenderedDOMComponentsWithClass"),Be.findAllInRenderedTree(f,function(B){if(Be.isDOMComponent(B)){var fe=B.className;typeof fe!="string"&&(fe=B.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(L(11));N=N.split(/\s+/)}return N.every(function(Pe){return ee.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,N){if(We(f,"findRenderedDOMComponentWithClass"),f=Be.scryRenderedDOMComponentsWithClass(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+N);return f[0]},scryRenderedDOMComponentsWithTag:function(f,N){return We(f,"scryRenderedDOMComponentsWithTag"),Be.findAllInRenderedTree(f,function(B){return Be.isDOMComponent(B)&&B.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,N){if(We(f,"findRenderedDOMComponentWithTag"),f=Be.scryRenderedDOMComponentsWithTag(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+N);return f[0]},scryRenderedComponentsWithType:function(f,N){return We(f,"scryRenderedComponentsWithType"),Be.findAllInRenderedTree(f,function(B){return Be.isCompositeComponentWithType(B,N)})},findRenderedComponentWithType:function(f,N){if(We(f,"findRenderedComponentWithType"),f=Be.scryRenderedComponentsWithType(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+N);return f[0]},mockComponent:function(f,N){return N=N||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return O.createElement(N,null,this.props.children)}),this},nativeTouchData:function(f,N){return{touches:[{pageX:f,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(f){function N(){P--,o.current=B,R.current=fe}u===!1&&(u=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),P++;var B=o.current,fe=R.current;o.current=!0,R.current=!0;try{var ee=r(f)}catch(Pe){throw N(),Pe}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Pe,ze){ee.then(function(){1<P||s===!0&&B===!0?(N(),Pe()):M(function(Ge){N(),Ge?ze(Ge):Pe()})},function(Ge){N(),ze(Ge)})}};try{P!==1||s!==!1&&B!==!1||A(),N()}catch(Pe){throw N(),Pe}return{then:function(Pe){Pe()}}}};function Pn(f){return function(N,B){if(O.isValidElement(N))throw Error(L(228));if(Be.isCompositeComponent(N))throw Error(L(229));var fe=h[f],ee=new ge;ee.target=N,ee.type=f.toLowerCase();var Pe=a(N),ze=new wn(fe,Pe,ee,N);ze.persist(),n(ze,B),fe.phasedRegistrationNames?v(ze):I(ze),K.unstable_batchedUpdates(function(){w(N),ie(ze)}),z()}}Be.Simulate={};for(var it in h)Be.Simulate[it]=Pn(it);function _n(f,N){return function(B,fe){var ee=new ge(f);n(ee,fe),Be.isDOMComponent(B)?(B=T(B),ee.target=B,_(N,1,document,ee)):B.tagName&&(ee.target=B,_(N,1,document,ee))}}[["abort","abort"],[at,"animationEnd"],[D,"animationIteration"],[j,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[F,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var N=f[1];Be.SimulateNative[N]=_n(N,f[0])}),G.exports=Be.default||Be}).call(this,e("hOG+")(Mn))},IfXp:function(Mn,gn,e){"use strict";e.r(gn);var G=e("q1tI"),n=e.n(G),O=e("dEAq"),K=e.n(O),de=e("0zqC"),L=e("ZpkN"),Ye=e("JjdP"),Ne=n.a.memo(Ye.default["function-demo"].component),ve=n.a.memo(Ye.default["function-demo-1"].component);gn.default=Rn=>(n.a.useEffect(()=>{Rn!=null&&Rn.location.hash&&O.AnchorLink.scrollToAnchor(decodeURIComponent(Rn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8868\u5355\u8054\u52A8"},n.a.createElement(O.AnchorLink,{to:"#\u8868\u5355\u8054\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u8054\u52A8"),n.a.createElement("p",null,"\u8868\u5355\u7EC4\u4EF6\u95F4\u7684\u8054\u52A8\u662F\u5F00\u53D1\u4E2D\u666E\u904D\u7684\u95EE\u9898\uFF0CFormRender \u5E0C\u671B\u80FD\u4FDD\u6301\u7B80\u6D01\u6613\u7528\u7684 api \u7684\u540C\u65F6\u652F\u6301\u8054\u52A8\u3002\u4E3A\u6B64\u6211\u4EEC\u63D0\u4F9B\u4E86\u201C\u51FD\u6570\u8868\u8FBE\u5F0F\u201D\u3002"),n.a.createElement("h3",{id:"\u51FD\u6570\u8868\u8FBE\u5F0F"},n.a.createElement(O.AnchorLink,{to:"#\u51FD\u6570\u8868\u8FBE\u5F0F","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u51FD\u6570\u8868\u8FBE\u5F0F"),n.a.createElement("p",null,"\u51FD\u6570\u8868\u8FBE\u5F0F\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u4EE5\u53CC\u62EC\u53F7",n.a.createElement("code",null,'"',"{","{","...","}","}",'"'),"\u4E3A\u8BED\u6CD5\u7279\u5F81\u3002schema \u91CC\u9664\u4E86 default (\u9ED8\u8BA4\u503C) / rules \u5B57\u6BB5(\u6821\u9A8C\u4FE1\u606F) \u4EE5\u5916\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u652F\u6301\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982"),n.a.createElement(L.a,{code:`{
  "title": "{{formData.x.y === 'us' ? '\u7F8E\u5143':'\u4EBA\u6C11\u5E01'}}",
  "type": "string"
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 1\uFF1Arules \u5B57\u6BB5\u6682\u4E0D\u652F\u6301\u8868\u8FBE\u5F0F\uFF0C\u800C\u662F\u7528 ",n.a.createElement("code",null,"validator")," \u65B9\u6CD5\u5199\u590D\u6742\u6821\u9A8C\uFF0C\u8BE6\u89C1 ",n.a.createElement(O.Link,{to:"https://github.com/yiminghe/async-validator#type"},"async-validator \u6587\u6863"),"\u3002",n.a.createElement("br",null),"\u6CE8 2\uFF1Adefault \u5B57\u6BB5\u5BF9\u5E94\u7684\u662F <Input /> \u7684 defaultValue\uFF0CdefaultValue \u662F\u4E0D\u4F1A\u6839\u636E\u503C\u7684\u540E\u7EED\u53D8\u5316\u800C\u53D8\u5316\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F\u4E0D\u5141\u8BB8 default \u5B57\u6BB5\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u9047\u5230\u4E00\u4E2A\u7EC4\u4EF6\u9700\u8981\u4FEE\u6539\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u7684\u503C\u7684\u60C5\u51B5\uFF0C\u8BF7\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u7684 ",n.a.createElement("code",null,"addons.onItemChange")," \u65B9\u6CD5\u3002"),n.a.createElement("p",null,"\u51FD\u6570\u8868\u8FBE\u5F0F\u53EF\u4F7F\u7528\u4EE5\u4E0B 2 \u5173\u952E\u5B57\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u540D\u79F0"),n.a.createElement("th",{align:"center"},"\u8BF4\u660E"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"formData"),n.a.createElement("td",{align:"center"},"\u6574\u4E2A form \u7684\u503C \uFF08\u6700\u5E38\u7528\uFF0C\u5F53\u4E24\u4E2A\u5173\u8054\u7EC4\u4EF6\u8DDD\u79BB\u8F83\u8FDC\u65F6\uFF0C\u53EF\u4EE5\u4ECE\u9876\u5C42\u7684 formData \u91CC\u83B7\u53D6\uFF09")),n.a.createElement("tr",null,n.a.createElement("td",null,"rootValue"),n.a.createElement("td",{align:"center"},"\u7236\u7EC4\u4EF6\u7684\u503C \uFF08\u4E0A\u4E00\u7EA7\u7684\u503C\uFF0C\u4E00\u822C\u5728\u5217\u8868\u573A\u666F\u4E2D\u7684\u5B50\u5143\u7D20\u83B7\u53D6\u5BF9\u5E94 index \u7684 item \u65F6\u4F7F\u7528\uFF09")))),n.a.createElement("h3",{id:"\u4F7F\u7528"},n.a.createElement(O.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528")),n.a.createElement(de.default,Ye.default["function-demo"].previewerProps,n.a.createElement(Ne,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("ol",null,n.a.createElement("li",null,"\u5728\u4EE5\u4E0A\u573A\u666F\uFF0C",n.a.createElement("code",null,"formData.select1"),"\u7684\u7236\u7EA7\u5C31\u662F formData\uFF0C\u6240\u4EE5",n.a.createElement("code",null,"rootValue"),"\u5B57\u6BB5\u4E0E",n.a.createElement("code",null,"formData"),"\u5B57\u6BB5\u4F7F\u7528\u8D77\u6765\u6CA1\u6709\u533A\u522B\u3002"),n.a.createElement("li",null,"\u5199\u8868\u8FBE\u5F0F\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u6240\u6709\u6CA1\u6709\u6307\u660E default \u503C\u7684\u5143\u7D20\u7684\u503C\u90FD\u662F undefined\u3002\u6240\u4EE5\u4F8B\u5982 checkbox \u7684\u521D\u59CB\u503C\u5E76\u4E0D\u662F false\uFF0C\u800C\u662F undefined\u3002\u5199\u7C7B\u4F3C\u4E8E ",n.a.createElement("code",null,'"',"{","{","formData.checkbox === false","}","}",'"')," \u7684\u8868\u8FBE\u5F0F\u5728\u9996\u6B21\u6E32\u67D3\u4E2D\u662F\u65E0\u6548\u7684\uFF0C\u66F4\u597D\u7684\u5904\u7406\u65B9\u5F0F\u662F\u66F2\u7EBF\u6551\u56FD\u7684 ",n.a.createElement("code",null,'"',"{","{","formData.checkbox !== true","}","}",'"'))),n.a.createElement("h3",{id:"\u66F4\u591A\u5C5E\u6027\u7684-demo"},n.a.createElement(O.AnchorLink,{to:"#\u66F4\u591A\u5C5E\u6027\u7684-demo","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u66F4\u591A\u5C5E\u6027\u7684 demo")),n.a.createElement(de.default,Ye.default["function-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u6700\u540E"},n.a.createElement(O.AnchorLink,{to:"#\u6700\u540E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6700\u540E"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5982\u679C\u6D89\u53CA\u5230\u503C\u7684\u8054\u52A8\uFF0C\u6216\u8005\u6781\u5176\u590D\u6742\u7684\u8868\u5355\u5C55\u793A\u8054\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",n.a.createElement(O.Link,{to:"/form-render/advanced/watch"},"watch")),n.a.createElement("li",null,"\u66F4\u590D\u6742\u548C\u5B9A\u5236\u5316\u7684\u8868\u5355\u9700\u6C42\u5EFA\u8BAE\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002FormRender \u7684\u8BBE\u8BA1\u7406\u5FF5\u975E\u5E38\u63A8\u5D07\u7EC4\u4EF6\u7684\u5373\u63D2\u5373\u7528\uFF0C\u8BE6\u89C1",n.a.createElement(O.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u7AE0\u8282\u3002"))))))},JjdP:function(Mn,gn,e){"use strict";e.r(gn);var G=e("9og8"),n=e("WmNS"),O=e.n(n),K=e("LtsZ"),de=`import React, { useRef } from 'react';
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

export default Demo;`,Ye=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default SearchInput;`,En=`import React from 'react';
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

export default Demo;`,fn=`/* PrismJS 1.16.0
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
}`,at=gn.default={"guide-card":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o;return O.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return r=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var T=R(u);if(T&&T.has(P))return T.get(P);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in P)if(h!=="default"&&Object.prototype.hasOwnProperty.call(P,h)){var v=a?Object.getOwnPropertyDescriptor(P,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=P[h]}return m.default=P,T&&T.set(P,m),m},R=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,T=new WeakMap;return(R=function(a){return a?T:u})(P)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=r,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,p=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=A.sent,o=function(){var P=(0,p.useState)("Line"),u=(0,l.default)(P,2),T=u[0],m=u[1],a={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[T];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},A.abrupt("return",o);case 18:case"end":return A.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b;return O.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(A,M,P){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},A),l.default.createElement("p",null,JSON.stringify(M)),l.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o;return O.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return r=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var T=R(u);if(T&&T.has(P))return T.get(P);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in P)if(h!=="default"&&Object.prototype.hasOwnProperty.call(P,h)){var v=a?Object.getOwnPropertyDescriptor(P,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=P[h]}return m.default=P,T&&T.set(P,m),m},R=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,T=new WeakMap;return(R=function(a){return a?T:u})(P)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=r,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,p=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=A.sent,o=function(){var P=(0,p.useState)(!1),u=(0,l.default)(P,2),T=u[0],m=u[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:T,onChange:function(){return m(!T)}})),p.default.createElement(b.PivotTable,{leftExpandable:T,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},A.abrupt("return",o);case 18:case"end":return A.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M,P,u,T,m;return O.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return P=function(I,w){if(!w&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var z=M(w);if(z&&z.has(I))return z.get(I);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in I)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(I,ge)){var pn=ie?Object.getOwnPropertyDescriptor(I,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=I[ge]}return _.default=I,z&&z.set(I,_),_},M=function(I){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(M=function(ie){return ie?z:w})(I)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,l=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(63).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(64).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,R=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(60).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,r=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,o=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=P,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,A=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(v){(0,R.default)(w,v);var I=(0,r.default)(w);function w(){return(0,p.default)(this,w),I.apply(this,arguments)}return(0,b.default)(w,[{key:"render",value:function(){var _=this.props.form;return o.default.createElement("div",null,o.default.createElement(A.default,{form:_,schema:u}),o.default.createElement(l.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(o.default.Component),m=(0,A.connectForm)(T),h.abrupt("return",m);case 47:case"end":return h.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=r(a);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=I?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},r=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(I){return I?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){var m=(0,R.useForm)();return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=A,u.abrupt("return",M);case 27:case"end":return u.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=r(a);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=I?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},r=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(I){return I?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},A=function(){var m=(0,R.useForm)(),a=function(v,I){I.length>0?alert("errors:"+JSON.stringify(I)):alert("formData:"+JSON.stringify(v,null,2))};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:a}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=A,u.abrupt("return",M);case 27:case"end":return u.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return o=function(){var u=(0,p.useForm)(),T=function(a,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(a))};return l.default.createElement("div",null,l.default.createElement(p.default,{form:u,schema:r,onFinish:T}),l.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},R=function(u,T){if(!T&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(T);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(a,v,I):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:T})(u)},d=e("K+nK"),M.t0=d,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,l=(0,M.t0)(M.t1),M.t2=R,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,p=(0,M.t2)(M.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=o,M.abrupt("return",s);case 17:case"end":return M.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b=function(A){return{type:"object",displayType:A,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(p.default,{schema:b("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(p.default,{schema:b("column")}))},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return l.default.createElement(p.default,{schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{readOnly:!0,schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{labelWidth:"200",schema:b})},o.abrupt("return",R);case 14:case"end":return o.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M,P,u,T;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return P=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=M(I);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},M=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:I})(v)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.t8=P,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return o=a.sent,a.t10=P,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,s=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return A=a.sent,u=function(){var v=(0,s.useForm)(),I=(0,r.useState)({}),w=(0,R.default)(I,2),z=w[0],_=w[1],ie=function(){(0,A.fakeApi)("xxx/getForm").then(function(We){v.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,A.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Be){Be.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Be.map(function(Pn){return Pn.name}))):(0,A.fakeApi)("xxx/submit",We).then(function(Pn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(s.default,{form:v,schema:z,onFinish:ge}),r.default.createElement(l.default,null,r.default.createElement(p.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=u,a.abrupt("return",T);case 48:case"end":return a.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ye}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M,P,u,T;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return M=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=A(I);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},A=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(A=function(_){return _?w:I})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.t2=d,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=d,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return r=a.sent,a.t8=M,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=a.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var v=(0,o.useForm)(),I=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,pn=_.schema,We=(0,p.default)(_,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Be){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:v,schema:P,beforeFinish:w,onFinish:I}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},T=u,a.abrupt("return",T);case 42:case"end":return a.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ye}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M,P,u,T;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return M=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=A(I);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},A=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(A=function(_){return _?w:I})(v)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return r=a.sent,a.t8=M,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=a.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var v=(0,o.useForm)(),I=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,s.fakeApi)("xxx/getForm").then(function(_){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:v,schema:P,onFinish:I}),R.default.createElement(l.default,null,R.default.createElement(p.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=u,a.abrupt("return",T);case 44:case"end":return a.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ye}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M,P,u;return O.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return A=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var I=s(v);if(I&&I.has(h))return I.get(h);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in h)if(_!=="default"&&Object.prototype.hasOwnProperty.call(h,_)){var ie=z?Object.getOwnPropertyDescriptor(h,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=h[_]}return w.default=h,I&&I.set(h,w),w},s=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,I=new WeakMap;return(s=function(z){return z?I:v})(h)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,l=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=A,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return R=m.sent,m.t6=A,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,r=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=m.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var h=(0,r.useForm)(),v=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},I=function(z,_){_.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):p.default.info(JSON.stringify(z))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(r.default,{form:h,schema:M,onMount:v,onFinish:I}),b.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=P,m.abrupt("return",u);case 37:case"end":return m.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ye}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return R=function(u,T){if(!T&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(T);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(a,v,I):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:T})(u)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,l=(0,M.t0)(M.t1),M.t2=R,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,p=(0,M.t2)(M.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var u=(0,p.useForm)();return l.default.createElement(p.default,{form:u,schema:r})},s=o,M.abrupt("return",s);case 17:case"end":return M.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.expression})},o.abrupt("return",R);case 16:case"end":return o.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A;return O.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return R=function(T,m){if(!m&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var a=b(m);if(a&&a.has(T))return a.get(T);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in T)if(I!=="default"&&Object.prototype.hasOwnProperty.call(T,I)){var w=v?Object.getOwnPropertyDescriptor(T,I):null;w&&(w.get||w.set)?Object.defineProperty(h,I,w):h[I]=T[I]}return h.default=T,a&&a.set(T,h),h},b=function(T){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(b=function(v){return v?a:m})(T)},P.t0=R,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,d=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=P.sent,P.t2=R,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,p=(0,P.t2)(P.t3),r=function(T){return new Promise(function(m){return setTimeout(m,T)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var T=(0,p.useForm)(),m=function(){T.setValues({input1:"hello world"}),r(3e3).then(function(h){T.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:T,schema:o,onMount:m})},A=s,P.abrupt("return",A);case 20:case"end":return P.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(A){var M=A.value;console.log(M)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:b})},r=R,s.abrupt("return",r);case 16:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return R=function(u,T){if(!T&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(T);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var I=h?Object.getOwnPropertyDescriptor(u,v):null;I&&(I.get||I.set)?Object.defineProperty(a,v,I):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:T})(u)},M.t0=R,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,d=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=M.sent,M.t2=R,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,p=(0,M.t2)(M.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var u=(0,p.useForm)(),T={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return d.default.createElement(p.default,{form:u,schema:r,watch:T})},s=o,M.abrupt("return",s);case 19:case"end":return M.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=r(a);if(h&&h.has(m))return h.get(m);var v={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=I?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},r=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(I){return I?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=o,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},A=function(){var m=(0,R.useForm)(),a=function(I,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(I,null,2))},h={input1:function(I){I.length>2?m.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:a,watch:h}),p.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=A,u.abrupt("return",M);case 27:case"end":return u.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A,M,P,u,T;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return A=function(v,I){if(!I&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=s(I);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},s=function(v){if(typeof WeakMap!="function")return null;var I=new WeakMap,w=new WeakMap;return(s=function(_){return _?w:I})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(61)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=d,a.next=15,Promise.all([e.e(0),e.e(13),e.e(59),e.e(62)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.t4=d,a.next=20,e.e(65).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=A,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return r=a.sent,a.t8=A,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(v){return console.log("widget props:",v),R.default.createElement(p.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},v))},u=function(){var v=(0,o.useForm)(),I=function(){};return R.default.createElement("div",null,R.default.createElement(o.default,{readOnly:!0,form:v,schema:M,widgets:{site:P},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},T=u,a.abrupt("return",T);case 40:case"end":return a.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.basic})},o.abrupt("return",R);case 16:case"end":return o.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R;return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,R=function(){return l.default.createElement(p.default,{schema:b.titleTrick})},o.abrupt("return",R);case 16:case"end":return o.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:Rn},"main.js":{import:"./main",content:Fe},"json/simplest.json":{import:"./json/simplest.json",content:Tn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:En},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ze}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{tsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r,o,s,A;return O.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=e("K+nK"),P.t0=d,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,l=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(58)]).then(e.bind(null,"P2DI"));case 8:for(p=P.sent,b=[],R=0;R<6;R++)b.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(T,m){return l.default.createElement("a",{onClick:function(){return alert(T.title)}},"\u7F16\u8F91")}}],s=function(){var T=function(){return{rows:b,total:b.length}};return l.default.createElement(p.TableProvider,null,l.default.createElement(p.Search,{schema:r,api:T}),l.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},A=s,P.abrupt("return",A);case 16:case"end":return P.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){var d,l,p,b,R,r;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(p.default,{defaultValue:b}))},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(K.dynamic)({loader:function(){var D=Object(G.a)(O.a.mark(function F(){return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Vn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Mn,gn,e){},Zs1V:function(Mn){Mn.exports=JSON.parse("{}")},p8sG:function(Mn,gn,e){"use strict";Mn.exports=e("80pN")}}]);
