(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2YYc":function(tt,I,e){"use strict";e.d(I,"a",function(){return le}),e.d(I,"b",function(){return b}),e.d(I,"e",function(){return Se}),e.d(I,"d",function(){return q}),e.d(I,"c",function(){return st});var Z=e("tJVT"),k=e("k1fw"),r=e("q1tI"),te=e.n(r),le=Object(r.createContext)(()=>{}),b=Object(r.createContext)({}),Se=()=>Object(r.useContext)(le),q=()=>Object(r.useContext)(b),st=Xe=>Object(r.useReducer)((Be,Y)=>Object(k.a)(Object(k.a)({},Be),Y),Xe);function me(Xe,Be,Y){var nt=Object(r.useRef)();Object(r.useEffect)(()=>{nt.current=Xe},[Xe]);var lt=Object(r.useRef)();return Object(r.useEffect)(()=>{if(!Y)return;function _e(){nt&&nt.current&&nt.current()}if(_e(),Be!==null)return lt.current=setInterval(_e,Be),()=>clearInterval(lt.current)},[Be,Y]),()=>clearInterval(lt.current)}function f(Xe){var Be=Object(r.useRef)();return Object(r.useEffect)(()=>{Be.current=Xe},[Xe]),Be.current}var R=Xe=>{var Be=Object(r.useState)(!1),Y=Object(Z.default)(Be,2),nt=Y[0],lt=Y[1],_e;try{_e=localStorage.getItem(Xe)}catch(Wt){}return _e||(lt(!0),localStorage.setItem(Xe,JSON.stringify(!0))),nt},he=()=>{var Xe=Object(r.useState)(!1),Be=Object(Z.default)(Xe,2),Y=Be[0],nt=Be[1],lt=()=>nt(!Y);return[Y,lt]},ge=Xe=>{var Be=Object(r.useState)(Xe),Y=Object(Z.default)(Be,2),nt=Y[0],lt=Y[1];return[nt,lt]},it=function(){var Be=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},Y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",nt=()=>{var O=localStorage.getItem(Y);if(O)try{return JSON.parse(O)}catch(o){return Be}return Be},lt=Object(r.useState)(nt()),_e=Object(Z.default)(lt,2),Wt=_e[0],ue=_e[1],P=O=>{ue(O),localStorage.setItem(Y,JSON.stringify(O))};return[Wt,P]}},"36SN":function(tt,I,e){"use strict";e.r(I),e.d(I,"Column",function(){return f}),e.d(I,"Line",function(){return Xe}),e.d(I,"PivotTable",function(){return Wt});var Z=e("0Owb"),k=e("PpiC"),r=e("q1tI"),te=e.n(r),le=e("06Lf");function b(ue){var P=[],O=[];return ue.forEach(o=>{o.isDim?P.push(o):O.push(o)}),{metaDim:P,metaInd:O}}function Se(ue){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(ue==null?void 0:ue.toPrecision(P))}var q=()=>te.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function st(ue,P){var O=b(ue),o=O.metaDim,h=O.metaInd;if(h.length>=1&&o.length===0){var u="type",K="value";return{xField:u,yField:K,data:P.map(Le=>h.map(Ae=>{var vt=Ae.id,dt=Ae.name;return{[u]:vt,[K]:Le[vt]}})).flat(),meta:{[u]:{formatter:Le=>{var Ae;return((Ae=ue.find(vt=>{var dt=vt.id;return Le===dt}))===null||Ae===void 0?void 0:Ae.name)||Le}}},tooltip:{formatter:Le=>{var Ae,vt=Le[u],dt=Le[K];return{name:(Ae=ue.find(St=>{var Dt=St.id;return vt===Dt}))===null||Ae===void 0?void 0:Ae.name,value:dt}}}}}else if(h.length===1&&o.length===1){var U,G,_,ve=(U=o.shift())===null||U===void 0?void 0:U.id,xe=(G=h.shift())===null||G===void 0?void 0:G.id;return{data:P,xField:ve,yField:xe,meta:{[xe]:{alias:(_=ue.find(Le=>{var Ae=Le.id;return Ae===xe}))===null||_===void 0?void 0:_.name}}}}else if(h.length>1&&o.length===1){var oe,Te=(oe=o.shift())===null||oe===void 0?void 0:oe.id,Ze="value",Ie="type";return{data:P.map(Le=>h.map(Ae=>{var vt=Ae.id,dt=Ae.name;return{[Te]:Le[Te],[Ze]:Le[vt],[Ie]:dt}})).flat(),xField:Te,yField:Ze,seriesField:Ie,isGroup:!0}}else if(h.length===1&&o.length===2){var Pe,De,ut;return{data:P,xField:(Pe=o.shift())===null||Pe===void 0?void 0:Pe.id,yField:(De=h.shift())===null||De===void 0?void 0:De.id,seriesField:(ut=o.shift())===null||ut===void 0?void 0:ut.id,isGroup:!0}}return{data:P,xField:"",yField:""}}var me=ue=>{var P=ue.className,O=ue.style,o=ue.meta,h=o===void 0?[]:o,u=ue.data,K=u===void 0?[]:u,U=ue.inverted,G=Object(k.a)(ue,["className","style","meta","data","inverted"]);if(U){var _=st(h,K),ve=_.xField,xe=_.yField,oe=Object(k.a)(_,["xField","yField"]);return te.a.createElement(le.b,Object(Z.default)({xField:xe,yField:ve},oe,{renderer:"svg",errorTemplate:()=>te.a.createElement(q,null)},G))}else return te.a.createElement(le.c,Object(Z.default)({},st(h,K),{renderer:"svg",errorTemplate:()=>te.a.createElement(q,null)},G))},f=me,R=e("k1fw"),he=e("sGjT");function ge(ue,P){var O=b(ue),o=O.metaDim,h=O.metaInd;if(h.length===1&&o.length===1){var u,K=o.shift(),U=h.shift(),G=K.id,_=U.id;return{data:P,xField:G,yField:_,yAxis:{label:{formatter:$e=>U.isRate?"".concat(Se(100*Number($e)),"%"):$e}},tooltip:{formatter:$e=>{var at=$e[G],ft=$e[_];return{name:U.name,value:U.isRate?"".concat(Se(100*Number(ft)),"%"):ft}}},meta:{[_]:{alias:(u=ue.find($e=>{var at=$e.id;return at===_}))===null||u===void 0?void 0:u.name}}}}else if(h.length===1&&o.length===2){var ve=o.shift(),xe=h.shift(),oe=o.shift(),Te=ve.id,Ze=xe.id,Ie=oe.id;return{data:P,xField:Te,yField:Ze,seriesField:Ie,yAxis:{label:{formatter:$e=>xe.isRate?"".concat(Se(100*Number($e)),"%"):$e}},tooltip:{formatter:$e=>{var at=$e[Ie],ft=$e[Ze];return{name:at,value:xe.isRate?"".concat(Se(100*Number(ft)),"%"):ft}}}}}else if(h.length===2&&o.length===2){var Pe,De,ut,Le,Ae=P.map($e=>{var at=h[0].id,ft=o[1].id,Kt=$e[at],Vt=$e[ft],Bt=Object(k.a)($e,[at,ft].map(he.a));return Object(R.a)({[o[1].id]:"".concat(Vt,"-").concat(h[0].name)},Bt)}),vt=P.map($e=>{var at=h[1].id,ft=o[1].id,Kt=$e[at],Vt=$e[ft],Bt=Object(k.a)($e,[at,ft].map(he.a));return Object(R.a)({[o[1].id]:"".concat(Vt,"-").concat(h[1].name)},Bt)});return{data:[vt,Ae],geometryOptions:[{geometry:"line",seriesField:o[1].id},{geometry:"line",seriesField:o[1].id,lineStyle:{lineDash:[5,5]}}],xField:(Pe=o.shift())===null||Pe===void 0?void 0:Pe.id,yField:[(De=h.shift())===null||De===void 0?void 0:De.id,(ut=h.shift())===null||ut===void 0?void 0:ut.id],seriesField:(Le=o.shift())===null||Le===void 0?void 0:Le.id}}else if(h.length>1&&o.length===1){var dt,St=(dt=o.shift())===null||dt===void 0?void 0:dt.id,Dt="value",Jt="type";return{data:P.map($e=>h.map(at=>{var ft=at.id,Kt=at.name;return{[St]:$e[St],[Dt]:$e[ft],[Jt]:Kt}})).flat(),xField:St,yField:Dt,seriesField:Jt}}return{data:P}}var it=ue=>{var P=ue.className,O=ue.style,o=ue.meta,h=o===void 0?[]:o,u=ue.data,K=u===void 0?[]:u,U=ue.withArea,G=Object(k.a)(ue,["className","style","meta","data","withArea"]),_=ge(h,K);return U?te.a.createElement(le.a,Object(Z.default)({},_,{renderer:"svg",errorTemplate:()=>te.a.createElement(q,null)},G)):Array.isArray(_.yField)?te.a.createElement(le.d,Object(Z.default)({},_,{renderer:"svg",errorTemplate:()=>te.a.createElement(q,null)},G)):te.a.createElement(le.e,Object(Z.default)({},_,{renderer:"svg",errorTemplate:()=>te.a.createElement(q,null)},G))},Xe=it,Be=e("tJVT"),Y=e("mA+x"),nt=e("aMEK"),lt=e("ARb9"),_e=ue=>{var P=ue.className,O=ue.style,o=ue.showSubtotal,h=o===void 0?!0:o,u=ue.subtotalText,K=u===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:u,U=ue.meta,G=U===void 0?[]:U,_=ue.data,ve=_===void 0?[]:_,xe=ue.size,oe=xe===void 0?"middle":xe,Te=ue.indicatorSide,Ze=Te===void 0?"top":Te,Ie=ue.leftDimensionLength,Pe=Ie===void 0?G.length:Ie,De=ue.leftExpandable,ut=De===void 0?!1:De,Le=ue.topExpandable,Ae=Le===void 0?!1:Le,vt=ue.defaultExpandAll,dt=vt===void 0?!0:vt,St=ue.cellRender,Dt=Object(k.a)(ue,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),Jt=Object(r.useState)([]),$e=Object(Be.default)(Jt,2),at=$e[0],ft=$e[1],Kt=Object(r.useState)([]),Vt=Object(Be.default)(Kt,2),Bt=Vt[0],Qt=Vt[1],nn=b(G),_t=nn.metaDim,hn=nn.metaInd,en=hn.map(pe=>{var ke=pe.id,Et=pe.name,wt=pe.isRate;return{name:Et,code:ke,align:"right",expression:wt?"AVG(".concat(ke,")"):"SUM(".concat(ke,")")}}),s=_t.filter((pe,ke)=>ke<Pe),a=s.map(pe=>{var ke=pe.id;return ke}),E=Object(Y.b)(ve,a,{includeTopWrapper:!0,isExpand:ut?pe=>Bt.includes(pe):void 0}),z=Object(Y.d)(E,{indicators:Ze==="left"?en:void 0,supportsExpand:ut,expandKeys:Bt,onChangeExpandKeys:Qt,generateSubtotalNode:h?pe=>({position:"start",value:pe.path.length===0?K[0]||"\u603B\u8BA1":K[1]||"\u5C0F\u8BA1"}):void 0}),A=Object(Be.default)(z,1),de=A[0],ee=_t.filter((pe,ke)=>ke>=Pe),Ot=ee.map(pe=>{var ke=pe.id;return ke}),yt=Object(Y.b)(ve,Ot,{includeTopWrapper:!0,isExpand:Ae?pe=>at.includes(pe):void 0}),ct=Object(Y.d)(yt,{indicators:Ze==="top"?en:void 0,supportsExpand:Ae,expandKeys:at,onChangeExpandKeys:ft,generateSubtotalNode:h?pe=>({position:"start",value:pe.path.length===0?K[0]||"\u603B\u8BA1":K[1]||"\u5C0F\u8BA1"}):void 0}),mt=Object(Be.default)(ct,1),Ft=mt[0],Ne=Object(Y.c)({data:ve,leftCodes:a,topCodes:Ot,aggregate:Object(nt.a)(en)});return te.a.createElement("div",{style:O,className:"CR-PivotTable CR-PivotTable-".concat(oe," ").concat(P||"")},te.a.createElement(Y.a,Object(Z.default)({defaultColumnWidth:100,leftMetaColumns:_t.filter(pe=>{var ke=pe.id;return a.includes(ke)}).map(pe=>{var ke=pe.id,Et=pe.name;return{code:ke,name:Et}}),leftTree:de.children,leftTotalNode:de,topTree:Ft.children,topTotalNode:Ft,getValue:(pe,ke)=>{var Et,wt=(Et=Ne.get(pe.data.dataKey))===null||Et===void 0?void 0:Et.get(ke.data.dataKey);return wt==null?void 0:wt[ke.code]},render:(pe,ke,Et)=>{var wt;if(St){var tn=ke.data.dataPath,En=tn===void 0?[]:tn,xn=Et.data.dataPath,Sn=xn===void 0?[]:xn,un={};return En.forEach((kt,an)=>{var Ut;un[(Ut=s[an])===null||Ut===void 0?void 0:Ut.id]=kt}),Sn.forEach((kt,an)=>{var Ut;un[(Ut=ee[an])===null||Ut===void 0?void 0:Ut.id]=kt}),St(pe,un,Et.code)}return(wt=hn.find(kt=>{var an=kt.id;return an===Et.code}))!==null&&wt!==void 0&&wt.isRate?"".concat(Se(pe*100).toFixed(2),"%"):pe}},Dt)))},Wt=_e},"4l2o":function(tt,I,e){},"72KL":function(tt,I,e){},"7t+U":function(tt,I,e){"use strict";e.d(I,"u",function(){return Se}),e.d(I,"n",function(){return q}),e.d(I,"m",function(){return f}),e.d(I,"g",function(){return he}),e.d(I,"p",function(){return ge}),e.d(I,"r",function(){return it}),e.d(I,"c",function(){return Xe}),e.d(I,"s",function(){return Y}),e.d(I,"a",function(){return nt}),e.d(I,"q",function(){return lt}),e.d(I,"o",function(){return _e}),e.d(I,"j",function(){return ue}),e.d(I,"x",function(){return ve}),e.d(I,"v",function(){return xe}),e.d(I,"l",function(){return Te}),e.d(I,"f",function(){return Ae}),e.d(I,"b",function(){return dt}),e.d(I,"k",function(){return St}),e.d(I,"i",function(){return Dt}),e.d(I,"w",function(){return Jt}),e.d(I,"h",function(){return $e}),e.d(I,"d",function(){return at}),e.d(I,"t",function(){return ft}),e.d(I,"e",function(){return Kt}),e.d(I,"y",function(){return Vt}),e.d(I,"z",function(){return Qt});var Z=e("Pv/L"),k=e("PpiC"),r=e("k1fw"),te=e("tJVT"),le=e("LvDl"),b=e.n(le);window.log1=s=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",s)},window.log2=s=>{console.log("%cwarning:","color: #f50; font-weight: 500;",s)},window.log3=s=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",s)},window.log4=s=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",s)};function Se(s){var a=/^(?:\w+:)?\/\/(\S+)$/;return typeof s!="string"?!1:a.test(s)}function q(s,a){if(a)return!1;if(s.widget==="checkbox")return!0;if(s&&s.type==="boolean")return s.widget===void 0}function st(s){return typeof s=="string"?s.replace(/\[\]/g,""):s}function me(s){if(typeof s=="string"){var a=s.split(".");return a.length===1?"#":(a.pop(),a.join("."))}return"#"}function f(s,a){if(a==="#")return s||{};if(typeof a=="string")return Object(le.get)(s,a)}function R(s){var a,E;if(s==="#")return{id:"#",dataIndex:[]};if(typeof s!="string")throw Error("path ".concat(s," is not a string!!! Something wrong here"));var z=/\[[0-9]+\]/g,A=s.match(z);return A?(a=s.replace(z,"[]"),E=A.map(de=>Number(de.substring(1,de.length-1)))):a=s,{id:a,dataIndex:E}}function he(s,a){if(s==="#")return s;if(typeof s!="string")throw Error("id ".concat(s," is not a string!!! Something wrong here"));var E=s;return Array.isArray(a)&&a.forEach(z=>{E=E.replace(/\[\]/,"[".concat(z,"]"))}),st(E)}function ge(s){return s.type==="array"&&s.items&&s.enum===void 0}function it(s){return s.type==="object"&&s.properties}function Xe(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",E=arguments.length>2?arguments[2]:void 0,z=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},A=nt(s),de=a;A.$id||(A.$id=de);var ee=[];it(A)&&Object.entries(A.properties).forEach(yt=>{var ct=Object(te.default)(yt,2),mt=ct[0],Ft=ct[1],Ne=ge(Ft)?mt+"[]":mt,pe=de==="#"?Ne:de+"."+Ne;ee.push(pe),Xe(Ft,pe,de,z)}),ge(A)&&Object.entries(A.items.properties).forEach(yt=>{var ct=Object(te.default)(yt,2),mt=ct[0],Ft=ct[1],Ne=ge(Ft)?mt+"[]":mt,pe=de==="#"?Ne:de+"."+Ne;ee.push(pe),Xe(Ft,pe,de,z)});var Ot=Array.isArray(A.rules)?[...A.rules]:[];return["boolean","function","string"].indexOf(typeof A.required)>-1&&Ot.push({required:A.required}),A.type&&(z[de]={parent:E,schema:A,children:ee,rules:Ot}),z}function Be(s,a){return s.indexOf(a)>-1}var Y=s=>Be(Object.prototype.toString.call(s),"Object"),nt=le.cloneDeep;function lt(s){return typeof s=="number"?!0:typeof s=="string"?!Number.isNaN(Number(s)):!1}function _e(s){return typeof s!="string"?!1:s.match(/^([0-9])*(%|px|rem|em)$/i)}function Wt(s,a){if(s===void 0&&a===void 0)return!0;if(s===void 0||a===void 0)return!1;if(s===null&&a===null)return!0;if(s===null||a===null)return!1;if(s.constructor!==a.constructor)return!1;if(s.constructor===Array){if(s.length!==a.length)return!1;for(var E=0;E<s.length;E++)if(s[E].constructor===Array||s[E].constructor===Object){if(!Wt(s[E],a[E]))return!1}else if(s[E]!==a[E])return!1}else if(s.constructor===Object){if(Object.keys(s).length!==Object.keys(a).length)return!1;for(var z=0;z<Object.keys(s).length;z++){var A=Object.keys(s)[z];if(s[A]&&typeof s[A]!="number"&&(s[A].constructor===Array||s[A].constructor===Object)){if(!Wt(s[A],a[A]))return!1}else if(s[A]!==a[A])return!1}}else if(s.constructor===String||s.constructor===Number)return s===a;return!0}function ue(s){var a;switch(s){case"date":a="YYYY-MM-DD";break;case"time":a="HH:mm:ss";break;case"dateTime":a="YYYY-MM-DD HH:mm:ss";break;case"week":a="YYYY-w";break;case"year":a="YYYY";break;case"quarter":a="YYYY-Q";break;case"month":a="YYYY-MM";break;default:a="YYYY-MM-DD"}return a}function P(s){return s.find((a,E,z)=>E!==z.findIndex(A=>JSON.stringify(a)===JSON.stringify(A)))}function O(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=h(s),z=E.map(ee=>{var Ot=ee.name,yt=ee.schema,ct=yt.type,mt=yt.enum,Ft=yt.properties,Ne=yt.items,pe=ct==="object"&&Ft,ke=ct==="array"&&Ne&&!mt,Et=Ot&&a[ee.name];if(!Et)return ee;if(ke){var wt=O(Ne,Et.items||{});return Object(r.a)(Object(r.a)({},ee),{},{schema:Object(r.a)(Object(r.a)(Object(r.a)({},ee.schema),Et),{},{items:wt})})}if(pe){var tn=O(ee.schema,Et);return Object(r.a)(Object(r.a)({},ee),{},{schema:tn})}return Object(r.a)(Object(r.a)({},ee),{},{schema:Object(r.a)(Object(r.a)({},ee.schema),Et)})}),A={};z.forEach(ee=>{A[ee.name]=ee.schema});var de={};return Object.keys(a).forEach(ee=>{typeof ee=="string"&&ee.substring(0,3)==="ui:"&&(de[ee]=a[ee])}),o(A)?Object(r.a)(Object(r.a)({},s),de):Object(r.a)(Object(r.a)(Object(r.a)({},s),de),{},{properties:A})}function o(s){return Object.keys(s).length===0}function h(s){if(!s)return[];var a=s.properties,E=s.items,z=s.type;if(!a&&!E)return[];var A={};return z==="object"&&(A=a),z==="array"&&(A=E),Object.keys(A).map(de=>({schema:A[de],name:de}))}function u(){}var K=s=>Function('"use strict";return ('+s+")")(),U=(s,a,E)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(E),`;
    const formData = `).concat(JSON.stringify(a),`;
    return (`).concat(s,")"))();function G(s){if(typeof s!="string")return!1;var a=/^{{(.+)}}$/,E=/^{{(function.+)}}$/,z=/^{{(.+=>.+)}}$/;return!!(typeof s=="string"&&s.match(a)&&!s.match(E)&&!s.match(z))}function _(s){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=arguments.length>2?arguments[2]:void 0,z=me(E),A=f(a,z)||{};if(typeof s=="string"){var de=s.substring(2,s.length-2),ee=/formData.([a-zA-Z0-9.$_\[\]]+)/g,Ot=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,yt=`
    return (`.concat(de.replaceAll(ee,(ct,mt)=>JSON.stringify(f(a,mt))).replaceAll(Ot,(ct,mt)=>JSON.stringify(f(A,mt))),")");try{return Function(yt)()}catch(ct){return s}}else return s}var ve=s=>Object.keys(s).some(a=>{var E=s[a];return typeof E=="string"?G(E):Y(E)?ve(E):!1}),xe=(s,a,E)=>{var z=nt(s);return Object.keys(z).forEach(A=>{var de=z[A];if(G(de)&&(z[A]=_(de,a,E)),typeof A=="string"&&A.toLowerCase().indexOf("props")>-1){var ee=z[A];Y(ee)&&Object.keys(ee).forEach(Ot=>{z[A][Ot]=_(ee[Ot],a,E)})}}),z};function oe(s){return Object.keys(s).some(a=>typeof s[a]=="function"?!0:typeof s[a]=="string"?G(s[a]):typeof s[a]=="object"?oe(s[a]):!1)}var Te=(s,a,E)=>{try{var z=E[a];if(z.schema[s]!==void 0)return z.schema[s];if(z&&z.parent){var A=E[z.parent].schema;return A[s]!==void 0?A[s]:Te(s,z.parent,E)}}catch(de){return}},Ze=()=>{var s=localStorage.getItem("SAVES");if(s)try{var a=JSON.parse(s),E=a.length;if(E)return E+1}catch(z){return 1}else return 1};function Ie(s){return Function('"use strict";return ('+s+")")()}function Pe(s){if(!s)return[];var a=s.properties,E=s.items,z=s.type;if(!a&&!E)return[];var A={};return z==="object"&&(A=a),z==="array"&&(A=E.properties),Object.keys(A).map(de=>({schema:A[de],name:de}))}var De=s=>{if(s&&s.propsSchema){var a=s.propsSchema,E=Object(k.a)(s,["propsSchema"]);return Object(r.a)({schema:a},E)}return s},ut=s=>{if(s&&s.schema){var a=s.schema,E=Object(k.a)(s,["schema"]);return Object(r.a)({propsSchema:a},E)}return s},Le=s=>{if(!!s){var a=s&&s.items&&s.items.enum,E=s&&s.enum;return a||E}},Ae=function(a){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(a)?a:E},vt=s=>{var a="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(s&&new RegExp(a).test(s))};function dt(s){var a=arguments.length<=1?void 0:arguments[1];return a&&a.target&&s in a.target?a.target[s]:a}var St=s=>{try{var a=s.split("."),E=a.slice(-1)[0];return E}catch(z){return console.error(z,"getKeyFromPath"),""}},Dt=(s,a)=>{if(typeof s=="boolean")return s?"yes":"no";if(it(a)||ge(a))return"-";if(Array.isArray(a.enum)&&Array.isArray(a.enumNames))try{return a.enumNames[a.enum.indexOf(s)]}catch(E){return s}return s},Jt=s=>{var a={};return Y(s)?Object.keys(s).forEach(E=>{a[E]=Jt(s[E])}):Array.isArray(s)?a=s.filter(E=>!!(E&&JSON.stringify(E)!=="{}")):a=s,a},$e=s=>{var a=s.schema,E=s.isRequired,z=E===void 0?!0:E,A={},de={};if(it(a))A.type="object",z&&a.required===!0&&(A.required=!0),A.fields={},Object.keys(a.properties).forEach(Ne=>{var pe=a.properties[Ne];Array.isArray(a.required)&&a.required.indexOf(Ne)>-1&&(pe.required=!0),A.fields[Ne]=$e({schema:pe,isRequired:z})});else if(ge(a))A.type="array",z&&a.required===!0&&(A.required=!0),A.defaultField={type:"object",fields:{}},Object.keys(a.items.properties).forEach(Ne=>{var pe=a.items.properties[Ne];Array.isArray(a.required)&&a.required.indexOf(Ne)>-1&&(pe.required=!0),A.defaultField.fields[Ne]=$e({schema:pe,isRequired:z})});else{var ee=Ne=>a.type?Object(r.a)(Object(r.a)({},Ne),{},{type:a.type}):Ne.pattern&&typeof Ne.pattern=="string"?Object(r.a)(Object(r.a)({},Ne),{},{pattern:new RegExp(Ne.pattern)}):Ne,Ot=a.required,yt=Object(k.a)(a,["required"]);switch(["type","pattern","min","max","len"].forEach(Ne=>{Object.keys(yt).indexOf(Ne)>-1&&(de[Ne]=yt[Ne])}),a.type){case"range":de.type="array";break;default:break}switch(a.format){case"email":case"url":de.type=a.format;break;default:break}var ct;if(z&&a.required===!0&&(ct={required:!0}),a.rules)if(Array.isArray(a.rules)){var mt=[];a.rules.forEach(Ne=>{Ne.required===!0?z&&(ct=Ne):mt.push(ee(Ne))}),A=[de,...mt]}else Y(a.rules)?A=[de,ee(a.rules)]:A=de;else A=de;if(ct&&(Array.isArray(A)?A.push(ct):Y(A)&&(A=[A,ct])),a.format==="image"){var Ft={validator:(Ne,pe)=>{var ke=/([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;return pe===void 0?!0:!!ke.exec(pe)||Se(pe)},message:"${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage"};Array.isArray(A)?A.push(Ft):Y(A)&&(A=[A,Ft])}}return A},at=s=>{var a=s.split(".");return a.map(E=>isNaN(Number(E))?E:"[".concat(E,"]")).reduce((E,z)=>z[0]==="["||E===""?E+z:E+"."+z,"")},ft=(s,a)=>{for(var E=s.split(".");E.length>0;){var z=E,A=Object(Z.a)(z),de=A[0],ee=A.slice(1);de=de.split("[")[0];var Ot=void 0;if(it(a)?Ot=a.properties[de]:ge(a)&&(Ot=a.items.properties[de]),E=ee,Ot)return ft(ee.join("."),Ot);var yt={required:!1};if(a.required===!0&&(yt.required=!0),a.rules){var ct=a.rules.find(mt=>mt.required);ct&&(yt=ct)}return yt}},Kt=s=>{var a={};return it(s)?Object.keys(s.properties).forEach(E=>{var z=s.properties[E],A=Kt(z);a[E]=A}):s.default!==void 0?a=s.default:s.type==="boolean"?a=!1:a=void 0,a},Vt=(s,a)=>{if(typeof s!="string")return"";if(!a)return s;if(s=s.replace("${title}",a.title),s=s.replace("${type}",a.format||a.type),a.min&&(s=s.replace("${min}",a.min)),a.max&&(s=s.replace("${max}",a.max)),a.rules){var E=a.rules.find(ee=>ee.min!==void 0);E&&(s=s.replace("${min}",E.min));var z=a.rules.find(ee=>ee.max!==void 0);z&&(s=s.replace("${max}",z.max));var A=a.rules.find(ee=>ee.len!==void 0);A&&(s=s.replace("${len}",A.len));var de=a.rules.find(ee=>ee.pattern!==void 0);de&&(s=s.replace("${pattern}",de.pattern))}return s},Bt=(s,a)=>{var E=nt(s);if(E=a(E),it(E)){var z=[];Array.isArray(E.required)&&(z=E.required,delete E.required),Object.keys(E.properties).forEach(A=>{var de=E.properties[A];z.indexOf(A)>-1&&(de.required=!0),E.properties[A]=Bt(de,a)})}else ge(E)&&Object.keys(E.items.properties).forEach(A=>{var de=E.items.properties[A];E.items.properties[A]=Bt(de,a)});return E},Qt=s=>Bt(s,nn),nn=s=>{try{var a=nt(s);if(a.rules=a.rules||[],a.props=a.props||{},a["ui:options"]&&(a.props=a["ui:options"],delete a["ui:options"]),a.pattern){var E={pattern:a.pattern};a.message&&a.message.pattern&&(E.message=a.message.pattern),a.rules.push(E),delete a.pattern,delete a.message}return a.minLength&&(a.rules.push({min:a.minLength}),delete a.minLength),a.maxLength&&(a.rules.push({max:a.maxLength}),a.props.maxLength=a.maxLength,delete a.maxLength),a.min&&(a.rules.push({min:a.min}),a.props.min=a.min,delete a.min),a.max&&(a.rules.push({max:a.max}),a.props.max=a.max,delete a.max),a.step&&(a.props.step=a.step,delete a.step),a.minItems&&(a.props.minItems=a.minItems,delete a.minItems),a.maxItems&&(a.props.maxItems=a.maxItems,delete a.maxItems),a["ui:className"]&&(a.className=a["ui:className"],delete a["ui:className"]),a["ui:hidden"]&&(a.hidden=a["ui:hidden"],delete a["ui:hidden"]),a["ui:readonly"]&&(a.readOnly=a["ui:readonly"],delete a["ui:readonly"]),a["ui:disabled"]&&(a.disabled=a["ui:disabled"],delete a["ui:disabled"]),a["ui:width"]&&(a.width=a["ui:width"],delete a["ui:width"]),a["ui:labelWidth"]&&(a.labelWidth=a["ui:labelWidth"],delete a["ui:labelWidth"]),a.rules&&a.rules.length===0&&delete a.rules,a}catch(z){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",z),s}},_t=(s,a)=>{var E=parseRootValue(s),z=replaceParseValue(E)},hn=s=>{if(typeof s!="string")return!1;var a=/^{{(function.+)}}$/,E=/^{{(.+=>.+)}}$/;return s.match(a)?s.match(a)[1]:s.match(E)?s.match(E)[1]:!1},en=function s(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},z={};return Y(a)?(a.theme&&E[a.theme]&&(z=Object(r.a)(Object(r.a)({},a),E[a.theme])),Object.keys(a).forEach(A=>{z[A]=s(a[A],E)})):z=a,z}},"8iYR":function(tt,I,e){"use strict";e.r(I),e.d(I,"basic",function(){return Z}),e.d(I,"expression",function(){return k});var Z={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},k={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},ARb9:function(tt,I,e){},D7jV:function(tt,I,e){"use strict";e.d(I,"a",function(){return M});var Z=e("6UYH"),k=e("fTA7"),r=e.n(k),te=e("bd+v"),le=e("LB4q"),b=e.n(le),Se=e("Hjg5"),q=e("rmht"),st=e.n(q),me=e("pJsf"),f=e("g4D/"),R=e.n(f),he=e("0Owb"),ge=e("PpiC"),it=e("LGkk"),Xe=e("rVaU"),Be=e.n(Xe),Y=e("k1fw"),nt=e("b+Mx"),lt=e("5Dct"),_e=e.n(lt),Wt=e("cUip"),ue=e("iJl9"),P=e.n(ue),O=e("q1tI"),o=e.n(O),h=e("Rn6r"),u=e("7t+U"),K=m=>{var S=m.schema,j=m.style,g=m.options,x;if(g&&Array.isArray(g))x=g;else{var N=S||{},w=N.enum,T=N.enumNames;x=Object(u.f)(w).map((X,B)=>{var $=T&&Array.isArray(T)?T[B]:X,V=typeof $=="string"&&$[0]==="<";return V&&($=o.a.createElement("span",{dangerouslySetInnerHTML:{__html:$}})),{label:$,value:X}})}return{options:x,mode:"multiple",style:Object(Y.a)({width:"100%",marginTop:5},j)}},U=Object(h.a)(K)(R.a.Group),G=U,_=e("ypy7"),ve=e.n(_),xe=e("rNQX");function oe(m){var S=m.schema.format,j=x=>{m.disabled||m.readonly||m.onChange(x.color)},g=x=>{m.onChange(x.target.value)};return o.a.createElement("div",{className:"fr-color-picker"},o.a.createElement(ve.a,{type:S,animation:"slide-up",color:m.value||"#ffffff",onChange:j}),m.readonly?o.a.createElement("span",null,m.value||"#ffffff"):o.a.createElement(P.a,{placeholder:"#ffffff",disabled:m.disabled,value:m.value,onChange:g}))}var Te=e("GBD3"),Ze=e("wXtC"),Ie=e.n(Ze),Pe=e("wd/R"),De=e.n(Pe),ut=m=>{var S=m.onChange,j=m.format,g=m.value,x=m.style,N=Object(ge.a)(m,["onChange","format","value","style"]),w=Object(u.j)(j),T=g||void 0;typeof T=="string"&&(j==="week"&&(T=T&&T.substring(0,T.length-1)),j==="quarter"&&(T=T.replace("Q",""))),T&&(T=De()(T,w));var X=($,V)=>{S(V)},B={value:T,style:Object(Y.a)({width:"100%"},x),onChange:X};return j==="dateTime"&&(B.showTime=!0),["week","month","quarter","year"].indexOf(j)>-1&&(B.picker=j),B=Object(Y.a)(Object(Y.a)({},B),N),o.a.createElement(Ie.a,B)},Le=e("mxgt"),Ae=e("4ZwL"),vt=e.n(Ae),dt=m=>{var S=m.onChange,j=m.format,g=m.value,x=m.style,N=Object(ge.a)(m,["onChange","format","value","style"]),w=Object(u.j)(j),T=g?De()(g,w):void 0,X=($,V)=>{S(V)},B=Object(Y.a)({value:T,style:Object(Y.a)({width:"100%"},x),onChange:X},N);return o.a.createElement(vt.a,B)},St=e("tJVT"),Dt=Ie.a.RangePicker,Jt=m=>{var S=m.onChange,j=m.format,g=m.value,x=m.style,N=Object(ge.a)(m,["onChange","format","value","style"]),w=Object(u.j)(j),T=Array.isArray(g)?g:[],X=Object(St.default)(T,2),B=X[0],$=X[1];typeof B=="string"&&typeof $=="string"&&(j==="week"&&(B=B.substring(0,B.length-1),$=$.substring(0,$.length-1)),j==="quarter"&&(B=B.replace("Q",""),$=$.replace("Q","")));var V=B&&$?[De()(B,w),De()($,w)]:[],Re=(Fe,Oe)=>{S(Oe)},ne={value:V,style:Object(Y.a)({width:"100%"},x),onChange:Re};return j==="dateTime"&&(ne.showTime=!0),["week","month","quarter","year"].indexOf(j)>-1&&(ne.picker=j),ne=Object(Y.a)(Object(Y.a)({},ne),N),o.a.createElement(Dt,ne)},$e=Jt,at=vt.a.RangePicker,ft=m=>{var S=m.onChange,j=m.format,g=m.value,x=m.style,N=Object(ge.a)(m,["onChange","format","value","style"]),w=Object(u.j)(j),T=Array.isArray(g)?g:[],X=Object(St.default)(T,2),B=X[0],$=X[1],V=B&&$?[De()(B,w),De()($,w)]:[],Re=(Fe,Oe)=>{S(Oe)},ne=Object(Y.a)({style:Object(Y.a)({width:"100%"},x),value:V,onChange:Re},N);return o.a.createElement(at,ne)},Kt=ft;function Vt(m){var S=m.children;return o.a.createElement("div",{className:"w-100"},S)}var Bt=e("7LYo"),Qt=e("5GXF"),nn=e.n(Qt),_t=e("2YYc"),hn=nn.a.Panel;function en(m){var S=m.children,j=m.title,g=Object(ge.a)(m,["children","title"]),x=Object(_t.d)(),N=x.theme,w=x.displayType;return j?N=="1"?o.a.createElement("div",{className:"w-100"},o.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},j),o.a.createElement("div",{style:{marginLeft:w=="row"?0:12}},S)):o.a.createElement("div",{className:"w-100"},o.a.createElement(nn.a,{defaultActiveKey:["1"]},o.a.createElement(hn,{header:o.a.createElement("div",{style:{fontSize:16,fontWeight:500}},j),key:"1",className:"fr-collapse-object"},S))):o.a.createElement("div",{className:"w-100"},S)}var s=e("ek7I"),a=e("FAat"),E=e.n(a),z=m=>{var S=m.schema,j=m.value,g=m.style,x=m.options,N=Object(ge.a)(m,["schema","value","style","options"]),w;if(x&&Array.isArray(x))w=x;else{var T=S||{},X=T.enum,B=T.enumNames;w=Object(u.f)(X).map((Re,ne)=>{var Fe=B&&Array.isArray(B)?B[ne]:Re,Oe=typeof Fe=="string"&&Fe[0]==="<";return Oe&&(Fe=o.a.createElement("span",{dangerouslySetInnerHTML:{__html:Fe}})),{label:Fe,value:Re}})}var $=Object(Y.a)({options:w,mode:"multiple",style:Object(Y.a)({width:"100%"},g)},N),V=Array.isArray(j)?j:void 0;return o.a.createElement(E.a,Object(he.default)({value:V},$))},A=z,de=e("7kJ1"),ee=e("qPIi"),Ot=e.n(ee),yt=m=>{var S=m.schema,j=m.style,g=m.options,x;if(g&&Array.isArray(g))x=g;else{var N=S||{},w=N.enum,T=N.enumNames;x=Object(u.f)(w).map((X,B)=>{var $=T&&Array.isArray(T)?T[B]:X,V=typeof $=="string"&&$[0]==="<";return V&&($=o.a.createElement("span",{dangerouslySetInnerHTML:{__html:$}})),{label:$,value:X}})}return{options:x,mode:"multiple",style:Object(Y.a)({width:"100%",minWidth:120,marginTop:5},j)}},ct=Object(h.a)(yt)(Ot.a.Group),mt=ct,Ft=m=>{var S=m.schema,j=m.style,g=m.options,x;if(g&&Array.isArray(g))x=g;else{var N=S||{},w=N.enum,T=N.enumNames;x=Object(u.f)(w).map((X,B)=>{var $=T&&Array.isArray(T)?T[B]:X,V=typeof $=="string"&&$[0]==="<";return V&&($=o.a.createElement("span",{dangerouslySetInnerHTML:{__html:$}})),{label:$,value:X}})}return{options:x,style:Object(Y.a)({width:"100%"},j)}},Ne=Object(h.a)(Ft)(E.a),pe=Ne,ke=e("tCGa"),Et=e("DH6M"),wt=e.n(Et),tn=m=>{var S=m.schema,j=S.max,g=S.min,x=S.step,N={};(j||j===0)&&(N={max:j}),(g||g===0)&&(N=Object(Y.a)(Object(Y.a)({},N),{},{min:g})),x&&(N=Object(Y.a)(Object(Y.a)({},N),{},{step:x}));var w=!1;m.options&&m.options.hideNumber&&(w=!0);var T=m.readonly?o.a.createElement("span",{style:{width:"90px"}},m.value===""?"-":m.value):o.a.createElement(_e.a,Object(he.default)({},m.options,N,{style:{width:"90px"},value:m.value,disabled:m.disabled,onChange:m.onChange}));return o.a.createElement("div",{className:"fr-slider"},o.a.createElement(wt.a,Object(he.default)({style:{flexGrow:1,marginRight:w?0:12}},N,{onChange:m.onChange,value:typeof m.value=="number"?m.value:g||0,disabled:m.disabled||m.readonly})),w?null:T)},En=tn,xn=e("VDQ/"),Sn=e("B8+X"),un=e.n(Sn),kt=e("MaXC"),an=e("4IMT"),Ut=e.n(an),In=e("tL+A"),Lt=e("QpBz"),Ln=e.n(Lt),$t=e("z7Xi");function Pn(m){var S=m.action,j=m.value,g=m.onChange,x=m.uploadProps,N=m.buttonProps,w=Object(Y.a)({name:"file",type:"file",action:S,onChange(B){B.file.status==="done"?(Ln.a.success("".concat(B.file.name," \u4E0A\u4F20\u6210\u529F")),g(B.file.response.url)):B.file.status==="error"&&Ln.a.error("".concat(B.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){g("")}},x),T={icon:o.a.createElement($t.a,null),children:"\u4E0A\u4F20"},X=Object(Y.a)(Object(Y.a)({},T),N);return o.a.createElement("div",{className:"fr-upload-mod"},o.a.createElement(un.a,Object(he.default)({},w,{className:"fr-upload-file"}),o.a.createElement(Ut.a,X)),j&&o.a.createElement("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var $n=e("/xgg"),D=e("aOJk"),se=e.n(D),je=e("mpQp"),Me="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Je=m=>{var S=m.value;return o.a.createElement(se.a,{content:o.a.createElement("img",{src:S||Me,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},o.a.createElement(je.a,null))};function qe(m){var S=m.value,j=Object(ge.a)(m,["value"]);return o.a.createElement(P.a,Object(he.default)({value:S,addonAfter:o.a.createElement(Je,{value:S})},j))}var Ue=m=>{var S=m.value,j=Object(u.u)(S);return j?o.a.createElement("a",{target:"_blank",href:S},"\u6D4B\u8BD5\u94FE\u63A5"):o.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function et(m){var S=m.value,j=Object(ge.a)(m,["value"]);return o.a.createElement(P.a,Object(he.default)({value:S,addonAfter:o.a.createElement(Ue,{value:S})},j))}function pt(m){var S=m.value,j=m.schema,g="-";if(j.type==="boolean")g=S===!0?"\u2714":"\u2718";else if(Array.isArray(j.enum)&&Array.isArray(j.enumNames)){var x=j.enum.indexOf(S);g=j.enumNames[x]||"-"}else typeof S=="number"?g=String(S):typeof S=="string"&&(g=S);return o.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:g}})}var Rt=P.a.TextArea,zt=Object(h.a)(m=>{var S=m.style;return{style:Object(Y.a)({width:"100%"},S)}})(_e.a),Ct=Object(h.a)(m=>{var S=m.style;return{style:Object(Y.a)({marginTop:5},S)}})(Be.a),gn=Object(h.a)(m=>{var S=m.autoSize;return{autoSize:S||{minRows:3}}})(Rt),v=m=>{var S=m.style,j=Object(ge.a)(m,["style"]);return o.a.createElement(R.a,Object(he.default)({style:Object(Y.a)({paddingTop:4,paddingBottom:4},S)},j))},C=m=>{var S=m.style,j=Object(ge.a)(m,["style"]);return o.a.createElement(st.a,Object(he.default)({style:Object(Y.a)({width:"100%"},S)},j))},J=m=>{var S=m.style,j=Object(ge.a)(m,["style"]);return o.a.createElement(b.a,Object(he.default)({style:Object(Y.a)({width:"100%"},S)},j))},M={input:P.a,checkbox:v,checkboxes:G,color:oe,date:ut,time:dt,dateRange:$e,timeRange:Kt,imageInput:qe,url:et,list:Vt,map:en,multiSelect:A,number:zt,radio:mt,select:pe,slider:En,switch:Ct,textarea:gn,upload:Pn,html:pt,rate:r.a,treeSelect:C,cascader:J},Q=Object.keys(M)},EE24:function(tt,I,e){"use strict";e.d(I,"c",function(){return Z}),e.d(I,"b",function(){return k}),e.d(I,"a",function(){return r});var Z={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:url":"url","string:dateTime":"date","string:date":"date","string:year":"date","string:month":"date","string:week":"date","string:quarter":"date","string:time":"time","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"timeRange","range:dateTime":"dateRange","range:date":"dateRange","range:year":"dateRange","range:month":"dateRange","range:week":"dateRange","range:quarter":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function k(te){var le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z,b=te.type,Se=te.format,q=te.enum,st=te.readOnly,me=te.widget,f=[];st&&(f.push("".concat(b,"?readOnly")),f.push("*?readOnly")),q&&(Array.isArray(q)&&(b==="array"&&q.length>6||b!=="array"&&q.length>2)?(f.push("".concat(b,"?enum_long")),f.push("*?enum_long")):(f.push("".concat(b,"?enum")),f.push("*?enum")));var R=me||Se;R&&f.push("".concat(b,":").concat(R)),f.push(b);var he="";return f.some(ge=>(he=le[ge],!!he)),he}var r={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}}},GYr9:function(tt,I,e){},JjdP:function(tt,I,e){"use strict";e.r(I);var Z=e("9og8"),k=e("WmNS"),r=e.n(k),te=e("LtsZ"),le=`import React, { useRef } from 'react';
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

export default Demo;`,b=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Se=`export const basic = {
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
};`,q=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,st=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,me=`import React, { Component } from 'react';
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

export default Root;`,f=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,R=`{
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
}`,he=`import { Select } from 'antd';
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

export default SearchInput;`,ge=`import React from 'react';
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

export default Demo;`,it=`/* PrismJS 1.16.0
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
}`,Xe=`.markdown p {
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
}`,Be=`import React from 'react';
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

export default Demo;`,Y=`import React, { useState, useRef } from 'react';
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

export default Demo;`,nt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,_e=`import React, { useState, useRef } from 'react';
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
          }
        ]}
      />
    </div>
  );
};

export default Demo;`,Wt=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,ue=I.default={"guide-card":{component:Object(te.dynamic)({loader:function(){var P=Object(Z.a)(r.a.mark(function o(){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(35),e.e(4)]).then(e.bind(null,"oLxE"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},o)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:le}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var O=e("3PQu"),o=e("K+nK"),h=o(e("tJVT")),u=O(e("q1tI")),K=e("36SN"),U=function(){var _=(0,u.useState)("Line"),ve=(0,h.default)(_,2),xe=ve[0],oe=ve[1],Te={Line:K.Line,Column:K.Column,PivotTable:K.PivotTable}[xe];return u.default.createElement("div",null,u.default.createElement("div",{style:{marginBottom:10}},u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return oe("Line")}},"\u6298\u7EBF\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return oe("Column")}},"\u67F1\u72B6\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return oe("PivotTable")}},"\u4EA4\u53C9\u8868")),u.default.createElement(Te,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return u.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=e("36SN"),u=function(){return o.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(G,_,ve){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(_).length]}},G),o.default.createElement("p",null,JSON.stringify(_)),o.default.createElement("p",null,JSON.stringify(ve)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return o.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var O=e("3PQu"),o=e("K+nK"),h=o(e("tJVT")),u=O(e("q1tI")),K=e("36SN"),U=function(){var _=(0,u.useState)(!1),ve=(0,h.default)(_,2),xe=ve[0],oe=ve[1];return u.default.createElement(u.default.Fragment,null,u.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",u.default.createElement("input",{type:"checkbox",value:xe,onChange:function(){return oe(!xe)}})),u.default.createElement(K.PivotTable,{leftExpandable:xe,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return u.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var O=e("3PQu"),o=e("K+nK");e("MaXC");var h=o(e("4IMT")),u=o(e("fWQN")),K=o(e("mtLc")),U=o(e("yKVA")),G=o(e("879j")),_=o(e("q1tI")),ve=e("gdfu"),xe=O(e("refC")),oe={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},Te=function(Ie){(0,U.default)(De,Ie);var Pe=(0,G.default)(De);function De(){return(0,u.default)(this,De),Pe.apply(this,arguments)}return(0,K.default)(De,[{key:"render",value:function(){var Le=this.props.form;return _.default.createElement("div",null,_.default.createElement(xe.default,{form:Le,schema:oe}),_.default.createElement(h.default,{type:"primary",onClick:Le.submit},"\u63D0\u4EA4"))}}]),De}(_.default.Component),Ze=(0,xe.connectForm)(Te);return _.default.createElement(Ze)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var O=e("3PQu"),o=e("K+nK");e("MaXC");var h=o(e("4IMT")),u=o(e("q1tI")),K=e("gdfu"),U=O(e("refC")),G={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},_=function(){var oe=(0,U.useForm)();return u.default.createElement("div",null,u.default.createElement(U.default,{form:oe,schema:G}),u.default.createElement(h.default,{type:"primary",onClick:oe.submit},"\u63D0\u4EA4"))},ve=_;return u.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var O=e("3PQu"),o=e("K+nK");e("MaXC");var h=o(e("4IMT")),u=o(e("q1tI")),K=e("gdfu"),U=O(e("refC")),G={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},_=function(){var oe=(0,U.useForm)(),Te=function(Ie,Pe){Pe.length>0?alert("errors:"+JSON.stringify(Pe)):alert("formData:"+JSON.stringify(Ie,null,2))};return u.default.createElement("div",null,u.default.createElement(U.default,{form:oe,schema:G,onFinish:Te}),u.default.createElement(h.default,{type:"primary",onClick:oe.submit},"\u63D0\u4EA4"))},ve=_;return u.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var O=e("3PQu"),o=e("K+nK"),h=o(e("q1tI")),u=O(e("refC")),K={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function U(){var _=(0,u.useForm)(),ve=function(oe,Te){Te.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(Te))):alert(JSON.stringify(oe))};return h.default.createElement("div",null,h.default.createElement(u.default,{form:_,schema:K,onFinish:ve}),h.default.createElement("button",{onClick:_.submit},"\u63D0\u4EA4"))}var G=U;return h.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("c2mQ")),u=e("8iYR"),K=function(){return o.default.createElement(h.default,{schema:u.basic})};return o.default.createElement(K)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:b},"json/schema.js":{import:"./json/schema",content:Se}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"test1-demo":{component:function(){var O=e("3PQu"),o=e("K+nK");e("MaXC");var h=o(e("4IMT")),u=o(e("q1tI")),K=e("gdfu"),U=O(e("refC")),G={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"boolean"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string",required:!0}}},_=function(){var oe=(0,U.useForm)(),Te=function(Ie,Pe){Pe.length>0?alert("errorFields:"+JSON.stringify(Pe)):alert("formData:"+JSON.stringify(Ie,null,2))};return u.default.createElement("div",null,u.default.createElement(U.default,{serverValidateConfig:{formId:"xxxx"},form:oe,schema:G,onFinish:Te}),u.default.createElement(h.default,{type:"primary",onClick:oe.submit},"\u63D0\u4EA4"))},ve=_;return u.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      type: 'boolean',
    },
    input3: {
      title: '\u7B80\u5355\u8F93\u5165\u68463',
      type: 'string',
      required: true,
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

  return (
    <div>
      <FormRender
        serverValidateConfig={{ formId: 'xxxx' }}
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},identifier:"test1-demo"}},"display-demo":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u=function(G){return{type:"object",displayType:G,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},K=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(h.default,{schema:u("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(h.default,{schema:u("column")}))};return o.default.createElement(K)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(){return o.default.createElement(h.default,{schema:u})};return o.default.createElement(K)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},K=function(){return o.default.createElement(h.default,{readOnly:!0,schema:u})};return o.default.createElement(K)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},K=function(){return o.default.createElement(h.default,{labelWidth:"200",schema:u})};return o.default.createElement(K)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},K=function(){return o.default.createElement(h.default,{schema:u})},U=K;return o.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},K=function(){return o.default.createElement(h.default,{schema:u})},U=K;return o.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},K=function(){return o.default.createElement(h.default,{schema:u})},U=K;return o.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},K=function(){return o.default.createElement(h.default,{schema:u})},U=K;return o.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:function(){var O=e("3PQu"),o=e("K+nK");e("lfLe");var h=o(e("Cp9S"));e("MaXC");var u=o(e("4IMT"));e("tL+A");var K=o(e("QpBz")),U=o(e("tJVT")),G=O(e("q1tI")),_=e("gdfu"),ve=O(e("refC")),xe=e("OH0R"),oe=function(){var Ie=(0,ve.useForm)(),Pe=(0,G.useState)({}),De=(0,U.default)(Pe,2),ut=De[0],Le=De[1],Ae=function(){(0,xe.fakeApi)("xxx/getForm").then(function(St){Ie.setValues({input1:"hello world",select1:"c"})})};(0,G.useEffect)(function(){(0,xe.delay)(1e3).then(function(dt){Le({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var vt=function(St,Dt){Dt.length>0?K.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Dt.map(function(Jt){return Jt.name}))):(0,xe.fakeApi)("xxx/submit",St).then(function(Jt){return K.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return G.default.createElement("div",{style:{width:"400px"}},G.default.createElement(ve.default,{form:Ie,schema:ut,onFinish:vt}),G.default.createElement(h.default,null,G.default.createElement(u.default,{onClick:Ae},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),G.default.createElement(u.default,{type:"primary",onClick:Ie.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},Te=oe;return G.default.createElement(Te)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:st}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var O=e("3PQu"),o=e("K+nK");e("MaXC");var h=o(e("4IMT"));e("tL+A");var u=o(e("QpBz")),K=o(e("q1tI")),U=e("gdfu"),G=O(e("refC")),_=e("OH0R"),ve={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},xe=function(){var Ze=(0,G.useForm)(),Ie=function(ut,Le){Le.length>0?u.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Le.map(function(Ae){return Ae.name}))):(0,_.fakeApi)("xxx/submit",ut).then(function(Ae){return u.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Pe=function(ut,Le){return(0,_.fakeApi)("xxx/validation").then(function(Ae){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return K.default.createElement("div",{style:{width:"400px"}},K.default.createElement(G.default,{form:Ze,schema:ve,beforeFinish:Pe,onFinish:Ie}),K.default.createElement(h.default,{type:"primary",onClick:Ze.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},oe=xe;return K.default.createElement(oe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:st}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var O=e("3PQu"),o=e("K+nK");e("lfLe");var h=o(e("Cp9S"));e("MaXC");var u=o(e("4IMT"));e("tL+A");var K=o(e("QpBz")),U=o(e("q1tI")),G=e("gdfu"),_=O(e("refC")),ve=e("OH0R"),xe={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},oe=function(){var Ie=(0,_.useForm)(),Pe=function(Le,Ae){Ae.length>0?K.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ae.map(function(vt){return vt.name}))):(0,ve.fakeApi)("xxx/submit",Le).then(function(vt){return K.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},De=function(){(0,ve.fakeApi)("xxx/getForm").then(function(Le){Ie.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return U.default.createElement("div",{style:{width:"400px"}},U.default.createElement(_.default,{form:Ie,schema:xe,onFinish:Pe}),U.default.createElement(h.default,null,U.default.createElement(u.default,{onClick:De},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),U.default.createElement(u.default,{type:"primary",onClick:Ie.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},Te=oe;return U.default.createElement(Te)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:st}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var O=e("3PQu"),o=e("K+nK"),h=o(e("q1tI")),u=O(e("refC")),K={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},U=function(){var ve=(0,u.useForm)();return h.default.createElement(u.default,{form:ve,schema:K})},G=U;return h.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("c2mQ")),u=e("8iYR"),K=function(){return o.default.createElement(h.default,{schema:u.expression})};return o.default.createElement(K)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:b},"json/schema.js":{import:"./json/schema",content:Se}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"watch-demo":{component:function(){var O=e("3PQu"),o=e("K+nK");e("MaXC");var h=o(e("4IMT")),u=o(e("q1tI")),K=e("gdfu"),U=O(e("refC")),G={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},_=function(){var oe=(0,U.useForm)(),Te=function(Pe,De){De.length>0?alert("errorFields:"+JSON.stringify(De)):alert("formData:"+JSON.stringify(Pe,null,2))},Ze={"#":function(Pe){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",Pe)},input1:function(Pe){Pe!==void 0&&oe.onItemChange("input2",Pe)}};return u.default.createElement("div",null,u.default.createElement(U.default,{form:oe,schema:G,onFinish:Te,watch:Ze}),u.default.createElement(h.default,{type:"primary",onClick:oe.submit},"\u63D0\u4EA4"))},ve=_;return u.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"widget-demo":{component:function(){var O=e("3PQu"),o=e("K+nK");e("MaXC");var h=o(e("4IMT"));e("cUip");var u=o(e("iJl9")),K=o(e("0Owb")),U=O(e("q1tI")),G=e("gdfu"),_=O(e("refC")),ve={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},xe=function(Ie){return U.default.createElement(u.default,(0,K.default)({addonBefore:"http://",addonAfter:".com"},Ie))},oe=function(){var Ie=(0,_.useForm)(),Pe=function(){};return U.default.createElement("div",null,U.default.createElement(_.default,{form:Ie,schema:ve,widgets:{site:xe},onFinish:function(ut){return alert(JSON.stringify(ut,null,2))}}),U.default.createElement(h.default,{type:"primary",onClick:Ie.submit},"\u63D0\u4EA4"))},Te=oe;return U.default.createElement(Te)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"docs-playground":{component:Object(te.dynamic)({loader:function(){var P=Object(Z.a)(r.a.mark(function o(){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(35),e.e(4)]).then(e.bind(null,"BASV"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},o)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:me},"main.js":{import:"./main",content:f},"json/simplest.json":{import:"./json/simplest.json",content:R},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:he},"monaco/index.js":{import:"./monaco",content:ge},"theme.css":{import:"./theme.css",content:it},"index.css":{import:"./index.css",content:Xe}},dependencies:{antd:{version:"4.15.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.1.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(te.dynamic)({loader:function(){var P=Object(Z.a)(r.a.mark(function o(){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(35),e.e(4)]).then(e.bind(null,"7ZP+"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},o)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{tsx:Be}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var O=e("K+nK"),o=O(e("q1tI")),h=e("P2DI"),u=[],K=0;K<6;K++)u.push({id:K.toString(),title:"\u6807\u9898".concat(K+1),created_at:new Date().getTime()});var U={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},G=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(oe,Te){return o.default.createElement("a",{onClick:function(){return alert(oe.title)}},"\u7F16\u8F91")}}],_=function(){var oe=function(){return{rows:u,total:u.length}};return o.default.createElement(h.TableProvider,null,o.default.createElement(h.Search,{schema:U,api:oe}),o.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:G,rowKey:"id"}))},ve=_;return o.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var O=e("K+nK"),o=O(e("q1tI")),h=O(e("nYSz")),u={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},K=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(h.default,{defaultValue:u}))},U=K;return o.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(te.dynamic)({loader:function(){var P=Object(Z.a)(r.a.mark(function o(){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(35),e.e(4)]).then(e.bind(null,"PPgD"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},o)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:Y}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(te.dynamic)({loader:function(){var P=Object(Z.a)(r.a.mark(function o(){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(35),e.e(4)]).then(e.bind(null,"jktF"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},o)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:nt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(te.dynamic)({loader:function(){var P=Object(Z.a)(r.a.mark(function o(){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(35),e.e(4)]).then(e.bind(null,"M63W"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},o)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:lt}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(te.dynamic)({loader:function(){var P=Object(Z.a)(r.a.mark(function o(){return r.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(35),e.e(4)]).then(e.bind(null,"TYW4"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},o)}));function O(){return P.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:_e},"index.less":{import:"./index.less",content:Wt}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.8"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},OH0R:function(tt,I,e){"use strict";e.r(I),e.d(I,"delay",function(){return Z}),e.d(I,"fakeApi",function(){return k});var Z=r=>new Promise(te=>setTimeout(te,r)),k=(r,te)=>(console.group("request:",r),console.log("params:",te),console.groupEnd(),Z(500))},OVFa:function(tt,I,e){},Oxum:function(tt,I,e){},P2DI:function(tt,I,e){"use strict";e.r(I),e.d(I,"Search",function(){return P}),e.d(I,"Table",function(){return Sn}),e.d(I,"TableProvider",function(){return $n}),e.d(I,"useTable",function(){return it});var Z=e("Saan"),k=e("vgIT"),r=e.n(k),te=e("0Owb"),le=e("k1fw"),b=e("tL+A"),Se=e("QpBz"),q=e.n(Se),st=e("PpiC"),me=e("tJVT"),f=e("q1tI"),R=e.n(f),he=Object(f.createContext)({}),ge=Object(f.createContext)({}),it=()=>Object(f.useContext)(he),Xe=()=>Object(f.useContext)(ge),Be=D=>{var se=Object(f.useReducer)((Ue,et)=>{var pt=et;typeof et=="function"&&(pt=pt(Ue)),et.action&&et.payload&&(pt=et.payload,typeof pt=="function"&&(pt=pt(Ue)));var Rt=Object(le.a)(Object(le.a)({},Ue),pt);return Rt},D),je=Object(me.default)(se,2),Me=je[0],Je=je[1],qe=(Ue,et)=>{Je(Ue)};return[Me,qe]},Y=e("MaXC"),nt=e("4IMT"),lt=e.n(nt),_e=e("refC"),Wt=D=>{var se=D.clearSearch,je=D.style,Me=je===void 0?{}:je,Je=D.className,qe=Je===void 0?"":Je,Ue=it(),et=Ue.tableState,pt=et===void 0?{}:et,Rt=Ue.refresh,zt=pt.loading;return R.a.createElement("div",{className:"flex justify-end w-100 ".concat(qe),style:Me},R.a.createElement(lt.a,{loading:zt,className:"mr",type:"primary",onClick:()=>Rt()},"\u67E5\u8BE2"),R.a.createElement(lt.a,{onClick:se},"\u91CD\u7F6E"))},ue=D=>{var se=Object(f.useState)({}),je=Object(me.default)(se,2),Me=je[0],Je=je[1],qe=it(),Ue=qe.tableState,et=qe.setTable,pt=qe.refresh,Rt=qe.syncMethods,zt=Ue.search,Ct=D.schema||D.propsSchema,gn=!0;!D.searchOnMount&&D.searchOnMount!==void 0&&(gn=!1);var v=Object(f.useRef)(),C=g=>{et({search:g})},J=g=>{try{var x=100,N=Object.values(g.properties).filter(B=>B.hidden?B.hidden!==!0:B["ui:hidden"]!==!0).map(B=>B.width?B.width:B["ui:width"]),w=N.lastIndexOf(void 0),T=N.slice(w+1).map(B=>Number(B.substring(0,B.length-1))),X=T.reduce((B,$)=>{var V=B+$;return V>100?Math.min(100,$):V},0);return x=100-X,x<10&&(x=100),x+"%"}catch(B){return console.error(B),"100%"}},M=()=>{var g=JSON.stringify(v.current)===JSON.stringify(Ct);if(Ct&&Ct.properties){if(Me&&g)return;try{var x=JSON.parse(JSON.stringify(Ct));x.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:J(Ct)},Je(x)}catch(N){console.error(N)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},Q=g=>{if(g.length){et({checkPassed:!1});return}et({checkPassed:!0})},m=Object(_e.useForm)({formData:zt,onChange:C,onValidate:Q}),S=()=>{m.setValues({})};if(Object(f.useEffect)(()=>{D.hidden||M()},[Ct]),Object(f.useEffect)(()=>{Rt({searchApi:D.api,syncOnSearch:D.onSearch,syncAfterSearch:D.afterSearch}),(D.hidden||gn)&&pt()},[]),D.hidden)return null;var j=typeof D.searchBtnRender=="function"?D.searchBtnRender(pt,S):[];return R.a.createElement("div",{className:"tr-search ".concat(D.className),style:D.style,onKeyDown:g=>{g.keyCode===13&&pt()}},R.a.createElement(_e.default,Object(te.default)({form:m},D,{schema:Me,displayType:"row",widgets:Object(le.a)({searchBtn:()=>D.searchBtnRender?R.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(j)&&j.map((g,x)=>R.a.createElement("div",{key:x.toString(),style:{marginLeft:8}},g))):R.a.createElement(Wt,{clearSearch:S,style:D.searchBtnStyle||{},className:D.searchBtnClassName||""})},D.widgets)})))},P=ue,O=e("7kJ1"),o=e("qPIi"),h=e.n(o),u=e("zmYW"),K=e("DtFj"),U=e.n(K),G=e("lfLe"),_=e("Cp9S"),ve=e.n(_),xe=e("Wgwc"),oe=e.n(xe);function Te(D,se){return D.indexOf(se)>-1}var Ze=D=>Te(Object.prototype.toString.call(D),"Object"),Ie=D=>typeof D!="string"?!1:D.indexOf("$api.")===0||D.indexOf("$func.")===0,Pe=D=>D.indexOf("$api.")===0?D.substring(5):D.indexOf("$func.")===0?D.substring(6):"",De=(D,se)=>{if(typeof D!="object"||D===null){if(Ie(D)){var je=Pe(D);return se&&se[je]&&typeof se[je]=="function"?se[je]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return D}if(Array.isArray(D)){var Me=[...D];return Me.map(Ue=>De(Ue,se))}var Je=Object(le.a)({},D),qe=Object.keys(Je);return qe.forEach(Ue=>{Je[Ue]=De(Je[Ue],se)}),Je},ut=D=>oe()(D).format("YYYY-MM-DD HH:mm"),Le=D=>oe()(D).format("YYYY-MM-DD"),Ae=D=>"\xA5".concat(D).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),vt=(D,se,je)=>{var Me=D;return typeof Me=="function"?Me=Me(se):je&&typeof je=="function"&&je(),Me},dt=e("NcKm"),St=e("lbd2"),Dt=e.n(St),Jt=e("93XW"),$e=e("d1El"),at=e.n($e),ft=(D,se,je)=>je.ellipsis?R.a.createElement(at.a,{title:Vt(se,je)},D):R.a.createElement("span",null,D),Kt=(D,se)=>se.copyable||se.ellipsis?R.a.createElement(Dt.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:se.copyable&&D?{text:D,onCopy:()=>q.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:se.ellipsis||!1},Vt(D,se)):Vt(D,se),Vt=(D,se)=>{var je=se.enum||void 0;return je&&je[D]?je[D]:D},Bt=D=>D?R.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},R.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},D)):null,Qt=(D,se)=>{if(se.valueType==="code")return Bt(D);var je=Kt(D,se),Me=ft(je,D,se);return Me},nn=e("WbIG"),_t=e("hw8t"),hn=e.n(_t);class en extends R.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(se){return{hasError:!0,errorInfo:se.message}}componentDidCatch(se,je){console.log(se,je)}render(){return this.state.hasError?R.a.createElement(hn.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var s=en,a=e("IehP"),E=e("3R4v"),z=D=>{var se=Object(f.useState)(!1),je=Object(me.default)(se,2),Me=je[0],Je=je[1],qe=D.fullScreen;return Me?R.a.createElement(at.a,{title:"\u9000\u51FA\u5168\u5C4F"},R.a.createElement(a.a,{onClick:()=>{document.exitFullscreen(),Je(!1)}})):R.a.createElement(at.a,{title:"\u5168\u5C4F"},R.a.createElement(E.a,{onClick:()=>{if(!document.fullscreenEnabled){q.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(Je(!0),qe().catch(Ue=>q.a.error(Ue.message)))}}))},A=z,de=e("G851"),ee=e("ZvzK"),Ot=e.n(ee),yt=e("PFYH"),ct=e("Jv8k"),mt=e.n(ct),Ft=e("9hi+"),Ne=()=>{var D=it(),se=D.tableState,je=D.setTable;return R.a.createElement(Ot.a,{overlay:R.a.createElement(mt.a,{selectedKeys:[se.tableSize],onClick:Me=>{var Je=Me.key;je({tableSize:Je})},style:{width:80}},R.a.createElement(mt.a.Item,{key:"default"},"\u9ED8\u8BA4"),R.a.createElement(mt.a.Item,{key:"middle"},"\u4E2D\u7B49"),R.a.createElement(mt.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},R.a.createElement(at.a,{title:"\u8868\u683C\u5BC6\u5EA6"},R.a.createElement(Ft.a,null)))},pe=Ne,ke=e("rLCj"),Et=()=>{var D=it(),se=D.refresh;return R.a.createElement(at.a,{title:"\u5237\u65B0"},R.a.createElement(ke.a,{onClick:()=>se()}))},wt=Et,tn=D=>R.a.createElement(ve.a,{size:14,style:{fontSize:16,cursor:"pointer"}},R.a.createElement(wt,null),R.a.createElement(pe,null),R.a.createElement(A,D)),En=tn,xn=D=>{var se,je,Me;D.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var Je=it(),qe=Je.tableState,Ue=Je.setTable,et=Je.doSearch,pt=qe.dataSource,Rt=qe.pagination,zt=qe.loading,Ct=qe.api,gn=qe.tableSize,v=Object(f.useRef)(null),C=($,V)=>{Ue({pagination:Object(le.a)(Object(le.a)({},Rt),{},{current:$,pageSize:V})}),!(!D.pageChangeWithRequest&&D.pageChangeWithRequest!==void 0)&&et({current:$,pageSize:V})},J=D.headerTitle,M=D.toolbarRender,Q=D.columns,m=D.style,S=m===void 0?{}:m,j=D.className,g=j===void 0?"":j,x=D.toolbarAction,N=x===void 0?!1:x;Q.map($=>{var V=$;if(V.render)return V;switch(V.valueType){case"date":V.render=Re=>Qt(Le(Re),V);break;case"dateTime":V.render=Re=>Qt(ut(Re),V);break;case"money":V.render=Re=>Qt(Ae(Re),V);break;case"code":V.render=Re=>Qt(Re,V);break;case"text":default:V.render=Re=>Qt(Re,V)}return V});var w=Object(le.a)(Object(le.a)({},D),{},{dataSource:pt,pagination:D.pagination===!1?!1:Object(le.a)(Object(le.a)({onChange:C,size:"small"},D.pagination),{},{pageSize:((se=D.pagination)===null||se===void 0?void 0:se.pageSize)||Rt.pageSize,total:((je=D.pagination)===null||je===void 0?void 0:je.total)||Rt.total,current:((Me=D.pagination)===null||Me===void 0?void 0:Me.current)||Rt.current}),loading:zt,size:gn}),T=typeof M=="function"?M():[],X=J||T&&T.length||Array.isArray(Ct),B=()=>{var $;return Promise.resolve(($=v.current)===null||$===void 0?void 0:$.requestFullscreen())};return Object(f.useEffect)(()=>{D.size&&Ue({tableSize:D.size})},[]),R.a.createElement(s,null,R.a.createElement("div",{className:"tr-table-wrapper ".concat(g),style:S,ref:v},R.a.createElement("div",{className:X?"tr-table-top":"tr-table-top-nohead"},R.a.createElement("div",{className:"tr-table-title"},R.a.createElement(un,{title:J})),R.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},R.a.createElement(ve.a,{align:"center"},R.a.createElement(ve.a,{size:8,style:{marginRight:8}},Array.isArray(T)&&T.map(($,V)=>R.a.createElement("div",{key:V.toString()},$))),N&&R.a.createElement(En,{fullScreen:B})))),R.a.createElement(U.a,w)))},Sn=xn,un=D=>{var se=D.title,je=it(),Me=je.tableState,Je=je.setTable,qe=je.doSearch,Ue=Me.tab,et=Me.api,pt=Ue||0,Rt=zt=>{var Ct=zt.target.value;Je({tab:Ct}),qe({tab:Ct})};return typeof et=="function"?R.a.createElement("div",{className:"tr-single-tab"},se):et&&Array.isArray(et)?et.length===1?R.a.createElement("div",{className:"tr-single-tab"},et[0].name):R.a.createElement(R.a.Fragment,null,R.a.createElement(h.a.Group,{onChange:Rt,value:pt},et.map((zt,Ct)=>R.a.createElement(h.a.Button,{key:Ct.toString(),value:Ct},zt.name))),se&&R.a.createElement("div",{className:"tr-extra-tab"},se)):R.a.createElement("div",{className:"tr-single-tab"})},kt=e("yDJ3"),an=e.n(kt),Ut=e("SA0R"),In=e.n(Ut),Lt=e("k/c8"),Ln=e("GYr9"),$t=D=>{var se=Be({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:10,total:1},tableSize:"default",checkPassed:!0}),je=Object(me.default)(se,2),Me=je[0],Je=je[1],qe=Object(f.useRef)(),Ue=Object(f.useRef)(),et=Object(f.useRef)(),pt=Me.pagination,Rt=Me.search,zt=Me.tab,Ct=Me.checkPassed,gn=it(),v=(m,S)=>{if(delete Rt.searchBtn,Ue.current&&Ue.current(Rt),!Ct)return;var j=m||{},g=j.current,x=j.pageSize,N=j.tab,w=Object(st.a)(j,["current","pageSize","tab"]),T=g||1,X=x||10,B=zt;["string","number"].indexOf(typeof N)>-1&&(B=N);var $={current:T,pageSize:X};if(typeof qe.current=="function")Re(qe.current);else if(Array.isArray(qe.current)){var V=an()(qe.current,"[".concat(B,"].api"));typeof V=="function"?Re(V):q.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else q.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function Re(ne){Je({loading:!0});var Fe=Object(le.a)(Object(le.a)(Object(le.a)(Object(le.a)({},Rt),S),w),$);Array.isArray(ne)&&(Fe=Object(le.a)(Object(le.a)({},Fe),{},{tab:N})),Promise.resolve(ne(Fe)).then(Oe=>{var Ye=Oe.rows,He=Oe.total,Ke=Oe.pageSize,re=Object(st.a)(Oe,["rows","total","pageSize"]);Je(Object(le.a)(Object(le.a)({loading:!1,dataSource:Ye},re),{},{pagination:Object(le.a)(Object(le.a)({},$),{},{total:He,pageSize:Ke||X})})),et.current(Object(le.a)({rows:Ye,total:He,pageSize:Ke},re))}).catch(Oe=>{Je({loading:!1})})}},C=(m,S)=>{var j=m&&m.stay||!1,g=m&&m.tab,x=S||{};v(Object(le.a)(Object(le.a)({},m),{},{current:j?pt.current:1,tab:g,pageSize:pt.pageSize}),x)},J=m=>{["string","number"].indexOf(typeof m)>-1?(Je({tab:m}),C({tab:m})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},M=m=>{var S=m.searchApi,j=m.syncOnSearch,g=m.syncAfterSearch;qe.current=S,Ue.current=j,et.current=g,Je({api:S})},Q={tableState:Me,setTable:Je,doSearch:v,refresh:C,changeTab:J,syncMethods:M};return Q},Pn=(D,se)=>{var je=$t(D);return Object(f.useImperativeHandle)(se,()=>je),R.a.createElement(r.a,{locale:In.a},R.a.createElement(he.Provider,Object(te.default)({},D,{value:je})))},$n=Object(f.forwardRef)(Pn)},Rn6r:function(tt,I,e){"use strict";e.d(I,"a",function(){return b}),e.d(I,"b",function(){return Se});var Z=e("k1fw"),k=e("PpiC"),r=e("q1tI"),te=e.n(r),le=e("7t+U"),b=(q,st)=>me=>f=>{var R=f.schema,he=Object(k.a)(f,["schema"]),ge=Object(Z.a)(Object(Z.a)({},R),st),it=typeof q=="function"?q(Object(Z.a)({schema:ge},he)):{},Xe=Object(Z.a)(Object(Z.a)({schema:ge},he),it),Be=Se(Xe);return te.a.createElement(me,Be)},Se=q=>{var st=q.onChange,me=q.value,f=q.defaultValue,R=q.schema,he=Object(k.a)(q,["onChange","value","defaultValue","schema"]),ge=Object(Z.a)({},R),it=ge||{},Xe=it.trigger,Be=it.valuePropName,Y={},nt="value",lt=me===void 0?f:me;Be&&typeof Be=="string"?(nt=Be,Y[Be]=lt):Y.value=lt;var _e=function(){for(var O=arguments.length,o=new Array(O),h=0;h<O;h++)o[h]=arguments[h];var u=Object(le.b)(nt,...o);st(u)};Xe&&typeof Xe=="string"?Y[Xe]=_e:Y.onChange=_e;var Wt={disabled:ge.disabled||ge["ui:disabled"],readOnly:ge.readOnly||ge["ui:readonly"],hidden:ge.hidden||ge["ui:hidden"]},ue=Object(Z.a)(Object(Z.a)(Object(Z.a)({},Y),{},{schema:ge},Wt),he);return ue}},RnhZ:function(tt,I,e){var Z={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function k(te){var le=r(te);return e(le)}function r(te){if(!e.o(Z,te)){var le=new Error("Cannot find module '"+te+"'");throw le.code="MODULE_NOT_FOUND",le}return Z[te]}k.keys=function(){return Object.keys(Z)},k.resolve=r,tt.exports=k,k.id="RnhZ"},SiV7:function(tt,I,e){},Zs1V:function(tt){tt.exports=JSON.parse("{}")},bQjt:function(tt,I,e){"use strict";e.r(I);var Z=e("0Owb"),k=e("q1tI"),r=e.n(k),te=e("refC"),le=b=>{var Se=Object(te.useForm)();return r.a.createElement(te.default,Object(Z.default)({form:Se},b))};I.default=le},c2mQ:function(tt,I,e){"use strict";e.r(I);var Z=e("q1tI"),k=e.n(Z),r=e("refC"),te=le=>{var b=le.schema,Se=Object(r.useForm)();return k.a.createElement("div",null,k.a.createElement(r.default,{form:Se,schema:b}))};I.default=te},cFvS:function(tt,I,e){},fK6R:function(tt,I,e){},gO06:function(tt,I,e){},iU8R:function(tt,I,e){},nYSz:function(tt,I,e){"use strict";e.r(I),e.d(I,"defaultSettings",function(){return Pe}),e.d(I,"defaultCommonSettings",function(){return xe}),e.d(I,"defaultGlobalSettings",function(){return De}),e.d(I,"fromFormily",function(){return Za}),e.d(I,"toFormily",function(){return qa}),e.d(I,"fromFormRender",function(){return ea}),e.d(I,"toFormRender",function(){return ta});var Z=e("0Owb"),k=e("q1tI"),r=e.n(k),te=e("kvAW"),le=e("qJlv"),b=e("k1fw"),Se=e("tJVT"),q=Object(k.createContext)(()=>{}),st=Object(k.createContext)({}),me=()=>Object(k.useContext)(q),f=()=>Object(k.useContext)(st),R=t=>{var n=Object(k.useReducer)((c,y)=>{var F=y;typeof y=="function"&&(F=F(c)),y.action&&y.payload&&(F=y.payload,typeof F=="function"&&(F=F(c)));var L=Object(b.a)(Object(b.a)({},c),F);return L},t),i=Object(Se.default)(n,2),d=i[0],l=i[1],p=(c,y)=>{l(c)};return[d,p]};function he(t,n,i){var d=Object(k.useRef)();Object(k.useEffect)(()=>{d.current=t},[t]);var l=Object(k.useRef)();return Object(k.useEffect)(()=>{if(!i)return;function p(){d&&d.current&&d.current()}if(p(),n!==null)return l.current=setInterval(p,n),()=>clearInterval(l.current)},[n,i]),()=>clearInterval(l.current)}function ge(t){var n=Object(k.useRef)();return Object(k.useEffect)(()=>{n.current=t},[t]),n.current}var it=t=>{var n=Object(k.useState)(!1),i=Object(Se.default)(n,2),d=i[0],l=i[1],p;try{p=localStorage.getItem(t)}catch(c){}return p||(l(!0),localStorage.setItem(t,JSON.stringify(!0))),d},Xe=()=>{var t=Object(k.useState)(!1),n=Object(Se.default)(t,2),i=n[0],d=n[1],l=()=>d(!i);return[i,l]},Be=t=>{var n=Object(k.useState)(t),i=Object(Se.default)(n,2),d=i[0],l=i[1];return[d,l]},Y=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",d=()=>{var L=localStorage.getItem(i);if(L)try{return JSON.parse(L)}catch(W){return n}return n},l=Object(k.useState)(d()),p=Object(Se.default)(l,2),c=p[0],y=p[1],F=L=>{y(L),localStorage.setItem(i,JSON.stringify(L))};return[c,F]},nt=e("fwXI"),lt=e("CC+v"),_e=e.n(lt),Wt=e("MaXC"),ue=e("4IMT"),P=e.n(ue),O=e("tL+A"),o=e("QpBz"),h=e.n(o),u=e("PpiC"),K=e("cUip"),U=e("iJl9"),G=e.n(U),_=e("WWur"),ve=e.n(_),xe={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string",widget:"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},width:{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string",widget:"percentSlider"},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number",widget:"slider",max:400,props:{hideNumber:!0}},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},readOnly:{title:"\u7F6E\u7070",type:"boolean"},required:{title:"\u5FC5\u586B",type:"boolean"}},oe=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean",widget:"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],widget:"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}}],Te=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime",props:{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number",widget:"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],Ze=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},props:{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],Ie=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date",props:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],Pe=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:oe,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:Te},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:Ze},{title:"\u6A21\u677F",widgets:Ie}],De={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"number",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],props:{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number",widget:"slider",max:300,props:{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],widget:"radio"}}},ut=e("gO06"),Le=e("4b23"),Ae=e.n(Le),vt=e("JBAE"),dt=e.n(vt);function St(t,n){return t.indexOf(n)>-1}var Dt=t=>St(Object.prototype.toString.call(t),"Object");function Jt(t){try{return JSON.parse(JSON.stringify(t))}catch(n){return t}}function $e(t){return typeof t=="number"?!0:typeof t=="string"?!Number.isNaN(Number(t)):!1}function at(t){return typeof t!="string"?!1:t.match(/^([0-9])*(%|px|rem|em)$/i)}function ft(t,n){if(t===void 0&&n===void 0)return!0;if(t===void 0||n===void 0)return!1;if(t===null&&n===null)return!0;if(t===null||n===null)return!1;if(t.constructor!==n.constructor)return!1;if(t.constructor===Array){if(t.length!==n.length)return!1;for(var i=0;i<t.length;i++)if(t[i].constructor===Array||t[i].constructor===Object){if(!ft(t[i],n[i]))return!1}else if(t[i]!==n[i])return!1}else if(t.constructor===Object){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(var d=0;d<Object.keys(t).length;d++){var l=Object.keys(t)[d];if(t[l]&&typeof t[l]!="number"&&(t[l].constructor===Array||t[l].constructor===Object)){if(!ft(t[l],n[l]))return!1}else if(t[l]!==n[l])return!1}}else if(t.constructor===String||t.constructor===Number)return t===n;return!0}function Kt(t){var n;switch(t){case"date":n="YYYY-MM-DD";break;case"time":n="HH:mm:ss";break;default:n="YYYY-MM-DD HH:mm:ss"}return n}function Vt(t){return t.find((n,i,d)=>i!==d.findIndex(l=>JSON.stringify(n)===JSON.stringify(l)))}function Bt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=nn(t),d=i.map(c=>{var y=c.name,F=c.schema,L=F.type,W=F.enum,Ee=F.properties,H=F.items,We=L==="object"&&Ee,we=L==="array"&&H&&!W,ye=y&&n[c.name];if(!ye)return c;if(we){var ie=Bt(H,ye.items||{});return Object(b.a)(Object(b.a)({},c),{},{schema:Object(b.a)(Object(b.a)(Object(b.a)({},c.schema),ye),{},{items:ie})})}if(We){var be=Bt(c.schema,ye);return Object(b.a)(Object(b.a)({},c),{},{schema:be})}return Object(b.a)(Object(b.a)({},c),{},{schema:Object(b.a)(Object(b.a)({},c.schema),ye)})}),l={};d.forEach(c=>{l[c.name]=c.schema});var p={};return Object.keys(n).forEach(c=>{typeof c=="string"&&c.substring(0,3)==="ui:"&&(p[c]=n[c])}),Qt(l)?Object(b.a)(Object(b.a)({},t),p):Object(b.a)(Object(b.a)(Object(b.a)({},t),p),{},{properties:l})}function Qt(t){return Object.keys(t).length===0}function nn(t){if(!t)return[];var n=t.properties,i=t.items,d=t.type;if(!n&&!i)return[];var l={};return d==="object"&&(l=n),d==="array"&&(l=i),Object.keys(l).map(p=>({schema:l[p],name:p}))}function _t(){}var hn=t=>Function('"use strict";return ('+t+")")(),en=(t,n,i)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(i),`;
    const formData = `).concat(JSON.stringify(n),`;
    return (`).concat(t,")"))();function s(t){return typeof t=="function"?!0:typeof t=="string"&&t.substring(0,1)==="@"?t.substring(1):typeof t=="string"&&t.substring(0,2)==="{{"&&t.substring(t.length-2,t.length)==="}}"?t.substring(2,t.length-2):!1}function a(t){return Object.keys(t).some(n=>typeof t[n]=="function"?!0:typeof t[n]=="string"?s(t[n]):typeof t[n]=="object"?a(t[n]):!1)}function E(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2?arguments[2]:void 0,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=dt()(t);l.$id||(l.$id=n);var p=[],c=l.type==="object"&&l.properties,y=l.type==="array"&&l.items&&l.items.properties;return c&&(Object.entries(l.properties).forEach(F=>{var L=Object(Se.default)(F,2),W=L[0],Ee=L[1],H=n+"/"+W;p.push(H),E(Ee,H,n,d)}),delete l.properties),y&&(Object.entries(l.items.properties).forEach(F=>{var L=Object(Se.default)(F,2),W=L[0],Ee=L[1],H=n+"/"+W;p.push(H),E(Ee,H,n,d)}),delete l.items.properties),l.type&&(d[n]={parent:i,schema:l,children:p}),d}var z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=n.split("/");return i[i.length-1]},A=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",d=n.split("/");return(typeof i=="string"||typeof i=="number")&&(d[d.length-1]=i),d.join("/")},de=t=>({parent:t.parent,schema:Object(b.a)({},t.schema),data:t.data,children:t.children});function ee(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d={},l=t[n],p=dt()(l);return p&&(d=Object(b.a)({},p.schema),i&&d.$id&&delete d.$id,p.children.length>0&&p.children.forEach(c=>{var y=c;if(!!t[c]){try{i&&(y=t[c].schema.$id)}catch(L){console.log("catch",L)}var F=z(y);d.type==="object"&&(d.properties||(d.properties={}),d.properties[F]=ee(t,c,i)),d.type==="array"&&d.items&&d.items.type==="object"&&(d.items.properties||(d.items.properties={}),d.items.properties[F]=ee(t,c,i))}})),d}var Ot=(t,n)=>{var i=E(n);return t in i&&delete i[t],ee(i)},yt=(t,n)=>{var i=Object(b.a)({},t);try{var d=t[n],l=n+Ae()(6),p=i[d.parent].children,c=p.findIndex(y=>y===n);return p.splice(c+1,0,l),i[l]=dt()(i[n]),i[l].schema.$id=l,[i,l]}catch(y){return console.error(y,"catcherror"),[t,n]}},ct=t=>{var n=t.id,i=t.key,d=t.schema,l=t.subSchema,p=E(d),c=A(n,i)+"$$"+Ae()(10);if(n in p){var y=p[n].parent;if(y&&y in p){var F=p[y].children;try{var L=F.findIndex(W=>W===n);F.splice(L+1,0,c)}catch(W){console.error(W.message)}}try{p[c]={parent:p[n].parent,schema:l,children:[]},p[c].schema.$id=c}catch(W){console.error(W.message)}}return[ee(p),c]},mt=t=>{var n=t.selected,i=t.name,d=t.schema,l=t.flatten,p=n||"#",c;if(p&&p[0]==="0"||p==="#"){var y=Object(b.a)({},l);try{var F=p.substring(1);c=F+"/"+i+"_"+Ae()(6),p==="#"&&(c="#/"+i+"_"+Ae()(6),F="#");var L=y[F].children;L.push(c);var W={parent:F,schema:Object(b.a)(Object(b.a)({},d),{},{$id:c}),data:void 0,children:[]};y[c]=W}catch(ae){console.error(ae,"catch")}return{newId:c,newFlatten:y}}var Ee=i+"_"+Ae()(6),H=n.split("/");H.pop(),H.push(Ee),c=H.join("/");var We=Object(b.a)({},l);try{var we=We[n],ye=We[we.parent].children,ie=ye.findIndex(ae=>ae===n);ye.splice(ie+1,0,c);var be={parent:we.parent,schema:Object(b.a)(Object(b.a)({},d),{},{$id:c}),data:void 0,children:[]};We[c]=be}catch(ae){console.error(ae)}return{newId:c,newFlatten:We}},Ft=t=>{var n=t.dragId,i=t.dragItem,d=t.dropId,l=t.position,p=t.flatten,c=d==="#"?"inside":l,y=Object(b.a)({},p);i&&(y[n]=i);var F=i||y[n],L=y[d],W=L;if(c!=="inside"){var Ee=L.parent;W=y[Ee]}if(d.indexOf(n)>-1)return[y,n];var H=n;try{var We=W.schema.$id;H=H.replace(F.parent,We)}catch(ae){}try{var we=y[F.parent],ye=we.children.indexOf(n);ye>-1&&we.children.splice(ye,1)}catch(ae){console.error(ae)}try{var ie=W.children||[],be=ie.indexOf(d);switch(c){case"up":ie.splice(be,0,n);break;case"down":ie.splice(be+1,0,n);break;default:ie.push(n);break}W.children=ie}catch(ae){console.error(ae)}return F.parent=W.$id,[y,H]},Ne=(t,n)=>!t||!n?{}:(Object.entries(t).forEach(i=>{var d=Object(Se.default)(i,2),l=d[0],p=d[1],c=En(n,l);t[l].data=c}),t),pe=t=>(n,i)=>{},ke=function t(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var d=n[i].data,l=Object.keys(n),p=l.filter(c=>{var y=i.split("/").length,F=c.split("/").length;return c.indexOf(i)>-1&&F>y});return p&&p.length>0&&(d===void 0&&["object","array"].indexOf(n[i].schema.type)>-1&&(d={}),p.forEach(c=>{var y=i.split("/").length,F=c.split("/").length;if(F===y+1){var L=t(n,c),W=z(c);d[W]=L}})),d}catch(c){return}},Et=(t,n,i)=>{try{var d=i[n];if(d.schema[t]!==void 0)return d.schema[t];if(d&&d.parent){var l=i[d.parent].schema;return l[t]!==void 0?l[t]:Et(t,d.parent,i)}}catch(p){return}};function wt(t){return Function('"use strict";return ('+t+")")()}function tn(t){if(!t)return[];var n=t.properties,i=t.items,d=t.type;if(!n&&!i)return[];var l={};return d==="object"&&(l=n),d==="array"&&(l=i.properties),Object.keys(l).map(p=>({schema:l[p],name:p}))}function En(t,n){n=xn(n,t);for(var i=0,d=n.length;t!=null&&i<d;){var l=Sn(n[i++]);t=l?t[l]:t}return i&&i==d?t:void 0}function xn(t,n){return Array.isArray(t)?t:an(t,n)?[t]:t.match(/([^\.\/\[\]#"']+)/g)}function Sn(t){if(typeof t=="string")return t.replace(/^#\/?/,"");var n="".concat(t);return n=="0"&&1/t==-INFINITY?"-0":n}var un=/#\/.+\//,kt=/^\w*$/;function an(t,n){if(Array.isArray(t))return!1;var i=typeof t;return i==="number"||i==="boolean"||t==null?!0:kt.test(t)||!un.test(t)||n!=null&&t in Object(n)}var Ut=t=>{if(t&&t.propsSchema){var n=t.propsSchema,i=Object(u.a)(t,["propsSchema"]);return Object(b.a)({schema:n},i)}return t},In=t=>{if(t&&t.schema){var n=t.schema,i=Object(u.a)(t,["schema"]);return Object(b.a)({propsSchema:n},i)}return t},Lt=e("CLjb"),Ln=e("fK6R"),$t=t=>{var n=t.text,i=t.name,d=t.schema,l=t.icon,p=Object(Lt.a)({item:{type:"box",dragItem:{parent:"#",schema:d,children:[]},$id:"#/".concat(i,"_").concat(Ae()(6))},end:(ye,ie)=>{var be=ie.getDropResult()},collect:ye=>({isDragging:ye.isDragging()})}),c=Object(Se.default)(p,2),y=c[0].isDragging,F=c[1],L=me(),W=f(),Ee=W.selected,H=W.flatten,We=W.onFlattenChange,we=()=>{var ye=mt({selected:Ee,name:i,schema:d,flatten:H}),ie=ye.newId,be=ye.newFlatten;We(be),L({selected:ie})};return r.a.createElement("div",{ref:F},r.a.createElement($n,{text:n,icon:l,onClick:we}))},Pn=$t,$n=t=>{var n=t.onClick,i=t.text,d=t.icon;return r.a.createElement("li",{className:"left-item",onClick:n},i)},D=t=>{var n=f(),i=n.userProps,d=i===void 0?{}:i,l=d.settings,p=Array.isArray(l)?l:Pe;return r.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(p)?p.map((c,y)=>c&&c.show===!1?null:r.a.createElement("div",{key:y},r.a.createElement("p",{className:"f6 b"},c.title),r.a.createElement("ul",{className:"pl0"},Array.isArray(c.widgets)?c.widgets.map((F,L)=>r.a.createElement(Pn,Object(Z.default)({key:L.toString()},F,t))):r.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):r.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},se=D,je=e("Z8Mf"),Me=e("j7zX"),Je=e.n(Me),qe=e("UESt"),Ue=e("refC"),et=e("D7jV");function pt(t){var n=t.onChange,i=t.value,d=t.disabled,l=t.readonly,p=t.options,c=y=>{try{var F=A(i,y.target.value);n(F)}catch(L){}};return r.a.createElement(G.a,Object(Z.default)({disabled:d||l},p,{onChange:c,value:z(i)}))}var Rt=e("tCGa"),zt=e("DH6M"),Ct=e.n(zt),gn=e("b+Mx"),v=e("5Dct"),C=e.n(v),J=t=>{var n=t.invalid?{borderColor:"#f5222d"}:{},i=t.schema,d=i.max,l=i.min,p=i.step,c={};(d||d===0)&&(c={max:d}),(l||l===0)&&(c=Object(b.a)(Object(b.a)({},c),{},{min:l})),p&&(c=Object(b.a)(Object(b.a)({},c),{},{step:p}));var y=!1;t.options&&t.options.hideNumber&&(y=!0);var F=H=>typeof H=="string"&&H.endsWith("%"),L=100;if(F(t.value))try{L=Number(t.value.split("%")[0]),Number.isNaN(L)&&(L=100)}catch(H){}var W=H=>{var We=H+"%";t.onChange(We)},Ee=t.readonly?r.a.createElement("span",{style:{width:"80px"}},t.value===""?"-":t.value+"%"):r.a.createElement(C.a,Object(Z.default)({},t.options,c,{style:Object(b.a)({width:"80px"},n),value:L,disabled:t.disabled,onChange:W,formatter:H=>"".concat(H,"%"),parser:H=>H.replace("%","")}));return r.a.createElement("div",{className:"fr-slider"},r.a.createElement(Ct.a,Object(Z.default)({style:{flexGrow:1,marginRight:y?0:12}},c,{onChange:W,max:100,tipFormatter:H=>H+"%",value:L||100,disabled:t.disabled||t.readonly})),y?null:Ee)},M=J,Q=e("EE24");function m(){var t=Object(Ue.useForm)(),n=f(),i=n.selected,d=n.flatten,l=n.onItemChange,p=n.userProps,c=p===void 0?{}:p,y=c.settings,F=c.commonSettings,L=Object(k.useState)({}),W=Object(Se.default)(L,2),Ee=W[0],H=W[1],We=Object(b.a)(Object(b.a)({},et.a),{},{idInput:pt,percentSlider:M}),we=(ie,be)=>{var ae=[];return ie.forEach(Ge=>{var ot=Ge.widgets,At=ot.filter(gt=>gt.widget).map(gt=>Object(b.a)(Object(b.a)({},gt),{},{setting:Object(b.a)(Object(b.a)({},be),gt.setting)}));ae=[...ae,...At]}),ae},ye=ie=>{if(i&&ie.$id)try{var be=d[i];be&&be.schema&&l(i,Object(b.a)(Object(b.a)({},be),{},{schema:ie}))}catch(ae){console.log(ae,"catch")}};return Object(k.useEffect)(()=>{var ie=Array.isArray(y)?[...y,{widgets:[...oe,...Te,...Ze]}]:Pe,be=Dt(F)?F:xe,ae=we(ie,be),Ge,ot;try{if(Ge=d[i],Ge&&(ot=Object(Q.b)(Ge.schema)),ot){var At=ae.find(Ht=>Ht.widget===ot)||{},gt=At.setting;H({type:"object",displayType:"column",showDescIcon:!1,properties:Object(b.a)({},gt)}),setTimeout(()=>{t.setValues(Ge.schema)})}}catch(Ht){console.log(Ht)}},[i]),r.a.createElement("div",{style:{paddingRight:24}},r.a.createElement(Ue.default,{form:t,schema:Ee,widgets:We,watch:{"#":ie=>ye(ie)}}))}function S(){var t=Object(Ue.useForm)(),n=f(),i=n.widgets,d=n.frProps,l=n.userProps,p=me(),c=l&&l.globalSettings?l.globalSettings:De,y=F=>{F.displayType&&p({frProps:F})};return Object(k.useEffect)(()=>{t.setValues(d)},[d]),r.a.createElement("div",{style:{paddingRight:24}},r.a.createElement(Ue.default,{form:t,schema:c,watch:{"#":F=>y(F)},widgets:i}))}var j=e("72KL"),g=Je.a.TabPane;function x(){var t=R({showRight:!0,showItemSettings:!1}),n=Object(Se.default)(t,2),i=n[0],d=n[1],l=f(),p=l.selected,c=i.showRight,y=i.showItemSettings,F=()=>d({showRight:!c}),L=()=>r.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:F},r.a.createElement(qe.a,{className:"f5"})),W=()=>r.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},r.a.createElement(L,null));return Object(k.useEffect)(()=>{p&&p[0]==="0"||p==="#"||!p?d({showItemSettings:!1}):d({showItemSettings:!0})},[p]),c?r.a.createElement("div",{className:"right-layout relative pl2"},r.a.createElement(L,null),r.a.createElement(Je.a,{defaultActiveKey:"1",onChange:()=>{}},y&&r.a.createElement(g,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},r.a.createElement(m,null)),r.a.createElement(g,{tab:"\u8868\u5355\u914D\u7F6E",key:y?"2":"1"},r.a.createElement(S,null)))):r.a.createElement(W,null)}var N=t=>{var n=t.children,i=n===void 0?[]:n,d=t.preview;return r.a.createElement(r.a.Fragment,null,i.map((l,p)=>{var c={id:l,preview:d};return r.a.createElement(Ke,Object(Z.default)({key:p.toString()},c))}))},w=N,T={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes","*?readonly":"text"};function X(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T,i=t.type,d=t.format,l=t.enum,p=t.readonly;if(t.widget)return t.widget;var c=[];p&&(c.push("".concat(i,"?readonly")),c.push("*?readonly")),l&&(c.push("".concat(i,"?enum")),c.push("*?enum")),d&&c.push("".concat(i,":").concat(d)),c.push(i);var y="";return c.some(F=>(y=n[F],!!y)),y}var B=t=>{var n=t.$id,i=t.item,d=t.labelClass,l=t.contentClass,p=t.isComplex,c=t.children,y=i.schema,F=i.data,L=f(),W=L.onItemChange,Ee=L.flatten,H=L.widgets,We=L.mapping,we=L.frProps,ye=we===void 0?{}:we,ie=ye.labelWidth,be=ye.displayType,ae=ye.showDescIcon,Ge=ye.showValidate,ot=y.type,At=y.title,gt=y.description,Ht=y.required,Nt=X(y,We),mn=y.widget;mn&&H[mn]&&(Nt=mn);var on=H[Nt];if(!on){var On=Object(b.a)({},y);delete On.widget,Nt=X(On,We),on=H[Nt]||"input"}var ln=Et("labelWidth",n,Ee)||ie,An=$e(ln)?Number(ln):at(ln)?ln:110,vn={width:An};Nt==="checkbox"?vn={flexGrow:1}:(p||be==="column")&&(vn={flexGrow:1});var Bn=fn=>{var Tt=Object(b.a)({},i);Tt.data=fn,W(n,Tt,"data")},Tn={};Nt==="checkbox"&&be==="row"&&(Tn.marginLeft=ln);var wn={disabled:y.disabled,readonly:y.readOnly,hidden:y.hidden,options:y.props,labelWidth:y.labelWidth,width:y.width};return r.a.createElement(r.a.Fragment,null,y.title?r.a.createElement("div",{className:d,style:vn},r.a.createElement("label",{className:"fr-label-title ".concat(Nt==="checkbox"||be==="column"?"no-colon":""),title:At},Ht&&r.a.createElement("span",{className:"fr-label-required"}," *"),r.a.createElement("span",{className:"".concat(p?"b":""," ").concat(be==="column"?"flex-none":"")},At),gt&&(ae?r.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":gt},r.a.createElement("i",{className:"fr-tooltip-icon"}),r.a.createElement("div",{className:"fr-tooltip-container"},r.a.createElement("i",{className:"fr-tooltip-triangle"}),gt)):r.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",gt,"\xA0)")),be!=="row"&&Ge&&r.a.createElement("span",{className:"fr-validate"},"validation"))):null,r.a.createElement("div",{className:l,style:Tn},r.a.createElement(on,Object(Z.default)({value:F,onChange:Bn,schema:y},wn,{children:c}))))},$=B,V=e("iU8R"),Re=e("dhM6"),ne=e("/MfK"),Fe=e("lfch"),Oe=e("aMZS");function Ye(t){var n=t.$id,i=t.item,d=t.inside,l=d===void 0?!1:d,p=t.children,c=t.style,y=Object(k.useState)(),F=Object(Se.default)(y,2),L=F[0],W=F[1],Ee=f(),H=Ee.flatten,We=Ee.onItemChange,we=Ee.onFlattenChange,ye=Ee.selected,ie=Ee.hovering,be=me(),ae=i.schema,Ge=ae.type,ot=Object(k.useRef)(null),At=Object(Lt.a)({item:{type:"box",$id:l?0+n:n},end:(It,Pt)=>{var qt=Pt.getDropResult()},collect:It=>({isDragging:It.isDragging()})}),gt=Object(Se.default)(At,3),Ht=gt[0].isDragging,Nt=gt[1],mn=gt[2],on=Object(Oe.a)({accept:"box",drop:(It,Pt)=>{var qt=Pt.didDrop();if(!qt){console.log(It.dragItem,"tems");var Qe=Ft({dragId:It.$id,dragItem:It.dragItem,dropId:n,position:L,flatten:H}),xt=Object(Se.default)(Qe,2),Gt=xt[0],pn=xt[1];we(Gt),be({selected:pn})}},hover:(It,Pt)=>{var qt=Pt.isOver({shallow:!0});if(qt){var Qe=ot.current&&ot.current.getBoundingClientRect(),xt=(Qe.bottom-Qe.top)/2,Gt=Pt.getSourceClientOffset(),pn=Gt.y-Qe.top;l?W("inside"):(pn<=xt&&W("up"),pn>xt&&W("down"))}},collect:It=>({isOver:It.isOver({shallow:!0}),canDrop:It.canDrop()})}),On=Object(Se.default)(on,2),ln=On[0],An=ln.canDrop,vn=ln.isOver,Bn=On[1],Tn=An&&vn;mn(Bn(ot));var wn=It=>{It.stopPropagation();var Pt=l?"0"+n:n;be({selected:Pt})},fn=It=>{It.stopPropagation();var Pt=Object(b.a)({},H),qt="#";try{var Qe=Pt[n].parent,xt=Pt[Qe].children,Gt=xt.indexOf(n);Gt>0?qt=xt[Gt-1]:qt=xt[1]||Qe}catch(pn){console.log("catch",pn)}delete Pt[n],we(Pt),be({selected:qt})},Tt=It=>{It.stopPropagation();var Pt=yt(H,n),qt=Object(Se.default)(Pt,2),Qe=qt[0],xt=qt[1];we(Qe),be({selected:xt})},Nn=()=>{},zn=()=>{},Mn=ye===n&&!l;ye&&ye[0]==="0"&&(Mn=ye.substring(1)===n&&l);var Xn=l?"0"+n:n,Mt={backgroundColor:ie===Xn?"#ecf5ff":"#fff",opacity:Ht?0:1};if(l?Mt=Object(b.a)(Object(b.a)({},Mt),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):n==="#"?Mt=Object(b.a)(Object(b.a)({},Mt),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):Ge==="object"&&(Mt=Object(b.a)(Object(b.a)({},Mt),{},{paddingTop:12})),Tn&&(l?Mt=Object(b.a)(Object(b.a)({},Mt),{},{boxShadow:"0 -3px 0 red"}):L==="up"?Mt=Object(b.a)(Object(b.a)({},Mt),{},{boxShadow:"0 -3px 0 red"}):L==="down"&&(Mt=Object(b.a)(Object(b.a)({},Mt),{},{boxShadow:"0 3px 0 red"}))),Mn&&(Mt=Object(b.a)(Object(b.a)({},Mt),{},{outline:"2px solid #409eff",borderColor:"#fff"})),c&&typeof c=="object"&&(Mt=Object(b.a)(Object(b.a)({},Mt),c)),n==="#"&&l)return p;var Kn=ae&&ae.$id&&z(ae.$id);return Kn==="#"&&(Kn=""),r.a.createElement("div",{ref:ot,style:Mt,className:"field-wrapper relative w-100",onClick:wn,onMouseEnter:Nn,onMouseLeave:zn},!l&&Mn&&n!=="#"&&r.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:Nt},r.a.createElement(Re.a,{style:{color:"#fff"}})),!l&&r.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},Kn),p,Mn&&!l&&n!=="#"&&r.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{className:"pointer",onClick:fn},r.a.createElement(ne.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),r.a.createElement("div",{className:"pointer",onClick:Tt},r.a.createElement(Fe.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var He=t=>{var n=t.id,i=n===void 0?"#":n,d=t.preview,l=d===void 0?!1:d,p=f(),c=p.flatten,y=p.frProps,F=y===void 0?{}:y,L=F.displayType,W=F.column,Ee=c[i];if(!Ee)return null;var H=Ee.schema,We=H.type==="object",we=H.type==="array"&&H.enum===void 0,ye=We||we,ie=H.width,be="fr-field w-100 ".concat(ye?"fr-field-complex":""),ae="fr-label mb2",Ge="fr-content",ot={};switch(!ye&&ie?ot={width:ie,paddingRight:"12px"}:!ye&&W>1&&(ot={width:"calc(100% /".concat(W,")"),paddingRight:"12px"}),H.type){case"object":H.title&&(be+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",ae+=" fr-label-object bg-white absolute ph2 top-upper left-1"),be+=" fr-field-object",H.title&&(Ge+=" ml3");break;case"array":H.title&&!H.enum&&(ae+=" mt2 mb3");break;case"boolean":H.widget!=="switch"&&(H.title&&(ae+=" ml2",ae=ae.replace("mb2","mb0")),Ge+=" flex items-center",be+=" flex items-center flex-row-reverse justify-end");break;default:L==="row"&&(ae=ae.replace("mb2","mb0"))}var At=H.type==="boolean"&&H.widget!=="switch";L==="row"&&!ye&&!At&&(be+=" flex items-center",ae+=" flex-shrink-0 fr-label-row",ae=ae.replace("mb2","mb0"),Ge+=" flex-grow-1 relative"),L==="row"&&At&&(Ge+=" flex justify-end pr2");var gt={$id:i,item:Ee,labelClass:ae,contentClass:Ge,isComplex:ye},Ht={children:Ee.children,preview:l},Nt=Ee.children&&Ee.children.length>0?r.a.createElement("ul",{className:"flex flex-wrap pl0"},r.a.createElement(w,Ht)):null;if(l)return r.a.createElement("div",{style:ot,className:be},r.a.createElement($,gt,(We||we)&&Nt));var mn=Object.keys(c).length<2;return mn?r.a.createElement(Ye,{style:ot,$id:i,item:Ee},r.a.createElement("div",{className:"".concat(be," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):r.a.createElement(Ye,{style:ot,$id:i,item:Ee},r.a.createElement("div",{className:be},r.a.createElement($,gt,(We||we)&&r.a.createElement(Ye,{$id:i,item:Ee,inside:!0},Nt||r.a.createElement("div",{className:"h2"})))))},Ke=He,re=G.a.TextArea;function Ce(t,n){var i=t.schema,d=t.formData,l=t.onChange,p=t.onSchemaChange,c=t.setGlobal,y=t.userProps,F=y===void 0?{}:y,L=t.frProps,W=L===void 0?{}:L,Ee=Object(u.a)(t,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),H=R({showModal:!1,showModal2:!1,schemaForImport:""}),We=Object(Se.default)(H,2),we=We[0],ye=We[1],ie=Ee.simple,be=ie===void 0?!0:ie,ae=Ee.preview,Ge=F.transformFrom,ot=F.transformTo,At=F.isNewVersion,gt=F.extraButtons,Ht=gt===void 0?[]:gt,Nt={};i&&(Nt=Bt(i.schema,i.uiSchema));var mn=E(Nt),on=Ne(mn,d),On=function(xt){var Gt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",pn=ee(xt),Wn=ke(xt);Gt==="schema"&&p&&p(pn),l(Wn)},ln=(Qe,xt,Gt)=>{on[Qe]=xt,On(on,Gt)},An=()=>ye({showModal:!we.showModal}),vn=()=>ye({showModal2:!we.showModal2}),Bn=()=>{c({schema:{schema:{type:"object"}},formData:{},selected:void 0})},Tn=Qe=>{ye({schemaForImport:Qe.target.value})},wn=()=>{try{var Qe=Ge(wt(we.schemaForImport)),xt=!0;Qe&&Qe.propsSchema&&(xt=!1);var Gt=Ut(Qe),pn=Gt.schema,Wn=Object(u.a)(Gt,["schema"]);c(Un=>({schema:{schema:pn},formData:{},selected:void 0,isNewVersion:xt,frProps:Object(b.a)(Object(b.a)({},Un.frProps),Wn)}))}catch(Un){h.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}vn()},fn={},Tt="";try{var Nn=ee(on,"#",!0);W&&W.column&&(Nn.column=W.column),W&&W.displayType&&(Nn.displayType=W.displayType),W&&W.showDescIcon&&(Nn.showDescIcon=W.showDescIcon),fn=ot(Object(b.a)({schema:Nn},W)),At||(fn=In(fn)),Tt=JSON.stringify(fn,null,2)}catch(Qe){}var zn=()=>{ve()(Tt),h.a.info("\u590D\u5236\u6210\u529F"),An()},Mn=()=>fn,Xn=Qe=>{try{var xt=Qe.schema,Gt=Qe.propsSchema,pn=Qe.uiSchema,Wn=Object(u.a)(Qe,["schema","propsSchema","uiSchema"]),Un={schema:xt||Gt},na=!0;!xt&&Gt&&(na=!1),c(Yn=>Object(b.a)(Object(b.a)({},Yn),{},{schema:Un,formData:{},selected:void 0,isNewVersion:na,frProps:Object(b.a)(Object(b.a)({},Yn.frProps),Wn)}))}catch(Yn){console.error(Yn)}},Mt=()=>{ve()(Tt)};Object(k.useImperativeHandle)(n,()=>({getValue:Mn,setValue:Xn,copyValue:Mt}));var Kn=Object(b.a)({flatten:on,onFlattenChange:On,onItemChange:ln,userProps:F,frProps:W},Ee),It=Array.isArray(Ht)?Ht:[],Pt=It.filter(Qe=>Qe===!0||Qe===!1),qt=It.filter(Qe=>Dt(Qe)&&Qe.text);return be?r.a.createElement(q.Provider,{value:c},r.a.createElement(st.Provider,{value:Kn},r.a.createElement(Ke,{preview:!0}))):r.a.createElement(q.Provider,{value:c},r.a.createElement(st.Provider,{value:Kn},r.a.createElement("div",{className:"fr-generator-container"},r.a.createElement(se,null),r.a.createElement("div",{className:"mid-layout pr2"},r.a.createElement("div",{className:"mv2 mh1"},Pt[0]!==!1&&r.a.createElement(P.a,{className:"mr2 mb1",onClick:()=>{c({preview:!ae,selected:"#"})}},ae?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),Pt[1]!==!1&&r.a.createElement(P.a,{className:"mr2",onClick:Bn},"\u6E05\u7A7A"),Pt[2]!==!1&&r.a.createElement(P.a,{className:"mr2",onClick:vn},"\u5BFC\u5165"),Pt[3]!==!1&&r.a.createElement(P.a,{type:"primary",className:"mr2",onClick:An},"\u5BFC\u51FAschema"),qt.map((Qe,xt)=>r.a.createElement(P.a,Object(Z.default)({key:xt.toString(),className:"mr2"},Qe),Qe.text||Qe.children))),r.a.createElement("div",{className:"dnd-container"},r.a.createElement("div",{style:{height:ae?33:0}}),r.a.createElement(Ke,{preview:ae}))),r.a.createElement(x,{globalProps:W}),r.a.createElement(_e.a,{visible:we.showModal,onOk:zn,onCancel:An,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},r.a.createElement("div",{className:"mt3"},r.a.createElement(re,{style:{fontSize:12},value:Tt,autoSize:{minRows:10,maxRows:30}}))),r.a.createElement(_e.a,{visible:we.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:wn,onCancel:vn},r.a.createElement("div",{className:"mt3"},r.a.createElement(re,{style:{fontSize:12},value:we.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:Tn,autoSize:{minRows:10,maxRows:30}}))))))}var rt=Object(k.forwardRef)(Ce);rt.defaultProps={labelWidth:120};var Ve=rt,ce=e("pJsf"),ze=e("g4D/"),bt=e.n(ze);function ht(t){var n=t.value,i=t.onChange,d=t.disabled,l=t.readonly,p=c=>{i(c.target.checked)};return r.a.createElement(bt.a,{disabled:d||l,onChange:p,checked:n})}function rn(t){var n=t.schema||{},i=n.enum,d=n.enumNames,l=t.value&&Array.isArray(t.value)?t.value:[];return r.a.createElement(bt.a.Group,{disabled:t.disabled||t.readonly,value:l,onChange:t.onChange},(i||[!0,!1]).map((p,c)=>r.a.createElement(bt.a,{value:p,key:c},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:d?d[c]:p}}))))}var Yt=e("ypy7"),dn=e.n(Yt),yn=e("rNQX");function Cn(t){var n=t.schema.format,i=l=>{t.disabled||t.readonly||t.onChange(l.color)},d=l=>{t.onChange(l.target.value)};return r.a.createElement("div",{className:"fr-color-picker"},r.a.createElement(dn.a,{type:n,animation:"slide-up",color:t.value?t.value:"#ffffff",onChange:i}),t.readonly?r.a.createElement("span",null,t.value||"#ffffff"):r.a.createElement(G.a,{placeholder:"#ffffff",disabled:t.disabled,value:t.value,onChange:d}))}var bn=e("GBD3"),Dn=e("wXtC"),jn=e.n(Dn),Rn=e("mxgt"),sn=e("4ZwL"),Xt=e.n(sn),Fn=e("wd/R"),Zt=e.n(Fn),fe=(t,n,i)=>{var d=t.invalid?{borderColor:"#f5222d"}:{},l=t.schema.format,p=l===void 0?"dateTime":l,c=Kt(p),y={};t.value?y.value=Zt()(t.value,c):y.value="";var F=t.description?{placeholder:t.description}:{},L=Object(b.a)(Object(b.a)(Object(b.a)(Object(b.a)({},F),t.options),y),{},{style:Object(b.a)({width:"100%"},d),disabled:t.disabled||t.readonly,onChange:n});return p==="dateTime"&&(L.showTime=!0),r.a.createElement(i,L)};function jt(t){var n=t.schema.format,i=n===void 0?"dateTime":n,d=(p,c)=>t.onChange(c),l=i==="time"?Xt.a:jn.a;return fe(t,d,l)}var cn=(t,n,i)=>{var d=t.schema.format,l=d===void 0?"dateTime":d,p=Kt(l),c={};t.value&&Array.isArray(t.value)&&t.value[0]&&t.value[1]&&(c={defaultValue:[Zt()(t.value[0],p),Zt()(t.value[1],p)]});var y=Object(b.a)(Object(b.a)(Object(b.a)({},t.options),c),{},{style:{width:"100%"},showTime:l==="dateTime",disabled:t.disabled||t.readonly,onChange:n});return r.a.createElement(i,y)},Hn=jn.a.RangePicker;function Gn(t){var n=(i,d)=>t.onChange(d);return cn(t,n,Hn)}var Qn=e("RBnf"),Vn=e("YJCA"),aa=t=>{var n=t.fold,i=n===void 0?!1:n,d=t.width,l=t.height,p=t.fill,c=t.style,y=c===void 0?{}:c,F=Object(u.a)(t,["fold","width","height","fill","style"]);return r.a.createElement("div",Object(Z.default)({style:y,className:i?"fold-icon":"fold-icon fold-icon-active"},F),r.a.createElement("svg",{viewBox:"0 0 1024 1024",width:d||18,height:l||18},r.a.createElement("path",{d:"M942.048 306.176c-12.288-12.288-31.328-13.024-43.008-2.016L529.056 674.112c-15.072 15.872-19.008 15.808-34.816 0L124.288 304.16c-11.68-11.04-30.72-10.272-43.008 2.016-12.512 12.512-13.216 32.032-1.6 43.68L490.624 760.8c5.056 5.056 11.648 7.328 18.464 7.744h5.152c6.816-.448 13.408-2.72 18.464-7.744l410.944-410.944c11.584-11.648 10.88-31.2-1.6-43.68z",fill:p||"#3c3c3c"})))},ra=aa,Zn=(t,n,i)=>{if(Array.isArray(n)&&Array.isArray(i)){if(typeof t=="string"||typeof t=="number"){var d=n.indexOf(t);return d>-1?i[d]:t}else if(Array.isArray(t)){var l=t.map(p=>Zn(t,n,i));return String(l)}return t}return t},sa=t=>{var n=t.schema,i=n===void 0?{}:n,d=t.value,l=d===void 0?[]:d,p=t.index,c=kn({schema:i,value:l,index:p}).filter(y=>y.title).slice(0,3);return r.a.createElement("ul",{className:"flex overflow-hidden",style:{paddingRight:45}},c.map((y,F)=>y.title?r.a.createElement("li",{className:"flex-auto mr2 overflow-hidden",key:F},r.a.createElement("span",{className:"fw5"},y.title,": "),r.a.createElement("span",null,y.text)):null))},ia=sa,kn=t=>{var n=t.schema,i=n===void 0?{}:n,d=t.value,l=d===void 0?[]:d,p=t.index,c=i.items,y=c===void 0?{}:c;if(y.type!=="object")return[];var F=y&&y.properties||{};F=Object.values(F);var L=l&&l.length&&l[p]||{},W=Object.values(L),Ee=F.map((H,We)=>{var we=H&&H.hidden;if(!we){var ye=H.title,ie=W[We];return ie===null&&ie===void 0?ie="":typeof ie=="boolean"?ie=ie?"\u662F":"\u5426":typeof ie!="string"&&typeof ie!="number"&&ie?ie="{\u590D\u6742\u7ED3\u6784}":H.enum&&H.enumNames&&(ie=Zn(ie,H.enum,H.enumNames)),{title:ye,text:ie}}});return Ee.filter(H=>!!H)},oa=Object(Vn.c)(()=>r.a.createElement("span",{className:"fr-move-icon"},":::"));class la extends r.a.Component{constructor(){super(...arguments);this.toggleFold=()=>{this.props.toggleFoldItem(this.props.name)}}componentDidMount(){var n=this.props,i=n.p,d=i===void 0?{}:i,l=n.name,p=n.fold,c=kn({schema:d.schema,value:d.value,index:l}),y=c&&c[0]&&c[0].text;y&&p!==0&&this.props.toggleFoldItem(l)}render(){var n=this.props,i=n.item,d=n.p,l=d===void 0?{}:d,p=n.name,c=n.fold,y=Object(b.a)(Object(b.a)({},l),{},{index:p}),F=l.options,L=F===void 0?{}:F,W=l.readonly,Ee=l.formData,H=l.value,We=L.foldable,we=L.hideDelete,ye=L.itemButtons,ie=s(we);ie&&(typeof ie=="string"?we=en(ie,Ee,H):typeof ie=="function"&&(we=ie(Ee,H)));var be=l.schema.items&&l.schema.items.type=="object",ae="fr-set ba b--black-10 hover-b--black-20 relative flex flex-column";return We&&c?ae+=" pv12":l.displayType==="row"&&(ae+=" pt44"),r.a.createElement("li",{className:ae},We&&c&&be?r.a.createElement(ia,y):i,We&&r.a.createElement(ra,{fold:c,onClick:this.toggleFold,style:{position:"absolute",top:12,right:32}}),!W&&r.a.createElement(oa,null),!(We&&c||we||W)&&r.a.createElement("div",{className:"self-end flex"},r.a.createElement(Jn,{type:"dashed",icon:"delete",onClick:()=>{var Ge=[...l.value];Ge.splice(p,1),l.onChange(Ge)}},"\u5220\u9664"),ye&&ye.length>0&&ye.map((Ge,ot)=>r.a.createElement(Jn,{key:ot.toString(),className:"ml2",type:"dashed",icon:Ge.icon,onClick:()=>{var At=[...l.value];if(typeof window[Ge.callback]=="function"){var gt=window[Ge.callback](At,p);l.onChange(gt)}}},Ge.text||""))))}}var ua=Object(Vn.b)(la);class da extends r.a.Component{constructor(){super(...arguments);this.handleAddClick=()=>{var n=this.props,i=n.p,d=n.addUnfoldItem,l=[...i.value];l.push(i.newItem),i.onChange(l),d()}}render(){var n=this.props,i=n.p,d=n.foldList,l=d===void 0?[]:d,p=n.toggleFoldItem,c=i||{},y=c.options,F=y===void 0?{}:y,L=c.extraButtons,W=L===void 0?{}:L,Ee=F.buttons||W||[],H=i.readonly,We=i.schema,we=We===void 0?{}:We,ye=we.maxItems,ie=i.value||[],be=ye?ye>ie.length:!0;return r.a.createElement("ul",{className:"pl0 ma0"},ie.map((ae,Ge)=>r.a.createElement(ua,{key:"item-".concat(Ge),index:Ge,name:Ge,p:i,fold:l[Ge],toggleFoldItem:p,item:i.children})),!H&&r.a.createElement("div",{className:"tr"},be&&r.a.createElement(Jn,{icon:"add",onClick:this.handleAddClick},"\u65B0\u589E"),Ee&&Ee.length>0&&Ee.map((ae,Ge)=>r.a.createElement(Jn,{className:"ml2",icon:ae.icon,key:Ge.toString(),onClick:()=>{if(ae.callback==="clearAll"){i.onChange([]);return}if(ae.callback==="copyLast"){var ot=[...i.value],At=ot.length-1;ot.push(At>-1?ot[At]:i.newItem),i.onChange(ot);return}if(typeof window[ae.callback]=="function"){var gt=[...i.value],Ht=Nt=>i.onChange(Nt);window[ae.callback](gt,Ht,i.newItem)}}},ae.text))))}}var ca=Object(Vn.a)(da);class qn extends r.a.Component{constructor(n){super(n);this.addUnfoldItem=()=>this.setState({foldList:[...this.state.foldList,0]}),this.toggleFoldItem=d=>{var l=this.state.foldList,p=l===void 0?[]:l;p[d]=!p[d],this.setState({foldList:p})},this.handleSort=d=>{var l=d.oldIndex,p=d.newIndex,c=this.props,y=c.onChange,F=c.value;y(Object(Vn.d)(F,l,p)),this.setState({foldList:Object(Vn.d)(this.state.foldList,l,p)})};var i=this.props.value.length||0;this.state={foldList:new Array(i).fill(!1)||[]}}render(){var n=this.state.foldList;return r.a.createElement(ca,{p:this.props,foldList:n,toggleFoldItem:this.toggleFoldItem,addUnfoldItem:this.addUnfoldItem,distance:6,useDragHandle:!0,helperClass:"fr-sort-help-class",shouldCancelStart:i=>i.toElement&&i.toElement.className==="fr-tooltip-container",onSortEnd:this.handleSort})}}qn.defaultProps={value:[]};function Jn(t){var n=t.icon,i=t.children,d=Object(u.a)(t,["icon","children"]),l;switch(n){case"add":l="PlusCircleOutlined";break;case"delete":l="DeleteOutlined";break;default:l=n;break}var p=Qn[l];return p?r.a.createElement(P.a,Object(Z.default)({},d,{icon:r.a.createElement(p,null)}),i):r.a.createElement(P.a,d,i)}var ma=qn,va=e("w5pM");function fa(t){return r.a.createElement("div",{className:"flex flex-column"},r.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},r.a.createElement("span",{className:"fr-move-icon f4"},":::"),t.children,r.a.createElement(P.a,{size:"small",className:"self-end",type:"dashed",icon:r.a.createElement(ne.a,null)},"\u5220\u9664")),r.a.createElement(P.a,{size:"small",className:"self-end",icon:r.a.createElement(va.a,null)},"\u6DFB\u52A0"))}function pa(t){var n=t.children;return r.a.createElement("div",{className:"w-100"},n)}var er=e("ek7I"),ha=e("FAat"),_n=e.n(ha),ga=t=>n=>{var i=t.Option,d=L=>n.onChange(L),l=n.invalid?{borderColor:"#f5222d"}:{},p=n.schema||{},c=p.enum,y=p.enumNames,F=n.value&&Array.isArray(n.value)?n.value:[];return r.a.createElement(t,Object(Z.default)({},n.options,{style:Object(b.a)({width:"100%"},l),mode:"multiple",disabled:n.disabled||n.readonly,value:F,onChange:d}),(c||[]).map((L,W)=>r.a.createElement(i,{value:L,key:W},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:y?y[W]:L}}))))},ya=ga(_n.a),ba=t=>n=>{var i=n.invalid?{borderColor:"#f5222d"}:{},d=n.schema,l=d.max,p=d.min,c=d.step,y={};return(l||l===0)&&(y={max:l}),(p||p===0)&&(y=Object(b.a)(Object(b.a)({},y),{},{min:p})),c&&(y=Object(b.a)(Object(b.a)({},y),{},{step:c})),r.a.createElement(t,Object(Z.default)({},y,{style:Object(b.a)({width:"100%"},i),disabled:n.disabled||n.readonly},n.options,{value:n.value,onChange:n.onChange}))},ja=ba(C.a),tr=e("7kJ1"),Oa=e("qPIi"),Ea=e.n(Oa),xa=(t,n,i)=>{var d=i.Group,l=t.schema||{},p=l.enum,c=l.enumNames;return r.a.createElement(d,{disabled:t.disabled||t.readonly,value:t.value,onChange:n},(p||[!0,!1]).map((y,F)=>r.a.createElement(i,{value:y,key:F},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:c?c[F]:y}}))))};function Sa(t){var n=i=>t.onChange(i.target.value);return xa(t,n,Ea.a)}var Ca=t=>n=>{var i=t.Option,d=F=>n.onChange(F),l=n.invalid?{borderColor:"#f5222d"}:{},p=n.schema||{},c=p.enum,y=p.enumNames;return r.a.createElement(t,Object(Z.default)({style:Object(b.a)({width:"100%"},l)},n.options,{disabled:n.disabled||n.readonly,value:n.value,onChange:d}),(c||[]).map((F,L)=>{var W=y?y[L]:F,Ee=typeof W=="string"&&W[0]==="<";return Ee&&(W=r.a.createElement("span",{dangerouslySetInnerHTML:{__html:W}})),r.a.createElement(i,{value:F,key:L},W)}))},Da=Ca(_n.a),Ra=t=>{var n=t.invalid?{borderColor:"#f5222d"}:{},i=t.schema,d=i.max,l=i.min,p=i.step,c={};(d||d===0)&&(c={max:d}),(l||l===0)&&(c=Object(b.a)(Object(b.a)({},c),{},{min:l})),p&&(c=Object(b.a)(Object(b.a)({},c),{},{step:p}));var y=!1;t.options&&t.options.hideNumber&&(y=!0);var F=t.readonly?r.a.createElement("span",{style:{width:"90px"}},t.value===""?"-":t.value):r.a.createElement(C.a,Object(Z.default)({},t.options,c,{style:Object(b.a)({width:"90px"},n),value:t.value,disabled:t.disabled,onChange:t.onChange}));return r.a.createElement("div",{className:"fr-slider"},r.a.createElement(Ct.a,Object(Z.default)({style:{flexGrow:1,marginRight:y?0:12}},c,{onChange:t.onChange,value:typeof t.value=="number"?t.value:l||0,disabled:t.disabled||t.readonly})),y?null:F)},Fa=Ra,nr=e("LGkk"),Aa=e("rVaU"),Na=e.n(Aa);function Ta(t){return r.a.createElement(Na.a,{disabled:t.disabled||t.readonly,onChange:n=>t.onChange(t.name,n),defaultChecked:t.value})}var Ia=G.a.TextArea;function Pa(t){var n=t.options,i=t.invalid,d=i?{borderColor:"#f5222d"}:{},l={rows:3},p=Object(b.a)(Object(b.a)({},l),n),c=y=>t.onChange(y.target.value);return r.a.createElement(Ia,Object(Z.default)({style:d,disabled:t.disabled||t.readonly,value:t.value},p,{onChange:c}))}var ar=e("VDQ/"),Ba=e("B8+X"),wa=e.n(Ba),La=e("z7Xi");function $a(t){var n={name:"file",action:t.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(i){i.file.status==="done"?(h.a.success("".concat(i.file.name," \u4E0A\u4F20\u6210\u529F")),t.onChange(i.file.response.url)):i.file.status==="error"&&h.a.error("".concat(i.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){t.onChange("")}};return r.a.createElement("div",{className:"fr-upload-mod"},r.a.createElement(wa.a,Object(Z.default)({},n,{className:"fr-upload-file"}),r.a.createElement(P.a,null,r.a.createElement(La.a,null)," \u4E0A\u4F20")),t.value&&r.a.createElement("a",{href:t.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var rr=e("/xgg"),Ma=e("aOJk"),Ka=e.n(Ma),Va=e("mpQp"),za="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Wa=(t,n)=>t==="image"?r.a.createElement("img",{src:n||za,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}):null,Ja=(t,n)=>t!=="image"?null:r.a.createElement(Ka.a,{content:Wa(t,n),className:"fr-preview",placement:"bottom"},r.a.createElement(Va.a,null));function Ua(t){var n=t.options,i=n===void 0?{}:n,d=t.invalid,l=d?{borderColor:"#f5222d"}:{},p=t.schema.format,c=p===void 0?"text":p,y=c==="image"?"text":c,F=L=>t.onChange(L.target.value);return r.a.createElement(G.a,Object(Z.default)({style:l},i,{value:t.value,type:y,disabled:t.disabled||t.readonly,addonAfter:i.addonAfter?i.addonAfter:Ja(c,t.value),onChange:F}))}var Ya={checkbox:ht,checkboxes:rn,color:Cn,date:jt,dateRange:Gn,input:Ua,list:ma,listEditor:fa,map:pa,multiSelect:ya,number:ja,radio:Sa,select:Da,slider:Fa,switch:Ta,textarea:Pa,upload:$a},ea=t=>t,ta=t=>t,sr=e("xwS/"),ir=e("4l2o"),or=e("k/c8"),Ha={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function Ga(t,n){var i=t.defaultValue,d=t.templates,l=t.submit,p=t.transformer,c=t.extraButtons,y=t.settings,F=t.commonSettings,L=t.globalSettings,W=t.widgets,Ee=W===void 0?{}:W,H=ea,We=ta;p&&(typeof p.from=="function"&&(H=p.from),typeof p.to=="function"&&(We=p.to));var we=n||Object(k.useRef)(),ye=R({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),ie=Object(Se.default)(ye,2),be=ie[0],ae=ie[1];Object(k.useEffect)(()=>{var Tt=i?H(i):Ha;Tt&&Tt.propsSchema?ae({isNewVersion:!1}):ae({isNewVersion:!0}),ae({schema:Ut(Tt),formData:Tt&&Tt.formData||{}})},[i]);var Ge=be.formData,ot=be.frProps,At=be.hovering,gt=be.isNewVersion,Ht=be.preview,Nt=be.schema,mn=be.selected,on=ot.displayType,On=on==="row",ln=Object(b.a)(Object(b.a)({},ot),{},{showDescIcon:On}),An=Tt=>{ae({formData:Tt}),t.onChange&&t.onChange(Tt)},vn=Tt=>{var Nn=Object(b.a)({},Nt);Nn.schema=Tt,ae({schema:Nn}),t.onSchemaChange&&setTimeout(()=>{var zn=we.current.getValue();t.onSchemaChange(zn)},0)},Bn=Object(b.a)(Object(b.a)({},T),{},{array:"listEditor"}),Tn={preview:Ht,simple:!1,mapping:Bn,widgets:Object(b.a)(Object(b.a)({},Ya),Ee),selected:mn,hovering:At},wn={templates:d,submit:l,transformFrom:H,transformTo:We,isNewVersion:gt,extraButtons:c,settings:y,commonSettings:F,globalSettings:L},fn=Object(b.a)(Object(b.a)({schema:Nt,formData:Ge,onChange:An,setGlobal:ae,onSchemaChange:vn},Tn),{},{userProps:wn,frProps:ln});return r.a.createElement(Ve,Object(Z.default)({ref:we},fn))}var Qa=Object(k.forwardRef)(Ga),lr=e("trko"),Xa=function t(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=n.type==="object"&&n.properties,l=n.type==="array"&&n.items&&n.items.properties,p=d||l;if(p){var L=tn(n);L.map(W=>{d&&(n.properties[W.name]=t(W.schema,n)),l&&(n.items.properties[W.name]=t(W.schema,n))})}else if(n.enum&&Array.isArray(n.enum)){var c=n.enum;if(Dt(c[0])&&c[0].label!==void 0&&c[0].value!==void 0){var y=c.map(W=>W.label),F=c.map(W=>W.value);n.enum=F,n.enumNames=y}}return n["x-component"]&&(n.widget=n["x-component"]),n["x-component-props"]&&(n.props=n["x-component-props"]),i&&n.required&&(i.required&&Array.isArray(i.required)?i.required.push(n.name):i.required=[n.name]),delete n.key,delete n.name,delete n.required,delete n["x-component"],delete n["x-component-props"],n},Za=t=>{var n=Xa(t);return{schema:n}},ka=function t(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,l=n.type==="object"&&n.properties,p=n.type==="array"&&n.items&&n.items.properties,c=l||p;if(c){var F=tn(n);F.map(L=>{l&&(n.properties[L.name]=t(L.schema,n,L.name)),p&&(n.items.properties[L.name]=t(L.schema,n,L.name))})}else if(n.enum&&Array.isArray(n.enum)&&n.enumNames&&Array.isArray(n.enumNames)){var y=n.enum.map((L,W)=>({value:L,label:n.enumNames[W]}));n.enum=y}return n.widget&&(n["x-component"]=n.widget),n.props&&(n["x-component-props"]=n.props),delete n.widget,delete n.props,delete n.enumNames,d&&(n.name=d,n.key=d),i&&d&&i.required&&Array.isArray(i.required)&&i.required.indexOf(d)>-1&&(n.required=!0),n},qa=t=>{var n=t.schema;return ka(n)},_a=(t,n)=>r.a.createElement(te.a,{backend:le.a},r.a.createElement(Qa,Object(Z.default)({ref:n},t))),ur=I.default=Object(k.forwardRef)(_a)},refC:function(tt,I,e){"use strict";e.r(I),e.d(I,"useForm",function(){return Ue}),e.d(I,"connectForm",function(){return et}),e.d(I,"createWidget",function(){return en.a});var Z=e("Saan"),k=e("vgIT"),r=e.n(k),te=e("0Owb"),le=e("tL+A"),b=e("QpBz"),Se=e.n(b),q=e("k1fw"),st=e("PpiC"),me=e("q1tI"),f=e.n(me),R=e("7t+U"),he=e("LvDl"),ge=e("2YYc"),it=e("SiV7"),Xe=e("MaXC"),Be=e("4IMT"),Y=e.n(Be),nt=e("eOfH"),lt=e("h0/l"),_e=e.n(lt);function Wt(v){var C=v.height,J=v.width,M=v.onClick;return f.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:J||C||256,height:C||J||256,onClick:M},f.a.createElement("path",{d:"M755.2 375.637333a42.666667 42.666667 0 0 0 0.554667-60.330666l-213.333334-217.173334a42.666667 42.666667 0 0 0-60.842666 0l-213.333334 217.173334a42.666667 42.666667 0 1 0 60.842667 59.818666L469.333333 232.32V896a42.666667 42.666667 0 1 0 85.333334 0V232.32l140.245333 142.805333a42.666667 42.666667 0 0 0 60.330667 0.512z",fill:"#1890ff"}))}function ue(v){var C=v.height,J=v.width,M=v.onClick;return f.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:J||C||256,height:C||J||256,onClick:M},f.a.createElement("path",{d:"M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z",fill:"#1890ff"}))}var P=e("/MfK"),O=e("lfch"),o=v=>{var C=v.schema,J=v.displayList,M=J===void 0?[]:J,Q=v.dataIndex,m=v.deleteItem,S=v.addItem,j=v.copyItem,g=v.getFieldsProps;return f.a.createElement("div",{className:"fr-list-1"},M.map((x,N)=>{var w=g(N);return w.displayType="inline",C.props&&C.props.hideTitle&&(w.hideTitle=!0),f.a.createElement("div",{key:N,style:{display:"flex"}},f.a.createElement(ee,w),f.a.createElement("div",{style:{marginTop:6}},f.a.createElement(_e.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>m(N),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},f.a.createElement(P.a,{style:{fontSize:17,marginLeft:8}})),f.a.createElement(O.a,{style:{fontSize:15,marginLeft:8},onClick:()=>j(N)})))}),f.a.createElement(Y.a,{style:{marginTop:M.length>0?0:8},type:"dashed",onClick:S},"\u65B0\u589E\u4E00\u6761"))},h=o,u=e("lfLe"),K=e("Cp9S"),U=e.n(K),G=v=>{var C=v.displayList,J=C===void 0?[]:C,M=v.deleteItem,Q=v.copyItem,m=v.addItem,S=v.displayType,j=v.getFieldsProps;return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"fr-card-list"},J.map((g,x)=>{var N=j(x);return N.displayType=S,f.a.createElement("div",{className:"fr-card-item ".concat(S==="row"?"fr-card-item-row":""),key:x},f.a.createElement("div",{className:"fr-card-index"},x+1),f.a.createElement(ee,N),f.a.createElement(U.a,{direction:"horizontal",className:"fr-card-toolbar"},f.a.createElement(_e.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>M(x),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},f.a.createElement(P.a,{style:{fontSize:17,marginLeft:8}})),f.a.createElement(O.a,{style:{fontSize:16,marginLeft:8},onClick:()=>Q(x)})))})),f.a.createElement(Y.a,{style:{marginTop:J.length>0?0:8},type:"dashed",onClick:m},"\u65B0\u589E\u4E00\u6761"))},_=G,ve=e("zmYW"),xe=e("DtFj"),oe=e.n(xe),Te=120,Ze=v=>{var C=v.displayList,J=C===void 0?[]:C,M=v.dataIndex,Q=v.children,m=v.deleteItem,S=v.addItem,j=v.flatten,g=J.map((N,w)=>({index:w})),x=Q.map(N=>{var w=j[N],T=w&&w.schema||{};return{dataIndex:N,title:T.required?f.a.createElement(f.a.Fragment,null,f.a.createElement("span",{className:"fr-label-required"}," *"),f.a.createElement("span",null,T.title)):T.title,width:Te,render:(X,B,$)=>{var V=[...M,B.index];return f.a.createElement(ee,{hideTitle:!0,displayType:"inline",key:$.toString(),id:N,dataIndex:V})}}});return x.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(N,w,T)=>f.a.createElement(_e.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>m(T),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},f.a.createElement("a",null,"\u5220\u9664"))}),f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"w-100 mb2 tr"},f.a.createElement(Y.a,{type:"primary",size:"small",onClick:S},"\u65B0\u589E")),f.a.createElement(oe.a,{scroll:{x:"max-content"},columns:x,dataSource:g,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Ie=Ze,Pe=e("dc+4"),De=e("Btem"),ut=e.n(De),Le=e("tJVT"),Ae=e("Oxum"),vt=v=>{var C=v.message,J=v.schema,M=v.hideValidation,Q="";return typeof C=="string"&&(Q=C),Array.isArray(C)&&(Q=C[0]||""),Q=Object(R.y)(Q,J),!Q&&M?null:f.a.createElement("div",{className:"error-message"},Q)},dt=vt,St=120,Dt=v=>{var C=v.displayList,J=C===void 0?[]:C,M=v.dataPath,Q=v.dataIndex,m=v.children,S=v.deleteItem,j=v.addItem,g=v.moveItemDown,x=v.moveItemUp,N=v.flatten,w=v.errorFields,T=v.getFieldsProps,X=Object(me.useRef)(-1),B=Object(ge.c)({showDrawer:!1}),$=Object(Le.default)(B,2),V=$[0],Re=$[1],ne=V.showDrawer,Fe=J.map((Ce,rt)=>Object(q.a)(Object(q.a)({},Ce),{},{$idx:rt})),Oe=m.map(Ce=>{var rt=N[Ce],Ve=rt&&rt.schema||{},ce=Object(R.k)(Ce);return{dataIndex:ce,title:Ve.required?f.a.createElement(f.a.Fragment,null,f.a.createElement("span",{className:"fr-label-required"}," *"),f.a.createElement("span",null,Ve.title)):Ve.title,width:St,render:(ze,bt)=>{var ht=Object(R.g)(Ce,[bt.$idx]),rn=w.find(Yt=>Yt.name==ht)||{};return f.a.createElement("div",null,f.a.createElement("div",null,Object(R.i)(ze,Ve)),rn.error&&f.a.createElement(dt,{message:rn.error,schema:Ve}))}}});Oe.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(Ce,rt,Ve)=>{var ce=Ce&&Ce.$idx||0;return f.a.createElement(U.a,null,f.a.createElement("a",{onClick:()=>He(ce)},"\u7F16\u8F91"),f.a.createElement(_e.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>S(ce),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},f.a.createElement("a",null,"\u5220\u9664")))}});var Ye=T(X.current),He=Ce=>{X.current=Ce,Re({showDrawer:!0})},Ke=()=>{X.current=-1,Re({showDrawer:!1})},re=()=>{var Ce=j();He(Ce)};return f.a.createElement(f.a.Fragment,null,f.a.createElement("div",{className:"w-100 mb2 tr"},f.a.createElement(Y.a,{type:"primary",size:"small",onClick:re},"\u65B0\u589E")),f.a.createElement(ut.a,{width:"600",title:"\u7F16\u8F91",placement:"right",onClose:Ke,visible:ne,destroyOnClose:!0},f.a.createElement("div",{className:"fr-container"},f.a.createElement(ee,Ye))),f.a.createElement(oe.a,{scroll:{x:"max-content"},columns:Oe,dataSource:Fe,rowClassName:(Ce,rt)=>{var Ve=Ce&&Ce.$idx,ce=w.find(ze=>ze.name.indexOf("".concat(M,"[").concat(Ve,"]"))>-1);return ce?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Jt=Dt,$e=v=>{var C=v.parentId,J=v.dataIndex,M=J===void 0?[]:J,Q=v.children,m=Q===void 0?[]:Q,S=v.errorFields,j=v.displayType,g=Object(ge.d)(),x=g.formData,N=g.flatten,w=g.onItemChange,T=g.removeErrorField,X="list";try{X=N[C].schema.widget}catch(ce){}var B=N[C],$=B&&B.schema,V=Object(R.g)(C,M),Re;typeof V=="string"&&(Re=Object(he.get)(x,V));var ne=Array.isArray(Re)?Re:[{}],Fe=()=>{var ce=[...ne,{}],ze=ce.length-1;return w(V,ce),ze},Oe=ce=>{var ze=ne[ce],bt=[...ne.slice(0,ce),ze,...ne.slice(ce)];w(V,bt)},Ye=ce=>{var ze=ne.filter((bt,ht)=>ht!==ce);w(V,ze),T("".concat(V,"[").concat(ce,"]"))},He=ce=>{if(ce!==0){var ze=ne[ce],bt=ne[ce-1],ht=ne;ht[ce]=bt,ht[ce-1]=ze,w(V,ht)}},Ke=ce=>{if(!(ce>=ne.length-1)){var ze=ne[ce],bt=ne[ce+1],ht=ne;ht[ce]=bt,ht[ce+1]=ze,w(V,ht)}},re={type:"object",properties:{},props:$.props||{},$id:$.$id},Ce={schema:re,children:m},rt=(ce,ze)=>Object(q.a)({_item:Ce,dataIndex:[...M,ce]},ze),Ve={displayList:ne,schema:$,dataPath:V,dataIndex:M,children:m,deleteItem:Ye,addItem:Fe,copyItem:Oe,moveItemDown:Ke,moveItemUp:He,listData:Re,flatten:N,errorFields:S,displayType:j,getFieldsProps:rt};switch(X){case"list0":return f.a.createElement(_,Ve);case"list1":return f.a.createElement(h,Ve);case"list2":return f.a.createElement(Ie,Ve);case"list3":return f.a.createElement(Jt,Ve);default:return f.a.createElement(_,Ve)}},at=$e,ft=v=>{var C=v.children,J=C===void 0?[]:C,M=v.dataIndex,Q=M===void 0?[]:M,m=v.displayType,S=v.hideTitle;return f.a.createElement(f.a.Fragment,null,J.map((j,g)=>{var x={displayType:m,id:j,dataIndex:Q,hideTitle:S};return f.a.createElement(ee,Object(te.default)({key:g.toString()},x))}))},Kt=ft;function Vt(v,C,J){var M=this,Q=Object(me.useRef)(null),m=Object(me.useRef)(0),S=Object(me.useRef)(null),j=Object(me.useRef)([]),g=Object(me.useRef)(),x=Object(me.useRef)(),N=Object(me.useRef)(v),w=Object(me.useRef)(!0);N.current=v;var T=!C&&C!==0&&typeof window!="undefined";if(typeof v!="function")throw new TypeError("Expected a function");C=+C||0,J=J||{};var X=!!J.leading,B="trailing"in J?!!J.trailing:!0,$="maxWait"in J,V=$?Math.max(+J.maxWait||0,C):null;Object(me.useEffect)(()=>(w.current=!0,()=>{w.current=!1}),[]);var Re=Object(me.useMemo)(()=>{var ne=re=>{var Ce=j.current,rt=g.current;return j.current=g.current=null,m.current=re,x.current=N.current.apply(rt,Ce)},Fe=(re,Ce)=>{T&&cancelAnimationFrame(S.current),S.current=T?requestAnimationFrame(re):setTimeout(re,Ce)},Oe=re=>{if(!w.current)return!1;var Ce=re-Q.current,rt=re-m.current;return!Q.current||Ce>=C||Ce<0||$&&rt>=V},Ye=re=>(S.current=null,B&&j.current?ne(re):(j.current=g.current=null,x.current)),He=()=>{var re=Date.now();if(Oe(re))return Ye(re);if(!!w.current){var Ce=re-Q.current,rt=re-m.current,Ve=C-Ce,ce=$?Math.min(Ve,V-rt):Ve;Fe(He,ce)}},Ke=function(){for(var Ce=Date.now(),rt=Oe(Ce),Ve=arguments.length,ce=new Array(Ve),ze=0;ze<Ve;ze++)ce[ze]=arguments[ze];if(j.current=ce,g.current=M,Q.current=Ce,rt){if(!S.current&&w.current)return m.current=Q.current,Fe(He,C),X?ne(Q.current):x.current;if($)return Fe(He,C),ne(Q.current)}return S.current||Fe(He,C),x.current};return Ke.cancel=()=>{S.current&&(T?cancelAnimationFrame(S.current):clearTimeout(S.current)),m.current=0,j.current=Q.current=g.current=S.current=null},Ke.isPending=()=>!!S.current,Ke.flush=()=>S.current?Ye(Date.now()):x.current,Ke},[X,$,C,V,B,T]);return Re}var Bt=Vt,Qt=v=>{var C=v.labelClass,J=v.labelStyle,M=v.schema,Q=v.displayType,m=Object(ge.d)(),S=m.displayType,j=m.readOnly,g=M.title,x=M.description,N=M.required,w=M.type,T=w==="object",X=M.displayType||Q||S||"column";return f.a.createElement("div",{className:C,style:J},f.a.createElement("label",{className:"fr-label-title ".concat(Object(R.n)(M,j)||X==="column"?"no-colon":""),title:g},N===!0&&f.a.createElement("span",{className:"fr-label-required"}," *"),f.a.createElement("span",{className:"".concat(T?"b":""," ").concat(X==="column"?"flex-none":"")},g),x&&(X==="row"?f.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":x},f.a.createElement("i",{className:"fr-tooltip-icon"}),f.a.createElement("div",{className:"fr-tooltip-container"},f.a.createElement("i",{className:"fr-tooltip-triangle"}),x)):X==="inline"?null:f.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",x,"\xA0)"))))},nn=Qt,_t=e("EE24"),hn=e("D7jV"),en=e("Rn6r"),s=v=>{var C=v.schema,J=v.onChange,M=v.value,Q=v.children,m=v.onItemChange,S=v.formData,j=v.getValue,g=v.readOnly,x=v.dataPath,N=v.dataIndex,w=Object(ge.e)(),T=w.widgets,X=w.mapping,B=Object(_t.b)(C,X);g&&["object","array"].indexOf(C.type)===-1&&(B="html");var $=T[B],V=C.widget||C["ui:widget"];V&&T[V]&&($=T[V],B=V);var Re=_t.a[B],ne=Object(q.a)({schema:Object(q.a)(Object(q.a)({},C),Re),onChange:J,value:M,children:Q},C.props);["title","placeholder","disabled","format"].forEach(Oe=>{C[Oe]&&(ne[Oe]=C[Oe])}),C.default!==void 0&&(ne.defaultValue=C.default),C.props&&(ne=Object(q.a)(Object(q.a)({},ne),C.props)),ne.addons={onItemChange:m,setValue:m,getValue:j,formData:S,dataPath:x,dataIndex:N};var Fe=Object(en.b)(ne);return f.a.createElement($,Fe)},a=(v,C)=>v.schema&&v.schema.$id==="#"||v.schema&&v.schema.type==="object"?!1:v.value===C.value&&JSON.stringify(v.schema)===JSON.stringify(C.schema),E=f.a.memo(s,a),z=v=>{var C=v.$id,J=v.dataIndex,M=v.item,Q=v.labelClass,m=v.labelStyle,S=v.contentClass,j=v.hasChildren,g=v.children,x=v.errorFields,N=x===void 0?[]:x,w=v.hideTitle,T=v.displayType,X=M.schema,B=Object(ge.d)(),$=B.onItemChange,V=B.formData,Re=B.isEditing,ne=B.setEditing,Fe=B.touchKey,Oe=B.debounceInput,Ye=B.readOnly,He=Object(me.useRef)(),Ke=Object(R.g)(C,J),re=Object(R.a)(X);Re&&He.current?re=He.current:(Object(R.x)(re)&&(re=Object(R.v)(re,V,Ke)),He.current=re);var Ce=N.find(Xt=>Xt.name===Ke),rt=Ce&&Ce.error,Ve=Array.isArray(rt)&&rt.length>0,ce=Ve?S+" ant-form-item-has-error":S,ze=Object(R.m)(V,Ke),bt=Xt=>{if(Xt==="#"||!Xt)return V;if(typeof Xt=="string")return Object(R.m)(V,Xt);console.error("path has to be a string")},ht={},rn=Bt(ne,350),Yt=Ye!==void 0?Ye:re.readOnly,dn=Xt=>{Fe(Ke),Oe&&(ne(!0),rn(!1)),typeof Ke=="string"&&$(Ke,Xt)},yn={labelClass:Q,labelStyle:m,schema:re,displayType:T},Cn=T==="inline"||Yt===!0,bn={message:rt,schema:re,displayType:T,hideValidation:Cn},Dn={className:Q,style:m},jn=!w&&!!re.title;w&&re.title&&(re.placeholder=re.placeholder||re.title);var Rn={schema:re,readOnly:Yt,onChange:dn,getValue:bt,formData:V,value:ze,onItemChange:$,dataIndex:J,dataPath:Ke};if(Rn.children=j?g:Object(R.n)(re,Yt)?re.title:null,re.hidden)return null;if(Object(R.n)(re,Yt))return f.a.createElement(f.a.Fragment,null,jn&&f.a.createElement("div",Dn),f.a.createElement("div",{className:ce,style:ht},f.a.createElement(E,Rn),f.a.createElement(dt,bn)));var sn=f.a.createElement(nn,yn);return Object(R.r)(re)?(sn=f.a.createElement("div",{style:{display:"flex"}},sn,f.a.createElement(dt,bn)),f.a.createElement("div",{className:ce,style:ht},f.a.createElement(E,Object(te.default)({},Rn,{message:rt,title:jn?sn:void 0})))):f.a.createElement(f.a.Fragment,null,jn&&sn,f.a.createElement("div",{className:"".concat(ce," ").concat(w?"fr-content-no-title":""),style:ht},f.a.createElement(E,Rn),f.a.createElement(dt,bn)))},A=z,de=v=>{var C=v.id,J=C===void 0?"#":C,M=v._item,Q=v.dataIndex,m=Q===void 0?[]:Q,S=v.hideTitle,j=S===void 0?!1:S,g=v.hideValidation,x=g===void 0?!1:g,N=v.debugCss,w=Object(st.a)(v,["id","_item","dataIndex","hideTitle","hideValidation","debugCss"]),T=Object(ge.d)(),X=T.displayType,B=T.column,$=T.flatten,V=T.errorFields,Re=T.labelWidth,ne=T.readOnly,Fe=M||$[J];if(!Fe)return null;var Oe=Fe.schema,Ye=Oe.displayType||w.displayType||X||"column",He=Oe.type==="object",Ke=Object(R.p)(Oe),re=He||Ke,Ce=Object(R.n)(Oe,ne),rt=Oe.width||Oe["ui:width"],Ve="fr-field ".concat(Ye==="inline"?"":"w-100"," flex"),ce="fr-label",ze="fr-content";switch(Oe.type){case"object":He&&(Oe.title&&(ce+=" fr-label-object"),Ve+=" fr-field-object");break;case"array":Ke&&(Oe.title&&(ce+=" fr-label-list"),Ve+=" fr-field-column");break;case"boolean":Ce&&(ze+=" fr-content-column",Ve+=" flex ".concat(Ye==="column"?"flex-column":""));break;default:}if(!re&&!Ce)if(Ye==="column")switch(Ve+=" flex-column",ce+=" fr-label-column",ze+=" fr-content-column",Oe.type){case"object":break;case"array":Oe.title&&!Oe.enum;break;case"boolean":break;default:}else Ye==="row"&&(Ve+="",ce+=" fr-label-row",ze+=" fr-content-row",!He&&!Ce&&(ce+=" flex-shrink-0 fr-label-row",ze+=" flex-grow-1 relative"));var bt={};He||(rt?bt={width:rt,paddingRight:"12px"}:B>1&&(bt={width:"calc(100% /".concat(B,")"),paddingRight:"12px"}));var ht=Object(R.l)("labelWidth",J,$)||Re,rn=Object(R.q)(ht)?Number(ht):Object(R.o)(ht)?ht:110,Yt={width:rn};(re||Ye==="column")&&(Yt={flexGrow:1}),Ye==="inline"&&(Yt={marginTop:5,paddingLeft:12},ce="",ze+=" fr-content-inline",Ve.indexOf("fr-field-object")===-1&&(Ve+=" fr-field-inline"));var dn=Fe.children&&Fe.children.length>0,yn={$id:J,dataIndex:m,item:Fe,labelClass:ce,labelStyle:Yt,contentClass:ze,errorFields:V,hasChildren:dn,displayType:Ye,hideTitle:j,hideValidation:x},Cn=dn?f.a.createElement("div",{className:"flex flex-wrap"},f.a.createElement(Kt,{dataIndex:m,errorFields:V,displayType:Ye,hideTitle:j},Fe.children)):null,bn=dn?f.a.createElement(at,{parentId:J,dataIndex:m,errorFields:V,displayType:Ye,hideTitle:j},Fe.children):null;return f.a.createElement("div",{style:bt,className:"".concat(Ve," ").concat(N?"debug":"")},f.a.createElement(A,yn,He&&Cn,Ke&&bn))},ee=de,Ot=e("SA0R"),yt=e.n(Ot),ct=e("OVFa"),mt=e("k/c8"),Ft=e("cFvS"),Ne=e("io9h"),pe=!1,ke=v=>new Promise(C=>setTimeout(C,v)),Et=()=>ke(500),wt={},tn=(v,C)=>ke(500).then(()=>{var J=wt[v];return console.group(v),console.log("%cParams:","color: #00A7F7; font-weight: 700;",C),console.log("%cResponse:","color: #47B04B; font-weight: 700;",J),console.groupEnd(),J}),En=Object(Ne.b)({}),xn=Object(Ne.b)({}),Sn=v=>{var C={method:"post"};return C.data=v,xn("https://sms.alibaba-inc.com/api/rule/verify",C)},un=v=>{var C=document.createElement("img");C.src="http://gm.mmstat.com/fliggy-form.form.verify_log?".concat(new URLSearchParams(v).toString())},kt=function(C,J){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"get";if(pe)return tn(C,J);var Q={method:M};return M==="get"&&(Q.params=J),M==="post"&&(Q.data=J),En(C,Q).then(m=>m).catch(m=>{console.group(C),console.log("%cParams:","color: #FF4D4F; font-weight: 700;",J),console.log("%cResponse:","color: #FF4D4F; font-weight: 700;",m),console.groupEnd()})},an={add:()=>kt("/order/add",{},"post"),edit:()=>kt("/order/edit",{},"post"),list:()=>kt("/order/queryList")},Ut={sendData:Sn,sendLog:un},In=Ut,Lt="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",Ln={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:Lt,method:Lt,array:Lt,object:Lt,number:Lt,date:Lt,boolean:Lt,integer:Lt,float:Lt,regexp:Lt,email:Lt,url:Lt,hex:Lt},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},$t="${title} is not a valid ${type}",Pn={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:$t,method:$t,array:$t,object:$t,number:$t,date:$t,boolean:$t,integer:$t,float:$t,regexp:$t,email:$t,url:$t,hex:$t},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},$n=e("KpVd"),D=v=>{var C=v.formData,J=v.schema,M=J===void 0?{}:J,Q=v.isRequired,m=Q===void 0?!0:Q,S=v.touchedKeys,j=S===void 0?[]:S,g=v.locale,x=g===void 0?"cn":g,N=v.validateMessages,w=N===void 0?{}:N;if(Object.keys(M).length===0)return Promise.resolve();var T=Object(R.h)({schema:M,isRequired:m}).fields,X=[];m||j.forEach(ne=>{var Fe=Object(R.t)(ne,M),Oe=Object(he.get)(C,ne);if(!Oe&&Fe.required){var Ye=Fe.message||w.required||"${title}\u5FC5\u586B";X.push({name:ne,error:[Ye]})}});var B=Ln,$=Pn,V;try{V=new $n.a(T)}catch(ne){return Promise.resolve([])}var Re=x==="en"?$:B;return Object(he.merge)(Re,w),V.messages(Re),V.validate(C||{}).then(ne=>X.length>0?X:[]).catch(ne=>{var Fe=ne.errors,Oe=ne.fields,Ye=Object(R.f)(Fe).map(Ke=>{var re=Object(R.d)(Ke.field);return{name:re,error:[Ke.message]}});Ye=[...Ye,...X];var He=[];return Ye.forEach(Ke=>{var re=He.findIndex(Ce=>Ce.name===Ke.name);re===-1?He.push(Ke):He[re].error=[...He[re].error,...Ke.error]}),He})},se={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},je={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},Me=(v,C)=>{var J=Je(v,C);return J=Object(R.w)(J),J},Je=(v,C)=>{var J=Object(R.a)(v),M=[],Q=[],m=[],S=g=>Array.isArray(g)&&g.every(x=>typeof x=="string");Object.keys(C).forEach(g=>{var x=C[g]&&C[g].schema&&C[g].schema.bind,N=g.replace("[]","");x===!1?M.push(N):typeof x=="string"?Q.push({key:N,bind:x}):S(x)&&m.push({key:N,bind:x})});var j=g=>{M.forEach(x=>{Object(he.unset)(g,x)}),Q.forEach(x=>{var N=x.key,w=x.bind,T=Object(he.get)(g,N),X=Object(he.get)(g,w);Object(R.s)(X)&&(T=Object(q.a)(Object(q.a)({},X),T)),Object(he.set)(g,w,T),Object(he.unset)(g,N)}),m.forEach(x=>{var N=x.key,w=x.bind,T=Object(he.get)(g,N);Array.isArray(T)&&T.forEach((X,B)=>{w[B]&&Object(he.set)(g,w[B],X)}),Object(he.unset)(g,N)})};return j(J),J},qe=(v,C)=>{var J=Object(R.a)(v),M=[],Q=[],m=j=>Array.isArray(j)&&j.every(g=>typeof g=="string");Object.keys(C).forEach(j=>{var g=C[j]&&C[j].schema&&C[j].schema.bind,x=j.replace("[]","");typeof g=="string"?M.push({key:x,bind:g}):m(g)&&Q.push({key:x,bind:g})});var S=j=>{M.forEach(g=>{var x=g.key,N=g.bind,w=Object(he.get)(j,N),T=Object(he.get)(j,x);Object(R.s)(T)&&(w=Object(q.a)(Object(q.a)({},T),w)),Object(he.set)(j,x,w),Object(he.unset)(j,N)}),Q.forEach(g=>{var x=g.key,N=g.bind,w=[];N.forEach(T=>{w.push(Object(he.get)(j,T)),Object(he.unset)(j,T)}),Object(he.set)(j,x,w)})};return S(J),J},Ue=v=>{var C=v||{},J=C.formData,M=C.onChange,Q=C.onValidate,m=Object(ge.c)({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),S=Object(Le.default)(m,2),j=S[0],g=S[1],x=Object(me.useRef)({}),N=Object(me.useRef)({}),w=Object(me.useRef)(!1),T=Object(me.useRef)(),X=Object(me.useRef)("cn"),B=Object(me.useRef)(),$=Object(me.useRef)({}),V=Object(me.useRef)([]),Re=j.formData,ne=j.submitData,Fe=j.errorFields,Oe=Fe===void 0?[]:Fe,Ye=j.isValidating,He=j.outsideValidating,Ke=j.isSubmitting,re=j.isEditing,Ce=j.allTouched,rt=j.touchedKeys,Ve=v&&v.hasOwnProperty("formData"),ce=Ve?J:Re;$.current=Object(me.useMemo)(()=>Object(he.merge)(Object(R.e)(x.current),ce),[JSON.stringify(ce),JSON.stringify(x.current)]),V.current=rt;var ze=fe=>{typeof M=="function"?M(fe):g({formData:fe})},bt=fe=>{if(typeof Q=="function"){var jt=fe.map(cn=>cn.name);Q(jt)}g({errorFields:fe})},ht=fe=>{if(!(V.current.indexOf(fe)>-1)){var jt=[...V.current,fe];g({touchedKeys:jt})}};Object(me.useEffect)(()=>{Ve&&typeof Q=="function"&&setTimeout(()=>{D({formData:$.current,schema:x.current,isRequired:!0,touchedKeys:V.current,locale:X.current,validateMessages:B.current}).then(fe=>{var jt=fe.map(cn=>cn.name);Q(jt)})},200)},[]),Object(me.useEffect)(()=>{if(w.current){w.current=!1;return}D({formData:$.current,schema:x.current,isRequired:Ce,touchedKeys:V.current,locale:X.current,validateMessages:B.current}).then(fe=>{bt(fe)})},[JSON.stringify($.current),Ce]);var rn=fe=>{g({isEditing:fe})},Yt=(fe,jt)=>{if(typeof fe=="string"){if(fe==="#"){ze(Object(q.a)({},jt));return}Object(he.set)($.current,fe,jt),ze(Object(q.a)({},$.current))}},dn=fe=>{var jt=fe.schema,cn=fe.flatten,Hn=fe.beforeFinish,Gn=fe.locale,Qn=fe.validateMessages;x.current=jt,N.current=cn,T.current=Hn,X.current=Gn,B.current=Qn},yn=fe=>{var jt=[];Array.isArray(fe)?jt=[...fe,...Oe]:fe&&fe.name?jt=[fe,...Oe]:console.log("error format is wrong"),jt=Object(he.sortedUniqBy)(jt,cn=>cn.name),bt(jt)},Cn=fe=>{var jt=Oe.map(cn=>cn.name.indexOf(fe)===-1);bt(jt)},bn=()=>Je($.current,N.current),Dn=fe=>{var jt=qe(fe,N.current);ze(jt)},jn=()=>{w.current=!0,g({isValidating:!0,allTouched:!0,isSubmitting:!1}),D({formData:$.current,schema:x.current,touchedKeys:[],isRequired:!0,locale:X.current,validateMessages:B.current}).then(fe=>{if(fe&&fe.length>0&&(console.log("submit:",$.current,fe),g({errorFields:fe})),typeof T.current=="function"){Promise.resolve(Me($.current,N.current)).then(jt=>{g({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:jt})});return}Promise.resolve(Me($.current,N.current)).then(jt=>{g({isValidating:!1,isSubmitting:!0,submitData:jt})})}).catch(fe=>{console.log("submit error:",fe)})},Rn=()=>{ze({}),bt([])},sn=()=>g({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),Xt=()=>g({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),Fn=()=>g({formData:{},submitData:{},errorFields:[],allTouched:!1,touchedKeys:[]}),Zt={formData:$.current,schema:x.current,touchedKeys:V.current,allTouched:Ce,touchKey:ht,onItemChange:Yt,setValues:Dn,getValues:bn,resetFields:Rn,submit:jn,submitData:ne,errorFields:Oe,isValidating:Ye,outsideValidating:He,isSubmitting:Ke,endValidating:sn,endSubmitting:Xt,setErrorFields:yn,removeErrorField:Cn,isEditing:re,setEditing:rn,syncStuff:dn,destroyForm:Fn};return Zt},et=v=>C=>{var J=Ue();return f.a.createElement(v,Object(te.default)({},C,{form:J}))},pt=(v,C)=>{console.log(v,C)};function Rt(v){var C=v.widgets,J=v.mapping,M=v.form,Q=v.beforeFinish,m=Q===void 0?pt:Q,S=v.onFinish,j=S===void 0?pt:S,g=v.displayType,x=g===void 0?"column":g,N=v.schema,w=v.flatten,T=v.debug,X=v.debugCss,B=v.locale,$=B===void 0?"cn":B,V=v.debounceInput,Re=V===void 0?!1:V,ne=v.size,Fe=v.configProvider,Oe=v.theme,Ye=v.validateMessages,He=v.watch,Ke=He===void 0?{}:He,re=v.serverValidateConfig,Ce=Object(st.a)(v,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","debugCss","locale","debounceInput","size","configProvider","theme","validateMessages","watch","serverValidateConfig"]);try{var rt=M.submit}catch(Fn){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var Ve=M.submitData,ce=M.errorFields,ze=M.isValidating,bt=M.outsideValidating,ht=M.isSubmitting,rn=M.endValidating,Yt=M.endSubmitting,dn=M.syncStuff,yn=M.formData,Cn=M.isEditing,bn=M.setErrorFields,Dn=Object(me.useMemo)(()=>w||Object(R.c)(N),[JSON.stringify(w),JSON.stringify(N)]);Object(me.useEffect)(()=>{dn({schema:N,flatten:Dn,beforeFinish:m,locale:$,validateMessages:Ye})},[JSON.stringify(w),JSON.stringify(N)]),Object(me.useEffect)(()=>()=>{M.destroyForm()},[]);var jn=Object(me.useMemo)(()=>Object(q.a)(Object(q.a)({flatten:Dn},M),{},{displayType:x,theme:Oe,debounceInput:Re,debug:T,isEditing:Cn},Ce),[JSON.stringify(Dn),JSON.stringify(yn),JSON.stringify(ce)]),Rn=Object(me.useMemo)(()=>({widgets:Object(q.a)(Object(q.a)({},hn.a),C),mapping:Object(q.a)(Object(q.a)({},_t.c),J)}),[]);Object(me.useEffect)(()=>{if(bt===!0){var Fn=m;re&&typeof re.formId=="string"&&(Fn=()=>{var Zt=re;if(!Zt.url)return Zt.url=window.location.href,In.sendData(Object(q.a)(Object(q.a)({},Zt),{},{formData:yn})).then(fe=>{if(fe&&fe.isSuccess&&fe.data)return data;fe&&fe.message&&(console.log(fe),Se.a.info(fe.message))}).catch(fe=>{console.error(fe),Se.a.error(JSON.stringify(fe))}).finally(()=>{In.sendLog(Object(q.a)(Object(q.a)({},Zt),{},{gmt:new Date}))})}),Promise.resolve(Fn(Ve,ce)).then(Zt=>{Zt&&bn(Zt),rn()});return}ze===!1&&ht===!0&&(Yt(),j(Ve,ce))},[ze,ht,bt]);var sn="";ne==="small"?sn="fr-form-small":ne==="large"&&(sn="fr-form-large");var Xt=Object.keys(Ke);return f.a.createElement(r.a,Object(te.default)({locale:yt.a},Fe),f.a.createElement(ge.b.Provider,{value:jn},f.a.createElement(ge.a.Provider,{value:Rn},f.a.createElement("div",{className:"fr-container ".concat(sn)},T?f.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},f.a.createElement("div",null,"formData:"+JSON.stringify(M.formData)),f.a.createElement("div",null,"errorFields:"+JSON.stringify(M.errorFields)),f.a.createElement("div",null,"touchedKeys:"+JSON.stringify(M.touchedKeys)),f.a.createElement("div",null,"allTouched:"+JSON.stringify(M.allTouched)),f.a.createElement("div",null,"isEditting:"+JSON.stringify(M.isEditing)),f.a.createElement("div",null,"isValidating:"+JSON.stringify(M.isValidating)),f.a.createElement("div",null,"isSubmitting:"+JSON.stringify(M.isSubmitting))):null,Xt.length>0?Xt.map((Fn,Zt)=>f.a.createElement(gn,{key:Zt.toString(),watchKey:Fn,watch:Ke,formData:yn})):null,f.a.createElement(ee,{debugCss:X})))))}var zt=v=>{var C=v.isOldVersion,J=C===void 0?!0:C,M=v.schema,Q=Object(st.a)(v,["isOldVersion","schema"]),m=M;return J&&(m=Object(R.z)(M)),f.a.createElement(Rt,Object(te.default)({schema:m},Q))},Ct=I.default=zt,gn=v=>{var C=v.watchKey,J=v.watch,M=v.formData,Q=Object(R.m)(M,C),m=J[C];return Object(me.useEffect)(()=>{m(Q)},[JSON.stringify(Q)]),null}},trko:function(tt,I,e){},"xwS/":function(tt,I,e){}}]);
