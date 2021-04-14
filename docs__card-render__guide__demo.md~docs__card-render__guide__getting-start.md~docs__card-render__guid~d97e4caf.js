(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(Me,Q,t){"use strict";t.r(Q),t.d(Q,"Column",function(){return q}),t.d(Q,"Line",function(){return Ft}),t.d(Q,"PivotTable",function(){return ee});var oe=t("0Owb"),ae=t("PpiC"),c=t("q1tI"),k=t.n(c),D=t("06Lf");function O(b){var f=[],T=[];return b.forEach(v=>{v.isDim?f.push(v):T.push(v)}),{metaDim:f,metaInd:T}}function z(b){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(b==null?void 0:b.toPrecision(f))}var p=()=>k.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function dt(b,f){var T=O(b),v=T.metaDim,F=T.metaInd;if(F.length>=1&&v.length===0){var B="type",G="value";return{xField:B,yField:G,data:f.map(we=>F.map(Se=>{var Ze=Se.id,tt=Se.name;return{[B]:Ze,[G]:we[Ze]}})).flat(),meta:{[B]:{formatter:we=>{var Se;return((Se=b.find(Ze=>{var tt=Ze.id;return we===tt}))===null||Se===void 0?void 0:Se.name)||we}}},tooltip:{formatter:we=>{var Se,Ze=we[B],tt=we[G];return{name:(Se=b.find(Ke=>{var ke=Ke.id;return Ze===ke}))===null||Se===void 0?void 0:Se.name,value:tt}}}}}else if(F.length===1&&v.length===1){var _,te,ie,de=(_=v.shift())===null||_===void 0?void 0:_.id,be=(te=F.shift())===null||te===void 0?void 0:te.id;return{data:f,xField:de,yField:be,meta:{[be]:{alias:(ie=b.find(we=>{var Se=we.id;return Se===be}))===null||ie===void 0?void 0:ie.name}}}}else if(F.length>1&&v.length===1){var De,he=(De=v.shift())===null||De===void 0?void 0:De.id,Ie="value",Fe="type";return{data:f.map(we=>F.map(Se=>{var Ze=Se.id,tt=Se.name;return{[he]:we[he],[Ie]:we[Ze],[Fe]:tt}})).flat(),xField:he,yField:Ie,seriesField:Fe,isGroup:!0}}else if(F.length===1&&v.length===2){var Be,$e,Ge;return{data:f,xField:(Be=v.shift())===null||Be===void 0?void 0:Be.id,yField:($e=F.shift())===null||$e===void 0?void 0:$e.id,seriesField:(Ge=v.shift())===null||Ge===void 0?void 0:Ge.id,isGroup:!0}}return{data:f,xField:"",yField:""}}var Qe=b=>{var f=b.className,T=b.style,v=b.meta,F=v===void 0?[]:v,B=b.data,G=B===void 0?[]:B,_=b.inverted,te=Object(ae.a)(b,["className","style","meta","data","inverted"]);if(_){var ie=dt(F,G),de=ie.xField,be=ie.yField,De=Object(ae.a)(ie,["xField","yField"]);return k.a.createElement(D.b,Object(oe.default)({xField:be,yField:de},De,{renderer:"svg",errorTemplate:()=>k.a.createElement(p,null)},te))}else return k.a.createElement(D.c,Object(oe.default)({},dt(F,G),{renderer:"svg",errorTemplate:()=>k.a.createElement(p,null)},te))},q=Qe,M=t("k1fw"),Et=t("sGjT");function nn(b,f){var T=O(b),v=T.metaDim,F=T.metaInd;if(F.length===1&&v.length===1){var B,G,_,te=(B=v.shift())===null||B===void 0?void 0:B.id,ie=(G=F.shift())===null||G===void 0?void 0:G.id;return{data:f,xField:te,yField:ie,meta:{[ie]:{alias:(_=b.find(Ke=>{var ke=Ke.id;return ke===ie}))===null||_===void 0?void 0:_.name}}}}else if(F.length===1&&v.length===2){var de,be,De;return{data:f,xField:(de=v.shift())===null||de===void 0?void 0:de.id,yField:(be=F.shift())===null||be===void 0?void 0:be.id,seriesField:(De=v.shift())===null||De===void 0?void 0:De.id}}else if(F.length===2&&v.length===2){var he,Ie,Fe,Be,$e=f.map(Ke=>{var ke=F[0].id,it=v[1].id,Nt=Ke[ke],lt=Ke[it],Dt=Object(ae.a)(Ke,[ke,it].map(Et.a));return Object(M.a)({[v[1].id]:"".concat(lt,"-").concat(F[0].name)},Dt)}),Ge=f.map(Ke=>{var ke=F[1].id,it=v[1].id,Nt=Ke[ke],lt=Ke[it],Dt=Object(ae.a)(Ke,[ke,it].map(Et.a));return Object(M.a)({[v[1].id]:"".concat(lt,"-").concat(F[1].name)},Dt)});return{data:[Ge,$e],geometryOptions:[{geometry:"line",seriesField:v[1].id},{geometry:"line",seriesField:v[1].id,lineStyle:{lineDash:[5,5]}}],xField:(he=v.shift())===null||he===void 0?void 0:he.id,yField:[(Ie=F.shift())===null||Ie===void 0?void 0:Ie.id,(Fe=F.shift())===null||Fe===void 0?void 0:Fe.id],seriesField:(Be=v.shift())===null||Be===void 0?void 0:Be.id}}else if(F.length>1&&v.length===1){var we,Se=(we=v.shift())===null||we===void 0?void 0:we.id,Ze="value",tt="type";return{data:f.map(Ke=>F.map(ke=>{var it=ke.id,Nt=ke.name;return{[Se]:Ke[Se],[Ze]:Ke[it],[tt]:Nt}})).flat(),xField:Se,yField:Ze,seriesField:tt}}return{data:f}}var ct=b=>{var f=b.className,T=b.style,v=b.meta,F=v===void 0?[]:v,B=b.data,G=B===void 0?[]:B,_=b.withArea,te=Object(ae.a)(b,["className","style","meta","data","withArea"]),ie=nn(F,G);return _?k.a.createElement(D.a,Object(oe.default)({},ie,{renderer:"svg",errorTemplate:()=>k.a.createElement(p,null)},te)):Array.isArray(ie.yField)?k.a.createElement(D.d,Object(oe.default)({},ie,{renderer:"svg",errorTemplate:()=>k.a.createElement(p,null)},te)):k.a.createElement(D.e,Object(oe.default)({},ie,{renderer:"svg",errorTemplate:()=>k.a.createElement(p,null)},te))},Ft=ct,zt=t("tJVT"),bt=t("mA+x"),mt=t("aMEK"),vt=t("ARb9"),Ct=b=>{var f=b.className,T=b.style,v=b.showSubtotal,F=v===void 0?!0:v,B=b.subtotalText,G=B===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:B,_=b.meta,te=_===void 0?[]:_,ie=b.data,de=ie===void 0?[]:ie,be=b.size,De=be===void 0?"middle":be,he=b.indicatorSide,Ie=he===void 0?"top":he,Fe=b.leftDimensionLength,Be=Fe===void 0?te.length:Fe,$e=b.leftExpandable,Ge=$e===void 0?!1:$e,we=b.topExpandable,Se=we===void 0?!1:we,Ze=b.defaultExpandAll,tt=Ze===void 0?!0:Ze,Ke=b.cellRender,ke=Object(ae.a)(b,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),it=Object(c.useState)([]),Nt=Object(zt.default)(it,2),lt=Nt[0],Dt=Nt[1],an=Object(c.useState)([]),Vt=Object(zt.default)(an,2),Rt=Vt[0],Tt=Vt[1],rn=O(te),Yt=rn.metaDim,un=rn.metaInd,It=un.map(Ce=>{var We=Ce.id,rt=Ce.name,nt=Ce.isRate;return{name:rt,code:We,align:"right",expression:nt?"AVG(".concat(We,")"):"SUM(".concat(We,")")}}),Xt=Yt.filter((Ce,We)=>We<Be),Zt=Xt.map(Ce=>{var We=Ce.id;return We}),Mt=Object(bt.b)(de,Zt,{includeTopWrapper:!0,isExpand:Ge?Ce=>Rt.includes(Ce):void 0}),kt=Object(bt.d)(Mt,{indicators:Ie==="left"?It:void 0,supportsExpand:Ge,expandKeys:Rt,onChangeExpandKeys:Tt,generateSubtotalNode:F?Ce=>({position:"start",value:Ce.path.length===0?G[0]||"\u603B\u8BA1":G[1]||"\u5C0F\u8BA1"}):void 0}),dn=Object(zt.default)(kt,1),An=dn[0],St=Yt.filter((Ce,We)=>We>=Be),sn=St.map(Ce=>{var We=Ce.id;return We}),Fn=Object(bt.b)(de,sn,{includeTopWrapper:!0,isExpand:Se?Ce=>lt.includes(Ce):void 0}),yn=Object(bt.d)(Fn,{indicators:Ie==="top"?It:void 0,supportsExpand:Se,expandKeys:lt,onChangeExpandKeys:Dt,generateSubtotalNode:F?Ce=>({position:"start",value:Ce.path.length===0?G[0]||"\u603B\u8BA1":G[1]||"\u5C0F\u8BA1"}):void 0}),Kt=Object(zt.default)(yn,1),cn=Kt[0],mn=Object(bt.c)({data:de,leftCodes:Zt,topCodes:sn,aggregate:Object(mt.a)(It)});return k.a.createElement("div",{style:T,className:"CR-PivotTable CR-PivotTable-".concat(De," ").concat(f||"")},k.a.createElement(bt.a,Object(oe.default)({defaultColumnWidth:100,leftMetaColumns:Yt.filter(Ce=>{var We=Ce.id;return Zt.includes(We)}).map(Ce=>{var We=Ce.id,rt=Ce.name;return{code:We,name:rt}}),leftTree:An.children,leftTotalNode:An,topTree:cn.children,topTotalNode:cn,getValue:(Ce,We)=>{var rt,nt=(rt=mn.get(Ce.data.dataKey))===null||rt===void 0?void 0:rt.get(We.data.dataKey);return nt==null?void 0:nt[We.code]},render:(Ce,We,rt)=>{var nt;if(Ke){var Wt=We.data.dataPath,vn=Wt===void 0?[]:Wt,wt=rt.data.dataPath,on=wt===void 0?[]:wt,Jt={};return vn.forEach((Pt,ft)=>{var pt;Jt[(pt=Xt[ft])===null||pt===void 0?void 0:pt.id]=Pt}),on.forEach((Pt,ft)=>{var pt;Jt[(pt=St[ft])===null||pt===void 0?void 0:pt.id]=Pt}),Ke(Ce,Jt,rt.code)}return(nt=un.find(Pt=>{var ft=Pt.id;return ft===rt.code}))!==null&&nt!==void 0&&nt.isRate?"".concat(z(Ce*100).toFixed(2),"%"):Ce}},ke)))},ee=Ct},"4l2o":function(Me,Q,t){},"8iYR":function(Me,Q,t){"use strict";t.r(Q),t.d(Q,"basic",function(){return oe}),t.d(Q,"expression",function(){return ae});var oe={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},ae={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},"97ez":function(Me,Q,t){},ARb9:function(Me,Q,t){},GYr9:function(Me,Q,t){},JjdP:function(Me,Q,t){"use strict";t.r(Q);var oe=t("9og8"),ae=t("WmNS"),c=t.n(ae),k=t("LtsZ"),D=`import React, { useRef } from 'react';
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

export default Demo;`,z=`export const basic = {
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

export default Demo;`,dt=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Root;`,q=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,M=`{
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

export default SearchInput;`,nn=`import React from 'react';
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

export default Demo;`,ct=`/* PrismJS 1.16.0
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
}`,Ft=`.markdown p {
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
}`,zt=`import React from 'react';
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

export default Demo;`,mt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,vt=`import React from 'react';
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

export default Demo;`,Ct=Q.default={"guide-card":{component:Object(k.dynamic)({loader:function(){var ee=Object(oe.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"oLxE"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ee.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:D}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var b=t("3PQu"),f=t("K+nK"),T=f(t("tJVT")),v=b(t("q1tI")),F=t("36SN"),B=function(){var _=(0,v.useState)("Line"),te=(0,T.default)(_,2),ie=te[0],de=te[1],be={Line:F.Line,Column:F.Column,PivotTable:F.PivotTable}[ie];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return de("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return de("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return de("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(be,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return v.default.createElement(B)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=t("36SN"),v=function(){return f.default.createElement(T.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(G,_,te){return f.default.createElement("div",null,f.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),f.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(_).length]}},G),f.default.createElement("p",null,JSON.stringify(_)),f.default.createElement("p",null,JSON.stringify(te)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return f.default.createElement(v)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var b=t("3PQu"),f=t("K+nK"),T=f(t("tJVT")),v=b(t("q1tI")),F=t("36SN"),B=function(){var _=(0,v.useState)(!1),te=(0,T.default)(_,2),ie=te[0],de=te[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:ie,onChange:function(){return de(!ie)}})),v.default.createElement(F.PivotTable,{leftExpandable:ie,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return v.default.createElement(B)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var T=f(t("4IMT")),v=f(t("fWQN")),F=f(t("mtLc")),B=f(t("yKVA")),G=f(t("879j")),_=f(t("q1tI")),te=t("gdfu"),ie=b(t("refC")),de={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},be=function(he){(0,B.default)(Fe,he);var Ie=(0,G.default)(Fe);function Fe(){return(0,v.default)(this,Fe),Ie.apply(this,arguments)}return(0,F.default)(Fe,[{key:"render",value:function(){var $e=this.props.form;return _.default.createElement("div",null,_.default.createElement(ie.default,{form:$e,schema:de}),_.default.createElement(T.default,{type:"primary",onClick:$e.submit},"\u63D0\u4EA4"))}}]),Fe}(_.default.Component),De=(0,ie.connectForm)(be);return _.default.createElement(De)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var T=f(t("4IMT")),v=f(t("q1tI")),F=t("gdfu"),B=b(t("refC")),G={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},_=function(){var de=(0,B.useForm)();return v.default.createElement("div",null,v.default.createElement(B.default,{form:de,schema:G}),v.default.createElement(T.default,{type:"primary",onClick:de.submit},"\u63D0\u4EA4"))},te=_;return v.default.createElement(te)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var T=f(t("4IMT")),v=f(t("q1tI")),F=t("gdfu"),B=b(t("refC")),G={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},_=function(){var de=(0,B.useForm)(),be=function(he,Ie){Ie.length>0?alert("errors:"+JSON.stringify(Ie)):alert("formData:"+JSON.stringify(he,null,2))};return v.default.createElement("div",null,v.default.createElement(B.default,{form:de,schema:G,onFinish:be}),v.default.createElement(T.default,{type:"primary",onClick:de.submit},"\u63D0\u4EA4"))},te=_;return v.default.createElement(te)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var b=t("3PQu"),f=t("K+nK"),T=f(t("q1tI")),v=b(t("refC")),F={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function B(){var _=(0,v.useForm)(),te=function(de,be){be.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(be))):alert(JSON.stringify(de))};return T.default.createElement("div",null,T.default.createElement(v.default,{form:_,schema:F,onFinish:te}),T.default.createElement("button",{onClick:_.submit},"\u63D0\u4EA4"))}var G=B;return T.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("c2mQ")),v=t("8iYR"),F=function(){return f.default.createElement(T.default,{schema:v.basic})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:O},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v=function(G){return{type:"object",displayType:G,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return f.default.createElement("div",null,f.default.createElement("h2",null,"display: row"),f.default.createElement(T.default,{schema:v("row")}),f.default.createElement("h2",null,"display: column"),f.default.createElement(T.default,{schema:v("column")}))};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return f.default.createElement(T.default,{schema:v})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return f.default.createElement(T.default,{readOnly:!0,schema:v})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return f.default.createElement(T.default,{labelWidth:"200",schema:v})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return f.default.createElement(T.default,{schema:v})},B=F;return f.default.createElement(B)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return f.default.createElement(T.default,{schema:v})},B=F;return f.default.createElement(B)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return f.default.createElement(T.default,{schema:v})},B=F;return f.default.createElement(B)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("bQjt")),v={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return f.default.createElement(T.default,{schema:v})},B=F;return f.default.createElement(B)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:p}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:function(){var b=t("3PQu"),f=t("K+nK");t("lfLe");var T=f(t("Cp9S"));t("MaXC");var v=f(t("4IMT"));t("tL+A");var F=f(t("QpBz")),B=f(t("tJVT")),G=b(t("q1tI")),_=t("gdfu"),te=b(t("refC")),ie=t("OH0R"),de=function(){var he=(0,te.useForm)(),Ie=(0,G.useState)({}),Fe=(0,B.default)(Ie,2),Be=Fe[0],$e=Fe[1],Ge=function(){(0,ie.fakeApi)("xxx/getForm").then(function(Ze){he.setValues({input1:"hello world",select1:"c"})})};(0,G.useEffect)(function(){(0,ie.delay)(1e3).then(function(Se){$e({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var we=function(Ze,tt){tt.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(tt.map(function(Ke){return Ke.name}))):(0,ie.fakeApi)("xxx/submit",Ze).then(function(Ke){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return G.default.createElement("div",{style:{width:"400px"}},G.default.createElement(te.default,{form:he,schema:Be,onFinish:we}),G.default.createElement(T.default,null,G.default.createElement(v.default,{onClick:Ge},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),G.default.createElement(v.default,{type:"primary",onClick:he.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},be=de;return G.default.createElement(be)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var T=f(t("4IMT"));t("tL+A");var v=f(t("QpBz")),F=f(t("q1tI")),B=t("gdfu"),G=b(t("refC")),_=t("OH0R"),te={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},ie=function(){var De=(0,G.useForm)(),he=function(Be,$e){$e.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify($e.map(function(Ge){return Ge.name}))):(0,_.fakeApi)("xxx/submit",Be).then(function(Ge){return v.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Ie=function(Be,$e){return(0,_.fakeApi)("xxx/validation").then(function(Ge){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(G.default,{form:De,schema:te,beforeFinish:Ie,onFinish:he}),F.default.createElement(T.default,{type:"primary",onClick:De.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},de=ie;return F.default.createElement(de)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var b=t("3PQu"),f=t("K+nK");t("lfLe");var T=f(t("Cp9S"));t("MaXC");var v=f(t("4IMT"));t("tL+A");var F=f(t("QpBz")),B=f(t("q1tI")),G=t("gdfu"),_=b(t("refC")),te=t("OH0R"),ie={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},de=function(){var he=(0,_.useForm)(),Ie=function($e,Ge){Ge.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ge.map(function(we){return we.name}))):(0,te.fakeApi)("xxx/submit",$e).then(function(we){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Fe=function(){(0,te.fakeApi)("xxx/getForm").then(function($e){he.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return B.default.createElement("div",{style:{width:"400px"}},B.default.createElement(_.default,{form:he,schema:ie,onFinish:Ie}),B.default.createElement(T.default,null,B.default.createElement(v.default,{onClick:Fe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),B.default.createElement(v.default,{type:"primary",onClick:he.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},be=de;return B.default.createElement(be)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:dt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var b=t("3PQu"),f=t("K+nK"),T=f(t("q1tI")),v=b(t("refC")),F={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},B=function(){var te=(0,v.useForm)();return T.default.createElement(v.default,{form:te,schema:F})},G=B;return T.default.createElement(G)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("c2mQ")),v=t("8iYR"),F=function(){return f.default.createElement(T.default,{schema:v.expression})};return f.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:O},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"widget-demo":{component:function(){var b=t("3PQu"),f=t("K+nK");t("MaXC");var T=f(t("4IMT"));t("cUip");var v=f(t("iJl9")),F=f(t("0Owb")),B=b(t("q1tI")),G=t("gdfu"),_=b(t("refC")),te={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},ie=function(he){return B.default.createElement(v.default,(0,F.default)({addonBefore:"http://",addonAfter:".com"},he))},de=function(){var he=(0,_.useForm)(),Ie=function(){};return B.default.createElement("div",null,B.default.createElement(_.default,{form:he,schema:te,widgets:{site:ie},onFinish:function(Be){return alert(JSON.stringify(Be,null,2))}}),B.default.createElement(T.default,{type:"primary",onClick:he.submit},"\u63D0\u4EA4"))},be=de;return B.default.createElement(be)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"widget-demo"}},"docs-playground":{component:Object(k.dynamic)({loader:function(){var ee=Object(oe.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"BASV"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ee.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:Qe},"main.js":{import:"./main",content:q},"json/simplest.json":{import:"./json/simplest.json",content:M},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Et},"monaco/index.js":{import:"./monaco",content:nn},"theme.css":{import:"./theme.css",content:ct},"index.css":{import:"./index.css",content:Ft}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(k.dynamic)({loader:function(){var ee=Object(oe.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"7ZP+"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ee.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{tsx:zt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var b=t("K+nK"),f=b(t("q1tI")),T=t("P2DI"),v=[],F=0;F<6;F++)v.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});var B={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},G=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(de,be){return f.default.createElement("a",{onClick:function(){return alert(de.title)}},"\u7F16\u8F91")}}],_=function(){var de=function(){return{rows:v,total:v.length}};return f.default.createElement(T.TableProvider,null,f.default.createElement(T.Search,{schema:B,api:de}),f.default.createElement(T.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:G,rowKey:"id"}))},te=_;return f.default.createElement(te)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var b=t("K+nK"),f=b(t("q1tI")),T=b(t("nYSz")),v={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},F=function(){return f.default.createElement("div",{style:{height:"80vh"}},f.default.createElement(T.default,{defaultValue:v}))},B=F;return f.default.createElement(B)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(k.dynamic)({loader:function(){var ee=Object(oe.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"PPgD"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ee.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:bt}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(k.dynamic)({loader:function(){var ee=Object(oe.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"jktF"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ee.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:mt}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(k.dynamic)({loader:function(){var ee=Object(oe.a)(c.a.mark(function f(){return c.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Promise.all([t.e(32),t.e(4)]).then(t.bind(null,"M63W"));case 2:return v.abrupt("return",v.sent.default);case 3:case"end":return v.stop()}},f)}));function b(){return ee.apply(this,arguments)}return b}()}),previewerProps:{sources:{_:{jsx:vt}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},identifier:"generator-settings"}}}},OH0R:function(Me,Q,t){"use strict";t.r(Q),t.d(Q,"delay",function(){return oe}),t.d(Q,"fakeApi",function(){return ae});var oe=c=>new Promise(k=>setTimeout(k,c)),ae=(c,k)=>(console.group("request:",c),console.log("params:",k),console.groupEnd(),oe(500))},OVFa:function(Me,Q,t){},Oxum:function(Me,Q,t){},P2DI:function(Me,Q,t){"use strict";t.r(Q),t.d(Q,"Search",function(){return f}),t.d(Q,"Table",function(){return on}),t.d(Q,"TableProvider",function(){return Wn}),t.d(Q,"useTable",function(){return ct});var oe=t("Saan"),ae=t("vgIT"),c=t.n(ae),k=t("0Owb"),D=t("k1fw"),O=t("tL+A"),z=t("QpBz"),p=t.n(z),dt=t("PpiC"),Qe=t("tJVT"),q=t("q1tI"),M=t.n(q),Et=Object(q.createContext)({}),nn=Object(q.createContext)({}),ct=()=>Object(q.useContext)(Et),Ft=()=>Object(q.useContext)(nn),zt=A=>{var Y=Object(q.useReducer)((Ne,Le)=>{var Je=Le;typeof Le=="function"&&(Je=Je(Ne)),Le.action&&Le.payload&&(Je=Le.payload,typeof Je=="function"&&(Je=Je(Ne)));var Ye=Object(D.a)(Object(D.a)({},Ne),Je);return Ye},A),le=Object(Qe.default)(Y,2),Oe=le[0],je=le[1],Re=(Ne,Le)=>{je(Ne)};return[Oe,Re]},bt=t("MaXC"),mt=t("4IMT"),vt=t.n(mt),Ct=t("refC"),ee=A=>{var Y=A.clearSearch,le=A.style,Oe=le===void 0?{}:le,je=A.className,Re=je===void 0?"":je,Ne=ct(),Le=Ne.tableState,Je=Le===void 0?{}:Le,Ye=Ne.refresh,ht=Je.loading;return M.a.createElement("div",{className:"flex justify-end w-100 ".concat(Re),style:Oe},M.a.createElement(vt.a,{loading:ht,className:"mr",type:"primary",onClick:()=>Ye()},"\u67E5\u8BE2"),M.a.createElement(vt.a,{onClick:Y},"\u91CD\u7F6E"))},b=A=>{var Y=Object(q.useState)({}),le=Object(Qe.default)(Y,2),Oe=le[0],je=le[1],Re=ct(),Ne=Re.tableState,Le=Re.setTable,Je=Re.refresh,Ye=Re.syncMethods,ht=Ne.search,qe=A.schema||A.propsSchema,qt=!0;!A.searchOnMount&&A.searchOnMount!==void 0&&(console.log("props.searchOnMount",A.searchOnMount),qt=!1);var Bt=Object(q.useRef)(),Ut=He=>{Le({search:He})},Ht=He=>{try{var _e=100,ut=Object.values(He.properties).filter(Xe=>Xe.hidden?Xe.hidden!==!0:Xe["ui:hidden"]!==!0).map(Xe=>Xe.width?Xe.width:Xe["ui:width"]),ln=ut.lastIndexOf(void 0),At=ut.slice(ln+1).map(Xe=>Number(Xe.substring(0,Xe.length-1))),Gt=At.reduce((Xe,et)=>{var Te=Xe+et;return Te>100?Math.min(100,et):Te},0);return _e=100-Gt,_e<10&&(_e=100),_e+"%"}catch(Xe){return console.error(Xe),"100%"}},_t=()=>{var He=JSON.stringify(Bt.current)===JSON.stringify(qe);if(qe&&qe.properties){if(Oe&&He)return;try{var _e=JSON.parse(JSON.stringify(qe));_e.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:Ht(qe)},je(_e)}catch(ut){console.error(ut)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},en=He=>{if(He.length){Le({checkPassed:!1});return}Le({checkPassed:!0})},Ve=Object(Ct.useForm)({formData:ht,onChange:Ut,onValidate:en}),jt=()=>{Ve.setValues({})};if(Object(q.useEffect)(()=>{A.hidden||_t()},[qe]),Object(q.useEffect)(()=>{Ye({searchApi:A.api,syncOnSearch:A.onSearch,syncAfterSearch:A.afterSearch}),(A.hidden||qt)&&Je()},[]),A.hidden)return null;var st=typeof A.searchBtnRender=="function"?A.searchBtnRender(Je,jt):[];return M.a.createElement("div",{className:"tr-search ".concat(A.className),style:A.style,onKeyDown:He=>{He.keyCode===13&&Je()}},M.a.createElement(Ct.default,Object(k.default)({form:Ve},A,{schema:Oe,displayType:"row",widgets:Object(D.a)({searchBtn:()=>A.searchBtnRender?M.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(st)&&st.map((He,_e)=>M.a.createElement("div",{key:_e.toString(),style:{marginLeft:8}},He))):M.a.createElement(ee,{clearSearch:jt,style:A.searchBtnStyle||{},className:A.searchBtnClassName||""})},A.widgets)})))},f=b,T=t("7kJ1"),v=t("qPIi"),F=t.n(v),B=t("zmYW"),G=t("DtFj"),_=t.n(G),te=t("lfLe"),ie=t("Cp9S"),de=t.n(ie),be=t("Wgwc"),De=t.n(be);function he(A,Y){return A.indexOf(Y)>-1}var Ie=A=>he(Object.prototype.toString.call(A),"Object"),Fe=A=>typeof A!="string"?!1:A.indexOf("$api.")===0||A.indexOf("$func.")===0,Be=A=>A.indexOf("$api.")===0?A.substring(5):A.indexOf("$func.")===0?A.substring(6):"",$e=(A,Y)=>{if(typeof A!="object"||A===null){if(Fe(A)){var le=Be(A);return Y&&Y[le]&&typeof Y[le]=="function"?Y[le]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return A}if(Array.isArray(A)){var Oe=[...A];return Oe.map(Ne=>$e(Ne,Y))}var je=Object(D.a)({},A),Re=Object.keys(je);return Re.forEach(Ne=>{je[Ne]=$e(je[Ne],Y)}),je},Ge=A=>De()(A).format("YYYY-MM-DD HH:mm"),we=A=>De()(A).format("YYYY-MM-DD"),Se=A=>"\xA5".concat(A).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Ze=(A,Y,le)=>{var Oe=A;return typeof Oe=="function"?Oe=Oe(Y):le&&typeof le=="function"&&le(),Oe},tt=t("NcKm"),Ke=t("lbd2"),ke=t.n(Ke),it=t("93XW"),Nt=t("d1El"),lt=t.n(Nt),Dt=(A,Y,le)=>le.ellipsis?M.a.createElement(lt.a,{title:Vt(Y,le)},A):M.a.createElement("span",null,A),an=(A,Y)=>Y.copyable||Y.ellipsis?M.a.createElement(ke.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:Y.copyable&&A?{text:A,onCopy:()=>p.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:Y.ellipsis||!1},Vt(A,Y)):Vt(A,Y),Vt=(A,Y)=>{var le=Y.enum||void 0;return le&&le[A]?le[A]:A},Rt=A=>A?M.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},M.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},A)):null,Tt=(A,Y)=>{if(Y.valueType==="code")return Rt(A);var le=an(A,Y),Oe=Dt(le,A,Y);return Oe},rn=t("WbIG"),Yt=t("hw8t"),un=t.n(Yt);class It extends M.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(Y){return{hasError:!0,errorInfo:Y.message}}componentDidCatch(Y,le){console.log(Y,le)}render(){return this.state.hasError?M.a.createElement(un.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var Xt=It,Zt=t("IehP"),Mt=t("3R4v"),kt=A=>{var Y=Object(q.useState)(!1),le=Object(Qe.default)(Y,2),Oe=le[0],je=le[1],Re=A.fullScreen;return Oe?M.a.createElement(lt.a,{title:"\u9000\u51FA\u5168\u5C4F"},M.a.createElement(Zt.a,{onClick:()=>{document.exitFullscreen(),je(!1)}})):M.a.createElement(lt.a,{title:"\u5168\u5C4F"},M.a.createElement(Mt.a,{onClick:()=>{if(!document.fullscreenEnabled){p.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(je(!0),Re().catch(Ne=>p.a.error(Ne.message)))}}))},dn=kt,An=t("G851"),St=t("ZvzK"),sn=t.n(St),Fn=t("PFYH"),yn=t("Jv8k"),Kt=t.n(yn),cn=t("9hi+"),mn=()=>{var A=ct(),Y=A.tableState,le=A.setTable;return M.a.createElement(sn.a,{overlay:M.a.createElement(Kt.a,{selectedKeys:[Y.tableSize],onClick:Oe=>{var je=Oe.key;le({tableSize:je})},style:{width:80}},M.a.createElement(Kt.a.Item,{key:"default"},"\u9ED8\u8BA4"),M.a.createElement(Kt.a.Item,{key:"middle"},"\u4E2D\u7B49"),M.a.createElement(Kt.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},M.a.createElement(lt.a,{title:"\u8868\u683C\u5BC6\u5EA6"},M.a.createElement(cn.a,null)))},Ce=mn,We=t("rLCj"),rt=()=>{var A=ct(),Y=A.refresh;return M.a.createElement(lt.a,{title:"\u5237\u65B0"},M.a.createElement(We.a,{onClick:()=>Y()}))},nt=rt,Wt=A=>M.a.createElement(de.a,{size:14,style:{fontSize:16,cursor:"pointer"}},M.a.createElement(nt,null),M.a.createElement(Ce,null),M.a.createElement(dn,A)),vn=Wt,wt=A=>{var Y,le,Oe;A.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var je=ct(),Re=je.tableState,Ne=je.setTable,Le=je.doSearch,Je=Re.dataSource,Ye=Re.pagination,ht=Re.loading,qe=Re.api,qt=Re.tableSize,Bt=Object(q.useRef)(null),Ut=(et,Te)=>{Ne({pagination:Object(D.a)(Object(D.a)({},Ye),{},{current:et,pageSize:Te})}),!(!A.pageChangeWithRequest&&A.pageChangeWithRequest!==void 0)&&Le({current:et,pageSize:Te})},Ht=A.headerTitle,_t=A.toolbarRender,en=A.columns,Ve=A.style,jt=Ve===void 0?{}:Ve,st=A.className,He=st===void 0?"":st,_e=A.toolbarAction,ut=_e===void 0?!1:_e;en.map(et=>{var Te=et;if(Te.render)return Te;switch(Te.valueType){case"date":Te.render=at=>Tt(we(at),Te);break;case"dateTime":Te.render=at=>Tt(Ge(at),Te);break;case"money":Te.render=at=>Tt(Se(at),Te);break;case"code":Te.render=at=>Tt(at,Te);break;case"text":default:Te.render=at=>Tt(at,Te)}return Te});var ln=Object(D.a)(Object(D.a)({},A),{},{dataSource:Je,pagination:A.pagination===!1?!1:Object(D.a)(Object(D.a)({onChange:Ut,size:"small"},A.pagination),{},{pageSize:((Y=A.pagination)===null||Y===void 0?void 0:Y.pageSize)||Ye.pageSize,total:((le=A.pagination)===null||le===void 0?void 0:le.total)||Ye.total,current:((Oe=A.pagination)===null||Oe===void 0?void 0:Oe.current)||Ye.current}),loading:ht,size:qt}),At=typeof _t=="function"?_t():[],Gt=Ht||At&&At.length||Array.isArray(qe),Xe=()=>{var et;return Promise.resolve((et=Bt.current)===null||et===void 0?void 0:et.requestFullscreen())};return Object(q.useEffect)(()=>{A.size&&Ne({tableSize:A.size})},[]),M.a.createElement(Xt,null,M.a.createElement("div",{className:"tr-table-wrapper ".concat(He),style:jt,ref:Bt},M.a.createElement("div",{className:Gt?"tr-table-top":"tr-table-top-nohead"},M.a.createElement("div",{className:"tr-table-title"},M.a.createElement(Jt,{title:Ht})),M.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},M.a.createElement(de.a,{align:"center"},M.a.createElement(de.a,{size:8,style:{marginRight:8}},Array.isArray(At)&&At.map((et,Te)=>M.a.createElement("div",{key:Te.toString()},et))),ut&&M.a.createElement(vn,{fullScreen:Xe})))),M.a.createElement(_.a,ln)))},on=wt,Jt=A=>{var Y=A.title,le=ct(),Oe=le.tableState,je=le.setTable,Re=le.doSearch,Ne=Oe.tab,Le=Oe.api,Je=Ne||0,Ye=ht=>{var qe=ht.target.value;je({tab:qe}),Re({tab:qe})};return typeof Le=="function"?M.a.createElement("div",{className:"tr-single-tab"},Y):Le&&Array.isArray(Le)?Le.length===1?M.a.createElement("div",{className:"tr-single-tab"},Le[0].name):M.a.createElement(M.a.Fragment,null,M.a.createElement(F.a.Group,{onChange:Ye,value:Je},Le.map((ht,qe)=>M.a.createElement(F.a.Button,{key:qe.toString(),value:qe},ht.name))),Y&&M.a.createElement("div",{className:"tr-extra-tab"},Y)):M.a.createElement("div",{className:"tr-single-tab"})},Pt=t("yDJ3"),ft=t.n(Pt),pt=t("SA0R"),zn=t.n(pt),Vn=t("k/c8"),ka=t("GYr9"),Mn=A=>{var Y=zt({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:10,total:1},tableSize:"default",checkPassed:!0}),le=Object(Qe.default)(Y,2),Oe=le[0],je=le[1],Re=Object(q.useRef)(),Ne=Object(q.useRef)(),Le=Object(q.useRef)(),Je=Oe.pagination,Ye=Oe.search,ht=Oe.tab,qe=Oe.checkPassed,qt=ct(),Bt=(Ve,jt)=>{if(delete Ye.searchBtn,Ne.current&&Ne.current(Ye),!qe)return;var st=Ve||{},He=st.current,_e=st.pageSize,ut=st.tab,ln=Object(dt.a)(st,["current","pageSize","tab"]),At=He||1,Gt=_e||10,Xe=ht;["string","number"].indexOf(typeof ut)>-1&&(Xe=ut);var et={current:At,pageSize:Gt};if(typeof Re.current=="function")at(Re.current);else if(Array.isArray(Re.current)){var Te=ft()(Re.current,"[".concat(Xe,"].api"));typeof Te=="function"?at(Te):p.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else console.log(Re.current),p.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function at(bn){je({loading:!0});var fn=Object(D.a)(Object(D.a)(Object(D.a)(Object(D.a)({},Ye),jt),ln),et);Array.isArray(bn)&&(fn=Object(D.a)(Object(D.a)({},fn),{},{tab:ut})),Promise.resolve(bn(fn)).then(tn=>{var jn=tn.rows,xn=tn.total,On=tn.pageSize,En=Object(dt.a)(tn,["rows","total","pageSize"]);je(Object(D.a)(Object(D.a)({loading:!1,dataSource:jn},En),{},{pagination:Object(D.a)(Object(D.a)({},et),{},{total:xn,pageSize:On||Gt})})),Le.current(Object(D.a)({rows:jn,total:xn,pageSize:On},En))}).catch(tn=>{je({loading:!1})})}},Ut=(Ve,jt)=>{var st=Ve&&Ve.stay||!1,He=Ve&&Ve.tab,_e=jt||{};Bt(Object(D.a)(Object(D.a)({},Ve),{},{current:st?Je.current:1,tab:He,pageSize:Je.pageSize}),_e)},Ht=Ve=>{["string","number"].indexOf(typeof Ve)>-1?(je({tab:Ve}),Ut({tab:Ve})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},_t=Ve=>{var jt=Ve.searchApi,st=Ve.syncOnSearch,He=Ve.syncAfterSearch;Re.current=jt,Ne.current=st,Le.current=He,je({api:jt})},en={tableState:Oe,setTable:je,doSearch:Bt,refresh:Ut,changeTab:Ht,syncMethods:_t};return en},Kn=(A,Y)=>{var le=Mn(A);return Object(q.useImperativeHandle)(Y,()=>le),M.a.createElement(c.a,{locale:zn.a},M.a.createElement(Et.Provider,Object(k.default)({},A,{value:le})))},Wn=Object(q.forwardRef)(Kn)},RnhZ:function(Me,Q,t){var oe={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function ae(k){var D=c(k);return t(D)}function c(k){if(!t.o(oe,k)){var D=new Error("Cannot find module '"+k+"'");throw D.code="MODULE_NOT_FOUND",D}return oe[k]}ae.keys=function(){return Object.keys(oe)},ae.resolve=c,Me.exports=ae,ae.id="RnhZ"},Zs1V:function(Me){Me.exports=JSON.parse("{}")},bQjt:function(Me,Q,t){"use strict";t.r(Q);var oe=t("0Owb"),ae=t("q1tI"),c=t.n(ae),k=t("refC"),D=O=>{var z=Object(k.useForm)();return c.a.createElement(k.default,Object(oe.default)({form:z},O))};Q.default=D},c2mQ:function(Me,Q,t){"use strict";t.r(Q);var oe=t("q1tI"),ae=t.n(oe),c=t("refC"),k=D=>{var O=D.schema,z=Object(c.useForm)();return ae.a.createElement("div",null,ae.a.createElement(c.default,{form:z,schema:O}))};Q.default=k},cFvS:function(Me,Q,t){},fK6R:function(Me,Q,t){},fVyk:function(Me,Q,t){},gO06:function(Me,Q,t){},iU8R:function(Me,Q,t){},nYSz:function(Me,Q,t){"use strict";t.r(Q),t.d(Q,"defaultSettings",function(){return Be}),t.d(Q,"defaultCommonSettings",function(){return be}),t.d(Q,"defaultGlobalSettings",function(){return $e}),t.d(Q,"fromFormily",function(){return Xa}),t.d(Q,"toFormily",function(){return hr}),t.d(Q,"fromFormRender",function(){return _n}),t.d(Q,"toFormRender",function(){return Ua});var oe=t("0Owb"),ae=t("q1tI"),c=t.n(ae),k=t("kvAW"),D=t("qJlv"),O=t("k1fw"),z=t("tJVT"),p=Object(ae.createContext)(()=>{}),dt=Object(ae.createContext)({}),Qe=()=>Object(ae.useContext)(p),q=()=>Object(ae.useContext)(dt),M=a=>{var r=Object(ae.useReducer)((m,x)=>{var R=x;typeof x=="function"&&(R=R(m)),x.action&&x.payload&&(R=x.payload,typeof R=="function"&&(R=R(m)));var N=Object(O.a)(Object(O.a)({},m),R);return N},a),i=Object(z.default)(r,2),d=i[0],u=i[1],g=(m,x)=>{u(m)};return[d,g]};function Et(a,r,i){var d=Object(ae.useRef)();Object(ae.useEffect)(()=>{d.current=a},[a]);var u=Object(ae.useRef)();return Object(ae.useEffect)(()=>{if(!i)return;function g(){d&&d.current&&d.current()}if(g(),r!==null)return u.current=setInterval(g,r),()=>clearInterval(u.current)},[r,i]),()=>clearInterval(u.current)}function nn(a){var r=Object(ae.useRef)();return Object(ae.useEffect)(()=>{r.current=a},[a]),r.current}var ct=a=>{var r=Object(ae.useState)(!1),i=Object(z.default)(r,2),d=i[0],u=i[1],g;try{g=localStorage.getItem(a)}catch(m){}return g||(u(!0),localStorage.setItem(a,JSON.stringify(!0))),d},Ft=()=>{var a=Object(ae.useState)(!1),r=Object(z.default)(a,2),i=r[0],d=r[1],u=()=>d(!i);return[i,u]},zt=a=>{var r=Object(ae.useState)(a),i=Object(z.default)(r,2),d=i[0],u=i[1];return[d,u]},bt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",d=()=>{var N=localStorage.getItem(i);if(N)try{return JSON.parse(N)}catch(w){return r}return r},u=Object(ae.useState)(d()),g=Object(z.default)(u,2),m=g[0],x=g[1],R=N=>{x(N),localStorage.setItem(i,JSON.stringify(N))};return[m,R]},mt=t("fwXI"),vt=t("CC+v"),Ct=t.n(vt),ee=t("MaXC"),b=t("4IMT"),f=t.n(b),T=t("tL+A"),v=t("QpBz"),F=t.n(v),B=t("PpiC"),G=t("cUip"),_=t("iJl9"),te=t.n(_),ie=t("WWur"),de=t.n(ie),be={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string","ui:widget":"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},"ui:width":{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string","ui:widget":"percentSlider"},"ui:labelWidth":{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number","ui:widget":"slider",max:400,"ui:options":{hideNumber:!0}},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},"ui:readonly":{title:"\u7F6E\u7070",type:"boolean"},required:{title:"\u5FC5\u586B",type:"boolean"}},De=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],"ui:widget":"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],"ui:widget":"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}}],he=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime","ui:options":{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number","ui:widget":"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],Ie=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},"ui:options":{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],Fe=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date","ui:options":{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],Be=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:De,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:he},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:Ie},{title:"\u6A21\u677F",widgets:Fe}],$e={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"string",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],"ui:options":{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number","ui:widget":"slider",max:300,"ui:options":{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],"ui:widget":"radio"}}},Ge=t("gO06"),we=t("4b23"),Se=t.n(we),Ze=t("JBAE"),tt=t.n(Ze);function Ke(a,r){return a.indexOf(r)>-1}var ke=a=>Ke(Object.prototype.toString.call(a),"Object");function it(a){try{return JSON.parse(JSON.stringify(a))}catch(r){return a}}function Nt(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function lt(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function Dt(a,r){if(a===void 0&&r===void 0)return!0;if(a===void 0||r===void 0)return!1;if(a===null&&r===null)return!0;if(a===null||r===null)return!1;if(a.constructor!==r.constructor)return!1;if(a.constructor===Array){if(a.length!==r.length)return!1;for(var i=0;i<a.length;i++)if(a[i].constructor===Array||a[i].constructor===Object){if(!Dt(a[i],r[i]))return!1}else if(a[i]!==r[i])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(r).length)return!1;for(var d=0;d<Object.keys(a).length;d++){var u=Object.keys(a)[d];if(a[u]&&typeof a[u]!="number"&&(a[u].constructor===Array||a[u].constructor===Object)){if(!Dt(a[u],r[u]))return!1}else if(a[u]!==r[u])return!1}}else if(a.constructor===String||a.constructor===Number)return a===r;return!0}function an(a){var r;switch(a){case"date":r="YYYY-MM-DD";break;case"time":r="HH:mm:ss";break;default:r="YYYY-MM-DD HH:mm:ss"}return r}function Vt(a){return a.find((r,i,d)=>i!==d.findIndex(u=>JSON.stringify(r)===JSON.stringify(u)))}function Rt(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=rn(a),d=i.map(m=>{var x=m.name,R=m.schema,N=R.type,w=R.enum,re=R.properties,L=R.items,pe=N==="object"&&re,me=N==="array"&&L&&!w,Z=x&&r[m.name];if(!Z)return m;if(me){var e=Rt(L,Z.items||{});return Object(O.a)(Object(O.a)({},m),{},{schema:Object(O.a)(Object(O.a)(Object(O.a)({},m.schema),Z),{},{items:e})})}if(pe){var n=Rt(m.schema,Z);return Object(O.a)(Object(O.a)({},m),{},{schema:n})}return Object(O.a)(Object(O.a)({},m),{},{schema:Object(O.a)(Object(O.a)({},m.schema),Z)})}),u={};d.forEach(m=>{u[m.name]=m.schema});var g={};return Object.keys(r).forEach(m=>{typeof m=="string"&&m.substring(0,3)==="ui:"&&(g[m]=r[m])}),Tt(u)?Object(O.a)(Object(O.a)({},a),g):Object(O.a)(Object(O.a)(Object(O.a)({},a),g),{},{properties:u})}function Tt(a){return Object.keys(a).length===0}function rn(a){if(!a)return[];var r=a.properties,i=a.items,d=a.type;if(!r&&!i)return[];var u={};return d==="object"&&(u=r),d==="array"&&(u=i),Object.keys(u).map(g=>({schema:u[g],name:g}))}function Yt(){}var un=a=>Function('"use strict";return ('+a+")")(),It=(a,r,i)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(i),`;
    const formData = `).concat(JSON.stringify(r),`;
    return (`).concat(a,")"))();function Xt(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function Zt(a){return Object.keys(a).some(r=>typeof a[r]=="function"?!0:typeof a[r]=="string"?Xt(a[r]):typeof a[r]=="object"?Zt(a[r]):!1)}function Mt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2?arguments[2]:void 0,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=tt()(a);u.$id||(u.$id=r);var g=[],m=u.type==="object"&&u.properties,x=u.type==="array"&&u.items&&u.items.properties;return m&&(Object.entries(u.properties).forEach(R=>{var N=Object(z.default)(R,2),w=N[0],re=N[1],L=r+"/"+w;g.push(L),Mt(re,L,r,d)}),delete u.properties),x&&(Object.entries(u.items.properties).forEach(R=>{var N=Object(z.default)(R,2),w=N[0],re=N[1],L=r+"/"+w;g.push(L),Mt(re,L,r,d)}),delete u.items.properties),u.type&&(d[r]={parent:i,schema:u,children:g}),d}var kt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=r.split("/");return i[i.length-1]},dn=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",d=r.split("/");return(typeof i=="string"||typeof i=="number")&&(d[d.length-1]=i),d.join("/")},An=a=>({parent:a.parent,schema:Object(O.a)({},a.schema),data:a.data,children:a.children});function St(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d={},u=a[r],g=tt()(u);return g&&(d=Object(O.a)({},g.schema),i&&d.$id&&delete d.$id,g.children.length>0&&g.children.forEach(m=>{var x=m;if(!!a[m]){try{i&&(x=a[m].schema.$id)}catch(N){console.log("catch",N)}var R=kt(x);d.type==="object"&&(d.properties||(d.properties={}),d.properties[R]=St(a,m,i)),d.type==="array"&&d.items&&d.items.type==="object"&&(d.items.properties||(d.items.properties={}),d.items.properties[R]=St(a,m,i))}})),d}var sn=(a,r)=>{var i=Mt(r);return a in i&&delete i[a],St(i)},Fn=(a,r)=>{var i=Object(O.a)({},a);try{var d=a[r],u=r+Se()(6),g=i[d.parent].children,m=g.findIndex(x=>x===r);return g.splice(m+1,0,u),i[u]=tt()(i[r]),i[u].schema.$id=u,[i,u]}catch(x){return console.error(x,"catcherror"),[a,r]}},yn=a=>{var r=a.id,i=a.key,d=a.schema,u=a.subSchema,g=Mt(d),m=dn(r,i)+"$$"+Se()(10);if(r in g){var x=g[r].parent;if(x&&x in g){var R=g[x].children;try{var N=R.findIndex(w=>w===r);R.splice(N+1,0,m)}catch(w){console.error(w.message)}}try{g[m]={parent:g[r].parent,schema:u,children:[]},g[m].schema.$id=m}catch(w){console.error(w.message)}}return[St(g),m]},Kt=a=>{var r=a.selected,i=a.name,d=a.schema,u=a.flatten,g=r||"#",m;if(g&&g[0]==="0"||g==="#"){var x=Object(O.a)({},u);try{var R=g.substring(1);m=R+"/"+i+"_"+Se()(6),g==="#"&&(m="#/"+i+"_"+Se()(6),R="#");var N=x[R].children;N.push(m);var w={parent:R,schema:Object(O.a)(Object(O.a)({},d),{},{$id:m}),data:void 0,children:[]};x[m]=w}catch(s){console.error(s,"catch")}return{newId:m,newFlatten:x}}var re=i+"_"+Se()(6),L=r.split("/");L.pop(),L.push(re),m=L.join("/");var pe=Object(O.a)({},u);try{var me=pe[r],Z=pe[me.parent].children,e=Z.findIndex(s=>s===r);Z.splice(e+1,0,m);var n={parent:me.parent,schema:Object(O.a)(Object(O.a)({},d),{},{$id:m}),data:void 0,children:[]};pe[m]=n}catch(s){console.error(s)}return{newId:m,newFlatten:pe}},cn=a=>{var r=a.dragId,i=a.dragItem,d=a.dropId,u=a.position,g=a.flatten,m=d==="#"?"inside":u,x=Object(O.a)({},g);i&&(x[r]=i);var R=i||x[r],N=x[d],w=N;if(m!=="inside"){var re=N.parent;w=x[re]}if(d.indexOf(r)>-1)return[x,r];var L=r;try{var pe=w.schema.$id;L=L.replace(R.parent,pe)}catch(s){}try{var me=x[R.parent],Z=me.children.indexOf(r);Z>-1&&me.children.splice(Z,1)}catch(s){console.error(s)}try{var e=w.children||[],n=e.indexOf(d);switch(m){case"up":e.splice(n,0,r);break;case"down":e.splice(n+1,0,r);break;default:e.push(r);break}w.children=e}catch(s){console.error(s)}return R.parent=w.$id,[x,L]},mn=(a,r)=>!a||!r?{}:(Object.entries(a).forEach(i=>{var d=Object(z.default)(i,2),u=d[0],g=d[1],m=vn(r,u);a[u].data=m}),a),Ce=a=>(r,i)=>{},We=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var d=r[i].data,u=Object.keys(r),g=u.filter(m=>{var x=i.split("/").length,R=m.split("/").length;return m.indexOf(i)>-1&&R>x});return g&&g.length>0&&(d===void 0&&["object","array"].indexOf(r[i].schema.type)>-1&&(d={}),g.forEach(m=>{var x=i.split("/").length,R=m.split("/").length;if(R===x+1){var N=a(r,m),w=kt(m);d[w]=N}})),d}catch(m){return}},rt=(a,r,i)=>{try{var d=i[r];if(d.schema[a]!==void 0)return d.schema[a];if(d&&d.parent){var u=i[d.parent].schema;return u[a]!==void 0?u[a]:rt(a,d.parent,i)}}catch(g){return}};function nt(a){return Function('"use strict";return ('+a+")")()}function Wt(a){if(!a)return[];var r=a.properties,i=a.items,d=a.type;if(!r&&!i)return[];var u={};return d==="object"&&(u=r),d==="array"&&(u=i.properties),Object.keys(u).map(g=>({schema:u[g],name:g}))}function vn(a,r){r=wt(r,a);for(var i=0,d=r.length;a!=null&&i<d;){var u=on(r[i++]);a=u?a[u]:a}return i&&i==d?a:void 0}function wt(a,r){return Array.isArray(a)?a:ft(a,r)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function on(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var r="".concat(a);return r=="0"&&1/a==-INFINITY?"-0":r}var Jt=/#\/.+\//,Pt=/^\w*$/;function ft(a,r){if(Array.isArray(a))return!1;var i=typeof a;return i==="number"||i==="boolean"||a==null?!0:Pt.test(a)||!Jt.test(a)||r!=null&&a in Object(r)}var pt=a=>{if(a&&a.propsSchema){var r=a.propsSchema,i=Object(B.a)(a,["propsSchema"]);return Object(O.a)({schema:r},i)}return a},zn=a=>{if(a&&a.schema){var r=a.schema,i=Object(B.a)(a,["schema"]);return Object(O.a)({propsSchema:r},i)}return a},Vn=t("CLjb"),ka=t("fK6R"),Mn=a=>{var r=a.text,i=a.name,d=a.schema,u=a.icon,g=Object(Vn.a)({item:{type:"box",dragItem:{parent:"#",schema:d,children:[]},$id:"#/".concat(i,"_").concat(Se()(6))},end:(Z,e)=>{var n=e.getDropResult()},collect:Z=>({isDragging:Z.isDragging()})}),m=Object(z.default)(g,2),x=m[0].isDragging,R=m[1],N=Qe(),w=q(),re=w.selected,L=w.flatten,pe=w.onFlattenChange,me=()=>{var Z=Kt({selected:re,name:i,schema:d,flatten:L}),e=Z.newId,n=Z.newFlatten;pe(n),N({selected:e})};return c.a.createElement("div",{ref:R},c.a.createElement(Wn,{text:r,icon:u,onClick:me}))},Kn=Mn,Wn=a=>{var r=a.onClick,i=a.text,d=a.icon;return c.a.createElement("li",{className:"left-item",onClick:r},i)},A=a=>{var r=q(),i=r.userProps,d=i===void 0?{}:i,u=d.settings,g=Array.isArray(u)?u:Be;return c.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(g)?g.map((m,x)=>m&&m.show===!1?null:c.a.createElement("div",{key:x},c.a.createElement("p",{className:"f6 b"},m.title),c.a.createElement("ul",{className:"pl0"},Array.isArray(m.widgets)?m.widgets.map((R,N)=>c.a.createElement(Kn,Object(oe.default)({key:N.toString()},R,a))):c.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):c.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},Y=A,le=t("Z8Mf"),Oe=t("j7zX"),je=t.n(Oe),Re=t("UESt"),Ne=t("97ez"),Le=t("pJsf"),Je=t("g4D/"),Ye=t.n(Je);function ht(a){var r=a.value,i=a.onChange,d=a.disabled,u=a.readonly,g=m=>{i(m.target.checked)};return c.a.createElement(Ye.a,{disabled:d||u,onChange:g,checked:r})}function qe(a){var r=a.schema||{},i=r.enum,d=r.enumNames,u=a.value&&Array.isArray(a.value)?a.value:[];return c.a.createElement(Ye.a.Group,{disabled:a.disabled||a.readonly,value:u,onChange:a.onChange},(i||[!0,!1]).map((g,m)=>c.a.createElement(Ye.a,{value:g,key:m},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:d?d[m]:g}}))))}var qt=t("ypy7"),Bt=t.n(qt),Ut=t("rNQX");function Ht(a){var r=a.schema.format,i=u=>{a.disabled||a.readonly||a.onChange(u.color)},d=u=>{a.onChange(u.target.value)};return c.a.createElement("div",{className:"fr-color-picker"},c.a.createElement(Bt.a,{type:r,animation:"slide-up",color:a.value?a.value:"#ffffff",onChange:i}),a.readonly?c.a.createElement("span",null,a.value||"#ffffff"):c.a.createElement(te.a,{placeholder:"#ffffff",disabled:a.disabled,value:a.value,onChange:d}))}var _t=t("GBD3"),en=t("wXtC"),Ve=t.n(en),jt=t("mxgt"),st=t("4ZwL"),He=t.n(st),_e=t("wd/R"),ut=t.n(_e),ln=(a,r,i)=>{var d=a.invalid?{borderColor:"#f5222d"}:{},u=a.schema.format,g=u===void 0?"dateTime":u,m=an(g),x={};a.value?x.value=ut()(a.value,m):x.value="";var R=a.description?{placeholder:a.description}:{},N=Object(O.a)(Object(O.a)(Object(O.a)(Object(O.a)({},R),a.options),x),{},{style:Object(O.a)({width:"100%"},d),disabled:a.disabled||a.readonly,onChange:r});return g==="dateTime"&&(N.showTime=!0),c.a.createElement(i,N)};function At(a){var r=a.schema.format,i=r===void 0?"dateTime":r,d=(g,m)=>a.onChange(m),u=i==="time"?He.a:Ve.a;return ln(a,d,u)}var Gt=(a,r,i)=>{var d=a.schema.format,u=d===void 0?"dateTime":d,g=an(u),m={};a.value&&Array.isArray(a.value)&&a.value[0]&&a.value[1]&&(m={defaultValue:[ut()(a.value[0],g),ut()(a.value[1],g)]});var x=Object(O.a)(Object(O.a)(Object(O.a)({},a.options),m),{},{style:{width:"100%"},showTime:u==="dateTime",disabled:a.disabled||a.readonly,onChange:r});return c.a.createElement(i,x)},Xe=Ve.a.RangePicker;function et(a){var r=(i,d)=>a.onChange(d);return Gt(a,r,Xe)}var Te=t("RBnf"),at=t("YJCA"),bn=a=>{var r=a.fold,i=r===void 0?!1:r,d=a.width,u=a.height,g=a.fill,m=a.style,x=m===void 0?{}:m,R=Object(B.a)(a,["fold","width","height","fill","style"]);return c.a.createElement("div",Object(oe.default)({style:x,className:i?"fold-icon":"fold-icon fold-icon-active"},R),c.a.createElement("svg",{viewBox:"0 0 1024 1024",width:d||18,height:u||18},c.a.createElement("path",{d:"M942.048 306.176c-12.288-12.288-31.328-13.024-43.008-2.016L529.056 674.112c-15.072 15.872-19.008 15.808-34.816 0L124.288 304.16c-11.68-11.04-30.72-10.272-43.008 2.016-12.512 12.512-13.216 32.032-1.6 43.68L490.624 760.8c5.056 5.056 11.648 7.328 18.464 7.744h5.152c6.816-.448 13.408-2.72 18.464-7.744l410.944-410.944c11.584-11.648 10.88-31.2-1.6-43.68z",fill:g||"#3c3c3c"})))},fn=bn,tn=(a,r,i)=>{if(Array.isArray(r)&&Array.isArray(i)){if(typeof a=="string"||typeof a=="number"){var d=r.indexOf(a);return d>-1?i[d]:a}else if(Array.isArray(a)){var u=a.map(g=>tn(a,r,i));return String(u)}return a}return a},jn=a=>{var r=a.schema,i=r===void 0?{}:r,d=a.value,u=d===void 0?[]:d,g=a.index,m=On({schema:i,value:u,index:g}).filter(x=>x.title).slice(0,3);return c.a.createElement("ul",{className:"flex overflow-hidden",style:{paddingRight:45}},m.map((x,R)=>x.title?c.a.createElement("li",{className:"flex-auto mr2 overflow-hidden",key:R},c.a.createElement("span",{className:"fw5"},x.title,": "),c.a.createElement("span",null,x.text)):null))},xn=jn,On=a=>{var r=a.schema,i=r===void 0?{}:r,d=a.value,u=d===void 0?[]:d,g=a.index,m=i.items,x=m===void 0?{}:m;if(x.type!=="object")return[];var R=x&&x.properties||{};R=Object.values(R);var N=u&&u.length&&u[g]||{},w=Object.values(N),re=R.map((L,pe)=>{var me=L&&L["ui:hidden"];if(!me){var Z=L.title,e=w[pe];return e===null&&e===void 0?e="":typeof e=="boolean"?e=e?"\u662F":"\u5426":typeof e!="string"&&typeof e!="number"&&e?e="{\u590D\u6742\u7ED3\u6784}":L.enum&&L.enumNames&&(e=tn(e,L.enum,L.enumNames)),{title:Z,text:e}}});return re.filter(L=>!!L)},En=Object(at.c)(()=>c.a.createElement("span",{className:"fr-move-icon"},":::"));class na extends c.a.Component{constructor(){super(...arguments);this.toggleFold=()=>{this.props.toggleFoldItem(this.props.name)}}componentDidMount(){var r=this.props,i=r.p,d=i===void 0?{}:i,u=r.name,g=r.fold,m=On({schema:d.schema,value:d.value,index:u}),x=m&&m[0]&&m[0].text;x&&g!==0&&this.props.toggleFoldItem(u)}render(){var r=this.props,i=r.item,d=r.p,u=d===void 0?{}:d,g=r.name,m=r.fold,x=Object(O.a)(Object(O.a)({},u),{},{index:g}),R=u.options,N=R===void 0?{}:R,w=u.readonly,re=u.formData,L=u.value,pe=N.foldable,me=N.hideDelete,Z=N.itemButtons,e=Xt(me);e&&(typeof e=="string"?me=It(e,re,L):typeof e=="function"&&(me=e(re,L)));var n=u.schema.items&&u.schema.items.type=="object",s="fr-set ba b--black-10 hover-b--black-20 relative flex flex-column";return pe&&m?s+=" pv12":u.displayType==="row"&&(s+=" pt44"),c.a.createElement("li",{className:s},pe&&m&&n?c.a.createElement(xn,x):i,pe&&c.a.createElement(fn,{fold:m,onClick:this.toggleFold,style:{position:"absolute",top:12,right:32}}),!w&&c.a.createElement(En,null),!(pe&&m||me||w)&&c.a.createElement("div",{className:"self-end flex"},c.a.createElement(Sn,{type:"dashed",icon:"delete",onClick:()=>{var o=[...u.value];o.splice(g,1),u.onChange(o)}},"\u5220\u9664"),Z&&Z.length>0&&Z.map((o,l)=>c.a.createElement(Sn,{key:l.toString(),className:"ml2",type:"dashed",icon:o.icon,onClick:()=>{var h=[...u.value];if(typeof window[o.callback]=="function"){var y=window[o.callback](h,g);u.onChange(y)}}},o.text||""))))}}var qa=Object(at.b)(na);class aa extends c.a.Component{constructor(){super(...arguments);this.handleAddClick=()=>{var r=this.props,i=r.p,d=r.addUnfoldItem,u=[...i.value];u.push(i.newItem),i.onChange(u),d()}}render(){var r=this.props,i=r.p,d=r.foldList,u=d===void 0?[]:d,g=r.toggleFoldItem,m=i||{},x=m.options,R=x===void 0?{}:x,N=m.extraButtons,w=N===void 0?{}:N,re=R.buttons||w||[],L=i.readonly,pe=i.schema,me=pe===void 0?{}:pe,Z=me.maxItems,e=i.value||[],n=Z?Z>e.length:!0;return c.a.createElement("ul",{className:"pl0 ma0"},e.map((s,o)=>c.a.createElement(qa,{key:"item-".concat(o),index:o,name:o,p:i,fold:u[o],toggleFoldItem:g,item:i.children})),!L&&c.a.createElement("div",{className:"tr"},n&&c.a.createElement(Sn,{icon:"add",onClick:this.handleAddClick},"\u65B0\u589E"),re&&re.length>0&&re.map((s,o)=>c.a.createElement(Sn,{className:"ml2",icon:s.icon,key:o.toString(),onClick:()=>{if(s.callback==="clearAll"){i.onChange([]);return}if(s.callback==="copyLast"){var l=[...i.value],h=l.length-1;l.push(h>-1?l[h]:i.newItem),i.onChange(l);return}if(typeof window[s.callback]=="function"){var y=[...i.value],S=j=>i.onChange(j);window[s.callback](y,S,i.newItem)}}},s.text))))}}var Jn=Object(at.a)(aa);class ra extends c.a.Component{constructor(r){super(r);this.addUnfoldItem=()=>this.setState({foldList:[...this.state.foldList,0]}),this.toggleFoldItem=d=>{var u=this.state.foldList,g=u===void 0?[]:u;g[d]=!g[d],this.setState({foldList:g})},this.handleSort=d=>{var u=d.oldIndex,g=d.newIndex,m=this.props,x=m.onChange,R=m.value;x(Object(at.d)(R,u,g)),this.setState({foldList:Object(at.d)(this.state.foldList,u,g)})};var i=this.props.value.length||0;this.state={foldList:new Array(i).fill(!1)||[]}}render(){var r=this.state.foldList;return c.a.createElement(Jn,{p:this.props,foldList:r,toggleFoldItem:this.toggleFoldItem,addUnfoldItem:this.addUnfoldItem,distance:6,useDragHandle:!0,helperClass:"fr-sort-help-class",shouldCancelStart:i=>i.toElement&&i.toElement.className==="fr-tooltip-container",onSortEnd:this.handleSort})}}ra.defaultProps={value:[]};function Sn(a){var r=a.icon,i=a.children,d=Object(B.a)(a,["icon","children"]),u;switch(r){case"add":u="PlusCircleOutlined";break;case"delete":u="DeleteOutlined";break;default:u=r;break}var g=Te[u];return g?c.a.createElement(f.a,Object(oe.default)({},d,{icon:c.a.createElement(g,null)}),i):c.a.createElement(f.a,d,i)}var pn=ra,$t=t("/MfK"),Un=t("w5pM");function sa(a){return c.a.createElement("div",{className:"flex flex-column"},c.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},c.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,c.a.createElement(f.a,{size:"small",className:"self-end",type:"dashed",icon:c.a.createElement($t.a,null)},"\u5220\u9664")),c.a.createElement(f.a,{size:"small",className:"self-end",icon:c.a.createElement(Un.a,null)},"\u6DFB\u52A0"))}function ia(a){var r=a.children;return c.a.createElement("div",{className:"w-100"},r)}var _a=t("ek7I"),oa=t("FAat"),Hn=t.n(oa),er=a=>r=>{var i=a.Option,d=N=>r.onChange(N),u=r.invalid?{borderColor:"#f5222d"}:{},g=r.schema||{},m=g.enum,x=g.enumNames,R=r.value&&Array.isArray(r.value)?r.value:[];return c.a.createElement(a,Object(oe.default)({},r.options,{style:Object(O.a)({width:"100%"},u),mode:"multiple",disabled:r.disabled||r.readonly,value:R,onChange:d}),(m||[]).map((N,w)=>c.a.createElement(i,{value:N,key:w},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:x?x[w]:N}}))))},la=er(Hn.a),yr=t("b+Mx"),ua=t("5Dct"),Cn=t.n(ua),tr=a=>r=>{var i=r.invalid?{borderColor:"#f5222d"}:{},d=r.schema,u=d.max,g=d.min,m=d.step,x={};return(u||u===0)&&(x={max:u}),(g||g===0)&&(x=Object(O.a)(Object(O.a)({},x),{},{min:g})),m&&(x=Object(O.a)(Object(O.a)({},x),{},{step:m})),c.a.createElement(a,Object(oe.default)({},x,{style:Object(O.a)({width:"100%"},i),disabled:r.disabled||r.readonly},r.options,{value:r.value,onChange:r.onChange}))},da=tr(Cn.a),ca=t("7kJ1"),ma=t("qPIi"),Nn=t.n(ma),va=(a,r,i)=>{var d=i.Group,u=a.schema||{},g=u.enum,m=u.enumNames;return c.a.createElement(d,{disabled:a.disabled||a.readonly,value:a.value,onChange:r},(g||[!0,!1]).map((x,R)=>c.a.createElement(i,{value:x,key:R},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:m?m[R]:x}}))))};function fa(a){var r=i=>a.onChange(i.target.value);return va(a,r,Nn.a)}var pa=a=>r=>{var i=a.Option,d=R=>r.onChange(R),u=r.invalid?{borderColor:"#f5222d"}:{},g=r.schema||{},m=g.enum,x=g.enumNames;return c.a.createElement(a,Object(oe.default)({style:Object(O.a)({width:"100%"},u)},r.options,{disabled:r.disabled||r.readonly,value:r.value,onChange:d}),(m||[]).map((R,N)=>{var w=x?x[N]:R,re=typeof w=="string"&&w[0]==="<";return re&&(w=c.a.createElement("span",{dangerouslySetInnerHTML:{__html:w}})),c.a.createElement(i,{value:R,key:N},w)}))},ha=pa(Hn.a),nr=t("tCGa"),ga=t("DH6M"),ya=t.n(ga),ba=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,d=i.max,u=i.min,g=i.step,m={};(d||d===0)&&(m={max:d}),(u||u===0)&&(m=Object(O.a)(Object(O.a)({},m),{},{min:u})),g&&(m=Object(O.a)(Object(O.a)({},m),{},{step:g}));var x=!1;a.options&&a.options.hideNumber&&(x=!0);var R=a.readonly?c.a.createElement("span",{style:{width:"90px"}},a.value===""?"-":a.value):c.a.createElement(Cn.a,Object(oe.default)({},a.options,m,{style:Object(O.a)({width:"90px"},r),value:a.value,disabled:a.disabled,onChange:a.onChange}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(ya.a,Object(oe.default)({style:{flexGrow:1,marginRight:x?0:12}},m,{onChange:a.onChange,value:typeof a.value=="number"?a.value:u||0,disabled:a.disabled||a.readonly})),x?null:R)},Gn=ba,ar=t("LGkk"),ja=t("rVaU"),rr=t.n(ja);function xa(a){return c.a.createElement(rr.a,{disabled:a.disabled||a.readonly,onChange:r=>a.onChange(a.name,r),defaultChecked:a.value})}var Qn=te.a.TextArea;function Oa(a){var r=a.options,i=a.invalid,d=i?{borderColor:"#f5222d"}:{},u={rows:3},g=Object(O.a)(Object(O.a)({},u),r),m=x=>a.onChange(x.target.value);return c.a.createElement(Qn,Object(oe.default)({style:d,disabled:a.disabled||a.readonly,value:a.value},g,{onChange:m}))}var sr=t("VDQ/"),Ea=t("B8+X"),ir=t.n(Ea),Sa=t("z7Xi");function Ca(a){var r={name:"file",action:a.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(i){i.file.status==="done"?(F.a.success("".concat(i.file.name," \u4E0A\u4F20\u6210\u529F")),a.onChange(i.file.response.url)):i.file.status==="error"&&F.a.error("".concat(i.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){a.onChange("")}};return c.a.createElement("div",{className:"fr-upload-mod"},c.a.createElement(ir.a,Object(oe.default)({},r,{className:"fr-upload-file"}),c.a.createElement(f.a,null,c.a.createElement(Sa.a,null)," \u4E0A\u4F20")),a.value&&c.a.createElement("a",{href:a.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var or=t("/xgg"),Da=t("aOJk"),Ra=t.n(Da),Aa=t("mpQp"),Fa="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Na=(a,r)=>a==="image"?c.a.createElement("img",{src:r||Fa,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}):null,lr=(a,r)=>a!=="image"?null:c.a.createElement(Ra.a,{content:Na(a,r),className:"fr-preview",placement:"bottom"},c.a.createElement(Aa.a,null));function Ta(a){var r=a.options,i=r===void 0?{}:r,d=a.invalid,u=d?{borderColor:"#f5222d"}:{},g=a.schema.format,m=g===void 0?"text":g,x=m==="image"?"text":m,R=N=>a.onChange(N.target.value);return c.a.createElement(te.a,Object(oe.default)({style:u},i,{value:a.value,type:x,disabled:a.disabled||a.readonly,addonAfter:i.addonAfter?i.addonAfter:lr(m,a.value),onChange:R}))}var Yn={checkbox:ht,checkboxes:qe,color:Ht,date:At,dateRange:et,input:Ta,list:pn,listEditor:sa,map:ia,multiSelect:la,number:da,radio:fa,select:ha,slider:Gn,switch:xa,textarea:Oa,upload:Ca};function Ia(a){var r=a.onChange,i=a.value,d=a.disabled,u=a.readonly,g=a.options,m=x=>{try{var R=dn(i,x.target.value);r(R)}catch(N){}};return c.a.createElement(te.a,Object(oe.default)({disabled:d||u},g,{onChange:m,value:kt(i)}))}var wa=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,d=i.max,u=i.min,g=i.step,m={};(d||d===0)&&(m={max:d}),(u||u===0)&&(m=Object(O.a)(Object(O.a)({},m),{},{min:u})),g&&(m=Object(O.a)(Object(O.a)({},m),{},{step:g}));var x=!1;a.options&&a.options.hideNumber&&(x=!0);var R=L=>typeof L=="string"&&L.endsWith("%"),N=100;if(R(a.value))try{N=Number(a.value.split("%")[0]),Number.isNaN(N)&&(N=100)}catch(L){}var w=L=>{var pe=L+"%";a.onChange(pe)},re=a.readonly?c.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):c.a.createElement(Cn.a,Object(oe.default)({},a.options,m,{style:Object(O.a)({width:"80px"},r),value:N,disabled:a.disabled,onChange:w,formatter:L=>"".concat(L,"%"),parser:L=>L.replace("%","")}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(ya.a,Object(oe.default)({style:{flexGrow:1,marginRight:x?0:12}},m,{onChange:w,max:100,tipFormatter:L=>L+"%",value:N||100,disabled:a.disabled||a.readonly})),x?null:re)},ur=wa,Xn={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes","*?readonly":"text"};function Tn(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Xn,i=a.type,d=a.format,u=a.enum,g=a.readonly;if(a["ui:widget"])return a["ui:widget"];var m=[];g&&(m.push("".concat(i,"?readonly")),m.push("*?readonly")),u&&(m.push("".concat(i,"?enum")),m.push("*?enum")),d&&m.push("".concat(i,":").concat(d)),m.push(i);var x="";return m.some(R=>(x=r[R],!!x)),x}function dr(){var a=q(),r=a.selected,i=a.flatten,d=a.onItemChange,u=a.userProps,g=u===void 0?{}:u,m=g.settings,x=g.commonSettings,R={},N={},w=(l,h)=>{var y=[];return l.forEach(S=>{var j=S.widgets,E=j.filter(C=>C.widget).map(C=>Object(O.a)(Object(O.a)({},C),{},{setting:Object(O.a)(Object(O.a)({},h),C.setting)}));y=[...y,...E]}),y},re=l=>{if(r)try{var h=i[r];h&&h.schema&&d(r,Object(O.a)(Object(O.a)({},h),{},{schema:l}))}catch(y){console.log(y,"catch")}},L=Array.isArray(m)?[...m,{widgets:[...De,...he,...Ie]}]:Be,pe=ke(x)?x:be,me=w(L,pe),Z,e;try{if(Z=i[r],Z&&(e=Tn(Z.schema)),e){var n=me.find(l=>l.widget===e)||{},s=n.setting;R={schema:{type:"object",properties:Object(O.a)({},s)}},N=Z.schema}}catch(l){console.log(l)}var o=Object(O.a)(Object(O.a)({},Yn),{},{idInput:Ia,percentSlider:ur});return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Bn,{schema:R,formData:N,onChange:re,widgets:o,preview:!0,frProps:{displayType:"column",showDescIcon:!1}}))}function Pa(){var a=q(),r=a.widgets,i=a.frProps,d=a.userProps,u=Qe(),g=d&&d.globalSettings?d.globalSettings:$e,m=x=>{u({frProps:x})};return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Bn,{schema:{schema:g},formData:i,onChange:m,widgets:r,preview:!0,frProps:{displayType:"column",showDescIcon:!0}}))}var In=je.a.TabPane;function Ba(){var a=M({showRight:!0,showItemSettings:!1}),r=Object(z.default)(a,2),i=r[0],d=r[1],u=q(),g=u.selected,m=i.showRight,x=i.showItemSettings,R=()=>d({showRight:!m}),N=()=>c.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:R},c.a.createElement(Re.a,{className:"f5"})),w=()=>c.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},c.a.createElement(N,null));return Object(ae.useEffect)(()=>{g&&g[0]==="0"||g==="#"||!g?d({showItemSettings:!1}):d({showItemSettings:!0})},[g]),m?c.a.createElement("div",{className:"right-layout relative pl2"},c.a.createElement(N,null),c.a.createElement(je.a,{defaultActiveKey:"1",onChange:()=>{}},x&&c.a.createElement(In,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},c.a.createElement(dr,null)),c.a.createElement(In,{tab:"\u8868\u5355\u914D\u7F6E",key:x?"2":"1"},c.a.createElement(Pa,null)))):c.a.createElement(w,null)}var $a=a=>{var r=a.children,i=r===void 0?[]:r,d=a.preview;return c.a.createElement(c.a.Fragment,null,i.map((u,g)=>{var m={id:u,preview:d};return c.a.createElement(Pn,Object(oe.default)({key:g.toString()},m))}))},cr=$a,La=a=>{var r=a.$id,i=a.item,d=a.labelClass,u=a.contentClass,g=a.isComplex,m=a.children,x=i.schema,R=i.data,N=q(),w=N.onItemChange,re=N.flatten,L=N.widgets,pe=N.mapping,me=N.frProps,Z=me===void 0?{}:me,e=Z.labelWidth,n=Z.displayType,s=Z.showDescIcon,o=Z.showValidate,l=x.type,h=x.title,y=x.description,S=x.required,j=Tn(x,pe),E=x["ui:widget"];E&&L[E]&&(j=E);var C=L[j];if(!C){var I=Object(O.a)({},x);delete I["ui:widget"],j=Tn(I,pe),C=L[j]||"input"}var V=rt("ui:labelWidth",r,re)||e,H=Nt(V)?Number(V):lt(V)?V:110,$={width:H};j==="checkbox"?$={flexGrow:1}:(g||n==="column")&&($={flexGrow:1});var W=ue=>{var U=Object(O.a)({},i);U.data=ue,w(r,U,"data")},J={};j==="checkbox"&&n==="row"&&(J.marginLeft=V);var Ee={disabled:x["ui:disabled"],readonly:x["ui:readonly"],hidden:x["ui:hidden"],options:x["ui:options"],labelWidth:x["ui:labelWidth"],width:x["ui:width"]};return c.a.createElement(c.a.Fragment,null,x.title?c.a.createElement("div",{className:d,style:$},c.a.createElement("label",{className:"fr-label-title ".concat(j==="checkbox"||n==="column"?"no-colon":""),title:h},S&&c.a.createElement("span",{className:"fr-label-required"}," *"),c.a.createElement("span",{className:"".concat(g?"b":""," ").concat(n==="column"?"flex-none":"")},h),y&&(s?c.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":y},c.a.createElement("i",{className:"fr-tooltip-icon"}),c.a.createElement("div",{className:"fr-tooltip-container"},c.a.createElement("i",{className:"fr-tooltip-triangle"}),y)):c.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",y,"\xA0)")),n!=="row"&&o&&c.a.createElement("span",{className:"fr-validate"},"validation"))):null,c.a.createElement("div",{className:u,style:J},c.a.createElement(C,Object(oe.default)({value:R,onChange:W,schema:x},Ee,{children:m}))))},Zn=La,mr=t("iU8R"),za=t("dhM6"),Va=t("lfch"),Ma=t("aMZS");function wn(a){var r=a.$id,i=a.item,d=a.inside,u=d===void 0?!1:d,g=a.children,m=a.style,x=Object(ae.useState)(),R=Object(z.default)(x,2),N=R[0],w=R[1],re=q(),L=re.flatten,pe=re.onItemChange,me=re.onFlattenChange,Z=re.selected,e=re.hovering,n=Qe(),s=i.schema,o=s.type,l=Object(ae.useRef)(null),h=Object(Vn.a)({item:{type:"box",$id:u?0+r:r},end:(K,se)=>{var ye=se.getDropResult()},collect:K=>({isDragging:K.isDragging()})}),y=Object(z.default)(h,3),S=y[0].isDragging,j=y[1],E=y[2],C=Object(Ma.a)({accept:"box",drop:(K,se)=>{var ye=se.didDrop();if(!ye){console.log(K.dragItem,"tems");var X=cn({dragId:K.$id,dragItem:K.dragItem,dropId:r,position:N,flatten:L}),xe=Object(z.default)(X,2),ze=xe[0],Ue=xe[1];me(ze),n({selected:Ue})}},hover:(K,se)=>{var ye=se.isOver({shallow:!0});if(ye){var X=l.current&&l.current.getBoundingClientRect(),xe=(X.bottom-X.top)/2,ze=se.getSourceClientOffset(),Ue=ze.y-X.top;u?w("inside"):(Ue<=xe&&w("up"),Ue>xe&&w("down"))}},collect:K=>({isOver:K.isOver({shallow:!0}),canDrop:K.canDrop()})}),I=Object(z.default)(C,2),V=I[0],H=V.canDrop,$=V.isOver,W=I[1],J=H&&$;E(W(l));var Ee=K=>{K.stopPropagation();var se=u?"0"+r:r;n({selected:se})},ue=K=>{K.stopPropagation();var se=Object(O.a)({},L),ye="#";try{var X=se[r].parent,xe=se[X].children,ze=xe.indexOf(r);ze>0?ye=xe[ze-1]:ye=xe[1]||X}catch(Ue){console.log("catch",Ue)}delete se[r],me(se),n({selected:ye})},U=K=>{K.stopPropagation();var se=Fn(L,r),ye=Object(z.default)(se,2),X=ye[0],xe=ye[1];me(X),n({selected:xe})},ce=()=>{},Ae=()=>{},ge=Z===r&&!u;Z&&Z[0]==="0"&&(ge=Z.substring(1)===r&&u);var ne=u?"0"+r:r,P={backgroundColor:e===ne?"#ecf5ff":"#fff",opacity:S?0:1};if(u?P=Object(O.a)(Object(O.a)({},P),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):r==="#"?P=Object(O.a)(Object(O.a)({},P),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):o==="object"&&(P=Object(O.a)(Object(O.a)({},P),{},{paddingTop:12})),J&&(u?P=Object(O.a)(Object(O.a)({},P),{},{boxShadow:"0 -3px 0 red"}):N==="up"?P=Object(O.a)(Object(O.a)({},P),{},{boxShadow:"0 -3px 0 red"}):N==="down"&&(P=Object(O.a)(Object(O.a)({},P),{},{boxShadow:"0 3px 0 red"}))),ge&&(P=Object(O.a)(Object(O.a)({},P),{},{outline:"2px solid #409eff",borderColor:"#fff"})),m&&typeof m=="object"&&(P=Object(O.a)(Object(O.a)({},P),m)),r==="#"&&u)return g;var ve=s&&s.$id&&kt(s.$id);return ve==="#"&&(ve=""),c.a.createElement("div",{ref:l,style:P,className:"field-wrapper relative w-100",onClick:Ee,onMouseEnter:ce,onMouseLeave:Ae},!u&&ge&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:j},c.a.createElement(za.a,{style:{color:"#fff"}})),!u&&c.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},ve),g,ge&&!u&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"pointer",onClick:ue},c.a.createElement($t.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),c.a.createElement("div",{className:"pointer",onClick:U},c.a.createElement(Va.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var Ka=a=>{var r=a.id,i=r===void 0?"#":r,d=a.preview,u=d===void 0?!1:d,g=q(),m=g.flatten,x=g.frProps,R=x===void 0?{}:x,N=R.displayType,w=R.column,re=m[i];if(!re)return null;var L=re.schema,pe=L.type==="object",me=L.type==="array"&&L.enum===void 0,Z=pe||me,e=L["ui:width"],n="fr-field w-100 ".concat(Z?"fr-field-complex":""),s="fr-label mb2",o="fr-content",l={};switch(!Z&&e?l={width:e,paddingRight:"12px"}:!Z&&w>1&&(l={width:"calc(100% /".concat(w,")"),paddingRight:"12px"}),L.type){case"object":L.title&&(n+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",s+=" fr-label-object bg-white absolute ph2 top-upper left-1"),n+=" fr-field-object",L.title&&(o+=" ml3");break;case"array":L.title&&!L.enum&&(s+=" mt2 mb3");break;case"boolean":L["ui:widget"]!=="switch"&&(L.title&&(s+=" ml2",s=s.replace("mb2","mb0")),o+=" flex items-center",n+=" flex items-center flex-row-reverse justify-end");break;default:N==="row"&&(s=s.replace("mb2","mb0"))}var h=L.type==="boolean"&&L["ui:widget"]!=="switch";N==="row"&&!Z&&!h&&(n+=" flex items-center",s+=" flex-shrink-0 fr-label-row",s=s.replace("mb2","mb0"),o+=" flex-grow-1 relative"),N==="row"&&h&&(o+=" flex justify-end pr2");var y={$id:i,item:re,labelClass:s,contentClass:o,isComplex:Z},S={children:re.children,preview:u},j=re.children&&re.children.length>0?c.a.createElement("ul",{className:"flex flex-wrap pl0"},c.a.createElement(cr,S)):null;if(u)return c.a.createElement("div",{style:l,className:n},c.a.createElement(Zn,y,(pe||me)&&j));var E=Object.keys(m).length<2;return E?c.a.createElement(wn,{style:l,$id:i,item:re},c.a.createElement("div",{className:"".concat(n," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):c.a.createElement(wn,{style:l,$id:i,item:re},c.a.createElement("div",{className:n},c.a.createElement(Zn,y,(pe||me)&&c.a.createElement(wn,{$id:i,item:re,inside:!0},j||c.a.createElement("div",{className:"h2"})))))},Pn=Ka,kn=te.a.TextArea;function Wa(a,r){var i=a.schema,d=a.formData,u=a.onChange,g=a.onSchemaChange,m=a.setGlobal,x=a.userProps,R=x===void 0?{}:x,N=a.frProps,w=N===void 0?{}:N,re=Object(B.a)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),L=M({showModal:!1,showModal2:!1,schemaForImport:""}),pe=Object(z.default)(L,2),me=pe[0],Z=pe[1],e=re.simple,n=e===void 0?!0:e,s=re.preview,o=R.transformFrom,l=R.transformTo,h=R.isNewVersion,y=R.extraButtons,S=y===void 0?[]:y,j={};i&&(j=Rt(i.schema,i.uiSchema));var E=Mt(j),C=mn(E,d),I=function(xe){var ze=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",Ue=St(xe),ot=We(xe);ze==="schema"&&g&&g(Ue),u(ot)},V=(X,xe,ze)=>{C[X]=xe,I(C,ze)},H=()=>Z({showModal:!me.showModal}),$=()=>Z({showModal2:!me.showModal2}),W=()=>{m({schema:{schema:{type:"object"}},formData:{},selected:void 0})},J=X=>{Z({schemaForImport:X.target.value})},Ee=()=>{try{var X=o(nt(me.schemaForImport)),xe=!0;X&&X.propsSchema&&(xe=!1);var ze=pt(X),Ue=ze.schema,ot=Object(B.a)(ze,["schema"]);m(gt=>({schema:{schema:Ue},formData:{},selected:void 0,isNewVersion:xe,frProps:Object(O.a)(Object(O.a)({},gt.frProps),ot)}))}catch(gt){F.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}$()},ue={},U="";try{var ce=St(C,"#",!0);w&&w.column&&(ce["ui:column"]=w.column),w&&w.displayType&&(ce["ui:displayType"]=w.displayType),w&&w.showDescIcon&&(ce["ui:showDescIcon"]=w.showDescIcon),ue=l(Object(O.a)({schema:ce},w)),h||(ue=zn(ue)),U=JSON.stringify(ue,null,2)}catch(X){}var Ae=()=>{de()(U),F.a.info("\u590D\u5236\u6210\u529F"),H()},ge=()=>ue,ne=X=>{try{var xe=X.schema,ze=X.propsSchema,Ue=X.uiSchema,ot=Object(B.a)(X,["schema","propsSchema","uiSchema"]),gt={schema:xe||ze},Qt=!0;!xe&&ze&&(Qt=!1),m(Ot=>Object(O.a)(Object(O.a)({},Ot),{},{schema:gt,formData:{},selected:void 0,isNewVersion:Qt,frProps:Object(O.a)(Object(O.a)({},Ot.frProps),ot)}))}catch(Ot){console.error(Ot)}},P=()=>{de()(U)};Object(ae.useImperativeHandle)(r,()=>({getValue:ge,setValue:ne,copyValue:P}));var ve=Object(O.a)({flatten:C,onFlattenChange:I,onItemChange:V,userProps:R,frProps:w},re),K=Array.isArray(S)?S:[],se=K.filter(X=>X===!0||X===!1),ye=K.filter(X=>ke(X)&&X.text);return n?c.a.createElement(p.Provider,{value:m},c.a.createElement(dt.Provider,{value:ve},c.a.createElement(Pn,{preview:!0}))):c.a.createElement(p.Provider,{value:m},c.a.createElement(dt.Provider,{value:ve},c.a.createElement("div",{className:"fr-generator-container"},c.a.createElement(Y,null),c.a.createElement("div",{className:"mid-layout pr2"},c.a.createElement("div",{className:"mv2 mh1"},se[0]!==!1&&c.a.createElement(f.a,{className:"mr2 mb1",onClick:()=>{m({preview:!s,selected:"#"})}},s?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),se[1]!==!1&&c.a.createElement(f.a,{className:"mr2",onClick:W},"\u6E05\u7A7A"),se[2]!==!1&&c.a.createElement(f.a,{className:"mr2",onClick:$},"\u5BFC\u5165"),se[3]!==!1&&c.a.createElement(f.a,{type:"primary",className:"mr2",onClick:H},"\u5BFC\u51FAschema"),ye.map((X,xe)=>c.a.createElement(f.a,Object(oe.default)({key:xe.toString(),className:"mr2"},X),X.text||X.children))),c.a.createElement("div",{className:"dnd-container"},c.a.createElement("div",{style:{height:s?33:0}}),c.a.createElement(Pn,{preview:s}))),c.a.createElement(Ba,{globalProps:w}),c.a.createElement(Ct.a,{visible:me.showModal,onOk:Ae,onCancel:H,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},c.a.createElement("div",{className:"mt3"},c.a.createElement(kn,{style:{fontSize:12},value:U,autoSize:{minRows:10,maxRows:30}}))),c.a.createElement(Ct.a,{visible:me.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:Ee,onCancel:$},c.a.createElement("div",{className:"mt3"},c.a.createElement(kn,{style:{fontSize:12},value:me.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:J,autoSize:{minRows:10,maxRows:30}}))))))}var qn=Object(ae.forwardRef)(Wa);qn.defaultProps={labelWidth:120};var Bn=qn,Ja=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2?arguments[2]:void 0,u=r.type==="object"&&r.properties,g=r.type==="array"&&r.items&&r.items.properties,m=u||g;if(m){var x=Wt(r);x.map(N=>{u&&(r.properties[N.name]=a(N.schema,r,N.name)),g&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}if(i&&i.required&&Array.isArray(i.required)){var R=i.required.indexOf(d);R>-1&&(r.required=!0,i.required.splice(R,1)),i.required.length||delete i.required}return r},_n=a=>Object(O.a)(Object(O.a)({},a),{},{schema:Ja(a.schema)}),ea=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,u=r.type==="object"&&r.properties,g=r.type==="array"&&r.items&&r.items.properties,m=u||g;if(m){var x=Wt(r);x.map(R=>{u&&(r.properties[R.name]=a(R.schema,r,R.name)),g&&(r.items.properties[R.name]=a(R.schema,r,R.name))})}return typeof r.required=="boolean"&&(r.required&&i&&(i.required&&Array.isArray(i.required)?i.required.push(d):i.required=[d]),delete r.required),r},Ua=a=>Object(O.a)(Object(O.a)({},a),{},{schema:ea(a.schema)}),vr=t("xwS/"),fr=t("4l2o"),ta=t("k/c8"),Ha={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function Ga(a,r){var i=a.defaultValue,d=a.templates,u=a.submit,g=a.transformer,m=a.extraButtons,x=a.settings,R=a.commonSettings,N=a.globalSettings,w=a.widgets,re=w===void 0?{}:w,L=_n,pe=Ua;g&&(typeof g.from=="function"&&(L=g.from),typeof g.to=="function"&&(pe=g.to));var me=r||Object(ae.useRef)(),Z=M({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),e=Object(z.default)(Z,2),n=e[0],s=e[1];Object(ae.useEffect)(()=>{var U=i?L(i):Ha;U&&U.propsSchema?s({isNewVersion:!1}):s({isNewVersion:!0}),s({schema:pt(U),formData:U&&U.formData||{}})},[i]);var o=n.formData,l=n.frProps,h=n.hovering,y=n.isNewVersion,S=n.preview,j=n.schema,E=n.selected,C=l.displayType,I=C==="row",V=Object(O.a)(Object(O.a)({},l),{},{showDescIcon:I}),H=U=>{s({formData:U}),a.onChange&&a.onChange(U)},$=U=>{var ce=Object(O.a)({},j);ce.schema=U,s({schema:ce}),a.onSchemaChange&&setTimeout(()=>{var Ae=me.current.getValue();a.onSchemaChange(Ae)},0)},W=Object(O.a)(Object(O.a)({},Xn),{},{array:"listEditor"}),J={preview:S,simple:!1,mapping:W,widgets:Object(O.a)(Object(O.a)({},Yn),re),selected:E,hovering:h},Ee={templates:d,submit:u,transformFrom:L,transformTo:pe,isNewVersion:y,extraButtons:m,settings:x,commonSettings:R,globalSettings:N},ue=Object(O.a)(Object(O.a)({schema:j,formData:o,onChange:H,setGlobal:s,onSchemaChange:$},J),{},{userProps:Ee,frProps:V});return c.a.createElement(Bn,Object(oe.default)({ref:me},ue))}var Qa=Object(ae.forwardRef)(Ga),hn=t("trko"),Ya=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=r.type==="object"&&r.properties,u=r.type==="array"&&r.items&&r.items.properties,g=d||u;if(g){var N=Wt(r);N.map(w=>{d&&(r.properties[w.name]=a(w.schema,r)),u&&(r.items.properties[w.name]=a(w.schema,r))})}else if(r.enum&&Array.isArray(r.enum)){var m=r.enum;if(ke(m[0])&&m[0].label!==void 0&&m[0].value!==void 0){var x=m.map(w=>w.label),R=m.map(w=>w.value);r.enum=R,r.enumNames=x}}return r["x-component"]&&(r["ui:widget"]=r["x-component"]),r["x-component-props"]&&(r["ui:options"]=r["x-component-props"]),i&&r.required&&(i.required&&Array.isArray(i.required)?i.required.push(r.name):i.required=[r.name]),delete r.key,delete r.name,delete r.required,delete r["x-component"],delete r["x-component-props"],r},Xa=a=>{var r=Ya(a);return{schema:r}},pr=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,u=r.type==="object"&&r.properties,g=r.type==="array"&&r.items&&r.items.properties,m=u||g;if(m){var R=Wt(r);R.map(N=>{u&&(r.properties[N.name]=a(N.schema,r,N.name)),g&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}else if(r.enum&&Array.isArray(r.enum)&&r.enumNames&&Array.isArray(r.enumNames)){var x=r.enum.map((N,w)=>({value:N,label:r.enumNames[w]}));r.enum=x}return r["ui:widget"]&&(r["x-component"]=r["ui:widget"]),r["ui:options"]&&(r["x-component-props"]=r["ui:options"]),delete r["ui:widget"],delete r["ui:options"],delete r.enumNames,d&&(r.name=d,r.key=d),i&&d&&i.required&&Array.isArray(i.required)&&i.required.indexOf(d)>-1&&(r.required=!0),r},hr=a=>{var r=a.schema;return pr(r)},gr=(a,r)=>c.a.createElement(k.a,{backend:D.a},c.a.createElement(Qa,Object(oe.default)({ref:r},a))),xt=Q.default=Object(ae.forwardRef)(gr)},refC:function(Me,Q,t){"use strict";t.r(Q),t.d(Q,"useForm",function(){return w}),t.d(Q,"connectForm",function(){return re}),t.d(Q,"createWidget",function(){return $t});var oe=t("Saan"),ae=t("vgIT"),c=t.n(ae),k=t("0Owb"),D=t("k1fw"),O=t("PpiC"),z=t("q1tI"),p=t.n(z),dt=t("Pv/L"),Qe=t("tJVT"),q=t("LvDl");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function M(e){var n=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:n.test(e)}function Et(e,n){return n?!1:e&&e.type==="boolean"&&e.widget!=="switch"}function nn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function ct(e){if(typeof e=="string"){var n=e.split(".");return n.length===1?"#":(n.pop(),n.join("."))}return"#"}function Ft(e,n){if(n==="#")return e;if(typeof n=="string")return Object(q.get)(e,n)}function zt(e){var n,s;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,l=e.match(o);return l?(n=e.replace(o,"[]"),s=l.map(h=>Number(h.substring(1,h.length-1)))):n=e,{id:n,dataIndex:s}}function bt(e,n){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var s=e;return Array.isArray(n)&&n.forEach(o=>{s=s.replace(/\[\]/,"[".concat(o,"]"))}),nn(s)}function mt(e){return e.type==="array"&&e.items&&e.enum===void 0}function vt(e){return e.type==="object"&&e.properties}function Ct(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",s=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=f(e),h=n;l.$id||(l.$id=h);var y=[];vt(l)&&Object.entries(l.properties).forEach(j=>{var E=Object(Qe.default)(j,2),C=E[0],I=E[1],V=mt(I)?C+"[]":C,H=h==="#"?V:h+"."+V;y.push(H),Ct(I,H,h,o)}),mt(l)&&Object.entries(l.items.properties).forEach(j=>{var E=Object(Qe.default)(j,2),C=E[0],I=E[1],V=mt(I)?C+"[]":C,H=h==="#"?V:h+"."+V;y.push(H),Ct(I,H,h,o)});var S=Array.isArray(l.rules)?[...l.rules]:[];return["boolean","function","string"].indexOf(typeof l.required)>-1&&S.push({required:l.required}),l.type&&(o[h]={parent:s,schema:l,children:y,rules:S}),o}function ee(e,n){return e.indexOf(n)>-1}var b=e=>ee(Object.prototype.toString.call(e),"Object"),f=q.cloneDeep;function T(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function v(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function F(e,n){if(e===void 0&&n===void 0)return!0;if(e===void 0||n===void 0)return!1;if(e===null&&n===null)return!0;if(e===null||n===null)return!1;if(e.constructor!==n.constructor)return!1;if(e.constructor===Array){if(e.length!==n.length)return!1;for(var s=0;s<e.length;s++)if(e[s].constructor===Array||e[s].constructor===Object){if(!F(e[s],n[s]))return!1}else if(e[s]!==n[s])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var l=Object.keys(e)[o];if(e[l]&&typeof e[l]!="number"&&(e[l].constructor===Array||e[l].constructor===Object)){if(!F(e[l],n[l]))return!1}else if(e[l]!==n[l])return!1}}else if(e.constructor===String||e.constructor===Number)return e===n;return!0}function B(e){var n;switch(e){case"date":n="YYYY-MM-DD";break;case"time":n="HH:mm:ss";break;default:n="YYYY-MM-DD HH:mm:ss"}return n}function G(e){return e.find((n,s,o)=>s!==o.findIndex(l=>JSON.stringify(n)===JSON.stringify(l)))}function _(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=ie(e),o=s.map(y=>{var S=y.name,j=y.schema,E=j.type,C=j.enum,I=j.properties,V=j.items,H=E==="object"&&I,$=E==="array"&&V&&!C,W=S&&n[y.name];if(!W)return y;if($){var J=_(V,W.items||{});return Object(D.a)(Object(D.a)({},y),{},{schema:Object(D.a)(Object(D.a)(Object(D.a)({},y.schema),W),{},{items:J})})}if(H){var Ee=_(y.schema,W);return Object(D.a)(Object(D.a)({},y),{},{schema:Ee})}return Object(D.a)(Object(D.a)({},y),{},{schema:Object(D.a)(Object(D.a)({},y.schema),W)})}),l={};o.forEach(y=>{l[y.name]=y.schema});var h={};return Object.keys(n).forEach(y=>{typeof y=="string"&&y.substring(0,3)==="ui:"&&(h[y]=n[y])}),te(l)?Object(D.a)(Object(D.a)({},e),h):Object(D.a)(Object(D.a)(Object(D.a)({},e),h),{},{properties:l})}function te(e){return Object.keys(e).length===0}function ie(e){if(!e)return[];var n=e.properties,s=e.items,o=e.type;if(!n&&!s)return[];var l={};return o==="object"&&(l=n),o==="array"&&(l=s),Object.keys(l).map(h=>({schema:l[h],name:h}))}function de(){}var be=e=>Function('"use strict";return ('+e+")")(),De=(e,n,s)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(s),`;
    const formData = `).concat(JSON.stringify(n),`;
    return (`).concat(e,")"))();function he(e){if(typeof e!="string")return!1;var n=/^{{(.+)}}$/,s=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(n)&&!e.match(s)&&!e.match(o))}function Ie(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,o=ct(s),l=Ft(n,o)||{};if(typeof e=="string"){var h=e.substring(2,e.length-2),y=/formData.([a-zA-Z0-9.$_\[\]]+)/g,S=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,j=`
    return (`.concat(h.replaceAll(y,(E,C)=>JSON.stringify(Ft(n,C))).replaceAll(S,(E,C)=>JSON.stringify(Ft(l,C))),")");console.log(j,l,n);try{return Function(j)()}catch(E){return e}}else return e}var Fe=e=>Object.keys(e).some(n=>{var s=e[n];return typeof s=="string"?he(s):b(s)?Fe(s):!1}),Be=(e,n,s)=>{var o=f(e);return Object.keys(o).forEach(l=>{var h=o[l];if(he(h)&&(o[l]=Ie(h,n,s)),typeof l=="string"&&l.toLowerCase().indexOf("props")>-1){var y=o[l];b(y)&&Object.keys(y).forEach(S=>{o[l][S]=Ie(y[S],n,s)})}}),o};function $e(e){return Object.keys(e).some(n=>typeof e[n]=="function"?!0:typeof e[n]=="string"?he(e[n]):typeof e[n]=="object"?$e(e[n]):!1)}var Ge=(e,n,s)=>{try{var o=s[n];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var l=s[o.parent].schema;return l[e]!==void 0?l[e]:Ge(e,o.parent,s)}}catch(h){return}},we=()=>{var e=localStorage.getItem("SAVES");if(e)try{var n=JSON.parse(e),s=n.length;if(s)return s+1}catch(o){return 1}else return 1};function Se(e){return Function('"use strict";return ('+e+")")()}function Ze(e){if(!e)return[];var n=e.properties,s=e.items,o=e.type;if(!n&&!s)return[];var l={};return o==="object"&&(l=n),o==="array"&&(l=s.properties),Object.keys(l).map(h=>({schema:l[h],name:h}))}var tt=e=>{if(e&&e.propsSchema){var n=e.propsSchema,s=Object(O.a)(e,["propsSchema"]);return Object(D.a)({schema:n},s)}return e},Ke=e=>{if(e&&e.schema){var n=e.schema,s=Object(O.a)(e,["schema"]);return Object(D.a)({propsSchema:n},s)}return e},ke=e=>{if(!!e){var n=e&&e.items&&e.items.enum,s=e&&e.enum;return n||s}},it=function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(n)?n:s},Nt=e=>{var n="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(n).test(e))};function lt(e){var n=arguments.length<=1?void 0:arguments[1];return n&&n.target&&e in n.target?n.target[e]:n}var Dt=e=>{try{var n=e.split("."),s=n.slice(-1)[0];return s}catch(o){return console.error(o,"getKeyFromPath"),""}},an=(e,n)=>{if(typeof e=="boolean")return e?"yes":"no";if(vt(n)||mt(n))return"-";if(Array.isArray(n.enum)&&Array.isArray(n.enumNames))try{return n.enumNames[n.enum.indexOf(e)]}catch(s){return e}return e},Vt=e=>{var n={};return b(e)?Object.keys(e).forEach(s=>{n[s]=Vt(e[s])}):Array.isArray(e)?n=e.filter(s=>!!(s&&JSON.stringify(s)!=="{}")):n=e,n},Rt=e=>{var n=e.schema,s=e.isRequired,o=s===void 0?!0:s,l={};if(vt(n))l.type="object",o&&n.required===!0&&(l.required=!0),l.fields={},Object.keys(n.properties).forEach(E=>{var C=n.properties[E];Array.isArray(n.required)&&n.required.indexOf(E)>-1&&(C.required=!0),l.fields[E]=Rt({schema:C,isRequired:o})});else if(mt(n))l.type="array",o&&n.required===!0&&(l.required=!0),l.defaultField={type:"object",fields:{}},Object.keys(n.items.properties).forEach(E=>{var C=n.items.properties[E];Array.isArray(n.required)&&n.required.indexOf(E)>-1&&(C.required=!0),l.defaultField.fields[E]=Rt({schema:C,isRequired:o})});else{var h=E=>n.type?Object(D.a)(Object(D.a)({},E),{},{type:n.type}):E.pattern&&typeof E.pattern=="string"?Object(D.a)(Object(D.a)({},E),{},{pattern:new RegExp(E.pattern)}):E,y=n.required,S=Object(O.a)(n,["required"]);if(o&&n.required===!0&&(S.required=!0),n.rules)if(Array.isArray(n.rules)){var j=n.rules.map(E=>h(E));l=[S,...j]}else b(n.rules)?l=[S,h(n.rules)]:l=S;else l=S;switch(n.type){case"range":l.type="array";break;default:break}switch(n.format){case"email":case"url":l.type=n.format;break;case"image":break;default:break}}return l},Tt=e=>{var n=e.split(".");return n.map(s=>isNaN(Number(s))?s:"[".concat(s,"]")).reduce((s,o)=>o[0]==="["||s===""?s+o:s+"."+o,"")},rn=(e,n)=>{for(var s=e.split(".");s.length>0;){var o=s,l=Object(dt.a)(o),h=l[0],y=l.slice(1);h=h.split("[")[0];var S=void 0;return vt(n)?S=n.properties[h]:mt(n)&&(S=n.items.properties[h]),s=y,S?rn(y.join("."),S):!!n.required}},Yt=e=>{var n={};return vt(e)?Object.keys(e.properties).forEach(s=>{var o=e.properties[s],l=Yt(o);n[s]=l}):e.default!==void 0?n=e.default:e.type==="boolean"?n=!1:n=void 0,n},un=(e,n)=>{if(typeof e!="string")return"";if(!n)return e;if(e=e.replace("${title}",n.title),e=e.replace("${type}",n.format||n.type),n.min&&(e=e.replace("${min}",n.min)),n.max&&(e=e.replace("${max}",n.max)),n.rules){var s=n.rules.find(y=>y.min!==void 0);s&&(e=e.replace("${min}",s.min));var o=n.rules.find(y=>y.max!==void 0);o&&(e=e.replace("${max}",o.max));var l=n.rules.find(y=>y.len!==void 0);l&&(e=e.replace("${len}",l.len));var h=n.rules.find(y=>y.pattern!==void 0);h&&(e=e.replace("${pattern}",h.pattern))}return e},It=(e,n)=>{var s=f(e);if(s=n(s),vt(s)){var o=[];Array.isArray(s.required)&&(o=s.required,delete s.required),Object.keys(s.properties).forEach(l=>{var h=s.properties[l];o.indexOf(l)>-1&&(h.required=!0),s.properties[l]=It(h,n)})}else mt(s)&&Object.keys(s.items.properties).forEach(l=>{var h=s.items.properties[l];s.items.properties[l]=It(h,n)});return s},Xt=e=>It(e,Zt),Zt=e=>{try{var n=f(e);if(n.rules=[],n.props=n.props||{},n["ui:options"]&&(n.props=n["ui:options"],delete n["ui:options"]),n.pattern){var s={pattern:n.pattern};n.message&&n.message.pattern&&(s.message=n.message.pattern),n.rules.push(s),delete n.pattern,delete n.message}return n.minLength&&(n.rules.push({min:n.minLength}),delete n.minLength),n.maxLength&&(n.rules.push({max:n.maxLength}),n.props.maxLength=n.maxLength,delete n.maxLength),n.min&&(n.rules.push({min:n.min}),n.props.min=n.min,delete n.min),n.max&&(n.rules.push({max:n.max}),n.props.max=n.max,delete n.max),n.step&&(n.props.step=n.step,delete n.step),n.minItems&&(n.props.minItems=n.minItems,delete n.minItems),n.maxItems&&(n.props.maxItems=n.maxItems,delete n.maxItems),n["ui:className"]&&(n.className=n["ui:className"],delete n["ui:className"]),n["ui:hidden"]&&(n.hidden=n["ui:hidden"],delete n["ui:hidden"]),n["ui:readonly"]&&(n.readOnly=n["ui:readonly"],delete n["ui:readonly"]),n["ui:disabled"]&&(n.disabled=n["ui:disabled"],delete n["ui:disabled"]),n["ui:width"]&&(n.width=n["ui:width"],delete n["ui:width"]),n["ui:labelWidth"]&&(n.labelWidth=n["ui:labelWidth"],delete n["ui:labelWidth"]),n.rules&&n.rules.length===0&&delete n.rules,n}catch(o){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",o),e}},Mt=(e,n)=>{var s=parseRootValue(e),o=replaceParseValue(s)},kt=e=>{if(typeof e!="string")return!1;var n=/^{{(function.+)}}$/,s=/^{{(.+=>.+)}}$/;return e.match(n)?e.match(n)[1]:e.match(s)?e.match(s)[1]:!1},dn=function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return b(n)?(n.theme&&s[n.theme]&&(o=Object(D.a)(Object(D.a)({},n),s[n.theme])),Object.keys(n).forEach(l=>{o[l]=e(n[l],s)})):o=n,o},An=t("zmYW"),St=t("DtFj"),sn=t.n(St),Fn=t("dc+4"),yn=t("Btem"),Kt=t.n(yn),cn=t("lfLe"),mn=t("Cp9S"),Ce=t.n(mn),We=t("MaXC"),rt=t("4IMT"),nt=t.n(rt),Wt=t("eOfH"),vn=t("h0/l"),wt=t.n(vn),on=Object(z.createContext)(()=>{}),Jt=Object(z.createContext)({}),Pt=()=>Object(z.useContext)(on),ft=()=>Object(z.useContext)(Jt),pt=e=>Object(z.useReducer)((n,s)=>Object(D.a)(Object(D.a)({},n),s),e);function zn(e,n,s){var o=Object(z.useRef)();Object(z.useEffect)(()=>{o.current=e},[e]);var l=Object(z.useRef)();return Object(z.useEffect)(()=>{if(!s)return;function h(){o&&o.current&&o.current()}if(h(),n!==null)return l.current=setInterval(h,n),()=>clearInterval(l.current)},[n,s]),()=>clearInterval(l.current)}function Vn(e){var n=Object(z.useRef)();return Object(z.useEffect)(()=>{n.current=e},[e]),n.current}var ka=e=>{var n=Object(z.useState)(!1),s=Object(Qe.default)(n,2),o=s[0],l=s[1],h;try{h=localStorage.getItem(e)}catch(y){}return h||(l(!0),localStorage.setItem(e,JSON.stringify(!0))),o},Mn=()=>{var e=Object(z.useState)(!1),n=Object(Qe.default)(e,2),s=n[0],o=n[1],l=()=>o(!s);return[s,l]},Kn=e=>{var n=Object(z.useState)(e),s=Object(Qe.default)(n,2),o=s[0],l=s[1];return[o,l]},Wn=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var E=localStorage.getItem(s);if(E)try{return JSON.parse(E)}catch(C){return n}return n},l=Object(z.useState)(o()),h=Object(Qe.default)(l,2),y=h[0],S=h[1],j=E=>{S(E),localStorage.setItem(s,JSON.stringify(E))};return[y,j]};function A(e){var n=e.height,s=e.width,o=e.onClick;return p.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||n||256,height:n||s||256,onClick:o},p.a.createElement("path",{d:"M755.2 375.637333a42.666667 42.666667 0 0 0 0.554667-60.330666l-213.333334-217.173334a42.666667 42.666667 0 0 0-60.842666 0l-213.333334 217.173334a42.666667 42.666667 0 1 0 60.842667 59.818666L469.333333 232.32V896a42.666667 42.666667 0 1 0 85.333334 0V232.32l140.245333 142.805333a42.666667 42.666667 0 0 0 60.330667 0.512z",fill:"#1890ff"}))}function Y(e){var n=e.height,s=e.width,o=e.onClick;return p.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||n||256,height:n||s||256,onClick:o},p.a.createElement("path",{d:"M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z",fill:"#1890ff"}))}var le=t("Oxum"),Oe=e=>{var n=e.message,s=e.schema,o=e.hideValidation,l="";return typeof n=="string"&&(l=n),Array.isArray(n)&&(l=n[0]||""),l=un(l,s),!l&&o?null:p.a.createElement("div",{className:"error-message"},l)},je=Oe,Re=t("/MfK"),Ne=t("lfch"),Le=t("fVyk"),Je=120,Ye=e=>{var n=e.parentId,s=e.dataIndex,o=s===void 0?[]:s,l=e.children,h=l===void 0?[]:l,y=e.errorFields,S=e.displayType,j=ft(),E=j.formData,C=j.flatten,I=j.onItemChange,V=j.removeErrorField,H="list";try{H=C[n].schema.widget}catch(ne){}var $=bt(n,o),W;typeof $=="string"&&(W=Object(q.get)(E,$));var J=Array.isArray(W)?W:[{}],Ee=()=>{var ne=[...J,{}],P=ne.length-1;return I($,ne),P},ue=ne=>{var P=J[ne],ve=[...J.slice(0,ne),P,...J.slice(ne)];I($,ve)},U=ne=>{var P=J.filter((ve,K)=>K!==ne);I($,P),V("".concat($,"[").concat(ne,"]"))},ce=ne=>{if(ne!==0){var P=J[ne],ve=J[ne-1],K=J;K[ne]=ve,K[ne-1]=P,I($,K)}},Ae=ne=>{if(!(ne>=J.length-1)){var P=J[ne],ve=J[ne+1],K=J;K[ne]=ve,K[ne+1]=P,I($,K)}},ge={displayList:J,dataPath:$,dataIndex:o,children:h,deleteItem:U,addItem:Ee,copyItem:ue,moveItemDown:Ae,moveItemUp:ce,listData:W,flatten:C,errorFields:y,displayType:S};switch(H){case"list0":return p.a.createElement(Ut,ge);case"list1":return p.a.createElement(qe,ge);case"list2":return p.a.createElement(Bt,ge);case"list3":return p.a.createElement(qt,ge);default:return p.a.createElement(Ut,ge)}},ht=Ye,qe=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,l=e.children,h=e.deleteItem,y=e.addItem,S=e.copyItem,j={schema:{type:"object",properties:{}},rules:[],children:l};return p.a.createElement("div",{className:""},s.map((E,C)=>p.a.createElement("div",{key:C,style:{display:"flex"}},p.a.createElement(hn,{displayType:"inline",_item:j,dataIndex:[...o,C]}),p.a.createElement("div",{style:{marginTop:6}},p.a.createElement(wt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>h(C),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement(Re.a,{style:{fontSize:17,marginLeft:8}})),p.a.createElement(Ne.a,{style:{fontSize:16,marginLeft:8},onClick:()=>S(C)})))),p.a.createElement(nt.a,{style:{marginTop:s.length>0?0:8},type:"dashed",onClick:y},"\u65B0\u589E\u4E00\u6761"))},qt=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataPath,l=e.dataIndex,h=e.children,y=e.deleteItem,S=e.addItem,j=e.moveItemDown,E=e.moveItemUp,C=e.flatten,I=e.errorFields,V=pt({showDrawer:!1,currentIndex:-1}),H=Object(Qe.default)(V,2),$=H[0],W=H[1],J={schema:{type:"object",properties:{}},rules:[],children:h},Ee=$.showDrawer,ue=$.currentIndex,U=s.map((P,ve)=>Object(D.a)(Object(D.a)({},P),{},{$idx:ve})),ce=h.map(P=>{var ve=C[P],K=ve&&ve.schema||{},se=Dt(P);return{dataIndex:se,title:K.title,width:Je,render:(ye,X)=>{var xe=bt(P,[X.$idx]),ze=I.find(Ue=>Ue.name==xe)||{};return p.a.createElement("div",null,p.a.createElement("div",null,an(ye,K)),ze.error&&p.a.createElement(je,{message:ze.error,schema:K}))}}});ce.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(P,ve,K)=>{var se=P&&P.$idx||0;return p.a.createElement(Ce.a,null,p.a.createElement("a",{onClick:()=>Ae(se)},"\u7F16\u8F91"),p.a.createElement(wt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>y(K),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement("a",null,"\u5220\u9664")))}});var Ae=P=>{W({showDrawer:!0,currentIndex:P})},ge=()=>{W({showDrawer:!1,currentIndex:-1})},ne=()=>{var P=S();Ae(P)};return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"w-100 mb2 tr"},p.a.createElement(nt.a,{type:"primary",size:"small",onClick:ne},"\u65B0\u589E")),p.a.createElement(Kt.a,{width:"600",title:"\u7F16\u8F91",placement:"right",onClose:ge,visible:Ee},p.a.createElement("div",{className:"fr-container"},p.a.createElement(hn,{_item:J,dataIndex:[...l,ue]}))),p.a.createElement(sn.a,{scroll:{x:"max-content"},columns:ce,dataSource:U,rowClassName:(P,ve)=>{var K=P&&P.$idx,se=I.find(ye=>ye.name.indexOf("".concat(o,"[").concat(K,"]"))>-1);return se?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Bt=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,l=e.children,h=e.deleteItem,y=e.addItem,S=e.flatten,j=s.map((C,I)=>({index:I})),E=l.map(C=>{var I=S[C],V=I&&I.schema||{};return{dataIndex:C,title:V.title,width:Je,render:(H,$,W)=>{var J=[...o,$.index];return p.a.createElement(hn,{hideTitle:!0,displayType:"inline",key:W.toString(),id:C,dataIndex:J})}}});return E.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(C,I,V)=>p.a.createElement(wt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>h(idx),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement("a",null,"\u5220\u9664"))}),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"w-100 mb2 tr"},p.a.createElement(nt.a,{type:"primary",size:"small",onClick:y},"\u65B0\u589E")),p.a.createElement(sn.a,{scroll:{x:"max-content"},columns:E,dataSource:j,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Ut=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,l=e.children,h=e.deleteItem,y=e.copyItem,S=e.addItem,j=e.displayType,E={schema:{type:"object",properties:{}},rules:[],children:l};return p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"fr-card-list"},s.map((C,I)=>p.a.createElement("div",{className:"fr-card-item ".concat(j==="row"?"fr-card-item-row":""),key:I},p.a.createElement("div",{className:"fr-card-index"},I+1),p.a.createElement(hn,{displayType:j,_item:E,dataIndex:[...o,I]}),p.a.createElement(Ce.a,{direction:"horizontal",className:"fr-card-toolbar"},p.a.createElement(wt.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>h(I),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},p.a.createElement(Re.a,{style:{fontSize:17,marginLeft:8}})),p.a.createElement(Ne.a,{style:{fontSize:16,marginLeft:8},onClick:()=>y(I)}))))),p.a.createElement(nt.a,{style:{marginTop:s.length>0?0:8},type:"dashed",onClick:S},"\u65B0\u589E\u4E00\u6761"))},Ht=e=>{var n=e.children,s=n===void 0?[]:n,o=e.dataIndex,l=o===void 0?[]:o,h=e.displayType;return p.a.createElement(p.a.Fragment,null,s.map((y,S)=>{var j={displayType:h,id:y,dataIndex:l};return p.a.createElement(hn,Object(k.default)({key:S.toString()},j))}))},_t=Ht;function en(e,n,s){var o=this,l=Object(z.useRef)(null),h=Object(z.useRef)(0),y=Object(z.useRef)(null),S=Object(z.useRef)([]),j=Object(z.useRef)(),E=Object(z.useRef)(),C=Object(z.useRef)(e),I=Object(z.useRef)(!0);C.current=e;var V=!n&&n!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0,s=s||{};var H=!!s.leading,$="trailing"in s?!!s.trailing:!0,W="maxWait"in s,J=W?Math.max(+s.maxWait||0,n):null;Object(z.useEffect)(()=>(I.current=!0,()=>{I.current=!1}),[]);var Ee=Object(z.useMemo)(()=>{var ue=P=>{var ve=S.current,K=j.current;return S.current=j.current=null,h.current=P,E.current=C.current.apply(K,ve)},U=(P,ve)=>{V&&cancelAnimationFrame(y.current),y.current=V?requestAnimationFrame(P):setTimeout(P,ve)},ce=P=>{if(!I.current)return!1;var ve=P-l.current,K=P-h.current;return!l.current||ve>=n||ve<0||W&&K>=J},Ae=P=>(y.current=null,$&&S.current?ue(P):(S.current=j.current=null,E.current)),ge=()=>{var P=Date.now();if(ce(P))return Ae(P);if(!!I.current){var ve=P-l.current,K=P-h.current,se=n-ve,ye=W?Math.min(se,J-K):se;U(ge,ye)}},ne=function(){for(var ve=Date.now(),K=ce(ve),se=arguments.length,ye=new Array(se),X=0;X<se;X++)ye[X]=arguments[X];if(S.current=ye,j.current=o,l.current=ve,K){if(!y.current&&I.current)return h.current=l.current,U(ge,n),H?ue(l.current):E.current;if(W)return U(ge,n),ue(l.current)}return y.current||U(ge,n),E.current};return ne.cancel=()=>{y.current&&(V?cancelAnimationFrame(y.current):clearTimeout(y.current)),h.current=0,S.current=l.current=j.current=y.current=null},ne.isPending=()=>!!y.current,ne.flush=()=>y.current?Ae(Date.now()):E.current,ne},[H,W,n,J,$,V]);return Ee}var Ve=en,jt=e=>{var n=e.labelClass,s=e.labelStyle,o=e.schema,l=e.displayType,h=ft(),y=h.displayType,S=h.readOnly,j=o.title,E=o.description,C=o.required,I=o.type,V=I==="object",H=o.displayType||l||y||"column";return p.a.createElement("div",{className:n,style:s},p.a.createElement("label",{className:"fr-label-title ".concat(Et(o,S)||H==="column"?"no-colon":""),title:j},C===!0&&p.a.createElement("span",{className:"fr-label-required"}," *"),p.a.createElement("span",{className:"".concat(V?"b":""," ").concat(H==="column"?"flex-none":"")},j),E&&(H==="row"?p.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":E},p.a.createElement("i",{className:"fr-tooltip-icon"}),p.a.createElement("div",{className:"fr-tooltip-container"},p.a.createElement("i",{className:"fr-tooltip-triangle"}),E)):H==="inline"?null:p.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",E,"\xA0)"))))},st=jt,He={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:date":"date","string:url":"url","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"dateRange","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function _e(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:He,s=e.type,o=e.format,l=e.enum,h=e.readOnly,y=[];h&&(y.push("".concat(s,"?readOnly")),y.push("*?readOnly")),l&&(Array.isArray(l)&&(s==="array"&&l.length>6||s!=="array"&&l.length>2)?(y.push("".concat(s,"?enum_long")),y.push("*?enum_long")):(y.push("".concat(s,"?enum")),y.push("*?enum"))),o&&y.push("".concat(s,":").concat(o)),y.push(s);var S="";return y.some(j=>(S=n[j],!!S)),S}var ut={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},ln=t("6UYH"),At=t("fTA7"),Gt=t.n(At),Xe=t("pJsf"),et=t("g4D/"),Te=t.n(et),at=t("bd+v"),bn=t("LB4q"),fn=t.n(bn),tn=t("Hjg5"),jn=t("rmht"),xn=t.n(jn),On=t("LGkk"),En=t("rVaU"),na=t.n(En),qa=t("b+Mx"),aa=t("5Dct"),Jn=t.n(aa),ra=t("cUip"),Sn=t("iJl9"),pn=t.n(Sn),$t=(e,n)=>s=>o=>{var l=o.schema,h=Object(O.a)(o,["schema"]),y=Object(D.a)(Object(D.a)({},l),n),S=typeof e=="function"?e(Object(D.a)({schema:y},h)):{},j=Object(D.a)(Object(D.a)({schema:y},h),S),E=Un(j);return p.a.createElement(s,E)},Un=e=>{var n=e.onChange,s=e.value,o=e.defaultValue,l=e.schema,h=Object(O.a)(e,["onChange","value","defaultValue","schema"]),y=Object(D.a)({},l),S=y||{},j=S.trigger,E=S.valuePropName,C={},I="value",V=s===void 0?o:s;E&&typeof E=="string"?(I=E,C[E]=V):C.value=V;var H=function(){for(var Ee=arguments.length,ue=new Array(Ee),U=0;U<Ee;U++)ue[U]=arguments[U];var ce=lt(I,...ue);n(ce)};j&&typeof j=="string"?C[j]=H:C.onChange=H;var $={disabled:y.disabled||y["ui:disabled"],readOnly:y.readOnly||y["ui:readonly"],hidden:y.hidden||y["ui:hidden"]},W=Object(D.a)(Object(D.a)(Object(D.a)({},C),{},{schema:y},$),h);return W},sa=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var h=n||{},y=h.enum,S=h.enumNames;l=it(y).map((j,E)=>{var C=S&&Array.isArray(S)?S[E]:j,I=typeof C=="string"&&C[0]==="<";return I&&(C=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:C}})),{label:C,value:j}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",marginTop:5},s)}},ia=$t(sa)(Te.a.Group),_a=ia,oa=t("ypy7"),Hn=t.n(oa),er=t("rNQX");function la(e){var n=e.schema.format,s=l=>{e.disabled||e.readonly||e.onChange(l.color)},o=l=>{e.onChange(l.target.value)};return p.a.createElement("div",{className:"fr-color-picker"},p.a.createElement(Hn.a,{type:n,animation:"slide-up",color:e.value||"#ffffff",onChange:s}),e.readonly?p.a.createElement("span",null,e.value||"#ffffff"):p.a.createElement(pn.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var yr=t("GBD3"),ua=t("wXtC"),Cn=t.n(ua),tr=t("mxgt"),da=t("4ZwL"),ca=t.n(da),ma=t("wd/R"),Nn=t.n(ma),va=e=>{var n=e.schema.format,s=n===void 0?"dateTime":n;e.options&&e.options.format&&(s=e.options.format);var o=s==="time"?ca.a:Cn.a,l=B(s),h=e.value||"";typeof h=="string"&&(s==="week"&&(h=h.substring(0,h.length-1)),s==="quarter"&&(h=h.replace("Q",""))),h&&(h=Nn()(h,l));var y=e.description?{placeholder:e.description}:{},S=(E,C)=>e.onChange(C),j=Object(D.a)(Object(D.a)(Object(D.a)({},y),e.options),{},{value:h,style:{width:"100%"},disabled:e.disabled||e.readOnly,onChange:S});return s==="dateTime"&&(j.showTime=!0),["week","month","quarter","year"].indexOf(s)>-1&&(j.picker=s),p.a.createElement(o,j)},fa=Cn.a.RangePicker,pa=ca.a.RangePicker;function ha(e){var n=e&&e.schema,s=n.format,o=s===void 0?"dateTime":s,l=(S,j)=>e.onChange(j),h=o==="time"?pa:fa,y=Object(D.a)(Object(D.a)({},e),{},{onChange:l,RangeComponent:h});return p.a.createElement(nr,y)}var nr=e=>{var n=e.onChange,s=e.RangeComponent,o=e.value,l=e.schema,h=l===void 0?{}:l,y=e.options,S=e.disabled,j=e.readOnly,E=h.format,C=E===void 0?"dateTime":E;y&&y.format&&(C=y.format);var I=B(C),V=Array.isArray(o)?o:[],H=Object(Qe.default)(V,2),$=H[0],W=H[1];typeof $=="string"&&typeof W=="string"&&(C==="week"&&($=$.substring(0,$.length-1),W=W.substring(0,W.length-1)),C==="quarter"&&($=$.replace("Q",""),W=W.replace("Q","")));var J=$&&W?[Nn()($,I),Nn()(W,I)]:[],Ee=Object(D.a)(Object(D.a)({},y),{},{value:J,style:{width:"100%"},showTime:C==="dateTime",disabled:S||j,onChange:n});return["week","month","quarter","year"].indexOf(C)>-1&&(Ee.picker=C),p.a.createElement(s,Ee)};function ga(e){var n=e.children;return p.a.createElement("div",{className:"w-100"},n)}var ya=t("7LYo"),ba=t("5GXF"),Gn=t.n(ba),ar=Gn.a.Panel;function ja(e){var n=e.children,s=e.title,o=Object(O.a)(e,["children","title"]),l=ft(),h=l.theme,y=l.displayType;return s?h=="1"?p.a.createElement("div",{className:"w-100"},p.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},s),p.a.createElement("div",{style:{marginLeft:y=="row"?0:12}},n)):p.a.createElement("div",{className:"w-100"},p.a.createElement(Gn.a,{defaultActiveKey:["1"]},p.a.createElement(ar,{header:p.a.createElement("div",{style:{fontSize:16,fontWeight:500}},s),key:"1",className:"fr-collapse-object"},n))):p.a.createElement("div",{className:"w-100"},n)}var rr=t("ek7I"),xa=t("FAat"),Qn=t.n(xa),Oa=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var h=n||{},y=h.enum,S=h.enumNames;l=it(y).map((j,E)=>{var C=S&&Array.isArray(S)?S[E]:j,I=typeof C=="string"&&C[0]==="<";return I&&(C=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:C}})),{label:C,value:j}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%"},s)}},sr=$t(Oa)(Qn.a),Ea=sr,ir=t("7kJ1"),Sa=t("qPIi"),Ca=t.n(Sa),or=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var h=n||{},y=h.enum,S=h.enumNames;l=it(y).map((j,E)=>{var C=S&&Array.isArray(S)?S[E]:j,I=typeof C=="string"&&C[0]==="<";return I&&(C=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:C}})),{label:C,value:j}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",minWidth:120,marginTop:5},s)}},Da=$t(or)(Ca.a.Group),Ra=Da,Aa=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var h=n||{},y=h.enum,S=h.enumNames;l=it(y).map((j,E)=>{var C=S&&Array.isArray(S)?S[E]:j,I=typeof C=="string"&&C[0]==="<";return I&&(C=p.a.createElement("span",{dangerouslySetInnerHTML:{__html:C}})),{label:C,value:j}})}return{options:l,style:Object(D.a)({width:"100%",minWidth:120},s)}},Fa=$t(Aa)(Qn.a),Na=Fa,lr=t("tCGa"),Ta=t("DH6M"),Yn=t.n(Ta),Ia=e=>{var n=e.schema,s=n.max,o=n.min,l=n.step,h={};(s||s===0)&&(h={max:s}),(o||o===0)&&(h=Object(D.a)(Object(D.a)({},h),{},{min:o})),l&&(h=Object(D.a)(Object(D.a)({},h),{},{step:l}));var y=!1;e.options&&e.options.hideNumber&&(y=!0);var S=e.readonly?p.a.createElement("span",{style:{width:"90px"}},e.value===""?"-":e.value):p.a.createElement(Jn.a,Object(k.default)({},e.options,h,{style:{width:"90px"},value:e.value,disabled:e.disabled,onChange:e.onChange}));return p.a.createElement("div",{className:"fr-slider"},p.a.createElement(Yn.a,Object(k.default)({style:{flexGrow:1,marginRight:y?0:12}},h,{onChange:e.onChange,value:typeof e.value=="number"?e.value:o||0,disabled:e.disabled||e.readonly})),y?null:S)},wa=Ia,ur=t("VDQ/"),Xn=t("B8+X"),Tn=t.n(Xn),dr=t("tL+A"),Pa=t("QpBz"),In=t.n(Pa),Ba=t("z7Xi");function $a(e){var n=e.action,s=e.value,o=e.onChange,l=e.uploadProps,h=e.buttonProps,y=Object(D.a)({name:"file",type:"file",action:n,onChange(E){E.file.status==="done"?(In.a.success("".concat(E.file.name," \u4E0A\u4F20\u6210\u529F")),o(E.file.response.url)):E.file.status==="error"&&In.a.error("".concat(E.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},l),S={icon:p.a.createElement(Ba.a,null),children:"\u4E0A\u4F20"},j=Object(D.a)(Object(D.a)({},S),h);return p.a.createElement("div",{className:"fr-upload-mod"},p.a.createElement(Tn.a,Object(k.default)({},y,{className:"fr-upload-file"}),p.a.createElement(nt.a,j)),s&&p.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var cr=t("/xgg"),La=t("aOJk"),Zn=t.n(La),mr=t("mpQp"),za="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Va=e=>{var n=e.value;return p.a.createElement(Zn.a,{content:p.a.createElement("img",{src:n||za,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},p.a.createElement(mr.a,null))};function Ma(e){var n=e.value,s=Object(O.a)(e,["value"]);return p.a.createElement(pn.a,Object(k.default)({value:n,addonAfter:p.a.createElement(Va,{value:n})},s))}var wn=e=>{var n=e.value,s=M(n);return s?p.a.createElement("a",{target:"_blank",href:n},"\u6D4B\u8BD5\u94FE\u63A5"):p.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function Ka(e){var n=e.value,s=Object(O.a)(e,["value"]);return p.a.createElement(pn.a,Object(k.default)({value:n,addonAfter:p.a.createElement(wn,{value:n})},s))}function Pn(e){var n=e.value,s=e.schema,o="-";if(s.type==="boolean")o=n===!0?"\u2714":"\u2718";else if(Array.isArray(s.enum)&&Array.isArray(s.enumNames)){var l=s.enum.indexOf(n);o=s.enumNames[l]||"-"}else typeof n=="number"?o=String(n):typeof n=="string"&&(o=n);return p.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var kn=pn.a.TextArea,Wa=$t(e=>{var n=e.style;return{style:Object(D.a)({width:"100%"},n)}})(Jn.a),qn=$t(e=>{var n=e.style;return{style:Object(D.a)({marginTop:5},n)}})(na.a),Bn=$t(e=>{var n=e.autoSize;return{autoSize:n||{minRows:3}}})(kn),Ja=e=>{var n=e.style,s=Object(O.a)(e,["style"]);return p.a.createElement(xn.a,Object(k.default)({style:Object(D.a)({width:"100%"},n)},s))},_n=e=>{var n=e.style,s=Object(O.a)(e,["style"]);return p.a.createElement(fn.a,Object(k.default)({style:Object(D.a)({width:"100%"},n)},s))},ea={input:pn.a,checkbox:Te.a,checkboxes:_a,color:la,date:va,dateRange:ha,imageInput:Ma,url:Ka,list:ga,map:ja,multiSelect:Ea,number:Wa,radio:Ra,select:Na,slider:wa,switch:qn,textarea:Bn,upload:$a,html:Pn,rate:Gt.a,treeSelect:Ja,cascader:_n},Ua=Object.keys(ea),vr=e=>{var n=e.schema,s=e.onChange,o=e.value,l=e.children,h=e.onItemChange,y=e.formData,S=e.getValue,j=e.readOnly,E=e.dataPath,C=e.dataIndex,I=Pt(),V=I.widgets,H=I.mapping,$=_e(n,H);j&&["object","array"].indexOf(n.type)===-1&&($="html");var W=V[$],J=n.widget||n["ui:widget"];J&&V[J]&&(W=V[J],$=J);var Ee=ut[$],ue=Object(D.a)({schema:Object(D.a)(Object(D.a)({},n),Ee),onChange:s,value:o,children:l},n.props);["title","placeholder","disabled"].forEach(ce=>{n[ce]&&(ue[ce]=n[ce])}),n.default!==void 0&&(ue.defaultValue=n.default),n.props&&(ue=Object(D.a)(Object(D.a)({},ue),n.props)),ue.addons={onItemChange:h,setValue:h,getValue:S,formData:y,dataPath:E,dataIndex:C};var U=Un(ue);return p.a.createElement(W,U)},fr=(e,n)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:e.value===n.value&&JSON.stringify(e.schema)===JSON.stringify(n.schema),ta=p.a.memo(vr,fr),Ha=e=>{var n=e.$id,s=e.dataIndex,o=e.item,l=e.labelClass,h=e.labelStyle,y=e.contentClass,S=e.hasChildren,j=e.children,E=e.errorFields,C=E===void 0?[]:E,I=e.hideTitle,V=e.displayType,H=o.schema,$=ft(),W=$.onItemChange,J=$.formData,Ee=$.isEditing,ue=$.setEditing,U=$.touchKey,ce=$.debounceInput,Ae=$.readOnly,ge=Object(z.useRef)(),ne=bt(n,s),P=f(H),ve=[...o.rules];Ee&&ge.current?P=ge.current:(Fe(P)&&(P=Be(P,J,ne)),ge.current=P,ve=ve.map(yt=>{var fe={};return Object.keys(yt).forEach(Pe=>{var Lt=he(yt[Pe]);fe[Pe]=Lt?Ie(yt[Pe],J,ne):yt[Pe]}),fe}));var K=C.find(yt=>yt.name===ne),se=K&&K.error,ye=Array.isArray(se)&&se.length>0,X=ye?y+" ant-form-item-has-error":y,xe=Ft(J,ne),ze=yt=>{if(yt==="#"||!yt)return J;if(typeof yt=="string")return Ft(J,yt);console.error("path has to be a string")},Ue={},ot=Ve(ue,350),gt=Ae!==void 0?Ae:P.readOnly,Qt=yt=>{U(ne),ce&&(ue(!0),ot(!1)),typeof ne=="string"&&W(ne,yt)},Ot={labelClass:l,labelStyle:h,schema:P,displayType:V},gn=V==="inline"||gt===!0,$n={message:se,schema:P,displayType:V,hideValidation:gn},Za={className:l,style:h},Ln=!I&&!!P.title,Dn={schema:P,readOnly:gt,onChange:Qt,getValue:ze,formData:J,value:xe,onItemChange:W,dataIndex:s,dataPath:ne};if(Dn.children=S?j:Et(P,gt)?P.title:null,P.hidden)return null;if(Et(P,gt))return p.a.createElement(p.a.Fragment,null,Ln&&p.a.createElement("div",Za),p.a.createElement("div",{className:X,style:Ue},p.a.createElement(ta,Dn),p.a.createElement(je,$n)));var Rn=p.a.createElement(st,Ot);return vt(P)?(Rn=p.a.createElement("div",{style:{display:"flex"}},Rn,p.a.createElement(je,$n)),p.a.createElement("div",{className:X,style:Ue},p.a.createElement(ta,Object(k.default)({},Dn,{message:se,title:Ln?Rn:void 0})))):p.a.createElement(p.a.Fragment,null,Ln&&Rn,p.a.createElement("div",{className:X,style:Ue},p.a.createElement(ta,Dn),p.a.createElement(je,$n)))},Ga=Ha,Qa=e=>{var n=e.id,s=n===void 0?"#":n,o=e._item,l=e.dataIndex,h=l===void 0?[]:l,y=e.hideTitle,S=y===void 0?!1:y,j=e.hideValidation,E=j===void 0?!1:j,C=Object(O.a)(e,["id","_item","dataIndex","hideTitle","hideValidation"]),I=ft(),V=I.displayType,H=I.column,$=I.flatten,W=I.errorFields,J=I.labelWidth,Ee=I.readOnly,ue=o||$[s];if(!ue)return null;var U=ue.schema,ce=U.displayType||C.displayType||V||"column",Ae=U.type==="object",ge=mt(U),ne=Ae||ge,P=Et(U,Ee),ve=U.width||U["ui:width"],K="fr-field ".concat(ce==="inline"?"":"w-100"," flex"),se="fr-label",ye="fr-content";switch(U.type){case"object":Ae&&(U.title&&(se+=" fr-label-object"),K+=" fr-field-object");break;case"array":ge&&(U.title&&(se+=" fr-label-list"),K+=" fr-field-column");break;case"boolean":P&&(ye+=" fr-content-column",K+=" flex ".concat(ce==="column"?"flex-column":""));break;default:}if(!ne&&!P)if(ce==="column")switch(K+=" flex-column",se+=" fr-label-column",ye+=" fr-content-column",U.type){case"object":break;case"array":U.title&&!U.enum;break;case"boolean":break;default:}else ce==="row"&&(K+="",se+=" fr-label-row",ye+=" fr-content-row",!Ae&&!P&&(se+=" flex-shrink-0 fr-label-row",ye+=" flex-grow-1 relative"));var X={};Ae||(ve?X={width:ve,paddingRight:"12px"}:H>1&&(X={width:"calc(100% /".concat(H,")"),paddingRight:"12px"}));var xe=Ge("labelWidth",s,$)||J,ze=T(xe)?Number(xe):v(xe)?xe:110,Ue={width:ze};(ne||ce==="column")&&(Ue={flexGrow:1}),ce==="inline"&&(Ue={marginTop:5,paddingLeft:12},se="",K.indexOf("fr-field-object")===-1&&(K+=" fr-field-inline"));var ot=ue.children&&ue.children.length>0,gt={$id:s,dataIndex:h,item:ue,labelClass:se,labelStyle:Ue,contentClass:ye,errorFields:W,hasChildren:ot,displayType:ce,hideTitle:S,hideValidation:E},Qt=ot?p.a.createElement("div",{className:"flex flex-wrap"},p.a.createElement(_t,{dataIndex:h,errorFields:W,displayType:ce},ue.children)):null,Ot=ot?p.a.createElement(ht,{parentId:s,dataIndex:h,errorFields:W,displayType:ce},ue.children):null;return p.a.createElement("div",{style:X,className:K+" "},p.a.createElement(Ga,gt,Ae&&Qt,ge&&Ot))},hn=Qa,Ya=t("SA0R"),Xa=t.n(Ya),pr=t("OVFa"),hr=t("k/c8"),gr=t("cFvS"),xt="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",a={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:xt,method:xt,array:xt,object:xt,number:xt,date:xt,boolean:xt,integer:xt,float:xt,regexp:xt,email:xt,url:xt,hex:xt},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},r="${title} is not a valid ${type}",i={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:r,method:r,array:r,object:r,number:r,date:r,boolean:r,integer:r,float:r,regexp:r,email:r,url:r,hex:r},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},d=t("KpVd"),u=e=>{var n=e.formData,s=e.schema,o=s===void 0?{}:s,l=e.isRequired,h=l===void 0?!0:l,y=e.touchedKeys,S=y===void 0?[]:y,j=e.locale,E=j===void 0?"cn":j;if(Object.keys(o).length===0)return Promise.resolve();var C=Rt({schema:o,isRequired:h}).fields,I=[];h||S.forEach(J=>{var Ee=rn(J,o),ue=Object(q.get)(n,J);!ue&&Ee&&I.push({name:J,error:["${title}\u5FC5\u586B"]})});var V=a,H=i,$;try{$=new d.a(C)}catch(J){return Promise.resolve([])}var W=E==="en"?H:V;return $.messages(W),$.validate(n||{}).then(J=>I.length>0?I:[]).catch(J=>{var Ee=J.errors,ue=J.fields,U=it(Ee).map(Ae=>{var ge=Tt(Ae.field);return{name:ge,error:[Ae.message]}});U=[...U,...I];var ce=[];return U.forEach(Ae=>{var ge=ce.findIndex(ne=>ne.name===Ae.name);ge===-1?ce.push(Ae):ce[ge].error=[...ce[ge].error,...Ae.error]}),ce})},g={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},m={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},x=(e,n)=>{var s=R(e,n);return s=Vt(s),s},R=(e,n)=>{var s=f(e),o=[],l=[],h=[],y=j=>Array.isArray(j)&&j.every(E=>typeof E=="string");Object.keys(n).forEach(j=>{var E=n[j]&&n[j].schema&&n[j].schema.bind;E===!1?o.push(j):typeof E=="string"?l.push({key:j,bind:E}):y(E)&&h.push({key:j,bind:E})});var S=j=>{o.forEach(E=>{E.indexOf("[]")===-1&&Object(q.unset)(j,E)}),l.forEach(E=>{var C=E.key,I=E.bind;if(C.indexOf("[]")===-1){var V=Object(q.get)(j,C),H=Object(q.get)(j,I);b(H)&&(V=Object(D.a)(Object(D.a)({},H),V)),Object(q.set)(j,I,V),Object(q.unset)(j,C)}}),h.forEach(E=>{var C=E.key,I=E.bind;if(C.indexOf("[]")===-1){var V=Object(q.get)(j,C);Array.isArray(V)&&V.forEach((H,$)=>{I[$]&&Object(q.set)(j,I[$],H)}),Object(q.unset)(j,C)}})};return S(s),s},N=(e,n)=>{var s=f(e),o=[],l=[],h=S=>Array.isArray(S)&&S.every(j=>typeof j=="string");Object.keys(n).forEach(S=>{var j=n[S]&&n[S].schema&&n[S].schema.bind;typeof j=="string"?o.push({key:S,bind:j}):h(j)&&l.push({key:S,bind:j})});var y=S=>{o.forEach(j=>{var E=j.key,C=j.bind,I=Object(q.get)(S,C),V=Object(q.get)(S,E);b(V)&&(I=Object(D.a)(Object(D.a)({},V),I)),Object(q.set)(S,E,I),Object(q.unset)(S,C)}),l.forEach(j=>{var E=j.key,C=j.bind,I=[];C.forEach(V=>{I.push(Object(q.get)(S,V)),Object(q.unset)(S,V)}),Object(q.set)(S,E,I)})};return y(s),s},w=e=>{var n=e||{},s=n.formData,o=n.onChange,l=n.onValidate,h=pt({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),y=Object(Qe.default)(h,2),S=y[0],j=y[1],E=Object(z.useRef)({}),C=Object(z.useRef)({}),I=Object(z.useRef)(!1),V=Object(z.useRef)(),H=Object(z.useRef)("cn"),$=Object(z.useRef)({}),W=Object(z.useRef)([]),J=S.formData,Ee=S.submitData,ue=S.errorFields,U=ue===void 0?[]:ue,ce=S.isValidating,Ae=S.outsideValidating,ge=S.isSubmitting,ne=S.isEditing,P=S.allTouched,ve=S.touchedKeys,K=e&&e.hasOwnProperty("formData"),se=K?s:J;$.current=Object(z.useMemo)(()=>Object(q.merge)(Yt(E.current),se),[JSON.stringify(se),JSON.stringify(E.current)]),W.current=ve;var ye=fe=>{typeof o=="function"?o(fe):j({formData:fe})},X=fe=>{if(typeof l=="function"){var Pe=fe.map(Lt=>Lt.name);l(Pe)}j({errorFields:fe})},xe=fe=>{if(!(W.current.indexOf(fe)>-1)){var Pe=[...W.current,fe];j({touchedKeys:Pe})}};Object(z.useEffect)(()=>{K&&typeof l=="function"&&setTimeout(()=>{u({formData:$.current,schema:E.current,isRequired:!0,touchedKeys:W.current,locale:H.current}).then(fe=>{var Pe=fe.map(Lt=>Lt.name);l(Pe)})},200)},[]),Object(z.useEffect)(()=>{if(I.current){I.current=!1;return}u({formData:$.current,schema:E.current,isRequired:P,touchedKeys:W.current,locale:H.current}).then(fe=>{X(fe)})},[JSON.stringify($.current),P]);var ze=fe=>{j({isEditing:fe})},Ue=(fe,Pe)=>{if(typeof fe=="string"){if(fe==="#"){ye(Object(D.a)({},Pe));return}Object(q.set)($.current,fe,Pe),ye(Object(D.a)({},$.current))}},ot=fe=>{var Pe=fe.schema,Lt=fe.flatten,br=fe.beforeFinish,jr=fe.locale;E.current=Pe,C.current=Lt,V.current=br,H.current=jr},gt=fe=>{var Pe=[];Array.isArray(fe)?Pe=[...fe,...U]:fe&&fe.name?Pe=[fe,...U]:console.log("error format is wrong"),Pe=Object(q.sortedUniqBy)(Pe,Lt=>Lt.name),X(Pe)},Qt=fe=>{var Pe=U.map(Lt=>Lt.name.indexOf(fe)===-1);X(Pe)},Ot=()=>R($.current,C.current),gn=fe=>{var Pe=N(fe,C.current);ye(Pe)},$n=()=>{I.current=!0,j({isValidating:!0,allTouched:!0,isSubmitting:!1}),u({formData:$.current,schema:E.current,touchedKeys:[],isRequired:!0,locale:H.current}).then(fe=>{if(fe&&fe.length>0&&(console.log("submit:",$.current,fe),j({errorFields:fe})),typeof V.current=="function"){Promise.resolve(x($.current,C.current)).then(Pe=>{j({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:Pe})});return}Promise.resolve(x($.current,C.current)).then(Pe=>{j({isValidating:!1,isSubmitting:!0,submitData:Pe})})}).catch(fe=>{console.log("submit error:",fe)})},Za=()=>{ye({})},Ln=()=>j({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),Dn=()=>j({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),Rn=()=>j({formData:{},submitData:{},errorFields:[],allTouched:!1,touchedKeys:[]}),yt={formData:$.current,schema:E.current,touchedKeys:W.current,allTouched:P,touchKey:xe,onItemChange:Ue,setValues:gn,getValues:Ot,resetFields:Za,submit:$n,submitData:Ee,errorFields:U,isValidating:ce,outsideValidating:Ae,isSubmitting:ge,endValidating:Ln,endSubmitting:Dn,setErrorFields:gt,removeErrorField:Qt,isEditing:ne,setEditing:ze,syncStuff:ot,destroyForm:Rn};return yt},re=e=>n=>{var s=w();return p.a.createElement(e,Object(k.default)({},n,{form:s}))},L=(e,n)=>{console.log(e,n)};function pe(e){var n=e.widgets,s=e.mapping,o=e.form,l=e.beforeFinish,h=l===void 0?L:l,y=e.onFinish,S=y===void 0?L:y,j=e.displayType,E=j===void 0?"column":j,C=e.schema,I=e.flatten,V=e.debug,H=e.locale,$=H===void 0?"cn":H,W=e.debounceInput,J=W===void 0?!1:W,Ee=e.size,ue=e.configProvider,U=e.theme,ce=Object(O.a)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","locale","debounceInput","size","configProvider","theme"]);try{var Ae=o.submit}catch(gn){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var ge=o.submitData,ne=o.errorFields,P=o.isValidating,ve=o.outsideValidating,K=o.isSubmitting,se=o.endValidating,ye=o.endSubmitting,X=o.syncStuff,xe=o.formData,ze=o.isEditing,Ue=o.setErrorFields,ot=Object(z.useMemo)(()=>I||Ct(C),[JSON.stringify(I),JSON.stringify(C)]);Object(z.useEffect)(()=>{X({schema:C,flatten:ot,beforeFinish:h,locale:$})},[JSON.stringify(I),JSON.stringify(C)]),Object(z.useEffect)(()=>()=>{o.destroyForm()},[]);var gt=Object(z.useMemo)(()=>Object(D.a)(Object(D.a)({flatten:ot},o),{},{displayType:E,theme:U,debounceInput:J,debug:V,isEditing:ze},ce),[JSON.stringify(ot),JSON.stringify(xe),JSON.stringify(ne)]),Qt=Object(z.useMemo)(()=>({widgets:Object(D.a)(Object(D.a)({},ea),n),mapping:Object(D.a)(Object(D.a)({},He),s)}),[]);Object(z.useEffect)(()=>{if(ve===!0){Promise.resolve(h(ge,ne)).then(gn=>{gn&&Ue(gn),se()});return}P===!1&&K===!0&&(ye(),S(ge,ne))},[P,K,ve]);var Ot="";return Ee==="small"?Ot="fr-form-small":Ee==="large"&&(Ot="fr-form-large"),p.a.createElement(c.a,Object(k.default)({locale:Xa.a},ue),p.a.createElement(Jt.Provider,{value:gt},p.a.createElement(on.Provider,{value:Qt},p.a.createElement("div",{className:"fr-container ".concat(Ot)},V?p.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},p.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),p.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),p.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),p.a.createElement("div",null,"allTouched:"+JSON.stringify(o.allTouched)),p.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),p.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),p.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,p.a.createElement(hn,null)))))}var me=e=>{var n=e.isOldVersion,s=n===void 0?!0:n,o=e.schema,l=Object(O.a)(e,["isOldVersion","schema"]),h=o;return s&&(h=Xt(o)),p.a.createElement(pe,Object(k.default)({schema:h},l))},Z=Q.default=me},trko:function(Me,Q,t){},"xwS/":function(Me,Q,t){}}]);
