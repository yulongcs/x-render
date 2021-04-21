(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0zqC":function(g,F,a){"use strict";a.r(F);var E=a("tJVT"),u=a("q1tI"),t=a.n(u),s=a("k3GJ"),c=a("MZF8"),n=a("dEAq"),C=a.n(n),_=a("ZpkN"),S=a("TIsu"),lu=a.n(S);function A(B,d){var r,o=(r=B.match(/\.(\w+)$/))===null||r===void 0?void 0:r[1];return o||(o=d.tsx?"tsx":"jsx"),o}var T=B=>{var d,r,o,f=Object(u.useRef)(),k=Object(u.useContext)(n.context),h=k.locale,e=Object(n.useLocaleProps)(h,B),w=Object(n.useDemoUrl)(e.identifier),v=e.demoUrl||w,L=(c.e===null||c.e===void 0?void 0:c.e.location.hash)==="#".concat(e.identifier),N=Object.keys(e.sources).length===1,b=Object(n.useCodeSandbox)((d=e.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:e),O=Object(n.useRiddle)((r=e.hideActions)!==null&&r!==void 0&&r.includes("RIDDLE")?null:e),U=Object(n.useMotions)(e.motions||[],f.current),P=Object(E.default)(U,2),W=P[0],K=P[1],V=Object(n.useCopy)(),x=Object(E.default)(V,2),$=x[0],J=x[1],Z=Object(u.useState)("_"),y=Object(E.default)(Z,2),i=y[0],z=y[1],G=Object(u.useState)(A(i,e.sources[i])),M=Object(E.default)(G,2),p=M[0],X=M[1],H=Object(u.useState)(Boolean(e.defaultShowCode)),R=Object(E.default)(H,2),m=R[0],Q=R[1],Y=Object(u.useState)(Math.random()),j=Object(E.default)(Y,2),q=j[0],I=j[1],D=e.sources[i][p]||e.sources[i].content,uu=Object(n.useTSPlaygroundUrl)(h,D),eu=Object(u.useRef)(),tu=Object(n.usePrefersColor)(),au=Object(E.default)(tu,1),nu=au[0];Object(u.useEffect)(()=>{I(Math.random())},[nu]);function Eu(l){z(l),X(A(l,e.sources[l]))}return t.a.createElement("div",{style:e.style,className:[e.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:e.identifier,"data-debug":e.debug||void 0,"data-iframe":e.iframe||void 0},e.iframe&&t.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),t.a.createElement("div",{ref:f,className:"__dumi-default-previewer-demo",style:{transform:e.transform?"translate(0, 0)":void 0,padding:e.compact||e.iframe&&e.compact!==!1?"0":void 0,background:e.background}},e.iframe?t.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(e.iframe).replace(/(\d)$/,"$1px")},key:q,src:v,ref:eu}):e.children),t.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":e.title},e.title&&t.a.createElement(n.AnchorLink,{to:"#".concat(e.identifier)},e.title),e.description&&t.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description}})),t.a.createElement("div",{className:"__dumi-default-previewer-actions"},b&&t.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:b}),O&&t.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:O}),e.motions&&t.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:K,onClick:()=>W()}),e.iframe&&t.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>I(Math.random())}),!((o=e.hideActions)!==null&&o!==void 0&&o.includes("EXTERNAL"))&&t.a.createElement(n.Link,{target:"_blank",to:v},t.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),t.a.createElement("span",null),t.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":J,onClick:()=>$(D)}),p==="tsx"&&m&&t.a.createElement(n.Link,{target:"_blank",to:uu},t.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),t.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(m?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Q(!m)})),m&&t.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!N&&t.a.createElement(s.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:i,onChange:Eu},Object.keys(e.sources).map(l=>t.a.createElement(s.TabPane,{tab:l==="_"?"index.".concat(A(l,e.sources[l])):l,key:l}))),t.a.createElement("div",{className:"__dumi-default-previewer-source"},t.a.createElement(_.a,{code:D,lang:p,showCopy:!1}))))};F.default=T},TIsu:function(g,F,a){},j57V:function(g,F,a){"use strict";a.r(F);var E=a("q1tI"),u=a.n(E),t=a("dEAq"),s=a.n(t),c=a("0zqC"),n=a("ZpkN"),C=a("JjdP"),_=u.a.memo(C.default["widget-demo"].component);F.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h1",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},u.a.createElement(t.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),u.a.createElement("p",null,"\u5F53 FormRender \u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5 100%\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u5DF1\u5199\u4E00\u4E2A\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u529F\u80FD\u4F7F FormRender \u62E5\u6709\u5F88\u597D\u6269\u5C55\u6027\uFF0C\u53EF\u80FD\u7684\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A"),u.a.createElement("ul",null,u.a.createElement("li",null,"\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684\u641C\u7D22\u8F93\u5165\u6846\uFF08\u666E\u9002\u6027\u4E0D\u9AD8/\u96BE\u4EE5\u7528 schema \u63CF\u8FF0\u7684\u7EC4\u4EF6\uFF09"),u.a.createElement("li",null,"\u6211\u4EEC\u56E2\u961F\u4F7F\u7528 xxx ui\uFF0C\u4E0E antd \u4E0D\u642D\uFF0C\u5E0C\u671B\u80FD\u9002\u914D\u4E00\u5957 xxx ui \u7EC4\u4EF6\u7684 FormRender\uFF08\u6B22\u8FCE Pull Request\uFF09"),u.a.createElement("li",null,"\u6211\u9700\u8981\u5728\u8868\u5355\u5185\u90E8\u5199\u4E00\u4E2A excel \u4E0A\u4F20\u6309\u94AE\uFF08\u5B8C\u5168\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF09")),u.a.createElement("p",null,"\u6CE8\uFF1A\u5982\u679C\u662F\u65B0\u589E\u4E00\u4E2A\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u7ED9 FormRender \u7EF4\u62A4\u7684\u540C\u5B66\u6765\u63D0 Pull Request\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u6269\u5C55\u5176\u751F\u6001\uFF0CFormRender \u7684\u793E\u533A\u4EE5\u53CA\u63D0\u4F9B\u4E86\u90E8\u5206 ",u.a.createElement(t.Link,{to:"/widgets"},"\u5E38\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u3002"),u.a.createElement("h2",{id:"\u4F7F\u7528"},u.a.createElement(t.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),u.a.createElement("p",null,"\u7B80\u5355\u7684\u8BF4\uFF0C\u5728 Form \u7EC4\u4EF6\u5C42\u4F7F\u7528 widgets \u5B57\u6BB5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728 schema \u5185\u4F7F\u7528 widget \u5B57\u6BB5\u6307\u660E\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u503C\u5373\u53EF\uFF1A"),u.a.createElement(n.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    //...
  },
};

