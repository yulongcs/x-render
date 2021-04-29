(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{nVDg:function(o,a,e){"use strict";e.r(a);var u=e("q1tI"),n=e.n(u),r=e("asP9"),d=e.n(r),t=e("ZpkN"),l=e("JjdP");a.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u5B89\u88C5"},n.a.createElement(r.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"card-render \u76EE\u524D\u9ED8\u8BA4\u4F7F\u7528 ant design\uFF0C\u6240\u4EE5\u8BF7\u5728 antd \u9879\u76EE\u4E0B\u4F7F\u7528\uFF0C\u5982\u679C\u8981\u5355\u72EC\u4F7F\u7528\uFF0C\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5 antd"),n.a.createElement(t.a,{code:"npm i card-render --save",lang:"sh"}),n.a.createElement("p",null,"or"),n.a.createElement(t.a,{code:"yarn add card-render",lang:"sh"}),n.a.createElement("p",null,"\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A"),n.a.createElement(t.a,{code:`import React from 'react';
import { Button } from 'antd';
import { ProTable, Search, TableContainer, useTable } from 'table-render';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const searchSchema = {
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
  return {
    rows: [
      {
        id: 624748504,
        title: 'mock\u6570\u636E1',
        state: 'closed',
        created_at: '2020-05-26T09:42:56Z',
      },
      {
        id: 624691229,
        title: 'mock\u6570\u636E2',
        state: 'open',
        created_at: '2020-05-26T08:19:22Z',
      },
    ],
    total: 2,
  };
};

const Demo = () => {
  return (
    <TableContainer searchApi={searchApi}>
      <Search schema={searchSchema} />
      <ProTable
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
        toolbarRender={() => [
          <Button key="1">\u67E5\u770B\u65E5\u5FD7</Button>,
          <Button key="2">\u5BFC\u51FA\u6570\u636E</Button>,
          <Button key="3">\u521B\u5EFA</Button>,
        ]}
        // \u4E0B\u9762\u5168\u662Fantd\u7684props
        columns={columns}
        rowKey="id"
      />
    </TableContainer>
  );
};

export default Demo;`,lang:"js"})))}}}]);
