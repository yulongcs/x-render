(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{YlJp:function(r,n,e){"use strict";e.r(n);var E=e("q1tI"),u=e.n(E),l=e("dEAq"),c=e.n(l),t=e("ZpkN"),F=e("JjdP");n.default=a=>(u.a.useEffect(()=>{a!=null&&a.location.hash&&l.AnchorLink.scrollToAnchor(decodeURIComponent(a.location.hash.slice(1)))},[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"markdown"},u.a.createElement("h4",{id:"\u5BF9\u4E8E\u4E4B\u524D\u4F7F\u7528-0x-\u7684\u540C\u5B66\uFF0C\u8003\u8651\u5230\u4EE3\u7801\u4F7F\u7528\u5408\u7406\u6027\uFF0C\u6211\u4EEC\u5BF9\u4E8E-tablerender-10-\u6709\u5982\u4E0B\u66F4\u65B0"},u.a.createElement(l.AnchorLink,{to:"#\u5BF9\u4E8E\u4E4B\u524D\u4F7F\u7528-0x-\u7684\u540C\u5B66\uFF0C\u8003\u8651\u5230\u4EE3\u7801\u4F7F\u7528\u5408\u7406\u6027\uFF0C\u6211\u4EEC\u5BF9\u4E8E-tablerender-10-\u6709\u5982\u4E0B\u66F4\u65B0","aria-hidden":"true",tabIndex:-1},u.a.createElement("span",{className:"icon icon-link"})),"\u5BF9\u4E8E\u4E4B\u524D\u4F7F\u7528 0.x \u7684\u540C\u5B66\uFF0C\u8003\u8651\u5230\u4EE3\u7801\u4F7F\u7528\u5408\u7406\u6027\uFF0C\u6211\u4EEC\u5BF9\u4E8E TableRender 1.0 \u6709\u5982\u4E0B\u66F4\u65B0"),u.a.createElement("ol",null,u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("code",null,"table-render")," \u7684\u5BFC\u51FA\u6709\u5982\u4E0B\u53D8\u5316\uFF0C",u.a.createElement("code",null,"ProTable")," \u4FEE\u6539\u6210 ",u.a.createElement("code",null,"Table"),"\uFF0C",u.a.createElement("code",null,"TableContainer")," \u4FEE\u6539\u6210 ",u.a.createElement("code",null,"TableProvider"),"\uFF0C\u8FD9\u6837\u8868\u610F\u66F4\u52A0\u660E\u786E\u6709\u4E9B\u3002")),u.a.createElement("li",null,u.a.createElement("p",null,u.a.createElement("code",null,"searchApi")," \u539F\u672C\u653E\u5230 ",u.a.createElement("code",null,"TableContainer"),"\u7EC4\u4EF6\u4E0A\u9762\uFF0C\u73B0\u6539\u6210\u653E\u5230 ",u.a.createElement("code",null,"Search")," \u4E0A\uFF0C\u540C\u65F6",u.a.createElement("code",null,"searchApi")," \u6539\u6210 ",u.a.createElement("code",null,"api"),"\uFF0C\u8FD9\u6837\u66F4\u52A0\u5404\u53F8\u5176\u804C\u3002"),u.a.createElement(t.a,{code:`// \u8001\u7248\u672C\u4F7F\u7528
import { ProTable, Search, TableContainer } from 'table-render';
//...
<TableContainer searchApi={searchApi}>
  <Search schema={searchSchema} />
  <ProTable />
</TableContainer>;

// \u65B0\u7248\u672C
import { Table, Search, TableProvider } from 'table-render';
//...
<TableProvider>
  <Search schema={schema} api={searchApi} />
  <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
</TableProvider>;`,lang:"js"}))))))}}]);