<Form
  schema={schema}
  widgets={{ site: SiteInput }}
  //...
/>;`,lang:"js"}),u.a.createElement("p",null,"\u5B9E\u9645\u4EE3\u7801\u5982\u4E0B\uFF1A")),u.a.createElement(c.default,C.default["widget-demo"].previewerProps,u.a.createElement(_,null)),u.a.createElement("div",{className:"markdown"},u.a.createElement("p",null,"\u53EF\u4EE5\u770B\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5199\u6CD5\u5341\u5206\u76F4\u89C2\uFF0C\u4E8B\u5B9E\u4E0A\u5F88\u591A antd \u7684\u7EC4\u4EF6\u90FD\u662F\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF08\u5185\u7F6E\u7EC4\u4EF6\u4E2D\u5C31\u6709 Input, InputNumber, Checkbox \u548C Switch\uFF09"),u.a.createElement("h2",{id:"createwidget"},u.a.createElement(t.AnchorLink,{to:"#createwidget","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"createWidget"),u.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u63A5\u6536\u4EE5\u4E0B Props\uFF1A"),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("strong",null,"disabled"),"\uFF1A\u662F\u5426\u7981\u6B62\u8F93\u5165"),u.a.createElement("li",null,u.a.createElement("strong",null,"readOnly"),"\uFF1A\u662F\u5426\u53EA\u8BFB"),u.a.createElement("li",null,u.a.createElement("strong",null,"value"),"\uFF1A\u7EC4\u4EF6\u73B0\u5728\u7684\u503C"),u.a.createElement("li",null,u.a.createElement("strong",null,"onChange"),"\uFF1A\u51FD\u6570\uFF0C\u63A5\u6536 value \u4E3A\u5165\u53C2\uFF0C\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\u540C\u6B65\u7ED9 Form"),u.a.createElement("li",null,u.a.createElement("strong",null,"schema"),"\uFF1A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5B50 schema"),u.a.createElement("li",null,u.a.createElement("strong",null,"addons.onItemChange"),": \u6CE8\u610F\u6302\u5728 addons \u4E0B\u9762\u3002\u7528\u4E8E\u5728\u672C\u7EC4\u4EF6\u5185\u4FEE\u6539\u5176\u4ED6\u7EC4\u4EF6\u7684\u503C onItemChange(value, path)"),u.a.createElement("li",null,u.a.createElement("strong",null,"addons.getValue"),": \u7528\u4E8E\u901A\u8FC7\u8DEF\u5F84\u5B57\u7B26\u4E32\u83B7\u53D6\u503C getValue(path)\u3002\u4F8B\u5982 ",u.a.createElement("code",null,"getValue('a.b[2].c')"),"\u3002getValue() \u83B7\u53D6 formData"),u.a.createElement("li",null,u.a.createElement("strong",null,"addons.formData"),": \u8868\u5355\u5F53\u524D\u7684\u6570\u636E\u3002\u5176\u5B9E\u53EF\u4EE5\u901A\u8FC7 getValue \u83B7\u53D6\uFF0C\u4F46\u6211\u4E5F\u4F20\u4E0B\u6765\u4E86\u3002"),u.a.createElement("li",null,u.a.createElement("strong",null,"addons.dataPath"),': \u76EE\u524D\u6570\u636E\u6240\u5728\u7684 path\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0Cstring \u7C7B\u578B\u3002'),u.a.createElement("li",null,u.a.createElement("strong",null,"addons.dataIndex"),': \u5982\u679C dataPath \u4E0D\u5305\u542B\u6570\u7EC4\uFF0C\u5219\u4E3A [], \u5982\u679C dataPath \u5305\u542B\u6570\u7EC4\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0C\u5219\u4E3A [2,0]\u3002\u662F\u81EA\u4E0A\u5230\u4E0B\u6240\u6709\u7ECF\u8FC7\u7684\u6570\u7EC4\u7684 index \u6309\u987A\u5E8F\u5B58\u653E\u7684\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B')),u.a.createElement("p",null,"\u5BF9\u9AD8\u9636\u7EC4\u4EF6\u719F\u6089\u7684\u540C\u5B66\uFF0C",u.a.createElement("code",null,"form-render")," \u5185\u7F6E\u4E86 ",u.a.createElement("code",null,"createWidget")," \u65B9\u6CD5\uFF0C\u652F\u6301\u7528\u7C7B\u4F3C\u4E8E ",u.a.createElement("code",null,"redux")," \u7684 ",u.a.createElement("code",null,"connect")," \u7684\u8BED\u6CD5\u5FEB\u901F\u751F\u4EA7\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF1A"),u.a.createElement(n.a,{code:`import { Checkbox } from 'antd';
import { createWidget } from 'form-render';

