(window.webpackJsonp=window.webpackJsonp||[]).push([[32,9],{"0zqC":function($e,ye,e){"use strict";e.r(ye);var C=e("tJVT"),j=e("q1tI"),o=e.n(j),O=e("k3GJ"),Ae=e("MZF8"),K=e("dEAq"),p=e.n(K),De=e("ZpkN"),ce=e("TIsu"),an=e.n(ce);function Ke(Be,be){var Ce,Re=(Ce=Be.match(/\.(\w+)$/))===null||Ce===void 0?void 0:Ce[1];return Re||(Re=be.tsx?"tsx":"jsx"),Re}var Ve=Be=>{var be,Ce,Re,Je=Object(j.useRef)(),he=Object(j.useContext)(K.context),ze=he.locale,T=Object(K.useLocaleProps)(ze,Be),Ue=Object(K.useDemoUrl)(T.identifier),He=T.demoUrl||Ue,Ye=(Ae.a===null||Ae.a===void 0?void 0:Ae.a.location.hash)==="#".concat(T.identifier),g=Object.keys(T.sources).length===1,v=Object(K.useCodeSandbox)((be=T.hideActions)!==null&&be!==void 0&&be.includes("CSB")?null:T),h=Object(K.useRiddle)((Ce=T.hideActions)!==null&&Ce!==void 0&&Ce.includes("RIDDLE")?null:T),l=Object(K.useMotions)(T.motions||[],Je.current),t=Object(C.default)(l,2),m=t[0],i=t[1],c=Object(K.useCopy)(),n=Object(C.default)(c,2),s=n[0],r=n[1],f=Object(j.useState)("_"),D=Object(C.default)(f,2),u=D[0],N=D[1],b=Object(j.useState)(Ke(u,T.sources[u])),a=Object(C.default)(b,2),y=a[0],z=a[1],k=Object(j.useState)(Boolean(T.defaultShowCode)),U=Object(C.default)(k,2),ae=U[0],w=U[1],fe=Object(j.useState)(Math.random()),je=Object(C.default)(fe,2),Ge=je[0],d=je[1],S=T.sources[u][y]||T.sources[u].content,R=Object(K.useTSPlaygroundUrl)(ze,S),A=Object(j.useRef)(),F=Object(K.usePrefersColor)(),E=Object(C.default)(F,1),I=E[0];Object(j.useEffect)(()=>{d(Math.random())},[I]);function M(P){N(P),z(Ke(P,T.sources[P]))}return o.a.createElement("div",{style:T.style,className:[T.className,"__dumi-default-previewer",Ye?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:T.identifier,"data-debug":T.debug||void 0,"data-iframe":T.iframe||void 0},T.iframe&&o.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),o.a.createElement("div",{ref:Je,className:"__dumi-default-previewer-demo",style:{transform:T.transform?"translate(0, 0)":void 0,padding:T.compact||T.iframe&&T.compact!==!1?"0":void 0,background:T.background}},T.iframe?o.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(T.iframe).replace(/(\d)$/,"$1px")},key:Ge,src:He,ref:A}):T.children),o.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":T.title},T.title&&o.a.createElement(K.AnchorLink,{to:"#".concat(T.identifier)},T.title),T.description&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:T.description}})),o.a.createElement("div",{className:"__dumi-default-previewer-actions"},v&&o.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:v}),h&&o.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:h}),T.motions&&o.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:i,onClick:()=>m()}),T.iframe&&o.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>d(Math.random())}),!((Re=T.hideActions)!==null&&Re!==void 0&&Re.includes("EXTERNAL"))&&o.a.createElement(K.Link,{target:"_blank",to:He},o.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),o.a.createElement("span",null),o.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":r,onClick:()=>s(S)}),y==="tsx"&&ae&&o.a.createElement(K.Link,{target:"_blank",to:R},o.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),o.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ae?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>w(!ae)})),ae&&o.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!g&&o.a.createElement(O.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:u,onChange:M},Object.keys(T.sources).map(P=>o.a.createElement(O.TabPane,{tab:P==="_"?"index.".concat(Ke(P,T.sources[P])):P,key:P}))),o.a.createElement("div",{className:"__dumi-default-previewer-source"},o.a.createElement(De.a,{code:S,lang:y,showCopy:!1}))))};ye.default=Ve},JjdP:function($e,ye,e){"use strict";e.r(ye);var C=e("9og8"),j=e("WmNS"),o=e.n(j),O=e("LtsZ"),Ae=`import React, { useRef } from 'react';
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

export default Demo;`,p=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,De=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,ce=`export const basic = {
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
};`,an=`import React, { Component } from 'react';
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

export default Root;`,Ke=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Ve=`{
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
}`,Be=`import { Select } from 'antd';
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

export default SearchInput;`,be=`import React from 'react';
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

export default Demo;`,Ce=`/* PrismJS 1.16.0
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
}`,Re=`.markdown p {
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
}`,Je=`import React from 'react';
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

export default Demo;`,he=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ze=`import React, { useState, useRef } from 'react';
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

export default Demo;`,T=`import React from 'react';
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

export default Demo;`,Ue=`import React, { useState, useRef } from 'react';
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
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,He=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Ye=ye.default={"guide-card":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("3PQu"),t=e("K+nK"),r.t0=t,r.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return r.t1=r.sent,m=(0,r.t0)(r.t1),r.t2=l,r.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return c=r.sent,n=function(){var D=(0,i.useState)("Line"),u=(0,m.default)(D,2),N=u[0],b=u[1],a={Line:c.Line,Column:c.Column,PivotTable:c.PivotTable}[N];return i.default.createElement("div",null,i.default.createElement("div",{style:{marginBottom:10}},i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return b("Line")}},"\u6298\u7EBF\u56FE"),i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return b("Column")}},"\u67F1\u72B6\u56FE"),i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return b("PivotTable")}},"\u4EA4\u53C9\u8868")),i.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},r.abrupt("return",n);case 17:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(f,D,u){return t.default.createElement("div",null,t.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),t.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(D).length]}},f),t.default.createElement("p",null,JSON.stringify(D)),t.default.createElement("p",null,JSON.stringify(u)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("3PQu"),t=e("K+nK"),r.t0=t,r.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return r.t1=r.sent,m=(0,r.t0)(r.t1),r.t2=l,r.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return c=r.sent,n=function(){var D=(0,i.useState)(!1),u=(0,m.default)(D,2),N=u[0],b=u[1];return i.default.createElement(i.default.Fragment,null,i.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",i.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return b(!N)}})),i.default.createElement(c.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},r.abrupt("return",n);case 17:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f,D,u,N,b;return o.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return l=e("3PQu"),t=e("K+nK"),y.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return y.t0=t,y.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return y.t1=y.sent,m=(0,y.t0)(y.t1),y.t2=t,y.next=12,e.e(62).then(e.bind(null,"fWQN"));case 12:return y.t3=y.sent,i=(0,y.t2)(y.t3),y.t4=t,y.next=17,e.e(63).then(e.bind(null,"mtLc"));case 17:return y.t5=y.sent,c=(0,y.t4)(y.t5),y.t6=t,y.next=22,e.e(65).then(e.bind(null,"yKVA"));case 22:return y.t7=y.sent,n=(0,y.t6)(y.t7),y.t8=t,y.next=27,e.e(59).then(e.bind(null,"879j"));case 27:return y.t9=y.sent,s=(0,y.t8)(y.t9),y.t10=t,y.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return y.t11=y.sent,r=(0,y.t10)(y.t11),y.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return f=y.sent,y.t12=l,y.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return y.t13=y.sent,D=(0,y.t12)(y.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(z){(0,n.default)(U,z);var k=(0,s.default)(U);function U(){return(0,i.default)(this,U),k.apply(this,arguments)}return(0,c.default)(U,[{key:"render",value:function(){var w=this.props.form;return r.default.createElement("div",null,r.default.createElement(D.default,{form:w,schema:u}),r.default.createElement(m.default,{type:"primary",onClick:w.submit},"\u63D0\u4EA4"))}}]),U}(r.default.Component),b=(0,D.connectForm)(N),y.abrupt("return",b);case 46:case"end":return y.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f;return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=e("3PQu"),t=e("K+nK"),u.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return u.t0=t,u.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return u.t1=u.sent,m=(0,u.t0)(u.t1),u.t2=t,u.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return u.t3=u.sent,i=(0,u.t2)(u.t3),u.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 16:return c=u.sent,u.t4=l,u.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return u.t5=u.sent,n=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},r=function(){var b=(0,n.useForm)();return i.default.createElement("div",null,i.default.createElement(n.default,{form:b,schema:s}),i.default.createElement(m.default,{type:"primary",onClick:b.submit},"\u63D0\u4EA4"))},f=r,u.abrupt("return",f);case 26:case"end":return u.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f;return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=e("3PQu"),t=e("K+nK"),u.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return u.t0=t,u.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return u.t1=u.sent,m=(0,u.t0)(u.t1),u.t2=t,u.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return u.t3=u.sent,i=(0,u.t2)(u.t3),u.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 16:return c=u.sent,u.t4=l,u.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return u.t5=u.sent,n=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},r=function(){var b=(0,n.useForm)(),a=function(z,k){k.length>0?alert("errors:"+JSON.stringify(k)):alert("formData:"+JSON.stringify(z,null,2))};return i.default.createElement("div",null,i.default.createElement(n.default,{form:b,schema:s,onFinish:a}),i.default.createElement(m.default,{type:"primary",onClick:b.submit},"\u63D0\u4EA4"))},f=r,u.abrupt("return",f);case 26:case"end":return u.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s;return o.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return n=function(){var u=(0,i.useForm)(),N=function(a,y){y.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(y))):alert(JSON.stringify(a))};return m.default.createElement("div",null,m.default.createElement(i.default,{form:u,schema:c,onFinish:N}),m.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},l=e("3PQu"),t=e("K+nK"),f.t0=t,f.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return f.t1=f.sent,m=(0,f.t0)(f.t1),f.t2=l,f.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return f.t3=f.sent,i=(0,f.t2)(f.t3),c={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=n,f.abrupt("return",s);case 16:case"end":return f.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i=function(f){return{type:"object",displayType:f,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},c=function(){return t.default.createElement("div",null,t.default.createElement("h2",null,"display: row"),t.default.createElement(m.default,{schema:i("row")}),t.default.createElement("h2",null,"display: column"),t.default.createElement(m.default,{schema:i("column")}))},s.abrupt("return",c);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){return t.default.createElement(m.default,{schema:i})},s.abrupt("return",c);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},c=function(){return t.default.createElement(m.default,{readOnly:!0,schema:i})},s.abrupt("return",c);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},c=function(){return t.default.createElement(m.default,{labelWidth:"200",schema:i})},s.abrupt("return",c);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},c=function(){return t.default.createElement(m.default,{schema:i})},n=c,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},c=function(){return t.default.createElement(m.default,{schema:i})},n=c,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},c=function(){return t.default.createElement(m.default,{schema:i})},n=c,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},c=function(){return t.default.createElement(m.default,{schema:i})},n=c,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f,D,u,N;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return a.t0=t,a.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return a.t2=t,a.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return a.t4=t,a.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return a.t5=a.sent,c=(0,a.t4)(a.t5),a.t6=t,a.next=26,Promise.resolve().then(e.bind(null,"tJVT"));case 26:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.t8=l,a.next=31,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 31:return a.t9=a.sent,s=(0,a.t8)(a.t9),a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 35:return r=a.sent,a.t10=l,a.next=39,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 39:return a.t11=a.sent,f=(0,a.t10)(a.t11),a.next=43,e.e(15).then(e.bind(null,"OH0R"));case 43:return D=a.sent,u=function(){var z=(0,f.useForm)(),k=(0,s.useState)({}),U=(0,n.default)(k,2),ae=U[0],w=U[1],fe=function(){(0,D.fakeApi)("xxx/getForm").then(function(d){z.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,D.delay)(1e3).then(function(Ge){w({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var je=function(d,S){S.length>0?c.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(S.map(function(R){return R.name}))):(0,D.fakeApi)("xxx/submit",d).then(function(R){return c.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(f.default,{form:z,schema:ae,onFinish:je}),s.default.createElement(m.default,null,s.default.createElement(i.default,{onClick:fe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(i.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=u,a.abrupt("return",N);case 47:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:p}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f,D,u,N;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return a.t0=t,a.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.t2=t,a.next=12,Promise.resolve().then(e.bind(null,"PpiC"));case 12:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.next=16,e.e(14).then(e.t.bind(null,"tL+A",7));case 16:return a.t4=t,a.next=19,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 19:return a.t5=a.sent,c=(0,a.t4)(a.t5),a.t6=t,a.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 28:return s=a.sent,a.t8=l,a.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=36,e.e(15).then(e.bind(null,"OH0R"));case 36:return f=a.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var z=(0,r.useForm)(),k=function(w,fe){fe.length>0?c.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(fe.map(function(je){return je.name}))):(0,f.fakeApi)("xxx/submit",w).then(function(je){return c.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},U=function(w){var fe=w.data,je=w.errors,Ge=w.schema,d=(0,i.default)(w,["data","errors","schema"]);return(0,f.fakeApi)("xxx/validation").then(function(S){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(r.default,{form:z,schema:D,beforeFinish:U,onFinish:k}),n.default.createElement(m.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=u,a.abrupt("return",N);case 41:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:p}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f,D,u,N;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return a.t0=t,a.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return a.t2=t,a.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return a.t4=t,a.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return a.t5=a.sent,c=(0,a.t4)(a.t5),a.t6=t,a.next=26,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 26:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=30,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 30:return s=a.sent,a.t8=l,a.next=34,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 34:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=38,e.e(15).then(e.bind(null,"OH0R"));case 38:return f=a.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var z=(0,r.useForm)(),k=function(w,fe){fe.length>0?c.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(fe.map(function(je){return je.name}))):(0,f.fakeApi)("xxx/submit",w).then(function(je){return c.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},U=function(){(0,f.fakeApi)("xxx/getForm").then(function(w){z.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(r.default,{form:z,schema:D,onFinish:k}),n.default.createElement(m.default,null,n.default.createElement(i.default,{onClick:U},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),n.default.createElement(i.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=u,a.abrupt("return",N);case 43:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:p}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f,D,u;return o.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return l=e("3PQu"),t=e("K+nK"),b.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return b.t0=t,b.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return b.t1=b.sent,m=(0,b.t0)(b.t1),b.next=11,e.e(14).then(e.t.bind(null,"tL+A",7));case 11:return b.t2=t,b.next=14,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 14:return b.t3=b.sent,i=(0,b.t2)(b.t3),b.t4=l,b.next=19,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 19:return b.t5=b.sent,c=(0,b.t4)(b.t5),b.next=23,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 23:return n=b.sent,b.t6=l,b.next=27,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 27:return b.t7=b.sent,s=(0,b.t6)(b.t7),b.next=31,e.e(15).then(e.bind(null,"OH0R"));case 31:return r=b.sent,f={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var y=(0,s.useForm)(),z=function(){y.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},k=function(ae,w){w.length>0?i.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(w.map(function(fe){return fe.name}))):i.default.info(JSON.stringify(ae))};return c.default.createElement("div",{style:{width:"400px"}},c.default.createElement(s.default,{form:y,schema:f,onMount:z,onFinish:k}),c.default.createElement(m.default,{type:"primary",onClick:y.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=D,b.abrupt("return",u);case 36:case"end":return b.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:p}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s;return o.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return l=e("3PQu"),t=e("K+nK"),f.t0=t,f.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return f.t1=f.sent,m=(0,f.t0)(f.t1),f.t2=l,f.next=10,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 10:return f.t3=f.sent,i=(0,f.t2)(f.t3),c={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},n=function(){var u=(0,i.useForm)();return m.default.createElement(i.default,{form:u,schema:c})},s=n,f.abrupt("return",s);case 16:case"end":return f.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),s.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return i=s.sent,c=function(){return t.default.createElement(m.default,{schema:i.expression})},s.abrupt("return",c);case 16:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:ce}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r;return o.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return l=e("3PQu"),D.t0=l,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,t=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 8:return m=D.sent,D.t2=l,D.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return D.t3=D.sent,i=(0,D.t2)(D.t3),c=function(N){return new Promise(function(b){return setTimeout(b,N)})},n={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var N=(0,i.useForm)(),b=function(){N.setValues({input1:"hello world"}),c(3e3).then(function(y){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return t.default.createElement(i.default,{form:N,schema:n,onMount:b})},r=s,D.abrupt("return",r);case 19:case"end":return D.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s;return o.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return l=e("3PQu"),f.t0=l,f.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return f.t1=f.sent,t=(0,f.t0)(f.t1),f.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 8:return m=f.sent,f.t2=l,f.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return f.t3=f.sent,i=(0,f.t2)(f.t3),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},n=function(){var u=(0,i.useForm)(),N={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return t.default.createElement(i.default,{form:u,schema:c,watch:N})},s=n,f.abrupt("return",s);case 18:case"end":return f.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f;return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=e("3PQu"),t=e("K+nK"),u.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return u.t0=t,u.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return u.t1=u.sent,m=(0,u.t0)(u.t1),u.t2=l,u.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return u.t3=u.sent,i=(0,u.t2)(u.t3),u.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 16:return c=u.sent,u.t4=l,u.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return u.t5=u.sent,n=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},r=function(){var b=(0,n.useForm)(),a=function(k,U){U.length>0?alert("errorFields:"+JSON.stringify(U)):alert("formData:"+JSON.stringify(k,null,2))},y={input1:function(k){k.length>2?b.setSchemaByPath("obj1.select",function(U){var ae=U.enumNames;return{enumNames:ae.map(function(w){return w+"a"})}}):b.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return i.default.createElement("div",null,i.default.createElement(n.default,{form:b,schema:s,onFinish:a,watch:y}),i.default.createElement(m.default,{type:"",style:{marginRight:8},onClick:function(){return b.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),i.default.createElement(m.default,{type:"primary",onClick:b.submit},"\u63D0\u4EA4"))},f=r,u.abrupt("return",f);case 26:case"end":return u.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f,D,u,N;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return a.t0=t,a.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 11:return a.t2=t,a.next=14,Promise.all([e.e(0),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 14:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.t4=t,a.next=19,e.e(64).then(e.bind(null,"0Owb"));case 19:return a.t5=a.sent,c=(0,a.t4)(a.t5),a.t6=l,a.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 28:return s=a.sent,a.t8=l,a.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),f={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(z){return n.default.createElement(i.default,(0,c.default)({addonBefore:"http://",addonAfter:".com"},z))},u=function(){var z=(0,r.useForm)(),k=function(){};return n.default.createElement("div",null,n.default.createElement(r.default,{form:z,schema:f,widgets:{site:D},onFinish:function(ae){return alert(JSON.stringify(ae,null,2))}}),n.default.createElement(m.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4"))},N=u,a.abrupt("return",N);case 39:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),s.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return i=s.sent,c=function(){return t.default.createElement(m.default,{schema:i.basic})},s.abrupt("return",c);case 16:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:ce}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:an},"main.js":{import:"./main",content:Ke},"json/simplest.json":{import:"./json/simplest.json",content:Ve},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Be},"monaco/index.js":{import:"./monaco",content:be},"theme.css":{import:"./theme.css",content:Ce},"index.css":{import:"./index.css",content:Re}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{tsx:Je}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n,s,r,f;return o.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=e("K+nK"),u.t0=l,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,t=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(m=u.sent,i=[],c=0;c<6;c++)i.push({id:c.toString(),title:"\u6807\u9898".concat(c+1),created_at:new Date().getTime()});return n={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},s=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(b,a){return t.default.createElement("a",{onClick:function(){return alert(b.title)}},"\u7F16\u8F91")}}],r=function(){var b=function(){return{rows:i,total:i.length}};return t.default.createElement(m.TableProvider,null,t.default.createElement(m.Search,{schema:n,api:b}),t.default.createElement(m.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:s,rowKey:"id"}))},f=r,u.abrupt("return",f);case 16:case"end":return u.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){var l,t,m,i,c,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},c=function(){return t.default.createElement("div",{style:{height:"80vh"}},t.default.createElement(m.default,{defaultValue:i}))},n=c,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:he}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:T}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(O.dynamic)({loader:function(){var g=Object(C.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:Ue},"index.less":{import:"./index.less",content:He}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.6"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},MaUl:function($e,ye,e){"use strict";e.r(ye);var C=e("q1tI"),j=e.n(C),o=e("dEAq"),O=e.n(o),Ae=e("0zqC"),K=e("JjdP"),p=j.a.memo(K.default["lifeCycle-demo"].component);ye.default=De=>(j.a.useEffect(()=>{De!=null&&De.location.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(De.location.hash.slice(1)))},[]),j.a.createElement(j.a.Fragment,null,j.a.createElement(j.a.Fragment,null,j.a.createElement("div",{className:"markdown"},j.a.createElement("h1",{id:"\u751F\u547D\u5468\u671F-\u52A0\u8F7D---\u63D0\u4EA4"},j.a.createElement(o.AnchorLink,{to:"#\u751F\u547D\u5468\u671F-\u52A0\u8F7D---\u63D0\u4EA4","aria-hidden":"true",tabIndex:-1},j.a.createElement("span",{className:"icon icon-link"})),"\u751F\u547D\u5468\u671F (\u52A0\u8F7D - \u63D0\u4EA4)"),j.a.createElement("p",null,"\u5BF9\u4E8E\u8868\u5355\u6700\u91CD\u8981\u7684\u4E24\u4E2A\u64CD\u4F5C\u65F6\u673A\u662F\u201C\u52A0\u8F7D\u201D\u548C\u201C\u63D0\u4EA4\u201D"),j.a.createElement("h2",{id:"onmount-\uFF08\u52A0\u8F7D\uFF09"},j.a.createElement(o.AnchorLink,{to:"#onmount-\uFF08\u52A0\u8F7D\uFF09","aria-hidden":"true",tabIndex:-1},j.a.createElement("span",{className:"icon icon-link"})),"onMount \uFF08\u52A0\u8F7D\uFF09"),j.a.createElement("ol",null,j.a.createElement("li",null,"\u7531\u4E8E React \u7EC4\u4EF6\u7684 ",j.a.createElement("code",null,"componentDidMount"),"(\u6216\u8005 useEffect) \u5F88\u591A\u65F6\u5019\u5E76\u4E0D\u80FD\u51C6\u786E\u76D1\u542C\u5230\u201C\u8868\u5355\u52A0\u8F7D\u5B8C\u6210\u201D\u8FD9\u4E2A\u65F6\u95F4\u70B9\uFF0C\u6240\u4EE5 FormRender \u63D0\u4F9B\u4E86 props ",j.a.createElement("code",null,"onMount"),"\uFF0C\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u6267\u884C\u3002 \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u5B9A\u4E49\u662F\uFF1A\u5F53\u975E\u7A7A\u7684 schema \u9996\u6B21\u4F20\u5165 FormRender \u5B8C\u6210\u8868\u5355\u6E32\u67D3\u4E4B\u540E\u3002\u5176\u4E2D undefined\u3001null\u3001","{","}"," \u90FD\u89C6\u4E3A\u201C\u7A7A\u201D\u7684 schema\u3002"),j.a.createElement("li",null,j.a.createElement("code",null,"onMount")," \u5E38\u7528\u4E8E\u52A0\u8F7D\u521D\u59CB\u6570\u636E\uFF0C\u6216\u662F\u6839\u636E\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u6570\u636E\u8FDB\u4E00\u6B65\u8865\u5145 schema\uFF08\u4F8B\u5982\u4E0B\u62C9\u9009\u6846\u7684\u9009\u9879\uFF09"),j.a.createElement("li",null,"\u5982\u679C schema \u6765\u81EA\u670D\u52A1\u7AEF\u63A5\u53E3\uFF0C\u6CE8\u610F\u4E0D\u8981\u4F7F\u7528",j.a.createElement("code",null,"onMount"),"\u6765\u52A0\u8F7D schema\uFF0C\u800C\u4F7F\u7528",j.a.createElement("code",null,"componentDidMount"),"\uFF0C\u56E0\u4E3A",j.a.createElement("code",null,"onMount"),"\u7684\u89E6\u53D1\u673A\u5236\u662F\u5224\u65AD\u975E\u7A7A schema \u5DF2\u7ECF\u4F20\u5165 FormRender"))),j.a.createElement(Ae.default,K.default["lifeCycle-demo"].previewerProps,j.a.createElement(p,null)),j.a.createElement("div",{className:"markdown"},j.a.createElement("h2",{id:"beforefinish--onfinish-\uFF08\u63D0\u4EA4\uFF09"},j.a.createElement(o.AnchorLink,{to:"#beforefinish--onfinish-\uFF08\u63D0\u4EA4\uFF09","aria-hidden":"true",tabIndex:-1},j.a.createElement("span",{className:"icon icon-link"})),"beforeFinish / onFinish \uFF08\u63D0\u4EA4\uFF09"),j.a.createElement("p",null,"\u8868\u5355\u63D0\u4EA4\u7684\u6D41\u7A0B\uFF1A"),j.a.createElement("ol",null,j.a.createElement("li",null,"\u7528\u6237\u8C03\u7528 ",j.a.createElement("code",null,"form.submit")," \u63D0\u4EA4\u5F00\u59CB"),j.a.createElement("li",null,"\u672C\u5730\u6821\u9A8C\u5F00\u59CB\uFF0C\u5982\u679C\u672A\u901A\u8FC7\uFF0C\u5C55\u793A\u6821\u9A8C\u9519\u8BEF"),j.a.createElement("li",null,"\u672C\u5730\u6821\u9A8C\u7ED3\u675F\uFF0C",j.a.createElement("code",null,"beforeFinish")," \u5F00\u59CB\u6267\u884C\uFF0C\u4E00\u822C\u7528\u4E8E\u56DE\u586B\u8FDC\u7AEF\u6821\u9A8C\uFF0C\u5982\u679C\u672A\u901A\u8FC7\u5C55\u793A\u6821\u9A8C\u9519\u8BEF"),j.a.createElement("li",null,"\u6821\u9A8C\u7ED3\u675F\uFF0C",j.a.createElement("code",null,"onFinish")," \u5F00\u59CB\u6267\u884C\uFF0C\u8868\u5355\u6570\u636E\u548C\u6821\u9A8C\u4FE1\u606F\u4EE5\u5165\u53C2\u5F62\u5F0F\u56DE\u4F20\u7ED9\u7528\u6237")),j.a.createElement("p",null,"beforeFinish \u548C onFinish \u7684\u4F7F\u7528\u8BE6\u89C1 ",j.a.createElement(o.Link,{to:"/form-render/advanced/form-methods"},"\u8868\u5355\u65B9\u6CD5"))))))},TIsu:function($e,ye,e){},Zs1V:function($e){$e.exports=JSON.parse("{}")},k3GJ:function($e,ye,e){"use strict";e.r(ye),e.d(ye,"TabPane",function(){return k});var C=e("wx14"),j=e("rePB"),o=e("ODXe"),O=e("U8pU"),Ae=e("Ff2n"),K=e("VTBJ"),p=e("q1tI"),De=e("TSYQ"),ce=e.n(De),an=e("Zm9Q"),Ke=e("5Z9U"),Ve=e("6cGi"),Be=e("KQm4"),be=e("wgJM"),Ce=e("t23M");function Re(d){var S=Object(p.useRef)(),R=Object(p.useRef)(!1);function A(){for(var F=arguments.length,E=new Array(F),I=0;I<F;I++)E[I]=arguments[I];R.current||(be.a.cancel(S.current),S.current=Object(be.a)(function(){d.apply(void 0,E)}))}return Object(p.useEffect)(function(){return function(){R.current=!0,be.a.cancel(S.current)}},[]),A}function Je(d){var S=Object(p.useRef)([]),R=Object(p.useState)({}),A=Object(o.a)(R,2),F=A[1],E=Object(p.useRef)(typeof d=="function"?d():d),I=Re(function(){var P=E.current;S.current.forEach(function(Q){P=Q(P)}),S.current=[],E.current=P,F({})});function M(P){S.current.push(P),I()}return[E.current,M]}var he=e("4IlW");function ze(d,S){var R,A=d.prefixCls,F=d.id,E=d.active,I=d.rtl,M=d.tab,P=M.key,Q=M.tab,W=M.disabled,$=M.closeIcon,X=d.tabBarGutter,re=d.tabPosition,_=d.closable,H=d.renderWrapper,pe=d.removeAriaLabel,le=d.editable,ue=d.onClick,de=d.onRemove,se=d.onFocus,oe="".concat(A,"-tab");p.useEffect(function(){return de},[]);var q={};re==="top"||re==="bottom"?q[I?"marginLeft":"marginRight"]=X:q.marginBottom=X;var ge=le&&_!==!1&&!W;function ee(V){W||ue(V)}function Y(V){V.preventDefault(),V.stopPropagation(),le.onEdit("remove",{key:P,event:V})}var G=p.createElement("div",{key:P,ref:S,className:ce()(oe,(R={},Object(j.a)(R,"".concat(oe,"-with-remove"),ge),Object(j.a)(R,"".concat(oe,"-active"),E),Object(j.a)(R,"".concat(oe,"-disabled"),W),R)),style:q,onClick:ee},p.createElement("div",{role:"tab","aria-selected":E,id:F&&"".concat(F,"-tab-").concat(P),className:"".concat(oe,"-btn"),"aria-controls":F&&"".concat(F,"-panel-").concat(P),"aria-disabled":W,tabIndex:W?null:0,onClick:function(B){B.stopPropagation(),ee(B)},onKeyDown:function(B){[he.a.SPACE,he.a.ENTER].includes(B.which)&&(B.preventDefault(),ee(B))},onFocus:se},Q),ge&&p.createElement("button",{type:"button","aria-label":pe||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(B){B.stopPropagation(),Y(B)}},$||le.removeIcon||"\xD7"));return H&&(G=H(G)),G}var T=p.forwardRef(ze),Ue={width:0,height:0,left:0,top:0};function He(d,S,R){return Object(p.useMemo)(function(){for(var A,F=new Map,E=S.get((A=d[0])===null||A===void 0?void 0:A.key)||Ue,I=E.left+E.width,M=0;M<d.length;M+=1){var P=d[M].key,Q=S.get(P);if(!Q){var W;Q=S.get((W=d[M-1])===null||W===void 0?void 0:W.key)||Ue}var $=F.get(P)||Object(K.a)({},Q);$.right=I-$.left-$.width,F.set(P,$)}return F},[d.map(function(A){return A.key}).join("_"),S,R])}var Ye={width:0,height:0,left:0,top:0,right:0};function g(d,S,R,A,F){var E=F.tabs,I=F.tabPosition,M=F.rtl,P,Q,W;["top","bottom"].includes(I)?(P="width",Q=M?"right":"left",W=Math.abs(S.left)):(P="height",Q="top",W=-S.top);var $=S[P],X=R[P],re=A[P],_=$;return X+re>$&&(_=$-re),Object(p.useMemo)(function(){if(!E.length)return[0,0];for(var H=E.length,pe=H,le=0;le<H;le+=1){var ue=d.get(E[le].key)||Ye;if(ue[Q]+ue[P]>W+_){pe=le-1;break}}for(var de=0,se=H-1;se>=0;se-=1){var oe=d.get(E[se].key)||Ye;if(oe[Q]<W){de=se+1;break}}return[de,pe]},[d,W,_,I,E.map(function(H){return H.key}).join("_"),M])}var v=e("1j5w"),h=e("eDIo");function l(d,S){var R=d.prefixCls,A=d.editable,F=d.locale,E=d.style;return!A||A.showAdd===!1?null:p.createElement("button",{ref:S,type:"button",className:"".concat(R,"-nav-add"),style:E,"aria-label":(F==null?void 0:F.addAriaLabel)||"Add tab",onClick:function(M){A.onEdit("add",{event:M})}},A.addIcon||"+")}var t=p.forwardRef(l);function m(d,S){var R=d.prefixCls,A=d.id,F=d.tabs,E=d.locale,I=d.mobile,M=d.moreIcon,P=M===void 0?"More":M,Q=d.moreTransitionName,W=d.style,$=d.className,X=d.editable,re=d.tabBarGutter,_=d.rtl,H=d.onTabClick,pe=Object(p.useState)(!1),le=Object(o.a)(pe,2),ue=le[0],de=le[1],se=Object(p.useState)(null),oe=Object(o.a)(se,2),q=oe[0],ge=oe[1],ee="".concat(A,"-more-popup"),Y="".concat(R,"-dropdown"),G=q!==null?"".concat(ee,"-").concat(q):null,V=E==null?void 0:E.dropdownAriaLabel,B=p.createElement(v.default,{onClick:function(ie){var Ee=ie.key,Se=ie.domEvent;H(Ee,Se),de(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":G,selectedKeys:[q],"aria-label":V!==void 0?V:"expanded dropdown"},F.map(function(x){return p.createElement(v.MenuItem,{key:x.key,id:"".concat(ee,"-").concat(x.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(x.key),disabled:x.disabled},x.tab)}));function Z(x){for(var ie=F.filter(function(Ie){return!Ie.disabled}),Ee=ie.findIndex(function(Ie){return Ie.key===q})||0,Se=ie.length,Ne=0;Ne<Se;Ne+=1){Ee=(Ee+x+Se)%Se;var Fe=ie[Ee];if(!Fe.disabled){ge(Fe.key);return}}}function ne(x){var ie=x.which;if(!ue){[he.a.DOWN,he.a.SPACE,he.a.ENTER].includes(ie)&&(de(!0),x.preventDefault());return}switch(ie){case he.a.UP:Z(-1),x.preventDefault();break;case he.a.DOWN:Z(1),x.preventDefault();break;case he.a.ESC:de(!1);break;case he.a.SPACE:case he.a.ENTER:q!==null&&H(q,x);break}}Object(p.useEffect)(function(){var x=document.getElementById(G);x&&x.scrollIntoView&&x.scrollIntoView(!1)},[q]),Object(p.useEffect)(function(){ue||ge(null)},[ue]);var te=Object(j.a)({},_?"marginLeft":"marginRight",re);F.length||(te.visibility="hidden",te.order=1);var Te=ce()(Object(j.a)({},"".concat(Y,"-rtl"),_)),Le=I?null:p.createElement(h.default,{prefixCls:Y,overlay:B,trigger:["hover"],visible:ue,transitionName:Q,onVisibleChange:de,overlayClassName:Te,mouseEnterDelay:.1,mouseLeaveDelay:.1},p.createElement("button",{type:"button",className:"".concat(R,"-nav-more"),style:te,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(A,"-more"),"aria-expanded":ue,onKeyDown:ne},P));return p.createElement("div",{className:ce()("".concat(R,"-nav-operations"),$),style:W,ref:S},Le,p.createElement(t,{prefixCls:R,locale:E,editable:X}))}var i=p.forwardRef(m),c=Object(p.createContext)(null),n=.1,s=.01,r=20,f=Math.pow(.995,r);function D(d,S){var R=Object(p.useState)(),A=Object(o.a)(R,2),F=A[0],E=A[1],I=Object(p.useState)(0),M=Object(o.a)(I,2),P=M[0],Q=M[1],W=Object(p.useState)(0),$=Object(o.a)(W,2),X=$[0],re=$[1],_=Object(p.useState)(),H=Object(o.a)(_,2),pe=H[0],le=H[1],ue=Object(p.useRef)();function de(Y){var G=Y.touches[0],V=G.screenX,B=G.screenY;E({x:V,y:B}),window.clearInterval(ue.current)}function se(Y){if(!!F){Y.preventDefault();var G=Y.touches[0],V=G.screenX,B=G.screenY;E({x:V,y:B});var Z=V-F.x,ne=B-F.y;S(Z,ne);var te=Date.now();Q(te),re(te-P),le({x:Z,y:ne})}}function oe(){if(!!F&&(E(null),le(null),pe)){var Y=pe.x/X,G=pe.y/X,V=Math.abs(Y),B=Math.abs(G);if(Math.max(V,B)<n)return;var Z=Y,ne=G;ue.current=window.setInterval(function(){if(Math.abs(Z)<s&&Math.abs(ne)<s){window.clearInterval(ue.current);return}Z*=f,ne*=f,S(Z*r,ne*r)},r)}}var q=Object(p.useRef)();function ge(Y){var G=Y.deltaX,V=Y.deltaY,B=0,Z=Math.abs(G),ne=Math.abs(V);Z===ne?B=q.current==="x"?G:V:Z>ne?(B=G,q.current="x"):(B=V,q.current="y"),S(-B,-B)&&Y.preventDefault()}var ee=Object(p.useRef)(null);ee.current={onTouchStart:de,onTouchMove:se,onTouchEnd:oe,onWheel:ge},p.useEffect(function(){function Y(Z){ee.current.onTouchStart(Z)}function G(Z){ee.current.onTouchMove(Z)}function V(Z){ee.current.onTouchEnd(Z)}function B(Z){ee.current.onWheel(Z)}return document.addEventListener("touchmove",G,{passive:!1}),document.addEventListener("touchend",V,{passive:!1}),d.current.addEventListener("touchstart",Y,{passive:!1}),d.current.addEventListener("wheel",B),function(){document.removeEventListener("touchmove",G),document.removeEventListener("touchend",V)}},[])}function u(){var d=Object(p.useRef)(new Map);function S(A){return d.current.has(A)||d.current.set(A,p.createRef()),d.current.get(A)}function R(A){d.current.delete(A)}return[S,R]}function N(d,S){var R=p.useRef(d),A=p.useState({}),F=Object(o.a)(A,2),E=F[1];function I(M){var P=typeof M=="function"?M(R.current):M;P!==R.current&&S(P,R.current),R.current=P,E({})}return[R.current,I]}var b=function(S){var R=S.position,A=S.prefixCls,F=S.extra;if(!F)return null;var E,I=F;return R==="right"&&(E=I.right||!I.left&&I||null),R==="left"&&(E=I.left||null),E?p.createElement("div",{className:"".concat(A,"-extra-content")},E):null};function a(d,S){var R,A=p.useContext(c),F=A.prefixCls,E=A.tabs,I=d.className,M=d.style,P=d.id,Q=d.animated,W=d.activeKey,$=d.rtl,X=d.extra,re=d.editable,_=d.locale,H=d.tabPosition,pe=d.tabBarGutter,le=d.children,ue=d.onTabClick,de=d.onTabScroll,se=Object(p.useRef)(),oe=Object(p.useRef)(),q=Object(p.useRef)(),ge=Object(p.useRef)(),ee=u(),Y=Object(o.a)(ee,2),G=Y[0],V=Y[1],B=H==="top"||H==="bottom",Z=N(0,function(J,L){B&&de&&de({direction:J>L?"left":"right"})}),ne=Object(o.a)(Z,2),te=ne[0],Te=ne[1],Le=N(0,function(J,L){!B&&de&&de({direction:J>L?"top":"bottom"})}),x=Object(o.a)(Le,2),ie=x[0],Ee=x[1],Se=Object(p.useState)(0),Ne=Object(o.a)(Se,2),Fe=Ne[0],Ie=Ne[1],rn=Object(p.useState)(0),sn=Object(o.a)(rn,2),Ze=sn[0],on=sn[1],fn=Object(p.useState)(0),ln=Object(o.a)(fn,2),we=ln[0],pn=ln[1],un=Object(p.useState)(0),Qe=Object(o.a)(un,2),dn=Qe[0],me=Qe[1],We=Object(p.useState)(null),mn=Object(o.a)(We,2),Pe=mn[0],Zn=mn[1],wn=Object(p.useState)(null),Sn=Object(o.a)(wn,2),Xe=Sn[0],xn=Sn[1],kn=Object(p.useState)(0),Dn=Object(o.a)(kn,2),qn=Dn[0],_n=Dn[1],et=Object(p.useState)(0),Fn=Object(o.a)(et,2),nt=Fn[0],tt=Fn[1],at=Je(new Map),On=Object(o.a)(at,2),rt=On[0],st=On[1],cn=He(E,rt,Fe),Pn="".concat(F,"-nav-operations-hidden"),xe=0,ke=0;B?$?(xe=0,ke=Math.max(0,Fe-Pe)):(xe=Math.min(0,Pe-Fe),ke=0):(xe=Math.min(0,Xe-Ze),ke=0);function vn(J){return J<xe?xe:J>ke?ke:J}var An=Object(p.useRef)(),ot=Object(p.useState)(),Bn=Object(o.a)(ot,2),hn=Bn[0],Tn=Bn[1];function gn(){Tn(Date.now())}function yn(){window.clearTimeout(An.current)}D(se,function(J,L){function ve(Oe,_e){Oe(function(en){var nn=vn(en+_e);return nn})}if(B){if(Pe>=Fe)return!1;ve(Te,J)}else{if(Xe>=Ze)return!1;ve(Ee,L)}return yn(),gn(),!0}),Object(p.useEffect)(function(){return yn(),hn&&(An.current=window.setTimeout(function(){Tn(0)},100)),yn},[hn]);function Nn(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:W,L=cn.get(J)||{width:0,height:0,left:0,right:0,top:0};if(B){var ve=te;$?L.right<te?ve=L.right:L.right+L.width>te+Pe&&(ve=L.right+L.width-Pe):L.left<-te?ve=-L.left:L.left+L.width>-te+Pe&&(ve=-(L.left+L.width-Pe)),Ee(0),Te(vn(ve))}else{var Oe=ie;L.top<-ie?Oe=-L.top:L.top+L.height>-ie+Xe&&(Oe=-(L.top+L.height-Xe)),Te(0),Ee(vn(Oe))}}var it=g(cn,{width:Pe,height:Xe,left:te,top:ie},{width:we,height:dn},{width:qn,height:nt},Object(K.a)(Object(K.a)({},d),{},{tabs:E})),In=Object(o.a)(it,2),lt=In[0],ut=In[1],dt=E.map(function(J){var L=J.key;return p.createElement(T,{id:P,prefixCls:F,key:L,rtl:$,tab:J,closable:J.closable,editable:re,active:L===W,tabPosition:H,tabBarGutter:pe,renderWrapper:le,removeAriaLabel:_==null?void 0:_.removeAriaLabel,ref:G(L),onClick:function(Oe){ue(L,Oe)},onRemove:function(){V(L)},onFocus:function(){Nn(L),gn(),$||(se.current.scrollLeft=0),se.current.scrollTop=0}})}),bn=Re(function(){var J,L,ve,Oe,_e,en,nn,Rn,En,ht=((J=se.current)===null||J===void 0?void 0:J.offsetWidth)||0,gt=((L=se.current)===null||L===void 0?void 0:L.offsetHeight)||0,zn=((ve=ge.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,Un=((Oe=ge.current)===null||Oe===void 0?void 0:Oe.offsetHeight)||0,yt=((_e=q.current)===null||_e===void 0?void 0:_e.offsetWidth)||0,bt=((en=q.current)===null||en===void 0?void 0:en.offsetHeight)||0;Zn(ht),xn(gt),_n(zn),tt(Un);var Hn=(((nn=oe.current)===null||nn===void 0?void 0:nn.offsetWidth)||0)-zn,Gn=(((Rn=oe.current)===null||Rn===void 0?void 0:Rn.offsetHeight)||0)-Un;Ie(Hn),on(Gn);var Qn=(En=q.current)===null||En===void 0?void 0:En.className.includes(Pn);pn(Hn-(Qn?0:yt)),me(Gn-(Qn?0:bt)),st(function(){var Xn=new Map;return E.forEach(function(jt){var Yn=jt.key,tn=G(Yn).current;tn&&Xn.set(Yn,{width:tn.offsetWidth,height:tn.offsetHeight,left:tn.offsetLeft,top:tn.offsetTop})}),Xn})}),mt=E.slice(0,lt),ct=E.slice(ut+1),Mn=[].concat(Object(Be.a)(mt),Object(Be.a)(ct)),ft=Object(p.useState)(),Kn=Object(o.a)(ft,2),pt=Kn[0],vt=Kn[1],Me=cn.get(W),Ln=Object(p.useRef)();function Wn(){be.a.cancel(Ln.current)}Object(p.useEffect)(function(){var J={};return Me&&(B?($?J.right=Me.right:J.left=Me.left,J.width=Me.width):(J.top=Me.top,J.height=Me.height)),Wn(),Ln.current=Object(be.a)(function(){vt(J)}),Wn},[Me,B,$]),Object(p.useEffect)(function(){Nn()},[W,Me,cn,B]),Object(p.useEffect)(function(){bn()},[$,pe,W,E.map(function(J){return J.key}).join("_")]);var $n=!!Mn.length,qe="".concat(F,"-nav-wrap"),jn,Cn,Vn,Jn;return B?$?(Cn=te>0,jn=te+Pe<Fe):(jn=te<0,Cn=-te+Pe<Fe):(Vn=ie<0,Jn=-ie+Xe<Ze),p.createElement("div",{ref:S,role:"tablist",className:ce()("".concat(F,"-nav"),I),style:M,onKeyDown:function(){gn()}},p.createElement(b,{position:"left",extra:X,prefixCls:F}),p.createElement(Ce.default,{onResize:bn},p.createElement("div",{className:ce()(qe,(R={},Object(j.a)(R,"".concat(qe,"-ping-left"),jn),Object(j.a)(R,"".concat(qe,"-ping-right"),Cn),Object(j.a)(R,"".concat(qe,"-ping-top"),Vn),Object(j.a)(R,"".concat(qe,"-ping-bottom"),Jn),R)),ref:se},p.createElement(Ce.default,{onResize:bn},p.createElement("div",{ref:oe,className:"".concat(F,"-nav-list"),style:{transform:"translate(".concat(te,"px, ").concat(ie,"px)"),transition:hn?"none":void 0}},dt,p.createElement(t,{ref:ge,prefixCls:F,locale:_,editable:re,style:{visibility:$n?"hidden":null}}),p.createElement("div",{className:ce()("".concat(F,"-ink-bar"),Object(j.a)({},"".concat(F,"-ink-bar-animated"),Q.inkBar)),style:pt}))))),p.createElement(i,Object(C.a)({},d,{ref:q,prefixCls:F,tabs:Mn,className:!$n&&Pn})),p.createElement(b,{position:"right",extra:X,prefixCls:F}))}var y=p.forwardRef(a);function z(d){var S=d.id,R=d.activeKey,A=d.animated,F=d.tabPosition,E=d.rtl,I=d.destroyInactiveTabPane,M=p.useContext(c),P=M.prefixCls,Q=M.tabs,W=A.tabPane,$=Q.findIndex(function(X){return X.key===R});return p.createElement("div",{className:ce()("".concat(P,"-content-holder"))},p.createElement("div",{className:ce()("".concat(P,"-content"),"".concat(P,"-content-").concat(F),Object(j.a)({},"".concat(P,"-content-animated"),W)),style:$&&W?Object(j.a)({},E?"marginRight":"marginLeft","-".concat($,"00%")):null},Q.map(function(X){return p.cloneElement(X.node,{key:X.key,prefixCls:P,tabKey:X.key,id:S,animated:W,active:X.key===R,destroyInactiveTabPane:I})})))}function k(d){var S=d.prefixCls,R=d.forceRender,A=d.className,F=d.style,E=d.id,I=d.active,M=d.animated,P=d.destroyInactiveTabPane,Q=d.tabKey,W=d.children,$=p.useState(R),X=Object(o.a)($,2),re=X[0],_=X[1];p.useEffect(function(){I?_(!0):P&&_(!1)},[I,P]);var H={};return I||(M?(H.visibility="hidden",H.height=0,H.overflowY="hidden"):H.display="none"),p.createElement("div",{id:E&&"".concat(E,"-panel-").concat(Q),role:"tabpanel",tabIndex:I?0:-1,"aria-labelledby":E&&"".concat(E,"-tab-").concat(Q),"aria-hidden":!I,style:Object(K.a)(Object(K.a)({},H),F),className:ce()("".concat(S,"-tabpane"),I&&"".concat(S,"-tabpane-active"),A)},(I||re||R)&&W)}var U=0;function ae(d){return Object(an.a)(d).map(function(S){if(p.isValidElement(S)){var R=S.key!==void 0?String(S.key):void 0;return Object(K.a)(Object(K.a)({key:R},S.props),{},{node:S})}return null}).filter(function(S){return S})}function w(d,S){var R,A=d.id,F=d.prefixCls,E=F===void 0?"rc-tabs":F,I=d.className,M=d.children,P=d.direction,Q=d.activeKey,W=d.defaultActiveKey,$=d.editable,X=d.animated,re=X===void 0?{inkBar:!0,tabPane:!1}:X,_=d.tabPosition,H=_===void 0?"top":_,pe=d.tabBarGutter,le=d.tabBarStyle,ue=d.tabBarExtraContent,de=d.locale,se=d.moreIcon,oe=d.moreTransitionName,q=d.destroyInactiveTabPane,ge=d.renderTabBar,ee=d.onChange,Y=d.onTabClick,G=d.onTabScroll,V=Object(Ae.a)(d,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),B=ae(M),Z=P==="rtl",ne;re===!1?ne={inkBar:!1,tabPane:!1}:re===!0?ne={inkBar:!0,tabPane:!0}:ne=Object(K.a)({inkBar:!0,tabPane:!1},Object(O.a)(re)==="object"?re:{});var te=Object(p.useState)(!1),Te=Object(o.a)(te,2),Le=Te[0],x=Te[1];Object(p.useEffect)(function(){x(Object(Ke.a)())},[]);var ie=Object(Ve.a)(function(){var me;return(me=B[0])===null||me===void 0?void 0:me.key},{value:Q,defaultValue:W}),Ee=Object(o.a)(ie,2),Se=Ee[0],Ne=Ee[1],Fe=Object(p.useState)(function(){return B.findIndex(function(me){return me.key===Se})}),Ie=Object(o.a)(Fe,2),rn=Ie[0],sn=Ie[1];Object(p.useEffect)(function(){var me=B.findIndex(function(mn){return mn.key===Se});if(me===-1){var We;me=Math.max(0,Math.min(rn,B.length-1)),Ne((We=B[me])===null||We===void 0?void 0:We.key)}sn(me)},[B.map(function(me){return me.key}).join("_"),Se,rn]);var Ze=Object(Ve.a)(null,{value:A}),on=Object(o.a)(Ze,2),fn=on[0],ln=on[1],we=H;Le&&!["left","right"].includes(H)&&(we="top"),Object(p.useEffect)(function(){A||(ln("rc-tabs-".concat(U)),U+=1)},[]);function pn(me,We){Y==null||Y(me,We),Ne(me),ee==null||ee(me)}var un={id:fn,activeKey:Se,animated:ne,tabPosition:we,rtl:Z,mobile:Le},Qe,dn=Object(K.a)(Object(K.a)({},un),{},{editable:$,locale:de,moreIcon:se,moreTransitionName:oe,tabBarGutter:pe,onTabClick:pn,onTabScroll:G,extra:ue,style:le,panes:M});return ge?Qe=ge(dn,y):Qe=p.createElement(y,dn),p.createElement(c.Provider,{value:{tabs:B,prefixCls:E}},p.createElement("div",Object(C.a)({ref:S,id:A,className:ce()(E,"".concat(E,"-").concat(we),(R={},Object(j.a)(R,"".concat(E,"-mobile"),Le),Object(j.a)(R,"".concat(E,"-editable"),$),Object(j.a)(R,"".concat(E,"-rtl"),Z),R),I)},V),Qe,p.createElement(z,Object(C.a)({destroyInactiveTabPane:q},un,{animated:ne}))))}var fe=p.forwardRef(w);fe.TabPane=k;var je=fe,Ge=ye.default=je}}]);
