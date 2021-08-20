(window.webpackJsonp=window.webpackJsonp||[]).push([[48,13],{"0zqC":function(Dn,dn,e){"use strict";e.r(dn);var V=e("tJVT"),n=e("q1tI"),C=e.n(n),W=e("wx14"),oe=e("rePB"),J=e("ODXe"),je=e("U8pU"),Fe=e("Ff2n"),ce=e("VTBJ"),rn=e("TSYQ"),De=e.n(rn),Rn=e("Zm9Q"),jn=e("5Z9U"),hn=e("6cGi"),sn=e("KQm4"),Ve=e("wgJM"),Bn=e("t23M");function Pn(r){var u=Object(n.useRef)(),y=Object(n.useRef)(!1);function S(){for(var F=arguments.length,O=new Array(F),j=0;j<F;j++)O[j]=arguments[j];y.current||(Ve.a.cancel(u.current),u.current=Object(Ve.a)(function(){r.apply(void 0,O)}))}return Object(n.useEffect)(function(){return function(){y.current=!0,Ve.a.cancel(u.current)}},[]),S}function vn(r){var u=Object(n.useRef)([]),y=Object(n.useState)({}),S=Object(J.a)(y,2),F=S[1],O=Object(n.useRef)(typeof r=="function"?r():r),j=Pn(function(){var K=O.current;u.current.forEach(function(x){K=x(K)}),u.current=[],O.current=K,F({})});function I(K){u.current.push(K),j()}return[O.current,I]}var Ne=e("4IlW");function qn(r,u){var y,S=r.prefixCls,F=r.id,O=r.active,j=r.rtl,I=r.tab,K=I.key,x=I.tab,$=I.disabled,G=I.closeIcon,U=r.tabBarGutter,ae=r.tabPosition,Y=r.closable,Q=r.renderWrapper,se=r.removeAriaLabel,z=r.editable,q=r.onClick,ne=r.onRemove,X=r.onFocus,re="".concat(S,"-tab");n.useEffect(function(){return ne},[]);var k={};ae==="top"||ae==="bottom"?k[j?"marginLeft":"marginRight"]=U:k.marginBottom=U;var he=z&&Y!==!1&&!$;function _(te){$||q(te)}function ue(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var le=n.createElement("div",{key:K,ref:u,className:De()(re,(y={},Object(oe.a)(y,"".concat(re,"-with-remove"),he),Object(oe.a)(y,"".concat(re,"-active"),O),Object(oe.a)(y,"".concat(re,"-disabled"),$),y)),style:k,onClick:_},n.createElement("div",{role:"tab","aria-selected":O,id:F&&"".concat(F,"-tab-").concat(K),className:"".concat(re,"-btn"),"aria-controls":F&&"".concat(F,"-panel-").concat(K),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Ne.a.SPACE,Ne.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:X},x),he&&n.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(re,"-remove"),onClick:function(H){H.stopPropagation(),ue(H)}},G||z.removeIcon||"\xD7"));return Q&&(le=Q(le)),le}var wn=n.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function ot(r,u,y){return Object(n.useMemo)(function(){for(var S,F=new Map,O=u.get((S=r[0])===null||S===void 0?void 0:S.key)||_n,j=O.left+O.width,I=0;I<r.length;I+=1){var K=r[I].key,x=u.get(K);if(!x){var $;x=u.get(($=r[I-1])===null||$===void 0?void 0:$.key)||_n}var G=F.get(K)||Object(ce.a)({},x);G.right=j-G.left-G.width,F.set(K,G)}return F},[r.map(function(S){return S.key}).join("_"),u,y])}var et={width:0,height:0,left:0,top:0,right:0};function ut(r,u,y,S,F){var O=F.tabs,j=F.tabPosition,I=F.rtl,K,x,$;["top","bottom"].includes(j)?(K="width",x=I?"right":"left",$=Math.abs(u.left)):(K="height",x="top",$=-u.top);var G=u[K],U=y[K],ae=S[K],Y=G;return U+ae>G&&(Y=G-ae),Object(n.useMemo)(function(){if(!O.length)return[0,0];for(var Q=O.length,se=Q,z=0;z<Q;z+=1){var q=r.get(O[z].key)||et;if(q[x]+q[K]>$+Y){se=z-1;break}}for(var ne=0,X=Q-1;X>=0;X-=1){var re=r.get(O[X].key)||et;if(re[x]<$){ne=X+1;break}}return[ne,se]},[r,$,Y,j,O.map(function(Q){return Q.key}).join("_"),I])}var Mn=e("Gytx"),nt=e.n(Mn),$n=e("Kwbf");function lt(r,u){var y=r.prefixCls,S=r.invalidate,F=r.item,O=r.renderItem,j=r.responsive,I=r.registerSize,K=r.itemKey,x=r.className,$=r.style,G=r.children,U=r.display,ae=r.order,Y=r.component,Q=Y===void 0?"div":Y,se=Object(Fe.a)(r,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=j&&!U;function q(he){I(K,he)}n.useEffect(function(){return function(){q(null)}},[]);var ne=O&&F!==void 0?O(F):G,X;S||(X={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:j?ae:void 0,pointerEvents:z?"none":void 0});var re={};z&&(re["aria-hidden"]=!0);var k=n.createElement(Q,Object(W.a)({className:De()(!S&&y,x),style:Object(ce.a)(Object(ce.a)({},X),$)},re,se,{ref:u}),ne);return j&&(k=n.createElement(Bn.default,{onResize:function(_){var ue=_.offsetWidth;q(ue)}},k)),k}var Kn=n.forwardRef(lt);Kn.displayName="Item";var An=Kn;function Vn(){var r=Object(n.useState)({}),u=Object(J.a)(r,2),y=u[1],S=Object(n.useRef)([]),F=Object(n.useRef)(!1),O=0,j=0;Object(n.useEffect)(function(){return function(){F.current=!0}},[]);function I(K){var x=O;O+=1,S.current.length<x+1&&(S.current[x]=K);var $=S.current[x];function G(U){S.current[x]=typeof U=="function"?U(S.current[x]):U,Ve.a.cancel(j),j=Object(Ve.a)(function(){F.current||y({})})}return[$,G]}return I}var tt=function(u,y){var S=n.useContext(P);if(!S){var F=u.component,O=F===void 0?"div":F,j=Object(Fe.a)(u,["component"]);return n.createElement(O,Object(W.a)({},j,{ref:y}))}var I=S.className,K=Object(Fe.a)(S,["className"]),x=u.className,$=Object(Fe.a)(u,["className"]);return n.createElement(P.Provider,{value:null},n.createElement(An,Object(W.a)({ref:y,className:De()(I,x)},K,$)))},Jn=n.forwardRef(tt);Jn.displayName="RawItem";var N=Jn,P=n.createContext(null),T="responsive",f="invalidate";function i(r){return"+ ".concat(r.length," ...")}function v(r,u){var y=r.prefixCls,S=y===void 0?"rc-overflow":y,F=r.data,O=F===void 0?[]:F,j=r.renderItem,I=r.renderRawItem,K=r.itemKey,x=r.itemWidth,$=x===void 0?10:x,G=r.ssr,U=r.style,ae=r.className,Y=r.maxCount,Q=r.renderRest,se=r.renderRawRest,z=r.suffix,q=r.component,ne=q===void 0?"div":q,X=r.itemComponent,re=r.onVisibleChange,k=Object(Fe.a)(r,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),he=Vn(),_=G==="full",ue=he(null),le=Object(J.a)(ue,2),te=le[0],H=le[1],ie=te||0,fe=he(new Map),me=Object(J.a)(fe,2),be=me[0],Ie=me[1],ve=he(0),ye=Object(J.a)(ve,2),Ae=ye[0],Pe=ye[1],Se=he(0),Oe=Object(J.a)(Se,2),we=Oe[0],Ge=Oe[1],Me=he(0),Ke=Object(J.a)(Me,2),$e=Ke[0],Be=Ke[1],yn=Object(n.useState)(null),Xe=Object(J.a)(yn,2),Je=Xe[0],_e=Xe[1],cn=Object(n.useState)(null),mn=Object(J.a)(cn,2),Re=mn[0],Le=mn[1],He=n.useMemo(function(){return Re===null&&_?Number.MAX_SAFE_INTEGER:Re||0},[Re,te]),ze=Object(n.useState)(!1),Nn=Object(J.a)(ze,2),zn=Nn[0],In=Nn[1],Ze="".concat(S,"-item"),bn=Math.max(Ae,we),en=O.length&&Y===T,Cn=Y===f,Ye=en||typeof Y=="number"&&O.length>Y,ke=Object(n.useMemo)(function(){var de=O;return en?te===null&&_?de=O:de=O.slice(0,Math.min(O.length,ie/$)):typeof Y=="number"&&(de=O.slice(0,Y)),de},[O,$,te,Y,en]),En=Object(n.useMemo)(function(){return en?O.slice(He+1):O.slice(ke.length)},[O,ke,en,He]),tn=Object(n.useCallback)(function(de,Ee){var Te;return typeof K=="function"?K(de):(Te=K&&(de==null?void 0:de[K]))!==null&&Te!==void 0?Te:Ee},[K]),Ue=Object(n.useCallback)(j||function(de){return de},[j]);function xe(de,Ee){Le(de),Ee||(In(de<O.length-1),re==null||re(de))}function Un(de,Ee){H(Ee.clientWidth)}function Gn(de,Ee){Ie(function(Te){var Qe=new Map(Te);return Ee===null?Qe.delete(de):Qe.set(de,Ee),Qe})}function rt(de,Ee){Ge(Ee),Pe(we)}function fn(de,Ee){Be(Ee)}function ln(de){return be.get(tn(ke[de],de))}n.useLayoutEffect(function(){if(ie&&bn&&ke){var de=$e,Ee=ke.length,Te=Ee-1;if(!Ee){xe(0),_e(null);return}for(var Qe=0;Qe<Ee;Qe+=1){var Xn=ln(Qe);if(Xn===void 0){xe(Qe-1,!0);break}if(de+=Xn,Qe===Te-1&&de+ln(Te)<=ie){xe(Te),_e(null);break}else if(de+bn>ie){xe(Qe-1),_e(de-Xn-$e+we);break}else if(Qe===Te){xe(Te),_e(de-$e);break}}z&&ln(0)+$e>ie&&_e(null)}},[ie,be,we,$e,tn,ke]);var Hn=zn&&!!En.length,pn={};Je!==null&&en&&(pn={position:"absolute",left:Je,top:0});var an={prefixCls:Ze,responsive:en,component:X,invalidate:Cn},Yn=I?function(de,Ee){var Te=tn(de,Ee);return n.createElement(P.Provider,{key:Te,value:Object(ce.a)(Object(ce.a)({},an),{},{order:Ee,item:de,itemKey:Te,registerSize:Gn,display:Ee<=He})},I(de,Ee))}:function(de,Ee){var Te=tn(de,Ee);return n.createElement(An,Object(W.a)({},an,{order:Ee,key:Te,item:de,renderItem:Ue,itemKey:Te,registerSize:Gn,display:Ee<=He}))},On,Qn={order:Hn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:rt,display:Hn};if(se)se&&(On=n.createElement(P.Provider,{value:Object(ce.a)(Object(ce.a)({},an),Qn)},se(En)));else{var nn=Q||i;On=n.createElement(An,Object(W.a)({},an,Qn),typeof nn=="function"?nn(En):nn)}var Sn=n.createElement(ne,Object(W.a)({className:De()(!Cn&&S,ae),style:U,ref:u},k),ke.map(Yn),Ye?On:null,z&&n.createElement(An,Object(W.a)({},an,{order:He,className:"".concat(Ze,"-suffix"),registerSize:fn,display:!0,style:pn}),z));return en&&(Sn=n.createElement(Bn.default,{onResize:Un},Sn)),Sn}var b=n.forwardRef(v);b.displayName="Overflow",b.Item=N,b.RESPONSIVE=T,b.INVALIDATE=f;var E=b,s=E,p=e("1OyB"),o=e("vuIU"),B=e("Ji7U"),w=e("LK+K"),R=e("bT9E"),d=e("YrtM"),D=n.createContext(null);function m(r,u){var y=Object(ce.a)({},r);return Object.keys(u).forEach(function(S){var F=u[S];F!==void 0&&(y[S]=F)}),y}function t(r){var u=r.children,y=r.locked,S=Object(Fe.a)(r,["children","locked"]),F=n.useContext(D),O=Object(d.a)(function(){return m(F,S)},[F,S],function(j,I){return!y&&(j[0]!==I[0]||!nt()(j[1],I[1]))});return n.createElement(D.Provider,{value:O},u)}function g(r,u,y,S){var F=n.useContext(D),O=F.activeKey,j=F.onActive,I=F.onInactive,K={active:O===r};return u||(K.onMouseEnter=function(x){y==null||y({key:r,domEvent:x}),j(r)},K.onMouseLeave=function(x){S==null||S({key:r,domEvent:x}),I(r)}),K}function c(r){var u=r.item,y=Object(Fe.a)(r,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object($n.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),u}}),y}function a(r){var u=r.icon,y=r.props,S=r.children,F;return typeof u=="function"?F=n.createElement(u,Object(ce.a)({},y)):F=u,F||S||null}function l(r){var u=n.useContext(D),y=u.mode,S=u.rtl,F=u.inlineIndent;if(y!=="inline")return null;var O=r;return S?{paddingRight:O*F}:{paddingLeft:O*F}}var h=[],M=n.createContext(null);function A(){return n.useContext(M)}var L=n.createContext(h);function pe(r){var u=n.useContext(L);return n.useMemo(function(){return r!==void 0?[].concat(Object(sn.a)(u),[r]):u},[u,r])}var Ce=n.createContext(null),on=n.createContext(null);function gn(r,u){return r===void 0?null:"".concat(r,"-").concat(u)}function Wn(r){var u=n.useContext(on);return gn(u,r)}var Tn=function(r){Object(B.a)(y,r);var u=Object(w.a)(y);function y(){return Object(p.a)(this,y),u.apply(this,arguments)}return Object(o.a)(y,[{key:"render",value:function(){var F=this.props,O=F.title,j=F.attribute,I=F.elementRef,K=Object(Fe.a)(F,["title","attribute","elementRef"]),x=Object(R.a)(K,["eventKey"]);return Object($n.a)(!j,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(s.Item,Object(W.a)({},j,{title:typeof O=="string"?O:void 0},x,{ref:I}))}}]),y}(n.Component),dt=function(u){var y,S=u.style,F=u.className,O=u.eventKey,j=u.disabled,I=u.itemIcon,K=u.children,x=u.role,$=u.onMouseEnter,G=u.onMouseLeave,U=u.onClick,ae=u.onKeyDown,Y=u.onFocus,Q=Object(Fe.a)(u,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=Wn(O),z=n.useContext(D),q=z.prefixCls,ne=z.onItemClick,X=z.disabled,re=z.overflowDisabled,k=z.itemIcon,he=z.selectedKeys,_=z.onActive,ue="".concat(q,"-item"),le=n.useRef(),te=n.useRef(),H=X||j,ie=pe(O),fe=function(Me){return{key:O,keyPath:ie,item:le.current,domEvent:Me}},me=I||k,be=g(O,H,$,G),Ie=be.active,ve=Object(Fe.a)(be,["active"]),ye=he.includes(O),Ae=l(ie.length),Pe=function(Me){if(!H){var Ke=fe(Me);U==null||U(c(Ke)),ne(Ke)}},Se=function(Me){if(ae==null||ae(Me),Me.which===Ne.a.ENTER){var Ke=fe(Me);U==null||U(c(Ke)),ne(Ke)}},Oe=function(Me){_(O),Y==null||Y(Me)},we={};return u.role==="option"&&(we["aria-selected"]=ye),n.createElement(Tn,Object(W.a)({ref:le,elementRef:te,role:x===null?"none":x||"menuitem",tabIndex:j?null:-1,"data-menu-id":re&&se?null:se},Q,ve,we,{component:"li","aria-disabled":j,style:Object(ce.a)(Object(ce.a)({},Ae),S),className:De()(ue,(y={},Object(oe.a)(y,"".concat(ue,"-active"),Ie),Object(oe.a)(y,"".concat(ue,"-selected"),ye),Object(oe.a)(y,"".concat(ue,"-disabled"),H),y),F),onClick:Pe,onKeyDown:Se,onFocus:Oe}),K,n.createElement(a,{props:Object(ce.a)(Object(ce.a)({},u),{},{isSelected:ye}),icon:me}))};function Ea(r){var u=r.eventKey,y=A(),S=pe(u);return n.useEffect(function(){if(y)return y.registerPath(u,S),function(){y.unregisterPath(u,S)}},[S]),y?null:n.createElement(dt,r)}var Nt=Ea;function It(r,u){return Object(Rn.a)(r).map(function(y,S){if(n.isValidElement(y)){var F=y.key;return F==null&&(F="tmp_key-".concat([].concat(Object(sn.a)(u),[S]).join("-"))),n.cloneElement(y,{key:F,eventKey:F})}return y})}function at(r){var u=n.useRef(r);u.current=r;var y=n.useCallback(function(){for(var S,F=arguments.length,O=new Array(F),j=0;j<F;j++)O[j]=arguments[j];return(S=u.current)===null||S===void 0?void 0:S.call.apply(S,[u].concat(O))},[]);return r?y:void 0}var Oa=function(u,y){var S=u.className,F=u.children,O=Object(Fe.a)(u,["className","children"]),j=n.useContext(D),I=j.prefixCls,K=j.mode;return n.createElement("ul",Object(W.a)({className:De()(I,"".concat(I,"-sub"),"".concat(I,"-").concat(K==="inline"?"inline":"vertical"),S)},O,{"data-menu-list":!0,ref:y}),F)},Yt=n.forwardRef(Oa);Yt.displayName="SubMenuList";var Qt=Yt,Sa=e("uciX"),Ln={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Fa={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fr=Xt;function Zt(r,u,y){if(u)return u;if(y)return y[r]||y.other}var Da={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Ra(r){var u=r.prefixCls,y=r.visible,S=r.children,F=r.popup,O=r.popupClassName,j=r.popupOffset,I=r.disabled,K=r.mode,x=r.onVisibleChange,$=n.useContext(D),G=$.getPopupContainer,U=$.rtl,ae=$.subMenuOpenDelay,Y=$.subMenuCloseDelay,Q=$.builtinPlacements,se=$.triggerSubMenuAction,z=$.forceSubMenuRender,q=$.motion,ne=$.defaultMotions,X=n.useState(!1),re=Object(J.a)(X,2),k=re[0],he=re[1],_=U?Object(ce.a)(Object(ce.a)({},Fa),Q):Object(ce.a)(Object(ce.a)({},Xt),Q),ue=Da[K],le=Zt(K,q,ne),te=Object(ce.a)(Object(ce.a)({},le),{},{leavedClassName:"".concat(u,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ve.a)(function(){he(y)}),function(){Ve.a.cancel(H.current)}},[y]),n.createElement(Sa.a,{prefixCls:u,popupClassName:De()("".concat(u,"-popup"),Object(oe.a)({},"".concat(u,"-rtl"),U),O),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:_,popupPlacement:ue,popupVisible:k,popup:F,popupAlign:j&&{offset:j},action:I?[]:[se],mouseEnterDelay:ae,mouseLeaveDelay:Y,onPopupVisibleChange:x,forceRender:z,popupMotion:te},S)}var ja=e("8XRh");function Pa(r){var u=r.id,y=r.open,S=r.keyPath,F=r.children,O="inline",j=n.useContext(D),I=j.prefixCls,K=j.forceSubMenuRender,x=j.motion,$=j.defaultMotions,G=j.mode,U=n.useRef(!1);U.current=G===O;var ae=n.useState(!U.current),Y=Object(J.a)(ae,2),Q=Y[0],se=Y[1],z=U.current?y:!1;n.useEffect(function(){U.current&&se(!1)},[G]);var q=Object(ce.a)({},Zt(O,x,$));S.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(X){return!U.current&&!X&&se(!0),ne==null?void 0:ne(X)},Q?null:n.createElement(t,{mode:O,locked:!U.current},n.createElement(ja.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(I,"-hidden")}),function(X){var re=X.className,k=X.style;return n.createElement(Qt,{id:u,className:re,style:k},F)}))}var Aa=function(u){var y,S=u.style,F=u.className,O=u.title,j=u.eventKey,I=u.disabled,K=u.internalPopupClose,x=u.children,$=u.itemIcon,G=u.expandIcon,U=u.popupClassName,ae=u.popupOffset,Y=u.onClick,Q=u.onMouseEnter,se=u.onMouseLeave,z=u.onTitleClick,q=u.onTitleMouseEnter,ne=u.onTitleMouseLeave,X=Object(Fe.a)(u,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),re=Wn(j),k=n.useContext(D),he=k.prefixCls,_=k.mode,ue=k.openKeys,le=k.disabled,te=k.overflowDisabled,H=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,be=k.onItemClick,Ie=k.onOpenChange,ve=k.onActive,ye=n.useContext(Ce),Ae=ye.isSubPathKey,Pe=pe(),Se="".concat(he,"-submenu"),Oe=le||I,we=n.useRef(),Ge=n.useRef(),Me=$||fe,Ke=G||me,$e=ue.includes(j),Be=!te&&$e,yn=Ae(ie,j),Xe=g(j,Oe,q,ne),Je=Xe.active,_e=Object(Fe.a)(Xe,["active"]),cn=n.useState(!1),mn=Object(J.a)(cn,2),Re=mn[0],Le=mn[1],He=function(xe){Oe||Le(xe)},ze=function(xe){He(!0),Q==null||Q({key:j,domEvent:xe})},Nn=function(xe){He(!1),se==null||se({key:j,domEvent:xe})},zn=n.useMemo(function(){return Je||(_!=="inline"?Re||Ae([H],j):!1)},[_,Je,H,Re,j,Ae]),In=l(Pe.length),Ze=function(xe){Oe||(z==null||z({key:j,domEvent:xe}),_==="inline"&&Ie(j,!$e))},bn=at(function(Ue){Y==null||Y(c(Ue)),be(Ue)}),en=function(xe){_!=="inline"&&Ie(j,xe)},Cn=function(){ve(j)},Ye=re&&"".concat(re,"-popup"),ke=n.createElement("div",Object(W.a)({role:"menuitem",style:In,className:"".concat(Se,"-title"),tabIndex:Oe?null:-1,ref:we,title:typeof O=="string"?O:null,"data-menu-id":te&&re?null:re,"aria-expanded":Be,"aria-haspopup":!0,"aria-controls":Ye,"aria-disabled":Oe,onClick:Ze,onFocus:Cn},_e),O,n.createElement(a,{icon:_!=="horizontal"?Ke:null,props:Object(ce.a)(Object(ce.a)({},u),{},{isOpen:Be,isSubMenu:!0})},n.createElement("i",{className:"".concat(Se,"-arrow")}))),En=n.useRef(_);if(_!=="inline"&&(En.current=Pe.length>1?"vertical":_),!te){var tn=En.current;ke=n.createElement(Ra,{mode:tn,prefixCls:Se,visible:!K&&Be&&_!=="inline",popupClassName:U,popupOffset:ae,popup:n.createElement(t,{mode:tn},n.createElement(Qt,{id:Ye,ref:Ge},x)),disabled:Oe,onVisibleChange:en},ke)}return n.createElement(t,{onItemClick:bn,mode:_==="horizontal"?"vertical":_,itemIcon:Me,expandIcon:Ke},n.createElement(s.Item,Object(W.a)({role:"none"},X,{component:"li",style:S,className:De()(Se,"".concat(Se,"-").concat(_),F,(y={},Object(oe.a)(y,"".concat(Se,"-open"),Be),Object(oe.a)(y,"".concat(Se,"-active"),zn),Object(oe.a)(y,"".concat(Se,"-selected"),yn),Object(oe.a)(y,"".concat(Se,"-disabled"),Oe),y)),onMouseEnter:ze,onMouseLeave:Nn}),ke,!te&&n.createElement(Pa,{id:Ye,open:Be,keyPath:Pe},x)))};function kt(r){var u=r.eventKey,y=r.children,S=pe(u),F=It(y,S),O=A();n.useEffect(function(){if(O)return O.registerPath(u,S),function(){O.unregisterPath(u,S)}},[S]);var j;return O?j=F:j=n.createElement(Aa,r,F),n.createElement(L.Provider,{value:S},j)}var Ta=e("x/xZ");function qt(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ta.a)(r)){var y=r.nodeName.toLowerCase(),S=["input","select","textarea","button"].includes(y)||r.isContentEditable||y==="a"&&!!r.getAttribute("href"),F=r.getAttribute("tabindex"),O=Number(F),j=null;return F&&!Number.isNaN(O)?j=O:S&&j===null&&(j=0),S&&r.disabled&&(j=null),j!==null&&(j>=0||u&&j<0)}return!1}function _t(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(sn.a)(r.querySelectorAll("*")).filter(function(S){return qt(S,u)});return qt(r,u)&&y.unshift(r),y}var gt=null;function pr(){gt=document.activeElement}function hr(){gt=null}function vr(){if(gt)try{gt.focus()}catch(r){}}function gr(r,u){if(u.keyCode===9){var y=_t(r),S=y[u.shiftKey?0:y.length-1],F=S===document.activeElement||r===document.activeElement;if(F){var O=y[u.shiftKey?y.length-1:0];O.focus(),u.preventDefault()}}}var Bt=Ne.a.LEFT,wt=Ne.a.RIGHT,Mt=Ne.a.UP,yt=Ne.a.DOWN,bt=Ne.a.ENTER,ea=Ne.a.ESC,na=[Mt,yt,Bt,wt];function Na(r,u,y,S){var F,O,j,I,K="prev",x="next",$="children",G="parent";if(r==="inline"&&S===bt)return{inlineTrigger:!0};var U=(F={},Object(oe.a)(F,Mt,K),Object(oe.a)(F,yt,x),F),ae=(O={},Object(oe.a)(O,Bt,y?x:K),Object(oe.a)(O,wt,y?K:x),Object(oe.a)(O,yt,$),Object(oe.a)(O,bt,$),O),Y=(j={},Object(oe.a)(j,Mt,K),Object(oe.a)(j,yt,x),Object(oe.a)(j,bt,$),Object(oe.a)(j,ea,G),Object(oe.a)(j,Bt,y?$:G),Object(oe.a)(j,wt,y?G:$),j),Q={inline:U,horizontal:ae,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(I=Q["".concat(r).concat(u?"":"Sub")])===null||I===void 0?void 0:I[S];switch(se){case K:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ia(r){for(var u=r;u;){if(u.getAttribute("data-menu-list"))return u;u=u.parentElement}return null}function Ba(r,u){for(var y=r||document.activeElement;y;){if(u.has(y))return y;y=y.parentElement}return null}function wa(r,u){var y=_t(r,!0);return y.filter(function(S){return u.has(S)})}function ta(r,u,y){var S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var F=wa(r,u),O=F.length,j=F.findIndex(function(I){return y===I});return S<0?j===-1?j=O-1:j-=1:S>0&&(j+=1),j=(j+O)%O,F[j]}function Ma(r,u,y,S,F,O,j,I,K,x){var $=n.useRef(),G=n.useRef();G.current=u;var U=function(){Ve.a.cancel($.current)};return n.useEffect(function(){return function(){U()}},[]),function(ae){var Y=ae.which;if([].concat(na,[bt,ea]).includes(Y)){var Q,se,z,q=function(){Q=new Set,se=new Map,z=new Map;var fe=O();return fe.forEach(function(me){var be=document.querySelector("[data-menu-id='".concat(gn(S,me),"']"));be&&(Q.add(be),z.set(be,me),se.set(me,be))}),Q};q();var ne=se.get(u),X=Ba(ne,Q),re=z.get(X),k=Na(r,j(re,!0).length===1,y,Y);if(!k)return;na.includes(Y)&&ae.preventDefault();var he=function(fe){if(fe){var me=fe,be=fe.querySelector("a");(be==null?void 0:be.getAttribute("href"))&&(me=be);var Ie=z.get(fe);I(Ie),U(),$.current=Object(Ve.a)(function(){G.current===Ie&&me.focus()})}};if(k.sibling||!X){var _;!X||r==="inline"?_=F.current:_=Ia(X);var ue=ta(_,Q,X,k.offset);he(ue)}else if(k.inlineTrigger)K(re);else if(k.offset>0)K(re,!0),U(),$.current=Object(Ve.a)(function(){q();var ie=X.getAttribute("aria-controls"),fe=document.getElementById(ie),me=ta(fe,Q);he(me)},5);else if(k.offset<0){var le=j(re,!0),te=le[le.length-2],H=se.get(te);K(te,!1),he(H)}}x==null||x(ae)}}var Ka=Math.random().toFixed(5).toString().slice(2),aa=0;function Wa(r){var u=Object(hn.a)(r,{value:r}),y=Object(J.a)(u,2),S=y[0],F=y[1];return n.useEffect(function(){aa+=1;var O="".concat(Ka,"-").concat(aa);F("rc-menu-uuid-".concat(O))},[]),S}var yr=e("p8sG");function La(r){Promise.resolve().then(r)}var Kt="__RC_UTIL_PATH_SPLIT__",ra=function(u){return u.join(Kt)},xa=function(u){return u.split(Kt)},Wt="rc-menu-more";function $a(){var r=n.useState({}),u=Object(J.a)(r,2),y=u[1],S=Object(n.useRef)(new Map),F=Object(n.useRef)(new Map),O=n.useState([]),j=Object(J.a)(O,2),I=j[0],K=j[1],x=Object(n.useRef)(0),$=Object(n.useCallback)(function(z,q){var ne=ra(q);F.current.set(ne,z),S.current.set(z,ne),x.current+=1;var X=x.current;La(function(){X===x.current&&y({})})},[]),G=Object(n.useCallback)(function(z,q){var ne=ra(q);F.current.delete(ne),S.current.delete(z)},[]),U=Object(n.useCallback)(function(z){K(z)},[]),ae=Object(n.useCallback)(function(z,q){var ne=S.current.get(z)||"",X=xa(ne);return q&&I.includes(X[0])&&X.unshift(Wt),X},[I]),Y=Object(n.useCallback)(function(z,q){return z.some(function(ne){var X=ae(ne,!0);return X.includes(q)})},[ae]),Q=function(){var q=Object(sn.a)(S.current.keys());return I.length&&q.push(Wt),q},se=Object(n.useCallback)(function(z){var q="".concat(S.current.get(z)).concat(Kt),ne=new Set;return Object(sn.a)(F.current.keys()).forEach(function(X){X.startsWith(q)&&ne.add(F.current.get(X))}),ne},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:ae,getKeys:Q,getSubPathKeys:se}}var Ct=[],Va=function(u){var y,S,F=u.prefixCls,O=F===void 0?"rc-menu":F,j=u.style,I=u.className,K=u.tabIndex,x=K===void 0?0:K,$=u.children,G=u.direction,U=u.id,ae=u.mode,Y=ae===void 0?"vertical":ae,Q=u.inlineCollapsed,se=u.disabled,z=u.disabledOverflow,q=u.subMenuOpenDelay,ne=q===void 0?.1:q,X=u.subMenuCloseDelay,re=X===void 0?.1:X,k=u.forceSubMenuRender,he=u.defaultOpenKeys,_=u.openKeys,ue=u.activeKey,le=u.defaultActiveFirst,te=u.selectable,H=te===void 0?!0:te,ie=u.multiple,fe=ie===void 0?!1:ie,me=u.defaultSelectedKeys,be=u.selectedKeys,Ie=u.onSelect,ve=u.onDeselect,ye=u.inlineIndent,Ae=ye===void 0?24:ye,Pe=u.motion,Se=u.defaultMotions,Oe=u.triggerSubMenuAction,we=Oe===void 0?"hover":Oe,Ge=u.builtinPlacements,Me=u.itemIcon,Ke=u.expandIcon,$e=u.overflowedIndicator,Be=$e===void 0?"...":$e,yn=u.getPopupContainer,Xe=u.onClick,Je=u.onOpenChange,_e=u.onKeyDown,cn=u.openAnimation,mn=u.openTransitionName,Re=Object(Fe.a)(u,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Le=It($,Ct),He=n.useState(!1),ze=Object(J.a)(He,2),Nn=ze[0],zn=ze[1],In=n.useRef(),Ze=Wa(U),bn=G==="rtl",en=n.useMemo(function(){return Y==="inline"&&Q?["vertical",Q]:[Y,!1]},[Y,Q]),Cn=Object(J.a)(en,2),Ye=Cn[0],ke=Cn[1],En=n.useState(0),tn=Object(J.a)(En,2),Ue=tn[0],xe=tn[1],Un=Ue>=Le.length-1||Ye!=="horizontal"||z,Gn=Object(hn.a)(he,{value:_,postState:function(Z){return Z||Ct}}),rt=Object(J.a)(Gn,2),fn=rt[0],ln=rt[1],Hn=n.useState(fn),pn=Object(J.a)(Hn,2),an=pn[0],Yn=pn[1],On=Ye==="inline",Qn=n.useRef(!1);n.useEffect(function(){On&&Yn(fn)},[fn]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(On)ln(an);else{var ee=[];ln(ee),Je==null||Je(ee)}},[On]);var nn=$a(),Sn=nn.registerPath,de=nn.unregisterPath,Ee=nn.refreshOverflowKeys,Te=nn.isSubPathKey,Qe=nn.getKeyPath,Xn=nn.getKeys,Ot=nn.getSubPathKeys,Vt=n.useMemo(function(){return{registerPath:Sn,unregisterPath:de}},[Sn,de]),Jt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Ee(Un?Ct:Le.slice(Ue+1).map(function(ee){return ee.key}))},[Ue,Un]);var zt=Object(hn.a)(ue||le&&((y=Le[0])===null||y===void 0?void 0:y.key),{value:ue}),st=Object(J.a)(zt,2),St=st[0],mt=st[1],Ft=at(function(ee){mt(ee)}),Ut=at(function(){mt(void 0)}),Dt=Object(hn.a)(me||[],{value:be,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ct:[Z]}}),Rt=Object(J.a)(Dt,2),it=Rt[0],Fn=Rt[1],jt=function(Z){if(!!H){var ge=Z.key,We=it.includes(ge),qe;We?qe=it.filter(function(kn){return kn!==ge}):fe?qe=[].concat(Object(sn.a)(it),[ge]):qe=[ge],Fn(qe);var xn=Object(ce.a)(Object(ce.a)({},Z),{},{selectedKeys:qe});We?ve==null||ve(xn):Ie==null||Ie(xn)}},Pt=at(function(ee){Xe==null||Xe(c(ee)),jt(ee)}),ft=at(function(ee,Z){var ge=fn.filter(function(qe){return qe!==ee});if(Z)ge.push(ee);else if(Ye!=="inline"){var We=Ot(ee);ge=ge.filter(function(qe){return!We.has(qe)})}nt()(fn,ge)||(ln(ge),Je==null||Je(ge))}),Zn=at(yn),pt=function(Z,ge){var We=ge!=null?ge:!fn.includes(Z);ft(Z,We)},ht=Ma(Ye,St,bn,Ze,In,Xn,Qe,mt,pt,_e);n.useEffect(function(){zn(!0)},[]);var At=Ye!=="horizontal"||z?Le:Le.map(function(ee,Z){return n.createElement(t,{key:ee.key,overflowDisabled:Z>Ue},ee)}),Tt=n.createElement(s,Object(W.a)({id:U,ref:In,prefixCls:"".concat(O,"-overflow"),component:"ul",itemComponent:Nt,className:De()(O,"".concat(O,"-root"),"".concat(O,"-").concat(Ye),I,(S={},Object(oe.a)(S,"".concat(O,"-inline-collapsed"),ke),Object(oe.a)(S,"".concat(O,"-rtl"),bn),S)),dir:G,style:j,role:"menu",tabIndex:x,data:At,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ge=Z.length,We=ge?Le.slice(-ge):null;return n.createElement(kt,{eventKey:Wt,title:Be,disabled:Un,internalPopupClose:ge===0},We)},maxCount:Ye!=="horizontal"||z?s.INVALIDATE:s.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:ht},Re));return n.createElement(on.Provider,{value:Ze},n.createElement(t,{prefixCls:O,mode:Ye,openKeys:fn,rtl:bn,disabled:se,motion:Nn?Pe:null,defaultMotions:Nn?Se:null,activeKey:St,onActive:Ft,onInactive:Ut,selectedKeys:it,inlineIndent:Ae,subMenuOpenDelay:ne,subMenuCloseDelay:re,forceSubMenuRender:k,builtinPlacements:Ge,triggerSubMenuAction:we,getPopupContainer:Zn,itemIcon:Me,expandIcon:Ke,onItemClick:Pt,onOpenChange:ft},n.createElement(Ce.Provider,{value:Jt},Tt),n.createElement(M.Provider,{value:Vt},Le)))},Ja=Va,za=function(u){var y=u.className,S=u.title,F=u.eventKey,O=u.children,j=Object(Fe.a)(u,["className","title","eventKey","children"]),I=n.useContext(D),K=I.prefixCls,x="".concat(K,"-item-group");return n.createElement("li",Object(W.a)({},j,{onClick:function(G){return G.stopPropagation()},className:De()(x,y)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof S=="string"?S:void 0},S),n.createElement("ul",{className:"".concat(x,"-list")},O))};function Ua(r){var u=r.children,y=Object(Fe.a)(r,["children"]),S=pe(y.eventKey),F=It(u,S),O=A();return O?F:n.createElement(za,y,F)}function Ga(r){var u=r.className,y=r.style,S=n.useContext(D),F=S.prefixCls,O=A();return O?null:n.createElement("li",{className:De()("".concat(F,"-item-divider"),u),style:y})}var ct=Ja;ct.Item=Nt,ct.SubMenu=kt,ct.ItemGroup=Ua,ct.Divider=Ga;var Ha=ct,Ya=e("eDIo");function Qa(r,u){var y=r.prefixCls,S=r.editable,F=r.locale,O=r.style;return!S||S.showAdd===!1?null:n.createElement("button",{ref:u,type:"button",className:"".concat(y,"-nav-add"),style:O,"aria-label":(F==null?void 0:F.addAriaLabel)||"Add tab",onClick:function(I){S.onEdit("add",{event:I})}},S.addIcon||"+")}var sa=n.forwardRef(Qa);function Xa(r,u){var y=r.prefixCls,S=r.id,F=r.tabs,O=r.locale,j=r.mobile,I=r.moreIcon,K=I===void 0?"More":I,x=r.moreTransitionName,$=r.style,G=r.className,U=r.editable,ae=r.tabBarGutter,Y=r.rtl,Q=r.onTabClick,se=Object(n.useState)(!1),z=Object(J.a)(se,2),q=z[0],ne=z[1],X=Object(n.useState)(null),re=Object(J.a)(X,2),k=re[0],he=re[1],_="".concat(S,"-more-popup"),ue="".concat(y,"-dropdown"),le=k!==null?"".concat(_,"-").concat(k):null,te=O==null?void 0:O.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(ye){var Ae=ye.key,Pe=ye.domEvent;Q(Ae,Pe),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":le,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},F.map(function(ve){return n.createElement(Nt,{key:ve.key,id:"".concat(_,"-").concat(ve.key),role:"option","aria-controls":S&&"".concat(S,"-panel-").concat(ve.key),disabled:ve.disabled},ve.tab)}));function ie(ve){for(var ye=F.filter(function(we){return!we.disabled}),Ae=ye.findIndex(function(we){return we.key===k})||0,Pe=ye.length,Se=0;Se<Pe;Se+=1){Ae=(Ae+ve+Pe)%Pe;var Oe=ye[Ae];if(!Oe.disabled){he(Oe.key);return}}}function fe(ve){var ye=ve.which;if(!q){[Ne.a.DOWN,Ne.a.SPACE,Ne.a.ENTER].includes(ye)&&(ne(!0),ve.preventDefault());return}switch(ye){case Ne.a.UP:ie(-1),ve.preventDefault();break;case Ne.a.DOWN:ie(1),ve.preventDefault();break;case Ne.a.ESC:ne(!1);break;case Ne.a.SPACE:case Ne.a.ENTER:k!==null&&Q(k,ve);break}}Object(n.useEffect)(function(){var ve=document.getElementById(le);ve&&ve.scrollIntoView&&ve.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||he(null)},[q]);var me=Object(oe.a)({},Y?"marginLeft":"marginRight",ae);F.length||(me.visibility="hidden",me.order=1);var be=De()(Object(oe.a)({},"".concat(ue,"-rtl"),Y)),Ie=j?null:n.createElement(Ya.default,{prefixCls:ue,overlay:H,trigger:["hover"],visible:q,transitionName:x,onVisibleChange:ne,overlayClassName:be,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(S,"-more"),"aria-expanded":q,onKeyDown:fe},K));return n.createElement("div",{className:De()("".concat(y,"-nav-operations"),G),style:$,ref:u},Ie,n.createElement(sa,{prefixCls:y,locale:O,editable:U}))}var Za=n.forwardRef(Xa),Lt=Object(n.createContext)(null),ka=.1,ia=.01,Et=20,oa=Math.pow(.995,Et);function qa(r,u){var y=Object(n.useState)(),S=Object(J.a)(y,2),F=S[0],O=S[1],j=Object(n.useState)(0),I=Object(J.a)(j,2),K=I[0],x=I[1],$=Object(n.useState)(0),G=Object(J.a)($,2),U=G[0],ae=G[1],Y=Object(n.useState)(),Q=Object(J.a)(Y,2),se=Q[0],z=Q[1],q=Object(n.useRef)();function ne(ue){var le=ue.touches[0],te=le.screenX,H=le.screenY;O({x:te,y:H}),window.clearInterval(q.current)}function X(ue){if(!!F){ue.preventDefault();var le=ue.touches[0],te=le.screenX,H=le.screenY;O({x:te,y:H});var ie=te-F.x,fe=H-F.y;u(ie,fe);var me=Date.now();x(me),ae(me-K),z({x:ie,y:fe})}}function re(){if(!!F&&(O(null),z(null),se)){var ue=se.x/U,le=se.y/U,te=Math.abs(ue),H=Math.abs(le);if(Math.max(te,H)<ka)return;var ie=ue,fe=le;q.current=window.setInterval(function(){if(Math.abs(ie)<ia&&Math.abs(fe)<ia){window.clearInterval(q.current);return}ie*=oa,fe*=oa,u(ie*Et,fe*Et)},Et)}}var k=Object(n.useRef)();function he(ue){var le=ue.deltaX,te=ue.deltaY,H=0,ie=Math.abs(le),fe=Math.abs(te);ie===fe?H=k.current==="x"?le:te:ie>fe?(H=le,k.current="x"):(H=te,k.current="y"),u(-H,-H)&&ue.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:X,onTouchEnd:re,onWheel:he},n.useEffect(function(){function ue(ie){_.current.onTouchStart(ie)}function le(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function H(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",le,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),r.current.addEventListener("touchstart",ue,{passive:!1}),r.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",le),document.removeEventListener("touchend",te)}},[])}function _a(){var r=Object(n.useRef)(new Map);function u(S){return r.current.has(S)||r.current.set(S,n.createRef()),r.current.get(S)}function y(S){r.current.delete(S)}return[u,y]}function ua(r,u){var y=n.useRef(r),S=n.useState({}),F=Object(J.a)(S,2),O=F[1];function j(I){var K=typeof I=="function"?I(y.current):I;K!==y.current&&u(K,y.current),y.current=K,O({})}return[y.current,j]}var la=function(u){var y=u.position,S=u.prefixCls,F=u.extra;if(!F)return null;var O,j=F;return y==="right"&&(O=j.right||!j.left&&j||null),y==="left"&&(O=j.left||null),O?n.createElement("div",{className:"".concat(S,"-extra-content")},O):null};function er(r,u){var y,S=n.useContext(Lt),F=S.prefixCls,O=S.tabs,j=r.className,I=r.style,K=r.id,x=r.animated,$=r.activeKey,G=r.rtl,U=r.extra,ae=r.editable,Y=r.locale,Q=r.tabPosition,se=r.tabBarGutter,z=r.children,q=r.onTabClick,ne=r.onTabScroll,X=Object(n.useRef)(),re=Object(n.useRef)(),k=Object(n.useRef)(),he=Object(n.useRef)(),_=_a(),ue=Object(J.a)(_,2),le=ue[0],te=ue[1],H=Q==="top"||Q==="bottom",ie=ua(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(J.a)(ie,2),me=fe[0],be=fe[1],Ie=ua(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),ve=Object(J.a)(Ie,2),ye=ve[0],Ae=ve[1],Pe=Object(n.useState)(0),Se=Object(J.a)(Pe,2),Oe=Se[0],we=Se[1],Ge=Object(n.useState)(0),Me=Object(J.a)(Ge,2),Ke=Me[0],$e=Me[1],Be=Object(n.useState)(0),yn=Object(J.a)(Be,2),Xe=yn[0],Je=yn[1],_e=Object(n.useState)(0),cn=Object(J.a)(_e,2),mn=cn[0],Re=cn[1],Le=Object(n.useState)(null),He=Object(J.a)(Le,2),ze=He[0],Nn=He[1],zn=Object(n.useState)(null),In=Object(J.a)(zn,2),Ze=In[0],bn=In[1],en=Object(n.useState)(0),Cn=Object(J.a)(en,2),Ye=Cn[0],ke=Cn[1],En=Object(n.useState)(0),tn=Object(J.a)(En,2),Ue=tn[0],xe=tn[1],Un=vn(new Map),Gn=Object(J.a)(Un,2),rt=Gn[0],fn=Gn[1],ln=ot(O,rt,Oe),Hn="".concat(F,"-nav-operations-hidden"),pn=0,an=0;H?G?(pn=0,an=Math.max(0,Oe-ze)):(pn=Math.min(0,ze-Oe),an=0):(pn=Math.min(0,Ze-Ke),an=0);function Yn(ee){return ee<pn?pn:ee>an?an:ee}var On=Object(n.useRef)(),Qn=Object(n.useState)(),nn=Object(J.a)(Qn,2),Sn=nn[0],de=nn[1];function Ee(){de(Date.now())}function Te(){window.clearTimeout(On.current)}qa(X,function(ee,Z){function ge(We,qe){We(function(xn){var kn=Yn(xn+qe);return kn})}if(H){if(ze>=Oe)return!1;ge(be,ee)}else{if(Ze>=Ke)return!1;ge(Ae,Z)}return Te(),Ee(),!0}),Object(n.useEffect)(function(){return Te(),Sn&&(On.current=window.setTimeout(function(){de(0)},100)),Te},[Sn]);function Qe(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=ln.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ge=me;G?Z.right<me?ge=Z.right:Z.right+Z.width>me+ze&&(ge=Z.right+Z.width-ze):Z.left<-me?ge=-Z.left:Z.left+Z.width>-me+ze&&(ge=-(Z.left+Z.width-ze)),Ae(0),be(Yn(ge))}else{var We=ye;Z.top<-ye?We=-Z.top:Z.top+Z.height>-ye+Ze&&(We=-(Z.top+Z.height-Ze)),be(0),Ae(Yn(We))}}var Xn=ut(ln,{width:ze,height:Ze,left:me,top:ye},{width:Xe,height:mn},{width:Ye,height:Ue},Object(ce.a)(Object(ce.a)({},r),{},{tabs:O})),Ot=Object(J.a)(Xn,2),Vt=Ot[0],Jt=Ot[1],zt=O.map(function(ee){var Z=ee.key;return n.createElement(wn,{id:K,prefixCls:F,key:Z,rtl:G,tab:ee,closable:ee.closable,editable:ae,active:Z===$,tabPosition:Q,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:le(Z),onClick:function(We){q(Z,We)},onRemove:function(){te(Z)},onFocus:function(){Qe(Z),Ee(),G||(X.current.scrollLeft=0),X.current.scrollTop=0}})}),st=Pn(function(){var ee,Z,ge,We,qe,xn,kn,Gt,Ht,ur=((ee=X.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,lr=((Z=X.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,pa=((ge=he.current)===null||ge===void 0?void 0:ge.offsetWidth)||0,ha=((We=he.current)===null||We===void 0?void 0:We.offsetHeight)||0,dr=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,cr=((xn=k.current)===null||xn===void 0?void 0:xn.offsetHeight)||0;Nn(ur),bn(lr),ke(pa),xe(ha);var va=(((kn=re.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-pa,ga=(((Gt=re.current)===null||Gt===void 0?void 0:Gt.offsetHeight)||0)-ha;we(va),$e(ga);var ya=(Ht=k.current)===null||Ht===void 0?void 0:Ht.className.includes(Hn);Je(va-(ya?0:dr)),Re(ga-(ya?0:cr)),fn(function(){var ba=new Map;return O.forEach(function(mr){var Ca=mr.key,vt=le(Ca).current;vt&&ba.set(Ca,{width:vt.offsetWidth,height:vt.offsetHeight,left:vt.offsetLeft,top:vt.offsetTop})}),ba})}),St=O.slice(0,Vt),mt=O.slice(Jt+1),Ft=[].concat(Object(sn.a)(St),Object(sn.a)(mt)),Ut=Object(n.useState)(),Dt=Object(J.a)(Ut,2),Rt=Dt[0],it=Dt[1],Fn=ln.get($),jt=Object(n.useRef)();function Pt(){Ve.a.cancel(jt.current)}Object(n.useEffect)(function(){var ee={};return Fn&&(H?(G?ee.right=Fn.right:ee.left=Fn.left,ee.width=Fn.width):(ee.top=Fn.top,ee.height=Fn.height)),Pt(),jt.current=Object(Ve.a)(function(){it(ee)}),Pt},[Fn,H,G]),Object(n.useEffect)(function(){Qe()},[$,Fn,ln,H]),Object(n.useEffect)(function(){st()},[G,se,$,O.map(function(ee){return ee.key}).join("_")]);var ft=!!Ft.length,Zn="".concat(F,"-nav-wrap"),pt,ht,At,Tt;return H?G?(ht=me>0,pt=me+ze<Oe):(pt=me<0,ht=-me+ze<Oe):(At=ye<0,Tt=-ye+Ze<Ke),n.createElement("div",{ref:u,role:"tablist",className:De()("".concat(F,"-nav"),j),style:I,onKeyDown:function(){Ee()}},n.createElement(la,{position:"left",extra:U,prefixCls:F}),n.createElement(Bn.default,{onResize:st},n.createElement("div",{className:De()(Zn,(y={},Object(oe.a)(y,"".concat(Zn,"-ping-left"),pt),Object(oe.a)(y,"".concat(Zn,"-ping-right"),ht),Object(oe.a)(y,"".concat(Zn,"-ping-top"),At),Object(oe.a)(y,"".concat(Zn,"-ping-bottom"),Tt),y)),ref:X},n.createElement(Bn.default,{onResize:st},n.createElement("div",{ref:re,className:"".concat(F,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ye,"px)"),transition:Sn?"none":void 0}},zt,n.createElement(sa,{ref:he,prefixCls:F,locale:Y,editable:ae,style:{visibility:ft?"hidden":null}}),n.createElement("div",{className:De()("".concat(F,"-ink-bar"),Object(oe.a)({},"".concat(F,"-ink-bar-animated"),x.inkBar)),style:Rt}))))),n.createElement(Za,Object(W.a)({},r,{ref:k,prefixCls:F,tabs:Ft,className:!ft&&Hn})),n.createElement(la,{position:"right",extra:U,prefixCls:F}))}var da=n.forwardRef(er);function nr(r){var u=r.id,y=r.activeKey,S=r.animated,F=r.tabPosition,O=r.rtl,j=r.destroyInactiveTabPane,I=n.useContext(Lt),K=I.prefixCls,x=I.tabs,$=S.tabPane,G=x.findIndex(function(U){return U.key===y});return n.createElement("div",{className:De()("".concat(K,"-content-holder"))},n.createElement("div",{className:De()("".concat(K,"-content"),"".concat(K,"-content-").concat(F),Object(oe.a)({},"".concat(K,"-content-animated"),$)),style:G&&$?Object(oe.a)({},O?"marginRight":"marginLeft","-".concat(G,"00%")):null},x.map(function(U){return n.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:u,animated:$,active:U.key===y,destroyInactiveTabPane:j})})))}function ca(r){var u=r.prefixCls,y=r.forceRender,S=r.className,F=r.style,O=r.id,j=r.active,I=r.animated,K=r.destroyInactiveTabPane,x=r.tabKey,$=r.children,G=n.useState(y),U=Object(J.a)(G,2),ae=U[0],Y=U[1];n.useEffect(function(){j?Y(!0):K&&Y(!1)},[j,K]);var Q={};return j||(I?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:O&&"".concat(O,"-panel-").concat(x),role:"tabpanel",tabIndex:j?0:-1,"aria-labelledby":O&&"".concat(O,"-tab-").concat(x),"aria-hidden":!j,style:Object(ce.a)(Object(ce.a)({},Q),F),className:De()("".concat(u,"-tabpane"),j&&"".concat(u,"-tabpane-active"),S)},(j||ae||y)&&$)}var ma=0;function tr(r){return Object(Rn.a)(r).map(function(u){if(n.isValidElement(u)){var y=u.key!==void 0?String(u.key):void 0;return Object(ce.a)(Object(ce.a)({key:y},u.props),{},{node:u})}return null}).filter(function(u){return u})}function ar(r,u){var y,S=r.id,F=r.prefixCls,O=F===void 0?"rc-tabs":F,j=r.className,I=r.children,K=r.direction,x=r.activeKey,$=r.defaultActiveKey,G=r.editable,U=r.animated,ae=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=r.tabPosition,Q=Y===void 0?"top":Y,se=r.tabBarGutter,z=r.tabBarStyle,q=r.tabBarExtraContent,ne=r.locale,X=r.moreIcon,re=r.moreTransitionName,k=r.destroyInactiveTabPane,he=r.renderTabBar,_=r.onChange,ue=r.onTabClick,le=r.onTabScroll,te=Object(Fe.a)(r,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(I),ie=K==="rtl",fe;ae===!1?fe={inkBar:!1,tabPane:!1}:ae===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(ce.a)({inkBar:!0,tabPane:!1},Object(je.a)(ae)==="object"?ae:{});var me=Object(n.useState)(!1),be=Object(J.a)(me,2),Ie=be[0],ve=be[1];Object(n.useEffect)(function(){ve(Object(jn.a)())},[]);var ye=Object(hn.a)(function(){var Re;return(Re=H[0])===null||Re===void 0?void 0:Re.key},{value:x,defaultValue:$}),Ae=Object(J.a)(ye,2),Pe=Ae[0],Se=Ae[1],Oe=Object(n.useState)(function(){return H.findIndex(function(Re){return Re.key===Pe})}),we=Object(J.a)(Oe,2),Ge=we[0],Me=we[1];Object(n.useEffect)(function(){var Re=H.findIndex(function(He){return He.key===Pe});if(Re===-1){var Le;Re=Math.max(0,Math.min(Ge,H.length-1)),Se((Le=H[Re])===null||Le===void 0?void 0:Le.key)}Me(Re)},[H.map(function(Re){return Re.key}).join("_"),Pe,Ge]);var Ke=Object(hn.a)(null,{value:S}),$e=Object(J.a)(Ke,2),Be=$e[0],yn=$e[1],Xe=Q;Ie&&!["left","right"].includes(Q)&&(Xe="top"),Object(n.useEffect)(function(){S||(yn("rc-tabs-".concat(ma)),ma+=1)},[]);function Je(Re,Le){ue==null||ue(Re,Le),Se(Re),_==null||_(Re)}var _e={id:Be,activeKey:Pe,animated:fe,tabPosition:Xe,rtl:ie,mobile:Ie},cn,mn=Object(ce.a)(Object(ce.a)({},_e),{},{editable:G,locale:ne,moreIcon:X,moreTransitionName:re,tabBarGutter:se,onTabClick:Je,onTabScroll:le,extra:q,style:z,panes:I});return he?cn=he(mn,da):cn=n.createElement(da,mn),n.createElement(Lt.Provider,{value:{tabs:H,prefixCls:O}},n.createElement("div",Object(W.a)({ref:u,id:S,className:De()(O,"".concat(O,"-").concat(Xe),(y={},Object(oe.a)(y,"".concat(O,"-mobile"),Ie),Object(oe.a)(y,"".concat(O,"-editable"),G),Object(oe.a)(y,"".concat(O,"-rtl"),ie),y),j)},te),cn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var fa=n.forwardRef(ar);fa.TabPane=ca;var rr=fa,sr=rr,xt=e("MZF8"),un=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function $t(r,u){var y,S=(y=r.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return S||(S=u.tsx?"tsx":"jsx"),S}var or=r=>{var u,y,S,F=Object(n.useRef)(),O=Object(n.useContext)(un.context),j=O.locale,I=Object(un.useLocaleProps)(j,r),K=Object(un.useDemoUrl)(I.identifier),x=I.demoUrl||K,$=(xt.a===null||xt.a===void 0?void 0:xt.a.location.hash)==="#".concat(I.identifier),G=Object.keys(I.sources).length===1,U=Object(un.useCodeSandbox)((u=I.hideActions)!==null&&u!==void 0&&u.includes("CSB")?null:I),ae=Object(un.useRiddle)((y=I.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:I),Y=Object(un.useMotions)(I.motions||[],F.current),Q=Object(V.default)(Y,2),se=Q[0],z=Q[1],q=Object(un.useCopy)(),ne=Object(V.default)(q,2),X=ne[0],re=ne[1],k=Object(n.useState)("_"),he=Object(V.default)(k,2),_=he[0],ue=he[1],le=Object(n.useState)($t(_,I.sources[_])),te=Object(V.default)(le,2),H=te[0],ie=te[1],fe=Object(n.useState)(Boolean(I.defaultShowCode)),me=Object(V.default)(fe,2),be=me[0],Ie=me[1],ve=Object(n.useState)(Math.random()),ye=Object(V.default)(ve,2),Ae=ye[0],Pe=ye[1],Se=I.sources[_][H]||I.sources[_].content,Oe=Object(un.useTSPlaygroundUrl)(j,Se),we=Object(n.useRef)(),Ge=Object(un.usePrefersColor)(),Me=Object(V.default)(Ge,1),Ke=Me[0];Object(n.useEffect)(()=>{Pe(Math.random())},[Ke]);function $e(Be){ue(Be),ie($t(Be,I.sources[Be]))}return C.a.createElement("div",{style:I.style,className:[I.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:I.identifier,"data-debug":I.debug||void 0,"data-iframe":I.iframe||void 0},I.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:F,className:"__dumi-default-previewer-demo",style:{transform:I.transform?"translate(0, 0)":void 0,padding:I.compact||I.iframe&&I.compact!==!1?"0":void 0,background:I.background}},I.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(I.iframe).replace(/(\d)$/,"$1px")},key:Ae,src:x,ref:we}):I.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":I.title},I.title&&C.a.createElement(un.AnchorLink,{to:"#".concat(I.identifier)},I.title),I.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:I.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),ae&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ae}),I.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),I.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Pe(Math.random())}),!((S=I.hideActions)!==null&&S!==void 0&&S.includes("EXTERNAL"))&&C.a.createElement(un.Link,{target:"_blank",to:x},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":re,onClick:()=>X(Se)}),H==="tsx"&&be&&C.a.createElement(un.Link,{target:"_blank",to:Oe},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(be?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ie(!be)})),be&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&C.a.createElement(sr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:$e},Object.keys(I.sources).map(Be=>C.a.createElement(ca,{tab:Be==="_"?"index.".concat($t(Be,I.sources[Be])):Be,key:Be}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(ir.a,{code:Se,lang:H,showCopy:!1}))))},Cr=dn.default=or},"80pN":function(Dn,dn,e){"use strict";(function(V){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),W=e("i8i4"),oe=e("QCnb");function J(a){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+a,h=1;h<arguments.length;h++)l+="&args[]="+encodeURIComponent(arguments[h]);return"Minified React error #"+a+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var je=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;je.hasOwnProperty("ReactCurrentDispatcher")||(je.ReactCurrentDispatcher={current:null}),je.hasOwnProperty("ReactCurrentBatchConfig")||(je.ReactCurrentBatchConfig={suspense:null});function Fe(a){var l=a,h=a;if(a.alternate)for(;l.return;)l=l.return;else{a=l;do l=a,(l.effectTag&1026)!=0&&(h=l.return),a=l.return;while(a)}return l.tag===3?h:null}function ce(a){if(Fe(a)!==a)throw Error(J(188))}function rn(a){var l=a.alternate;if(!l){if(l=Fe(a),l===null)throw Error(J(188));return l!==a?null:a}for(var h=a,M=l;;){var A=h.return;if(A===null)break;var L=A.alternate;if(L===null){if(M=A.return,M!==null){h=M;continue}break}if(A.child===L.child){for(L=A.child;L;){if(L===h)return ce(A),a;if(L===M)return ce(A),l;L=L.sibling}throw Error(J(188))}if(h.return!==M.return)h=A,M=L;else{for(var pe=!1,Ce=A.child;Ce;){if(Ce===h){pe=!0,h=A,M=L;break}if(Ce===M){pe=!0,M=A,h=L;break}Ce=Ce.sibling}if(!pe){for(Ce=L.child;Ce;){if(Ce===h){pe=!0,h=L,M=A;break}if(Ce===M){pe=!0,M=L,h=A;break}Ce=Ce.sibling}if(!pe)throw Error(J(189))}}if(h.alternate!==M)throw Error(J(190))}if(h.tag!==3)throw Error(J(188));return h.stateNode.current===h?a:l}function De(){return!0}function Rn(){return!1}function jn(a,l,h,M){this.dispatchConfig=a,this._targetInst=l,this.nativeEvent=h,a=this.constructor.Interface;for(var A in a)a.hasOwnProperty(A)&&((l=a[A])?this[A]=l(h):A==="target"?this.target=M:this[A]=h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?De:Rn,this.isPropagationStopped=Rn,this}n(jn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=De)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=De)},persist:function(){this.isPersistent=De},isPersistent:Rn,destructor:function(){var a=this.constructor.Interface,l;for(l in a)this[l]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Rn,this._dispatchInstances=this._dispatchListeners=null}}),jn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},jn.extend=function(a){function l(){}function h(){return M.apply(this,arguments)}var M=this;l.prototype=M.prototype;var A=new l;return n(A,h.prototype),h.prototype=A,h.prototype.constructor=h,h.Interface=n({},M.Interface,a),h.extend=M.extend,Ve(h),h},Ve(jn);function hn(a,l,h,M){if(this.eventPool.length){var A=this.eventPool.pop();return this.call(A,a,l,h,M),A}return new this(a,l,h,M)}function sn(a){if(!(a instanceof this))throw Error(J(279));a.destructor(),10>this.eventPool.length&&this.eventPool.push(a)}function Ve(a){a.eventPool=[],a.getPooled=hn,a.release=sn}var Bn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Pn(a,l){var h={};return h[a.toLowerCase()]=l.toLowerCase(),h["Webkit"+a]="webkit"+l,h["Moz"+a]="moz"+l,h}var vn={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},Ne={},qn={};Bn&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function wn(a){if(Ne[a])return Ne[a];if(!vn[a])return a;var l=vn[a],h;for(h in l)if(l.hasOwnProperty(h)&&h in qn)return Ne[a]=l[h];return a}var _n=wn("animationend"),ot=wn("animationiteration"),et=wn("animationstart"),ut=wn("transitionend"),Mn=null;function nt(a){if(Mn===null)try{var l=("require"+Math.random()).slice(0,7);Mn=(V&&V[l])("timers").setImmediate}catch(h){Mn=function(M){var A=new MessageChannel;A.port1.onmessage=M,A.port2.postMessage(void 0)}}return Mn(a)}var $n=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,lt=$n[11],Kn=$n[12],An=W.unstable_batchedUpdates,Vn=je.IsSomeRendererActing,tt=typeof oe.unstable_flushAllWithoutAsserting=="function",Jn=oe.unstable_flushAllWithoutAsserting||function(){for(var a=!1;lt();)a=!0;return a};function N(a){try{Jn(),nt(function(){Jn()?N(a):a()})}catch(l){a(l)}}var P=0,T=!1,f=W.findDOMNode,i=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=i[0],b=i[4],E=i[5],s=i[6],p=i[7],o=i[8],B=i[9],w=i[10];function R(){}function d(a,l){if(!a)return[];if(a=rn(a),!a)return[];for(var h=a,M=[];;){if(h.tag===5||h.tag===6||h.tag===1||h.tag===0){var A=h.stateNode;l(A)&&M.push(A)}if(h.child)h.child.return=h,h=h.child;else{if(h===a)return M;for(;!h.sibling;){if(!h.return||h.return===a)return M;h=h.return}h.sibling.return=h.return,h=h.sibling}}}function D(a,l){if(a&&!a._reactInternalFiber){var h=""+a;throw a=Array.isArray(a)?"an array":a&&a.nodeType===1&&a.tagName?"a DOM node":h==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":h,Error(J(286,l,a))}}var m={renderIntoDocument:function(a){var l=document.createElement("div");return W.render(a,l)},isElement:function(a){return C.isValidElement(a)},isElementOfType:function(a,l){return C.isValidElement(a)&&a.type===l},isDOMComponent:function(a){return!(!a||a.nodeType!==1||!a.tagName)},isDOMComponentElement:function(a){return!!(a&&C.isValidElement(a)&&a.tagName)},isCompositeComponent:function(a){return m.isDOMComponent(a)?!1:a!=null&&typeof a.render=="function"&&typeof a.setState=="function"},isCompositeComponentWithType:function(a,l){return m.isCompositeComponent(a)?a._reactInternalFiber.type===l:!1},findAllInRenderedTree:function(a,l){return D(a,"findAllInRenderedTree"),a?d(a._reactInternalFiber,l):[]},scryRenderedDOMComponentsWithClass:function(a,l){return D(a,"scryRenderedDOMComponentsWithClass"),m.findAllInRenderedTree(a,function(h){if(m.isDOMComponent(h)){var M=h.className;typeof M!="string"&&(M=h.getAttribute("class")||"");var A=M.split(/\s+/);if(!Array.isArray(l)){if(l===void 0)throw Error(J(11));l=l.split(/\s+/)}return l.every(function(L){return A.indexOf(L)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(a,l){if(D(a,"findRenderedDOMComponentWithClass"),a=m.scryRenderedDOMComponentsWithClass(a,l),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for class:"+l);return a[0]},scryRenderedDOMComponentsWithTag:function(a,l){return D(a,"scryRenderedDOMComponentsWithTag"),m.findAllInRenderedTree(a,function(h){return m.isDOMComponent(h)&&h.tagName.toUpperCase()===l.toUpperCase()})},findRenderedDOMComponentWithTag:function(a,l){if(D(a,"findRenderedDOMComponentWithTag"),a=m.scryRenderedDOMComponentsWithTag(a,l),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for tag:"+l);return a[0]},scryRenderedComponentsWithType:function(a,l){return D(a,"scryRenderedComponentsWithType"),m.findAllInRenderedTree(a,function(h){return m.isCompositeComponentWithType(h,l)})},findRenderedComponentWithType:function(a,l){if(D(a,"findRenderedComponentWithType"),a=m.scryRenderedComponentsWithType(a,l),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for componentType:"+l);return a[0]},mockComponent:function(a,l){return l=l||a.mockTagName||"div",a.prototype.render.mockImplementation(function(){return C.createElement(l,null,this.props.children)}),this},nativeTouchData:function(a,l){return{touches:[{pageX:a,pageY:l}]}},Simulate:null,SimulateNative:{},act:function(a){function l(){P--,Vn.current=h,Kn.current=M}T===!1&&(T=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),P++;var h=Vn.current,M=Kn.current;Vn.current=!0,Kn.current=!0;try{var A=An(a)}catch(L){throw l(),L}if(A!==null&&typeof A=="object"&&typeof A.then=="function")return{then:function(L,pe){A.then(function(){1<P||tt===!0&&h===!0?(l(),L()):N(function(Ce){l(),Ce?pe(Ce):L()})},function(Ce){l(),pe(Ce)})}};try{P!==1||tt!==!1&&h!==!1||Jn(),l()}catch(L){throw l(),L}return{then:function(L){L()}}}};function t(a){return function(l,h){if(C.isValidElement(l))throw Error(J(228));if(m.isCompositeComponent(l))throw Error(J(229));var M=b[a],A=new R;A.target=l,A.type=a.toLowerCase();var L=v(l),pe=new jn(M,L,A,l);pe.persist(),n(pe,h),M.phasedRegistrationNames?E(pe):s(pe),W.unstable_batchedUpdates(function(){p(l),w(pe)}),o()}}m.Simulate={};for(var g in b)m.Simulate[g]=t(g);function c(a,l){return function(h,M){var A=new R(a);n(A,M),m.isDOMComponent(h)?(h=f(h),A.target=h,B(l,1,document,A)):h.tagName&&(A.target=h,B(l,1,document,A))}}[["abort","abort"],[_n,"animationEnd"],[ot,"animationIteration"],[et,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ut,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(a){var l=a[1];m.SimulateNative[l]=c(l,a[0])}),V.exports=m.default||m}).call(this,e("hOG+")(Dn))},JjdP:function(Dn,dn,e){"use strict";e.r(dn);var V=e("9og8"),n=e("WmNS"),C=e.n(n),W=e("LtsZ"),oe=`import React, { useRef } from 'react';
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

export default Demo;`,J=`import { get, set, cloneDeep } from 'lodash-es';

// \u540E\u9762\u4E09\u4E2A\u53C2\u6570\u90FD\u662F\u5185\u90E8\u9012\u5F52\u4F7F\u7528\u7684\uFF0C\u5C06schema\u7684\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u6210\u4E00\u5C42, \u6BCF\u4E2Aitem\u7684\u7ED3\u6784
// {
//   parent: '#',
//   schema: ...,
//   children: []
// }

// TODO: \u53D1\u5E03\u540E\u53BB\u6389
window.log1 = value => {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = value => {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = value => {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = value => {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

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
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema, children };
  }
  return result;
}
// the reverse of flattenSchema
export function getSchemaFromFlatten(flatten, path = '#') {
  let schema = {};
  const item = clone(flatten[path]);
  if (item) {
    schema = item.schema;
    // remove $id, maybe leave it for now
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

//////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u514B\u9686\u5BF9\u8C61
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

export const clone = cloneDeep;
// export const clone = clone1;

// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };

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

// \u6DF1\u5EA6\u5BF9\u6BD4
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

// \u65F6\u95F4\u7EC4\u4EF6
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

// ----------------- schema \u76F8\u5173

// \u5408\u5E76propsSchema\u548CUISchema\u3002\u7531\u4E8E\u4E24\u8005\u7684\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u5408\u5E76\u4E3A\u4E00\u4E2A\u5927schema\u80FD\u7B80\u5316\u5185\u90E8\u5904\u7406
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

// \u83B7\u5F97propsSchema\u7684children
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

// \u5408\u5E76\u591A\u4E2Aschema\u6811\uFF0C\u6BD4\u5982\u4E00\u4E2Aschema\u7684\u6811\u8282\u70B9\u662F\u53E6\u4E00\u4E2Aschema
export function combine() {}

// \u4EE3\u66FFeval\u7684\u51FD\u6570
export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

// \u89E3\u6790\u51FD\u6570\u5B57\u7B26\u4E32\u503C
export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

// \u5224\u65ADschema\u7684\u503C\u662F\u662F\u5426\u662F\u201C\u51FD\u6570\u201D
// JSON\u65E0\u6CD5\u4F7F\u7528\u51FD\u6570\u503C\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u4F7F\u7528"{{...}}"\u6765\u6807\u8BB0\u4E3A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528@\u6807\u8BB0\uFF0C\u4E0D\u63A8\u8350\u3002
export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // \u4E0D\u518D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u4E86\uFF01
  if (typeof func !== 'string') return false;
  // \u8FD9\u6837\u7684pattern {{.....}}
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

// TODO: \u4E24\u4E2A\u4F18\u5316\uFF0C1. \u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684path\u6765\u5224\u65AD\uFF0C\u907F\u514D\u4E00\u4E9B\u91CD\u590D\u8BA1\u7B97
export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      // TODO: dataPath \u8FD9\u8FB9\u8981\u5904\u7406\u4E00\u4E0B\uFF0C\u5426\u5219rootValue\u7C7B\u7684\u6CA1\u6709\u6548\u679C
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
      // console.log(
      //   formData.materialType,
      //   dataPath,
      //   parseSingleExpression(value, formData, dataPath)
      // );
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

// \u5224\u65ADschema\u4E2D\u662F\u5426\u6709\u5C5E\u6027\u503C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
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

// \u4F8B\u5982\u5F53\u524Ditem\u7684id = '#/obj/input'  propName: 'ui:labelWidth' \u5F80\u4E0A\u4E00\u76F4\u627E\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u662Fundefined\u7684\u503C TODO: \u770B\u770B\u662F\u5426ok
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
}`,je=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Fe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ce=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,rn=`export const basic = {
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
};`,De=`import React, { Component } from 'react';
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

export default Root;`,Rn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,jn=`{
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
}`,hn=`import { Select } from 'antd';
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

export default SearchInput;`,sn=`import React from 'react';
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

export default Demo;`,Ve=`/* PrismJS 1.16.0
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
}`,Bn=`.debug * {
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
}`,Pn=`import React, { Component } from 'react';
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

export default Root;`,vn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Ne=`{
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
}`,qn=`import { Select } from 'antd';
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

export default SearchInput;`,wn=`import React from 'react';
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

export default Demo;`,_n=`import { monaco } from 'react-monaco-editor';

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

export { valueMap, keySuggestions };`,ot=`.markdown p {
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
}`,et=`import React from 'react';
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
            api: searchApi,
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

export default withTable(Demo);`,ut=`import React from 'react';
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

export default withTable(Demo);`,Mn=`import React from 'react';
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

export default withTable(Demo);`,nt=`import React, { useEffect } from 'react';
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

export default withTable(Demo);`,$n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,lt=`import React from 'react';
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

export default Demo;`,Kn=`import React from 'react';
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

export default Demo;`,An=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Vn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,tt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Jn=dn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return s=function(R,d){if(!d&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var D=E(d);if(D&&D.has(R))return D.get(R);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in R)if(g!=="default"&&Object.prototype.hasOwnProperty.call(R,g)){var c=t?Object.getOwnPropertyDescriptor(R,g):null;c&&(c.get||c.set)?Object.defineProperty(m,g,c):m[g]=R[g]}return m.default=R,D&&D.set(R,m),m},E=function(R){if(typeof WeakMap!="function")return null;var d=new WeakMap,D=new WeakMap;return(E=function(t){return t?D:d})(R)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,i=(0,B.t0)(B.t1),B.t2=s,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,v=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,p=function(){var R=(0,v.useState)("Line"),d=(0,i.default)(R,2),D=d[0],m=d[1],t={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[D];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},B.abrupt("return",p);case 18:case"end":return B.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return i.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(B,w,R){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},B),i.default.createElement("p",null,JSON.stringify(w)),i.default.createElement("p",null,JSON.stringify(R)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return s=function(R,d){if(!d&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var D=E(d);if(D&&D.has(R))return D.get(R);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in R)if(g!=="default"&&Object.prototype.hasOwnProperty.call(R,g)){var c=t?Object.getOwnPropertyDescriptor(R,g):null;c&&(c.get||c.set)?Object.defineProperty(m,g,c):m[g]=R[g]}return m.default=R,D&&D.set(R,m),m},E=function(R){if(typeof WeakMap!="function")return null;var d=new WeakMap,D=new WeakMap;return(E=function(t){return t?D:d})(R)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,i=(0,B.t0)(B.t1),B.t2=s,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,v=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,p=function(){var R=(0,v.useState)(!1),d=(0,i.default)(R,2),D=d[0],m=d[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:D,onChange:function(){return m(!D)}})),v.default.createElement(b.PivotTable,{leftExpandable:D,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},B.abrupt("return",p);case 18:case"end":return B.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d,D;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var l=o(a);if(l&&l.has(c))return l.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in c)if(A!=="default"&&Object.prototype.hasOwnProperty.call(c,A)){var L=M?Object.getOwnPropertyDescriptor(c,A):null;L&&(L.get||L.set)?Object.defineProperty(h,A,L):h[A]=c[A]}return h.default=c,l&&l.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(o=function(M){return M?l:a})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=B,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=t.sent,w=b.default.TextArea,R={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var c=(0,E.useState)(JSON.stringify(R)),a=(0,v.default)(c,2),l=a[0],h=a[1],M=(0,E.useState)({}),A=(0,v.default)(M,2),L=A[0],pe=A[1],Ce=function(){try{var Tn=(0,p.updateSchemaToNewVersion)(JSON.parse(l));pe(Tn)}catch(dt){console.log(dt)}},on=function(Tn){h(Tn.target.value)},gn=function(){h(JSON.stringify(JSON.parse(l),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:l,onChange:on}),E.default.createElement(i.default,{style:{marginRight:12},onClick:gn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:Ce},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},D=d,t.abrupt("return",D);case 38:case"end":return t.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w;return C.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=s(t);if(g&&g.has(m))return g.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var h=a?Object.getOwnPropertyDescriptor(m,l):null;h&&(h.get||h.set)?Object.defineProperty(c,l,h):c[l]=m[l]}return c.default=m,g&&g.set(m,c),c},s=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(s=function(a){return a?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,E=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(){var m=(0,E.useForm)(),t=function(c,a){console.log("formData:",c,"errors",a)};return v.default.createElement("div",null,v.default.createElement(E.default,{form:m,schema:o,onFinish:t}),v.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=B,d.abrupt("return",w);case 27:case"end":return d.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d,D,m;return C.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return R=function(a,l){if(!l&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var h=w(l);if(h&&h.has(a))return h.get(a);var M={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in a)if(L!=="default"&&Object.prototype.hasOwnProperty.call(a,L)){var pe=A?Object.getOwnPropertyDescriptor(a,L):null;pe&&(pe.get||pe.set)?Object.defineProperty(M,L,pe):M[L]=a[L]}return M.default=a,h&&h.set(a,M),M},w=function(a){if(typeof WeakMap!="function")return null;var l=new WeakMap,h=new WeakMap;return(w=function(A){return A?h:l})(a)},f=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=f,g.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,i=(0,g.t0)(g.t1),g.t2=f,g.next=13,e.e(83).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,v=(0,g.t2)(g.t3),g.t4=f,g.next=18,e.e(84).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,b=(0,g.t4)(g.t5),g.t6=f,g.next=23,e.e(75).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,E=(0,g.t6)(g.t7),g.t8=f,g.next=28,e.e(74).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,s=(0,g.t8)(g.t9),g.t10=f,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,p=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return o=g.sent,g.t12=R,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,B=(0,g.t12)(g.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},D=function(c){(0,E.default)(l,c);var a=(0,s.default)(l);function l(){var h;(0,v.default)(this,l);for(var M=arguments.length,A=new Array(M),L=0;L<M;L++)A[L]=arguments[L];return h=a.call.apply(a,[this].concat(A)),h.onFinish=function(pe,Ce){console.log("formData:",pe,"errors",Ce)},h}return(0,b.default)(l,[{key:"render",value:function(){var M=this.props.form;return p.default.createElement("div",null,p.default.createElement(B.default,{form:M,schema:d,onFinish:this.onFinish}),p.default.createElement(i.default,{type:"primary",onClick:M.submit},"\u63D0\u4EA4"))}}]),l}(p.default.Component),m=(0,B.connectForm)(D),g.abrupt("return",m);case 47:case"end":return g.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w;return C.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=s(t);if(g&&g.has(m))return g.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var h=a?Object.getOwnPropertyDescriptor(m,l):null;h&&(h.get||h.set)?Object.defineProperty(c,l,h):c[l]=m[l]}return c.default=m,g&&g.set(m,c),c},s=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(s=function(a){return a?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,E=(0,d.t4)(d.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},B=function(){var m=(0,E.useForm)(),t=function(c,a){a.length>0?alert("errors:"+JSON.stringify(a)):alert("formData:"+JSON.stringify(c,null,2))};return v.default.createElement("div",null,v.default.createElement(E.default,{form:m,schema:o,onFinish:t}),v.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=B,d.abrupt("return",w);case 27:case"end":return d.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b=function(B){return{type:"object",displayType:B,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(v.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(v.default,{schema:b("column")}))},p.abrupt("return",E);case 14:case"end":return p.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(v.default,{readOnly:!0,schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(v.default,{labelWidth:"200",schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d,D;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var l=w(a);if(l&&l.has(c))return l.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in c)if(A!=="default"&&Object.prototype.hasOwnProperty.call(c,A)){var L=M?Object.getOwnPropertyDescriptor(c,A):null;L&&(L.get||L.set)?Object.defineProperty(h,A,L):h[A]=c[A]}return h.default=c,l&&l.set(c,h),h},w=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(w=function(M){return M?l:a})(c)},f=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.t8=R,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,s=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return p=t.sent,t.t10=R,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,o=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return B=t.sent,d=function(){var c=(0,o.useForm)(),a=(0,s.useState)({}),l=(0,E.default)(a,2),h=l[0],M=l[1],A=function(){(0,B.fakeApi)("xxx/getForm").then(function(Ce){c.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,B.delay)(1e3).then(function(pe){M({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var L=function(Ce,on){on.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(on.map(function(gn){return gn.name}))):(0,B.fakeApi)("xxx/submit",Ce).then(function(gn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(o.default,{form:c,schema:h,onFinish:L}),s.default.createElement(i.default,null,s.default.createElement(v.default,{onClick:A},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(v.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},D=d,t.abrupt("return",D);case 48:case"end":return t.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d,D;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var l=B(a);if(l&&l.has(c))return l.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in c)if(A!=="default"&&Object.prototype.hasOwnProperty.call(c,A)){var L=M?Object.getOwnPropertyDescriptor(c,A):null;L&&(L.get||L.set)?Object.defineProperty(h,A,L):h[A]=c[A]}return h.default=c,l&&l.set(c,h),h},B=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(B=function(M){return M?l:a})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=f,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.t8=w,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=t.sent,R={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var c=(0,p.useForm)(),a=function(M,A){A.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(A.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",M).then(function(L){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},l=function(M){var A=M.data,L=M.errors,pe=M.schema,Ce=(0,v.default)(M,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(on){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:c,schema:R,beforeFinish:l,onFinish:a}),E.default.createElement(i.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},D=d,t.abrupt("return",D);case 42:case"end":return t.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d,D;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var l=B(a);if(l&&l.has(c))return l.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in c)if(A!=="default"&&Object.prototype.hasOwnProperty.call(c,A)){var L=M?Object.getOwnPropertyDescriptor(c,A):null;L&&(L.get||L.set)?Object.defineProperty(h,A,L):h[A]=c[A]}return h.default=c,l&&l.set(c,h),h},B=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(B=function(M){return M?l:a})(c)},f=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return s=t.sent,t.t8=w,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=t.sent,R={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var c=(0,p.useForm)(),a=function(M,A){A.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(A.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",M).then(function(L){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},l=function(){(0,o.fakeApi)("xxx/getForm").then(function(M){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:c,schema:R,onFinish:a}),E.default.createElement(i.default,null,E.default.createElement(v.default,{onClick:l},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),E.default.createElement(v.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},D=d,t.abrupt("return",D);case 44:case"end":return t.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d;return C.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return B=function(g,c){if(!c&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var a=o(c);if(a&&a.has(g))return a.get(g);var l={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in g)if(M!=="default"&&Object.prototype.hasOwnProperty.call(g,M)){var A=h?Object.getOwnPropertyDescriptor(g,M):null;A&&(A.get||A.set)?Object.defineProperty(l,M,A):l[M]=g[M]}return l.default=g,a&&a.set(g,l),l},o=function(g){if(typeof WeakMap!="function")return null;var c=new WeakMap,a=new WeakMap;return(o=function(h){return h?a:c})(g)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=f,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,v=(0,m.t2)(m.t3),m.t4=B,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return E=m.sent,m.t6=B,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,s=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=m.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},R=function(){var g=(0,s.useForm)(),c=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},a=function(h,M){M.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(A){return A.name}))):v.default.info(JSON.stringify(h))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(s.default,{form:g,schema:w,onMount:c,onFinish:a}),b.default.createElement(i.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=R,m.abrupt("return",d);case 37:case"end":return m.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o;return C.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(d,D){if(!D&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(D);if(m&&m.has(d))return m.get(d);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var a=g?Object.getOwnPropertyDescriptor(d,c):null;a&&(a.get||a.set)?Object.defineProperty(t,c,a):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},b=function(d){if(typeof WeakMap!="function")return null;var D=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:D})(d)},f=e("K+nK"),w.t0=f,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,v=(0,w.t2)(w.t3),s={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var d=(0,v.useForm)();return i.default.createElement(v.default,{form:d,schema:s})},o=p,w.abrupt("return",o);case 17:case"end":return w.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(v.default,{schema:b.expression})},p.abrupt("return",E);case 16:case"end":return p.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:rn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B;return C.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return E=function(D,m){if(!m&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var t=b(m);if(t&&t.has(D))return t.get(D);var g={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in D)if(a!=="default"&&Object.prototype.hasOwnProperty.call(D,a)){var l=c?Object.getOwnPropertyDescriptor(D,a):null;l&&(l.get||l.set)?Object.defineProperty(g,a,l):g[a]=D[a]}return g.default=D,t&&t.set(D,g),g},b=function(D){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(b=function(c){return c?t:m})(D)},R.t0=E,R.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return R.t1=R.sent,f=(0,R.t0)(R.t1),R.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=R.sent,R.t2=E,R.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return R.t3=R.sent,v=(0,R.t2)(R.t3),s=function(D){return new Promise(function(m){return setTimeout(m,D)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var D=(0,v.useForm)(),m=function(){D.setValues({input1:"hello world"}),s(3e3).then(function(g){D.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(v.default,{form:D,schema:p,onMount:m})},B=o,R.abrupt("return",B);case 20:case"end":return R.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),window.hello=function(B){var w=B.value;console.log(w)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(v.default,{schema:b})},s=E,o.abrupt("return",s);case 16:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o;return C.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(d,D){if(!D&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(D);if(m&&m.has(d))return m.get(d);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var a=g?Object.getOwnPropertyDescriptor(d,c):null;a&&(a.get||a.set)?Object.defineProperty(t,c,a):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},b=function(d){if(typeof WeakMap!="function")return null;var D=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:D})(d)},w.t0=E,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,f=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=w.sent,w.t2=E,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,v=(0,w.t2)(w.t3),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var d=(0,v.useForm)(),D={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){d.setValueByPath("input2",t)}};return f.default.createElement(v.default,{form:d,schema:s,watch:D})},o=p,w.abrupt("return",o);case 19:case"end":return w.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w;return C.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=s(t);if(g&&g.has(m))return g.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var h=a?Object.getOwnPropertyDescriptor(m,l):null;h&&(h.get||h.set)?Object.defineProperty(c,l,h):c[l]=m[l]}return c.default=m,g&&g.set(m,c),c},s=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(s=function(a){return a?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=p,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,E=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},B=function(){var m=(0,E.useForm)(),t=function(a,l){l.length>0?alert("errorFields:"+JSON.stringify(l)):alert("formData:"+JSON.stringify(a,null,2))},g={input1:function(a){a&&a.length>2?m.setSchemaByPath("obj1.select",function(l){var h=l.enumNames;return{enumNames:h.map(function(M){return M+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(E.default,{form:m,schema:o,onFinish:t,watch:g}),v.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=B,d.abrupt("return",w);case 27:case"end":return d.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d,D;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var l=o(a);if(l&&l.has(c))return l.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in c)if(A!=="default"&&Object.prototype.hasOwnProperty.call(c,A)){var L=M?Object.getOwnPropertyDescriptor(c,A):null;L&&(L.get||L.set)?Object.defineProperty(h,A,L):h[A]=c[A]}return h.default=c,l&&l.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(o=function(M){return M?l:a})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=f,t.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.t4=f,t.next=20,e.e(85).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.t8=B,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},R=function(c){return console.log("widget props:",c),E.default.createElement(v.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},c))},d=function(){var c=(0,p.useForm)();return E.default.createElement("div",null,E.default.createElement(p.default,{form:c,schema:w,widgets:{site:R},onFinish:function(l){return alert(JSON.stringify(l,null,2))}}),E.default.createElement(i.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},D=d,t.abrupt("return",D);case 40:case"end":return t.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w;return C.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=p(t);if(g&&g.has(m))return g.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var h=a?Object.getOwnPropertyDescriptor(m,l):null;h&&(h.get||h.set)?Object.defineProperty(c,l,h):c[l]=m[l]}return c.default=m,g&&g.set(m,c),c},p=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(p=function(a){return a?g:t})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,v=(0,d.t2)(d.t3),d.t4=o,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,b=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return E=d.sent,d.t6=o,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,s=(0,d.t6)(d.t7),B=function(){var m=(0,s.useForm)({logOnMount:function(a){console.log("onMount",a)},logOnSubmit:function(a){console.log("onSubmit",a)}}),t={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},g=function(a,l){l.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(l.map(function(h){return h.name}))):v.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(s.default,{id:"my-demo-form",form:m,schema:t,onFinish:g}),b.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=B,d.abrupt("return",w);case 33:case"end":return d.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o;return C.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var d=(0,v.useForm)(),D=function(t,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(t))};return i.default.createElement("div",null,i.default.createElement(v.default,{form:d,schema:s,onFinish:D}),i.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},E=function(d,D){if(!D&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(D);if(m&&m.has(d))return m.get(d);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var a=g?Object.getOwnPropertyDescriptor(d,c):null;a&&(a.get||a.set)?Object.defineProperty(t,c,a):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},b=function(d){if(typeof WeakMap!="function")return null;var D=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:D})(d)},f=e("K+nK"),w.t0=f,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,v=(0,w.t2)(w.t3),s={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=p,w.abrupt("return",o);case 17:case"end":return w.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B,w,R,d,D;return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var l=o(a);if(l&&l.has(c))return l.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in c)if(A!=="default"&&Object.prototype.hasOwnProperty.call(c,A)){var L=M?Object.getOwnPropertyDescriptor(c,A):null;L&&(L.get||L.set)?Object.defineProperty(h,A,L):h[A]=c[A]}return h.default=c,l&&l.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,l=new WeakMap;return(o=function(M){return M?l:a})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=B,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=t.sent,w=b.default.TextArea,R={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var c=(0,E.useState)(JSON.stringify(R)),a=(0,v.default)(c,2),l=a[0],h=a[1],M=(0,E.useState)({}),A=(0,v.default)(M,2),L=A[0],pe=A[1],Ce=function(){try{var Tn=(0,p.updateSchemaToNewVersion)(JSON.parse(l));pe(Tn)}catch(dt){console.log(dt)}},on=function(Tn){h(Tn.target.value)},gn=function(){h(JSON.stringify(JSON.parse(l),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:l,onChange:on}),E.default.createElement(i.default,{style:{marginRight:12},onClick:gn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:Ce},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},D=d,t.abrupt("return",D);case 38:case"end":return t.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B;return C.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return o=function(){var D=(0,v.useState)({}),m=(0,i.default)(D,2),t=m[0],g=m[1],c=(0,v.useState)([]),a=(0,i.default)(c,2),l=a[0],h=a[1],M=(0,v.useState)(!1),A=(0,i.default)(M,2),L=A[0],pe=A[1],Ce=(0,b.useForm)({formData:t,onChange:g,onValidate:h,showValidate:L});(0,v.useEffect)(function(){Ce.init()},[]);var on=function(){pe(!0),l.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(l))):alert(JSON.stringify(t))};return v.default.createElement("div",null,v.default.createElement(b.default,{form:Ce,schema:p}),v.default.createElement("button",{onClick:on},"\u63D0\u4EA4"))},s=function(D,m){if(!m&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var t=E(m);if(t&&t.has(D))return t.get(D);var g={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in D)if(a!=="default"&&Object.prototype.hasOwnProperty.call(D,a)){var l=c?Object.getOwnPropertyDescriptor(D,a):null;l&&(l.get||l.set)?Object.defineProperty(g,a,l):g[a]=D[a]}return g.default=D,t&&t.set(D,g),g},E=function(D){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(E=function(c){return c?t:m})(D)},f=e("K+nK"),R.t0=f,R.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return R.t1=R.sent,i=(0,R.t0)(R.t1),R.t2=s,R.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return R.t3=R.sent,v=(0,R.t2)(R.t3),R.t4=s,R.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return R.t5=R.sent,b=(0,R.t4)(R.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},B=o,R.abrupt("return",B);case 22:case"end":return R.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(v.default,{schema:b.basic})},p.abrupt("return",E);case 16:case"end":return p.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:rn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(v.default,{schema:b.titleTrick})},p.abrupt("return",E);case 16:case"end":return p.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:rn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:De},"main.js":{import:"./main",content:Rn},"json/simplest.json":{import:"./json/simplest.json",content:jn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:hn},"monaco/index.js":{import:"./monaco",content:sn},"theme.css":{import:"./theme.css",content:Ve},"index.css":{import:"./index.css",content:Bn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.6"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Pn},"main.js":{import:"./main",content:vn},"json/simplest.json":{import:"./json/simplest.json",content:Ne},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:qn},"monaco/index.js":{import:"./monaco",content:wn},"suggestionsMap.js":{import:"./suggestionsMap",content:_n},"index.css":{import:"./index.css",content:ot}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.6"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:et}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:ut}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:nt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s,p,o,B;return C.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return f=e("K+nK"),R.t0=f,R.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return R.t1=R.sent,i=(0,R.t0)(R.t1),R.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"P2DI"));case 8:for(v=R.sent,b=[],E=0;E<6;E++)b.push({id:E.toString(),title:"\u6807\u9898".concat(E+1),created_at:new Date().getTime()});return s={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(D,m){return i.default.createElement("a",{onClick:function(){return alert(D.title)}},"\u7F16\u8F91")}}],o=function(){var D=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(v.Search,{schema:s,api:D}),i.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},B=(0,v.withTable)(o),R.abrupt("return",B);case 16:case"end":return R.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.4"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){var f,i,v,b,E,s;return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(69)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},E=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(v.default,{defaultValue:b}))},s=E,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:lt}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Kn},"index.less":{import:"./index.less",content:An}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var N=Object(V.a)(C.a.mark(function T(){return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return N.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:tt},"index.less":{import:"./index.less",content:An}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Dn,dn,e){},Zs1V:function(Dn){Dn.exports=JSON.parse("{}")},gQ4F:function(Dn,dn,e){"use strict";e.r(dn);var V=e("q1tI"),n=e.n(V),C=e("dEAq"),W=e.n(C),oe=e("0zqC"),J=e("ZpkN"),je=e("JjdP"),Fe=n.a.memo(je.default["migrate-demo"].component),ce=n.a.memo(je.default["migrate-demo-1"].component);dn.default=rn=>(n.a.useEffect(()=>{rn!=null&&rn.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(rn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u5347\u7EA7\u65B9\u6848\uFF08\u63A8\u8350\uFF09"},n.a.createElement(C.AnchorLink,{to:"#\u5347\u7EA7\u65B9\u6848\uFF08\u63A8\u8350\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5347\u7EA7\u65B9\u6848\uFF08\u63A8\u8350\uFF09"),n.a.createElement("h2",{id:"\u4E09\u4E2A\u6539\u53D8"},n.a.createElement(C.AnchorLink,{to:"#\u4E09\u4E2A\u6539\u53D8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u4E2A\u6539\u53D8"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v1.0.0 \u7684\u5347\u7EA7\uFF0C\u4ECE\u4F7F\u7528\u65B9\u89C6\u89D2\u6765\u770B\uFF0C\u6700\u4E3B\u8981\u7684\u53D8\u52A8\u5F52\u7ED3\u4E3A\u4E09\u6761\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u63D0\u4EA4\u7684\u65B9\u6CD5\u6536\u675F\uFF08\u5373\u7EDF\u4E00\u63D0\u4F9B submit \u65B9\u6CD5\uFF09\uFF0CformData \u548C\u6821\u9A8C\u4FE1\u606F\u5185\u7F6E")),n.a.createElement("li",null,n.a.createElement("p",null,"Schema \u4E66\u5199\u89C4\u5219\u66F4\u52A0\u6E05\u6670\uFF0C\u66F4\u52A0\u8D34\u8FD1\u7EC4\u4EF6 props")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u518D\u8981\u201C\u5957\u58F3\u201D\uFF0C\u5F88\u591A antd \u7EC4\u4EF6\u76F4\u63A5\u62FF\u6765\u80FD\u7528"))),n.a.createElement("p",null,"\u7B2C 1 \u6761\u662F\u4E3A\u4E86\u66F4\u52A0\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u540E\u4E24\u6761\u5219\u4E3A\u4E86\u66F4\u52A0\u5FEB\u6377\u548C\u8212\u9002\u7684\u5F00\u53D1\u4F53\u9A8C\u3002FormRender 1.0 \u5E26\u6765\u4E86\u54EA\u4E9B\u65B0\u529F\u80FD\uFF0C\u8BE6\u89C1\u6587\u7AE0\u5E95\u90E8 ",n.a.createElement("code",null,"Changelog \u601D\u8003")),n.a.createElement("h2",{id:"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"},n.a.createElement(C.AnchorLink,{to:"#\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),n.a.createElement(J.a,{code:`import React, { useState } from 'react';
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

export default Demo;`,lang:"js"}),n.a.createElement("h3",{id:"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"},n.a.createElement(C.AnchorLink,{to:"#\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"),n.a.createElement("p",null,"\u5B8C\u5168\u4F7F\u7528\u65B0 api\uFF0CformData \u548C onChange \u8FD9\u4E9B\u539F\u672C\u66B4\u9732\u5728\u5916\u7684\u5C5E\u6027\u6536\u675F\uFF0Csubmit \u65B9\u6CD5\u7531 form \u5B9E\u4F8B\u63D0\u4F9B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8FC1\u79FB\u4E5F\u5FEB\u7684\uFF0C\u53EA\u662F\u8981\u6CE8\u610F\u6240\u6709\u5728\u5916\u90E8\u4F7F\u7528\u5230 formData \u7684\u573A\u666F\uFF0C\u9700\u8981\u66FF\u6362\u4E3A ",n.a.createElement("code",null,"form.getValues()"),"\uFF0C\u6240\u6709\u4F7F\u7528\u5230 onChange \u7684\u5730\u65B9\u9700\u8981\u4FEE\u6539\u4E3A ",n.a.createElement("code",null,"form.setValues()"))),n.a.createElement(oe.default,je.default["migrate-demo"].previewerProps,n.a.createElement(Fe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u7531\u4E8E\u65B0\u7248\u7684 formData/onChange/validate/onValidate \u5168\u90E8\u5185\u7F6E\u4E86\uFF0C\u6240\u4EE5\u5728\u8FC1\u79FB\u65F6\uFF0C\u5916\u90E8\u6240\u6709\u4F7F\u7528\u5230\u4E09\u8005\u7684\u5730\u65B9\u4E00\u5F8B\u4F7F\u7528 form \u65B9\u6CD5\u66FF\u6362\uFF1A"),n.a.createElement(J.a,{code:`formData  ->  form.getValues()
onChange  ->  form.setValues(data)
validate  ->  form.errorFields
onValidate  ->  \u76F4\u63A5\u53BB\u6389`,lang:"js"}),n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4FA7\u7684 0.x \u4E0E 1.x \u7684\u4F7F\u7528\u5BF9\u6BD4\uFF1A"),n.a.createElement(J.a,{code:`// 0.x
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
};`,lang:"js"}),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"onChange")," \u4E0D\u518D\u63A5\u6536 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u800C\u6539\u4E3A\u66F4\u4E3A\u81EA\u7136\u7684\u53EA\u6709\u4E00\u4E2A\u5165\u53C2 value"),n.a.createElement("li",null,"\u6240\u6709",n.a.createElement("code",null,"ui:options"),"\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u5728 props \u91CC\u62FF\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u4ECE props.options \u91CC\u83B7\u53D6 \uFF08ui:options \u5DF2\u66F4\u540D\u4E3A props\uFF0C\u4E0D\u8FC7\u5728\u9876\u5C42\u505A\u4E86 schema \u5B57\u6BB5\u7684\u517C\u5BB9\uFF09")),n.a.createElement("h2",{id:"schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8"},n.a.createElement(C.AnchorLink,{to:"#schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u7EC6\u8282\u4E0A\u7684\u6539\u52A8"),n.a.createElement("p",null,"\u5355\u9009\u7EC4\u4EF6\u4E0D\u518D\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u9ED8\u8BA4\u503C\u4E3A undefined\uFF0C\u9664\u975E\u901A\u8FC7 default \u5B57\u6BB5\u6307\u660E\u3002"),n.a.createElement(J.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}`,lang:"js"}),n.a.createElement("h2",{id:"\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A"},n.a.createElement(C.AnchorLink,{to:"#\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65E7\u7248 schema \u8F6C\u6362\u5668\uFF1A")),n.a.createElement(oe.default,je.default["migrate-demo-1"].previewerProps,n.a.createElement(ce,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"changelog-\u601D\u8003"},n.a.createElement(C.AnchorLink,{to:"#changelog-\u601D\u8003","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Changelog \u601D\u8003"),n.a.createElement("p",null,"\u5728\u6700\u540E\u7F57\u5217\u4E00\u4E0B\u7EC6\u8282\u4E0A FormRender 0.x -> 1.0 \u7EC6\u8282\u4E0A\u7684\u6539\u52A8 & \u601D\u8003"),n.a.createElement("h3",{id:"\u529F\u80FD\u589E\u5F3A"},n.a.createElement(C.AnchorLink,{to:"#\u529F\u80FD\u589E\u5F3A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD\u589E\u5F3A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5C55\u793A\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5217\u8868\u7684\u5C55\u793A\u652F\u6301\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5206\u522B\u652F\u6301\u6BCF\u4E2A item 1-2 \u4E2A\u5143\u7D20\uFF0C3-5 \u4E2A\u5143\u7D20\u548C\u590D\u6742\u7ED3\u6784"),n.a.createElement("li",null,"\u5BF9\u8C61\u7684\u5C55\u793A\u652F\u6301\u4E8C\u79CD\u6A21\u5F0F"),n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A\u548C antd \u6548\u679C\u4E00\u81F4"),n.a.createElement("li",null,"\u5C55\u793A\u7C7B\u578B\u9664\u4E86\u57FA\u7840\u7684 column \u548C row\uFF0C\u8FD8\u652F\u6301\u4E86 inline \u6A21\u5F0F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5185\u7F6E\u7EC4\u4EF6\u66F4\u4E30\u5BCC")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u65B0\u589E\u4E86 rate\uFF0CtreeSelect, cascader \u7B49\u7EC4\u4EF6\u7684\u5185\u7F6E\u652F\u6301"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u66F4\u4FBF\u6377\uFF0C\u529F\u80FD\u66F4\u5F3A\u5927")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"props \u76F4\u63A5\u900F\u4F20\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4ECE options \u5B57\u6BB5\u91CC\u53BB\u53D6\u5F97")),n.a.createElement("li",null,n.a.createElement("p",null,"onChange \u65B9\u6CD5\u7684\u5165\u53C2\u4E0D\u518D\u9700\u8981\u4F20 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u8FD9\u4E2A\u8BBE\u8BA1\u5176\u5B9E\u5F88\u4E0D\u81EA\u7136\u548C\u6CA1\u6709\u5FC5\u8981\uFF09\uFF0C\u540C\u65F6\u5982\u679C\u539F\u751F\u7EC4\u4EF6\u7684 onChange \u8FD4\u56DE\u7684\u662F event\uFF0C\u4E5F\u4F1A\u5904\u7406\u4E00\u6B65\u81EA\u52A8\u80FD\u62FF\u5230 value \u503C")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u4E86 onItemChange(namePath, value) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u8868\u5355\u4EFB\u4F55\u6570\u636E\u7684\u503C")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u8FD9\u4E9B\u7EC6\u8282\u7684\u76EE\u6807\uFF0C\u662F\u8BA9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4E66\u5199\u8D34\u8FD1\u62FF\u6765\u4E00\u4E2A\u7EC4\u4EF6\u76F4\u63A5\u80FD\u7528\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u4E00\u6837\u518D\u7B80\u5355\u7684\u573A\u666F\u4E5F\u9700\u8981\u505A\u4E00\u6B65\u5305\u88C5\u5904\u7406\uFF0C\u4ECE\u539F\u672C\u7684\uFF1A")),n.a.createElement(J.a,{code:`const schema = {
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
};`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53D8\u4E3A\uFF1A")),n.a.createElement(J.a,{code:`const schema = {
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
};`,lang:"js"})))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6821\u9A8C\u4E30\u5BCC\u5EA6\u548C\u4F53\u9A8C\u5927\u5E45\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A & \u5C55\u793A\u5B9E\u9645\u7EC8\u4E8E\u7B26\u5408\u7528\u6237\u4E60\u60EF\u4E86"),n.a.createElement("li",null,"\u4E0D\u518D\u53EA\u652F\u6301 pattern \u6821\u9A8C\u4E86\uFF0C\u73B0\u5728\u652F\u6301\u5305\u62EC\u81EA\u5B9A\u4E49 validator \u7684\u6240\u6709 antd form \u652F\u6301\u7684\u6821\u9A8C"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5F02\u6B65\u4E86"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5916\u90E8\u6821\u9A8C\u7ED3\u679C\u56DE\u586B\u5C55\u793A\u4E86"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4ED6")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u672A\u538B\u7F29\u7684\u5305\u4F53\u79EF\u4ECE 76k -> 11k"),n.a.createElement("li",null,"\u5BF9 typescript \u7684\u5185\u7F6E\u652F\u6301"),n.a.createElement("li",null,"\u6E32\u67D3\u4F1A\u6839\u636E schema \u7684\u7ED3\u6784\u6765\u6E32\u67D3\uFF0C\u4E0D\u518D\u4F1A\u56E0\u4E3A formData \u503C\u7684\u987A\u5E8F\u53D8\u5316\u5F71\u54CD\u5230\u5C55\u793A"),n.a.createElement("li",null,"\u63D0\u4EA4\u7684 formData\uFF0C\u4E0D\u5C55\u793A\u7684 key \u4E0D\u4F1A\u8FD4\u56DE")))),n.a.createElement("h3",{id:"\u8BBE\u8BA1\u53D6\u820D"},n.a.createElement(C.AnchorLink,{to:"#\u8BBE\u8BA1\u53D6\u820D","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u53D6\u820D"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6682\u65F6\u4E0D\u652F\u6301 fusion \u4E86"),"\uFF1Afusion \u4E0E antd \u5C55\u793A\u4E0A\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u7EC4\u4EF6 api \u672C\u8EAB\u4EE5\u53CA\u6784\u5EFA\u5C42\u9762\u7684\u914D\u7F6E\u4E0A\u8FD8\u662F\u6709\u4E0D\u5C11\u4E0D\u540C\u7684\uFF0C\u5BF9\u4E24\u8005\u7684\u540C\u65F6\u652F\u6301\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u3002FormRender \u9009\u62E9\u6682\u65F6\u653E\u5F03 fusion\uFF0C\u66F4\u52A0\u8D34\u5408 antd\uFF0C\u5728\u529F\u80FD\u6DF1\u5165\u5B9E\u73B0\u548C\u8FED\u4EE3\u6548\u7387\u4E0A\u90FD\u4F1A\u6709\u5F88\u5927\u7684\u63D0\u9AD8\u3002\u4F46\u7EC4\u4EF6\u5E93\u7684\u5165\u53E3\u662F\u4E00\u76F4\u5F00\u653E\u7740\u7684\uFF08widgets props\uFF09\uFF0C\u6B22\u8FCE pr \u652F\u6301 fusion \u4FA7\u7684\u7EC4\u4EF6\u7684\u72EC\u7ACB\u652F\u6301\u3002")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u51FD\u6570\u8868\u8FBE\u5F0F"),"\uFF1A\u7531\u4E8E schema \u53EF\u4EE5\u662F js \u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E4B\u524D\u652F\u6301 schema \u91CC\u6709\u51FD\u6570\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5728\u6E32\u67D3\u524D\u8BA1\u7B97\u51FA\u51FD\u6570\u7684 return \u4F5C\u4E3A\u6E32\u67D3\u503C\u3002\u4F46\u7EC4\u4EF6\u7684 props \u4EE5\u53CA\u6821\u9A8C\u51FD\u6570\u53EF\u80FD\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u662F\u4E0D\u5E0C\u671B\u88AB\u63D0\u524D\u8BA1\u7B97\u7684\uFF0C\u800C\u53EA\u662F\u4F5C\u4E3A props \u4F20\u5165\u3002FR \u5E76\u6CA1\u6709\u5F88\u597D\u7684\u529E\u6CD5\u533A\u5206\u4E00\u4E2A\u51FD\u6570\u662F\u9700\u8981\u88AB\u76F4\u63A5\u6267\u884C\u8FD8\u662F\u539F\u6837\u4F5C\u4E3A\u51FD\u6570\u900F\u4F20\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u53D6\u820D\u662F\uFF0C\u4E0D\u5141\u8BB8\u51FD\u6570 props \u6216\u8005\u4E0D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u3002\u7531\u4E8E\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u6709\u5B57\u7B26\u4E32\u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u529F\u80FD\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5141\u8BB8\u51FD\u6570\u4F5C\u4E3A props\uFF0C\u6211\u4EEC\u4E0D\u518D\u652F\u6301\u51FD\u6570\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u3002"),n.a.createElement(J.a,{code:`showMore: {
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
}`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u4E0D\u518D\u8BA1\u7B97\u521D\u59CB\u503C"),"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u5185\u90E8\u7684\u6539\u52A8\u3002\u65B0\u7684 FormRender\uFF0C\u4E0D\u4F1A\u6BCF\u6B21 onChange \u540E\u90FD\u6267\u884C resolve \u751F\u6210\u4E00\u4EFD formData \u7684\u9AA8\u67B6\uFF0C\u6CA1\u6709\u586B\u7684\u6846\u7684\u503C\u5C31\u662F undefined\u3002\u800C\u53EA\u5728\u63D0\u4EA4\u548C\u6821\u9A8C\u65F6\u4F1A\u751F\u6210\u9AA8\u67B6\u3002\u8FD9\u907F\u514D\u4E86\u5F88\u591A\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5C1D\u8BD5\u4FEE\u6539 formData \u65F6\u5BB9\u6613\u4EA7\u751F\u6B7B\u5FAA\u73AF\u6216\u8005\u4FEE\u6539\u65E0\u6548\u7684\u95EE\u9898\uFF0C\u4E5F\u907F\u514D\u4E86\u5916\u90E8\u6CA1\u6709\u5F88\u597D\u7684\u65B9\u6CD5\u62FF\u5230\u9ED1\u7BB1\u7684 resolve \u540E\u7684\u6570\u636E\u3002")))))))},p8sG:function(Dn,dn,e){"use strict";Dn.exports=e("80pN")}}]);