const MyCheckBox = createWidget(({ value }) => {
  return {
    checked: value,
  };
})(Checkbox);`,lang:"js"}),u.a.createElement("p",null,u.a.createElement("code",null,"createWidget")," \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u63A5\u6536\u7EC4\u4EF6 props\uFF0C\u5141\u8BB8\u7528\u6237\u5BF9\u9F50\u505A\u4FEE\u6539\u5E76\u8FD4\u56DE\u771F\u6B63\u9700\u8981\u7684 props\u3002\u4F7F\u7528 ",u.a.createElement("code",null,"createWidget")," \u4E0E\u76F4\u63A5\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5DE5\u4F5C\u91CF\u57FA\u672C\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u559C\u6B22\u7684\u540C\u5B66\u53EF\u4EE5\u4F7F\u7528"),u.a.createElement("h2",{id:"\u6700\u4F73\u5B9E\u8DF5"},u.a.createElement(t.AnchorLink,{to:"#\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4F73\u5B9E\u8DF5"),u.a.createElement("p",null,"\u540C\u4E00\u4E2A\u9879\u76EE\u4E0B\u4E0D\u540C\u7684 form \u91CC\uFF0C\u4F7F\u7528\u5230\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u80FD\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u4E92\u76F8\u4E0D\u540C\uFF0C\u7B14\u8005\u5EFA\u8BAE\u662F\u4E2D\u5FC3\u5316\u4E00\u4E2A Form \u7EC4\u4EF6\uFF0C\u5E76\u4E00\u6B21\u6027\u5C06\u6240\u6709\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u5165\u5176\u4E2D\u3002\u5728\u9879\u76EE\u7684\u5404\u5904\u5F15\u5165\u5BF9\u5E94\u7EC4\u4EF6\uFF1A"),u.a.createElement(n.a,{code:`//  /Component/FormRender.js
import Form from 'form-render';
import Cascade from './Cascade';
import Percentage from './Percentage';
import MyCheckBox from './MyCheckBox';
import ExcelUploader from './ExcelUploader';

