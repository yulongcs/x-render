(window.webpackJsonp=window.webpackJsonp||[]).push([[29,9],{"0zqC":function(we,Ee,e){"use strict";e.r(Ee);var R=e("tJVT"),c=e("q1tI"),o=e.n(c),O=e("k3GJ"),ce=e("MZF8"),F=e("dEAq"),p=e.n(F),ge=e("ZpkN"),oe=e("TIsu"),Ve=e.n(oe);function Te(Ae,pe){var Re,Se=(Re=Ae.match(/\.(\w+)$/))===null||Re===void 0?void 0:Re[1];return Se||(Se=pe.tsx?"tsx":"jsx"),Se}var Ne=Ae=>{var pe,Re,Se,Je=Object(c.useRef)(),ye=Object(c.useContext)(F.context),ze=ye.locale,B=Object(F.useLocaleProps)(ze,Ae),Ue=Object(F.useDemoUrl)(B.identifier),Ge=B.demoUrl||Ue,Ye=(ce.e===null||ce.e===void 0?void 0:ce.e.location.hash)==="#".concat(B.identifier),g=Object.keys(B.sources).length===1,v=Object(F.useCodeSandbox)((pe=B.hideActions)!==null&&pe!==void 0&&pe.includes("CSB")?null:B),h=Object(F.useRiddle)((Re=B.hideActions)!==null&&Re!==void 0&&Re.includes("RIDDLE")?null:B),l=Object(F.useMotions)(B.motions||[],Je.current),t=Object(R.default)(l,2),m=t[0],i=t[1],f=Object(F.useCopy)(),n=Object(R.default)(f,2),s=n[0],r=n[1],y=Object(c.useState)("_"),I=Object(R.default)(y,2),d=I[0],L=I[1],W=Object(c.useState)(Te(d,B.sources[d])),a=Object(R.default)(W,2),b=a[0],U=a[1],Y=Object(c.useState)(Boolean(B.defaultShowCode)),Z=Object(R.default)(Y,2),fe=Z[0],ie=Z[1],je=Object(c.useState)(Math.random()),Ce=Object(R.default)(je,2),He=Ce[0],u=Ce[1],C=B.sources[d][b]||B.sources[d].content,E=Object(F.useTSPlaygroundUrl)(ze,C),P=Object(c.useRef)(),S=Object(F.usePrefersColor)(),j=Object(R.default)(S,1),T=j[0];Object(c.useEffect)(()=>{u(Math.random())},[T]);function N(D){L(D),U(Te(D,B.sources[D]))}return o.a.createElement("div",{style:B.style,className:[B.className,"__dumi-default-previewer",Ye?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:B.identifier,"data-debug":B.debug||void 0,"data-iframe":B.iframe||void 0},B.iframe&&o.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),o.a.createElement("div",{ref:Je,className:"__dumi-default-previewer-demo",style:{transform:B.transform?"translate(0, 0)":void 0,padding:B.compact||B.iframe&&B.compact!==!1?"0":void 0,background:B.background}},B.iframe?o.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(B.iframe).replace(/(\d)$/,"$1px")},key:He,src:Ge,ref:P}):B.children),o.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":B.title},B.title&&o.a.createElement(F.AnchorLink,{to:"#".concat(B.identifier)},B.title),B.description&&o.a.createElement("div",{dangerouslySetInnerHTML:{__html:B.description}})),o.a.createElement("div",{className:"__dumi-default-previewer-actions"},v&&o.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:v}),h&&o.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:h}),B.motions&&o.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:i,onClick:()=>m()}),B.iframe&&o.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>u(Math.random())}),!((Se=B.hideActions)!==null&&Se!==void 0&&Se.includes("EXTERNAL"))&&o.a.createElement(F.Link,{target:"_blank",to:Ge},o.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),o.a.createElement("span",null),o.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":r,onClick:()=>s(C)}),b==="tsx"&&fe&&o.a.createElement(F.Link,{target:"_blank",to:E},o.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),o.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(fe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>ie(!fe)})),fe&&o.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!g&&o.a.createElement(O.default,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:d,onChange:N},Object.keys(B.sources).map(D=>o.a.createElement(O.TabPane,{tab:D==="_"?"index.".concat(Te(D,B.sources[D])):D,key:D}))),o.a.createElement("div",{className:"__dumi-default-previewer-source"},o.a.createElement(ge.a,{code:C,lang:b,showCopy:!1}))))};Ee.default=Ne},JjdP:function(we,Ee,e){"use strict";e.r(Ee);var R=e("9og8"),c=e("WmNS"),o=e.n(c),O=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,F=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,p=`export const basic = {
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
};`,ge=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,oe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ve=`import React, { Component } from 'react';
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

export default Root;`,Te=`import React, { useState, useEffect } from 'react';
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
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"]
      }
    }
  }
}`,Ae=`import { Select } from 'antd';
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

export default SearchInput;`,pe=`import React from 'react';
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

export default Demo;`,ye=`import React, { useState, useRef } from 'react';
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

export default Demo;`,B=`import React from 'react';
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
      />
    </div>
  );
};

