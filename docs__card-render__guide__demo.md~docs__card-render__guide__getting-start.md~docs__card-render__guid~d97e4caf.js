(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(Ke,Q,t){"use strict";t.r(Q),t.d(Q,"Column",function(){return ee}),t.d(Q,"Line",function(){return Nt}),t.d(Q,"PivotTable",function(){return ae});var ue=t("0Owb"),ie=t("PpiC"),c=t("q1tI"),Z=t.n(c),C=t("06Lf");function O(b){var f=[],w=[];return b.forEach(v=>{v.isDim?f.push(v):w.push(v)}),{metaDim:f,metaInd:w}}function V(b){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(b==null?void 0:b.toPrecision(f))}var p=()=>Z.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function ct(b,f){var w=O(b),v=w.metaDim,F=w.metaInd;if(F.length>=1&&v.length===0){var $="type",G="value";return{xField:$,yField:G,data:f.map(Pe=>F.map(Ce=>{var Ze=Ce.id,tt=Ce.name;return{[$]:Ze,[G]:Pe[Ze]}})).flat(),meta:{[$]:{formatter:Pe=>{var Ce;return((Ce=b.find(Ze=>{var tt=Ze.id;return Pe===tt}))===null||Ce===void 0?void 0:Ce.name)||Pe}}},tooltip:{formatter:Pe=>{var Ce,Ze=Pe[$],tt=Pe[G];return{name:(Ce=b.find(We=>{var ke=We.id;return Ze===ke}))===null||Ce===void 0?void 0:Ce.name,value:tt}}}}}else if(F.length===1&&v.length===1){var ne,re,le,ce=(ne=v.shift())===null||ne===void 0?void 0:ne.id,Oe=(re=F.shift())===null||re===void 0?void 0:re.id;return{data:f,xField:ce,yField:Oe,meta:{[Oe]:{alias:(le=b.find(Pe=>{var Ce=Pe.id;return Ce===Oe}))===null||le===void 0?void 0:le.name}}}}else if(F.length>1&&v.length===1){var Fe,je=(Fe=v.shift())===null||Fe===void 0?void 0:Fe.id,we="value",Te="type";return{data:f.map(Pe=>F.map(Ce=>{var Ze=Ce.id,tt=Ce.name;return{[je]:Pe[je],[we]:Pe[Ze],[Te]:tt}})).flat(),xField:je,yField:we,seriesField:Te,isGroup:!0}}else if(F.length===1&&v.length===2){var $e,Le,Qe;return{data:f,xField:($e=v.shift())===null||$e===void 0?void 0:$e.id,yField:(Le=F.shift())===null||Le===void 0?void 0:Le.id,seriesField:(Qe=v.shift())===null||Qe===void 0?void 0:Qe.id,isGroup:!0}}return{data:f,xField:"",yField:""}}var Ge=b=>{var f=b.className,w=b.style,v=b.meta,F=v===void 0?[]:v,$=b.data,G=$===void 0?[]:$,ne=b.inverted,re=Object(ie.a)(b,["className","style","meta","data","inverted"]);if(ne){var le=ct(F,G),ce=le.xField,Oe=le.yField,Fe=Object(ie.a)(le,["xField","yField"]);return Z.a.createElement(C.b,Object(ue.default)({xField:Oe,yField:ce},Fe,{renderer:"svg",errorTemplate:()=>Z.a.createElement(p,null)},re))}else return Z.a.createElement(C.c,Object(ue.default)({},ct(F,G),{renderer:"svg",errorTemplate:()=>Z.a.createElement(p,null)},re))},ee=Ge,H=t("k1fw"),Et=t("sGjT");function rn(b,f){var w=O(b),v=w.metaDim,F=w.metaInd;if(F.length===1&&v.length===1){var $,G,ne,re=($=v.shift())===null||$===void 0?void 0:$.id,le=(G=F.shift())===null||G===void 0?void 0:G.id;return{data:f,xField:re,yField:le,meta:{[le]:{alias:(ne=b.find(We=>{var ke=We.id;return ke===le}))===null||ne===void 0?void 0:ne.name}}}}else if(F.length===1&&v.length===2){var ce,Oe,Fe;return{data:f,xField:(ce=v.shift())===null||ce===void 0?void 0:ce.id,yField:(Oe=F.shift())===null||Oe===void 0?void 0:Oe.id,seriesField:(Fe=v.shift())===null||Fe===void 0?void 0:Fe.id}}else if(F.length===2&&v.length===2){var je,we,Te,$e,Le=f.map(We=>{var ke=F[0].id,lt=v[1].id,Tt=We[ke],ut=We[lt],Dt=Object(ie.a)(We,[ke,lt].map(Et.a));return Object(H.a)({[v[1].id]:"".concat(ut,"-").concat(F[0].name)},Dt)}),Qe=f.map(We=>{var ke=F[1].id,lt=v[1].id,Tt=We[ke],ut=We[lt],Dt=Object(ie.a)(We,[ke,lt].map(Et.a));return Object(H.a)({[v[1].id]:"".concat(ut,"-").concat(F[1].name)},Dt)});return{data:[Qe,Le],geometryOptions:[{geometry:"line",seriesField:v[1].id},{geometry:"line",seriesField:v[1].id,lineStyle:{lineDash:[5,5]}}],xField:(je=v.shift())===null||je===void 0?void 0:je.id,yField:[(we=F.shift())===null||we===void 0?void 0:we.id,(Te=F.shift())===null||Te===void 0?void 0:Te.id],seriesField:($e=v.shift())===null||$e===void 0?void 0:$e.id}}else if(F.length>1&&v.length===1){var Pe,Ce=(Pe=v.shift())===null||Pe===void 0?void 0:Pe.id,Ze="value",tt="type";return{data:f.map(We=>F.map(ke=>{var lt=ke.id,Tt=ke.name;return{[Ce]:We[Ce],[Ze]:We[lt],[tt]:Tt}})).flat(),xField:Ce,yField:Ze,seriesField:tt}}return{data:f}}var mt=b=>{var f=b.className,w=b.style,v=b.meta,F=v===void 0?[]:v,$=b.data,G=$===void 0?[]:$,ne=b.withArea,re=Object(ie.a)(b,["className","style","meta","data","withArea"]),le=rn(F,G);return ne?Z.a.createElement(C.a,Object(ue.default)({},le,{renderer:"svg",errorTemplate:()=>Z.a.createElement(p,null)},re)):Array.isArray(le.yField)?Z.a.createElement(C.d,Object(ue.default)({},le,{renderer:"svg",errorTemplate:()=>Z.a.createElement(p,null)},re)):Z.a.createElement(C.e,Object(ue.default)({},le,{renderer:"svg",errorTemplate:()=>Z.a.createElement(p,null)},re))},Nt=mt,Lt=t("tJVT"),bt=t("mA+x"),vt=t("aMEK"),ft=t("ARb9"),Ct=b=>{var f=b.className,w=b.style,v=b.showSubtotal,F=v===void 0?!0:v,$=b.subtotalText,G=$===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:$,ne=b.meta,re=ne===void 0?[]:ne,le=b.data,ce=le===void 0?[]:le,Oe=b.size,Fe=Oe===void 0?"middle":Oe,je=b.indicatorSide,we=je===void 0?"top":je,Te=b.leftDimensionLength,$e=Te===void 0?re.length:Te,Le=b.leftExpandable,Qe=Le===void 0?!1:Le,Pe=b.topExpandable,Ce=Pe===void 0?!1:Pe,Ze=b.defaultExpandAll,tt=Ze===void 0?!0:Ze,We=b.cellRender,ke=Object(ie.a)(b,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),lt=Object(c.useState)([]),Tt=Object(Lt.default)(lt,2),ut=Tt[0],Dt=Tt[1],sn=Object(c.useState)([]),Mt=Object(Lt.default)(sn,2),Rt=Mt[0],It=Mt[1],on=O(re),Qt=on.metaDim,vn=on.metaInd,wt=vn.map(Re=>{var Je=Re.id,st=Re.name,nt=Re.isRate;return{name:st,code:Je,align:"right",expression:nt?"AVG(".concat(Je,")"):"SUM(".concat(Je,")")}}),Yt=Qt.filter((Re,Je)=>Je<$e),Xt=Yt.map(Re=>{var Je=Re.id;return Je}),zt=Object(bt.b)(ce,Xt,{includeTopWrapper:!0,isExpand:Qe?Re=>Rt.includes(Re):void 0}),Zt=Object(bt.d)(zt,{indicators:we==="left"?wt:void 0,supportsExpand:Qe,expandKeys:Rt,onChangeExpandKeys:It,generateSubtotalNode:F?Re=>({position:"start",value:Re.path.length===0?G[0]||"\u603B\u8BA1":G[1]||"\u5C0F\u8BA1"}):void 0}),fn=Object(Lt.default)(Zt,1),wn=fn[0],St=Qt.filter((Re,Je)=>Je>=$e),ln=St.map(Re=>{var Je=Re.id;return Je}),Pn=Object(bt.b)(ce,ln,{includeTopWrapper:!0,isExpand:Ce?Re=>ut.includes(Re):void 0}),Sn=Object(bt.d)(Pn,{indicators:we==="top"?wt:void 0,supportsExpand:Ce,expandKeys:ut,onChangeExpandKeys:Dt,generateSubtotalNode:F?Re=>({position:"start",value:Re.path.length===0?G[0]||"\u603B\u8BA1":G[1]||"\u5C0F\u8BA1"}):void 0}),Vt=Object(Lt.default)(Sn,1),pn=Vt[0],hn=Object(bt.c)({data:ce,leftCodes:Xt,topCodes:ln,aggregate:Object(vt.a)(wt)});return Z.a.createElement("div",{style:w,className:"CR-PivotTable CR-PivotTable-".concat(Fe," ").concat(f||"")},Z.a.createElement(bt.a,Object(ue.default)({defaultColumnWidth:100,leftMetaColumns:Qt.filter(Re=>{var Je=Re.id;return Xt.includes(Je)}).map(Re=>{var Je=Re.id,st=Re.name;return{code:Je,name:st}}),leftTree:wn.children,leftTotalNode:wn,topTree:pn.children,topTotalNode:pn,getValue:(Re,Je)=>{var st,nt=(st=hn.get(Re.data.dataKey))===null||st===void 0?void 0:st.get(Je.data.dataKey);return nt==null?void 0:nt[Je.code]},render:(Re,Je,st)=>{var nt;if(We){var Kt=Je.data.dataPath,gn=Kt===void 0?[]:Kt,Pt=st.data.dataPath,un=Pt===void 0?[]:Pt,Wt={};return gn.forEach((Bt,pt)=>{var ht;Wt[(ht=Yt[pt])===null||ht===void 0?void 0:ht.id]=Bt}),un.forEach((Bt,pt)=>{var ht;Wt[(ht=St[pt])===null||ht===void 0?void 0:ht.id]=Bt}),We(Re,Wt,st.code)}return(nt=vn.find(Bt=>{var pt=Bt.id;return pt===st.code}))!==null&&nt!==void 0&&nt.isRate?"".concat(V(Re*100).toFixed(2),"%"):Re}},ke)))},ae=Ct},"4l2o":function(Ke,Q,t){},"8iYR":function(Ke,Q,t){"use strict";t.r(Q),t.d(Q,"basic",function(){return ue}),t.d(Q,"expression",function(){return ie});var ue={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},ie={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},"97ez":function(Ke,Q,t){},ARb9:function(Ke,Q,t){},GYr9:function(Ke,Q,t){},JjdP:function(Ke,Q,t){"use strict";t.r(Q);var ue=t("9og8"),ie=t("WmNS"),c=t.n(ie),Z=t("LtsZ"),C=`import React, { useRef } from 'react';
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

export default Demo;`,O=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,V=`export const basic = {
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
};`,p=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,ct=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ge=`import React, { Component } from 'react';
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

export default Root;`,ee=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,H=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string"
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"]
      }
    }
  }
}`,Et=`import { Select } from 'antd';
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

export default SearchInput;`,rn=`import React from 'react';
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