const FormRender = props => {
  return (
    <Form
      widgets={{
        percentage: Percentage,
        cascade: Cascade,
        myCheck: MyCheckBox,
        excelUpload: ExcelUploader,
      }}
      {...props}
    />
  );
};`,lang:"js"}),u.a.createElement("p",null,"\u7136\u540E\u5728\u6BCF\u4E2A form \u9875\u9762\u7EDF\u4E00\u5F15\u5165\u4F7F\u7528"),u.a.createElement(n.a,{code:`import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};`,lang:"js"}),u.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6"},u.a.createElement(t.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6"),u.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u4E5F\u8BB8\u5DF2\u7ECF\u6709\u5185\u7F6E\u7EC4\u4EF6\u652F\u6301\u3002\u6240\u4EE5\u5728\u6B64\u7F57\u5217\u4E00\u4E0B\u6240\u6709\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u4ED6\u4EEC\u4E0E schema \u7684\u5339\u914D\u89C4\u5219\uFF1A"),u.a.createElement(n.a,{code:`export const mapping = {
  default: 'input',
  string: 'input',
  array: 'list',
  boolean: 'checkbox',
  integer: 'number',
  number: 'number',
  object: 'map',
  html: 'html',
  'string:upload': 'upload',
  'string:url': 'url',
  'string:dateTime': 'date',
  'string:date': 'date',
  'string:time': 'time',
  'string:textarea': 'textarea',
  'string:color': 'color',
  'string:image': 'imageInput',
  'range:time': 'timeRange',
  'range:date': 'dateRange',
  'range:dateTime': 'dateRange',
  '*?enum': 'radio',
  '*?enum_long': 'select',
  'array?enum': 'checkboxes',
  'array?enum_long': 'multiSelect',
  '*?readOnly': 'html',
};`,lang:"js"}),u.a.createElement("p",null,"\u9664\u6B64\u4E4B\u5916\u8FD8\u6709\u5FC5\u987B\u901A\u8FC7 ",u.a.createElement("code",null,"widget")," \u5173\u952E\u8BCD\u6765\u4F7F\u7528\u7684\u7EC4\u4EF6"),u.a.createElement(n.a,{code:`widget:slider  \u6ED1\u52A8\u8F93\u5165\u6761
widget:rate  \u4E94\u661F\u8BC4\u5206
widget:cascader  \u7EA7\u8054\u9009\u62E9
widget:treeSelect  \u6811\u5F62\u9009\u62E9`,lang:"unknown"}),u.a.createElement("p",null,"\u5176\u4E2D\u5DE6\u4FA7\u4E3A\u5339\u914D\u89C4\u5219\uFF08\u683C\u5F0F\u4E3A ",u.a.createElement("code",null,"type:format?enum/readOnly"),"\uFF09\uFF0C\u53F3\u4FA7\u4E3A\u5339\u914D\u5230\u7684\u7EC4\u4EF6\u3002\u5982\u679C\u9700\u8981\u5F3A\u5236\u4EE5\u67D0\u4E2A\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u76F8\u540C"),u.a.createElement(n.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u4E0B\u62C9\u9009\u6846',
      type: 'string',
      widget: 'select',
    },
    ...
  },
};`,lang:"js"}))))}}}]);
