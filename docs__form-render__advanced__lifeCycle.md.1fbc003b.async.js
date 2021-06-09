(window.webpackJsonp=window.webpackJsonp||[]).push([[38,12],{"0zqC":function(Tn,vn,e){"use strict";e.r(vn);var U=e("tJVT"),n=e("q1tI"),O=e.n(n),W=e("wx14"),me=e("rePB"),J=e("ODXe"),we=e("U8pU"),De=e("Ff2n"),ge=e("VTBJ"),Un=e("TSYQ"),Ae=e.n(Un),Mn=e("Zm9Q"),Kn=e("5Z9U"),Rn=e("6cGi"),fn=e("KQm4"),Qe=e("wgJM"),$n=e("t23M");function wn(r){var s=Object(n.useRef)(),m=Object(n.useRef)(!1);function b(){for(var C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];m.current||(Qe.a.cancel(s.current),s.current=Object(Qe.a)(function(){r.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){m.current=!0,Qe.a.cancel(s.current)}},[]),b}function jn(r){var s=Object(n.useRef)([]),m=Object(n.useState)({}),b=Object(J.a)(m,2),C=b[1],y=Object(n.useRef)(typeof r=="function"?r():r),R=wn(function(){var B=y.current;s.current.forEach(function($){B=$(B)}),s.current=[],y.current=B,C({})});function j(B){s.current.push(B),R()}return[y.current,j]}var Be=e("4IlW");function qn(r,s){var m,b=r.prefixCls,C=r.id,y=r.active,R=r.rtl,j=r.tab,B=j.key,$=j.tab,x=j.disabled,G=j.closeIcon,z=r.tabBarGutter,oe=r.tabPosition,X=r.closable,k=r.renderWrapper,ue=r.removeAriaLabel,V=r.editable,ne=r.onClick,se=r.onRemove,q=r.onFocus,le="".concat(b,"-tab");n.useEffect(function(){return se},[]);var ee={};oe==="top"||oe==="bottom"?ee[R?"marginLeft":"marginRight"]=z:ee.marginBottom=z;var be=V&&X!==!1&&!x;function re(ie){x||ne(ie)}function ce(ie){ie.preventDefault(),ie.stopPropagation(),V.onEdit("remove",{key:B,event:ie})}var fe=n.createElement("div",{key:B,ref:s,className:Ae()(le,(m={},Object(me.a)(m,"".concat(le,"-with-remove"),be),Object(me.a)(m,"".concat(le,"-active"),y),Object(me.a)(m,"".concat(le,"-disabled"),x),m)),style:ee,onClick:re},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(B),className:"".concat(le,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(B),"aria-disabled":x,tabIndex:x?null:0,onClick:function(Y){Y.stopPropagation(),re(Y)},onKeyDown:function(Y){[Be.a.SPACE,Be.a.ENTER].includes(Y.which)&&(Y.preventDefault(),re(Y))},onFocus:q},$),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(Y){Y.stopPropagation(),ce(Y)}},G||V.removeIcon||"\xD7"));return k&&(fe=k(fe)),fe}var Bn=n.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function at(r,s,m){return Object(n.useMemo)(function(){for(var b,C=new Map,y=s.get((b=r[0])===null||b===void 0?void 0:b.key)||_n,R=y.left+y.width,j=0;j<r.length;j+=1){var B=r[j].key,$=s.get(B);if(!$){var x;$=s.get((x=r[j-1])===null||x===void 0?void 0:x.key)||_n}var G=C.get(B)||Object(ge.a)({},$);G.right=R-G.left-G.width,C.set(B,G)}return C},[r.map(function(b){return b.key}).join("_"),s,m])}var st={width:0,height:0,left:0,top:0,right:0};function I(r,s,m,b,C){var y=C.tabs,R=C.tabPosition,j=C.rtl,B,$,x;["top","bottom"].includes(R)?(B="width",$=j?"right":"left",x=Math.abs(s.left)):(B="height",$="top",x=-s.top);var G=s[B],z=m[B],oe=b[B],X=G;return z+oe>G&&(X=G-oe),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var k=y.length,ue=k,V=0;V<k;V+=1){var ne=r.get(y[V].key)||st;if(ne[$]+ne[B]>x+X){ue=V-1;break}}for(var se=0,q=k-1;q>=0;q-=1){var le=r.get(y[q].key)||st;if(le[$]<x){se=q+1;break}}return[se,ue]},[r,x,X,R,y.map(function(k){return k.key}).join("_"),j])}var E=e("Gytx"),D=e.n(E),d=e("Kwbf");function o(r,s){var m=r.prefixCls,b=r.invalidate,C=r.item,y=r.renderItem,R=r.responsive,j=r.registerSize,B=r.itemKey,$=r.className,x=r.style,G=r.children,z=r.display,oe=r.order,X=r.component,k=X===void 0?"div":X,ue=Object(De.a)(r,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),V=R&&!z;function ne(be){j(B,be)}n.useEffect(function(){return function(){ne(null)}},[]);var se=y&&C!==void 0?y(C):G,q;b||(q={opacity:V?0:1,height:V?0:void 0,overflowY:V?"hidden":void 0,order:R?oe:void 0,pointerEvents:V?"none":void 0});var le={};V&&(le["aria-hidden"]=!0);var ee=n.createElement(k,Object(W.a)({className:Ae()(!b&&m,$),style:Object(ge.a)(Object(ge.a)({},q),x)},le,ue,{ref:s}),se);return R&&(ee=n.createElement($n.default,{onResize:function(re){var ce=re.offsetWidth;ne(ce)}},ee)),ee}var h=n.forwardRef(o);h.displayName="Item";var g=h;function S(){var r=Object(n.useState)({}),s=Object(J.a)(r,2),m=s[1],b=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,R=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function j(B){var $=y;y+=1,b.current.length<$+1&&(b.current[$]=B);var x=b.current[$];function G(z){b.current[$]=typeof z=="function"?z(b.current[$]):z,Qe.a.cancel(R),R=Object(Qe.a)(function(){C.current||m({})})}return[x,G]}return j}var a=function(s,m){var b=n.useContext(N);if(!b){var C=s.component,y=C===void 0?"div":C,R=Object(De.a)(s,["component"]);return n.createElement(y,Object(W.a)({},R,{ref:m}))}var j=b.className,B=Object(De.a)(b,["className"]),$=s.className,x=Object(De.a)(s,["className"]);return n.createElement(N.Provider,{value:null},n.createElement(g,Object(W.a)({ref:m,className:Ae()(j,$)},B,x)))},l=n.forwardRef(a);l.displayName="RawItem";var i=l,N=n.createContext(null),M="responsive",P="invalidate";function u(r){return"+ ".concat(r.length," ...")}function w(r,s){var m=r.prefixCls,b=m===void 0?"rc-overflow":m,C=r.data,y=C===void 0?[]:C,R=r.renderItem,j=r.renderRawItem,B=r.itemKey,$=r.itemWidth,x=$===void 0?10:$,G=r.ssr,z=r.style,oe=r.className,X=r.maxCount,k=r.renderRest,ue=r.renderRawRest,V=r.suffix,ne=r.component,se=ne===void 0?"div":ne,q=r.itemComponent,le=r.onVisibleChange,ee=Object(De.a)(r,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=S(),re=G==="full",ce=be(null),fe=Object(J.a)(ce,2),ie=fe[0],Y=fe[1],de=ie||0,ye=be(new Map),ve=Object(J.a)(ye,2),Re=ve[0],We=ve[1],Oe=be(0),Se=Object(J.a)(Oe,2),Me=Se[0],Te=Se[1],Ne=be(0),Ie=Object(J.a)(Ne,2),$e=Ie[0],qe=Ie[1],xe=be(0),Ue=Object(J.a)(xe,2),He=Ue[0],Le=Ue[1],En=Object(n.useState)(null),tn=Object(J.a)(En,2),Xe=tn[0],on=tn[1],bn=Object(n.useState)(null),On=Object(J.a)(bn,2),Fe=On[0],Ge=On[1],_e=n.useMemo(function(){return Fe===null&&re?Number.MAX_SAFE_INTEGER:Fe||0},[Fe,ie]),Ze=Object(n.useState)(!1),Wn=Object(J.a)(Ze,2),Jn=Wn[0],Ln=Wn[1],rn="".concat(b,"-item"),Dn=Math.max(Me,$e),ln=y.length&&X===M,Pn=X===P,en=ln||typeof X=="number"&&y.length>X,an=Object(n.useMemo)(function(){var he=y;return ln?ie===null&&re?he=y:he=y.slice(0,Math.min(y.length,de/x)):typeof X=="number"&&(he=y.slice(0,X)),he},[y,x,ie,X,ln]),In=Object(n.useMemo)(function(){return ln?y.slice(_e+1):y.slice(an.length)},[y,an,ln,_e]),cn=Object(n.useCallback)(function(he,Ee){var Ke;return typeof B=="function"?B(he):(Ke=B&&(he==null?void 0:he[B]))!==null&&Ke!==void 0?Ke:Ee},[B]),ke=Object(n.useCallback)(R||function(he){return he},[R]);function Ye(he,Ee){Ge(he),Ee||(Ln(he<y.length-1),le==null||le(he))}function zn(he,Ee){Y(Ee.clientWidth)}function Gn(he,Ee){We(function(Ke){var nn=new Map(Ke);return Ee===null?nn.delete(he):nn.set(he,Ee),nn})}function nt(he,Ee){qe(Ee),Te($e)}function Cn(he,Ee){Le(Ee)}function hn(he){return Re.get(cn(an[he],he))}n.useLayoutEffect(function(){if(de&&Dn&&an){var he=He,Ee=an.length,Ke=Ee-1;if(!Ee){Ye(0),on(null);return}for(var nn=0;nn<Ee;nn+=1){var Xn=hn(nn);if(Xn===void 0){Ye(nn-1,!0);break}if(he+=Xn,nn===Ke-1&&he+hn(Ke)<=de){Ye(Ke),on(null);break}else if(he+Dn>de){Ye(nn-1),on(he-Xn-He+$e);break}else if(nn===Ke){Ye(Ke),on(he-He);break}}V&&hn(0)+He>de&&on(null)}},[de,Re,$e,He,cn,an]);var Yn=Jn&&!!In.length,Sn={};Xe!==null&&ln&&(Sn={position:"absolute",left:Xe,top:0});var mn={prefixCls:rn,responsive:ln,component:q,invalidate:Pn},Hn=j?function(he,Ee){var Ke=cn(he,Ee);return n.createElement(N.Provider,{key:Ke,value:Object(ge.a)(Object(ge.a)({},mn),{},{order:Ee,item:he,itemKey:Ke,registerSize:Gn,display:Ee<=_e})},j(he,Ee))}:function(he,Ee){var Ke=cn(he,Ee);return n.createElement(g,Object(W.a)({},mn,{order:Ee,key:Ke,item:he,renderItem:ke,itemKey:Ke,registerSize:Gn,display:Ee<=_e}))},Nn,Qn={order:Yn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Yn};if(ue)ue&&(Nn=n.createElement(N.Provider,{value:Object(ge.a)(Object(ge.a)({},mn),Qn)},ue(In)));else{var un=k||u;Nn=n.createElement(g,Object(W.a)({},mn,Qn),typeof un=="function"?un(In):un)}var An=n.createElement(se,Object(W.a)({className:Ae()(!Pn&&b,oe),style:z,ref:s},ee),an.map(Hn),en?Nn:null,V&&n.createElement(g,Object(W.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:Sn}),V));return ln&&(An=n.createElement($n.default,{onResize:zn},An)),An}var f=n.forwardRef(w);f.displayName="Overflow",f.Item=i,f.RESPONSIVE=M,f.INVALIDATE=P;var t=f,v=t,c=e("1OyB"),A=e("vuIU"),T=e("Ji7U"),L=e("LK+K"),Z=e("bT9E"),Q=e("YrtM"),H=n.createContext(null);function je(r,s){var m=Object(ge.a)({},r);return Object.keys(s).forEach(function(b){var C=s[b];C!==void 0&&(m[b]=C)}),m}function dn(r){var s=r.children,m=r.locked,b=Object(De.a)(r,["children","locked"]),C=n.useContext(H),y=Object(Q.a)(function(){return je(C,b)},[C,b],function(R,j){return!m&&(R[0]!==j[0]||!D()(R[1],j[1]))});return n.createElement(H.Provider,{value:y},s)}function gn(r,s,m,b){var C=n.useContext(H),y=C.activeKey,R=C.onActive,j=C.onInactive,B={active:y===r};return s||(B.onMouseEnter=function($){m==null||m({key:r,domEvent:$}),R(r)},B.onMouseLeave=function($){b==null||b({key:r,domEvent:$}),j(r)}),B}function yn(r){var s=r.item,m=Object(De.a)(r,["item"]);return Object.defineProperty(m,"item",{get:function(){return Object(d.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),m}function p(r){var s=r.icon,m=r.props,b=r.children,C;return typeof s=="function"?C=n.createElement(s,Object(ge.a)({},m)):C=s,C||b||null}function F(r){var s=n.useContext(H),m=s.mode,b=s.rtl,C=s.inlineIndent;if(m!=="inline")return null;var y=r;return b?{paddingRight:y*C}:{paddingLeft:y*C}}var K=[],pe=n.createContext(null);function te(){return n.useContext(pe)}var Pe=n.createContext(K);function Ve(r){var s=n.useContext(Pe);return n.useMemo(function(){return r!==void 0?[].concat(Object(fn.a)(s),[r]):s},[s,r])}var ze=n.createContext(null),Ut=n.createContext(null);function Jt(r,s){return r===void 0?null:"".concat(r,"-").concat(s)}function zt(r){var s=n.useContext(Ut);return Jt(s,r)}var br=function(r){Object(T.a)(m,r);var s=Object(L.a)(m);function m(){return Object(c.a)(this,m),s.apply(this,arguments)}return Object(A.a)(m,[{key:"render",value:function(){var C=this.props,y=C.title,R=C.attribute,j=C.elementRef,B=Object(De.a)(C,["title","attribute","elementRef"]),$=Object(Z.a)(B,["eventKey"]);return Object(d.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(v.Item,Object(W.a)({},R,{title:typeof y=="string"?y:void 0},$,{ref:j}))}}]),m}(n.Component),Or=function(s){var m,b=s.style,C=s.className,y=s.eventKey,R=s.disabled,j=s.itemIcon,B=s.children,$=s.role,x=s.onMouseEnter,G=s.onMouseLeave,z=s.onClick,oe=s.onKeyDown,X=s.onFocus,k=Object(De.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=zt(y),V=n.useContext(H),ne=V.prefixCls,se=V.onItemClick,q=V.disabled,le=V.overflowDisabled,ee=V.itemIcon,be=V.selectedKeys,re=V.onActive,ce="".concat(ne,"-item"),fe=n.useRef(),ie=n.useRef(),Y=q||R,de=Ve(y),ye=function(xe){return{key:y,keyPath:de,item:fe.current,domEvent:xe}},ve=j||ee,Re=gn(y,Y,x,G),We=Re.active,Oe=Object(De.a)(Re,["active"]),Se=be.includes(y),Me=F(de.length),Te=function(xe){if(!Y){var Ue=ye(xe);z==null||z(yn(Ue)),se(Ue)}},Ne=function(xe){if(oe==null||oe(xe),xe.which===Be.a.ENTER){var Ue=ye(xe);z==null||z(yn(Ue)),se(Ue)}},Ie=function(xe){re(y),X==null||X(xe)},$e={};return s.role==="option"&&($e["aria-selected"]=Se),n.createElement(br,Object(W.a)({ref:fe,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":le&&ue?null:ue},k,Oe,$e,{component:"li","aria-disabled":R,style:Object(ge.a)(Object(ge.a)({},Me),b),className:Ae()(ce,(m={},Object(me.a)(m,"".concat(ce,"-active"),We),Object(me.a)(m,"".concat(ce,"-selected"),Se),Object(me.a)(m,"".concat(ce,"-disabled"),Y),m),C),onClick:Te,onKeyDown:Ne,onFocus:Ie}),B,n.createElement(p,{props:Object(ge.a)(Object(ge.a)({},s),{},{isSelected:Se}),icon:ve}))};function Cr(r){var s=r.eventKey,m=te(),b=Ve(s);return n.useEffect(function(){if(m)return m.registerPath(s,b),function(){m.unregisterPath(s,b)}},[b]),m?null:n.createElement(Or,r)}var Dt=Cr;function Pt(r,s){return Object(Mn.a)(r).map(function(m,b){if(n.isValidElement(m)){var C=m.key;return C==null&&(C="tmp_key-".concat([].concat(Object(fn.a)(s),[b]).join("-"))),n.cloneElement(m,{key:C,eventKey:C})}return m})}function et(r){var s=n.useRef(r);s.current=r;var m=n.useCallback(function(){for(var b,C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];return(b=s.current)===null||b===void 0?void 0:b.call.apply(b,[s].concat(y))},[]);return r?m:void 0}var Sr=function(s,m){var b=s.className,C=s.children,y=Object(De.a)(s,["className","children"]),R=n.useContext(H),j=R.prefixCls,B=R.mode;return n.createElement("ul",Object(W.a)({className:Ae()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(B==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:m}),C)},Gt=n.forwardRef(Sr);Gt.displayName="SubMenuList";var Yt=Gt,Rr=e("uciX"),xn={adjustX:1,adjustY:1},Ht={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:xn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:xn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:xn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:xn,offset:[4,0]}},fa=Ht;function Qt(r,s,m){if(s)return s;if(m)return m[r]||m.other}var Er={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(r){var s=r.prefixCls,m=r.visible,b=r.children,C=r.popup,y=r.popupClassName,R=r.popupOffset,j=r.disabled,B=r.mode,$=r.onVisibleChange,x=n.useContext(H),G=x.getPopupContainer,z=x.rtl,oe=x.subMenuOpenDelay,X=x.subMenuCloseDelay,k=x.builtinPlacements,ue=x.triggerSubMenuAction,V=x.forceSubMenuRender,ne=x.motion,se=x.defaultMotions,q=n.useState(!1),le=Object(J.a)(q,2),ee=le[0],be=le[1],re=z?Object(ge.a)(Object(ge.a)({},jr),k):Object(ge.a)(Object(ge.a)({},Ht),k),ce=Er[B],fe=Qt(B,ne,se),ie=Object(ge.a)(Object(ge.a)({},fe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Y=n.useRef();return n.useEffect(function(){return Y.current=Object(Qe.a)(function(){be(m)}),function(){Qe.a.cancel(Y.current)}},[m]),n.createElement(Rr.a,{prefixCls:s,popupClassName:Ae()("".concat(s,"-popup"),Object(me.a)({},"".concat(s,"-rtl"),z),y),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:re,popupPlacement:ce,popupVisible:ee,popup:C,popupAlign:R&&{offset:R},action:j?[]:[ue],mouseEnterDelay:oe,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:V,popupMotion:ie},b)}var Pr=e("8XRh");function Ir(r){var s=r.id,m=r.open,b=r.keyPath,C=r.children,y="inline",R=n.useContext(H),j=R.prefixCls,B=R.forceSubMenuRender,$=R.motion,x=R.defaultMotions,G=R.mode,z=n.useRef(!1);z.current=G===y;var oe=n.useState(!z.current),X=Object(J.a)(oe,2),k=X[0],ue=X[1],V=z.current?m:!1;n.useEffect(function(){z.current&&ue(!1)},[G]);var ne=Object(ge.a)({},Qt(y,$,x));b.length>1&&(ne.motionAppear=!1);var se=ne.onVisibleChanged;return ne.onVisibleChanged=function(q){return!z.current&&!q&&ue(!0),se==null?void 0:se(q)},k?null:n.createElement(dn,{mode:y,locked:!z.current},n.createElement(Pr.default,Object(W.a)({visible:V},ne,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(q){var le=q.className,ee=q.style;return n.createElement(Yt,{id:s,className:le,style:ee},C)}))}var Nr=function(s){var m,b=s.style,C=s.className,y=s.title,R=s.eventKey,j=s.disabled,B=s.internalPopupClose,$=s.children,x=s.itemIcon,G=s.expandIcon,z=s.popupClassName,oe=s.popupOffset,X=s.onClick,k=s.onMouseEnter,ue=s.onMouseLeave,V=s.onTitleClick,ne=s.onTitleMouseEnter,se=s.onTitleMouseLeave,q=Object(De.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=zt(R),ee=n.useContext(H),be=ee.prefixCls,re=ee.mode,ce=ee.openKeys,fe=ee.disabled,ie=ee.overflowDisabled,Y=ee.activeKey,de=ee.selectedKeys,ye=ee.itemIcon,ve=ee.expandIcon,Re=ee.onItemClick,We=ee.onOpenChange,Oe=ee.onActive,Se=n.useContext(ze),Me=Se.isSubPathKey,Te=Ve(),Ne="".concat(be,"-submenu"),Ie=fe||j,$e=n.useRef(),qe=n.useRef(),xe=x||ye,Ue=G||ve,He=ce.includes(R),Le=!ie&&He,En=Me(de,R),tn=gn(R,Ie,ne,se),Xe=tn.active,on=Object(De.a)(tn,["active"]),bn=n.useState(!1),On=Object(J.a)(bn,2),Fe=On[0],Ge=On[1],_e=function(Ye){Ie||Ge(Ye)},Ze=function(Ye){_e(!0),k==null||k({key:R,domEvent:Ye})},Wn=function(Ye){_e(!1),ue==null||ue({key:R,domEvent:Ye})},Jn=n.useMemo(function(){return Xe||(re!=="inline"?Fe||Me([Y],R):!1)},[re,Xe,Y,Fe,R,Me]),Ln=F(Te.length),rn=function(Ye){Ie||(V==null||V({key:R,domEvent:Ye}),re==="inline"&&We(R,!He))},Dn=et(function(ke){X==null||X(yn(ke)),Re(ke)}),ln=function(Ye){re!=="inline"&&We(R,Ye)},Pn=function(){Oe(R)},en=le&&"".concat(le,"-popup"),an=n.createElement("div",Object(W.a)({role:"menuitem",style:Ln,className:"".concat(Ne,"-title"),tabIndex:Ie?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":ie&&le?null:le,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Ie,onClick:rn,onFocus:Pn},on),y,n.createElement(p,{icon:re!=="horizontal"?Ue:null,props:Object(ge.a)(Object(ge.a)({},s),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ne,"-arrow")}))),In=n.useRef(re);if(re!=="inline"&&(In.current=Te.length>1?"vertical":re),!ie){var cn=In.current;an=n.createElement(Dr,{mode:cn,prefixCls:Ne,visible:!B&&Le&&re!=="inline",popupClassName:z,popupOffset:oe,popup:n.createElement(dn,{mode:cn},n.createElement(Yt,{id:en,ref:qe},$)),disabled:Ie,onVisibleChange:ln},an)}return n.createElement(dn,{onItemClick:Dn,mode:re==="horizontal"?"vertical":re,itemIcon:xe,expandIcon:Ue},n.createElement(v.Item,Object(W.a)({role:"none"},q,{component:"li",style:b,className:Ae()(Ne,"".concat(Ne,"-").concat(re),C,(m={},Object(me.a)(m,"".concat(Ne,"-open"),Le),Object(me.a)(m,"".concat(Ne,"-active"),Jn),Object(me.a)(m,"".concat(Ne,"-selected"),En),Object(me.a)(m,"".concat(Ne,"-disabled"),Ie),m)),onMouseEnter:Ze,onMouseLeave:Wn}),an,!ie&&n.createElement(Ir,{id:en,open:Le,keyPath:Te},$)))};function Xt(r){var s=r.eventKey,m=r.children,b=Ve(s),C=Pt(m,b),y=te();n.useEffect(function(){if(y)return y.registerPath(s,b),function(){y.unregisterPath(s,b)}},[b]);var R;return y?R=C:R=n.createElement(Nr,r,C),n.createElement(Pe.Provider,{value:b},R)}var Ar=e("x/xZ");function Zt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ar.a)(r)){var m=r.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(m)||r.isContentEditable||m==="a"&&!!r.getAttribute("href"),C=r.getAttribute("tabindex"),y=Number(C),R=null;return C&&!Number.isNaN(y)?R=y:b&&R===null&&(R=0),b&&r.disabled&&(R=null),R!==null&&(R>=0||s&&R<0)}return!1}function kt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Object(fn.a)(r.querySelectorAll("*")).filter(function(b){return Zt(b,s)});return Zt(r,s)&&m.unshift(r),m}var mt=null;function pa(){mt=document.activeElement}function ha(){mt=null}function va(){if(mt)try{mt.focus()}catch(r){}}function ga(r,s){if(s.keyCode===9){var m=kt(r),b=m[s.shiftKey?0:m.length-1],C=b===document.activeElement||r===document.activeElement;if(C){var y=m[s.shiftKey?m.length-1:0];y.focus(),s.preventDefault()}}}var It=Be.a.LEFT,Nt=Be.a.RIGHT,At=Be.a.UP,ft=Be.a.DOWN,pt=Be.a.ENTER,qt=Be.a.ESC,_t=[At,ft,It,Nt];function Fr(r,s,m,b){var C,y,R,j,B="prev",$="next",x="children",G="parent";if(r==="inline"&&b===pt)return{inlineTrigger:!0};var z=(C={},Object(me.a)(C,At,B),Object(me.a)(C,ft,$),C),oe=(y={},Object(me.a)(y,It,m?$:B),Object(me.a)(y,Nt,m?B:$),Object(me.a)(y,ft,x),Object(me.a)(y,pt,x),y),X=(R={},Object(me.a)(R,At,B),Object(me.a)(R,ft,$),Object(me.a)(R,pt,x),Object(me.a)(R,qt,G),Object(me.a)(R,It,m?x:G),Object(me.a)(R,Nt,m?G:x),R),k={inline:z,horizontal:oe,vertical:X,inlineSub:z,horizontalSub:X,verticalSub:X},ue=(j=k["".concat(r).concat(s?"":"Sub")])===null||j===void 0?void 0:j[b];switch(ue){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case x:return{offset:1,sibling:!1};default:return null}}function Tr(r){for(var s=r;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function Mr(r,s){for(var m=r||document.activeElement;m;){if(s.has(m))return m;m=m.parentElement}return null}function Kr(r,s){var m=kt(r,!0);return m.filter(function(b){return s.has(b)})}function er(r,s,m){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var C=Kr(r,s),y=C.length,R=C.findIndex(function(j){return m===j});return b<0?R===-1?R=y-1:R-=1:b>0&&(R+=1),R=(R+y)%y,C[R]}function wr(r,s,m,b,C,y,R,j,B,$){var x=n.useRef(),G=n.useRef();G.current=s;var z=function(){Qe.a.cancel(x.current)};return n.useEffect(function(){return function(){z()}},[]),function(oe){var X=oe.which;if([].concat(_t,[pt,qt]).includes(X)){var k,ue,V,ne=function(){k=new Set,ue=new Map,V=new Map;var ye=y();return ye.forEach(function(ve){var Re=document.querySelector("[data-menu-id='".concat(Jt(b,ve),"']"));Re&&(k.add(Re),V.set(Re,ve),ue.set(ve,Re))}),k};ne();var se=ue.get(s),q=Mr(se,k),le=V.get(q),ee=Fr(r,R(le,!0).length===1,m,X);if(!ee)return;_t.includes(X)&&oe.preventDefault();var be=function(ye){if(ye){var ve=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(ve=Re);var We=V.get(ye);j(We),z(),x.current=Object(Qe.a)(function(){G.current===We&&ve.focus()})}};if(ee.sibling||!q){var re;!q||r==="inline"?re=C.current:re=Tr(q);var ce=er(re,k,q,ee.offset);be(ce)}else if(ee.inlineTrigger)B(le);else if(ee.offset>0)B(le,!0),z(),x.current=Object(Qe.a)(function(){ne();var de=q.getAttribute("aria-controls"),ye=document.getElementById(de),ve=er(ye,k);be(ve)},5);else if(ee.offset<0){var fe=R(le,!0),ie=fe[fe.length-2],Y=ue.get(ie);B(ie,!1),be(Y)}}$==null||$(oe)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(r){var s=Object(Rn.a)(r,{value:r}),m=Object(J.a)(s,2),b=m[0],C=m[1];return n.useEffect(function(){nr+=1;var y="".concat(Br,"-").concat(nr);C("rc-menu-uuid-".concat(y))},[]),b}var ya=e("p8sG");function Lr(r){Promise.resolve().then(r)}var Ft="__RC_UTIL_PATH_SPLIT__",tr=function(s){return s.join(Ft)},$r=function(s){return s.split(Ft)},Tt="rc-menu-more";function xr(){var r=n.useState({}),s=Object(J.a)(r,2),m=s[1],b=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),R=Object(J.a)(y,2),j=R[0],B=R[1],$=Object(n.useRef)(0),x=Object(n.useCallback)(function(V,ne){var se=tr(ne);C.current.set(se,V),b.current.set(V,se),$.current+=1;var q=$.current;Lr(function(){q===$.current&&m({})})},[]),G=Object(n.useCallback)(function(V,ne){var se=tr(ne);C.current.delete(se),b.current.delete(V)},[]),z=Object(n.useCallback)(function(V){B(V)},[]),oe=Object(n.useCallback)(function(V,ne){var se=b.current.get(V)||"",q=$r(se);return ne&&j.includes(q[0])&&q.unshift(Tt),q},[j]),X=Object(n.useCallback)(function(V,ne){return V.some(function(se){var q=oe(se,!0);return q.includes(ne)})},[oe]),k=function(){var ne=Object(fn.a)(b.current.keys());return j.length&&ne.push(Tt),ne},ue=Object(n.useCallback)(function(V){var ne="".concat(b.current.get(V)).concat(Ft),se=new Set;return Object(fn.a)(C.current.keys()).forEach(function(q){q.startsWith(ne)&&se.add(C.current.get(q))}),se},[]);return{registerPath:x,unregisterPath:G,refreshOverflowKeys:z,isSubPathKey:X,getKeyPath:oe,getKeys:k,getSubPathKeys:ue}}var ht=[],Vr=function(s){var m,b,C=s.prefixCls,y=C===void 0?"rc-menu":C,R=s.style,j=s.className,B=s.tabIndex,$=B===void 0?0:B,x=s.children,G=s.direction,z=s.id,oe=s.mode,X=oe===void 0?"vertical":oe,k=s.inlineCollapsed,ue=s.disabled,V=s.disabledOverflow,ne=s.subMenuOpenDelay,se=ne===void 0?.1:ne,q=s.subMenuCloseDelay,le=q===void 0?.1:q,ee=s.forceSubMenuRender,be=s.defaultOpenKeys,re=s.openKeys,ce=s.activeKey,fe=s.defaultActiveFirst,ie=s.selectable,Y=ie===void 0?!0:ie,de=s.multiple,ye=de===void 0?!1:de,ve=s.defaultSelectedKeys,Re=s.selectedKeys,We=s.onSelect,Oe=s.onDeselect,Se=s.inlineIndent,Me=Se===void 0?24:Se,Te=s.motion,Ne=s.defaultMotions,Ie=s.triggerSubMenuAction,$e=Ie===void 0?"hover":Ie,qe=s.builtinPlacements,xe=s.itemIcon,Ue=s.expandIcon,He=s.overflowedIndicator,Le=He===void 0?"...":He,En=s.getPopupContainer,tn=s.onClick,Xe=s.onOpenChange,on=s.onKeyDown,bn=s.openAnimation,On=s.openTransitionName,Fe=Object(De.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=Pt(x,ht),_e=n.useState(!1),Ze=Object(J.a)(_e,2),Wn=Ze[0],Jn=Ze[1],Ln=n.useRef(),rn=Wr(z),Dn=G==="rtl",ln=n.useMemo(function(){return X==="inline"&&k?["vertical",k]:[X,!1]},[X,k]),Pn=Object(J.a)(ln,2),en=Pn[0],an=Pn[1],In=n.useState(0),cn=Object(J.a)(In,2),ke=cn[0],Ye=cn[1],zn=ke>=Ge.length-1||en!=="horizontal"||V,Gn=Object(Rn.a)(be,{value:re,postState:function(_){return _||ht}}),nt=Object(J.a)(Gn,2),Cn=nt[0],hn=nt[1],Yn=n.useState(Cn),Sn=Object(J.a)(Yn,2),mn=Sn[0],Hn=Sn[1],Nn=en==="inline",Qn=n.useRef(!1);n.useEffect(function(){Nn&&Hn(Cn)},[Cn]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(Nn)hn(mn);else{var ae=[];hn(ae),Xe==null||Xe(ae)}},[Nn]);var un=xr(),An=un.registerPath,he=un.unregisterPath,Ee=un.refreshOverflowKeys,Ke=un.isSubPathKey,nn=un.getKeyPath,Xn=un.getKeys,gt=un.getSubPathKeys,Bt=n.useMemo(function(){return{registerPath:An,unregisterPath:he}},[An,he]),Wt=n.useMemo(function(){return{isSubPathKey:Ke}},[Ke]);n.useEffect(function(){Ee(zn?ht:Ge.slice(ke+1).map(function(ae){return ae.key}))},[ke,zn]);var Lt=Object(Rn.a)(ce||fe&&((m=Ge[0])===null||m===void 0?void 0:m.key),{value:ce}),tt=Object(J.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(ae){ot(ae)}),$t=et(function(){ot(void 0)}),Ot=Object(Rn.a)(ve||[],{value:Re,postState:function(_){return Array.isArray(_)?_:_==null?ht:[_]}}),Ct=Object(J.a)(Ot,2),rt=Ct[0],Fn=Ct[1],St=function(_){if(!!Y){var Ce=_.key,Je=rt.includes(Ce),sn;Je?sn=rt.filter(function(kn){return kn!==Ce}):ye?sn=[].concat(Object(fn.a)(rt),[Ce]):sn=[Ce],Fn(sn);var Vn=Object(ge.a)(Object(ge.a)({},_),{},{selectedKeys:sn});Je?Oe==null||Oe(Vn):We==null||We(Vn)}},Rt=et(function(ae){tn==null||tn(yn(ae)),St(ae)}),lt=et(function(ae,_){var Ce=Cn.filter(function(sn){return sn!==ae});if(_)Ce.push(ae);else if(en!=="inline"){var Je=gt(ae);Ce=Ce.filter(function(sn){return!Je.has(sn)})}D()(Cn,Ce)||(hn(Ce),Xe==null||Xe(Ce))}),Zn=et(En),ut=function(_,Ce){var Je=Ce!=null?Ce:!Cn.includes(_);lt(_,Je)},dt=wr(en,yt,Dn,rn,Ln,Xn,nn,ot,ut,on);n.useEffect(function(){Jn(!0)},[]);var jt=en!=="horizontal"||V?Ge:Ge.map(function(ae,_){return n.createElement(dn,{key:ae.key,overflowDisabled:_>ke},ae)}),Et=n.createElement(v,Object(W.a)({id:z,ref:Ln,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:Ae()(y,"".concat(y,"-root"),"".concat(y,"-").concat(en),j,(b={},Object(me.a)(b,"".concat(y,"-inline-collapsed"),an),Object(me.a)(b,"".concat(y,"-rtl"),Dn),b)),dir:G,style:R,role:"menu",tabIndex:$,data:jt,renderRawItem:function(_){return _},renderRawRest:function(_){var Ce=_.length,Je=Ce?Ge.slice(-Ce):null;return n.createElement(Xt,{eventKey:Tt,title:Le,disabled:zn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||V?v.INVALIDATE:v.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(_){Ye(_)},onKeyDown:dt},Fe));return n.createElement(Ut.Provider,{value:rn},n.createElement(dn,{prefixCls:y,mode:en,openKeys:Cn,rtl:Dn,disabled:ue,motion:Wn?Te:null,defaultMotions:Wn?Ne:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:se,subMenuCloseDelay:le,forceSubMenuRender:ee,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:xe,expandIcon:Ue,onItemClick:Rt,onOpenChange:lt},n.createElement(ze.Provider,{value:Wt},Et),n.createElement(pe.Provider,{value:Bt},Ge)))},Ur=Vr,Jr=function(s){var m=s.className,b=s.title,C=s.eventKey,y=s.children,R=Object(De.a)(s,["className","title","eventKey","children"]),j=n.useContext(H),B=j.prefixCls,$="".concat(B,"-item-group");return n.createElement("li",Object(W.a)({},R,{onClick:function(G){return G.stopPropagation()},className:Ae()($,m)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),n.createElement("ul",{className:"".concat($,"-list")},y))};function zr(r){var s=r.children,m=Object(De.a)(r,["children"]),b=Ve(m.eventKey),C=Pt(s,b),y=te();return y?C:n.createElement(Jr,m,C)}function Gr(r){var s=r.className,m=r.style,b=n.useContext(H),C=b.prefixCls,y=te();return y?null:n.createElement("li",{className:Ae()("".concat(C,"-item-divider"),s),style:m})}var it=Ur;it.Item=Dt,it.SubMenu=Xt,it.ItemGroup=zr,it.Divider=Gr;var Yr=it,Hr=e("eDIo");function Qr(r,s){var m=r.prefixCls,b=r.editable,C=r.locale,y=r.style;return!b||b.showAdd===!1?null:n.createElement("button",{ref:s,type:"button",className:"".concat(m,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(j){b.onEdit("add",{event:j})}},b.addIcon||"+")}var rr=n.forwardRef(Qr);function Xr(r,s){var m=r.prefixCls,b=r.id,C=r.tabs,y=r.locale,R=r.mobile,j=r.moreIcon,B=j===void 0?"More":j,$=r.moreTransitionName,x=r.style,G=r.className,z=r.editable,oe=r.tabBarGutter,X=r.rtl,k=r.onTabClick,ue=Object(n.useState)(!1),V=Object(J.a)(ue,2),ne=V[0],se=V[1],q=Object(n.useState)(null),le=Object(J.a)(q,2),ee=le[0],be=le[1],re="".concat(b,"-more-popup"),ce="".concat(m,"-dropdown"),fe=ee!==null?"".concat(re,"-").concat(ee):null,ie=y==null?void 0:y.dropdownAriaLabel,Y=n.createElement(Yr,{onClick:function(Se){var Me=Se.key,Te=Se.domEvent;k(Me,Te),se(!1)},id:re,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[ee],"aria-label":ie!==void 0?ie:"expanded dropdown"},C.map(function(Oe){return n.createElement(Dt,{key:Oe.key,id:"".concat(re,"-").concat(Oe.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function de(Oe){for(var Se=C.filter(function($e){return!$e.disabled}),Me=Se.findIndex(function($e){return $e.key===ee})||0,Te=Se.length,Ne=0;Ne<Te;Ne+=1){Me=(Me+Oe+Te)%Te;var Ie=Se[Me];if(!Ie.disabled){be(Ie.key);return}}}function ye(Oe){var Se=Oe.which;if(!ne){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(Se)&&(se(!0),Oe.preventDefault());return}switch(Se){case Be.a.UP:de(-1),Oe.preventDefault();break;case Be.a.DOWN:de(1),Oe.preventDefault();break;case Be.a.ESC:se(!1);break;case Be.a.SPACE:case Be.a.ENTER:ee!==null&&k(ee,Oe);break}}Object(n.useEffect)(function(){var Oe=document.getElementById(fe);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[ee]),Object(n.useEffect)(function(){ne||be(null)},[ne]);var ve=Object(me.a)({},X?"marginLeft":"marginRight",oe);C.length||(ve.visibility="hidden",ve.order=1);var Re=Ae()(Object(me.a)({},"".concat(ce,"-rtl"),X)),We=R?null:n.createElement(Hr.default,{prefixCls:ce,overlay:Y,trigger:["hover"],visible:ne,transitionName:$,onVisibleChange:se,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(m,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":re,id:"".concat(b,"-more"),"aria-expanded":ne,onKeyDown:ye},B));return n.createElement("div",{className:Ae()("".concat(m,"-nav-operations"),G),style:x,ref:s},We,n.createElement(rr,{prefixCls:m,locale:y,editable:z}))}var Zr=n.forwardRef(Xr),Mt=Object(n.createContext)(null),kr=.1,ar=.01,vt=20,sr=Math.pow(.995,vt);function qr(r,s){var m=Object(n.useState)(),b=Object(J.a)(m,2),C=b[0],y=b[1],R=Object(n.useState)(0),j=Object(J.a)(R,2),B=j[0],$=j[1],x=Object(n.useState)(0),G=Object(J.a)(x,2),z=G[0],oe=G[1],X=Object(n.useState)(),k=Object(J.a)(X,2),ue=k[0],V=k[1],ne=Object(n.useRef)();function se(ce){var fe=ce.touches[0],ie=fe.screenX,Y=fe.screenY;y({x:ie,y:Y}),window.clearInterval(ne.current)}function q(ce){if(!!C){ce.preventDefault();var fe=ce.touches[0],ie=fe.screenX,Y=fe.screenY;y({x:ie,y:Y});var de=ie-C.x,ye=Y-C.y;s(de,ye);var ve=Date.now();$(ve),oe(ve-B),V({x:de,y:ye})}}function le(){if(!!C&&(y(null),V(null),ue)){var ce=ue.x/z,fe=ue.y/z,ie=Math.abs(ce),Y=Math.abs(fe);if(Math.max(ie,Y)<kr)return;var de=ce,ye=fe;ne.current=window.setInterval(function(){if(Math.abs(de)<ar&&Math.abs(ye)<ar){window.clearInterval(ne.current);return}de*=sr,ye*=sr,s(de*vt,ye*vt)},vt)}}var ee=Object(n.useRef)();function be(ce){var fe=ce.deltaX,ie=ce.deltaY,Y=0,de=Math.abs(fe),ye=Math.abs(ie);de===ye?Y=ee.current==="x"?fe:ie:de>ye?(Y=fe,ee.current="x"):(Y=ie,ee.current="y"),s(-Y,-Y)&&ce.preventDefault()}var re=Object(n.useRef)(null);re.current={onTouchStart:se,onTouchMove:q,onTouchEnd:le,onWheel:be},n.useEffect(function(){function ce(de){re.current.onTouchStart(de)}function fe(de){re.current.onTouchMove(de)}function ie(de){re.current.onTouchEnd(de)}function Y(de){re.current.onWheel(de)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),r.current.addEventListener("touchstart",ce,{passive:!1}),r.current.addEventListener("wheel",Y),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",ie)}},[])}function _r(){var r=Object(n.useRef)(new Map);function s(b){return r.current.has(b)||r.current.set(b,n.createRef()),r.current.get(b)}function m(b){r.current.delete(b)}return[s,m]}function ir(r,s){var m=n.useRef(r),b=n.useState({}),C=Object(J.a)(b,2),y=C[1];function R(j){var B=typeof j=="function"?j(m.current):j;B!==m.current&&s(B,m.current),m.current=B,y({})}return[m.current,R]}var or=function(s){var m=s.position,b=s.prefixCls,C=s.extra;if(!C)return null;var y,R=C;return m==="right"&&(y=R.right||!R.left&&R||null),m==="left"&&(y=R.left||null),y?n.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function ea(r,s){var m,b=n.useContext(Mt),C=b.prefixCls,y=b.tabs,R=r.className,j=r.style,B=r.id,$=r.animated,x=r.activeKey,G=r.rtl,z=r.extra,oe=r.editable,X=r.locale,k=r.tabPosition,ue=r.tabBarGutter,V=r.children,ne=r.onTabClick,se=r.onTabScroll,q=Object(n.useRef)(),le=Object(n.useRef)(),ee=Object(n.useRef)(),be=Object(n.useRef)(),re=_r(),ce=Object(J.a)(re,2),fe=ce[0],ie=ce[1],Y=k==="top"||k==="bottom",de=ir(0,function(ae,_){Y&&se&&se({direction:ae>_?"left":"right"})}),ye=Object(J.a)(de,2),ve=ye[0],Re=ye[1],We=ir(0,function(ae,_){!Y&&se&&se({direction:ae>_?"top":"bottom"})}),Oe=Object(J.a)(We,2),Se=Oe[0],Me=Oe[1],Te=Object(n.useState)(0),Ne=Object(J.a)(Te,2),Ie=Ne[0],$e=Ne[1],qe=Object(n.useState)(0),xe=Object(J.a)(qe,2),Ue=xe[0],He=xe[1],Le=Object(n.useState)(0),En=Object(J.a)(Le,2),tn=En[0],Xe=En[1],on=Object(n.useState)(0),bn=Object(J.a)(on,2),On=bn[0],Fe=bn[1],Ge=Object(n.useState)(null),_e=Object(J.a)(Ge,2),Ze=_e[0],Wn=_e[1],Jn=Object(n.useState)(null),Ln=Object(J.a)(Jn,2),rn=Ln[0],Dn=Ln[1],ln=Object(n.useState)(0),Pn=Object(J.a)(ln,2),en=Pn[0],an=Pn[1],In=Object(n.useState)(0),cn=Object(J.a)(In,2),ke=cn[0],Ye=cn[1],zn=jn(new Map),Gn=Object(J.a)(zn,2),nt=Gn[0],Cn=Gn[1],hn=at(y,nt,Ie),Yn="".concat(C,"-nav-operations-hidden"),Sn=0,mn=0;Y?G?(Sn=0,mn=Math.max(0,Ie-Ze)):(Sn=Math.min(0,Ze-Ie),mn=0):(Sn=Math.min(0,rn-Ue),mn=0);function Hn(ae){return ae<Sn?Sn:ae>mn?mn:ae}var Nn=Object(n.useRef)(),Qn=Object(n.useState)(),un=Object(J.a)(Qn,2),An=un[0],he=un[1];function Ee(){he(Date.now())}function Ke(){window.clearTimeout(Nn.current)}qr(q,function(ae,_){function Ce(Je,sn){Je(function(Vn){var kn=Hn(Vn+sn);return kn})}if(Y){if(Ze>=Ie)return!1;Ce(Re,ae)}else{if(rn>=Ue)return!1;Ce(Me,_)}return Ke(),Ee(),!0}),Object(n.useEffect)(function(){return Ke(),An&&(Nn.current=window.setTimeout(function(){he(0)},100)),Ke},[An]);function nn(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,_=hn.get(ae)||{width:0,height:0,left:0,right:0,top:0};if(Y){var Ce=ve;G?_.right<ve?Ce=_.right:_.right+_.width>ve+Ze&&(Ce=_.right+_.width-Ze):_.left<-ve?Ce=-_.left:_.left+_.width>-ve+Ze&&(Ce=-(_.left+_.width-Ze)),Me(0),Re(Hn(Ce))}else{var Je=Se;_.top<-Se?Je=-_.top:_.top+_.height>-Se+rn&&(Je=-(_.top+_.height-rn)),Re(0),Me(Hn(Je))}}var Xn=I(hn,{width:Ze,height:rn,left:ve,top:Se},{width:tn,height:On},{width:en,height:ke},Object(ge.a)(Object(ge.a)({},r),{},{tabs:y})),gt=Object(J.a)(Xn,2),Bt=gt[0],Wt=gt[1],Lt=y.map(function(ae){var _=ae.key;return n.createElement(Bn,{id:B,prefixCls:C,key:_,rtl:G,tab:ae,closable:ae.closable,editable:oe,active:_===x,tabPosition:k,tabBarGutter:ue,renderWrapper:V,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:fe(_),onClick:function(Je){ne(_,Je)},onRemove:function(){ie(_)},onFocus:function(){nn(_),Ee(),G||(q.current.scrollLeft=0),q.current.scrollTop=0}})}),tt=wn(function(){var ae,_,Ce,Je,sn,Vn,kn,xt,Vt,la=((ae=q.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,ua=((_=q.current)===null||_===void 0?void 0:_.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((sn=ee.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,ca=((Vn=ee.current)===null||Vn===void 0?void 0:Vn.offsetHeight)||0;Wn(la),Dn(ua),an(mr),Ye(fr);var pr=(((kn=le.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,hr=(((xt=le.current)===null||xt===void 0?void 0:xt.offsetHeight)||0)-fr;$e(pr),He(hr);var vr=(Vt=ee.current)===null||Vt===void 0?void 0:Vt.className.includes(Yn);Xe(pr-(vr?0:da)),Fe(hr-(vr?0:ca)),Cn(function(){var gr=new Map;return y.forEach(function(ma){var yr=ma.key,ct=fe(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=y.slice(0,Bt),ot=y.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(n.useState)(),Ot=Object(J.a)($t,2),Ct=Ot[0],rt=Ot[1],Fn=hn.get(x),St=Object(n.useRef)();function Rt(){Qe.a.cancel(St.current)}Object(n.useEffect)(function(){var ae={};return Fn&&(Y?(G?ae.right=Fn.right:ae.left=Fn.left,ae.width=Fn.width):(ae.top=Fn.top,ae.height=Fn.height)),Rt(),St.current=Object(Qe.a)(function(){rt(ae)}),Rt},[Fn,Y,G]),Object(n.useEffect)(function(){nn()},[x,Fn,hn,Y]),Object(n.useEffect)(function(){tt()},[G,ue,x,y.map(function(ae){return ae.key}).join("_")]);var lt=!!bt.length,Zn="".concat(C,"-nav-wrap"),ut,dt,jt,Et;return Y?G?(dt=ve>0,ut=ve+Ze<Ie):(ut=ve<0,dt=-ve+Ze<Ie):(jt=Se<0,Et=-Se+rn<Ue),n.createElement("div",{ref:s,role:"tablist",className:Ae()("".concat(C,"-nav"),R),style:j,onKeyDown:function(){Ee()}},n.createElement(or,{position:"left",extra:z,prefixCls:C}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Ae()(Zn,(m={},Object(me.a)(m,"".concat(Zn,"-ping-left"),ut),Object(me.a)(m,"".concat(Zn,"-ping-right"),dt),Object(me.a)(m,"".concat(Zn,"-ping-top"),jt),Object(me.a)(m,"".concat(Zn,"-ping-bottom"),Et),m)),ref:q},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:le,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Se,"px)"),transition:An?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:C,locale:X,editable:oe,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Ae()("".concat(C,"-ink-bar"),Object(me.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Zr,Object(W.a)({},r,{ref:ee,prefixCls:C,tabs:bt,className:!lt&&Yn})),n.createElement(or,{position:"right",extra:z,prefixCls:C}))}var lr=n.forwardRef(ea);function na(r){var s=r.id,m=r.activeKey,b=r.animated,C=r.tabPosition,y=r.rtl,R=r.destroyInactiveTabPane,j=n.useContext(Mt),B=j.prefixCls,$=j.tabs,x=b.tabPane,G=$.findIndex(function(z){return z.key===m});return n.createElement("div",{className:Ae()("".concat(B,"-content-holder"))},n.createElement("div",{className:Ae()("".concat(B,"-content"),"".concat(B,"-content-").concat(C),Object(me.a)({},"".concat(B,"-content-animated"),x)),style:G&&x?Object(me.a)({},y?"marginRight":"marginLeft","-".concat(G,"00%")):null},$.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:B,tabKey:z.key,id:s,animated:x,active:z.key===m,destroyInactiveTabPane:R})})))}function ur(r){var s=r.prefixCls,m=r.forceRender,b=r.className,C=r.style,y=r.id,R=r.active,j=r.animated,B=r.destroyInactiveTabPane,$=r.tabKey,x=r.children,G=n.useState(m),z=Object(J.a)(G,2),oe=z[0],X=z[1];n.useEffect(function(){R?X(!0):B&&X(!1)},[R,B]);var k={};return R||(j?(k.visibility="hidden",k.height=0,k.overflowY="hidden"):k.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!R,style:Object(ge.a)(Object(ge.a)({},k),C),className:Ae()("".concat(s,"-tabpane"),R&&"".concat(s,"-tabpane-active"),b)},(R||oe||m)&&x)}var dr=0;function ta(r){return Object(Mn.a)(r).map(function(s){if(n.isValidElement(s)){var m=s.key!==void 0?String(s.key):void 0;return Object(ge.a)(Object(ge.a)({key:m},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ra(r,s){var m,b=r.id,C=r.prefixCls,y=C===void 0?"rc-tabs":C,R=r.className,j=r.children,B=r.direction,$=r.activeKey,x=r.defaultActiveKey,G=r.editable,z=r.animated,oe=z===void 0?{inkBar:!0,tabPane:!1}:z,X=r.tabPosition,k=X===void 0?"top":X,ue=r.tabBarGutter,V=r.tabBarStyle,ne=r.tabBarExtraContent,se=r.locale,q=r.moreIcon,le=r.moreTransitionName,ee=r.destroyInactiveTabPane,be=r.renderTabBar,re=r.onChange,ce=r.onTabClick,fe=r.onTabScroll,ie=Object(De.a)(r,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Y=ta(j),de=B==="rtl",ye;oe===!1?ye={inkBar:!1,tabPane:!1}:oe===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ge.a)({inkBar:!0,tabPane:!1},Object(we.a)(oe)==="object"?oe:{});var ve=Object(n.useState)(!1),Re=Object(J.a)(ve,2),We=Re[0],Oe=Re[1];Object(n.useEffect)(function(){Oe(Object(Kn.a)())},[]);var Se=Object(Rn.a)(function(){var Fe;return(Fe=Y[0])===null||Fe===void 0?void 0:Fe.key},{value:$,defaultValue:x}),Me=Object(J.a)(Se,2),Te=Me[0],Ne=Me[1],Ie=Object(n.useState)(function(){return Y.findIndex(function(Fe){return Fe.key===Te})}),$e=Object(J.a)(Ie,2),qe=$e[0],xe=$e[1];Object(n.useEffect)(function(){var Fe=Y.findIndex(function(_e){return _e.key===Te});if(Fe===-1){var Ge;Fe=Math.max(0,Math.min(qe,Y.length-1)),Ne((Ge=Y[Fe])===null||Ge===void 0?void 0:Ge.key)}xe(Fe)},[Y.map(function(Fe){return Fe.key}).join("_"),Te,qe]);var Ue=Object(Rn.a)(null,{value:b}),He=Object(J.a)(Ue,2),Le=He[0],En=He[1],tn=k;We&&!["left","right"].includes(k)&&(tn="top"),Object(n.useEffect)(function(){b||(En("rc-tabs-".concat(dr)),dr+=1)},[]);function Xe(Fe,Ge){ce==null||ce(Fe,Ge),Ne(Fe),re==null||re(Fe)}var on={id:Le,activeKey:Te,animated:ye,tabPosition:tn,rtl:de,mobile:We},bn,On=Object(ge.a)(Object(ge.a)({},on),{},{editable:G,locale:se,moreIcon:q,moreTransitionName:le,tabBarGutter:ue,onTabClick:Xe,onTabScroll:fe,extra:ne,style:V,panes:j});return be?bn=be(On,lr):bn=n.createElement(lr,On),n.createElement(Mt.Provider,{value:{tabs:Y,prefixCls:y}},n.createElement("div",Object(W.a)({ref:s,id:b,className:Ae()(y,"".concat(y,"-").concat(tn),(m={},Object(me.a)(m,"".concat(y,"-mobile"),We),Object(me.a)(m,"".concat(y,"-editable"),G),Object(me.a)(m,"".concat(y,"-rtl"),de),m),R)},ie),bn,n.createElement(na,Object(W.a)({destroyInactiveTabPane:ee},on,{animated:ye}))))}var cr=n.forwardRef(ra);cr.TabPane=ur;var aa=cr,sa=aa,Kt=e("MZF8"),pn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function wt(r,s){var m,b=(m=r.match(/\.(\w+)$/))===null||m===void 0?void 0:m[1];return b||(b=s.tsx?"tsx":"jsx"),b}var oa=r=>{var s,m,b,C=Object(n.useRef)(),y=Object(n.useContext)(pn.context),R=y.locale,j=Object(pn.useLocaleProps)(R,r),B=Object(pn.useDemoUrl)(j.identifier),$=j.demoUrl||B,x=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(j.identifier),G=Object.keys(j.sources).length===1,z=Object(pn.useCodeSandbox)((s=j.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:j),oe=Object(pn.useRiddle)((m=j.hideActions)!==null&&m!==void 0&&m.includes("RIDDLE")?null:j),X=Object(pn.useMotions)(j.motions||[],C.current),k=Object(U.default)(X,2),ue=k[0],V=k[1],ne=Object(pn.useCopy)(),se=Object(U.default)(ne,2),q=se[0],le=se[1],ee=Object(n.useState)("_"),be=Object(U.default)(ee,2),re=be[0],ce=be[1],fe=Object(n.useState)(wt(re,j.sources[re])),ie=Object(U.default)(fe,2),Y=ie[0],de=ie[1],ye=Object(n.useState)(Boolean(j.defaultShowCode)),ve=Object(U.default)(ye,2),Re=ve[0],We=ve[1],Oe=Object(n.useState)(Math.random()),Se=Object(U.default)(Oe,2),Me=Se[0],Te=Se[1],Ne=j.sources[re][Y]||j.sources[re].content,Ie=Object(pn.useTSPlaygroundUrl)(R,Ne),$e=Object(n.useRef)(),qe=Object(pn.usePrefersColor)(),xe=Object(U.default)(qe,1),Ue=xe[0];Object(n.useEffect)(()=>{Te(Math.random())},[Ue]);function He(Le){ce(Le),de(wt(Le,j.sources[Le]))}return O.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",x?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&O.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),O.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?O.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:$e}):j.children),O.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&O.a.createElement(pn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&O.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),O.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&O.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),oe&&O.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:oe}),j.motions&&O.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:V,onClick:()=>ue()}),j.iframe&&O.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((b=j.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&O.a.createElement(pn.Link,{target:"_blank",to:$},O.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),O.a.createElement("span",null),O.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>q(Ne)}),Y==="tsx"&&Re&&O.a.createElement(pn.Link,{target:"_blank",to:Ie},O.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),O.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Re)})),Re&&O.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&O.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:re,onChange:He},Object.keys(j.sources).map(Le=>O.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,j.sources[Le])):Le,key:Le}))),O.a.createElement("div",{className:"__dumi-default-previewer-source"},O.a.createElement(ia.a,{code:Ne,lang:Y,showCopy:!1}))))},Oa=vn.default=oa},"80pN":function(Tn,vn,e){"use strict";(function(U){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),O=e("q1tI"),W=e("i8i4"),me=e("QCnb");function J(p){for(var F="https://reactjs.org/docs/error-decoder.html?invariant="+p,K=1;K<arguments.length;K++)F+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+p+"; visit "+F+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var we=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;we.hasOwnProperty("ReactCurrentDispatcher")||(we.ReactCurrentDispatcher={current:null}),we.hasOwnProperty("ReactCurrentBatchConfig")||(we.ReactCurrentBatchConfig={suspense:null});function De(p){var F=p,K=p;if(p.alternate)for(;F.return;)F=F.return;else{p=F;do F=p,(F.effectTag&1026)!=0&&(K=F.return),p=F.return;while(p)}return F.tag===3?K:null}function ge(p){if(De(p)!==p)throw Error(J(188))}function Un(p){var F=p.alternate;if(!F){if(F=De(p),F===null)throw Error(J(188));return F!==p?null:p}for(var K=p,pe=F;;){var te=K.return;if(te===null)break;var Pe=te.alternate;if(Pe===null){if(pe=te.return,pe!==null){K=pe;continue}break}if(te.child===Pe.child){for(Pe=te.child;Pe;){if(Pe===K)return ge(te),p;if(Pe===pe)return ge(te),F;Pe=Pe.sibling}throw Error(J(188))}if(K.return!==pe.return)K=te,pe=Pe;else{for(var Ve=!1,ze=te.child;ze;){if(ze===K){Ve=!0,K=te,pe=Pe;break}if(ze===pe){Ve=!0,pe=te,K=Pe;break}ze=ze.sibling}if(!Ve){for(ze=Pe.child;ze;){if(ze===K){Ve=!0,K=Pe,pe=te;break}if(ze===pe){Ve=!0,pe=Pe,K=te;break}ze=ze.sibling}if(!Ve)throw Error(J(189))}}if(K.alternate!==pe)throw Error(J(190))}if(K.tag!==3)throw Error(J(188));return K.stateNode.current===K?p:F}function Ae(){return!0}function Mn(){return!1}function Kn(p,F,K,pe){this.dispatchConfig=p,this._targetInst=F,this.nativeEvent=K,p=this.constructor.Interface;for(var te in p)p.hasOwnProperty(te)&&((F=p[te])?this[te]=F(K):te==="target"?this.target=pe:this[te]=K[te]);return this.isDefaultPrevented=(K.defaultPrevented!=null?K.defaultPrevented:K.returnValue===!1)?Ae:Mn,this.isPropagationStopped=Mn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var p=this.nativeEvent;p&&(p.preventDefault?p.preventDefault():typeof p.returnValue!="unknown"&&(p.returnValue=!1),this.isDefaultPrevented=Ae)},stopPropagation:function(){var p=this.nativeEvent;p&&(p.stopPropagation?p.stopPropagation():typeof p.cancelBubble!="unknown"&&(p.cancelBubble=!0),this.isPropagationStopped=Ae)},persist:function(){this.isPersistent=Ae},isPersistent:Mn,destructor:function(){var p=this.constructor.Interface,F;for(F in p)this[F]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(p){return p.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(p){function F(){}function K(){return pe.apply(this,arguments)}var pe=this;F.prototype=pe.prototype;var te=new F;return n(te,K.prototype),K.prototype=te,K.prototype.constructor=K,K.Interface=n({},pe.Interface,p),K.extend=pe.extend,Qe(K),K},Qe(Kn);function Rn(p,F,K,pe){if(this.eventPool.length){var te=this.eventPool.pop();return this.call(te,p,F,K,pe),te}return new this(p,F,K,pe)}function fn(p){if(!(p instanceof this))throw Error(J(279));p.destructor(),10>this.eventPool.length&&this.eventPool.push(p)}function Qe(p){p.eventPool=[],p.getPooled=Rn,p.release=fn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(p,F){var K={};return K[p.toLowerCase()]=F.toLowerCase(),K["Webkit"+p]="webkit"+F,K["Moz"+p]="moz"+F,K}var jn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Be={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Bn(p){if(Be[p])return Be[p];if(!jn[p])return p;var F=jn[p],K;for(K in F)if(F.hasOwnProperty(K)&&K in qn)return Be[p]=F[K];return p}var _n=Bn("animationend"),at=Bn("animationiteration"),st=Bn("animationstart"),I=Bn("transitionend"),E=null;function D(p){if(E===null)try{var F=("require"+Math.random()).slice(0,7);E=(U&&U[F])("timers").setImmediate}catch(K){E=function(pe){var te=new MessageChannel;te.port1.onmessage=pe,te.port2.postMessage(void 0)}}return E(p)}var d=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,o=d[11],h=d[12],g=W.unstable_batchedUpdates,S=we.IsSomeRendererActing,a=typeof me.unstable_flushAllWithoutAsserting=="function",l=me.unstable_flushAllWithoutAsserting||function(){for(var p=!1;o();)p=!0;return p};function i(p){try{l(),D(function(){l()?i(p):p()})}catch(F){p(F)}}var N=0,M=!1,P=W.findDOMNode,u=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,w=u[0],f=u[4],t=u[5],v=u[6],c=u[7],A=u[8],T=u[9],L=u[10];function Z(){}function Q(p,F){if(!p)return[];if(p=Un(p),!p)return[];for(var K=p,pe=[];;){if(K.tag===5||K.tag===6||K.tag===1||K.tag===0){var te=K.stateNode;F(te)&&pe.push(te)}if(K.child)K.child.return=K,K=K.child;else{if(K===p)return pe;for(;!K.sibling;){if(!K.return||K.return===p)return pe;K=K.return}K.sibling.return=K.return,K=K.sibling}}}function H(p,F){if(p&&!p._reactInternalFiber){var K=""+p;throw p=Array.isArray(p)?"an array":p&&p.nodeType===1&&p.tagName?"a DOM node":K==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":K,Error(J(286,F,p))}}var je={renderIntoDocument:function(p){var F=document.createElement("div");return W.render(p,F)},isElement:function(p){return O.isValidElement(p)},isElementOfType:function(p,F){return O.isValidElement(p)&&p.type===F},isDOMComponent:function(p){return!(!p||p.nodeType!==1||!p.tagName)},isDOMComponentElement:function(p){return!!(p&&O.isValidElement(p)&&p.tagName)},isCompositeComponent:function(p){return je.isDOMComponent(p)?!1:p!=null&&typeof p.render=="function"&&typeof p.setState=="function"},isCompositeComponentWithType:function(p,F){return je.isCompositeComponent(p)?p._reactInternalFiber.type===F:!1},findAllInRenderedTree:function(p,F){return H(p,"findAllInRenderedTree"),p?Q(p._reactInternalFiber,F):[]},scryRenderedDOMComponentsWithClass:function(p,F){return H(p,"scryRenderedDOMComponentsWithClass"),je.findAllInRenderedTree(p,function(K){if(je.isDOMComponent(K)){var pe=K.className;typeof pe!="string"&&(pe=K.getAttribute("class")||"");var te=pe.split(/\s+/);if(!Array.isArray(F)){if(F===void 0)throw Error(J(11));F=F.split(/\s+/)}return F.every(function(Pe){return te.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(p,F){if(H(p,"findRenderedDOMComponentWithClass"),p=je.scryRenderedDOMComponentsWithClass(p,F),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for class:"+F);return p[0]},scryRenderedDOMComponentsWithTag:function(p,F){return H(p,"scryRenderedDOMComponentsWithTag"),je.findAllInRenderedTree(p,function(K){return je.isDOMComponent(K)&&K.tagName.toUpperCase()===F.toUpperCase()})},findRenderedDOMComponentWithTag:function(p,F){if(H(p,"findRenderedDOMComponentWithTag"),p=je.scryRenderedDOMComponentsWithTag(p,F),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for tag:"+F);return p[0]},scryRenderedComponentsWithType:function(p,F){return H(p,"scryRenderedComponentsWithType"),je.findAllInRenderedTree(p,function(K){return je.isCompositeComponentWithType(K,F)})},findRenderedComponentWithType:function(p,F){if(H(p,"findRenderedComponentWithType"),p=je.scryRenderedComponentsWithType(p,F),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for componentType:"+F);return p[0]},mockComponent:function(p,F){return F=F||p.mockTagName||"div",p.prototype.render.mockImplementation(function(){return O.createElement(F,null,this.props.children)}),this},nativeTouchData:function(p,F){return{touches:[{pageX:p,pageY:F}]}},Simulate:null,SimulateNative:{},act:function(p){function F(){N--,S.current=K,h.current=pe}M===!1&&(M=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),N++;var K=S.current,pe=h.current;S.current=!0,h.current=!0;try{var te=g(p)}catch(Pe){throw F(),Pe}if(te!==null&&typeof te=="object"&&typeof te.then=="function")return{then:function(Pe,Ve){te.then(function(){1<N||a===!0&&K===!0?(F(),Pe()):i(function(ze){F(),ze?Ve(ze):Pe()})},function(ze){F(),Ve(ze)})}};try{N!==1||a!==!1&&K!==!1||l(),F()}catch(Pe){throw F(),Pe}return{then:function(Pe){Pe()}}}};function dn(p){return function(F,K){if(O.isValidElement(F))throw Error(J(228));if(je.isCompositeComponent(F))throw Error(J(229));var pe=f[p],te=new Z;te.target=F,te.type=p.toLowerCase();var Pe=w(F),Ve=new Kn(pe,Pe,te,F);Ve.persist(),n(Ve,K),pe.phasedRegistrationNames?t(Ve):v(Ve),W.unstable_batchedUpdates(function(){c(F),L(Ve)}),A()}}je.Simulate={};for(var gn in f)je.Simulate[gn]=dn(gn);function yn(p,F){return function(K,pe){var te=new Z(p);n(te,pe),je.isDOMComponent(K)?(K=P(K),te.target=K,T(F,1,document,te)):K.tagName&&(te.target=K,T(F,1,document,te))}}[["abort","abort"],[_n,"animationEnd"],[at,"animationIteration"],[st,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(p){var F=p[1];je.SimulateNative[F]=yn(F,p[0])}),U.exports=je.default||je}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,vn,e){"use strict";e.r(vn);var U=e("9og8"),n=e("WmNS"),O=e.n(n),W=e("LtsZ"),me=`import React, { useRef } from 'react';
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
        const rangeValidator = {
          validator: (rule, value) => {
            if (!value) return true;
            if (Array.isArray(value)) {
              // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
              // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [null,null]
              const validValue =
                typeof value[0] === 'string' && typeof value[1] === 'string';
              const validValue2 =
                value[0] === undefined && value[1] === undefined;
              if (validValue || validValue2) {
                return true;
              }
              return false;
            }
            return false;
          },
          type: 'array',
          message: '\${title}\u5FC5\u586B',
        };
        singleResult = rangeValidator;
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
};`,we=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,De=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ge=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Un=`export const basic = {
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
};`,Ae=`import React, { Component } from 'react';
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

export default Root;`,Mn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Kn=`{
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

export default SearchInput;`,fn=`import React from 'react';
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

export default Demo;`,Qe=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,$n=`.markdown p {
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
}`,wn=`import React from 'react';
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

export default Demo;`,jn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,qn=`import React from 'react';
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

export default Demo;`,Bn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,_n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,at=`import React, { useState, useRef } from 'react';
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

export default Demo;`,st=vn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l;return O.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var w=S(u);if(w&&w.has(P))return w.get(P);var f={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in P)if(v!=="default"&&Object.prototype.hasOwnProperty.call(P,v)){var c=t?Object.getOwnPropertyDescriptor(P,v):null;c&&(c.get||c.set)?Object.defineProperty(f,v,c):f[v]=P[v]}return f.default=P,w&&w.set(P,f),f},S=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,w=new WeakMap;return(S=function(t){return t?w:u})(P)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,o=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 15:return g=N.sent,l=function(){var P=(0,h.useState)("Line"),u=(0,o.default)(P,2),w=u[0],f=u[1],t={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[w];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,g=function(){return o.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,M,P){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},N),o.default.createElement("p",null,JSON.stringify(M)),o.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l;return O.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(P,u){if(!u&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var w=S(u);if(w&&w.has(P))return w.get(P);var f={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in P)if(v!=="default"&&Object.prototype.hasOwnProperty.call(P,v)){var c=t?Object.getOwnPropertyDescriptor(P,v):null;c&&(c.get||c.set)?Object.defineProperty(f,v,c):f[v]=P[v]}return f.default=P,w&&w.set(P,f),f},S=function(P){if(typeof WeakMap!="function")return null;var u=new WeakMap,w=new WeakMap;return(S=function(t){return t?w:u})(P)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,o=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 15:return g=N.sent,l=function(){var P=(0,h.useState)(!1),u=(0,o.default)(P,2),w=u[0],f=u[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:w,onChange:function(){return f(!w)}})),h.default.createElement(g.PivotTable,{leftExpandable:w,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M,P,u,w,f;return O.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return P=function(A,T){if(!T&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var L=M(T);if(L&&L.has(A))return L.get(A);var Z={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var H in A)if(H!=="default"&&Object.prototype.hasOwnProperty.call(A,H)){var je=Q?Object.getOwnPropertyDescriptor(A,H):null;je&&(je.get||je.set)?Object.defineProperty(Z,H,je):Z[H]=A[H]}return Z.default=A,L&&L.set(A,Z),Z},M=function(A){if(typeof WeakMap!="function")return null;var T=new WeakMap,L=new WeakMap;return(M=function(Q){return Q?L:T})(A)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,o=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(81).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,h=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(82).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(72).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,S=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(70).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,a=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=v.sent,v.t12=P,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,N=(0,v.t12)(v.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(c){(0,S.default)(T,c);var A=(0,a.default)(T);function T(){return(0,h.default)(this,T),A.apply(this,arguments)}return(0,g.default)(T,[{key:"render",value:function(){var Z=this.props.form;return l.default.createElement("div",null,l.default.createElement(N.default,{form:Z,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),T}(l.default.Component),f=(0,N.connectForm)(w),v.abrupt("return",f);case 47:case"end":return v.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var v=a(t);if(v&&v.has(f))return v.get(f);var c={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in f)if(T!=="default"&&Object.prototype.hasOwnProperty.call(f,T)){var L=A?Object.getOwnPropertyDescriptor(f,T):null;L&&(L.get||L.set)?Object.defineProperty(c,T,L):c[T]=f[T]}return c.default=f,v&&v.set(f,c),c},a=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(a=function(A){return A?v:t})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,h=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var f=(0,S.useForm)();return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:i}),h.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},M=N,u.abrupt("return",M);case 27:case"end":return u.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var v=a(t);if(v&&v.has(f))return v.get(f);var c={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in f)if(T!=="default"&&Object.prototype.hasOwnProperty.call(f,T)){var L=A?Object.getOwnPropertyDescriptor(f,T):null;L&&(L.get||L.set)?Object.defineProperty(c,T,L):c[T]=f[T]}return c.default=f,v&&v.set(f,c),c},a=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(a=function(A){return A?v:t})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,h=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var f=(0,S.useForm)(),t=function(c,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(c,null,2))};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:i,onFinish:t}),h.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},M=N,u.abrupt("return",M);case 27:case"end":return u.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return l=function(){var u=(0,h.useForm)(),w=function(t,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(t))};return o.default.createElement("div",null,o.default.createElement(h.default,{form:u,schema:a,onFinish:w}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},S=function(u,w){if(!w&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=g(w);if(f&&f.has(u))return f.get(u);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var A=v?Object.getOwnPropertyDescriptor(u,c):null;A&&(A.get||A.set)?Object.defineProperty(t,c,A):t[c]=u[c]}return t.default=u,f&&f.set(u,t),t},g=function(u){if(typeof WeakMap!="function")return null;var w=new WeakMap,f=new WeakMap;return(g=function(v){return v?f:w})(u)},d=e("K+nK"),M.t0=d,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=S,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,h=(0,M.t2)(M.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=l,M.abrupt("return",i);case 17:case"end":return M.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M,P,u,w;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=i(A);if(T&&T.has(c))return T.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,T&&T.set(c,L),L},i=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(i=function(Z){return Z?T:A})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=N,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=t.sent,t.next=32,Promise.all([e.e(66),e.e(77)]).then(e.bind(null,"7t+U"));case 32:return l=t.sent,M=g.default.TextArea,P={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},u=function(){var c=(0,S.useState)(JSON.stringify(P)),A=(0,h.default)(c,2),T=A[0],L=A[1],Z=(0,S.useState)({}),Q=(0,h.default)(Z,2),H=Q[0],je=Q[1],dn=function(){try{var F=(0,l.updateSchemaToNewVersion)(JSON.parse(T));je(F)}catch(K){console.log(K)}},gn=function(F){L(F.target.value)},yn=function(){L(JSON.stringify(JSON.parse(T),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(M,{style:{minHeight:400,marginTop:12,marginBottom:12},value:T,onChange:gn}),S.default.createElement(o.default,{style:{marginRight:12},onClick:yn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(o.default,{type:"primary",onClick:dn},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(M,{style:{minHeight:400,marginTop:12},value:JSON.stringify(H,null,2)}))},w=u,t.abrupt("return",w);case 38:case"end":return t.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),g=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(h.default,{schema:g("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(h.default,{schema:g("column")}))},l.abrupt("return",S);case 14:case"end":return l.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(){return o.default.createElement(h.default,{schema:g})},l.abrupt("return",S);case 14:case"end":return l.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(h.default,{readOnly:!0,schema:g})},l.abrupt("return",S);case 14:case"end":return l.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(h.default,{labelWidth:"200",schema:g})},l.abrupt("return",S);case 14:case"end":return l.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M,P,u,w;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return P=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=M(A);if(T&&T.has(c))return T.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,T&&T.set(c,L),L},M=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(M=function(Z){return Z?T:A})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.t8=P,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,a=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=t.sent,t.t10=P,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,i=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return N=t.sent,u=function(){var c=(0,i.useForm)(),A=(0,a.useState)({}),T=(0,S.default)(A,2),L=T[0],Z=T[1],Q=function(){(0,N.fakeApi)("xxx/getForm").then(function(dn){c.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,N.delay)(1e3).then(function(je){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var H=function(dn,gn){gn.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(gn.map(function(yn){return yn.name}))):(0,N.fakeApi)("xxx/submit",dn).then(function(yn){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(i.default,{form:c,schema:L,onFinish:H}),a.default.createElement(o.default,null,a.default.createElement(h.default,{onClick:Q},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(h.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},w=u,t.abrupt("return",w);case 48:case"end":return t.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:De}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M,P,u,w;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return M=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=N(A);if(T&&T.has(c))return T.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,T&&T.set(c,L),L},N=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(N=function(Z){return Z?T:A})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=t.sent,t.t8=M,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return i=t.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var c=(0,l.useForm)(),A=function(Z,Q){Q.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Q.map(function(H){return H.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(H){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(Z){var Q=Z.data,H=Z.errors,je=Z.schema,dn=(0,h.default)(Z,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(gn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:c,schema:P,beforeFinish:T,onFinish:A}),S.default.createElement(o.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=u,t.abrupt("return",w);case 42:case"end":return t.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:De}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M,P,u,w;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return M=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=N(A);if(T&&T.has(c))return T.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,T&&T.set(c,L),L},N=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(N=function(Z){return Z?T:A})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return a=t.sent,t.t8=M,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return i=t.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var c=(0,l.useForm)(),A=function(Z,Q){Q.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Q.map(function(H){return H.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(H){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(){(0,i.fakeApi)("xxx/getForm").then(function(Z){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:c,schema:P,onFinish:A}),S.default.createElement(o.default,null,S.default.createElement(h.default,{onClick:T},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(h.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},w=u,t.abrupt("return",w);case 44:case"end":return t.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:De}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M,P,u;return O.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return N=function(v,c){if(!c&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var A=i(c);if(A&&A.has(v))return A.get(v);var T={},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in v)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(v,Z)){var Q=L?Object.getOwnPropertyDescriptor(v,Z):null;Q&&(Q.get||Q.set)?Object.defineProperty(T,Z,Q):T[Z]=v[Z]}return T.default=v,A&&A.set(v,T),T},i=function(v){if(typeof WeakMap!="function")return null;var c=new WeakMap,A=new WeakMap;return(i=function(L){return L?A:c})(v)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,o=(0,f.t0)(f.t1),f.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,h=(0,f.t2)(f.t3),f.t4=N,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,g=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return S=f.sent,f.t6=N,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,a=(0,f.t6)(f.t7),f.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return l=f.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var v=(0,a.useForm)(),c=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(L,Z){Z.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(Q){return Q.name}))):h.default.info(JSON.stringify(L))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(a.default,{form:v,schema:M,onMount:c,onFinish:A}),g.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=P,f.abrupt("return",u);case 37:case"end":return f.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:De}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return S=function(u,w){if(!w&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=g(w);if(f&&f.has(u))return f.get(u);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var A=v?Object.getOwnPropertyDescriptor(u,c):null;A&&(A.get||A.set)?Object.defineProperty(t,c,A):t[c]=u[c]}return t.default=u,f&&f.set(u,t),t},g=function(u){if(typeof WeakMap!="function")return null;var w=new WeakMap,f=new WeakMap;return(g=function(v){return v?f:w})(u)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=S,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,h=(0,M.t2)(M.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,h.useForm)();return o.default.createElement(h.default,{form:u,schema:a})},i=l,M.abrupt("return",i);case 17:case"end":return M.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,S=function(){return o.default.createElement(h.default,{schema:g.expression})},l.abrupt("return",S);case 16:case"end":return l.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ge},"json/schema.js":{import:"../json/schema",content:Un}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N;return O.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return S=function(w,f){if(!f&&w&&w.__esModule)return w;if(w===null||typeof w!="object"&&typeof w!="function")return{default:w};var t=g(f);if(t&&t.has(w))return t.get(w);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in w)if(A!=="default"&&Object.prototype.hasOwnProperty.call(w,A)){var T=c?Object.getOwnPropertyDescriptor(w,A):null;T&&(T.get||T.set)?Object.defineProperty(v,A,T):v[A]=w[A]}return v.default=w,t&&t.set(w,v),v},g=function(w){if(typeof WeakMap!="function")return null;var f=new WeakMap,t=new WeakMap;return(g=function(c){return c?t:f})(w)},P.t0=S,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,d=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=P.sent,P.t2=S,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,h=(0,P.t2)(P.t3),a=function(w){return new Promise(function(f){return setTimeout(f,w)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var w=(0,h.useForm)(),f=function(){w.setValues({input1:"hello world"}),a(3e3).then(function(v){w.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(h.default,{form:w,schema:l,onMount:f})},N=i,P.abrupt("return",N);case 20:case"end":return P.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),window.hello=function(N){var M=N.value;console.log(M)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(h.default,{schema:g})},a=S,i.abrupt("return",a);case 16:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:we}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return S=function(u,w){if(!w&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=g(w);if(f&&f.has(u))return f.get(u);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in u)if(c!=="default"&&Object.prototype.hasOwnProperty.call(u,c)){var A=v?Object.getOwnPropertyDescriptor(u,c):null;A&&(A.get||A.set)?Object.defineProperty(t,c,A):t[c]=u[c]}return t.default=u,f&&f.set(u,t),t},g=function(u){if(typeof WeakMap!="function")return null;var w=new WeakMap,f=new WeakMap;return(g=function(v){return v?f:w})(u)},M.t0=S,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,d=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=M.sent,M.t2=S,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,h=(0,M.t2)(M.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,h.useForm)(),w={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){u.setValueByPath("input2",t)}};return d.default.createElement(h.default,{form:u,schema:a,watch:w})},i=l,M.abrupt("return",i);case 19:case"end":return M.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M;return O.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var v=a(t);if(v&&v.has(f))return v.get(f);var c={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in f)if(T!=="default"&&Object.prototype.hasOwnProperty.call(f,T)){var L=A?Object.getOwnPropertyDescriptor(f,T):null;L&&(L.get||L.set)?Object.defineProperty(c,T,L):c[T]=f[T]}return c.default=f,v&&v.set(f,c),c},a=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(a=function(A){return A?v:t})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,h=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,S=(0,u.t4)(u.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var f=(0,S.useForm)(),t=function(A,T){T.length>0?alert("errorFields:"+JSON.stringify(T)):alert("formData:"+JSON.stringify(A,null,2))},v={input1:function(A){A.length>2?f.setSchemaByPath("obj1.select",function(T){var L=T.enumNames;return{enumNames:L.map(function(Z){return Z+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:i,onFinish:t,watch:v}),h.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},M=N,u.abrupt("return",M);case 27:case"end":return u.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N,M,P,u,w;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var T=i(A);if(T&&T.has(c))return T.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,T&&T.set(c,L),L},i=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(i=function(Z){return Z?T:A})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(83).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=N,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=t.sent,t.t8=N,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(c){return console.log("widget props:",c),S.default.createElement(h.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},c))},u=function(){var c=(0,l.useForm)(),A=function(){};return S.default.createElement("div",null,S.default.createElement(l.default,{readOnly:!0,form:c,schema:M,widgets:{site:P},onFinish:function(L){return alert(JSON.stringify(L,null,2))}}),S.default.createElement(o.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},w=u,t.abrupt("return",w);case 40:case"end":return t.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,S=function(){return o.default.createElement(h.default,{schema:g.basic})},l.abrupt("return",S);case 16:case"end":return l.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ge},"json/schema.js":{import:"../json/schema",content:Un}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=l.sent,S=function(){return o.default.createElement(h.default,{schema:g.titleTrick})},l.abrupt("return",S);case 16:case"end":return l.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ge},"json/schema.js":{import:"../json/schema",content:Un}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Ae},"main.js":{import:"./main",content:Mn},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Rn},"monaco/index.js":{import:"./monaco",content:fn},"suggestionsMap.js":{import:"./suggestionsMap",content:Qe},"index.css":{import:"./index.css",content:$n}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.5.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.1"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a,l,i,N;return O.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=e("K+nK"),P.t0=d,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,o=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(64)]).then(e.bind(null,"P2DI"));case 8:for(h=P.sent,g=[],S=0;S<6;S++)g.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(w,f){return o.default.createElement("a",{onClick:function(){return alert(w.title)}},"\u7F16\u8F91")}}],i=function(){var w=function(){return{rows:g,total:g.length}};return o.default.createElement(h.TableProvider,null,o.default.createElement(h.Search,{schema:a,api:w}),o.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},N=i,P.abrupt("return",N);case 16:case"end":return P.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){var d,o,h,g,S,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(63)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(h.default,{defaultValue:g}))},a=S,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:jn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Be}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Bn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var I=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function E(){return I.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:at},"index.less":{import:"./index.less",content:Bn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},MaUl:function(Tn,vn,e){"use strict";e.r(vn);var U=e("q1tI"),n=e.n(U),O=e("dEAq"),W=e.n(O),me=e("0zqC"),J=e("JjdP"),we=n.a.memo(J.default["lifeCycle-demo"].component);vn.default=De=>(n.a.useEffect(()=>{De!=null&&De.location.hash&&O.AnchorLink.scrollToAnchor(decodeURIComponent(De.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u751F\u547D\u5468\u671F-\u52A0\u8F7D---\u63D0\u4EA4"},n.a.createElement(O.AnchorLink,{to:"#\u751F\u547D\u5468\u671F-\u52A0\u8F7D---\u63D0\u4EA4","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u751F\u547D\u5468\u671F (\u52A0\u8F7D - \u63D0\u4EA4)"),n.a.createElement("p",null,"\u5BF9\u4E8E\u8868\u5355\u6700\u91CD\u8981\u7684\u4E24\u4E2A\u64CD\u4F5C\u65F6\u673A\u662F\u201C\u52A0\u8F7D\u201D\u548C\u201C\u63D0\u4EA4\u201D"),n.a.createElement("h2",{id:"onmount-\uFF08\u52A0\u8F7D\uFF09"},n.a.createElement(O.AnchorLink,{to:"#onmount-\uFF08\u52A0\u8F7D\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"onMount \uFF08\u52A0\u8F7D\uFF09"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7531\u4E8E React \u7EC4\u4EF6\u7684 ",n.a.createElement("code",null,"componentDidMount"),"(\u6216\u8005 useEffect) \u5F88\u591A\u65F6\u5019\u5E76\u4E0D\u80FD\u51C6\u786E\u76D1\u542C\u5230\u201C\u8868\u5355\u52A0\u8F7D\u5B8C\u6210\u201D\u8FD9\u4E2A\u65F6\u95F4\u70B9\uFF0C\u6240\u4EE5 FormRender \u63D0\u4F9B\u4E86 props ",n.a.createElement("code",null,"onMount"),"\uFF0C\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u6267\u884C\u3002 \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u5B9A\u4E49\u662F\uFF1A\u5F53\u975E\u7A7A\u7684 schema \u9996\u6B21\u4F20\u5165 FormRender \u5B8C\u6210\u8868\u5355\u6E32\u67D3\u4E4B\u540E\u3002\u5176\u4E2D undefined\u3001null\u3001","{","}"," \u90FD\u89C6\u4E3A\u201C\u7A7A\u201D\u7684 schema\u3002"),n.a.createElement("li",null,n.a.createElement("code",null,"onMount")," \u5E38\u7528\u4E8E\u52A0\u8F7D\u521D\u59CB\u6570\u636E\uFF0C\u6216\u662F\u6839\u636E\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u6570\u636E\u8FDB\u4E00\u6B65\u8865\u5145 schema\uFF08\u4F8B\u5982\u4E0B\u62C9\u9009\u6846\u7684\u9009\u9879\uFF09"),n.a.createElement("li",null,"\u5982\u679C schema \u6765\u81EA\u670D\u52A1\u7AEF\u63A5\u53E3\uFF0C\u6CE8\u610F\u4E0D\u8981\u4F7F\u7528",n.a.createElement("code",null,"onMount"),"\u6765\u52A0\u8F7D schema\uFF0C\u800C\u4F7F\u7528",n.a.createElement("code",null,"componentDidMount"),"\uFF0C\u56E0\u4E3A",n.a.createElement("code",null,"onMount"),"\u7684\u89E6\u53D1\u673A\u5236\u662F\u5224\u65AD\u975E\u7A7A schema \u5DF2\u7ECF\u4F20\u5165 FormRender"))),n.a.createElement(me.default,J.default["lifeCycle-demo"].previewerProps,n.a.createElement(we,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"beforefinish--onfinish-\uFF08\u63D0\u4EA4\uFF09"},n.a.createElement(O.AnchorLink,{to:"#beforefinish--onfinish-\uFF08\u63D0\u4EA4\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"beforeFinish / onFinish \uFF08\u63D0\u4EA4\uFF09"),n.a.createElement("p",null,"\u8868\u5355\u63D0\u4EA4\u7684\u6D41\u7A0B\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7528\u6237\u8C03\u7528 ",n.a.createElement("code",null,"form.submit")," \u63D0\u4EA4\u5F00\u59CB"),n.a.createElement("li",null,"\u672C\u5730\u6821\u9A8C\u5F00\u59CB\uFF0C\u5982\u679C\u672A\u901A\u8FC7\uFF0C\u5C55\u793A\u6821\u9A8C\u9519\u8BEF"),n.a.createElement("li",null,"\u672C\u5730\u6821\u9A8C\u7ED3\u675F\uFF0C",n.a.createElement("code",null,"beforeFinish")," \u5F00\u59CB\u6267\u884C\uFF0C\u4E00\u822C\u7528\u4E8E\u56DE\u586B\u8FDC\u7AEF\u6821\u9A8C\uFF0C\u5982\u679C\u672A\u901A\u8FC7\u5C55\u793A\u6821\u9A8C\u9519\u8BEF"),n.a.createElement("li",null,"\u6821\u9A8C\u7ED3\u675F\uFF0C",n.a.createElement("code",null,"onFinish")," \u5F00\u59CB\u6267\u884C\uFF0C\u8868\u5355\u6570\u636E\u548C\u6821\u9A8C\u4FE1\u606F\u4EE5\u5165\u53C2\u5F62\u5F0F\u56DE\u4F20\u7ED9\u7528\u6237")),n.a.createElement("p",null,"beforeFinish \u548C onFinish \u7684\u4F7F\u7528\u8BE6\u89C1 ",n.a.createElement(O.Link,{to:"/form-render/advanced/form-methods"},"\u8868\u5355\u65B9\u6CD5"))))))},TIsu:function(Tn,vn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,vn,e){"use strict";Tn.exports=e("80pN")}}]);
