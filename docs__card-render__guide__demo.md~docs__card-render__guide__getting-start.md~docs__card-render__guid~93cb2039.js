(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2YYc":function(st,T,e){"use strict";e.d(T,"a",function(){return G}),e.d(T,"b",function(){return j}),e.d(T,"e",function(){return H}),e.d(T,"d",function(){return h}),e.d(T,"c",function(){return ue});var ae=e("tJVT"),re=e("k1fw"),o=e("q1tI"),fe=e.n(o),G=Object(o.createContext)(()=>{}),j=Object(o.createContext)({}),H=()=>Object(o.useContext)(G),h=()=>Object(o.useContext)(j),ue=ke=>Object(o.useReducer)((we,Q)=>Object(re.a)(Object(re.a)({},we),Q),ke);function Et(ke,we,Q){var _e=Object(o.useRef)();Object(o.useEffect)(()=>{_e.current=ke},[ke]);var mt=Object(o.useRef)();return Object(o.useEffect)(()=>{if(!Q)return;function lt(){_e&&_e.current&&_e.current()}if(lt(),we!==null)return mt.current=setInterval(lt,we),()=>clearInterval(mt.current)},[we,Q]),()=>clearInterval(mt.current)}function Fe(ke){var we=Object(o.useRef)();return Object(o.useEffect)(()=>{we.current=ke},[ke]),we.current}var Y=ke=>{var we=Object(o.useState)(!1),Q=Object(ae.default)(we,2),_e=Q[0],mt=Q[1],lt;try{lt=localStorage.getItem(ke)}catch(Rt){}return lt||(mt(!0),localStorage.setItem(ke,JSON.stringify(!0))),_e},ct=()=>{var ke=Object(o.useState)(!1),we=Object(ae.default)(ke,2),Q=we[0],_e=we[1],mt=()=>_e(!Q);return[Q,mt]},Pe=ke=>{var we=Object(o.useState)(ke),Q=Object(ae.default)(we,2),_e=Q[0],mt=Q[1];return[_e,mt]},nt=function(){var we=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",_e=()=>{var O=localStorage.getItem(Q);if(O)try{return JSON.parse(O)}catch(r){return we}return we},mt=Object(o.useState)(_e()),lt=Object(ae.default)(mt,2),Rt=lt[0],ve=lt[1],P=O=>{ve(O),localStorage.setItem(Q,JSON.stringify(O))};return[Rt,P]}},"36SN":function(st,T,e){"use strict";e.r(T),e.d(T,"Column",function(){return Fe}),e.d(T,"Line",function(){return ke}),e.d(T,"PivotTable",function(){return Rt});var ae=e("0Owb"),re=e("PpiC"),o=e("q1tI"),fe=e.n(o),G=e("06Lf");function j(ve){var P=[],O=[];return ve.forEach(r=>{r.isDim?P.push(r):O.push(r)}),{metaDim:P,metaInd:O}}function H(ve){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(ve==null?void 0:ve.toPrecision(P))}var h=()=>fe.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function ue(ve,P){var O=j(ve),r=O.metaDim,g=O.metaInd;if(g.length>=1&&r.length===0){var c="type",$="value";return{xField:c,yField:$,data:P.map(We=>g.map(Ie=>{var vt=Ie.id,gt=Ie.name;return{[c]:vt,[$]:We[vt]}})).flat(),meta:{[c]:{formatter:We=>{var Ie;return((Ie=ve.find(vt=>{var gt=vt.id;return We===gt}))===null||Ie===void 0?void 0:Ie.name)||We}}},tooltip:{formatter:We=>{var Ie,vt=We[c],gt=We[$];return{name:(Ie=ve.find(xt=>{var Dt=xt.id;return vt===Dt}))===null||Ie===void 0?void 0:Ie.name,value:gt}}}}}else if(g.length===1&&r.length===1){var J,X,_,pe=(J=r.shift())===null||J===void 0?void 0:J.id,Re=(X=g.shift())===null||X===void 0?void 0:X.id;return{data:P,xField:pe,yField:Re,meta:{[Re]:{alias:(_=ve.find(We=>{var Ie=We.id;return Ie===Re}))===null||_===void 0?void 0:_.name}}}}else if(g.length>1&&r.length===1){var be,$e=(be=r.shift())===null||be===void 0?void 0:be.id,qe="value",Ke="type";return{data:P.map(We=>g.map(Ie=>{var vt=Ie.id,gt=Ie.name;return{[$e]:We[$e],[qe]:We[vt],[Ke]:gt}})).flat(),xField:$e,yField:qe,seriesField:Ke,isGroup:!0}}else if(g.length===1&&r.length===2){var ze,Te,dt;return{data:P,xField:(ze=r.shift())===null||ze===void 0?void 0:ze.id,yField:(Te=g.shift())===null||Te===void 0?void 0:Te.id,seriesField:(dt=r.shift())===null||dt===void 0?void 0:dt.id,isGroup:!0}}return{data:P,xField:"",yField:""}}var Et=ve=>{var P=ve.className,O=ve.style,r=ve.meta,g=r===void 0?[]:r,c=ve.data,$=c===void 0?[]:c,J=ve.inverted,X=Object(re.a)(ve,["className","style","meta","data","inverted"]);if(J){var _=ue(g,$),pe=_.xField,Re=_.yField,be=Object(re.a)(_,["xField","yField"]);return fe.a.createElement(G.b,Object(ae.default)({xField:Re,yField:pe},be,{renderer:"svg",errorTemplate:()=>fe.a.createElement(h,null)},X))}else return fe.a.createElement(G.c,Object(ae.default)({},ue(g,$),{renderer:"svg",errorTemplate:()=>fe.a.createElement(h,null)},X))},Fe=Et,Y=e("k1fw"),ct=e("sGjT");function Pe(ve,P){var O=j(ve),r=O.metaDim,g=O.metaInd;if(g.length===1&&r.length===1){var c,$=r.shift(),J=g.shift(),X=$.id,_=J.id;return{data:P,xField:X,yField:_,yAxis:{label:{formatter:Je=>J.isRate?"".concat(H(100*Number(Je)),"%"):Je}},tooltip:{formatter:Je=>{var at=Je[X],ft=Je[_];return{name:J.name,value:J.isRate?"".concat(H(100*Number(ft)),"%"):ft}}},meta:{[_]:{alias:(c=ve.find(Je=>{var at=Je.id;return at===_}))===null||c===void 0?void 0:c.name}}}}else if(g.length===1&&r.length===2){var pe=r.shift(),Re=g.shift(),be=r.shift(),$e=pe.id,qe=Re.id,Ke=be.id;return{data:P,xField:$e,yField:qe,seriesField:Ke,yAxis:{label:{formatter:Je=>Re.isRate?"".concat(H(100*Number(Je)),"%"):Je}},tooltip:{formatter:Je=>{var at=Je[Ke],ft=Je[qe];return{name:at,value:Re.isRate?"".concat(H(100*Number(ft)),"%"):ft}}}}}else if(g.length===2&&r.length===2){var ze,Te,dt,We,Ie=P.map(Je=>{var at=g[0].id,ft=r[1].id,Vt=Je[at],Mt=Je[ft],Bt=Object(re.a)(Je,[at,ft].map(ct.a));return Object(Y.a)({[r[1].id]:"".concat(Mt,"-").concat(g[0].name)},Bt)}),vt=P.map(Je=>{var at=g[1].id,ft=r[1].id,Vt=Je[at],Mt=Je[ft],Bt=Object(re.a)(Je,[at,ft].map(ct.a));return Object(Y.a)({[r[1].id]:"".concat(Mt,"-").concat(g[1].name)},Bt)});return{data:[vt,Ie],geometryOptions:[{geometry:"line",seriesField:r[1].id},{geometry:"line",seriesField:r[1].id,lineStyle:{lineDash:[5,5]}}],xField:(ze=r.shift())===null||ze===void 0?void 0:ze.id,yField:[(Te=g.shift())===null||Te===void 0?void 0:Te.id,(dt=g.shift())===null||dt===void 0?void 0:dt.id],seriesField:(We=r.shift())===null||We===void 0?void 0:We.id}}else if(g.length>1&&r.length===1){var gt,xt=(gt=r.shift())===null||gt===void 0?void 0:gt.id,Dt="value",Kt="type";return{data:P.map(Je=>g.map(at=>{var ft=at.id,Vt=at.name;return{[xt]:Je[xt],[Dt]:Je[ft],[Kt]:Vt}})).flat(),xField:xt,yField:Dt,seriesField:Kt}}return{data:P}}var nt=ve=>{var P=ve.className,O=ve.style,r=ve.meta,g=r===void 0?[]:r,c=ve.data,$=c===void 0?[]:c,J=ve.withArea,X=Object(re.a)(ve,["className","style","meta","data","withArea"]),_=Pe(g,$);return J?fe.a.createElement(G.a,Object(ae.default)({},_,{renderer:"svg",errorTemplate:()=>fe.a.createElement(h,null)},X)):Array.isArray(_.yField)?fe.a.createElement(G.d,Object(ae.default)({},_,{renderer:"svg",errorTemplate:()=>fe.a.createElement(h,null)},X)):fe.a.createElement(G.e,Object(ae.default)({},_,{renderer:"svg",errorTemplate:()=>fe.a.createElement(h,null)},X))},ke=nt,we=e("tJVT"),Q=e("mA+x"),_e=e("aMEK"),mt=e("ARb9"),lt=ve=>{var P=ve.className,O=ve.style,r=ve.showSubtotal,g=r===void 0?!0:r,c=ve.subtotalText,$=c===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:c,J=ve.meta,X=J===void 0?[]:J,_=ve.data,pe=_===void 0?[]:_,Re=ve.size,be=Re===void 0?"middle":Re,$e=ve.indicatorSide,qe=$e===void 0?"top":$e,Ke=ve.leftDimensionLength,ze=Ke===void 0?X.length:Ke,Te=ve.leftExpandable,dt=Te===void 0?!1:Te,We=ve.topExpandable,Ie=We===void 0?!1:We,vt=ve.defaultExpandAll,gt=vt===void 0?!0:vt,xt=ve.cellRender,Dt=Object(re.a)(ve,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),Kt=Object(o.useState)([]),Je=Object(we.default)(Kt,2),at=Je[0],ft=Je[1],Vt=Object(o.useState)([]),Mt=Object(we.default)(Vt,2),Bt=Mt[0],Ut=Mt[1],Yt=j(X),_t=Yt.metaDim,ln=Yt.metaInd,Xt=ln.map(je=>{var et=je.id,pt=je.name,wt=je.isRate;return{name:pt,code:et,align:"right",expression:wt?"AVG(".concat(et,")"):"SUM(".concat(et,")")}}),i=_t.filter((je,et)=>et<ze),a=i.map(je=>{var et=je.id;return et}),E=Object(Q.b)(pe,a,{includeTopWrapper:!0,isExpand:dt?je=>Bt.includes(je):void 0}),M=Object(Q.d)(E,{indicators:qe==="left"?Xt:void 0,supportsExpand:dt,expandKeys:Bt,onChangeExpandKeys:Ut,generateSubtotalNode:g?je=>({position:"start",value:je.path.length===0?$[0]||"\u603B\u8BA1":$[1]||"\u5C0F\u8BA1"}):void 0}),R=Object(we.default)(M,1),he=R[0],ee=_t.filter((je,et)=>et>=ze),yt=ee.map(je=>{var et=je.id;return et}),He=Object(Q.b)(pe,yt,{includeTopWrapper:!0,isExpand:Ie?je=>at.includes(je):void 0}),it=Object(Q.d)(He,{indicators:qe==="top"?Xt:void 0,supportsExpand:Ie,expandKeys:at,onChangeExpandKeys:ft,generateSubtotalNode:g?je=>({position:"start",value:je.path.length===0?$[0]||"\u603B\u8BA1":$[1]||"\u5C0F\u8BA1"}):void 0}),ot=Object(we.default)(it,1),jt=ot[0],Le=Object(Q.c)({data:pe,leftCodes:a,topCodes:yt,aggregate:Object(_e.a)(Xt)});return fe.a.createElement("div",{style:O,className:"CR-PivotTable CR-PivotTable-".concat(be," ").concat(P||"")},fe.a.createElement(Q.a,Object(ae.default)({defaultColumnWidth:100,leftMetaColumns:_t.filter(je=>{var et=je.id;return a.includes(et)}).map(je=>{var et=je.id,pt=je.name;return{code:et,name:pt}}),leftTree:he.children,leftTotalNode:he,topTree:jt.children,topTotalNode:jt,getValue:(je,et)=>{var pt,wt=(pt=Le.get(je.data.dataKey))===null||pt===void 0?void 0:pt.get(et.data.dataKey);return wt==null?void 0:wt[et.code]},render:(je,et,pt)=>{var wt;if(xt){var zt=et.data.dataPath,cn=zt===void 0?[]:zt,dn=pt.data.dataPath,mn=dn===void 0?[]:dn,en={};return cn.forEach((tn,Qt)=>{var f;en[(f=i[Qt])===null||f===void 0?void 0:f.id]=tn}),mn.forEach((tn,Qt)=>{var f;en[(f=ee[Qt])===null||f===void 0?void 0:f.id]=tn}),xt(je,en,pt.code)}return(wt=ln.find(tn=>{var Qt=tn.id;return Qt===pt.code}))!==null&&wt!==void 0&&wt.isRate?"".concat(H(je*100).toFixed(2),"%"):je}},Dt)))},Rt=lt},"4l2o":function(st,T,e){},"7t+U":function(st,T,e){"use strict";e.d(T,"v",function(){return H}),e.d(T,"n",function(){return h}),e.d(T,"m",function(){return Fe}),e.d(T,"g",function(){return ct}),e.d(T,"q",function(){return Pe}),e.d(T,"s",function(){return nt}),e.d(T,"c",function(){return ke}),e.d(T,"t",function(){return Q}),e.d(T,"a",function(){return _e}),e.d(T,"r",function(){return mt}),e.d(T,"o",function(){return lt}),e.d(T,"j",function(){return ve}),e.d(T,"p",function(){return X}),e.d(T,"x",function(){return _}),e.d(T,"z",function(){return pe}),e.d(T,"w",function(){return Re}),e.d(T,"l",function(){return $e}),e.d(T,"f",function(){return Ie}),e.d(T,"b",function(){return gt}),e.d(T,"k",function(){return xt}),e.d(T,"i",function(){return Dt}),e.d(T,"y",function(){return Kt}),e.d(T,"h",function(){return Je}),e.d(T,"d",function(){return at}),e.d(T,"u",function(){return ft}),e.d(T,"e",function(){return Vt}),e.d(T,"A",function(){return Mt}),e.d(T,"B",function(){return Ut});var ae=e("Pv/L"),re=e("PpiC"),o=e("k1fw"),fe=e("tJVT"),G=e("LvDl"),j=e.n(G);window.log1=i=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",i)},window.log2=i=>{console.log("%cwarning:","color: #f50; font-weight: 500;",i)},window.log3=i=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",i)},window.log4=i=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",i)};function H(i){var a=/^(?:\w+:)?\/\/(\S+)$/;return typeof i!="string"?!1:a.test(i)}function h(i,a){if(a)return!1;if(i.widget==="checkbox")return!0;if(i&&i.type==="boolean")return i.widget===void 0}function ue(i){return typeof i=="string"?i.replace(/\[\]/g,""):i}function Et(i){if(typeof i=="string"){var a=i.split(".");return a.length===1?"#":(a.pop(),a.join("."))}return"#"}function Fe(i,a){if(a==="#")return i||{};if(typeof a=="string")return Object(G.get)(i,a)}function Y(i){var a,E;if(i==="#")return{id:"#",dataIndex:[]};if(typeof i!="string")throw Error("path ".concat(i," is not a string!!! Something wrong here"));var M=/\[[0-9]+\]/g,R=i.match(M);return R?(a=i.replace(M,"[]"),E=R.map(he=>Number(he.substring(1,he.length-1)))):a=i,{id:a,dataIndex:E}}function ct(i,a){if(i==="#")return i;if(typeof i!="string")throw Error("id ".concat(i," is not a string!!! Something wrong here"));var E=i;return Array.isArray(a)&&a.forEach(M=>{E=E.replace(/\[\]/,"[".concat(M,"]"))}),ue(E)}function Pe(i){return i.type==="array"&&i.items&&i.enum===void 0}function nt(i){return i.type==="object"&&i.properties}function ke(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",E=arguments.length>2?arguments[2]:void 0,M=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},R=_e(i),he=a;R.$id||(R.$id=he);var ee=[];nt(R)&&Object.entries(R.properties).forEach(He=>{var it=Object(fe.default)(He,2),ot=it[0],jt=it[1],Le=Pe(jt)?ot+"[]":ot,je=he==="#"?Le:he+"."+Le;ee.push(je),ke(jt,je,he,M)}),Pe(R)&&Object.entries(R.items.properties).forEach(He=>{var it=Object(fe.default)(He,2),ot=it[0],jt=it[1],Le=Pe(jt)?ot+"[]":ot,je=he==="#"?Le:he+"."+Le;ee.push(je),ke(jt,je,he,M)});var yt=Array.isArray(R.rules)?[...R.rules]:[];return["boolean","function","string"].indexOf(typeof R.required)>-1&&yt.push({required:R.required}),R.type&&(M[he]={parent:E,schema:R,children:ee,rules:yt}),M}function we(i,a){return i.indexOf(a)>-1}var Q=i=>we(Object.prototype.toString.call(i),"Object"),_e=G.cloneDeep;function mt(i){return typeof i=="number"?!0:typeof i=="string"?!Number.isNaN(Number(i)):!1}function lt(i){return typeof i!="string"?!1:i.match(/^([0-9])*(%|px|rem|em)$/i)}function Rt(i,a){if(i===void 0&&a===void 0)return!0;if(i===void 0||a===void 0)return!1;if(i===null&&a===null)return!0;if(i===null||a===null)return!1;if(i.constructor!==a.constructor)return!1;if(i.constructor===Array){if(i.length!==a.length)return!1;for(var E=0;E<i.length;E++)if(i[E].constructor===Array||i[E].constructor===Object){if(!Rt(i[E],a[E]))return!1}else if(i[E]!==a[E])return!1}else if(i.constructor===Object){if(Object.keys(i).length!==Object.keys(a).length)return!1;for(var M=0;M<Object.keys(i).length;M++){var R=Object.keys(i)[M];if(i[R]&&typeof i[R]!="number"&&(i[R].constructor===Array||i[R].constructor===Object)){if(!Rt(i[R],a[R]))return!1}else if(i[R]!==a[R])return!1}}else if(i.constructor===String||i.constructor===Number)return i===a;return!0}function ve(i){var a;switch(i){case"date":a="YYYY-MM-DD";break;case"time":a="HH:mm:ss";break;case"dateTime":a="YYYY-MM-DD HH:mm:ss";break;case"week":a="YYYY-w";break;case"year":a="YYYY";break;case"quarter":a="YYYY-Q";break;case"month":a="YYYY-MM";break;default:a="YYYY-MM-DD"}return a}function P(i){return i.find((a,E,M)=>E!==M.findIndex(R=>JSON.stringify(a)===JSON.stringify(R)))}function O(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=g(i),M=E.map(ee=>{var yt=ee.name,He=ee.schema,it=He.type,ot=He.enum,jt=He.properties,Le=He.items,je=it==="object"&&jt,et=it==="array"&&Le&&!ot,pt=yt&&a[ee.name];if(!pt)return ee;if(et){var wt=O(Le,pt.items||{});return Object(o.a)(Object(o.a)({},ee),{},{schema:Object(o.a)(Object(o.a)(Object(o.a)({},ee.schema),pt),{},{items:wt})})}if(je){var zt=O(ee.schema,pt);return Object(o.a)(Object(o.a)({},ee),{},{schema:zt})}return Object(o.a)(Object(o.a)({},ee),{},{schema:Object(o.a)(Object(o.a)({},ee.schema),pt)})}),R={};M.forEach(ee=>{R[ee.name]=ee.schema});var he={};return Object.keys(a).forEach(ee=>{typeof ee=="string"&&ee.substring(0,3)==="ui:"&&(he[ee]=a[ee])}),r(R)?Object(o.a)(Object(o.a)({},i),he):Object(o.a)(Object(o.a)(Object(o.a)({},i),he),{},{properties:R})}function r(i){return Object.keys(i).length===0}function g(i){if(!i)return[];var a=i.properties,E=i.items,M=i.type;if(!a&&!E)return[];var R={};return M==="object"&&(R=a),M==="array"&&(R=E),Object.keys(R).map(he=>({schema:R[he],name:he}))}function c(){}var $=i=>Function('"use strict";return ('+i+")")(),J=(i,a,E)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(E),`;
    const formData = `).concat(JSON.stringify(a),`;
    return (`).concat(i,")"))();function X(i){if(typeof i!="string")return!1;var a=/^{{(.+)}}$/,E=/^{{(function.+)}}$/,M=/^{{(.+=>.+)}}$/;return!!(typeof i=="string"&&i.match(a)&&!i.match(E)&&!i.match(M))}function _(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=arguments.length>2?arguments[2]:void 0,M=Et(E),R=Fe(a,M)||{};if(typeof i=="string"){var he=i.substring(2,i.length-2),ee=/formData.([a-zA-Z0-9.$_\[\]]+)/g,yt=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,He=`
    return (`.concat(he.replaceAll(ee,(it,ot)=>JSON.stringify(Fe(a,ot))).replaceAll(yt,(it,ot)=>JSON.stringify(Fe(R,ot))),")");try{return Function(He)()}catch(it){return i}}else return i}var pe=i=>Object.keys(i).some(a=>{var E=i[a];return typeof E=="string"?X(E):Q(E)?pe(E):!1}),Re=(i,a,E)=>{var M=_e(i);return Object.keys(M).forEach(R=>{var he=M[R];if(X(he)&&(M[R]=_(he,a,E)),typeof R=="string"&&R.toLowerCase().indexOf("props")>-1){var ee=M[R];Q(ee)&&Object.keys(ee).forEach(yt=>{M[R][yt]=_(ee[yt],a,E)})}}),M};function be(i){return Object.keys(i).some(a=>typeof i[a]=="function"?!0:typeof i[a]=="string"?X(i[a]):typeof i[a]=="object"?be(i[a]):!1)}var $e=(i,a,E)=>{try{var M=E[a];if(M.schema[i]!==void 0)return M.schema[i];if(M&&M.parent){var R=E[M.parent].schema;return R[i]!==void 0?R[i]:$e(i,M.parent,E)}}catch(he){return}},qe=()=>{var i=localStorage.getItem("SAVES");if(i)try{var a=JSON.parse(i),E=a.length;if(E)return E+1}catch(M){return 1}else return 1};function Ke(i){return Function('"use strict";return ('+i+")")()}function ze(i){if(!i)return[];var a=i.properties,E=i.items,M=i.type;if(!a&&!E)return[];var R={};return M==="object"&&(R=a),M==="array"&&(R=E.properties),Object.keys(R).map(he=>({schema:R[he],name:he}))}var Te=i=>{if(i&&i.propsSchema){var a=i.propsSchema,E=Object(re.a)(i,["propsSchema"]);return Object(o.a)({schema:a},E)}return i},dt=i=>{if(i&&i.schema){var a=i.schema,E=Object(re.a)(i,["schema"]);return Object(o.a)({propsSchema:a},E)}return i},We=i=>{if(!!i){var a=i&&i.items&&i.items.enum,E=i&&i.enum;return a||E}},Ie=function(a){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(a)?a:E},vt=i=>{var a="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(i&&new RegExp(a).test(i))};function gt(i){var a=arguments.length<=1?void 0:arguments[1];return a&&a.target&&i in a.target?a.target[i]:a}var xt=i=>{try{var a=i.split("."),E=a.slice(-1)[0];return E}catch(M){return console.error(M,"getKeyFromPath"),""}},Dt=(i,a)=>{if(typeof i=="boolean")return i?"yes":"no";if(nt(a)||Pe(a))return"-";if(Array.isArray(a.enum)&&Array.isArray(a.enumNames))try{return a.enumNames[a.enum.indexOf(i)]}catch(E){return i}return i},Kt=i=>{var a={};return Q(i)?Object.keys(i).forEach(E=>{a[E]=Kt(i[E])}):Array.isArray(i)?a=i.filter(E=>!!(E&&JSON.stringify(E)!=="{}")):a=i,a},Je=i=>{var a=i.schema,E=i.isRequired,M=E===void 0?!0:E,R={},he={};if(nt(a))R.type="object",M&&a.required===!0&&(R.required=!0),R.fields={},Object.keys(a.properties).forEach(Le=>{var je=a.properties[Le];Array.isArray(a.required)&&a.required.indexOf(Le)>-1&&(je.required=!0),R.fields[Le]=Je({schema:je,isRequired:M})});else if(Pe(a))R.type="array",M&&a.required===!0&&(R.required=!0),R.defaultField={type:"object",fields:{}},Object.keys(a.items.properties).forEach(Le=>{var je=a.items.properties[Le];Array.isArray(a.required)&&a.required.indexOf(Le)>-1&&(je.required=!0),R.defaultField.fields[Le]=Je({schema:je,isRequired:M})});else{var ee=Le=>a.type?Object(o.a)(Object(o.a)({},Le),{},{type:a.type}):Le.pattern&&typeof Le.pattern=="string"?Object(o.a)(Object(o.a)({},Le),{},{pattern:new RegExp(Le.pattern)}):Le,yt=a.required,He=Object(re.a)(a,["required"]);switch(["type","pattern","min","max","len"].forEach(Le=>{Object.keys(He).indexOf(Le)>-1&&(he[Le]=He[Le])}),a.type){case"range":he.type="array";break;default:break}switch(a.format){case"email":case"url":he.type=a.format;break;default:break}var it;if(M&&a.required===!0&&(it={required:!0}),a.rules)if(Array.isArray(a.rules)){var ot=[];a.rules.forEach(Le=>{Le.required===!0?M&&(it=Le):ot.push(ee(Le))}),R=[he,...ot]}else Q(a.rules)?R=[he,ee(a.rules)]:R=he;else R=he;if(it&&(Array.isArray(R)?R.push(it):Q(R)&&(R=[R,it])),a.format==="image"){var jt={validator:(Le,je)=>{var et=/([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;return je===void 0?!0:!!et.exec(je)||H(je)},message:"${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage"};Array.isArray(R)?R.push(jt):Q(R)&&(R=[R,jt])}}return R},at=i=>{var a=i.split(".");return a.map(E=>isNaN(Number(E))?E:"[".concat(E,"]")).reduce((E,M)=>M[0]==="["||E===""?E+M:E+"."+M,"")},ft=(i,a)=>{for(var E=i.split(".");E.length>0;){var M=E,R=Object(ae.a)(M),he=R[0],ee=R.slice(1);he=he.split("[")[0];var yt=void 0;if(nt(a)?yt=a.properties[he]:Pe(a)&&(yt=a.items.properties[he]),E=ee,yt)return ft(ee.join("."),yt);var He={required:!1};if(a.required===!0&&(He.required=!0),a.rules){var it=a.rules.find(ot=>ot.required);it&&(He=it)}return He}},Vt=i=>{var a={};return nt(i)?Object.keys(i.properties).forEach(E=>{var M=i.properties[E],R=Vt(M);a[E]=R}):i.default!==void 0?a=i.default:i.type==="boolean"?a=!1:a=void 0,a},Mt=(i,a)=>{if(typeof i!="string")return"";if(!a)return i;if(i=i.replace("${title}",a.title),i=i.replace("${type}",a.format||a.type),a.min&&(i=i.replace("${min}",a.min)),a.max&&(i=i.replace("${max}",a.max)),a.rules){var E=a.rules.find(ee=>ee.min!==void 0);E&&(i=i.replace("${min}",E.min));var M=a.rules.find(ee=>ee.max!==void 0);M&&(i=i.replace("${max}",M.max));var R=a.rules.find(ee=>ee.len!==void 0);R&&(i=i.replace("${len}",R.len));var he=a.rules.find(ee=>ee.pattern!==void 0);he&&(i=i.replace("${pattern}",he.pattern))}return i},Bt=(i,a)=>{var E=_e(i);if(E=a(E),nt(E)){var M=[];Array.isArray(E.required)&&(M=E.required,delete E.required),Object.keys(E.properties).forEach(R=>{var he=E.properties[R];M.indexOf(R)>-1&&(he.required=!0),E.properties[R]=Bt(he,a)})}else Pe(E)&&Object.keys(E.items.properties).forEach(R=>{var he=E.items.properties[R];E.items.properties[R]=Bt(he,a)});return E},Ut=i=>Bt(i,Yt),Yt=i=>{try{var a=_e(i);if(a.rules=a.rules||[],a.props=a.props||{},a["ui:options"]&&(a.props=a["ui:options"],delete a["ui:options"]),a.pattern){var E={pattern:a.pattern};a.message&&a.message.pattern&&(E.message=a.message.pattern),a.rules.push(E),delete a.pattern,delete a.message}return a.minLength&&(a.rules.push({min:a.minLength}),delete a.minLength),a.maxLength&&(a.rules.push({max:a.maxLength}),a.props.maxLength=a.maxLength,delete a.maxLength),a.min&&(a.rules.push({min:a.min}),a.props.min=a.min,delete a.min),a.max&&(a.rules.push({max:a.max}),a.props.max=a.max,delete a.max),a.step&&(a.props.step=a.step,delete a.step),a.minItems&&(a.props.minItems=a.minItems,delete a.minItems),a.maxItems&&(a.props.maxItems=a.maxItems,delete a.maxItems),a["ui:className"]&&(a.className=a["ui:className"],delete a["ui:className"]),a["ui:hidden"]&&(a.hidden=a["ui:hidden"],delete a["ui:hidden"]),a["ui:readonly"]&&(a.readOnly=a["ui:readonly"],delete a["ui:readonly"]),a["ui:disabled"]&&(a.disabled=a["ui:disabled"],delete a["ui:disabled"]),a["ui:width"]&&(a.width=a["ui:width"],delete a["ui:width"]),a["ui:labelWidth"]&&(a.labelWidth=a["ui:labelWidth"],delete a["ui:labelWidth"]),a.rules&&a.rules.length===0&&delete a.rules,a}catch(M){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",M),i}},_t=(i,a)=>{var E=parseRootValue(i),M=replaceParseValue(E)},ln=i=>{if(typeof i!="string")return!1;var a=/^{{(function.+)}}$/,E=/^{{(.+=>.+)}}$/;return i.match(a)?i.match(a)[1]:i.match(E)?i.match(E)[1]:!1},Xt=function i(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},M={};return Q(a)?(a.theme&&E[a.theme]&&(M=Object(o.a)(Object(o.a)({},a),E[a.theme])),Object.keys(a).forEach(R=>{M[R]=i(a[R],E)})):M=a,M}},"8iYR":function(st,T,e){"use strict";e.r(T),e.d(T,"basic",function(){return ae}),e.d(T,"expression",function(){return re});var ae={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},re={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},"97ez":function(st,T,e){},ARb9:function(st,T,e){},D7jV:function(st,T,e){"use strict";e.d(T,"a",function(){return Ne});var ae=e("6UYH"),re=e("fTA7"),o=e.n(re),fe=e("bd+v"),G=e("LB4q"),j=e.n(G),H=e("Hjg5"),h=e("rmht"),ue=e.n(h),Et=e("pJsf"),Fe=e("g4D/"),Y=e.n(Fe),ct=e("0Owb"),Pe=e("PpiC"),nt=e("LGkk"),ke=e("rVaU"),we=e.n(ke),Q=e("k1fw"),_e=e("b+Mx"),mt=e("5Dct"),lt=e.n(mt),Rt=e("cUip"),ve=e("iJl9"),P=e.n(ve),O=e("q1tI"),r=e.n(O),g=e("Rn6r"),c=e("7t+U"),$=m=>{var D=m.schema,S=m.style,N=m.options,K;if(N&&Array.isArray(N))K=N;else{var ce=D||{},xe=ce.enum,le=ce.enumNames;K=Object(c.f)(xe).map((Me,q)=>{var de=le&&Array.isArray(le)?le[q]:Me,Oe=typeof de=="string"&&de[0]==="<";return Oe&&(de=r.a.createElement("span",{dangerouslySetInnerHTML:{__html:de}})),{label:de,value:Me}})}return{options:K,mode:"multiple",style:Object(Q.a)({width:"100%",marginTop:5},S)}},J=Object(g.a)($)(Y.a.Group),X=J,_=e("ypy7"),pe=e.n(_),Re=e("rNQX");function be(m){var D=m.schema.format,S=K=>{m.disabled||m.readonly||m.onChange(K.color)},N=K=>{m.onChange(K.target.value)};return r.a.createElement("div",{className:"fr-color-picker"},r.a.createElement(pe.a,{type:D,animation:"slide-up",color:m.value||"#ffffff",onChange:S}),m.readonly?r.a.createElement("span",null,m.value||"#ffffff"):r.a.createElement(P.a,{placeholder:"#ffffff",disabled:m.disabled,value:m.value,onChange:N}))}var $e=e("GBD3"),qe=e("wXtC"),Ke=e.n(qe),ze=e("wd/R"),Te=e.n(ze),dt=m=>{var D=m.onChange,S=m.format,N=m.value,K=m.style,ce=Object(Pe.a)(m,["onChange","format","value","style"]),xe=Object(c.j)(S),le=N||void 0;typeof le=="string"&&(S==="week"&&(le=le&&le.substring(0,le.length-1)),S==="quarter"&&(le=le.replace("Q",""))),le&&(le=Te()(le,xe));var Me=(de,Oe)=>{D(Oe)},q={value:le,style:Object(Q.a)({width:"100%"},K),onChange:Me};return S==="dateTime"&&(q.showTime=!0),["week","month","quarter","year"].indexOf(S)>-1&&(q.picker=S),q=Object(Q.a)(Object(Q.a)({},q),ce),r.a.createElement(Ke.a,q)},We=e("mxgt"),Ie=e("4ZwL"),vt=e.n(Ie),gt=m=>{var D=m.onChange,S=m.format,N=m.value,K=m.style,ce=Object(Pe.a)(m,["onChange","format","value","style"]),xe=Object(c.j)(S),le=N?Te()(N,xe):void 0,Me=(de,Oe)=>{D(Oe)},q=Object(Q.a)({value:le,style:Object(Q.a)({width:"100%"},K),onChange:Me},ce);return r.a.createElement(vt.a,q)},xt=e("tJVT"),Dt=Ke.a.RangePicker,Kt=m=>{var D=m.onChange,S=m.format,N=m.value,K=m.style,ce=Object(Pe.a)(m,["onChange","format","value","style"]),xe=Object(c.j)(S),le=Array.isArray(N)?N:[],Me=Object(xt.default)(le,2),q=Me[0],de=Me[1];typeof q=="string"&&typeof de=="string"&&(S==="week"&&(q=q.substring(0,q.length-1),de=de.substring(0,de.length-1)),S==="quarter"&&(q=q.replace("Q",""),de=de.replace("Q","")));var Oe=q&&de?[Te()(q,xe),Te()(de,xe)]:[],rt=(At,Ot)=>{D(Ot)},St={value:Oe,style:Object(Q.a)({width:"100%"},K),onChange:rt};return S==="dateTime"&&(St.showTime=!0),["week","month","quarter","year"].indexOf(S)>-1&&(St.picker=S),St=Object(Q.a)(Object(Q.a)({},St),ce),r.a.createElement(Dt,St)},Je=Kt,at=vt.a.RangePicker,ft=m=>{var D=m.onChange,S=m.format,N=m.value,K=m.style,ce=Object(Pe.a)(m,["onChange","format","value","style"]),xe=Object(c.j)(S),le=Array.isArray(N)?N:[],Me=Object(xt.default)(le,2),q=Me[0],de=Me[1],Oe=q&&de?[Te()(q,xe),Te()(de,xe)]:[],rt=(At,Ot)=>{D(Ot)},St=Object(Q.a)({style:Object(Q.a)({width:"100%"},K),value:Oe,onChange:rt},ce);return r.a.createElement(at,St)},Vt=ft;function Mt(m){var D=m.children;return r.a.createElement("div",{className:"w-100"},D)}var Bt=e("7LYo"),Ut=e("5GXF"),Yt=e.n(Ut),_t=e("2YYc"),ln=Yt.a.Panel;function Xt(m){var D=m.children,S=m.title,N=Object(Pe.a)(m,["children","title"]),K=Object(_t.d)(),ce=K.theme,xe=K.displayType;return S?ce=="1"?r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},S),r.a.createElement("div",{style:{marginLeft:xe=="row"?0:12}},D)):r.a.createElement("div",{className:"w-100"},r.a.createElement(Yt.a,{defaultActiveKey:["1"]},r.a.createElement(ln,{header:r.a.createElement("div",{style:{fontSize:16,fontWeight:500}},S),key:"1",className:"fr-collapse-object"},D))):r.a.createElement("div",{className:"w-100"},D)}var i=e("ek7I"),a=e("FAat"),E=e.n(a),M=m=>{var D=m.schema,S=m.value,N=m.style,K=m.options,ce=Object(Pe.a)(m,["schema","value","style","options"]),xe;if(K&&Array.isArray(K))xe=K;else{var le=D||{},Me=le.enum,q=le.enumNames;xe=Object(c.f)(Me).map((rt,St)=>{var At=q&&Array.isArray(q)?q[St]:rt,Ot=typeof At=="string"&&At[0]==="<";return Ot&&(At=r.a.createElement("span",{dangerouslySetInnerHTML:{__html:At}})),{label:At,value:rt}})}var de=Object(Q.a)({options:xe,mode:"multiple",style:Object(Q.a)({width:"100%"},N)},ce),Oe=Array.isArray(S)?S:void 0;return r.a.createElement(E.a,Object(ct.default)({value:Oe},de))},R=M,he=e("7kJ1"),ee=e("qPIi"),yt=e.n(ee),He=m=>{var D=m.schema,S=m.style,N=m.options,K;if(N&&Array.isArray(N))K=N;else{var ce=D||{},xe=ce.enum,le=ce.enumNames;K=Object(c.f)(xe).map((Me,q)=>{var de=le&&Array.isArray(le)?le[q]:Me,Oe=typeof de=="string"&&de[0]==="<";return Oe&&(de=r.a.createElement("span",{dangerouslySetInnerHTML:{__html:de}})),{label:de,value:Me}})}return{options:K,mode:"multiple",style:Object(Q.a)({width:"100%",minWidth:120,marginTop:5},S)}},it=Object(g.a)(He)(yt.a.Group),ot=it,jt=m=>{var D=m.schema,S=m.style,N=m.options,K;if(N&&Array.isArray(N))K=N;else{var ce=D||{},xe=ce.enum,le=ce.enumNames;K=Object(c.f)(xe).map((Me,q)=>{var de=le&&Array.isArray(le)?le[q]:Me,Oe=typeof de=="string"&&de[0]==="<";return Oe&&(de=r.a.createElement("span",{dangerouslySetInnerHTML:{__html:de}})),{label:de,value:Me}})}return{options:K,style:Object(Q.a)({width:"100%"},S)}},Le=Object(g.a)(jt)(E.a),je=Le,et=e("tCGa"),pt=e("DH6M"),wt=e.n(pt),zt=m=>{var D=m.schema,S=D.max,N=D.min,K=D.step,ce={};(S||S===0)&&(ce={max:S}),(N||N===0)&&(ce=Object(Q.a)(Object(Q.a)({},ce),{},{min:N})),K&&(ce=Object(Q.a)(Object(Q.a)({},ce),{},{step:K}));var xe=!1;m.options&&m.options.hideNumber&&(xe=!0);var le=m.readonly?r.a.createElement("span",{style:{width:"90px"}},m.value===""?"-":m.value):r.a.createElement(lt.a,Object(ct.default)({},m.options,ce,{style:{width:"90px"},value:m.value,disabled:m.disabled,onChange:m.onChange}));return r.a.createElement("div",{className:"fr-slider"},r.a.createElement(wt.a,Object(ct.default)({style:{flexGrow:1,marginRight:xe?0:12}},ce,{onChange:m.onChange,value:typeof m.value=="number"?m.value:N||0,disabled:m.disabled||m.readonly})),xe?null:le)},cn=zt,dn=e("VDQ/"),mn=e("B8+X"),en=e.n(mn),tn=e("MaXC"),Qt=e("4IMT"),f=e.n(Qt),A=e("tL+A"),W=e("QpBz"),V=e.n(W),Z=e("z7Xi");function me(m){var D=m.action,S=m.value,N=m.onChange,K=m.uploadProps,ce=m.buttonProps,xe=Object(Q.a)({name:"file",type:"file",action:D,onChange(q){q.file.status==="done"?(V.a.success("".concat(q.file.name," \u4E0A\u4F20\u6210\u529F")),N(q.file.response.url)):q.file.status==="error"&&V.a.error("".concat(q.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){N("")}},K),le={icon:r.a.createElement(Z.a,null),children:"\u4E0A\u4F20"},Me=Object(Q.a)(Object(Q.a)({},le),ce);return r.a.createElement("div",{className:"fr-upload-mod"},r.a.createElement(en.a,Object(ct.default)({},xe,{className:"fr-upload-file"}),r.a.createElement(f.a,Me)),S&&r.a.createElement("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var ye=e("/xgg"),v=e("aOJk"),b=e.n(v),x=e("mpQp"),B="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",I=m=>{var D=m.value;return r.a.createElement(b.a,{content:r.a.createElement("img",{src:D||B,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},r.a.createElement(x.a,null))};function L(m){var D=m.value,S=Object(Pe.a)(m,["value"]);return r.a.createElement(P.a,Object(ct.default)({value:D,addonAfter:r.a.createElement(I,{value:D})},S))}var te=m=>{var D=m.value,S=Object(c.v)(D);return S?r.a.createElement("a",{target:"_blank",href:D},"\u6D4B\u8BD5\u94FE\u63A5"):r.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function ne(m){var D=m.value,S=Object(Pe.a)(m,["value"]);return r.a.createElement(P.a,Object(ct.default)({value:D,addonAfter:r.a.createElement(te,{value:D})},S))}function ie(m){var D=m.value,S=m.schema,N="-";if(S.type==="boolean")N=D===!0?"\u2714":"\u2718";else if(Array.isArray(S.enum)&&Array.isArray(S.enumNames)){var K=S.enum.indexOf(D);N=S.enumNames[K]||"-"}else typeof D=="number"?N=String(D):typeof D=="string"&&(N=D);return r.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:N}})}var k=P.a.TextArea,Xe=Object(g.a)(m=>{var D=m.style;return{style:Object(Q.a)({width:"100%"},D)}})(lt.a),se=Object(g.a)(m=>{var D=m.style;return{style:Object(Q.a)({marginTop:5},D)}})(we.a),Ue=Object(g.a)(m=>{var D=m.autoSize;return{autoSize:D||{minRows:3}}})(k),Ae=m=>{var D=m.style,S=Object(Pe.a)(m,["style"]);return r.a.createElement(Y.a,Object(ct.default)({style:Object(Q.a)({paddingTop:4,paddingBottom:4},D)},S))},Be=m=>{var D=m.style,S=Object(Pe.a)(m,["style"]);return r.a.createElement(ue.a,Object(ct.default)({style:Object(Q.a)({width:"100%"},D)},S))},Ye=m=>{var D=m.style,S=Object(Pe.a)(m,["style"]);return r.a.createElement(j.a,Object(ct.default)({style:Object(Q.a)({width:"100%"},D)},S))},Ne={input:P.a,checkbox:Ae,checkboxes:X,color:be,date:dt,time:gt,dateRange:Je,timeRange:Vt,imageInput:L,url:ne,list:Mt,map:Xt,multiSelect:R,number:Xe,radio:ot,select:je,slider:cn,switch:se,textarea:Ue,upload:me,html:ie,rate:o.a,treeSelect:Be,cascader:Ye},z=Object.keys(Ne)},GYr9:function(st,T,e){},JjdP:function(st,T,e){"use strict";e.r(T);var ae=e("9og8"),re=e("WmNS"),o=e.n(re),fe=e("LtsZ"),G=`import React, { useRef } from 'react';
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

export default Demo;`,j=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,H=`export const basic = {
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
};`,h=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,ue=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Et=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Collapse, Slider } from 'antd';
import './index.css';

window.copyMe = (list, index) => {
  const item = list[index];
  list.splice(index, 0, item);
  return list;
};

const Option = Select.Option;
const RadioGroup = Radio.Group;
const { Panel } = Collapse;
// constant
const themeList = [
  { label: 'antd\u4E3B\u9898', value: 'antd' },
  { label: 'fusion\u4E3B\u9898', value: 'fusion' },
];
class Root extends Component {
  state = {
    schemaName: 'simplest',
    theme: 'antd',
    column: 1,
    displayType: 'column',
    showDescIcon: false,
    readOnly: false,
    labelWidth: 110,
  };

  onThemeChange = e => {
    this.setState({ theme: e.target.value });
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

  onShowDescChange = value => {
    this.setState({ showDescIcon: value });
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
            <Radio value="date">\u65E5\u671F</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <RadioGroup
              options={themeList}
              value={this.state.theme}
              onChange={this.onThemeChange}
            />
            <Select
              style={{ marginRight: 8 }}
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
              checkedChildren="\u5173\u63CF\u8FF0"
              onChange={this.onShowDescChange}
              unCheckedChildren="\u5F00\u63CF\u8FF0"
              checked={showDescIcon}
            />
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 42 }}>\u6807\u7B7E\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        {/* <Collapse defaultActiveKey={['1']} onChange={() => {}}>
          <Panel
            header={
              <div className="flex justify-between items-center">
                <div className="b f3">FormRender</div>
              </div>
            }
            key="1"
          >
            </Panel>
        </Collapse> */}
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
  const [schemaStr, set1] = useState(schema2str(DefaultSchema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema));
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

  const handleDataChange = data => {
    let schema = tryParse(schemaStr);
    if (schema && typeof data === 'object') {
      if (!deepEqual(schema.formData, data)) {
        schema = { ...schema, formData: data };
        set1(schema2str(schema));
      }
    }
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }
  const { formData = {} } = schema;

  const form = useForm({ formData, onChange: handleDataChange });

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
            <CodeBlock value={schema2str(formData)} readOnly />
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
              schema={schema.schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Y=`{
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
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"]
      }
    }
  }
}`,ct=`import { Select } from 'antd';
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