export default Demo;`,Ge=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Ye=Ee.default={"guide-card":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("3PQu"),t=e("K+nK"),r.t0=t,r.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return r.t1=r.sent,m=(0,r.t0)(r.t1),r.t2=l,r.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return f=r.sent,n=function(){var I=(0,i.useState)("Line"),d=(0,m.default)(I,2),L=d[0],W=d[1],a={Line:f.Line,Column:f.Column,PivotTable:f.PivotTable}[L];return i.default.createElement("div",null,i.default.createElement("div",{style:{marginBottom:10}},i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return W("Line")}},"\u6298\u7EBF\u56FE"),i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return W("Column")}},"\u67F1\u72B6\u56FE"),i.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return W("PivotTable")}},"\u4EA4\u53C9\u8868")),i.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},r.abrupt("return",n);case 17:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=e("K+nK"),n.t0=l,n.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return n.t1=n.sent,t=(0,n.t0)(n.t1),n.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return m=n.sent,i=function(){return t.default.createElement(m.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(y,I,d){return t.default.createElement("div",null,t.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),t.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(I).length]}},y),t.default.createElement("p",null,JSON.stringify(I)),t.default.createElement("p",null,JSON.stringify(d)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},n.abrupt("return",i);case 11:case"end":return n.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("3PQu"),t=e("K+nK"),r.t0=t,r.next=5,Promise.resolve().then(e.bind(null,"tJVT"));case 5:return r.t1=r.sent,m=(0,r.t0)(r.t1),r.t2=l,r.next=10,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 10:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=14,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 14:return f=r.sent,n=function(){var I=(0,i.useState)(!1),d=(0,m.default)(I,2),L=d[0],W=d[1];return i.default.createElement(i.default.Fragment,null,i.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",i.default.createElement("input",{type:"checkbox",value:L,onChange:function(){return W(!L)}})),i.default.createElement(f.PivotTable,{leftExpandable:L,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},r.abrupt("return",n);case 17:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y,I,d,L,W;return o.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return l=e("3PQu"),t=e("K+nK"),b.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return b.t0=t,b.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return b.t1=b.sent,m=(0,b.t0)(b.t1),b.t2=t,b.next=12,e.e(58).then(e.bind(null,"fWQN"));case 12:return b.t3=b.sent,i=(0,b.t2)(b.t3),b.t4=t,b.next=17,e.e(59).then(e.bind(null,"mtLc"));case 17:return b.t5=b.sent,f=(0,b.t4)(b.t5),b.t6=t,b.next=22,e.e(61).then(e.bind(null,"yKVA"));case 22:return b.t7=b.sent,n=(0,b.t6)(b.t7),b.t8=t,b.next=27,e.e(55).then(e.bind(null,"879j"));case 27:return b.t9=b.sent,s=(0,b.t8)(b.t9),b.t10=t,b.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return b.t11=b.sent,r=(0,b.t10)(b.t11),b.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return y=b.sent,b.t12=l,b.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return b.t13=b.sent,I=(0,b.t12)(b.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},L=function(U){(0,n.default)(Z,U);var Y=(0,s.default)(Z);function Z(){return(0,i.default)(this,Z),Y.apply(this,arguments)}return(0,f.default)(Z,[{key:"render",value:function(){var ie=this.props.form;return r.default.createElement("div",null,r.default.createElement(I.default,{form:ie,schema:d}),r.default.createElement(m.default,{type:"primary",onClick:ie.submit},"\u63D0\u4EA4"))}}]),Z}(r.default.Component),W=(0,I.connectForm)(L),b.abrupt("return",W);case 46:case"end":return b.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y;return o.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=e("3PQu"),t=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=t,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,m=(0,d.t0)(d.t1),d.t2=t,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,i=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 16:return f=d.sent,d.t4=l,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,n=(0,d.t4)(d.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},r=function(){var W=(0,n.useForm)();return i.default.createElement("div",null,i.default.createElement(n.default,{form:W,schema:s}),i.default.createElement(m.default,{type:"primary",onClick:W.submit},"\u63D0\u4EA4"))},y=r,d.abrupt("return",y);case 26:case"end":return d.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y;return o.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=e("3PQu"),t=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=t,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,m=(0,d.t0)(d.t1),d.t2=t,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,i=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 16:return f=d.sent,d.t4=l,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,n=(0,d.t4)(d.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},r=function(){var W=(0,n.useForm)(),a=function(U,Y){Y.length>0?alert("errors:"+JSON.stringify(Y)):alert("formData:"+JSON.stringify(U,null,2))};return i.default.createElement("div",null,i.default.createElement(n.default,{form:W,schema:s,onFinish:a}),i.default.createElement(m.default,{type:"primary",onClick:W.submit},"\u63D0\u4EA4"))},y=r,d.abrupt("return",y);case 26:case"end":return d.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s;return o.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return n=function(){var d=(0,i.useForm)(),L=function(a,b){b.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(b))):alert(JSON.stringify(a))};return m.default.createElement("div",null,m.default.createElement(i.default,{form:d,schema:f,onFinish:L}),m.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},l=e("3PQu"),t=e("K+nK"),y.t0=t,y.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return y.t1=y.sent,m=(0,y.t0)(y.t1),y.t2=l,y.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return y.t3=y.sent,i=(0,y.t2)(y.t3),f={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=n,y.abrupt("return",s);case 16:case"end":return y.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),s.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return i=s.sent,f=function(){return t.default.createElement(m.default,{schema:i.basic})},s.abrupt("return",f);case 16:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:F},"json/schema.js":{import:"./json/schema",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i=function(y){return{type:"object",displayType:y,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},f=function(){return t.default.createElement("div",null,t.default.createElement("h2",null,"display: row"),t.default.createElement(m.default,{schema:i("row")}),t.default.createElement("h2",null,"display: column"),t.default.createElement(m.default,{schema:i("column")}))},s.abrupt("return",f);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},f=function(){return t.default.createElement(m.default,{schema:i})},s.abrupt("return",f);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},f=function(){return t.default.createElement(m.default,{readOnly:!0,schema:i})},s.abrupt("return",f);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},f=function(){return t.default.createElement(m.default,{labelWidth:"200",schema:i})},s.abrupt("return",f);case 14:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},f=function(){return t.default.createElement(m.default,{schema:i})},n=f,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},f=function(){return t.default.createElement(m.default,{schema:i})},n=f,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},f=function(){return t.default.createElement(m.default,{schema:i})},n=f,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},f=function(){return t.default.createElement(m.default,{schema:i})},n=f,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y,I,d,L;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return a.t0=t,a.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return a.t2=t,a.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return a.t4=t,a.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return a.t5=a.sent,f=(0,a.t4)(a.t5),a.t6=t,a.next=26,Promise.resolve().then(e.bind(null,"tJVT"));case 26:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.t8=l,a.next=31,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 31:return a.t9=a.sent,s=(0,a.t8)(a.t9),a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 35:return r=a.sent,a.t10=l,a.next=39,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 39:return a.t11=a.sent,y=(0,a.t10)(a.t11),a.next=43,e.e(15).then(e.bind(null,"OH0R"));case 43:return I=a.sent,d=function(){var U=(0,y.useForm)(),Y=(0,s.useState)({}),Z=(0,n.default)(Y,2),fe=Z[0],ie=Z[1],je=function(){(0,I.fakeApi)("xxx/getForm").then(function(u){U.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,I.delay)(1e3).then(function(He){ie({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Ce=function(u,C){C.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(C.map(function(E){return E.name}))):(0,I.fakeApi)("xxx/submit",u).then(function(E){return f.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(y.default,{form:U,schema:fe,onFinish:Ce}),s.default.createElement(m.default,null,s.default.createElement(i.default,{onClick:je},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(i.default,{type:"primary",onClick:U.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},L=d,a.abrupt("return",L);case 47:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y,I,d,L;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return a.t0=t,a.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.t2=t,a.next=12,Promise.resolve().then(e.bind(null,"PpiC"));case 12:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.next=16,e.e(14).then(e.t.bind(null,"tL+A",7));case 16:return a.t4=t,a.next=19,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 19:return a.t5=a.sent,f=(0,a.t4)(a.t5),a.t6=t,a.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 28:return s=a.sent,a.t8=l,a.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=36,e.e(15).then(e.bind(null,"OH0R"));case 36:return y=a.sent,I={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var U=(0,r.useForm)(),Y=function(ie,je){je.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(je.map(function(Ce){return Ce.name}))):(0,y.fakeApi)("xxx/submit",ie).then(function(Ce){return f.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Z=function(ie){var je=ie.data,Ce=ie.errors,He=ie.schema,u=(0,i.default)(ie,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(C){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(r.default,{form:U,schema:I,beforeFinish:Z,onFinish:Y}),n.default.createElement(m.default,{type:"primary",onClick:U.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},L=d,a.abrupt("return",L);case 41:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y,I,d,L;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(17).then(e.t.bind(null,"lfLe",7));case 4:return a.t0=t,a.next=7,e.e(18).then(e.t.bind(null,"Cp9S",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,e.e(3).then(e.t.bind(null,"MaXC",7));case 11:return a.t2=t,a.next=14,e.e(12).then(e.t.bind(null,"4IMT",7));case 14:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.next=18,e.e(14).then(e.t.bind(null,"tL+A",7));case 18:return a.t4=t,a.next=21,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 21:return a.t5=a.sent,f=(0,a.t4)(a.t5),a.t6=t,a.next=26,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 26:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=30,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 30:return s=a.sent,a.t8=l,a.next=34,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 34:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=38,e.e(15).then(e.bind(null,"OH0R"));case 38:return y=a.sent,I={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var U=(0,r.useForm)(),Y=function(ie,je){je.length>0?f.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(je.map(function(Ce){return Ce.name}))):(0,y.fakeApi)("xxx/submit",ie).then(function(Ce){return f.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Z=function(){(0,y.fakeApi)("xxx/getForm").then(function(ie){U.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return n.default.createElement("div",{style:{width:"400px"}},n.default.createElement(r.default,{form:U,schema:I,onFinish:Y}),n.default.createElement(m.default,null,n.default.createElement(i.default,{onClick:Z},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),n.default.createElement(i.default,{type:"primary",onClick:U.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},L=d,a.abrupt("return",L);case 43:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s;return o.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return l=e("3PQu"),t=e("K+nK"),y.t0=t,y.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return y.t1=y.sent,m=(0,y.t0)(y.t1),y.t2=l,y.next=10,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 10:return y.t3=y.sent,i=(0,y.t2)(y.t3),f={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},n=function(){var d=(0,i.useForm)();return m.default.createElement(i.default,{form:d,schema:f})},s=n,y.abrupt("return",s);case 16:case"end":return y.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=e("K+nK"),s.t0=l,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,t=(0,s.t0)(s.t1),s.t2=l,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return s.t3=s.sent,m=(0,s.t2)(s.t3),s.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return i=s.sent,f=function(){return t.default.createElement(m.default,{schema:i.expression})},s.abrupt("return",f);case 16:case"end":return s.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:F},"json/schema.js":{import:"./json/schema",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"watch-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y;return o.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=e("3PQu"),t=e("K+nK"),d.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return d.t0=t,d.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return d.t1=d.sent,m=(0,d.t0)(d.t1),d.t2=t,d.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return d.t3=d.sent,i=(0,d.t2)(d.t3),d.next=16,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 16:return f=d.sent,d.t4=l,d.next=20,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 20:return d.t5=d.sent,n=(0,d.t4)(d.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},r=function(){var W=(0,n.useForm)(),a=function(Y,Z){Z.length>0?alert("errorFields:"+JSON.stringify(Z)):alert("formData:"+JSON.stringify(Y,null,2))},b={"#":function(Y){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",Y)},input1:function(Y){Y!==void 0&&W.onItemChange("input2",Y)}};return i.default.createElement("div",null,i.default.createElement(n.default,{form:W,schema:s,onFinish:a,watch:b}),i.default.createElement(m.default,{type:"primary",onClick:W.submit},"\u63D0\u4EA4"))},y=r,d.abrupt("return",y);case 26:case"end":return d.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"widget-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y,I,d,L;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return l=e("3PQu"),t=e("K+nK"),a.next=4,e.e(3).then(e.t.bind(null,"MaXC",7));case 4:return a.t0=t,a.next=7,e.e(12).then(e.t.bind(null,"4IMT",7));case 7:return a.t1=a.sent,m=(0,a.t0)(a.t1),a.next=11,Promise.all([e.e(3),e.e(56)]).then(e.t.bind(null,"cUip",7));case 11:return a.t2=t,a.next=14,Promise.all([e.e(0),e.e(54),e.e(57)]).then(e.t.bind(null,"iJl9",7));case 14:return a.t3=a.sent,i=(0,a.t2)(a.t3),a.t4=t,a.next=19,e.e(60).then(e.bind(null,"0Owb"));case 19:return a.t5=a.sent,f=(0,a.t4)(a.t5),a.t6=l,a.next=24,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 24:return a.t7=a.sent,n=(0,a.t6)(a.t7),a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 28:return s=a.sent,a.t8=l,a.next=32,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),y={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},I=function(U){return n.default.createElement(i.default,(0,f.default)({addonBefore:"http://",addonAfter:".com"},U))},d=function(){var U=(0,r.useForm)(),Y=function(){};return n.default.createElement("div",null,n.default.createElement(r.default,{form:U,schema:y,widgets:{site:I},onFinish:function(fe){return alert(JSON.stringify(fe,null,2))}}),n.default.createElement(m.default,{type:"primary",onClick:U.submit},"\u63D0\u4EA4"))},L=d,a.abrupt("return",L);case 39:case"end":return a.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.1.3"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"docs-playground":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:Ve},"main.js":{import:"./main",content:Te},"json/simplest.json":{import:"./json/simplest.json",content:Ne},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Ae},"monaco/index.js":{import:"./monaco",content:pe},"theme.css":{import:"./theme.css",content:Re},"index.css":{import:"./index.css",content:Se}},dependencies:{antd:{version:"4.15.2",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.1.3"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{tsx:Je}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n,s,r,y;return o.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=e("K+nK"),d.t0=l,d.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return d.t1=d.sent,t=(0,d.t0)(d.t1),d.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(53)]).then(e.bind(null,"P2DI"));case 8:for(m=d.sent,i=[],f=0;f<6;f++)i.push({id:f.toString(),title:"\u6807\u9898".concat(f+1),created_at:new Date().getTime()});return n={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},s=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(W,a){return t.default.createElement("a",{onClick:function(){return alert(W.title)}},"\u7F16\u8F91")}}],r=function(){var W=function(){return{rows:i,total:i.length}};return t.default.createElement(m.TableProvider,null,t.default.createElement(m.Search,{schema:n,api:W}),t.default.createElement(m.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:s,rowKey:"id"}))},y=r,d.abrupt("return",y);case 16:case"end":return d.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){var l,t,m,i,f,n;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e("K+nK"),r.t0=l,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,t=(0,r.t0)(r.t1),r.t2=l,r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(52)]).then(e.bind(null,"nYSz"));case 9:return r.t3=r.sent,m=(0,r.t2)(r.t3),i={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},f=function(){return t.default.createElement("div",{style:{height:"80vh"}},t.default.createElement(m.default,{defaultValue:i}))},n=f,r.abrupt("return",n);case 15:case"end":return r.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:ye}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:B}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(O.dynamic)({loader:function(){var g=Object(R.a)(o.a.mark(function h(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},h)}));function v(){return g.apply(this,arguments)}return v}()}),previewerProps:{sources:{_:{jsx:Ue},"index.less":{import:"./index.less",content:Ge}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.11"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},LiGJ:function(we,Ee,e){"use strict";e.r(Ee);var R=e("q1tI"),c=e.n(R),o=e("dEAq"),O=e.n(o),ce=e("0zqC"),F=e("JjdP"),p=c.a.memo(F.default["display-demo"].component),ge=c.a.memo(F.default["display-demo-1"].component),oe=c.a.memo(F.default["display-demo-2"].component),Ve=c.a.memo(F.default["display-demo-3"].component),Te=c.a.memo(F.default["display-demo-4"].component),Ne=c.a.memo(F.default["display-demo-5"].component),Ae=c.a.memo(F.default["display-demo-6"].component),pe=c.a.memo(F.default["display-demo-7"].component);Ee.default=()=>(c.a.useEffect(()=>{window.location.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(window.location.hash.slice(1)))},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5"},c.a.createElement(o.AnchorLink,{to:"#\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5"),c.a.createElement("h2",{id:"displaytype"},c.a.createElement(o.AnchorLink,{to:"#displaytype","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),c.a.createElement("code",null,"displayType")),c.a.createElement("ul",null,c.a.createElement("li",null,"\u7C7B\u578B\uFF1A'row' | 'column' | 'inline'"),c.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A 'column'"),c.a.createElement("li",null,"\u8BF4\u660E\uFF1A\u7528\u4E8E\u63A7\u5236\u6807\u7B7E\u7684\u4F4D\u7F6E\u3002\u6CA1\u6709\u7279\u6B8A\u60C5\u51B5\uFF0C\u4E00\u822C\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u7684 display: column\u3002\u6CE8\u610F ",c.a.createElement("code",null,"displayType")," \u65E2\u662F props\uFF0C\u53C8\u662F schema \u7684\u5B57\u6BB5\uFF0C\u53EF\u4EE5"))),c.a.createElement(ce.default,F.default["display-demo"].previewerProps,c.a.createElement(p,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("p",null,"\u975E\u5E38\u7279\u522B\u7684\u60C5\u51B5\uFF0C\u4F1A\u7528\u5230 display: inline")),c.a.createElement(ce.default,F.default["display-demo-1"].previewerProps,c.a.createElement(ge,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h3",{id:"readonly"},c.a.createElement(o.AnchorLink,{to:"#readonly","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"ReadOnly"),c.a.createElement("p",null,"\u65B0\u589E\u4E86\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u5728 <Form /> \u7EC4\u4EF6\u4E0A\u7528 props \u58F0\u660E")),c.a.createElement(ce.default,F.default["display-demo-2"].previewerProps,c.a.createElement(oe,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h3",{id:"labelwidth"},c.a.createElement(o.AnchorLink,{to:"#labelwidth","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"labelWidth"),c.a.createElement("p",null,"\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u5728\u9876\u5C42\u7528 props \u58F0\u660E\uFF0C\u6216\u8005\u5728\u6BCF\u4E2A schema \u4E2D\u5355\u72EC\u58F0\u660E"),c.a.createElement("h3",{id:"width"},c.a.createElement(o.AnchorLink,{to:"#width","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"width"),c.a.createElement("p",null,"\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u5728\u6BCF\u4E2A schema \u4E2D\u5355\u72EC\u58F0\u660E\u3002\u6CA1\u6709\u7279\u522B\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u4E00\u884C\u4E00\u4E2A\u5143\u7D20\uFF08\u5373\u9ED8\u8BA4\u7684 100%\uFF09\uFF0C\u7B26\u5408\u7528\u6237\u586B\u5199\u8868\u5355\u7684\u4E60\u60EF")),c.a.createElement(ce.default,F.default["display-demo-3"].previewerProps,c.a.createElement(Ve,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h3",{id:"\u5217\u8868\u7684\u5C55\u793A"},c.a.createElement(o.AnchorLink,{to:"#\u5217\u8868\u7684\u5C55\u793A","aria-hidden":"true",tabIndex:-1},c.a.createElement("span",{className:"icon icon-link"})),"\u5217\u8868\u7684\u5C55\u793A"),c.a.createElement("p",null,"\u5217\u8868\u7684\u5C55\u793A\u5BF9\u4E8E\u7B80\u5355\u9700\u6C42\u5360\u4F4D\u592A\u591A\uFF0C\u590D\u6742\u9700\u6C42\u5B9A\u5236\u4E0D\u591F\u4E00\u76F4\u662F\u75DB\u70B9\u3002\u6240\u4EE5\u6211\u4EEC\u7ED9\u51FA\u4E86\u56DB\u79CD\u5C55\u793A\uFF0C\u5145\u5206\u6EE1\u8DB3\u4ECE\u6781\u7B80\u5230\u590D\u6742\u7684\u6240\u6709\u9700\u6C42"),c.a.createElement("ol",null,c.a.createElement("li",null,"\u9ED8\u8BA4\u5C55\u793A\u4F7F\u7528 widget: 'list0'\uFF0C\u5361\u7247\u7C7B\u578B\uFF0C\u7528\u4E8E\u5C55\u793A\u6570\u91CF\u4E0D\u592A\u591A\u4F46\u7ED3\u6784\u590D\u6742\u7684 list"))),c.a.createElement(ce.default,F.default["display-demo-4"].previewerProps,c.a.createElement(Te,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("ol",{start:2},c.a.createElement("li",null,"widget: 'list1' \u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 1-3 \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5"))),c.a.createElement(ce.default,F.default["display-demo-5"].previewerProps,c.a.createElement(Ne,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("ol",{start:3},c.a.createElement("li",null,"widget: 'list2' \u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 3 - n \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5\uFF0C\u7279\u522B\u662F\u6570\u636E\u91CF\u5F88\u5927\u9700\u8981\u5206\u9875\u7684"))),c.a.createElement(ce.default,F.default["display-demo-6"].previewerProps,c.a.createElement(Ae,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("ol",{start:4},c.a.createElement("li",null,"widget: 'list3' \u7528\u4E8E\u5C55\u793A\u5B58\u5728\u5217\u8868\u5957\u5217\u8868\uFF0C\u5217\u8868\u5957\u5BF9\u8C61\u7B49\u590D\u6742\u5143\u7D20\u7684\u60C5\u51B5"))),c.a.createElement(ce.default,F.default["display-demo-7"].previewerProps,c.a.createElement(pe,null)))))},TIsu:function(we,Ee,e){},Zs1V:function(we){we.exports=JSON.parse("{}")},k3GJ:function(we,Ee,e){"use strict";e.r(Ee),e.d(Ee,"TabPane",function(){return Y});var R=e("wx14"),c=e("rePB"),o=e("ODXe"),O=e("U8pU"),ce=e("Ff2n"),F=e("VTBJ"),p=e("q1tI"),ge=e("TSYQ"),oe=e.n(ge),Ve=e("Zm9Q"),Te=e("5Z9U"),Ne=e("6cGi"),Ae=e("KQm4"),pe=e("wgJM"),Re=e("t23M");function Se(u){var C=Object(p.useRef)(),E=Object(p.useRef)(!1);function P(){for(var S=arguments.length,j=new Array(S),T=0;T<S;T++)j[T]=arguments[T];E.current||(pe.a.cancel(C.current),C.current=Object(pe.a)(function(){u.apply(void 0,j)}))}return Object(p.useEffect)(function(){return function(){E.current=!0,pe.a.cancel(C.current)}},[]),P}function Je(u){var C=Object(p.useRef)([]),E=Object(p.useState)({}),P=Object(o.a)(E,2),S=P[1],j=Object(p.useRef)(typeof u=="function"?u():u),T=Se(function(){var D=j.current;C.current.forEach(function(G){D=G(D)}),C.current=[],j.current=D,S({})});function N(D){C.current.push(D),T()}return[j.current,N]}var ye=e("4IlW");function ze(u,C){var E,P=u.prefixCls,S=u.id,j=u.active,T=u.rtl,N=u.tab,D=N.key,G=N.tab,K=N.disabled,$=N.closeIcon,H=u.tabBarGutter,te=u.tabPosition,q=u.closable,J=u.renderWrapper,ve=u.removeAriaLabel,le=u.editable,ue=u.onClick,de=u.onRemove,ae=u.onFocus,re="".concat(P,"-tab");p.useEffect(function(){return de},[]);var k={};te==="top"||te==="bottom"?k[T?"marginLeft":"marginRight"]=H:k.marginBottom=H;var be=le&&q!==!1&&!K;function _(w){K||ue(w)}function Q(w){w.preventDefault(),w.stopPropagation(),le.onEdit("remove",{key:D,event:w})}var z=p.createElement("div",{key:D,ref:C,className:oe()(re,(E={},Object(c.a)(E,"".concat(re,"-with-remove"),be),Object(c.a)(E,"".concat(re,"-active"),j),Object(c.a)(E,"".concat(re,"-disabled"),K),E)),style:k,onClick:_},p.createElement("div",{role:"tab","aria-selected":j,id:S&&"".concat(S,"-tab-").concat(D),className:"".concat(re,"-btn"),"aria-controls":S&&"".concat(S,"-panel-").concat(D),"aria-disabled":K,tabIndex:K?null:0,onClick:function(A){A.stopPropagation(),_(A)},onKeyDown:function(A){[ye.a.SPACE,ye.a.ENTER].includes(A.which)&&(A.preventDefault(),_(A))},onFocus:ae},G),be&&p.createElement("button",{type:"button","aria-label":ve||"remove",tabIndex:0,className:"".concat(re,"-remove"),onClick:function(A){A.stopPropagation(),Q(A)}},$||le.removeIcon||"\xD7"));return J&&(z=J(z)),z}var B=p.forwardRef(ze),Ue={width:0,height:0,left:0,top:0};function Ge(u,C,E){return Object(p.useMemo)(function(){for(var P,S=new Map,j=C.get((P=u[0])===null||P===void 0?void 0:P.key)||Ue,T=j.left+j.width,N=0;N<u.length;N+=1){var D=u[N].key,G=C.get(D);if(!G){var K;G=C.get((K=u[N-1])===null||K===void 0?void 0:K.key)||Ue}var $=S.get(D)||Object(F.a)({},G);$.right=T-$.left-$.width,S.set(D,$)}return S},[u.map(function(P){return P.key}).join("_"),C,E])}var Ye={width:0,height:0,left:0,top:0,right:0};function g(u,C,E,P,S){var j=S.tabs,T=S.tabPosition,N=S.rtl,D,G,K;["top","bottom"].includes(T)?(D="width",G=N?"right":"left",K=Math.abs(C.left)):(D="height",G="top",K=-C.top);var $=C[D],H=E[D],te=P[D],q=$;return H+te>$&&(q=$-te),Object(p.useMemo)(function(){if(!j.length)return[0,0];for(var J=j.length,ve=J,le=0;le<J;le+=1){var ue=u.get(j[le].key)||Ye;if(ue[G]+ue[D]>K+q){ve=le-1;break}}for(var de=0,ae=J-1;ae>=0;ae-=1){var re=u.get(j[ae].key)||Ye;if(re[G]<K){de=ae+1;break}}return[de,ve]},[u,K,q,T,j.map(function(J){return J.key}).join("_"),N])}var v=e("1j5w"),h=e("eDIo");function l(u,C){var E=u.prefixCls,P=u.editable,S=u.locale,j=u.style;return!P||P.showAdd===!1?null:p.createElement("button",{ref:C,type:"button",className:"".concat(E,"-nav-add"),style:j,"aria-label":(S==null?void 0:S.addAriaLabel)||"Add tab",onClick:function(N){P.onEdit("add",{event:N})}},P.addIcon||"+")}var t=p.forwardRef(l);function m(u,C){var E=u.prefixCls,P=u.id,S=u.tabs,j=u.locale,T=u.mobile,N=u.moreIcon,D=N===void 0?"More":N,G=u.moreTransitionName,K=u.style,$=u.className,H=u.editable,te=u.tabBarGutter,q=u.rtl,J=u.onTabClick,ve=Object(p.useState)(!1),le=Object(o.a)(ve,2),ue=le[0],de=le[1],ae=Object(p.useState)(null),re=Object(o.a)(ae,2),k=re[0],be=re[1],_="".concat(P,"-more-popup"),Q="".concat(E,"-dropdown"),z=k!==null?"".concat(_,"-").concat(k):null,w=j==null?void 0:j.dropdownAriaLabel,A=p.createElement(v.default,{onClick:function(se){var De=se.key,Oe=se.domEvent;J(De,Oe),de(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":z,selectedKeys:[k],"aria-label":w!==void 0?w:"expanded dropdown"},S.map(function(x){return p.createElement(v.MenuItem,{key:x.key,id:"".concat(_,"-").concat(x.key),role:"option","aria-controls":P&&"".concat(P,"-panel-").concat(x.key),disabled:x.disabled},x.tab)}));function X(x){for(var se=S.filter(function(Ke){return!Ke.disabled}),De=se.findIndex(function(Ke){return Ke.key===k})||0,Oe=se.length,Me=0;Me<Oe;Me+=1){De=(De+x+Oe)%Oe;var Pe=se[De];if(!Pe.disabled){be(Pe.key);return}}}function ee(x){var se=x.which;if(!ue){[ye.a.DOWN,ye.a.SPACE,ye.a.ENTER].includes(se)&&(de(!0),x.preventDefault());return}switch(se){case ye.a.UP:X(-1),x.preventDefault();break;case ye.a.DOWN:X(1),x.preventDefault();break;case ye.a.ESC:de(!1);break;case ye.a.SPACE:case ye.a.ENTER:k!==null&&J(k,x);break}}Object(p.useEffect)(function(){var x=document.getElementById(z);x&&x.scrollIntoView&&x.scrollIntoView(!1)},[k]),Object(p.useEffect)(function(){ue||be(null)},[ue]);var ne=Object(c.a)({},q?"marginLeft":"marginRight",te);S.length||(ne.visibility="hidden",ne.order=1);var Ie=oe()(Object(c.a)({},"".concat(Q,"-rtl"),q)),We=T?null:p.createElement(h.default,{prefixCls:Q,overlay:A,trigger:["hover"],visible:ue,transitionName:G,onVisibleChange:de,overlayClassName:Ie,mouseEnterDelay:.1,mouseLeaveDelay:.1},p.createElement("button",{type:"button",className:"".concat(E,"-nav-more"),style:ne,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(P,"-more"),"aria-expanded":ue,onKeyDown:ee},D));return p.createElement("div",{className:oe()("".concat(E,"-nav-operations"),$),style:K,ref:C},We,p.createElement(t,{prefixCls:E,locale:j,editable:H}))}var i=p.forwardRef(m),f=Object(p.createContext)(null),n=.1,s=.01,r=20,y=Math.pow(.995,r);function I(u,C){var E=Object(p.useState)(),P=Object(o.a)(E,2),S=P[0],j=P[1],T=Object(p.useState)(0),N=Object(o.a)(T,2),D=N[0],G=N[1],K=Object(p.useState)(0),$=Object(o.a)(K,2),H=$[0],te=$[1],q=Object(p.useState)(),J=Object(o.a)(q,2),ve=J[0],le=J[1],ue=Object(p.useRef)();function de(Q){var z=Q.touches[0],w=z.screenX,A=z.screenY;j({x:w,y:A}),window.clearInterval(ue.current)}function ae(Q){if(!!S){Q.preventDefault();var z=Q.touches[0],w=z.screenX,A=z.screenY;j({x:w,y:A});var X=w-S.x,ee=A-S.y;C(X,ee);var ne=Date.now();G(ne),te(ne-D),le({x:X,y:ee})}}function re(){if(!!S&&(j(null),le(null),ve)){var Q=ve.x/H,z=ve.y/H,w=Math.abs(Q),A=Math.abs(z);if(Math.max(w,A)<n)return;var X=Q,ee=z;ue.current=window.setInterval(function(){if(Math.abs(X)<s&&Math.abs(ee)<s){window.clearInterval(ue.current);return}X*=y,ee*=y,C(X*r,ee*r)},r)}}var k=Object(p.useRef)();function be(Q){var z=Q.deltaX,w=Q.deltaY,A=0,X=Math.abs(z),ee=Math.abs(w);X===ee?A=k.current==="x"?z:w:X>ee?(A=z,k.current="x"):(A=w,k.current="y"),C(-A,-A)&&Q.preventDefault()}var _=Object(p.useRef)(null);_.current={onTouchStart:de,onTouchMove:ae,onTouchEnd:re,onWheel:be},p.useEffect(function(){function Q(X){_.current.onTouchStart(X)}function z(X){_.current.onTouchMove(X)}function w(X){_.current.onTouchEnd(X)}function A(X){_.current.onWheel(X)}return document.addEventListener("touchmove",z,{passive:!1}),document.addEventListener("touchend",w,{passive:!1}),u.current.addEventListener("touchstart",Q,{passive:!1}),u.current.addEventListener("wheel",A),function(){document.removeEventListener("touchmove",z),document.removeEventListener("touchend",w)}},[])}function d(){var u=Object(p.useRef)(new Map);function C(P){return u.current.has(P)||u.current.set(P,p.createRef()),u.current.get(P)}function E(P){u.current.delete(P)}return[C,E]}function L(u,C){var E=p.useRef(u),P=p.useState({}),S=Object(o.a)(P,2),j=S[1];function T(N){var D=typeof N=="function"?N(E.current):N;D!==E.current&&C(D,E.current),E.current=D,j({})}return[E.current,T]}var W=function(C){var E=C.position,P=C.prefixCls,S=C.extra;if(!S)return null;var j,T=S;return E==="right"&&(j=T.right||!T.left&&T||null),E==="left"&&(j=T.left||null),j?p.createElement("div",{className:"".concat(P,"-extra-content")},j):null};function a(u,C){var E,P=p.useContext(f),S=P.prefixCls,j=P.tabs,T=u.className,N=u.style,D=u.id,G=u.animated,K=u.activeKey,$=u.rtl,H=u.extra,te=u.editable,q=u.locale,J=u.tabPosition,ve=u.tabBarGutter,le=u.children,ue=u.onTabClick,de=u.onTabScroll,ae=Object(p.useRef)(),re=Object(p.useRef)(),k=Object(p.useRef)(),be=Object(p.useRef)(),_=d(),Q=Object(o.a)(_,2),z=Q[0],w=Q[1],A=J==="top"||J==="bottom",X=L(0,function(V,M){A&&de&&de({direction:V>M?"left":"right"})}),ee=Object(o.a)(X,2),ne=ee[0],Ie=ee[1],We=L(0,function(V,M){!A&&de&&de({direction:V>M?"top":"bottom"})}),x=Object(o.a)(We,2),se=x[0],De=x[1],Oe=Object(p.useState)(0),Me=Object(o.a)(Oe,2),Pe=Me[0],Ke=Me[1],rn=Object(p.useState)(0),sn=Object(o.a)(rn,2),Ze=sn[0],on=sn[1],pn=Object(p.useState)(0),ln=Object(o.a)(pn,2),xe=ln[0],fn=ln[1],un=Object(p.useState)(0),Qe=Object(o.a)(un,2),dn=Qe[0],me=Qe[1],$e=Object(p.useState)(null),mn=Object(o.a)($e,2),Be=mn[0],Yn=mn[1],Zn=Object(p.useState)(null),Sn=Object(o.a)(Zn,2),Xe=Sn[0],xn=Sn[1],kn=Object(p.useState)(0),Dn=Object(o.a)(kn,2),qn=Dn[0],_n=Dn[1],et=Object(p.useState)(0),On=Object(o.a)(et,2),nt=On[0],tt=On[1],at=Je(new Map),Pn=Object(o.a)(at,2),rt=Pn[0],st=Pn[1],cn=Ge(j,rt,Pe),Fn="".concat(S,"-nav-operations-hidden"),ke=0,qe=0;A?$?(ke=0,qe=Math.max(0,Pe-Be)):(ke=Math.min(0,Be-Pe),qe=0):(ke=Math.min(0,Xe-Ze),qe=0);function vn(V){return V<ke?ke:V>qe?qe:V}var An=Object(p.useRef)(),ot=Object(p.useState)(),Bn=Object(o.a)(ot,2),hn=Bn[0],Tn=Bn[1];function gn(){Tn(Date.now())}function yn(){window.clearTimeout(An.current)}I(ae,function(V,M){function he(Fe,en){Fe(function(nn){var tn=vn(nn+en);return tn})}if(A){if(Be>=Pe)return!1;he(Ie,V)}else{if(Xe>=Ze)return!1;he(De,M)}return yn(),gn(),!0}),Object(p.useEffect)(function(){return yn(),hn&&(An.current=window.setTimeout(function(){Tn(0)},100)),yn},[hn]);function Nn(){var V=arguments.length>0&&arguments[0]!==void 0?arguments[0]:K,M=cn.get(V)||{width:0,height:0,left:0,right:0,top:0};if(A){var he=ne;$?M.right<ne?he=M.right:M.right+M.width>ne+Be&&(he=M.right+M.width-Be):M.left<-ne?he=-M.left:M.left+M.width>-ne+Be&&(he=-(M.left+M.width-Be)),De(0),Ie(vn(he))}else{var Fe=se;M.top<-se?Fe=-M.top:M.top+M.height>-se+Xe&&(Fe=-(M.top+M.height-Xe)),Ie(0),De(vn(Fe))}}var it=g(cn,{width:Be,height:Xe,left:ne,top:se},{width:xe,height:dn},{width:qn,height:nt},Object(F.a)(Object(F.a)({},u),{},{tabs:j})),In=Object(o.a)(it,2),lt=In[0],ut=In[1],dt=j.map(function(V){var M=V.key;return p.createElement(B,{id:D,prefixCls:S,key:M,rtl:$,tab:V,closable:V.closable,editable:te,active:M===K,tabPosition:J,tabBarGutter:ve,renderWrapper:le,removeAriaLabel:q==null?void 0:q.removeAriaLabel,ref:z(M),onClick:function(Fe){ue(M,Fe)},onRemove:function(){w(M)},onFocus:function(){Nn(M),gn(),$||(ae.current.scrollLeft=0),ae.current.scrollTop=0}})}),bn=Se(function(){var V,M,he,Fe,en,nn,tn,Cn,Rn,ht=((V=ae.current)===null||V===void 0?void 0:V.offsetWidth)||0,gt=((M=ae.current)===null||M===void 0?void 0:M.offsetHeight)||0,Jn=((he=be.current)===null||he===void 0?void 0:he.offsetWidth)||0,zn=((Fe=be.current)===null||Fe===void 0?void 0:Fe.offsetHeight)||0,yt=((en=k.current)===null||en===void 0?void 0:en.offsetWidth)||0,bt=((nn=k.current)===null||nn===void 0?void 0:nn.offsetHeight)||0;Yn(ht),xn(gt),_n(Jn),tt(zn);var Un=(((tn=re.current)===null||tn===void 0?void 0:tn.offsetWidth)||0)-Jn,Gn=(((Cn=re.current)===null||Cn===void 0?void 0:Cn.offsetHeight)||0)-zn;Ke(Un),on(Gn);var Hn=(Rn=k.current)===null||Rn===void 0?void 0:Rn.className.includes(Fn);fn(Un-(Hn?0:yt)),me(Gn-(Hn?0:bt)),st(function(){var Qn=new Map;return j.forEach(function(Et){var Xn=Et.key,an=z(Xn).current;an&&Qn.set(Xn,{width:an.offsetWidth,height:an.offsetHeight,left:an.offsetLeft,top:an.offsetTop})}),Qn})}),mt=j.slice(0,lt),ct=j.slice(ut+1),Mn=[].concat(Object(Ae.a)(mt),Object(Ae.a)(ct)),pt=Object(p.useState)(),Kn=Object(o.a)(pt,2),ft=Kn[0],vt=Kn[1],Le=cn.get(K),Ln=Object(p.useRef)();function Wn(){pe.a.cancel(Ln.current)}Object(p.useEffect)(function(){var V={};return Le&&(A?($?V.right=Le.right:V.left=Le.left,V.width=Le.width):(V.top=Le.top,V.height=Le.height)),Wn(),Ln.current=Object(pe.a)(function(){vt(V)}),Wn},[Le,A,$]),Object(p.useEffect)(function(){Nn()},[K,Le,cn,A]),Object(p.useEffect)(function(){bn()},[$,ve,K,j.map(function(V){return V.key}).join("_")]);var $n=!!Mn.length,_e="".concat(S,"-nav-wrap"),En,jn,wn,Vn;return A?$?(jn=ne>0,En=ne+Be<Pe):(En=ne<0,jn=-ne+Be<Pe):(wn=se<0,Vn=-se+Xe<Ze),p.createElement("div",{ref:C,role:"tablist",className:oe()("".concat(S,"-nav"),T),style:N,onKeyDown:function(){gn()}},p.createElement(W,{position:"left",extra:H,prefixCls:S}),p.createElement(Re.default,{onResize:bn},p.createElement("div",{className:oe()(_e,(E={},Object(c.a)(E,"".concat(_e,"-ping-left"),En),Object(c.a)(E,"".concat(_e,"-ping-right"),jn),Object(c.a)(E,"".concat(_e,"-ping-top"),wn),Object(c.a)(E,"".concat(_e,"-ping-bottom"),Vn),E)),ref:ae},p.createElement(Re.default,{onResize:bn},p.createElement("div",{ref:re,className:"".concat(S,"-nav-list"),style:{transform:"translate(".concat(ne,"px, ").concat(se,"px)"),transition:hn?"none":void 0}},dt,p.createElement(t,{ref:be,prefixCls:S,locale:q,editable:te,style:{visibility:$n?"hidden":null}}),p.createElement("div",{className:oe()("".concat(S,"-ink-bar"),Object(c.a)({},"".concat(S,"-ink-bar-animated"),G.inkBar)),style:ft}))))),p.createElement(i,Object(R.a)({},u,{ref:k,prefixCls:S,tabs:Mn,className:!$n&&Fn})),p.createElement(W,{position:"right",extra:H,prefixCls:S}))}var b=p.forwardRef(a);function U(u){var C=u.id,E=u.activeKey,P=u.animated,S=u.tabPosition,j=u.rtl,T=u.destroyInactiveTabPane,N=p.useContext(f),D=N.prefixCls,G=N.tabs,K=P.tabPane,$=G.findIndex(function(H){return H.key===E});return p.createElement("div",{className:oe()("".concat(D,"-content-holder"))},p.createElement("div",{className:oe()("".concat(D,"-content"),"".concat(D,"-content-").concat(S),Object(c.a)({},"".concat(D,"-content-animated"),K)),style:$&&K?Object(c.a)({},j?"marginRight":"marginLeft","-".concat($,"00%")):null},G.map(function(H){return p.cloneElement(H.node,{key:H.key,prefixCls:D,tabKey:H.key,id:C,animated:K,active:H.key===E,destroyInactiveTabPane:T})})))}function Y(u){var C=u.prefixCls,E=u.forceRender,P=u.className,S=u.style,j=u.id,T=u.active,N=u.animated,D=u.destroyInactiveTabPane,G=u.tabKey,K=u.children,$=p.useState(E),H=Object(o.a)($,2),te=H[0],q=H[1];p.useEffect(function(){T?q(!0):D&&q(!1)},[T,D]);var J={};return T||(N?(J.visibility="hidden",J.height=0,J.overflowY="hidden"):J.display="none"),p.createElement("div",{id:j&&"".concat(j,"-panel-").concat(G),role:"tabpanel",tabIndex:T?0:-1,"aria-labelledby":j&&"".concat(j,"-tab-").concat(G),"aria-hidden":!T,style:Object(F.a)(Object(F.a)({},J),S),className:oe()("".concat(C,"-tabpane"),T&&"".concat(C,"-tabpane-active"),P)},(T||te||E)&&K)}var Z=0;function fe(u){return Object(Ve.a)(u).map(function(C){if(p.isValidElement(C)){var E=C.key!==void 0?String(C.key):void 0;return Object(F.a)(Object(F.a)({key:E},C.props),{},{node:C})}return null}).filter(function(C){return C})}function ie(u,C){var E,P=u.id,S=u.prefixCls,j=S===void 0?"rc-tabs":S,T=u.className,N=u.children,D=u.direction,G=u.activeKey,K=u.defaultActiveKey,$=u.editable,H=u.animated,te=H===void 0?{inkBar:!0,tabPane:!1}:H,q=u.tabPosition,J=q===void 0?"top":q,ve=u.tabBarGutter,le=u.tabBarStyle,ue=u.tabBarExtraContent,de=u.locale,ae=u.moreIcon,re=u.moreTransitionName,k=u.destroyInactiveTabPane,be=u.renderTabBar,_=u.onChange,Q=u.onTabClick,z=u.onTabScroll,w=Object(ce.a)(u,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),A=fe(N),X=D==="rtl",ee;te===!1?ee={inkBar:!1,tabPane:!1}:te===!0?ee={inkBar:!0,tabPane:!0}:ee=Object(F.a)({inkBar:!0,tabPane:!1},Object(O.a)(te)==="object"?te:{});var ne=Object(p.useState)(!1),Ie=Object(o.a)(ne,2),We=Ie[0],x=Ie[1];Object(p.useEffect)(function(){x(Object(Te.a)())},[]);var se=Object(Ne.a)(function(){var me;return(me=A[0])===null||me===void 0?void 0:me.key},{value:G,defaultValue:K}),De=Object(o.a)(se,2),Oe=De[0],Me=De[1],Pe=Object(p.useState)(function(){return A.findIndex(function(me){return me.key===Oe})}),Ke=Object(o.a)(Pe,2),rn=Ke[0],sn=Ke[1];Object(p.useEffect)(function(){var me=A.findIndex(function(mn){return mn.key===Oe});if(me===-1){var $e;me=Math.max(0,Math.min(rn,A.length-1)),Me(($e=A[me])===null||$e===void 0?void 0:$e.key)}sn(me)},[A.map(function(me){return me.key}).join("_"),Oe,rn]);var Ze=Object(Ne.a)(null,{value:P}),on=Object(o.a)(Ze,2),pn=on[0],ln=on[1],xe=J;We&&!["left","right"].includes(J)&&(xe="top"),Object(p.useEffect)(function(){P||(ln("rc-tabs-".concat(Z)),Z+=1)},[]);function fn(me,$e){Q==null||Q(me,$e),Me(me),_==null||_(me)}var un={id:pn,activeKey:Oe,animated:ee,tabPosition:xe,rtl:X,mobile:We},Qe,dn=Object(F.a)(Object(F.a)({},un),{},{editable:$,locale:de,moreIcon:ae,moreTransitionName:re,tabBarGutter:ve,onTabClick:fn,onTabScroll:z,extra:ue,style:le,panes:N});return be?Qe=be(dn,b):Qe=p.createElement(b,dn),p.createElement(f.Provider,{value:{tabs:A,prefixCls:j}},p.createElement("div",Object(R.a)({ref:C,id:P,className:oe()(j,"".concat(j,"-").concat(xe),(E={},Object(c.a)(E,"".concat(j,"-mobile"),We),Object(c.a)(E,"".concat(j,"-editable"),$),Object(c.a)(E,"".concat(j,"-rtl"),X),E),T)},w),Qe,p.createElement(U,Object(R.a)({destroyInactiveTabPane:k},un,{animated:ee}))))}var je=p.forwardRef(ie);je.TabPane=Y;var Ce=je,He=Ee.default=Ce}}]);
