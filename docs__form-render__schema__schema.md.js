(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"0zqC":function(D,i,a){"use strict";a.r(i);var l=a("tJVT"),e=a("q1tI"),u=a.n(e),s=a("k3GJ"),m=a("MZF8"),n=a("dEAq"),C=a.n(n),A=a("ZpkN"),w=a("TIsu"),re=a.n(w);function B(p,o){var E,c=(E=p.match(/\.(\w+)$/))===null||E===void 0?void 0:E[1];return c||(c=o.tsx?"tsx":"jsx"),c}var P=p=>{var o,E,c,f=Object(e.useRef)(),M=Object(e.useContext)(n.context),b=M.locale,t=Object(n.useLocaleProps)(b,p),T=Object(n.useDemoUrl)(t.identifier),g=t.demoUrl||T,R=(m.a===null||m.a===void 0?void 0:m.a.location.hash)==="#".concat(t.identifier),S=Object.keys(t.sources).length===1,y=Object(n.useCodeSandbox)((o=t.hideActions)!==null&&o!==void 0&&o.includes("CSB")?null:t),x=Object(n.useRiddle)((E=t.hideActions)!==null&&E!==void 0&&E.includes("RIDDLE")?null:t),U=Object(n.useMotions)(t.motions||[],f.current),v=Object(l.default)(U,2),K=v[0],W=v[1],z=Object(n.useCopy)(),k=Object(l.default)(z,2),J=k[0],$=k[1],Z=Object(e.useState)("_"),O=Object(l.default)(Z,2),F=O[0],G=O[1],V=Object(e.useState)(B(F,t.sources[F])),L=Object(l.default)(V,2),h=L[0],X=L[1],Y=Object(e.useState)(Boolean(t.defaultShowCode)),N=Object(l.default)(Y,2),d=N[0],H=N[1],Q=Object(e.useState)(Math.random()),j=Object(l.default)(Q,2),q=j[0],I=j[1],_=t.sources[F][h]||t.sources[F].content,ee=Object(n.useTSPlaygroundUrl)(b,_),ue=Object(e.useRef)(),te=Object(n.usePrefersColor)(),ne=Object(l.default)(te,1),ae=ne[0];Object(e.useEffect)(()=>{I(Math.random())},[ae]);function le(r){G(r),X(B(r,t.sources[r]))}return u.a.createElement("div",{style:t.style,className:[t.className,"__dumi-default-previewer",R?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:t.identifier,"data-debug":t.debug||void 0,"data-iframe":t.iframe||void 0},t.iframe&&u.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),u.a.createElement("div",{ref:f,className:"__dumi-default-previewer-demo",style:{transform:t.transform?"translate(0, 0)":void 0,padding:t.compact||t.iframe&&t.compact!==!1?"0":void 0,background:t.background}},t.iframe?u.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(t.iframe).replace(/(\d)$/,"$1px")},key:q,src:g,ref:ue}):t.children),u.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":t.title},t.title&&u.a.createElement(n.AnchorLink,{to:"#".concat(t.identifier)},t.title),t.description&&u.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.description}})),u.a.createElement("div",{className:"__dumi-default-previewer-actions"},y&&u.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:y}),x&&u.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:x}),t.motions&&u.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:W,onClick:()=>K()}),t.iframe&&u.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>I(Math.random())}),!((c=t.hideActions)!==null&&c!==void 0&&c.includes("EXTERNAL"))&&u.a.createElement(n.Link,{target:"_blank",to:g},u.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),u.a.createElement("span",null),u.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":$,onClick:()=>J(_)}),h==="tsx"&&d&&u.a.createElement(n.Link,{target:"_blank",to:ee},u.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),u.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(d?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>H(!d)})),d&&u.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!S&&u.a.createElement(s.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:F,onChange:le},Object.keys(t.sources).map(r=>u.a.createElement(s.TabPane,{tab:r==="_"?"index.".concat(B(r,t.sources[r])):r,key:r}))),u.a.createElement("div",{className:"__dumi-default-previewer-source"},u.a.createElement(A.a,{code:_,lang:h,showCopy:!1}))))};i.default=P},TIsu:function(D,i,a){},dKoY:function(D,i,a){"use strict";a.r(i);var l=a("q1tI"),e=a.n(l),u=a("dEAq"),s=a.n(u),m=a("0zqC"),n=a("ZpkN"),C=a("JjdP"),A=e.a.memo(C.default["schema-demo"].component);i.default=function(){return e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("h1",{id:"\u4E66\u5199\u89C4\u8303"},e.a.createElement(u.AnchorLink,{to:"#\u4E66\u5199\u89C4\u8303","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4E66\u5199\u89C4\u8303"),e.a.createElement("h2",{id:"\u6982\u8FF0"},e.a.createElement(u.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,e.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",e.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",e.a.createElement(u.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),e.a.createElement(n.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
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
}`,lang:"json"})),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",e.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",e.a.createElement("code",null,"rules")," \u548C ",e.a.createElement("code",null,"props"),"\uFF0C",e.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",e.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",e.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),e.a.createElement(n.a,{code:`{
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
}`,lang:"json"})),e.a.createElement("li",null,e.a.createElement("p",null,"\u201C\u6211\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F\u201D \u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",e.a.createElement(u.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema"))),e.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027"},e.a.createElement(u.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027"),e.a.createElement("p",null,"\u4E3A\u4E86\u66F4\u597D\u7406\u89E3\u57FA\u7840\u5C5E\u6027\u7684\u4F5C\u7528\uFF0C\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("code",null,"type"),", ",e.a.createElement("code",null,"format"),", ",e.a.createElement("code",null,"enum")," \u548C ",e.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",e.a.createElement(u.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),e.a.createElement("li",null,e.a.createElement("code",null,"type"),", ",e.a.createElement("code",null,"format"),", ",e.a.createElement("code",null,"min"),", ",e.a.createElement("code",null,"max"),", ",e.a.createElement("code",null,"required")," \u548C ",e.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),e.a.createElement("li",null,e.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),e.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),e.a.createElement(n.a,{code:`export const basic = {
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
};`,lang:"js"})),e.a.createElement(m.default,C.default["schema-demo"].previewerProps,e.a.createElement(A,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h3",{id:"title"},e.a.createElement(u.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"title"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A",e.a.createElement("code",null,"string")),e.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),e.a.createElement("h3",{id:"description"},e.a.createElement(u.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"description"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A",e.a.createElement("code",null,"string")),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),e.a.createElement("h3",{id:"type"},e.a.createElement(u.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"type"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",e.a.createElement("code",null,"'string'"),", ",e.a.createElement("code",null,"'number'"),", ",e.a.createElement("code",null,"'boolean'"),", ",e.a.createElement("code",null,"'array'"),", ",e.a.createElement("code",null,"'object'"),", ",e.a.createElement("code",null,"'range'"),", ",e.a.createElement("code",null,"'html'"),"]"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002")),e.a.createElement("p",null,"\u6CE8 1\uFF1Arange \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u533A\u95F4\u7C7B\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u65F6\u95F4\u533A\u95F4\u9009\u62E9\u3002"),e.a.createElement(n.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),e.a.createElement("p",null,"\u6CE8 2\uFF1Ahtml \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u7C7B\u7EC4\u4EF6"),e.a.createElement(n.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),e.a.createElement("h3",{id:"format"},e.a.createElement(u.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"format"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",e.a.createElement("code",null,"'image'"),", ",e.a.createElement("code",null,"'textarea'"),", ",e.a.createElement("code",null,"'color'"),", ",e.a.createElement("code",null,"'email'"),", ",e.a.createElement("code",null,"'url'"),", ",e.a.createElement("code",null,"'dateTime'"),", ",e.a.createElement("code",null,"'date'"),", ",e.a.createElement("code",null,"'time'"),", ",e.a.createElement("code",null,"'upload'"),"]")),e.a.createElement("li",null,e.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),e.a.createElement(n.a,{code:`// \u9ED8\u8BA4 input
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
}`,lang:"json"}))),e.a.createElement("h3",{id:"default"},e.a.createElement(u.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"default"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),e.a.createElement("li",null,e.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),e.a.createElement(n.a,{code:`"list": {
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
}`,lang:"json"}))),e.a.createElement("h3",{id:"required"},e.a.createElement(u.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"required"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),e.a.createElement(n.a,{code:`"requiredInput": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "required": true
}`,lang:"json"}),e.a.createElement("h3",{id:"placeholder"},e.a.createElement(u.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"placeholder"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u3002\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\uFF1A")),e.a.createElement(n.a,{code:`"dateRange": {
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"js"}),e.a.createElement("h3",{id:"bind"},e.a.createElement(u.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"bind"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),e.a.createElement("ol",null,e.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",e.a.createElement(u.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),e.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",e.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),e.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),e.a.createElement("h3",{id:"min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min"},e.a.createElement(u.AnchorLink,{to:"#min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"min (0.x \u7248\u672C ",e.a.createElement("code",null,"min"),",",e.a.createElement("code",null,"minItem")," \u548C ",e.a.createElement("code",null,"minLength")," \u7EDF\u4E00\u5230 ",e.a.createElement("code",null,"min"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),e.a.createElement("h3",{id:"max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max"},e.a.createElement(u.AnchorLink,{to:"#max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"max (0.x \u7248\u672C ",e.a.createElement("code",null,"max"),",",e.a.createElement("code",null,"maxItem")," \u548C ",e.a.createElement("code",null,"maxLength")," \u7EDF\u4E00\u5230 ",e.a.createElement("code",null,"max"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),e.a.createElement("h3",{id:"disabled-0x-\u7248\u672C-uidisabled"},e.a.createElement(u.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:disabled"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),e.a.createElement("h3",{id:"readonly-0x-\u7248\u672C-uireadonly"},e.a.createElement(u.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:readonly"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),e.a.createElement("h3",{id:"hidden-0x-\u7248\u672C-uihidden"},e.a.createElement(u.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:hidden"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),e.a.createElement("h3",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},e.a.createElement(u.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:displayType"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A",e.a.createElement("code",null,"'row'")," | ",e.a.createElement("code",null,"'column'")),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),e.a.createElement("h3",{id:"width-0x-\u7248\u672C-uiwidth"},e.a.createElement(u.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:width"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),e.a.createElement("h3",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},e.a.createElement(u.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:labelWidth"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),e.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),e.a.createElement("h3",{id:"classname-0x-\u7248\u672C-uiclassname"},e.a.createElement(u.AnchorLink,{to:"#classname-0x-\u7248\u672C-uiclassname","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"className (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:className"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u660E\u5355\u4E2A\u8868\u5355\u5143\u7D20\u7684 className\uFF0C\u65B9\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F")),e.a.createElement("p",null,"\u4F8B\u5982\u5982\u4E0B\u7684 schema \u4F1A\u5728\u751F\u6210\u5143\u7D20\u7684 ",e.a.createElement("code",null,"fr-field")," \u8FD9\u5C42\u6DFB\u52A0\u4E0A\u7528\u6237\u5B9A\u4E49\u7684 ",e.a.createElement("code",null,"my-className")),e.a.createElement(n.a,{code:`audio_on_mic_limit: {
  className: 'my-className',
  title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}`,lang:"js"}),e.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png",width:"600px"}),e.a.createElement("h3",{id:"widget-0x-\u7248\u672C-uiwidget"},e.a.createElement(u.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:widget"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u201C\u5185\u7F6E\u7EC4\u4EF6\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u4F8B\u5982\uFF1A")),e.a.createElement(n.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "widget": "select" // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
}`,lang:"json"}),e.a.createElement("p",null,"FR \u9ED8\u8BA4\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u8BE6\u7EC6\u5339\u914D\u89C4\u5219\u89C1",e.a.createElement(u.Link,{to:"/form-render/schema/inner-widget"},"\u5185\u7F6E\u7EC4\u4EF6"),"\u3002"),e.a.createElement("p",null,e.a.createElement("code",null,"widget"),"\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5339\u914D\u201C\u81EA\u5B9A\u4E49\u201D\u7684\u7EC4\u4EF6\uFF0C\u5982\u4F55\u4F7F\u7528 ",e.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",e.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u5143\u7D20\u6E32\u67D3\uFF0C\u53C2\u89C1",e.a.createElement(u.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),e.a.createElement("h3",{id:"properties"},e.a.createElement(u.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"properties"),e.a.createElement("p",null,"\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\uFF08type: object\uFF09\u4E2D\u4F7F\u7528\uFF0C",e.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),e.a.createElement(n.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),e.a.createElement("h3",{id:"items"},e.a.createElement(u.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"items"),e.a.createElement("p",null,"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61"),e.a.createElement(n.a,{code:`{
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
}`,lang:"json"}),e.a.createElement("h3",{id:"enum--enumnames"},e.a.createElement(u.AnchorLink,{to:"#enum--enumnames","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"enum & enumNames"),e.a.createElement("p",null,"\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),e.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C & \u9009\u9879\u7684\u6587\u6848")),e.a.createElement(n.a,{code:`// \u5355\u9009
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
}`,lang:"json"}),e.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),e.a.createElement("h3",{id:"rules"},e.a.createElement(u.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"rules"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1A\u6570\u7EC4"),e.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u6240\u6709\u9664\u4E86\u5FC5\u586B\u4EE5\u5916\u7684\u8868\u5355\u6821\u9A8C\u63CF\u8FF0\u901A\u8FC7 ",e.a.createElement("code",null,"rules")," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",e.a.createElement(u.Link,{to:"/form-render/schema/rules"},"rules \u4E66\u5199\u89C4\u8303"))),e.a.createElement("h3",{id:"props-0x-\u7248\u672C-uioptions"},e.a.createElement(u.AnchorLink,{to:"#props-0x-\u7248\u672C-uioptions","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"props (0.x \u7248\u672C ",e.a.createElement("code",null,"ui:options"),")"),e.a.createElement("ul",null,e.a.createElement("li",null,"\u7C7B\u578B\uFF1Aobject"),e.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",e.a.createElement("code",null,"props")," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",e.a.createElement("code",null,"props")," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",e.a.createElement("code",null,"props")," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),e.a.createElement(n.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),e.a.createElement("p",null,"\u8BE6\u89C1 ",e.a.createElement(u.Link,{to:"/form-render/schema/props"},"props \u4E66\u5199\u89C4\u8303")))))}}}]);