export default SearchInput;`,Pe=`import React from 'react';
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

export default Demo;`,nt=`/* PrismJS 1.16.0
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
}`,ke=`.markdown p {
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
}`,we=`import React from 'react';
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

export default Demo;`,Q=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
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

export default Demo;`,_e=`import React, { useState, useRef } from 'react';
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

export default Demo;`,mt=`import React from 'react';
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
                text: '\u670D\u52A1\u7AEF\u4E0B\u62C9\u9009\u6846',
                name: 'asyncSelect',
                schema: {
                  title: '\u6765\u81EA\u670D\u52A1\u7AEF',
                  type: 'string',
                  'ui:widget': 'NewWidget',
                },
                widget: 'NewWidget',
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
                widget: 'map',
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

export default Demo;`,lt=`import React, { useRef } from 'react';
import Generator from 'fr-generator';
import './index.css';

const defaultValue = {
  schema: {
    type: 'object',
    properties: {},
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const Demo = () => {
  const ref = useRef();

  const onClick = () => {
    ref.current.copyValue();
    window.open('https://x-render.gitee.io/form-render/playground');
  };

  return (
    <div style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        defaultValue={defaultValue}
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick }]}
      />
    </div>
  );
};

export default Demo;`,Rt=`.hide-demo {
  display: none;
}

.__dumi-default-previewer-demo {
  padding: 24px 0 24px 0;
}`,ve=T.default={"guide-card":{component:Object(fe.dynamic)({loader:function(){var P=Object(ae.a)(o.a.mark(function r(){return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(34),e.e(4)]).then(e.bind(null,"oLxE"));case 2:return c.abrupt("return",c.sent.default);case 3:case"end":return c.stop()}},r)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:G}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var O=e("3PQu"),r=e("K+nK"),g=r(e("tJVT")),c=O(e("q1tI")),$=e("36SN"),J=function(){var _=(0,c.useState)("Line"),pe=(0,g.default)(_,2),Re=pe[0],be=pe[1],$e={Line:$.Line,Column:$.Column,PivotTable:$.PivotTable}[Re];return c.default.createElement("div",null,c.default.createElement("div",{style:{marginBottom:10}},c.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return be("Line")}},"\u6298\u7EBF\u56FE"),c.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return be("Column")}},"\u67F1\u72B6\u56FE"),c.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return be("PivotTable")}},"\u4EA4\u53C9\u8868")),c.default.createElement($e,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return c.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable, } from 'chart-render';

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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { pv: 50, uv: 20 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20, pv: 120 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120, pv: 1120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21, pv: 121 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121, pv: 1121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15, pv: 115 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115, pv: 1115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40, pv: 140 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140, pv: 1140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31, pv: 131 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131, pv: 1131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32, pv: 132 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132, pv: 1132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30, pv: 130 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=e("36SN"),c=function(){return r.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(X,_,pe){return r.default.createElement("div",null,r.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),r.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(_).length]}},X),r.default.createElement("p",null,JSON.stringify(_)),r.default.createElement("p",null,JSON.stringify(pe)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return r.default.createElement(c)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p style={{
          color: ['red', 'orange', 'yellow', 'green', 'blue'][Object.keys(dimRecord).length],
        }}>{val}</p>
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
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var O=e("3PQu"),r=e("K+nK"),g=r(e("tJVT")),c=O(e("q1tI")),$=e("36SN"),J=function(){var _=(0,c.useState)(!1),pe=(0,g.default)(_,2),Re=pe[0],be=pe[1];return c.default.createElement(c.default.Fragment,null,c.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",c.default.createElement("input",{type:"checkbox",value:Re,onChange:function(){return be(!Re)}})),c.default.createElement($.PivotTable,{leftExpandable:Re,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return c.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A<input type="checkbox" value={expandable} onChange={() => setExpandable(!expandable)} /></label>
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
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.7"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var O=e("3PQu"),r=e("K+nK");e("MaXC");var g=r(e("4IMT")),c=r(e("fWQN")),$=r(e("mtLc")),J=r(e("yKVA")),X=r(e("879j")),_=r(e("q1tI")),pe=e("gdfu"),Re=O(e("refC")),be={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},$e=function(Ke){(0,J.default)(Te,Ke);var ze=(0,X.default)(Te);function Te(){return(0,c.default)(this,Te),ze.apply(this,arguments)}return(0,$.default)(Te,[{key:"render",value:function(){var We=this.props.form;return _.default.createElement("div",null,_.default.createElement(Re.default,{form:We,schema:be}),_.default.createElement(g.default,{type:"primary",onClick:We.submit},"\u63D0\u4EA4"))}}]),Te}(_.default.Component),qe=(0,Re.connectForm)($e);return _.default.createElement(qe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';

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

export default connectForm(Demo);`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var O=e("3PQu"),r=e("K+nK");e("MaXC");var g=r(e("4IMT")),c=r(e("q1tI")),$=e("gdfu"),J=O(e("refC")),X={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},_=function(){var be=(0,J.useForm)();return c.default.createElement("div",null,c.default.createElement(J.default,{form:be,schema:X}),c.default.createElement(g.default,{type:"primary",onClick:be.submit},"\u63D0\u4EA4"))},pe=_;return c.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var O=e("3PQu"),r=e("K+nK");e("MaXC");var g=r(e("4IMT")),c=r(e("q1tI")),$=e("gdfu"),J=O(e("refC")),X={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},_=function(){var be=(0,J.useForm)(),$e=function(Ke,ze){ze.length>0?alert("errors:"+JSON.stringify(ze)):alert("formData:"+JSON.stringify(Ke,null,2))};return c.default.createElement("div",null,c.default.createElement(J.default,{form:be,schema:X,onFinish:$e}),c.default.createElement(g.default,{type:"primary",onClick:be.submit},"\u63D0\u4EA4"))},pe=_;return c.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var O=e("3PQu"),r=e("K+nK"),g=r(e("q1tI")),c=O(e("refC")),$={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function J(){var _=(0,c.useForm)(),pe=function(be,$e){$e.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify($e))):alert(JSON.stringify(be))};return g.default.createElement("div",null,g.default.createElement(c.default,{form:_,schema:$,onFinish:pe}),g.default.createElement("button",{onClick:_.submit},"\u63D0\u4EA4"))}var X=J;return g.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("c2mQ")),c=e("8iYR"),$=function(){return r.default.createElement(g.default,{schema:c.basic})};return r.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:j},"json/schema.js":{import:"./json/schema",content:H}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c=function(X){return{type:"object",displayType:X,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},$=function(){return r.default.createElement("div",null,r.default.createElement("h2",null,"display: row"),r.default.createElement(g.default,{schema:c("row")}),r.default.createElement("h2",null,"display: column"),r.default.createElement(g.default,{schema:c("column")}))};return r.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},$=function(){return r.default.createElement(g.default,{schema:c})};return r.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},$=function(){return r.default.createElement(g.default,{readOnly:!0,schema:c})};return r.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},$=function(){return r.default.createElement(g.default,{labelWidth:"200",schema:c})};return r.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},$=function(){return r.default.createElement(g.default,{schema:c})},J=$;return r.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},$=function(){return r.default.createElement(g.default,{schema:c})},J=$;return r.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},$=function(){return r.default.createElement(g.default,{schema:c})},J=$;return r.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("bQjt")),c={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},$=function(){return r.default.createElement(g.default,{schema:c})},J=$;return r.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:h}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:function(){var O=e("3PQu"),r=e("K+nK");e("lfLe");var g=r(e("Cp9S"));e("MaXC");var c=r(e("4IMT"));e("tL+A");var $=r(e("QpBz")),J=r(e("tJVT")),X=O(e("q1tI")),_=e("gdfu"),pe=O(e("refC")),Re=e("OH0R"),be=function(){var Ke=(0,pe.useForm)(),ze=(0,X.useState)({}),Te=(0,J.default)(ze,2),dt=Te[0],We=Te[1],Ie=function(){(0,Re.fakeApi)("xxx/getForm").then(function(xt){Ke.setValues({input1:"hello world",select1:"c"})})};(0,X.useEffect)(function(){(0,Re.delay)(1e3).then(function(gt){We({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var vt=function(xt,Dt){Dt.length>0?$.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Dt.map(function(Kt){return Kt.name}))):(0,Re.fakeApi)("xxx/submit",xt).then(function(Kt){return $.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return X.default.createElement("div",{style:{width:"400px"}},X.default.createElement(pe.default,{form:Ke,schema:dt,onFinish:vt}),X.default.createElement(g.default,null,X.default.createElement(c.default,{onClick:Ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),X.default.createElement(c.default,{type:"primary",onClick:Ke.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},$e=be;return X.default.createElement($e)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ue}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var O=e("3PQu"),r=e("K+nK");e("MaXC");var g=r(e("4IMT"));e("tL+A");var c=r(e("QpBz")),$=r(e("q1tI")),J=e("gdfu"),X=O(e("refC")),_=e("OH0R"),pe={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},Re=function(){var qe=(0,X.useForm)(),Ke=function(dt,We){We.length>0?c.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(We.map(function(Ie){return Ie.name}))):(0,_.fakeApi)("xxx/submit",dt).then(function(Ie){return c.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},ze=function(dt,We){return(0,_.fakeApi)("xxx/validation").then(function(Ie){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return $.default.createElement("div",{style:{width:"400px"}},$.default.createElement(X.default,{form:qe,schema:pe,beforeFinish:ze,onFinish:Ke}),$.default.createElement(g.default,{type:"primary",onClick:qe.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},be=Re;return $.default.createElement(be)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  const beforeFinish = (data, error) => {
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ue}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var O=e("3PQu"),r=e("K+nK");e("lfLe");var g=r(e("Cp9S"));e("MaXC");var c=r(e("4IMT"));e("tL+A");var $=r(e("QpBz")),J=r(e("q1tI")),X=e("gdfu"),_=O(e("refC")),pe=e("OH0R"),Re={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},be=function(){var Ke=(0,_.useForm)(),ze=function(We,Ie){Ie.length>0?$.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ie.map(function(vt){return vt.name}))):(0,pe.fakeApi)("xxx/submit",We).then(function(vt){return $.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Te=function(){(0,pe.fakeApi)("xxx/getForm").then(function(We){Ke.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return J.default.createElement("div",{style:{width:"400px"}},J.default.createElement(_.default,{form:Ke,schema:Re,onFinish:ze}),J.default.createElement(g.default,null,J.default.createElement(c.default,{onClick:Te},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),J.default.createElement(c.default,{type:"primary",onClick:Ke.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},$e=be;return J.default.createElement($e)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ue}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var O=e("3PQu"),r=e("K+nK"),g=r(e("q1tI")),c=O(e("refC")),$={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},J=function(){var pe=(0,c.useForm)();return g.default.createElement(c.default,{form:pe,schema:$})},X=J;return g.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("c2mQ")),c=e("8iYR"),$=function(){return r.default.createElement(g.default,{schema:c.expression})};return r.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:j},"json/schema.js":{import:"./json/schema",content:H}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"watch-demo":{component:function(){var O=e("3PQu"),r=e("K+nK");e("MaXC");var g=r(e("4IMT")),c=r(e("q1tI")),$=e("gdfu"),J=O(e("refC")),X={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},_=function(){var be=(0,J.useForm)(),$e=function(ze,Te){Te.length>0?alert("errorFields:"+JSON.stringify(Te)):alert("formData:"+JSON.stringify(ze,null,2))},qe={"#":function(ze){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",ze)},input1:function(ze){ze!==void 0&&be.onItemChange("input2",ze)}};return c.default.createElement("div",null,c.default.createElement(J.default,{form:be,schema:X,onFinish:$e,watch:qe}),c.default.createElement(g.default,{type:"primary",onClick:be.submit},"\u63D0\u4EA4"))},pe=_;return c.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
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
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      if (val !== undefined) {
        form.onItemChange('input2', val);
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
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"widget-demo":{component:function(){var O=e("3PQu"),r=e("K+nK");e("MaXC");var g=r(e("4IMT"));e("cUip");var c=r(e("iJl9")),$=r(e("0Owb")),J=O(e("q1tI")),X=e("gdfu"),_=O(e("refC")),pe={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},Re=function(Ke){return J.default.createElement(c.default,(0,$.default)({addonBefore:"http://",addonAfter:".com"},Ke))},be=function(){var Ke=(0,_.useForm)(),ze=function(){};return J.default.createElement("div",null,J.default.createElement(_.default,{form:Ke,schema:pe,widgets:{site:Re},onFinish:function(dt){return alert(JSON.stringify(dt,null,2))}}),J.default.createElement(g.default,{type:"primary",onClick:Ke.submit},"\u63D0\u4EA4"))},$e=be;return J.default.createElement($e)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"widget-demo"}},"docs-playground":{component:Object(fe.dynamic)({loader:function(){var P=Object(ae.a)(o.a.mark(function r(){return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(34),e.e(4)]).then(e.bind(null,"BASV"));case 2:return c.abrupt("return",c.sent.default);case 3:case"end":return c.stop()}},r)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:Et},"main.js":{import:"./main",content:Fe},"json/simplest.json":{import:"./json/simplest.json",content:Y},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:ct},"monaco/index.js":{import:"./monaco",content:Pe},"theme.css":{import:"./theme.css",content:nt},"index.css":{import:"./index.css",content:ke}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.1.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(fe.dynamic)({loader:function(){var P=Object(ae.a)(o.a.mark(function r(){return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(34),e.e(4)]).then(e.bind(null,"7ZP+"));case 2:return c.abrupt("return",c.sent.default);case 3:case"end":return c.stop()}},r)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{tsx:we}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.4"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var O=e("K+nK"),r=O(e("q1tI")),g=e("P2DI"),c=[],$=0;$<6;$++)c.push({id:$.toString(),title:"\u6807\u9898".concat($+1),created_at:new Date().getTime()});var J={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},X=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(be,$e){return r.default.createElement("a",{onClick:function(){return alert(be.title)}},"\u7F16\u8F91")}}],_=function(){var be=function(){return{rows:c,total:c.length}};return r.default.createElement(g.TableProvider,null,r.default.createElement(g.Search,{schema:J,api:be}),r.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:X,rowKey:"id"}))},pe=_;return r.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  }
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
    render: (row, record) => (
     <a onClick={()=>alert(row.title)}>\u7F16\u8F91</a>
    ),
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.4"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var O=e("K+nK"),r=O(e("q1tI")),g=O(e("nYSz")),c={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},$=function(){return r.default.createElement("div",{style:{height:"80vh"}},r.default.createElement(g.default,{defaultValue:c}))},J=$;return r.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(fe.dynamic)({loader:function(){var P=Object(ae.a)(o.a.mark(function r(){return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(34),e.e(4)]).then(e.bind(null,"PPgD"));case 2:return c.abrupt("return",c.sent.default);case 3:case"end":return c.stop()}},r)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:Q}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(fe.dynamic)({loader:function(){var P=Object(ae.a)(o.a.mark(function r(){return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(34),e.e(4)]).then(e.bind(null,"jktF"));case 2:return c.abrupt("return",c.sent.default);case 3:case"end":return c.stop()}},r)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:_e}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(fe.dynamic)({loader:function(){var P=Object(ae.a)(o.a.mark(function r(){return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(34),e.e(4)]).then(e.bind(null,"M63W"));case 2:return c.abrupt("return",c.sent.default);case 3:case"end":return c.stop()}},r)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:mt}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(fe.dynamic)({loader:function(){var P=Object(ae.a)(o.a.mark(function r(){return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.all([e.e(34),e.e(4)]).then(e.bind(null,"TYW4"));case 2:return c.abrupt("return",c.sent.default);case 3:case"end":return c.stop()}},r)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:lt},"index.css":{import:"./index.css",content:Rt}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},identifier:"generator-playground"}}}},OH0R:function(st,T,e){"use strict";e.r(T),e.d(T,"delay",function(){return ae}),e.d(T,"fakeApi",function(){return re});var ae=o=>new Promise(fe=>setTimeout(fe,o)),re=(o,fe)=>(console.group("request:",o),console.log("params:",fe),console.groupEnd(),ae(500))},OVFa:function(st,T,e){},Oxum:function(st,T,e){},P2DI:function(st,T,e){"use strict";e.r(T),e.d(T,"Search",function(){return P}),e.d(T,"Table",function(){return mn}),e.d(T,"TableProvider",function(){return ye}),e.d(T,"useTable",function(){return nt});var ae=e("Saan"),re=e("vgIT"),o=e.n(re),fe=e("0Owb"),G=e("k1fw"),j=e("tL+A"),H=e("QpBz"),h=e.n(H),ue=e("PpiC"),Et=e("tJVT"),Fe=e("q1tI"),Y=e.n(Fe),ct=Object(Fe.createContext)({}),Pe=Object(Fe.createContext)({}),nt=()=>Object(Fe.useContext)(ct),ke=()=>Object(Fe.useContext)(Pe),we=v=>{var b=Object(Fe.useReducer)((te,ne)=>{var ie=ne;typeof ne=="function"&&(ie=ie(te)),ne.action&&ne.payload&&(ie=ne.payload,typeof ie=="function"&&(ie=ie(te)));var k=Object(G.a)(Object(G.a)({},te),ie);return k},v),x=Object(Et.default)(b,2),B=x[0],I=x[1],L=(te,ne)=>{I(te)};return[B,L]},Q=e("MaXC"),_e=e("4IMT"),mt=e.n(_e),lt=e("refC"),Rt=v=>{var b=v.clearSearch,x=v.style,B=x===void 0?{}:x,I=v.className,L=I===void 0?"":I,te=nt(),ne=te.tableState,ie=ne===void 0?{}:ne,k=te.refresh,Xe=ie.loading;return Y.a.createElement("div",{className:"flex justify-end w-100 ".concat(L),style:B},Y.a.createElement(mt.a,{loading:Xe,className:"mr",type:"primary",onClick:()=>k()},"\u67E5\u8BE2"),Y.a.createElement(mt.a,{onClick:b},"\u91CD\u7F6E"))},ve=v=>{var b=Object(Fe.useState)({}),x=Object(Et.default)(b,2),B=x[0],I=x[1],L=nt(),te=L.tableState,ne=L.setTable,ie=L.refresh,k=L.syncMethods,Xe=te.search,se=v.schema||v.propsSchema,Ue=!0;!v.searchOnMount&&v.searchOnMount!==void 0&&(Ue=!1);var Ae=Object(Fe.useRef)(),Be=N=>{ne({search:N})},Ye=N=>{try{var K=100,ce=Object.values(N.properties).filter(q=>q.hidden?q.hidden!==!0:q["ui:hidden"]!==!0).map(q=>q.width?q.width:q["ui:width"]),xe=ce.lastIndexOf(void 0),le=ce.slice(xe+1).map(q=>Number(q.substring(0,q.length-1))),Me=le.reduce((q,de)=>{var Oe=q+de;return Oe>100?Math.min(100,de):Oe},0);return K=100-Me,K<10&&(K=100),K+"%"}catch(q){return console.error(q),"100%"}},Ne=()=>{var N=JSON.stringify(Ae.current)===JSON.stringify(se);if(se&&se.properties){if(B&&N)return;try{var K=JSON.parse(JSON.stringify(se));K.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:Ye(se)},I(K)}catch(ce){console.error(ce)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},z=N=>{if(N.length){ne({checkPassed:!1});return}ne({checkPassed:!0})},m=Object(lt.useForm)({formData:Xe,onChange:Be,onValidate:z}),D=()=>{m.setValues({})};if(Object(Fe.useEffect)(()=>{v.hidden||Ne()},[se]),Object(Fe.useEffect)(()=>{k({searchApi:v.api,syncOnSearch:v.onSearch,syncAfterSearch:v.afterSearch}),(v.hidden||Ue)&&ie()},[]),v.hidden)return null;var S=typeof v.searchBtnRender=="function"?v.searchBtnRender(ie,D):[];return Y.a.createElement("div",{className:"tr-search ".concat(v.className),style:v.style,onKeyDown:N=>{N.keyCode===13&&ie()}},Y.a.createElement(lt.default,Object(fe.default)({form:m},v,{schema:B,displayType:"row",widgets:Object(G.a)({searchBtn:()=>v.searchBtnRender?Y.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(S)&&S.map((N,K)=>Y.a.createElement("div",{key:K.toString(),style:{marginLeft:8}},N))):Y.a.createElement(Rt,{clearSearch:D,style:v.searchBtnStyle||{},className:v.searchBtnClassName||""})},v.widgets)})))},P=ve,O=e("7kJ1"),r=e("qPIi"),g=e.n(r),c=e("zmYW"),$=e("DtFj"),J=e.n($),X=e("lfLe"),_=e("Cp9S"),pe=e.n(_),Re=e("Wgwc"),be=e.n(Re);function $e(v,b){return v.indexOf(b)>-1}var qe=v=>$e(Object.prototype.toString.call(v),"Object"),Ke=v=>typeof v!="string"?!1:v.indexOf("$api.")===0||v.indexOf("$func.")===0,ze=v=>v.indexOf("$api.")===0?v.substring(5):v.indexOf("$func.")===0?v.substring(6):"",Te=(v,b)=>{if(typeof v!="object"||v===null){if(Ke(v)){var x=ze(v);return b&&b[x]&&typeof b[x]=="function"?b[x]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return v}if(Array.isArray(v)){var B=[...v];return B.map(te=>Te(te,b))}var I=Object(G.a)({},v),L=Object.keys(I);return L.forEach(te=>{I[te]=Te(I[te],b)}),I},dt=v=>be()(v).format("YYYY-MM-DD HH:mm"),We=v=>be()(v).format("YYYY-MM-DD"),Ie=v=>"\xA5".concat(v).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),vt=(v,b,x)=>{var B=v;return typeof B=="function"?B=B(b):x&&typeof x=="function"&&x(),B},gt=e("NcKm"),xt=e("lbd2"),Dt=e.n(xt),Kt=e("93XW"),Je=e("d1El"),at=e.n(Je),ft=(v,b,x)=>x.ellipsis?Y.a.createElement(at.a,{title:Mt(b,x)},v):Y.a.createElement("span",null,v),Vt=(v,b)=>b.copyable||b.ellipsis?Y.a.createElement(Dt.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:b.copyable&&v?{text:v,onCopy:()=>h.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:b.ellipsis||!1},Mt(v,b)):Mt(v,b),Mt=(v,b)=>{var x=b.enum||void 0;return x&&x[v]?x[v]:v},Bt=v=>v?Y.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},Y.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},v)):null,Ut=(v,b)=>{if(b.valueType==="code")return Bt(v);var x=Vt(v,b),B=ft(x,v,b);return B},Yt=e("WbIG"),_t=e("hw8t"),ln=e.n(_t);class Xt extends Y.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(b){return{hasError:!0,errorInfo:b.message}}componentDidCatch(b,x){console.log(b,x)}render(){return this.state.hasError?Y.a.createElement(ln.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var i=Xt,a=e("IehP"),E=e("3R4v"),M=v=>{var b=Object(Fe.useState)(!1),x=Object(Et.default)(b,2),B=x[0],I=x[1],L=v.fullScreen;return B?Y.a.createElement(at.a,{title:"\u9000\u51FA\u5168\u5C4F"},Y.a.createElement(a.a,{onClick:()=>{document.exitFullscreen(),I(!1)}})):Y.a.createElement(at.a,{title:"\u5168\u5C4F"},Y.a.createElement(E.a,{onClick:()=>{if(!document.fullscreenEnabled){h.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(I(!0),L().catch(te=>h.a.error(te.message)))}}))},R=M,he=e("G851"),ee=e("ZvzK"),yt=e.n(ee),He=e("PFYH"),it=e("Jv8k"),ot=e.n(it),jt=e("9hi+"),Le=()=>{var v=nt(),b=v.tableState,x=v.setTable;return Y.a.createElement(yt.a,{overlay:Y.a.createElement(ot.a,{selectedKeys:[b.tableSize],onClick:B=>{var I=B.key;x({tableSize:I})},style:{width:80}},Y.a.createElement(ot.a.Item,{key:"default"},"\u9ED8\u8BA4"),Y.a.createElement(ot.a.Item,{key:"middle"},"\u4E2D\u7B49"),Y.a.createElement(ot.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},Y.a.createElement(at.a,{title:"\u8868\u683C\u5BC6\u5EA6"},Y.a.createElement(jt.a,null)))},je=Le,et=e("rLCj"),pt=()=>{var v=nt(),b=v.refresh;return Y.a.createElement(at.a,{title:"\u5237\u65B0"},Y.a.createElement(et.a,{onClick:()=>b()}))},wt=pt,zt=v=>Y.a.createElement(pe.a,{size:14,style:{fontSize:16,cursor:"pointer"}},Y.a.createElement(wt,null),Y.a.createElement(je,null),Y.a.createElement(R,v)),cn=zt,dn=v=>{var b,x,B;v.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var I=nt(),L=I.tableState,te=I.setTable,ne=I.doSearch,ie=L.dataSource,k=L.pagination,Xe=L.loading,se=L.api,Ue=L.tableSize,Ae=Object(Fe.useRef)(null),Be=(de,Oe)=>{te({pagination:Object(G.a)(Object(G.a)({},k),{},{current:de,pageSize:Oe})}),!(!v.pageChangeWithRequest&&v.pageChangeWithRequest!==void 0)&&ne({current:de,pageSize:Oe})},Ye=v.headerTitle,Ne=v.toolbarRender,z=v.columns,m=v.style,D=m===void 0?{}:m,S=v.className,N=S===void 0?"":S,K=v.toolbarAction,ce=K===void 0?!1:K;z.map(de=>{var Oe=de;if(Oe.render)return Oe;switch(Oe.valueType){case"date":Oe.render=rt=>Ut(We(rt),Oe);break;case"dateTime":Oe.render=rt=>Ut(dt(rt),Oe);break;case"money":Oe.render=rt=>Ut(Ie(rt),Oe);break;case"code":Oe.render=rt=>Ut(rt,Oe);break;case"text":default:Oe.render=rt=>Ut(rt,Oe)}return Oe});var xe=Object(G.a)(Object(G.a)({},v),{},{dataSource:ie,pagination:v.pagination===!1?!1:Object(G.a)(Object(G.a)({onChange:Be,size:"small"},v.pagination),{},{pageSize:((b=v.pagination)===null||b===void 0?void 0:b.pageSize)||k.pageSize,total:((x=v.pagination)===null||x===void 0?void 0:x.total)||k.total,current:((B=v.pagination)===null||B===void 0?void 0:B.current)||k.current}),loading:Xe,size:Ue}),le=typeof Ne=="function"?Ne():[],Me=Ye||le&&le.length||Array.isArray(se),q=()=>{var de;return Promise.resolve((de=Ae.current)===null||de===void 0?void 0:de.requestFullscreen())};return Object(Fe.useEffect)(()=>{v.size&&te({tableSize:v.size})},[]),Y.a.createElement(i,null,Y.a.createElement("div",{className:"tr-table-wrapper ".concat(N),style:D,ref:Ae},Y.a.createElement("div",{className:Me?"tr-table-top":"tr-table-top-nohead"},Y.a.createElement("div",{className:"tr-table-title"},Y.a.createElement(en,{title:Ye})),Y.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},Y.a.createElement(pe.a,{align:"center"},Y.a.createElement(pe.a,{size:8,style:{marginRight:8}},Array.isArray(le)&&le.map((de,Oe)=>Y.a.createElement("div",{key:Oe.toString()},de))),ce&&Y.a.createElement(cn,{fullScreen:q})))),Y.a.createElement(J.a,xe)))},mn=dn,en=v=>{var b=v.title,x=nt(),B=x.tableState,I=x.setTable,L=x.doSearch,te=B.tab,ne=B.api,ie=te||0,k=Xe=>{var se=Xe.target.value;I({tab:se}),L({tab:se})};return typeof ne=="function"?Y.a.createElement("div",{className:"tr-single-tab"},b):ne&&Array.isArray(ne)?ne.length===1?Y.a.createElement("div",{className:"tr-single-tab"},ne[0].name):Y.a.createElement(Y.a.Fragment,null,Y.a.createElement(g.a.Group,{onChange:k,value:ie},ne.map((Xe,se)=>Y.a.createElement(g.a.Button,{key:se.toString(),value:se},Xe.name))),b&&Y.a.createElement("div",{className:"tr-extra-tab"},b)):Y.a.createElement("div",{className:"tr-single-tab"})},tn=e("yDJ3"),Qt=e.n(tn),f=e("SA0R"),A=e.n(f),W=e("k/c8"),V=e("GYr9"),Z=v=>{var b=we({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:10,total:1},tableSize:"default",checkPassed:!0}),x=Object(Et.default)(b,2),B=x[0],I=x[1],L=Object(Fe.useRef)(),te=Object(Fe.useRef)(),ne=Object(Fe.useRef)(),ie=B.pagination,k=B.search,Xe=B.tab,se=B.checkPassed,Ue=nt(),Ae=(m,D)=>{if(delete k.searchBtn,te.current&&te.current(k),!se)return;var S=m||{},N=S.current,K=S.pageSize,ce=S.tab,xe=Object(ue.a)(S,["current","pageSize","tab"]),le=N||1,Me=K||10,q=Xe;["string","number"].indexOf(typeof ce)>-1&&(q=ce);var de={current:le,pageSize:Me};if(typeof L.current=="function")rt(L.current);else if(Array.isArray(L.current)){var Oe=Qt()(L.current,"[".concat(q,"].api"));typeof Oe=="function"?rt(Oe):h.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else h.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function rt(St){I({loading:!0});var At=Object(G.a)(Object(G.a)(Object(G.a)(Object(G.a)({},k),D),xe),de);Array.isArray(St)&&(At=Object(G.a)(Object(G.a)({},At),{},{tab:ce})),Promise.resolve(St(At)).then(Ot=>{var Gt=Ot.rows,$t=Ot.total,Ct=Ot.pageSize,nn=Object(ue.a)(Ot,["rows","total","pageSize"]);I(Object(G.a)(Object(G.a)({loading:!1,dataSource:Gt},nn),{},{pagination:Object(G.a)(Object(G.a)({},de),{},{total:$t,pageSize:Ct||Me})})),ne.current(Object(G.a)({rows:Gt,total:$t,pageSize:Ct},nn))}).catch(Ot=>{I({loading:!1})})}},Be=(m,D)=>{var S=m&&m.stay||!1,N=m&&m.tab,K=D||{};Ae(Object(G.a)(Object(G.a)({},m),{},{current:S?ie.current:1,tab:N,pageSize:ie.pageSize}),K)},Ye=m=>{["string","number"].indexOf(typeof m)>-1?(I({tab:m}),Be({tab:m})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},Ne=m=>{var D=m.searchApi,S=m.syncOnSearch,N=m.syncAfterSearch;L.current=D,te.current=S,ne.current=N,I({api:D})},z={tableState:B,setTable:I,doSearch:Ae,refresh:Be,changeTab:Ye,syncMethods:Ne};return z},me=(v,b)=>{var x=Z(v);return Object(Fe.useImperativeHandle)(b,()=>x),Y.a.createElement(o.a,{locale:A.a},Y.a.createElement(ct.Provider,Object(fe.default)({},v,{value:x})))},ye=Object(Fe.forwardRef)(me)},Rn6r:function(st,T,e){"use strict";e.d(T,"a",function(){return j}),e.d(T,"b",function(){return H});var ae=e("k1fw"),re=e("PpiC"),o=e("q1tI"),fe=e.n(o),G=e("7t+U"),j=(h,ue)=>Et=>Fe=>{var Y=Fe.schema,ct=Object(re.a)(Fe,["schema"]),Pe=Object(ae.a)(Object(ae.a)({},Y),ue),nt=typeof h=="function"?h(Object(ae.a)({schema:Pe},ct)):{},ke=Object(ae.a)(Object(ae.a)({schema:Pe},ct),nt),we=H(ke);return fe.a.createElement(Et,we)},H=h=>{var ue=h.onChange,Et=h.value,Fe=h.defaultValue,Y=h.schema,ct=Object(re.a)(h,["onChange","value","defaultValue","schema"]),Pe=Object(ae.a)({},Y),nt=Pe||{},ke=nt.trigger,we=nt.valuePropName,Q={},_e="value",mt=Et===void 0?Fe:Et;we&&typeof we=="string"?(_e=we,Q[we]=mt):Q.value=mt;var lt=function(){for(var O=arguments.length,r=new Array(O),g=0;g<O;g++)r[g]=arguments[g];var c=Object(G.b)(_e,...r);ue(c)};ke&&typeof ke=="string"?Q[ke]=lt:Q.onChange=lt;var Rt={disabled:Pe.disabled||Pe["ui:disabled"],readOnly:Pe.readOnly||Pe["ui:readonly"],hidden:Pe.hidden||Pe["ui:hidden"]},ve=Object(ae.a)(Object(ae.a)(Object(ae.a)({},Q),{},{schema:Pe},Rt),ct);return ve}},RnhZ:function(st,T,e){var ae={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function re(fe){var G=o(fe);return e(G)}function o(fe){if(!e.o(ae,fe)){var G=new Error("Cannot find module '"+fe+"'");throw G.code="MODULE_NOT_FOUND",G}return ae[fe]}re.keys=function(){return Object.keys(ae)},re.resolve=o,st.exports=re,re.id="RnhZ"},Zs1V:function(st){st.exports=JSON.parse("{}")},bQjt:function(st,T,e){"use strict";e.r(T);var ae=e("0Owb"),re=e("q1tI"),o=e.n(re),fe=e("refC"),G=j=>{var H=Object(fe.useForm)();return o.a.createElement(fe.default,Object(ae.default)({form:H},j))};T.default=G},c2mQ:function(st,T,e){"use strict";e.r(T);var ae=e("q1tI"),re=e.n(ae),o=e("refC"),fe=G=>{var j=G.schema,H=Object(o.useForm)();return re.a.createElement("div",null,re.a.createElement(o.default,{form:H,schema:j}))};T.default=fe},cFvS:function(st,T,e){},fK6R:function(st,T,e){},fVyk:function(st,T,e){},gO06:function(st,T,e){},iU8R:function(st,T,e){},nYSz:function(st,T,e){"use strict";e.r(T),e.d(T,"defaultSettings",function(){return ze}),e.d(T,"defaultCommonSettings",function(){return Re}),e.d(T,"defaultGlobalSettings",function(){return Te}),e.d(T,"fromFormily",function(){return Za}),e.d(T,"toFormily",function(){return qa}),e.d(T,"fromFormRender",function(){return Ln}),e.d(T,"toFormRender",function(){return Mn});var ae=e("0Owb"),re=e("q1tI"),o=e.n(re),fe=e("kvAW"),G=e("qJlv"),j=e("k1fw"),H=e("tJVT"),h=Object(re.createContext)(()=>{}),ue=Object(re.createContext)({}),Et=()=>Object(re.useContext)(h),Fe=()=>Object(re.useContext)(ue),Y=t=>{var n=Object(re.useReducer)((u,y)=>{var C=y;typeof y=="function"&&(C=C(u)),y.action&&y.payload&&(C=y.payload,typeof C=="function"&&(C=C(u)));var F=Object(j.a)(Object(j.a)({},u),C);return F},t),s=Object(H.default)(n,2),d=s[0],l=s[1],p=(u,y)=>{l(u)};return[d,p]};function ct(t,n,s){var d=Object(re.useRef)();Object(re.useEffect)(()=>{d.current=t},[t]);var l=Object(re.useRef)();return Object(re.useEffect)(()=>{if(!s)return;function p(){d&&d.current&&d.current()}if(p(),n!==null)return l.current=setInterval(p,n),()=>clearInterval(l.current)},[n,s]),()=>clearInterval(l.current)}function Pe(t){var n=Object(re.useRef)();return Object(re.useEffect)(()=>{n.current=t},[t]),n.current}var nt=t=>{var n=Object(re.useState)(!1),s=Object(H.default)(n,2),d=s[0],l=s[1],p;try{p=localStorage.getItem(t)}catch(u){}return p||(l(!0),localStorage.setItem(t,JSON.stringify(!0))),d},ke=()=>{var t=Object(re.useState)(!1),n=Object(H.default)(t,2),s=n[0],d=n[1],l=()=>d(!s);return[s,l]},we=t=>{var n=Object(re.useState)(t),s=Object(H.default)(n,2),d=s[0],l=s[1];return[d,l]},Q=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",d=()=>{var F=localStorage.getItem(s);if(F)try{return JSON.parse(F)}catch(w){return n}return n},l=Object(re.useState)(d()),p=Object(H.default)(l,2),u=p[0],y=p[1],C=F=>{y(F),localStorage.setItem(s,JSON.stringify(F))};return[u,C]},_e=e("fwXI"),mt=e("CC+v"),lt=e.n(mt),Rt=e("MaXC"),ve=e("4IMT"),P=e.n(ve),O=e("tL+A"),r=e("QpBz"),g=e.n(r),c=e("PpiC"),$=e("cUip"),J=e("iJl9"),X=e.n(J),_=e("WWur"),pe=e.n(_),Re={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string",widget:"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},width:{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string",widget:"percentSlider"},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number",widget:"slider",max:400,props:{hideNumber:!0}},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},readOnly:{title:"\u7F6E\u7070",type:"boolean"},required:{title:"\u5FC5\u586B",type:"boolean"}},be=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean",widget:"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],widget:"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}}],$e=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime",props:{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number",widget:"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],qe=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},props:{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],Ke=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date",props:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],ze=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:be,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:$e},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:qe},{title:"\u6A21\u677F",widgets:Ke}],Te={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"number",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],props:{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number",widget:"slider",max:300,props:{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],widget:"radio"}}},dt=e("gO06"),We=e("4b23"),Ie=e.n(We),vt=e("JBAE"),gt=e.n(vt);function xt(t,n){return t.indexOf(n)>-1}var Dt=t=>xt(Object.prototype.toString.call(t),"Object");function Kt(t){try{return JSON.parse(JSON.stringify(t))}catch(n){return t}}function Je(t){return typeof t=="number"?!0:typeof t=="string"?!Number.isNaN(Number(t)):!1}function at(t){return typeof t!="string"?!1:t.match(/^([0-9])*(%|px|rem|em)$/i)}function ft(t,n){if(t===void 0&&n===void 0)return!0;if(t===void 0||n===void 0)return!1;if(t===null&&n===null)return!0;if(t===null||n===null)return!1;if(t.constructor!==n.constructor)return!1;if(t.constructor===Array){if(t.length!==n.length)return!1;for(var s=0;s<t.length;s++)if(t[s].constructor===Array||t[s].constructor===Object){if(!ft(t[s],n[s]))return!1}else if(t[s]!==n[s])return!1}else if(t.constructor===Object){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(var d=0;d<Object.keys(t).length;d++){var l=Object.keys(t)[d];if(t[l]&&typeof t[l]!="number"&&(t[l].constructor===Array||t[l].constructor===Object)){if(!ft(t[l],n[l]))return!1}else if(t[l]!==n[l])return!1}}else if(t.constructor===String||t.constructor===Number)return t===n;return!0}function Vt(t){var n;switch(t){case"date":n="YYYY-MM-DD";break;case"time":n="HH:mm:ss";break;default:n="YYYY-MM-DD HH:mm:ss"}return n}function Mt(t){return t.find((n,s,d)=>s!==d.findIndex(l=>JSON.stringify(n)===JSON.stringify(l)))}function Bt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=Yt(t),d=s.map(u=>{var y=u.name,C=u.schema,F=C.type,w=C.enum,Se=C.properties,U=C.items,Qe=F==="object"&&Se,Ve=F==="array"&&U&&!w,Ee=y&&n[u.name];if(!Ee)return u;if(Ve){var ge=Bt(U,Ee.items||{});return Object(j.a)(Object(j.a)({},u),{},{schema:Object(j.a)(Object(j.a)(Object(j.a)({},u.schema),Ee),{},{items:ge})})}if(Qe){var De=Bt(u.schema,Ee);return Object(j.a)(Object(j.a)({},u),{},{schema:De})}return Object(j.a)(Object(j.a)({},u),{},{schema:Object(j.a)(Object(j.a)({},u.schema),Ee)})}),l={};d.forEach(u=>{l[u.name]=u.schema});var p={};return Object.keys(n).forEach(u=>{typeof u=="string"&&u.substring(0,3)==="ui:"&&(p[u]=n[u])}),Ut(l)?Object(j.a)(Object(j.a)({},t),p):Object(j.a)(Object(j.a)(Object(j.a)({},t),p),{},{properties:l})}function Ut(t){return Object.keys(t).length===0}function Yt(t){if(!t)return[];var n=t.properties,s=t.items,d=t.type;if(!n&&!s)return[];var l={};return d==="object"&&(l=n),d==="array"&&(l=s),Object.keys(l).map(p=>({schema:l[p],name:p}))}function _t(){}var ln=t=>Function('"use strict";return ('+t+")")(),Xt=(t,n,s)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(s),`;
    const formData = `).concat(JSON.stringify(n),`;
    return (`).concat(t,")"))();function i(t){return typeof t=="function"?!0:typeof t=="string"&&t.substring(0,1)==="@"?t.substring(1):typeof t=="string"&&t.substring(0,2)==="{{"&&t.substring(t.length-2,t.length)==="}}"?t.substring(2,t.length-2):!1}function a(t){return Object.keys(t).some(n=>typeof t[n]=="function"?!0:typeof t[n]=="string"?i(t[n]):typeof t[n]=="object"?a(t[n]):!1)}function E(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",s=arguments.length>2?arguments[2]:void 0,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=gt()(t);l.$id||(l.$id=n);var p=[],u=l.type==="object"&&l.properties,y=l.type==="array"&&l.items&&l.items.properties;return u&&(Object.entries(l.properties).forEach(C=>{var F=Object(H.default)(C,2),w=F[0],Se=F[1],U=n+"/"+w;p.push(U),E(Se,U,n,d)}),delete l.properties),y&&(Object.entries(l.items.properties).forEach(C=>{var F=Object(H.default)(C,2),w=F[0],Se=F[1],U=n+"/"+w;p.push(U),E(Se,U,n,d)}),delete l.items.properties),l.type&&(d[n]={parent:s,schema:l,children:p}),d}var M=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",s=n.split("/");return s[s.length-1]},R=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",d=n.split("/");return(typeof s=="string"||typeof s=="number")&&(d[d.length-1]=s),d.join("/")},he=t=>({parent:t.parent,schema:Object(j.a)({},t.schema),data:t.data,children:t.children});function ee(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d={},l=t[n],p=gt()(l);return p&&(d=Object(j.a)({},p.schema),s&&d.$id&&delete d.$id,p.children.length>0&&p.children.forEach(u=>{var y=u;if(!!t[u]){try{s&&(y=t[u].schema.$id)}catch(F){console.log("catch",F)}var C=M(y);d.type==="object"&&(d.properties||(d.properties={}),d.properties[C]=ee(t,u,s)),d.type==="array"&&d.items&&d.items.type==="object"&&(d.items.properties||(d.items.properties={}),d.items.properties[C]=ee(t,u,s))}})),d}var yt=(t,n)=>{var s=E(n);return t in s&&delete s[t],ee(s)},He=(t,n)=>{var s=Object(j.a)({},t);try{var d=t[n],l=n+Ie()(6),p=s[d.parent].children,u=p.findIndex(y=>y===n);return p.splice(u+1,0,l),s[l]=gt()(s[n]),s[l].schema.$id=l,[s,l]}catch(y){return console.error(y,"catcherror"),[t,n]}},it=t=>{var n=t.id,s=t.key,d=t.schema,l=t.subSchema,p=E(d),u=R(n,s)+"$$"+Ie()(10);if(n in p){var y=p[n].parent;if(y&&y in p){var C=p[y].children;try{var F=C.findIndex(w=>w===n);C.splice(F+1,0,u)}catch(w){console.error(w.message)}}try{p[u]={parent:p[n].parent,schema:l,children:[]},p[u].schema.$id=u}catch(w){console.error(w.message)}}return[ee(p),u]},ot=t=>{var n=t.selected,s=t.name,d=t.schema,l=t.flatten,p=n||"#",u;if(p&&p[0]==="0"||p==="#"){var y=Object(j.a)({},l);try{var C=p.substring(1);u=C+"/"+s+"_"+Ie()(6),p==="#"&&(u="#/"+s+"_"+Ie()(6),C="#");var F=y[C].children;F.push(u);var w={parent:C,schema:Object(j.a)(Object(j.a)({},d),{},{$id:u}),data:void 0,children:[]};y[u]=w}catch(oe){console.error(oe,"catch")}return{newId:u,newFlatten:y}}var Se=s+"_"+Ie()(6),U=n.split("/");U.pop(),U.push(Se),u=U.join("/");var Qe=Object(j.a)({},l);try{var Ve=Qe[n],Ee=Qe[Ve.parent].children,ge=Ee.findIndex(oe=>oe===n);Ee.splice(ge+1,0,u);var De={parent:Ve.parent,schema:Object(j.a)(Object(j.a)({},d),{},{$id:u}),data:void 0,children:[]};Qe[u]=De}catch(oe){console.error(oe)}return{newId:u,newFlatten:Qe}},jt=t=>{var n=t.dragId,s=t.dragItem,d=t.dropId,l=t.position,p=t.flatten,u=d==="#"?"inside":l,y=Object(j.a)({},p);s&&(y[n]=s);var C=s||y[n],F=y[d],w=F;if(u!=="inside"){var Se=F.parent;w=y[Se]}if(d.indexOf(n)>-1)return[y,n];var U=n;try{var Qe=w.schema.$id;U=U.replace(C.parent,Qe)}catch(oe){}try{var Ve=y[C.parent],Ee=Ve.children.indexOf(n);Ee>-1&&Ve.children.splice(Ee,1)}catch(oe){console.error(oe)}try{var ge=w.children||[],De=ge.indexOf(d);switch(u){case"up":ge.splice(De,0,n);break;case"down":ge.splice(De+1,0,n);break;default:ge.push(n);break}w.children=ge}catch(oe){console.error(oe)}return C.parent=w.$id,[y,U]},Le=(t,n)=>!t||!n?{}:(Object.entries(t).forEach(s=>{var d=Object(H.default)(s,2),l=d[0],p=d[1],u=cn(n,l);t[l].data=u}),t),je=t=>(n,s)=>{},et=function t(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var d=n[s].data,l=Object.keys(n),p=l.filter(u=>{var y=s.split("/").length,C=u.split("/").length;return u.indexOf(s)>-1&&C>y});return p&&p.length>0&&(d===void 0&&["object","array"].indexOf(n[s].schema.type)>-1&&(d={}),p.forEach(u=>{var y=s.split("/").length,C=u.split("/").length;if(C===y+1){var F=t(n,u),w=M(u);d[w]=F}})),d}catch(u){return}},pt=(t,n,s)=>{try{var d=s[n];if(d.schema[t]!==void 0)return d.schema[t];if(d&&d.parent){var l=s[d.parent].schema;return l[t]!==void 0?l[t]:pt(t,d.parent,s)}}catch(p){return}};function wt(t){return Function('"use strict";return ('+t+")")()}function zt(t){if(!t)return[];var n=t.properties,s=t.items,d=t.type;if(!n&&!s)return[];var l={};return d==="object"&&(l=n),d==="array"&&(l=s.properties),Object.keys(l).map(p=>({schema:l[p],name:p}))}function cn(t,n){n=dn(n,t);for(var s=0,d=n.length;t!=null&&s<d;){var l=mn(n[s++]);t=l?t[l]:t}return s&&s==d?t:void 0}function dn(t,n){return Array.isArray(t)?t:Qt(t,n)?[t]:t.match(/([^\.\/\[\]#"']+)/g)}function mn(t){if(typeof t=="string")return t.replace(/^#\/?/,"");var n="".concat(t);return n=="0"&&1/t==-INFINITY?"-0":n}var en=/#\/.+\//,tn=/^\w*$/;function Qt(t,n){if(Array.isArray(t))return!1;var s=typeof t;return s==="number"||s==="boolean"||t==null?!0:tn.test(t)||!en.test(t)||n!=null&&t in Object(n)}var f=t=>{if(t&&t.propsSchema){var n=t.propsSchema,s=Object(c.a)(t,["propsSchema"]);return Object(j.a)({schema:n},s)}return t},A=t=>{if(t&&t.schema){var n=t.schema,s=Object(c.a)(t,["schema"]);return Object(j.a)({propsSchema:n},s)}return t},W=e("CLjb"),V=e("fK6R"),Z=t=>{var n=t.text,s=t.name,d=t.schema,l=t.icon,p=Object(W.a)({item:{type:"box",dragItem:{parent:"#",schema:d,children:[]},$id:"#/".concat(s,"_").concat(Ie()(6))},end:(Ee,ge)=>{var De=ge.getDropResult()},collect:Ee=>({isDragging:Ee.isDragging()})}),u=Object(H.default)(p,2),y=u[0].isDragging,C=u[1],F=Et(),w=Fe(),Se=w.selected,U=w.flatten,Qe=w.onFlattenChange,Ve=()=>{var Ee=ot({selected:Se,name:s,schema:d,flatten:U}),ge=Ee.newId,De=Ee.newFlatten;Qe(De),F({selected:ge})};return o.a.createElement("div",{ref:C},o.a.createElement(ye,{text:n,icon:l,onClick:Ve}))},me=Z,ye=t=>{var n=t.onClick,s=t.text,d=t.icon;return o.a.createElement("li",{className:"left-item",onClick:n},s)},v=t=>{var n=Fe(),s=n.userProps,d=s===void 0?{}:s,l=d.settings,p=Array.isArray(l)?l:ze;return o.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(p)?p.map((u,y)=>u&&u.show===!1?null:o.a.createElement("div",{key:y},o.a.createElement("p",{className:"f6 b"},u.title),o.a.createElement("ul",{className:"pl0"},Array.isArray(u.widgets)?u.widgets.map((C,F)=>o.a.createElement(me,Object(ae.default)({key:F.toString()},C,t))):o.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):o.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},b=v,x=e("Z8Mf"),B=e("j7zX"),I=e.n(B),L=e("UESt"),te=e("97ez"),ne=e("9MQZ"),ie=e.n(ne),k=e("refC"),Xe=e("D7jV");function se(t){var n=t.onChange,s=t.value,d=t.disabled,l=t.readonly,p=t.options,u=y=>{try{var C=R(s,y.target.value);n(C)}catch(F){}};return o.a.createElement(X.a,Object(ae.default)({disabled:d||l},p,{onChange:u,value:M(s)}))}var Ue=e("tCGa"),Ae=e("DH6M"),Be=e.n(Ae),Ye=e("b+Mx"),Ne=e("5Dct"),z=e.n(Ne),m=t=>{var n=t.invalid?{borderColor:"#f5222d"}:{},s=t.schema,d=s.max,l=s.min,p=s.step,u={};(d||d===0)&&(u={max:d}),(l||l===0)&&(u=Object(j.a)(Object(j.a)({},u),{},{min:l})),p&&(u=Object(j.a)(Object(j.a)({},u),{},{step:p}));var y=!1;t.options&&t.options.hideNumber&&(y=!0);var C=U=>typeof U=="string"&&U.endsWith("%"),F=100;if(C(t.value))try{F=Number(t.value.split("%")[0]),Number.isNaN(F)&&(F=100)}catch(U){}var w=U=>{var Qe=U+"%";t.onChange(Qe)},Se=t.readonly?o.a.createElement("span",{style:{width:"80px"}},t.value===""?"-":t.value+"%"):o.a.createElement(z.a,Object(ae.default)({},t.options,u,{style:Object(j.a)({width:"80px"},n),value:F,disabled:t.disabled,onChange:w,formatter:U=>"".concat(U,"%"),parser:U=>U.replace("%","")}));return o.a.createElement("div",{className:"fr-slider"},o.a.createElement(Be.a,Object(ae.default)({style:{flexGrow:1,marginRight:y?0:12}},u,{onChange:w,max:100,tipFormatter:U=>U+"%",value:F||100,disabled:t.disabled||t.readonly})),y?null:Se)},D=m,S={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes","*?readonly":"text"};function N(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S,s=t.type,d=t.format,l=t.enum,p=t.readonly;if(t.widget)return t.widget;var u=[];p&&(u.push("".concat(s,"?readonly")),u.push("*?readonly")),l&&(u.push("".concat(s,"?enum")),u.push("*?enum")),d&&u.push("".concat(s,":").concat(d)),u.push(s);var y="";return u.some(C=>(y=n[C],!!y)),y}function K(){var t=Object(k.useForm)(),n=Fe(),s=n.selected,d=n.flatten,l=n.onItemChange,p=n.userProps,u=p===void 0?{}:p,y=u.settings,C=u.commonSettings,F=Object(re.useState)({}),w=Object(H.default)(F,2),Se=w[0],U=w[1],Qe=Object(j.a)(Object(j.a)({},Xe.a),{},{idInput:se,percentSlider:D}),Ve=(ge,De)=>{var oe=[];return ge.forEach(Ge=>{var tt=Ge.widgets,Ft=tt.filter(ht=>ht.widget).map(ht=>Object(j.a)(Object(j.a)({},ht),{},{setting:Object(j.a)(Object(j.a)({},De),ht.setting)}));oe=[...oe,...Ft]}),oe},Ee=(ge,De)=>{var oe=Object(j.a)({},t.getValues());if(ie()(oe,ge,De),t.setValues(oe),s)try{var Ge=d[s];Ge&&Ge.schema&&l(s,Object(j.a)(Object(j.a)({},Ge),{},{schema:oe}))}catch(tt){console.log(tt,"catch")}};return Object(re.useEffect)(()=>{var ge=Array.isArray(y)?[...y,{widgets:[...be,...$e,...qe]}]:ze,De=Dt(C)?C:Re,oe=Ve(ge,De),Ge,tt;try{if(Ge=d[s],Ge&&(tt=N(Ge.schema)),tt){var Ft=oe.find(Wt=>Wt.widget===tt)||{},ht=Ft.setting;U({type:"object",properties:Object(j.a)({},ht)}),t.setValues(Ge.schema)}}catch(Wt){console.log(Wt)}},[s]),o.a.createElement("div",{style:{paddingRight:24}},o.a.createElement(k.default,{form:t,schema:Se,widgets:Qe,onItemChange:Ee,frProps:{displayType:"column",showDescIcon:!1}}))}function ce(){var t=Object(k.useForm)(),n=Fe(),s=n.widgets,d=n.frProps,l=n.userProps,p=Et(),u=l&&l.globalSettings?l.globalSettings:Te,y=(C,F)=>{var w=Object(j.a)({},t.getValues());ie()(w,C,F),t.setValues(w),p({frProps:w})};return Object(re.useEffect)(()=>{t.setValues(d)},[d]),o.a.createElement("div",{style:{paddingRight:24}},o.a.createElement(k.default,{form:t,schema:u,onItemChange:y,widgets:s}))}var xe=I.a.TabPane;function le(){var t=Y({showRight:!0,showItemSettings:!1}),n=Object(H.default)(t,2),s=n[0],d=n[1],l=Fe(),p=l.selected,u=s.showRight,y=s.showItemSettings,C=()=>d({showRight:!u}),F=()=>o.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:C},o.a.createElement(L.a,{className:"f5"})),w=()=>o.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},o.a.createElement(F,null));return Object(re.useEffect)(()=>{p&&p[0]==="0"||p==="#"||!p?d({showItemSettings:!1}):d({showItemSettings:!0})},[p]),u?o.a.createElement("div",{className:"right-layout relative pl2"},o.a.createElement(F,null),o.a.createElement(I.a,{defaultActiveKey:"1",onChange:()=>{}},y&&o.a.createElement(xe,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},o.a.createElement(K,null)),o.a.createElement(xe,{tab:"\u8868\u5355\u914D\u7F6E",key:y?"2":"1"},o.a.createElement(ce,null)))):o.a.createElement(w,null)}var Me=t=>{var n=t.children,s=n===void 0?[]:n,d=t.preview;return o.a.createElement(o.a.Fragment,null,s.map((l,p)=>{var u={id:l,preview:d};return o.a.createElement(nn,Object(ae.default)({key:p.toString()},u))}))},q=Me,de=t=>{var n=t.$id,s=t.item,d=t.labelClass,l=t.contentClass,p=t.isComplex,u=t.children,y=s.schema,C=s.data,F=Fe(),w=F.onItemChange,Se=F.flatten,U=F.widgets,Qe=F.mapping,Ve=F.frProps,Ee=Ve===void 0?{}:Ve,ge=Ee.labelWidth,De=Ee.displayType,oe=Ee.showDescIcon,Ge=Ee.showValidate,tt=y.type,Ft=y.title,ht=y.description,Wt=y.required,Nt=N(y,Qe),an=y.widget;an&&U[an]&&(Nt=an);var kt=U[Nt];if(!kt){var un=Object(j.a)({},y);delete un.widget,Nt=N(un,Qe),kt=U[Nt]||"input"}var qt=pt("labelWidth",n,Se)||ge,vn=Je(qt)?Number(qt):at(qt)?qt:110,rn={width:vn};Nt==="checkbox"?rn={flexGrow:1}:(p||De==="column")&&(rn={flexGrow:1});var hn=sn=>{var Tt=Object(j.a)({},s);Tt.data=sn,w(n,Tt,"data")},pn={};Nt==="checkbox"&&De==="row"&&(pn.marginLeft=qt);var gn={disabled:y.disabled,readonly:y.readOnly,hidden:y.hidden,options:y.props,labelWidth:y.labelWidth,width:y.width};return o.a.createElement(o.a.Fragment,null,y.title?o.a.createElement("div",{className:d,style:rn},o.a.createElement("label",{className:"fr-label-title ".concat(Nt==="checkbox"||De==="column"?"no-colon":""),title:Ft},Wt&&o.a.createElement("span",{className:"fr-label-required"}," *"),o.a.createElement("span",{className:"".concat(p?"b":""," ").concat(De==="column"?"flex-none":"")},Ft),ht&&(oe?o.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":ht},o.a.createElement("i",{className:"fr-tooltip-icon"}),o.a.createElement("div",{className:"fr-tooltip-container"},o.a.createElement("i",{className:"fr-tooltip-triangle"}),ht)):o.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",ht,"\xA0)")),De!=="row"&&Ge&&o.a.createElement("span",{className:"fr-validate"},"validation"))):null,o.a.createElement("div",{className:l,style:pn},o.a.createElement(kt,Object(ae.default)({value:C,onChange:hn,schema:y},gn,{children:u}))))},Oe=de,rt=e("iU8R"),St=e("dhM6"),At=e("/MfK"),Ot=e("lfch"),Gt=e("aMZS");function $t(t){var n=t.$id,s=t.item,d=t.inside,l=d===void 0?!1:d,p=t.children,u=t.style,y=Object(re.useState)(),C=Object(H.default)(y,2),F=C[0],w=C[1],Se=Fe(),U=Se.flatten,Qe=Se.onItemChange,Ve=Se.onFlattenChange,Ee=Se.selected,ge=Se.hovering,De=Et(),oe=s.schema,Ge=oe.type,tt=Object(re.useRef)(null),Ft=Object(W.a)({item:{type:"box",$id:l?0+n:n},end:(It,Pt)=>{var Ht=Pt.getDropResult()},collect:It=>({isDragging:It.isDragging()})}),ht=Object(H.default)(Ft,3),Wt=ht[0].isDragging,Nt=ht[1],an=ht[2],kt=Object(Gt.a)({accept:"box",drop:(It,Pt)=>{var Ht=Pt.didDrop();if(!Ht){console.log(It.dragItem,"tems");var Ze=jt({dragId:It.$id,dragItem:It.dragItem,dropId:n,position:F,flatten:U}),bt=Object(H.default)(Ze,2),Jt=bt[0],on=bt[1];Ve(Jt),De({selected:on})}},hover:(It,Pt)=>{var Ht=Pt.isOver({shallow:!0});if(Ht){var Ze=tt.current&&tt.current.getBoundingClientRect(),bt=(Ze.bottom-Ze.top)/2,Jt=Pt.getSourceClientOffset(),on=Jt.y-Ze.top;l?w("inside"):(on<=bt&&w("up"),on>bt&&w("down"))}},collect:It=>({isOver:It.isOver({shallow:!0}),canDrop:It.canDrop()})}),un=Object(H.default)(kt,2),qt=un[0],vn=qt.canDrop,rn=qt.isOver,hn=un[1],pn=vn&&rn;an(hn(tt));var gn=It=>{It.stopPropagation();var Pt=l?"0"+n:n;De({selected:Pt})},sn=It=>{It.stopPropagation();var Pt=Object(j.a)({},U),Ht="#";try{var Ze=Pt[n].parent,bt=Pt[Ze].children,Jt=bt.indexOf(n);Jt>0?Ht=bt[Jt-1]:Ht=bt[1]||Ze}catch(on){console.log("catch",on)}delete Pt[n],Ve(Pt),De({selected:Ht})},Tt=It=>{It.stopPropagation();var Pt=He(U,n),Ht=Object(H.default)(Pt,2),Ze=Ht[0],bt=Ht[1];Ve(Ze),De({selected:bt})},fn=()=>{},On=()=>{},yn=Ee===n&&!l;Ee&&Ee[0]==="0"&&(yn=Ee.substring(1)===n&&l);var Nn=l?"0"+n:n,Lt={backgroundColor:ge===Nn?"#ecf5ff":"#fff",opacity:Wt?0:1};if(l?Lt=Object(j.a)(Object(j.a)({},Lt),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):n==="#"?Lt=Object(j.a)(Object(j.a)({},Lt),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):Ge==="object"&&(Lt=Object(j.a)(Object(j.a)({},Lt),{},{paddingTop:12})),pn&&(l?Lt=Object(j.a)(Object(j.a)({},Lt),{},{boxShadow:"0 -3px 0 red"}):F==="up"?Lt=Object(j.a)(Object(j.a)({},Lt),{},{boxShadow:"0 -3px 0 red"}):F==="down"&&(Lt=Object(j.a)(Object(j.a)({},Lt),{},{boxShadow:"0 3px 0 red"}))),yn&&(Lt=Object(j.a)(Object(j.a)({},Lt),{},{outline:"2px solid #409eff",borderColor:"#fff"})),u&&typeof u=="object"&&(Lt=Object(j.a)(Object(j.a)({},Lt),u)),n==="#"&&l)return p;var bn=oe&&oe.$id&&M(oe.$id);return bn==="#"&&(bn=""),o.a.createElement("div",{ref:tt,style:Lt,className:"field-wrapper relative w-100",onClick:gn,onMouseEnter:fn,onMouseLeave:On},!l&&yn&&n!=="#"&&o.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:Nt},o.a.createElement(St.a,{style:{color:"#fff"}})),!l&&o.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},bn),p,yn&&!l&&n!=="#"&&o.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement("div",{className:"pointer",onClick:sn},o.a.createElement(At.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),o.a.createElement("div",{className:"pointer",onClick:Tt},o.a.createElement(Ot.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var Ct=t=>{var n=t.id,s=n===void 0?"#":n,d=t.preview,l=d===void 0?!1:d,p=Fe(),u=p.flatten,y=p.frProps,C=y===void 0?{}:y,F=C.displayType,w=C.column,Se=u[s];if(!Se)return null;var U=Se.schema,Qe=U.type==="object",Ve=U.type==="array"&&U.enum===void 0,Ee=Qe||Ve,ge=U.width,De="fr-field w-100 ".concat(Ee?"fr-field-complex":""),oe="fr-label mb2",Ge="fr-content",tt={};switch(!Ee&&ge?tt={width:ge,paddingRight:"12px"}:!Ee&&w>1&&(tt={width:"calc(100% /".concat(w,")"),paddingRight:"12px"}),U.type){case"object":U.title&&(De+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",oe+=" fr-label-object bg-white absolute ph2 top-upper left-1"),De+=" fr-field-object",U.title&&(Ge+=" ml3");break;case"array":U.title&&!U.enum&&(oe+=" mt2 mb3");break;case"boolean":U.widget!=="switch"&&(U.title&&(oe+=" ml2",oe=oe.replace("mb2","mb0")),Ge+=" flex items-center",De+=" flex items-center flex-row-reverse justify-end");break;default:F==="row"&&(oe=oe.replace("mb2","mb0"))}var Ft=U.type==="boolean"&&U.widget!=="switch";F==="row"&&!Ee&&!Ft&&(De+=" flex items-center",oe+=" flex-shrink-0 fr-label-row",oe=oe.replace("mb2","mb0"),Ge+=" flex-grow-1 relative"),F==="row"&&Ft&&(Ge+=" flex justify-end pr2");var ht={$id:s,item:Se,labelClass:oe,contentClass:Ge,isComplex:Ee},Wt={children:Se.children,preview:l},Nt=Se.children&&Se.children.length>0?o.a.createElement("ul",{className:"flex flex-wrap pl0"},o.a.createElement(q,Wt)):null;if(l)return o.a.createElement("div",{style:tt,className:De},o.a.createElement(Oe,ht,(Qe||Ve)&&Nt));var an=Object.keys(u).length<2;return an?o.a.createElement($t,{style:tt,$id:s,item:Se},o.a.createElement("div",{className:"".concat(De," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):o.a.createElement($t,{style:tt,$id:s,item:Se},o.a.createElement("div",{className:De},o.a.createElement(Oe,ht,(Qe||Ve)&&o.a.createElement($t,{$id:s,item:Se,inside:!0},Nt||o.a.createElement("div",{className:"h2"})))))},nn=Ct,Ce=X.a.TextArea;function ut(t,n){var s=t.schema,d=t.formData,l=t.onChange,p=t.onSchemaChange,u=t.setGlobal,y=t.userProps,C=y===void 0?{}:y,F=t.frProps,w=F===void 0?{}:F,Se=Object(c.a)(t,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),U=Y({showModal:!1,showModal2:!1,schemaForImport:""}),Qe=Object(H.default)(U,2),Ve=Qe[0],Ee=Qe[1],ge=Se.simple,De=ge===void 0?!0:ge,oe=Se.preview,Ge=C.transformFrom,tt=C.transformTo,Ft=C.isNewVersion,ht=C.extraButtons,Wt=ht===void 0?[]:ht,Nt={};s&&(Nt=Bt(s.schema,s.uiSchema));var an=E(Nt),kt=Le(an,d),un=function(bt){var Jt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",on=ee(bt),En=et(bt);Jt==="schema"&&p&&p(on),l(En)},qt=(Ze,bt,Jt)=>{kt[Ze]=bt,un(kt,Jt)},vn=()=>Ee({showModal:!Ve.showModal}),rn=()=>Ee({showModal2:!Ve.showModal2}),hn=()=>{u({schema:{schema:{type:"object"}},formData:{},selected:void 0})},pn=Ze=>{Ee({schemaForImport:Ze.target.value})},gn=()=>{try{var Ze=Ge(wt(Ve.schemaForImport)),bt=!0;Ze&&Ze.propsSchema&&(bt=!1);var Jt=f(Ze),on=Jt.schema,En=Object(c.a)(Jt,["schema"]);u(Sn=>({schema:{schema:on},formData:{},selected:void 0,isNewVersion:bt,frProps:Object(j.a)(Object(j.a)({},Sn.frProps),En)}))}catch(Sn){g.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}rn()},sn={},Tt="";try{var fn=ee(kt,"#",!0);w&&w.column&&(fn.column=w.column),w&&w.displayType&&(fn.displayType=w.displayType),w&&w.showDescIcon&&(fn.showDescIcon=w.showDescIcon),sn=tt(Object(j.a)({schema:fn},w)),Ft||(sn=A(sn)),Tt=JSON.stringify(sn,null,2)}catch(Ze){}var On=()=>{pe()(Tt),g.a.info("\u590D\u5236\u6210\u529F"),vn()},yn=()=>sn,Nn=Ze=>{try{var bt=Ze.schema,Jt=Ze.propsSchema,on=Ze.uiSchema,En=Object(c.a)(Ze,["schema","propsSchema","uiSchema"]),Sn={schema:bt||Jt},Vn=!0;!bt&&Jt&&(Vn=!1),u(Cn=>Object(j.a)(Object(j.a)({},Cn),{},{schema:Sn,formData:{},selected:void 0,isNewVersion:Vn,frProps:Object(j.a)(Object(j.a)({},Cn.frProps),En)}))}catch(Cn){console.error(Cn)}},Lt=()=>{pe()(Tt)};Object(re.useImperativeHandle)(n,()=>({getValue:yn,setValue:Nn,copyValue:Lt}));var bn=Object(j.a)({flatten:kt,onFlattenChange:un,onItemChange:qt,userProps:C,frProps:w},Se),It=Array.isArray(Wt)?Wt:[],Pt=It.filter(Ze=>Ze===!0||Ze===!1),Ht=It.filter(Ze=>Dt(Ze)&&Ze.text);return De?o.a.createElement(h.Provider,{value:u},o.a.createElement(ue.Provider,{value:bn},o.a.createElement(nn,{preview:!0}))):o.a.createElement(h.Provider,{value:u},o.a.createElement(ue.Provider,{value:bn},o.a.createElement("div",{className:"fr-generator-container"},o.a.createElement(b,null),o.a.createElement("div",{className:"mid-layout pr2"},o.a.createElement("div",{className:"mv2 mh1"},Pt[0]!==!1&&o.a.createElement(P.a,{className:"mr2 mb1",onClick:()=>{u({preview:!oe,selected:"#"})}},oe?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),Pt[1]!==!1&&o.a.createElement(P.a,{className:"mr2",onClick:hn},"\u6E05\u7A7A"),Pt[2]!==!1&&o.a.createElement(P.a,{className:"mr2",onClick:rn},"\u5BFC\u5165"),Pt[3]!==!1&&o.a.createElement(P.a,{type:"primary",className:"mr2",onClick:vn},"\u5BFC\u51FAschema"),Ht.map((Ze,bt)=>o.a.createElement(P.a,Object(ae.default)({key:bt.toString(),className:"mr2"},Ze),Ze.text||Ze.children))),o.a.createElement("div",{className:"dnd-container"},o.a.createElement("div",{style:{height:oe?33:0}}),o.a.createElement(nn,{preview:oe}))),o.a.createElement(le,{globalProps:w}),o.a.createElement(lt.a,{visible:Ve.showModal,onOk:On,onCancel:vn,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},o.a.createElement("div",{className:"mt3"},o.a.createElement(Ce,{style:{fontSize:12},value:Tt,autoSize:{minRows:10,maxRows:30}}))),o.a.createElement(lt.a,{visible:Ve.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:gn,onCancel:rn},o.a.createElement("div",{className:"mt3"},o.a.createElement(Ce,{style:{fontSize:12},value:Ve.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:pn,autoSize:{minRows:10,maxRows:30}}))))))}var Zt=Object(re.forwardRef)(ut);Zt.defaultProps={labelWidth:120};var Dn=Zt,Tn=e("pJsf"),Rn=e("g4D/"),An=e.n(Rn);function Kn(t){var n=t.value,s=t.onChange,d=t.disabled,l=t.readonly,p=u=>{s(u.target.checked)};return o.a.createElement(An.a,{disabled:d||l,onChange:p,checked:n})}function zn(t){var n=t.schema||{},s=n.enum,d=n.enumNames,l=t.value&&Array.isArray(t.value)?t.value:[];return o.a.createElement(An.a.Group,{disabled:t.disabled||t.readonly,value:l,onChange:t.onChange},(s||[!0,!1]).map((p,u)=>o.a.createElement(An.a,{value:p,key:u},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:d?d[u]:p}}))))}var Wn=e("ypy7"),Jn=e.n(Wn),er=e("rNQX");function Un(t){var n=t.schema.format,s=l=>{t.disabled||t.readonly||t.onChange(l.color)},d=l=>{t.onChange(l.target.value)};return o.a.createElement("div",{className:"fr-color-picker"},o.a.createElement(Jn.a,{type:n,animation:"slide-up",color:t.value?t.value:"#ffffff",onChange:s}),t.readonly?o.a.createElement("span",null,t.value||"#ffffff"):o.a.createElement(X.a,{placeholder:"#ffffff",disabled:t.disabled,value:t.value,onChange:d}))}var tr=e("GBD3"),Yn=e("wXtC"),In=e.n(Yn),nr=e("mxgt"),Gn=e("4ZwL"),Hn=e.n(Gn),Qn=e("wd/R"),Fn=e.n(Qn),Xn=(t,n,s)=>{var d=t.invalid?{borderColor:"#f5222d"}:{},l=t.schema.format,p=l===void 0?"dateTime":l,u=Vt(p),y={};t.value?y.value=Fn()(t.value,u):y.value="";var C=t.description?{placeholder:t.description}:{},F=Object(j.a)(Object(j.a)(Object(j.a)(Object(j.a)({},C),t.options),y),{},{style:Object(j.a)({width:"100%"},d),disabled:t.disabled||t.readonly,onChange:n});return p==="dateTime"&&(F.showTime=!0),o.a.createElement(s,F)};function Zn(t){var n=t.schema.format,s=n===void 0?"dateTime":n,d=(p,u)=>t.onChange(u),l=s==="time"?Hn.a:In.a;return Xn(t,d,l)}var kn=(t,n,s)=>{var d=t.schema.format,l=d===void 0?"dateTime":d,p=Vt(l),u={};t.value&&Array.isArray(t.value)&&t.value[0]&&t.value[1]&&(u={defaultValue:[Fn()(t.value[0],p),Fn()(t.value[1],p)]});var y=Object(j.a)(Object(j.a)(Object(j.a)({},t.options),u),{},{style:{width:"100%"},showTime:l==="dateTime",disabled:t.disabled||t.readonly,onChange:n});return o.a.createElement(s,y)},qn=In.a.RangePicker;function _n(t){var n=(s,d)=>t.onChange(d);return kn(t,n,qn)}var ea=e("RBnf"),jn=e("YJCA"),ta=t=>{var n=t.fold,s=n===void 0?!1:n,d=t.width,l=t.height,p=t.fill,u=t.style,y=u===void 0?{}:u,C=Object(c.a)(t,["fold","width","height","fill","style"]);return o.a.createElement("div",Object(ae.default)({style:y,className:s?"fold-icon":"fold-icon fold-icon-active"},C),o.a.createElement("svg",{viewBox:"0 0 1024 1024",width:d||18,height:l||18},o.a.createElement("path",{d:"M942.048 306.176c-12.288-12.288-31.328-13.024-43.008-2.016L529.056 674.112c-15.072 15.872-19.008 15.808-34.816 0L124.288 304.16c-11.68-11.04-30.72-10.272-43.008 2.016-12.512 12.512-13.216 32.032-1.6 43.68L490.624 760.8c5.056 5.056 11.648 7.328 18.464 7.744h5.152c6.816-.448 13.408-2.72 18.464-7.744l410.944-410.944c11.584-11.648 10.88-31.2-1.6-43.68z",fill:p||"#3c3c3c"})))},na=ta,Pn=(t,n,s)=>{if(Array.isArray(n)&&Array.isArray(s)){if(typeof t=="string"||typeof t=="number"){var d=n.indexOf(t);return d>-1?s[d]:t}else if(Array.isArray(t)){var l=t.map(p=>Pn(t,n,s));return String(l)}return t}return t},aa=t=>{var n=t.schema,s=n===void 0?{}:n,d=t.value,l=d===void 0?[]:d,p=t.index,u=Bn({schema:s,value:l,index:p}).filter(y=>y.title).slice(0,3);return o.a.createElement("ul",{className:"flex overflow-hidden",style:{paddingRight:45}},u.map((y,C)=>y.title?o.a.createElement("li",{className:"flex-auto mr2 overflow-hidden",key:C},o.a.createElement("span",{className:"fw5"},y.title,": "),o.a.createElement("span",null,y.text)):null))},ra=aa,Bn=t=>{var n=t.schema,s=n===void 0?{}:n,d=t.value,l=d===void 0?[]:d,p=t.index,u=s.items,y=u===void 0?{}:u;if(y.type!=="object")return[];var C=y&&y.properties||{};C=Object.values(C);var F=l&&l.length&&l[p]||{},w=Object.values(F),Se=C.map((U,Qe)=>{var Ve=U&&U.hidden;if(!Ve){var Ee=U.title,ge=w[Qe];return ge===null&&ge===void 0?ge="":typeof ge=="boolean"?ge=ge?"\u662F":"\u5426":typeof ge!="string"&&typeof ge!="number"&&ge?ge="{\u590D\u6742\u7ED3\u6784}":U.enum&&U.enumNames&&(ge=Pn(ge,U.enum,U.enumNames)),{title:Ee,text:ge}}});return Se.filter(U=>!!U)},sa=Object(jn.c)(()=>o.a.createElement("span",{className:"fr-move-icon"},":::"));class ia extends o.a.Component{constructor(){super(...arguments);this.toggleFold=()=>{this.props.toggleFoldItem(this.props.name)}}componentDidMount(){var n=this.props,s=n.p,d=s===void 0?{}:s,l=n.name,p=n.fold,u=Bn({schema:d.schema,value:d.value,index:l}),y=u&&u[0]&&u[0].text;y&&p!==0&&this.props.toggleFoldItem(l)}render(){var n=this.props,s=n.item,d=n.p,l=d===void 0?{}:d,p=n.name,u=n.fold,y=Object(j.a)(Object(j.a)({},l),{},{index:p}),C=l.options,F=C===void 0?{}:C,w=l.readonly,Se=l.formData,U=l.value,Qe=F.foldable,Ve=F.hideDelete,Ee=F.itemButtons,ge=i(Ve);ge&&(typeof ge=="string"?Ve=Xt(ge,Se,U):typeof ge=="function"&&(Ve=ge(Se,U)));var De=l.schema.items&&l.schema.items.type=="object",oe="fr-set ba b--black-10 hover-b--black-20 relative flex flex-column";return Qe&&u?oe+=" pv12":l.displayType==="row"&&(oe+=" pt44"),o.a.createElement("li",{className:oe},Qe&&u&&De?o.a.createElement(ra,y):s,Qe&&o.a.createElement(na,{fold:u,onClick:this.toggleFold,style:{position:"absolute",top:12,right:32}}),!w&&o.a.createElement(sa,null),!(Qe&&u||Ve||w)&&o.a.createElement("div",{className:"self-end flex"},o.a.createElement(xn,{type:"dashed",icon:"delete",onClick:()=>{var Ge=[...l.value];Ge.splice(p,1),l.onChange(Ge)}},"\u5220\u9664"),Ee&&Ee.length>0&&Ee.map((Ge,tt)=>o.a.createElement(xn,{key:tt.toString(),className:"ml2",type:"dashed",icon:Ge.icon,onClick:()=>{var Ft=[...l.value];if(typeof window[Ge.callback]=="function"){var ht=window[Ge.callback](Ft,p);l.onChange(ht)}}},Ge.text||""))))}}var oa=Object(jn.b)(ia);class la extends o.a.Component{constructor(){super(...arguments);this.handleAddClick=()=>{var n=this.props,s=n.p,d=n.addUnfoldItem,l=[...s.value];l.push(s.newItem),s.onChange(l),d()}}render(){var n=this.props,s=n.p,d=n.foldList,l=d===void 0?[]:d,p=n.toggleFoldItem,u=s||{},y=u.options,C=y===void 0?{}:y,F=u.extraButtons,w=F===void 0?{}:F,Se=C.buttons||w||[],U=s.readonly,Qe=s.schema,Ve=Qe===void 0?{}:Qe,Ee=Ve.maxItems,ge=s.value||[],De=Ee?Ee>ge.length:!0;return o.a.createElement("ul",{className:"pl0 ma0"},ge.map((oe,Ge)=>o.a.createElement(oa,{key:"item-".concat(Ge),index:Ge,name:Ge,p:s,fold:l[Ge],toggleFoldItem:p,item:s.children})),!U&&o.a.createElement("div",{className:"tr"},De&&o.a.createElement(xn,{icon:"add",onClick:this.handleAddClick},"\u65B0\u589E"),Se&&Se.length>0&&Se.map((oe,Ge)=>o.a.createElement(xn,{className:"ml2",icon:oe.icon,key:Ge.toString(),onClick:()=>{if(oe.callback==="clearAll"){s.onChange([]);return}if(oe.callback==="copyLast"){var tt=[...s.value],Ft=tt.length-1;tt.push(Ft>-1?tt[Ft]:s.newItem),s.onChange(tt);return}if(typeof window[oe.callback]=="function"){var ht=[...s.value],Wt=Nt=>s.onChange(Nt);window[oe.callback](ht,Wt,s.newItem)}}},oe.text))))}}var da=Object(jn.a)(la);class wn extends o.a.Component{constructor(n){super(n);this.addUnfoldItem=()=>this.setState({foldList:[...this.state.foldList,0]}),this.toggleFoldItem=d=>{var l=this.state.foldList,p=l===void 0?[]:l;p[d]=!p[d],this.setState({foldList:p})},this.handleSort=d=>{var l=d.oldIndex,p=d.newIndex,u=this.props,y=u.onChange,C=u.value;y(Object(jn.d)(C,l,p)),this.setState({foldList:Object(jn.d)(this.state.foldList,l,p)})};var s=this.props.value.length||0;this.state={foldList:new Array(s).fill(!1)||[]}}render(){var n=this.state.foldList;return o.a.createElement(da,{p:this.props,foldList:n,toggleFoldItem:this.toggleFoldItem,addUnfoldItem:this.addUnfoldItem,distance:6,useDragHandle:!0,helperClass:"fr-sort-help-class",shouldCancelStart:s=>s.toElement&&s.toElement.className==="fr-tooltip-container",onSortEnd:this.handleSort})}}wn.defaultProps={value:[]};function xn(t){var n=t.icon,s=t.children,d=Object(c.a)(t,["icon","children"]),l;switch(n){case"add":l="PlusCircleOutlined";break;case"delete":l="DeleteOutlined";break;default:l=n;break}var p=ea[l];return p?o.a.createElement(P.a,Object(ae.default)({},d,{icon:o.a.createElement(p,null)}),s):o.a.createElement(P.a,d,s)}var ua=wn,ca=e("w5pM");function ma(t){return o.a.createElement("div",{className:"flex flex-column"},o.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},o.a.createElement("span",{className:"fr-move-icon f4"},":::"),t.children,o.a.createElement(P.a,{size:"small",className:"self-end",type:"dashed",icon:o.a.createElement(At.a,null)},"\u5220\u9664")),o.a.createElement(P.a,{size:"small",className:"self-end",icon:o.a.createElement(ca.a,null)},"\u6DFB\u52A0"))}function va(t){var n=t.children;return o.a.createElement("div",{className:"w-100"},n)}var ar=e("ek7I"),fa=e("FAat"),$n=e.n(fa),pa=t=>n=>{var s=t.Option,d=F=>n.onChange(F),l=n.invalid?{borderColor:"#f5222d"}:{},p=n.schema||{},u=p.enum,y=p.enumNames,C=n.value&&Array.isArray(n.value)?n.value:[];return o.a.createElement(t,Object(ae.default)({},n.options,{style:Object(j.a)({width:"100%"},l),mode:"multiple",disabled:n.disabled||n.readonly,value:C,onChange:d}),(u||[]).map((F,w)=>o.a.createElement(s,{value:F,key:w},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:y?y[w]:F}}))))},ha=pa($n.a),ga=t=>n=>{var s=n.invalid?{borderColor:"#f5222d"}:{},d=n.schema,l=d.max,p=d.min,u=d.step,y={};return(l||l===0)&&(y={max:l}),(p||p===0)&&(y=Object(j.a)(Object(j.a)({},y),{},{min:p})),u&&(y=Object(j.a)(Object(j.a)({},y),{},{step:u})),o.a.createElement(t,Object(ae.default)({},y,{style:Object(j.a)({width:"100%"},s),disabled:n.disabled||n.readonly},n.options,{value:n.value,onChange:n.onChange}))},ya=ga(z.a),rr=e("7kJ1"),ba=e("qPIi"),ja=e.n(ba),Oa=(t,n,s)=>{var d=s.Group,l=t.schema||{},p=l.enum,u=l.enumNames;return o.a.createElement(d,{disabled:t.disabled||t.readonly,value:t.value,onChange:n},(p||[!0,!1]).map((y,C)=>o.a.createElement(s,{value:y,key:C},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:u?u[C]:y}}))))};function Ea(t){var n=s=>t.onChange(s.target.value);return Oa(t,n,ja.a)}var xa=t=>n=>{var s=t.Option,d=C=>n.onChange(C),l=n.invalid?{borderColor:"#f5222d"}:{},p=n.schema||{},u=p.enum,y=p.enumNames;return o.a.createElement(t,Object(ae.default)({style:Object(j.a)({width:"100%"},l)},n.options,{disabled:n.disabled||n.readonly,value:n.value,onChange:d}),(u||[]).map((C,F)=>{var w=y?y[F]:C,Se=typeof w=="string"&&w[0]==="<";return Se&&(w=o.a.createElement("span",{dangerouslySetInnerHTML:{__html:w}})),o.a.createElement(s,{value:C,key:F},w)}))},Sa=xa($n.a),Ca=t=>{var n=t.invalid?{borderColor:"#f5222d"}:{},s=t.schema,d=s.max,l=s.min,p=s.step,u={};(d||d===0)&&(u={max:d}),(l||l===0)&&(u=Object(j.a)(Object(j.a)({},u),{},{min:l})),p&&(u=Object(j.a)(Object(j.a)({},u),{},{step:p}));var y=!1;t.options&&t.options.hideNumber&&(y=!0);var C=t.readonly?o.a.createElement("span",{style:{width:"90px"}},t.value===""?"-":t.value):o.a.createElement(z.a,Object(ae.default)({},t.options,u,{style:Object(j.a)({width:"90px"},n),value:t.value,disabled:t.disabled,onChange:t.onChange}));return o.a.createElement("div",{className:"fr-slider"},o.a.createElement(Be.a,Object(ae.default)({style:{flexGrow:1,marginRight:y?0:12}},u,{onChange:t.onChange,value:typeof t.value=="number"?t.value:l||0,disabled:t.disabled||t.readonly})),y?null:C)},Da=Ca,sr=e("LGkk"),Ra=e("rVaU"),Aa=e.n(Ra);function Fa(t){return o.a.createElement(Aa.a,{disabled:t.disabled||t.readonly,onChange:n=>t.onChange(t.name,n),defaultChecked:t.value})}var Na=X.a.TextArea;function Ta(t){var n=t.options,s=t.invalid,d=s?{borderColor:"#f5222d"}:{},l={rows:3},p=Object(j.a)(Object(j.a)({},l),n),u=y=>t.onChange(y.target.value);return o.a.createElement(Na,Object(ae.default)({style:d,disabled:t.disabled||t.readonly,value:t.value},p,{onChange:u}))}var ir=e("VDQ/"),Ia=e("B8+X"),Pa=e.n(Ia),Ba=e("z7Xi");function wa(t){var n={name:"file",action:t.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(s){s.file.status==="done"?(g.a.success("".concat(s.file.name," \u4E0A\u4F20\u6210\u529F")),t.onChange(s.file.response.url)):s.file.status==="error"&&g.a.error("".concat(s.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){t.onChange("")}};return o.a.createElement("div",{className:"fr-upload-mod"},o.a.createElement(Pa.a,Object(ae.default)({},n,{className:"fr-upload-file"}),o.a.createElement(P.a,null,o.a.createElement(Ba.a,null)," \u4E0A\u4F20")),t.value&&o.a.createElement("a",{href:t.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var or=e("/xgg"),$a=e("aOJk"),La=e.n($a),Ma=e("mpQp"),Va="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Ka=(t,n)=>t==="image"?o.a.createElement("img",{src:n||Va,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}):null,za=(t,n)=>t!=="image"?null:o.a.createElement(La.a,{content:Ka(t,n),className:"fr-preview",placement:"bottom"},o.a.createElement(Ma.a,null));function Wa(t){var n=t.options,s=n===void 0?{}:n,d=t.invalid,l=d?{borderColor:"#f5222d"}:{},p=t.schema.format,u=p===void 0?"text":p,y=u==="image"?"text":u,C=F=>t.onChange(F.target.value);return o.a.createElement(X.a,Object(ae.default)({style:l},s,{value:t.value,type:y,disabled:t.disabled||t.readonly,addonAfter:s.addonAfter?s.addonAfter:za(u,t.value),onChange:C}))}var Ja={checkbox:Kn,checkboxes:zn,color:Un,date:Zn,dateRange:_n,input:Wa,list:ua,listEditor:ma,map:va,multiSelect:ha,number:ya,radio:Ea,select:Sa,slider:Da,switch:Fa,textarea:Ta,upload:wa},Ua=function t(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2?arguments[2]:void 0,l=n.type==="object"&&n.properties,p=n.type==="array"&&n.items&&n.items.properties,u=l||p;if(u){var y=zt(n);y.map(F=>{l&&(n.properties[F.name]=t(F.schema,n,F.name)),p&&(n.items.properties[F.name]=t(F.schema,n,F.name))})}if(s&&s.required&&Array.isArray(s.required)){var C=s.required.indexOf(d);C>-1&&(n.required=!0,s.required.splice(C,1)),s.required.length||delete s.required}return n},Ln=t=>Object(j.a)(Object(j.a)({},t),{},{schema:Ua(t.schema)}),Ya=function t(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,l=n.type==="object"&&n.properties,p=n.type==="array"&&n.items&&n.items.properties,u=l||p;if(u){var y=zt(n);y.map(C=>{l&&(n.properties[C.name]=t(C.schema,n,C.name)),p&&(n.items.properties[C.name]=t(C.schema,n,C.name))})}return typeof n.required=="boolean"&&(n.required&&s&&(s.required&&Array.isArray(s.required)?s.required.push(d):s.required=[d]),delete n.required),n},Mn=t=>Object(j.a)(Object(j.a)({},t),{},{schema:Ya(t.schema)}),lr=e("xwS/"),dr=e("4l2o"),ur=e("k/c8"),Ga={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function Ha(t,n){var s=t.defaultValue,d=t.templates,l=t.submit,p=t.transformer,u=t.extraButtons,y=t.settings,C=t.commonSettings,F=t.globalSettings,w=t.widgets,Se=w===void 0?{}:w,U=Ln,Qe=Mn;p&&(typeof p.from=="function"&&(U=p.from),typeof p.to=="function"&&(Qe=p.to));var Ve=n||Object(re.useRef)(),Ee=Y({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),ge=Object(H.default)(Ee,2),De=ge[0],oe=ge[1];Object(re.useEffect)(()=>{var Tt=s?U(s):Ga;Tt&&Tt.propsSchema?oe({isNewVersion:!1}):oe({isNewVersion:!0}),oe({schema:f(Tt),formData:Tt&&Tt.formData||{}})},[s]);var Ge=De.formData,tt=De.frProps,Ft=De.hovering,ht=De.isNewVersion,Wt=De.preview,Nt=De.schema,an=De.selected,kt=tt.displayType,un=kt==="row",qt=Object(j.a)(Object(j.a)({},tt),{},{showDescIcon:un}),vn=Tt=>{oe({formData:Tt}),t.onChange&&t.onChange(Tt)},rn=Tt=>{var fn=Object(j.a)({},Nt);fn.schema=Tt,oe({schema:fn}),t.onSchemaChange&&setTimeout(()=>{var On=Ve.current.getValue();t.onSchemaChange(On)},0)},hn=Object(j.a)(Object(j.a)({},S),{},{array:"listEditor"}),pn={preview:Wt,simple:!1,mapping:hn,widgets:Object(j.a)(Object(j.a)({},Ja),Se),selected:an,hovering:Ft},gn={templates:d,submit:l,transformFrom:U,transformTo:Qe,isNewVersion:ht,extraButtons:u,settings:y,commonSettings:C,globalSettings:F},sn=Object(j.a)(Object(j.a)({schema:Nt,formData:Ge,onChange:vn,setGlobal:oe,onSchemaChange:rn},pn),{},{userProps:gn,frProps:qt});return o.a.createElement(Dn,Object(ae.default)({ref:Ve},sn))}var Qa=Object(re.forwardRef)(Ha),cr=e("trko"),Xa=function t(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=n.type==="object"&&n.properties,l=n.type==="array"&&n.items&&n.items.properties,p=d||l;if(p){var F=zt(n);F.map(w=>{d&&(n.properties[w.name]=t(w.schema,n)),l&&(n.items.properties[w.name]=t(w.schema,n))})}else if(n.enum&&Array.isArray(n.enum)){var u=n.enum;if(Dt(u[0])&&u[0].label!==void 0&&u[0].value!==void 0){var y=u.map(w=>w.label),C=u.map(w=>w.value);n.enum=C,n.enumNames=y}}return n["x-component"]&&(n.widget=n["x-component"]),n["x-component-props"]&&(n.props=n["x-component-props"]),s&&n.required&&(s.required&&Array.isArray(s.required)?s.required.push(n.name):s.required=[n.name]),delete n.key,delete n.name,delete n.required,delete n["x-component"],delete n["x-component-props"],n},Za=t=>{var n=Xa(t);return{schema:n}},ka=function t(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,l=n.type==="object"&&n.properties,p=n.type==="array"&&n.items&&n.items.properties,u=l||p;if(u){var C=zt(n);C.map(F=>{l&&(n.properties[F.name]=t(F.schema,n,F.name)),p&&(n.items.properties[F.name]=t(F.schema,n,F.name))})}else if(n.enum&&Array.isArray(n.enum)&&n.enumNames&&Array.isArray(n.enumNames)){var y=n.enum.map((F,w)=>({value:F,label:n.enumNames[w]}));n.enum=y}return n.widget&&(n["x-component"]=n.widget),n.props&&(n["x-component-props"]=n.props),delete n.widget,delete n.props,delete n.enumNames,d&&(n.name=d,n.key=d),s&&d&&s.required&&Array.isArray(s.required)&&s.required.indexOf(d)>-1&&(n.required=!0),n},qa=t=>{var n=t.schema;return ka(n)},_a=(t,n)=>o.a.createElement(fe.a,{backend:G.a},o.a.createElement(Qa,Object(ae.default)({ref:n},t))),mr=T.default=Object(re.forwardRef)(_a)},refC:function(st,T,e){"use strict";e.r(T),e.d(T,"useForm",function(){return zt}),e.d(T,"connectForm",function(){return cn}),e.d(T,"createWidget",function(){return Mt.a});var ae=e("Saan"),re=e("vgIT"),o=e.n(re),fe=e("0Owb"),G=e("k1fw"),j=e("PpiC"),H=e("q1tI"),h=e.n(H),ue=e("7t+U"),Et=e("zmYW"),Fe=e("DtFj"),Y=e.n(Fe),ct=e("dc+4"),Pe=e("Btem"),nt=e.n(Pe),ke=e("lfLe"),we=e("Cp9S"),Q=e.n(we),_e=e("tJVT"),mt=e("MaXC"),lt=e("4IMT"),Rt=e.n(lt),ve=e("eOfH"),P=e("h0/l"),O=e.n(P),r=e("LvDl"),g=e("2YYc");function c(f){var A=f.height,W=f.width,V=f.onClick;return h.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:W||A||256,height:A||W||256,onClick:V},h.a.createElement("path",{d:"M755.2 375.637333a42.666667 42.666667 0 0 0 0.554667-60.330666l-213.333334-217.173334a42.666667 42.666667 0 0 0-60.842666 0l-213.333334 217.173334a42.666667 42.666667 0 1 0 60.842667 59.818666L469.333333 232.32V896a42.666667 42.666667 0 1 0 85.333334 0V232.32l140.245333 142.805333a42.666667 42.666667 0 0 0 60.330667 0.512z",fill:"#1890ff"}))}function $(f){var A=f.height,W=f.width,V=f.onClick;return h.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:W||A||256,height:A||W||256,onClick:V},h.a.createElement("path",{d:"M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z",fill:"#1890ff"}))}var J=e("Oxum"),X=f=>{var A=f.message,W=f.schema,V=f.hideValidation,Z="";return typeof A=="string"&&(Z=A),Array.isArray(A)&&(Z=A[0]||""),Z=Object(ue.A)(Z,W),!Z&&V?null:h.a.createElement("div",{className:"error-message"},Z)},_=X,pe=e("/MfK"),Re=e("lfch"),be=e("fVyk"),$e=120,qe=f=>{var A=f.parentId,W=f.dataIndex,V=W===void 0?[]:W,Z=f.children,me=Z===void 0?[]:Z,ye=f.errorFields,v=f.displayType,b=Object(g.d)(),x=b.formData,B=b.flatten,I=b.onItemChange,L=b.removeErrorField,te="list";try{te=B[A].schema.widget}catch(m){}var ne=B[A],ie=ne&&ne.schema,k=Object(ue.g)(A,V),Xe;typeof k=="string"&&(Xe=Object(r.get)(x,k));var se=Array.isArray(Xe)?Xe:[{}],Ue=()=>{var m=[...se,{}],D=m.length-1;return I(k,m),D},Ae=m=>{var D=se[m],S=[...se.slice(0,m),D,...se.slice(m)];I(k,S)},Be=m=>{var D=se.filter((S,N)=>N!==m);I(k,D),L("".concat(k,"[").concat(m,"]"))},Ye=m=>{if(m!==0){var D=se[m],S=se[m-1],N=se;N[m]=S,N[m-1]=D,I(k,N)}},Ne=m=>{if(!(m>=se.length-1)){var D=se[m],S=se[m+1],N=se;N[m]=S,N[m+1]=D,I(k,N)}},z={displayList:se,schema:ie,dataPath:k,dataIndex:V,children:me,deleteItem:Be,addItem:Ue,copyItem:Ae,moveItemDown:Ne,moveItemUp:Ye,listData:Xe,flatten:B,errorFields:ye,displayType:v};switch(te){case"list0":return h.a.createElement(We,z);case"list1":return h.a.createElement(ze,z);case"list2":return h.a.createElement(dt,z);case"list3":return h.a.createElement(Te,z);default:return h.a.createElement(We,z)}},Ke=qe,ze=f=>{var A=f.schema,W=f.displayList,V=W===void 0?[]:W,Z=f.dataIndex,me=f.children,ye=f.deleteItem,v=f.addItem,b=f.copyItem,x={type:"object",properties:{},props:A.props||{},$id:A.$id},B={schema:x,rules:[],children:me};return h.a.createElement("div",{className:"fr-list-1"},V.map((I,L)=>{var te={displayType:"inline",_item:B,dataIndex:[...Z,L]};return A.props&&A.props.hideTitle&&(te.hideTitle=!0),h.a.createElement("div",{key:L,style:{display:"flex"}},h.a.createElement(i,te),h.a.createElement("div",{style:{marginTop:6}},h.a.createElement(O.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>ye(L),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},h.a.createElement(pe.a,{style:{fontSize:17,marginLeft:8}})),h.a.createElement(Re.a,{style:{fontSize:16,marginLeft:8},onClick:()=>b(L)})))}),h.a.createElement(Rt.a,{style:{marginTop:V.length>0?0:8},type:"dashed",onClick:v},"\u65B0\u589E\u4E00\u6761"))},Te=f=>{var A=f.displayList,W=A===void 0?[]:A,V=f.dataPath,Z=f.dataIndex,me=f.children,ye=f.deleteItem,v=f.addItem,b=f.moveItemDown,x=f.moveItemUp,B=f.flatten,I=f.errorFields,L=Object(g.c)({showDrawer:!1,currentIndex:-1}),te=Object(_e.default)(L,2),ne=te[0],ie=te[1],k={schema:{type:"object",properties:{}},rules:[],children:me},Xe=ne.showDrawer,se=ne.currentIndex,Ue=W.map((z,m)=>Object(G.a)(Object(G.a)({},z),{},{$idx:m})),Ae=me.map(z=>{var m=B[z],D=m&&m.schema||{},S=Object(ue.k)(z);return{dataIndex:S,title:D.required?h.a.createElement(h.a.Fragment,null,h.a.createElement("span",{className:"fr-label-required"}," *"),h.a.createElement("span",null,D.title)):D.title,width:$e,render:(N,K)=>{var ce=Object(ue.g)(z,[K.$idx]),xe=I.find(le=>le.name==ce)||{};return h.a.createElement("div",null,h.a.createElement("div",null,Object(ue.i)(N,D)),xe.error&&h.a.createElement(_,{message:xe.error,schema:D}))}}});Ae.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(z,m,D)=>{var S=z&&z.$idx||0;return h.a.createElement(Q.a,null,h.a.createElement("a",{onClick:()=>Be(S)},"\u7F16\u8F91"),h.a.createElement(O.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>ye(D),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},h.a.createElement("a",null,"\u5220\u9664")))}});var Be=z=>{ie({showDrawer:!0,currentIndex:z})},Ye=()=>{ie({showDrawer:!1,currentIndex:-1})},Ne=()=>{var z=v();Be(z)};return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"w-100 mb2 tr"},h.a.createElement(Rt.a,{type:"primary",size:"small",onClick:Ne},"\u65B0\u589E")),h.a.createElement(nt.a,{width:"600",title:"\u7F16\u8F91",placement:"right",onClose:Ye,visible:Xe},h.a.createElement("div",{className:"fr-container"},h.a.createElement(i,{_item:k,dataIndex:[...Z,se]}))),h.a.createElement(Y.a,{scroll:{x:"max-content"},columns:Ae,dataSource:Ue,rowClassName:(z,m)=>{var D=z&&z.$idx,S=I.find(N=>N.name.indexOf("".concat(V,"[").concat(D,"]"))>-1);return S?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},dt=f=>{var A=f.displayList,W=A===void 0?[]:A,V=f.dataIndex,Z=f.children,me=f.deleteItem,ye=f.addItem,v=f.flatten,b=W.map((B,I)=>({index:I})),x=Z.map(B=>{var I=v[B],L=I&&I.schema||{};return{dataIndex:B,title:L.required?h.a.createElement(h.a.Fragment,null,h.a.createElement("span",{className:"fr-label-required"}," *"),h.a.createElement("span",null,L.title)):L.title,width:$e,render:(te,ne,ie)=>{var k=[...V,ne.index];return h.a.createElement(i,{hideTitle:!0,displayType:"inline",key:ie.toString(),id:B,dataIndex:k})}}});return x.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(B,I,L)=>h.a.createElement(O.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>me(idx),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},h.a.createElement("a",null,"\u5220\u9664"))}),h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"w-100 mb2 tr"},h.a.createElement(Rt.a,{type:"primary",size:"small",onClick:ye},"\u65B0\u589E")),h.a.createElement(Y.a,{scroll:{x:"max-content"},columns:x,dataSource:b,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},We=f=>{var A=f.displayList,W=A===void 0?[]:A,V=f.dataIndex,Z=f.children,me=f.deleteItem,ye=f.copyItem,v=f.addItem,b=f.displayType,x={schema:{type:"object",properties:{}},rules:[],children:Z};return h.a.createElement(h.a.Fragment,null,h.a.createElement("div",{className:"fr-card-list"},W.map((B,I)=>h.a.createElement("div",{className:"fr-card-item ".concat(b==="row"?"fr-card-item-row":""),key:I},h.a.createElement("div",{className:"fr-card-index"},I+1),h.a.createElement(i,{displayType:b,_item:x,dataIndex:[...V,I]}),h.a.createElement(Q.a,{direction:"horizontal",className:"fr-card-toolbar"},h.a.createElement(O.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>me(I),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},h.a.createElement(pe.a,{style:{fontSize:17,marginLeft:8}})),h.a.createElement(Re.a,{style:{fontSize:16,marginLeft:8},onClick:()=>ye(I)}))))),h.a.createElement(Rt.a,{style:{marginTop:W.length>0?0:8},type:"dashed",onClick:v},"\u65B0\u589E\u4E00\u6761"))},Ie=f=>{var A=f.children,W=A===void 0?[]:A,V=f.dataIndex,Z=V===void 0?[]:V,me=f.displayType,ye=f.hideTitle;return h.a.createElement(h.a.Fragment,null,W.map((v,b)=>{var x={displayType:me,id:v,dataIndex:Z,hideTitle:ye};return h.a.createElement(i,Object(fe.default)({key:b.toString()},x))}))},vt=Ie;function gt(f,A,W){var V=this,Z=Object(H.useRef)(null),me=Object(H.useRef)(0),ye=Object(H.useRef)(null),v=Object(H.useRef)([]),b=Object(H.useRef)(),x=Object(H.useRef)(),B=Object(H.useRef)(f),I=Object(H.useRef)(!0);B.current=f;var L=!A&&A!==0&&typeof window!="undefined";if(typeof f!="function")throw new TypeError("Expected a function");A=+A||0,W=W||{};var te=!!W.leading,ne="trailing"in W?!!W.trailing:!0,ie="maxWait"in W,k=ie?Math.max(+W.maxWait||0,A):null;Object(H.useEffect)(()=>(I.current=!0,()=>{I.current=!1}),[]);var Xe=Object(H.useMemo)(()=>{var se=z=>{var m=v.current,D=b.current;return v.current=b.current=null,me.current=z,x.current=B.current.apply(D,m)},Ue=(z,m)=>{L&&cancelAnimationFrame(ye.current),ye.current=L?requestAnimationFrame(z):setTimeout(z,m)},Ae=z=>{if(!I.current)return!1;var m=z-Z.current,D=z-me.current;return!Z.current||m>=A||m<0||ie&&D>=k},Be=z=>(ye.current=null,ne&&v.current?se(z):(v.current=b.current=null,x.current)),Ye=()=>{var z=Date.now();if(Ae(z))return Be(z);if(!!I.current){var m=z-Z.current,D=z-me.current,S=A-m,N=ie?Math.min(S,k-D):S;Ue(Ye,N)}},Ne=function(){for(var m=Date.now(),D=Ae(m),S=arguments.length,N=new Array(S),K=0;K<S;K++)N[K]=arguments[K];if(v.current=N,b.current=V,Z.current=m,D){if(!ye.current&&I.current)return me.current=Z.current,Ue(Ye,A),te?se(Z.current):x.current;if(ie)return Ue(Ye,A),se(Z.current)}return ye.current||Ue(Ye,A),x.current};return Ne.cancel=()=>{ye.current&&(L?cancelAnimationFrame(ye.current):clearTimeout(ye.current)),me.current=0,v.current=Z.current=b.current=ye.current=null},Ne.isPending=()=>!!ye.current,Ne.flush=()=>ye.current?Be(Date.now()):x.current,Ne},[te,ie,A,k,ne,L]);return Xe}var xt=gt,Dt=f=>{var A=f.labelClass,W=f.labelStyle,V=f.schema,Z=f.displayType,me=Object(g.d)(),ye=me.displayType,v=me.readOnly,b=V.title,x=V.description,B=V.required,I=V.type,L=I==="object",te=V.displayType||Z||ye||"column";return h.a.createElement("div",{className:A,style:W},h.a.createElement("label",{className:"fr-label-title ".concat(Object(ue.n)(V,v)||te==="column"?"no-colon":""),title:b},B===!0&&h.a.createElement("span",{className:"fr-label-required"}," *"),h.a.createElement("span",{className:"".concat(L?"b":""," ").concat(te==="column"?"flex-none":"")},b),x&&(te==="row"?h.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":x},h.a.createElement("i",{className:"fr-tooltip-icon"}),h.a.createElement("div",{className:"fr-tooltip-container"},h.a.createElement("i",{className:"fr-tooltip-triangle"}),x)):te==="inline"?null:h.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",x,"\xA0)"))))},Kt=Dt,Je={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:url":"url","string:dateTime":"date","string:date":"date","string:year":"date","string:month":"date","string:week":"date","string:quarter":"date","string:time":"time","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"timeRange","range:dateTime":"dateRange","range:date":"dateRange","range:year":"dateRange","range:month":"dateRange","range:week":"dateRange","range:quarter":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function at(f){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Je,W=f.type,V=f.format,Z=f.enum,me=f.readOnly,ye=f.widget,v=[];me&&(v.push("".concat(W,"?readOnly")),v.push("*?readOnly")),Z&&(Array.isArray(Z)&&(W==="array"&&Z.length>6||W!=="array"&&Z.length>2)?(v.push("".concat(W,"?enum_long")),v.push("*?enum_long")):(v.push("".concat(W,"?enum")),v.push("*?enum")));var b=ye||V;b&&v.push("".concat(W,":").concat(b)),v.push(W);var x="";return v.some(B=>(x=A[B],!!x)),x}var ft={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},Vt=e("D7jV"),Mt=e("Rn6r"),Bt=f=>{var A=f.schema,W=f.onChange,V=f.value,Z=f.children,me=f.onItemChange,ye=f.formData,v=f.getValue,b=f.readOnly,x=f.dataPath,B=f.dataIndex,I=Object(g.e)(),L=I.widgets,te=I.mapping,ne=at(A,te);b&&["object","array"].indexOf(A.type)===-1&&(ne="html");var ie=L[ne],k=A.widget||A["ui:widget"];k&&L[k]&&(ie=L[k],ne=k);var Xe=ft[ne],se=Object(G.a)({schema:Object(G.a)(Object(G.a)({},A),Xe),onChange:W,value:V,children:Z},A.props);["title","placeholder","disabled","format"].forEach(Ae=>{A[Ae]&&(se[Ae]=A[Ae])}),A.default!==void 0&&(se.defaultValue=A.default),A.props&&(se=Object(G.a)(Object(G.a)({},se),A.props)),se.addons={onItemChange:me,setValue:me,getValue:v,formData:ye,dataPath:x,dataIndex:B};var Ue=Object(Mt.b)(se);return h.a.createElement(ie,Ue)},Ut=(f,A)=>f.schema&&f.schema.$id==="#"||f.schema&&f.schema.type==="object"?!1:f.value===A.value&&JSON.stringify(f.schema)===JSON.stringify(A.schema),Yt=h.a.memo(Bt,Ut),_t=f=>{var A=f.$id,W=f.dataIndex,V=f.item,Z=f.labelClass,me=f.labelStyle,ye=f.contentClass,v=f.hasChildren,b=f.children,x=f.errorFields,B=x===void 0?[]:x,I=f.hideTitle,L=f.displayType,te=V.schema,ne=Object(g.d)(),ie=ne.onItemChange,k=ne.formData,Xe=ne.isEditing,se=ne.setEditing,Ue=ne.touchKey,Ae=ne.debounceInput,Be=ne.readOnly,Ye=Object(H.useRef)(),Ne=Object(ue.g)(A,W),z=Object(ue.a)(te),m=[...V.rules];Xe&&Ye.current?z=Ye.current:(Object(ue.z)(z)&&(z=Object(ue.w)(z,k,Ne)),Ye.current=z,m=m.map(Ct=>{var nn={};return Object.keys(Ct).forEach(Ce=>{var ut=Object(ue.p)(Ct[Ce]);nn[Ce]=ut?Object(ue.x)(Ct[Ce],k,Ne):Ct[Ce]}),nn}));var D=B.find(Ct=>Ct.name===Ne),S=D&&D.error,N=Array.isArray(S)&&S.length>0,K=N?ye+" ant-form-item-has-error":ye,ce=Object(ue.m)(k,Ne),xe=Ct=>{if(Ct==="#"||!Ct)return k;if(typeof Ct=="string")return Object(ue.m)(k,Ct);console.error("path has to be a string")},le={},Me=xt(se,350),q=Be!==void 0?Be:z.readOnly,de=Ct=>{Ue(Ne),Ae&&(se(!0),Me(!1)),typeof Ne=="string"&&ie(Ne,Ct)},Oe={labelClass:Z,labelStyle:me,schema:z,displayType:L},rt=L==="inline"||q===!0,St={message:S,schema:z,displayType:L,hideValidation:rt},At={className:Z,style:me},Ot=!I&&!!z.title;I&&z.title&&(z.placeholder=z.title);var Gt={schema:z,readOnly:q,onChange:de,getValue:xe,formData:k,value:ce,onItemChange:ie,dataIndex:W,dataPath:Ne};if(Gt.children=v?b:Object(ue.n)(z,q)?z.title:null,z.hidden)return null;if(Object(ue.n)(z,q))return h.a.createElement(h.a.Fragment,null,Ot&&h.a.createElement("div",At),h.a.createElement("div",{className:K,style:le},h.a.createElement(Yt,Gt),h.a.createElement(_,St)));var $t=h.a.createElement(Kt,Oe);return Object(ue.s)(z)?($t=h.a.createElement("div",{style:{display:"flex"}},$t,h.a.createElement(_,St)),h.a.createElement("div",{className:K,style:le},h.a.createElement(Yt,Object(fe.default)({},Gt,{message:S,title:Ot?$t:void 0})))):h.a.createElement(h.a.Fragment,null,Ot&&$t,h.a.createElement("div",{className:"".concat(K," ").concat(I?"fr-content-no-title":""),style:le},h.a.createElement(Yt,Gt),h.a.createElement(_,St)))},ln=_t,Xt=f=>{var A=f.id,W=A===void 0?"#":A,V=f._item,Z=f.dataIndex,me=Z===void 0?[]:Z,ye=f.hideTitle,v=ye===void 0?!1:ye,b=f.hideValidation,x=b===void 0?!1:b,B=f.debugCss,I=Object(j.a)(f,["id","_item","dataIndex","hideTitle","hideValidation","debugCss"]),L=Object(g.d)(),te=L.displayType,ne=L.column,ie=L.flatten,k=L.errorFields,Xe=L.labelWidth,se=L.readOnly,Ue=V||ie[W];if(!Ue)return null;var Ae=Ue.schema,Be=Ae.displayType||I.displayType||te||"column",Ye=Ae.type==="object",Ne=Object(ue.q)(Ae),z=Ye||Ne,m=Object(ue.n)(Ae,se),D=Ae.width||Ae["ui:width"],S="fr-field ".concat(Be==="inline"?"":"w-100"," flex"),N="fr-label",K="fr-content";switch(Ae.type){case"object":Ye&&(Ae.title&&(N+=" fr-label-object"),S+=" fr-field-object");break;case"array":Ne&&(Ae.title&&(N+=" fr-label-list"),S+=" fr-field-column");break;case"boolean":m&&(K+=" fr-content-column",S+=" flex ".concat(Be==="column"?"flex-column":""));break;default:}if(!z&&!m)if(Be==="column")switch(S+=" flex-column",N+=" fr-label-column",K+=" fr-content-column",Ae.type){case"object":break;case"array":Ae.title&&!Ae.enum;break;case"boolean":break;default:}else Be==="row"&&(S+="",N+=" fr-label-row",K+=" fr-content-row",!Ye&&!m&&(N+=" flex-shrink-0 fr-label-row",K+=" flex-grow-1 relative"));var ce={};Ye||(D?ce={width:D,paddingRight:"12px"}:ne>1&&(ce={width:"calc(100% /".concat(ne,")"),paddingRight:"12px"}));var xe=Object(ue.l)("labelWidth",W,ie)||Xe,le=Object(ue.r)(xe)?Number(xe):Object(ue.o)(xe)?xe:110,Me={width:le};(z||Be==="column")&&(Me={flexGrow:1}),Be==="inline"&&(Me={marginTop:5,paddingLeft:12},N="",K+=" fr-content-inline",S.indexOf("fr-field-object")===-1&&(S+=" fr-field-inline"));var q=Ue.children&&Ue.children.length>0,de={$id:W,dataIndex:me,item:Ue,labelClass:N,labelStyle:Me,contentClass:K,errorFields:k,hasChildren:q,displayType:Be,hideTitle:v,hideValidation:x},Oe=q?h.a.createElement("div",{className:"flex flex-wrap"},h.a.createElement(vt,{dataIndex:me,errorFields:k,displayType:Be,hideTitle:v},Ue.children)):null,rt=q?h.a.createElement(Ke,{parentId:W,dataIndex:me,errorFields:k,displayType:Be,hideTitle:v},Ue.children):null;return h.a.createElement("div",{style:ce,className:"".concat(S," ").concat(B?"debug":"")},h.a.createElement(ln,de,Ye&&Oe,Ne&&rt))},i=Xt,a=e("SA0R"),E=e.n(a),M=e("OVFa"),R=e("k/c8"),he=e("cFvS"),ee="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",yt={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:ee,method:ee,array:ee,object:ee,number:ee,date:ee,boolean:ee,integer:ee,float:ee,regexp:ee,email:ee,url:ee,hex:ee},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},He="${title} is not a valid ${type}",it={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:He,method:He,array:He,object:He,number:He,date:He,boolean:He,integer:He,float:He,regexp:He,email:He,url:He,hex:He},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},ot=e("KpVd"),jt=f=>{var A=f.formData,W=f.schema,V=W===void 0?{}:W,Z=f.isRequired,me=Z===void 0?!0:Z,ye=f.touchedKeys,v=ye===void 0?[]:ye,b=f.locale,x=b===void 0?"cn":b,B=f.validateMessages,I=B===void 0?{}:B;if(Object.keys(V).length===0)return Promise.resolve();var L=Object(ue.h)({schema:V,isRequired:me}).fields,te=[];me||v.forEach(se=>{var Ue=Object(ue.u)(se,V),Ae=Object(r.get)(A,se);if(!Ae&&Ue.required){var Be=Ue.message||I.required||"${title}\u5FC5\u586B";te.push({name:se,error:[Be]})}});var ne=yt,ie=it,k;try{k=new ot.a(L)}catch(se){return Promise.resolve([])}var Xe=x==="en"?ie:ne;return Object(r.merge)(Xe,I),k.messages(Xe),k.validate(A||{}).then(se=>te.length>0?te:[]).catch(se=>{var Ue=se.errors,Ae=se.fields,Be=Object(ue.f)(Ue).map(Ne=>{var z=Object(ue.d)(Ne.field);return{name:z,error:[Ne.message]}});Be=[...Be,...te];var Ye=[];return Be.forEach(Ne=>{var z=Ye.findIndex(m=>m.name===Ne.name);z===-1?Ye.push(Ne):Ye[z].error=[...Ye[z].error,...Ne.error]}),Ye})},Le={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},je={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},et=(f,A)=>{var W=pt(f,A);return W=Object(ue.y)(W),W},pt=(f,A)=>{var W=Object(ue.a)(f),V=[],Z=[],me=[],ye=b=>Array.isArray(b)&&b.every(x=>typeof x=="string");Object.keys(A).forEach(b=>{var x=A[b]&&A[b].schema&&A[b].schema.bind,B=b.replace("[]","");x===!1?V.push(B):typeof x=="string"?Z.push({key:B,bind:x}):ye(x)&&me.push({key:B,bind:x})});var v=b=>{V.forEach(x=>{Object(r.unset)(b,x)}),Z.forEach(x=>{var B=x.key,I=x.bind,L=Object(r.get)(b,B),te=Object(r.get)(b,I);Object(ue.t)(te)&&(L=Object(G.a)(Object(G.a)({},te),L)),Object(r.set)(b,I,L),Object(r.unset)(b,B)}),me.forEach(x=>{var B=x.key,I=x.bind,L=Object(r.get)(b,B);Array.isArray(L)&&L.forEach((te,ne)=>{I[ne]&&Object(r.set)(b,I[ne],te)}),Object(r.unset)(b,B)})};return v(W),W},wt=(f,A)=>{var W=Object(ue.a)(f),V=[],Z=[],me=v=>Array.isArray(v)&&v.every(b=>typeof b=="string");Object.keys(A).forEach(v=>{var b=A[v]&&A[v].schema&&A[v].schema.bind,x=v.replace("[]","");typeof b=="string"?V.push({key:x,bind:b}):me(b)&&Z.push({key:x,bind:b})});var ye=v=>{V.forEach(b=>{var x=b.key,B=b.bind,I=Object(r.get)(v,B),L=Object(r.get)(v,x);Object(ue.t)(L)&&(I=Object(G.a)(Object(G.a)({},L),I)),Object(r.set)(v,x,I),Object(r.unset)(v,B)}),Z.forEach(b=>{var x=b.key,B=b.bind,I=[];B.forEach(L=>{I.push(Object(r.get)(v,L)),Object(r.unset)(v,L)}),Object(r.set)(v,x,I)})};return ye(W),W},zt=f=>{var A=f||{},W=A.formData,V=A.onChange,Z=A.onValidate,me=Object(g.c)({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),ye=Object(_e.default)(me,2),v=ye[0],b=ye[1],x=Object(H.useRef)({}),B=Object(H.useRef)({}),I=Object(H.useRef)(!1),L=Object(H.useRef)(),te=Object(H.useRef)("cn"),ne=Object(H.useRef)(),ie=Object(H.useRef)({}),k=Object(H.useRef)([]),Xe=v.formData,se=v.submitData,Ue=v.errorFields,Ae=Ue===void 0?[]:Ue,Be=v.isValidating,Ye=v.outsideValidating,Ne=v.isSubmitting,z=v.isEditing,m=v.allTouched,D=v.touchedKeys,S=f&&f.hasOwnProperty("formData"),N=S?W:Xe;ie.current=Object(H.useMemo)(()=>Object(r.merge)(Object(ue.e)(x.current),N),[JSON.stringify(N),JSON.stringify(x.current)]),k.current=D;var K=Ce=>{typeof V=="function"?V(Ce):b({formData:Ce})},ce=Ce=>{if(typeof Z=="function"){var ut=Ce.map(Zt=>Zt.name);Z(ut)}b({errorFields:Ce})},xe=Ce=>{if(!(k.current.indexOf(Ce)>-1)){var ut=[...k.current,Ce];b({touchedKeys:ut})}};Object(H.useEffect)(()=>{S&&typeof Z=="function"&&setTimeout(()=>{jt({formData:ie.current,schema:x.current,isRequired:!0,touchedKeys:k.current,locale:te.current,validateMessages:ne.current}).then(Ce=>{var ut=Ce.map(Zt=>Zt.name);Z(ut)})},200)},[]),Object(H.useEffect)(()=>{if(I.current){I.current=!1;return}jt({formData:ie.current,schema:x.current,isRequired:m,touchedKeys:k.current,locale:te.current,validateMessages:ne.current}).then(Ce=>{ce(Ce)})},[JSON.stringify(ie.current),m]);var le=Ce=>{b({isEditing:Ce})},Me=(Ce,ut)=>{if(typeof Ce=="string"){if(Ce==="#"){K(Object(G.a)({},ut));return}Object(r.set)(ie.current,Ce,ut),K(Object(G.a)({},ie.current))}},q=Ce=>{var ut=Ce.schema,Zt=Ce.flatten,Dn=Ce.beforeFinish,Tn=Ce.locale,Rn=Ce.validateMessages;x.current=ut,B.current=Zt,L.current=Dn,te.current=Tn,ne.current=Rn},de=Ce=>{var ut=[];Array.isArray(Ce)?ut=[...Ce,...Ae]:Ce&&Ce.name?ut=[Ce,...Ae]:console.log("error format is wrong"),ut=Object(r.sortedUniqBy)(ut,Zt=>Zt.name),ce(ut)},Oe=Ce=>{var ut=Ae.map(Zt=>Zt.name.indexOf(Ce)===-1);ce(ut)},rt=()=>pt(ie.current,B.current),St=Ce=>{var ut=wt(Ce,B.current);K(ut)},At=()=>{I.current=!0,b({isValidating:!0,allTouched:!0,isSubmitting:!1}),jt({formData:ie.current,schema:x.current,touchedKeys:[],isRequired:!0,locale:te.current,validateMessages:ne.current}).then(Ce=>{if(Ce&&Ce.length>0&&(console.log("submit:",ie.current,Ce),b({errorFields:Ce})),typeof L.current=="function"){Promise.resolve(et(ie.current,B.current)).then(ut=>{b({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:ut})});return}Promise.resolve(et(ie.current,B.current)).then(ut=>{b({isValidating:!1,isSubmitting:!0,submitData:ut})})}).catch(Ce=>{console.log("submit error:",Ce)})},Ot=()=>{K({}),ce([])},Gt=()=>b({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),$t=()=>b({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),Ct=()=>b({formData:{},submitData:{},errorFields:[],allTouched:!1,touchedKeys:[]}),nn={formData:ie.current,schema:x.current,touchedKeys:k.current,allTouched:m,touchKey:xe,onItemChange:Me,setValues:St,getValues:rt,resetFields:Ot,submit:At,submitData:se,errorFields:Ae,isValidating:Be,outsideValidating:Ye,isSubmitting:Ne,endValidating:Gt,endSubmitting:$t,setErrorFields:de,removeErrorField:Oe,isEditing:z,setEditing:le,syncStuff:q,destroyForm:Ct};return nn},cn=f=>A=>{var W=zt();return h.a.createElement(f,Object(fe.default)({},A,{form:W}))},dn=(f,A)=>{console.log(f,A)};function mn(f){var A=f.widgets,W=f.mapping,V=f.form,Z=f.beforeFinish,me=Z===void 0?dn:Z,ye=f.onFinish,v=ye===void 0?dn:ye,b=f.displayType,x=b===void 0?"column":b,B=f.schema,I=f.flatten,L=f.debug,te=f.debugCss,ne=f.locale,ie=ne===void 0?"cn":ne,k=f.debounceInput,Xe=k===void 0?!1:k,se=f.size,Ue=f.configProvider,Ae=f.theme,Be=f.validateMessages,Ye=f.watch,Ne=Ye===void 0?{}:Ye,z=Object(j.a)(f,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","debugCss","locale","debounceInput","size","configProvider","theme","validateMessages","watch"]);try{var m=V.submit}catch($t){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var D=V.submitData,S=V.errorFields,N=V.isValidating,K=V.outsideValidating,ce=V.isSubmitting,xe=V.endValidating,le=V.endSubmitting,Me=V.syncStuff,q=V.formData,de=V.isEditing,Oe=V.setErrorFields,rt=Object(H.useMemo)(()=>I||Object(ue.c)(B),[JSON.stringify(I),JSON.stringify(B)]);Object(H.useEffect)(()=>{Me({schema:B,flatten:rt,beforeFinish:me,locale:ie,validateMessages:Be})},[JSON.stringify(I),JSON.stringify(B)]),Object(H.useEffect)(()=>()=>{V.destroyForm()},[]);var St=Object(H.useMemo)(()=>Object(G.a)(Object(G.a)({flatten:rt},V),{},{displayType:x,theme:Ae,debounceInput:Xe,debug:L,isEditing:de},z),[JSON.stringify(rt),JSON.stringify(q),JSON.stringify(S)]),At=Object(H.useMemo)(()=>({widgets:Object(G.a)(Object(G.a)({},Vt.a),A),mapping:Object(G.a)(Object(G.a)({},Je),W)}),[]);Object(H.useEffect)(()=>{if(K===!0){Promise.resolve(me(D,S)).then($t=>{$t&&Oe($t),xe()});return}N===!1&&ce===!0&&(le(),v(D,S))},[N,ce,K]);var Ot="";se==="small"?Ot="fr-form-small":se==="large"&&(Ot="fr-form-large");var Gt=Object.keys(Ne);return h.a.createElement(o.a,Object(fe.default)({locale:E.a},Ue),h.a.createElement(g.b.Provider,{value:St},h.a.createElement(g.a.Provider,{value:At},h.a.createElement("div",{className:"fr-container ".concat(Ot)},L?h.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},h.a.createElement("div",null,"formData:"+JSON.stringify(V.formData)),h.a.createElement("div",null,"errorFields:"+JSON.stringify(V.errorFields)),h.a.createElement("div",null,"touchedKeys:"+JSON.stringify(V.touchedKeys)),h.a.createElement("div",null,"allTouched:"+JSON.stringify(V.allTouched)),h.a.createElement("div",null,"isEditting:"+JSON.stringify(V.isEditing)),h.a.createElement("div",null,"isValidating:"+JSON.stringify(V.isValidating)),h.a.createElement("div",null,"isSubmitting:"+JSON.stringify(V.isSubmitting))):null,Gt.length>0?Gt.map(($t,Ct)=>h.a.createElement(Qt,{key:Ct.toString(),watchKey:$t,watch:Ne,formData:q})):null,h.a.createElement(i,{debugCss:te})))))}var en=f=>{var A=f.isOldVersion,W=A===void 0?!0:A,V=f.schema,Z=Object(j.a)(f,["isOldVersion","schema"]),me=V;return W&&(me=Object(ue.B)(V)),h.a.createElement(mn,Object(fe.default)({schema:me},Z))},tn=T.default=en,Qt=f=>{var A=f.watchKey,W=f.watch,V=f.formData,Z=Object(ue.m)(V,A),me=W[A];return Object(H.useEffect)(()=>{me(Z)},[JSON.stringify(Z)]),null}},trko:function(st,T,e){},"xwS/":function(st,T,e){}}]);
