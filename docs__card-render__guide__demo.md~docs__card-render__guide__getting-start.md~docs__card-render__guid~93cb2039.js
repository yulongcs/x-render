(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(Ge,Y,n){"use strict";n.r(Y),n.d(Y,"Column",function(){return U}),n.d(Y,"Line",function(){return kt}),n.d(Y,"PivotTable",function(){return Pn});var ce=n("0Owb"),X=n("PpiC"),g=n("q1tI"),Q=n.n(g),O=n("06Lf");function S(V){var A=[],D=[];return V.forEach(l=>{l.isDim?A.push(l):D.push(l)}),{metaDim:A,metaInd:D}}function B(V){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(V==null?void 0:V.toPrecision(A))}var u=()=>Q.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function Pt(V,A){var D=S(V),l=D.metaDim,x=D.metaInd;if(x.length>=1&&l.length===0){var d="type",P="value";return{xField:d,yField:P,data:A.map(ae=>x.map(Oe=>{var Le=Oe.id,vt=Oe.name;return{[d]:Le,[P]:ae[Le]}})).flat(),meta:{[d]:{formatter:ae=>{var Oe;return((Oe=V.find(Le=>{var vt=Le.id;return ae===vt}))===null||Oe===void 0?void 0:Oe.name)||ae}}},tooltip:{formatter:ae=>{var Oe,Le=ae[d],vt=ae[P];return{name:(Oe=V.find(ft=>{var Bt=ft.id;return Le===Bt}))===null||Oe===void 0?void 0:Oe.name,value:vt}}}}}else if(x.length===1&&l.length===1){var $,G,W,ee=($=l.shift())===null||$===void 0?void 0:$.id,se=(G=x.shift())===null||G===void 0?void 0:G.id;return{data:A,xField:ee,yField:se,meta:{[se]:{alias:(W=V.find(ae=>{var Oe=ae.id;return Oe===se}))===null||W===void 0?void 0:W.name}}}}else if(x.length>1&&l.length===1){var te,me=(te=l.shift())===null||te===void 0?void 0:te.id,Pe="value",fe="type";return{data:A.map(ae=>x.map(Oe=>{var Le=Oe.id,vt=Oe.name;return{[me]:ae[me],[Pe]:ae[Le],[fe]:vt}})).flat(),xField:me,yField:Pe,seriesField:fe,isGroup:!0}}else if(x.length===1&&l.length===2){var pe,he,Ue;return{data:A,xField:(pe=l.shift())===null||pe===void 0?void 0:pe.id,yField:(he=x.shift())===null||he===void 0?void 0:he.id,seriesField:(Ue=l.shift())===null||Ue===void 0?void 0:Ue.id,isGroup:!0}}return{data:A,xField:"",yField:""}}var Qe=V=>{var A=V.className,D=V.style,l=V.meta,x=l===void 0?[]:l,d=V.data,P=d===void 0?[]:d,$=V.inverted,G=Object(X.default)(V,["className","style","meta","data","inverted"]);if($){var W=Pt(x,P),ee=W.xField,se=W.yField,te=Object(X.default)(W,["xField","yField"]);return Q.a.createElement(O.b,Object(ce.default)({xField:se,yField:ee},te,{renderer:"svg",errorTemplate:()=>Q.a.createElement(u,null)},G))}else return Q.a.createElement(O.c,Object(ce.default)({},Pt(x,P),{renderer:"svg",errorTemplate:()=>Q.a.createElement(u,null)},G))},U=Qe,z=n("k1fw"),Yt=n("sGjT");function wn(V,A){var D=S(V),l=D.metaDim,x=D.metaInd;if(x.length===1&&l.length===1){var d,P=l.shift(),$=x.shift(),G=P.id,W=$.id;return{data:A,xField:G,yField:W,yAxis:{label:{formatter:Re=>$.isRate?"".concat(B(100*Number(Re)),"%"):Re}},tooltip:{formatter:Re=>{var Ve=Re[G],ot=Re[W];return{name:$.name,value:$.isRate?"".concat(B(100*Number(ot)),"%"):ot}}},meta:{[W]:{alias:(d=V.find(Re=>{var Ve=Re.id;return Ve===W}))===null||d===void 0?void 0:d.name}}}}else if(x.length===1&&l.length===2){var ee=l.shift(),se=x.shift(),te=l.shift(),me=ee.id,Pe=se.id,fe=te.id;return{data:A,xField:me,yField:Pe,seriesField:fe,yAxis:{label:{formatter:Re=>se.isRate?"".concat(B(100*Number(Re)),"%"):Re}},tooltip:{formatter:Re=>{var Ve=Re[fe],ot=Re[Pe];return{name:Ve,value:se.isRate?"".concat(B(100*Number(ot)),"%"):ot}}}}}else if(x.length===2&&l.length===2){var pe,he,Ue,ae,Oe=A.map(Re=>{var Ve=x[0].id,ot=l[1].id,mn=Re[Ve],Ot=Re[ot],$t=Object(X.default)(Re,[Ve,ot].map(Yt.a));return Object(z.a)({[l[1].id]:"".concat(Ot,"-").concat(x[0].name)},$t)}),Le=A.map(Re=>{var Ve=x[1].id,ot=l[1].id,mn=Re[Ve],Ot=Re[ot],$t=Object(X.default)(Re,[Ve,ot].map(Yt.a));return Object(z.a)({[l[1].id]:"".concat(Ot,"-").concat(x[1].name)},$t)});return{data:[Le,Oe],geometryOptions:[{geometry:"line",seriesField:l[1].id},{geometry:"line",seriesField:l[1].id,lineStyle:{lineDash:[5,5]}}],xField:(pe=l.shift())===null||pe===void 0?void 0:pe.id,yField:[(he=x.shift())===null||he===void 0?void 0:he.id,(Ue=x.shift())===null||Ue===void 0?void 0:Ue.id],seriesField:(ae=l.shift())===null||ae===void 0?void 0:ae.id}}else if(x.length>1&&l.length===1){var vt,ft=(vt=l.shift())===null||vt===void 0?void 0:vt.id,Bt="value",St="type";return{data:A.map(Re=>x.map(Ve=>{var ot=Ve.id,mn=Ve.name;return{[ft]:Re[ft],[Bt]:Re[ot],[St]:mn}})).flat(),xField:ft,yField:Bt,seriesField:St}}return{data:A}}var Nt=V=>{var A=V.className,D=V.style,l=V.meta,x=l===void 0?[]:l,d=V.data,P=d===void 0?[]:d,$=V.withArea,G=Object(X.default)(V,["className","style","meta","data","withArea"]),W=wn(x,P);return $?Q.a.createElement(O.a,Object(ce.default)({},W,{renderer:"svg",errorTemplate:()=>Q.a.createElement(u,null)},G)):Array.isArray(W.yField)?Q.a.createElement(O.d,Object(ce.default)({},W,{renderer:"svg",errorTemplate:()=>Q.a.createElement(u,null)},G)):Q.a.createElement(O.e,Object(ce.default)({},W,{renderer:"svg",errorTemplate:()=>Q.a.createElement(u,null)},G))},kt=Nt,cn=n("tJVT"),Tt=n("mA+x"),xt=n("aMEK"),jt=n("ARb9"),Gt=V=>{var A=V.className,D=V.style,l=V.showSubtotal,x=l===void 0?!0:l,d=V.subtotalText,P=d===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:d,$=V.meta,G=$===void 0?[]:$,W=V.data,ee=W===void 0?[]:W,se=V.size,te=se===void 0?"middle":se,me=V.indicatorSide,Pe=me===void 0?"top":me,fe=V.leftDimensionLength,pe=fe===void 0?G.length:fe,he=V.leftExpandable,Ue=he===void 0?!1:he,ae=V.topExpandable,Oe=ae===void 0?!1:ae,Le=V.defaultExpandAll,vt=Le===void 0?!0:Le,ft=V.cellRender,Bt=Object(X.default)(V,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),St=Object(g.useState)([]),Re=Object(cn.default)(St,2),Ve=Re[0],ot=Re[1],mn=Object(g.useState)([]),Ot=Object(cn.default)(mn,2),$t=Ot[0],sn=Ot[1],Ln=S(G),xn=Ln.metaDim,Mn=Ln.metaInd,on=Mn.map(xe=>{var Ye=xe.id,Dt=xe.name,It=xe.isRate;return{name:Dt,code:Ye,align:"right",expression:It?"AVG(".concat(Ye,")"):"SUM(".concat(Ye,")")}}),Bn=xn.filter((xe,Ye)=>Ye<pe),Qt=Bn.map(xe=>{var Ye=xe.id;return Ye}),Sn=Object(Tt.b)(ee,Qt,{includeTopWrapper:!0,isExpand:Ue?xe=>$t.includes(xe):void 0}),zn=Object(Tt.d)(Sn,{indicators:Pe==="left"?on:void 0,supportsExpand:Ue,expandKeys:$t,onChangeExpandKeys:sn,generateSubtotalNode:x?xe=>({position:"start",value:xe.path.length===0?P[0]||"\u603B\u8BA1":P[1]||"\u5C0F\u8BA1"}):void 0}),la=Object(cn.default)(zn,1),Lt=la[0],Kn=xn.filter((xe,Ye)=>Ye>=pe),Dn=Kn.map(xe=>{var Ye=xe.id;return Ye}),ta=Object(Tt.b)(ee,Dn,{includeTopWrapper:!0,isExpand:Oe?xe=>Ve.includes(xe):void 0}),Vn=Object(Tt.d)(ta,{indicators:Pe==="top"?on:void 0,supportsExpand:Oe,expandKeys:Ve,onChangeExpandKeys:ot,generateSubtotalNode:x?xe=>({position:"start",value:xe.path.length===0?P[0]||"\u603B\u8BA1":P[1]||"\u5C0F\u8BA1"}):void 0}),Mt=Object(cn.default)(Vn,1),Cn=Mt[0],ua=Object(Tt.c)({data:ee,leftCodes:Qt,topCodes:Dn,aggregate:Object(xt.a)(on)});return Q.a.createElement("div",{style:D,className:"CR-PivotTable CR-PivotTable-".concat(te," ").concat(A||"")},Q.a.createElement(Tt.a,Object(ce.default)({defaultColumnWidth:100,leftMetaColumns:xn.filter(xe=>{var Ye=xe.id;return Qt.includes(Ye)}).map(xe=>{var Ye=xe.id,Dt=xe.name;return{code:Ye,name:Dt}}),leftTree:Lt.children,leftTotalNode:Lt,topTree:Cn.children,topTotalNode:Cn,getValue:(xe,Ye)=>{var Dt,It=(Dt=ua.get(xe.data.dataKey))===null||Dt===void 0?void 0:Dt.get(Ye.data.dataKey);return It==null?void 0:It[Ye.code]},render:(xe,Ye,Dt)=>{var It;if(ft){var Wn=Ye.data.dataPath,na=Wn===void 0?[]:Wn,Jn=Dt.data.dataPath,Yn=Jn===void 0?[]:Jn,Ut={};return na.forEach((vn,qt)=>{var Ct;Ut[(Ct=Bn[qt])===null||Ct===void 0?void 0:Ct.id]=vn}),Yn.forEach((vn,qt)=>{var Ct;Ut[(Ct=Kn[qt])===null||Ct===void 0?void 0:Ct.id]=vn}),ft(xe,Ut,Dt.code)}return(It=Mn.find(vn=>{var qt=vn.id;return qt===Dt.code}))!==null&&It!==void 0&&It.isRate?"".concat(B(xe*100).toFixed(2),"%"):xe}},Bt)))},Pn=Gt},"4l2o":function(Ge,Y,n){},"72KL":function(Ge,Y,n){},"8iYR":function(Ge,Y,n){"use strict";n.r(Y),n.d(Y,"basic",function(){return ce}),n.d(Y,"expression",function(){return X});var ce={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},X={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},ARb9:function(Ge,Y,n){},GYr9:function(Ge,Y,n){},JjdP:function(Ge,Y,n){"use strict";n.r(Y);var ce=n("9og8"),X=n("WmNS"),g=n.n(X),Q=n("LtsZ"),O=`import React, { useRef } from 'react';
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

export default Demo;`,S=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,B=`export const basic = {
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
};`,u=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Pt=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Qe=`import React, { Component } from 'react';
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

export default Root;`,U=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,z=`{
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
}`,Yt=`import { Select } from 'antd';
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

export default SearchInput;`,wn=`import React from 'react';
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

export default Demo;`,Nt=`/* PrismJS 1.16.0
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
}`,kt=`.markdown p {
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
}`,cn=`import React from 'react';
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

export default Demo;`,Tt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,xt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,jt=`import React from 'react';
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

export default Demo;`,Gt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Pn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,V=Y.default={"guide-card":{component:Object(Q.dynamic)({loader:function(){var A=Object(ce.a)(g.a.mark(function l(){return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([n.e(34),n.e(4)]).then(n.bind(null,"oLxE"));case 2:return d.abrupt("return",d.sent.default);case 3:case"end":return d.stop()}},l)}));function D(){return A.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:O}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var D=n("3PQu"),l=n("K+nK"),x=l(n("tJVT")),d=D(n("q1tI")),P=n("36SN"),$=function(){var W=(0,d.useState)("Line"),ee=(0,x.default)(W,2),se=ee[0],te=ee[1],me={Line:P.Line,Column:P.Column,PivotTable:P.PivotTable}[se];return d.default.createElement("div",null,d.default.createElement("div",{style:{marginBottom:10}},d.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return te("Line")}},"\u6298\u7EBF\u56FE"),d.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return te("Column")}},"\u67F1\u72B6\u56FE"),d.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return te("PivotTable")}},"\u4EA4\u53C9\u8868")),d.default.createElement(me,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return d.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=n("36SN"),d=function(){return l.default.createElement(x.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(G,W,ee){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(W).length]}},G),l.default.createElement("p",null,JSON.stringify(W)),l.default.createElement("p",null,JSON.stringify(ee)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return l.default.createElement(d)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var D=n("3PQu"),l=n("K+nK"),x=l(n("tJVT")),d=D(n("q1tI")),P=n("36SN"),$=function(){var W=(0,d.useState)(!1),ee=(0,x.default)(W,2),se=ee[0],te=ee[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",d.default.createElement("input",{type:"checkbox",value:se,onChange:function(){return te(!se)}})),d.default.createElement(P.PivotTable,{leftExpandable:se,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return d.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var D=n("3PQu"),l=n("K+nK");n("MaXC");var x=l(n("4IMT")),d=l(n("fWQN")),P=l(n("mtLc")),$=l(n("yKVA")),G=l(n("879j")),W=l(n("q1tI")),ee=n("gdfu"),se=D(n("refC")),te={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},me=function(fe){(0,$.default)(he,fe);var pe=(0,G.default)(he);function he(){return(0,d.default)(this,he),pe.apply(this,arguments)}return(0,P.default)(he,[{key:"render",value:function(){var ae=this.props.form;return W.default.createElement("div",null,W.default.createElement(se.default,{form:ae,schema:te}),W.default.createElement(x.default,{type:"primary",onClick:ae.submit},"\u63D0\u4EA4"))}}]),he}(W.default.Component),Pe=(0,se.connectForm)(me);return W.default.createElement(Pe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var D=n("3PQu"),l=n("K+nK");n("MaXC");var x=l(n("4IMT")),d=l(n("q1tI")),P=n("gdfu"),$=D(n("refC")),G={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},W=function(){var te=(0,$.useForm)();return d.default.createElement("div",null,d.default.createElement($.default,{form:te,schema:G}),d.default.createElement(x.default,{type:"primary",onClick:te.submit},"\u63D0\u4EA4"))},ee=W;return d.default.createElement(ee)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var D=n("3PQu"),l=n("K+nK");n("MaXC");var x=l(n("4IMT")),d=l(n("q1tI")),P=n("gdfu"),$=D(n("refC")),G={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},W=function(){var te=(0,$.useForm)(),me=function(fe,pe){pe.length>0?alert("errors:"+JSON.stringify(pe)):alert("formData:"+JSON.stringify(fe,null,2))};return d.default.createElement("div",null,d.default.createElement($.default,{form:te,schema:G,onFinish:me}),d.default.createElement(x.default,{type:"primary",onClick:te.submit},"\u63D0\u4EA4"))},ee=W;return d.default.createElement(ee)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var D=n("3PQu"),l=n("K+nK"),x=l(n("q1tI")),d=D(n("refC")),P={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function $(){var W=(0,d.useForm)(),ee=function(te,me){me.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(me))):alert(JSON.stringify(te))};return x.default.createElement("div",null,x.default.createElement(d.default,{form:W,schema:P,onFinish:ee}),x.default.createElement("button",{onClick:W.submit},"\u63D0\u4EA4"))}var G=$;return x.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("c2mQ")),d=n("8iYR"),P=function(){return l.default.createElement(x.default,{schema:d.basic})};return l.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:S},"json/schema.js":{import:"./json/schema",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d=function(G){return{type:"object",displayType:G,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(x.default,{schema:d("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(x.default,{schema:d("column")}))};return l.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},P=function(){return l.default.createElement(x.default,{schema:d})};return l.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return l.default.createElement(x.default,{readOnly:!0,schema:d})};return l.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return l.default.createElement(x.default,{labelWidth:"200",schema:d})};return l.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},P=function(){return l.default.createElement(x.default,{schema:d})},$=P;return l.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return l.default.createElement(x.default,{schema:d})},$=P;return l.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},P=function(){return l.default.createElement(x.default,{schema:d})},$=P;return l.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("bQjt")),d={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},P=function(){return l.default.createElement(x.default,{schema:d})},$=P;return l.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:u}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:function(){var D=n("3PQu"),l=n("K+nK");n("lfLe");var x=l(n("Cp9S"));n("MaXC");var d=l(n("4IMT"));n("tL+A");var P=l(n("QpBz")),$=l(n("tJVT")),G=D(n("q1tI")),W=n("gdfu"),ee=D(n("refC")),se=n("OH0R"),te=function(){var fe=(0,ee.useForm)(),pe=(0,G.useState)({}),he=(0,$.default)(pe,2),Ue=he[0],ae=he[1],Oe=function(){(0,se.fakeApi)("xxx/getForm").then(function(ft){fe.setValues({input1:"hello world",select1:"c"})})};(0,G.useEffect)(function(){(0,se.delay)(1e3).then(function(vt){ae({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Le=function(ft,Bt){Bt.length>0?P.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Bt.map(function(St){return St.name}))):(0,se.fakeApi)("xxx/submit",ft).then(function(St){return P.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return G.default.createElement("div",{style:{width:"400px"}},G.default.createElement(ee.default,{form:fe,schema:Ue,onFinish:Le}),G.default.createElement(x.default,null,G.default.createElement(d.default,{onClick:Oe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),G.default.createElement(d.default,{type:"primary",onClick:fe.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},me=te;return G.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var D=n("3PQu"),l=n("K+nK");n("MaXC");var x=l(n("4IMT")),d=l(n("PpiC"));n("tL+A");var P=l(n("QpBz")),$=l(n("q1tI")),G=n("gdfu"),W=D(n("refC")),ee=n("OH0R"),se={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},te=function(){var fe=(0,W.useForm)(),pe=function(ae,Oe){Oe.length>0?P.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Oe.map(function(Le){return Le.name}))):(0,ee.fakeApi)("xxx/submit",ae).then(function(Le){return P.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},he=function(ae){var Oe=ae.data,Le=ae.errors,vt=ae.schema,ft=(0,d.default)(ae,["data","errors","schema"]);return(0,ee.fakeApi)("xxx/validation").then(function(Bt){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return $.default.createElement("div",{style:{width:"400px"}},$.default.createElement(W.default,{form:fe,schema:se,beforeFinish:he,onFinish:pe}),$.default.createElement(x.default,{type:"primary",onClick:fe.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},me=te;return $.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var D=n("3PQu"),l=n("K+nK");n("lfLe");var x=l(n("Cp9S"));n("MaXC");var d=l(n("4IMT"));n("tL+A");var P=l(n("QpBz")),$=l(n("q1tI")),G=n("gdfu"),W=D(n("refC")),ee=n("OH0R"),se={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},te=function(){var fe=(0,W.useForm)(),pe=function(ae,Oe){Oe.length>0?P.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Oe.map(function(Le){return Le.name}))):(0,ee.fakeApi)("xxx/submit",ae).then(function(Le){return P.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},he=function(){(0,ee.fakeApi)("xxx/getForm").then(function(ae){fe.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return $.default.createElement("div",{style:{width:"400px"}},$.default.createElement(W.default,{form:fe,schema:se,onFinish:pe}),$.default.createElement(x.default,null,$.default.createElement(d.default,{onClick:he},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),$.default.createElement(d.default,{type:"primary",onClick:fe.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},me=te;return $.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var D=n("3PQu"),l=n("K+nK"),x=l(n("q1tI")),d=D(n("refC")),P={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},$=function(){var ee=(0,d.useForm)();return x.default.createElement(d.default,{form:ee,schema:P})},G=$;return x.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("c2mQ")),d=n("8iYR"),P=function(){return l.default.createElement(x.default,{schema:d.expression})};return l.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:S},"json/schema.js":{import:"./json/schema",content:B}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"watch-demo":{component:function(){var D=n("3PQu"),l=n("K+nK");n("MaXC");var x=l(n("4IMT")),d=l(n("q1tI")),P=n("gdfu"),$=D(n("refC")),G={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},W=function(){var te=(0,$.useForm)(),me=function(pe,he){he.length>0?alert("errorFields:"+JSON.stringify(he)):alert("formData:"+JSON.stringify(pe,null,2))},Pe={"#":function(pe){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",pe)},input1:function(pe){pe!==void 0&&te.onItemChange("input2",pe)}};return d.default.createElement("div",null,d.default.createElement($.default,{form:te,schema:G,onFinish:me,watch:Pe}),d.default.createElement(x.default,{type:"primary",onClick:te.submit},"\u63D0\u4EA4"))},ee=W;return d.default.createElement(ee)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"widget-demo":{component:function(){var D=n("3PQu"),l=n("K+nK");n("MaXC");var x=l(n("4IMT"));n("cUip");var d=l(n("iJl9")),P=l(n("0Owb")),$=D(n("q1tI")),G=n("gdfu"),W=D(n("refC")),ee={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},se=function(fe){return $.default.createElement(d.default,(0,P.default)({addonBefore:"http://",addonAfter:".com"},fe))},te=function(){var fe=(0,W.useForm)(),pe=function(){};return $.default.createElement("div",null,$.default.createElement(W.default,{form:fe,schema:ee,widgets:{site:se},onFinish:function(Ue){return alert(JSON.stringify(Ue,null,2))}}),$.default.createElement(x.default,{type:"primary",onClick:fe.submit},"\u63D0\u4EA4"))},me=te;return $.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.2.0-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"docs-playground":{component:Object(Q.dynamic)({loader:function(){var A=Object(ce.a)(g.a.mark(function l(){return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([n.e(34),n.e(4)]).then(n.bind(null,"BASV"));case 2:return d.abrupt("return",d.sent.default);case 3:case"end":return d.stop()}},l)}));function D(){return A.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Qe},"main.js":{import:"./main",content:U},"json/simplest.json":{import:"./json/simplest.json",content:z},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Yt},"monaco/index.js":{import:"./monaco",content:wn},"theme.css":{import:"./theme.css",content:Nt},"index.css":{import:"./index.css",content:kt}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.2.0-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(Q.dynamic)({loader:function(){var A=Object(ce.a)(g.a.mark(function l(){return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([n.e(34),n.e(4)]).then(n.bind(null,"7ZP+"));case 2:return d.abrupt("return",d.sent.default);case 3:case"end":return d.stop()}},l)}));function D(){return A.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:cn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var D=n("K+nK"),l=D(n("q1tI")),x=n("P2DI"),d=[],P=0;P<6;P++)d.push({id:P.toString(),title:"\u6807\u9898".concat(P+1),created_at:new Date().getTime()});var $={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},G=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(te,me){return l.default.createElement("a",{onClick:function(){return alert(te.title)}},"\u7F16\u8F91")}}],W=function(){var te=function(){return{rows:d,total:d.length}};return l.default.createElement(x.TableProvider,null,l.default.createElement(x.Search,{schema:$,api:te}),l.default.createElement(x.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:G,rowKey:"id"}))},ee=W;return l.default.createElement(ee)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var D=n("K+nK"),l=D(n("q1tI")),x=D(n("nYSz")),d={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},P=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(x.default,{defaultValue:d}))},$=P;return l.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(Q.dynamic)({loader:function(){var A=Object(ce.a)(g.a.mark(function l(){return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([n.e(34),n.e(4)]).then(n.bind(null,"PPgD"));case 2:return d.abrupt("return",d.sent.default);case 3:case"end":return d.stop()}},l)}));function D(){return A.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Tt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(Q.dynamic)({loader:function(){var A=Object(ce.a)(g.a.mark(function l(){return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([n.e(34),n.e(4)]).then(n.bind(null,"jktF"));case 2:return d.abrupt("return",d.sent.default);case 3:case"end":return d.stop()}},l)}));function D(){return A.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:xt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(Q.dynamic)({loader:function(){var A=Object(ce.a)(g.a.mark(function l(){return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([n.e(34),n.e(4)]).then(n.bind(null,"M63W"));case 2:return d.abrupt("return",d.sent.default);case 3:case"end":return d.stop()}},l)}));function D(){return A.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:jt}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(Q.dynamic)({loader:function(){var A=Object(ce.a)(g.a.mark(function l(){return g.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([n.e(34),n.e(4)]).then(n.bind(null,"TYW4"));case 2:return d.abrupt("return",d.sent.default);case 3:case"end":return d.stop()}},l)}));function D(){return A.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Gt},"index.less":{import:"./index.less",content:Pn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.6"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},OH0R:function(Ge,Y,n){"use strict";n.r(Y),n.d(Y,"delay",function(){return ce}),n.d(Y,"fakeApi",function(){return X});var ce=g=>new Promise(Q=>setTimeout(Q,g)),X=(g,Q)=>(console.group("request:",g),console.log("params:",Q),console.groupEnd(),ce(500))},OVFa:function(Ge,Y,n){},Oxum:function(Ge,Y,n){},P2DI:function(Ge,Y,n){"use strict";n.r(Y),n.d(Y,"Search",function(){return A}),n.d(Y,"Table",function(){return Yn}),n.d(Y,"TableProvider",function(){return ca}),n.d(Y,"useTable",function(){return Nt});var ce=n("Saan"),X=n("vgIT"),g=n.n(X),Q=n("0Owb"),O=n("k1fw"),S=n("tL+A"),B=n("QpBz"),u=n.n(B),Pt=n("PpiC"),Qe=n("tJVT"),U=n("q1tI"),z=n.n(U),Yt=Object(U.createContext)({}),wn=Object(U.createContext)({}),Nt=()=>Object(U.useContext)(Yt),kt=()=>Object(U.useContext)(wn),cn=C=>{var H=Object(U.useReducer)((Ie,Me)=>{var Xe=Me;typeof Me=="function"&&(Xe=Xe(Ie)),Me.action&&Me.payload&&(Xe=Me.payload,typeof Xe=="function"&&(Xe=Xe(Ie)));var pt=Object(O.a)(Object(O.a)({},Ie),Xe);return pt},C),_=Object(Qe.default)(H,2),ge=_[0],Se=_[1],ve=(Ie,Me)=>{Se(Ie)};return[ge,ve]},Tt=n("MaXC"),xt=n("4IMT"),jt=n.n(xt),Gt=n("refC"),Pn=C=>{var H=C.clearSearch,_=C.style,ge=_===void 0?{}:_,Se=C.className,ve=Se===void 0?"":Se,Ie=Nt(),Me=Ie.tableState,Xe=Me===void 0?{}:Me,pt=Ie.refresh,zt=Xe.loading;return z.a.createElement("div",{className:"flex justify-end w-100 ".concat(ve),style:ge},z.a.createElement(jt.a,{loading:zt,className:"mr",type:"primary",onClick:()=>pt()},"\u67E5\u8BE2"),z.a.createElement(jt.a,{onClick:H},"\u91CD\u7F6E"))},V=C=>{var H=Object(U.useState)({}),_=Object(Qe.default)(H,2),ge=_[0],Se=_[1],ve=Nt(),Ie=ve.tableState,Me=ve.setTable,Xe=ve.refresh,pt=ve.syncMethods,zt=Ie.search,lt=C.schema||C.propsSchema,$n=!0;!C.searchOnMount&&C.searchOnMount!==void 0&&($n=!1);var ln=Object(U.useRef)(),Ht=at=>{Me({search:at})},_t=at=>{try{var ut=100,Kt=Object.values(at.properties).filter(ke=>ke.hidden?ke.hidden!==!0:ke["ui:hidden"]!==!0).map(ke=>ke.width?ke.width:ke["ui:width"]),pn=Kt.lastIndexOf(void 0),un=Kt.slice(pn+1).map(ke=>Number(ke.substring(0,ke.length-1))),en=un.reduce((ke,dt)=>{var ze=ke+dt;return ze>100?Math.min(100,dt):ze},0);return ut=100-en,ut<10&&(ut=100),ut+"%"}catch(ke){return console.error(ke),"100%"}},fn=()=>{var at=JSON.stringify(ln.current)===JSON.stringify(lt);if(lt&&lt.properties){if(ge&&at)return;try{var ut=JSON.parse(JSON.stringify(lt));ut.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:_t(lt)},Se(ut)}catch(Kt){console.error(Kt)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},Rn=at=>{if(at.length){Me({checkPassed:!1});return}Me({checkPassed:!0})},Ze=Object(Gt.useForm)({formData:zt,onChange:Ht,onValidate:Rn}),Rt=()=>{Ze.setValues({})};if(Object(U.useEffect)(()=>{C.hidden||fn()},[lt]),Object(U.useEffect)(()=>{pt({searchApi:C.api,syncOnSearch:C.onSearch,syncAfterSearch:C.afterSearch}),(C.hidden||$n)&&Xe()},[]),C.hidden)return null;var gt=typeof C.searchBtnRender=="function"?C.searchBtnRender(Xe,Rt):[];return z.a.createElement("div",{className:"tr-search ".concat(C.className),style:C.style,onKeyDown:at=>{at.keyCode===13&&Xe()}},z.a.createElement(Gt.default,Object(Q.default)({form:Ze},C,{schema:ge,displayType:"row",widgets:Object(O.a)({searchBtn:()=>C.searchBtnRender?z.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(gt)&&gt.map((at,ut)=>z.a.createElement("div",{key:ut.toString(),style:{marginLeft:8}},at))):z.a.createElement(Pn,{clearSearch:Rt,style:C.searchBtnStyle||{},className:C.searchBtnClassName||""})},C.widgets)})))},A=V,D=n("7kJ1"),l=n("qPIi"),x=n.n(l),d=n("zmYW"),P=n("DtFj"),$=n.n(P),G=n("lfLe"),W=n("Cp9S"),ee=n.n(W),se=n("Wgwc"),te=n.n(se);function me(C,H){return C.indexOf(H)>-1}var Pe=C=>me(Object.prototype.toString.call(C),"Object"),fe=C=>typeof C!="string"?!1:C.indexOf("$api.")===0||C.indexOf("$func.")===0,pe=C=>C.indexOf("$api.")===0?C.substring(5):C.indexOf("$func.")===0?C.substring(6):"",he=(C,H)=>{if(typeof C!="object"||C===null){if(fe(C)){var _=pe(C);return H&&H[_]&&typeof H[_]=="function"?H[_]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return C}if(Array.isArray(C)){var ge=[...C];return ge.map(Ie=>he(Ie,H))}var Se=Object(O.a)({},C),ve=Object.keys(Se);return ve.forEach(Ie=>{Se[Ie]=he(Se[Ie],H)}),Se},Ue=C=>te()(C).format("YYYY-MM-DD HH:mm"),ae=C=>te()(C).format("YYYY-MM-DD"),Oe=C=>"\xA5".concat(C).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Le=(C,H,_)=>{var ge=C;return typeof ge=="function"?ge=ge(H):_&&typeof _=="function"&&_(),ge},vt=n("NcKm"),ft=n("lbd2"),Bt=n.n(ft),St=n("93XW"),Re=n("d1El"),Ve=n.n(Re),ot=(C,H,_)=>_.ellipsis?z.a.createElement(Ve.a,{title:Ot(H,_)},C):z.a.createElement("span",null,C),mn=(C,H)=>H.copyable||H.ellipsis?z.a.createElement(Bt.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:H.copyable&&C?{text:C,onCopy:()=>u.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:H.ellipsis||!1},Ot(C,H)):Ot(C,H),Ot=(C,H)=>{var _=H.enum||void 0;return _&&_[C]?_[C]:C},$t=C=>C?z.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},z.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},C)):null,sn=(C,H)=>{if(H.valueType==="code")return $t(C);var _=mn(C,H),ge=ot(_,C,H);return ge},Ln=n("WbIG"),xn=n("hw8t"),Mn=n.n(xn);class on extends z.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(H){return{hasError:!0,errorInfo:H.message}}componentDidCatch(H,_){console.log(H,_)}render(){return this.state.hasError?z.a.createElement(Mn.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var Bn=on,Qt=n("IehP"),Sn=n("3R4v"),zn=C=>{var H=Object(U.useState)(!1),_=Object(Qe.default)(H,2),ge=_[0],Se=_[1],ve=C.fullScreen;return ge?z.a.createElement(Ve.a,{title:"\u9000\u51FA\u5168\u5C4F"},z.a.createElement(Qt.a,{onClick:()=>{document.exitFullscreen(),Se(!1)}})):z.a.createElement(Ve.a,{title:"\u5168\u5C4F"},z.a.createElement(Sn.a,{onClick:()=>{if(!document.fullscreenEnabled){u.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(Se(!0),ve().catch(Ie=>u.a.error(Ie.message)))}}))},la=zn,Lt=n("G851"),Kn=n("ZvzK"),Dn=n.n(Kn),ta=n("PFYH"),Vn=n("Jv8k"),Mt=n.n(Vn),Cn=n("9hi+"),ua=()=>{var C=Nt(),H=C.tableState,_=C.setTable;return z.a.createElement(Dn.a,{overlay:z.a.createElement(Mt.a,{selectedKeys:[H.tableSize],onClick:ge=>{var Se=ge.key;_({tableSize:Se})},style:{width:80}},z.a.createElement(Mt.a.Item,{key:"default"},"\u9ED8\u8BA4"),z.a.createElement(Mt.a.Item,{key:"middle"},"\u4E2D\u7B49"),z.a.createElement(Mt.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},z.a.createElement(Ve.a,{title:"\u8868\u683C\u5BC6\u5EA6"},z.a.createElement(Cn.a,null)))},xe=ua,Ye=n("rLCj"),Dt=()=>{var C=Nt(),H=C.refresh;return z.a.createElement(Ve.a,{title:"\u5237\u65B0"},z.a.createElement(Ye.a,{onClick:()=>H()}))},It=Dt,Wn=C=>z.a.createElement(ee.a,{size:14,style:{fontSize:16,cursor:"pointer"}},z.a.createElement(It,null),z.a.createElement(xe,null),z.a.createElement(la,C)),na=Wn,Jn=C=>{var H,_,ge;C.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var Se=Nt(),ve=Se.tableState,Ie=Se.setTable,Me=Se.doSearch,Xe=ve.dataSource,pt=ve.pagination,zt=ve.loading,lt=ve.api,$n=ve.tableSize,ln=Object(U.useRef)(null),Ht=(dt,ze)=>{Ie({pagination:Object(O.a)(Object(O.a)({},pt),{},{current:dt,pageSize:ze})}),!(!C.pageChangeWithRequest&&C.pageChangeWithRequest!==void 0)&&Me({current:dt,pageSize:ze})},_t=C.headerTitle,fn=C.toolbarRender,Rn=C.columns,Ze=C.style,Rt=Ze===void 0?{}:Ze,gt=C.className,at=gt===void 0?"":gt,ut=C.toolbarAction,Kt=ut===void 0?!1:ut;Rn.map(dt=>{var ze=dt;if(ze.render)return ze;switch(ze.valueType){case"date":ze.render=yt=>sn(ae(yt),ze);break;case"dateTime":ze.render=yt=>sn(Ue(yt),ze);break;case"money":ze.render=yt=>sn(Oe(yt),ze);break;case"code":ze.render=yt=>sn(yt,ze);break;case"text":default:ze.render=yt=>sn(yt,ze)}return ze});var pn=Object(O.a)(Object(O.a)({},C),{},{dataSource:Xe,pagination:C.pagination===!1?!1:Object(O.a)(Object(O.a)({onChange:Ht,size:"small"},C.pagination),{},{pageSize:((H=C.pagination)===null||H===void 0?void 0:H.pageSize)||pt.pageSize,total:((_=C.pagination)===null||_===void 0?void 0:_.total)||pt.total,current:((ge=C.pagination)===null||ge===void 0?void 0:ge.current)||pt.current}),loading:zt,size:$n}),un=typeof fn=="function"?fn():[],en=_t||un&&un.length||Array.isArray(lt),ke=()=>{var dt;return Promise.resolve((dt=ln.current)===null||dt===void 0?void 0:dt.requestFullscreen())};return Object(U.useEffect)(()=>{C.size&&Ie({tableSize:C.size})},[]),z.a.createElement(Bn,null,z.a.createElement("div",{className:"tr-table-wrapper ".concat(at),style:Rt,ref:ln},z.a.createElement("div",{className:en?"tr-table-top":"tr-table-top-nohead"},z.a.createElement("div",{className:"tr-table-title"},z.a.createElement(Ut,{title:_t})),z.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},z.a.createElement(ee.a,{align:"center"},z.a.createElement(ee.a,{size:8,style:{marginRight:8}},Array.isArray(un)&&un.map((dt,ze)=>z.a.createElement("div",{key:ze.toString()},dt))),Kt&&z.a.createElement(na,{fullScreen:ke})))),z.a.createElement($.a,pn)))},Yn=Jn,Ut=C=>{var H=C.title,_=Nt(),ge=_.tableState,Se=_.setTable,ve=_.doSearch,Ie=ge.tab,Me=ge.api,Xe=Ie||0,pt=zt=>{var lt=zt.target.value;Se({tab:lt}),ve({tab:lt})};return typeof Me=="function"?z.a.createElement("div",{className:"tr-single-tab"},H):Me&&Array.isArray(Me)?Me.length===1?z.a.createElement("div",{className:"tr-single-tab"},Me[0].name):z.a.createElement(z.a.Fragment,null,z.a.createElement(x.a.Group,{onChange:pt,value:Xe},Me.map((zt,lt)=>z.a.createElement(x.a.Button,{key:lt.toString(),value:lt},zt.name))),H&&z.a.createElement("div",{className:"tr-extra-tab"},H)):z.a.createElement("div",{className:"tr-single-tab"})},vn=n("yDJ3"),qt=n.n(vn),Ct=n("SA0R"),Gn=n.n(Ct),pa=n("k/c8"),ha=n("GYr9"),da=C=>{var H=cn({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:10,total:1},tableSize:"default",checkPassed:!0}),_=Object(Qe.default)(H,2),ge=_[0],Se=_[1],ve=Object(U.useRef)(),Ie=Object(U.useRef)(),Me=Object(U.useRef)(),Xe=ge.pagination,pt=ge.search,zt=ge.tab,lt=ge.checkPassed,$n=Nt(),ln=(Ze,Rt)=>{if(delete pt.searchBtn,Ie.current&&Ie.current(pt),!lt)return;var gt=Ze||{},at=gt.current,ut=gt.pageSize,Kt=gt.tab,pn=Object(Pt.default)(gt,["current","pageSize","tab"]),un=at||1,en=ut||10,ke=zt;["string","number"].indexOf(typeof Kt)>-1&&(ke=Kt);var dt={current:un,pageSize:en};if(typeof ve.current=="function")yt(ve.current);else if(Array.isArray(ve.current)){var ze=qt()(ve.current,"[".concat(ke,"].api"));typeof ze=="function"?yt(ze):u.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else u.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function yt(aa){Se({loading:!0});var Qn=Object(O.a)(Object(O.a)(Object(O.a)(Object(O.a)({},pt),Rt),pn),dt);Array.isArray(aa)&&(Qn=Object(O.a)(Object(O.a)({},Qn),{},{tab:Kt})),Promise.resolve(aa(Qn)).then(Fn=>{var Un=Fn.rows,ma=Fn.total,Hn=Fn.pageSize,ra=Object(Pt.default)(Fn,["rows","total","pageSize"]);Se(Object(O.a)(Object(O.a)({loading:!1,dataSource:Un},ra),{},{pagination:Object(O.a)(Object(O.a)({},dt),{},{total:ma,pageSize:Hn||en})})),Me.current(Object(O.a)({rows:Un,total:ma,pageSize:Hn},ra))}).catch(Fn=>{Se({loading:!1})})}},Ht=(Ze,Rt)=>{var gt=Ze&&Ze.stay||!1,at=Ze&&Ze.tab,ut=Rt||{};ln(Object(O.a)(Object(O.a)({},Ze),{},{current:gt?Xe.current:1,tab:at,pageSize:Xe.pageSize}),ut)},_t=Ze=>{["string","number"].indexOf(typeof Ze)>-1?(Se({tab:Ze}),Ht({tab:Ze})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},fn=Ze=>{var Rt=Ze.searchApi,gt=Ze.syncOnSearch,at=Ze.syncAfterSearch;ve.current=Rt,Ie.current=gt,Me.current=at,Se({api:Rt})},Rn={tableState:ge,setTable:Se,doSearch:ln,refresh:Ht,changeTab:_t,syncMethods:fn};return Rn},ga=(C,H)=>{var _=da(C);return Object(U.useImperativeHandle)(H,()=>_),z.a.createElement(g.a,{locale:Gn.a},z.a.createElement(Yt.Provider,Object(Q.default)({},C,{value:_})))},ca=Object(U.forwardRef)(ga)},RnhZ:function(Ge,Y,n){var ce={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function X(Q){var O=g(Q);return n(O)}function g(Q){if(!n.o(ce,Q)){var O=new Error("Cannot find module '"+Q+"'");throw O.code="MODULE_NOT_FOUND",O}return ce[Q]}X.keys=function(){return Object.keys(ce)},X.resolve=g,Ge.exports=X,X.id="RnhZ"},SiV7:function(Ge,Y,n){},Zs1V:function(Ge){Ge.exports=JSON.parse("{}")},bQjt:function(Ge,Y,n){"use strict";n.r(Y);var ce=n("0Owb"),X=n("q1tI"),g=n.n(X),Q=n("refC"),O=S=>{var B=Object(Q.useForm)();return g.a.createElement(Q.default,Object(ce.default)({form:B},S))};Y.default=O},c2mQ:function(Ge,Y,n){"use strict";n.r(Y);var ce=n("q1tI"),X=n.n(ce),g=n("refC"),Q=O=>{var S=O.schema,B=Object(g.useForm)();return X.a.createElement("div",null,X.a.createElement(g.default,{form:B,schema:S}))};Y.default=Q},cFvS:function(Ge,Y,n){},fK6R:function(Ge,Y,n){},gO06:function(Ge,Y,n){},iU8R:function(Ge,Y,n){},nYSz:function(Ge,Y,n){"use strict";n.r(Y),n.d(Y,"defaultSettings",function(){return pe}),n.d(Y,"defaultCommonSettings",function(){return se}),n.d(Y,"defaultGlobalSettings",function(){return he}),n.d(Y,"fromFormily",function(){return An}),n.d(Y,"toFormily",function(){return Da}),n.d(Y,"fromFormRender",function(){return xa}),n.d(Y,"toFormRender",function(){return ya});var ce=n("0Owb"),X=n("q1tI"),g=n.n(X),Q=n("kvAW"),O=n("qJlv"),S=n("k1fw"),B=n("tJVT"),u=Object(X.createContext)(()=>{}),Pt=Object(X.createContext)({}),Qe=()=>Object(X.useContext)(u),U=()=>Object(X.useContext)(Pt),z=a=>{var s=Object(X.useReducer)((y,T)=>{var I=T;typeof T=="function"&&(I=I(y)),T.action&&T.payload&&(I=T.payload,typeof I=="function"&&(I=I(y)));var M=Object(S.a)(Object(S.a)({},y),I);return M},a),c=Object(B.default)(s,2),b=c[0],j=c[1],R=(y,T)=>{j(y)};return[b,R]};function Yt(a,s,c){var b=Object(X.useRef)();Object(X.useEffect)(()=>{b.current=a},[a]);var j=Object(X.useRef)();return Object(X.useEffect)(()=>{if(!c)return;function R(){b&&b.current&&b.current()}if(R(),s!==null)return j.current=setInterval(R,s),()=>clearInterval(j.current)},[s,c]),()=>clearInterval(j.current)}function wn(a){var s=Object(X.useRef)();return Object(X.useEffect)(()=>{s.current=a},[a]),s.current}var Nt=a=>{var s=Object(X.useState)(!1),c=Object(B.default)(s,2),b=c[0],j=c[1],R;try{R=localStorage.getItem(a)}catch(y){}return R||(j(!0),localStorage.setItem(a,JSON.stringify(!0))),b},kt=()=>{var a=Object(X.useState)(!1),s=Object(B.default)(a,2),c=s[0],b=s[1],j=()=>b(!c);return[c,j]},cn=a=>{var s=Object(X.useState)(a),c=Object(B.default)(s,2),b=c[0],j=c[1];return[b,j]},Tt=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",b=()=>{var M=localStorage.getItem(c);if(M)try{return JSON.parse(M)}catch(L){return s}return s},j=Object(X.useState)(b()),R=Object(B.default)(j,2),y=R[0],T=R[1],I=M=>{T(M),localStorage.setItem(c,JSON.stringify(M))};return[y,I]},xt=n("fwXI"),jt=n("CC+v"),Gt=n.n(jt),Pn=n("MaXC"),V=n("4IMT"),A=n.n(V),D=n("tL+A"),l=n("QpBz"),x=n.n(l),d=n("PpiC"),P=n("cUip"),$=n("iJl9"),G=n.n($),W=n("WWur"),ee=n.n(W),se={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string",widget:"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},format:{title:"\u683C\u5F0F",type:"string",enum:["image","textarea","color","email","url","dateTime","date","time","upload"]},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},required:{title:"\u5FC5\u586B",type:"boolean"},placeholder:{title:"\u5360\u4F4D\u7B26",type:"string"},bind:{title:"Bind",type:"string"},min:{title:"\u6700\u5C0F\u503C",type:"number"},max:{title:"\u6700\u5927\u503C",type:"number"},disabled:{title:"\u7981\u7528",type:"boolean"},readOnly:{title:"\u53EA\u8BFB",type:"boolean"},hidden:{title:"\u9690\u85CF",type:"boolean"},width:{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string",widget:"percentSlider"},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number",widget:"slider",max:400,props:{hideNumber:!0}}},te=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean",widget:"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],widget:"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}}],me=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime",props:{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number",widget:"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],Pe=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},props:{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],fe=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date",props:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],pe=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:te,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:me},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:Pe},{title:"\u6A21\u677F",widgets:fe}],he={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"number",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],props:{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number",widget:"slider",max:300,props:{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],widget:"radio"}}},Ue=n("gO06"),ae=n("4b23"),Oe=n("JBAE"),Le=n.n(Oe);function vt(a,s){return a.indexOf(s)>-1}var ft=a=>vt(Object.prototype.toString.call(a),"Object");function Bt(a){try{return JSON.parse(JSON.stringify(a))}catch(s){return a}}function St(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function Re(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function Ve(a,s){if(a===void 0&&s===void 0)return!0;if(a===void 0||s===void 0)return!1;if(a===null&&s===null)return!0;if(a===null||s===null)return!1;if(a.constructor!==s.constructor)return!1;if(a.constructor===Array){if(a.length!==s.length)return!1;for(var c=0;c<a.length;c++)if(a[c].constructor===Array||a[c].constructor===Object){if(!Ve(a[c],s[c]))return!1}else if(a[c]!==s[c])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(s).length)return!1;for(var b=0;b<Object.keys(a).length;b++){var j=Object.keys(a)[b];if(a[j]&&typeof a[j]!="number"&&(a[j].constructor===Array||a[j].constructor===Object)){if(!Ve(a[j],s[j]))return!1}else if(a[j]!==s[j])return!1}}else if(a.constructor===String||a.constructor===Number)return a===s;return!0}function ot(a){var s;switch(a){case"date":s="YYYY-MM-DD";break;case"time":s="HH:mm:ss";break;default:s="YYYY-MM-DD HH:mm:ss"}return s}function mn(a){return a.find((s,c,b)=>c!==b.findIndex(j=>JSON.stringify(s)===JSON.stringify(j)))}function Ot(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=sn(a),b=c.map(y=>{var T=y.name,I=y.schema,M=I.type,L=I.enum,de=I.properties,K=I.items,Ee=M==="object"&&de,ye=M==="array"&&K&&!L,ie=T&&s[y.name];if(!ie)return y;if(ye){var be=Ot(K,ie.items||{});return Object(S.a)(Object(S.a)({},y),{},{schema:Object(S.a)(Object(S.a)(Object(S.a)({},y.schema),ie),{},{items:be})})}if(Ee){var De=Ot(y.schema,ie);return Object(S.a)(Object(S.a)({},y),{},{schema:De})}return Object(S.a)(Object(S.a)({},y),{},{schema:Object(S.a)(Object(S.a)({},y.schema),ie)})}),j={};b.forEach(y=>{j[y.name]=y.schema});var R={};return Object.keys(s).forEach(y=>{typeof y=="string"&&y.substring(0,3)==="ui:"&&(R[y]=s[y])}),$t(j)?Object(S.a)(Object(S.a)({},a),R):Object(S.a)(Object(S.a)(Object(S.a)({},a),R),{},{properties:j})}function $t(a){return Object.keys(a).length===0}function sn(a){if(!a)return[];var s=a.properties,c=a.items,b=a.type;if(!s&&!c)return[];var j={};return b==="object"&&(j=s),b==="array"&&(j=c),Object.keys(j).map(R=>({schema:j[R],name:R}))}function Ln(){}var xn=a=>Function('"use strict";return ('+a+")")(),Mn=(a,s,c)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(c),`;
    const formData = `).concat(JSON.stringify(s),`;
    return (`).concat(a,")"))();function on(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function Bn(a){return Object.keys(a).some(s=>typeof a[s]=="function"?!0:typeof a[s]=="string"?on(a[s]):typeof a[s]=="object"?Bn(a[s]):!1)}function Qt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",c=arguments.length>2?arguments[2]:void 0,b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},j=Le()(a);j.$id||(j.$id=s);var R=[],y=j.type==="object"&&j.properties,T=j.type==="array"&&j.items&&j.items.properties;return y&&(Object.entries(j.properties).forEach(I=>{var M=Object(B.default)(I,2),L=M[0],de=M[1],K=s+"/"+L;R.push(K),Qt(de,K,s,b)}),delete j.properties),T&&(Object.entries(j.items.properties).forEach(I=>{var M=Object(B.default)(I,2),L=M[0],de=M[1],K=s+"/"+L;R.push(K),Qt(de,K,s,b)}),delete j.items.properties),j.type&&(b[s]={parent:c,schema:j,children:R}),b}var Sn=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",c=s.split("/");return c[c.length-1]},zn=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",b=s.split("/");return(typeof c=="string"||typeof c=="number")&&(b[b.length-1]=c),b.join("/")},la=a=>({parent:a.parent,schema:Object(S.a)({},a.schema),data:a.data,children:a.children});function Lt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,b={},j=a[s],R=Le()(j);return R&&(b=Object(S.a)({},R.schema),c&&b.$id&&delete b.$id,R.children.length>0&&R.children.forEach(y=>{var T=y;if(!!a[y]){try{c&&(T=a[y].schema.$id)}catch(M){console.log("catch",M)}var I=Sn(T);b.type==="object"&&(b.properties||(b.properties={}),b.properties[I]=Lt(a,y,c)),b.type==="array"&&b.items&&b.items.type==="object"&&(b.items.properties||(b.items.properties={}),b.items.properties[I]=Lt(a,y,c))}})),b}var Kn=(a,s)=>{var c=Qt(s);return a in c&&delete c[a],Lt(c)},Dn=(a,s)=>{var c=Object(S.a)({},a);try{var b=a[s],j=s+Object(ae.a)(6),R=c[b.parent].children,y=R.findIndex(T=>T===s);return R.splice(y+1,0,j),c[j]=Le()(c[s]),c[j].schema.$id=j,[c,j]}catch(T){return console.error(T,"catcherror"),[a,s]}},ta=a=>{var s=a.id,c=a.key,b=a.schema,j=a.subSchema,R=Qt(b),y=zn(s,c)+"$$"+Object(ae.a)(10);if(s in R){var T=R[s].parent;if(T&&T in R){var I=R[T].children;try{var M=I.findIndex(L=>L===s);I.splice(M+1,0,y)}catch(L){console.error(L.message)}}try{R[y]={parent:R[s].parent,schema:j,children:[]},R[y].schema.$id=y}catch(L){console.error(L.message)}}return[Lt(R),y]},Vn=a=>{var s=a.selected,c=a.name,b=a.schema,j=a.flatten,R=s||"#",y;if(R&&R[0]==="0"||R==="#"){var T=Object(S.a)({},j);try{var I=R.substring(1);y=I+"/"+c+"_"+Object(ae.a)(6),R==="#"&&(y="#/"+c+"_"+Object(ae.a)(6),I="#");var M=T[I].children;M.push(y);var L={parent:I,schema:Object(S.a)(Object(S.a)({},b),{},{$id:y}),data:void 0,children:[]};T[y]=L}catch(oe){console.error(oe,"catch")}return{newId:y,newFlatten:T}}var de=c+"_"+Object(ae.a)(6),K=s.split("/");K.pop(),K.push(de),y=K.join("/");var Ee=Object(S.a)({},j);try{var ye=Ee[s],ie=Ee[ye.parent].children,be=ie.findIndex(oe=>oe===s);ie.splice(be+1,0,y);var De={parent:ye.parent,schema:Object(S.a)(Object(S.a)({},b),{},{$id:y}),data:void 0,children:[]};Ee[y]=De}catch(oe){console.error(oe)}return{newId:y,newFlatten:Ee}},Mt=a=>{var s=a.dragId,c=a.dragItem,b=a.dropId,j=a.position,R=a.flatten,y=b==="#"?"inside":j,T=Object(S.a)({},R);c&&(T[s]=c);var I=c||T[s],M=T[b],L=M;if(y!=="inside"){var de=M.parent;L=T[de]}if(b.indexOf(s)>-1)return[T,s];var K=s;try{var Ee=L.schema.$id;K=K.replace(I.parent,Ee)}catch(oe){}try{var ye=T[I.parent],ie=ye.children.indexOf(s);ie>-1&&ye.children.splice(ie,1)}catch(oe){console.error(oe)}try{var be=L.children||[],De=be.indexOf(b);switch(y){case"up":be.splice(De,0,s);break;case"down":be.splice(De+1,0,s);break;default:be.push(s);break}L.children=be}catch(oe){console.error(oe)}return I.parent=L.$id,[T,K]},Cn=(a,s)=>!a||!s?{}:(Object.entries(a).forEach(c=>{var b=Object(B.default)(c,2),j=b[0],R=b[1],y=Wn(s,j);a[j].data=y}),a),ua=a=>(s,c)=>{},xe=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var b=s[c].data,j=Object.keys(s),R=j.filter(y=>{var T=c.split("/").length,I=y.split("/").length;return y.indexOf(c)>-1&&I>T});return R&&R.length>0&&(b===void 0&&["object","array"].indexOf(s[c].schema.type)>-1&&(b={}),R.forEach(y=>{var T=c.split("/").length,I=y.split("/").length;if(I===T+1){var M=a(s,y),L=Sn(y);b[L]=M}})),b}catch(y){return}},Ye=(a,s,c)=>{try{var b=c[s];if(b.schema[a]!==void 0)return b.schema[a];if(b&&b.parent){var j=c[b.parent].schema;return j[a]!==void 0?j[a]:Ye(a,b.parent,c)}}catch(R){return}};function Dt(a){return Function('"use strict";return ('+a+")")()}function It(a){if(!a)return[];var s=a.properties,c=a.items,b=a.type;if(!s&&!c)return[];var j={};return b==="object"&&(j=s),b==="array"&&(j=c.properties),Object.keys(j).map(R=>({schema:j[R],name:R}))}function Wn(a,s){s=na(s,a);for(var c=0,b=s.length;a!=null&&c<b;){var j=Jn(s[c++]);a=j?a[j]:a}return c&&c==b?a:void 0}function na(a,s){return Array.isArray(a)?a:vn(a,s)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function Jn(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var s="".concat(a);return s=="0"&&1/a==-INFINITY?"-0":s}var Yn=/#\/.+\//,Ut=/^\w*$/;function vn(a,s){if(Array.isArray(a))return!1;var c=typeof a;return c==="number"||c==="boolean"||a==null?!0:Ut.test(a)||!Yn.test(a)||s!=null&&a in Object(s)}var qt=a=>{if(a&&a.propsSchema){var s=a.propsSchema,c=Object(d.default)(a,["propsSchema"]);return Object(S.a)({schema:s},c)}return a},Ct=a=>{if(a&&a.schema){var s=a.schema,c=Object(d.default)(a,["schema"]);return Object(S.a)({propsSchema:s},c)}return a},Gn=n("CLjb"),pa=n("fK6R"),ha=a=>{var s=a.text,c=a.name,b=a.schema,j=a.icon,R=Object(Gn.a)({item:{type:"box",dragItem:{parent:"#",schema:b,children:[]},$id:"#/".concat(c,"_").concat(Object(ae.a)(6))},end:(ie,be)=>{var De=be.getDropResult()},collect:ie=>({isDragging:ie.isDragging()})}),y=Object(B.default)(R,2),T=y[0].isDragging,I=y[1],M=Qe(),L=U(),de=L.selected,K=L.flatten,Ee=L.onFlattenChange,ye=()=>{var ie=Vn({selected:de,name:c,schema:b,flatten:K}),be=ie.newId,De=ie.newFlatten;Ee(De),M({selected:be})};return g.a.createElement("div",{ref:I},g.a.createElement(ga,{text:s,icon:j,onClick:ye}))},da=ha,ga=a=>{var s=a.onClick,c=a.text,b=a.icon;return g.a.createElement("li",{className:"left-item",onClick:s},c)},ca=a=>{var s=U(),c=s.userProps,b=c===void 0?{}:c,j=b.settings,R=Array.isArray(j)?j:pe;return g.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(R)?R.map((y,T)=>y&&y.show===!1?null:g.a.createElement("div",{key:T},g.a.createElement("p",{className:"f6 b"},y.title),g.a.createElement("ul",{className:"pl0"},Array.isArray(y.widgets)?y.widgets.map((I,M)=>g.a.createElement(da,Object(ce.default)({key:M.toString()},I,a))):g.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):g.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},C=ca,H=n("Z8Mf"),_=n("j7zX"),ge=n.n(_),Se=n("UESt"),ve=n("refC");function Ie(a){var s=a.onChange,c=a.value,b=a.disabled,j=a.readonly,R=a.options,y=T=>{try{var I=zn(c,T.target.value);s(I)}catch(M){}};return g.a.createElement(G.a,Object(ce.default)({disabled:b||j},R,{onChange:y,value:Sn(c)}))}var Me=n("tCGa"),Xe=n("DH6M"),pt=n.n(Xe),zt=n("b+Mx"),lt=n("5Dct"),$n=n.n(lt),ln=a=>{var s=a.invalid?{borderColor:"#f5222d"}:{},c=a.schema,b=c.max,j=c.min,R=c.step,y={};(b||b===0)&&(y={max:b}),(j||j===0)&&(y=Object(S.a)(Object(S.a)({},y),{},{min:j})),R&&(y=Object(S.a)(Object(S.a)({},y),{},{step:R}));var T=!1;a.options&&a.options.hideNumber&&(T=!0);var I=K=>typeof K=="string"&&K.endsWith("%"),M=100;if(I(a.value))try{M=Number(a.value.split("%")[0]),Number.isNaN(M)&&(M=100)}catch(K){}var L=K=>{var Ee=K+"%";a.onChange(Ee)},de=a.readonly?g.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):g.a.createElement($n.a,Object(ce.default)({},a.options,y,{style:Object(S.a)({width:"80px"},s),value:M,disabled:a.disabled,onChange:L,formatter:K=>"".concat(K,"%"),parser:K=>K.replace("%","")}));return g.a.createElement("div",{className:"fr-slider"},g.a.createElement(pt.a,Object(ce.default)({style:{flexGrow:1,marginRight:T?0:12}},y,{onChange:L,max:100,tipFormatter:K=>K+"%",value:M||100,disabled:a.disabled||a.readonly})),T?null:de)},Ht=ln;function _t(a,s){var c=a.type,b=a.format,j=a.enum,R=a.readonly;if(a.widget)return a.widget;var y=[];R&&(y.push("".concat(c,"?readonly")),y.push("*?readonly")),j&&(y.push("".concat(c,"?enum")),y.push("*?enum")),b&&y.push("".concat(c,":").concat(b)),y.push(c);var T="";return y.some(I=>(T=s[I],!!T)),T}function fn(){var a=Object(ve.useForm)(),s=U(),c=s.selected,b=s.flatten,j=s.onItemChange,R=s.userProps,y=R===void 0?{}:R,T=s.widgets,I=s.mapping,M=y.settings,L=y.commonSettings,de=Object(X.useState)({}),K=Object(B.default)(de,2),Ee=K[0],ye=K[1],ie=Object(S.a)(Object(S.a)({},T),{},{idInput:Ie,percentSlider:Ht}),be=(oe,je)=>{var Be=[];return oe.forEach(We=>{var st=We.widgets,bt=st.filter(rt=>rt.widget).map(rt=>Object(S.a)(Object(S.a)({},rt),{},{setting:Object(S.a)(Object(S.a)({},je),rt.setting)}));Be=[...Be,...bt]}),Be},De=oe=>{if(c&&oe.$id)try{var je=b[c];je&&je.schema&&j(c,Object(S.a)(Object(S.a)({},je),{},{schema:oe}))}catch(Be){console.log(Be,"catch")}};return Object(X.useEffect)(()=>{var oe=Array.isArray(M)?[...M,{widgets:[...te,...me,...Pe]}]:pe,je=ft(L)?L:se,Be=be(oe,je),We,st;try{if(We=b[c],We&&(st=_t(We.schema,I)),st){var bt=Be.find(ct=>ct.widget===st)||{},rt=bt.setting;ye({type:"object",displayType:"column",showDescIcon:!0,properties:Object(S.a)({},rt)}),setTimeout(()=>{a.setValues(We.schema)})}}catch(ct){console.log(ct)}},[c]),g.a.createElement("div",{style:{paddingRight:24}},g.a.createElement(ve.default,{form:a,schema:Ee,widgets:ie,watch:{"#":oe=>De(oe)}}))}function Rn(){var a=Object(ve.useForm)(),s=U(),c=s.widgets,b=s.frProps,j=s.userProps,R=Qe(),y=j&&j.globalSettings?j.globalSettings:he,T=I=>{I.displayType&&R({frProps:I})};return Object(X.useEffect)(()=>{a.setValues(b)},[b]),g.a.createElement("div",{style:{paddingRight:24}},g.a.createElement(ve.default,{form:a,schema:y,watch:{"#":I=>T(I)},widgets:c}))}var Ze=n("72KL"),Rt=ge.a.TabPane;function gt(){var a=z({showRight:!0,showItemSettings:!1}),s=Object(B.default)(a,2),c=s[0],b=s[1],j=U(),R=j.selected,y=c.showRight,T=c.showItemSettings,I=()=>b({showRight:!y}),M=()=>g.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:I},g.a.createElement(Se.a,{className:"f5"})),L=()=>g.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},g.a.createElement(M,null));return Object(X.useEffect)(()=>{R&&R[0]==="0"||R==="#"||!R?b({showItemSettings:!1}):b({showItemSettings:!0})},[R]),y?g.a.createElement("div",{className:"right-layout relative pl2"},g.a.createElement(M,null),g.a.createElement(ge.a,{defaultActiveKey:"1",onChange:()=>{}},T&&g.a.createElement(Rt,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},g.a.createElement(fn,null)),g.a.createElement(Rt,{tab:"\u8868\u5355\u914D\u7F6E",key:T?"2":"1"},g.a.createElement(Rn,null)))):g.a.createElement(L,null)}var at=a=>{var s=a.children,c=s===void 0?[]:s,b=a.preview;return g.a.createElement(g.a.Fragment,null,c.map((j,R)=>{var y={id:j,preview:b};return g.a.createElement(Qn,Object(ce.default)({key:R.toString()},y))}))},ut=at,Kt=a=>{var s=a.$id,c=a.item,b=a.labelClass,j=a.contentClass,R=a.isComplex,y=a.children,T=c.schema,I=U(),M=I.flatten,L=I.widgets,de=I.mapping,K=I.frProps,Ee=K===void 0?{}:K,ye=Ee.labelWidth,ie=Ee.displayType,be=Ee.showDescIcon,De=Ee.showValidate,oe=T.title,je=T.description,Be=T.required,We=_t(T,de),st=T.widget;st&&L[st]&&(We=st);var bt=L[We];if(!bt){var rt=Object(S.a)({},T);delete rt.widget,We=_t(rt,de),bt=L[We]||"input"}var ct=Ye("labelWidth",s,M)||ye,hn=St(ct)?Number(ct):Re(ct)?ct:110,Vt={width:hn};We==="checkbox"?Vt={flexGrow:1}:(R||ie==="column")&&(Vt={flexGrow:1});var tn=()=>{},gn={};We==="checkbox"&&ie==="row"&&(gn.marginLeft=ct);var Nn=Object(S.a)({disabled:T.disabled,readOnly:T.readOnly},T.props);return g.a.createElement(g.a.Fragment,null,T.title?g.a.createElement("div",{className:b,style:Vt},g.a.createElement("label",{className:"fr-label-title ".concat(We==="checkbox"||ie==="column"?"no-colon":""),title:oe},Be&&g.a.createElement("span",{className:"fr-label-required"}," *"),g.a.createElement("span",{className:"".concat(R?"b":""," ").concat(ie==="column"?"flex-none":"")},oe),je&&(be?g.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":je},g.a.createElement("i",{className:"fr-tooltip-icon"}),g.a.createElement("div",{className:"fr-tooltip-container"},g.a.createElement("i",{className:"fr-tooltip-triangle"}),je)):g.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",je,"\xA0)")),ie!=="row"&&De&&g.a.createElement("span",{className:"fr-validate"},"validation"))):null,g.a.createElement("div",{className:j,style:gn},g.a.createElement(bt,Object(ce.default)({onChange:tn,schema:T},Nn),y||null)))},pn=Kt,un=n("iU8R"),en=n("dhM6"),ke=n("/MfK"),dt=n("lfch"),ze=n("aMZS");function yt(a){var s=a.$id,c=a.item,b=a.inside,j=b===void 0?!1:b,R=a.children,y=a.style,T=Object(X.useState)(),I=Object(B.default)(T,2),M=I[0],L=I[1],de=U(),K=de.flatten,Ee=de.onFlattenChange,ye=de.selected,ie=de.hovering,be=Qe(),De=c.schema,oe=De.type,je=Object(X.useRef)(null),Be=Object(Gn.a)({item:{type:"box",$id:j?0+s:s},end:(_e,ht)=>{var ue=ht.getDropResult()},collect:_e=>({isDragging:_e.isDragging()})}),We=Object(B.default)(Be,3),st=We[0].isDragging,bt=We[1],rt=We[2],ct=Object(ze.a)({accept:"box",drop:(_e,ht)=>{var ue=ht.didDrop();if(!ue){console.log(_e.dragItem,"tems");var et=Mt({dragId:_e.$id,dragItem:_e.dragItem,dropId:s,position:M,flatten:K}),mt=Object(B.default)(et,2),dn=mt[0],an=mt[1];Ee(dn),be({selected:an})}},hover:(_e,ht)=>{var ue=ht.isOver({shallow:!0});if(ue){var et=je.current&&je.current.getBoundingClientRect(),mt=(et.bottom-et.top)/2,dn=ht.getSourceClientOffset(),an=dn.y-et.top;j?L("inside"):(an<=mt&&L("up"),an>mt&&L("down"))}},collect:_e=>({isOver:_e.isOver({shallow:!0}),canDrop:_e.canDrop()})}),hn=Object(B.default)(ct,2),Vt=hn[0],tn=Vt.canDrop,gn=Vt.isOver,Nn=hn[1],sa=tn&&gn;rt(Nn(je));var nn=_e=>{_e.stopPropagation();var ht=j?"0"+s:s;be({selected:ht})},yn=_e=>{_e.stopPropagation();var ht=Object(S.a)({},K),ue="#";try{var et=ht[s].parent,mt=ht[et].children,dn=mt.indexOf(s);dn>0?ue=mt[dn-1]:ue=mt[1]||et}catch(an){console.log("catch",an)}delete ht[s],Ee(ht),be({selected:ue})},bn=_e=>{_e.stopPropagation();var ht=Dn(K,s),ue=Object(B.default)(ht,2),et=ue[0],mt=ue[1];Ee(et),be({selected:mt})},Zn=()=>{},kn=()=>{},jn=ye===s&&!j;ye&&ye[0]==="0"&&(jn=ye.substring(1)===s&&j);var Ft=j?"0"+s:s,qe={backgroundColor:ie===Ft?"#ecf5ff":"#fff",opacity:st?0:1};if(j?qe=Object(S.a)(Object(S.a)({},qe),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):s==="#"?qe=Object(S.a)(Object(S.a)({},qe),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):oe==="object"&&(qe=Object(S.a)(Object(S.a)({},qe),{},{paddingTop:12})),sa&&(j?qe=Object(S.a)(Object(S.a)({},qe),{},{boxShadow:"0 -3px 0 red"}):M==="up"?qe=Object(S.a)(Object(S.a)({},qe),{},{boxShadow:"0 -3px 0 red"}):M==="down"&&(qe=Object(S.a)(Object(S.a)({},qe),{},{boxShadow:"0 3px 0 red"}))),jn&&(qe=Object(S.a)(Object(S.a)({},qe),{},{outline:"2px solid #409eff",borderColor:"#fff"})),y&&typeof y=="object"&&(qe=Object(S.a)(Object(S.a)({},qe),y)),s==="#"&&j)return R;var Tn=De&&De.$id&&Sn(De.$id);return Tn==="#"&&(Tn=""),g.a.createElement("div",{ref:je,style:qe,className:"field-wrapper relative w-100",onClick:nn,onMouseEnter:Zn,onMouseLeave:kn},!j&&jn&&s!=="#"&&g.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:bt},g.a.createElement(en.a,{style:{color:"#fff"}})),!j&&g.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},Tn),R,jn&&!j&&s!=="#"&&g.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},g.a.createElement("div",{className:"pointer",onClick:yn},g.a.createElement(ke.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),g.a.createElement("div",{className:"pointer",onClick:bn},g.a.createElement(dt.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var aa=a=>{var s=a.id,c=s===void 0?"#":s,b=a.preview,j=b===void 0?!1:b,R=U(),y=R.flatten,T=R.frProps,I=T===void 0?{}:T,M=I.displayType,L=I.column,de=y[c];if(!de)return null;var K=de.schema,Ee=K.type==="object",ye=K.type==="array"&&K.enum===void 0,ie=Ee||ye,be=K.width,De="fr-field w-100 ".concat(ie?"fr-field-complex":""),oe="fr-label mb2",je="fr-content",Be={};switch(!ie&&be?Be={width:be,paddingRight:"12px"}:!ie&&L>1&&(Be={width:"calc(100% /".concat(L,")"),paddingRight:"12px"}),K.type){case"object":K.title&&(De+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",oe+=" fr-label-object bg-white absolute ph2 top-upper left-1"),De+=" fr-field-object",K.title&&(je+=" ml3");break;case"array":K.title&&!K.enum&&(oe+=" mt2 mb3");break;case"boolean":K.widget!=="switch"&&(K.title&&(oe+=" ml2",oe=oe.replace("mb2","mb0")),je+=" flex items-center",De+=" flex items-center flex-row-reverse justify-end");break;default:M==="row"&&(oe=oe.replace("mb2","mb0"))}var We=K.type==="boolean"&&K.widget!=="switch";M==="row"&&!ie&&!We&&(De+=" flex items-center",oe+=" flex-shrink-0 fr-label-row",oe=oe.replace("mb2","mb0"),je+=" flex-grow-1 relative"),M==="row"&&We&&(je+=" flex justify-end pr2");var st={$id:c,item:de,labelClass:oe,contentClass:je,isComplex:ie},bt={children:de.children,preview:j},rt=de.children&&de.children.length>0?g.a.createElement("ul",{className:"flex flex-wrap pl0"},g.a.createElement(ut,bt)):null;if(j)return g.a.createElement("div",{style:Be,className:De},g.a.createElement(pn,st,(Ee||ye)&&rt));var ct=Object.keys(y).length<2;return ct?g.a.createElement(yt,{style:Be,$id:c,item:de},g.a.createElement("div",{className:"".concat(De," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):g.a.createElement(yt,{style:Be,$id:c,item:de},g.a.createElement("div",{className:De},g.a.createElement(pn,st,(Ee||ye)&&g.a.createElement(yt,{$id:c,item:de,inside:!0},rt||g.a.createElement("div",{className:"h2"})))))},Qn=aa;function Fn(a){var s=a.schema,c=Object(ve.useForm)();return g.a.createElement(ve.default,{schema:s,form:c})}var Un=G.a.TextArea;function ma(a,s){var c=a.schema,b=a.formData,j=a.onChange,R=a.onSchemaChange,y=a.setGlobal,T=a.userProps,I=T===void 0?{}:T,M=a.frProps,L=M===void 0?{}:M,de=Object(d.default)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),K=z({showModal:!1,showModal2:!1,schemaForImport:""}),Ee=Object(B.default)(K,2),ye=Ee[0],ie=Ee[1],be=de.preview,De=I.transformFrom,oe=I.transformTo,je=I.isNewVersion,Be=I.extraButtons,We=Be===void 0?[]:Be,st={};c&&(st=Ot(c.schema,c.uiSchema));var bt=Qt(st),rt=Cn(bt,b),ct=ue=>{var et=Lt(ue),mt=xe(ue);R&&R(et),j(mt)},hn=(ue,et)=>{rt[ue]=et,ct(rt)},Vt=()=>ie({showModal:!ye.showModal}),tn=()=>ie({showModal2:!ye.showModal2}),gn=()=>{y({schema:{schema:{type:"object"}},formData:{},selected:void 0})},Nn=ue=>{ie({schemaForImport:ue.target.value})},sa=()=>{try{var ue=De(Dt(ye.schemaForImport)),et=!0;ue&&ue.propsSchema&&(et=!1);var mt=qt(ue),dn=mt.schema,an=Object(d.default)(mt,["schema"]);y(va=>({schema:{schema:dn},formData:{},selected:void 0,isNewVersion:et,frProps:Object(S.a)(Object(S.a)({},va.frProps),an)}))}catch(va){x.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}tn()},nn={},yn="";try{var bn=Lt(rt,"#",!0);L&&L.column&&(bn.column=L.column),L&&L.displayType&&(bn.displayType=L.displayType),L&&L.showDescIcon&&(bn.showDescIcon=L.showDescIcon),nn=oe(Object(S.a)({schema:bn},L)),je||(nn=Ct(nn)),yn=JSON.stringify(nn,null,2)}catch(ue){}var Zn=()=>{ee()(yn),x.a.info("\u590D\u5236\u6210\u529F"),Vt()},kn=()=>nn,jn=ue=>{try{var et=ue.schema,mt=ue.propsSchema,dn=ue.uiSchema,an=Object(d.default)(ue,["schema","propsSchema","uiSchema"]),va={schema:et||mt},Ea=!0;!et&&mt&&(Ea=!1),y(qn=>Object(S.a)(Object(S.a)({},qn),{},{schema:va,formData:{},selected:void 0,isNewVersion:Ea,frProps:Object(S.a)(Object(S.a)({},qn.frProps),an)}))}catch(qn){console.error(qn)}},Ft=()=>{ee()(yn)};Object(X.useImperativeHandle)(s,()=>({getValue:kn,setValue:jn,copyValue:Ft}));var qe=Object(S.a)({flatten:rt,onFlattenChange:ct,onItemChange:hn,userProps:I,frProps:L},de),Tn=Array.isArray(We)?We:[],_e=Tn.filter(ue=>ue===!0||ue===!1),ht=Tn.filter(ue=>ft(ue)&&ue.text);return g.a.createElement(u.Provider,{value:y},g.a.createElement(Pt.Provider,{value:qe},g.a.createElement("div",{className:"fr-generator-container"},g.a.createElement(C,null),g.a.createElement("div",{className:"mid-layout pr2"},g.a.createElement("div",{className:"mv2 mh1"},_e[0]!==!1&&g.a.createElement(A.a,{className:"mr2 mb1",onClick:()=>{y({preview:!be,selected:"#"})}},be?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),_e[1]!==!1&&g.a.createElement(A.a,{className:"mr2",onClick:gn},"\u6E05\u7A7A"),_e[2]!==!1&&g.a.createElement(A.a,{className:"mr2",onClick:tn},"\u5BFC\u5165"),_e[3]!==!1&&g.a.createElement(A.a,{type:"primary",className:"mr2",onClick:Vt},"\u5BFC\u51FAschema"),ht.map((ue,et)=>g.a.createElement(A.a,Object(ce.default)({key:et.toString(),className:"mr2"},ue),ue.text||ue.children))),g.a.createElement("div",{className:"dnd-container"},g.a.createElement("div",{style:{height:be?33:0}}),be?g.a.createElement(Fn,{schema:nn.schema}):g.a.createElement(Qn,null))),g.a.createElement(gt,{globalProps:L}),g.a.createElement(Gt.a,{visible:ye.showModal,onOk:Zn,onCancel:Vt,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},g.a.createElement("div",{className:"mt3"},g.a.createElement(Un,{style:{fontSize:12},value:yn,autoSize:{minRows:10,maxRows:30}}))),g.a.createElement(Gt.a,{visible:ye.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:sa,onCancel:tn},g.a.createElement("div",{className:"mt3"},g.a.createElement(Un,{style:{fontSize:12},value:ye.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:Nn,autoSize:{minRows:10,maxRows:30}}))))))}var Hn=Object(X.forwardRef)(ma);Hn.defaultProps={labelWidth:120};var ra=Hn,xa=a=>a,ya=a=>a,ba=n("w5pM");function Na(a){return g.a.createElement("div",{className:"flex flex-column"},g.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},g.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,g.a.createElement(A.a,{size:"small",className:"self-end",type:"dashed",icon:g.a.createElement(ke.a,null)},"\u5220\u9664")),g.a.createElement(A.a,{size:"small",className:"self-end",icon:g.a.createElement(ba.a,null)},"\u6DFB\u52A0"))}var Ta=n("xwS/"),Ia=n("4l2o"),Ka=n("k/c8"),Sa={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function ja(a,s){var c=a.defaultValue,b=a.templates,j=a.submit,R=a.transformer,y=a.extraButtons,T=a.settings,I=a.commonSettings,M=a.globalSettings,L=a.widgets,de=L===void 0?{}:L,K=a.mapping,Ee=K===void 0?{}:K,ye=xa,ie=ya;R&&(typeof R.from=="function"&&(ye=R.from),typeof R.to=="function"&&(ie=R.to));var be=s||Object(X.useRef)(),De=z({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),oe=Object(B.default)(De,2),je=oe[0],Be=oe[1];Object(X.useEffect)(()=>{var Ft=c?ye(c):Sa;Ft&&Ft.propsSchema?Be({isNewVersion:!1}):Be({isNewVersion:!0}),Be({schema:qt(Ft),formData:Ft&&Ft.formData||{}})},[c]);var We=je.formData,st=je.frProps,bt=je.hovering,rt=je.isNewVersion,ct=je.preview,hn=je.schema,Vt=je.selected,tn=st.displayType,gn=tn==="row",Nn=Object(S.a)(Object(S.a)({},st),{},{showDescIcon:gn}),sa=Ft=>{Be({formData:Ft}),a.onChange&&a.onChange(Ft)},nn=Ft=>{var qe=Object(S.a)({},hn);qe.schema=Ft,Be({schema:qe}),a.onSchemaChange&&setTimeout(()=>{var Tn=be.current.getValue();a.onSchemaChange(Tn)},0)},yn=Object(S.a)(Object(S.a)(Object(S.a)({},ve.mapping),Ee),{},{array:"listEditor"}),bn=Object(S.a)(Object(S.a)(Object(S.a)({},ve.widgets),de),{},{listEditor:Na}),Zn={preview:ct,mapping:yn,widgets:bn,selected:Vt,hovering:bt},kn={templates:b,submit:j,transformFrom:ye,transformTo:ie,isNewVersion:rt,extraButtons:y,settings:T,commonSettings:I,globalSettings:M},jn=Object(S.a)(Object(S.a)({schema:hn,formData:We,onChange:sa,setGlobal:Be,onSchemaChange:nn},Zn),{},{userProps:kn,frProps:Nn});return g.a.createElement(ra,Object(ce.default)({ref:be},jn))}var wa=Object(X.forwardRef)(ja),Pa=n("trko"),Xn=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,b=s.type==="object"&&s.properties,j=s.type==="array"&&s.items&&s.items.properties,R=b||j;if(R){var M=It(s);M.map(L=>{b&&(s.properties[L.name]=a(L.schema,s)),j&&(s.items.properties[L.name]=a(L.schema,s))})}else if(s.enum&&Array.isArray(s.enum)){var y=s.enum;if(ft(y[0])&&y[0].label!==void 0&&y[0].value!==void 0){var T=y.map(L=>L.label),I=y.map(L=>L.value);s.enum=I,s.enumNames=T}}return s["x-component"]&&(s.widget=s["x-component"]),s["x-component-props"]&&(s.props=s["x-component-props"]),c&&s.required&&(c.required&&Array.isArray(c.required)?c.required.push(s.name):c.required=[s.name]),delete s.key,delete s.name,delete s.required,delete s["x-component"],delete s["x-component-props"],s},An=a=>{var s=Xn(a);return{schema:s}},Oa=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,b=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,j=s.type==="object"&&s.properties,R=s.type==="array"&&s.items&&s.items.properties,y=j||R;if(y){var I=It(s);I.map(M=>{j&&(s.properties[M.name]=a(M.schema,s,M.name)),R&&(s.items.properties[M.name]=a(M.schema,s,M.name))})}else if(s.enum&&Array.isArray(s.enum)&&s.enumNames&&Array.isArray(s.enumNames)){var T=s.enum.map((M,L)=>({value:M,label:s.enumNames[L]}));s.enum=T}return s.widget&&(s["x-component"]=s.widget),s.props&&(s["x-component-props"]=s.props),delete s.widget,delete s.props,delete s.enumNames,b&&(s.name=b,s.key=b),c&&b&&c.required&&Array.isArray(c.required)&&c.required.indexOf(b)>-1&&(s.required=!0),s},Da=a=>{var s=a.schema;return Oa(s)},Ca=(a,s)=>g.a.createElement(Q.a,{backend:O.a,context:window},g.a.createElement(wa,Object(ce.default)({ref:s},a))),Ba=Y.default=Object(X.forwardRef)(Ca)},refC:function(Ge,Y,n){"use strict";n.r(Y),n.d(Y,"widgets",function(){return Ra}),n.d(Y,"mapping",function(){return en}),n.d(Y,"useForm",function(){return Ma}),n.d(Y,"connectForm",function(){return gr}),n.d(Y,"createWidget",function(){return An});var ce=n("Saan"),X=n("vgIT"),g=n.n(X),Q=n("0Owb"),O=n("k1fw"),S=n("PpiC"),B=n("q1tI"),u=n.n(B),Pt=n("Pv/L"),Qe=n("tJVT"),U=n("LvDl");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function z(e){var t=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:t.test(e)}function Yt(e,t){if(t)return!1;if(e.widget==="checkbox")return!0;if(e&&e.type==="boolean")return e.widget===void 0}function wn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function Nt(e){if(typeof e=="string"){var t=e.split(".");return t.length===1?"#":(t.pop(),t.join("."))}return"#"}function kt(e,t){if(t==="#")return e||{};if(typeof t=="string")return Object(U.get)(e,t)}function cn(e){var t,r;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,i=e.match(o);return i?(t=e.replace(o,"[]"),r=i.map(m=>Number(m.substring(1,m.length-1)))):t=e,{id:t,dataIndex:r}}function Tt(e,t){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var r=e;return Array.isArray(t)&&t.forEach(o=>{r=r.replace(/\[\]/,"[".concat(o,"]"))}),wn(r)}function xt(e){return e.type==="array"&&e.items&&e.enum===void 0}function jt(e){return e.type==="object"&&e.properties}function Gt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=A(e),m=t;i.$id||(i.$id=m);var f=[];jt(i)&&Object.entries(i.properties).forEach(h=>{var v=Object(Qe.default)(h,2),E=v[0],w=v[1],F=xt(w)?E+"[]":E,N=m==="#"?F:m+"."+F;f.push(N),Gt(w,N,m,o)}),xt(i)&&Object.entries(i.items.properties).forEach(h=>{var v=Object(Qe.default)(h,2),E=v[0],w=v[1],F=xt(w)?E+"[]":E,N=m==="#"?F:m+"."+F;f.push(N),Gt(w,N,m,o)});var p=Array.isArray(i.rules)?[...i.rules]:[];return["boolean","function","string"].indexOf(typeof i.required)>-1&&p.push({required:i.required}),i.type&&(o[m]={parent:r,schema:i,children:f,rules:p}),o}function Pn(e,t){return e.indexOf(t)>-1}var V=e=>Pn(Object.prototype.toString.call(e),"Object"),A=U.cloneDeep;function D(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function l(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function x(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0)return!1;if(e===null&&t===null)return!0;if(e===null||t===null)return!1;if(e.constructor!==t.constructor)return!1;if(e.constructor===Array){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r].constructor===Array||e[r].constructor===Object){if(!x(e[r],t[r]))return!1}else if(e[r]!==t[r])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var i=Object.keys(e)[o];if(e[i]&&typeof e[i]!="number"&&(e[i].constructor===Array||e[i].constructor===Object)){if(!x(e[i],t[i]))return!1}else if(e[i]!==t[i])return!1}}else if(e.constructor===String||e.constructor===Number)return e===t;return!0}function d(e){var t;switch(e){case"date":t="YYYY-MM-DD";break;case"time":t="HH:mm:ss";break;case"dateTime":t="YYYY-MM-DD HH:mm:ss";break;case"week":t="YYYY-w";break;case"year":t="YYYY";break;case"quarter":t="YYYY-Q";break;case"month":t="YYYY-MM";break;default:t="YYYY-MM-DD"}return t}function P(e){return e.find((t,r,o)=>r!==o.findIndex(i=>JSON.stringify(t)===JSON.stringify(i)))}function $(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=W(e),o=r.map(f=>{var p=f.name,h=f.schema,v=h.type,E=h.enum,w=h.properties,F=h.items,N=v==="object"&&w,q=v==="array"&&F&&!E,Z=p&&t[f.name];if(!Z)return f;if(q){var re=$(F,Z.items||{});return Object(O.a)(Object(O.a)({},f),{},{schema:Object(O.a)(Object(O.a)(Object(O.a)({},f.schema),Z),{},{items:re})})}if(N){var we=$(f.schema,Z);return Object(O.a)(Object(O.a)({},f),{},{schema:we})}return Object(O.a)(Object(O.a)({},f),{},{schema:Object(O.a)(Object(O.a)({},f.schema),Z)})}),i={};o.forEach(f=>{i[f.name]=f.schema});var m={};return Object.keys(t).forEach(f=>{typeof f=="string"&&f.substring(0,3)==="ui:"&&(m[f]=t[f])}),G(i)?Object(O.a)(Object(O.a)({},e),m):Object(O.a)(Object(O.a)(Object(O.a)({},e),m),{},{properties:i})}function G(e){return Object.keys(e).length===0}function W(e){if(!e)return[];var t=e.properties,r=e.items,o=e.type;if(!t&&!r)return[];var i={};return o==="object"&&(i=t),o==="array"&&(i=r),Object.keys(i).map(m=>({schema:i[m],name:m}))}function ee(){}var se=e=>Function('"use strict";return ('+e+")")(),te=(e,t,r)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(r),`;
    const formData = `).concat(JSON.stringify(t),`;
    return (`).concat(e,")"))();function me(e){if(typeof e!="string")return!1;var t=/^{{(.+)}}$/,r=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(t)&&!e.match(r)&&!e.match(o))}function Pe(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=Nt(r),i=kt(t,o)||{};if(typeof e=="string"){var m=e.substring(2,e.length-2),f=/formData.([a-zA-Z0-9.$_\[\]]+)/g,p=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,h=`
    return (`.concat(m.replaceAll(f,(v,E)=>JSON.stringify(kt(t,E))).replaceAll(p,(v,E)=>JSON.stringify(kt(i,E))),")");try{return Function(h)()}catch(v){return e}}else return e}var fe=function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return V(t)?Object.keys(t).some(o=>{var i=t[o];return typeof i=="string"?me(i):!r&&V(i)?e(i,!1):!1}):!1},pe=(e,t,r)=>{var o=A(e);return Object.keys(o).forEach(i=>{var m=o[i];if(me(m)&&(o[i]=Pe(m,t,r)),typeof i=="string"&&i.toLowerCase().indexOf("props")>-1){var f=o[i];V(f)&&Object.keys(f).forEach(p=>{o[i][p]=Pe(f[p],t,r)})}}),o};function he(e){return Object.keys(e).some(t=>typeof e[t]=="function"?!0:typeof e[t]=="string"?me(e[t]):typeof e[t]=="object"?he(e[t]):!1)}var Ue=(e,t,r)=>{try{var o=r[t];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var i=r[o.parent].schema;return i[e]!==void 0?i[e]:Ue(e,o.parent,r)}}catch(m){return}},ae=()=>{var e=localStorage.getItem("SAVES");if(e)try{var t=JSON.parse(e),r=t.length;if(r)return r+1}catch(o){return 1}else return 1};function Oe(e){return Function('"use strict";return ('+e+")")()}function Le(e){if(!e)return[];var t=e.properties,r=e.items,o=e.type;if(!t&&!r)return[];var i={};return o==="object"&&(i=t),o==="array"&&(i=r.properties),Object.keys(i).map(m=>({schema:i[m],name:m}))}var vt=e=>{if(e&&e.propsSchema){var t=e.propsSchema,r=Object(S.default)(e,["propsSchema"]);return Object(O.a)({schema:t},r)}return e},ft=e=>{if(e&&e.schema){var t=e.schema,r=Object(S.default)(e,["schema"]);return Object(O.a)({propsSchema:t},r)}return e},Bt=e=>{if(!!e){var t=e&&e.items&&e.items.enum,r=e&&e.enum;return t||r}},St=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(t)?t:r},Re=e=>{var t="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(t).test(e))};function Ve(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&e in t.target?t.target[e]:t}var ot=e=>{try{var t=e.split("."),r=t.slice(-1)[0];return r}catch(o){return console.error(o,"getKeyFromPath"),""}},mn=(e,t)=>{if(typeof e=="boolean")return e?"yes":"no";if(jt(t)||xt(t))return"-";if(Array.isArray(t.enum)&&Array.isArray(t.enumNames))try{return t.enumNames[t.enum.indexOf(e)]}catch(r){return e}return e},Ot=e=>{var t={};return V(e)?Object.keys(e).forEach(r=>{t[r]=Ot(e[r])}):Array.isArray(e)?t=e.filter(r=>!!(r&&JSON.stringify(r)!=="{}")):t=e,t},$t=e=>{var t=e.schema,r=e.isRequired,o=r===void 0?!0:r,i={},m={};if(jt(t))i.type="object",o&&t.required===!0&&(i.required=!0),i.fields={},Object.keys(t.properties).forEach(F=>{var N=t.properties[F];Array.isArray(t.required)&&t.required.indexOf(F)>-1&&(N.required=!0),i.fields[F]=$t({schema:N,isRequired:o})});else if(xt(t))i.type="array",o&&t.required===!0&&(i.required=!0),i.defaultField={type:"object",fields:{}},Object.keys(t.items.properties).forEach(F=>{var N=t.items.properties[F];Array.isArray(t.required)&&t.required.indexOf(F)>-1&&(N.required=!0),i.defaultField.fields[F]=$t({schema:N,isRequired:o})});else{var f=F=>t.type?Object(O.a)(Object(O.a)({},F),{},{type:t.type}):F.pattern&&typeof F.pattern=="string"?Object(O.a)(Object(O.a)({},F),{},{pattern:new RegExp(F.pattern)}):F,p=t.required,h=Object(S.default)(t,["required"]);switch(["type","pattern","min","max","len"].forEach(F=>{Object.keys(h).indexOf(F)>-1&&(m[F]=h[F])}),t.type){case"range":m.type="array";case"html":m.type="string";break;default:break}switch(t.format){case"email":case"url":m.type=t.format;break;default:break}var v;if(o&&t.required===!0&&(v={required:!0}),t.rules)if(Array.isArray(t.rules)){var E=[];t.rules.forEach(F=>{F.required===!0?o&&(v=F):E.push(f(F))}),i=[m,...E]}else V(t.rules)?i=[m,f(t.rules)]:i=m;else i=m;if(v&&(Array.isArray(i)?i.push(v):V(i)&&(i=[i,v])),t.format==="image"){var w={validator:(F,N)=>{var q=/([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;return N?!!q.exec(N)||z(N):!0},message:"${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage"};Array.isArray(i)?i.push(w):V(i)&&(i=[i,w])}}return i},sn=e=>{var t=e.split(".");return t.map(r=>isNaN(Number(r))?r:"[".concat(r,"]")).reduce((r,o)=>o[0]==="["||r===""?r+o:r+"."+o,"")},Ln=(e,t)=>{for(var r=e.split(".");r.length>0;){var o=r,i=Object(Pt.a)(o),m=i[0],f=i.slice(1);m=m.split("[")[0];var p=void 0;if(jt(t)?p=t.properties[m]:xt(t)&&(p=t.items.properties[m]),r=f,p)return Ln(f.join("."),p);var h={required:!1};if(t.required===!0&&(h.required=!0),t.rules){var v=t.rules.find(E=>E.required);v&&(h=v)}return h}},xn=e=>{var t={};return jt(e)?Object.keys(e.properties).forEach(r=>{var o=e.properties[r],i=xn(o);t[r]=i}):e.default!==void 0?t=e.default:e.type==="boolean"?t=!1:t=void 0,t},Mn=(e,t)=>{if(typeof e!="string")return"";if(!t)return e;if(e=e.replace("${title}",t.title),e=e.replace("${type}",t.format||t.type),t.min&&(e=e.replace("${min}",t.min)),t.max&&(e=e.replace("${max}",t.max)),t.rules){var r=t.rules.find(f=>f.min!==void 0);r&&(e=e.replace("${min}",r.min));var o=t.rules.find(f=>f.max!==void 0);o&&(e=e.replace("${max}",o.max));var i=t.rules.find(f=>f.len!==void 0);i&&(e=e.replace("${len}",i.len));var m=t.rules.find(f=>f.pattern!==void 0);m&&(e=e.replace("${pattern}",m.pattern))}return e},on=(e,t)=>{var r=A(e);if(r=t(r),jt(r)){var o=[];Array.isArray(r.required)&&(o=r.required,delete r.required),Object.keys(r.properties).forEach(i=>{var m=r.properties[i];o.indexOf(i)>-1&&(m.required=!0),r.properties[i]=on(m,t)})}else xt(r)&&Object.keys(r.items.properties).forEach(i=>{var m=r.items.properties[i];r.items.properties[i]=on(m,t)});return r},Bn=e=>on(e,Qt),Qt=e=>{try{var t=A(e);if(t.rules=t.rules||[],t.props=t.props||{},t["ui:options"]&&(t.props=t["ui:options"],delete t["ui:options"]),t.pattern){var r={pattern:t.pattern};t.message&&t.message.pattern&&(r.message=t.message.pattern),t.rules.push(r),delete t.pattern,delete t.message}return t.minLength&&(t.rules.push({min:t.minLength}),delete t.minLength),t.maxLength&&(t.rules.push({max:t.maxLength}),t.props.maxLength=t.maxLength,delete t.maxLength),t.min&&(t.rules.push({min:t.min}),t.props.min=t.min,delete t.min),t.max&&(t.rules.push({max:t.max}),t.props.max=t.max,delete t.max),t.step&&(t.props.step=t.step,delete t.step),t.minItems&&(t.props.minItems=t.minItems,delete t.minItems),t.maxItems&&(t.props.maxItems=t.maxItems,delete t.maxItems),t["ui:className"]&&(t.className=t["ui:className"],delete t["ui:className"]),t["ui:hidden"]&&(t.hidden=t["ui:hidden"],delete t["ui:hidden"]),t["ui:readonly"]&&(t.readOnly=t["ui:readonly"],delete t["ui:readonly"]),t["ui:disabled"]&&(t.disabled=t["ui:disabled"],delete t["ui:disabled"]),t["ui:width"]&&(t.width=t["ui:width"],delete t["ui:width"]),t["ui:labelWidth"]&&(t.labelWidth=t["ui:labelWidth"],delete t["ui:labelWidth"]),t.rules&&t.rules.length===0&&delete t.rules,t}catch(o){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",o),e}},Sn=(e,t)=>{var r=parseRootValue(e),o=replaceParseValue(r)},zn=e=>{if(typeof e!="string")return!1;var t=/^{{(function.+)}}$/,r=/^{{(.+=>.+)}}$/;return e.match(t)?e.match(t)[1]:e.match(r)?e.match(r)[1]:!1},la=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return V(t)?(t.theme&&r[t.theme]&&(o=Object(O.a)(Object(O.a)({},t),r[t.theme])),Object.keys(t).forEach(i=>{o[i]=e(t[i],r)})):o=t,o},Lt=e=>Array.isArray(e)?e.map(t=>t&&V(t)?Lt(t):t).filter(t=>t!=null):V(e)?Object.entries(e).map(t=>{var r=Object(Qe.default)(t,2),o=r[0],i=r[1];return[o,i&&V(i)?Lt(i):i]}).reduce((t,r)=>{var o=Object(Qe.default)(r,2),i=o[0],m=o[1];return m==null||(t[i]=m),t},{}):e,Kn=(e,t)=>(Object.keys(t).forEach(r=>{var o=t[r].schema&&t[r].schema.hidden===!0;Object(U.get)(e,r)!==void 0&&o&&Object(U.set)(e,r,void 0)}),e),Dn=Object(B.createContext)(()=>{}),ta=Object(B.createContext)({}),Vn=()=>Object(B.useContext)(Dn),Mt=()=>Object(B.useContext)(ta),Cn=e=>Object(B.useReducer)((t,r)=>Object(O.a)(Object(O.a)({},t),r),e);function ua(e,t,r){var o=Object(B.useRef)();Object(B.useEffect)(()=>{o.current=e},[e]);var i=Object(B.useRef)();return Object(B.useEffect)(()=>{if(!r)return;function m(){o&&o.current&&o.current()}if(m(),t!==null)return i.current=setInterval(m,t),()=>clearInterval(i.current)},[t,r]),()=>clearInterval(i.current)}function xe(e){var t=Object(B.useRef)();return Object(B.useEffect)(()=>{t.current=e},[e]),t.current}var Ye=e=>{var t=Object(B.useState)(!1),r=Object(Qe.default)(t,2),o=r[0],i=r[1],m;try{m=localStorage.getItem(e)}catch(f){}return m||(i(!0),localStorage.setItem(e,JSON.stringify(!0))),o},Dt=()=>{var e=Object(B.useState)(!1),t=Object(Qe.default)(e,2),r=t[0],o=t[1],i=()=>o(!r);return[r,i]},It=e=>{var t=Object(B.useState)(e),r=Object(Qe.default)(t,2),o=r[0],i=r[1];return[o,i]},Wn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var v=localStorage.getItem(r);if(v)try{return JSON.parse(v)}catch(E){return t}return t},i=Object(B.useState)(o()),m=Object(Qe.default)(i,2),f=m[0],p=m[1],h=v=>{p(v),localStorage.setItem(r,JSON.stringify(v))};return[f,h]},na=n("SiV7"),Jn=n("MaXC"),Yn=n("4IMT"),Ut=n.n(Yn),vn=n("eOfH"),qt=n("h0/l"),Ct=n.n(qt),Gn=n("/MfK"),pa=n("lfch"),ha=e=>{var t=e.schema,r=e.displayList,o=r===void 0?[]:r,i=e.dataIndex,m=e.deleteItem,f=e.addItem,p=e.copyItem,h=e.getFieldsProps;return u.a.createElement("div",{className:"fr-list-1"},o.map((v,E)=>{var w=h(E);return w.displayType="inline",t.props&&t.props.hideTitle&&(w.hideTitle=!0),u.a.createElement("div",{key:E,style:{display:"flex"}},u.a.createElement(ia,w),u.a.createElement("div",{style:{marginTop:6}},u.a.createElement(Ct.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>m(E),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},u.a.createElement(Gn.a,{style:{fontSize:17,marginLeft:8}})),u.a.createElement(pa.a,{style:{fontSize:15,marginLeft:8},onClick:()=>p(E)})))}),u.a.createElement(Ut.a,{style:{marginTop:o.length>0?0:8},type:"dashed",onClick:f},"\u65B0\u589E\u4E00\u6761"))},da=ha,ga=n("lfLe"),ca=n("Cp9S"),C=n.n(ca),H=e=>{var t=e.displayList,r=t===void 0?[]:t,o=e.deleteItem,i=e.copyItem,m=e.addItem,f=e.displayType,p=e.getFieldsProps;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"fr-card-list"},r.map((h,v)=>{var E=p(v);return E.displayType=f,u.a.createElement("div",{className:"fr-card-item ".concat(f==="row"?"fr-card-item-row":""),key:v},u.a.createElement("div",{className:"fr-card-index"},v+1),u.a.createElement(ia,E),u.a.createElement(C.a,{direction:"horizontal",className:"fr-card-toolbar"},u.a.createElement(Ct.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>o(v),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},u.a.createElement(Gn.a,{style:{fontSize:17,marginLeft:8}})),u.a.createElement(pa.a,{style:{fontSize:16,marginLeft:8},onClick:()=>i(v)})))})),u.a.createElement(Ut.a,{style:{marginTop:r.length>0?0:8},type:"dashed",onClick:m},"\u65B0\u589E\u4E00\u6761"))},_=H,ge=n("zmYW"),Se=n("DtFj"),ve=n.n(Se),Ie=120,Me=e=>{var t=e.displayList,r=t===void 0?[]:t,o=e.dataIndex,i=e.children,m=e.deleteItem,f=e.addItem,p=e.flatten,h=r.map((E,w)=>({index:w})),v=i.map(E=>{var w=p[E],F=w&&w.schema||{};return{dataIndex:E,title:F.required?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"fr-label-required"}," *"),u.a.createElement("span",null,F.title)):F.title,width:Ie,render:(N,q,Z)=>{var re=[...o,q.index];return u.a.createElement(ia,{hideTitle:!0,displayType:"inline",key:Z.toString(),id:E,dataIndex:re})}}});return v.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(E,w,F)=>u.a.createElement(Ct.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>m(F),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},u.a.createElement("a",null,"\u5220\u9664"))}),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"w-100 mb2 tr"},u.a.createElement(Ut.a,{type:"primary",size:"small",onClick:f},"\u65B0\u589E")),u.a.createElement(ve.a,{scroll:{x:"max-content"},columns:v,dataSource:h,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Xe=Me,pt=n("dc+4"),zt=n("Btem"),lt=n.n(zt),$n=n("Oxum"),ln=e=>{var t=e.message,r=e.schema,o=e.hideValidation,i="";return typeof t=="string"&&(i=t),Array.isArray(t)&&(i=t[0]||""),i=Mn(i,r),!i&&o?null:u.a.createElement("div",{className:"error-message"},i)},Ht=ln,_t=120,fn=e=>{var t=e.displayList,r=t===void 0?[]:t,o=e.dataPath,i=e.dataIndex,m=e.children,f=e.deleteItem,p=e.addItem,h=e.moveItemDown,v=e.moveItemUp,E=e.flatten,w=e.errorFields,F=e.getFieldsProps,N=Object(B.useRef)(-1),q=Cn({showDrawer:!1}),Z=Object(Qe.default)(q,2),re=Z[0],we=Z[1],ne=re.showDrawer,$e=r.map((J,Te)=>Object(O.a)(Object(O.a)({},J),{},{$idx:Te})),Ke=m.map(J=>{var Te=E[J],Fe=Te&&Te.schema||{},k=ot(J);return{dataIndex:k,title:Fe.required?u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"fr-label-required"}," *"),u.a.createElement("span",null,Fe.title)):Fe.title,width:_t,render:(Ae,tt)=>{var it=Tt(J,[tt.$idx]),Et=w.find(wt=>wt.name==it)||{};return u.a.createElement("div",null,u.a.createElement("div",null,mn(Ae,Fe)),Et.error&&u.a.createElement(Ht,{message:Et.error,schema:Fe}))}}});Ke.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(J,Te,Fe)=>{var k=J&&J.$idx||0;return u.a.createElement(C.a,null,u.a.createElement("a",{onClick:()=>Ne(k)},"\u7F16\u8F91"),u.a.createElement(Ct.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>f(k),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},u.a.createElement("a",null,"\u5220\u9664")))}});var He=F(N.current),Ne=J=>{N.current=J,we({showDrawer:!0})},Je=()=>{N.current=-1,we({showDrawer:!1})},Ce=()=>{var J=p();Ne(J)};return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"w-100 mb2 tr"},u.a.createElement(Ut.a,{type:"primary",size:"small",onClick:Ce},"\u65B0\u589E")),u.a.createElement(lt.a,{width:"600",title:"\u7F16\u8F91",placement:"right",onClose:Je,visible:ne,destroyOnClose:!0},u.a.createElement("div",{className:"fr-container"},u.a.createElement(ia,He))),u.a.createElement(ve.a,{scroll:{x:"max-content"},columns:Ke,dataSource:$e,rowClassName:(J,Te)=>{var Fe=J&&J.$idx,k=w.find(Ae=>Ae.name.indexOf("".concat(o,"[").concat(Fe,"]"))>-1);return k?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Rn=fn,Ze=e=>{var t=e.parentId,r=e.dataIndex,o=r===void 0?[]:r,i=e.children,m=i===void 0?[]:i,f=e.errorFields,p=e.displayType,h=Mt(),v=h.formData,E=h.flatten,w=h.onItemChange,F=h.removeErrorField,N="list";try{N=E[t].schema.widget}catch(k){}var q=E[t],Z=q&&q.schema,re=Tt(t,o),we;typeof re=="string"&&(we=Object(U.get)(v,re));var ne=Array.isArray(we)?we:[{}],$e=()=>{var k=[...ne,{}],Ae=k.length-1;return w(re,k),Ae},Ke=k=>{var Ae=ne[k],tt=[...ne.slice(0,k),Ae,...ne.slice(k)];w(re,tt)},He=k=>{var Ae=ne.filter((tt,it)=>it!==k);w(re,Ae),F("".concat(re,"[").concat(k,"]"))},Ne=k=>{if(k!==0){var Ae=ne[k],tt=ne[k-1],it=ne;it[k]=tt,it[k-1]=Ae,w(re,it)}},Je=k=>{if(!(k>=ne.length-1)){var Ae=ne[k],tt=ne[k+1],it=ne;it[k]=tt,it[k+1]=Ae,w(re,it)}},Ce={type:"object",properties:{},props:Z.props||{},$id:Z.$id},J={schema:Ce,children:m},Te=(k,Ae)=>Object(O.a)({_item:J,dataIndex:[...o,k]},Ae),Fe={displayList:ne,schema:Z,dataPath:re,dataIndex:o,children:m,deleteItem:He,addItem:$e,copyItem:Ke,moveItemDown:Je,moveItemUp:Ne,listData:we,flatten:E,errorFields:f,displayType:p,getFieldsProps:Te};switch(N){case"list0":return u.a.createElement(_,Fe);case"list1":return u.a.createElement(da,Fe);case"list2":return u.a.createElement(Xe,Fe);case"list3":return u.a.createElement(Rn,Fe);default:return u.a.createElement(_,Fe)}},Rt=Ze,gt=e=>{var t=e.children,r=t===void 0?[]:t,o=e.dataIndex,i=o===void 0?[]:o,m=e.displayType,f=e.hideTitle;return u.a.createElement(u.a.Fragment,null,r.map((p,h)=>{var v={displayType:m,id:p,dataIndex:i,hideTitle:f};return u.a.createElement(ia,Object(Q.default)({key:h.toString()},v))}))},at=gt;function ut(e,t,r){var o=this,i=Object(B.useRef)(null),m=Object(B.useRef)(0),f=Object(B.useRef)(null),p=Object(B.useRef)([]),h=Object(B.useRef)(),v=Object(B.useRef)(),E=Object(B.useRef)(e),w=Object(B.useRef)(!0);E.current=e;var F=!t&&t!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,r=r||{};var N=!!r.leading,q="trailing"in r?!!r.trailing:!0,Z="maxWait"in r,re=Z?Math.max(+r.maxWait||0,t):null;Object(B.useEffect)(()=>(w.current=!0,()=>{w.current=!1}),[]);var we=Object(B.useMemo)(()=>{var ne=Ce=>{var J=p.current,Te=h.current;return p.current=h.current=null,m.current=Ce,v.current=E.current.apply(Te,J)},$e=(Ce,J)=>{F&&cancelAnimationFrame(f.current),f.current=F?requestAnimationFrame(Ce):setTimeout(Ce,J)},Ke=Ce=>{if(!w.current)return!1;var J=Ce-i.current,Te=Ce-m.current;return!i.current||J>=t||J<0||Z&&Te>=re},He=Ce=>(f.current=null,q&&p.current?ne(Ce):(p.current=h.current=null,v.current)),Ne=()=>{var Ce=Date.now();if(Ke(Ce))return He(Ce);if(!!w.current){var J=Ce-i.current,Te=Ce-m.current,Fe=t-J,k=Z?Math.min(Fe,re-Te):Fe;$e(Ne,k)}},Je=function(){for(var J=Date.now(),Te=Ke(J),Fe=arguments.length,k=new Array(Fe),Ae=0;Ae<Fe;Ae++)k[Ae]=arguments[Ae];if(p.current=k,h.current=o,i.current=J,Te){if(!f.current&&w.current)return m.current=i.current,$e(Ne,t),N?ne(i.current):v.current;if(Z)return $e(Ne,t),ne(i.current)}return f.current||$e(Ne,t),v.current};return Je.cancel=()=>{f.current&&(F?cancelAnimationFrame(f.current):clearTimeout(f.current)),m.current=0,p.current=i.current=h.current=f.current=null},Je.isPending=()=>!!f.current,Je.flush=()=>f.current?He(Date.now()):v.current,Je},[N,Z,t,re,q,F]);return we}var Kt=ut,pn=e=>{var t=e.labelClass,r=e.labelStyle,o=e.schema,i=e.displayType,m=Mt(),f=m.displayType,p=m.readOnly,h=o.title,v=o.description,E=o.required,w=o.type,F=w==="object",N=o.displayType||i||f||"column";return u.a.createElement("div",{className:t,style:r},u.a.createElement("label",{className:"fr-label-title ".concat(Yt(o,p)||N==="column"?"no-colon":""),title:h},E===!0&&u.a.createElement("span",{className:"fr-label-required"}," *"),u.a.createElement("span",{className:"".concat(F?"b":""," ").concat(N==="column"?"flex-none":"")},h),v&&(N==="row"?u.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":v},u.a.createElement("i",{className:"fr-tooltip-icon"}),u.a.createElement("div",{className:"fr-tooltip-container"},u.a.createElement("i",{className:"fr-tooltip-triangle"}),v)):N==="inline"?null:u.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",v,"\xA0)"))))},un=pn,en={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:url":"url","string:dateTime":"date","string:date":"date","string:year":"date","string:month":"date","string:week":"date","string:quarter":"date","string:time":"time","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"timeRange","range:dateTime":"dateRange","range:date":"dateRange","range:year":"dateRange","range:month":"dateRange","range:week":"dateRange","range:quarter":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function ke(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:en,r=e.type,o=e.format,i=e.enum,m=e.readOnly,f=e.widget,p=[];m&&(p.push("".concat(r,"?readOnly")),p.push("*?readOnly")),i&&(Array.isArray(i)&&(r==="array"&&i.length>6||r!=="array"&&i.length>2)?(p.push("".concat(r,"?enum_long")),p.push("*?enum_long")):(p.push("".concat(r,"?enum")),p.push("*?enum")));var h=f||o;h&&p.push("".concat(r,":").concat(h)),p.push(r);var v="";return p.some(E=>(v=t[E],!!v)),v}var dt={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},ze=n("6UYH"),yt=n("fTA7"),aa=n.n(yt),Qn=n("bd+v"),Fn=n("LB4q"),Un=n.n(Fn),ma=n("Hjg5"),Hn=n("rmht"),ra=n.n(Hn),xa=n("pJsf"),ya=n("g4D/"),ba=n.n(ya),Na=n("LGkk"),Ta=n("rVaU"),Ia=n.n(Ta),Ka=n("b+Mx"),Sa=n("5Dct"),ja=n.n(Sa),wa=n("cUip"),Pa=n("iJl9"),Xn=n.n(Pa),An=(e,t)=>r=>o=>{var i=o.schema,m=Object(S.default)(o,["schema"]),f=Object(O.a)(Object(O.a)({},i),t),p=typeof e=="function"?e(Object(O.a)({schema:f},m)):{},h=Object(O.a)(Object(O.a)({schema:f},m),p),v=Oa(h);return u.a.createElement(r,v)},Oa=e=>{var t=e.onChange,r=e.value,o=e.defaultValue,i=e.schema,m=Object(S.default)(e,["onChange","value","defaultValue","schema"]),f=Object(O.a)({},i),p=f||{},h=p.trigger,v=p.valuePropName,E={},w="value",F=r===void 0?o:r;v&&typeof v=="string"?(w=v,E[v]=F):E.value=F;var N=function(){for(var we=arguments.length,ne=new Array(we),$e=0;$e<we;$e++)ne[$e]=arguments[$e];var Ke=Ve(w,...ne);t(Ke)};h&&typeof h=="string"?E[h]=N:E.onChange=N;var q={disabled:f.disabled||f["ui:disabled"],readOnly:f.readOnly||f["ui:readonly"],hidden:f.hidden||f["ui:hidden"]},Z=Object(O.a)(Object(O.a)(Object(O.a)({},E),{},{schema:f},q),m);return Z},Da=e=>{var t=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var m=t||{},f=m.enum,p=m.enumNames;i=St(f).map((h,v)=>{var E=p&&Array.isArray(p)?p[v]:h,w=typeof E=="string"&&E[0]==="<";return w&&(E=u.a.createElement("span",{dangerouslySetInnerHTML:{__html:E}})),{label:E,value:h}})}return{options:i,mode:"multiple",style:Object(O.a)({width:"100%",marginTop:5},r)}},Ca=An(Da)(ba.a.Group),Ba=Ca,a=n("ypy7"),s=n.n(a),c=n("rNQX");function b(e){var t=e.schema.format,r=i=>{e.disabled||e.readonly||e.onChange(i.color)},o=i=>{e.onChange(i.target.value)};return u.a.createElement("div",{className:"fr-color-picker"},u.a.createElement(s.a,{type:t,animation:"slide-up",color:e.value||"#ffffff",onChange:r}),e.readonly?u.a.createElement("span",null,e.value||"#ffffff"):u.a.createElement(Xn.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var j=n("GBD3"),R=n("wXtC"),y=n.n(R),T=n("wd/R"),I=n.n(T),M=e=>{var t=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=d(r),p=o||void 0;typeof p=="string"&&(r==="week"&&(p=p&&p.substring(0,p.length-1)),r==="quarter"&&(p=p.replace("Q",""))),p&&(p=I()(p,f));var h=(E,w)=>{t(w)},v={value:p,style:Object(O.a)({width:"100%"},i),onChange:h};return r==="dateTime"&&(v.showTime=!0),["week","month","quarter","year"].indexOf(r)>-1&&(v.picker=r),v=Object(O.a)(Object(O.a)({},v),m),u.a.createElement(y.a,v)},L=n("mxgt"),de=n("4ZwL"),K=n.n(de),Ee=e=>{var t=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=d(r),p=o?I()(o,f):void 0,h=(E,w)=>{t(w)},v=Object(O.a)({value:p,style:Object(O.a)({width:"100%"},i),onChange:h},m);return u.a.createElement(K.a,v)},ye=y.a.RangePicker,ie=e=>{var t=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=d(r),p=Array.isArray(o)?o:[],h=Object(Qe.default)(p,2),v=h[0],E=h[1];typeof v=="string"&&typeof E=="string"&&(r==="week"&&(v=v.substring(0,v.length-1),E=E.substring(0,E.length-1)),r==="quarter"&&(v=v.replace("Q",""),E=E.replace("Q","")));var w=v&&E?[I()(v,f),I()(E,f)]:[],F=(q,Z)=>{t(Z)},N={value:w,style:Object(O.a)({width:"100%"},i),onChange:F};return r==="dateTime"&&(N.showTime=!0),["week","month","quarter","year"].indexOf(r)>-1&&(N.picker=r),N=Object(O.a)(Object(O.a)({},N),m),u.a.createElement(ye,N)},be=ie,De=K.a.RangePicker,oe=e=>{var t=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=d(r),p=Array.isArray(o)?o:[],h=Object(Qe.default)(p,2),v=h[0],E=h[1],w=v&&E?[I()(v,f),I()(E,f)]:[],F=(q,Z)=>{t(Z)},N=Object(O.a)({style:Object(O.a)({width:"100%"},i),value:w,onChange:F},m);return u.a.createElement(De,N)},je=oe;function Be(e){var t=e.children;return u.a.createElement("div",{className:"w-100"},t)}var We=n("7LYo"),st=n("5GXF"),bt=n.n(st),rt=bt.a.Panel;function ct(e){var t=e.children,r=e.title,o=Object(S.default)(e,["children","title"]),i=Mt(),m=i.theme,f=i.displayType;return r?m=="1"?u.a.createElement("div",{className:"w-100"},u.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},r),u.a.createElement("div",{style:{marginLeft:f=="row"?0:12}},t)):u.a.createElement("div",{className:"w-100"},u.a.createElement(bt.a,{defaultActiveKey:["1"]},u.a.createElement(rt,{header:u.a.createElement("div",{style:{fontSize:16,fontWeight:500}},r),key:"1",className:"fr-collapse-object"},t))):u.a.createElement("div",{className:"w-100"},t)}var hn=n("ek7I"),Vt=n("FAat"),tn=n.n(Vt),gn=e=>{var t=e.schema,r=e.value,o=e.style,i=e.options,m=Object(S.default)(e,["schema","value","style","options"]),f;if(i&&Array.isArray(i))f=i;else{var p=t||{},h=p.enum,v=p.enumNames;f=St(h).map((F,N)=>{var q=v&&Array.isArray(v)?v[N]:F,Z=typeof q=="string"&&q[0]==="<";return Z&&(q=u.a.createElement("span",{dangerouslySetInnerHTML:{__html:q}})),{label:q,value:F}})}var E=Object(O.a)({options:f,mode:"multiple",style:Object(O.a)({width:"100%"},o)},m),w=Array.isArray(r)?r:void 0;return u.a.createElement(tn.a,Object(Q.default)({value:w},E))},Nn=gn,sa=n("7kJ1"),nn=n("qPIi"),yn=n.n(nn),bn=e=>{var t=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var m=t||{},f=m.enum,p=m.enumNames;i=St(f).map((h,v)=>{var E=p&&Array.isArray(p)?p[v]:h,w=typeof E=="string"&&E[0]==="<";return w&&(E=u.a.createElement("span",{dangerouslySetInnerHTML:{__html:E}})),{label:E,value:h}})}return{options:i,mode:"multiple",style:Object(O.a)({width:"100%",minWidth:120,marginTop:5},r)}},Zn=An(bn)(yn.a.Group),kn=Zn,jn=e=>{var t=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var m=t||{},f=m.enum,p=m.enumNames;i=St(f).map((h,v)=>{var E=p&&Array.isArray(p)?p[v]:h,w=typeof E=="string"&&E[0]==="<";return w&&(E=u.a.createElement("span",{dangerouslySetInnerHTML:{__html:E}})),{label:E,value:h}})}return{options:i,style:Object(O.a)({width:"100%"},r)}},Ft=An(jn)(tn.a),qe=Ft,Tn=n("tCGa"),_e=n("DH6M"),ht=n.n(_e),ue=e=>{var t=e.schema,r=e.value,o=e.onChange,i=e.hideInput,m=e.inputProps,f=Object(S.default)(e,["schema","value","onChange","hideInput","inputProps"]),p=t.max,h=t.min,v=t.step,E={};return(p||p===0)&&(E={max:p}),(h||h===0)&&(E=Object(O.a)(Object(O.a)({},E),{},{min:h})),v&&(E=Object(O.a)(Object(O.a)({},E),{},{step:v})),u.a.createElement("div",{className:"fr-slider"},u.a.createElement(ht.a,Object(Q.default)({style:{flexGrow:1,marginRight:i?0:12}},E,{onChange:o,value:typeof r=="number"?r:h||0},f)),i?null:u.a.createElement(ja.a,Object(Q.default)({},E,m,{style:{width:"90px"},value:r,onChange:o})))},et=ue,mt=n("VDQ/"),dn=n("B8+X"),an=n.n(dn),va=n("tL+A"),Ea=n("QpBz"),qn=n.n(Ea),Va=n("z7Xi");function Wa(e){var t=e.action,r=e.value,o=e.onChange,i=e.uploadProps,m=e.buttonProps,f=Object(O.a)({name:"file",type:"file",action:t,onChange(v){v.file.status==="done"?(qn.a.success("".concat(v.file.name," \u4E0A\u4F20\u6210\u529F")),o(v.file.response.url)):v.file.status==="error"&&qn.a.error("".concat(v.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},i),p={icon:u.a.createElement(Va.a,null),children:"\u4E0A\u4F20"},h=Object(O.a)(Object(O.a)({},p),m);return u.a.createElement("div",{className:"fr-upload-mod"},u.a.createElement(an.a,Object(Q.default)({},f,{className:"fr-upload-file"}),u.a.createElement(Ut.a,h)),r&&u.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var Sr=n("/xgg"),Ja=n("aOJk"),Ya=n.n(Ja),Ga=n("mpQp"),Qa="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Ua=e=>{var t=e.value;return u.a.createElement(Ya.a,{content:u.a.createElement("img",{src:t||Qa,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},u.a.createElement(Ga.a,null))};function Ha(e){var t=e.value,r=Object(S.default)(e,["value"]);return u.a.createElement(Xn.a,Object(Q.default)({value:t,addonAfter:u.a.createElement(Ua,{value:t})},r))}var Xa=e=>{var t=e.value,r=z(t);return r?u.a.createElement("a",{target:"_blank",href:t},"\u6D4B\u8BD5\u94FE\u63A5"):u.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function Za(e){var t=e.value,r=Object(S.default)(e,["value"]);return u.a.createElement(Xn.a,Object(Q.default)({value:t,addonAfter:u.a.createElement(Xa,{value:t})},r))}function ka(e){var t=e.value,r=e.schema,o="-";if(r.type==="boolean")o=t===!0?"\u2714":"\u2718";else if(Array.isArray(r.enum)&&Array.isArray(r.enumNames)){if(["string","number"].indexOf(typeof t)>-1){var i=r.enum.indexOf(t);o=r.enumNames[i]||"-"}else if(Array.isArray(t)){var m="-";t.forEach(f=>{var p=r.enum.indexOf(f),h=r.enumNames[p];h&&(m+=","+h)}),o=m.replace("-,","")}}else typeof t=="number"?o=String(t):typeof t=="string"&&(o=t);return u.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var qa=Xn.a.TextArea,_a=An(e=>{var t=e.style;return{style:Object(O.a)({width:"100%"},t)}})(ja.a),er=An(e=>{var t=e.style;return{style:Object(O.a)({marginTop:5},t)}})(Ia.a),tr=An(e=>{var t=e.autoSize;return{autoSize:t||{minRows:3}}})(qa),nr=e=>{var t=e.style,r=Object(S.default)(e,["style"]);return u.a.createElement(ba.a,Object(Q.default)({style:Object(O.a)({paddingTop:4,paddingBottom:4},t)},r))},ar=e=>{var t=e.style,r=Object(S.default)(e,["style"]);return u.a.createElement(ra.a,Object(Q.default)({style:Object(O.a)({width:"100%"},t)},r))},rr=e=>{var t=e.style,r=Object(S.default)(e,["style"]);return u.a.createElement(Un.a,Object(Q.default)({style:Object(O.a)({width:"100%"},t)},r))},Ra={input:Xn.a,checkbox:nr,checkboxes:Ba,color:b,date:M,time:Ee,dateRange:be,timeRange:je,imageInput:Ha,url:Za,list:Be,map:ct,multiSelect:Nn,number:_a,radio:kn,select:qe,slider:et,switch:er,textarea:tr,upload:Wa,html:ka,rate:aa.a,treeSelect:ar,cascader:rr},Dr=Object.keys(Ra),sr=e=>u.a.createElement("div",null,u.a.createElement("div",{style:{color:"red"}},"schema\u672A\u5339\u914D\u5230\u5C55\u793A\u7EC4\u4EF6\uFF1A"),u.a.createElement("div",null,JSON.stringify(e))),ir=e=>{var t=e.schema,r=e.onChange,o=e.value,i=e.children,m=e.onItemChange,f=e.formData,p=e.getValue,h=e.readOnly,v=e.dataPath,E=e.dataIndex,w=Vn(),F=w.widgets,N=w.mapping,q=ke(t,N),Z=t.widget||t["ui:widget"];if(Z&&F[Z]&&(q=Z),h&&!jt(t)&&!xt(t)&&(q="html"),!q)return q="input",u.a.createElement(sr,{schema:t});var re=F[q],we=dt[q],ne=Object(O.a)({schema:Object(O.a)(Object(O.a)({},t),we),onChange:r,value:o,children:i},t.props);["title","placeholder","disabled","format"].forEach(Ke=>{t[Ke]&&(ne[Ke]=t[Ke])}),t.default!==void 0&&(ne.defaultValue=t.default),t.props&&(ne=Object(O.a)(Object(O.a)({},ne),t.props)),ne.addons={onItemChange:m,setValue:m,getValue:p,formData:f,dataPath:v,dataIndex:E};var $e=Oa(ne);return u.a.createElement(re,$e)},or=(e,t)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:e.value===t.value&&JSON.stringify(e.schema)===JSON.stringify(t.schema),Fa=u.a.memo(ir,or),lr=e=>{var t=e.$id,r=e.dataIndex,o=e.item,i=e.labelClass,m=e.labelStyle,f=e.contentClass,p=e.hasChildren,h=e.children,v=e.errorFields,E=v===void 0?[]:v,w=e.hideTitle,F=e.displayType,N=o.schema,q=Mt(),Z=q.onItemChange,re=q.formData,we=q.setEditing,ne=q.touchKey,$e=q.debounceInput,Ke=q.readOnly,He=Tt(t,r),Ne=E.find(At=>At.name===He),Je=Ne&&Ne.error,Ce=Array.isArray(Je)&&Je.length>0,J=Ce?f+" ant-form-item-has-error":f,Te=kt(re,He),Fe=At=>{if(At==="#"||!At)return re;if(typeof At=="string")return kt(re,At);console.error("path has to be a string")},k={},Ae=Kt(we,350),tt=Ke!==void 0?Ke:N.readOnly,it=At=>{ne(He),$e&&(we(!0),Ae(!1)),typeof He=="string"&&Z(He,At)},Et={labelClass:i,labelStyle:m,schema:N,displayType:F},wt=F==="inline"||tt===!0,Wt={message:Je,schema:N,displayType:F,hideValidation:wt},On={className:i,style:m},rn=!w&&!!N.title;w&&N.title&&(N.placeholder=N.placeholder||N.title);var En={schema:N,readOnly:tt,onChange:it,getValue:Fe,formData:re,value:Te,onItemChange:Z,dataIndex:r,dataPath:He};if(En.children=p?h:Yt(N,tt)?N.title:null,Yt(N,tt))return u.a.createElement(u.a.Fragment,null,rn&&u.a.createElement("div",On),u.a.createElement("div",{className:J,style:k},u.a.createElement(Fa,En),u.a.createElement(Ht,Wt)));var Jt=u.a.createElement(un,Et);return jt(N)?(Jt=u.a.createElement("div",{style:{display:"flex"}},Jt,u.a.createElement(Ht,Wt)),u.a.createElement("div",{className:J,style:k},u.a.createElement(Fa,Object(Q.default)({},En,{message:Je,title:rn?Jt:void 0})))):u.a.createElement(u.a.Fragment,null,rn&&Jt,u.a.createElement("div",{className:"".concat(J," ").concat(w?"fr-content-no-title":""),style:k},u.a.createElement(Fa,En),u.a.createElement(Ht,Wt)))},ur=lr,dr=e=>{var t=e.id,r=t===void 0?"#":t,o=e._item,i=e.dataIndex,m=i===void 0?[]:i,f=e.hideTitle,p=f===void 0?!1:f,h=e.hideValidation,v=h===void 0?!1:h,E=e.debugCss,w=Object(S.default)(e,["id","_item","dataIndex","hideTitle","hideValidation","debugCss"]),F=Object(B.useRef)(),N=Mt(),q=N.displayType,Z=N.column,re=N.flatten,we=N.errorFields,ne=N.labelWidth,$e=N.readOnly,Ke=N.isEditing,He=N.formData,Ne=o||re[r];if(!Ne)return null;var Je=Ne.schema,Ce=Tt(r,m),J=A(Je);if(Ke&&F.current?J=F.current:(fe(J)&&(J=pe(J,He,Ce)),F.current=J),J.hidden)return null;var Te=J.displayType||w.displayType||q||"column",Fe=xt(J),k=jt(J),Ae=k||Fe,tt=Yt(J,$e),it=J.width||J["ui:width"],Et="fr-field ".concat(Te==="inline"?"":"w-100"," flex"),wt="fr-label",Wt="fr-content";switch(J.type){case"object":k&&(J.title&&(wt+=" fr-label-object"),Et+=" fr-field-object");break;case"array":Fe&&(J.title&&(wt+=" fr-label-list"),Et+=" fr-field-column");break;case"boolean":tt&&(Wt+=" fr-content-column",Et+=" flex ".concat(Te==="column"?"flex-column":""));break;default:}if(!Ae&&!tt)if(Te==="column")switch(Et+=" flex-column",wt+=" fr-label-column",Wt+=" fr-content-column",J.type){case"object":break;case"array":J.title&&!J.enum;break;case"boolean":break;default:}else Te==="row"&&(Et+="",wt+=" fr-label-row",Wt+=" fr-content-row",!k&&!tt&&(wt+=" flex-shrink-0 fr-label-row",Wt+=" flex-grow-1 relative"));var On={};k||(it?On={width:it,paddingRight:"12px"}:Z>1&&(On={width:"calc(100% /".concat(Z,")"),paddingRight:"12px"}));var rn=Ue("labelWidth",r,re)||ne,En=D(rn)?Number(rn):l(rn)?rn:110,Jt={width:En};(Ae||Te==="column")&&(Jt={flexGrow:1}),Te==="inline"&&(Jt={marginTop:5,paddingLeft:12},wt="",Wt+=" fr-content-inline",Et.indexOf("fr-field-object")===-1&&(Et+=" fr-field-inline"));var At=Ne.children&&Ne.children.length>0,fa={$id:r,dataIndex:m,item:Object(O.a)(Object(O.a)({},Ne),{},{schema:J}),labelClass:wt,labelStyle:Jt,contentClass:Wt,errorFields:we,hasChildren:At,displayType:Te,hideTitle:p,hideValidation:v},_n=At?u.a.createElement("div",{className:"flex flex-wrap"},u.a.createElement(at,{dataIndex:m,errorFields:we,displayType:Te,hideTitle:p},Ne.children)):null,oa=At?u.a.createElement(Rt,{parentId:r,dataIndex:m,errorFields:we,displayType:Te,hideTitle:p},Ne.children):null;return u.a.createElement("div",{style:On,className:"".concat(Et," ").concat(E?"debug":"")},u.a.createElement(ur,fa,k&&_n,Fe&&oa))},ia=dr,cr=n("SA0R"),mr=n.n(cr),Cr=n("OVFa"),Rr=n("cFvS"),Xt="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",vr={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:Xt,method:Xt,array:Xt,object:Xt,number:Xt,date:Xt,boolean:Xt,integer:Xt,float:Xt,regexp:Xt,email:Xt,url:Xt,hex:Xt},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},Zt="${title} is not a valid ${type}",fr={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:Zt,method:Zt,array:Zt,object:Zt,number:Zt,date:Zt,boolean:Zt,integer:Zt,float:Zt,regexp:Zt,email:Zt,url:Zt,hex:Zt},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},pr=n("KpVd"),Aa=e=>{var t=e.formData,r=e.schema,o=r===void 0?{}:r,i=e.isRequired,m=i===void 0?!0:i,f=e.touchedKeys,p=f===void 0?[]:f,h=e.locale,v=h===void 0?"cn":h,E=e.validateMessages,w=E===void 0?{}:E;if(Object.keys(o).length===0)return Promise.resolve();var F=$t({schema:o,isRequired:m}).fields,N=[];m||p.forEach(ne=>{var $e=Ln(ne,o),Ke=Object(U.get)(t,ne);if(!Ke&&$e.required){var He=$e.message||w.required||"${title}\u5FC5\u586B";N.push({name:ne,error:[He]})}});var q=vr,Z=fr,re;try{re=new pr.a(F)}catch(ne){return Promise.resolve([])}var we=v==="en"?Z:q;return Object(U.merge)(we,w),re.messages(we),re.validate(t||{}).then(ne=>N.length>0?N:[]).catch(ne=>{var $e=ne.errors,Ke=ne.fields,He=St($e).map(Je=>{var Ce=sn(Je.field);return{name:Ce,error:[Je.message]}});He=[...He,...N];var Ne=[];return He.forEach(Je=>{var Ce=Ne.findIndex(J=>J.name===Je.name);Ce===-1?Ne.push(Je):Ne[Ce].error=[...Ne[Ce].error,...Je.error]}),Ne})},Fr={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},Ar={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},$a=(e,t)=>{var r=La(e,t);return r=Ot(r),r=Kn(r,t),r=Lt(r),console.log(r,"asdgghrth"),r},La=(e,t)=>{var r=A(e),o=[],i=[],m=[],f=h=>Array.isArray(h)&&h.every(v=>typeof v=="string");Object.keys(t).forEach(h=>{var v=t[h]&&t[h].schema&&t[h].schema.bind,E=h.replace("[]","");v===!1?o.push(E):typeof v=="string"?i.push({key:E,bind:v}):f(v)&&m.push({key:E,bind:v})});var p=h=>{o.forEach(v=>{Object(U.unset)(h,v)}),i.forEach(v=>{var E=v.key,w=v.bind,F=Object(U.get)(h,E),N=Object(U.get)(h,w);V(N)&&(F=Object(O.a)(Object(O.a)({},N),F)),Object(U.set)(h,w,F),Object(U.unset)(h,E)}),m.forEach(v=>{var E=v.key,w=v.bind,F=Object(U.get)(h,E);Array.isArray(F)&&F.forEach((N,q)=>{w[q]&&Object(U.set)(h,w[q],N)}),Object(U.unset)(h,E)})};return p(r),r},hr=(e,t)=>{var r=A(e),o=[],i=[],m=p=>Array.isArray(p)&&p.every(h=>typeof h=="string");Object.keys(t).forEach(p=>{var h=t[p]&&t[p].schema&&t[p].schema.bind,v=p.replace("[]","");typeof h=="string"?o.push({key:v,bind:h}):m(h)&&i.push({key:v,bind:h})});var f=p=>{o.forEach(h=>{var v=h.key,E=h.bind,w=Object(U.get)(p,E),F=Object(U.get)(p,v);V(F)&&(w=Object(O.a)(Object(O.a)({},F),w)),Object(U.set)(p,v,w),Object(U.unset)(p,E)}),i.forEach(h=>{var v=h.key,E=h.bind,w=[];E.forEach(F=>{w.push(Object(U.get)(p,F)),Object(U.unset)(p,F)}),Object(U.set)(p,v,w)})};return f(r),r},Ma=e=>{var t=e||{},r=t.formData,o=t.onChange,i=t.onValidate,m=Cn({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),f=Object(Qe.default)(m,2),p=f[0],h=f[1],v=Object(B.useRef)({}),E=Object(B.useRef)({}),w=Object(B.useRef)(!1),F=Object(B.useRef)(),N=Object(B.useRef)("cn"),q=Object(B.useRef)(),Z=Object(B.useRef)({}),re=Object(B.useRef)([]),we=p.formData,ne=p.submitData,$e=p.errorFields,Ke=$e===void 0?[]:$e,He=p.isValidating,Ne=p.outsideValidating,Je=p.isSubmitting,Ce=p.isEditing,J=p.allTouched,Te=p.touchedKeys,Fe=e&&e.hasOwnProperty("formData"),k=Fe?r:we;Z.current=Object(B.useMemo)(()=>Object(U.merge)(xn(v.current),k),[JSON.stringify(k),JSON.stringify(v.current)]),re.current=Te;var Ae=le=>{typeof o=="function"?o(le):h({formData:le})},tt=le=>{if(typeof i=="function"){var nt=le.map(In=>In.name);i(nt)}h({errorFields:le})},it=le=>{if(!(re.current.indexOf(le)>-1)){var nt=[...re.current,le];h({touchedKeys:nt})}};Object(B.useEffect)(()=>{Fe&&typeof i=="function"&&setTimeout(()=>{Aa({formData:Z.current,schema:v.current,isRequired:!0,touchedKeys:re.current,locale:N.current,validateMessages:q.current}).then(le=>{var nt=le.map(In=>In.name);i(nt)})},200)},[]),Object(B.useEffect)(()=>{Aa({formData:Z.current,schema:v.current,isRequired:J,touchedKeys:re.current,locale:N.current,validateMessages:q.current}).then(le=>{tt(le)})},[JSON.stringify(Z.current),J]);var Et=le=>{h({isEditing:le})},wt=(le,nt)=>{if(typeof le=="string"){if(le==="#"){Ae(Object(O.a)({},nt));return}Object(U.set)(Z.current,le,nt),Ae(Object(O.a)({},Z.current))}},Wt=le=>{var nt=le.schema,In=le.flatten,Or=le.beforeFinish,Er=le.locale,xr=le.validateMessages;v.current=nt,E.current=In,F.current=Or,N.current=Er,q.current=xr},On=le=>{var nt=[];Array.isArray(le)?nt=[...le,...Ke]:le&&le.name?nt=[le,...Ke]:console.log("error format is wrong"),nt=Object(U.sortedUniqBy)(nt,In=>In.name),tt(nt)},rn=le=>{var nt=Ke.map(In=>In.name.indexOf(le)===-1);tt(nt)},En=()=>La(Z.current,E.current),Jt=le=>{var nt=hr(le,E.current);Ae(nt)},At=()=>{h({isValidating:!0,allTouched:!0,isSubmitting:!1}),Aa({formData:Z.current,schema:v.current,touchedKeys:[],isRequired:!0,locale:N.current,validateMessages:q.current}).then(le=>{if(le&&le.length>0&&(console.log("submit:",Z.current,le),h({errorFields:le})),typeof F.current=="function"){Promise.resolve($a(Z.current,E.current)).then(nt=>{h({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:nt})});return}Promise.resolve($a(Z.current,E.current)).then(nt=>{h({isValidating:!1,isSubmitting:!0,submitData:nt})})}).catch(le=>{console.log("submit error:",le)})},fa=()=>{h({formData:{},submitData:{},errors:[],touchedKeys:[],allTouched:!1})},_n=()=>h({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),oa=()=>h({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),ea={formData:Z.current,schema:v.current,touchedKeys:re.current,allTouched:J,touchKey:it,onItemChange:wt,setValues:Jt,getValues:En,resetFields:fa,submit:At,submitData:ne,errorFields:Ke,isValidating:He,outsideValidating:Ne,isSubmitting:Je,endValidating:_n,endSubmitting:oa,setErrorFields:On,removeErrorField:rn,isEditing:Ce,setEditing:Et,syncStuff:Wt};return ea},gr=e=>t=>{var r=Ma();return u.a.createElement(e,Object(Q.default)({},t,{form:r}))},za=(e,t)=>{console.log(e,t)};function yr(e){var t=e.widgets,r=e.mapping,o=e.form,i=e.beforeFinish,m=i===void 0?za:i,f=e.onFinish,p=f===void 0?za:f,h=e.displayType,v=h===void 0?"column":h,E=e.schema,w=e.flatten,F=e.debug,N=e.debugCss,q=e.locale,Z=q===void 0?"cn":q,re=e.debounceInput,we=re===void 0?!1:re,ne=e.size,$e=e.configProvider,Ke=e.theme,He=e.validateMessages,Ne=e.watch,Je=Ne===void 0?{}:Ne,Ce=e.config,J=Object(S.default)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","debugCss","locale","debounceInput","size","configProvider","theme","validateMessages","watch","config"]);try{var Te=o.submit}catch(ea){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var Fe=o.submitData,k=o.errorFields,Ae=o.isValidating,tt=o.outsideValidating,it=o.isSubmitting,Et=o.endValidating,wt=o.endSubmitting,Wt=o.syncStuff,On=o.formData,rn=o.isEditing,En=o.setErrorFields,Jt=Object(B.useMemo)(()=>w||Gt(E),[JSON.stringify(w),JSON.stringify(E)]);Object(B.useEffect)(()=>{Wt({schema:E,flatten:Jt,beforeFinish:m,locale:Z,validateMessages:He})},[JSON.stringify(w),JSON.stringify(E)]),Object(B.useEffect)(()=>()=>{o.resetFields()},[]);var At=Object(B.useMemo)(()=>Object(O.a)(Object(O.a)({flatten:Jt},o),{},{displayType:v,theme:Ke,debounceInput:we,debug:F,isEditing:rn},J),[JSON.stringify(Jt),JSON.stringify(On),JSON.stringify(k)]),fa=Object(B.useMemo)(()=>({widgets:Object(O.a)(Object(O.a)({},Ra),t),mapping:Object(O.a)(Object(O.a)({},en),r)}),[]);Object(B.useEffect)(()=>{if(tt===!0){Promise.resolve(m(Object(O.a)({data:Fe,schema:E,errors:k},Ce))).then(ea=>{ea&&En(ea),Et()});return}Ae===!1&&it===!0&&(wt(),p(Fe,k))},[Ae,it,tt]);var _n="";ne==="small"?_n="fr-form-small":ne==="large"&&(_n="fr-form-large");var oa=Object.keys(Je);return u.a.createElement(g.a,Object(Q.default)({locale:mr.a},$e),u.a.createElement(ta.Provider,{value:At},u.a.createElement(Dn.Provider,{value:fa},u.a.createElement("div",{className:"fr-container ".concat(_n)},F?u.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},u.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),u.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),u.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),u.a.createElement("div",null,"allTouched:"+JSON.stringify(o.allTouched)),u.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),u.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),u.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,oa.length>0?oa.map((ea,le)=>u.a.createElement(jr,{key:le.toString(),watchKey:ea,watch:Je,formData:On})):null,u.a.createElement(ia,{debugCss:N})))))}var br=e=>{var t=e.isOldVersion,r=t===void 0?!0:t,o=e.schema,i=Object(S.default)(e,["isOldVersion","schema"]),m=o;return r&&(m=Bn(o)),u.a.createElement(yr,Object(Q.default)({schema:m},i))},Nr=Y.default=br,jr=e=>{var t=e.watchKey,r=e.watch,o=e.formData,i=kt(o,t),m=r[t],f=Object(B.useRef)(!0);return Object(B.useEffect)(()=>{var p=()=>{typeof m=="function"?m(i):m&&typeof m.handler=="function"&&m.handler(i)};if(f.current){var h=m&&m.immediate;h&&p(),f.current=!1}else p()},[JSON.stringify(i)]),null}},trko:function(Ge,Y,n){},"xwS/":function(Ge,Y,n){}}]);