export default Demo;`,mt=`/* PrismJS 1.16.0
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
}`,Nt=`.markdown p {
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
}`,Lt=`import React from 'react';
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

export default Demo;`,bt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,vt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ft=`import React from 'react';
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

export default Demo;`,Ct=Q.default={"guide-card":{component:Object(Z.dynamic)({loader:function(){var ae=Object(ue.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"oLxE"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ae.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:C}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var b=t("3PQu"),f=t("K+nK"),w=f(t("tJVT")),v=b(t("q1tI")),F=t("36SN"),$=function(){var ne=(0,v.useState)("Line"),re=(0,w.default)(ne,2),le=re[0],ce=re[1],Oe={Line:F.Line,Column:F.Column,PivotTable:F.PivotTable}[le];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return ce("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return ce("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return ce("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(Oe,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return v.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=t("36SN"),v=function(){return f.default.createElement(w.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(G,ne,re){return f.default.createElement("div",null,f.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),f.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(ne).length]}},G),f.default.createElement("p",null,JSON.stringify(ne)),f.default.createElement("p",null,JSON.stringify(re)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var b=t("3PQu"),f=t("K+nK"),w=f(t("tJVT")),v=b(t("q1tI")),F=t("36SN"),$=function(){var ne=(0,v.useState)(!1),re=(0,w.default)(ne,2),le=re[0],ce=re[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:le,onChange:function(){return ce(!le)}})),v.default.createElement(F.PivotTable,{leftExpandable:le,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return v.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var w=f(t("4IMT")),v=f(t("fWQN")),F=f(t("mtLc")),$=f(t("yKVA")),G=f(t("879j")),ne=f(t("q1tI")),re=t("gdfu"),le=b(t("refC")),ce={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},Oe=function(je){(0,$.default)(Te,je);var we=(0,G.default)(Te);function Te(){return(0,v.default)(this,Te),we.apply(this,arguments)}return(0,F.default)(Te,[{key:"render",value:function(){var Le=this.props.form;return ne.default.createElement("div",null,ne.default.createElement(le.default,{form:Le,schema:ce}),ne.default.createElement(w.default,{type:"primary",onClick:Le.submit},"\u63D0\u4EA4"))}}]),Te}(ne.default.Component),Fe=(0,le.connectForm)(Oe);return ne.default.createElement(Fe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var w=f(t("4IMT")),v=f(t("q1tI")),F=t("gdfu"),$=b(t("refC")),G={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},ne=function(){var ce=(0,$.useForm)();return v.default.createElement("div",null,v.default.createElement($.default,{form:ce,schema:G}),v.default.createElement(w.default,{type:"primary",onClick:ce.submit},"\u63D0\u4EA4"))},re=ne;return v.default.createElement(re)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var w=f(t("4IMT")),v=f(t("q1tI")),F=t("gdfu"),$=b(t("refC")),G={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},ne=function(){var ce=(0,$.useForm)(),Oe=function(je,we){we.length>0?alert("errors:"+JSON.stringify(we)):alert("formData:"+JSON.stringify(je,null,2))};return v.default.createElement("div",null,v.default.createElement($.default,{form:ce,schema:G,onFinish:Oe}),v.default.createElement(w.default,{type:"primary",onClick:ce.submit},"\u63D0\u4EA4"))},re=ne;return v.default.createElement(re)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var b=t("3PQu"),f=t("K+nK"),w=f(t("q1tI")),v=b(t("refC")),F={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function $(){var ne=(0,v.useForm)(),re=function(ce,Oe){Oe.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(Oe))):alert(JSON.stringify(ce))};return w.default.createElement("div",null,w.default.createElement(v.default,{form:ne,schema:F,onFinish:re}),w.default.createElement("button",{onClick:ne.submit},"\u63D0\u4EA4"))}var G=$;return w.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("c2mQ")),v=t("8iYR"),F=function(){return f.default.createElement(w.default,{schema:v.basic})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:O},"json/schema.js":{import:"./json/schema",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v=function(G){return{type:"object",displayType:G,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return f.default.createElement("div",null,f.default.createElement("h2",null,"display: row"),f.default.createElement(w.default,{schema:v("row")}),f.default.createElement("h2",null,"display: column"),f.default.createElement(w.default,{schema:v("column")}))};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return f.default.createElement(w.default,{schema:v})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return f.default.createElement(w.default,{readOnly:!0,schema:v})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return f.default.createElement(w.default,{labelWidth:"200",schema:v})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return f.default.createElement(w.default,{schema:v})},$=F;return f.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
          selet1: {
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
              selet1: {
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return f.default.createElement(w.default,{schema:v})},$=F;return f.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
          selet1: {
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return f.default.createElement(w.default,{schema:v})},$=F;return f.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
          selet1: {
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return f.default.createElement(w.default,{schema:v})},$=F;return f.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
          selet1: {
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
                selet1: {
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:function(){var b=t("3PQu"),f=t("K+nK");t("lfLe");var w=f(t("Cp9S"));t("MaXC");var v=f(t("4IMT"));t("tL+A");var F=f(t("QpBz")),$=f(t("tJVT")),G=b(t("q1tI")),ne=t("gdfu"),re=b(t("refC")),le=t("OH0R"),ce=function(){var je=(0,re.useForm)(),we=(0,G.useState)({}),Te=(0,$.default)(we,2),$e=Te[0],Le=Te[1],Qe=function(){(0,le.fakeApi)("xxx/getForm").then(function(Ze){je.setValues({input1:"hello world",select1:"c"})})};(0,G.useEffect)(function(){(0,le.delay)(1e3).then(function(Ce){Le({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Pe=function(Ze,tt){tt.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(tt.map(function(We){return We.name}))):(0,le.fakeApi)("xxx/submit",Ze).then(function(We){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return G.default.createElement("div",{style:{width:"400px"}},G.default.createElement(re.default,{form:je,schema:$e,onFinish:Pe}),G.default.createElement(w.default,null,G.default.createElement(v.default,{onClick:Qe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),G.default.createElement(v.default,{type:"primary",onClick:je.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},Oe=ce;return G.default.createElement(Oe)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ct}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var w=f(t("4IMT"));t("tL+A");var v=f(t("QpBz")),F=f(t("q1tI")),$=t("gdfu"),G=b(t("refC")),ne=t("OH0R"),re={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},le=function(){var Fe=(0,G.useForm)(),je=function($e,Le){Le.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Le.map(function(Qe){return Qe.name}))):(0,ne.fakeApi)("xxx/submit",$e).then(function(Qe){return v.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},we=function($e,Le){return(0,ne.fakeApi)("xxx/validation").then(function(Qe){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(G.default,{form:Fe,schema:re,beforeFinish:we,onFinish:je}),F.default.createElement(w.default,{type:"primary",onClick:Fe.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},ce=le;return F.default.createElement(ce)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ct}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var b=t("3PQu"),f=t("K+nK");t("lfLe");var w=f(t("Cp9S"));t("MaXC");var v=f(t("4IMT"));t("tL+A");var F=f(t("QpBz")),$=f(t("q1tI")),G=t("gdfu"),ne=b(t("refC")),re=t("OH0R"),le={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},ce=function(){var je=(0,ne.useForm)(),we=function(Le,Qe){Qe.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Qe.map(function(Pe){return Pe.name}))):(0,re.fakeApi)("xxx/submit",Le).then(function(Pe){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Te=function(){(0,re.fakeApi)("xxx/getForm").then(function(Le){je.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return $.default.createElement("div",{style:{width:"400px"}},$.default.createElement(ne.default,{form:je,schema:le,onFinish:we}),$.default.createElement(w.default,null,$.default.createElement(v.default,{onClick:Te},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),$.default.createElement(v.default,{type:"primary",onClick:je.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},Oe=ce;return $.default.createElement(Oe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ct}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var b=t("3PQu"),f=t("K+nK"),w=f(t("q1tI")),v=b(t("refC")),F={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},$=function(){var re=(0,v.useForm)();return w.default.createElement(v.default,{form:re,schema:F})},G=$;return w.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("c2mQ")),v=t("8iYR"),F=function(){return f.default.createElement(w.default,{schema:v.expression})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:O},"json/schema.js":{import:"./json/schema",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"widget-demo":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var w=f(t("4IMT"));t("cUip");var v=f(t("iJl9")),F=f(t("0Owb")),$=b(t("q1tI")),G=t("gdfu"),ne=b(t("refC")),re={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},le=function(je){return $.default.createElement(v.default,(0,F.default)({addonBefore:"http://",addonAfter:".com"},je))},ce=function(){var je=(0,ne.useForm)(),we=function(){};return $.default.createElement("div",null,$.default.createElement(ne.default,{form:je,schema:re,widgets:{site:le},onFinish:function($e){return alert(JSON.stringify($e,null,2))}}),$.default.createElement(w.default,{type:"primary",onClick:je.submit},"\u63D0\u4EA4"))},Oe=ce;return $.default.createElement(Oe)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.5"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"widget-demo"}},"docs-playground":{component:Object(Z.dynamic)({loader:function(){var ae=Object(ue.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"BASV"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ae.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:Ge},"main.js":{import:"./main",content:ee},"json/simplest.json":{import:"./json/simplest.json",content:H},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Et},"monaco/index.js":{import:"./monaco",content:rn},"theme.css":{import:"./theme.css",content:mt},"index.css":{import:"./index.css",content:Nt}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.0.5"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(Z.dynamic)({loader:function(){var ae=Object(ue.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"7ZP+"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ae.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{tsx:Lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var b=t("K+nK"),f=b(t("q1tI")),w=t("P2DI"),v=[],F=0;F<6;F++)v.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});var $={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},G=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(ce,Oe){return f.default.createElement("a",{onClick:function(){return alert(ce.title)}},"\u7F16\u8F91")}}],ne=function(){var ce=function(){return{rows:v,total:v.length}};return f.default.createElement(w.TableProvider,null,f.default.createElement(w.Search,{schema:$,api:ce}),f.default.createElement(w.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:G,rowKey:"id"}))},re=ne;return f.default.createElement(re)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),w=b(t("nYSz")),v={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},F=function(){return f.default.createElement("div",{style:{height:"80vh"}},f.default.createElement(w.default,{defaultValue:v}))},$=F;return f.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(Z.dynamic)({loader:function(){var ae=Object(ue.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"PPgD"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ae.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:bt}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(Z.dynamic)({loader:function(){var ae=Object(ue.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"jktF"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ae.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:vt}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(Z.dynamic)({loader:function(){var ae=Object(ue.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"M63W"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ae.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:ft}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},identifier:"generator-settings"}}}},OH0R:function(Ke,Q,t){"use strict";t.r(Q),t.d(Q,"delay",function(){return ue}),t.d(Q,"fakeApi",function(){return ie});var ue=c=>new Promise(Z=>setTimeout(Z,c)),ie=(c,Z)=>(console.group("request:",c),console.log("params:",Z),console.groupEnd(),ue(500))},OVFa:function(Ke,Q,t){},Oxum:function(Ke,Q,t){},P2DI:function(Ke,Q,t){"use strict";t.r(Q),t.d(Q,"Search",function(){return f}),t.d(Q,"Table",function(){return un}),t.d(Q,"TableProvider",function(){return Un}),t.d(Q,"useTable",function(){return mt});var ue=t("Saan"),ie=t("vgIT"),c=t.n(ie),Z=t("0Owb"),C=t("k1fw"),O=t("tL+A"),V=t("QpBz"),p=t.n(V),ct=t("PpiC"),Ge=t("tJVT"),ee=t("q1tI"),H=t.n(ee),Et=Object(ee.createContext)({}),rn=Object(ee.createContext)({}),mt=()=>Object(ee.useContext)(Et),Nt=()=>Object(ee.useContext)(rn),Lt=A=>{var k=Object(ee.useReducer)((Ie,Me)=>{var Ue=Me;typeof Me=="function"&&(Ue=Ue(Ie)),Me.action&&Me.payload&&(Ue=Me.payload,typeof Ue=="function"&&(Ue=Ue(Ie)));var Ye=Object(C.a)(Object(C.a)({},Ie),Ue);return Ye},A),de=Object(Ge.default)(k,2),Se=de[0],Ee=de[1],Ne=(Ie,Me)=>{Ee(Ie)};return[Se,Ne]},bt=t("MaXC"),vt=t("4IMT"),ft=t.n(vt),Ct=t("refC"),ae=A=>{var k=A.clearSearch,de=A.style,Se=de===void 0?{}:de,Ee=A.className,Ne=Ee===void 0?"":Ee,Ie=mt(),Me=Ie.tableState,Ue=Me===void 0?{}:Me,Ye=Ie.refresh,gt=Ue.loading;return H.a.createElement("div",{className:"flex justify-end w-100 ".concat(Ne),style:Se},H.a.createElement(ft.a,{loading:gt,className:"mr",type:"primary",onClick:()=>Ye()},"\u67E5\u8BE2"),H.a.createElement(ft.a,{onClick:k},"\u91CD\u7F6E"))},b=A=>{var k=Object(ee.useState)({}),de=Object(Ge.default)(k,2),Se=de[0],Ee=de[1],Ne=mt(),Ie=Ne.tableState,Me=Ne.setTable,Ue=Ne.refresh,Ye=Ne.syncMethods,gt=Ie.search,qe=A.schema||A.propsSchema,kt=!0;!A.searchOnMount&&A.searchOnMount!==void 0&&(console.log("props.searchOnMount",A.searchOnMount),kt=!1);var $t=Object(ee.useRef)(),Jt=He=>{Me({search:He})},Ut=He=>{try{var _e=100,dt=Object.values(He.properties).filter(Xe=>Xe.hidden?Xe.hidden!==!0:Xe["ui:hidden"]!==!0).map(Xe=>Xe.width?Xe.width:Xe["ui:width"]),dn=dt.lastIndexOf(void 0),At=dt.slice(dn+1).map(Xe=>Number(Xe.substring(0,Xe.length-1))),Ht=At.reduce((Xe,et)=>{var Be=Xe+et;return Be>100?Math.min(100,et):Be},0);return _e=100-Ht,_e<10&&(_e=100),_e+"%"}catch(Xe){return console.error(Xe),"100%"}},qt=()=>{var He=JSON.stringify($t.current)===JSON.stringify(qe);if(qe&&qe.properties){if(Se&&He)return;try{var _e=JSON.parse(JSON.stringify(qe));_e.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:Ut(qe)},Ee(_e)}catch(dt){console.error(dt)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},_t=He=>{if(He.length){Me({checkPassed:!1});return}Me({checkPassed:!0})},ze=Object(Ct.useForm)({formData:gt,onChange:Jt,onValidate:_t}),jt=()=>{ze.setValues({})};if(Object(ee.useEffect)(()=>{A.hidden||qt()},[qe]),Object(ee.useEffect)(()=>{Ye({searchApi:A.api,syncOnSearch:A.onSearch,syncAfterSearch:A.afterSearch}),(A.hidden||kt)&&Ue()},[]),A.hidden)return null;var it=typeof A.searchBtnRender=="function"?A.searchBtnRender(Ue,jt):[];return H.a.createElement("div",{className:"tr-search ".concat(A.className),style:A.style,onKeyDown:He=>{He.keyCode===13&&Ue()}},H.a.createElement(Ct.default,Object(Z.default)({form:ze},A,{schema:Se,displayType:"row",widgets:Object(C.a)({searchBtn:()=>A.searchBtnRender?H.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(it)&&it.map((He,_e)=>H.a.createElement("div",{key:_e.toString(),style:{marginLeft:8}},He))):H.a.createElement(ae,{clearSearch:jt,style:A.searchBtnStyle||{},className:A.searchBtnClassName||""})},A.widgets)})))},f=b,w=t("7kJ1"),v=t("qPIi"),F=t.n(v),$=t("zmYW"),G=t("DtFj"),ne=t.n(G),re=t("lfLe"),le=t("Cp9S"),ce=t.n(le),Oe=t("Wgwc"),Fe=t.n(Oe);function je(A,k){return A.indexOf(k)>-1}var we=A=>je(Object.prototype.toString.call(A),"Object"),Te=A=>typeof A!="string"?!1:A.indexOf("$api.")===0||A.indexOf("$func.")===0,$e=A=>A.indexOf("$api.")===0?A.substring(5):A.indexOf("$func.")===0?A.substring(6):"",Le=(A,k)=>{if(typeof A!="object"||A===null){if(Te(A)){var de=$e(A);return k&&k[de]&&typeof k[de]=="function"?k[de]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return A}if(Array.isArray(A)){var Se=[...A];return Se.map(Ie=>Le(Ie,k))}var Ee=Object(C.a)({},A),Ne=Object.keys(Ee);return Ne.forEach(Ie=>{Ee[Ie]=Le(Ee[Ie],k)}),Ee},Qe=A=>Fe()(A).format("YYYY-MM-DD HH:mm"),Pe=A=>Fe()(A).format("YYYY-MM-DD"),Ce=A=>"\xA5".concat(A).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Ze=(A,k,de)=>{var Se=A;return typeof Se=="function"?Se=Se(k):de&&typeof de=="function"&&de(),Se},tt=t("NcKm"),We=t("lbd2"),ke=t.n(We),lt=t("93XW"),Tt=t("d1El"),ut=t.n(Tt),Dt=(A,k,de)=>de.ellipsis?H.a.createElement(ut.a,{title:Mt(k,de)},A):H.a.createElement("span",null,A),sn=(A,k)=>k.copyable||k.ellipsis?H.a.createElement(ke.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:k.copyable&&A?{text:A,onCopy:()=>p.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:k.ellipsis||!1},Mt(A,k)):Mt(A,k),Mt=(A,k)=>{var de=k.enum||void 0;return de&&de[A]?de[A]:A},Rt=A=>A?H.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},H.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},A)):null,It=(A,k)=>{if(k.valueType==="code")return Rt(A);var de=sn(A,k),Se=Dt(de,A,k);return Se},on=t("WbIG"),Qt=t("hw8t"),vn=t.n(Qt);class wt extends H.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(k){return{hasError:!0,errorInfo:k.message}}componentDidCatch(k,de){console.log(k,de)}render(){return this.state.hasError?H.a.createElement(vn.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var Yt=wt,Xt=t("IehP"),zt=t("3R4v"),Zt=A=>{var k=Object(ee.useState)(!1),de=Object(Ge.default)(k,2),Se=de[0],Ee=de[1],Ne=A.fullScreen;return Se?H.a.createElement(ut.a,{title:"\u9000\u51FA\u5168\u5C4F"},H.a.createElement(Xt.a,{onClick:()=>{document.exitFullscreen(),Ee(!1)}})):H.a.createElement(ut.a,{title:"\u5168\u5C4F"},H.a.createElement(zt.a,{onClick:()=>{if(!document.fullscreenEnabled){p.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(Ee(!0),Ne().catch(Ie=>p.a.error(Ie.message)))}}))},fn=Zt,wn=t("G851"),St=t("ZvzK"),ln=t.n(St),Pn=t("PFYH"),Sn=t("Jv8k"),Vt=t.n(Sn),pn=t("9hi+"),hn=()=>{var A=mt(),k=A.tableState,de=A.setTable;return H.a.createElement(ln.a,{overlay:H.a.createElement(Vt.a,{selectedKeys:[k.tableSize],onClick:Se=>{var Ee=Se.key;de({tableSize:Ee})},style:{width:80}},H.a.createElement(Vt.a.Item,{key:"default"},"\u9ED8\u8BA4"),H.a.createElement(Vt.a.Item,{key:"middle"},"\u4E2D\u7B49"),H.a.createElement(Vt.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},H.a.createElement(ut.a,{title:"\u8868\u683C\u5BC6\u5EA6"},H.a.createElement(pn.a,null)))},Re=hn,Je=t("rLCj"),st=()=>{var A=mt(),k=A.refresh;return H.a.createElement(ut.a,{title:"\u5237\u65B0"},H.a.createElement(Je.a,{onClick:()=>k()}))},nt=st,Kt=A=>H.a.createElement(ce.a,{size:14,style:{fontSize:16,cursor:"pointer"}},H.a.createElement(nt,null),H.a.createElement(Re,null),H.a.createElement(fn,A)),gn=Kt,Pt=A=>{var k,de,Se;A.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var Ee=mt(),Ne=Ee.tableState,Ie=Ee.setTable,Me=Ee.doSearch,Ue=Ne.dataSource,Ye=Ne.pagination,gt=Ne.loading,qe=Ne.api,kt=Ne.tableSize,$t=Object(ee.useRef)(null),Jt=(et,Be)=>{Ie({pagination:Object(C.a)(Object(C.a)({},Ye),{},{current:et,pageSize:Be})}),!(!A.pageChangeWithRequest&&A.pageChangeWithRequest!==void 0)&&Me({current:et,pageSize:Be})},Ut=A.headerTitle,qt=A.toolbarRender,_t=A.columns,ze=A.style,jt=ze===void 0?{}:ze,it=A.className,He=it===void 0?"":it,_e=A.toolbarAction,dt=_e===void 0?!1:_e;_t.map(et=>{var Be=et;if(Be.render)return Be;switch(Be.valueType){case"date":Be.render=at=>It(Pe(at),Be);break;case"dateTime":Be.render=at=>It(Qe(at),Be);break;case"money":Be.render=at=>It(Ce(at),Be);break;case"code":Be.render=at=>It(at,Be);break;case"text":default:Be.render=at=>It(at,Be)}return Be});var dn=Object(C.a)(Object(C.a)({},A),{},{dataSource:Ue,pagination:A.pagination===!1?!1:Object(C.a)(Object(C.a)({onChange:Jt,size:"small"},A.pagination),{},{pageSize:((k=A.pagination)===null||k===void 0?void 0:k.pageSize)||Ye.pageSize,total:((de=A.pagination)===null||de===void 0?void 0:de.total)||Ye.total,current:((Se=A.pagination)===null||Se===void 0?void 0:Se.current)||Ye.current}),loading:gt,size:kt}),At=typeof qt=="function"?qt():[],Ht=Ut||At&&At.length||Array.isArray(qe),Xe=()=>{var et;return Promise.resolve((et=$t.current)===null||et===void 0?void 0:et.requestFullscreen())};return Object(ee.useEffect)(()=>{A.size&&Ie({tableSize:A.size})},[]),H.a.createElement(Yt,null,H.a.createElement("div",{className:"tr-table-wrapper ".concat(He),style:jt,ref:$t},H.a.createElement("div",{className:Ht?"tr-table-top":"tr-table-top-nohead"},H.a.createElement("div",{className:"tr-table-title"},H.a.createElement(Wt,{title:Ut})),H.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},H.a.createElement(ce.a,{align:"center"},H.a.createElement(ce.a,{size:8,style:{marginRight:8}},Array.isArray(At)&&At.map((et,Be)=>H.a.createElement("div",{key:Be.toString()},et))),dt&&H.a.createElement(gn,{fullScreen:Xe})))),H.a.createElement(ne.a,dn)))},un=Pt,Wt=A=>{var k=A.title,de=mt(),Se=de.tableState,Ee=de.setTable,Ne=de.doSearch,Ie=Se.tab,Me=Se.api,Ue=Ie||0,Ye=gt=>{var qe=gt.target.value;Ee({tab:qe}),Ne({tab:qe})};return typeof Me=="function"?H.a.createElement("div",{className:"tr-single-tab"},k):Me&&Array.isArray(Me)?Me.length===1?H.a.createElement("div",{className:"tr-single-tab"},Me[0].name):H.a.createElement(H.a.Fragment,null,H.a.createElement(F.a.Group,{onChange:Ye,value:Ue},Me.map((gt,qe)=>H.a.createElement(F.a.Button,{key:qe.toString(),value:qe},gt.name))),k&&H.a.createElement("div",{className:"tr-extra-tab"},k)):H.a.createElement("div",{className:"tr-single-tab"})},Bt=t("yDJ3"),pt=t.n(Bt),ht=t("SA0R"),Vn=t.n(ht),Kn=t("k/c8"),sr=t("GYr9"),Wn=A=>{var k=Lt({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:10,total:1},tableSize:"default",checkPassed:!0}),de=Object(Ge.default)(k,2),Se=de[0],Ee=de[1],Ne=Object(ee.useRef)(),Ie=Object(ee.useRef)(),Me=Object(ee.useRef)(),Ue=Se.pagination,Ye=Se.search,gt=Se.tab,qe=Se.checkPassed,kt=mt(),$t=(ze,jt)=>{if(delete Ye.searchBtn,Ie.current&&Ie.current(Ye),!qe)return;var it=ze||{},He=it.current,_e=it.pageSize,dt=it.tab,dn=Object(ct.a)(it,["current","pageSize","tab"]),At=He||1,Ht=_e||10,Xe=gt;["string","number"].indexOf(typeof dt)>-1&&(Xe=dt);var et={current:At,pageSize:Ht};if(typeof Ne.current=="function")at(Ne.current);else if(Array.isArray(Ne.current)){var Be=pt()(Ne.current,"[".concat(Xe,"].api"));typeof Be=="function"?at(Be):p.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else console.log(Ne.current),p.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function at(Cn){Ee({loading:!0});var yn=Object(C.a)(Object(C.a)(Object(C.a)(Object(C.a)({},Ye),jt),dn),et);Array.isArray(Cn)&&(yn=Object(C.a)(Object(C.a)({},yn),{},{tab:dt})),Promise.resolve(Cn(yn)).then(en=>{var Dn=en.rows,bn=en.total,Rn=en.pageSize,An=Object(ct.a)(en,["rows","total","pageSize"]);Ee(Object(C.a)(Object(C.a)({loading:!1,dataSource:Dn},An),{},{pagination:Object(C.a)(Object(C.a)({},et),{},{total:bn,pageSize:Rn||Ht})})),Me.current(Object(C.a)({rows:Dn,total:bn,pageSize:Rn},An))}).catch(en=>{Ee({loading:!1})})}},Jt=(ze,jt)=>{var it=ze&&ze.stay||!1,He=ze&&ze.tab,_e=jt||{};$t(Object(C.a)(Object(C.a)({},ze),{},{current:it?Ue.current:1,tab:He,pageSize:Ue.pageSize}),_e)},Ut=ze=>{["string","number"].indexOf(typeof ze)>-1?(Ee({tab:ze}),Jt({tab:ze})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},qt=ze=>{var jt=ze.searchApi,it=ze.syncOnSearch,He=ze.syncAfterSearch;Ne.current=jt,Ie.current=it,Me.current=He,Ee({api:jt})},_t={tableState:Se,setTable:Ee,doSearch:$t,refresh:Jt,changeTab:Ut,syncMethods:qt};return _t},Jn=(A,k)=>{var de=Wn(A);return Object(ee.useImperativeHandle)(k,()=>de),H.a.createElement(c.a,{locale:Vn.a},H.a.createElement(Et.Provider,Object(Z.default)({},A,{value:de})))},Un=Object(ee.forwardRef)(Jn)},RnhZ:function(Ke,Q,t){var ue={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function ie(Z){var C=c(Z);return t(C)}function c(Z){if(!t.o(ue,Z)){var C=new Error("Cannot find module '"+Z+"'");throw C.code="MODULE_NOT_FOUND",C}return ue[Z]}ie.keys=function(){return Object.keys(ue)},ie.resolve=c,Ke.exports=ie,ie.id="RnhZ"},Zs1V:function(Ke){Ke.exports=JSON.parse("{}")},bQjt:function(Ke,Q,t){"use strict";t.r(Q);var ue=t("0Owb"),ie=t("q1tI"),c=t.n(ie),Z=t("refC"),C=O=>{var V=Object(Z.useForm)();return c.a.createElement(Z.default,Object(ue.default)({form:V},O))};Q.default=C},c2mQ:function(Ke,Q,t){"use strict";t.r(Q);var ue=t("q1tI"),ie=t.n(ue),c=t("refC"),Z=C=>{var O=C.schema,V=Object(c.useForm)();return ie.a.createElement("div",null,ie.a.createElement(c.default,{form:V,schema:O}))};Q.default=Z},cFvS:function(Ke,Q,t){},fK6R:function(Ke,Q,t){},fVyk:function(Ke,Q,t){},gO06:function(Ke,Q,t){},iU8R:function(Ke,Q,t){},nYSz:function(Ke,Q,t){"use strict";t.r(Q),t.d(Q,"defaultSettings",function(){return $e}),t.d(Q,"defaultCommonSettings",function(){return Oe}),t.d(Q,"defaultGlobalSettings",function(){return Le}),t.d(Q,"fromFormily",function(){return nr}),t.d(Q,"toFormily",function(){return ar}),t.d(Q,"fromFormRender",function(){return aa}),t.d(Q,"toFormRender",function(){return ra});var ue=t("0Owb"),ie=t("q1tI"),c=t.n(ie),Z=t("kvAW"),C=t("qJlv"),O=t("k1fw"),V=t("tJVT"),p=Object(ie.createContext)(()=>{}),ct=Object(ie.createContext)({}),Ge=()=>Object(ie.useContext)(p),ee=()=>Object(ie.useContext)(ct),H=a=>{var r=Object(ie.useReducer)((m,j)=>{var R=j;typeof j=="function"&&(R=R(m)),j.action&&j.payload&&(R=j.payload,typeof R=="function"&&(R=R(m)));var N=Object(O.a)(Object(O.a)({},m),R);return N},a),i=Object(V.default)(r,2),d=i[0],l=i[1],h=(m,j)=>{l(m)};return[d,h]};function Et(a,r,i){var d=Object(ie.useRef)();Object(ie.useEffect)(()=>{d.current=a},[a]);var l=Object(ie.useRef)();return Object(ie.useEffect)(()=>{if(!i)return;function h(){d&&d.current&&d.current()}if(h(),r!==null)return l.current=setInterval(h,r),()=>clearInterval(l.current)},[r,i]),()=>clearInterval(l.current)}function rn(a){var r=Object(ie.useRef)();return Object(ie.useEffect)(()=>{r.current=a},[a]),r.current}var mt=a=>{var r=Object(ie.useState)(!1),i=Object(V.default)(r,2),d=i[0],l=i[1],h;try{h=localStorage.getItem(a)}catch(m){}return h||(l(!0),localStorage.setItem(a,JSON.stringify(!0))),d},Nt=()=>{var a=Object(ie.useState)(!1),r=Object(V.default)(a,2),i=r[0],d=r[1],l=()=>d(!i);return[i,l]},Lt=a=>{var r=Object(ie.useState)(a),i=Object(V.default)(r,2),d=i[0],l=i[1];return[d,l]},bt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",d=()=>{var N=localStorage.getItem(i);if(N)try{return JSON.parse(N)}catch(B){return r}return r},l=Object(ie.useState)(d()),h=Object(V.default)(l,2),m=h[0],j=h[1],R=N=>{j(N),localStorage.setItem(i,JSON.stringify(N))};return[m,R]},vt=t("fwXI"),ft=t("CC+v"),Ct=t.n(ft),ae=t("MaXC"),b=t("4IMT"),f=t.n(b),w=t("tL+A"),v=t("QpBz"),F=t.n(v),$=t("PpiC"),G=t("cUip"),ne=t("iJl9"),re=t.n(ne),le=t("WWur"),ce=t.n(le),Oe={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string","ui:widget":"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},"ui:width":{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string","ui:widget":"percentSlider"},"ui:labelWidth":{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number","ui:widget":"slider",max:400,"ui:options":{hideNumber:!0}},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},"ui:readonly":{title:"\u7F6E\u7070",type:"boolean"},required:{title:"\u5FC5\u586B",type:"boolean"}},Fe=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],"ui:widget":"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],"ui:widget":"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}}],je=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime","ui:options":{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number","ui:widget":"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],we=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},"ui:options":{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],Te=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date","ui:options":{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],$e=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:Fe,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:je},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:we},{title:"\u6A21\u677F",widgets:Te}],Le={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"string",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],"ui:options":{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number","ui:widget":"slider",max:300,"ui:options":{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],"ui:widget":"radio"}}},Qe=t("gO06"),Pe=t("4b23"),Ce=t.n(Pe),Ze=t("JBAE"),tt=t.n(Ze);function We(a,r){return a.indexOf(r)>-1}var ke=a=>We(Object.prototype.toString.call(a),"Object");function lt(a){try{return JSON.parse(JSON.stringify(a))}catch(r){return a}}function Tt(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function ut(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function Dt(a,r){if(a===void 0&&r===void 0)return!0;if(a===void 0||r===void 0)return!1;if(a===null&&r===null)return!0;if(a===null||r===null)return!1;if(a.constructor!==r.constructor)return!1;if(a.constructor===Array){if(a.length!==r.length)return!1;for(var i=0;i<a.length;i++)if(a[i].constructor===Array||a[i].constructor===Object){if(!Dt(a[i],r[i]))return!1}else if(a[i]!==r[i])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(r).length)return!1;for(var d=0;d<Object.keys(a).length;d++){var l=Object.keys(a)[d];if(a[l]&&typeof a[l]!="number"&&(a[l].constructor===Array||a[l].constructor===Object)){if(!Dt(a[l],r[l]))return!1}else if(a[l]!==r[l])return!1}}else if(a.constructor===String||a.constructor===Number)return a===r;return!0}function sn(a){var r;switch(a){case"date":r="YYYY-MM-DD";break;case"time":r="HH:mm:ss";break;default:r="YYYY-MM-DD HH:mm:ss"}return r}function Mt(a){return a.find((r,i,d)=>i!==d.findIndex(l=>JSON.stringify(r)===JSON.stringify(l)))}function Rt(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=on(a),d=i.map(m=>{var j=m.name,R=m.schema,N=R.type,B=R.enum,se=R.properties,L=R.items,ye=N==="object"&&se,fe=N==="array"&&L&&!B,Y=j&&r[m.name];if(!Y)return m;if(fe){var te=Rt(L,Y.items||{});return Object(O.a)(Object(O.a)({},m),{},{schema:Object(O.a)(Object(O.a)(Object(O.a)({},m.schema),Y),{},{items:te})})}if(ye){var me=Rt(m.schema,Y);return Object(O.a)(Object(O.a)({},m),{},{schema:me})}return Object(O.a)(Object(O.a)({},m),{},{schema:Object(O.a)(Object(O.a)({},m.schema),Y)})}),l={};d.forEach(m=>{l[m.name]=m.schema});var h={};return Object.keys(r).forEach(m=>{typeof m=="string"&&m.substring(0,3)==="ui:"&&(h[m]=r[m])}),It(l)?Object(O.a)(Object(O.a)({},a),h):Object(O.a)(Object(O.a)(Object(O.a)({},a),h),{},{properties:l})}function It(a){return Object.keys(a).length===0}function on(a){if(!a)return[];var r=a.properties,i=a.items,d=a.type;if(!r&&!i)return[];var l={};return d==="object"&&(l=r),d==="array"&&(l=i),Object.keys(l).map(h=>({schema:l[h],name:h}))}function Qt(){}var vn=a=>Function('"use strict";return ('+a+")")(),wt=(a,r,i)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(i),`;
    const formData = `).concat(JSON.stringify(r),`;
    return (`).concat(a,")"))();function Yt(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function Xt(a){return Object.keys(a).some(r=>typeof a[r]=="function"?!0:typeof a[r]=="string"?Yt(a[r]):typeof a[r]=="object"?Xt(a[r]):!1)}function zt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2?arguments[2]:void 0,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=tt()(a);l.$id||(l.$id=r);var h=[],m=l.type==="object"&&l.properties,j=l.type==="array"&&l.items&&l.items.properties;return m&&(Object.entries(l.properties).forEach(R=>{var N=Object(V.default)(R,2),B=N[0],se=N[1],L=r+"/"+B;h.push(L),zt(se,L,r,d)}),delete l.properties),j&&(Object.entries(l.items.properties).forEach(R=>{var N=Object(V.default)(R,2),B=N[0],se=N[1],L=r+"/"+B;h.push(L),zt(se,L,r,d)}),delete l.items.properties),l.type&&(d[r]={parent:i,schema:l,children:h}),d}var Zt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=r.split("/");return i[i.length-1]},fn=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",d=r.split("/");return(typeof i=="string"||typeof i=="number")&&(d[d.length-1]=i),d.join("/")},wn=a=>({parent:a.parent,schema:Object(O.a)({},a.schema),data:a.data,children:a.children});function St(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d={},l=a[r],h=tt()(l);return h&&(d=Object(O.a)({},h.schema),i&&d.$id&&delete d.$id,h.children.length>0&&h.children.forEach(m=>{var j=m;if(!!a[m]){try{i&&(j=a[m].schema.$id)}catch(N){console.log("catch",N)}var R=Zt(j);d.type==="object"&&(d.properties||(d.properties={}),d.properties[R]=St(a,m,i)),d.type==="array"&&d.items&&d.items.type==="object"&&(d.items.properties||(d.items.properties={}),d.items.properties[R]=St(a,m,i))}})),d}var ln=(a,r)=>{var i=zt(r);return a in i&&delete i[a],St(i)},Pn=(a,r)=>{var i=Object(O.a)({},a);try{var d=a[r],l=r+Ce()(6),h=i[d.parent].children,m=h.findIndex(j=>j===r);return h.splice(m+1,0,l),i[l]=tt()(i[r]),i[l].schema.$id=l,[i,l]}catch(j){return console.error(j,"catcherror"),[a,r]}},Sn=a=>{var r=a.id,i=a.key,d=a.schema,l=a.subSchema,h=zt(d),m=fn(r,i)+"$$"+Ce()(10);if(r in h){var j=h[r].parent;if(j&&j in h){var R=h[j].children;try{var N=R.findIndex(B=>B===r);R.splice(N+1,0,m)}catch(B){console.error(B.message)}}try{h[m]={parent:h[r].parent,schema:l,children:[]},h[m].schema.$id=m}catch(B){console.error(B.message)}}return[St(h),m]},Vt=a=>{var r=a.selected,i=a.name,d=a.schema,l=a.flatten,h=r||"#",m;if(h&&h[0]==="0"||h==="#"){var j=Object(O.a)({},l);try{var R=h.substring(1);m=R+"/"+i+"_"+Ce()(6),h==="#"&&(m="#/"+i+"_"+Ce()(6),R="#");var N=j[R].children;N.push(m);var B={parent:R,schema:Object(O.a)(Object(O.a)({},d),{},{$id:m}),data:void 0,children:[]};j[m]=B}catch(q){console.error(q,"catch")}return{newId:m,newFlatten:j}}var se=i+"_"+Ce()(6),L=r.split("/");L.pop(),L.push(se),m=L.join("/");var ye=Object(O.a)({},l);try{var fe=ye[r],Y=ye[fe.parent].children,te=Y.findIndex(q=>q===r);Y.splice(te+1,0,m);var me={parent:fe.parent,schema:Object(O.a)(Object(O.a)({},d),{},{$id:m}),data:void 0,children:[]};ye[m]=me}catch(q){console.error(q)}return{newId:m,newFlatten:ye}},pn=a=>{var r=a.dragId,i=a.dragItem,d=a.dropId,l=a.position,h=a.flatten,m=d==="#"?"inside":l,j=Object(O.a)({},h);i&&(j[r]=i);var R=i||j[r],N=j[d],B=N;if(m!=="inside"){var se=N.parent;B=j[se]}if(d.indexOf(r)>-1)return[j,r];var L=r;try{var ye=B.schema.$id;L=L.replace(R.parent,ye)}catch(q){}try{var fe=j[R.parent],Y=fe.children.indexOf(r);Y>-1&&fe.children.splice(Y,1)}catch(q){console.error(q)}try{var te=B.children||[],me=te.indexOf(d);switch(m){case"up":te.splice(me,0,r);break;case"down":te.splice(me+1,0,r);break;default:te.push(r);break}B.children=te}catch(q){console.error(q)}return R.parent=B.$id,[j,L]},hn=(a,r)=>!a||!r?{}:(Object.entries(a).forEach(i=>{var d=Object(V.default)(i,2),l=d[0],h=d[1],m=gn(r,l);a[l].data=m}),a),Re=a=>(r,i)=>{},Je=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var d=r[i].data,l=Object.keys(r),h=l.filter(m=>{var j=i.split("/").length,R=m.split("/").length;return m.indexOf(i)>-1&&R>j});return h&&h.length>0&&(d===void 0&&["object","array"].indexOf(r[i].schema.type)>-1&&(d={}),h.forEach(m=>{var j=i.split("/").length,R=m.split("/").length;if(R===j+1){var N=a(r,m),B=Zt(m);d[B]=N}})),d}catch(m){return}},st=(a,r,i)=>{try{var d=i[r];if(d.schema[a]!==void 0)return d.schema[a];if(d&&d.parent){var l=i[d.parent].schema;return l[a]!==void 0?l[a]:st(a,d.parent,i)}}catch(h){return}};function nt(a){return Function('"use strict";return ('+a+")")()}function Kt(a){if(!a)return[];var r=a.properties,i=a.items,d=a.type;if(!r&&!i)return[];var l={};return d==="object"&&(l=r),d==="array"&&(l=i.properties),Object.keys(l).map(h=>({schema:l[h],name:h}))}function gn(a,r){r=Pt(r,a);for(var i=0,d=r.length;a!=null&&i<d;){var l=un(r[i++]);a=l?a[l]:a}return i&&i==d?a:void 0}function Pt(a,r){return Array.isArray(a)?a:pt(a,r)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function un(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var r="".concat(a);return r=="0"&&1/a==-INFINITY?"-0":r}var Wt=/#\/.+\//,Bt=/^\w*$/;function pt(a,r){if(Array.isArray(a))return!1;var i=typeof a;return i==="number"||i==="boolean"||a==null?!0:Bt.test(a)||!Wt.test(a)||r!=null&&a in Object(r)}var ht=a=>{if(a&&a.propsSchema){var r=a.propsSchema,i=Object($.a)(a,["propsSchema"]);return Object(O.a)({schema:r},i)}return a},Vn=a=>{if(a&&a.schema){var r=a.schema,i=Object($.a)(a,["schema"]);return Object(O.a)({propsSchema:r},i)}return a},Kn=t("CLjb"),sr=t("fK6R"),Wn=a=>{var r=a.text,i=a.name,d=a.schema,l=a.icon,h=Object(Kn.a)({item:{type:"box",dragItem:{parent:"#",schema:d,children:[]},$id:"#/".concat(i,"_").concat(Ce()(6))},end:(Y,te)=>{var me=te.getDropResult()},collect:Y=>({isDragging:Y.isDragging()})}),m=Object(V.default)(h,2),j=m[0].isDragging,R=m[1],N=Ge(),B=ee(),se=B.selected,L=B.flatten,ye=B.onFlattenChange,fe=()=>{var Y=Vt({selected:se,name:i,schema:d,flatten:L}),te=Y.newId,me=Y.newFlatten;ye(me),N({selected:te})};return c.a.createElement("div",{ref:R},c.a.createElement(Un,{text:r,icon:l,onClick:fe}))},Jn=Wn,Un=a=>{var r=a.onClick,i=a.text,d=a.icon;return c.a.createElement("li",{className:"left-item",onClick:r},i)},A=a=>{var r=ee(),i=r.userProps,d=i===void 0?{}:i,l=d.settings,h=Array.isArray(l)?l:$e;return c.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(h)?h.map((m,j)=>m&&m.show===!1?null:c.a.createElement("div",{key:j},c.a.createElement("p",{className:"f6 b"},m.title),c.a.createElement("ul",{className:"pl0"},Array.isArray(m.widgets)?m.widgets.map((R,N)=>c.a.createElement(Jn,Object(ue.default)({key:N.toString()},R,a))):c.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):c.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},k=A,de=t("Z8Mf"),Se=t("j7zX"),Ee=t.n(Se),Ne=t("UESt"),Ie=t("97ez"),Me=t("pJsf"),Ue=t("g4D/"),Ye=t.n(Ue);function gt(a){var r=a.value,i=a.onChange,d=a.disabled,l=a.readonly,h=m=>{i(m.target.checked)};return c.a.createElement(Ye.a,{disabled:d||l,onChange:h,checked:r})}function qe(a){var r=a.schema||{},i=r.enum,d=r.enumNames,l=a.value&&Array.isArray(a.value)?a.value:[];return c.a.createElement(Ye.a.Group,{disabled:a.disabled||a.readonly,value:l,onChange:a.onChange},(i||[!0,!1]).map((h,m)=>c.a.createElement(Ye.a,{value:h,key:m},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:d?d[m]:h}}))))}var kt=t("ypy7"),$t=t.n(kt),Jt=t("rNQX");function Ut(a){var r=a.schema.format,i=l=>{a.disabled||a.readonly||a.onChange(l.color)},d=l=>{a.onChange(l.target.value)};return c.a.createElement("div",{className:"fr-color-picker"},c.a.createElement($t.a,{type:r,animation:"slide-up",color:a.value?a.value:"#ffffff",onChange:i}),a.readonly?c.a.createElement("span",null,a.value||"#ffffff"):c.a.createElement(re.a,{placeholder:"#ffffff",disabled:a.disabled,value:a.value,onChange:d}))}var qt=t("GBD3"),_t=t("wXtC"),ze=t.n(_t),jt=t("mxgt"),it=t("4ZwL"),He=t.n(it),_e=t("wd/R"),dt=t.n(_e),dn=(a,r,i)=>{var d=a.invalid?{borderColor:"#f5222d"}:{},l=a.schema.format,h=l===void 0?"dateTime":l,m=sn(h),j={};a.value?j.value=dt()(a.value,m):j.value="";var R=a.description?{placeholder:a.description}:{},N=Object(O.a)(Object(O.a)(Object(O.a)(Object(O.a)({},R),a.options),j),{},{style:Object(O.a)({width:"100%"},d),disabled:a.disabled||a.readonly,onChange:r});return h==="dateTime"&&(N.showTime=!0),c.a.createElement(i,N)};function At(a){var r=a.schema.format,i=r===void 0?"dateTime":r,d=(h,m)=>a.onChange(m),l=i==="time"?He.a:ze.a;return dn(a,d,l)}var Ht=(a,r,i)=>{var d=a.schema.format,l=d===void 0?"dateTime":d,h=sn(l),m={};a.value&&Array.isArray(a.value)&&a.value[0]&&a.value[1]&&(m={defaultValue:[dt()(a.value[0],h),dt()(a.value[1],h)]});var j=Object(O.a)(Object(O.a)(Object(O.a)({},a.options),m),{},{style:{width:"100%"},showTime:l==="dateTime",disabled:a.disabled||a.readonly,onChange:r});return c.a.createElement(i,j)},Xe=ze.a.RangePicker;function et(a){var r=(i,d)=>a.onChange(d);return Ht(a,r,Xe)}var Be=t("RBnf"),at=t("YJCA"),Cn=a=>{var r=a.fold,i=r===void 0?!1:r,d=a.width,l=a.height,h=a.fill,m=a.style,j=m===void 0?{}:m,R=Object($.a)(a,["fold","width","height","fill","style"]);return c.a.createElement("div",Object(ue.default)({style:j,className:i?"fold-icon":"fold-icon fold-icon-active"},R),c.a.createElement("svg",{viewBox:"0 0 1024 1024",width:d||18,height:l||18},c.a.createElement("path",{d:"M942.048 306.176c-12.288-12.288-31.328-13.024-43.008-2.016L529.056 674.112c-15.072 15.872-19.008 15.808-34.816 0L124.288 304.16c-11.68-11.04-30.72-10.272-43.008 2.016-12.512 12.512-13.216 32.032-1.6 43.68L490.624 760.8c5.056 5.056 11.648 7.328 18.464 7.744h5.152c6.816-.448 13.408-2.72 18.464-7.744l410.944-410.944c11.584-11.648 10.88-31.2-1.6-43.68z",fill:h||"#3c3c3c"})))},yn=Cn,en=(a,r,i)=>{if(Array.isArray(r)&&Array.isArray(i)){if(typeof a=="string"||typeof a=="number"){var d=r.indexOf(a);return d>-1?i[d]:a}else if(Array.isArray(a)){var l=a.map(h=>en(a,r,i));return String(l)}return a}return a},Dn=a=>{var r=a.schema,i=r===void 0?{}:r,d=a.value,l=d===void 0?[]:d,h=a.index,m=Rn({schema:i,value:l,index:h}).filter(j=>j.title).slice(0,3);return c.a.createElement("ul",{className:"flex overflow-hidden",style:{paddingRight:45}},m.map((j,R)=>j.title?c.a.createElement("li",{className:"flex-auto mr2 overflow-hidden",key:R},c.a.createElement("span",{className:"fw5"},j.title,": "),c.a.createElement("span",null,j.text)):null))},bn=Dn,Rn=a=>{var r=a.schema,i=r===void 0?{}:r,d=a.value,l=d===void 0?[]:d,h=a.index,m=i.items,j=m===void 0?{}:m;if(j.type!=="object")return[];var R=j&&j.properties||{};R=Object.values(R);var N=l&&l.length&&l[h]||{},B=Object.values(N),se=R.map((L,ye)=>{var fe=L&&L["ui:hidden"];if(!fe){var Y=L.title,te=B[ye];return te===null&&te===void 0?te="":typeof te=="boolean"?te=te?"\u662F":"\u5426":typeof te!="string"&&typeof te!="number"&&te?te="{\u590D\u6742\u7ED3\u6784}":L.enum&&L.enumNames&&(te=en(te,L.enum,L.enumNames)),{title:Y,text:te}}});return se.filter(L=>!!L)},An=Object(at.c)(()=>c.a.createElement("span",{className:"fr-move-icon"},":::"));class ia extends c.a.Component{constructor(){super(...arguments);this.toggleFold=()=>{this.props.toggleFoldItem(this.props.name)}}componentDidMount(){var r=this.props,i=r.p,d=i===void 0?{}:i,l=r.name,h=r.fold,m=Rn({schema:d.schema,value:d.value,index:l}),j=m&&m[0]&&m[0].text;j&&h!==0&&this.props.toggleFoldItem(l)}render(){var r=this.props,i=r.item,d=r.p,l=d===void 0?{}:d,h=r.name,m=r.fold,j=Object(O.a)(Object(O.a)({},l),{},{index:h}),R=l.options,N=R===void 0?{}:R,B=l.readonly,se=l.formData,L=l.value,ye=N.foldable,fe=N.hideDelete,Y=N.itemButtons,te=Yt(fe);te&&(typeof te=="string"?fe=wt(te,se,L):typeof te=="function"&&(fe=te(se,L)));var me=l.schema.items&&l.schema.items.type=="object",q="fr-set ba b--black-10 hover-b--black-20 relative flex flex-column";return ye&&m?q+=" pv12":l.displayType==="row"&&(q+=" pt44"),c.a.createElement("li",{className:q},ye&&m&&me?c.a.createElement(bn,j):i,ye&&c.a.createElement(yn,{fold:m,onClick:this.toggleFold,style:{position:"absolute",top:12,right:32}}),!B&&c.a.createElement(An,null),!(ye&&m||fe||B)&&c.a.createElement("div",{className:"self-end flex"},c.a.createElement(Fn,{type:"dashed",icon:"delete",onClick:()=>{var e=[...l.value];e.splice(h,1),l.onChange(e)}},"\u5220\u9664"),Y&&Y.length>0&&Y.map((e,n)=>c.a.createElement(Fn,{key:n.toString(),className:"ml2",type:"dashed",icon:e.icon,onClick:()=>{var s=[...l.value];if(typeof window[e.callback]=="function"){var o=window[e.callback](s,h);l.onChange(o)}}},e.text||""))))}}var ir=Object(at.b)(ia);class oa extends c.a.Component{constructor(){super(...arguments);this.handleAddClick=()=>{var r=this.props,i=r.p,d=r.addUnfoldItem,l=[...i.value];l.push(i.newItem),i.onChange(l),d()}}render(){var r=this.props,i=r.p,d=r.foldList,l=d===void 0?[]:d,h=r.toggleFoldItem,m=i||{},j=m.options,R=j===void 0?{}:j,N=m.extraButtons,B=N===void 0?{}:N,se=R.buttons||B||[],L=i.readonly,ye=i.schema,fe=ye===void 0?{}:ye,Y=fe.maxItems,te=i.value||[],me=Y?Y>te.length:!0;return c.a.createElement("ul",{className:"pl0 ma0"},te.map((q,e)=>c.a.createElement(ir,{key:"item-".concat(e),index:e,name:e,p:i,fold:l[e],toggleFoldItem:h,item:i.children})),!L&&c.a.createElement("div",{className:"tr"},me&&c.a.createElement(Fn,{icon:"add",onClick:this.handleAddClick},"\u65B0\u589E"),se&&se.length>0&&se.map((q,e)=>c.a.createElement(Fn,{className:"ml2",icon:q.icon,key:e.toString(),onClick:()=>{if(q.callback==="clearAll"){i.onChange([]);return}if(q.callback==="copyLast"){var n=[...i.value],s=n.length-1;n.push(s>-1?n[s]:i.newItem),i.onChange(n);return}if(typeof window[q.callback]=="function"){var o=[...i.value],u=g=>i.onChange(g);window[q.callback](o,u,i.newItem)}}},q.text))))}}var Hn=Object(at.a)(oa);class la extends c.a.Component{constructor(r){super(r);this.addUnfoldItem=()=>this.setState({foldList:[...this.state.foldList,0]}),this.toggleFoldItem=d=>{var l=this.state.foldList,h=l===void 0?[]:l;h[d]=!h[d],this.setState({foldList:h})},this.handleSort=d=>{var l=d.oldIndex,h=d.newIndex,m=this.props,j=m.onChange,R=m.value;j(Object(at.d)(R,l,h)),this.setState({foldList:Object(at.d)(this.state.foldList,l,h)})};var i=this.props.value.length||0;this.state={foldList:new Array(i).fill(!1)||[]}}render(){var r=this.state.foldList;return c.a.createElement(Hn,{p:this.props,foldList:r,toggleFoldItem:this.toggleFoldItem,addUnfoldItem:this.addUnfoldItem,distance:6,useDragHandle:!0,helperClass:"fr-sort-help-class",shouldCancelStart:i=>i.toElement&&i.toElement.className==="fr-tooltip-container",onSortEnd:this.handleSort})}}la.defaultProps={value:[]};function Fn(a){var r=a.icon,i=a.children,d=Object($.a)(a,["icon","children"]),l;switch(r){case"add":l="PlusCircleOutlined";break;case"delete":l="DeleteOutlined";break;default:l=r;break}var h=Be[l];return h?c.a.createElement(f.a,Object(ue.default)({},d,{icon:c.a.createElement(h,null)}),i):c.a.createElement(f.a,d,i)}var jn=la,Gt=t("/MfK"),Gn=t("w5pM");function ua(a){return c.a.createElement("div",{className:"flex flex-column"},c.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},c.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,c.a.createElement(f.a,{size:"small",className:"self-end",type:"dashed",icon:c.a.createElement(Gt.a,null)},"\u5220\u9664")),c.a.createElement(f.a,{size:"small",className:"self-end",icon:c.a.createElement(Gn.a,null)},"\u6DFB\u52A0"))}function da(a){var r=a.children;return c.a.createElement("div",{className:"w-100"},r)}var or=t("ek7I"),ca=t("FAat"),Qn=t.n(ca),lr=a=>r=>{var i=a.Option,d=N=>r.onChange(N),l=r.invalid?{borderColor:"#f5222d"}:{},h=r.schema||{},m=h.enum,j=h.enumNames,R=r.value&&Array.isArray(r.value)?r.value:[];return c.a.createElement(a,Object(ue.default)({},r.options,{style:Object(O.a)({width:"100%"},l),mode:"multiple",disabled:r.disabled||r.readonly,value:R,onChange:d}),(m||[]).map((N,B)=>c.a.createElement(i,{value:N,key:B},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:j?j[B]:N}}))))},ma=lr(Qn.a),br=t("b+Mx"),va=t("5Dct"),Nn=t.n(va),fa=a=>r=>{var i=r.invalid?{borderColor:"#f5222d"}:{},d=r.schema,l=d.max,h=d.min,m=d.step,j={};return(l||l===0)&&(j={max:l}),(h||h===0)&&(j=Object(O.a)(Object(O.a)({},j),{},{min:h})),m&&(j=Object(O.a)(Object(O.a)({},j),{},{step:m})),c.a.createElement(a,Object(ue.default)({},j,{style:Object(O.a)({width:"100%"},i),disabled:r.disabled||r.readonly},r.options,{value:r.value,onChange:r.onChange}))},cn=fa(Nn.a),ur=t("7kJ1"),dr=t("qPIi"),pa=t.n(dr),Yn=(a,r,i)=>{var d=i.Group,l=a.schema||{},h=l.enum,m=l.enumNames;return c.a.createElement(d,{disabled:a.disabled||a.readonly,value:a.value,onChange:r},(h||[!0,!1]).map((j,R)=>c.a.createElement(i,{value:j,key:R},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:m?m[R]:j}}))))};function ha(a){var r=i=>a.onChange(i.target.value);return Yn(a,r,pa.a)}var ga=a=>r=>{var i=a.Option,d=R=>r.onChange(R),l=r.invalid?{borderColor:"#f5222d"}:{},h=r.schema||{},m=h.enum,j=h.enumNames;return c.a.createElement(a,Object(ue.default)({style:Object(O.a)({width:"100%"},l)},r.options,{disabled:r.disabled||r.readonly,value:r.value,onChange:d}),(m||[]).map((R,N)=>{var B=j?j[N]:R,se=typeof B=="string"&&B[0]==="<";return se&&(B=c.a.createElement("span",{dangerouslySetInnerHTML:{__html:B}})),c.a.createElement(i,{value:R,key:N},B)}))},ya=ga(Qn.a),cr=t("tCGa"),ba=t("DH6M"),Xn=t.n(ba),ja=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,d=i.max,l=i.min,h=i.step,m={};(d||d===0)&&(m={max:d}),(l||l===0)&&(m=Object(O.a)(Object(O.a)({},m),{},{min:l})),h&&(m=Object(O.a)(Object(O.a)({},m),{},{step:h}));var j=!1;a.options&&a.options.hideNumber&&(j=!0);var R=a.readonly?c.a.createElement("span",{style:{width:"90px"}},a.value===""?"-":a.value):c.a.createElement(Nn.a,Object(ue.default)({},a.options,m,{style:Object(O.a)({width:"90px"},r),value:a.value,disabled:a.disabled,onChange:a.onChange}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(Xn.a,Object(ue.default)({style:{flexGrow:1,marginRight:j?0:12}},m,{onChange:a.onChange,value:typeof a.value=="number"?a.value:l||0,disabled:a.disabled||a.readonly})),j?null:R)},xa=ja,jr=t("LGkk"),Oa=t("rVaU"),Zn=t.n(Oa);function Ea(a){return c.a.createElement(Zn.a,{disabled:a.disabled||a.readonly,onChange:r=>a.onChange(a.name,r),defaultChecked:a.value})}var Sa=re.a.TextArea;function mr(a){var r=a.options,i=a.invalid,d=i?{borderColor:"#f5222d"}:{},l={rows:3},h=Object(O.a)(Object(O.a)({},l),r),m=j=>a.onChange(j.target.value);return c.a.createElement(Sa,Object(ue.default)({style:d,disabled:a.disabled||a.readonly,value:a.value},h,{onChange:m}))}var vr=t("VDQ/"),kn=t("B8+X"),Ca=t.n(kn),Da=t("z7Xi");function fr(a){var r={name:"file",action:a.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(i){i.file.status==="done"?(F.a.success("".concat(i.file.name," \u4E0A\u4F20\u6210\u529F")),a.onChange(i.file.response.url)):i.file.status==="error"&&F.a.error("".concat(i.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){a.onChange("")}};return c.a.createElement("div",{className:"fr-upload-mod"},c.a.createElement(Ca.a,Object(ue.default)({},r,{className:"fr-upload-file"}),c.a.createElement(f.a,null,c.a.createElement(Da.a,null)," \u4E0A\u4F20")),a.value&&c.a.createElement("a",{href:a.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var pr=t("/xgg"),Ra=t("aOJk"),Aa=t.n(Ra),Fa=t("mpQp"),Na="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Ta=(a,r)=>a==="image"?c.a.createElement("img",{src:r||Na,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}):null,Ia=(a,r)=>a!=="image"?null:c.a.createElement(Aa.a,{content:Ta(a,r),className:"fr-preview",placement:"bottom"},c.a.createElement(Fa.a,null));function wa(a){var r=a.options,i=r===void 0?{}:r,d=a.invalid,l=d?{borderColor:"#f5222d"}:{},h=a.schema.format,m=h===void 0?"text":h,j=m==="image"?"text":m,R=N=>a.onChange(N.target.value);return c.a.createElement(re.a,Object(ue.default)({style:l},i,{value:a.value,type:j,disabled:a.disabled||a.readonly,addonAfter:i.addonAfter?i.addonAfter:Ia(m,a.value),onChange:R}))}var Pa={checkbox:gt,checkboxes:qe,color:Ut,date:At,dateRange:et,input:wa,list:jn,listEditor:ua,map:da,multiSelect:ma,number:cn,radio:ha,select:ya,slider:xa,switch:Ea,textarea:mr,upload:fr};function Ba(a){var r=a.onChange,i=a.value,d=a.disabled,l=a.readonly,h=a.options,m=j=>{try{var R=fn(i,j.target.value);r(R)}catch(N){}};return c.a.createElement(re.a,Object(ue.default)({disabled:d||l},h,{onChange:m,value:Zt(i)}))}var $a=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,d=i.max,l=i.min,h=i.step,m={};(d||d===0)&&(m={max:d}),(l||l===0)&&(m=Object(O.a)(Object(O.a)({},m),{},{min:l})),h&&(m=Object(O.a)(Object(O.a)({},m),{},{step:h}));var j=!1;a.options&&a.options.hideNumber&&(j=!0);var R=L=>typeof L=="string"&&L.endsWith("%"),N=100;if(R(a.value))try{N=Number(a.value.split("%")[0]),Number.isNaN(N)&&(N=100)}catch(L){}var B=L=>{var ye=L+"%";a.onChange(ye)},se=a.readonly?c.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):c.a.createElement(Nn.a,Object(ue.default)({},a.options,m,{style:Object(O.a)({width:"80px"},r),value:N,disabled:a.disabled,onChange:B,formatter:L=>"".concat(L,"%"),parser:L=>L.replace("%","")}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(Xn.a,Object(ue.default)({style:{flexGrow:1,marginRight:j?0:12}},m,{onChange:B,max:100,tipFormatter:L=>L+"%",value:N||100,disabled:a.disabled||a.readonly})),j?null:se)},La=$a,qn={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes","*?readonly":"text"};function _n(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:qn,i=a.type,d=a.format,l=a.enum,h=a.readonly;if(a["ui:widget"])return a["ui:widget"];var m=[];h&&(m.push("".concat(i,"?readonly")),m.push("*?readonly")),l&&(m.push("".concat(i,"?enum")),m.push("*?enum")),d&&m.push("".concat(i,":").concat(d)),m.push(i);var j="";return m.some(R=>(j=r[R],!!j)),j}function Ma(){var a=ee(),r=a.selected,i=a.flatten,d=a.onItemChange,l=a.userProps,h=l===void 0?{}:l,m=h.settings,j=h.commonSettings,R={},N={},B=(n,s)=>{var o=[];return n.forEach(u=>{var g=u.widgets,y=g.filter(S=>S.widget).map(S=>Object(O.a)(Object(O.a)({},S),{},{setting:Object(O.a)(Object(O.a)({},s),S.setting)}));o=[...o,...y]}),o},se=n=>{if(r)try{var s=i[r];s&&s.schema&&d(r,Object(O.a)(Object(O.a)({},s),{},{schema:n}))}catch(o){console.log(o,"catch")}},L=Array.isArray(m)?[...m,{widgets:[...Fe,...je,...we]}]:$e,ye=ke(j)?j:Oe,fe=B(L,ye),Y,te;try{if(Y=i[r],Y&&(te=_n(Y.schema)),te){var me=fe.find(n=>n.widget===te)||{},q=me.setting;R={schema:{type:"object",properties:Object(O.a)({},q)}},N=Y.schema}}catch(n){console.log(n)}var e=Object(O.a)(Object(O.a)({},Pa),{},{idInput:Ba,percentSlider:La});return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Ln,{schema:R,formData:N,onChange:se,widgets:e,preview:!0,frProps:{displayType:"column",showDescIcon:!1}}))}function za(){var a=ee(),r=a.widgets,i=a.frProps,d=a.userProps,l=Ge(),h=d&&d.globalSettings?d.globalSettings:Le,m=j=>{l({frProps:j})};return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Ln,{schema:{schema:h},formData:i,onChange:m,widgets:r,preview:!0,frProps:{displayType:"column",showDescIcon:!0}}))}var Va=Ee.a.TabPane;function Ka(){var a=H({showRight:!0,showItemSettings:!1}),r=Object(V.default)(a,2),i=r[0],d=r[1],l=ee(),h=l.selected,m=i.showRight,j=i.showItemSettings,R=()=>d({showRight:!m}),N=()=>c.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:R},c.a.createElement(Ne.a,{className:"f5"})),B=()=>c.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},c.a.createElement(N,null));return Object(ie.useEffect)(()=>{h&&h[0]==="0"||h==="#"||!h?d({showItemSettings:!1}):d({showItemSettings:!0})},[h]),m?c.a.createElement("div",{className:"right-layout relative pl2"},c.a.createElement(N,null),c.a.createElement(Ee.a,{defaultActiveKey:"1",onChange:()=>{}},j&&c.a.createElement(Va,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},c.a.createElement(Ma,null)),c.a.createElement(Va,{tab:"\u8868\u5355\u914D\u7F6E",key:j?"2":"1"},c.a.createElement(za,null)))):c.a.createElement(B,null)}var ea=a=>{var r=a.children,i=r===void 0?[]:r,d=a.preview;return c.a.createElement(c.a.Fragment,null,i.map((l,h)=>{var m={id:l,preview:d};return c.a.createElement($n,Object(ue.default)({key:h.toString()},m))}))},Wa=ea,Ja=a=>{var r=a.$id,i=a.item,d=a.labelClass,l=a.contentClass,h=a.isComplex,m=a.children,j=i.schema,R=i.data,N=ee(),B=N.onItemChange,se=N.flatten,L=N.widgets,ye=N.mapping,fe=N.frProps,Y=fe===void 0?{}:fe,te=Y.labelWidth,me=Y.displayType,q=Y.showDescIcon,e=Y.showValidate,n=j.type,s=j.title,o=j.description,u=j.required,g=_n(j,ye),y=j["ui:widget"];y&&L[y]&&(g=y);var S=L[g];if(!S){var E=Object(O.a)({},j);delete E["ui:widget"],g=_n(E,ye),S=L[g]||"input"}var x=st("ui:labelWidth",r,se)||te,D=Tt(x)?Number(x):ut(x)?x:110,T={width:D};g==="checkbox"?T={flexGrow:1}:(h||me==="column")&&(T={flexGrow:1});var I=U=>{var z=Object(O.a)({},i);z.data=U,B(r,z,"data")},M={};g==="checkbox"&&me==="row"&&(M.marginLeft=x);var J={disabled:j["ui:disabled"],readonly:j["ui:readonly"],hidden:j["ui:hidden"],options:j["ui:options"],labelWidth:j["ui:labelWidth"],width:j["ui:width"]};return c.a.createElement(c.a.Fragment,null,j.title?c.a.createElement("div",{className:d,style:T},c.a.createElement("label",{className:"fr-label-title ".concat(g==="checkbox"||me==="column"?"no-colon":""),title:s},u&&c.a.createElement("span",{className:"fr-label-required"}," *"),c.a.createElement("span",{className:"".concat(h?"b":""," ").concat(me==="column"?"flex-none":"")},s),o&&(q?c.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":o},c.a.createElement("i",{className:"fr-tooltip-icon"}),c.a.createElement("div",{className:"fr-tooltip-container"},c.a.createElement("i",{className:"fr-tooltip-triangle"}),o)):c.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",o,"\xA0)")),me!=="row"&&e&&c.a.createElement("span",{className:"fr-validate"},"validation"))):null,c.a.createElement("div",{className:l,style:M},c.a.createElement(S,Object(ue.default)({value:R,onChange:I,schema:j},J,{children:m}))))},Ua=Ja,hr=t("iU8R"),Ha=t("dhM6"),Ga=t("lfch"),Qa=t("aMZS");function Bn(a){var r=a.$id,i=a.item,d=a.inside,l=d===void 0?!1:d,h=a.children,m=a.style,j=Object(ie.useState)(),R=Object(V.default)(j,2),N=R[0],B=R[1],se=ee(),L=se.flatten,ye=se.onItemChange,fe=se.onFlattenChange,Y=se.selected,te=se.hovering,me=Ge(),q=i.schema,e=q.type,n=Object(ie.useRef)(null),s=Object(Kn.a)({item:{type:"box",$id:l?0+r:r},end:(K,P)=>{var X=P.getDropResult()},collect:K=>({isDragging:K.isDragging()})}),o=Object(V.default)(s,3),u=o[0].isDragging,g=o[1],y=o[2],S=Object(Qa.a)({accept:"box",drop:(K,P)=>{var X=P.didDrop();if(!X){console.log(K.dragItem,"tems");var W=pn({dragId:K.$id,dragItem:K.dragItem,dropId:r,position:N,flatten:L}),_=Object(V.default)(W,2),be=_[0],De=_[1];fe(be),me({selected:De})}},hover:(K,P)=>{var X=P.isOver({shallow:!0});if(X){var W=n.current&&n.current.getBoundingClientRect(),_=(W.bottom-W.top)/2,be=P.getSourceClientOffset(),De=be.y-W.top;l?B("inside"):(De<=_&&B("up"),De>_&&B("down"))}},collect:K=>({isOver:K.isOver({shallow:!0}),canDrop:K.canDrop()})}),E=Object(V.default)(S,2),x=E[0],D=x.canDrop,T=x.isOver,I=E[1],M=D&&T;y(I(n));var J=K=>{K.stopPropagation();var P=l?"0"+r:r;me({selected:P})},U=K=>{K.stopPropagation();var P=Object(O.a)({},L),X="#";try{var W=P[r].parent,_=P[W].children,be=_.indexOf(r);be>0?X=_[be-1]:X=_[1]||W}catch(De){console.log("catch",De)}delete P[r],fe(P),me({selected:X})},z=K=>{K.stopPropagation();var P=Pn(L,r),X=Object(V.default)(P,2),W=X[0],_=X[1];fe(W),me({selected:_})},Ae=()=>{},pe=()=>{},he=Y===r&&!l;Y&&Y[0]==="0"&&(he=Y.substring(1)===r&&l);var ge=l?"0"+r:r,oe={backgroundColor:te===ge?"#ecf5ff":"#fff",opacity:u?0:1};if(l?oe=Object(O.a)(Object(O.a)({},oe),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):r==="#"?oe=Object(O.a)(Object(O.a)({},oe),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):e==="object"&&(oe=Object(O.a)(Object(O.a)({},oe),{},{paddingTop:12})),M&&(l?oe=Object(O.a)(Object(O.a)({},oe),{},{boxShadow:"0 -3px 0 red"}):N==="up"?oe=Object(O.a)(Object(O.a)({},oe),{},{boxShadow:"0 -3px 0 red"}):N==="down"&&(oe=Object(O.a)(Object(O.a)({},oe),{},{boxShadow:"0 3px 0 red"}))),he&&(oe=Object(O.a)(Object(O.a)({},oe),{},{outline:"2px solid #409eff",borderColor:"#fff"})),m&&typeof m=="object"&&(oe=Object(O.a)(Object(O.a)({},oe),m)),r==="#"&&l)return h;var xe=q&&q.$id&&Zt(q.$id);return xe==="#"&&(xe=""),c.a.createElement("div",{ref:n,style:oe,className:"field-wrapper relative w-100",onClick:J,onMouseEnter:Ae,onMouseLeave:pe},!l&&he&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:g},c.a.createElement(Ha.a,{style:{color:"#fff"}})),!l&&c.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},xe),h,he&&!l&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"pointer",onClick:U},c.a.createElement(Gt.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),c.a.createElement("div",{className:"pointer",onClick:z},c.a.createElement(Ga.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var Ya=a=>{var r=a.id,i=r===void 0?"#":r,d=a.preview,l=d===void 0?!1:d,h=ee(),m=h.flatten,j=h.frProps,R=j===void 0?{}:j,N=R.displayType,B=R.column,se=m[i];if(!se)return null;var L=se.schema,ye=L.type==="object",fe=L.type==="array"&&L.enum===void 0,Y=ye||fe,te=L["ui:width"],me="fr-field w-100 ".concat(Y?"fr-field-complex":""),q="fr-label mb2",e="fr-content",n={};switch(!Y&&te?n={width:te,paddingRight:"12px"}:!Y&&B>1&&(n={width:"calc(100% /".concat(B,")"),paddingRight:"12px"}),L.type){case"object":L.title&&(me+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",q+=" fr-label-object bg-white absolute ph2 top-upper left-1"),me+=" fr-field-object",L.title&&(e+=" ml3");break;case"array":L.title&&!L.enum&&(q+=" mt2 mb3");break;case"boolean":L["ui:widget"]!=="switch"&&(L.title&&(q+=" ml2",q=q.replace("mb2","mb0")),e+=" flex items-center",me+=" flex items-center flex-row-reverse justify-end");break;default:N==="row"&&(q=q.replace("mb2","mb0"))}var s=L.type==="boolean"&&L["ui:widget"]!=="switch";N==="row"&&!Y&&!s&&(me+=" flex items-center",q+=" flex-shrink-0 fr-label-row",q=q.replace("mb2","mb0"),e+=" flex-grow-1 relative"),N==="row"&&s&&(e+=" flex justify-end pr2");var o={$id:i,item:se,labelClass:q,contentClass:e,isComplex:Y},u={children:se.children,preview:l},g=se.children&&se.children.length>0?c.a.createElement("ul",{className:"flex flex-wrap pl0"},c.a.createElement(Wa,u)):null;if(l)return c.a.createElement("div",{style:n,className:me},c.a.createElement(Ua,o,(ye||fe)&&g));var y=Object.keys(m).length<2;return y?c.a.createElement(Bn,{style:n,$id:i,item:se},c.a.createElement("div",{className:"".concat(me," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):c.a.createElement(Bn,{style:n,$id:i,item:se},c.a.createElement("div",{className:me},c.a.createElement(Ua,o,(ye||fe)&&c.a.createElement(Bn,{$id:i,item:se,inside:!0},g||c.a.createElement("div",{className:"h2"})))))},$n=Ya,ta=re.a.TextArea;function Xa(a,r){var i=a.schema,d=a.formData,l=a.onChange,h=a.onSchemaChange,m=a.setGlobal,j=a.userProps,R=j===void 0?{}:j,N=a.frProps,B=N===void 0?{}:N,se=Object($.a)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),L=H({showModal:!1,showModal2:!1,schemaForImport:""}),ye=Object(V.default)(L,2),fe=ye[0],Y=ye[1],te=se.simple,me=te===void 0?!0:te,q=se.preview,e=R.transformFrom,n=R.transformTo,s=R.isNewVersion,o=R.extraButtons,u=o===void 0?[]:o,g={};i&&(g=Rt(i.schema,i.uiSchema));var y=zt(g),S=hn(y,d),E=function(_){var be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",De=St(_),rt=Je(_);be==="schema"&&h&&h(De),l(rt)},x=(W,_,be)=>{S[W]=_,E(S,be)},D=()=>Y({showModal:!fe.showModal}),T=()=>Y({showModal2:!fe.showModal2}),I=()=>{m({schema:{schema:{type:"object"}},formData:{},selected:void 0})},M=W=>{Y({schemaForImport:W.target.value})},J=()=>{try{var W=e(nt(fe.schemaForImport)),_=!0;W&&W.propsSchema&&(_=!1);var be=ht(W),De=be.schema,rt=Object($.a)(be,["schema"]);m(ot=>({schema:{schema:De},formData:{},selected:void 0,isNewVersion:_,frProps:Object(O.a)(Object(O.a)({},ot.frProps),rt)}))}catch(ot){F.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}T()},U={},z="";try{var Ae=St(S,"#",!0);B&&B.column&&(Ae["ui:column"]=B.column),B&&B.displayType&&(Ae["ui:displayType"]=B.displayType),B&&B.showDescIcon&&(Ae["ui:showDescIcon"]=B.showDescIcon),U=n(Object(O.a)({schema:Ae},B)),s||(U=Vn(U)),z=JSON.stringify(U,null,2)}catch(W){}var pe=()=>{ce()(z),F.a.info("\u590D\u5236\u6210\u529F"),D()},he=()=>U,ge=W=>{try{var _=W.schema,be=W.propsSchema,De=W.uiSchema,rt=Object($.a)(W,["schema","propsSchema","uiSchema"]),ot={schema:_||be},xt=!0;!_&&be&&(xt=!1),m(Ot=>Object(O.a)(Object(O.a)({},Ot),{},{schema:ot,formData:{},selected:void 0,isNewVersion:xt,frProps:Object(O.a)(Object(O.a)({},Ot.frProps),rt)}))}catch(Ot){console.error(Ot)}},oe=()=>{ce()(z)};Object(ie.useImperativeHandle)(r,()=>({getValue:he,setValue:ge,copyValue:oe}));var xe=Object(O.a)({flatten:S,onFlattenChange:E,onItemChange:x,userProps:R,frProps:B},se),K=Array.isArray(u)?u:[],P=K.filter(W=>W===!0||W===!1),X=K.filter(W=>ke(W)&&W.text);return me?c.a.createElement(p.Provider,{value:m},c.a.createElement(ct.Provider,{value:xe},c.a.createElement($n,{preview:!0}))):c.a.createElement(p.Provider,{value:m},c.a.createElement(ct.Provider,{value:xe},c.a.createElement("div",{className:"fr-generator-container"},c.a.createElement(k,null),c.a.createElement("div",{className:"mid-layout pr2"},c.a.createElement("div",{className:"mv2 mh1"},P[0]!==!1&&c.a.createElement(f.a,{className:"mr2 mb1",onClick:()=>{m({preview:!q,selected:"#"})}},q?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),P[1]!==!1&&c.a.createElement(f.a,{className:"mr2",onClick:I},"\u6E05\u7A7A"),P[2]!==!1&&c.a.createElement(f.a,{className:"mr2",onClick:T},"\u5BFC\u5165"),P[3]!==!1&&c.a.createElement(f.a,{type:"primary",className:"mr2",onClick:D},"\u5BFC\u51FAschema"),X.map((W,_)=>c.a.createElement(f.a,Object(ue.default)({key:_.toString(),className:"mr2"},W),W.text||W.children))),c.a.createElement("div",{className:"dnd-container"},c.a.createElement("div",{style:{height:q?33:0}}),c.a.createElement($n,{preview:q}))),c.a.createElement(Ka,{globalProps:B}),c.a.createElement(Ct.a,{visible:fe.showModal,onOk:pe,onCancel:D,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},c.a.createElement("div",{className:"mt3"},c.a.createElement(ta,{style:{fontSize:12},value:z,autoSize:{minRows:10,maxRows:30}}))),c.a.createElement(Ct.a,{visible:fe.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:J,onCancel:T},c.a.createElement("div",{className:"mt3"},c.a.createElement(ta,{style:{fontSize:12},value:fe.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:M,autoSize:{minRows:10,maxRows:30}}))))))}var na=Object(ie.forwardRef)(Xa);na.defaultProps={labelWidth:120};var Ln=na,Za=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2?arguments[2]:void 0,l=r.type==="object"&&r.properties,h=r.type==="array"&&r.items&&r.items.properties,m=l||h;if(m){var j=Kt(r);j.map(N=>{l&&(r.properties[N.name]=a(N.schema,r,N.name)),h&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}if(i&&i.required&&Array.isArray(i.required)){var R=i.required.indexOf(d);R>-1&&(r.required=!0,i.required.splice(R,1)),i.required.length||delete i.required}return r},aa=a=>Object(O.a)(Object(O.a)({},a),{},{schema:Za(a.schema)}),ka=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,l=r.type==="object"&&r.properties,h=r.type==="array"&&r.items&&r.items.properties,m=l||h;if(m){var j=Kt(r);j.map(R=>{l&&(r.properties[R.name]=a(R.schema,r,R.name)),h&&(r.items.properties[R.name]=a(R.schema,r,R.name))})}return typeof r.required=="boolean"&&(r.required&&i&&(i.required&&Array.isArray(i.required)?i.required.push(d):i.required=[d]),delete r.required),r},ra=a=>Object(O.a)(Object(O.a)({},a),{},{schema:ka(a.schema)}),gr=t("xwS/"),qa=t("4l2o"),xr=t("k/c8"),_a={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function er(a,r){var i=a.defaultValue,d=a.templates,l=a.submit,h=a.transformer,m=a.extraButtons,j=a.settings,R=a.commonSettings,N=a.globalSettings,B=a.widgets,se=B===void 0?{}:B,L=aa,ye=ra;h&&(typeof h.from=="function"&&(L=h.from),typeof h.to=="function"&&(ye=h.to));var fe=r||Object(ie.useRef)(),Y=H({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),te=Object(V.default)(Y,2),me=te[0],q=te[1];Object(ie.useEffect)(()=>{var z=i?L(i):_a;z&&z.propsSchema?q({isNewVersion:!1}):q({isNewVersion:!0}),q({schema:ht(z),formData:z&&z.formData||{}})},[i]);var e=me.formData,n=me.frProps,s=me.hovering,o=me.isNewVersion,u=me.preview,g=me.schema,y=me.selected,S=n.displayType,E=S==="row",x=Object(O.a)(Object(O.a)({},n),{},{showDescIcon:E}),D=z=>{q({formData:z}),a.onChange&&a.onChange(z)},T=z=>{var Ae=Object(O.a)({},g);Ae.schema=z,q({schema:Ae}),a.onSchemaChange&&setTimeout(()=>{var pe=fe.current.getValue();a.onSchemaChange(pe)},0)},I=Object(O.a)(Object(O.a)({},qn),{},{array:"listEditor"}),M={preview:u,simple:!1,mapping:I,widgets:Object(O.a)(Object(O.a)({},Pa),se),selected:y,hovering:s},J={templates:d,submit:l,transformFrom:L,transformTo:ye,isNewVersion:o,extraButtons:m,settings:j,commonSettings:R,globalSettings:N},U=Object(O.a)(Object(O.a)({schema:g,formData:e,onChange:D,setGlobal:q,onSchemaChange:T},M),{},{userProps:J,frProps:x});return c.a.createElement(Ln,Object(ue.default)({ref:fe},U))}var Mn=Object(ie.forwardRef)(er),yr=t("trko"),tr=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=r.type==="object"&&r.properties,l=r.type==="array"&&r.items&&r.items.properties,h=d||l;if(h){var N=Kt(r);N.map(B=>{d&&(r.properties[B.name]=a(B.schema,r)),l&&(r.items.properties[B.name]=a(B.schema,r))})}else if(r.enum&&Array.isArray(r.enum)){var m=r.enum;if(ke(m[0])&&m[0].label!==void 0&&m[0].value!==void 0){var j=m.map(B=>B.label),R=m.map(B=>B.value);r.enum=R,r.enumNames=j}}return r["x-component"]&&(r["ui:widget"]=r["x-component"]),r["x-component-props"]&&(r["ui:options"]=r["x-component-props"]),i&&r.required&&(i.required&&Array.isArray(i.required)?i.required.push(r.name):i.required=[r.name]),delete r.key,delete r.name,delete r.required,delete r["x-component"],delete r["x-component-props"],r},nr=a=>{var r=tr(a);return{schema:r}},mn=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,l=r.type==="object"&&r.properties,h=r.type==="array"&&r.items&&r.items.properties,m=l||h;if(m){var R=Kt(r);R.map(N=>{l&&(r.properties[N.name]=a(N.schema,r,N.name)),h&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}else if(r.enum&&Array.isArray(r.enum)&&r.enumNames&&Array.isArray(r.enumNames)){var j=r.enum.map((N,B)=>({value:N,label:r.enumNames[B]}));r.enum=j}return r["ui:widget"]&&(r["x-component"]=r["ui:widget"]),r["ui:options"]&&(r["x-component-props"]=r["ui:options"]),delete r["ui:widget"],delete r["ui:options"],delete r.enumNames,d&&(r.name=d,r.key=d),i&&d&&i.required&&Array.isArray(i.required)&&i.required.indexOf(d)>-1&&(r.required=!0),r},ar=a=>{var r=a.schema;return mn(r)},rr=(a,r)=>c.a.createElement(Z.a,{backend:C.a},c.a.createElement(Mn,Object(ue.default)({ref:r},a))),Or=Q.default=Object(ie.forwardRef)(rr)},refC:function(Ke,Q,t){"use strict";t.r(Q),t.d(Q,"useForm",function(){return ye}),t.d(Q,"connectForm",function(){return fe}),t.d(Q,"createWidget",function(){return Gt});var ue=t("Saan"),ie=t("vgIT"),c=t.n(ie),Z=t("0Owb"),C=t("k1fw"),O=t("PpiC"),V=t("q1tI"),p=t.n(V),ct=t("Pv/L"),Ge=t("tJVT"),ee=t("LvDl");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function H(e){var n=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:n.test(e)}function Et(e,n){return n?!1:e&&e.type==="boolean"&&e.widget!=="switch"}function rn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function mt(e){if(typeof e=="string"){var n=e.split(".");return n.length===1?"#":(n.pop(),n.join("."))}return"#"}function Nt(e,n){if(n==="#")return e;if(typeof n=="string")return Object(ee.get)(e,n)}function Lt(e){var n,s;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,u=e.match(o);return u?(n=e.replace(o,"[]"),s=u.map(g=>Number(g.substring(1,g.length-1)))):n=e,{id:n,dataIndex:s}}function bt(e,n){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var s=e;return Array.isArray(n)&&n.forEach(o=>{s=s.replace(/\[\]/,"[".concat(o,"]"))}),rn(s)}function vt(e){return e.type==="array"&&e.items&&e.enum===void 0}function ft(e){return e.type==="object"&&e.properties}function Ct(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",s=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=f(e),g=n;u.$id||(u.$id=g);var y=[];ft(u)&&Object.entries(u.properties).forEach(E=>{var x=Object(Ge.default)(E,2),D=x[0],T=x[1],I=vt(T)?D+"[]":D,M=g==="#"?I:g+"."+I;y.push(M),Ct(T,M,g,o)}),vt(u)&&Object.entries(u.items.properties).forEach(E=>{var x=Object(Ge.default)(E,2),D=x[0],T=x[1],I=vt(T)?D+"[]":D,M=g==="#"?I:g+"."+I;y.push(M),Ct(T,M,g,o)});var S=Array.isArray(u.rules)?[...u.rules]:[];return["boolean","function","string"].indexOf(typeof u.required)>-1&&S.push({required:u.required}),u.type&&(o[g]={parent:s,schema:u,children:y,rules:S}),o}function ae(e,n){return e.indexOf(n)>-1}var b=e=>ae(Object.prototype.toString.call(e),"Object"),f=ee.cloneDeep;function w(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function v(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function F(e,n){if(e===void 0&&n===void 0)return!0;if(e===void 0||n===void 0)return!1;if(e===null&&n===null)return!0;if(e===null||n===null)return!1;if(e.constructor!==n.constructor)return!1;if(e.constructor===Array){if(e.length!==n.length)return!1;for(var s=0;s<e.length;s++)if(e[s].constructor===Array||e[s].constructor===Object){if(!F(e[s],n[s]))return!1}else if(e[s]!==n[s])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var u=Object.keys(e)[o];if(e[u]&&typeof e[u]!="number"&&(e[u].constructor===Array||e[u].constructor===Object)){if(!F(e[u],n[u]))return!1}else if(e[u]!==n[u])return!1}}else if(e.constructor===String||e.constructor===Number)return e===n;return!0}function $(e){var n;switch(e){case"date":n="YYYY-MM-DD";break;case"time":n="HH:mm:ss";break;default:n="YYYY-MM-DD HH:mm:ss"}return n}function G(e){return e.find((n,s,o)=>s!==o.findIndex(u=>JSON.stringify(n)===JSON.stringify(u)))}function ne(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=le(e),o=s.map(y=>{var S=y.name,E=y.schema,x=E.type,D=E.enum,T=E.properties,I=E.items,M=x==="object"&&T,J=x==="array"&&I&&!D,U=S&&n[y.name];if(!U)return y;if(J){var z=ne(I,U.items||{});return Object(C.a)(Object(C.a)({},y),{},{schema:Object(C.a)(Object(C.a)(Object(C.a)({},y.schema),U),{},{items:z})})}if(M){var Ae=ne(y.schema,U);return Object(C.a)(Object(C.a)({},y),{},{schema:Ae})}return Object(C.a)(Object(C.a)({},y),{},{schema:Object(C.a)(Object(C.a)({},y.schema),U)})}),u={};o.forEach(y=>{u[y.name]=y.schema});var g={};return Object.keys(n).forEach(y=>{typeof y=="string"&&y.substring(0,3)==="ui:"&&(g[y]=n[y])}),re(u)?Object(C.a)(Object(C.a)({},e),g):Object(C.a)(Object(C.a)(Object(C.a)({},e),g),{},{properties:u})}function re(e){return Object.keys(e).length===0}function le(e){if(!e)return[];var n=e.properties,s=e.items,o=e.type;if(!n&&!s)return[];var u={};return o==="object"&&(u=n),o==="array"&&(u=s),Object.keys(u).map(g=>({schema:u[g],name:g}))}function ce(){}var Oe=e=>Function('"use strict";return ('+e+")")(),Fe=(e,n,s)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(s),`;
    const formData = `).concat(JSON.stringify(n),`;
    return (`).concat(e,")"))();function je(e){if(typeof e!="string")return!1;var n=/^{{(.+)}}$/,s=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(n)&&!e.match(s)&&!e.match(o))}function we(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,o=mt(s),u=Nt(n,o)||{};if(typeof e=="string"){var g=e.substring(2,e.length-2),y=/formData.([a-zA-Z0-9.$_\[\]]+)/g,S=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,E=`
    return (`.concat(g.replaceAll(y,(x,D)=>JSON.stringify(Nt(n,D))).replaceAll(S,(x,D)=>JSON.stringify(Nt(u,D))),")");try{return Function(E)()}catch(x){return e}}else return e}var Te=e=>Object.keys(e).some(n=>{var s=e[n];return typeof s=="string"?je(s):b(s)?Te(s):!1}),$e=(e,n,s)=>{var o=f(e);return Object.keys(o).forEach(u=>{var g=o[u];if(je(g)&&(o[u]=we(g,n,s)),typeof u=="string"&&u.toLowerCase().indexOf("props")>-1){var y=o[u];b(y)&&Object.keys(y).forEach(S=>{o[u][S]=we(y[S],n,s)})}}),o};function Le(e){return Object.keys(e).some(n=>typeof e[n]=="function"?!0:typeof e[n]=="string"?je(e[n]):typeof e[n]=="object"?Le(e[n]):!1)}var Qe=(e,n,s)=>{try{var o=s[n];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var u=s[o.parent].schema;return u[e]!==void 0?u[e]:Qe(e,o.parent,s)}}catch(g){return}},Pe=()=>{var e=localStorage.getItem("SAVES");if(e)try{var n=JSON.parse(e),s=n.length;if(s)return s+1}catch(o){return 1}else return 1};function Ce(e){return Function('"use strict";return ('+e+")")()}function Ze(e){if(!e)return[];var n=e.properties,s=e.items,o=e.type;if(!n&&!s)return[];var u={};return o==="object"&&(u=n),o==="array"&&(u=s.properties),Object.keys(u).map(g=>({schema:u[g],name:g}))}var tt=e=>{if(e&&e.propsSchema){var n=e.propsSchema,s=Object(O.a)(e,["propsSchema"]);return Object(C.a)({schema:n},s)}return e},We=e=>{if(e&&e.schema){var n=e.schema,s=Object(O.a)(e,["schema"]);return Object(C.a)({propsSchema:n},s)}return e},ke=e=>{if(!!e){var n=e&&e.items&&e.items.enum,s=e&&e.enum;return n||s}},lt=function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(n)?n:s},Tt=e=>{var n="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(n).test(e))};function ut(e){var n=arguments.length<=1?void 0:arguments[1];return n&&n.target&&e in n.target?n.target[e]:n}var Dt=e=>{try{var n=e.split("."),s=n.slice(-1)[0];return s}catch(o){return console.error(o,"getKeyFromPath"),""}},sn=(e,n)=>{if(typeof e=="boolean")return e?"yes":"no";if(ft(n)||vt(n))return"-";if(Array.isArray(n.enum)&&Array.isArray(n.enumNames))try{return n.enumNames[n.enum.indexOf(e)]}catch(s){return e}return e},Mt=e=>{var n={};return b(e)?Object.keys(e).forEach(s=>{n[s]=Mt(e[s])}):Array.isArray(e)?n=e.filter(s=>!!(s&&JSON.stringify(s)!=="{}")):n=e,n},Rt=e=>{var n=e.schema,s=e.isRequired,o=s===void 0?!0:s,u={},g={};if(ft(n))u.type="object",o&&n.required===!0&&(u.required=!0),u.fields={},Object.keys(n.properties).forEach(I=>{var M=n.properties[I];Array.isArray(n.required)&&n.required.indexOf(I)>-1&&(M.required=!0),u.fields[I]=Rt({schema:M,isRequired:o})});else if(vt(n))u.type="array",o&&n.required===!0&&(u.required=!0),u.defaultField={type:"object",fields:{}},Object.keys(n.items.properties).forEach(I=>{var M=n.items.properties[I];Array.isArray(n.required)&&n.required.indexOf(I)>-1&&(M.required=!0),u.defaultField.fields[I]=Rt({schema:M,isRequired:o})});else{var y=I=>n.type?Object(C.a)(Object(C.a)({},I),{},{type:n.type}):I.pattern&&typeof I.pattern=="string"?Object(C.a)(Object(C.a)({},I),{},{pattern:new RegExp(I.pattern)}):I,S=n.required,E=Object(O.a)(n,["required"]);switch(["type","pattern","min","max","len"].forEach(I=>{Object.keys(E).indexOf(I)>-1&&(g[I]=E[I])}),n.type){case"range":g.type="array";break;default:break}switch(n.format){case"email":case"url":g.type=n.format;break;default:break}var x;if(o&&n.required===!0&&(x={required:!0}),n.rules)if(Array.isArray(n.rules)){var D=[];n.rules.forEach(I=>{I.required===!0?o&&(x=I):D.push(y(I))}),u=[g,...D]}else b(n.rules)?u=[g,y(n.rules)]:u=g;else u=g;if(x&&(Array.isArray(u)?u.push(x):b(u)&&(u=[u,x])),n.format==="image"){var T={validator:(I,M)=>{var J=/([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;return M===void 0?!0:!!J.exec(M)||H(M)},message:"${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage"};Array.isArray(u)?u.push(T):b(u)&&(u=[u,T])}}return u},It=e=>{var n=e.split(".");return n.map(s=>isNaN(Number(s))?s:"[".concat(s,"]")).reduce((s,o)=>o[0]==="["||s===""?s+o:s+"."+o,"")},on=(e,n)=>{for(var s=e.split(".");s.length>0;){var o=s,u=Object(ct.a)(o),g=u[0],y=u.slice(1);g=g.split("[")[0];var S=void 0;if(ft(n)?S=n.properties[g]:vt(n)&&(S=n.items.properties[g]),s=y,S)return on(y.join("."),S);var E={required:!1};if(n.required===!0&&(E.required=!0),n.rules){var x=n.rules.find(D=>D.required);x&&(E=x)}return E}},Qt=e=>{var n={};return ft(e)?Object.keys(e.properties).forEach(s=>{var o=e.properties[s],u=Qt(o);n[s]=u}):e.default!==void 0?n=e.default:e.type==="boolean"?n=!1:n=void 0,n},vn=(e,n)=>{if(typeof e!="string")return"";if(!n)return e;if(e=e.replace("${title}",n.title),e=e.replace("${type}",n.format||n.type),n.min&&(e=e.replace("${min}",n.min)),n.max&&(e=e.replace("${max}",n.max)),n.rules){var s=n.rules.find(y=>y.min!==void 0);s&&(e=e.replace("${min}",s.min));var o=n.rules.find(y=>y.max!==void 0);o&&(e=e.replace("${max}",o.max));var u=n.rules.find(y=>y.len!==void 0);u&&(e=e.replace("${len}",u.len));var g=n.rules.find(y=>y.pattern!==void 0);g&&(e=e.replace("${pattern}",g.pattern))}return e},wt=(e,n)=>{var s=f(e);if(s=n(s),ft(s)){var o=[];Array.isArray(s.required)&&(o=s.required,delete s.required),Object.keys(s.properties).forEach(u=>{var g=s.properties[u];o.indexOf(u)>-1&&(g.required=!0),s.properties[u]=wt(g,n)})}else vt(s)&&Object.keys(s.items.properties).forEach(u=>{var g=s.items.properties[u];s.items.properties[u]=wt(g,n)});return s},Yt=e=>wt(e,Xt),Xt=e=>{try{var n=f(e);if(n.rules=n.rules||[],n.props=n.props||{},n["ui:options"]&&(n.props=n["ui:options"],delete n["ui:options"]),n.pattern){var s={pattern:n.pattern};n.message&&n.message.pattern&&(s.message=n.message.pattern),n.rules.push(s),delete n.pattern,delete n.message}return n.minLength&&(n.rules.push({min:n.minLength}),delete n.minLength),n.maxLength&&(n.rules.push({max:n.maxLength}),n.props.maxLength=n.maxLength,delete n.maxLength),n.min&&(n.rules.push({min:n.min}),n.props.min=n.min,delete n.min),n.max&&(n.rules.push({max:n.max}),n.props.max=n.max,delete n.max),n.step&&(n.props.step=n.step,delete n.step),n.minItems&&(n.props.minItems=n.minItems,delete n.minItems),n.maxItems&&(n.props.maxItems=n.maxItems,delete n.maxItems),n["ui:className"]&&(n.className=n["ui:className"],delete n["ui:className"]),n["ui:hidden"]&&(n.hidden=n["ui:hidden"],delete n["ui:hidden"]),n["ui:readonly"]&&(n.readOnly=n["ui:readonly"],delete n["ui:readonly"]),n["ui:disabled"]&&(n.disabled=n["ui:disabled"],delete n["ui:disabled"]),n["ui:width"]&&(n.width=n["ui:width"],delete n["ui:width"]),n["ui:labelWidth"]&&(n.labelWidth=n["ui:labelWidth"],delete n["ui:labelWidth"]),n.rules&&n.rules.length===0&&delete n.rules,n}catch(o){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",o),e}},zt=(e,n)=>{var s=parseRootValue(e),o=replaceParseValue(s)},Zt=e=>{if(typeof e!="string")return!1;var n=/^{{(function.+)}}$/,s=/^{{(.+=>.+)}}$/;return e.match(n)?e.match(n)[1]:e.match(s)?e.match(s)[1]:!1},fn=function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return b(n)?(n.theme&&s[n.theme]&&(o=Object(C.a)(Object(C.a)({},n),s[n.theme])),Object.keys(n).forEach(u=>{o[u]=e(n[u],s)})):o=n,o},wn=t("zmYW"),St=t("DtFj"),ln=t.n(St),Pn=t("dc+4"),Sn=t("Btem"),Vt=t.n(Sn),pn=t("lfLe"),hn=t("Cp9S"),Re=t.n(hn),Je=t("MaXC"),st=t("4IMT"),nt=t.n(st),Kt=t("eOfH"),gn=t("h0/l"),Pt=t.n(gn),un=Object(V.createContext)(()=>{}),Wt=Object(V.createContext)({}),Bt=()=>Object(V.useContext)(un),pt=()=>Object(V.useContext)(Wt),ht=e=>Object(V.useReducer)((n,s)=>Object(C.a)(Object(C.a)({},n),s),e);function Vn(e,n,s){var o=Object(V.useRef)();Object(V.useEffect)(()=>{o.current=e},[e]);var u=Object(V.useRef)();return Object(V.useEffect)(()=>{if(!s)return;function g(){o&&o.current&&o.current()}if(g(),n!==null)return u.current=setInterval(g,n),()=>clearInterval(u.current)},[n,s]),()=>clearInterval(u.current)}function Kn(e){var n=Object(V.useRef)();return Object(V.useEffect)(()=>{n.current=e},[e]),n.current}var sr=e=>{var n=Object(V.useState)(!1),s=Object(Ge.default)(n,2),o=s[0],u=s[1],g;try{g=localStorage.getItem(e)}catch(y){}return g||(u(!0),localStorage.setItem(e,JSON.stringify(!0))),o},Wn=()=>{var e=Object(V.useState)(!1),n=Object(Ge.default)(e,2),s=n[0],o=n[1],u=()=>o(!s);return[s,u]},Jn=e=>{var n=Object(V.useState)(e),s=Object(Ge.default)(n,2),o=s[0],u=s[1];return[o,u]},Un=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var x=localStorage.getItem(s);if(x)try{return JSON.parse(x)}catch(D){return n}return n},u=Object(V.useState)(o()),g=Object(Ge.default)(u,2),y=g[0],S=g[1],E=x=>{S(x),localStorage.setItem(s,JSON.stringify(x))};return[y,E]};function A(e){var n=e.height,s=e.width,o=e.onClick;return p.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||n||256,height:n||s||256,onClick:o},p.a.createElement("path",{d:"M755.2 375.637333a42.666667 42.666667 0 0 0 0.554667-60.330666l-213.333334-217.173334a42.666667 42.666667 0 0 0-60.842666 0l-213.333334 217.173334a42.666667 42.666667 0 1 0 60.842667 59.818666L469.333333 232.32V896a42.666667 42.666667 0 1 0 85.333334 0V232.32l140.245333 142.805333a42.666667 42.666667 0 0 0 60.330667 0.512z",fill:"#1890ff"}))}function k(e){var n=e.height,s=e.width,o=e.onClick;return p.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||n||256,height:n||s||256,onClick:o},p.a.createElement("path",{d:"M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z",fill:"#1890ff"}))}var de=t("Oxum"),Se=e=>{var n=e.message,s=e.schema,o=e.hideValidation,u="";return typeof n=="string"&&(u=n),Array.isArray(n)&&(u=n[0]||""),u=vn(u,s),!u&&o?null:p.a.createElement("div",{className:"error-message"},u)},Ee=Se,Ne=t("/MfK"),Ie=t("lfch"),Me=t("fVyk"),Ue=120,Ye=e=>{var n=e.parentId,s=e.dataIndex,o=s===void 0?[]:s,u=e.children,g=u===void 0?[]:u,y=e.errorFields,S=e.displayType,E=pt(),x=E.formData,D=E.flatten,T=E.onItemChange,I=E.removeErrorField,M="list";try{M=D[n].schema.widget}catch(K){}var J=bt(n,o),U;typeof J=="string"&&(U=Object(ee.get)(x,J));var z=Array.isArray(U)?U:[{}],Ae=()=>{var K=[...z,{}],P=K.length-1;return T(J,K),P},pe=K=>{var P=z[K],X=[...z.slice(0,K),P,...z.slice(K)];T(J,X)},he=K=>{var P=z.filter((X,W)=>W!==K);T(J,P),I("".concat(J,"[").concat(K,"]"))},ge=K=>{if(K!==0){var P=z[K],X=z[K-1],W=z;W[K]=X,W[K-1]=P,T(J,W)}},oe=K=>{if(!(K>=z.length-1)){var P=z[K],X=z[K+1],W=z;W[K]=X,W[K+1]=P,T(J,W)}},xe={displayList:z,dataPath:J,dataIndex:o,children:g,deleteItem:he,addItem:Ae,copyItem:pe,moveItemDown:oe,moveItemUp:ge,listData:U,flatten:D,errorFields:y,displayType:S};switch(M){case"list0":return p.a.createElement(Jt,xe);case"list1":return p.a.createElement(qe,xe);case"list2":return p.a.createElement($t,xe);case"list3":return p.a.createElement(kt,xe);default:return p.a.createElement(Jt,xe)}},gt=Ye,qe=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,u=e.children,g=e.deleteItem,y=e.addItem,S=e.copyItem,E={schema:{type:"object",properties:{}},rules:[],children:u};return p.a.createElement("div",{className:""},s.map((x,D)=>p.a.createElement("div",{key:D,style:{display:"flex"}},p.a.createElement(mn,{displayType:"inline",_item:E,dataIndex:[...o,D]}),p.a.createElement("div",{style:{marginTop:6}},p.a.createElement(Pt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>g(D),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement(Ne.a,{style:{fontSize:17,marginLeft:8}})),p.a.createElement(Ie.a,{style:{fontSize:16,marginLeft:8},onClick:()=>S(D)})))),p.a.createElement(nt.a,{style:{marginTop:s.length>0?0:8},type:"dashed",onClick:y},"\u65B0\u589E\u4E00\u6761"))},kt=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataPath,u=e.dataIndex,g=e.children,y=e.deleteItem,S=e.addItem,E=e.moveItemDown,x=e.moveItemUp,D=e.flatten,T=e.errorFields,I=ht({showDrawer:!1,currentIndex:-1}),M=Object(Ge.default)(I,2),J=M[0],U=M[1],z={schema:{type:"object",properties:{}},rules:[],children:g},Ae=J.showDrawer,pe=J.currentIndex,he=s.map((P,X)=>Object(C.a)(Object(C.a)({},P),{},{$idx:X})),ge=g.map(P=>{var X=D[P],W=X&&X.schema||{},_=Dt(P);return{dataIndex:_,title:W.title,width:Ue,render:(be,De)=>{var rt=bt(P,[De.$idx]),ot=T.find(xt=>xt.name==rt)||{};return p.a.createElement("div",null,p.a.createElement("div",null,sn(be,W)),ot.error&&p.a.createElement(Ee,{message:ot.error,schema:W}))}}});ge.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(P,X,W)=>{var _=P&&P.$idx||0;return p.a.createElement(Re.a,null,p.a.createElement("a",{onClick:()=>oe(_)},"\u7F16\u8F91"),p.a.createElement(Pt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>y(W),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement("a",null,"\u5220\u9664")))}});var oe=P=>{U({showDrawer:!0,currentIndex:P})},xe=()=>{U({showDrawer:!1,currentIndex:-1})},K=()=>{var P=S();oe(P)};return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"w-100 mb2 tr"},p.a.createElement(nt.a,{type:"primary",size:"small",onClick:K},"\u65B0\u589E")),p.a.createElement(Vt.a,{width:"600",title:"\u7F16\u8F91",placement:"right",onClose:xe,visible:Ae},p.a.createElement("div",{className:"fr-container"},p.a.createElement(mn,{_item:z,dataIndex:[...u,pe]}))),p.a.createElement(ln.a,{scroll:{x:"max-content"},columns:ge,dataSource:he,rowClassName:(P,X)=>{var W=P&&P.$idx,_=T.find(be=>be.name.indexOf("".concat(o,"[").concat(W,"]"))>-1);return _?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},$t=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,u=e.children,g=e.deleteItem,y=e.addItem,S=e.flatten,E=s.map((D,T)=>({index:T})),x=u.map(D=>{var T=S[D],I=T&&T.schema||{};return{dataIndex:D,title:I.title,width:Ue,render:(M,J,U)=>{var z=[...o,J.index];return p.a.createElement(mn,{hideTitle:!0,displayType:"inline",key:U.toString(),id:D,dataIndex:z})}}});return x.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(D,T,I)=>p.a.createElement(Pt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>g(idx),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement("a",null,"\u5220\u9664"))}),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"w-100 mb2 tr"},p.a.createElement(nt.a,{type:"primary",size:"small",onClick:y},"\u65B0\u589E")),p.a.createElement(ln.a,{scroll:{x:"max-content"},columns:x,dataSource:E,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Jt=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,u=e.children,g=e.deleteItem,y=e.copyItem,S=e.addItem,E=e.displayType,x={schema:{type:"object",properties:{}},rules:[],children:u};return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"fr-card-list"},s.map((D,T)=>p.a.createElement("div",{className:"fr-card-item ".concat(E==="row"?"fr-card-item-row":""),key:T},p.a.createElement("div",{className:"fr-card-index"},T+1),p.a.createElement(mn,{displayType:E,_item:x,dataIndex:[...o,T]}),p.a.createElement(Re.a,{direction:"horizontal",className:"fr-card-toolbar"},p.a.createElement(Pt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>g(T),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement(Ne.a,{style:{fontSize:17,marginLeft:8}})),p.a.createElement(Ie.a,{style:{fontSize:16,marginLeft:8},onClick:()=>y(T)}))))),p.a.createElement(nt.a,{style:{marginTop:s.length>0?0:8},type:"dashed",onClick:S},"\u65B0\u589E\u4E00\u6761"))},Ut=e=>{var n=e.children,s=n===void 0?[]:n,o=e.dataIndex,u=o===void 0?[]:o,g=e.displayType;return p.a.createElement(p.a.Fragment,null,s.map((y,S)=>{var E={displayType:g,id:y,dataIndex:u};return p.a.createElement(mn,Object(Z.default)({key:S.toString()},E))}))},qt=Ut;function _t(e,n,s){var o=this,u=Object(V.useRef)(null),g=Object(V.useRef)(0),y=Object(V.useRef)(null),S=Object(V.useRef)([]),E=Object(V.useRef)(),x=Object(V.useRef)(),D=Object(V.useRef)(e),T=Object(V.useRef)(!0);D.current=e;var I=!n&&n!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0,s=s||{};var M=!!s.leading,J="trailing"in s?!!s.trailing:!0,U="maxWait"in s,z=U?Math.max(+s.maxWait||0,n):null;Object(V.useEffect)(()=>(T.current=!0,()=>{T.current=!1}),[]);var Ae=Object(V.useMemo)(()=>{var pe=P=>{var X=S.current,W=E.current;return S.current=E.current=null,g.current=P,x.current=D.current.apply(W,X)},he=(P,X)=>{I&&cancelAnimationFrame(y.current),y.current=I?requestAnimationFrame(P):setTimeout(P,X)},ge=P=>{if(!T.current)return!1;var X=P-u.current,W=P-g.current;return!u.current||X>=n||X<0||U&&W>=z},oe=P=>(y.current=null,J&&S.current?pe(P):(S.current=E.current=null,x.current)),xe=()=>{var P=Date.now();if(ge(P))return oe(P);if(!!T.current){var X=P-u.current,W=P-g.current,_=n-X,be=U?Math.min(_,z-W):_;he(xe,be)}},K=function(){for(var X=Date.now(),W=ge(X),_=arguments.length,be=new Array(_),De=0;De<_;De++)be[De]=arguments[De];if(S.current=be,E.current=o,u.current=X,W){if(!y.current&&T.current)return g.current=u.current,he(xe,n),M?pe(u.current):x.current;if(U)return he(xe,n),pe(u.current)}return y.current||he(xe,n),x.current};return K.cancel=()=>{y.current&&(I?cancelAnimationFrame(y.current):clearTimeout(y.current)),g.current=0,S.current=u.current=E.current=y.current=null},K.isPending=()=>!!y.current,K.flush=()=>y.current?oe(Date.now()):x.current,K},[M,U,n,z,J,I]);return Ae}var ze=_t,jt=e=>{var n=e.labelClass,s=e.labelStyle,o=e.schema,u=e.displayType,g=pt(),y=g.displayType,S=g.readOnly,E=o.title,x=o.description,D=o.required,T=o.type,I=T==="object",M=o.displayType||u||y||"column";return p.a.createElement("div",{className:n,style:s},p.a.createElement("label",{className:"fr-label-title ".concat(Et(o,S)||M==="column"?"no-colon":""),title:E},D===!0&&p.a.createElement("span",{className:"fr-label-required"}," *"),p.a.createElement("span",{className:"".concat(I?"b":""," ").concat(M==="column"?"flex-none":"")},E),x&&(M==="row"?p.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":x},p.a.createElement("i",{className:"fr-tooltip-icon"}),p.a.createElement("div",{className:"fr-tooltip-container"},p.a.createElement("i",{className:"fr-tooltip-triangle"}),x)):M==="inline"?null:p.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",x,"\xA0)"))))},it=jt,He={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:url":"url","string:dateTime":"date","string:date":"date","string:time":"time","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"timeRange","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function _e(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:He,s=e.type,o=e.format,u=e.enum,g=e.readOnly,y=[];g&&(y.push("".concat(s,"?readOnly")),y.push("*?readOnly")),u&&(Array.isArray(u)&&(s==="array"&&u.length>6||s!=="array"&&u.length>2)?(y.push("".concat(s,"?enum_long")),y.push("*?enum_long")):(y.push("".concat(s,"?enum")),y.push("*?enum"))),o&&y.push("".concat(s,":").concat(o)),y.push(s);var S="";return y.some(E=>(S=n[E],!!S)),S}var dt={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},dn=t("6UYH"),At=t("fTA7"),Ht=t.n(At),Xe=t("bd+v"),et=t("LB4q"),Be=t.n(et),at=t("Hjg5"),Cn=t("rmht"),yn=t.n(Cn),en=t("pJsf"),Dn=t("g4D/"),bn=t.n(Dn),Rn=t("LGkk"),An=t("rVaU"),ia=t.n(An),ir=t("b+Mx"),oa=t("5Dct"),Hn=t.n(oa),la=t("cUip"),Fn=t("iJl9"),jn=t.n(Fn),Gt=(e,n)=>s=>o=>{var u=o.schema,g=Object(O.a)(o,["schema"]),y=Object(C.a)(Object(C.a)({},u),n),S=typeof e=="function"?e(Object(C.a)({schema:y},g)):{},E=Object(C.a)(Object(C.a)({schema:y},g),S),x=Gn(E);return p.a.createElement(s,x)},Gn=e=>{var n=e.onChange,s=e.value,o=e.defaultValue,u=e.schema,g=Object(O.a)(e,["onChange","value","defaultValue","schema"]),y=Object(C.a)({},u),S=y||{},E=S.trigger,x=S.valuePropName,D={},T="value",I=s===void 0?o:s;x&&typeof x=="string"?(T=x,D[x]=I):D.value=I;var M=function(){for(var Ae=arguments.length,pe=new Array(Ae),he=0;he<Ae;he++)pe[he]=arguments[he];var ge=ut(T,...pe);n(ge)};E&&typeof E=="string"?D[E]=M:D.onChange=M;var J={disabled:y.disabled||y["ui:disabled"],readOnly:y.readOnly||y["ui:readonly"],hidden:y.hidden||y["ui:hidden"]},U=Object(C.a)(Object(C.a)(Object(C.a)({},D),{},{schema:y},J),g);return U},ua=e=>{var n=e.schema,s=e.style,o=e.options,u;if(o&&Array.isArray(o))u=o;else{var g=n||{},y=g.enum,S=g.enumNames;u=lt(y).map((E,x)=>{var D=S&&Array.isArray(S)?S[x]:E,T=typeof D=="string"&&D[0]==="<";return T&&(D=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:D}})),{label:D,value:E}})}return{options:u,mode:"multiple",style:Object(C.a)({width:"100%",marginTop:5},s)}},da=Gt(ua)(bn.a.Group),or=da,ca=t("ypy7"),Qn=t.n(ca),lr=t("rNQX");function ma(e){var n=e.schema.format,s=u=>{e.disabled||e.readonly||e.onChange(u.color)},o=u=>{e.onChange(u.target.value)};return p.a.createElement("div",{className:"fr-color-picker"},p.a.createElement(Qn.a,{type:n,animation:"slide-up",color:e.value||"#ffffff",onChange:s}),e.readonly?p.a.createElement("span",null,e.value||"#ffffff"):p.a.createElement(jn.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var br=t("GBD3"),va=t("wXtC"),Nn=t.n(va),fa=t("wd/R"),cn=t.n(fa),ur=e=>{var n=e.onChange,s=e.format,o=e.value,u=e.style,g=Object(O.a)(e,["onChange","format","value","style"]),y=$(s),S=o||void 0;typeof S=="string"&&(s==="week"&&(S=S.substring(0,S.length-1)),s==="quarter"&&(S=S.replace("Q",""))),S&&(S=cn()(S,y));var E=(D,T)=>{n(T)},x={value:S,style:Object(C.a)({width:"100%"},u),onChange:E};return s==="dateTime"&&(x.showTime=!0),["week","month","quarter","year"].indexOf(s)>-1&&(x.picker=s),x=Object(C.a)(Object(C.a)({},x),g),p.a.createElement(Nn.a,x)},dr=t("mxgt"),pa=t("4ZwL"),Yn=t.n(pa),ha=e=>{var n=e.onChange,s=e.format,o=e.value,u=e.style,g=Object(O.a)(e,["onChange","format","value","style"]),y=$(s),S=o?cn()(o,y):void 0,E=(D,T)=>{n(T)},x=Object(C.a)({value:S,style:Object(C.a)({width:"100%"},u),onChange:E},g);return p.a.createElement(Yn.a,x)},ga=Nn.a.RangePicker,ya=e=>{var n=e.onChange,s=e.format,o=e.value,u=e.style,g=Object(O.a)(e,["onChange","format","value","style"]),y=$(s),S=Array.isArray(o)?o:[],E=Object(Ge.default)(S,2),x=E[0],D=E[1];typeof x=="string"&&typeof D=="string"&&(s==="week"&&(x=x.substring(0,x.length-1),D=D.substring(0,D.length-1)),s==="quarter"&&(x=x.replace("Q",""),D=D.replace("Q","")));var T=x&&D?[cn()(x,y),cn()(D,y)]:[],I=(J,U)=>{n(U)},M={value:T,style:Object(C.a)({width:"100%"},u),onChange:I};return s==="dateTime"&&(M.showTime=!0),["week","month","quarter","year"].indexOf(s)>-1&&(M.picker=s),M=Object(C.a)(Object(C.a)({},M),g),p.a.createElement(ga,M)},cr=ya,ba=Yn.a.RangePicker,Xn=e=>{var n=e.onChange,s=e.format,o=e.value,u=e.style,g=Object(O.a)(e,["onChange","format","value","style"]),y=$(s),S=Array.isArray(o)?o:[],E=Object(Ge.default)(S,2),x=E[0],D=E[1],T=x&&D?[cn()(x,y),cn()(D,y)]:[],I=(J,U)=>{n(U)},M=Object(C.a)({style:Object(C.a)({width:"100%"},u),value:T,onChange:I},g);return p.a.createElement(ba,M)},ja=Xn;function xa(e){var n=e.children;return p.a.createElement("div",{className:"w-100"},n)}var jr=t("7LYo"),Oa=t("5GXF"),Zn=t.n(Oa),Ea=Zn.a.Panel;function Sa(e){var n=e.children,s=e.title,o=Object(O.a)(e,["children","title"]),u=pt(),g=u.theme,y=u.displayType;return s?g=="1"?p.a.createElement("div",{className:"w-100"},p.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},s),p.a.createElement("div",{style:{marginLeft:y=="row"?0:12}},n)):p.a.createElement("div",{className:"w-100"},p.a.createElement(Zn.a,{defaultActiveKey:["1"]},p.a.createElement(Ea,{header:p.a.createElement("div",{style:{fontSize:16,fontWeight:500}},s),key:"1",className:"fr-collapse-object"},n))):p.a.createElement("div",{className:"w-100"},n)}var mr=t("ek7I"),vr=t("FAat"),kn=t.n(vr),Ca=e=>{var n=e.schema,s=e.value,o=e.style,u=e.options,g=Object(O.a)(e,["schema","value","style","options"]),y;if(u&&Array.isArray(u))y=u;else{var S=n||{},E=S.enum,x=S.enumNames;y=lt(E).map((I,M)=>{var J=x&&Array.isArray(x)?x[M]:I,U=typeof J=="string"&&J[0]==="<";return U&&(J=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:J}})),{label:J,value:I}})}var D=Object(C.a)({options:y,mode:"multiple",style:Object(C.a)({width:"100%"},o)},g),T=Array.isArray(s)?s:void 0;return p.a.createElement(kn.a,Object(Z.default)({value:T},D))},Da=Ca,fr=t("7kJ1"),pr=t("qPIi"),Ra=t.n(pr),Aa=e=>{var n=e.schema,s=e.style,o=e.options,u;if(o&&Array.isArray(o))u=o;else{var g=n||{},y=g.enum,S=g.enumNames;u=lt(y).map((E,x)=>{var D=S&&Array.isArray(S)?S[x]:E,T=typeof D=="string"&&D[0]==="<";return T&&(D=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:D}})),{label:D,value:E}})}return{options:u,mode:"multiple",style:Object(C.a)({width:"100%",minWidth:120,marginTop:5},s)}},Fa=Gt(Aa)(Ra.a.Group),Na=Fa,Ta=e=>{var n=e.schema,s=e.style,o=e.options,u;if(o&&Array.isArray(o))u=o;else{var g=n||{},y=g.enum,S=g.enumNames;u=lt(y).map((E,x)=>{var D=S&&Array.isArray(S)?S[x]:E,T=typeof D=="string"&&D[0]==="<";return T&&(D=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:D}})),{label:D,value:E}})}return{options:u,style:Object(C.a)({width:"100%",minWidth:120},s)}},Ia=Gt(Ta)(kn.a),wa=Ia,Pa=t("tCGa"),Ba=t("DH6M"),$a=t.n(Ba),La=e=>{var n=e.schema,s=n.max,o=n.min,u=n.step,g={};(s||s===0)&&(g={max:s}),(o||o===0)&&(g=Object(C.a)(Object(C.a)({},g),{},{min:o})),u&&(g=Object(C.a)(Object(C.a)({},g),{},{step:u}));var y=!1;e.options&&e.options.hideNumber&&(y=!0);var S=e.readonly?p.a.createElement("span",{style:{width:"90px"}},e.value===""?"-":e.value):p.a.createElement(Hn.a,Object(Z.default)({},e.options,g,{style:{width:"90px"},value:e.value,disabled:e.disabled,onChange:e.onChange}));return p.a.createElement("div",{className:"fr-slider"},p.a.createElement($a.a,Object(Z.default)({style:{flexGrow:1,marginRight:y?0:12}},g,{onChange:e.onChange,value:typeof e.value=="number"?e.value:o||0,disabled:e.disabled||e.readonly})),y?null:S)},qn=La,_n=t("VDQ/"),Ma=t("B8+X"),za=t.n(Ma),Va=t("tL+A"),Ka=t("QpBz"),ea=t.n(Ka),Wa=t("z7Xi");function Ja(e){var n=e.action,s=e.value,o=e.onChange,u=e.uploadProps,g=e.buttonProps,y=Object(C.a)({name:"file",type:"file",action:n,onChange(x){x.file.status==="done"?(ea.a.success("".concat(x.file.name," \u4E0A\u4F20\u6210\u529F")),o(x.file.response.url)):x.file.status==="error"&&ea.a.error("".concat(x.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},u),S={icon:p.a.createElement(Wa.a,null),children:"\u4E0A\u4F20"},E=Object(C.a)(Object(C.a)({},S),g);return p.a.createElement("div",{className:"fr-upload-mod"},p.a.createElement(za.a,Object(Z.default)({},y,{className:"fr-upload-file"}),p.a.createElement(nt.a,E)),s&&p.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var Ua=t("/xgg"),hr=t("aOJk"),Ha=t.n(hr),Ga=t("mpQp"),Qa="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Bn=e=>{var n=e.value;return p.a.createElement(Ha.a,{content:p.a.createElement("img",{src:n||Qa,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},p.a.createElement(Ga.a,null))};function Ya(e){var n=e.value,s=Object(O.a)(e,["value"]);return p.a.createElement(jn.a,Object(Z.default)({value:n,addonAfter:p.a.createElement(Bn,{value:n})},s))}var $n=e=>{var n=e.value,s=H(n);return s?p.a.createElement("a",{target:"_blank",href:n},"\u6D4B\u8BD5\u94FE\u63A5"):p.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function ta(e){var n=e.value,s=Object(O.a)(e,["value"]);return p.a.createElement(jn.a,Object(Z.default)({value:n,addonAfter:p.a.createElement($n,{value:n})},s))}function Xa(e){var n=e.value,s=e.schema,o="-";if(s.type==="boolean")o=n===!0?"\u2714":"\u2718";else if(Array.isArray(s.enum)&&Array.isArray(s.enumNames)){var u=s.enum.indexOf(n);o=s.enumNames[u]||"-"}else typeof n=="number"?o=String(n):typeof n=="string"&&(o=n);return p.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var na=jn.a.TextArea,Ln=Gt(e=>{var n=e.style;return{style:Object(C.a)({width:"100%"},n)}})(Hn.a),Za=Gt(e=>{var n=e.style;return{style:Object(C.a)({marginTop:5},n)}})(ia.a),aa=Gt(e=>{var n=e.autoSize;return{autoSize:n||{minRows:3}}})(na),ka=e=>{var n=e.style,s=Object(O.a)(e,["style"]);return p.a.createElement(bn.a,Object(Z.default)({style:Object(C.a)({paddingTop:4,paddingBottom:4},n)},s))},ra=e=>{var n=e.style,s=Object(O.a)(e,["style"]);return p.a.createElement(yn.a,Object(Z.default)({style:Object(C.a)({width:"100%"},n)},s))},gr=e=>{var n=e.style,s=Object(O.a)(e,["style"]);return p.a.createElement(Be.a,Object(Z.default)({style:Object(C.a)({width:"100%"},n)},s))},qa={input:jn.a,checkbox:ka,checkboxes:or,color:ma,date:ur,time:ha,dateRange:cr,timeRange:ja,imageInput:Ya,url:ta,list:xa,map:Sa,multiSelect:Da,number:Ln,radio:Na,select:wa,slider:qn,switch:Za,textarea:aa,upload:Ja,html:Xa,rate:Ht.a,treeSelect:ra,cascader:gr},xr=Object.keys(qa),_a=e=>{var n=e.schema,s=e.onChange,o=e.value,u=e.children,g=e.onItemChange,y=e.formData,S=e.getValue,E=e.readOnly,x=e.dataPath,D=e.dataIndex,T=Bt(),I=T.widgets,M=T.mapping,J=_e(n,M);E&&["object","array"].indexOf(n.type)===-1&&(J="html");var U=I[J],z=n.widget||n["ui:widget"];z&&I[z]&&(U=I[z],J=z);var Ae=dt[J],pe=Object(C.a)({schema:Object(C.a)(Object(C.a)({},n),Ae),onChange:s,value:o,children:u},n.props);["title","placeholder","disabled","format"].forEach(ge=>{n[ge]&&(pe[ge]=n[ge])}),n.default!==void 0&&(pe.defaultValue=n.default),n.props&&(pe=Object(C.a)(Object(C.a)({},pe),n.props)),pe.addons={onItemChange:g,setValue:g,getValue:S,formData:y,dataPath:x,dataIndex:D};var he=Gn(pe);return p.a.createElement(U,he)},er=(e,n)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:e.value===n.value&&JSON.stringify(e.schema)===JSON.stringify(n.schema),Mn=p.a.memo(_a,er),yr=e=>{var n=e.$id,s=e.dataIndex,o=e.item,u=e.labelClass,g=e.labelStyle,y=e.contentClass,S=e.hasChildren,E=e.children,x=e.errorFields,D=x===void 0?[]:x,T=e.hideTitle,I=e.displayType,M=o.schema,J=pt(),U=J.onItemChange,z=J.formData,Ae=J.isEditing,pe=J.setEditing,he=J.touchKey,ge=J.debounceInput,oe=J.readOnly,xe=Object(V.useRef)(),K=bt(n,s),P=f(M),X=[...o.rules];Ae&&xe.current?P=xe.current:(Te(P)&&(P=$e(P,z,K)),xe.current=P,X=X.map(yt=>{var sa={};return Object.keys(yt).forEach(ve=>{var Ve=je(yt[ve]);sa[ve]=Ve?we(yt[ve],z,K):yt[ve]}),sa}));var W=D.find(yt=>yt.name===K),_=W&&W.error,be=Array.isArray(_)&&_.length>0,De=be?y+" ant-form-item-has-error":y,rt=Nt(z,K),ot=yt=>{if(yt==="#"||!yt)return z;if(typeof yt=="string")return Nt(z,yt);console.error("path has to be a string")},xt={},Ot=ze(pe,350),Ft=oe!==void 0?oe:P.readOnly,tn=yt=>{he(K),ge&&(pe(!0),Ot(!1)),typeof K=="string"&&U(K,yt)},xn={labelClass:u,labelStyle:g,schema:P,displayType:I},On=I==="inline"||Ft===!0,nn={message:_,schema:P,displayType:I,hideValidation:On},En={className:u,style:g},zn=!T&&!!P.title,Tn={schema:P,readOnly:Ft,onChange:tn,getValue:ot,formData:z,value:rt,onItemChange:U,dataIndex:s,dataPath:K};if(Tn.children=S?E:Et(P,Ft)?P.title:null,P.hidden)return null;if(Et(P,Ft))return p.a.createElement(p.a.Fragment,null,zn&&p.a.createElement("div",En),p.a.createElement("div",{className:De,style:xt},p.a.createElement(Mn,Tn),p.a.createElement(Ee,nn)));var In=p.a.createElement(it,xn);return ft(P)?(In=p.a.createElement("div",{style:{display:"flex"}},In,p.a.createElement(Ee,nn)),p.a.createElement("div",{className:De,style:xt},p.a.createElement(Mn,Object(Z.default)({},Tn,{message:_,title:zn?In:void 0})))):p.a.createElement(p.a.Fragment,null,zn&&In,p.a.createElement("div",{className:De,style:xt},p.a.createElement(Mn,Tn),p.a.createElement(Ee,nn)))},tr=yr,nr=e=>{var n=e.id,s=n===void 0?"#":n,o=e._item,u=e.dataIndex,g=u===void 0?[]:u,y=e.hideTitle,S=y===void 0?!1:y,E=e.hideValidation,x=E===void 0?!1:E,D=e.debugCss,T=Object(O.a)(e,["id","_item","dataIndex","hideTitle","hideValidation","debugCss"]),I=pt(),M=I.displayType,J=I.column,U=I.flatten,z=I.errorFields,Ae=I.labelWidth,pe=I.readOnly,he=o||U[s];if(!he)return null;var ge=he.schema,oe=ge.displayType||T.displayType||M||"column",xe=ge.type==="object",K=vt(ge),P=xe||K,X=Et(ge,pe),W=ge.width||ge["ui:width"],_="fr-field ".concat(oe==="inline"?"":"w-100"," flex"),be="fr-label",De="fr-content";switch(ge.type){case"object":xe&&(ge.title&&(be+=" fr-label-object"),_+=" fr-field-object");break;case"array":K&&(ge.title&&(be+=" fr-label-list"),_+=" fr-field-column");break;case"boolean":X&&(De+=" fr-content-column",_+=" flex ".concat(oe==="column"?"flex-column":""));break;default:}if(!P&&!X)if(oe==="column")switch(_+=" flex-column",be+=" fr-label-column",De+=" fr-content-column",ge.type){case"object":break;case"array":ge.title&&!ge.enum;break;case"boolean":break;default:}else oe==="row"&&(_+="",be+=" fr-label-row",De+=" fr-content-row",!xe&&!X&&(be+=" flex-shrink-0 fr-label-row",De+=" flex-grow-1 relative"));var rt={};xe||(W?rt={width:W,paddingRight:"12px"}:J>1&&(rt={width:"calc(100% /".concat(J,")"),paddingRight:"12px"}));var ot=Qe("labelWidth",s,U)||Ae,xt=w(ot)?Number(ot):v(ot)?ot:110,Ot={width:xt};(P||oe==="column")&&(Ot={flexGrow:1}),oe==="inline"&&(Ot={marginTop:5,paddingLeft:12},be="",_.indexOf("fr-field-object")===-1&&(_+=" fr-field-inline"));var Ft=he.children&&he.children.length>0,tn={$id:s,dataIndex:g,item:he,labelClass:be,labelStyle:Ot,contentClass:De,errorFields:z,hasChildren:Ft,displayType:oe,hideTitle:S,hideValidation:x},xn=Ft?p.a.createElement("div",{className:"flex flex-wrap"},p.a.createElement(qt,{dataIndex:g,errorFields:z,displayType:oe},he.children)):null,On=Ft?p.a.createElement(gt,{parentId:s,dataIndex:g,errorFields:z,displayType:oe},he.children):null;return p.a.createElement("div",{style:rt,className:"".concat(_," ").concat(D?"debug":"")},p.a.createElement(tr,tn,xe&&xn,K&&On))},mn=nr,ar=t("SA0R"),rr=t.n(ar),Or=t("OVFa"),a=t("k/c8"),r=t("cFvS"),i="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",d={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:i,method:i,array:i,object:i,number:i,date:i,boolean:i,integer:i,float:i,regexp:i,email:i,url:i,hex:i},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},l="${title} is not a valid ${type}",h={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},m=t("KpVd"),j=e=>{var n=e.formData,s=e.schema,o=s===void 0?{}:s,u=e.isRequired,g=u===void 0?!0:u,y=e.touchedKeys,S=y===void 0?[]:y,E=e.locale,x=E===void 0?"cn":E,D=e.validateMessages,T=D===void 0?{}:D;if(Object.keys(o).length===0)return Promise.resolve();var I=Rt({schema:o,isRequired:g}).fields,M=[];g||S.forEach(pe=>{var he=on(pe,o),ge=Object(ee.get)(n,pe);if(!ge&&he.required){var oe=he.message||T.required||"${title}\u5FC5\u586B";M.push({name:pe,error:[oe]})}});var J=d,U=h,z;try{z=new m.a(I)}catch(pe){return Promise.resolve([])}var Ae=x==="en"?U:J;return Object(ee.merge)(Ae,T),z.messages(Ae),z.validate(n||{}).then(pe=>M.length>0?M:[]).catch(pe=>{var he=pe.errors,ge=pe.fields,oe=lt(he).map(K=>{var P=It(K.field);return{name:P,error:[K.message]}});oe=[...oe,...M];var xe=[];return oe.forEach(K=>{var P=xe.findIndex(X=>X.name===K.name);P===-1?xe.push(K):xe[P].error=[...xe[P].error,...K.error]}),xe})},R={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},N={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},B=(e,n)=>{var s=se(e,n);return s=Mt(s),s},se=(e,n)=>{var s=f(e),o=[],u=[],g=[],y=E=>Array.isArray(E)&&E.every(x=>typeof x=="string");Object.keys(n).forEach(E=>{var x=n[E]&&n[E].schema&&n[E].schema.bind,D=E.replace("[]","");x===!1?o.push(D):typeof x=="string"?u.push({key:D,bind:x}):y(x)&&g.push({key:D,bind:x})});var S=E=>{o.forEach(x=>{Object(ee.unset)(E,x)}),u.forEach(x=>{var D=x.key,T=x.bind,I=Object(ee.get)(E,D),M=Object(ee.get)(E,T);b(M)&&(I=Object(C.a)(Object(C.a)({},M),I)),Object(ee.set)(E,T,I),Object(ee.unset)(E,D)}),g.forEach(x=>{var D=x.key,T=x.bind,I=Object(ee.get)(E,D);Array.isArray(I)&&I.forEach((M,J)=>{T[J]&&Object(ee.set)(E,T[J],M)}),Object(ee.unset)(E,D)})};return S(s),s},L=(e,n)=>{var s=f(e),o=[],u=[],g=S=>Array.isArray(S)&&S.every(E=>typeof E=="string");Object.keys(n).forEach(S=>{var E=n[S]&&n[S].schema&&n[S].schema.bind,x=S.replace("[]","");typeof E=="string"?o.push({key:x,bind:E}):g(E)&&u.push({key:x,bind:E})});var y=S=>{o.forEach(E=>{var x=E.key,D=E.bind,T=Object(ee.get)(S,D),I=Object(ee.get)(S,x);b(I)&&(T=Object(C.a)(Object(C.a)({},I),T)),Object(ee.set)(S,x,T),Object(ee.unset)(S,D)}),u.forEach(E=>{var x=E.key,D=E.bind,T=[];D.forEach(I=>{T.push(Object(ee.get)(S,I)),Object(ee.unset)(S,I)}),Object(ee.set)(S,x,T)})};return y(s),s},ye=e=>{var n=e||{},s=n.formData,o=n.onChange,u=n.onValidate,g=ht({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),y=Object(Ge.default)(g,2),S=y[0],E=y[1],x=Object(V.useRef)({}),D=Object(V.useRef)({}),T=Object(V.useRef)(!1),I=Object(V.useRef)(),M=Object(V.useRef)("cn"),J=Object(V.useRef)(),U=Object(V.useRef)({}),z=Object(V.useRef)([]),Ae=S.formData,pe=S.submitData,he=S.errorFields,ge=he===void 0?[]:he,oe=S.isValidating,xe=S.outsideValidating,K=S.isSubmitting,P=S.isEditing,X=S.allTouched,W=S.touchedKeys,_=e&&e.hasOwnProperty("formData"),be=_?s:Ae;U.current=Object(V.useMemo)(()=>Object(ee.merge)(Qt(x.current),be),[JSON.stringify(be),JSON.stringify(x.current)]),z.current=W;var De=ve=>{typeof o=="function"?o(ve):E({formData:ve})},rt=ve=>{if(typeof u=="function"){var Ve=ve.map(an=>an.name);u(Ve)}E({errorFields:ve})},ot=ve=>{if(!(z.current.indexOf(ve)>-1)){var Ve=[...z.current,ve];E({touchedKeys:Ve})}};Object(V.useEffect)(()=>{_&&typeof u=="function"&&setTimeout(()=>{j({formData:U.current,schema:x.current,isRequired:!0,touchedKeys:z.current,locale:M.current,validateMessages:J.current}).then(ve=>{var Ve=ve.map(an=>an.name);u(Ve)})},200)},[]),Object(V.useEffect)(()=>{if(T.current){T.current=!1;return}j({formData:U.current,schema:x.current,isRequired:X,touchedKeys:z.current,locale:M.current,validateMessages:J.current}).then(ve=>{rt(ve)})},[JSON.stringify(U.current),X]);var xt=ve=>{E({isEditing:ve})},Ot=(ve,Ve)=>{if(typeof ve=="string"){if(ve==="#"){De(Object(C.a)({},Ve));return}Object(ee.set)(U.current,ve,Ve),De(Object(C.a)({},U.current))}},Ft=ve=>{var Ve=ve.schema,an=ve.flatten,Er=ve.beforeFinish,Sr=ve.locale,Cr=ve.validateMessages;x.current=Ve,D.current=an,I.current=Er,M.current=Sr,J.current=Cr},tn=ve=>{var Ve=[];Array.isArray(ve)?Ve=[...ve,...ge]:ve&&ve.name?Ve=[ve,...ge]:console.log("error format is wrong"),Ve=Object(ee.sortedUniqBy)(Ve,an=>an.name),rt(Ve)},xn=ve=>{var Ve=ge.map(an=>an.name.indexOf(ve)===-1);rt(Ve)},On=()=>se(U.current,D.current),nn=ve=>{var Ve=L(ve,D.current);De(Ve)},En=()=>{T.current=!0,E({isValidating:!0,allTouched:!0,isSubmitting:!1}),j({formData:U.current,schema:x.current,touchedKeys:[],isRequired:!0,locale:M.current,validateMessages:J.current}).then(ve=>{if(ve&&ve.length>0&&(console.log("submit:",U.current,ve),E({errorFields:ve})),typeof I.current=="function"){Promise.resolve(B(U.current,D.current)).then(Ve=>{E({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:Ve})});return}Promise.resolve(B(U.current,D.current)).then(Ve=>{E({isValidating:!1,isSubmitting:!0,submitData:Ve})})}).catch(ve=>{console.log("submit error:",ve)})},zn=()=>{De({})},Tn=()=>E({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),In=()=>E({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),yt=()=>E({formData:{},submitData:{},errorFields:[],allTouched:!1,touchedKeys:[]}),sa={formData:U.current,schema:x.current,touchedKeys:z.current,allTouched:X,touchKey:ot,onItemChange:Ot,setValues:nn,getValues:On,resetFields:zn,submit:En,submitData:pe,errorFields:ge,isValidating:oe,outsideValidating:xe,isSubmitting:K,endValidating:Tn,endSubmitting:In,setErrorFields:tn,removeErrorField:xn,isEditing:P,setEditing:xt,syncStuff:Ft,destroyForm:yt};return sa},fe=e=>n=>{var s=ye();return p.a.createElement(e,Object(Z.default)({},n,{form:s}))},Y=(e,n)=>{console.log(e,n)};function te(e){var n=e.widgets,s=e.mapping,o=e.form,u=e.beforeFinish,g=u===void 0?Y:u,y=e.onFinish,S=y===void 0?Y:y,E=e.displayType,x=E===void 0?"column":E,D=e.schema,T=e.flatten,I=e.debug,M=e.debugCss,J=e.locale,U=J===void 0?"cn":J,z=e.debounceInput,Ae=z===void 0?!1:z,pe=e.size,he=e.configProvider,ge=e.theme,oe=e.validateMessages,xe=Object(O.a)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","debugCss","locale","debounceInput","size","configProvider","theme","validateMessages"]);try{var K=o.submit}catch(En){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var P=o.submitData,X=o.errorFields,W=o.isValidating,_=o.outsideValidating,be=o.isSubmitting,De=o.endValidating,rt=o.endSubmitting,ot=o.syncStuff,xt=o.formData,Ot=o.isEditing,Ft=o.setErrorFields,tn=Object(V.useMemo)(()=>T||Ct(D),[JSON.stringify(T),JSON.stringify(D)]);Object(V.useEffect)(()=>{ot({schema:D,flatten:tn,beforeFinish:g,locale:U,validateMessages:oe})},[JSON.stringify(T),JSON.stringify(D)]),Object(V.useEffect)(()=>()=>{o.destroyForm()},[]);var xn=Object(V.useMemo)(()=>Object(C.a)(Object(C.a)({flatten:tn},o),{},{displayType:x,theme:ge,debounceInput:Ae,debug:I,isEditing:Ot},xe),[JSON.stringify(tn),JSON.stringify(xt),JSON.stringify(X)]),On=Object(V.useMemo)(()=>({widgets:Object(C.a)(Object(C.a)({},qa),n),mapping:Object(C.a)(Object(C.a)({},He),s)}),[]);Object(V.useEffect)(()=>{if(_===!0){Promise.resolve(g(P,X)).then(En=>{En&&Ft(En),De()});return}W===!1&&be===!0&&(rt(),S(P,X))},[W,be,_]);var nn="";return pe==="small"?nn="fr-form-small":pe==="large"&&(nn="fr-form-large"),p.a.createElement(c.a,Object(Z.default)({locale:rr.a},he),p.a.createElement(Wt.Provider,{value:xn},p.a.createElement(un.Provider,{value:On},p.a.createElement("div",{className:"fr-container ".concat(nn)},I?p.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},p.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),p.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),p.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),p.a.createElement("div",null,"allTouched:"+JSON.stringify(o.allTouched)),p.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),p.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),p.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,p.a.createElement(mn,{debugCss:M})))))}var me=e=>{var n=e.isOldVersion,s=n===void 0?!0:n,o=e.schema,u=Object(O.a)(e,["isOldVersion","schema"]),g=o;return s&&(g=Yt(o)),p.a.createElement(te,Object(Z.default)({schema:g},u))},q=Q.default=me},trko:function(Ke,Q,t){},"xwS/":function(Ke,Q,t){}}]);
