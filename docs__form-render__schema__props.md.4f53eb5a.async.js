(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{NZxj:function(r,l,t){"use strict";t.r(l);var E=t("q1tI"),u=t.n(E),e=t("dEAq"),c=t.n(e),n=t("ZpkN"),F=t("JjdP");l.default=a=>(u.a.useEffect(()=>{a!=null&&a.location.hash&&e.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h1",{id:"props"},u.a.createElement(e.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"props"),u.a.createElement("h2",{id:"\u6982\u8FF0"},u.a.createElement(e.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),u.a.createElement("p",null,"\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 props \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002props \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 props \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982"),u.a.createElement(n.a,{code:`url: {
    title: "\u7F51\u5740",
    type: "string",
    props: {
      prefix: 'https://',
      suffix: '.com'
    }
  }`,lang:"js"}),u.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6-props"},u.a.createElement(e.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6-props","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6 props"),u.a.createElement("p",null,"\u4E00\u4E9B\u5185\u7F6E\u7684 widget \u7EC4\u4EF6\u662F\u7531\u591A\u4E2A\uFF08\u6216\u8005\u590D\u6742\u7ED3\u6784\u7684\uFF09\u81EA\u7136\u7EC4\u4EF6\u7EC4\u6210\u7684\uFF0C\u6B64\u65F6\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u81EA\u7136\u7EC4\u4EF6\u5F00\u4E86\u4E00\u4E2A props \u5165\u53E3\uFF0C\u4F8B\u5982 list \u7EC4\u4EF6\u6709 props \u548C itemProps \u4E24\u4E2A\u5C5E\u6027\uFF0C\u652F\u6301\u7528\u6237\u5BF9 list \u672C\u8EAB\u4EE5\u53CA\u6BCF\u4E2A item \u7684\u5B9A\u5236\u5316\u5C55\u793A & \u529F\u80FD\u9700\u6C42\u3002\u6240\u6709\u5185\u7F6E\u7684 props \u89C1\u4E0B\u9762\u5217\u8868"),u.a.createElement("h3",{id:"list-\u5217\u8868"},u.a.createElement(e.AnchorLink,{to:"#list-\u5217\u8868","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"list \u5217\u8868"),u.a.createElement("p",null,u.a.createElement("strong",null,"props")),u.a.createElement("table",null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"props"),u.a.createElement("th",{align:"center"},"\u7C7B\u578B"),u.a.createElement("th",{align:"center"},"\u8BF4\u660E"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"hideTitle"),u.a.createElement("td",{align:"center"},"boolean"),u.a.createElement("td",{align:"center"},"\u53EA\u652F\u6301\u201Clist1\u201D\uFF0C\u9690\u85CF title\uFF0C\u5C55\u793A\u66F4\u7D27\u51D1")),u.a.createElement("tr",null,u.a.createElement("td",null,"hideDelete"),u.a.createElement("td",{align:"center"},"boolean"),u.a.createElement("td",{align:"center"},"\u9690\u85CF\u5220\u9664\u6309\u94AE")),u.a.createElement("tr",null,u.a.createElement("td",null,"hideAdd"),u.a.createElement("td",{align:"center"},"boolean"),u.a.createElement("td",{align:"center"},"\u9690\u85CF\u65B0\u589E/\u590D\u5236\u6309\u94AE")),u.a.createElement("tr",null,u.a.createElement("td",null,"hideMove"),u.a.createElement("td",{align:"center"},"boolean"),u.a.createElement("td",{align:"center"},"\u9690\u85CF\u4E0A\u4E0B\u79FB\u52A8 item \u7684\u6309\u94AE")),u.a.createElement("tr",null,u.a.createElement("td",null,"buttons"),u.a.createElement("td",{align:"center"},"array"),u.a.createElement("td",{align:"center"},"\u4E0B\u8BE6 \uFF08\u6CE8 1\uFF09")))),u.a.createElement("p",null,u.a.createElement("strong",null,"itemProps")),u.a.createElement("table",null,u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"props"),u.a.createElement("th",{align:"center"},"\u7C7B\u578B"),u.a.createElement("th",{align:"center"},"\u8BF4\u660E"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"buttons"),u.a.createElement("td",{align:"center"},"array"),u.a.createElement("td",{align:"center"},"\u4E0B\u8BE6 \uFF08\u6CE8 2\uFF09")))),u.a.createElement("p",null,u.a.createElement("strong",null,"\u6CE8 1\uFF1A")),u.a.createElement("p",null,"\u5217\u8868\u9ED8\u8BA4\u53EA\u5C55\u793A\u201C\u65B0\u589E\u4E00\u6761\u201D\u6309\u94AE\u3002",u.a.createElement("code",null,"buttons")," \u7528\u4E8E\u6DFB\u52A0\u66F4\u591A\u5217\u8868\u64CD\u4F5C\u6309\u94AE"),u.a.createElement(n.a,{code:`"arrDemo": {
  ...
  "props": {
    "buttons": [
      {
        "html": "Excel\u5BFC\u5165",
        "callback": "someCallback"
      }
    ]
  }
}`,lang:"json"}),u.a.createElement("ol",null,u.a.createElement("li",null,"FormRender \u4F1A\u5230 ",u.a.createElement("code",null,"window.someCallback")," \u4E0A\u5BFB\u627E\u56DE\u8C03\u51FD\u6570\uFF0C\u6B64\u56DE\u8C03\u51FD\u6570\u53EF\u63A5\u53D7\u53C2\u6570 ",u.a.createElement("code",null,"value"),"\u548C ",u.a.createElement("code",null,"schema"),"\u3002\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u65B0\u7684\u5217\u8868\u503C"),u.a.createElement("li",null,"html \u5B57\u6BB5\u53EF\u4F7F\u7528\u6B63\u5E38\u7684 string \u503C\uFF0C\u6216\u8005\u4EFB\u4F55 html \u7247\u6BB5\uFF0C\u4F8B\u5982")),u.a.createElement(n.a,{code:`"arrDemo": {
  ...
  "props": {
    "buttons": [
      {
        "html": "<span style='color: red'>\u62C9\u53D6\u6570\u636E</span>",
        "callback": "someCallback"
      }
    ]
  }
}`,lang:"json"}),u.a.createElement(n.a,{code:`// value: \u6574\u4E2A\u6570\u7EC4\u7684\u503C\uFF0ConChange: \u4F20\u5165\u6539\u53D8\u540E\u7684\u6570\u7EC4\u503C\uFF0C\u89E6\u53D1state\u66F4\u65B0
// \u4F7F\u7528Object\u5165\u53C2\uFF0C\u4E3A\u4E86\u5C06\u6765\u597D\u6269\u5C55
window.someCallback = ({ value, onChange, schema }) => {
  onChange([...value, { a: 'hello' }]);
};`,lang:"js"}),u.a.createElement("p",null,"\u5982\u4E0A\u7684 someCallback \u4F1A\u5728\u539F\u6709\u7684 list \u503C\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 item: ",u.a.createElement("code",null,"{"," a: 'hello' ","}")),u.a.createElement("p",null,u.a.createElement("strong",null,"\u6CE8 2\uFF1A")),u.a.createElement("p",null,"itemProps.buttons \u7528\u4E8E\u6269\u5C55\u5217\u8868\u91CC\u6BCF\u4E2A item \u7684\u66F4\u591A\u64CD\u4F5C"),u.a.createElement("p",null,"\u6CE8\uFF1AitemProps.buttons \u76EE\u524D\u8FD8\u672A\u5728\u4EE3\u7801\u5C42\u9762\u5B9E\u73B0\u3002\u4E3B\u8981\u539F\u56E0\u5728\u4E8E itemProps.buttons \u5728\u4E0D\u540C\u5C55\u793A\u4E0B\u53EF\u80FD\u662F icon\uFF0C\u800C form-render \u5E76\u4E0D\u60F3\u5F15\u5165\u6574\u4E2A",u.a.createElement("code",null,"@ant-design/icons"),"\uFF0C\u5927\u5BB6\u6709\u597D\u7684\u60F3\u6CD5\u6B22\u8FCE\u9489\u9489\u7FA4\u8BA8\u8BBA\uFF0C\u6216\u8005\u4F7F\u7528 issue/feature"),u.a.createElement(n.a,{code:`"arrDemo": {
  ...
  "itemProps": {
    "buttons": [
      {
        "html": "\u590D\u5236",
        "callback": "copyMe"
      }
    ]
  }
}`,lang:"json"}),u.a.createElement("p",null,"\u7528\u6CD5\u76F8\u540C, FormRender \u4F1A\u5C1D\u8BD5\u5728\u70B9\u51FB\u590D\u5236\u6309\u94AE\u65F6\u6267\u884C ",u.a.createElement("code",null,"window.copyMe"),"\u3002",u.a.createElement("code",null,"window.copyMe"),"\u7684\u5165\u53C2\u4E3A value, index, schema \uFF0C\u8FD4\u56DE\u503C\u4F1A\u4F5C\u4E3A\u65B0\u7684\u5217\u8868\u503C"),u.a.createElement(n.a,{code:`// \u6CE8\u610F value \u662F\u6574\u4E2A\u5217\u8868\u7684 value
window.copyMe = ({ value, index, schema }) => {
  const item = value[index];
  value.splice(index, 0, item);
  return value;
};`,lang:"js"}),u.a.createElement("h3",{id:"object-\u5BF9\u8C61"},u.a.createElement(e.AnchorLink,{to:"#object-\u5BF9\u8C61","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"object \u5BF9\u8C61"),u.a.createElement("p",null,u.a.createElement("strong",null,"props")),u.a.createElement("p",null,"\u76EE\u524D\u8FD8\u6CA1\u6709\uFF0C\u672A\u6765\u4F1A\u6269\u5C55"),u.a.createElement("h3",{id:"upload-\u4E0A\u4F20"},u.a.createElement(e.AnchorLink,{to:"#upload-\u4E0A\u4F20","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"upload \u4E0A\u4F20"),u.a.createElement("p",null,u.a.createElement("strong",null,"props")),u.a.createElement("p",null,"upload \u7EC4\u4EF6\u7684\u4E3B\u4F53 props\uFF0C\u53C2\u8003 ",u.a.createElement(e.Link,{to:"https://ant.design/components/upload/"},"antd/upload \u6587\u6863")),u.a.createElement("p",null,u.a.createElement("strong",null,"buttonProps")),u.a.createElement("p",null,"\u4E0A\u4F20\u6309\u94AE Button \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 antd/button"),u.a.createElement("h3",{id:"color-\u989C\u8272\u9009\u62E9"},u.a.createElement(e.AnchorLink,{to:"#color-\u989C\u8272\u9009\u62E9","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"color \u989C\u8272\u9009\u62E9"),u.a.createElement("p",null,u.a.createElement("strong",null,"props")),u.a.createElement("p",null,"colorPicker \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003",u.a.createElement(e.Link,{to:"https://www.npmjs.com/package/rc-color-picker"},"rc-color-picker \u6587\u6863")),u.a.createElement("p",null,u.a.createElement("strong",null,"inputProps")),u.a.createElement("p",null,"\u8F93\u5165\u6846 input \u7684 props\uFF0C\u53C2\u8003 antd/input"),u.a.createElement("h3",{id:"slider-\u62D6\u52A8\u9009\u62E9\u6570\u5B57"},u.a.createElement(e.AnchorLink,{to:"#slider-\u62D6\u52A8\u9009\u62E9\u6570\u5B57","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"slider \u62D6\u52A8\u9009\u62E9\u6570\u5B57"),u.a.createElement("p",null,u.a.createElement("strong",null,"props")),u.a.createElement("ol",null,u.a.createElement("li",null,u.a.createElement("p",null,"slider \u7EC4\u4EF6\u7684\u4E3B\u4F53 props\uFF0C\u652F\u6301\u6240\u6709 slider \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 ",u.a.createElement(e.Link,{to:"https://ant.design/components/slider/"},"antd/slider \u6587\u6863"))),u.a.createElement("li",null,u.a.createElement("p",null,"\u8FD8\u652F\u6301",u.a.createElement("code",null,"hideInput"),", \u9ED8\u8BA4",u.a.createElement("code",null,"false"),"\uFF0C\u7528\u4E8E\u63A7\u5236\u662F\u5426\u5C55\u793A Input"))),u.a.createElement("p",null,u.a.createElement("strong",null,"inputProps")),u.a.createElement("p",null,"\u7528\u4E8E\u63A7\u5236 input \u5C55\u793A\u7684 props\uFF0C\u652F\u6301\u6240\u6709 input \u7EC4\u4EF6\u7684 props\uFF0C\u53C2\u8003 ",u.a.createElement(e.Link,{to:"https://ant.design/components/input/"},"antd/input \u6587\u6863")),u.a.createElement("h2",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6-props"},u.a.createElement(e.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6-props","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6 props"),u.a.createElement("p",null,"\u5F53\u7528\u6237\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u662F\u590D\u5408\u7EC4\u4EF6\uFF08\u7531\u591A\u4E2A\u81EA\u7136\u7EC4\u4EF6\u7EC4\u5408\u800C\u6210\uFF09\u65F6\uFF0C\u63A8\u8350\u505A\u6CD5\u662F props \u4E2D\u653E\u7F6E\u4E00\u4E9B\u5168\u5C40\u9700\u8981\u4F7F\u7528\u7684 props\uFF0C\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u800C\u5176\u4E2D\u5355\u4E2A\u5143\u7D20\u7684\u5B9A\u5236 props \u4F7F\u7528 props1\uFF0Cprops2\uFF0C... \u8FD9\u6837\u7684\u547D\u540D\u3002\u51E1\u662F\u5305\u542B props\uFF08\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF09\u7684 schema \u7684 key \u503C\uFF0C\u90FD\u4F1A\u539F\u6837\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u4F8B\u5982"),u.a.createElement(n.a,{code:`percentInput: {
    title: "\u767E\u5206\u6BD4\u8F93\u5165",
    type: "number",
    props: {
      showInput: false
    },
    inputProps: {
      suffix: '%'
    },
    percentProps: {
      step: 10
    }
  }`,lang:"js"}),u.a.createElement("p",null,"\u4F20\u9012\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684 props \u4E3A"),u.a.createElement(n.a,{code:`{
  type: 'number',
  showInput: false,
  inputProps: {
    suffix: '%'
  },
  percentProps: {
    step: 10
  }
}`,lang:"js"}))))}}]);
