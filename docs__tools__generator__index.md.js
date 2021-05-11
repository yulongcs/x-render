(window.webpackJsonp=window.webpackJsonp||[]).push([[48,9],{"0zqC":function(Ve,ye,e){"use strict";e.r(ye);var j=e("tJVT"),t=e("q1tI"),l=e.n(t),P=e("k3GJ"),je=e("MZF8"),L=e("dEAq"),f=e.n(L),Ne=e("ZpkN"),ce=e("TIsu"),Je=e.n(ce);function Be(Te,be){var Re,Se=(Re=Te.match(/\.(\w+)$/))===null||Re===void 0?void 0:Re[1];return Se||(Se=be.tsx?"tsx":"jsx"),Se}var Oe=Te=>{var be,Re,Se,ze=Object(t.useRef)(),he=Object(t.useContext)(L.context),Ue=he.locale,N=Object(L.useLocaleProps)(Ue,Te),He=Object(L.useDemoUrl)(N.identifier),Ge=N.demoUrl||He,Ye=(je.a===null||je.a===void 0?void 0:je.a.location.hash)==="#".concat(N.identifier),y=Object.keys(N.sources).length===1,h=Object(L.useCodeSandbox)((be=N.hideActions)!==null&&be!==void 0&&be.includes("CSB")?null:N),g=Object(L.useRiddle)((Re=N.hideActions)!==null&&Re!==void 0&&Re.includes("RIDDLE")?null:N),u=Object(L.useMotions)(N.motions||[],ze.current),a=Object(j.default)(u,2),c=a[0],i=a[1],p=Object(L.useCopy)(),n=Object(j.default)(p,2),o=n[0],s=n[1],v=Object(t.useState)("_"),D=Object(j.default)(v,2),d=D[0],T=D[1],E=Object(t.useState)(Be(d,N.sources[d])),r=Object(j.default)(E,2),b=r[0],z=r[1],k=Object(t.useState)(Boolean(N.defaultShowCode)),U=Object(j.default)(k,2),ae=U[0],Z=U[1],fe=Object(t.useState)(Math.random()),Ee=Object(j.default)(fe,2),Qe=Ee[0],m=Ee[1],C=N.sources[d][b]||N.sources[d].content,R=Object(L.useTSPlaygroundUrl)(Ue,C),A=Object(t.useRef)(),O=Object(L.usePrefersColor)(),S=Object(j.default)(O,1),I=S[0];Object(t.useEffect)(()=>{m(Math.random())},[I]);function M(F){T(F),z(Be(F,N.sources[F]))}return l.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",Ye?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&l.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),l.a.createElement("div",{ref:ze,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?l.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:Qe,src:Ge,ref:A}):N.children),l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&l.a.createElement(L.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},h&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:h}),g&&l.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:g}),N.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:i,onClick:()=>c()}),N.iframe&&l.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>m(Math.random())}),!((Se=N.hideActions)!==null&&Se!==void 0&&Se.includes("EXTERNAL"))&&l.a.createElement(L.Link,{target:"_blank",to:Ge},l.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),l.a.createElement("span",null),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":s,onClick:()=>o(C)}),b==="tsx"&&ae&&l.a.createElement(L.Link,{target:"_blank",to:R},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),l.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ae?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Z(!ae)})),ae&&l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!y&&l.a.createElement(P.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:d,onChange:M},Object.keys(N.sources).map(F=>l.a.createElement(P.TabPane,{tab:F==="_"?"index.".concat(Be(F,N.sources[F])):F,key:F}))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(Ne.a,{code:C,lang:b,showCopy:!1}))))};ye.default=Oe},JjdP:function(Ve,ye,e){"use strict";e.r(ye);var j=e("9og8"),t=e("WmNS"),l=e.n(t),P=e("LtsZ"),je=`import React, { useRef } from 'react';
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

export default Demo;`,L=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,f=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ne=`import React from 'react';
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
};`,Je=`import React, { Component } from 'react';
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

export default Root;`,Be=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Oe=`{
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
}`,Te=`import { Select } from 'antd';
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

export default Demo;`,Re=`/* PrismJS 1.16.0
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
}`,Se=`.markdown p {
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
}`,ze=`import React from 'react';
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

export default Demo;`,Ue=`import React, { useState, useRef } from 'react';
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

export default Demo;`,N=`import React from 'react';
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

export default Demo;`,He=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Ge=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Ye=ye.default={"guide-card":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:je}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=e("3PQu"),a=e("K+nK"),s.t0=a,s.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return s.t1=s.sent,c=(0,s.t0)(s.t1),s.t2=u,s.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return s.t3=s.sent,i=(0,s.t2)(s.t3),s.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return p=s.sent,n=function(){var D=(0,i.useState)("Line"),d=(0,c.default)(D,2),T=d[0],E=d[1],r={Line:p.Line,Column:p.Column,PivotTable:p.PivotTable}[T];return i.default.createElement("div",null,i.default.createElement("div",{style:{marginBottom:10}},i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return E("Line")}},"\u6298\u7EBF\u56FE"),i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return E("Column")}},"\u67F1\u72B6\u56FE"),i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return E("PivotTable")}},"\u4EA4\u53C9\u8868")),i.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},s.abrupt("return",n);case 17:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return u=e("K+nK"),n.t0=u,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return c=n.sent,i=function(){return a.default.createElement(c.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(v,D,d){return a.default.createElement("div",null,a.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),a.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(D).length]}},v),a.default.createElement("p",null,JSON.stringify(D)),a.default.createElement("p",null,JSON.stringify(d)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=e("3PQu"),a=e("K+nK"),s.t0=a,s.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return s.t1=s.sent,c=(0,s.t0)(s.t1),s.t2=u,s.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return s.t3=s.sent,i=(0,s.t2)(s.t3),s.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return p=s.sent,n=function(){var D=(0,i.useState)(!1),d=(0,c.default)(D,2),T=d[0],E=d[1];return i.default.createElement(i.default.Fragment,null,i.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",i.default.createElement("input",{type:"checkbox",value:T,onChange:function(){return E(!T)}})),i.default.createElement(p.PivotTable,{leftExpandable:T,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},s.abrupt("return",n);case 17:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v,D,d,T,E;return l.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return u=e("3PQu"),a=e("K+nK"),b.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return b.t0=a,b.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return b.t1=b.sent,c=(0,b.t0)(b.t1),b.t2=a,b.next=12,e.e(62).then(e.bind(null,"fWQN"));case 12:return b.t3=b.sent,i=(0,b.t2)(b.t3),b.t4=a,b.next=17,e.e(63).then(e.bind(null,"mtLc"));case 17:return b.t5=b.sent,p=(0,b.t4)(b.t5),b.t6=a,b.next=22,e.e(65).then(e.bind(null,"yKVA"));case 22:return b.t7=b.sent,n=(0,b.t6)(b.t7),b.t8=a,b.next=27,e.e(59).then(e.bind(null,"879j"));case 27:return b.t9=b.sent,o=(0,b.t8)(b.t9),b.t10=a,b.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return b.t11=b.sent,s=(0,b.t10)(b.t11),b.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return v=b.sent,b.t12=u,b.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return b.t13=b.sent,D=(0,b.t12)(b.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(z){(0,n.default)(U,z);var k=(0,o.default)(U);function U(){return(0,i.default)(this,U),k.apply(this,arguments)}return(0,p.default)(U,[{key:"render",value:function(){var Z=this.props.form;return s.default.createElement("div",null,s.default.createElement(D.default,{form:Z,schema:d}),s.default.createElement(c.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),U}(s.default.Component),E=(0,D.connectForm)(T),b.abrupt("return",E);case 46:case"end":return b.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v;return l.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return u=e("3PQu"),a=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=a,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,c=(0,d.t0)(d.t1),d.t2=a,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,i=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 16:return p=d.sent,d.t4=u,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,n=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var E=(0,n.useForm)();return i.default.createElement("div",null,i.default.createElement(n.default,{form:E,schema:o}),i.default.createElement(c.default,{type:"primary",onClick:E.submit},"\u63D0\u4EA4"))},v=s,d.abrupt("return",v);case 26:case"end":return d.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v;return l.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return u=e("3PQu"),a=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=a,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,c=(0,d.t0)(d.t1),d.t2=a,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,i=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 16:return p=d.sent,d.t4=u,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,n=(0,d.t4)(d.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},s=function(){var E=(0,n.useForm)(),r=function(z,k){k.length>0?alert("errors:"+JSON.stringify(k)):alert("formData:"+JSON.stringify(z,null,2))};return i.default.createElement("div",null,i.default.createElement(n.default,{form:E,schema:o,onFinish:r}),i.default.createElement(c.default,{type:"primary",onClick:E.submit},"\u63D0\u4EA4"))},v=s,d.abrupt("return",v);case 26:case"end":return d.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o;return l.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return n=function(){var d=(0,i.useForm)(),T=function(r,b){b.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(b))):alert(JSON.stringify(r))};return c.default.createElement("div",null,c.default.createElement(i.default,{form:d,schema:p,onFinish:T}),c.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},u=e("3PQu"),a=e("K+nK"),v.t0=a,v.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return v.t1=v.sent,c=(0,v.t0)(v.t1),v.t2=u,v.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return v.t3=v.sent,i=(0,v.t2)(v.t3),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=n,v.abrupt("return",o);case 16:case"end":return v.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=e("K+nK"),o.t0=u,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=u,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,c=(0,o.t2)(o.t3),i=function(v){return{type:"object",displayType:v,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},p=function(){return a.default.createElement("div",null,a.default.createElement("h2",null,"display: row"),a.default.createElement(c.default,{schema:i("row")}),a.default.createElement("h2",null,"display: column"),a.default.createElement(c.default,{schema:i("column")}))},o.abrupt("return",p);case 14:case"end":return o.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=e("K+nK"),o.t0=u,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=u,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,c=(0,o.t2)(o.t3),i={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},p=function(){return a.default.createElement(c.default,{schema:i})},o.abrupt("return",p);case 14:case"end":return o.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=e("K+nK"),o.t0=u,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=u,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,c=(0,o.t2)(o.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},p=function(){return a.default.createElement(c.default,{readOnly:!0,schema:i})},o.abrupt("return",p);case 14:case"end":return o.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=e("K+nK"),o.t0=u,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=u,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,c=(0,o.t2)(o.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},p=function(){return a.default.createElement(c.default,{labelWidth:"200",schema:i})},o.abrupt("return",p);case 14:case"end":return o.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=e("K+nK"),s.t0=u,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=u,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},p=function(){return a.default.createElement(c.default,{schema:i})},n=p,s.abrupt("return",n);case 15:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=e("K+nK"),s.t0=u,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=u,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},p=function(){return a.default.createElement(c.default,{schema:i})},n=p,s.abrupt("return",n);case 15:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=e("K+nK"),s.t0=u,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=u,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},p=function(){return a.default.createElement(c.default,{schema:i})},n=p,s.abrupt("return",n);case 15:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=e("K+nK"),s.t0=u,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=u,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},p=function(){return a.default.createElement(c.default,{schema:i})},n=p,s.abrupt("return",n);case 15:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v,D,d,T;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=e("3PQu"),a=e("K+nK"),r.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return r.t0=a,r.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return r.t1=r.sent,c=(0,r.t0)(r.t1),r.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return r.t2=a,r.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return r.t4=a,r.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.t6=a,r.next=26,Promise.resolve().then(e.bind(null,"tJVT"));case 26:return r.t7=r.sent,n=(0,r.t6)(r.t7),r.t8=u,r.next=31,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 31:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 35:return s=r.sent,r.t10=u,r.next=39,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 39:return r.t11=r.sent,v=(0,r.t10)(r.t11),r.next=43,e.e(15).then(e.bind(null,"OH0R"));case 43:return D=r.sent,d=function(){var z=(0,v.useForm)(),k=(0,o.useState)({}),U=(0,n.default)(k,2),ae=U[0],Z=U[1],fe=function(){(0,D.fakeApi)("xxx/getForm").then(function(m){z.setValues({input1:"hello world",select1:"c"})})};(0,o.useEffect)(function(){(0,D.delay)(1e3).then(function(Qe){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Ee=function(m,C){C.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(C.map(function(R){return R.name}))):(0,D.fakeApi)("xxx/submit",m).then(function(R){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return o.default.createElement("div",{style:{width:"400px"}},o.default.createElement(v.default,{form:z,schema:ae,onFinish:Ee}),o.default.createElement(c.default,null,o.default.createElement(i.default,{onClick:fe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),o.default.createElement(i.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=d,r.abrupt("return",T);case 47:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:f}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v,D,d,T;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=e("3PQu"),a=e("K+nK"),r.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return r.t0=a,r.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return r.t1=r.sent,c=(0,r.t0)(r.t1),r.t2=a,r.next=12,Promise.resolve().then(e.bind(null,"PpiC"));case 12:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=16,e.e(14).then(e.t.bind(null,"tL+A",7));case 16:return r.t4=a,r.next=19,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 19:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.t6=a,r.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return r.t7=r.sent,n=(0,r.t6)(r.t7),r.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 28:return o=r.sent,r.t8=u,r.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return r.t9=r.sent,s=(0,r.t8)(r.t9),r.next=36,e.e(15).then(e.bind(null,"OH0R"));case 36:return v=r.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var z=(0,s.useForm)(),k=function(Z,fe){fe.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(fe.map(function(Ee){return Ee.name}))):(0,v.fakeApi)("xxx/submit",Z).then(function(Ee){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},U=function(Z){var fe=Z.data,Ee=Z.errors,Qe=Z.schema,m=(0,i.default)(Z,["data","errors","schema"]);return(0,v.fakeApi)("xxx/validation").then(function(C){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(s.default,{form:z,schema:D,beforeFinish:U,onFinish:k}),n.default.createElement(c.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},T=d,r.abrupt("return",T);case 41:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:f}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v,D,d,T;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=e("3PQu"),a=e("K+nK"),r.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return r.t0=a,r.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return r.t1=r.sent,c=(0,r.t0)(r.t1),r.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return r.t2=a,r.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return r.t4=a,r.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.t6=a,r.next=26,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 26:return r.t7=r.sent,n=(0,r.t6)(r.t7),r.next=30,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 30:return o=r.sent,r.t8=u,r.next=34,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 34:return r.t9=r.sent,s=(0,r.t8)(r.t9),r.next=38,e.e(15).then(e.bind(null,"OH0R"));case 38:return v=r.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var z=(0,s.useForm)(),k=function(Z,fe){fe.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(fe.map(function(Ee){return Ee.name}))):(0,v.fakeApi)("xxx/submit",Z).then(function(Ee){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},U=function(){(0,v.fakeApi)("xxx/getForm").then(function(Z){z.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(s.default,{form:z,schema:D,onFinish:k}),n.default.createElement(c.default,null,n.default.createElement(i.default,{onClick:U},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),n.default.createElement(i.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=d,r.abrupt("return",T);case 43:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:f}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v,D,d;return l.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return u=e("3PQu"),a=e("K+nK"),E.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return E.t0=a,E.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return E.t1=E.sent,c=(0,E.t0)(E.t1),E.next=11,e.e(14).then(e.t.bind(null,"tL+A",7));case 11:return E.t2=a,E.next=14,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 14:return E.t3=E.sent,i=(0,E.t2)(E.t3),E.t4=u,E.next=19,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 19:return E.t5=E.sent,p=(0,E.t4)(E.t5),E.next=23,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 23:return n=E.sent,E.t6=u,E.next=27,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 27:return E.t7=E.sent,o=(0,E.t6)(E.t7),E.next=31,e.e(15).then(e.bind(null,"OH0R"));case 31:return s=E.sent,v={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var b=(0,o.useForm)(),z=function(){b.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},k=function(ae,Z){Z.length>0?i.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(fe){return fe.name}))):i.default.info(JSON.stringify(ae))};return p.default.createElement("div",{style:{width:"400px"}},p.default.createElement(o.default,{form:b,schema:v,onMount:z,onFinish:k}),p.default.createElement(c.default,{type:"primary",onClick:b.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=D,E.abrupt("return",d);case 36:case"end":return E.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:f}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o;return l.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return u=e("3PQu"),a=e("K+nK"),v.t0=a,v.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return v.t1=v.sent,c=(0,v.t0)(v.t1),v.t2=u,v.next=10,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 10:return v.t3=v.sent,i=(0,v.t2)(v.t3),p={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},n=function(){var d=(0,i.useForm)();return c.default.createElement(i.default,{form:d,schema:p})},o=n,v.abrupt("return",o);case 16:case"end":return v.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=e("K+nK"),o.t0=u,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=u,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,c=(0,o.t2)(o.t3),o.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return i=o.sent,p=function(){return a.default.createElement(c.default,{schema:i.expression})},o.abrupt("return",p);case 16:case"end":return o.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ce}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s;return l.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return u=e("3PQu"),D.t0=u,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,a=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 8:return c=D.sent,D.t2=u,D.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return D.t3=D.sent,i=(0,D.t2)(D.t3),p=function(T){return new Promise(function(E){return setTimeout(E,T)})},n={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},o=function(){var T=(0,i.useForm)(),E=function(){T.setValues({input1:"hello world"}),p(3e3).then(function(b){T.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return a.default.createElement(i.default,{form:T,schema:n,onMount:E})},s=o,D.abrupt("return",s);case 19:case"end":return D.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o;return l.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return u=e("3PQu"),v.t0=u,v.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return v.t1=v.sent,a=(0,v.t0)(v.t1),v.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 8:return c=v.sent,v.t2=u,v.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return v.t3=v.sent,i=(0,v.t2)(v.t3),p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},n=function(){var d=(0,i.useForm)(),T={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){d.setValueByPath("input2",r)}};return a.default.createElement(i.default,{form:d,schema:p,watch:T})},o=n,v.abrupt("return",o);case 18:case"end":return v.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v;return l.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return u=e("3PQu"),a=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=a,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,c=(0,d.t0)(d.t1),d.t2=u,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,i=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 16:return p=d.sent,d.t4=u,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,n=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},s=function(){var E=(0,n.useForm)(),r=function(k,U){U.length>0?alert("errorFields:"+JSON.stringify(U)):alert("formData:"+JSON.stringify(k,null,2))},b={input1:function(k){k.length>2?E.setSchemaByPath("obj1.select",function(U){var ae=U.enumNames;return{enumNames:ae.map(function(Z){return Z+"a"})}}):E.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return i.default.createElement("div",null,i.default.createElement(n.default,{form:E,schema:o,onFinish:r,watch:b}),i.default.createElement(c.default,{type:"",style:{marginRight:8},onClick:function(){return E.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),i.default.createElement(c.default,{type:"primary",onClick:E.submit},"\u63D0\u4EA4"))},v=s,d.abrupt("return",v);case 26:case"end":return d.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v,D,d,T;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return u=e("3PQu"),a=e("K+nK"),r.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return r.t0=a,r.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return r.t1=r.sent,c=(0,r.t0)(r.t1),r.next=11,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 11:return r.t2=a,r.next=14,Promise.all([e.e(0),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 14:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.t4=a,r.next=19,e.e(64).then(e.bind(null,"0Owb"));case 19:return r.t5=r.sent,p=(0,r.t4)(r.t5),r.t6=u,r.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return r.t7=r.sent,n=(0,r.t6)(r.t7),r.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 28:return o=r.sent,r.t8=u,r.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return r.t9=r.sent,s=(0,r.t8)(r.t9),v={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(z){return n.default.createElement(i.default,(0,p.default)({addonBefore:"http://",addonAfter:".com"},z))},d=function(){var z=(0,s.useForm)(),k=function(){};return n.default.createElement("div",null,n.default.createElement(s.default,{form:z,schema:v,widgets:{site:D},onFinish:function(ae){return alert(JSON.stringify(ae,null,2))}}),n.default.createElement(c.default,{type:"primary",onClick:z.submit},"\u63D0\u4EA4"))},T=d,r.abrupt("return",T);case 39:case"end":return r.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p;return l.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=e("K+nK"),o.t0=u,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=u,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,c=(0,o.t2)(o.t3),o.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return i=o.sent,p=function(){return a.default.createElement(c.default,{schema:i.basic})},o.abrupt("return",p);case 16:case"end":return o.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ce}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:Je},"main.js":{import:"./main",content:Be},"json/simplest.json":{import:"./json/simplest.json",content:Oe},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Te},"monaco/index.js":{import:"./monaco",content:be},"theme.css":{import:"./theme.css",content:Re},"index.css":{import:"./index.css",content:Se}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{tsx:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n,o,s,v;return l.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return u=e("K+nK"),d.t0=u,d.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return d.t1=d.sent,a=(0,d.t0)(d.t1),d.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(c=d.sent,i=[],p=0;p<6;p++)i.push({id:p.toString(),title:"\u6807\u9898".concat(p+1),created_at:new Date().getTime()});return n={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(E,r){return a.default.createElement("a",{onClick:function(){return alert(E.title)}},"\u7F16\u8F91")}}],s=function(){var E=function(){return{rows:i,total:i.length}};return a.default.createElement(c.TableProvider,null,a.default.createElement(c.Search,{schema:n,api:E}),a.default.createElement(c.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},v=s,d.abrupt("return",v);case 16:case"end":return d.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){var u,a,c,i,p,n;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=e("K+nK"),s.t0=u,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.t2=u,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,c=(0,s.t2)(s.t3),i={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},p=function(){return a.default.createElement("div",{style:{height:"80vh"}},a.default.createElement(c.default,{defaultValue:i}))},n=p,s.abrupt("return",n);case 15:case"end":return s.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:he}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:Ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:N}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(P.dynamic)({loader:function(){var y=Object(j.a)(l.a.mark(function g(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},g)}));function h(){return y.apply(this,arguments)}return h}()}),previewerProps:{sources:{_:{jsx:He},"index.less":{import:"./index.less",content:Ge}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.6"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},Jn06:function(Ve,ye,e){"use strict";e.r(ye);var j=e("q1tI"),t=e.n(j),l=e("dEAq"),P=e.n(l),je=e("0zqC"),L=e("ZpkN"),f=e("JjdP"),Ne=t.a.memo(f.default["generator-demo"].component),ce=t.a.memo(f.default["generator-modal"].component),Je=t.a.memo(f.default["generator-transformer"].component),Be=t.a.memo(f.default["generator-settings"].component);ye.default=Oe=>(t.a.useEffect(()=>{Oe!=null&&Oe.location.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(Oe.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},t.a.createElement(l.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),t.a.createElement("h3",{id:"\u5B89\u88C5"},t.a.createElement(l.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),t.a.createElement(L.a,{code:"npm i fr-generator",lang:"bash"}),t.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},t.a.createElement(l.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),t.a.createElement(je.default,f.default["generator-demo"].previewerProps,t.a.createElement(Ne,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"api"},t.a.createElement(l.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"API"),t.a.createElement("h3",{id:"props"},t.a.createElement(l.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Props"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53C2\u6570"),t.a.createElement("th",null,"\u8BF4\u660E"),t.a.createElement("th",null,"\u7C7B\u578B"),t.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,"defaultValue"),t.a.createElement("td",null,"\u9ED8\u8BA4\u8868\u5355 schema"),t.a.createElement("td",null,t.a.createElement("code",null,"object")),t.a.createElement("td",null,t.a.createElement("code",null,"DEFAULT_SCHEMA"))),t.a.createElement("tr",null,t.a.createElement("td",null,"transformer"),t.a.createElement("td",null,"schema \u53CC\u5411\u8F6C\u6362"),t.a.createElement("td",null,t.a.createElement("code",null,"object")),t.a.createElement("td",null,t.a.createElement("code",null,"{"," fromFormRender, toFormRender ","}"))),t.a.createElement("tr",null,t.a.createElement("td",null,"extraButtons"),t.a.createElement("td",null,"\u64CD\u4F5C\u680F\u6309\u94AE"),t.a.createElement("td",null,t.a.createElement("code",null,"array")),t.a.createElement("td",null,t.a.createElement("code",null,"extraButton[]"))),t.a.createElement("tr",null,t.a.createElement("td",null,"settings"),t.a.createElement("td",null,"\u5DE6\u53F3\u4FA7\u680F\u914D\u7F6E"),t.a.createElement("td",null,t.a.createElement("code",null,"array")),t.a.createElement("td",null,t.a.createElement(l.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L513"},t.a.createElement("code",null,"defaultSettings")))),t.a.createElement("tr",null,t.a.createElement("td",null,"commonSettings"),t.a.createElement("td",null,"\u901A\u7528\u914D\u7F6E"),t.a.createElement("td",null,t.a.createElement("code",null,"object")),t.a.createElement("td",null,t.a.createElement(l.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L2"},t.a.createElement("code",null,"defaultCommonSettings")))),t.a.createElement("tr",null,t.a.createElement("td",null,"globalSettings"),t.a.createElement("td",null,"\u5168\u5C40\u914D\u7F6E"),t.a.createElement("td",null,t.a.createElement("code",null,"object")),t.a.createElement("td",null,t.a.createElement(l.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L513"},t.a.createElement("code",null,"defaultGlobalSettings")))),t.a.createElement("tr",null,t.a.createElement("td",null,"widgets"),t.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),t.a.createElement("td",null,t.a.createElement("code",null,"object")),t.a.createElement("td",null,t.a.createElement("code",null,"{","}"))))),t.a.createElement("h4",{id:"extrabutton"},t.a.createElement(l.AnchorLink,{to:"#extrabutton","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"extraButton"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u5C5E\u6027"),t.a.createElement("th",null,"\u8BF4\u660E"),t.a.createElement("th",null,"\u7C7B\u578B"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,"text"),t.a.createElement("td",null,"\u6309\u94AE\u6587\u6848"),t.a.createElement("td",null,t.a.createElement("code",null,"string"))),t.a.createElement("tr",null,t.a.createElement("td",null,"onClick"),t.a.createElement("td",null,"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03\u51FD\u6570"),t.a.createElement("td",null,t.a.createElement("code",null,"(event) => void"))))),t.a.createElement("p",null,"\u652F\u6301 antd \u6309\u94AE\u7EC4\u4EF6\u7684\u6240\u6709\u5176\u4ED6\u5C5E\u6027 ",t.a.createElement(l.Link,{to:"https://ant.design/components/button-cn/#API"},"https://ant.design/components/button-cn/#API")),t.a.createElement("h3",{id:"events"},t.a.createElement(l.AnchorLink,{to:"#events","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Events"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),t.a.createElement("th",null,"\u8BF4\u660E"),t.a.createElement("th",null,"\u56DE\u8C03\u53C2\u6570"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,"onChange"),t.a.createElement("td",null,"\u8868\u5355 data \u53D8\u5316\u56DE\u8C03"),t.a.createElement("td",null,"\u8868\u5355\u7684 data")),t.a.createElement("tr",null,t.a.createElement("td",null,"onSchemaChange"),t.a.createElement("td",null,"\u8868\u5355 schema \u53D8\u5316\u56DE\u8C03"),t.a.createElement("td",null,"\u5BFC\u51FA\u7684 schema")))),t.a.createElement("h3",{id:"methods"},t.a.createElement(l.AnchorLink,{to:"#methods","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Methods"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),t.a.createElement("th",null,"\u8BF4\u660E"),t.a.createElement("th",null,"\u5165\u53C2"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,"getValue"),t.a.createElement("td",null,"\u83B7\u53D6\u5BFC\u51FA\u7684 schema \u503C"),t.a.createElement("td",null,"-")),t.a.createElement("tr",null,t.a.createElement("td",null,"setValue"),t.a.createElement("td",null,"\u4ECE\u5916\u90E8\u5F3A\u5236\u4FEE\u6539 schema"),t.a.createElement("td",null,t.a.createElement("code",null,"schema"))),t.a.createElement("tr",null,t.a.createElement("td",null,"copyValue"),t.a.createElement("td",null,"\u5C06\u73B0\u6709 schema \u62F7\u8D1D\u5230\u526A\u8D34\u677F"),t.a.createElement("td",null,"-")))),t.a.createElement("h2",{id:"\u6848\u4F8B\u6F14\u793A"},t.a.createElement(l.AnchorLink,{to:"#\u6848\u4F8B\u6F14\u793A","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6848\u4F8B\u6F14\u793A"),t.a.createElement("h3",{id:"\u6D6E\u7A97\u63A5\u5165"},t.a.createElement(l.AnchorLink,{to:"#\u6D6E\u7A97\u63A5\u5165","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6D6E\u7A97\u63A5\u5165"),t.a.createElement("p",null,"\u7528\u4E8E schema \u7684\u53EF\u89C6\u5316\u4FEE\u6539")),t.a.createElement(je.default,f.default["generator-modal"].previewerProps,t.a.createElement(ce,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"schema-\u4E92\u8F6C"},t.a.createElement(l.AnchorLink,{to:"#schema-\u4E92\u8F6C","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"Schema \u4E92\u8F6C"),t.a.createElement("p",null,"\u4F7F\u7528 ",t.a.createElement("code",null,"transformer")," \u8FD9\u4E2A props\uFF0C\u8FDB\u884C schema \u7684\u4E92\u8F6C")),t.a.createElement(je.default,f.default["generator-transformer"].previewerProps,t.a.createElement(Je,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"\u4FA7\u680F\u914D\u7F6E"},t.a.createElement(l.AnchorLink,{to:"#\u4FA7\u680F\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4FA7\u680F\u914D\u7F6E"),t.a.createElement("p",null,"\u4F7F\u7528 settings/commonSettings \u81EA\u7531\u914D\u7F6E\u5DE6\u53F3\u4FA7\u680F\u5185\u5BB9\uFF0C\u5E76\u4F7F\u7528 widgets \u6CE8\u5165\u548C\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),t.a.createElement("p",null,"\u201C\u670D\u52A1\u7AEF\u4E0B\u62C9\u9009\u6846\u201D\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002")),t.a.createElement(je.default,f.default["generator-settings"].previewerProps,t.a.createElement(Be,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u5E38\u89C1\u95EE\u9898"},t.a.createElement(l.AnchorLink,{to:"#\u5E38\u89C1\u95EE\u9898","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5E38\u89C1\u95EE\u9898"),t.a.createElement("p",null,t.a.createElement("strong",null,"1\u3001\u5982\u4F55\u63A7\u5236\u7F16\u8F91\u5668\u9AD8\u5EA6")),t.a.createElement("p",null,"\u7ED9\u7EC4\u4EF6\u5916\u5C42\u8981\u5305\u88F9\u7684 div \u8BBE\u7F6E\u9AD8\u5EA6\u5373\u53EF\uFF0C\u5426\u5219\u4E3A\u9ED8\u8BA4\u503C min-height: 30vh")))))},TIsu:function(Ve,ye,e){},Zs1V:function(Ve){Ve.exports=JSON.parse("{}")},k3GJ:function(Ve,ye,e){"use strict";e.r(ye),e.d(ye,"TabPane",function(){return k});var j=e("wx14"),t=e("rePB"),l=e("ODXe"),P=e("U8pU"),je=e("Ff2n"),L=e("VTBJ"),f=e("q1tI"),Ne=e("TSYQ"),ce=e.n(Ne),Je=e("Zm9Q"),Be=e("5Z9U"),Oe=e("6cGi"),Te=e("KQm4"),be=e("wgJM"),Re=e("t23M");function Se(m){var C=Object(f.useRef)(),R=Object(f.useRef)(!1);function A(){for(var O=arguments.length,S=new Array(O),I=0;I<O;I++)S[I]=arguments[I];R.current||(be.a.cancel(C.current),C.current=Object(be.a)(function(){m.apply(void 0,S)}))}return Object(f.useEffect)(function(){return function(){R.current=!0,be.a.cancel(C.current)}},[]),A}function ze(m){var C=Object(f.useRef)([]),R=Object(f.useState)({}),A=Object(l.a)(R,2),O=A[1],S=Object(f.useRef)(typeof m=="function"?m():m),I=Se(function(){var F=S.current;C.current.forEach(function(Q){F=Q(F)}),C.current=[],S.current=F,O({})});function M(F){C.current.push(F),I()}return[S.current,M]}var he=e("4IlW");function Ue(m,C){var R,A=m.prefixCls,O=m.id,S=m.active,I=m.rtl,M=m.tab,F=M.key,Q=M.tab,W=M.disabled,$=M.closeIcon,X=m.tabBarGutter,re=m.tabPosition,_=m.closable,H=m.renderWrapper,pe=m.removeAriaLabel,ie=m.editable,ue=m.onClick,de=m.onRemove,se=m.onFocus,oe="".concat(A,"-tab");f.useEffect(function(){return de},[]);var q={};re==="top"||re==="bottom"?q[I?"marginLeft":"marginRight"]=X:q.marginBottom=X;var ge=ie&&_!==!1&&!W;function ee(V){W||ue(V)}function w(V){V.preventDefault(),V.stopPropagation(),ie.onEdit("remove",{key:F,event:V})}var G=f.createElement("div",{key:F,ref:C,className:ce()(oe,(R={},Object(t.a)(R,"".concat(oe,"-with-remove"),ge),Object(t.a)(R,"".concat(oe,"-active"),S),Object(t.a)(R,"".concat(oe,"-disabled"),W),R)),style:q,onClick:ee},f.createElement("div",{role:"tab","aria-selected":S,id:O&&"".concat(O,"-tab-").concat(F),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(F),"aria-disabled":W,tabIndex:W?null:0,onClick:function(B){B.stopPropagation(),ee(B)},onKeyDown:function(B){[he.a.SPACE,he.a.ENTER].includes(B.which)&&(B.preventDefault(),ee(B))},onFocus:se},Q),ge&&f.createElement("button",{type:"button","aria-label":pe||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(B){B.stopPropagation(),w(B)}},$||ie.removeIcon||"\xD7"));return H&&(G=H(G)),G}var N=f.forwardRef(Ue),He={width:0,height:0,left:0,top:0};function Ge(m,C,R){return Object(f.useMemo)(function(){for(var A,O=new Map,S=C.get((A=m[0])===null||A===void 0?void 0:A.key)||He,I=S.left+S.width,M=0;M<m.length;M+=1){var F=m[M].key,Q=C.get(F);if(!Q){var W;Q=C.get((W=m[M-1])===null||W===void 0?void 0:W.key)||He}var $=O.get(F)||Object(L.a)({},Q);$.right=I-$.left-$.width,O.set(F,$)}return O},[m.map(function(A){return A.key}).join("_"),C,R])}var Ye={width:0,height:0,left:0,top:0,right:0};function y(m,C,R,A,O){var S=O.tabs,I=O.tabPosition,M=O.rtl,F,Q,W;["top","bottom"].includes(I)?(F="width",Q=M?"right":"left",W=Math.abs(C.left)):(F="height",Q="top",W=-C.top);var $=C[F],X=R[F],re=A[F],_=$;return X+re>$&&(_=$-re),Object(f.useMemo)(function(){if(!S.length)return[0,0];for(var H=S.length,pe=H,ie=0;ie<H;ie+=1){var ue=m.get(S[ie].key)||Ye;if(ue[Q]+ue[F]>W+_){pe=ie-1;break}}for(var de=0,se=H-1;se>=0;se-=1){var oe=m.get(S[se].key)||Ye;if(oe[Q]<W){de=se+1;break}}return[de,pe]},[m,W,_,I,S.map(function(H){return H.key}).join("_"),M])}var h=e("1j5w"),g=e("eDIo");function u(m,C){var R=m.prefixCls,A=m.editable,O=m.locale,S=m.style;return!A||A.showAdd===!1?null:f.createElement("button",{ref:C,type:"button",className:"".concat(R,"-nav-add"),style:S,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(M){A.onEdit("add",{event:M})}},A.addIcon||"+")}var a=f.forwardRef(u);function c(m,C){var R=m.prefixCls,A=m.id,O=m.tabs,S=m.locale,I=m.mobile,M=m.moreIcon,F=M===void 0?"More":M,Q=m.moreTransitionName,W=m.style,$=m.className,X=m.editable,re=m.tabBarGutter,_=m.rtl,H=m.onTabClick,pe=Object(f.useState)(!1),ie=Object(l.a)(pe,2),ue=ie[0],de=ie[1],se=Object(f.useState)(null),oe=Object(l.a)(se,2),q=oe[0],ge=oe[1],ee="".concat(A,"-more-popup"),w="".concat(R,"-dropdown"),G=q!==null?"".concat(ee,"-").concat(q):null,V=S==null?void 0:S.dropdownAriaLabel,B=f.createElement(h.default,{onClick:function(le){var Ce=le.key,De=le.domEvent;H(Ce,De),de(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":G,selectedKeys:[q],"aria-label":V!==void 0?V:"expanded dropdown"},O.map(function(x){return f.createElement(h.MenuItem,{key:x.key,id:"".concat(ee,"-").concat(x.key),role:"option","aria-controls":A&&"".concat(A,"-panel-").concat(x.key),disabled:x.disabled},x.tab)}));function Y(x){for(var le=O.filter(function(Le){return!Le.disabled}),Ce=le.findIndex(function(Le){return Le.key===q})||0,De=le.length,Me=0;Me<De;Me+=1){Ce=(Ce+x+De)%De;var Pe=le[Ce];if(!Pe.disabled){ge(Pe.key);return}}}function ne(x){var le=x.which;if(!ue){[he.a.DOWN,he.a.SPACE,he.a.ENTER].includes(le)&&(de(!0),x.preventDefault());return}switch(le){case he.a.UP:Y(-1),x.preventDefault();break;case he.a.DOWN:Y(1),x.preventDefault();break;case he.a.ESC:de(!1);break;case he.a.SPACE:case he.a.ENTER:q!==null&&H(q,x);break}}Object(f.useEffect)(function(){var x=document.getElementById(G);x&&x.scrollIntoView&&x.scrollIntoView(!1)},[q]),Object(f.useEffect)(function(){ue||ge(null)},[ue]);var te=Object(t.a)({},_?"marginLeft":"marginRight",re);O.length||(te.visibility="hidden",te.order=1);var Ie=ce()(Object(t.a)({},"".concat(w,"-rtl"),_)),We=I?null:f.createElement(g.default,{prefixCls:w,overlay:B,trigger:["hover"],visible:ue,transitionName:Q,onVisibleChange:de,overlayClassName:Ie,mouseEnterDelay:.1,mouseLeaveDelay:.1},f.createElement("button",{type:"button",className:"".concat(R,"-nav-more"),style:te,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(A,"-more"),"aria-expanded":ue,onKeyDown:ne},F));return f.createElement("div",{className:ce()("".concat(R,"-nav-operations"),$),style:W,ref:C},We,f.createElement(a,{prefixCls:R,locale:S,editable:X}))}var i=f.forwardRef(c),p=Object(f.createContext)(null),n=.1,o=.01,s=20,v=Math.pow(.995,s);function D(m,C){var R=Object(f.useState)(),A=Object(l.a)(R,2),O=A[0],S=A[1],I=Object(f.useState)(0),M=Object(l.a)(I,2),F=M[0],Q=M[1],W=Object(f.useState)(0),$=Object(l.a)(W,2),X=$[0],re=$[1],_=Object(f.useState)(),H=Object(l.a)(_,2),pe=H[0],ie=H[1],ue=Object(f.useRef)();function de(w){var G=w.touches[0],V=G.screenX,B=G.screenY;S({x:V,y:B}),window.clearInterval(ue.current)}function se(w){if(!!O){w.preventDefault();var G=w.touches[0],V=G.screenX,B=G.screenY;S({x:V,y:B});var Y=V-O.x,ne=B-O.y;C(Y,ne);var te=Date.now();Q(te),re(te-F),ie({x:Y,y:ne})}}function oe(){if(!!O&&(S(null),ie(null),pe)){var w=pe.x/X,G=pe.y/X,V=Math.abs(w),B=Math.abs(G);if(Math.max(V,B)<n)return;var Y=w,ne=G;ue.current=window.setInterval(function(){if(Math.abs(Y)<o&&Math.abs(ne)<o){window.clearInterval(ue.current);return}Y*=v,ne*=v,C(Y*s,ne*s)},s)}}var q=Object(f.useRef)();function ge(w){var G=w.deltaX,V=w.deltaY,B=0,Y=Math.abs(G),ne=Math.abs(V);Y===ne?B=q.current==="x"?G:V:Y>ne?(B=G,q.current="x"):(B=V,q.current="y"),C(-B,-B)&&w.preventDefault()}var ee=Object(f.useRef)(null);ee.current={onTouchStart:de,onTouchMove:se,onTouchEnd:oe,onWheel:ge},f.useEffect(function(){function w(Y){ee.current.onTouchStart(Y)}function G(Y){ee.current.onTouchMove(Y)}function V(Y){ee.current.onTouchEnd(Y)}function B(Y){ee.current.onWheel(Y)}return document.addEventListener("touchmove",G,{passive:!1}),document.addEventListener("touchend",V,{passive:!1}),m.current.addEventListener("touchstart",w,{passive:!1}),m.current.addEventListener("wheel",B),function(){document.removeEventListener("touchmove",G),document.removeEventListener("touchend",V)}},[])}function d(){var m=Object(f.useRef)(new Map);function C(A){return m.current.has(A)||m.current.set(A,f.createRef()),m.current.get(A)}function R(A){m.current.delete(A)}return[C,R]}function T(m,C){var R=f.useRef(m),A=f.useState({}),O=Object(l.a)(A,2),S=O[1];function I(M){var F=typeof M=="function"?M(R.current):M;F!==R.current&&C(F,R.current),R.current=F,S({})}return[R.current,I]}var E=function(C){var R=C.position,A=C.prefixCls,O=C.extra;if(!O)return null;var S,I=O;return R==="right"&&(S=I.right||!I.left&&I||null),R==="left"&&(S=I.left||null),S?f.createElement("div",{className:"".concat(A,"-extra-content")},S):null};function r(m,C){var R,A=f.useContext(p),O=A.prefixCls,S=A.tabs,I=m.className,M=m.style,F=m.id,Q=m.animated,W=m.activeKey,$=m.rtl,X=m.extra,re=m.editable,_=m.locale,H=m.tabPosition,pe=m.tabBarGutter,ie=m.children,ue=m.onTabClick,de=m.onTabScroll,se=Object(f.useRef)(),oe=Object(f.useRef)(),q=Object(f.useRef)(),ge=Object(f.useRef)(),ee=d(),w=Object(l.a)(ee,2),G=w[0],V=w[1],B=H==="top"||H==="bottom",Y=T(0,function(J,K){B&&de&&de({direction:J>K?"left":"right"})}),ne=Object(l.a)(Y,2),te=ne[0],Ie=ne[1],We=T(0,function(J,K){!B&&de&&de({direction:J>K?"top":"bottom"})}),x=Object(l.a)(We,2),le=x[0],Ce=x[1],De=Object(f.useState)(0),Me=Object(l.a)(De,2),Pe=Me[0],Le=Me[1],rn=Object(f.useState)(0),sn=Object(l.a)(rn,2),Ze=sn[0],on=sn[1],fn=Object(f.useState)(0),ln=Object(l.a)(fn,2),xe=ln[0],pn=ln[1],un=Object(f.useState)(0),Xe=Object(l.a)(un,2),dn=Xe[0],me=Xe[1],$e=Object(f.useState)(null),mn=Object(l.a)($e,2),Ae=mn[0],Yn=mn[1],Zn=Object(f.useState)(null),Cn=Object(l.a)(Zn,2),we=Cn[0],xn=Cn[1],kn=Object(f.useState)(0),Dn=Object(l.a)(kn,2),qn=Dn[0],_n=Dn[1],et=Object(f.useState)(0),On=Object(l.a)(et,2),nt=On[0],tt=On[1],at=ze(new Map),Pn=Object(l.a)(at,2),rt=Pn[0],st=Pn[1],cn=Ge(S,rt,Pe),Fn="".concat(O,"-nav-operations-hidden"),ke=0,qe=0;B?$?(ke=0,qe=Math.max(0,Pe-Ae)):(ke=Math.min(0,Ae-Pe),qe=0):(ke=Math.min(0,we-Ze),qe=0);function vn(J){return J<ke?ke:J>qe?qe:J}var An=Object(f.useRef)(),ot=Object(f.useState)(),Bn=Object(l.a)(ot,2),hn=Bn[0],Nn=Bn[1];function gn(){Nn(Date.now())}function yn(){window.clearTimeout(An.current)}D(se,function(J,K){function ve(Fe,en){Fe(function(nn){var tn=vn(nn+en);return tn})}if(B){if(Ae>=Pe)return!1;ve(Ie,J)}else{if(we>=Ze)return!1;ve(Ce,K)}return yn(),gn(),!0}),Object(f.useEffect)(function(){return yn(),hn&&(An.current=window.setTimeout(function(){Nn(0)},100)),yn},[hn]);function Tn(){var J=arguments.length>0&&arguments[0]!==void 0?arguments[0]:W,K=cn.get(J)||{width:0,height:0,left:0,right:0,top:0};if(B){var ve=te;$?K.right<te?ve=K.right:K.right+K.width>te+Ae&&(ve=K.right+K.width-Ae):K.left<-te?ve=-K.left:K.left+K.width>-te+Ae&&(ve=-(K.left+K.width-Ae)),Ce(0),Ie(vn(ve))}else{var Fe=le;K.top<-le?Fe=-K.top:K.top+K.height>-le+we&&(Fe=-(K.top+K.height-we)),Ie(0),Ce(vn(Fe))}}var lt=y(cn,{width:Ae,height:we,left:te,top:le},{width:xe,height:dn},{width:qn,height:nt},Object(L.a)(Object(L.a)({},m),{},{tabs:S})),In=Object(l.a)(lt,2),it=In[0],ut=In[1],dt=S.map(function(J){var K=J.key;return f.createElement(N,{id:F,prefixCls:O,key:K,rtl:$,tab:J,closable:J.closable,editable:re,active:K===W,tabPosition:H,tabBarGutter:pe,renderWrapper:ie,removeAriaLabel:_==null?void 0:_.removeAriaLabel,ref:G(K),onClick:function(Fe){ue(K,Fe)},onRemove:function(){V(K)},onFocus:function(){Tn(K),gn(),$||(se.current.scrollLeft=0),se.current.scrollTop=0}})}),bn=Se(function(){var J,K,ve,Fe,en,nn,tn,Rn,Sn,ht=((J=se.current)===null||J===void 0?void 0:J.offsetWidth)||0,gt=((K=se.current)===null||K===void 0?void 0:K.offsetHeight)||0,zn=((ve=ge.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,Un=((Fe=ge.current)===null||Fe===void 0?void 0:Fe.offsetHeight)||0,yt=((en=q.current)===null||en===void 0?void 0:en.offsetWidth)||0,bt=((nn=q.current)===null||nn===void 0?void 0:nn.offsetHeight)||0;Yn(ht),xn(gt),_n(zn),tt(Un);var Hn=(((tn=oe.current)===null||tn===void 0?void 0:tn.offsetWidth)||0)-zn,Gn=(((Rn=oe.current)===null||Rn===void 0?void 0:Rn.offsetHeight)||0)-Un;Le(Hn),on(Gn);var Qn=(Sn=q.current)===null||Sn===void 0?void 0:Sn.className.includes(Fn);pn(Hn-(Qn?0:yt)),me(Gn-(Qn?0:bt)),st(function(){var Xn=new Map;return S.forEach(function(Et){var wn=Et.key,an=G(wn).current;an&&Xn.set(wn,{width:an.offsetWidth,height:an.offsetHeight,left:an.offsetLeft,top:an.offsetTop})}),Xn})}),mt=S.slice(0,it),ct=S.slice(ut+1),Mn=[].concat(Object(Te.a)(mt),Object(Te.a)(ct)),ft=Object(f.useState)(),Ln=Object(l.a)(ft,2),pt=Ln[0],vt=Ln[1],Ke=cn.get(W),Kn=Object(f.useRef)();function Wn(){be.a.cancel(Kn.current)}Object(f.useEffect)(function(){var J={};return Ke&&(B?($?J.right=Ke.right:J.left=Ke.left,J.width=Ke.width):(J.top=Ke.top,J.height=Ke.height)),Wn(),Kn.current=Object(be.a)(function(){vt(J)}),Wn},[Ke,B,$]),Object(f.useEffect)(function(){Tn()},[W,Ke,cn,B]),Object(f.useEffect)(function(){bn()},[$,pe,W,S.map(function(J){return J.key}).join("_")]);var $n=!!Mn.length,_e="".concat(O,"-nav-wrap"),En,jn,Vn,Jn;return B?$?(jn=te>0,En=te+Ae<Pe):(En=te<0,jn=-te+Ae<Pe):(Vn=le<0,Jn=-le+we<Ze),f.createElement("div",{ref:C,role:"tablist",className:ce()("".concat(O,"-nav"),I),style:M,onKeyDown:function(){gn()}},f.createElement(E,{position:"left",extra:X,prefixCls:O}),f.createElement(Re.default,{onResize:bn},f.createElement("div",{className:ce()(_e,(R={},Object(t.a)(R,"".concat(_e,"-ping-left"),En),Object(t.a)(R,"".concat(_e,"-ping-right"),jn),Object(t.a)(R,"".concat(_e,"-ping-top"),Vn),Object(t.a)(R,"".concat(_e,"-ping-bottom"),Jn),R)),ref:se},f.createElement(Re.default,{onResize:bn},f.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(te,"px, ").concat(le,"px)"),transition:hn?"none":void 0}},dt,f.createElement(a,{ref:ge,prefixCls:O,locale:_,editable:re,style:{visibility:$n?"hidden":null}}),f.createElement("div",{className:ce()("".concat(O,"-ink-bar"),Object(t.a)({},"".concat(O,"-ink-bar-animated"),Q.inkBar)),style:pt}))))),f.createElement(i,Object(j.a)({},m,{ref:q,prefixCls:O,tabs:Mn,className:!$n&&Fn})),f.createElement(E,{position:"right",extra:X,prefixCls:O}))}var b=f.forwardRef(r);function z(m){var C=m.id,R=m.activeKey,A=m.animated,O=m.tabPosition,S=m.rtl,I=m.destroyInactiveTabPane,M=f.useContext(p),F=M.prefixCls,Q=M.tabs,W=A.tabPane,$=Q.findIndex(function(X){return X.key===R});return f.createElement("div",{className:ce()("".concat(F,"-content-holder"))},f.createElement("div",{className:ce()("".concat(F,"-content"),"".concat(F,"-content-").concat(O),Object(t.a)({},"".concat(F,"-content-animated"),W)),style:$&&W?Object(t.a)({},S?"marginRight":"marginLeft","-".concat($,"00%")):null},Q.map(function(X){return f.cloneElement(X.node,{key:X.key,prefixCls:F,tabKey:X.key,id:C,animated:W,active:X.key===R,destroyInactiveTabPane:I})})))}function k(m){var C=m.prefixCls,R=m.forceRender,A=m.className,O=m.style,S=m.id,I=m.active,M=m.animated,F=m.destroyInactiveTabPane,Q=m.tabKey,W=m.children,$=f.useState(R),X=Object(l.a)($,2),re=X[0],_=X[1];f.useEffect(function(){I?_(!0):F&&_(!1)},[I,F]);var H={};return I||(M?(H.visibility="hidden",H.height=0,H.overflowY="hidden"):H.display="none"),f.createElement("div",{id:S&&"".concat(S,"-panel-").concat(Q),role:"tabpanel",tabIndex:I?0:-1,"aria-labelledby":S&&"".concat(S,"-tab-").concat(Q),"aria-hidden":!I,style:Object(L.a)(Object(L.a)({},H),O),className:ce()("".concat(C,"-tabpane"),I&&"".concat(C,"-tabpane-active"),A)},(I||re||R)&&W)}var U=0;function ae(m){return Object(Je.a)(m).map(function(C){if(f.isValidElement(C)){var R=C.key!==void 0?String(C.key):void 0;return Object(L.a)(Object(L.a)({key:R},C.props),{},{node:C})}return null}).filter(function(C){return C})}function Z(m,C){var R,A=m.id,O=m.prefixCls,S=O===void 0?"rc-tabs":O,I=m.className,M=m.children,F=m.direction,Q=m.activeKey,W=m.defaultActiveKey,$=m.editable,X=m.animated,re=X===void 0?{inkBar:!0,tabPane:!1}:X,_=m.tabPosition,H=_===void 0?"top":_,pe=m.tabBarGutter,ie=m.tabBarStyle,ue=m.tabBarExtraContent,de=m.locale,se=m.moreIcon,oe=m.moreTransitionName,q=m.destroyInactiveTabPane,ge=m.renderTabBar,ee=m.onChange,w=m.onTabClick,G=m.onTabScroll,V=Object(je.a)(m,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),B=ae(M),Y=F==="rtl",ne;re===!1?ne={inkBar:!1,tabPane:!1}:re===!0?ne={inkBar:!0,tabPane:!0}:ne=Object(L.a)({inkBar:!0,tabPane:!1},Object(P.a)(re)==="object"?re:{});var te=Object(f.useState)(!1),Ie=Object(l.a)(te,2),We=Ie[0],x=Ie[1];Object(f.useEffect)(function(){x(Object(Be.a)())},[]);var le=Object(Oe.a)(function(){var me;return(me=B[0])===null||me===void 0?void 0:me.key},{value:Q,defaultValue:W}),Ce=Object(l.a)(le,2),De=Ce[0],Me=Ce[1],Pe=Object(f.useState)(function(){return B.findIndex(function(me){return me.key===De})}),Le=Object(l.a)(Pe,2),rn=Le[0],sn=Le[1];Object(f.useEffect)(function(){var me=B.findIndex(function(mn){return mn.key===De});if(me===-1){var $e;me=Math.max(0,Math.min(rn,B.length-1)),Me(($e=B[me])===null||$e===void 0?void 0:$e.key)}sn(me)},[B.map(function(me){return me.key}).join("_"),De,rn]);var Ze=Object(Oe.a)(null,{value:A}),on=Object(l.a)(Ze,2),fn=on[0],ln=on[1],xe=H;We&&!["left","right"].includes(H)&&(xe="top"),Object(f.useEffect)(function(){A||(ln("rc-tabs-".concat(U)),U+=1)},[]);function pn(me,$e){w==null||w(me,$e),Me(me),ee==null||ee(me)}var un={id:fn,activeKey:De,animated:ne,tabPosition:xe,rtl:Y,mobile:We},Xe,dn=Object(L.a)(Object(L.a)({},un),{},{editable:$,locale:de,moreIcon:se,moreTransitionName:oe,tabBarGutter:pe,onTabClick:pn,onTabScroll:G,extra:ue,style:ie,panes:M});return ge?Xe=ge(dn,b):Xe=f.createElement(b,dn),f.createElement(p.Provider,{value:{tabs:B,prefixCls:S}},f.createElement("div",Object(j.a)({ref:C,id:A,className:ce()(S,"".concat(S,"-").concat(xe),(R={},Object(t.a)(R,"".concat(S,"-mobile"),We),Object(t.a)(R,"".concat(S,"-editable"),$),Object(t.a)(R,"".concat(S,"-rtl"),Y),R),I)},V),Xe,f.createElement(z,Object(j.a)({destroyInactiveTabPane:q},un,{animated:ne}))))}var fe=f.forwardRef(Z);fe.TabPane=k;var Ee=fe,Qe=ye.default=Ee}}]);
