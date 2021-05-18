(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10],{"0zqC":function(Fn,gn,e){"use strict";e.r(gn);var G=e("tJVT"),n=e("q1tI"),C=e.n(n),L=e("wx14"),le=e("rePB"),K=e("ODXe"),on=e("U8pU"),Ae=e("Ff2n"),ve=e("VTBJ"),Rn=e("TSYQ"),Ie=e.n(Rn),Bn=e("Zm9Q"),wn=e("5Z9U"),Sn=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),$n=e("t23M");function Wn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function y(){for(var O=arguments.length,g=new Array(O),R=0;R<O;R++)g[R]=arguments[R];c.current||(Ye.a.cancel(i.current),i.current=Object(Ye.a)(function(){t.apply(void 0,g)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ye.a.cancel(i.current)}},[]),y}function Pn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),y=Object(K.a)(c,2),O=y[1],g=Object(n.useRef)(typeof t=="function"?t():t),R=Wn(function(){var W=g.current;i.current.forEach(function($){W=$(W)}),i.current=[],g.current=W,O({})});function P(W){i.current.push(W),R()}return[g.current,P]}var we=e("4IlW");function qn(t,i){var c,y=t.prefixCls,O=t.id,g=t.active,R=t.rtl,P=t.tab,W=P.key,$=P.tab,V=P.disabled,H=P.closeIcon,J=t.tabBarGutter,se=t.tabPosition,Q=t.closable,Y=t.renderWrapper,ue=t.removeAriaLabel,U=t.editable,q=t.onClick,re=t.onRemove,Z=t.onFocus,oe="".concat(y,"-tab");n.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[R?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&Q!==!1&&!V;function ne(ae){V||q(ae)}function ce(ae){ae.preventDefault(),ae.stopPropagation(),U.onEdit("remove",{key:W,event:ae})}var me=n.createElement("div",{key:W,ref:i,className:Ie()(oe,(c={},Object(le.a)(c,"".concat(oe,"-with-remove"),be),Object(le.a)(c,"".concat(oe,"-active"),g),Object(le.a)(c,"".concat(oe,"-disabled"),V),c)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(W),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(W),"aria-disabled":V,tabIndex:V?null:0,onClick:function(X){X.stopPropagation(),ne(X)},onKeyDown:function(X){[we.a.SPACE,we.a.ENTER].includes(X.which)&&(X.preventDefault(),ne(X))},onFocus:Z},$),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(X){X.stopPropagation(),ce(X)}},H||U.removeIcon||"\xD7"));return Y&&(me=Y(me)),me}var Vn=n.forwardRef(qn),at={width:0,height:0,left:0,top:0};function E(t,i,c){return Object(n.useMemo)(function(){for(var y,O=new Map,g=i.get((y=t[0])===null||y===void 0?void 0:y.key)||at,R=g.left+g.width,P=0;P<t.length;P+=1){var W=t[P].key,$=i.get(W);if(!$){var V;$=i.get((V=t[P-1])===null||V===void 0?void 0:V.key)||at}var H=O.get(W)||Object(ve.a)({},$);H.right=R-H.left-H.width,O.set(W,H)}return O},[t.map(function(y){return y.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function I(t,i,c,y,O){var g=O.tabs,R=O.tabPosition,P=O.rtl,W,$,V;["top","bottom"].includes(R)?(W="width",$=P?"right":"left",V=Math.abs(i.left)):(W="height",$="top",V=-i.top);var H=i[W],J=c[W],se=y[W],Q=H;return J+se>H&&(Q=H-se),Object(n.useMemo)(function(){if(!g.length)return[0,0];for(var Y=g.length,ue=Y,U=0;U<Y;U+=1){var q=t.get(g[U].key)||D;if(q[$]+q[W]>V+Q){ue=U-1;break}}for(var re=0,Z=Y-1;Z>=0;Z-=1){var oe=t.get(g[Z].key)||D;if(oe[$]<V){re=Z+1;break}}return[re,ue]},[t,V,Q,R,g.map(function(Y){return Y.key}).join("_"),P])}var d=e("Gytx"),o=e.n(d),p=e("Kwbf");function b(t,i){var c=t.prefixCls,y=t.invalidate,O=t.item,g=t.renderItem,R=t.responsive,P=t.registerSize,W=t.itemKey,$=t.className,V=t.style,H=t.children,J=t.display,se=t.order,Q=t.component,Y=Q===void 0?"div":Q,ue=Object(Ae.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=R&&!J;function q(be){P(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=g&&O!==void 0?g(O):H,Z;y||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:R?se:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var k=n.createElement(Y,Object(L.a)({className:Ie()(!y&&c,$),style:Object(ve.a)(Object(ve.a)({},Z),V)},oe,ue,{ref:i}),re);return R&&(k=n.createElement($n.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var S=n.forwardRef(b);S.displayName="Item";var r=S;function l(){var t=Object(n.useState)({}),i=Object(K.a)(t,2),c=i[1],y=Object(n.useRef)([]),O=Object(n.useRef)(!1),g=0,R=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function P(W){var $=g;g+=1,y.current.length<$+1&&(y.current[$]=W);var V=y.current[$];function H(J){y.current[$]=typeof J=="function"?J(y.current[$]):J,Ye.a.cancel(R),R=Object(Ye.a)(function(){O.current||c({})})}return[V,H]}return P}var s=function(i,c){var y=n.useContext(j);if(!y){var O=i.component,g=O===void 0?"div":O,R=Object(Ae.a)(i,["component"]);return n.createElement(g,Object(L.a)({},R,{ref:c}))}var P=y.className,W=Object(Ae.a)(y,["className"]),$=i.className,V=Object(Ae.a)(i,["className"]);return n.createElement(j.Provider,{value:null},n.createElement(r,Object(L.a)({ref:c,className:Ie()(P,$)},W,V)))},M=n.forwardRef(s);M.displayName="RawItem";var F=M,j=n.createContext(null),u="responsive",B="invalidate";function m(t){return"+ ".concat(t.length," ...")}function a(t,i){var c=t.prefixCls,y=c===void 0?"rc-overflow":c,O=t.data,g=O===void 0?[]:O,R=t.renderItem,P=t.renderRawItem,W=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,H=t.ssr,J=t.style,se=t.className,Q=t.maxCount,Y=t.renderRest,ue=t.renderRawRest,U=t.suffix,q=t.component,re=q===void 0?"div":q,Z=t.itemComponent,oe=t.onVisibleChange,k=Object(Ae.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=l(),ne=H==="full",ce=be(null),me=Object(K.a)(ce,2),ae=me[0],X=me[1],de=ae||0,ye=be(new Map),he=Object(K.a)(ye,2),Se=he[0],Ke=he[1],Oe=be(0),Re=Object(K.a)(Oe,2),Fe=Re[0],Me=Re[1],Ee=be(0),De=Object(K.a)(Ee,2),$e=De[0],qe=De[1],Ve=be(0),Ue=Object(K.a)(Ve,2),Qe=Ue[0],Le=Ue[1],Dn=Object(n.useState)(null),tn=Object(K.a)(Dn,2),Ze=tn[0],ln=tn[1],yn=Object(n.useState)(null),bn=Object(K.a)(yn,2),Ne=bn[0],He=bn[1],_e=n.useMemo(function(){return Ne===null&&ne?Number.MAX_SAFE_INTEGER:Ne||0},[Ne,ae]),xe=Object(n.useState)(!1),Kn=Object(K.a)(xe,2),Jn=Kn[0],Ln=Kn[1],rn="".concat(y,"-item"),En=Math.max(Fe,$e),un=g.length&&Q===u,In=Q===B,en=un||typeof Q=="number"&&g.length>Q,an=Object(n.useMemo)(function(){var pe=g;return un?ae===null&&ne?pe=g:pe=g.slice(0,Math.min(g.length,de/V)):typeof Q=="number"&&(pe=g.slice(0,Q)),pe},[g,V,ae,Q,un]),Nn=Object(n.useMemo)(function(){return un?g.slice(_e+1):g.slice(an.length)},[g,an,un,_e]),cn=Object(n.useCallback)(function(pe,Pe){var Be;return typeof W=="function"?W(pe):(Be=W&&(pe==null?void 0:pe[W]))!==null&&Be!==void 0?Be:Pe},[W]),ke=Object(n.useCallback)(R||function(pe){return pe},[R]);function Xe(pe,Pe){He(pe),Pe||(Ln(pe<g.length-1),oe==null||oe(pe))}function Gn(pe,Pe){X(Pe.clientWidth)}function Hn(pe,Pe){Ke(function(Be){var nn=new Map(Be);return Pe===null?nn.delete(pe):nn.set(pe,Pe),nn})}function nt(pe,Pe){qe(Pe),Me($e)}function On(pe,Pe){Le(Pe)}function hn(pe){return Se.get(cn(an[pe],pe))}n.useLayoutEffect(function(){if(de&&En&&an){var pe=Qe,Pe=an.length,Be=Pe-1;if(!Pe){Xe(0),ln(null);return}for(var nn=0;nn<Pe;nn+=1){var Zn=hn(nn);if(Zn===void 0){Xe(nn-1,!0);break}if(pe+=Zn,nn===Be-1&&pe+hn(Be)<=de){Xe(Be),ln(null);break}else if(pe+En>de){Xe(nn-1),ln(pe-Zn-Qe+$e);break}else if(nn===Be){Xe(Be),ln(pe-Qe);break}}U&&hn(0)+Qe>de&&ln(null)}},[de,Se,$e,Qe,cn,an]);var Xn=Jn&&!!Nn.length,Cn={};Ze!==null&&un&&(Cn={position:"absolute",left:Ze,top:0});var mn={prefixCls:rn,responsive:un,component:Z,invalidate:In},Qn=P?function(pe,Pe){var Be=cn(pe,Pe);return n.createElement(j.Provider,{key:Be,value:Object(ve.a)(Object(ve.a)({},mn),{},{order:Pe,item:pe,itemKey:Be,registerSize:Hn,display:Pe<=_e})},P(pe,Pe))}:function(pe,Pe){var Be=cn(pe,Pe);return n.createElement(r,Object(L.a)({},mn,{order:Pe,key:Be,item:pe,renderItem:ke,itemKey:Be,registerSize:Hn,display:Pe<=_e}))},An,Yn={order:Xn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Xn};if(ue)ue&&(An=n.createElement(j.Provider,{value:Object(ve.a)(Object(ve.a)({},mn),Yn)},ue(Nn)));else{var dn=Y||m;An=n.createElement(r,Object(L.a)({},mn,Yn),typeof dn=="function"?dn(Nn):dn)}var Mn=n.createElement(re,Object(L.a)({className:Ie()(!In&&y,se),style:J,ref:i},k),an.map(Qn),en?An:null,U&&n.createElement(r,Object(L.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Cn}),U));return un&&(Mn=n.createElement($n.default,{onResize:Gn},Mn)),Mn}var h=n.forwardRef(a);h.displayName="Overflow",h.Item=F,h.RESPONSIVE=u,h.INVALIDATE=B;var v=h,N=v,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Te(t,i){var c=Object(ve.a)({},t);return Object.keys(i).forEach(function(y){var O=i[y];O!==void 0&&(c[y]=O)}),c}function jn(t){var i=t.children,c=t.locked,y=Object(Ae.a)(t,["children","locked"]),O=n.useContext(We),g=Object(pn.a)(function(){return Te(O,y)},[O,y],function(R,P){return!c&&(R[0]!==P[0]||!o()(R[1],P[1]))});return n.createElement(We.Provider,{value:g},i)}function it(t,i,c,y){var O=n.useContext(We),g=O.activeKey,R=O.onActive,P=O.onInactive,W={active:g===t};return i||(W.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),R(t)},W.onMouseLeave=function($){y==null||y({key:t,domEvent:$}),P(t)}),W}function _n(t){var i=t.item,c=Object(Ae.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function f(t){var i=t.icon,c=t.props,y=t.children,O;return typeof i=="function"?O=n.createElement(i,Object(ve.a)({},c)):O=i,O||y||null}function A(t){var i=n.useContext(We),c=i.mode,y=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=t;return y?{paddingRight:g*O}:{paddingLeft:g*O}}var T=[],fe=n.createContext(null);function ee(){return n.useContext(fe)}var je=n.createContext(T);function ze(t){var i=n.useContext(je);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Gt(t){var i=n.useContext(Ut);return Jt(i,t)}var br=function(t){Object(_.a)(c,t);var i=Object(ie.a)(c);function c(){return Object(w.a)(this,c),i.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,R=O.attribute,P=O.elementRef,W=Object(Ae.a)(O,["title","attribute","elementRef"]),$=Object(ge.a)(W,["eventKey"]);return Object(p.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(N.Item,Object(L.a)({},R,{title:typeof g=="string"?g:void 0},$,{ref:P}))}}]),c}(n.Component),Or=function(i){var c,y=i.style,O=i.className,g=i.eventKey,R=i.disabled,P=i.itemIcon,W=i.children,$=i.role,V=i.onMouseEnter,H=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,Y=Object(Ae.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Gt(g),U=n.useContext(We),q=U.prefixCls,re=U.onItemClick,Z=U.disabled,oe=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,ce="".concat(q,"-item"),me=n.useRef(),ae=n.useRef(),X=Z||R,de=ze(g),ye=function(Ve){return{key:g,keyPath:de,item:me.current,domEvent:Ve}},he=P||k,Se=it(g,X,V,H),Ke=Se.active,Oe=Object(Ae.a)(Se,["active"]),Re=be.includes(g),Fe=A(de.length),Me=function(Ve){if(!X){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},Ee=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},De=function(Ve){ne(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Re),n.createElement(br,Object(L.a)({ref:me,elementRef:ae,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":oe&&ue?null:ue},Y,Oe,$e,{component:"li","aria-disabled":R,style:Object(ve.a)(Object(ve.a)({},Fe),y),className:Ie()(ce,(c={},Object(le.a)(c,"".concat(ce,"-active"),Ke),Object(le.a)(c,"".concat(ce,"-selected"),Re),Object(le.a)(c,"".concat(ce,"-disabled"),X),c),O),onClick:Me,onKeyDown:Ee,onFocus:De}),W,n.createElement(f,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Re}),icon:he}))};function Cr(t){var i=t.eventKey,c=ee(),y=ze(i);return n.useEffect(function(){if(c)return c.registerPath(i,y),function(){c.unregisterPath(i,y)}},[y]),c?null:n.createElement(Or,t)}var Dt=Cr;function Et(t,i){return Object(Bn.a)(t).map(function(c,y){if(n.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(fn.a)(i),[y]).join("-"))),n.cloneElement(c,{key:O,eventKey:O})}return c})}function et(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var y,O=arguments.length,g=new Array(O),R=0;R<O;R++)g[R]=arguments[R];return(y=i.current)===null||y===void 0?void 0:y.call.apply(y,[i].concat(g))},[]);return t?c:void 0}var Rr=function(i,c){var y=i.className,O=i.children,g=Object(Ae.a)(i,["className","children"]),R=n.useContext(We),P=R.prefixCls,W=R.mode;return n.createElement("ul",Object(L.a)({className:Ie()(P,"".concat(P,"-sub"),"".concat(P,"-").concat(W==="inline"?"inline":"vertical"),y)},g,{"data-menu-list":!0,ref:c}),O)},Ht=n.forwardRef(Rr);Ht.displayName="SubMenuList";var Xt=Ht,Sr=e("uciX"),zn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},Pr={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},fa=Qt;function Yt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(t){var i=t.prefixCls,c=t.visible,y=t.children,O=t.popup,g=t.popupClassName,R=t.popupOffset,P=t.disabled,W=t.mode,$=t.onVisibleChange,V=n.useContext(We),H=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,Y=V.builtinPlacements,ue=V.triggerSubMenuAction,U=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Z=n.useState(!1),oe=Object(K.a)(Z,2),k=oe[0],be=oe[1],ne=J?Object(ve.a)(Object(ve.a)({},Pr),Y):Object(ve.a)(Object(ve.a)({},Qt),Y),ce=jr[W],me=Yt(W,q,re),ae=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),X=n.useRef();return n.useEffect(function(){return X.current=Object(Ye.a)(function(){be(c)}),function(){Ye.a.cancel(X.current)}},[c]),n.createElement(Sr.a,{prefixCls:i,popupClassName:Ie()("".concat(i,"-popup"),Object(le.a)({},"".concat(i,"-rtl"),J),g),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:O,popupAlign:R&&{offset:R},action:P?[]:[ue],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:U,popupMotion:ae},y)}var Er=e("8XRh");function Ir(t){var i=t.id,c=t.open,y=t.keyPath,O=t.children,g="inline",R=n.useContext(We),P=R.prefixCls,W=R.forceSubMenuRender,$=R.motion,V=R.defaultMotions,H=R.mode,J=n.useRef(!1);J.current=H===g;var se=n.useState(!J.current),Q=Object(K.a)(se,2),Y=Q[0],ue=Q[1],U=J.current?c:!1;n.useEffect(function(){J.current&&ue(!1)},[H]);var q=Object(ve.a)({},Yt(g,$,V));y.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Z){return!J.current&&!Z&&ue(!0),re==null?void 0:re(Z)},Y?null:n.createElement(jn,{mode:g,locked:!J.current},n.createElement(Er.default,Object(L.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(P,"-hidden")}),function(Z){var oe=Z.className,k=Z.style;return n.createElement(Xt,{id:i,className:oe,style:k},O)}))}var Nr=function(i){var c,y=i.style,O=i.className,g=i.title,R=i.eventKey,P=i.disabled,W=i.internalPopupClose,$=i.children,V=i.itemIcon,H=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,Y=i.onMouseEnter,ue=i.onMouseLeave,U=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Z=Object(Ae.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(R),k=n.useContext(We),be=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,ae=k.overflowDisabled,X=k.activeKey,de=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Se=k.onItemClick,Ke=k.onOpenChange,Oe=k.onActive,Re=n.useContext(Ge),Fe=Re.isSubPathKey,Me=ze(),Ee="".concat(be,"-submenu"),De=me||P,$e=n.useRef(),qe=n.useRef(),Ve=V||ye,Ue=H||he,Qe=ce.includes(R),Le=!ae&&Qe,Dn=Fe(de,R),tn=it(R,De,q,re),Ze=tn.active,ln=Object(Ae.a)(tn,["active"]),yn=n.useState(!1),bn=Object(K.a)(yn,2),Ne=bn[0],He=bn[1],_e=function(Xe){De||He(Xe)},xe=function(Xe){_e(!0),Y==null||Y({key:R,domEvent:Xe})},Kn=function(Xe){_e(!1),ue==null||ue({key:R,domEvent:Xe})},Jn=n.useMemo(function(){return Ze||(ne!=="inline"?Ne||Fe([X],R):!1)},[ne,Ze,X,Ne,R,Fe]),Ln=A(Me.length),rn=function(Xe){De||(U==null||U({key:R,domEvent:Xe}),ne==="inline"&&Ke(R,!Qe))},En=et(function(ke){Q==null||Q(_n(ke)),Se(ke)}),un=function(Xe){ne!=="inline"&&Ke(R,Xe)},In=function(){Oe(R)},en=oe&&"".concat(oe,"-popup"),an=n.createElement("div",Object(L.a)({role:"menuitem",style:Ln,className:"".concat(Ee,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":ae&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":De,onClick:rn,onFocus:In},ln),g,n.createElement(f,{icon:ne!=="horizontal"?Ue:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ee,"-arrow")}))),Nn=n.useRef(ne);if(ne!=="inline"&&(Nn.current=Me.length>1?"vertical":ne),!ae){var cn=Nn.current;an=n.createElement(Dr,{mode:cn,prefixCls:Ee,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(jn,{mode:cn},n.createElement(Xt,{id:en,ref:qe},$)),disabled:De,onVisibleChange:un},an)}return n.createElement(jn,{onItemClick:En,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(N.Item,Object(L.a)({role:"none"},Z,{component:"li",style:y,className:Ie()(Ee,"".concat(Ee,"-").concat(ne),O,(c={},Object(le.a)(c,"".concat(Ee,"-open"),Le),Object(le.a)(c,"".concat(Ee,"-active"),Jn),Object(le.a)(c,"".concat(Ee,"-selected"),Dn),Object(le.a)(c,"".concat(Ee,"-disabled"),De),c)),onMouseEnter:xe,onMouseLeave:Kn}),an,!ae&&n.createElement(Ir,{id:en,open:Le,keyPath:Me},$)))};function Zt(t){var i=t.eventKey,c=t.children,y=ze(i),O=Et(c,y),g=ee();n.useEffect(function(){if(g)return g.registerPath(i,y),function(){g.unregisterPath(i,y)}},[y]);var R;return g?R=O:R=n.createElement(Nr,t,O),n.createElement(je.Provider,{value:y},R)}var Ar=e("x/xZ");function xt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ar.a)(t)){var c=t.nodeName.toLowerCase(),y=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),O=t.getAttribute("tabindex"),g=Number(O),R=null;return O&&!Number.isNaN(g)?R=g:y&&R===null&&(R=0),y&&t.disabled&&(R=null),R!==null&&(R>=0||i&&R<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(y){return xt(y,i)});return xt(t,i)&&c.unshift(t),c}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(t){}}function ga(t,i){if(i.keyCode===9){var c=kt(t),y=c[i.shiftKey?0:c.length-1],O=y===document.activeElement||t===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var It=we.a.LEFT,Nt=we.a.RIGHT,At=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[At,ft,It,Nt];function Mr(t,i,c,y){var O,g,R,P,W="prev",$="next",V="children",H="parent";if(t==="inline"&&y===pt)return{inlineTrigger:!0};var J=(O={},Object(le.a)(O,At,W),Object(le.a)(O,ft,$),O),se=(g={},Object(le.a)(g,It,c?$:W),Object(le.a)(g,Nt,c?W:$),Object(le.a)(g,ft,V),Object(le.a)(g,pt,V),g),Q=(R={},Object(le.a)(R,At,W),Object(le.a)(R,ft,$),Object(le.a)(R,pt,V),Object(le.a)(R,qt,H),Object(le.a)(R,It,c?V:H),Object(le.a)(R,Nt,c?H:V),R),Y={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},ue=(P=Y["".concat(t).concat(i?"":"Sub")])===null||P===void 0?void 0:P[y];switch(ue){case W:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Tr(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Fr(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Br(t,i){var c=kt(t,!0);return c.filter(function(y){return i.has(y)})}function er(t,i,c){var y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var O=Br(t,i),g=O.length,R=O.findIndex(function(P){return c===P});return y<0?R===-1?R=g-1:R-=1:y>0&&(R+=1),R=(R+g)%g,O[R]}function wr(t,i,c,y,O,g,R,P,W,$){var V=n.useRef(),H=n.useRef();H.current=i;var J=function(){Ye.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var Y,ue,U,q=function(){Y=new Set,ue=new Map,U=new Map;var ye=g();return ye.forEach(function(he){var Se=document.querySelector("[data-menu-id='".concat(Jt(y,he),"']"));Se&&(Y.add(Se),U.set(Se,he),ue.set(he,Se))}),Y};q();var re=ue.get(i),Z=Fr(re,Y),oe=U.get(Z),k=Mr(t,R(oe,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Se=ye.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(he=Se);var Ke=U.get(ye);P(Ke),J(),V.current=Object(Ye.a)(function(){H.current===Ke&&he.focus()})}};if(k.sibling||!Z){var ne;!Z||t==="inline"?ne=O.current:ne=Tr(Z);var ce=er(ne,Y,Z,k.offset);be(ce)}else if(k.inlineTrigger)W(oe);else if(k.offset>0)W(oe,!0),J(),V.current=Object(Ye.a)(function(){q();var de=Z.getAttribute("aria-controls"),ye=document.getElementById(de),he=er(ye,Y);be(he)},5);else if(k.offset<0){var me=R(oe,!0),ae=me[me.length-2],X=ue.get(ae);W(ae,!1),be(X)}}$==null||$(se)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(t){var i=Object(Sn.a)(t,{value:t}),c=Object(K.a)(i,2),y=c[0],O=c[1];return n.useEffect(function(){nr+=1;var g="".concat(Wr,"-").concat(nr);O("rc-menu-uuid-".concat(g))},[]),y}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var Mt="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(Mt)},$r=function(i){return i.split(Mt)},Tt="rc-menu-more";function Vr(){var t=n.useState({}),i=Object(K.a)(t,2),c=i[1],y=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),g=n.useState([]),R=Object(K.a)(g,2),P=R[0],W=R[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(U,q){var re=tr(q);O.current.set(re,U),y.current.set(U,re),$.current+=1;var Z=$.current;Lr(function(){Z===$.current&&c({})})},[]),H=Object(n.useCallback)(function(U,q){var re=tr(q);O.current.delete(re),y.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),se=Object(n.useCallback)(function(U,q){var re=y.current.get(U)||"",Z=$r(re);return q&&P.includes(Z[0])&&Z.unshift(Tt),Z},[P]),Q=Object(n.useCallback)(function(U,q){return U.some(function(re){var Z=se(re,!0);return Z.includes(q)})},[se]),Y=function(){var q=Object(fn.a)(y.current.keys());return P.length&&q.push(Tt),q},ue=Object(n.useCallback)(function(U){var q="".concat(y.current.get(U)).concat(Mt),re=new Set;return Object(fn.a)(O.current.keys()).forEach(function(Z){Z.startsWith(q)&&re.add(O.current.get(Z))}),re},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:Y,getSubPathKeys:ue}}var vt=[],zr=function(i){var c,y,O=i.prefixCls,g=O===void 0?"rc-menu":O,R=i.style,P=i.className,W=i.tabIndex,$=W===void 0?0:W,V=i.children,H=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,Y=i.inlineCollapsed,ue=i.disabled,U=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Z=i.subMenuCloseDelay,oe=Z===void 0?.1:Z,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ne=i.openKeys,ce=i.activeKey,me=i.defaultActiveFirst,ae=i.selectable,X=ae===void 0?!0:ae,de=i.multiple,ye=de===void 0?!1:de,he=i.defaultSelectedKeys,Se=i.selectedKeys,Ke=i.onSelect,Oe=i.onDeselect,Re=i.inlineIndent,Fe=Re===void 0?24:Re,Me=i.motion,Ee=i.defaultMotions,De=i.triggerSubMenuAction,$e=De===void 0?"hover":De,qe=i.builtinPlacements,Ve=i.itemIcon,Ue=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,Dn=i.getPopupContainer,tn=i.onClick,Ze=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ne=Object(Ae.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Et(V,vt),_e=n.useState(!1),xe=Object(K.a)(_e,2),Kn=xe[0],Jn=xe[1],Ln=n.useRef(),rn=Kr(J),En=H==="rtl",un=n.useMemo(function(){return Q==="inline"&&Y?["vertical",Y]:[Q,!1]},[Q,Y]),In=Object(K.a)(un,2),en=In[0],an=In[1],Nn=n.useState(0),cn=Object(K.a)(Nn,2),ke=cn[0],Xe=cn[1],Gn=ke>=He.length-1||en!=="horizontal"||U,Hn=Object(Sn.a)(be,{value:ne,postState:function(x){return x||vt}}),nt=Object(K.a)(Hn,2),On=nt[0],hn=nt[1],Xn=n.useState(On),Cn=Object(K.a)(Xn,2),mn=Cn[0],Qn=Cn[1],An=en==="inline",Yn=n.useRef(!1);n.useEffect(function(){An&&Qn(On)},[On]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),Ze==null||Ze(te)}},[An]);var dn=Vr(),Mn=dn.registerPath,pe=dn.unregisterPath,Pe=dn.refreshOverflowKeys,Be=dn.isSubPathKey,nn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Mn,unregisterPath:pe}},[Mn,pe]),Kt=n.useMemo(function(){return{isSubPathKey:Be}},[Be]);n.useEffect(function(){Pe(Gn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Gn]);var Lt=Object(Sn.a)(ce||me&&((c=He[0])===null||c===void 0?void 0:c.key),{value:ce}),tt=Object(K.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(te){ot(te)}),$t=et(function(){ot(void 0)}),Ot=Object(Sn.a)(he||[],{value:Se,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ct=Object(K.a)(Ot,2),rt=Ct[0],Tn=Ct[1],Rt=function(x){if(!!X){var Ce=x.key,Je=rt.includes(Ce),sn;Je?sn=rt.filter(function(kn){return kn!==Ce}):ye?sn=[].concat(Object(fn.a)(rt),[Ce]):sn=[Ce],Tn(sn);var Un=Object(ve.a)(Object(ve.a)({},x),{},{selectedKeys:sn});Je?Oe==null||Oe(Un):Ke==null||Ke(Un)}},St=et(function(te){tn==null||tn(_n(te)),Rt(te)}),lt=et(function(te,x){var Ce=On.filter(function(sn){return sn!==te});if(x)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}o()(On,Ce)||(hn(Ce),Ze==null||Ze(Ce))}),xn=et(Dn),ut=function(x,Ce){var Je=Ce!=null?Ce:!On.includes(x);lt(x,Je)},dt=wr(en,yt,En,rn,Ln,Zn,nn,ot,ut,ln);n.useEffect(function(){Jn(!0)},[]);var Pt=en!=="horizontal"||U?He:He.map(function(te,x){return n.createElement(jn,{key:te.key,overflowDisabled:x>ke},te)}),jt=n.createElement(N,Object(L.a)({id:J,ref:Ln,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Dt,className:Ie()(g,"".concat(g,"-root"),"".concat(g,"-").concat(en),P,(y={},Object(le.a)(y,"".concat(g,"-inline-collapsed"),an),Object(le.a)(y,"".concat(g,"-rtl"),En),y)),dir:H,style:R,role:"menu",tabIndex:$,data:Pt,renderRawItem:function(x){return x},renderRawRest:function(x){var Ce=x.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Zt,{eventKey:Tt,title:Le,disabled:Gn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?N.INVALIDATE:N.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Xe(x)},onKeyDown:dt},Ne));return n.createElement(Ut.Provider,{value:rn},n.createElement(jn,{prefixCls:g,mode:en,openKeys:On,rtl:En,disabled:ue,motion:Kn?Me:null,defaultMotions:Kn?Ee:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Fe,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:xn,itemIcon:Ve,expandIcon:Ue,onItemClick:St,onOpenChange:lt},n.createElement(Ge.Provider,{value:Kt},jt),n.createElement(fe.Provider,{value:Wt},He)))},Ur=zr,Jr=function(i){var c=i.className,y=i.title,O=i.eventKey,g=i.children,R=Object(Ae.a)(i,["className","title","eventKey","children"]),P=n.useContext(We),W=P.prefixCls,$="".concat(W,"-item-group");return n.createElement("li",Object(L.a)({},R,{onClick:function(H){return H.stopPropagation()},className:Ie()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof y=="string"?y:void 0},y),n.createElement("ul",{className:"".concat($,"-list")},g))};function Gr(t){var i=t.children,c=Object(Ae.a)(t,["children"]),y=ze(c.eventKey),O=Et(i,y),g=ee();return g?O:n.createElement(Jr,c,O)}function Hr(t){var i=t.className,c=t.style,y=n.useContext(We),O=y.prefixCls,g=ee();return g?null:n.createElement("li",{className:Ie()("".concat(O,"-item-divider"),i),style:c})}var st=Ur;st.Item=Dt,st.SubMenu=Zt,st.ItemGroup=Gr,st.Divider=Hr;var Xr=st,Qr=e("eDIo");function Yr(t,i){var c=t.prefixCls,y=t.editable,O=t.locale,g=t.style;return!y||y.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(P){y.onEdit("add",{event:P})}},y.addIcon||"+")}var rr=n.forwardRef(Yr);function Zr(t,i){var c=t.prefixCls,y=t.id,O=t.tabs,g=t.locale,R=t.mobile,P=t.moreIcon,W=P===void 0?"More":P,$=t.moreTransitionName,V=t.style,H=t.className,J=t.editable,se=t.tabBarGutter,Q=t.rtl,Y=t.onTabClick,ue=Object(n.useState)(!1),U=Object(K.a)(ue,2),q=U[0],re=U[1],Z=Object(n.useState)(null),oe=Object(K.a)(Z,2),k=oe[0],be=oe[1],ne="".concat(y,"-more-popup"),ce="".concat(c,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,ae=g==null?void 0:g.dropdownAriaLabel,X=n.createElement(Xr,{onClick:function(Re){var Fe=Re.key,Me=Re.domEvent;Y(Fe,Me),re(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ae!==void 0?ae:"expanded dropdown"},O.map(function(Oe){return n.createElement(Dt,{key:Oe.key,id:"".concat(ne,"-").concat(Oe.key),role:"option","aria-controls":y&&"".concat(y,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function de(Oe){for(var Re=O.filter(function($e){return!$e.disabled}),Fe=Re.findIndex(function($e){return $e.key===k})||0,Me=Re.length,Ee=0;Ee<Me;Ee+=1){Fe=(Fe+Oe+Me)%Me;var De=Re[Fe];if(!De.disabled){be(De.key);return}}}function ye(Oe){var Re=Oe.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Re)&&(re(!0),Oe.preventDefault());return}switch(Re){case we.a.UP:de(-1),Oe.preventDefault();break;case we.a.DOWN:de(1),Oe.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Oe);break}}Object(n.useEffect)(function(){var Oe=document.getElementById(me);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(le.a)({},Q?"marginLeft":"marginRight",se);O.length||(he.visibility="hidden",he.order=1);var Se=Ie()(Object(le.a)({},"".concat(ce,"-rtl"),Q)),Ke=R?null:n.createElement(Qr.default,{prefixCls:ce,overlay:X,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(y,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:Ie()("".concat(c,"-nav-operations"),H),style:V,ref:i},Ke,n.createElement(rr,{prefixCls:c,locale:g,editable:J}))}var xr=n.forwardRef(Zr),Ft=Object(n.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(t,i){var c=Object(n.useState)(),y=Object(K.a)(c,2),O=y[0],g=y[1],R=Object(n.useState)(0),P=Object(K.a)(R,2),W=P[0],$=P[1],V=Object(n.useState)(0),H=Object(K.a)(V,2),J=H[0],se=H[1],Q=Object(n.useState)(),Y=Object(K.a)(Q,2),ue=Y[0],U=Y[1],q=Object(n.useRef)();function re(ce){var me=ce.touches[0],ae=me.screenX,X=me.screenY;g({x:ae,y:X}),window.clearInterval(q.current)}function Z(ce){if(!!O){ce.preventDefault();var me=ce.touches[0],ae=me.screenX,X=me.screenY;g({x:ae,y:X});var de=ae-O.x,ye=X-O.y;i(de,ye);var he=Date.now();$(he),se(he-W),U({x:de,y:ye})}}function oe(){if(!!O&&(g(null),U(null),ue)){var ce=ue.x/J,me=ue.y/J,ae=Math.abs(ce),X=Math.abs(me);if(Math.max(ae,X)<kr)return;var de=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(de)<ar&&Math.abs(ye)<ar){window.clearInterval(q.current);return}de*=ir,ye*=ir,i(de*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,ae=ce.deltaY,X=0,de=Math.abs(me),ye=Math.abs(ae);de===ye?X=k.current==="x"?me:ae:de>ye?(X=me,k.current="x"):(X=ae,k.current="y"),i(-X,-X)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:re,onTouchMove:Z,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function ce(de){ne.current.onTouchStart(de)}function me(de){ne.current.onTouchMove(de)}function ae(de){ne.current.onTouchEnd(de)}function X(de){ne.current.onWheel(de)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ae,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",X),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ae)}},[])}function _r(){var t=Object(n.useRef)(new Map);function i(y){return t.current.has(y)||t.current.set(y,n.createRef()),t.current.get(y)}function c(y){t.current.delete(y)}return[i,c]}function sr(t,i){var c=n.useRef(t),y=n.useState({}),O=Object(K.a)(y,2),g=O[1];function R(P){var W=typeof P=="function"?P(c.current):P;W!==c.current&&i(W,c.current),c.current=W,g({})}return[c.current,R]}var or=function(i){var c=i.position,y=i.prefixCls,O=i.extra;if(!O)return null;var g,R=O;return c==="right"&&(g=R.right||!R.left&&R||null),c==="left"&&(g=R.left||null),g?n.createElement("div",{className:"".concat(y,"-extra-content")},g):null};function ea(t,i){var c,y=n.useContext(Ft),O=y.prefixCls,g=y.tabs,R=t.className,P=t.style,W=t.id,$=t.animated,V=t.activeKey,H=t.rtl,J=t.extra,se=t.editable,Q=t.locale,Y=t.tabPosition,ue=t.tabBarGutter,U=t.children,q=t.onTabClick,re=t.onTabScroll,Z=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_r(),ce=Object(K.a)(ne,2),me=ce[0],ae=ce[1],X=Y==="top"||Y==="bottom",de=sr(0,function(te,x){X&&re&&re({direction:te>x?"left":"right"})}),ye=Object(K.a)(de,2),he=ye[0],Se=ye[1],Ke=sr(0,function(te,x){!X&&re&&re({direction:te>x?"top":"bottom"})}),Oe=Object(K.a)(Ke,2),Re=Oe[0],Fe=Oe[1],Me=Object(n.useState)(0),Ee=Object(K.a)(Me,2),De=Ee[0],$e=Ee[1],qe=Object(n.useState)(0),Ve=Object(K.a)(qe,2),Ue=Ve[0],Qe=Ve[1],Le=Object(n.useState)(0),Dn=Object(K.a)(Le,2),tn=Dn[0],Ze=Dn[1],ln=Object(n.useState)(0),yn=Object(K.a)(ln,2),bn=yn[0],Ne=yn[1],He=Object(n.useState)(null),_e=Object(K.a)(He,2),xe=_e[0],Kn=_e[1],Jn=Object(n.useState)(null),Ln=Object(K.a)(Jn,2),rn=Ln[0],En=Ln[1],un=Object(n.useState)(0),In=Object(K.a)(un,2),en=In[0],an=In[1],Nn=Object(n.useState)(0),cn=Object(K.a)(Nn,2),ke=cn[0],Xe=cn[1],Gn=Pn(new Map),Hn=Object(K.a)(Gn,2),nt=Hn[0],On=Hn[1],hn=E(g,nt,De),Xn="".concat(O,"-nav-operations-hidden"),Cn=0,mn=0;X?H?(Cn=0,mn=Math.max(0,De-xe)):(Cn=Math.min(0,xe-De),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function Qn(te){return te<Cn?Cn:te>mn?mn:te}var An=Object(n.useRef)(),Yn=Object(n.useState)(),dn=Object(K.a)(Yn,2),Mn=dn[0],pe=dn[1];function Pe(){pe(Date.now())}function Be(){window.clearTimeout(An.current)}qr(Z,function(te,x){function Ce(Je,sn){Je(function(Un){var kn=Qn(Un+sn);return kn})}if(X){if(xe>=De)return!1;Ce(Se,te)}else{if(rn>=Ue)return!1;Ce(Fe,x)}return Be(),Pe(),!0}),Object(n.useEffect)(function(){return Be(),Mn&&(An.current=window.setTimeout(function(){pe(0)},100)),Be},[Mn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,x=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(X){var Ce=he;H?x.right<he?Ce=x.right:x.right+x.width>he+xe&&(Ce=x.right+x.width-xe):x.left<-he?Ce=-x.left:x.left+x.width>-he+xe&&(Ce=-(x.left+x.width-xe)),Fe(0),Se(Qn(Ce))}else{var Je=Re;x.top<-Re?Je=-x.top:x.top+x.height>-Re+rn&&(Je=-(x.top+x.height-rn)),Se(0),Fe(Qn(Je))}}var Zn=I(hn,{width:xe,height:rn,left:he,top:Re},{width:tn,height:bn},{width:en,height:ke},Object(ve.a)(Object(ve.a)({},t),{},{tabs:g})),gt=Object(K.a)(Zn,2),Wt=gt[0],Kt=gt[1],Lt=g.map(function(te){var x=te.key;return n.createElement(Vn,{id:W,prefixCls:O,key:x,rtl:H,tab:te,closable:te.closable,editable:se,active:x===V,tabPosition:Y,tabBarGutter:ue,renderWrapper:U,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(x),onClick:function(Je){q(x,Je)},onRemove:function(){ae(x)},onFocus:function(){nn(x),Pe(),H||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),tt=Wn(function(){var te,x,Ce,Je,sn,Un,kn,Vt,zt,la=((te=Z.current)===null||te===void 0?void 0:te.offsetWidth)||0,ua=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Kn(la),En(ua),an(mr),Xe(fr);var pr=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Qe(vr);var hr=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Xn);Ze(pr-(hr?0:da)),Ne(vr-(hr?0:ca)),On(function(){var gr=new Map;return g.forEach(function(ma){var yr=ma.key,ct=me(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=g.slice(0,Wt),ot=g.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(n.useState)(),Ot=Object(K.a)($t,2),Ct=Ot[0],rt=Ot[1],Tn=hn.get(V),Rt=Object(n.useRef)();function St(){Ye.a.cancel(Rt.current)}Object(n.useEffect)(function(){var te={};return Tn&&(X?(H?te.right=Tn.right:te.left=Tn.left,te.width=Tn.width):(te.top=Tn.top,te.height=Tn.height)),St(),Rt.current=Object(Ye.a)(function(){rt(te)}),St},[Tn,X,H]),Object(n.useEffect)(function(){nn()},[V,Tn,hn,X]),Object(n.useEffect)(function(){tt()},[H,ue,V,g.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,xn="".concat(O,"-nav-wrap"),ut,dt,Pt,jt;return X?H?(dt=he>0,ut=he+xe<De):(ut=he<0,dt=-he+xe<De):(Pt=Re<0,jt=-Re+rn<Ue),n.createElement("div",{ref:i,role:"tablist",className:Ie()("".concat(O,"-nav"),R),style:P,onKeyDown:function(){Pe()}},n.createElement(or,{position:"left",extra:J,prefixCls:O}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Ie()(xn,(c={},Object(le.a)(c,"".concat(xn,"-ping-left"),ut),Object(le.a)(c,"".concat(xn,"-ping-right"),dt),Object(le.a)(c,"".concat(xn,"-ping-top"),Pt),Object(le.a)(c,"".concat(xn,"-ping-bottom"),jt),c)),ref:Z},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Re,"px)"),transition:Mn?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:O,locale:Q,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(O,"-ink-bar"),Object(le.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(xr,Object(L.a)({},t,{ref:k,prefixCls:O,tabs:bt,className:!lt&&Xn})),n.createElement(or,{position:"right",extra:J,prefixCls:O}))}var lr=n.forwardRef(ea);function na(t){var i=t.id,c=t.activeKey,y=t.animated,O=t.tabPosition,g=t.rtl,R=t.destroyInactiveTabPane,P=n.useContext(Ft),W=P.prefixCls,$=P.tabs,V=y.tabPane,H=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:Ie()("".concat(W,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(W,"-content"),"".concat(W,"-content-").concat(O),Object(le.a)({},"".concat(W,"-content-animated"),V)),style:H&&V?Object(le.a)({},g?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:R})})))}function ur(t){var i=t.prefixCls,c=t.forceRender,y=t.className,O=t.style,g=t.id,R=t.active,P=t.animated,W=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,H=n.useState(c),J=Object(K.a)(H,2),se=J[0],Q=J[1];n.useEffect(function(){R?Q(!0):W&&Q(!1)},[R,W]);var Y={};return R||(P?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!R,style:Object(ve.a)(Object(ve.a)({},Y),O),className:Ie()("".concat(i,"-tabpane"),R&&"".concat(i,"-tabpane-active"),y)},(R||se||c)&&V)}var dr=0;function ta(t){return Object(Bn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(t,i){var c,y=t.id,O=t.prefixCls,g=O===void 0?"rc-tabs":O,R=t.className,P=t.children,W=t.direction,$=t.activeKey,V=t.defaultActiveKey,H=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=t.tabPosition,Y=Q===void 0?"top":Q,ue=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Z=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,ae=Object(Ae.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),X=ta(P),de=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(on.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Se=Object(K.a)(he,2),Ke=Se[0],Oe=Se[1];Object(n.useEffect)(function(){Oe(Object(wn.a)())},[]);var Re=Object(Sn.a)(function(){var Ne;return(Ne=X[0])===null||Ne===void 0?void 0:Ne.key},{value:$,defaultValue:V}),Fe=Object(K.a)(Re,2),Me=Fe[0],Ee=Fe[1],De=Object(n.useState)(function(){return X.findIndex(function(Ne){return Ne.key===Me})}),$e=Object(K.a)(De,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ne=X.findIndex(function(_e){return _e.key===Me});if(Ne===-1){var He;Ne=Math.max(0,Math.min(qe,X.length-1)),Ee((He=X[Ne])===null||He===void 0?void 0:He.key)}Ve(Ne)},[X.map(function(Ne){return Ne.key}).join("_"),Me,qe]);var Ue=Object(Sn.a)(null,{value:y}),Qe=Object(K.a)(Ue,2),Le=Qe[0],Dn=Qe[1],tn=Y;Ke&&!["left","right"].includes(Y)&&(tn="top"),Object(n.useEffect)(function(){y||(Dn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ze(Ne,He){ce==null||ce(Ne,He),Ee(Ne),ne==null||ne(Ne)}var ln={id:Le,activeKey:Me,animated:ye,tabPosition:tn,rtl:de,mobile:Ke},yn,bn=Object(ve.a)(Object(ve.a)({},ln),{},{editable:H,locale:re,moreIcon:Z,moreTransitionName:oe,tabBarGutter:ue,onTabClick:Ze,onTabScroll:me,extra:q,style:U,panes:P});return be?yn=be(bn,lr):yn=n.createElement(lr,bn),n.createElement(Ft.Provider,{value:{tabs:X,prefixCls:g}},n.createElement("div",Object(L.a)({ref:i,id:y,className:Ie()(g,"".concat(g,"-").concat(tn),(c={},Object(le.a)(c,"".concat(g,"-mobile"),Ke),Object(le.a)(c,"".concat(g,"-editable"),H),Object(le.a)(c,"".concat(g,"-rtl"),de),c),R)},ae),yn,n.createElement(na,Object(L.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var cr=n.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,Bt=e("MZF8"),vn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function wt(t,i){var c,y=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return y||(y=i.tsx?"tsx":"jsx"),y}var oa=t=>{var i,c,y,O=Object(n.useRef)(),g=Object(n.useContext)(vn.context),R=g.locale,P=Object(vn.useLocaleProps)(R,t),W=Object(vn.useDemoUrl)(P.identifier),$=P.demoUrl||W,V=(Bt.a===null||Bt.a===void 0?void 0:Bt.a.location.hash)==="#".concat(P.identifier),H=Object.keys(P.sources).length===1,J=Object(vn.useCodeSandbox)((i=P.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:P),se=Object(vn.useRiddle)((c=P.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:P),Q=Object(vn.useMotions)(P.motions||[],O.current),Y=Object(G.default)(Q,2),ue=Y[0],U=Y[1],q=Object(vn.useCopy)(),re=Object(G.default)(q,2),Z=re[0],oe=re[1],k=Object(n.useState)("_"),be=Object(G.default)(k,2),ne=be[0],ce=be[1],me=Object(n.useState)(wt(ne,P.sources[ne])),ae=Object(G.default)(me,2),X=ae[0],de=ae[1],ye=Object(n.useState)(Boolean(P.defaultShowCode)),he=Object(G.default)(ye,2),Se=he[0],Ke=he[1],Oe=Object(n.useState)(Math.random()),Re=Object(G.default)(Oe,2),Fe=Re[0],Me=Re[1],Ee=P.sources[ne][X]||P.sources[ne].content,De=Object(vn.useTSPlaygroundUrl)(R,Ee),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(G.default)(qe,1),Ue=Ve[0];Object(n.useEffect)(()=>{Me(Math.random())},[Ue]);function Qe(Le){ce(Le),de(wt(Le,P.sources[Le]))}return C.a.createElement("div",{style:P.style,className:[P.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:P.identifier,"data-debug":P.debug||void 0,"data-iframe":P.iframe||void 0},P.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:P.transform?"translate(0, 0)":void 0,padding:P.compact||P.iframe&&P.compact!==!1?"0":void 0,background:P.background}},P.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(P.iframe).replace(/(\d)$/,"$1px")},key:Fe,src:$,ref:$e}):P.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":P.title},P.title&&C.a.createElement(vn.AnchorLink,{to:"#".concat(P.identifier)},P.title),P.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:P.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),P.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ue()}),P.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Me(Math.random())}),!((y=P.hideActions)!==null&&y!==void 0&&y.includes("EXTERNAL"))&&C.a.createElement(vn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Z(Ee)}),X==="tsx"&&Se&&C.a.createElement(vn.Link,{target:"_blank",to:De},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Se)})),Se&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&C.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Qe},Object.keys(P.sources).map(Le=>C.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,P.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sa.a,{code:Ee,lang:X,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(Fn,gn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),L=e("i8i4"),le=e("QCnb");function K(f){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+f,T=1;T<arguments.length;T++)A+="&args[]="+encodeURIComponent(arguments[T]);return"Minified React error #"+f+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var on=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;on.hasOwnProperty("ReactCurrentDispatcher")||(on.ReactCurrentDispatcher={current:null}),on.hasOwnProperty("ReactCurrentBatchConfig")||(on.ReactCurrentBatchConfig={suspense:null});function Ae(f){var A=f,T=f;if(f.alternate)for(;A.return;)A=A.return;else{f=A;do A=f,(A.effectTag&1026)!=0&&(T=A.return),f=A.return;while(f)}return A.tag===3?T:null}function ve(f){if(Ae(f)!==f)throw Error(K(188))}function Rn(f){var A=f.alternate;if(!A){if(A=Ae(f),A===null)throw Error(K(188));return A!==f?null:f}for(var T=f,fe=A;;){var ee=T.return;if(ee===null)break;var je=ee.alternate;if(je===null){if(fe=ee.return,fe!==null){T=fe;continue}break}if(ee.child===je.child){for(je=ee.child;je;){if(je===T)return ve(ee),f;if(je===fe)return ve(ee),A;je=je.sibling}throw Error(K(188))}if(T.return!==fe.return)T=ee,fe=je;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===T){ze=!0,T=ee,fe=je;break}if(Ge===fe){ze=!0,fe=ee,T=je;break}Ge=Ge.sibling}if(!ze){for(Ge=je.child;Ge;){if(Ge===T){ze=!0,T=je,fe=ee;break}if(Ge===fe){ze=!0,fe=je,T=ee;break}Ge=Ge.sibling}if(!ze)throw Error(K(189))}}if(T.alternate!==fe)throw Error(K(190))}if(T.tag!==3)throw Error(K(188));return T.stateNode.current===T?f:A}function Ie(){return!0}function Bn(){return!1}function wn(f,A,T,fe){this.dispatchConfig=f,this._targetInst=A,this.nativeEvent=T,f=this.constructor.Interface;for(var ee in f)f.hasOwnProperty(ee)&&((A=f[ee])?this[ee]=A(T):ee==="target"?this.target=fe:this[ee]=T[ee]);return this.isDefaultPrevented=(T.defaultPrevented!=null?T.defaultPrevented:T.returnValue===!1)?Ie:Bn,this.isPropagationStopped=Bn,this}n(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Bn,destructor:function(){var f=this.constructor.Interface,A;for(A in f)this[A]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(f){function A(){}function T(){return fe.apply(this,arguments)}var fe=this;A.prototype=fe.prototype;var ee=new A;return n(ee,T.prototype),T.prototype=ee,T.prototype.constructor=T,T.Interface=n({},fe.Interface,f),T.extend=fe.extend,Ye(T),T},Ye(wn);function Sn(f,A,T,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,f,A,T,fe),ee}return new this(f,A,T,fe)}function fn(f){if(!(f instanceof this))throw Error(K(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Ye(f){f.eventPool=[],f.getPooled=Sn,f.release=fn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Wn(f,A){var T={};return T[f.toLowerCase()]=A.toLowerCase(),T["Webkit"+f]="webkit"+A,T["Moz"+f]="moz"+A,T}var Pn={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Vn(f){if(we[f])return we[f];if(!Pn[f])return f;var A=Pn[f],T;for(T in A)if(A.hasOwnProperty(T)&&T in qn)return we[f]=A[T];return f}var at=Vn("animationend"),E=Vn("animationiteration"),D=Vn("animationstart"),I=Vn("transitionend"),d=null;function o(f){if(d===null)try{var A=("require"+Math.random()).slice(0,7);d=(G&&G[A])("timers").setImmediate}catch(T){d=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return d(f)}var p=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=p[11],S=p[12],r=L.unstable_batchedUpdates,l=on.IsSomeRendererActing,s=typeof le.unstable_flushAllWithoutAsserting=="function",M=le.unstable_flushAllWithoutAsserting||function(){for(var f=!1;b();)f=!0;return f};function F(f){try{M(),o(function(){M()?F(f):f()})}catch(A){f(A)}}var j=0,u=!1,B=L.findDOMNode,m=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=m[0],h=m[4],v=m[5],N=m[6],w=m[7],z=m[8],_=m[9],ie=m[10];function ge(){}function pn(f,A){if(!f)return[];if(f=Rn(f),!f)return[];for(var T=f,fe=[];;){if(T.tag===5||T.tag===6||T.tag===1||T.tag===0){var ee=T.stateNode;A(ee)&&fe.push(ee)}if(T.child)T.child.return=T,T=T.child;else{if(T===f)return fe;for(;!T.sibling;){if(!T.return||T.return===f)return fe;T=T.return}T.sibling.return=T.return,T=T.sibling}}}function We(f,A){if(f&&!f._reactInternalFiber){var T=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":T==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":T,Error(K(286,A,f))}}var Te={renderIntoDocument:function(f){var A=document.createElement("div");return L.render(f,A)},isElement:function(f){return C.isValidElement(f)},isElementOfType:function(f,A){return C.isValidElement(f)&&f.type===A},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&C.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Te.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,A){return Te.isCompositeComponent(f)?f._reactInternalFiber.type===A:!1},findAllInRenderedTree:function(f,A){return We(f,"findAllInRenderedTree"),f?pn(f._reactInternalFiber,A):[]},scryRenderedDOMComponentsWithClass:function(f,A){return We(f,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(f,function(T){if(Te.isDOMComponent(T)){var fe=T.className;typeof fe!="string"&&(fe=T.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(A)){if(A===void 0)throw Error(K(11));A=A.split(/\s+/)}return A.every(function(je){return ee.indexOf(je)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,A){if(We(f,"findRenderedDOMComponentWithClass"),f=Te.scryRenderedDOMComponentsWithClass(f,A),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+A);return f[0]},scryRenderedDOMComponentsWithTag:function(f,A){return We(f,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(f,function(T){return Te.isDOMComponent(T)&&T.tagName.toUpperCase()===A.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,A){if(We(f,"findRenderedDOMComponentWithTag"),f=Te.scryRenderedDOMComponentsWithTag(f,A),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+A);return f[0]},scryRenderedComponentsWithType:function(f,A){return We(f,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(f,function(T){return Te.isCompositeComponentWithType(T,A)})},findRenderedComponentWithType:function(f,A){if(We(f,"findRenderedComponentWithType"),f=Te.scryRenderedComponentsWithType(f,A),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+A);return f[0]},mockComponent:function(f,A){return A=A||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return C.createElement(A,null,this.props.children)}),this},nativeTouchData:function(f,A){return{touches:[{pageX:f,pageY:A}]}},Simulate:null,SimulateNative:{},act:function(f){function A(){j--,l.current=T,S.current=fe}u===!1&&(u=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),j++;var T=l.current,fe=S.current;l.current=!0,S.current=!0;try{var ee=r(f)}catch(je){throw A(),je}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(je,ze){ee.then(function(){1<j||s===!0&&T===!0?(A(),je()):F(function(Ge){A(),Ge?ze(Ge):je()})},function(Ge){A(),ze(Ge)})}};try{j!==1||s!==!1&&T!==!1||M(),A()}catch(je){throw A(),je}return{then:function(je){je()}}}};function jn(f){return function(A,T){if(C.isValidElement(A))throw Error(K(228));if(Te.isCompositeComponent(A))throw Error(K(229));var fe=h[f],ee=new ge;ee.target=A,ee.type=f.toLowerCase();var je=a(A),ze=new wn(fe,je,ee,A);ze.persist(),n(ze,T),fe.phasedRegistrationNames?v(ze):N(ze),L.unstable_batchedUpdates(function(){w(A),ie(ze)}),z()}}Te.Simulate={};for(var it in h)Te.Simulate[it]=jn(it);function _n(f,A){return function(T,fe){var ee=new ge(f);n(ee,fe),Te.isDOMComponent(T)?(T=B(T),ee.target=T,_(A,1,document,ee)):T.tagName&&(ee.target=T,_(A,1,document,ee))}}[["abort","abort"],[at,"animationEnd"],[E,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var A=f[1];Te.SimulateNative[A]=_n(A,f[0])}),G.exports=Te.default||Te}).call(this,e("hOG+")(Fn))},Jd6f:function(Fn,gn,e){"use strict";e.r(gn);var G=e("q1tI"),n=e.n(G),C=e("dEAq"),L=e.n(C),le=e("0zqC"),K=e("JjdP"),on=n.a.memo(K.default["pivot-table-demo"].component),Ae=n.a.memo(K.default["pivot-table-demo-1"].component),ve=n.a.memo(K.default["pivot-table-demo-2"].component);gn.default=Rn=>(n.a.useEffect(()=>{Rn!=null&&Rn.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(Rn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u57FA\u672C\u7528\u6CD5"},n.a.createElement(C.AnchorLink,{to:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7528\u6CD5"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u8868\u683C\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",n.a.createElement("code",null,"\u5DE6\u8868\u5934"),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",n.a.createElement("code",null,"\u9876\u8868\u5934"),"\u3002"))),n.a.createElement(le.default,K.default["pivot-table-demo"].previewerProps,n.a.createElement(on,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},n.a.createElement(C.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),n.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3"},n.a.createElement(C.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),n.a.createElement(le.default,K.default["pivot-table-demo-1"].previewerProps,n.a.createElement(Ae,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u53EF\u5C55\u5F00\u6536\u8D77"},n.a.createElement(C.AnchorLink,{to:"#\u53EF\u5C55\u5F00\u6536\u8D77","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53EF\u5C55\u5F00/\u6536\u8D77")),n.a.createElement(le.default,K.default["pivot-table-demo-2"].previewerProps,n.a.createElement(ve,null)))))},JjdP:function(Fn,gn,e){"use strict";e.r(gn);var G=e("9og8"),n=e("WmNS"),C=e.n(n),L=e("LtsZ"),le=`import React, { useRef } from 'react';
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

export default Demo;`,on=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ae=`import React from 'react';
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

export default Root;`,Ie=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Bn=`{
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

export default SearchInput;`,Sn=`import React from 'react';
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
}`,Ye=`.markdown p {
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

export default Demo;`,Pn=`import React, { useState, useRef } from 'react';
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
}`,at=gn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:le}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l;return C.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return r=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var B=S(u);if(B&&B.has(j))return B.get(j);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in j)if(h!=="default"&&Object.prototype.hasOwnProperty.call(j,h)){var v=a?Object.getOwnPropertyDescriptor(j,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=j[h]}return m.default=j,B&&B.set(j,m),m},S=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,B=new WeakMap;return(S=function(a){return a?B:u})(j)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=r,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,p=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=M.sent,l=function(){var j=(0,p.useState)("Line"),u=(0,o.default)(j,2),B=u[0],m=u[1],a={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[B];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,b=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(M,F,j){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(F).length]}},M),o.default.createElement("p",null,JSON.stringify(F)),o.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",b);case 11:case"end":return r.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l;return C.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return r=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var B=S(u);if(B&&B.has(j))return B.get(j);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in j)if(h!=="default"&&Object.prototype.hasOwnProperty.call(j,h)){var v=a?Object.getOwnPropertyDescriptor(j,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=j[h]}return m.default=j,B&&B.set(j,m),m},S=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,B=new WeakMap;return(S=function(a){return a?B:u})(j)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=r,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,p=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=M.sent,l=function(){var j=(0,p.useState)(!1),u=(0,o.default)(j,2),B=u[0],m=u[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:B,onChange:function(){return m(!B)}})),p.default.createElement(b.PivotTable,{leftExpandable:B,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F,j,u,B,m;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return j=function(N,w){if(!w&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var z=F(w);if(z&&z.has(N))return z.get(N);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in N)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(N,ge)){var pn=ie?Object.getOwnPropertyDescriptor(N,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=N[ge]}return _.default=N,z&&z.set(N,_),_},F=function(N){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(F=function(ie){return ie?z:w})(N)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(63).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(64).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,S=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(60).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,r=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,l=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=j,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,M=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(v){(0,S.default)(w,v);var N=(0,r.default)(w);function w(){return(0,p.default)(this,w),N.apply(this,arguments)}return(0,b.default)(w,[{key:"render",value:function(){var _=this.props.form;return l.default.createElement("div",null,l.default.createElement(M.default,{form:_,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),m=(0,M.connectForm)(B),h.abrupt("return",m);case 47:case"end":return h.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=r(a);if(h&&h.has(m))return h.get(m);var v={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=N?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},r=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(N){return N?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},M=function(){var m=(0,S.useForm)();return p.default.createElement("div",null,p.default.createElement(S.default,{form:m,schema:s}),p.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},F=M,u.abrupt("return",F);case 27:case"end":return u.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=r(a);if(h&&h.has(m))return h.get(m);var v={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=N?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},r=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(N){return N?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},M=function(){var m=(0,S.useForm)(),a=function(v,N){N.length>0?alert("errors:"+JSON.stringify(N)):alert("formData:"+JSON.stringify(v,null,2))};return p.default.createElement("div",null,p.default.createElement(S.default,{form:m,schema:s,onFinish:a}),p.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},F=M,u.abrupt("return",F);case 27:case"end":return u.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s;return C.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return l=function(){var u=(0,p.useForm)(),B=function(a,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(a))};return o.default.createElement("div",null,o.default.createElement(p.default,{form:u,schema:r,onFinish:B}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},S=function(u,B){if(!B&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(B);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var N=h?Object.getOwnPropertyDescriptor(u,v):null;N&&(N.get||N.set)?Object.defineProperty(a,v,N):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var B=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:B})(u)},d=e("K+nK"),F.t0=d,F.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return F.t1=F.sent,o=(0,F.t0)(F.t1),F.t2=S,F.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return F.t3=F.sent,p=(0,F.t2)(F.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,F.abrupt("return",s);case 17:case"end":return F.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b=function(M){return{type:"object",displayType:M,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(p.default,{schema:b("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(p.default,{schema:b("column")}))},l.abrupt("return",S);case 14:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(){return o.default.createElement(p.default,{schema:b})},l.abrupt("return",S);case 14:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(p.default,{readOnly:!0,schema:b})},l.abrupt("return",S);case 14:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(p.default,{labelWidth:"200",schema:b})},l.abrupt("return",S);case 14:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F,j,u,B;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return j=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=F(N);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},F=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,w=new WeakMap;return(F=function(_){return _?w:N})(v)},d=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.t8=j,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return l=a.sent,a.t10=j,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,s=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return M=a.sent,u=function(){var v=(0,s.useForm)(),N=(0,r.useState)({}),w=(0,S.default)(N,2),z=w[0],_=w[1],ie=function(){(0,M.fakeApi)("xxx/getForm").then(function(We){v.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,M.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Te){Te.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Te.map(function(jn){return jn.name}))):(0,M.fakeApi)("xxx/submit",We).then(function(jn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(s.default,{form:v,schema:z,onFinish:ge}),r.default.createElement(o.default,null,r.default.createElement(p.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},B=u,a.abrupt("return",B);case 48:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F,j,u,B;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return F=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=M(N);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},M=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:N})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.t2=d,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=d,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return r=a.sent,a.t8=F,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=a.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var v=(0,l.useForm)(),N=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,pn=_.schema,We=(0,p.default)(_,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Te){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:v,schema:j,beforeFinish:w,onFinish:N}),S.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},B=u,a.abrupt("return",B);case 42:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F,j,u,B;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return F=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=M(N);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},M=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:N})(v)},d=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return r=a.sent,a.t8=F,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=a.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var v=(0,l.useForm)(),N=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,s.fakeApi)("xxx/getForm").then(function(_){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:v,schema:j,onFinish:N}),S.default.createElement(o.default,null,S.default.createElement(p.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},B=u,a.abrupt("return",B);case 44:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F,j,u;return C.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return M=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var N=s(v);if(N&&N.has(h))return N.get(h);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in h)if(_!=="default"&&Object.prototype.hasOwnProperty.call(h,_)){var ie=z?Object.getOwnPropertyDescriptor(h,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=h[_]}return w.default=h,N&&N.set(h,w),w},s=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,N=new WeakMap;return(s=function(z){return z?N:v})(h)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,o=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=M,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return S=m.sent,m.t6=M,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,r=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=m.sent,F={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var h=(0,r.useForm)(),v=function(){h.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},N=function(z,_){_.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):p.default.info(JSON.stringify(z))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(r.default,{form:h,schema:F,onMount:v,onFinish:N}),b.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=j,m.abrupt("return",u);case 37:case"end":return m.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      enum: ['nouth', 'south', 'east', 'west'],
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s;return C.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return S=function(u,B){if(!B&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(B);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var N=h?Object.getOwnPropertyDescriptor(u,v):null;N&&(N.get||N.set)?Object.defineProperty(a,v,N):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var B=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:B})(u)},d=e("K+nK"),F.t0=d,F.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return F.t1=F.sent,o=(0,F.t0)(F.t1),F.t2=S,F.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return F.t3=F.sent,p=(0,F.t2)(F.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,p.useForm)();return o.default.createElement(p.default,{form:u,schema:r})},s=l,F.abrupt("return",s);case 17:case"end":return F.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return b=l.sent,S=function(){return o.default.createElement(p.default,{schema:b.expression})},l.abrupt("return",S);case 16:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ae},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M;return C.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return S=function(B,m){if(!m&&B&&B.__esModule)return B;if(B===null||typeof B!="object"&&typeof B!="function")return{default:B};var a=b(m);if(a&&a.has(B))return a.get(B);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in B)if(N!=="default"&&Object.prototype.hasOwnProperty.call(B,N)){var w=v?Object.getOwnPropertyDescriptor(B,N):null;w&&(w.get||w.set)?Object.defineProperty(h,N,w):h[N]=B[N]}return h.default=B,a&&a.set(B,h),h},b=function(B){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(b=function(v){return v?a:m})(B)},j.t0=S,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,d=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=j.sent,j.t2=S,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,p=(0,j.t2)(j.t3),r=function(B){return new Promise(function(m){return setTimeout(m,B)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var B=(0,p.useForm)(),m=function(){B.setValues({input1:"hello world"}),r(3e3).then(function(h){B.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:B,schema:l,onMount:m})},M=s,j.abrupt("return",M);case 20:case"end":return j.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(M){var F=M.value;console.log(F)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(p.default,{schema:b})},r=S,s.abrupt("return",r);case 16:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s;return C.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return S=function(u,B){if(!B&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var m=b(B);if(m&&m.has(u))return m.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in u)if(v!=="default"&&Object.prototype.hasOwnProperty.call(u,v)){var N=h?Object.getOwnPropertyDescriptor(u,v):null;N&&(N.get||N.set)?Object.defineProperty(a,v,N):a[v]=u[v]}return a.default=u,m&&m.set(u,a),a},b=function(u){if(typeof WeakMap!="function")return null;var B=new WeakMap,m=new WeakMap;return(b=function(h){return h?m:B})(u)},F.t0=S,F.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return F.t1=F.sent,d=(0,F.t0)(F.t1),F.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=F.sent,F.t2=S,F.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return F.t3=F.sent,p=(0,F.t2)(F.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,p.useForm)(),B={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return d.default.createElement(p.default,{form:u,schema:r,watch:B})},s=l,F.abrupt("return",s);case 19:case"end":return F.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=r(a);if(h&&h.has(m))return h.get(m);var v={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=N?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},r=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(N){return N?h:a})(m)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},M=function(){var m=(0,S.useForm)(),a=function(N,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(N,null,2))},h={input1:function(N){N.length>2?m.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(S.default,{form:m,schema:s,onFinish:a,watch:h}),p.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},F=M,u.abrupt("return",F);case 27:case"end":return u.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M,F,j,u,B;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return M=function(v,N){if(!N&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=s(N);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},s=function(v){if(typeof WeakMap!="function")return null;var N=new WeakMap,w=new WeakMap;return(s=function(_){return _?w:N})(v)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(61)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=d,a.next=15,Promise.all([e.e(0),e.e(13),e.e(59),e.e(62)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,p=(0,a.t2)(a.t3),a.t4=d,a.next=20,e.e(65).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=M,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return r=a.sent,a.t8=M,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),F={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(v){return S.default.createElement(p.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},v))},u=function(){var v=(0,l.useForm)(),N=function(){};return S.default.createElement("div",null,S.default.createElement(l.default,{form:v,schema:F,widgets:{site:j},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),S.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},B=u,a.abrupt("return",B);case 40:case"end":return a.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return b=l.sent,S=function(){return o.default.createElement(p.default,{schema:b.basic})},l.abrupt("return",S);case 16:case"end":return l.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ae},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Rn},"main.js":{import:"./main",content:Ie},"json/simplest.json":{import:"./json/simplest.json",content:Bn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:Sn},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r,l,s,M;return C.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return d=e("K+nK"),j.t0=d,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,o=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(58)]).then(e.bind(null,"P2DI"));case 8:for(p=j.sent,b=[],S=0;S<6;S++)b.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(B,m){return o.default.createElement("a",{onClick:function(){return alert(B.title)}},"\u7F16\u8F91")}}],s=function(){var B=function(){return{rows:b,total:b.length}};return o.default.createElement(p.TableProvider,null,o.default.createElement(p.Search,{schema:r,api:B}),o.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},M=s,j.abrupt("return",M);case 16:case"end":return j.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){var d,o,p,b,S,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(p.default,{defaultValue:b}))},r=S,s.abrupt("return",r);case 15:case"end":return s.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.3"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Pn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.3"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function I(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},I)}));function D(){return E.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Vn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.0.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Fn,gn,e){},Zs1V:function(Fn){Fn.exports=JSON.parse("{}")},p8sG:function(Fn,gn,e){"use strict";Fn.exports=e("80pN")}}]);
