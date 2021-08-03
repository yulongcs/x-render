(window.webpackJsonp=window.webpackJsonp||[]).push([[53,13],{"0zqC":function(Rn,dn,e){"use strict";e.r(dn);var J=e("tJVT"),n=e("q1tI"),v=e.n(n),x=e("wx14"),oe=e("rePB"),W=e("ODXe"),De=e("U8pU"),Fe=e("Ff2n"),ce=e("VTBJ"),rn=e("TSYQ"),Re=e.n(rn),jn=e("Zm9Q"),Dn=e("5Z9U"),hn=e("6cGi"),sn=e("KQm4"),Ve=e("wgJM"),Tn=e("t23M");function An(r){var l=Object(n.useRef)(),b=Object(n.useRef)(!1);function S(){for(var F=arguments.length,O=new Array(F),D=0;D<F;D++)O[D]=arguments[D];b.current||(Ve.a.cancel(l.current),l.current=Object(Ve.a)(function(){r.apply(void 0,O)}))}return Object(n.useEffect)(function(){return function(){b.current=!0,Ve.a.cancel(l.current)}},[]),S}function vn(r){var l=Object(n.useRef)([]),b=Object(n.useState)({}),S=Object(W.a)(b,2),F=S[1],O=Object(n.useRef)(typeof r=="function"?r():r),D=An(function(){var K=O.current;l.current.forEach(function($){K=$(K)}),l.current=[],O.current=K,F({})});function I(K){l.current.push(K),D()}return[O.current,I]}var Be=e("4IlW");function qn(r,l){var b,S=r.prefixCls,F=r.id,O=r.active,D=r.rtl,I=r.tab,K=I.key,$=I.tab,V=I.disabled,k=I.closeIcon,U=r.tabBarGutter,ae=r.tabPosition,H=r.closable,Y=r.renderWrapper,ie=r.removeAriaLabel,z=r.editable,q=r.onClick,ne=r.onRemove,X=r.onFocus,re="".concat(S,"-tab");n.useEffect(function(){return ne},[]);var Z={};ae==="top"||ae==="bottom"?Z[D?"marginLeft":"marginRight"]=U:Z.marginBottom=U;var fe=z&&H!==!1&&!V;function _(te){V||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var ue=n.createElement("div",{key:K,ref:l,className:Re()(re,(b={},Object(oe.a)(b,"".concat(re,"-with-remove"),fe),Object(oe.a)(b,"".concat(re,"-active"),O),Object(oe.a)(b,"".concat(re,"-disabled"),V),b)),style:Z,onClick:_},n.createElement("div",{role:"tab","aria-selected":O,id:F&&"".concat(F,"-tab-").concat(K),className:"".concat(re,"-btn"),"aria-controls":F&&"".concat(F,"-panel-").concat(K),"aria-disabled":V,tabIndex:V?null:0,onClick:function(G){G.stopPropagation(),_(G)},onKeyDown:function(G){[Be.a.SPACE,Be.a.ENTER].includes(G.which)&&(G.preventDefault(),_(G))},onFocus:X},$),fe&&n.createElement("button",{type:"button","aria-label":ie||"remove",tabIndex:0,className:"".concat(re,"-remove"),onClick:function(G){G.stopPropagation(),le(G)}},k||z.removeIcon||"\xD7"));return Y&&(ue=Y(ue)),ue}var wn=n.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function ot(r,l,b){return Object(n.useMemo)(function(){for(var S,F=new Map,O=l.get((S=r[0])===null||S===void 0?void 0:S.key)||_n,D=O.left+O.width,I=0;I<r.length;I+=1){var K=r[I].key,$=l.get(K);if(!$){var V;$=l.get((V=r[I-1])===null||V===void 0?void 0:V.key)||_n}var k=F.get(K)||Object(ce.a)({},$);k.right=D-k.left-k.width,F.set(K,k)}return F},[r.map(function(S){return S.key}).join("_"),l,b])}var et={width:0,height:0,left:0,top:0,right:0};function lt(r,l,b,S,F){var O=F.tabs,D=F.tabPosition,I=F.rtl,K,$,V;["top","bottom"].includes(D)?(K="width",$=I?"right":"left",V=Math.abs(l.left)):(K="height",$="top",V=-l.top);var k=l[K],U=b[K],ae=S[K],H=k;return U+ae>k&&(H=k-ae),Object(n.useMemo)(function(){if(!O.length)return[0,0];for(var Y=O.length,ie=Y,z=0;z<Y;z+=1){var q=r.get(O[z].key)||et;if(q[$]+q[K]>V+H){ie=z-1;break}}for(var ne=0,X=Y-1;X>=0;X-=1){var re=r.get(O[X].key)||et;if(re[$]<V){ne=X+1;break}}return[ne,ie]},[r,V,H,D,O.map(function(Y){return Y.key}).join("_"),I])}var Mn=e("Gytx"),nt=e.n(Mn),$n=e("Kwbf");function ut(r,l){var b=r.prefixCls,S=r.invalidate,F=r.item,O=r.renderItem,D=r.responsive,I=r.registerSize,K=r.itemKey,$=r.className,V=r.style,k=r.children,U=r.display,ae=r.order,H=r.component,Y=H===void 0?"div":H,ie=Object(Fe.a)(r,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=D&&!U;function q(fe){I(K,fe)}n.useEffect(function(){return function(){q(null)}},[]);var ne=O&&F!==void 0?O(F):k,X;S||(X={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:D?ae:void 0,pointerEvents:z?"none":void 0});var re={};z&&(re["aria-hidden"]=!0);var Z=n.createElement(Y,Object(x.a)({className:Re()(!S&&b,$),style:Object(ce.a)(Object(ce.a)({},X),V)},re,ie,{ref:l}),ne);return D&&(Z=n.createElement(Tn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},Z)),Z}var Kn=n.forwardRef(ut);Kn.displayName="Item";var Pn=Kn;function Vn(){var r=Object(n.useState)({}),l=Object(W.a)(r,2),b=l[1],S=Object(n.useRef)([]),F=Object(n.useRef)(!1),O=0,D=0;Object(n.useEffect)(function(){return function(){F.current=!0}},[]);function I(K){var $=O;O+=1,S.current.length<$+1&&(S.current[$]=K);var V=S.current[$];function k(U){S.current[$]=typeof U=="function"?U(S.current[$]):U,Ve.a.cancel(D),D=Object(Ve.a)(function(){F.current||b({})})}return[V,k]}return I}var tt=function(l,b){var S=n.useContext(A);if(!S){var F=l.component,O=F===void 0?"div":F,D=Object(Fe.a)(l,["component"]);return n.createElement(O,Object(x.a)({},D,{ref:b}))}var I=S.className,K=Object(Fe.a)(S,["className"]),$=l.className,V=Object(Fe.a)(l,["className"]);return n.createElement(A.Provider,{value:null},n.createElement(Pn,Object(x.a)({ref:b,className:Re()(I,$)},K,V)))},Jn=n.forwardRef(tt);Jn.displayName="RawItem";var B=Jn,A=n.createContext(null),P="responsive",p="invalidate";function s(r){return"+ ".concat(r.length," ...")}function g(r,l){var b=r.prefixCls,S=b===void 0?"rc-overflow":b,F=r.data,O=F===void 0?[]:F,D=r.renderItem,I=r.renderRawItem,K=r.itemKey,$=r.itemWidth,V=$===void 0?10:$,k=r.ssr,U=r.style,ae=r.className,H=r.maxCount,Y=r.renderRest,ie=r.renderRawRest,z=r.suffix,q=r.component,ne=q===void 0?"div":q,X=r.itemComponent,re=r.onVisibleChange,Z=Object(Fe.a)(r,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),fe=Vn(),_=k==="full",le=fe(null),ue=Object(W.a)(le,2),te=ue[0],G=ue[1],se=te||0,pe=fe(new Map),me=Object(W.a)(pe,2),be=me[0],Ie=me[1],ve=fe(0),ye=Object(W.a)(ve,2),Pe=ye[0],Ae=ye[1],Se=fe(0),Oe=Object(W.a)(Se,2),we=Oe[0],ke=Oe[1],Me=fe(0),Ke=Object(W.a)(Me,2),$e=Ke[0],Te=Ke[1],yn=Object(n.useState)(null),Xe=Object(W.a)(yn,2),Je=Xe[0],_e=Xe[1],cn=Object(n.useState)(null),mn=Object(W.a)(cn,2),je=mn[0],We=mn[1],Ge=n.useMemo(function(){return je===null&&_?Number.MAX_SAFE_INTEGER:je||0},[je,te]),ze=Object(n.useState)(!1),Bn=Object(W.a)(ze,2),zn=Bn[0],In=Bn[1],Qe="".concat(S,"-item"),bn=Math.max(Pe,we),en=O.length&&H===P,En=H===p,He=en||typeof H=="number"&&O.length>H,Ze=Object(n.useMemo)(function(){var de=O;return en?te===null&&_?de=O:de=O.slice(0,Math.min(O.length,se/V)):typeof H=="number"&&(de=O.slice(0,H)),de},[O,V,te,H,en]),Cn=Object(n.useMemo)(function(){return en?O.slice(Ge+1):O.slice(Ze.length)},[O,Ze,en,Ge]),tn=Object(n.useCallback)(function(de,Ee){var Ne;return typeof K=="function"?K(de):(Ne=K&&(de==null?void 0:de[K]))!==null&&Ne!==void 0?Ne:Ee},[K]),Ue=Object(n.useCallback)(D||function(de){return de},[D]);function Le(de,Ee){We(de),Ee||(In(de<O.length-1),re==null||re(de))}function Un(de,Ee){G(Ee.clientWidth)}function kn(de,Ee){Ie(function(Ne){var Ye=new Map(Ne);return Ee===null?Ye.delete(de):Ye.set(de,Ee),Ye})}function rt(de,Ee){ke(Ee),Ae(we)}function pn(de,Ee){Te(Ee)}function un(de){return be.get(tn(Ze[de],de))}n.useLayoutEffect(function(){if(se&&bn&&Ze){var de=$e,Ee=Ze.length,Ne=Ee-1;if(!Ee){Le(0),_e(null);return}for(var Ye=0;Ye<Ee;Ye+=1){var Xn=un(Ye);if(Xn===void 0){Le(Ye-1,!0);break}if(de+=Xn,Ye===Ne-1&&de+un(Ne)<=se){Le(Ne),_e(null);break}else if(de+bn>se){Le(Ye-1),_e(de-Xn-$e+we);break}else if(Ye===Ne){Le(Ne),_e(de-$e);break}}z&&un(0)+$e>se&&_e(null)}},[se,be,we,$e,tn,Ze]);var Gn=zn&&!!Cn.length,fn={};Je!==null&&en&&(fn={position:"absolute",left:Je,top:0});var an={prefixCls:Qe,responsive:en,component:X,invalidate:En},Hn=I?function(de,Ee){var Ne=tn(de,Ee);return n.createElement(A.Provider,{key:Ne,value:Object(ce.a)(Object(ce.a)({},an),{},{order:Ee,item:de,itemKey:Ne,registerSize:kn,display:Ee<=Ge})},I(de,Ee))}:function(de,Ee){var Ne=tn(de,Ee);return n.createElement(Pn,Object(x.a)({},an,{order:Ee,key:Ne,item:de,renderItem:Ue,itemKey:Ne,registerSize:kn,display:Ee<=Ge}))},On,Yn={order:Gn?Ge:Number.MAX_SAFE_INTEGER,className:"".concat(Qe,"-rest"),registerSize:rt,display:Gn};if(ie)ie&&(On=n.createElement(A.Provider,{value:Object(ce.a)(Object(ce.a)({},an),Yn)},ie(Cn)));else{var nn=Y||s;On=n.createElement(Pn,Object(x.a)({},an,Yn),typeof nn=="function"?nn(Cn):nn)}var Sn=n.createElement(ne,Object(x.a)({className:Re()(!En&&S,ae),style:U,ref:l},Z),Ze.map(Hn),He?On:null,z&&n.createElement(Pn,Object(x.a)({},an,{order:Ge,className:"".concat(Qe,"-suffix"),registerSize:pn,display:!0,style:fn}),z));return en&&(Sn=n.createElement(Tn.default,{onResize:Un},Sn)),Sn}var E=n.forwardRef(g);E.displayName="Overflow",E.Item=B,E.RESPONSIVE=P,E.INVALIDATE=p;var C=E,i=C,f=e("1OyB"),o=e("vuIU"),T=e("Ji7U"),w=e("LK+K"),j=e("bT9E"),d=e("YrtM"),R=n.createContext(null);function m(r,l){var b=Object(ce.a)({},r);return Object.keys(l).forEach(function(S){var F=l[S];F!==void 0&&(b[S]=F)}),b}function t(r){var l=r.children,b=r.locked,S=Object(Fe.a)(r,["children","locked"]),F=n.useContext(R),O=Object(d.a)(function(){return m(F,S)},[F,S],function(D,I){return!b&&(D[0]!==I[0]||!nt()(D[1],I[1]))});return n.createElement(R.Provider,{value:O},l)}function y(r,l,b,S){var F=n.useContext(R),O=F.activeKey,D=F.onActive,I=F.onInactive,K={active:O===r};return l||(K.onMouseEnter=function($){b==null||b({key:r,domEvent:$}),D(r)},K.onMouseLeave=function($){S==null||S({key:r,domEvent:$}),I(r)}),K}function c(r){var l=r.item,b=Object(Fe.a)(r,["item"]);return Object.defineProperty(b,"item",{get:function(){return Object($n.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),l}}),b}function a(r){var l=r.icon,b=r.props,S=r.children,F;return typeof l=="function"?F=n.createElement(l,Object(ce.a)({},b)):F=l,F||S||null}function u(r){var l=n.useContext(R),b=l.mode,S=l.rtl,F=l.inlineIndent;if(b!=="inline")return null;var O=r;return S?{paddingRight:O*F}:{paddingLeft:O*F}}var h=[],M=n.createContext(null);function N(){return n.useContext(M)}var L=n.createContext(h);function he(r){var l=n.useContext(L);return n.useMemo(function(){return r!==void 0?[].concat(Object(sn.a)(l),[r]):l},[l,r])}var Ce=n.createContext(null),on=n.createContext(null);function gn(r,l){return r===void 0?null:"".concat(r,"-").concat(l)}function xn(r){var l=n.useContext(on);return gn(l,r)}var Nn=function(r){Object(T.a)(b,r);var l=Object(w.a)(b);function b(){return Object(f.a)(this,b),l.apply(this,arguments)}return Object(o.a)(b,[{key:"render",value:function(){var F=this.props,O=F.title,D=F.attribute,I=F.elementRef,K=Object(Fe.a)(F,["title","attribute","elementRef"]),$=Object(j.a)(K,["eventKey"]);return Object($n.a)(!D,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(i.Item,Object(x.a)({},D,{title:typeof O=="string"?O:void 0},$,{ref:I}))}}]),b}(n.Component),dt=function(l){var b,S=l.style,F=l.className,O=l.eventKey,D=l.disabled,I=l.itemIcon,K=l.children,$=l.role,V=l.onMouseEnter,k=l.onMouseLeave,U=l.onClick,ae=l.onKeyDown,H=l.onFocus,Y=Object(Fe.a)(l,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ie=xn(O),z=n.useContext(R),q=z.prefixCls,ne=z.onItemClick,X=z.disabled,re=z.overflowDisabled,Z=z.itemIcon,fe=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),ue=n.useRef(),te=n.useRef(),G=X||D,se=he(O),pe=function(Me){return{key:O,keyPath:se,item:ue.current,domEvent:Me}},me=I||Z,be=y(O,G,V,k),Ie=be.active,ve=Object(Fe.a)(be,["active"]),ye=fe.includes(O),Pe=u(se.length),Ae=function(Me){if(!G){var Ke=pe(Me);U==null||U(c(Ke)),ne(Ke)}},Se=function(Me){if(ae==null||ae(Me),Me.which===Be.a.ENTER){var Ke=pe(Me);U==null||U(c(Ke)),ne(Ke)}},Oe=function(Me){_(O),H==null||H(Me)},we={};return l.role==="option"&&(we["aria-selected"]=ye),n.createElement(Nn,Object(x.a)({ref:ue,elementRef:te,role:$===null?"none":$||"menuitem",tabIndex:D?null:-1,"data-menu-id":re&&ie?null:ie},Y,ve,we,{component:"li","aria-disabled":D,style:Object(ce.a)(Object(ce.a)({},Pe),S),className:Re()(le,(b={},Object(oe.a)(b,"".concat(le,"-active"),Ie),Object(oe.a)(b,"".concat(le,"-selected"),ye),Object(oe.a)(b,"".concat(le,"-disabled"),G),b),F),onClick:Ae,onKeyDown:Se,onFocus:Oe}),K,n.createElement(a,{props:Object(ce.a)(Object(ce.a)({},l),{},{isSelected:ye}),icon:me}))};function Ca(r){var l=r.eventKey,b=N(),S=he(l);return n.useEffect(function(){if(b)return b.registerPath(l,S),function(){b.unregisterPath(l,S)}},[S]),b?null:n.createElement(dt,r)}var Bt=Ca;function It(r,l){return Object(jn.a)(r).map(function(b,S){if(n.isValidElement(b)){var F=b.key;return F==null&&(F="tmp_key-".concat([].concat(Object(sn.a)(l),[S]).join("-"))),n.cloneElement(b,{key:F,eventKey:F})}return b})}function at(r){var l=n.useRef(r);l.current=r;var b=n.useCallback(function(){for(var S,F=arguments.length,O=new Array(F),D=0;D<F;D++)O[D]=arguments[D];return(S=l.current)===null||S===void 0?void 0:S.call.apply(S,[l].concat(O))},[]);return r?b:void 0}var Oa=function(l,b){var S=l.className,F=l.children,O=Object(Fe.a)(l,["className","children"]),D=n.useContext(R),I=D.prefixCls,K=D.mode;return n.createElement("ul",Object(x.a)({className:Re()(I,"".concat(I,"-sub"),"".concat(I,"-").concat(K==="inline"?"inline":"vertical"),S)},O,{"data-menu-list":!0,ref:b}),F)},Ht=n.forwardRef(Oa);Ht.displayName="SubMenuList";var Yt=Ht,Sa=e("uciX"),Wn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},Fa={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},pr=Xt;function Qt(r,l,b){if(l)return l;if(b)return b[r]||b.other}var Ra={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ja(r){var l=r.prefixCls,b=r.visible,S=r.children,F=r.popup,O=r.popupClassName,D=r.popupOffset,I=r.disabled,K=r.mode,$=r.onVisibleChange,V=n.useContext(R),k=V.getPopupContainer,U=V.rtl,ae=V.subMenuOpenDelay,H=V.subMenuCloseDelay,Y=V.builtinPlacements,ie=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ne=V.defaultMotions,X=n.useState(!1),re=Object(W.a)(X,2),Z=re[0],fe=re[1],_=U?Object(ce.a)(Object(ce.a)({},Fa),Y):Object(ce.a)(Object(ce.a)({},Xt),Y),le=Ra[K],ue=Qt(K,q,ne),te=Object(ce.a)(Object(ce.a)({},ue),{},{leavedClassName:"".concat(l,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=n.useRef();return n.useEffect(function(){return G.current=Object(Ve.a)(function(){fe(b)}),function(){Ve.a.cancel(G.current)}},[b]),n.createElement(Sa.a,{prefixCls:l,popupClassName:Re()("".concat(l,"-popup"),Object(oe.a)({},"".concat(l,"-rtl"),U),O),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:k,builtinPlacements:_,popupPlacement:le,popupVisible:Z,popup:F,popupAlign:D&&{offset:D},action:I?[]:[ie],mouseEnterDelay:ae,mouseLeaveDelay:H,onPopupVisibleChange:$,forceRender:z,popupMotion:te},S)}var Da=e("8XRh");function Aa(r){var l=r.id,b=r.open,S=r.keyPath,F=r.children,O="inline",D=n.useContext(R),I=D.prefixCls,K=D.forceSubMenuRender,$=D.motion,V=D.defaultMotions,k=D.mode,U=n.useRef(!1);U.current=k===O;var ae=n.useState(!U.current),H=Object(W.a)(ae,2),Y=H[0],ie=H[1],z=U.current?b:!1;n.useEffect(function(){U.current&&ie(!1)},[k]);var q=Object(ce.a)({},Qt(O,$,V));S.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(X){return!U.current&&!X&&ie(!0),ne==null?void 0:ne(X)},Y?null:n.createElement(t,{mode:O,locked:!U.current},n.createElement(Da.default,Object(x.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(I,"-hidden")}),function(X){var re=X.className,Z=X.style;return n.createElement(Yt,{id:l,className:re,style:Z},F)}))}var Pa=function(l){var b,S=l.style,F=l.className,O=l.title,D=l.eventKey,I=l.disabled,K=l.internalPopupClose,$=l.children,V=l.itemIcon,k=l.expandIcon,U=l.popupClassName,ae=l.popupOffset,H=l.onClick,Y=l.onMouseEnter,ie=l.onMouseLeave,z=l.onTitleClick,q=l.onTitleMouseEnter,ne=l.onTitleMouseLeave,X=Object(Fe.a)(l,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),re=xn(D),Z=n.useContext(R),fe=Z.prefixCls,_=Z.mode,le=Z.openKeys,ue=Z.disabled,te=Z.overflowDisabled,G=Z.activeKey,se=Z.selectedKeys,pe=Z.itemIcon,me=Z.expandIcon,be=Z.onItemClick,Ie=Z.onOpenChange,ve=Z.onActive,ye=n.useContext(Ce),Pe=ye.isSubPathKey,Ae=he(),Se="".concat(fe,"-submenu"),Oe=ue||I,we=n.useRef(),ke=n.useRef(),Me=V||pe,Ke=k||me,$e=le.includes(D),Te=!te&&$e,yn=Pe(se,D),Xe=y(D,Oe,q,ne),Je=Xe.active,_e=Object(Fe.a)(Xe,["active"]),cn=n.useState(!1),mn=Object(W.a)(cn,2),je=mn[0],We=mn[1],Ge=function(Le){Oe||We(Le)},ze=function(Le){Ge(!0),Y==null||Y({key:D,domEvent:Le})},Bn=function(Le){Ge(!1),ie==null||ie({key:D,domEvent:Le})},zn=n.useMemo(function(){return Je||(_!=="inline"?je||Pe([G],D):!1)},[_,Je,G,je,D,Pe]),In=u(Ae.length),Qe=function(Le){Oe||(z==null||z({key:D,domEvent:Le}),_==="inline"&&Ie(D,!$e))},bn=at(function(Ue){H==null||H(c(Ue)),be(Ue)}),en=function(Le){_!=="inline"&&Ie(D,Le)},En=function(){ve(D)},He=re&&"".concat(re,"-popup"),Ze=n.createElement("div",Object(x.a)({role:"menuitem",style:In,className:"".concat(Se,"-title"),tabIndex:Oe?null:-1,ref:we,title:typeof O=="string"?O:null,"data-menu-id":te&&re?null:re,"aria-expanded":Te,"aria-haspopup":!0,"aria-controls":He,"aria-disabled":Oe,onClick:Qe,onFocus:En},_e),O,n.createElement(a,{icon:_!=="horizontal"?Ke:null,props:Object(ce.a)(Object(ce.a)({},l),{},{isOpen:Te,isSubMenu:!0})},n.createElement("i",{className:"".concat(Se,"-arrow")}))),Cn=n.useRef(_);if(_!=="inline"&&(Cn.current=Ae.length>1?"vertical":_),!te){var tn=Cn.current;Ze=n.createElement(ja,{mode:tn,prefixCls:Se,visible:!K&&Te&&_!=="inline",popupClassName:U,popupOffset:ae,popup:n.createElement(t,{mode:tn},n.createElement(Yt,{id:He,ref:ke},$)),disabled:Oe,onVisibleChange:en},Ze)}return n.createElement(t,{onItemClick:bn,mode:_==="horizontal"?"vertical":_,itemIcon:Me,expandIcon:Ke},n.createElement(i.Item,Object(x.a)({role:"none"},X,{component:"li",style:S,className:Re()(Se,"".concat(Se,"-").concat(_),F,(b={},Object(oe.a)(b,"".concat(Se,"-open"),Te),Object(oe.a)(b,"".concat(Se,"-active"),zn),Object(oe.a)(b,"".concat(Se,"-selected"),yn),Object(oe.a)(b,"".concat(Se,"-disabled"),Oe),b)),onMouseEnter:ze,onMouseLeave:Bn}),Ze,!te&&n.createElement(Aa,{id:He,open:Te,keyPath:Ae},$)))};function Zt(r){var l=r.eventKey,b=r.children,S=he(l),F=It(b,S),O=N();n.useEffect(function(){if(O)return O.registerPath(l,S),function(){O.unregisterPath(l,S)}},[S]);var D;return O?D=F:D=n.createElement(Pa,r,F),n.createElement(L.Provider,{value:S},D)}var Na=e("x/xZ");function qt(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Na.a)(r)){var b=r.nodeName.toLowerCase(),S=["input","select","textarea","button"].includes(b)||r.isContentEditable||b==="a"&&!!r.getAttribute("href"),F=r.getAttribute("tabindex"),O=Number(F),D=null;return F&&!Number.isNaN(O)?D=O:S&&D===null&&(D=0),S&&r.disabled&&(D=null),D!==null&&(D>=0||l&&D<0)}return!1}function _t(r){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,b=Object(sn.a)(r.querySelectorAll("*")).filter(function(S){return qt(S,l)});return qt(r,l)&&b.unshift(r),b}var gt=null;function fr(){gt=document.activeElement}function hr(){gt=null}function vr(){if(gt)try{gt.focus()}catch(r){}}function gr(r,l){if(l.keyCode===9){var b=_t(r),S=b[l.shiftKey?0:b.length-1],F=S===document.activeElement||r===document.activeElement;if(F){var O=b[l.shiftKey?b.length-1:0];O.focus(),l.preventDefault()}}}var Tt=Be.a.LEFT,wt=Be.a.RIGHT,Mt=Be.a.UP,yt=Be.a.DOWN,bt=Be.a.ENTER,ea=Be.a.ESC,na=[Mt,yt,Tt,wt];function Ba(r,l,b,S){var F,O,D,I,K="prev",$="next",V="children",k="parent";if(r==="inline"&&S===bt)return{inlineTrigger:!0};var U=(F={},Object(oe.a)(F,Mt,K),Object(oe.a)(F,yt,$),F),ae=(O={},Object(oe.a)(O,Tt,b?$:K),Object(oe.a)(O,wt,b?K:$),Object(oe.a)(O,yt,V),Object(oe.a)(O,bt,V),O),H=(D={},Object(oe.a)(D,Mt,K),Object(oe.a)(D,yt,$),Object(oe.a)(D,bt,V),Object(oe.a)(D,ea,k),Object(oe.a)(D,Tt,b?V:k),Object(oe.a)(D,wt,b?k:V),D),Y={inline:U,horizontal:ae,vertical:H,inlineSub:U,horizontalSub:H,verticalSub:H},ie=(I=Y["".concat(r).concat(l?"":"Sub")])===null||I===void 0?void 0:I[S];switch(ie){case K:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case k:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ia(r){for(var l=r;l;){if(l.getAttribute("data-menu-list"))return l;l=l.parentElement}return null}function Ta(r,l){for(var b=r||document.activeElement;b;){if(l.has(b))return b;b=b.parentElement}return null}function wa(r,l){var b=_t(r,!0);return b.filter(function(S){return l.has(S)})}function ta(r,l,b){var S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var F=wa(r,l),O=F.length,D=F.findIndex(function(I){return b===I});return S<0?D===-1?D=O-1:D-=1:S>0&&(D+=1),D=(D+O)%O,F[D]}function Ma(r,l,b,S,F,O,D,I,K,$){var V=n.useRef(),k=n.useRef();k.current=l;var U=function(){Ve.a.cancel(V.current)};return n.useEffect(function(){return function(){U()}},[]),function(ae){var H=ae.which;if([].concat(na,[bt,ea]).includes(H)){var Y,ie,z,q=function(){Y=new Set,ie=new Map,z=new Map;var pe=O();return pe.forEach(function(me){var be=document.querySelector("[data-menu-id='".concat(gn(S,me),"']"));be&&(Y.add(be),z.set(be,me),ie.set(me,be))}),Y};q();var ne=ie.get(l),X=Ta(ne,Y),re=z.get(X),Z=Ba(r,D(re,!0).length===1,b,H);if(!Z)return;na.includes(H)&&ae.preventDefault();var fe=function(pe){if(pe){var me=pe,be=pe.querySelector("a");(be==null?void 0:be.getAttribute("href"))&&(me=be);var Ie=z.get(pe);I(Ie),U(),V.current=Object(Ve.a)(function(){k.current===Ie&&me.focus()})}};if(Z.sibling||!X){var _;!X||r==="inline"?_=F.current:_=Ia(X);var le=ta(_,Y,X,Z.offset);fe(le)}else if(Z.inlineTrigger)K(re);else if(Z.offset>0)K(re,!0),U(),V.current=Object(Ve.a)(function(){q();var se=X.getAttribute("aria-controls"),pe=document.getElementById(se),me=ta(pe,Y);fe(me)},5);else if(Z.offset<0){var ue=D(re,!0),te=ue[ue.length-2],G=ie.get(te);K(te,!1),fe(G)}}$==null||$(ae)}}var Ka=Math.random().toFixed(5).toString().slice(2),aa=0;function xa(r){var l=Object(hn.a)(r,{value:r}),b=Object(W.a)(l,2),S=b[0],F=b[1];return n.useEffect(function(){aa+=1;var O="".concat(Ka,"-").concat(aa);F("rc-menu-uuid-".concat(O))},[]),S}var yr=e("p8sG");function Wa(r){Promise.resolve().then(r)}var Kt="__RC_UTIL_PATH_SPLIT__",ra=function(l){return l.join(Kt)},La=function(l){return l.split(Kt)},xt="rc-menu-more";function $a(){var r=n.useState({}),l=Object(W.a)(r,2),b=l[1],S=Object(n.useRef)(new Map),F=Object(n.useRef)(new Map),O=n.useState([]),D=Object(W.a)(O,2),I=D[0],K=D[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var ne=ra(q);F.current.set(ne,z),S.current.set(z,ne),$.current+=1;var X=$.current;Wa(function(){X===$.current&&b({})})},[]),k=Object(n.useCallback)(function(z,q){var ne=ra(q);F.current.delete(ne),S.current.delete(z)},[]),U=Object(n.useCallback)(function(z){K(z)},[]),ae=Object(n.useCallback)(function(z,q){var ne=S.current.get(z)||"",X=La(ne);return q&&I.includes(X[0])&&X.unshift(xt),X},[I]),H=Object(n.useCallback)(function(z,q){return z.some(function(ne){var X=ae(ne,!0);return X.includes(q)})},[ae]),Y=function(){var q=Object(sn.a)(S.current.keys());return I.length&&q.push(xt),q},ie=Object(n.useCallback)(function(z){var q="".concat(S.current.get(z)).concat(Kt),ne=new Set;return Object(sn.a)(F.current.keys()).forEach(function(X){X.startsWith(q)&&ne.add(F.current.get(X))}),ne},[]);return{registerPath:V,unregisterPath:k,refreshOverflowKeys:U,isSubPathKey:H,getKeyPath:ae,getKeys:Y,getSubPathKeys:ie}}var Et=[],Va=function(l){var b,S,F=l.prefixCls,O=F===void 0?"rc-menu":F,D=l.style,I=l.className,K=l.tabIndex,$=K===void 0?0:K,V=l.children,k=l.direction,U=l.id,ae=l.mode,H=ae===void 0?"vertical":ae,Y=l.inlineCollapsed,ie=l.disabled,z=l.disabledOverflow,q=l.subMenuOpenDelay,ne=q===void 0?.1:q,X=l.subMenuCloseDelay,re=X===void 0?.1:X,Z=l.forceSubMenuRender,fe=l.defaultOpenKeys,_=l.openKeys,le=l.activeKey,ue=l.defaultActiveFirst,te=l.selectable,G=te===void 0?!0:te,se=l.multiple,pe=se===void 0?!1:se,me=l.defaultSelectedKeys,be=l.selectedKeys,Ie=l.onSelect,ve=l.onDeselect,ye=l.inlineIndent,Pe=ye===void 0?24:ye,Ae=l.motion,Se=l.defaultMotions,Oe=l.triggerSubMenuAction,we=Oe===void 0?"hover":Oe,ke=l.builtinPlacements,Me=l.itemIcon,Ke=l.expandIcon,$e=l.overflowedIndicator,Te=$e===void 0?"...":$e,yn=l.getPopupContainer,Xe=l.onClick,Je=l.onOpenChange,_e=l.onKeyDown,cn=l.openAnimation,mn=l.openTransitionName,je=Object(Fe.a)(l,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),We=It(V,Et),Ge=n.useState(!1),ze=Object(W.a)(Ge,2),Bn=ze[0],zn=ze[1],In=n.useRef(),Qe=xa(U),bn=k==="rtl",en=n.useMemo(function(){return H==="inline"&&Y?["vertical",Y]:[H,!1]},[H,Y]),En=Object(W.a)(en,2),He=En[0],Ze=En[1],Cn=n.useState(0),tn=Object(W.a)(Cn,2),Ue=tn[0],Le=tn[1],Un=Ue>=We.length-1||He!=="horizontal"||z,kn=Object(hn.a)(fe,{value:_,postState:function(Q){return Q||Et}}),rt=Object(W.a)(kn,2),pn=rt[0],un=rt[1],Gn=n.useState(pn),fn=Object(W.a)(Gn,2),an=fn[0],Hn=fn[1],On=He==="inline",Yn=n.useRef(!1);n.useEffect(function(){On&&Hn(pn)},[pn]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(On)un(an);else{var ee=[];un(ee),Je==null||Je(ee)}},[On]);var nn=$a(),Sn=nn.registerPath,de=nn.unregisterPath,Ee=nn.refreshOverflowKeys,Ne=nn.isSubPathKey,Ye=nn.getKeyPath,Xn=nn.getKeys,Ot=nn.getSubPathKeys,Vt=n.useMemo(function(){return{registerPath:Sn,unregisterPath:de}},[Sn,de]),Jt=n.useMemo(function(){return{isSubPathKey:Ne}},[Ne]);n.useEffect(function(){Ee(Un?Et:We.slice(Ue+1).map(function(ee){return ee.key}))},[Ue,Un]);var zt=Object(hn.a)(le||ue&&((b=We[0])===null||b===void 0?void 0:b.key),{value:le}),it=Object(W.a)(zt,2),St=it[0],mt=it[1],Ft=at(function(ee){mt(ee)}),Ut=at(function(){mt(void 0)}),Rt=Object(hn.a)(me||[],{value:be,postState:function(Q){return Array.isArray(Q)?Q:Q==null?Et:[Q]}}),jt=Object(W.a)(Rt,2),st=jt[0],Fn=jt[1],Dt=function(Q){if(!!G){var ge=Q.key,xe=st.includes(ge),qe;xe?qe=st.filter(function(Zn){return Zn!==ge}):pe?qe=[].concat(Object(sn.a)(st),[ge]):qe=[ge],Fn(qe);var Ln=Object(ce.a)(Object(ce.a)({},Q),{},{selectedKeys:qe});xe?ve==null||ve(Ln):Ie==null||Ie(Ln)}},At=at(function(ee){Xe==null||Xe(c(ee)),Dt(ee)}),pt=at(function(ee,Q){var ge=pn.filter(function(qe){return qe!==ee});if(Q)ge.push(ee);else if(He!=="inline"){var xe=Ot(ee);ge=ge.filter(function(qe){return!xe.has(qe)})}nt()(pn,ge)||(un(ge),Je==null||Je(ge))}),Qn=at(yn),ft=function(Q,ge){var xe=ge!=null?ge:!pn.includes(Q);pt(Q,xe)},ht=Ma(He,St,bn,Qe,In,Xn,Ye,mt,ft,_e);n.useEffect(function(){zn(!0)},[]);var Pt=He!=="horizontal"||z?We:We.map(function(ee,Q){return n.createElement(t,{key:ee.key,overflowDisabled:Q>Ue},ee)}),Nt=n.createElement(i,Object(x.a)({id:U,ref:In,prefixCls:"".concat(O,"-overflow"),component:"ul",itemComponent:Bt,className:Re()(O,"".concat(O,"-root"),"".concat(O,"-").concat(He),I,(S={},Object(oe.a)(S,"".concat(O,"-inline-collapsed"),Ze),Object(oe.a)(S,"".concat(O,"-rtl"),bn),S)),dir:k,style:D,role:"menu",tabIndex:$,data:Pt,renderRawItem:function(Q){return Q},renderRawRest:function(Q){var ge=Q.length,xe=ge?We.slice(-ge):null;return n.createElement(Zt,{eventKey:xt,title:Te,disabled:Un,internalPopupClose:ge===0},xe)},maxCount:He!=="horizontal"||z?i.INVALIDATE:i.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Q){Le(Q)},onKeyDown:ht},je));return n.createElement(on.Provider,{value:Qe},n.createElement(t,{prefixCls:O,mode:He,openKeys:pn,rtl:bn,disabled:ie,motion:Bn?Ae:null,defaultMotions:Bn?Se:null,activeKey:St,onActive:Ft,onInactive:Ut,selectedKeys:st,inlineIndent:Pe,subMenuOpenDelay:ne,subMenuCloseDelay:re,forceSubMenuRender:Z,builtinPlacements:ke,triggerSubMenuAction:we,getPopupContainer:Qn,itemIcon:Me,expandIcon:Ke,onItemClick:At,onOpenChange:pt},n.createElement(Ce.Provider,{value:Jt},Nt),n.createElement(M.Provider,{value:Vt},We)))},Ja=Va,za=function(l){var b=l.className,S=l.title,F=l.eventKey,O=l.children,D=Object(Fe.a)(l,["className","title","eventKey","children"]),I=n.useContext(R),K=I.prefixCls,$="".concat(K,"-item-group");return n.createElement("li",Object(x.a)({},D,{onClick:function(k){return k.stopPropagation()},className:Re()($,b)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof S=="string"?S:void 0},S),n.createElement("ul",{className:"".concat($,"-list")},O))};function Ua(r){var l=r.children,b=Object(Fe.a)(r,["children"]),S=he(b.eventKey),F=It(l,S),O=N();return O?F:n.createElement(za,b,F)}function ka(r){var l=r.className,b=r.style,S=n.useContext(R),F=S.prefixCls,O=N();return O?null:n.createElement("li",{className:Re()("".concat(F,"-item-divider"),l),style:b})}var ct=Ja;ct.Item=Bt,ct.SubMenu=Zt,ct.ItemGroup=Ua,ct.Divider=ka;var Ga=ct,Ha=e("eDIo");function Ya(r,l){var b=r.prefixCls,S=r.editable,F=r.locale,O=r.style;return!S||S.showAdd===!1?null:n.createElement("button",{ref:l,type:"button",className:"".concat(b,"-nav-add"),style:O,"aria-label":(F==null?void 0:F.addAriaLabel)||"Add tab",onClick:function(I){S.onEdit("add",{event:I})}},S.addIcon||"+")}var ia=n.forwardRef(Ya);function Xa(r,l){var b=r.prefixCls,S=r.id,F=r.tabs,O=r.locale,D=r.mobile,I=r.moreIcon,K=I===void 0?"More":I,$=r.moreTransitionName,V=r.style,k=r.className,U=r.editable,ae=r.tabBarGutter,H=r.rtl,Y=r.onTabClick,ie=Object(n.useState)(!1),z=Object(W.a)(ie,2),q=z[0],ne=z[1],X=Object(n.useState)(null),re=Object(W.a)(X,2),Z=re[0],fe=re[1],_="".concat(S,"-more-popup"),le="".concat(b,"-dropdown"),ue=Z!==null?"".concat(_,"-").concat(Z):null,te=O==null?void 0:O.dropdownAriaLabel,G=n.createElement(Ga,{onClick:function(ye){var Pe=ye.key,Ae=ye.domEvent;Y(Pe,Ae),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":ue,selectedKeys:[Z],"aria-label":te!==void 0?te:"expanded dropdown"},F.map(function(ve){return n.createElement(Bt,{key:ve.key,id:"".concat(_,"-").concat(ve.key),role:"option","aria-controls":S&&"".concat(S,"-panel-").concat(ve.key),disabled:ve.disabled},ve.tab)}));function se(ve){for(var ye=F.filter(function(we){return!we.disabled}),Pe=ye.findIndex(function(we){return we.key===Z})||0,Ae=ye.length,Se=0;Se<Ae;Se+=1){Pe=(Pe+ve+Ae)%Ae;var Oe=ye[Pe];if(!Oe.disabled){fe(Oe.key);return}}}function pe(ve){var ye=ve.which;if(!q){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(ye)&&(ne(!0),ve.preventDefault());return}switch(ye){case Be.a.UP:se(-1),ve.preventDefault();break;case Be.a.DOWN:se(1),ve.preventDefault();break;case Be.a.ESC:ne(!1);break;case Be.a.SPACE:case Be.a.ENTER:Z!==null&&Y(Z,ve);break}}Object(n.useEffect)(function(){var ve=document.getElementById(ue);ve&&ve.scrollIntoView&&ve.scrollIntoView(!1)},[Z]),Object(n.useEffect)(function(){q||fe(null)},[q]);var me=Object(oe.a)({},H?"marginLeft":"marginRight",ae);F.length||(me.visibility="hidden",me.order=1);var be=Re()(Object(oe.a)({},"".concat(le,"-rtl"),H)),Ie=D?null:n.createElement(Ha.default,{prefixCls:le,overlay:G,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ne,overlayClassName:be,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(b,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(S,"-more"),"aria-expanded":q,onKeyDown:pe},K));return n.createElement("div",{className:Re()("".concat(b,"-nav-operations"),k),style:V,ref:l},Ie,n.createElement(ia,{prefixCls:b,locale:O,editable:U}))}var Qa=n.forwardRef(Xa),Wt=Object(n.createContext)(null),Za=.1,sa=.01,Ct=20,oa=Math.pow(.995,Ct);function qa(r,l){var b=Object(n.useState)(),S=Object(W.a)(b,2),F=S[0],O=S[1],D=Object(n.useState)(0),I=Object(W.a)(D,2),K=I[0],$=I[1],V=Object(n.useState)(0),k=Object(W.a)(V,2),U=k[0],ae=k[1],H=Object(n.useState)(),Y=Object(W.a)(H,2),ie=Y[0],z=Y[1],q=Object(n.useRef)();function ne(le){var ue=le.touches[0],te=ue.screenX,G=ue.screenY;O({x:te,y:G}),window.clearInterval(q.current)}function X(le){if(!!F){le.preventDefault();var ue=le.touches[0],te=ue.screenX,G=ue.screenY;O({x:te,y:G});var se=te-F.x,pe=G-F.y;l(se,pe);var me=Date.now();$(me),ae(me-K),z({x:se,y:pe})}}function re(){if(!!F&&(O(null),z(null),ie)){var le=ie.x/U,ue=ie.y/U,te=Math.abs(le),G=Math.abs(ue);if(Math.max(te,G)<Za)return;var se=le,pe=ue;q.current=window.setInterval(function(){if(Math.abs(se)<sa&&Math.abs(pe)<sa){window.clearInterval(q.current);return}se*=oa,pe*=oa,l(se*Ct,pe*Ct)},Ct)}}var Z=Object(n.useRef)();function fe(le){var ue=le.deltaX,te=le.deltaY,G=0,se=Math.abs(ue),pe=Math.abs(te);se===pe?G=Z.current==="x"?ue:te:se>pe?(G=ue,Z.current="x"):(G=te,Z.current="y"),l(-G,-G)&&le.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:X,onTouchEnd:re,onWheel:fe},n.useEffect(function(){function le(se){_.current.onTouchStart(se)}function ue(se){_.current.onTouchMove(se)}function te(se){_.current.onTouchEnd(se)}function G(se){_.current.onWheel(se)}return document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),r.current.addEventListener("touchstart",le,{passive:!1}),r.current.addEventListener("wheel",G),function(){document.removeEventListener("touchmove",ue),document.removeEventListener("touchend",te)}},[])}function _a(){var r=Object(n.useRef)(new Map);function l(S){return r.current.has(S)||r.current.set(S,n.createRef()),r.current.get(S)}function b(S){r.current.delete(S)}return[l,b]}function la(r,l){var b=n.useRef(r),S=n.useState({}),F=Object(W.a)(S,2),O=F[1];function D(I){var K=typeof I=="function"?I(b.current):I;K!==b.current&&l(K,b.current),b.current=K,O({})}return[b.current,D]}var ua=function(l){var b=l.position,S=l.prefixCls,F=l.extra;if(!F)return null;var O,D=F;return b==="right"&&(O=D.right||!D.left&&D||null),b==="left"&&(O=D.left||null),O?n.createElement("div",{className:"".concat(S,"-extra-content")},O):null};function er(r,l){var b,S=n.useContext(Wt),F=S.prefixCls,O=S.tabs,D=r.className,I=r.style,K=r.id,$=r.animated,V=r.activeKey,k=r.rtl,U=r.extra,ae=r.editable,H=r.locale,Y=r.tabPosition,ie=r.tabBarGutter,z=r.children,q=r.onTabClick,ne=r.onTabScroll,X=Object(n.useRef)(),re=Object(n.useRef)(),Z=Object(n.useRef)(),fe=Object(n.useRef)(),_=_a(),le=Object(W.a)(_,2),ue=le[0],te=le[1],G=Y==="top"||Y==="bottom",se=la(0,function(ee,Q){G&&ne&&ne({direction:ee>Q?"left":"right"})}),pe=Object(W.a)(se,2),me=pe[0],be=pe[1],Ie=la(0,function(ee,Q){!G&&ne&&ne({direction:ee>Q?"top":"bottom"})}),ve=Object(W.a)(Ie,2),ye=ve[0],Pe=ve[1],Ae=Object(n.useState)(0),Se=Object(W.a)(Ae,2),Oe=Se[0],we=Se[1],ke=Object(n.useState)(0),Me=Object(W.a)(ke,2),Ke=Me[0],$e=Me[1],Te=Object(n.useState)(0),yn=Object(W.a)(Te,2),Xe=yn[0],Je=yn[1],_e=Object(n.useState)(0),cn=Object(W.a)(_e,2),mn=cn[0],je=cn[1],We=Object(n.useState)(null),Ge=Object(W.a)(We,2),ze=Ge[0],Bn=Ge[1],zn=Object(n.useState)(null),In=Object(W.a)(zn,2),Qe=In[0],bn=In[1],en=Object(n.useState)(0),En=Object(W.a)(en,2),He=En[0],Ze=En[1],Cn=Object(n.useState)(0),tn=Object(W.a)(Cn,2),Ue=tn[0],Le=tn[1],Un=vn(new Map),kn=Object(W.a)(Un,2),rt=kn[0],pn=kn[1],un=ot(O,rt,Oe),Gn="".concat(F,"-nav-operations-hidden"),fn=0,an=0;G?k?(fn=0,an=Math.max(0,Oe-ze)):(fn=Math.min(0,ze-Oe),an=0):(fn=Math.min(0,Qe-Ke),an=0);function Hn(ee){return ee<fn?fn:ee>an?an:ee}var On=Object(n.useRef)(),Yn=Object(n.useState)(),nn=Object(W.a)(Yn,2),Sn=nn[0],de=nn[1];function Ee(){de(Date.now())}function Ne(){window.clearTimeout(On.current)}qa(X,function(ee,Q){function ge(xe,qe){xe(function(Ln){var Zn=Hn(Ln+qe);return Zn})}if(G){if(ze>=Oe)return!1;ge(be,ee)}else{if(Qe>=Ke)return!1;ge(Pe,Q)}return Ne(),Ee(),!0}),Object(n.useEffect)(function(){return Ne(),Sn&&(On.current=window.setTimeout(function(){de(0)},100)),Ne},[Sn]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Q=un.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(G){var ge=me;k?Q.right<me?ge=Q.right:Q.right+Q.width>me+ze&&(ge=Q.right+Q.width-ze):Q.left<-me?ge=-Q.left:Q.left+Q.width>-me+ze&&(ge=-(Q.left+Q.width-ze)),Pe(0),be(Hn(ge))}else{var xe=ye;Q.top<-ye?xe=-Q.top:Q.top+Q.height>-ye+Qe&&(xe=-(Q.top+Q.height-Qe)),be(0),Pe(Hn(xe))}}var Xn=lt(un,{width:ze,height:Qe,left:me,top:ye},{width:Xe,height:mn},{width:He,height:Ue},Object(ce.a)(Object(ce.a)({},r),{},{tabs:O})),Ot=Object(W.a)(Xn,2),Vt=Ot[0],Jt=Ot[1],zt=O.map(function(ee){var Q=ee.key;return n.createElement(wn,{id:K,prefixCls:F,key:Q,rtl:k,tab:ee,closable:ee.closable,editable:ae,active:Q===V,tabPosition:Y,tabBarGutter:ie,renderWrapper:z,removeAriaLabel:H==null?void 0:H.removeAriaLabel,ref:ue(Q),onClick:function(xe){q(Q,xe)},onRemove:function(){te(Q)},onFocus:function(){Ye(Q),Ee(),k||(X.current.scrollLeft=0),X.current.scrollTop=0}})}),it=An(function(){var ee,Q,ge,xe,qe,Ln,Zn,kt,Gt,lr=((ee=X.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ur=((Q=X.current)===null||Q===void 0?void 0:Q.offsetHeight)||0,fa=((ge=fe.current)===null||ge===void 0?void 0:ge.offsetWidth)||0,ha=((xe=fe.current)===null||xe===void 0?void 0:xe.offsetHeight)||0,dr=((qe=Z.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,cr=((Ln=Z.current)===null||Ln===void 0?void 0:Ln.offsetHeight)||0;Bn(lr),bn(ur),Ze(fa),Le(ha);var va=(((Zn=re.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-fa,ga=(((kt=re.current)===null||kt===void 0?void 0:kt.offsetHeight)||0)-ha;we(va),$e(ga);var ya=(Gt=Z.current)===null||Gt===void 0?void 0:Gt.className.includes(Gn);Je(va-(ya?0:dr)),je(ga-(ya?0:cr)),pn(function(){var ba=new Map;return O.forEach(function(mr){var Ea=mr.key,vt=ue(Ea).current;vt&&ba.set(Ea,{width:vt.offsetWidth,height:vt.offsetHeight,left:vt.offsetLeft,top:vt.offsetTop})}),ba})}),St=O.slice(0,Vt),mt=O.slice(Jt+1),Ft=[].concat(Object(sn.a)(St),Object(sn.a)(mt)),Ut=Object(n.useState)(),Rt=Object(W.a)(Ut,2),jt=Rt[0],st=Rt[1],Fn=un.get(V),Dt=Object(n.useRef)();function At(){Ve.a.cancel(Dt.current)}Object(n.useEffect)(function(){var ee={};return Fn&&(G?(k?ee.right=Fn.right:ee.left=Fn.left,ee.width=Fn.width):(ee.top=Fn.top,ee.height=Fn.height)),At(),Dt.current=Object(Ve.a)(function(){st(ee)}),At},[Fn,G,k]),Object(n.useEffect)(function(){Ye()},[V,Fn,un,G]),Object(n.useEffect)(function(){it()},[k,ie,V,O.map(function(ee){return ee.key}).join("_")]);var pt=!!Ft.length,Qn="".concat(F,"-nav-wrap"),ft,ht,Pt,Nt;return G?k?(ht=me>0,ft=me+ze<Oe):(ft=me<0,ht=-me+ze<Oe):(Pt=ye<0,Nt=-ye+Qe<Ke),n.createElement("div",{ref:l,role:"tablist",className:Re()("".concat(F,"-nav"),D),style:I,onKeyDown:function(){Ee()}},n.createElement(ua,{position:"left",extra:U,prefixCls:F}),n.createElement(Tn.default,{onResize:it},n.createElement("div",{className:Re()(Qn,(b={},Object(oe.a)(b,"".concat(Qn,"-ping-left"),ft),Object(oe.a)(b,"".concat(Qn,"-ping-right"),ht),Object(oe.a)(b,"".concat(Qn,"-ping-top"),Pt),Object(oe.a)(b,"".concat(Qn,"-ping-bottom"),Nt),b)),ref:X},n.createElement(Tn.default,{onResize:it},n.createElement("div",{ref:re,className:"".concat(F,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ye,"px)"),transition:Sn?"none":void 0}},zt,n.createElement(ia,{ref:fe,prefixCls:F,locale:H,editable:ae,style:{visibility:pt?"hidden":null}}),n.createElement("div",{className:Re()("".concat(F,"-ink-bar"),Object(oe.a)({},"".concat(F,"-ink-bar-animated"),$.inkBar)),style:jt}))))),n.createElement(Qa,Object(x.a)({},r,{ref:Z,prefixCls:F,tabs:Ft,className:!pt&&Gn})),n.createElement(ua,{position:"right",extra:U,prefixCls:F}))}var da=n.forwardRef(er);function nr(r){var l=r.id,b=r.activeKey,S=r.animated,F=r.tabPosition,O=r.rtl,D=r.destroyInactiveTabPane,I=n.useContext(Wt),K=I.prefixCls,$=I.tabs,V=S.tabPane,k=$.findIndex(function(U){return U.key===b});return n.createElement("div",{className:Re()("".concat(K,"-content-holder"))},n.createElement("div",{className:Re()("".concat(K,"-content"),"".concat(K,"-content-").concat(F),Object(oe.a)({},"".concat(K,"-content-animated"),V)),style:k&&V?Object(oe.a)({},O?"marginRight":"marginLeft","-".concat(k,"00%")):null},$.map(function(U){return n.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:l,animated:V,active:U.key===b,destroyInactiveTabPane:D})})))}function ca(r){var l=r.prefixCls,b=r.forceRender,S=r.className,F=r.style,O=r.id,D=r.active,I=r.animated,K=r.destroyInactiveTabPane,$=r.tabKey,V=r.children,k=n.useState(b),U=Object(W.a)(k,2),ae=U[0],H=U[1];n.useEffect(function(){D?H(!0):K&&H(!1)},[D,K]);var Y={};return D||(I?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:O&&"".concat(O,"-panel-").concat($),role:"tabpanel",tabIndex:D?0:-1,"aria-labelledby":O&&"".concat(O,"-tab-").concat($),"aria-hidden":!D,style:Object(ce.a)(Object(ce.a)({},Y),F),className:Re()("".concat(l,"-tabpane"),D&&"".concat(l,"-tabpane-active"),S)},(D||ae||b)&&V)}var ma=0;function tr(r){return Object(jn.a)(r).map(function(l){if(n.isValidElement(l)){var b=l.key!==void 0?String(l.key):void 0;return Object(ce.a)(Object(ce.a)({key:b},l.props),{},{node:l})}return null}).filter(function(l){return l})}function ar(r,l){var b,S=r.id,F=r.prefixCls,O=F===void 0?"rc-tabs":F,D=r.className,I=r.children,K=r.direction,$=r.activeKey,V=r.defaultActiveKey,k=r.editable,U=r.animated,ae=U===void 0?{inkBar:!0,tabPane:!1}:U,H=r.tabPosition,Y=H===void 0?"top":H,ie=r.tabBarGutter,z=r.tabBarStyle,q=r.tabBarExtraContent,ne=r.locale,X=r.moreIcon,re=r.moreTransitionName,Z=r.destroyInactiveTabPane,fe=r.renderTabBar,_=r.onChange,le=r.onTabClick,ue=r.onTabScroll,te=Object(Fe.a)(r,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=tr(I),se=K==="rtl",pe;ae===!1?pe={inkBar:!1,tabPane:!1}:ae===!0?pe={inkBar:!0,tabPane:!0}:pe=Object(ce.a)({inkBar:!0,tabPane:!1},Object(De.a)(ae)==="object"?ae:{});var me=Object(n.useState)(!1),be=Object(W.a)(me,2),Ie=be[0],ve=be[1];Object(n.useEffect)(function(){ve(Object(Dn.a)())},[]);var ye=Object(hn.a)(function(){var je;return(je=G[0])===null||je===void 0?void 0:je.key},{value:$,defaultValue:V}),Pe=Object(W.a)(ye,2),Ae=Pe[0],Se=Pe[1],Oe=Object(n.useState)(function(){return G.findIndex(function(je){return je.key===Ae})}),we=Object(W.a)(Oe,2),ke=we[0],Me=we[1];Object(n.useEffect)(function(){var je=G.findIndex(function(Ge){return Ge.key===Ae});if(je===-1){var We;je=Math.max(0,Math.min(ke,G.length-1)),Se((We=G[je])===null||We===void 0?void 0:We.key)}Me(je)},[G.map(function(je){return je.key}).join("_"),Ae,ke]);var Ke=Object(hn.a)(null,{value:S}),$e=Object(W.a)(Ke,2),Te=$e[0],yn=$e[1],Xe=Y;Ie&&!["left","right"].includes(Y)&&(Xe="top"),Object(n.useEffect)(function(){S||(yn("rc-tabs-".concat(ma)),ma+=1)},[]);function Je(je,We){le==null||le(je,We),Se(je),_==null||_(je)}var _e={id:Te,activeKey:Ae,animated:pe,tabPosition:Xe,rtl:se,mobile:Ie},cn,mn=Object(ce.a)(Object(ce.a)({},_e),{},{editable:k,locale:ne,moreIcon:X,moreTransitionName:re,tabBarGutter:ie,onTabClick:Je,onTabScroll:ue,extra:q,style:z,panes:I});return fe?cn=fe(mn,da):cn=n.createElement(da,mn),n.createElement(Wt.Provider,{value:{tabs:G,prefixCls:O}},n.createElement("div",Object(x.a)({ref:l,id:S,className:Re()(O,"".concat(O,"-").concat(Xe),(b={},Object(oe.a)(b,"".concat(O,"-mobile"),Ie),Object(oe.a)(b,"".concat(O,"-editable"),k),Object(oe.a)(b,"".concat(O,"-rtl"),se),b),D)},te),cn,n.createElement(nr,Object(x.a)({destroyInactiveTabPane:Z},_e,{animated:pe}))))}var pa=n.forwardRef(ar);pa.TabPane=ca;var rr=pa,ir=rr,Lt=e("MZF8"),ln=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function $t(r,l){var b,S=(b=r.match(/\.(\w+)$/))===null||b===void 0?void 0:b[1];return S||(S=l.tsx?"tsx":"jsx"),S}var or=r=>{var l,b,S,F=Object(n.useRef)(),O=Object(n.useContext)(ln.context),D=O.locale,I=Object(ln.useLocaleProps)(D,r),K=Object(ln.useDemoUrl)(I.identifier),$=I.demoUrl||K,V=(Lt.a===null||Lt.a===void 0?void 0:Lt.a.location.hash)==="#".concat(I.identifier),k=Object.keys(I.sources).length===1,U=Object(ln.useCodeSandbox)((l=I.hideActions)!==null&&l!==void 0&&l.includes("CSB")?null:I),ae=Object(ln.useRiddle)((b=I.hideActions)!==null&&b!==void 0&&b.includes("RIDDLE")?null:I),H=Object(ln.useMotions)(I.motions||[],F.current),Y=Object(J.default)(H,2),ie=Y[0],z=Y[1],q=Object(ln.useCopy)(),ne=Object(J.default)(q,2),X=ne[0],re=ne[1],Z=Object(n.useState)("_"),fe=Object(J.default)(Z,2),_=fe[0],le=fe[1],ue=Object(n.useState)($t(_,I.sources[_])),te=Object(J.default)(ue,2),G=te[0],se=te[1],pe=Object(n.useState)(Boolean(I.defaultShowCode)),me=Object(J.default)(pe,2),be=me[0],Ie=me[1],ve=Object(n.useState)(Math.random()),ye=Object(J.default)(ve,2),Pe=ye[0],Ae=ye[1],Se=I.sources[_][G]||I.sources[_].content,Oe=Object(ln.useTSPlaygroundUrl)(D,Se),we=Object(n.useRef)(),ke=Object(ln.usePrefersColor)(),Me=Object(J.default)(ke,1),Ke=Me[0];Object(n.useEffect)(()=>{Ae(Math.random())},[Ke]);function $e(Te){le(Te),se($t(Te,I.sources[Te]))}return v.a.createElement("div",{style:I.style,className:[I.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:I.identifier,"data-debug":I.debug||void 0,"data-iframe":I.iframe||void 0},I.iframe&&v.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),v.a.createElement("div",{ref:F,className:"__dumi-default-previewer-demo",style:{transform:I.transform?"translate(0, 0)":void 0,padding:I.compact||I.iframe&&I.compact!==!1?"0":void 0,background:I.background}},I.iframe?v.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(I.iframe).replace(/(\d)$/,"$1px")},key:Pe,src:$,ref:we}):I.children),v.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":I.title},I.title&&v.a.createElement(ln.AnchorLink,{to:"#".concat(I.identifier)},I.title),I.description&&v.a.createElement("div",{dangerouslySetInnerHTML:{__html:I.description}})),v.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&v.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),ae&&v.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ae}),I.motions&&v.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>ie()}),I.iframe&&v.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ae(Math.random())}),!((S=I.hideActions)!==null&&S!==void 0&&S.includes("EXTERNAL"))&&v.a.createElement(ln.Link,{target:"_blank",to:$},v.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),v.a.createElement("span",null),v.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":re,onClick:()=>X(Se)}),G==="tsx"&&be&&v.a.createElement(ln.Link,{target:"_blank",to:Oe},v.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),v.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(be?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ie(!be)})),be&&v.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!k&&v.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:$e},Object.keys(I.sources).map(Te=>v.a.createElement(ca,{tab:Te==="_"?"index.".concat($t(Te,I.sources[Te])):Te,key:Te}))),v.a.createElement("div",{className:"__dumi-default-previewer-source"},v.a.createElement(sr.a,{code:Se,lang:G,showCopy:!1}))))},Er=dn.default=or},"80pN":function(Rn,dn,e){"use strict";(function(J){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),v=e("q1tI"),x=e("i8i4"),oe=e("QCnb");function W(a){for(var u="https://reactjs.org/docs/error-decoder.html?invariant="+a,h=1;h<arguments.length;h++)u+="&args[]="+encodeURIComponent(arguments[h]);return"Minified React error #"+a+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var De=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;De.hasOwnProperty("ReactCurrentDispatcher")||(De.ReactCurrentDispatcher={current:null}),De.hasOwnProperty("ReactCurrentBatchConfig")||(De.ReactCurrentBatchConfig={suspense:null});function Fe(a){var u=a,h=a;if(a.alternate)for(;u.return;)u=u.return;else{a=u;do u=a,(u.effectTag&1026)!=0&&(h=u.return),a=u.return;while(a)}return u.tag===3?h:null}function ce(a){if(Fe(a)!==a)throw Error(W(188))}function rn(a){var u=a.alternate;if(!u){if(u=Fe(a),u===null)throw Error(W(188));return u!==a?null:a}for(var h=a,M=u;;){var N=h.return;if(N===null)break;var L=N.alternate;if(L===null){if(M=N.return,M!==null){h=M;continue}break}if(N.child===L.child){for(L=N.child;L;){if(L===h)return ce(N),a;if(L===M)return ce(N),u;L=L.sibling}throw Error(W(188))}if(h.return!==M.return)h=N,M=L;else{for(var he=!1,Ce=N.child;Ce;){if(Ce===h){he=!0,h=N,M=L;break}if(Ce===M){he=!0,M=N,h=L;break}Ce=Ce.sibling}if(!he){for(Ce=L.child;Ce;){if(Ce===h){he=!0,h=L,M=N;break}if(Ce===M){he=!0,M=L,h=N;break}Ce=Ce.sibling}if(!he)throw Error(W(189))}}if(h.alternate!==M)throw Error(W(190))}if(h.tag!==3)throw Error(W(188));return h.stateNode.current===h?a:u}function Re(){return!0}function jn(){return!1}function Dn(a,u,h,M){this.dispatchConfig=a,this._targetInst=u,this.nativeEvent=h,a=this.constructor.Interface;for(var N in a)a.hasOwnProperty(N)&&((u=a[N])?this[N]=u(h):N==="target"?this.target=M:this[N]=h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Re:jn,this.isPropagationStopped=jn,this}n(Dn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Re)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Re)},persist:function(){this.isPersistent=Re},isPersistent:jn,destructor:function(){var a=this.constructor.Interface,u;for(u in a)this[u]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=jn,this._dispatchInstances=this._dispatchListeners=null}}),Dn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Dn.extend=function(a){function u(){}function h(){return M.apply(this,arguments)}var M=this;u.prototype=M.prototype;var N=new u;return n(N,h.prototype),h.prototype=N,h.prototype.constructor=h,h.Interface=n({},M.Interface,a),h.extend=M.extend,Ve(h),h},Ve(Dn);function hn(a,u,h,M){if(this.eventPool.length){var N=this.eventPool.pop();return this.call(N,a,u,h,M),N}return new this(a,u,h,M)}function sn(a){if(!(a instanceof this))throw Error(W(279));a.destructor(),10>this.eventPool.length&&this.eventPool.push(a)}function Ve(a){a.eventPool=[],a.getPooled=hn,a.release=sn}var Tn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function An(a,u){var h={};return h[a.toLowerCase()]=u.toLowerCase(),h["Webkit"+a]="webkit"+u,h["Moz"+a]="moz"+u,h}var vn={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionend:An("Transition","TransitionEnd")},Be={},qn={};Tn&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete vn.animationend.animation,delete vn.animationiteration.animation,delete vn.animationstart.animation),"TransitionEvent"in window||delete vn.transitionend.transition);function wn(a){if(Be[a])return Be[a];if(!vn[a])return a;var u=vn[a],h;for(h in u)if(u.hasOwnProperty(h)&&h in qn)return Be[a]=u[h];return a}var _n=wn("animationend"),ot=wn("animationiteration"),et=wn("animationstart"),lt=wn("transitionend"),Mn=null;function nt(a){if(Mn===null)try{var u=("require"+Math.random()).slice(0,7);Mn=(J&&J[u])("timers").setImmediate}catch(h){Mn=function(M){var N=new MessageChannel;N.port1.onmessage=M,N.port2.postMessage(void 0)}}return Mn(a)}var $n=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ut=$n[11],Kn=$n[12],Pn=x.unstable_batchedUpdates,Vn=De.IsSomeRendererActing,tt=typeof oe.unstable_flushAllWithoutAsserting=="function",Jn=oe.unstable_flushAllWithoutAsserting||function(){for(var a=!1;ut();)a=!0;return a};function B(a){try{Jn(),nt(function(){Jn()?B(a):a()})}catch(u){a(u)}}var A=0,P=!1,p=x.findDOMNode,s=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,g=s[0],E=s[4],C=s[5],i=s[6],f=s[7],o=s[8],T=s[9],w=s[10];function j(){}function d(a,u){if(!a)return[];if(a=rn(a),!a)return[];for(var h=a,M=[];;){if(h.tag===5||h.tag===6||h.tag===1||h.tag===0){var N=h.stateNode;u(N)&&M.push(N)}if(h.child)h.child.return=h,h=h.child;else{if(h===a)return M;for(;!h.sibling;){if(!h.return||h.return===a)return M;h=h.return}h.sibling.return=h.return,h=h.sibling}}}function R(a,u){if(a&&!a._reactInternalFiber){var h=""+a;throw a=Array.isArray(a)?"an array":a&&a.nodeType===1&&a.tagName?"a DOM node":h==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":h,Error(W(286,u,a))}}var m={renderIntoDocument:function(a){var u=document.createElement("div");return x.render(a,u)},isElement:function(a){return v.isValidElement(a)},isElementOfType:function(a,u){return v.isValidElement(a)&&a.type===u},isDOMComponent:function(a){return!(!a||a.nodeType!==1||!a.tagName)},isDOMComponentElement:function(a){return!!(a&&v.isValidElement(a)&&a.tagName)},isCompositeComponent:function(a){return m.isDOMComponent(a)?!1:a!=null&&typeof a.render=="function"&&typeof a.setState=="function"},isCompositeComponentWithType:function(a,u){return m.isCompositeComponent(a)?a._reactInternalFiber.type===u:!1},findAllInRenderedTree:function(a,u){return R(a,"findAllInRenderedTree"),a?d(a._reactInternalFiber,u):[]},scryRenderedDOMComponentsWithClass:function(a,u){return R(a,"scryRenderedDOMComponentsWithClass"),m.findAllInRenderedTree(a,function(h){if(m.isDOMComponent(h)){var M=h.className;typeof M!="string"&&(M=h.getAttribute("class")||"");var N=M.split(/\s+/);if(!Array.isArray(u)){if(u===void 0)throw Error(W(11));u=u.split(/\s+/)}return u.every(function(L){return N.indexOf(L)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(a,u){if(R(a,"findRenderedDOMComponentWithClass"),a=m.scryRenderedDOMComponentsWithClass(a,u),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for class:"+u);return a[0]},scryRenderedDOMComponentsWithTag:function(a,u){return R(a,"scryRenderedDOMComponentsWithTag"),m.findAllInRenderedTree(a,function(h){return m.isDOMComponent(h)&&h.tagName.toUpperCase()===u.toUpperCase()})},findRenderedDOMComponentWithTag:function(a,u){if(R(a,"findRenderedDOMComponentWithTag"),a=m.scryRenderedDOMComponentsWithTag(a,u),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for tag:"+u);return a[0]},scryRenderedComponentsWithType:function(a,u){return R(a,"scryRenderedComponentsWithType"),m.findAllInRenderedTree(a,function(h){return m.isCompositeComponentWithType(h,u)})},findRenderedComponentWithType:function(a,u){if(R(a,"findRenderedComponentWithType"),a=m.scryRenderedComponentsWithType(a,u),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for componentType:"+u);return a[0]},mockComponent:function(a,u){return u=u||a.mockTagName||"div",a.prototype.render.mockImplementation(function(){return v.createElement(u,null,this.props.children)}),this},nativeTouchData:function(a,u){return{touches:[{pageX:a,pageY:u}]}},Simulate:null,SimulateNative:{},act:function(a){function u(){A--,Vn.current=h,Kn.current=M}P===!1&&(P=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),A++;var h=Vn.current,M=Kn.current;Vn.current=!0,Kn.current=!0;try{var N=Pn(a)}catch(L){throw u(),L}if(N!==null&&typeof N=="object"&&typeof N.then=="function")return{then:function(L,he){N.then(function(){1<A||tt===!0&&h===!0?(u(),L()):B(function(Ce){u(),Ce?he(Ce):L()})},function(Ce){u(),he(Ce)})}};try{A!==1||tt!==!1&&h!==!1||Jn(),u()}catch(L){throw u(),L}return{then:function(L){L()}}}};function t(a){return function(u,h){if(v.isValidElement(u))throw Error(W(228));if(m.isCompositeComponent(u))throw Error(W(229));var M=E[a],N=new j;N.target=u,N.type=a.toLowerCase();var L=g(u),he=new Dn(M,L,N,u);he.persist(),n(he,h),M.phasedRegistrationNames?C(he):i(he),x.unstable_batchedUpdates(function(){f(u),w(he)}),o()}}m.Simulate={};for(var y in E)m.Simulate[y]=t(y);function c(a,u){return function(h,M){var N=new j(a);n(N,M),m.isDOMComponent(h)?(h=p(h),N.target=h,T(u,1,document,N)):h.tagName&&(N.target=h,T(u,1,document,N))}}[["abort","abort"],[_n,"animationEnd"],[ot,"animationIteration"],[et,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[lt,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(a){var u=a[1];m.SimulateNative[u]=c(u,a[0])}),J.exports=m.default||m}).call(this,e("hOG+")(Rn))},JjdP:function(Rn,dn,e){"use strict";e.r(dn);var J=e("9og8"),n=e("WmNS"),v=e.n(n),x=e("LtsZ"),oe=`import React, { useRef } from 'react';
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

export default Demo;`,W=`import { get, set, cloneDeep } from 'lodash-es';

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
  return schema && schema.type === 'object' && schema.properties;
}

// TODO: \u652F\u6301\u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u9879
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: \u68C0\u9A8C\u662F\u5426\u4E22\u8FDB\u53BB\u5404\u79CDschema\u90FD\u80FD\u515C\u5E95\u4E0D\u4F1Acrash
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema); // TODO: \u662F\u5426\u9700\u8981deepClone\uFF0C\u8FD9\u4E2A\u82B1\u8D39\u662F\u4E0D\u662F\u6709\u70B9\u5927
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // \u7ED9\u751F\u6210\u7684schema\u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0C\u65B9\u4FBF\u4ECEschema\u4E2D\u76F4\u63A5\u8BFB\u53D6
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.items.properties = {};
  }

  const rules = Array.isArray(schema.rules) ? [...schema.rules] : [];
  if (['boolean', 'function', 'string'].indexOf(typeof schema.required) > -1) {
    rules.push({ required: schema.required }); // TODO: \u4E07\u4E00\u5185\u90E8\u5DF2\u7ECF\u7528\u91CD\u590D\u7684required\u89C4\u5219\uFF1F
  }

  if (schema.type) {
    // Check: \u4E3A\u5565\u4E00\u5B9A\u8981\u6709type\uFF1F
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema: schema, children, rules };
  }
  return result;
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
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (
    typeof func === 'string' &&
    func.match(pattern) &&
    !func.match(reg1) &&
    !func.match(reg2)
  ) {
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
      return func;
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

export const schemaContainsExpression = (schema, shallow = true) => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (
        typeof key === 'string' &&
        key.toLowerCase().indexOf('props') > -1
      ) {
        const propsObj = schema[key];
        if (isObject(propsObj)) {
          return Object.keys(propsObj).some(k => {
            return isExpression(propsObj[k]);
          });
        }
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }
      return false;
    });
  } else {
    return false;
  }
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

// \u83B7\u5F97propsSchema\u7684children
function getChildren2(schema) {
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

export const getKeyFromPath = path => {
  try {
    const keyList = path.split('.');
    const last = keyList.slice(-1)[0];
    return last;
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
export const generateDataSkeleton = (schema, formData, _path = '') => {
  let result = {};
  let _formData = clone(formData);
  result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(
        childSchema,
        childData,
        \`\${_path}.\${key}\`
      );
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean') {
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

// \u65E7\u7248schema\u8F6C\u65B0\u7248schema
export const parseExpression = (schema, formData) => {
  let schema1 = parseRootValue(schema);
  let schema2 = replaceParseValue(schema1);
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
}`,De=`import React from 'react';
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
};`,Re=`import React, { Component } from 'react';
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

export default Root;`,jn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Dn=`{
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
}`,Tn=`.markdown p {
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
}`,An=`import React, { Component } from 'react';
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

export default Demo;`,Be=`{
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

export default Demo;`,_n=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,ot=`.markdown p {
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

export default withTable(Demo);`,lt=`import React from 'react';
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

export default Demo;`,ut=`import React from 'react';
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

export default Demo;`,Pn=`.fr-generator-playground {
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
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,Jn=dn.default={"guide-card":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f;return v.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return i=function(j,d){if(!d&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var R=C(d);if(R&&R.has(j))return R.get(j);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in j)if(y!=="default"&&Object.prototype.hasOwnProperty.call(j,y)){var c=t?Object.getOwnPropertyDescriptor(j,y):null;c&&(c.get||c.set)?Object.defineProperty(m,y,c):m[y]=j[y]}return m.default=j,R&&R.set(j,m),m},C=function(j){if(typeof WeakMap!="function")return null;var d=new WeakMap,R=new WeakMap;return(C=function(t){return t?R:d})(j)},p=e("K+nK"),T.t0=p,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,s=(0,T.t0)(T.t1),T.t2=i,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return E=T.sent,f=function(){var j=(0,g.useState)("Line"),d=(0,s.default)(j,2),R=d[0],m=d[1],t={Line:E.Line,Column:E.Column,PivotTable:E.PivotTable}[R];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",f);case 18:case"end":return T.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return p=e("K+nK"),i.t0=p,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,w,j){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},T),s.default.createElement("p",null,JSON.stringify(w)),s.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f;return v.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return i=function(j,d){if(!d&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var R=C(d);if(R&&R.has(j))return R.get(j);var m={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in j)if(y!=="default"&&Object.prototype.hasOwnProperty.call(j,y)){var c=t?Object.getOwnPropertyDescriptor(j,y):null;c&&(c.get||c.set)?Object.defineProperty(m,y,c):m[y]=j[y]}return m.default=j,R&&R.set(j,m),m},C=function(j){if(typeof WeakMap!="function")return null;var d=new WeakMap,R=new WeakMap;return(C=function(t){return t?R:d})(j)},p=e("K+nK"),T.t0=p,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,s=(0,T.t0)(T.t1),T.t2=i,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return E=T.sent,f=function(){var j=(0,g.useState)(!1),d=(0,s.default)(j,2),R=d[0],m=d[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:R,onChange:function(){return m(!R)}})),g.default.createElement(E.PivotTable,{leftExpandable:R,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",f);case 18:case"end":return T.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d,R;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=o(a);if(u&&u.has(c))return u.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=M?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(o=function(M){return M?u:a})(c)},p=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=p,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=p,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=p,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,E=(0,t.t4)(t.t5),t.t6=T,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return f=t.sent,w=E.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var c=(0,C.useState)(JSON.stringify(j)),a=(0,g.default)(c,2),u=a[0],h=a[1],M=(0,C.useState)({}),N=(0,g.default)(M,2),L=N[0],he=N[1],Ce=function(){try{var Nn=(0,f.updateSchemaToNewVersion)(JSON.parse(u));he(Nn)}catch(dt){console.log(dt)}},on=function(Nn){h(Nn.target.value)},gn=function(){h(JSON.stringify(JSON.parse(u),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:u,onChange:on}),C.default.createElement(s.default,{style:{marginRight:12},onClick:gn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(s.default,{type:"primary",onClick:Ce},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},R=d,t.abrupt("return",R);case 38:case"end":return t.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:W}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d,R,m;return v.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return j=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var h=w(u);if(h&&h.has(a))return h.get(a);var M={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in a)if(L!=="default"&&Object.prototype.hasOwnProperty.call(a,L)){var he=N?Object.getOwnPropertyDescriptor(a,L):null;he&&(he.get||he.set)?Object.defineProperty(M,L,he):M[L]=a[L]}return M.default=a,h&&h.set(a,M),M},w=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,h=new WeakMap;return(w=function(N){return N?h:u})(a)},p=e("K+nK"),y.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return y.t0=p,y.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return y.t1=y.sent,s=(0,y.t0)(y.t1),y.t2=p,y.next=13,e.e(85).then(e.bind(null,"fWQN"));case 13:return y.t3=y.sent,g=(0,y.t2)(y.t3),y.t4=p,y.next=18,e.e(86).then(e.bind(null,"mtLc"));case 18:return y.t5=y.sent,E=(0,y.t4)(y.t5),y.t6=p,y.next=23,e.e(77).then(e.bind(null,"yKVA"));case 23:return y.t7=y.sent,C=(0,y.t6)(y.t7),y.t8=p,y.next=28,e.e(75).then(e.bind(null,"879j"));case 28:return y.t9=y.sent,i=(0,y.t8)(y.t9),y.t10=p,y.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return y.t11=y.sent,f=(0,y.t10)(y.t11),y.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return o=y.sent,y.t12=j,y.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return y.t13=y.sent,T=(0,y.t12)(y.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(c){(0,C.default)(u,c);var a=(0,i.default)(u);function u(){return(0,g.default)(this,u),a.apply(this,arguments)}return(0,E.default)(u,[{key:"render",value:function(){var M=this.props.form;return f.default.createElement("div",null,f.default.createElement(T.default,{form:M,schema:d}),f.default.createElement(s.default,{type:"primary",onClick:M.submit},"\u63D0\u4EA4"))}}]),u}(f.default.Component),m=(0,T.connectForm)(R),y.abrupt("return",m);case 47:case"end":return y.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w;return v.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var y=i(t);if(y&&y.has(m))return y.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=a?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,y&&y.set(m,c),c},i=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,y=new WeakMap;return(i=function(a){return a?y:t})(m)},p=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=p,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.t2=p,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return E=d.sent,d.t4=f,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,C=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var m=(0,C.useForm)();return g.default.createElement("div",null,g.default.createElement(C.default,{form:m,schema:o}),g.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=T,d.abrupt("return",w);case 27:case"end":return d.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w;return v.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var y=i(t);if(y&&y.has(m))return y.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=a?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,y&&y.set(m,c),c},i=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,y=new WeakMap;return(i=function(a){return a?y:t})(m)},p=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=p,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.t2=p,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return E=d.sent,d.t4=f,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,C=(0,d.t4)(d.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var m=(0,C.useForm)(),t=function(c,a){a.length>0?alert("errors:"+JSON.stringify(a)):alert("formData:"+JSON.stringify(c,null,2))};return g.default.createElement("div",null,g.default.createElement(C.default,{form:m,schema:o,onFinish:t}),g.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=T,d.abrupt("return",w);case 27:case"end":return d.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C;return v.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return p=e("K+nK"),f.t0=p,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=p,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return f.t3=f.sent,g=(0,f.t2)(f.t3),E=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(g.default,{schema:E("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(g.default,{schema:E("column")}))},f.abrupt("return",C);case 14:case"end":return f.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C;return v.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return p=e("K+nK"),f.t0=p,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=p,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return f.t3=f.sent,g=(0,f.t2)(f.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return s.default.createElement(g.default,{readOnly:!0,schema:E})},f.abrupt("return",C);case 14:case"end":return f.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C;return v.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return p=e("K+nK"),f.t0=p,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=p,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return f.t3=f.sent,g=(0,f.t2)(f.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return s.default.createElement(g.default,{labelWidth:"200",schema:E})},f.abrupt("return",C);case 14:case"end":return f.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d,R;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=w(a);if(u&&u.has(c))return u.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=M?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},w=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(w=function(M){return M?u:a})(c)},p=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=p,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=p,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=p,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,E=(0,t.t4)(t.t5),t.t6=p,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=j,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,i=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return f=t.sent,t.t10=j,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,o=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return T=t.sent,d=function(){var c=(0,o.useForm)(),a=(0,i.useState)({}),u=(0,C.default)(a,2),h=u[0],M=u[1],N=function(){(0,T.fakeApi)("xxx/getForm").then(function(Ce){c.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,T.delay)(1e3).then(function(he){M({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var L=function(Ce,on){on.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(on.map(function(gn){return gn.name}))):(0,T.fakeApi)("xxx/submit",Ce).then(function(gn){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(o.default,{form:c,schema:h,onFinish:L}),i.default.createElement(s.default,null,i.default.createElement(g.default,{onClick:N},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(g.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=d,t.abrupt("return",R);case 48:case"end":return t.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d,R;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=T(a);if(u&&u.has(c))return u.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=M?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},T=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(T=function(M){return M?u:a})(c)},p=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=p,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=p,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=p,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,E=(0,t.t4)(t.t5),t.t6=p,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.t8=w,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,f=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=t.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var c=(0,f.useForm)(),a=function(M,N){N.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(N.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",M).then(function(L){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},u=function(M){var N=M.data,L=M.errors,he=M.schema,Ce=(0,g.default)(M,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(on){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(f.default,{form:c,schema:j,beforeFinish:u,onFinish:a}),C.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},R=d,t.abrupt("return",R);case 42:case"end":return t.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d,R;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=T(a);if(u&&u.has(c))return u.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=M?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},T=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(T=function(M){return M?u:a})(c)},p=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=p,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=p,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=p,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,E=(0,t.t4)(t.t5),t.t6=p,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return i=t.sent,t.t8=w,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,f=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=t.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var c=(0,f.useForm)(),a=function(M,N){N.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(N.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",M).then(function(L){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},u=function(){(0,o.fakeApi)("xxx/getForm").then(function(M){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(f.default,{form:c,schema:j,onFinish:a}),C.default.createElement(s.default,null,C.default.createElement(g.default,{onClick:u},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(g.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=d,t.abrupt("return",R);case 44:case"end":return t.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d;return v.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return T=function(y,c){if(!c&&y&&y.__esModule)return y;if(y===null||typeof y!="object"&&typeof y!="function")return{default:y};var a=o(c);if(a&&a.has(y))return a.get(y);var u={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in y)if(M!=="default"&&Object.prototype.hasOwnProperty.call(y,M)){var N=h?Object.getOwnPropertyDescriptor(y,M):null;N&&(N.get||N.set)?Object.defineProperty(u,M,N):u[M]=y[M]}return u.default=y,a&&a.set(y,u),u},o=function(y){if(typeof WeakMap!="function")return null;var c=new WeakMap,a=new WeakMap;return(o=function(h){return h?a:c})(y)},p=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=p,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,s=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=p,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,g=(0,m.t2)(m.t3),m.t4=T,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,E=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return C=m.sent,m.t6=T,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,i=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return f=m.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var y=(0,i.useForm)(),c=function(){y.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},a=function(h,M){M.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(N){return N.name}))):g.default.info(JSON.stringify(h))};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(i.default,{form:y,schema:w,onMount:c,onFinish:a}),E.default.createElement(s.default,{type:"primary",onClick:y.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=j,m.abrupt("return",d);case 37:case"end":return m.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o;return v.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return C=function(d,R){if(!R&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=E(R);if(m&&m.has(d))return m.get(d);var t={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var a=y?Object.getOwnPropertyDescriptor(d,c):null;a&&(a.get||a.set)?Object.defineProperty(t,c,a):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},E=function(d){if(typeof WeakMap!="function")return null;var R=new WeakMap,m=new WeakMap;return(E=function(y){return y?m:R})(d)},p=e("K+nK"),w.t0=p,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=C,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,g=(0,w.t2)(w.t3),i={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},f=function(){var d=(0,g.useForm)();return s.default.createElement(g.default,{form:d,schema:i})},o=f,w.abrupt("return",o);case 17:case"end":return w.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C;return v.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return p=e("K+nK"),f.t0=p,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=p,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return f.t3=f.sent,g=(0,f.t2)(f.t3),f.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return E=f.sent,C=function(){return s.default.createElement(g.default,{schema:E.expression})},f.abrupt("return",C);case 16:case"end":return f.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:rn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T;return v.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return C=function(R,m){if(!m&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var t=E(m);if(t&&t.has(R))return t.get(R);var y={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in R)if(a!=="default"&&Object.prototype.hasOwnProperty.call(R,a)){var u=c?Object.getOwnPropertyDescriptor(R,a):null;u&&(u.get||u.set)?Object.defineProperty(y,a,u):y[a]=R[a]}return y.default=R,t&&t.set(R,y),y},E=function(R){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(E=function(c){return c?t:m})(R)},j.t0=C,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,p=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return s=j.sent,j.t2=C,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,g=(0,j.t2)(j.t3),i=function(R){return new Promise(function(m){return setTimeout(m,R)})},f={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var R=(0,g.useForm)(),m=function(){R.setValues({input1:"hello world"}),i(3e3).then(function(y){R.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return p.default.createElement(g.default,{form:R,schema:f,onMount:m})},T=o,j.abrupt("return",T);case 20:case"end":return j.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),window.hello=function(T){var w=T.value;console.log(w)},E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return s.default.createElement(g.default,{schema:E})},i=C,o.abrupt("return",i);case 16:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:De}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o;return v.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return C=function(d,R){if(!R&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=E(R);if(m&&m.has(d))return m.get(d);var t={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var a=y?Object.getOwnPropertyDescriptor(d,c):null;a&&(a.get||a.set)?Object.defineProperty(t,c,a):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},E=function(d){if(typeof WeakMap!="function")return null;var R=new WeakMap,m=new WeakMap;return(E=function(y){return y?m:R})(d)},w.t0=C,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,p=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return s=w.sent,w.t2=C,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,g=(0,w.t2)(w.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},f=function(){var d=(0,g.useForm)(),R={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){d.setValueByPath("input2",t)}};return p.default.createElement(g.default,{form:d,schema:i,watch:R})},o=f,w.abrupt("return",o);case 19:case"end":return w.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w;return v.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return f=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var y=i(t);if(y&&y.has(m))return y.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=a?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,y&&y.set(m,c),c},i=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,y=new WeakMap;return(i=function(a){return a?y:t})(m)},p=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=p,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return E=d.sent,d.t4=f,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,C=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var m=(0,C.useForm)(),t=function(a,u){u.length>0?alert("errorFields:"+JSON.stringify(u)):alert("formData:"+JSON.stringify(a,null,2))},y={input1:function(a){a.length>2?m.setSchemaByPath("obj1.select",function(u){var h=u.enumNames;return{enumNames:h.map(function(M){return M+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(C.default,{form:m,schema:o,onFinish:t,watch:y}),g.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=T,d.abrupt("return",w);case 27:case"end":return d.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d,R;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=o(a);if(u&&u.has(c))return u.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=M?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(o=function(M){return M?u:a})(c)},p=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=p,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=p,t.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.t4=p,t.next=20,e.e(87).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,E=(0,t.t4)(t.t5),t.t6=p,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.t8=T,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,f=(0,t.t8)(t.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(c){return console.log("widget props:",c),C.default.createElement(g.default,(0,E.default)({addonBefore:"https://",addonAfter:".com"},c))},d=function(){var c=(0,f.useForm)();return C.default.createElement("div",null,C.default.createElement(f.default,{form:c,schema:w,widgets:{site:j},onFinish:function(u){return alert(JSON.stringify(u,null,2))}}),C.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},R=d,t.abrupt("return",R);case 40:case"end":return t.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w;return v.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var y=f(t);if(y&&y.has(m))return y.get(m);var c={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in m)if(u!=="default"&&Object.prototype.hasOwnProperty.call(m,u)){var h=a?Object.getOwnPropertyDescriptor(m,u):null;h&&(h.get||h.set)?Object.defineProperty(c,u,h):c[u]=m[u]}return c.default=m,y&&y.set(m,c),c},f=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,y=new WeakMap;return(f=function(a){return a?y:t})(m)},p=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=p,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=p,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=o,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,E=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return C=d.sent,d.t6=o,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,i=(0,d.t6)(d.t7),T=function(){var m=(0,i.useForm)({logOnMount:function(a){console.log("onMount",a)},logOnSubmit:function(a){console.log("onSubmit",a)}}),t={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},y=function(a,u){u.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(u.map(function(h){return h.name}))):g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return E.default.createElement("div",null,E.default.createElement(i.default,{id:"my-demo-form",form:m,schema:t,onFinish:y}),E.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=T,d.abrupt("return",w);case 33:case"end":return d.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o;return v.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return f=function(){var d=(0,g.useForm)(),R=function(t,y){y.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(y))):alert(JSON.stringify(t))};return s.default.createElement("div",null,s.default.createElement(g.default,{form:d,schema:i,onFinish:R}),s.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},C=function(d,R){if(!R&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=E(R);if(m&&m.has(d))return m.get(d);var t={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in d)if(c!=="default"&&Object.prototype.hasOwnProperty.call(d,c)){var a=y?Object.getOwnPropertyDescriptor(d,c):null;a&&(a.get||a.set)?Object.defineProperty(t,c,a):t[c]=d[c]}return t.default=d,m&&m.set(d,t),t},E=function(d){if(typeof WeakMap!="function")return null;var R=new WeakMap,m=new WeakMap;return(E=function(y){return y?m:R})(d)},p=e("K+nK"),w.t0=p,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=C,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,g=(0,w.t2)(w.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=f,w.abrupt("return",o);case 17:case"end":return w.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T,w,j,d,R;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T=function(c,a){if(!a&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var u=o(a);if(u&&u.has(c))return u.get(c);var h={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in c)if(N!=="default"&&Object.prototype.hasOwnProperty.call(c,N)){var L=M?Object.getOwnPropertyDescriptor(c,N):null;L&&(L.get||L.set)?Object.defineProperty(h,N,L):h[N]=c[N]}return h.default=c,u&&u.set(c,h),h},o=function(c){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(o=function(M){return M?u:a})(c)},p=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=p,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=p,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=p,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,E=(0,t.t4)(t.t5),t.t6=T,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return f=t.sent,w=E.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var c=(0,C.useState)(JSON.stringify(j)),a=(0,g.default)(c,2),u=a[0],h=a[1],M=(0,C.useState)({}),N=(0,g.default)(M,2),L=N[0],he=N[1],Ce=function(){try{var Nn=(0,f.updateSchemaToNewVersion)(JSON.parse(u));he(Nn)}catch(dt){console.log(dt)}},on=function(Nn){h(Nn.target.value)},gn=function(){h(JSON.stringify(JSON.parse(u),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:u,onChange:on}),C.default.createElement(s.default,{style:{marginRight:12},onClick:gn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(s.default,{type:"primary",onClick:Ce},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},R=d,t.abrupt("return",R);case 38:case"end":return t.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:W}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T;return v.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return o=function(){var R=(0,g.useState)({}),m=(0,s.default)(R,2),t=m[0],y=m[1],c=(0,g.useState)([]),a=(0,s.default)(c,2),u=a[0],h=a[1],M=(0,g.useState)(!1),N=(0,s.default)(M,2),L=N[0],he=N[1],Ce=(0,E.useForm)({formData:t,onChange:y,onValidate:h,showValidate:L});(0,g.useEffect)(function(){Ce.init()},[]);var on=function(){he(!0),u.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(u))):alert(JSON.stringify(t))};return g.default.createElement("div",null,g.default.createElement(E.default,{form:Ce,schema:f}),g.default.createElement("button",{onClick:on},"\u63D0\u4EA4"))},i=function(R,m){if(!m&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var t=C(m);if(t&&t.has(R))return t.get(R);var y={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in R)if(a!=="default"&&Object.prototype.hasOwnProperty.call(R,a)){var u=c?Object.getOwnPropertyDescriptor(R,a):null;u&&(u.get||u.set)?Object.defineProperty(y,a,u):y[a]=R[a]}return y.default=R,t&&t.set(R,y),y},C=function(R){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(C=function(c){return c?t:m})(R)},p=e("K+nK"),j.t0=p,j.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return j.t1=j.sent,s=(0,j.t0)(j.t1),j.t2=i,j.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return j.t3=j.sent,g=(0,j.t2)(j.t3),j.t4=i,j.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return j.t5=j.sent,E=(0,j.t4)(j.t5),f={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},T=o,j.abrupt("return",T);case 22:case"end":return j.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C;return v.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return p=e("K+nK"),f.t0=p,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=p,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return f.t3=f.sent,g=(0,f.t2)(f.t3),f.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return E=f.sent,C=function(){return s.default.createElement(g.default,{schema:E.basic})},f.abrupt("return",C);case 16:case"end":return f.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:rn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C;return v.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return p=e("K+nK"),f.t0=p,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.t2=p,f.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return f.t3=f.sent,g=(0,f.t2)(f.t3),f.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return E=f.sent,C=function(){return s.default.createElement(g.default,{schema:E.titleTrick})},f.abrupt("return",C);case 16:case"end":return f.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:rn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Re},"main.js":{import:"./main",content:jn},"json/simplest.json":{import:"./json/simplest.json",content:Dn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:hn},"monaco/index.js":{import:"./monaco",content:sn},"theme.css":{import:"./theme.css",content:Ve},"index.css":{import:"./index.css",content:Tn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:An},"main.js":{import:"./main",content:vn},"json/simplest.json":{import:"./json/simplest.json",content:Be},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:qn},"monaco/index.js":{import:"./monaco",content:wn},"suggestionsMap.js":{import:"./suggestionsMap",content:_n},"index.css":{import:"./index.css",content:ot}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:et}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:nt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i,f,o,T;return v.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return p=e("K+nK"),j.t0=p,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,s=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"P2DI"));case 8:for(g=j.sent,E=[],C=0;C<6;C++)E.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return i={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},f=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(R,m){return s.default.createElement("a",{onClick:function(){return alert(R.title)}},"\u7F16\u8F91")}}],o=function(){var R=function(){return{rows:E,total:E.length}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(g.Search,{schema:i,api:R}),s.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:f,rowKey:"id"}))},T=(0,g.withTable)(o),j.abrupt("return",T);case 16:case"end":return j.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    string: {
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){var p,s,g,E,C,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(69)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),E={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(g.default,{defaultValue:E}))},i=C,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:ut}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Kn},"index.less":{import:"./index.less",content:Pn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(x.dynamic)({loader:function(){var B=Object(J.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function A(){return B.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:tt},"index.less":{import:"./index.less",content:Pn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Rn,dn,e){},Zs1V:function(Rn){Rn.exports=JSON.parse("{}")},dKoY:function(Rn,dn,e){"use strict";e.r(dn);var J=e("q1tI"),n=e.n(J),v=e("dEAq"),x=e.n(v),oe=e("0zqC"),W=e("ZpkN"),De=e("JjdP"),Fe=n.a.memo(De.default["schema-demo"].component),ce=n.a.memo(De.default["schema-demo-1"].component);dn.default=rn=>(n.a.useEffect(()=>{rn!=null&&rn.location.hash&&v.AnchorLink.scrollToAnchor(decodeURIComponent(rn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"schema-\u89C4\u8303"},n.a.createElement(v.AnchorLink,{to:"#schema-\u89C4\u8303","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u89C4\u8303"),n.a.createElement("h2",{id:"\u6982\u8FF0"},n.a.createElement(v.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,n.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",n.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",n.a.createElement(v.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "count": {
      "title": "\u6570\u5B57",
      "type": "number"
    }
  }
}
// \u5BF9\u8C61\u5217\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A
{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "count": {
        "title": "\u6570\u5B57",
        "type": "number"
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",n.a.createElement("code",null,"rules")," \u548C ",n.a.createElement("code",null,"props"),"\uFF0C",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",n.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",n.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`{
  "type": "object",
  "properties": {
    "count": {
      // \u57FA\u7840\u5C5E\u6027
      "title": "\u4EE3\u53F7",
      "type": "string",
      "min": 6,
      // rules (\u8865\u5145\u6821\u9A8C\u4FE1\u606F)
      "rules": [
        {
          "pattern": "^[A-Za-z0-9]+$",
          "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
        }
      ],
      // props (\u8865\u5145antd\u7EC4\u4EF6props)
      "props": {
        "allowClear": true
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,"\u201C\u6211\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F\u201D \u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(v.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema"))),n.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027"},n.a.createElement(v.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027"),n.a.createElement("p",null,"\u4E3A\u4E86\u66F4\u597D\u7406\u89E3\u57FA\u7840\u5C5E\u6027\u7684\u4F5C\u7528\uFF0C\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"enum")," \u548C ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",n.a.createElement(v.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"min"),", ",n.a.createElement("code",null,"max"),", ",n.a.createElement("code",null,"required")," \u548C ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),n.a.createElement("li",null,n.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),n.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),n.a.createElement(W.a,{code:`export const basic = {
  displayType: 'row',
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
};`,lang:"js"})),n.a.createElement(oe.default,De.default["schema-demo"].previewerProps,n.a.createElement(Fe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"title"},n.a.createElement(v.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"title"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),n.a.createElement("p",null,"\u5982\u4E0B\u4F8B\uFF0C\u901A\u8FC7\u9009\u62E9\u6027\u4E0D\u4F7F\u7528 title\uFF0C\u8FBE\u5230\u5C55\u793A\u6548\u679C")),n.a.createElement(oe.default,De.default["schema-demo-1"].previewerProps,n.a.createElement(ce,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"description"},n.a.createElement(v.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"description"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),n.a.createElement("h3",{id:"type"},n.a.createElement(v.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"type"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'string'"),", ",n.a.createElement("code",null,"'number'"),", ",n.a.createElement("code",null,"'boolean'"),", ",n.a.createElement("code",null,"'array'"),", ",n.a.createElement("code",null,"'object'"),", ",n.a.createElement("code",null,"'range'"),", ",n.a.createElement("code",null,"'html'"),"]"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002")),n.a.createElement("p",null,"\u6CE8 1\uFF1Arange \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u533A\u95F4\u7C7B\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u65F6\u95F4\u533A\u95F4\u9009\u62E9\u3002"),n.a.createElement(W.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 2\uFF1Ahtml \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u7C7B\u7EC4\u4EF6"),n.a.createElement(W.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),n.a.createElement("h3",{id:"format"},n.a.createElement(v.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"format"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'image'"),", ",n.a.createElement("code",null,"'textarea'"),", ",n.a.createElement("code",null,"'color'"),", ",n.a.createElement("code",null,"'email'"),", ",n.a.createElement("code",null,"'url'"),", ",n.a.createElement("code",null,"'dateTime'"),", ",n.a.createElement("code",null,"'date'"),", ",n.a.createElement("code",null,"'time'"),", ",n.a.createElement("code",null,"'upload'"),"]")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),n.a.createElement(W.a,{code:`// \u9ED8\u8BA4 input
"input": {
  "title": "\u7B80\u5355\u8F93\u5165\u6846",
  "type": "string",
}
// textarea
"textarea": {
  "title": "\u7B80\u5355\u6587\u672C\u7F16\u8F91\u6846",
  "type": "string",
  "format": "textarea"
}
// \u989C\u8272\u7EC4\u4EF6
"color": {
  "title": "\u989C\u8272\u9009\u62E9",
  "type": "string",
  "format": "color"
}
// \u65E5\u671F\u7EC4\u4EF6
"date": {
  "title": "\u65E5\u671F\u9009\u62E9",
  "type": "string",
  "format": "date" // "dateTime"
}
// \u65F6\u95F4\u7EC4\u4EF6
"time": {
  "title": "\u65F6\u95F4\u9009\u62E9",
  "type": "string",
  "format": "time"
}
// \u56FE\u7247\u94FE\u63A5\u7EC4\u4EF6
"image": {
  "title": "\u56FE\u7247\u5C55\u793A",
  "type": "string",
  "format": "image"
}`,lang:"json"}))),n.a.createElement("h3",{id:"default"},n.a.createElement(v.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"default"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),n.a.createElement(W.a,{code:`"list": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "x": {
        "type": "string",
      }
    }
  },
  "default": [{ "x": "a" }, { "x": "b" }]
}`,lang:"json"}))),n.a.createElement("h3",{id:"required"},n.a.createElement(v.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"required"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),n.a.createElement(W.a,{code:`"requiredInput": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "required": true
}`,lang:"json"}),n.a.createElement("h3",{id:"placeholder"},n.a.createElement(v.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"placeholder"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u3002\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\uFF1A")),n.a.createElement(W.a,{code:`"dateRange": {
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"js"}),n.a.createElement("h3",{id:"bind"},n.a.createElement(v.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"bind"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",n.a.createElement(v.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),n.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",n.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),n.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),n.a.createElement("h3",{id:"min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min"},n.a.createElement(v.AnchorLink,{to:"#min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"min (0.x \u7248\u672C ",n.a.createElement("code",null,"min"),",",n.a.createElement("code",null,"minItem")," \u548C ",n.a.createElement("code",null,"minLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"min"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),n.a.createElement("h3",{id:"max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max"},n.a.createElement(v.AnchorLink,{to:"#max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"max (0.x \u7248\u672C ",n.a.createElement("code",null,"max"),",",n.a.createElement("code",null,"maxItem")," \u548C ",n.a.createElement("code",null,"maxLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"max"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),n.a.createElement("h3",{id:"disabled-0x-\u7248\u672C-uidisabled"},n.a.createElement(v.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:disabled"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),n.a.createElement("h3",{id:"readonly-0x-\u7248\u672C-uireadonly"},n.a.createElement(v.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:readonly"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),n.a.createElement("h3",{id:"hidden-0x-\u7248\u672C-uihidden"},n.a.createElement(v.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:hidden"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),n.a.createElement("h3",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},n.a.createElement(v.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:displayType"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"'row'")," | ",n.a.createElement("code",null,"'column'")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),n.a.createElement("h3",{id:"width-0x-\u7248\u672C-uiwidth"},n.a.createElement(v.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:width"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),n.a.createElement("h3",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},n.a.createElement(v.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:labelWidth"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),n.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),n.a.createElement("h3",{id:"classname-0x-\u7248\u672C-uiclassname"},n.a.createElement(v.AnchorLink,{to:"#classname-0x-\u7248\u672C-uiclassname","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"className (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:className"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u660E\u5355\u4E2A\u8868\u5355\u5143\u7D20\u7684 className\uFF0C\u65B9\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F")),n.a.createElement("p",null,"\u4F8B\u5982\u5982\u4E0B\u7684 schema \u4F1A\u5728\u751F\u6210\u5143\u7D20\u7684 ",n.a.createElement("code",null,"fr-field")," \u8FD9\u5C42\u6DFB\u52A0\u4E0A\u7528\u6237\u5B9A\u4E49\u7684 ",n.a.createElement("code",null,"my-className")),n.a.createElement(W.a,{code:`audio_on_mic_limit: {
  className: 'my-className',
  title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}`,lang:"js"}),n.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png",width:"600px"}),n.a.createElement("h3",{id:"widget-0x-\u7248\u672C-uiwidget"},n.a.createElement(v.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:widget"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u201C\u5185\u7F6E\u7EC4\u4EF6\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "widget": "select" // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
}`,lang:"json"}),n.a.createElement("p",null,"FR \u9ED8\u8BA4\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u8BE6\u7EC6\u5339\u914D\u89C4\u5219\u89C1",n.a.createElement(v.Link,{to:"/form-render/schema/inner-widget"},"\u5185\u7F6E\u7EC4\u4EF6"),"\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"widget"),"\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5339\u914D\u201C\u81EA\u5B9A\u4E49\u201D\u7684\u7EC4\u4EF6\uFF0C\u5982\u4F55\u4F7F\u7528 ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",n.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u5143\u7D20\u6E32\u67D3\uFF0C\u53C2\u89C1",n.a.createElement(v.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),n.a.createElement("h3",{id:"readonlywidget"},n.a.createElement(v.AnchorLink,{to:"#readonlywidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnlyWidget"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3")),n.a.createElement("p",null,"readOnly=true \u7684\u60C5\u51B5\uFF0CFormRender \u9ED8\u8BA4\u4F7F\u7528 html \u7EC4\u4EF6\u6E32\u67D3\u3002\u7279\u6B8A\u60C5\u51B5 html \u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6B64\u65F6\u901A\u8FC7\u6307\u660E readOnlyWidget \u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6E32\u67D3"),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "widget": "myWidget", // \u6307\u660E\u4F7F\u7528 myWidget \u6765\u6E32\u67D3
  "readOnlyWidget": "myReadOnlyWidget" // \u6307\u660E\u5728\u53EA\u8BFB\u6A21\u5F0F\u4F7F\u7528 myReadOnlyWidget \u6765\u6E32\u67D3
}`,lang:"json"}),n.a.createElement("h3",{id:"extra"},n.a.createElement(v.AnchorLink,{to:"#extra","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"extra"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5728\u5143\u7D20\u4E0B\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F\uFF0Cextra \u53EF\u4EE5\u662F html string\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EAF\u6587\u6848\uFF0C\u4F1A\u5C55\u793A\u5728\u5143\u7D20\u4E0B\u9762\u4E00\u884C\u7D27\u8D34")),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "extra": "<a href='xxx'>\u8BE6\u7EC6\u89C4\u8303</a>"
}`,lang:"json"}),n.a.createElement("h3",{id:"properties"},n.a.createElement(v.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"properties"),n.a.createElement("p",null,"\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\uFF08type: object\uFF09\u4E2D\u4F7F\u7528\uFF0C",n.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),n.a.createElement(W.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"items"},n.a.createElement(v.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"items"),n.a.createElement("p",null,"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61"),n.a.createElement(W.a,{code:`{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "min": 1,
  "max": 3,
  "widget": "list0",
  "items": {
    "type": "object",
    "properties": {
      "tickets": {
        "title": "\u95E8\u7968\u6570",
        "type": "number"
      }
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"enum--enumnames"},n.a.createElement(v.AnchorLink,{to:"#enum--enumnames","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"enum & enumNames"),n.a.createElement("p",null,"\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C & \u9009\u9879\u7684\u6587\u6848")),n.a.createElement(W.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}
// \u591A\u9009
{
  "title": "\u591A\u9009",
  "type": "array",
  "items": {
    "type": "string"
  },
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),n.a.createElement("h3",{id:"rules"},n.a.createElement(v.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"rules"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A\u6570\u7EC4"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u6240\u6709\u9664\u4E86\u5FC5\u586B\u4EE5\u5916\u7684\u8868\u5355\u6821\u9A8C\u63CF\u8FF0\u901A\u8FC7 ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",n.a.createElement(v.Link,{to:"/form-render/schema/rules"},"rules \u4E66\u5199\u89C4\u8303"))),n.a.createElement("h3",{id:"props-0x-\u7248\u672C-uioptions"},n.a.createElement(v.AnchorLink,{to:"#props-0x-\u7248\u672C-uioptions","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"props (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:options"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aobject"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",n.a.createElement("code",null,"props")," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",n.a.createElement("code",null,"props")," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",n.a.createElement("code",null,"props")," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),n.a.createElement(W.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),n.a.createElement("p",null,"\u8BE6\u89C1 ",n.a.createElement(v.Link,{to:"/form-render/schema/props"},"props \u4E66\u5199\u89C4\u8303"))))))},p8sG:function(Rn,dn,e){"use strict";Rn.exports=e("80pN")}}]);
