(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(ke,G,t){"use strict";t.r(G),t.d(G,"Column",function(){return ce}),t.d(G,"Line",function(){return Jn}),t.d(G,"PivotTable",function(){return Ft});var ge=t("0Owb"),_=t("PpiC"),j=t("q1tI"),Z=t.n(j),E=t("06Lf");function S(ae){var B=[],y=[];return ae.forEach(l=>{l.isDim?B.push(l):y.push(l)}),{metaDim:B,metaInd:y}}function P(ae){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(ae==null?void 0:ae.toPrecision(B))}var d=()=>Z.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function Kt(ae,B){var y=S(ae),l=y.metaDim,x=y.metaInd;if(x.length>=1&&l.length===0){var u="type",A="value";return{xField:u,yField:A,data:B.map(re=>x.map(ye=>{var He=ye.id,ht=ye.name;return{[u]:He,[A]:re[He]}})).flat(),meta:{[u]:{formatter:re=>{var ye;return((ye=ae.find(He=>{var ht=He.id;return re===ht}))===null||ye===void 0?void 0:ye.name)||re}}},tooltip:{formatter:re=>{var ye,He=re[u],ht=re[A];return{name:(ye=ae.find(gt=>{var $t=gt.id;return He===$t}))===null||ye===void 0?void 0:ye.name,value:ht}}}}}else if(x.length===1&&l.length===1){var w,J,W,k=(w=l.shift())===null||w===void 0?void 0:w.id,te=(J=x.shift())===null||J===void 0?void 0:J.id;return{data:B,xField:k,yField:te,meta:{[te]:{alias:(W=ae.find(re=>{var ye=re.id;return ye===te}))===null||W===void 0?void 0:W.name}}}}else if(x.length>1&&l.length===1){var U,me=(U=l.shift())===null||U===void 0?void 0:U.id,Ie="value",ve="type";return{data:B.map(re=>x.map(ye=>{var He=ye.id,ht=ye.name;return{[me]:re[me],[Ie]:re[He],[ve]:ht}})).flat(),xField:me,yField:Ie,seriesField:ve,isGroup:!0}}else if(x.length===1&&l.length===2){var je,fe,Ye;return{data:B,xField:(je=l.shift())===null||je===void 0?void 0:je.id,yField:(fe=x.shift())===null||fe===void 0?void 0:fe.id,seriesField:(Ye=l.shift())===null||Ye===void 0?void 0:Ye.id,isGroup:!0}}return{data:B,xField:"",yField:""}}var Xe=ae=>{var B=ae.className,y=ae.style,l=ae.meta,x=l===void 0?[]:l,u=ae.data,A=u===void 0?[]:u,w=ae.inverted,J=Object(_.default)(ae,["className","style","meta","data","inverted"]);if(w){var W=Kt(x,A),k=W.xField,te=W.yField,U=Object(_.default)(W,["xField","yField"]);return Z.a.createElement(E.b,Object(ge.default)({xField:te,yField:k},U,{renderer:"svg",errorTemplate:()=>Z.a.createElement(d,null)},J))}else return Z.a.createElement(E.c,Object(ge.default)({},Kt(x,A),{renderer:"svg",errorTemplate:()=>Z.a.createElement(d,null)},J))},ce=Xe,Y=t("k1fw"),Tt=t("sGjT");function Cn(ae,B){var y=S(ae),l=y.metaDim,x=y.metaInd;if(x.length===1&&l.length===1){var u,A=l.shift(),w=x.shift(),J=A.id,W=w.id;return{data:B,xField:J,yField:W,yAxis:{label:{formatter:Be=>w.isRate?"".concat(P(100*Number(Be)),"%"):Be}},tooltip:{formatter:Be=>{var Ve=Be[J],yt=Be[W];return{name:w.name,value:w.isRate?"".concat(P(100*Number(yt)),"%"):yt}}},meta:{[W]:{alias:(u=ae.find(Be=>{var Ve=Be.id;return Ve===W}))===null||u===void 0?void 0:u.name}}}}else if(x.length===1&&l.length===2){var k=l.shift(),te=x.shift(),U=l.shift(),me=k.id,Ie=te.id,ve=U.id;return{data:B,xField:me,yField:Ie,seriesField:ve,yAxis:{label:{formatter:Be=>te.isRate?"".concat(P(100*Number(Be)),"%"):Be}},tooltip:{formatter:Be=>{var Ve=Be[ve],yt=Be[Ie];return{name:Ve,value:te.isRate?"".concat(P(100*Number(yt)),"%"):yt}}}}}else if(x.length===2&&l.length===2){var je,fe,Ye,re,ye=B.map(Be=>{var Ve=x[0].id,yt=l[1].id,cn=Be[Ve],Rt=Be[yt],Ut=Object(_.default)(Be,[Ve,yt].map(Tt.a));return Object(Y.a)({[l[1].id]:"".concat(Rt,"-").concat(x[0].name)},Ut)}),He=B.map(Be=>{var Ve=x[1].id,yt=l[1].id,cn=Be[Ve],Rt=Be[yt],Ut=Object(_.default)(Be,[Ve,yt].map(Tt.a));return Object(Y.a)({[l[1].id]:"".concat(Rt,"-").concat(x[1].name)},Ut)});return{data:[He,ye],geometryOptions:[{geometry:"line",seriesField:l[1].id},{geometry:"line",seriesField:l[1].id,lineStyle:{lineDash:[5,5]}}],xField:(je=l.shift())===null||je===void 0?void 0:je.id,yField:[(fe=x.shift())===null||fe===void 0?void 0:fe.id,(Ye=x.shift())===null||Ye===void 0?void 0:Ye.id],seriesField:(re=l.shift())===null||re===void 0?void 0:re.id}}else if(x.length>1&&l.length===1){var ht,gt=(ht=l.shift())===null||ht===void 0?void 0:ht.id,$t="value",nn="type";return{data:B.map(Be=>x.map(Ve=>{var yt=Ve.id,cn=Ve.name;return{[gt]:Be[gt],[$t]:Be[yt],[nn]:cn}})).flat(),xField:gt,yField:$t,seriesField:nn}}return{data:B}}var Et=ae=>{var B=ae.className,y=ae.style,l=ae.meta,x=l===void 0?[]:l,u=ae.data,A=u===void 0?[]:u,w=ae.withArea,J=Object(_.default)(ae,["className","style","meta","data","withArea"]),W=Cn(x,A);return w?Z.a.createElement(E.a,Object(ge.default)({},W,{renderer:"svg",errorTemplate:()=>Z.a.createElement(d,null)},J)):Array.isArray(W.yField)?Z.a.createElement(E.d,Object(ge.default)({},W,{renderer:"svg",errorTemplate:()=>Z.a.createElement(d,null)},J)):Z.a.createElement(E.e,Object(ge.default)({},W,{renderer:"svg",errorTemplate:()=>Z.a.createElement(d,null)},J))},Jn=Et,en=t("tJVT"),xt=t("mA+x"),Yn=t("aMEK"),tn=t("ARb9"),pt=ae=>{var B=ae.className,y=ae.style,l=ae.showSubtotal,x=l===void 0?!0:l,u=ae.subtotalText,A=u===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:u,w=ae.meta,J=w===void 0?[]:w,W=ae.data,k=W===void 0?[]:W,te=ae.size,U=te===void 0?"middle":te,me=ae.indicatorSide,Ie=me===void 0?"top":me,ve=ae.leftDimensionLength,je=ve===void 0?J.length:ve,fe=ae.leftExpandable,Ye=fe===void 0?!1:fe,re=ae.topExpandable,ye=re===void 0?!1:re,He=ae.defaultExpandAll,ht=He===void 0?!0:He,gt=ae.cellRender,$t=Object(_.default)(ae,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),nn=Object(j.useState)([]),Be=Object(en.default)(nn,2),Ve=Be[0],yt=Be[1],cn=Object(j.useState)([]),Rt=Object(en.default)(cn,2),Ut=Rt[0],Xt=Rt[1],Pn=S(J),wn=Pn.metaDim,In=Pn.metaInd,mn=In.map(Oe=>{var We=Oe.id,jt=Oe.name,wt=Oe.isRate;return{name:jt,code:We,align:"right",expression:wt?"AVG(".concat(We,")"):"SUM(".concat(We,")")}}),Bn=wn.filter((Oe,We)=>We<je),Pt=Bn.map(Oe=>{var We=Oe.id;return We}),vn=Object(xt.b)(k,Pt,{includeTopWrapper:!0,isExpand:Ye?Oe=>Ut.includes(Oe):void 0}),Ln=Object(xt.d)(vn,{indicators:Ie==="left"?mn:void 0,supportsExpand:Ye,expandKeys:Ut,onChangeExpandKeys:Xt,generateSubtotalNode:x?Oe=>({position:"start",value:Oe.path.length===0?A[0]||"\u603B\u8BA1":A[1]||"\u5C0F\u8BA1"}):void 0}),ca=Object(en.default)(Ln,1),an=ca[0],qn=wn.filter((Oe,We)=>We>=je),fn=qn.map(Oe=>{var We=Oe.id;return We}),ma=Object(xt.b)(k,fn,{includeTopWrapper:!0,isExpand:ye?Oe=>Ve.includes(Oe):void 0}),$n=Object(xt.d)(ma,{indicators:Ie==="top"?mn:void 0,supportsExpand:ye,expandKeys:Ve,onChangeExpandKeys:yt,generateSubtotalNode:x?Oe=>({position:"start",value:Oe.path.length===0?A[0]||"\u603B\u8BA1":A[1]||"\u5C0F\u8BA1"}):void 0}),rn=Object(en.default)($n,1),pn=rn[0],Mn=Object(xt.c)({data:k,leftCodes:Pt,topCodes:fn,aggregate:Object(Yn.a)(mn)});return Z.a.createElement("div",{style:y,className:"CR-PivotTable CR-PivotTable-".concat(U," ").concat(B||"")},Z.a.createElement(xt.a,Object(ge.default)({defaultColumnWidth:100,leftMetaColumns:wn.filter(Oe=>{var We=Oe.id;return Pt.includes(We)}).map(Oe=>{var We=Oe.id,jt=Oe.name;return{code:We,name:jt}}),leftTree:an.children,leftTotalNode:an,topTree:pn.children,topTotalNode:pn,getValue:(Oe,We)=>{var jt,wt=(jt=Mn.get(Oe.data.dataKey))===null||jt===void 0?void 0:jt.get(We.data.dataKey);return wt==null?void 0:wt[We.code]},render:(Oe,We,jt)=>{var wt;if(gt){var Hn=We.data.dataPath,_n=Hn===void 0?[]:Hn,Qn=jt.data.dataPath,ea=Qn===void 0?[]:Qn,Vn={};return _n.forEach((hn,sn)=>{var Wt;Vn[(Wt=Bn[sn])===null||Wt===void 0?void 0:Wt.id]=hn}),ea.forEach((hn,sn)=>{var Wt;Vn[(Wt=qn[sn])===null||Wt===void 0?void 0:Wt.id]=hn}),gt(Oe,Vn,jt.code)}return(wt=In.find(hn=>{var sn=hn.id;return sn===jt.code}))!==null&&wt!==void 0&&wt.isRate?"".concat(P(Oe*100).toFixed(2),"%"):Oe}},$t)))},Ft=pt},"4l2o":function(ke,G,t){},"72KL":function(ke,G,t){},"8iYR":function(ke,G,t){"use strict";t.r(G),t.d(G,"basic",function(){return ge}),t.d(G,"expression",function(){return _});var ge={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},_={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},ARb9:function(ke,G,t){},GYr9:function(ke,G,t){},JjdP:function(ke,G,t){"use strict";t.r(G);var ge=t("9og8"),_=t("WmNS"),j=t.n(_),Z=t("LtsZ"),E=`import React, { useRef } from 'react';
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

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,P=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,d=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Kt=`export const basic = {
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
};`,Xe=`import React, { Component } from 'react';
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

export default Root;`,ce=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Y=`{
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
}`,Tt=`import { Select } from 'antd';
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

export default SearchInput;`,Cn=`import React from 'react';
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

export default Demo;`,Et=`/* PrismJS 1.16.0
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
}`,Jn=`.markdown p {
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
}`,en=`import React from 'react';
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

export default Demo;`,xt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Yn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,tn=`import React from 'react';
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

export default Demo;`,pt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Ft=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,ae=G.default={"guide-card":{component:Object(Z.dynamic)({loader:function(){var B=Object(ge.a)(j.a.mark(function l(){return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([t.e(38),t.e(4)]).then(t.bind(null,"oLxE"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},l)}));function y(){return B.apply(this,arguments)}return y}()}),previewerProps:{sources:{_:{jsx:E}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var y=t("3PQu"),l=t("K+nK"),x=l(t("tJVT")),u=y(t("q1tI")),A=t("36SN"),w=function(){var W=(0,u.useState)("Line"),k=(0,x.default)(W,2),te=k[0],U=k[1],me={Line:A.Line,Column:A.Column,PivotTable:A.PivotTable}[te];return u.default.createElement("div",null,u.default.createElement("div",{style:{marginBottom:10}},u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return U("Line")}},"\u6298\u7EBF\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return U("Column")}},"\u67F1\u72B6\u56FE"),u.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return U("PivotTable")}},"\u4EA4\u53C9\u8868")),u.default.createElement(me,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return u.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=t("36SN"),u=function(){return l.default.createElement(x.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(J,W,k){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(W).length]}},J),l.default.createElement("p",null,JSON.stringify(W)),l.default.createElement("p",null,JSON.stringify(k)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return l.default.createElement(u)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var y=t("3PQu"),l=t("K+nK"),x=l(t("tJVT")),u=y(t("q1tI")),A=t("36SN"),w=function(){var W=(0,u.useState)(!1),k=(0,x.default)(W,2),te=k[0],U=k[1];return u.default.createElement(u.default.Fragment,null,u.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",u.default.createElement("input",{type:"checkbox",value:te,onChange:function(){return U(!te)}})),u.default.createElement(A.PivotTable,{leftExpandable:te,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return u.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var y=t("3PQu"),l=t("K+nK");t("MaXC");var x=l(t("4IMT")),u=l(t("fWQN")),A=l(t("mtLc")),w=l(t("yKVA")),J=l(t("879j")),W=l(t("q1tI")),k=t("gdfu"),te=y(t("refC")),U={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},me=function(ve){(0,w.default)(fe,ve);var je=(0,J.default)(fe);function fe(){return(0,u.default)(this,fe),je.apply(this,arguments)}return(0,A.default)(fe,[{key:"render",value:function(){var re=this.props.form;return W.default.createElement("div",null,W.default.createElement(te.default,{form:re,schema:U}),W.default.createElement(x.default,{type:"primary",onClick:re.submit},"\u63D0\u4EA4"))}}]),fe}(W.default.Component),Ie=(0,te.connectForm)(me);return W.default.createElement(Ie)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var y=t("3PQu"),l=t("K+nK");t("MaXC");var x=l(t("4IMT")),u=l(t("q1tI")),A=t("gdfu"),w=y(t("refC")),J={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},W=function(){var U=(0,w.useForm)();return u.default.createElement("div",null,u.default.createElement(w.default,{form:U,schema:J}),u.default.createElement(x.default,{type:"primary",onClick:U.submit},"\u63D0\u4EA4"))},k=W;return u.default.createElement(k)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var y=t("3PQu"),l=t("K+nK");t("MaXC");var x=l(t("4IMT")),u=l(t("q1tI")),A=t("gdfu"),w=y(t("refC")),J={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},W=function(){var U=(0,w.useForm)(),me=function(ve,je){je.length>0?alert("errors:"+JSON.stringify(je)):alert("formData:"+JSON.stringify(ve,null,2))};return u.default.createElement("div",null,u.default.createElement(w.default,{form:U,schema:J,onFinish:me}),u.default.createElement(x.default,{type:"primary",onClick:U.submit},"\u63D0\u4EA4"))},k=W;return u.default.createElement(k)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var y=t("3PQu"),l=t("K+nK"),x=l(t("q1tI")),u=y(t("refC")),A={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function w(){var W=(0,u.useForm)(),k=function(U,me){me.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(me))):alert(JSON.stringify(U))};return x.default.createElement("div",null,x.default.createElement(u.default,{form:W,schema:A,onFinish:k}),x.default.createElement("button",{onClick:W.submit},"\u63D0\u4EA4"))}var J=w;return x.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u=function(J){return{type:"object",displayType:J,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},A=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(x.default,{schema:u("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(x.default,{schema:u("column")}))};return l.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){return l.default.createElement(x.default,{schema:u})};return l.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},A=function(){return l.default.createElement(x.default,{readOnly:!0,schema:u})};return l.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},A=function(){return l.default.createElement(x.default,{labelWidth:"200",schema:u})};return l.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},A=function(){return l.default.createElement(x.default,{schema:u})},w=A;return l.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},A=function(){return l.default.createElement(x.default,{schema:u})},w=A;return l.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},A=function(){return l.default.createElement(x.default,{schema:u})},w=A;return l.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("bQjt")),u={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},A=function(){return l.default.createElement(x.default,{schema:u})},w=A;return l.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:S}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:function(){var y=t("3PQu"),l=t("K+nK");t("lfLe");var x=l(t("Cp9S"));t("MaXC");var u=l(t("4IMT"));t("tL+A");var A=l(t("QpBz")),w=l(t("tJVT")),J=y(t("q1tI")),W=t("gdfu"),k=y(t("refC")),te=t("OH0R"),U=function(){var ve=(0,k.useForm)(),je=(0,J.useState)({}),fe=(0,w.default)(je,2),Ye=fe[0],re=fe[1],ye=function(){(0,te.fakeApi)("xxx/getForm").then(function(gt){ve.setValues({input1:"hello world",select1:"c"})})};(0,J.useEffect)(function(){(0,te.delay)(1e3).then(function(ht){re({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var He=function(gt,$t){$t.length>0?A.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify($t.map(function(nn){return nn.name}))):(0,te.fakeApi)("xxx/submit",gt).then(function(nn){return A.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return J.default.createElement("div",{style:{width:"400px"}},J.default.createElement(k.default,{form:ve,schema:Ye,onFinish:He}),J.default.createElement(x.default,null,J.default.createElement(u.default,{onClick:ye},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),J.default.createElement(u.default,{type:"primary",onClick:ve.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},me=U;return J.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:P}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var y=t("3PQu"),l=t("K+nK");t("MaXC");var x=l(t("4IMT")),u=l(t("PpiC"));t("tL+A");var A=l(t("QpBz")),w=l(t("q1tI")),J=t("gdfu"),W=y(t("refC")),k=t("OH0R"),te={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},U=function(){var ve=(0,W.useForm)(),je=function(re,ye){ye.length>0?A.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ye.map(function(He){return He.name}))):(0,k.fakeApi)("xxx/submit",re).then(function(He){return A.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},fe=function(re){var ye=re.data,He=re.errors,ht=re.schema,gt=(0,u.default)(re,["data","errors","schema"]);return(0,k.fakeApi)("xxx/validation").then(function($t){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return w.default.createElement("div",{style:{width:"400px"}},w.default.createElement(W.default,{form:ve,schema:te,beforeFinish:fe,onFinish:je}),w.default.createElement(x.default,{type:"primary",onClick:ve.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},me=U;return w.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:P}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var y=t("3PQu"),l=t("K+nK");t("lfLe");var x=l(t("Cp9S"));t("MaXC");var u=l(t("4IMT"));t("tL+A");var A=l(t("QpBz")),w=l(t("q1tI")),J=t("gdfu"),W=y(t("refC")),k=t("OH0R"),te={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},U=function(){var ve=(0,W.useForm)(),je=function(re,ye){ye.length>0?A.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ye.map(function(He){return He.name}))):(0,k.fakeApi)("xxx/submit",re).then(function(He){return A.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},fe=function(){(0,k.fakeApi)("xxx/getForm").then(function(re){ve.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return w.default.createElement("div",{style:{width:"400px"}},w.default.createElement(W.default,{form:ve,schema:te,onFinish:je}),w.default.createElement(x.default,null,w.default.createElement(u.default,{onClick:fe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),w.default.createElement(u.default,{type:"primary",onClick:ve.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},me=U;return w.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:P}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:function(){var y=t("3PQu"),l=t("K+nK");t("MaXC");var x=l(t("4IMT"));t("tL+A");var u=l(t("QpBz")),A=y(t("q1tI")),w=t("gdfu"),J=y(t("refC")),W=t("OH0R"),k={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},te=function(){var Ie=(0,J.useForm)(),ve=function(){Ie.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},je=function(Ye,re){re.length>0?u.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(re.map(function(ye){return ye.name}))):u.default.info(JSON.stringify(Ye))};return A.default.createElement("div",{style:{width:"400px"}},A.default.createElement(J.default,{form:Ie,schema:k,onMount:ve,onFinish:je}),A.default.createElement(x.default,{type:"primary",onClick:Ie.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},U=te;return A.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:P}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:function(){var y=t("3PQu"),l=t("K+nK"),x=l(t("q1tI")),u=y(t("refC")),A={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},w=function(){var k=(0,u.useForm)();return x.default.createElement(u.default,{form:k,schema:A})},J=w;return x.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("c2mQ")),u=t("8iYR"),A=function(){return l.default.createElement(x.default,{schema:u.expression})};return l.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:d},"json/schema.js":{import:"../json/schema",content:Kt}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:function(){var y=t("3PQu"),l=y(t("q1tI")),x=t("gdfu"),u=y(t("refC")),A=function(te){return new Promise(function(U){return setTimeout(U,te)})},w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},J=function(){var te=(0,u.useForm)(),U=function(){te.setValues({input1:"hello world"}),A(3e3).then(function(Ie){te.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return l.default.createElement(u.default,{form:te,schema:w,onMount:U})},W=J;return l.default.createElement(W)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:function(){var y=t("3PQu"),l=y(t("q1tI")),x=t("gdfu"),u=y(t("refC")),A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},w=function(){var k=(0,u.useForm)(),te={"#":function(me){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",me)},input1:function(me){k.setValueByPath("input2",me)}};return l.default.createElement(u.default,{form:k,schema:A,watch:te})},J=w;return l.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:function(){var y=t("3PQu"),l=t("K+nK");t("MaXC");var x=l(t("4IMT")),u=y(t("q1tI")),A=t("gdfu"),w=y(t("refC")),J={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},W=function(){var U=(0,w.useForm)(),me=function(je,fe){fe.length>0?alert("errorFields:"+JSON.stringify(fe)):alert("formData:"+JSON.stringify(je,null,2))},Ie={input1:function(je){je.length>2?U.setSchemaByPath("obj1.select",function(fe){var Ye=fe.enumNames;return{enumNames:Ye.map(function(re){return re+"a"})}}):U.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return u.default.createElement("div",null,u.default.createElement(w.default,{form:U,schema:J,onFinish:me,watch:Ie}),u.default.createElement(x.default,{type:"",style:{marginRight:8},onClick:function(){return U.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),u.default.createElement(x.default,{type:"primary",onClick:U.submit},"\u63D0\u4EA4"))},k=W;return u.default.createElement(k)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:function(){var y=t("3PQu"),l=t("K+nK");t("MaXC");var x=l(t("4IMT"));t("cUip");var u=l(t("iJl9")),A=l(t("0Owb")),w=y(t("q1tI")),J=t("gdfu"),W=y(t("refC")),k={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},te=function(ve){return w.default.createElement(u.default,(0,A.default)({addonBefore:"http://",addonAfter:".com"},ve))},U=function(){var ve=(0,W.useForm)(),je=function(){};return w.default.createElement("div",null,w.default.createElement(W.default,{form:ve,schema:k,widgets:{site:te},onFinish:function(Ye){return alert(JSON.stringify(Ye,null,2))}}),w.default.createElement(x.default,{type:"primary",onClick:ve.submit},"\u63D0\u4EA4"))},me=U;return w.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("c2mQ")),u=t("8iYR"),A=function(){return l.default.createElement(x.default,{schema:u.basic})};return l.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:d},"json/schema.js":{import:"../json/schema",content:Kt}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(Z.dynamic)({loader:function(){var B=Object(ge.a)(j.a.mark(function l(){return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([t.e(38),t.e(4)]).then(t.bind(null,"BASV"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},l)}));function y(){return B.apply(this,arguments)}return y}()}),previewerProps:{sources:{_:{jsx:Xe},"main.js":{import:"./main",content:ce},"json/simplest.json":{import:"./json/simplest.json",content:Y},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tt},"monaco/index.js":{import:"./monaco",content:Cn},"theme.css":{import:"./theme.css",content:Et},"index.css":{import:"./index.css",content:Jn}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(Z.dynamic)({loader:function(){var B=Object(ge.a)(j.a.mark(function l(){return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([t.e(38),t.e(4)]).then(t.bind(null,"7ZP+"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},l)}));function y(){return B.apply(this,arguments)}return y}()}),previewerProps:{sources:{_:{tsx:en}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var y=t("K+nK"),l=y(t("q1tI")),x=t("P2DI"),u=[],A=0;A<6;A++)u.push({id:A.toString(),title:"\u6807\u9898".concat(A+1),created_at:new Date().getTime()});var w={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},J=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(U,me){return l.default.createElement("a",{onClick:function(){return alert(U.title)}},"\u7F16\u8F91")}}],W=function(){var U=function(){return{rows:u,total:u.length}};return l.default.createElement(x.TableProvider,null,l.default.createElement(x.Search,{schema:w,api:U}),l.default.createElement(x.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:J,rowKey:"id"}))},k=W;return l.default.createElement(k)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var y=t("K+nK"),l=y(t("q1tI")),x=y(t("nYSz")),u={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},A=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(x.default,{defaultValue:u}))},w=A;return l.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(Z.dynamic)({loader:function(){var B=Object(ge.a)(j.a.mark(function l(){return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([t.e(38),t.e(4)]).then(t.bind(null,"PPgD"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},l)}));function y(){return B.apply(this,arguments)}return y}()}),previewerProps:{sources:{_:{jsx:xt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(Z.dynamic)({loader:function(){var B=Object(ge.a)(j.a.mark(function l(){return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([t.e(38),t.e(4)]).then(t.bind(null,"jktF"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},l)}));function y(){return B.apply(this,arguments)}return y}()}),previewerProps:{sources:{_:{jsx:Yn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(Z.dynamic)({loader:function(){var B=Object(ge.a)(j.a.mark(function l(){return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([t.e(38),t.e(4)]).then(t.bind(null,"M63W"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},l)}));function y(){return B.apply(this,arguments)}return y}()}),previewerProps:{sources:{_:{jsx:tn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(Z.dynamic)({loader:function(){var B=Object(ge.a)(j.a.mark(function l(){return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([t.e(38),t.e(4)]).then(t.bind(null,"TYW4"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},l)}));function y(){return B.apply(this,arguments)}return y}()}),previewerProps:{sources:{_:{jsx:pt},"index.less":{import:"./index.less",content:Ft}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.6"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},OH0R:function(ke,G,t){"use strict";t.r(G),t.d(G,"delay",function(){return ge}),t.d(G,"fakeApi",function(){return _});var ge=j=>new Promise(Z=>setTimeout(Z,j)),_=(j,Z)=>(console.group("request:",j),console.log("params:",Z),console.groupEnd(),ge(500))},OVFa:function(ke,G,t){},Oxum:function(ke,G,t){},P2DI:function(ke,G,t){"use strict";t.r(G),t.d(G,"Search",function(){return B}),t.d(G,"Table",function(){return ea}),t.d(G,"TableProvider",function(){return na}),t.d(G,"useTable",function(){return Et});var ge=t("Saan"),_=t("vgIT"),j=t.n(_),Z=t("0Owb"),E=t("k1fw"),S=t("tL+A"),P=t("QpBz"),d=t.n(P),Kt=t("PpiC"),Xe=t("tJVT"),ce=t("q1tI"),Y=t.n(ce),Tt=Object(ce.createContext)({}),Cn=Object(ce.createContext)({}),Et=()=>Object(ce.useContext)(Tt),Jn=()=>Object(ce.useContext)(Cn),en=C=>{var q=Object(ce.useReducer)((Ke,Ae)=>{var _e=Ae;typeof Ae=="function"&&(_e=_e(Ke)),Ae.action&&Ae.payload&&(_e=Ae.payload,typeof _e=="function"&&(_e=_e(Ke)));var ut=Object(E.a)(Object(E.a)({},Ke),_e);return ut},C),se=Object(Xe.default)(q,2),Re=se[0],Te=se[1],ze=(Ke,Ae)=>{Te(Ke)};return[Re,ze]},xt=t("MaXC"),Yn=t("4IMT"),tn=t.n(Yn),pt=t("refC"),Ft=C=>{var q=C.clearSearch,se=C.style,Re=se===void 0?{}:se,Te=C.className,ze=Te===void 0?"":Te,Ke=Et(),Ae=Ke.tableState,_e=Ae===void 0?{}:Ae,ut=Ke.refresh,It=_e.loading;return Y.a.createElement("div",{className:"flex justify-end w-100 ".concat(ze),style:Re},Y.a.createElement(tn.a,{loading:It,className:"mr",type:"primary",onClick:()=>ut()},"\u67E5\u8BE2"),Y.a.createElement(tn.a,{onClick:q},"\u91CD\u7F6E"))},ae=C=>{var q=Object(ce.useState)({}),se=Object(Xe.default)(q,2),Re=se[0],Te=se[1],ze=Et(),Ke=ze.tableState,Ae=ze.setTable,_e=ze.refresh,ut=ze.syncMethods,It=Ke.search,dt=C.schema||C.propsSchema,zn=!0;!C.searchOnMount&&C.searchOnMount!==void 0&&(zn=!1);var gn=Object(ce.useRef)(),yn=et=>{Ae({search:et})},bn=et=>{try{var ct=100,Mt=Object.values(et.properties).filter(ot=>ot.hidden?ot.hidden!==!0:ot["ui:hidden"]!==!0).map(ot=>ot.width?ot.width:ot["ui:width"]),Rn=Mt.lastIndexOf(void 0),Zt=Mt.slice(Rn+1).map(ot=>Number(ot.substring(0,ot.length-1))),ln=Zt.reduce((ot,mt)=>{var Je=ot+mt;return Je>100?Math.min(100,mt):Je},0);return ct=100-ln,ct<10&&(ct=100),ct+"%"}catch(ot){return console.error(ot),"100%"}},Fn=()=>{var et=JSON.stringify(gn.current)===JSON.stringify(dt);if(dt&&dt.properties){if(Re&&et)return;try{var ct=JSON.parse(JSON.stringify(dt));ct.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:bn(dt)},Te(ct)}catch(Mt){console.error(Mt)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},on=et=>{if(et.length){Ae({checkPassed:!1});return}Ae({checkPassed:!0})},Qe=Object(pt.useForm)({formData:It,onChange:yn,onValidate:on}),Bt=()=>{Qe.setValues({})};if(Object(ce.useEffect)(()=>{C.hidden||Fn()},[dt]),Object(ce.useEffect)(()=>{ut({searchApi:C.api,syncOnSearch:C.onSearch,syncAfterSearch:C.afterSearch}),(C.hidden||zn)&&_e()},[]),C.hidden)return null;var St=typeof C.searchBtnRender=="function"?C.searchBtnRender(_e,Bt):[];return Y.a.createElement("div",{className:"tr-search ".concat(C.className),style:C.style,onKeyDown:et=>{et.keyCode===13&&_e()}},Y.a.createElement(pt.default,Object(Z.default)({form:Qe},C,{schema:Re,displayType:"row",widgets:Object(E.a)({searchBtn:()=>C.searchBtnRender?Y.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(St)&&St.map((et,ct)=>Y.a.createElement("div",{key:ct.toString(),style:{marginLeft:8}},et))):Y.a.createElement(Ft,{clearSearch:Bt,style:C.searchBtnStyle||{},className:C.searchBtnClassName||""})},C.widgets)})))},B=ae,y=t("7kJ1"),l=t("qPIi"),x=t.n(l),u=t("zmYW"),A=t("DtFj"),w=t.n(A),J=t("lfLe"),W=t("Cp9S"),k=t.n(W),te=t("Wgwc"),U=t.n(te);function me(C,q){return C.indexOf(q)>-1}var Ie=C=>me(Object.prototype.toString.call(C),"Object"),ve=C=>typeof C!="string"?!1:C.indexOf("$api.")===0||C.indexOf("$func.")===0,je=C=>C.indexOf("$api.")===0?C.substring(5):C.indexOf("$func.")===0?C.substring(6):"",fe=(C,q)=>{if(typeof C!="object"||C===null){if(ve(C)){var se=je(C);return q&&q[se]&&typeof q[se]=="function"?q[se]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return C}if(Array.isArray(C)){var Re=[...C];return Re.map(Ke=>fe(Ke,q))}var Te=Object(E.a)({},C),ze=Object.keys(Te);return ze.forEach(Ke=>{Te[Ke]=fe(Te[Ke],q)}),Te},Ye=C=>U()(C).format("YYYY-MM-DD HH:mm"),re=C=>U()(C).format("YYYY-MM-DD"),ye=C=>"\xA5".concat(C).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),He=(C,q,se)=>{var Re=C;return typeof Re=="function"?Re=Re(q):se&&typeof se=="function"&&se(),Re},ht=t("NcKm"),gt=t("lbd2"),$t=t.n(gt),nn=t("93XW"),Be=t("d1El"),Ve=t.n(Be),yt=(C,q,se)=>se.ellipsis?Y.a.createElement(Ve.a,{title:Rt(q,se)},C):Y.a.createElement("span",null,C),cn=(C,q)=>q.copyable||q.ellipsis?Y.a.createElement($t.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:q.copyable&&C?{text:C,onCopy:()=>d.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:q.ellipsis||!1},Rt(C,q)):Rt(C,q),Rt=(C,q)=>{var se=q.enum||void 0;return se&&se[C]?se[C]:C},Ut=C=>C?Y.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},Y.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},C)):null,Xt=(C,q)=>{if(q.valueType==="code")return Ut(C);var se=cn(C,q),Re=yt(se,C,q);return Re},Pn=t("WbIG"),wn=t("hw8t"),In=t.n(wn);class mn extends Y.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(q){return{hasError:!0,errorInfo:q.message}}componentDidCatch(q,se){console.log(q,se)}render(){return this.state.hasError?Y.a.createElement(In.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var Bn=mn,Pt=t("IehP"),vn=t("3R4v"),Ln=C=>{var q=Object(ce.useState)(!1),se=Object(Xe.default)(q,2),Re=se[0],Te=se[1],ze=C.fullScreen;return Re?Y.a.createElement(Ve.a,{title:"\u9000\u51FA\u5168\u5C4F"},Y.a.createElement(Pt.a,{onClick:()=>{document.exitFullscreen(),Te(!1)}})):Y.a.createElement(Ve.a,{title:"\u5168\u5C4F"},Y.a.createElement(vn.a,{onClick:()=>{if(!document.fullscreenEnabled){d.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(Te(!0),ze().catch(Ke=>d.a.error(Ke.message)))}}))},ca=Ln,an=t("G851"),qn=t("ZvzK"),fn=t.n(qn),ma=t("PFYH"),$n=t("Jv8k"),rn=t.n($n),pn=t("9hi+"),Mn=()=>{var C=Et(),q=C.tableState,se=C.setTable;return Y.a.createElement(fn.a,{overlay:Y.a.createElement(rn.a,{selectedKeys:[q.tableSize],onClick:Re=>{var Te=Re.key;se({tableSize:Te})},style:{width:80}},Y.a.createElement(rn.a.Item,{key:"default"},"\u9ED8\u8BA4"),Y.a.createElement(rn.a.Item,{key:"middle"},"\u4E2D\u7B49"),Y.a.createElement(rn.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},Y.a.createElement(Ve.a,{title:"\u8868\u683C\u5BC6\u5EA6"},Y.a.createElement(pn.a,null)))},Oe=Mn,We=t("rLCj"),jt=()=>{var C=Et(),q=C.refresh;return Y.a.createElement(Ve.a,{title:"\u5237\u65B0"},Y.a.createElement(We.a,{onClick:()=>q()}))},wt=jt,Hn=C=>Y.a.createElement(k.a,{size:14,style:{fontSize:16,cursor:"pointer"}},Y.a.createElement(wt,null),Y.a.createElement(Oe,null),Y.a.createElement(ca,C)),_n=Hn,Qn=C=>{var q,se,Re;C.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var Te=Et(),ze=Te.tableState,Ke=Te.setTable,Ae=Te.doSearch,_e=ze.dataSource,ut=ze.pagination,It=ze.loading,dt=ze.api,zn=ze.tableSize,gn=Object(ce.useRef)(null),yn=(mt,Je)=>{Ke({pagination:Object(E.a)(Object(E.a)({},ut),{},{current:mt,pageSize:Je})}),!(!C.pageChangeWithRequest&&C.pageChangeWithRequest!==void 0)&&Ae({current:mt,pageSize:Je})},bn=C.headerTitle,Fn=C.toolbarRender,on=C.columns,Qe=C.style,Bt=Qe===void 0?{}:Qe,St=C.className,et=St===void 0?"":St,ct=C.toolbarAction,Mt=ct===void 0?!1:ct;on.map(mt=>{var Je=mt;if(Je.render)return Je;switch(Je.valueType){case"date":Je.render=Ot=>Xt(re(Ot),Je);break;case"dateTime":Je.render=Ot=>Xt(Ye(Ot),Je);break;case"money":Je.render=Ot=>Xt(ye(Ot),Je);break;case"code":Je.render=Ot=>Xt(Ot,Je);break;case"text":default:Je.render=Ot=>Xt(Ot,Je)}return Je});var Rn=Object(E.a)(Object(E.a)({},C),{},{dataSource:_e,pagination:C.pagination===!1?!1:Object(E.a)(Object(E.a)({onChange:yn,size:"small"},C.pagination),{},{pageSize:((q=C.pagination)===null||q===void 0?void 0:q.pageSize)||ut.pageSize,total:((se=C.pagination)===null||se===void 0?void 0:se.total)||ut.total,current:((Re=C.pagination)===null||Re===void 0?void 0:Re.current)||ut.current}),loading:It,size:zn}),Zt=typeof Fn=="function"?Fn():[],ln=bn||Zt&&Zt.length||Array.isArray(dt),ot=()=>{var mt;return Promise.resolve((mt=gn.current)===null||mt===void 0?void 0:mt.requestFullscreen())};return Object(ce.useEffect)(()=>{C.size&&Ke({tableSize:C.size})},[]),Y.a.createElement(Bn,null,Y.a.createElement("div",{className:"tr-table-wrapper ".concat(et),style:Bt,ref:gn},Y.a.createElement("div",{className:ln?"tr-table-top":"tr-table-top-nohead"},Y.a.createElement("div",{className:"tr-table-title"},Y.a.createElement(Vn,{title:bn})),Y.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},Y.a.createElement(k.a,{align:"center"},Y.a.createElement(k.a,{size:8,style:{marginRight:8}},Array.isArray(Zt)&&Zt.map((mt,Je)=>Y.a.createElement("div",{key:Je.toString()},mt))),Mt&&Y.a.createElement(_n,{fullScreen:ot})))),Y.a.createElement(w.a,Rn)))},ea=Qn,Vn=C=>{var q=C.title,se=Et(),Re=se.tableState,Te=se.setTable,ze=se.doSearch,Ke=Re.tab,Ae=Re.api,_e=Ke||0,ut=It=>{var dt=It.target.value;Te({tab:dt}),ze({tab:dt})};return typeof Ae=="function"?Y.a.createElement("div",{className:"tr-single-tab"},q):Ae&&Array.isArray(Ae)?Ae.length===1?Y.a.createElement("div",{className:"tr-single-tab"},Ae[0].name):Y.a.createElement(Y.a.Fragment,null,Y.a.createElement(x.a.Group,{onChange:ut,value:_e},Ae.map((It,dt)=>Y.a.createElement(x.a.Button,{key:dt.toString(),value:dt},It.name))),q&&Y.a.createElement("div",{className:"tr-extra-tab"},q)):Y.a.createElement("div",{className:"tr-single-tab"})},hn=t("yDJ3"),sn=t.n(hn),Wt=t("SA0R"),Jt=t.n(Wt),Na=t("k/c8"),va=t("GYr9"),Gn=C=>{var q=en({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:10,total:1},tableSize:"default",checkPassed:!0}),se=Object(Xe.default)(q,2),Re=se[0],Te=se[1],ze=Object(ce.useRef)(),Ke=Object(ce.useRef)(),Ae=Object(ce.useRef)(),_e=Re.pagination,ut=Re.search,It=Re.tab,dt=Re.checkPassed,zn=Et(),gn=(Qe,Bt)=>{if(delete ut.searchBtn,Ke.current&&Ke.current(ut),!dt)return;var St=Qe||{},et=St.current,ct=St.pageSize,Mt=St.tab,Rn=Object(Kt.default)(St,["current","pageSize","tab"]),Zt=et||1,ln=ct||10,ot=It;["string","number"].indexOf(typeof Mt)>-1&&(ot=Mt);var mt={current:Zt,pageSize:ln};if(typeof ze.current=="function")Ot(ze.current);else if(Array.isArray(ze.current)){var Je=sn()(ze.current,"[".concat(ot,"].api"));typeof Je=="function"?Ot(Je):d.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else d.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function Ot(aa){Te({loading:!0});var An=Object(E.a)(Object(E.a)(Object(E.a)(Object(E.a)({},ut),Bt),Rn),mt);Array.isArray(aa)&&(An=Object(E.a)(Object(E.a)({},An),{},{tab:Mt})),Promise.resolve(aa(An)).then(Kn=>{var Un=Kn.rows,ra=Kn.total,sa=Kn.pageSize,ia=Object(Kt.default)(Kn,["rows","total","pageSize"]);Te(Object(E.a)(Object(E.a)({loading:!1,dataSource:Un},ia),{},{pagination:Object(E.a)(Object(E.a)({},mt),{},{total:ra,pageSize:sa||ln})})),Ae.current(Object(E.a)({rows:Un,total:ra,pageSize:sa},ia))}).catch(Kn=>{Te({loading:!1})})}},yn=(Qe,Bt)=>{var St=Qe&&Qe.stay||!1,et=Qe&&Qe.tab,ct=Bt||{};gn(Object(E.a)(Object(E.a)({},Qe),{},{current:St?_e.current:1,tab:et,pageSize:_e.pageSize}),ct)},bn=Qe=>{["string","number"].indexOf(typeof Qe)>-1?(Te({tab:Qe}),yn({tab:Qe})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},Fn=Qe=>{var Bt=Qe.searchApi,St=Qe.syncOnSearch,et=Qe.syncAfterSearch;ze.current=Bt,Ke.current=St,Ae.current=et,Te({api:Bt})},on={tableState:Re,setTable:Te,doSearch:gn,refresh:yn,changeTab:bn,syncMethods:Fn};return on},ta=(C,q)=>{var se=Gn(C);return Object(ce.useImperativeHandle)(q,()=>se),Y.a.createElement(j.a,{locale:Jt.a},Y.a.createElement(Tt.Provider,Object(Z.default)({},C,{value:se})))},na=Object(ce.forwardRef)(ta)},RnhZ:function(ke,G,t){var ge={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function _(Z){var E=j(Z);return t(E)}function j(Z){if(!t.o(ge,Z)){var E=new Error("Cannot find module '"+Z+"'");throw E.code="MODULE_NOT_FOUND",E}return ge[Z]}_.keys=function(){return Object.keys(ge)},_.resolve=j,ke.exports=_,_.id="RnhZ"},SiV7:function(ke,G,t){},Zs1V:function(ke){ke.exports=JSON.parse("{}")},bQjt:function(ke,G,t){"use strict";t.r(G);var ge=t("0Owb"),_=t("q1tI"),j=t.n(_),Z=t("refC"),E=S=>{var P=Object(Z.useForm)();return j.a.createElement(Z.default,Object(ge.default)({form:P},S))};G.default=E},c2mQ:function(ke,G,t){"use strict";t.r(G);var ge=t("q1tI"),_=t.n(ge),j=t("refC"),Z=E=>{var S=E.schema,P=Object(j.useForm)();return _.a.createElement("div",null,_.a.createElement(j.default,{form:P,schema:S}))};G.default=Z},cFvS:function(ke,G,t){},fK6R:function(ke,G,t){},gO06:function(ke,G,t){},iU8R:function(ke,G,t){},nYSz:function(ke,G,t){"use strict";t.r(G),t.d(G,"defaultSettings",function(){return je}),t.d(G,"defaultCommonSettings",function(){return te}),t.d(G,"defaultGlobalSettings",function(){return fe}),t.d(G,"fromFormily",function(){return La}),t.d(G,"toFormily",function(){return Nn}),t.d(G,"fromFormRender",function(){return ba}),t.d(G,"toFormRender",function(){return ja});var ge=t("0Owb"),_=t("q1tI"),j=t.n(_),Z=t("kvAW"),E=t("qJlv"),S=t("k1fw"),P=t("tJVT"),d=Object(_.createContext)(()=>{}),Kt=Object(_.createContext)({}),Xe=()=>Object(_.useContext)(d),ce=()=>Object(_.useContext)(Kt),Y=a=>{var s=Object(_.useReducer)((g,N)=>{var $=N;typeof N=="function"&&($=$(g)),N.action&&N.payload&&($=N.payload,typeof $=="function"&&($=$(g)));var L=Object(S.a)(Object(S.a)({},g),$);return L},a),c=Object(P.default)(s,2),h=c[0],b=c[1],F=(g,N)=>{b(g)};return[h,F]};function Tt(a,s,c){var h=Object(_.useRef)();Object(_.useEffect)(()=>{h.current=a},[a]);var b=Object(_.useRef)();return Object(_.useEffect)(()=>{if(!c)return;function F(){h&&h.current&&h.current()}if(F(),s!==null)return b.current=setInterval(F,s),()=>clearInterval(b.current)},[s,c]),()=>clearInterval(b.current)}function Cn(a){var s=Object(_.useRef)();return Object(_.useEffect)(()=>{s.current=a},[a]),s.current}var Et=a=>{var s=Object(_.useState)(!1),c=Object(P.default)(s,2),h=c[0],b=c[1],F;try{F=localStorage.getItem(a)}catch(g){}return F||(b(!0),localStorage.setItem(a,JSON.stringify(!0))),h},Jn=()=>{var a=Object(_.useState)(!1),s=Object(P.default)(a,2),c=s[0],h=s[1],b=()=>h(!c);return[c,b]},en=a=>{var s=Object(_.useState)(a),c=Object(P.default)(s,2),h=c[0],b=c[1];return[h,b]},xt=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",h=()=>{var L=localStorage.getItem(c);if(L)try{return JSON.parse(L)}catch(M){return s}return s},b=Object(_.useState)(h()),F=Object(P.default)(b,2),g=F[0],N=F[1],$=L=>{N(L),localStorage.setItem(c,JSON.stringify(L))};return[g,$]},Yn=t("fwXI"),tn=t("CC+v"),pt=t.n(tn),Ft=t("MaXC"),ae=t("4IMT"),B=t.n(ae),y=t("tL+A"),l=t("QpBz"),x=t.n(l),u=t("PpiC"),A=t("cUip"),w=t("iJl9"),J=t.n(w),W=t("WWur"),k=t.n(W),te={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string",widget:"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},required:{title:"\u5FC5\u586B",type:"boolean"},placeholder:{title:"\u5360\u4F4D\u7B26",type:"string"},bind:{title:"Bind",type:"string"},min:{title:"\u6700\u5C0F\u503C",type:"number"},max:{title:"\u6700\u5927\u503C",type:"number"},disabled:{title:"\u7981\u7528",type:"boolean"},readOnly:{title:"\u53EA\u8BFB",type:"boolean"},hidden:{title:"\u9690\u85CF",type:"boolean"},width:{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string",widget:"percentSlider"},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number",widget:"slider",max:400,props:{hideNumber:!0}}},U=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean",widget:"checkbox"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean",widget:"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],widget:"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"HTML",name:"html",widget:"html",schema:{title:"HTML",type:"string",widget:"html"},setting:{default:{title:"\u5C55\u793A\u5185\u5BB9",type:"string"}}}],me=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime",props:{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number",widget:"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],Ie=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5E38\u89C4\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},props:{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}},{text:"\u7B80\u5355\u5217\u8868",name:"list",widget:"list1",schema:{title:"\u6570\u7EC4",type:"array",widget:"list1",items:{type:"object",properties:{}}}},{text:"\u8868\u683C\u5217\u8868",name:"list",widget:"list2",schema:{title:"\u6570\u7EC4",type:"array",widget:"list2",items:{type:"object",properties:{}}}},{text:"\u590D\u6742\u8868\u683C\u5217\u8868",name:"list",widget:"list3",schema:{title:"\u6570\u7EC4",type:"array",widget:"list3",items:{type:"object",properties:{}}}}],ve=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date",props:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],je=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:U,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:me},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:Ie},{title:"\u6A21\u677F",widgets:ve}],fe={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"number",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],props:{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number",widget:"slider",max:300,props:{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],widget:"radio"}}},Ye=t("gO06"),re=t("4b23"),ye=t("JBAE"),He=t.n(ye);function ht(a,s){return a.indexOf(s)>-1}var gt=a=>ht(Object.prototype.toString.call(a),"Object");function $t(a){try{return JSON.parse(JSON.stringify(a))}catch(s){return a}}function nn(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function Be(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function Ve(a,s){if(a===void 0&&s===void 0)return!0;if(a===void 0||s===void 0)return!1;if(a===null&&s===null)return!0;if(a===null||s===null)return!1;if(a.constructor!==s.constructor)return!1;if(a.constructor===Array){if(a.length!==s.length)return!1;for(var c=0;c<a.length;c++)if(a[c].constructor===Array||a[c].constructor===Object){if(!Ve(a[c],s[c]))return!1}else if(a[c]!==s[c])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(s).length)return!1;for(var h=0;h<Object.keys(a).length;h++){var b=Object.keys(a)[h];if(a[b]&&typeof a[b]!="number"&&(a[b].constructor===Array||a[b].constructor===Object)){if(!Ve(a[b],s[b]))return!1}else if(a[b]!==s[b])return!1}}else if(a.constructor===String||a.constructor===Number)return a===s;return!0}function yt(a){var s;switch(a){case"date":s="YYYY-MM-DD";break;case"time":s="HH:mm:ss";break;default:s="YYYY-MM-DD HH:mm:ss"}return s}function cn(a){return a.find((s,c,h)=>c!==h.findIndex(b=>JSON.stringify(s)===JSON.stringify(b)))}function Rt(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=Xt(a),h=c.map(g=>{var N=g.name,$=g.schema,L=$.type,M=$.enum,le=$.properties,z=$.items,Ne=L==="object"&&le,Ee=L==="array"&&z&&!M,de=N&&s[g.name];if(!de)return g;if(Ee){var be=Rt(z,de.items||{});return Object(S.a)(Object(S.a)({},g),{},{schema:Object(S.a)(Object(S.a)(Object(S.a)({},g.schema),de),{},{items:be})})}if(Ne){var pe=Rt(g.schema,de);return Object(S.a)(Object(S.a)({},g),{},{schema:pe})}return Object(S.a)(Object(S.a)({},g),{},{schema:Object(S.a)(Object(S.a)({},g.schema),de)})}),b={};h.forEach(g=>{b[g.name]=g.schema});var F={};return Object.keys(s).forEach(g=>{typeof g=="string"&&g.substring(0,3)==="ui:"&&(F[g]=s[g])}),Ut(b)?Object(S.a)(Object(S.a)({},a),F):Object(S.a)(Object(S.a)(Object(S.a)({},a),F),{},{properties:b})}function Ut(a){return Object.keys(a).length===0}function Xt(a){if(!a)return[];var s=a.properties,c=a.items,h=a.type;if(!s&&!c)return[];var b={};return h==="object"&&(b=s),h==="array"&&(b=c),Object.keys(b).map(F=>({schema:b[F],name:F}))}function Pn(){}var wn=a=>Function('"use strict";return ('+a+")")(),In=(a,s,c)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(c),`;
    const formData = `).concat(JSON.stringify(s),`;
    return (`).concat(a,")"))();function mn(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function Bn(a){return Object.keys(a).some(s=>typeof a[s]=="function"?!0:typeof a[s]=="string"?mn(a[s]):typeof a[s]=="object"?Bn(a[s]):!1)}function Pt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",c=arguments.length>2?arguments[2]:void 0,h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},b=He()(a);b.$id||(b.$id=s);var F=[],g=b.type==="object"&&b.properties,N=b.type==="array"&&b.items&&b.items.properties;return g&&(Object.entries(b.properties).forEach($=>{var L=Object(P.default)($,2),M=L[0],le=L[1],z=s+"/"+M;F.push(z),Pt(le,z,s,h)}),delete b.properties),N&&(Object.entries(b.items.properties).forEach($=>{var L=Object(P.default)($,2),M=L[0],le=L[1],z=s+"/"+M;F.push(z),Pt(le,z,s,h)}),delete b.items.properties),b.type&&(h[s]={parent:c,schema:b,children:F}),h}var vn=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",c=s.split("/");return c[c.length-1]},Ln=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",h=s.split("/");return(typeof c=="string"||typeof c=="number")&&(h[h.length-1]=c),h.join("/")},ca=a=>({parent:a.parent,schema:Object(S.a)({},a.schema),data:a.data,children:a.children});function an(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,h={},b=a[s],F=He()(b);return F&&(h=Object(S.a)({},F.schema),c&&h.$id&&delete h.$id,F.children.length>0&&F.children.forEach(g=>{var N=g;if(!!a[g]){try{c&&(N=a[g].schema.$id)}catch(L){console.log("catch",L)}var $=vn(N);h.type==="object"&&(h.properties||(h.properties={}),h.properties[$]=an(a,g,c)),h.type==="array"&&h.items&&h.items.type==="object"&&(h.items.properties||(h.items.properties={}),h.items.properties[$]=an(a,g,c))}})),h}var qn=(a,s)=>{var c=Pt(s);return a in c&&delete c[a],an(c)},fn=(a,s)=>{var c=Object(S.a)({},a);try{var h=a[s],b=s+Object(re.a)(6),F=c[h.parent].children,g=F.findIndex(N=>N===s);return F.splice(g+1,0,b),c[b]=He()(c[s]),c[b].schema.$id=b,[c,b]}catch(N){return console.error(N,"catcherror"),[a,s]}},ma=a=>{var s=a.id,c=a.key,h=a.schema,b=a.subSchema,F=Pt(h),g=Ln(s,c)+"$$"+Object(re.a)(10);if(s in F){var N=F[s].parent;if(N&&N in F){var $=F[N].children;try{var L=$.findIndex(M=>M===s);$.splice(L+1,0,g)}catch(M){console.error(M.message)}}try{F[g]={parent:F[s].parent,schema:b,children:[]},F[g].schema.$id=g}catch(M){console.error(M.message)}}return[an(F),g]},$n=a=>{var s=a.selected,c=a.name,h=a.schema,b=a.flatten,F=s||"#",g;if(F&&F[0]==="0"||F==="#"){var N=Object(S.a)({},b);try{var $=F.substring(1);g=$+"/"+c+"_"+Object(re.a)(6),F==="#"&&(g="#/"+c+"_"+Object(re.a)(6),$="#");var L=N[$].children;L.push(g);var M={parent:$,schema:Object(S.a)(Object(S.a)({},h),{},{$id:g}),data:void 0,children:[]};N[g]=M}catch(ue){console.error(ue,"catch")}return{newId:g,newFlatten:N}}var le=c+"_"+Object(re.a)(6),z=s.split("/");z.pop(),z.push(le),g=z.join("/");var Ne=Object(S.a)({},b);try{var Ee=Ne[s],de=Ne[Ee.parent].children,be=de.findIndex(ue=>ue===s);de.splice(be+1,0,g);var pe={parent:Ee.parent,schema:Object(S.a)(Object(S.a)({},h),{},{$id:g}),data:void 0,children:[]};Ne[g]=pe}catch(ue){console.error(ue)}return{newId:g,newFlatten:Ne}},rn=a=>{var s=a.dragId,c=a.dragItem,h=a.dropId,b=a.position,F=a.flatten,g=h==="#"?"inside":b,N=Object(S.a)({},F);c&&(N[s]=c);var $=c||N[s],L=N[h],M=L;if(g!=="inside"){var le=L.parent;M=N[le]}if(h.indexOf(s)>-1)return[N,s];var z=s;try{var Ne=M.schema.$id;z=z.replace($.parent,Ne)}catch(ue){}try{var Ee=N[$.parent],de=Ee.children.indexOf(s);de>-1&&Ee.children.splice(de,1)}catch(ue){console.error(ue)}try{var be=M.children||[],pe=be.indexOf(h);switch(g){case"up":be.splice(pe,0,s);break;case"down":be.splice(pe+1,0,s);break;default:be.push(s);break}M.children=be}catch(ue){console.error(ue)}return $.parent=M.$id,[N,z]},pn=(a,s)=>!a||!s?{}:(Object.entries(a).forEach(c=>{var h=Object(P.default)(c,2),b=h[0],F=h[1],g=Hn(s,b);a[b].data=g}),a),Mn=a=>(s,c)=>{},Oe=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var h=s[c].data,b=Object.keys(s),F=b.filter(N=>{var $=c.split("/").length,L=N.split("/").length;return N.indexOf(c)>-1&&L>$});if(F&&F.length>0){var g=s[c].schema.type;h===void 0&&(g==="object"?h={}:g==="array"&&(h=[{}])),F.forEach(N=>{var $=c.split("/").length,L=N.split("/").length;if(L===$+1){var M=a(s,N),le=vn(N);if(M===void 0)return h;g==="array"?h[0][le]=M:h[le]=M}})}return h}catch(N){return}},We=(a,s,c)=>{try{var h=c[s];if(h.schema[a]!==void 0)return h.schema[a];if(h&&h.parent){var b=c[h.parent].schema;return b[a]!==void 0?b[a]:We(a,h.parent,c)}}catch(F){return}};function jt(a){return Function('"use strict";return ('+a+")")()}function wt(a){if(!a)return[];var s=a.properties,c=a.items,h=a.type;if(!s&&!c)return[];var b={};return h==="object"&&(b=s),h==="array"&&(b=c.properties),Object.keys(b).map(F=>({schema:b[F],name:F}))}function Hn(a,s){s=_n(s,a);for(var c=0,h=s.length;a!=null&&c<h;){var b=Qn(s[c++]);Array.isArray(a)&&typeof a[0]=="object"?a=b?a[0][b]:a:a=b?a[b]:a}return c&&c==h?a:void 0}function _n(a,s){return Array.isArray(a)?a:hn(a,s)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function Qn(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var s="".concat(a);return s=="0"&&1/a==-INFINITY?"-0":s}var ea=/#\/.+\//,Vn=/^\w*$/;function hn(a,s){if(Array.isArray(a))return!1;var c=typeof a;return c==="number"||c==="boolean"||a==null?!0:Vn.test(a)||!ea.test(a)||s!=null&&a in Object(s)}var sn=a=>{if(a&&a.propsSchema){var s=a.propsSchema,c=Object(u.default)(a,["propsSchema"]);return Object(S.a)({schema:s},c)}return a},Wt=a=>{if(a&&a.schema){var s=a.schema,c=Object(u.default)(a,["schema"]);return Object(S.a)({propsSchema:s},c)}return a};function Jt(a){var s=arguments.length<=1?void 0:arguments[1];return s&&s.target&&a in s.target?s.target[a]:s}var Na=a=>{var s=a.onChange,c=a.value,h=a.defaultValue,b=a.schema,F=Object(u.default)(a,["onChange","value","defaultValue","schema"]),g=Object(S.a)({},b),N=g||{},$=N.trigger,L=N.valuePropName,M={},le="value",z=c===void 0?h:c;L&&typeof L=="string"?(le=L,M[L]=z):M.value=z;var Ne=function(){for(var pe=arguments.length,ue=new Array(pe),xe=0;xe<pe;xe++)ue[xe]=arguments[xe];var Le=Jt(le,...ue);s(Le)};$&&typeof $=="string"?M[$]=Ne:M.onChange=Ne;var Ee={disabled:g.disabled||g["ui:disabled"],readOnly:g.readOnly||g["ui:readonly"],hidden:g.hidden||g["ui:hidden"]},de=Object(S.a)(Object(S.a)(Object(S.a)({},M),{},{schema:g},Ee),F);return de},va=t("CLjb"),Gn=t("fK6R"),ta=a=>{var s=a.text,c=a.name,h=a.schema,b=a.icon,F=Object(va.a)({item:{type:"box",dragItem:{parent:"#",schema:h,children:[]},$id:"#/".concat(c,"_").concat(Object(re.a)(6))},end:(de,be)=>{var pe=be.getDropResult()},collect:de=>({isDragging:de.isDragging()})}),g=Object(P.default)(F,2),N=g[0].isDragging,$=g[1],L=Xe(),M=ce(),le=M.selected,z=M.flatten,Ne=M.onFlattenChange,Ee=()=>{var de=$n({selected:le,name:c,schema:h,flatten:z}),be=de.newId,pe=de.newFlatten;Ne(pe),L({selected:be})};return j.a.createElement("div",{ref:$},j.a.createElement(C,{text:s,icon:b,onClick:Ee}))},na=ta,C=a=>{var s=a.onClick,c=a.text,h=a.icon;return j.a.createElement("li",{className:"left-item",onClick:s},c)},q=a=>{var s=ce(),c=s.userProps,h=c===void 0?{}:c,b=h.settings,F=Array.isArray(b)?b:je;return j.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(F)?F.map((g,N)=>g&&g.show===!1?null:j.a.createElement("div",{key:N},j.a.createElement("p",{className:"f6 b"},g.title),j.a.createElement("ul",{className:"pl0"},Array.isArray(g.widgets)?g.widgets.map(($,L)=>j.a.createElement(na,Object(ge.default)({key:L.toString()},$,a))):j.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):j.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},se=q,Re=t("Z8Mf"),Te=t("j7zX"),ze=t.n(Te),Ke=t("UESt"),Ae=t("refC");function _e(a){var s=a.onChange,c=a.value,h=a.disabled,b=a.readonly,F=a.options,g=N=>{try{var $=Ln(c,N.target.value);s($)}catch(L){}};return j.a.createElement(J.a,Object(ge.default)({disabled:h||b},F,{onChange:g,value:vn(c)}))}var ut=t("tCGa"),It=t("DH6M"),dt=t.n(It),zn=t("b+Mx"),gn=t("5Dct"),yn=t.n(gn),bn=a=>{var s=a.invalid?{borderColor:"#f5222d"}:{},c=a.schema,h=c.max,b=c.min,F=c.step,g={};(h||h===0)&&(g={max:h}),(b||b===0)&&(g=Object(S.a)(Object(S.a)({},g),{},{min:b})),F&&(g=Object(S.a)(Object(S.a)({},g),{},{step:F}));var N=!1;a.options&&a.options.hideNumber&&(N=!0);var $=z=>typeof z=="string"&&z.endsWith("%"),L=100;if($(a.value))try{L=Number(a.value.split("%")[0]),Number.isNaN(L)&&(L=100)}catch(z){}var M=z=>{var Ne=z+"%";a.onChange(Ne)},le=a.readonly?j.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):j.a.createElement(yn.a,Object(ge.default)({},a.options,g,{style:Object(S.a)({width:"80px"},s),value:L,disabled:a.disabled,onChange:M,formatter:z=>"".concat(z,"%"),parser:z=>z.replace("%","")}));return j.a.createElement("div",{className:"fr-slider"},j.a.createElement(dt.a,Object(ge.default)({style:{flexGrow:1,marginRight:N?0:12}},g,{onChange:M,max:100,tipFormatter:z=>z+"%",value:L||100,disabled:a.disabled||a.readonly})),N?null:le)},Fn=bn;function on(a,s){var c=a.type,h=a.format,b=a.enum,F=a.readonly;if(a.widget)return a.widget;var g=[];F&&(g.push("".concat(c,"?readonly")),g.push("*?readonly")),b&&(g.push("".concat(c,"?enum")),g.push("*?enum")),h&&g.push("".concat(c,":").concat(h)),g.push(c);var N="";return g.some($=>(N=s[$],!!N)),N}function Qe(){var a=Object(Ae.useForm)(),s=ce(),c=s.selected,h=s.flatten,b=s.onItemChange,F=s.userProps,g=F===void 0?{}:F,N=s.widgets,$=s.mapping,L=g.settings,M=g.commonSettings,le=Object(_.useState)({}),z=Object(P.default)(le,2),Ne=z[0],Ee=z[1],de=Object(S.a)(Object(S.a)({},N),{},{idInput:_e,percentSlider:Fn}),be=(ue,xe)=>{var Le=[];return ue.forEach(qe=>{var vt=qe.widgets,lt=vt.filter(tt=>tt.widget).map(tt=>Object(S.a)(Object(S.a)({},tt),{},{setting:Object(S.a)(Object(S.a)({},xe),tt.setting)}));Le=[...Le,...lt]}),Le},pe=ue=>{if(c&&ue.$id)try{var xe=h[c];xe&&xe.schema&&b(c,Object(S.a)(Object(S.a)({},xe),{},{schema:ue}))}catch(Le){console.log(Le,"catch")}};return Object(_.useEffect)(()=>{var ue=Array.isArray(L)?[...L,{widgets:[...U,...me,...Ie]}]:je,xe=gt(M)?M:te,Le=be(ue,xe),qe,vt;try{if(qe=h[c],qe&&(vt=on(qe.schema,$)),vt){var lt=Le.find(Dt=>Dt.widget===vt)||{},tt=lt.setting;Ee({type:"object",displayType:"column",showDescIcon:!0,properties:Object(S.a)({},tt)}),setTimeout(()=>{a.setValues(qe.schema)})}}catch(Dt){console.log(Dt)}},[c]),j.a.createElement("div",{style:{paddingRight:24}},j.a.createElement(Ae.default,{form:a,schema:Ne,widgets:de,watch:{"#":ue=>pe(ue)}}))}function Bt(){var a=Object(Ae.useForm)(),s=ce(),c=s.widgets,h=s.frProps,b=s.userProps,F=Xe(),g=b&&b.globalSettings?b.globalSettings:fe,N=$=>{$.displayType&&F({frProps:$})};return Object(_.useEffect)(()=>{a.setValues(h)},[h]),j.a.createElement("div",{style:{paddingRight:24}},j.a.createElement(Ae.default,{form:a,schema:g,watch:{"#":$=>N($)},widgets:c}))}var St=t("72KL"),et=ze.a.TabPane;function ct(){var a=Y({showRight:!0,showItemSettings:!1}),s=Object(P.default)(a,2),c=s[0],h=s[1],b=ce(),F=b.selected,g=c.showRight,N=c.showItemSettings,$=()=>h({showRight:!g}),L=()=>j.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:$},j.a.createElement(Ke.a,{className:"f5"})),M=()=>j.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},j.a.createElement(L,null));return Object(_.useEffect)(()=>{F&&F[0]==="0"||F==="#"||!F?h({showItemSettings:!1}):h({showItemSettings:!0})},[F]),g?j.a.createElement("div",{className:"right-layout relative pl2"},j.a.createElement(L,null),j.a.createElement(ze.a,{defaultActiveKey:"1",onChange:()=>{}},N&&j.a.createElement(et,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},j.a.createElement(Qe,null)),j.a.createElement(et,{tab:"\u8868\u5355\u914D\u7F6E",key:N?"2":"1"},j.a.createElement(Bt,null)))):j.a.createElement(M,null)}var Mt=a=>{var s=a.children,c=s===void 0?[]:s,h=a.preview;return j.a.createElement(j.a.Fragment,null,c.map((b,F)=>{var g={id:b,preview:h};return j.a.createElement(Un,Object(ge.default)({key:F.toString()},g))}))},Rn=Mt,Zt=a=>{var s=a.$id,c=a.item,h=a.labelClass,b=a.contentClass,F=a.isComplex,g=a.children,N=c.schema,$=c.data,L=ce(),M=L.onItemChange,le=L.flatten,z=L.widgets,Ne=L.mapping,Ee=L.frProps,de=Ee===void 0?{}:Ee,be=de.labelWidth,pe=de.displayType,ue=de.showDescIcon,xe=de.showValidate,Le=N.title,qe=N.description,vt=N.required,lt=on(N,Ne),tt=N.widget;tt&&z[tt]&&(lt=tt);var Dt=z[lt];if(!Dt){var kt=Object(S.a)({},N);delete kt.widget,lt=on(kt,Ne),Dt=z[lt]||"input"}var Ct=We("labelWidth",s,le)||be,un=nn(Ct)?Number(Ct):Be(Ct)?Ct:110,dn={width:un};lt==="checkbox"?dn={flexGrow:1}:(F||pe==="column")&&(dn={flexGrow:1});var Wn=Yt=>{var Vt=Object(S.a)({},c);c.schema.type==="boolean"&&c.schema.widget==="checkbox"?Vt.data=!Yt:Vt.data=Yt,M(s,Vt,"data")},jn={};lt==="checkbox"&&pe==="row"&&(jn.marginLeft=Ct);var Lt=Na(Object(S.a)({value:$||N.default,checked:$,disabled:N.disabled,readOnly:N.readOnly,onChange:Wn,schema:N},N.props));return j.a.createElement(j.a.Fragment,null,N.title?j.a.createElement("div",{className:h,style:dn},j.a.createElement("label",{className:"fr-label-title ".concat(lt==="checkbox"||pe==="column"?"no-colon":""),title:Le},vt&&j.a.createElement("span",{className:"fr-label-required"}," *"),j.a.createElement("span",{className:"".concat(F?"b":""," ").concat(pe==="column"?"flex-none":"")},Le),qe&&(ue?j.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":qe},j.a.createElement("i",{className:"fr-tooltip-icon"}),j.a.createElement("div",{className:"fr-tooltip-container"},j.a.createElement("i",{className:"fr-tooltip-triangle"}),qe)):j.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",qe,"\xA0)")),pe!=="row"&&xe&&j.a.createElement("span",{className:"fr-validate"},"validation"))):null,j.a.createElement("div",{className:b,style:jn},j.a.createElement(Dt,Lt,g||null)))},ln=Zt,ot=t("iU8R"),mt=t("dhM6"),Je=t("/MfK"),Ot=t("lfch"),aa=t("aMZS");function An(a){var s=a.$id,c=a.item,h=a.inside,b=h===void 0?!1:h,F=a.children,g=a.style,N=Object(_.useState)(),$=Object(P.default)(N,2),L=$[0],M=$[1],le=ce(),z=le.flatten,Ne=le.onFlattenChange,Ee=le.selected,de=le.hovering,be=Xe(),pe=c.schema,ue=pe.type,xe=Object(_.useRef)(null),Le=Object(va.a)({item:{type:"box",$id:b?0+s:s},end:(at,bt)=>{var he=bt.getDropResult()},collect:at=>({isDragging:at.isDragging()})}),qe=Object(P.default)(Le,3),vt=qe[0].isDragging,lt=qe[1],tt=qe[2],Dt=Object(aa.a)({accept:"box",drop:(at,bt)=>{var he=bt.didDrop();if(!he){console.log(at.dragItem,"tems");var rt=rn({dragId:at.$id,dragItem:at.dragItem,dropId:s,position:L,flatten:z}),it=Object(P.default)(rt,2),Ht=it[0],zt=it[1];Ne(Ht),be({selected:zt})}},hover:(at,bt)=>{var he=bt.isOver({shallow:!0});if(he){var rt=xe.current&&xe.current.getBoundingClientRect(),it=(rt.bottom-rt.top)/2,Ht=bt.getSourceClientOffset(),zt=Ht.y-rt.top;b?M("inside"):(zt<=it&&M("up"),zt>it&&M("down"))}},collect:at=>({isOver:at.isOver({shallow:!0}),canDrop:at.canDrop()})}),kt=Object(P.default)(Dt,2),Ct=kt[0],un=Ct.canDrop,dn=Ct.isOver,Wn=kt[1],jn=un&&dn;tt(Wn(xe));var Lt=at=>{at.stopPropagation();var bt=b?"0"+s:s;be({selected:bt})},Yt=at=>{at.stopPropagation();var bt=Object(S.a)({},z),he="#";try{var rt=bt[s].parent,it=bt[rt].children,Ht=it.indexOf(s);Ht>0?he=it[Ht-1]:he=it[1]||rt}catch(zt){console.log("catch",zt)}delete bt[s],Ne(bt),be({selected:he})},Vt=at=>{at.stopPropagation();var bt=fn(z,s),he=Object(P.default)(bt,2),rt=he[0],it=he[1];Ne(rt),be({selected:it})},oa=()=>{},Zn=()=>{},On=Ee===s&&!b;Ee&&Ee[0]==="0"&&(On=Ee.substring(1)===s&&b);var At=b?"0"+s:s,nt={backgroundColor:de===At?"#ecf5ff":"#fff",opacity:vt?0:1};if(b?nt=Object(S.a)(Object(S.a)({},nt),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):s==="#"?nt=Object(S.a)(Object(S.a)({},nt),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):ue==="object"&&(nt=Object(S.a)(Object(S.a)({},nt),{},{paddingTop:12})),jn&&(b?nt=Object(S.a)(Object(S.a)({},nt),{},{boxShadow:"0 -3px 0 red"}):L==="up"?nt=Object(S.a)(Object(S.a)({},nt),{},{boxShadow:"0 -3px 0 red"}):L==="down"&&(nt=Object(S.a)(Object(S.a)({},nt),{},{boxShadow:"0 3px 0 red"}))),On&&(nt=Object(S.a)(Object(S.a)({},nt),{},{outline:"2px solid #409eff",borderColor:"#fff"})),g&&typeof g=="object"&&(nt=Object(S.a)(Object(S.a)({},nt),g)),s==="#"&&b)return F;var En=pe&&pe.$id&&vn(pe.$id);return En==="#"&&(En=""),j.a.createElement("div",{ref:xe,style:nt,className:"field-wrapper relative w-100",onClick:Lt,onMouseEnter:oa,onMouseLeave:Zn},!b&&On&&s!=="#"&&j.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:lt},j.a.createElement(mt.a,{style:{color:"#fff"}})),!b&&j.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},En),F,On&&!b&&s!=="#"&&j.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},j.a.createElement("div",{className:"pointer",onClick:Yt},j.a.createElement(Je.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),j.a.createElement("div",{className:"pointer",onClick:Vt},j.a.createElement(Ot.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var Kn=a=>{var s=a.id,c=s===void 0?"#":s,h=a.preview,b=h===void 0?!1:h,F=ce(),g=F.flatten,N=F.frProps,$=N===void 0?{}:N,L=$.displayType,M=$.column,le=g[c];if(!le)return null;var z=le.schema,Ne=z.type==="object",Ee=z.type==="array"&&z.enum===void 0,de=Ne||Ee,be=z.width,pe="fr-field w-100 ".concat(de?"fr-field-complex":""),ue="fr-label mb2",xe="fr-content",Le={};switch(!de&&be?Le={width:be,paddingRight:"12px"}:!de&&M>1&&(Le={width:"calc(100% /".concat(M,")"),paddingRight:"12px"}),z.type){case"object":z.title&&(pe+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",ue+=" fr-label-object bg-white absolute ph2 top-upper left-1"),pe+=" fr-field-object",z.title&&(xe+=" ml3");break;case"array":z.title&&!z.enum&&(ue+=" mt2 mb3");break;case"boolean":z.widget!=="switch"&&(z.title&&(ue+=" ml2",ue=ue.replace("mb2","mb0")),xe+=" flex items-center",pe+=" flex items-center flex-row-reverse justify-end");break;default:L==="row"&&(ue=ue.replace("mb2","mb0"))}var qe=z.type==="boolean"&&z.widget!=="switch";L==="row"&&!de&&!qe&&(pe+=" flex items-center",ue+=" flex-shrink-0 fr-label-row",ue=ue.replace("mb2","mb0"),xe+=" flex-grow-1 relative"),L==="row"&&qe&&(xe+=" flex justify-end pr2");var vt={$id:c,item:le,labelClass:ue,contentClass:xe,isComplex:de},lt={children:le.children,preview:b},tt=le.children&&le.children.length>0?j.a.createElement("ul",{className:"flex flex-wrap pl0"},j.a.createElement(Rn,lt)):null;if(b)return j.a.createElement("div",{style:Le,className:pe},j.a.createElement(ln,vt,(Ne||Ee)&&tt));var Dt=Object.keys(g).length<2;return Dt?j.a.createElement(An,{style:Le,$id:c,item:le},j.a.createElement("div",{className:"".concat(pe," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):j.a.createElement(An,{style:Le,$id:c,item:le},j.a.createElement("div",{className:pe},j.a.createElement(ln,vt,(Ne||Ee)&&j.a.createElement(An,{$id:c,item:le,inside:!0},tt||j.a.createElement("div",{className:"h2"})))))},Un=Kn;function ra(a){var s=a.schema,c=Object(Ae.useForm)(),h=ce(),b=h.flatten,F=h.onFlattenChange;return Object(_.useEffect)(()=>{c.setValues(Oe(b))},[]),j.a.createElement(Ae.default,{schema:s,form:c,watch:{"#":g=>{F(pn(b,g),"data")}}})}var sa=J.a.TextArea;function ia(a,s){var c=a.schema,h=a.formData,b=a.onChange,F=a.onSchemaChange,g=a.setGlobal,N=a.userProps,$=N===void 0?{}:N,L=a.frProps,M=L===void 0?{}:L,le=Object(u.default)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),z=Y({showModal:!1,showModal2:!1,schemaForImport:""}),Ne=Object(P.default)(z,2),Ee=Ne[0],de=Ne[1],be=le.preview,pe=$.transformFrom,ue=$.transformTo,xe=$.isNewVersion,Le=$.extraButtons,qe=Le===void 0?[]:Le,vt={};c&&(vt=Rt(c.schema,c.uiSchema));var lt=Pt(vt),tt=pn(lt,h),Dt=function(rt){var it=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",Ht=an(rt),zt=Oe(rt);it==="schema"&&F&&F(Ht),b(zt)},kt=(he,rt,it)=>{tt[he]=rt,Dt(tt,it)},Ct=()=>de({showModal:!Ee.showModal}),un=()=>de({showModal2:!Ee.showModal2}),dn=()=>{g({schema:{schema:{type:"object"}},formData:{},selected:void 0})},Wn=he=>{de({schemaForImport:he.target.value})},jn=()=>{try{var he=pe(jt(Ee.schemaForImport)),rt=!0;he&&he.propsSchema&&(rt=!1);var it=sn(he),Ht=it.schema,zt=Object(u.default)(it,["schema"]);g(la=>({schema:{schema:Ht},formData:{},selected:void 0,isNewVersion:rt,frProps:Object(S.a)(Object(S.a)({},la.frProps),zt)}))}catch(la){x.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}un()},Lt={},Yt="";try{var Vt=an(tt,"#",!0);M&&M.column&&(Vt.column=M.column),M&&M.displayType&&(Vt.displayType=M.displayType),M&&M.showDescIcon&&(Vt.showDescIcon=M.showDescIcon),Lt=ue(Object(S.a)({schema:Vt},M)),xe||(Lt=Wt(Lt)),Yt=JSON.stringify(Lt,null,2)}catch(he){}var oa=()=>{k()(Yt),x.a.info("\u590D\u5236\u6210\u529F"),Ct()},Zn=()=>Lt,On=he=>{try{var rt=he.schema,it=he.propsSchema,Ht=he.uiSchema,zt=Object(u.default)(he,["schema","propsSchema","uiSchema"]),la={schema:rt||it},$a=!0;!rt&&it&&($a=!1),g(ua=>Object(S.a)(Object(S.a)({},ua),{},{schema:la,formData:{},selected:void 0,isNewVersion:$a,frProps:Object(S.a)(Object(S.a)({},ua.frProps),zt)}))}catch(ua){console.error(ua)}},At=()=>{k()(Yt)};Object(_.useImperativeHandle)(s,()=>({getValue:Zn,setValue:On,copyValue:At}));var nt=Object(S.a)({flatten:tt,onFlattenChange:Dt,onItemChange:kt,userProps:$,frProps:M},le),En=Array.isArray(qe)?qe:[],at=En.filter(he=>he===!0||he===!1),bt=En.filter(he=>gt(he)&&he.text);return j.a.createElement(d.Provider,{value:g},j.a.createElement(Kt.Provider,{value:nt},j.a.createElement("div",{className:"fr-generator-container"},j.a.createElement(se,null),j.a.createElement("div",{className:"mid-layout pr2"},j.a.createElement("div",{className:"mv2 mh1"},at[0]!==!1&&j.a.createElement(B.a,{className:"mr2 mb1",onClick:()=>{g({preview:!be,selected:"#"})}},be?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),at[1]!==!1&&j.a.createElement(B.a,{className:"mr2",onClick:dn},"\u6E05\u7A7A"),at[2]!==!1&&j.a.createElement(B.a,{className:"mr2",onClick:un},"\u5BFC\u5165"),at[3]!==!1&&j.a.createElement(B.a,{type:"primary",className:"mr2",onClick:Ct},"\u5BFC\u51FAschema"),bt.map((he,rt)=>j.a.createElement(B.a,Object(ge.default)({key:rt.toString(),className:"mr2"},he),he.text||he.children))),j.a.createElement("div",{className:"dnd-container"},j.a.createElement("div",{style:{height:be?33:0}}),be?j.a.createElement(ra,{schema:Lt.schema}):j.a.createElement(Un,null))),j.a.createElement(ct,{globalProps:M}),j.a.createElement(pt.a,{visible:Ee.showModal,onOk:oa,onCancel:Ct,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},j.a.createElement("div",{className:"mt3"},j.a.createElement(sa,{style:{fontSize:12},value:Yt,autoSize:{minRows:10,maxRows:30}}))),j.a.createElement(pt.a,{visible:Ee.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:jn,onCancel:un},j.a.createElement("div",{className:"mt3"},j.a.createElement(sa,{style:{fontSize:12},value:Ee.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:Wn,autoSize:{minRows:10,maxRows:30}}))))))}var ya=Object(_.forwardRef)(ia);ya.defaultProps={labelWidth:120};var Qa=ya,ba=a=>a,ja=a=>a,Ga=t("w5pM");function Ta(a){return j.a.createElement("div",{className:"flex flex-column"},j.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},j.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,j.a.createElement(B.a,{size:"small",className:"self-end",type:"dashed",icon:j.a.createElement(Je.a,null)},"\u5220\u9664")),j.a.createElement(B.a,{size:"small",className:"self-end",icon:j.a.createElement(Ga.a,null)},"\u6DFB\u52A0"))}var Pa=t("xwS/"),rr=t("4l2o"),Ua=t("k/c8"),wa={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function Xa(a,s){var c=a.defaultValue,h=a.templates,b=a.submit,F=a.transformer,g=a.extraButtons,N=a.settings,$=a.commonSettings,L=a.globalSettings,M=a.widgets,le=M===void 0?{}:M,z=a.mapping,Ne=z===void 0?{}:z,Ee=ba,de=ja;F&&(typeof F.from=="function"&&(Ee=F.from),typeof F.to=="function"&&(de=F.to));var be=s||Object(_.useRef)(),pe=Y({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),ue=Object(P.default)(pe,2),xe=ue[0],Le=ue[1];Object(_.useEffect)(()=>{var At=c?Ee(c):wa;At&&At.propsSchema?Le({isNewVersion:!1}):Le({isNewVersion:!0}),Le({schema:sn(At),formData:At&&At.formData||{}})},[c]);var qe=xe.formData,vt=xe.frProps,lt=xe.hovering,tt=xe.isNewVersion,Dt=xe.preview,kt=xe.schema,Ct=xe.selected,un=vt.displayType,dn=un==="row",Wn=Object(S.a)(Object(S.a)({},vt),{},{showDescIcon:dn}),jn=At=>{Le({formData:At}),a.onChange&&a.onChange(At)},Lt=At=>{var nt=Object(S.a)({},kt);nt.schema=At,Le({schema:nt}),a.onSchemaChange&&setTimeout(()=>{if(!!be.current){var En=be.current.getValue();a.onSchemaChange(En)}},0)},Yt=Object(S.a)(Object(S.a)(Object(S.a)({},Ae.mapping),Ne),{},{array:"listEditor"}),Vt=Object(S.a)(Object(S.a)(Object(S.a)({},Ae.widgets),le),{},{listEditor:Ta}),oa={preview:Dt,mapping:Yt,widgets:Vt,selected:Ct,hovering:lt},Zn={templates:h,submit:b,transformFrom:Ee,transformTo:de,isNewVersion:tt,extraButtons:g,settings:N,commonSettings:$,globalSettings:L},On=Object(S.a)(Object(S.a)({schema:kt,formData:qe,onChange:jn,setGlobal:Le,onSchemaChange:Lt},oa),{},{userProps:Zn,frProps:Wn});return j.a.createElement(Qa,Object(ge.default)({ref:be},On))}var Ia=Object(_.forwardRef)(Xa),Ba=t("trko"),Za=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,h=s.type==="object"&&s.properties,b=s.type==="array"&&s.items&&s.items.properties,F=h||b;if(F){var L=wt(s);L.map(M=>{h&&(s.properties[M.name]=a(M.schema,s)),b&&(s.items.properties[M.name]=a(M.schema,s))})}else if(s.enum&&Array.isArray(s.enum)){var g=s.enum;if(gt(g[0])&&g[0].label!==void 0&&g[0].value!==void 0){var N=g.map(M=>M.label),$=g.map(M=>M.value);s.enum=$,s.enumNames=N}}return s["x-component"]&&(s.widget=s["x-component"]),s["x-component-props"]&&(s.props=s["x-component-props"]),c&&s.required&&(c.required&&Array.isArray(c.required)?c.required.push(s.name):c.required=[s.name]),delete s.key,delete s.name,delete s.required,delete s["x-component"],delete s["x-component-props"],s},La=a=>{var s=Za(a);return{schema:s}},Xn=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,b=s.type==="object"&&s.properties,F=s.type==="array"&&s.items&&s.items.properties,g=b||F;if(g){var $=wt(s);$.map(L=>{b&&(s.properties[L.name]=a(L.schema,s,L.name)),F&&(s.items.properties[L.name]=a(L.schema,s,L.name))})}else if(s.enum&&Array.isArray(s.enum)&&s.enumNames&&Array.isArray(s.enumNames)){var N=s.enum.map((L,M)=>({value:L,label:s.enumNames[M]}));s.enum=N}return s.widget&&(s["x-component"]=s.widget),s.props&&(s["x-component-props"]=s.props),delete s.widget,delete s.props,delete s.enumNames,h&&(s.name=h,s.key=h),c&&h&&c.required&&Array.isArray(c.required)&&c.required.indexOf(h)>-1&&(s.required=!0),s},Nn=a=>{var s=a.schema;return Xn(s)},Oa=(a,s)=>j.a.createElement(Z.a,{backend:E.a,context:window},j.a.createElement(Ia,Object(ge.default)({ref:s},a))),ka=G.default=Object(_.forwardRef)(Oa)},refC:function(ke,G,t){"use strict";t.r(G),t.d(G,"widgets",function(){return Ma}),t.d(G,"mapping",function(){return Ot}),t.d(G,"useForm",function(){return tr}),t.d(G,"connectForm",function(){return Wr}),t.d(G,"createWidget",function(){return Nn});var ge=t("Saan"),_=t("vgIT"),j=t.n(_),Z=t("0Owb"),E=t("k1fw"),S=t("PpiC"),P=t("q1tI"),d=t.n(P),Kt=t("Pv/L"),Xe=t("tJVT"),ce=t("7EGn"),Y=t("XIp8"),Tt=t("vEhQ");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function Cn(e){var n=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:n.test(e)}function Et(e,n){if(n)return!1;if(e.widget==="checkbox")return!0;if(e&&e.type==="boolean")return e.enum?!1:e.widget===void 0}function Jn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function en(e){if(typeof e=="string"){var n=e.split(".");return n.length===1?"#":(n.pop(),n.join("."))}return"#"}function xt(e,n){if(n==="#"||!n)return e||{};if(typeof n=="string")return Object(ce.a)(e,n);console.error("path has to be a string")}function Yn(e){var n,r;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,i=e.match(o);return i?(n=e.replace(o,"[]"),r=i.map(m=>Number(m.substring(1,m.length-1)))):n=e,{id:n,dataIndex:r}}function tn(e,n){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var r=e;return Array.isArray(n)&&n.forEach(o=>{r=r.replace(/\[\]/,"[".concat(o,"]"))}),Jn(r)}function pt(e){return e.type==="array"&&e.items&&e.enum===void 0}function Ft(e){return e.type==="object"&&e.properties}function ae(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=l(e),m=n;i.$id||(i.$id=m);var f=[];Ft(i)&&Object.entries(i.properties).forEach(v=>{var p=Object(Xe.default)(v,2),D=p[0],I=p[1],R=pt(I)?D+"[]":D,T=m==="#"?R:m+"."+R;f.push(T),ae(I,T,m,o)}),pt(i)&&Object.entries(i.items.properties).forEach(v=>{var p=Object(Xe.default)(v,2),D=p[0],I=p[1],R=pt(I)?D+"[]":D,T=m==="#"?R:m+"."+R;f.push(T),ae(I,T,m,o)});var O=Array.isArray(i.rules)?[...i.rules]:[];return["boolean","function","string"].indexOf(typeof i.required)>-1&&O.push({required:i.required}),i.type&&(o[m]={parent:r,schema:i,children:f,rules:O}),o}function B(e,n){return e.indexOf(n)>-1}var y=e=>B(Object.prototype.toString.call(e),"Object"),l=Y.a;function x(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function u(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function A(e,n){if(e===void 0&&n===void 0)return!0;if(e===void 0||n===void 0)return!1;if(e===null&&n===null)return!0;if(e===null||n===null)return!1;if(e.constructor!==n.constructor)return!1;if(e.constructor===Array){if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(e[r].constructor===Array||e[r].constructor===Object){if(!A(e[r],n[r]))return!1}else if(e[r]!==n[r])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var i=Object.keys(e)[o];if(e[i]&&typeof e[i]!="number"&&(e[i].constructor===Array||e[i].constructor===Object)){if(!A(e[i],n[i]))return!1}else if(e[i]!==n[i])return!1}}else if(e.constructor===String||e.constructor===Number)return e===n;return!0}function w(e){var n;switch(e){case"date":n="YYYY-MM-DD";break;case"time":n="HH:mm:ss";break;case"dateTime":n="YYYY-MM-DD HH:mm:ss";break;case"week":n="YYYY-w";break;case"year":n="YYYY";break;case"quarter":n="YYYY-Q";break;case"month":n="YYYY-MM";break;default:n="YYYY-MM-DD"}return n}function J(e){return e.find((n,r,o)=>r!==o.findIndex(i=>JSON.stringify(n)===JSON.stringify(i)))}function W(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=te(e),o=r.map(f=>{var O=f.name,v=f.schema,p=v.type,D=v.enum,I=v.properties,R=v.items,T=p==="object"&&I,V=p==="array"&&R&&!D,H=O&&n[f.name];if(!H)return f;if(V){var ie=W(R,H.items||{});return Object(E.a)(Object(E.a)({},f),{},{schema:Object(E.a)(Object(E.a)(Object(E.a)({},f.schema),H),{},{items:ie})})}if(T){var X=W(f.schema,H);return Object(E.a)(Object(E.a)({},f),{},{schema:X})}return Object(E.a)(Object(E.a)({},f),{},{schema:Object(E.a)(Object(E.a)({},f.schema),H)})}),i={};o.forEach(f=>{i[f.name]=f.schema});var m={};return Object.keys(n).forEach(f=>{typeof f=="string"&&f.substring(0,3)==="ui:"&&(m[f]=n[f])}),k(i)?Object(E.a)(Object(E.a)({},e),m):Object(E.a)(Object(E.a)(Object(E.a)({},e),m),{},{properties:i})}function k(e){return Object.keys(e).length===0}function te(e){if(!e)return[];var n=e.properties,r=e.items,o=e.type;if(!n&&!r)return[];var i={};return o==="object"&&(i=n),o==="array"&&(i=r),Object.keys(i).map(m=>({schema:i[m],name:m}))}function U(){}var me=e=>Function('"use strict";return ('+e+")")(),Ie=(e,n,r)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(r),`;
    const formData = `).concat(JSON.stringify(n),`;
    return (`).concat(e,")"))();function ve(e){if(typeof e!="string")return!1;var n=/^{{(.+)}}$/,r=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(n)&&!e.match(r)&&!e.match(o))}function je(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=en(r),i=xt(n,o)||{};if(typeof e=="string"){var m=e.substring(2,e.length-2),f=/formData.([a-zA-Z0-9.$_\[\]]+)/g,O=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,v=`
    return (`.concat(m.replaceAll(f,(p,D)=>JSON.stringify(xt(n,D))).replaceAll(O,(p,D)=>JSON.stringify(xt(i,D))),")");try{return Function(v)()}catch(p){return e}}else return e}var fe=function e(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return y(n)?Object.keys(n).some(o=>{var i=n[o];return typeof i=="string"?ve(i):!r&&y(i)?e(i,!1):!1}):!1},Ye=(e,n,r)=>{var o=l(e);return Object.keys(o).forEach(i=>{var m=o[i];if(ve(m)&&(o[i]=je(m,n,r)),typeof i=="string"&&i.toLowerCase().indexOf("props")>-1){var f=o[i];y(f)&&Object.keys(f).forEach(O=>{o[i][O]=je(f[O],n,r)})}}),o};function re(e){return Object.keys(e).some(n=>typeof e[n]=="function"?!0:typeof e[n]=="string"?ve(e[n]):typeof e[n]=="object"?re(e[n]):!1)}var ye=(e,n,r)=>{try{var o=r[n];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var i=r[o.parent].schema;return i[e]!==void 0?i[e]:ye(e,o.parent,r)}}catch(m){return}},He=()=>{var e=localStorage.getItem("SAVES");if(e)try{var n=JSON.parse(e),r=n.length;if(r)return r+1}catch(o){return 1}else return 1};function ht(e){return Function('"use strict";return ('+e+")")()}function gt(e){if(!e)return[];var n=e.properties,r=e.items,o=e.type;if(!n&&!r)return[];var i={};return o==="object"&&(i=n),o==="array"&&(i=r.properties),Object.keys(i).map(m=>({schema:i[m],name:m}))}var $t=e=>{if(e&&e.propsSchema){var n=e.propsSchema,r=Object(S.default)(e,["propsSchema"]);return Object(E.a)({schema:n},r)}return e},nn=e=>{if(e&&e.schema){var n=e.schema,r=Object(S.default)(e,["schema"]);return Object(E.a)({propsSchema:n},r)}return e},Be=e=>{if(!!e){var n=e&&e.items&&e.items.enum,r=e&&e.enum;return n||r}},Ve=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(n)?n:r},yt=e=>{var n="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(n).test(e))};function cn(e){var n=arguments.length<=1?void 0:arguments[1];return n&&n.target&&e in n.target?n.target[e]:n}var Rt=e=>{try{var n=e.split("."),r=n.slice(-1)[0];return r}catch(o){return console.error(o,"getKeyFromPath"),""}},Ut=(e,n)=>{if(typeof e=="boolean")return e?"yes":"no";if(Ft(n)||pt(n))return"-";if(Array.isArray(n.enum)&&Array.isArray(n.enumNames))try{return n.enumNames[n.enum.indexOf(e)]}catch(r){return e}return e},Xt=e=>{var n={};return y(e)?Object.keys(e).forEach(r=>{n[r]=Xt(e[r])}):Array.isArray(e)?n=e.filter(r=>!!(r&&JSON.stringify(r)!=="{}")):n=e,n},Pn=e=>{var n=e.schema,r=e.isRequired,o=r===void 0?!0:r,i={},m={};if(n.hidden===!0)return i;if(Ft(n))i.type="object",o&&n.required===!0&&(i.required=!0),i.fields={},Object.keys(n.properties).forEach(R=>{var T=n.properties[R];Array.isArray(n.required)&&n.required.indexOf(R)>-1&&(T.required=!0),i.fields[R]=Pn({schema:T,isRequired:o})});else if(pt(n))i.type="array",o&&n.required===!0&&(i.required=!0),n.min&&(i.min=n.min),n.max&&(i.max=n.max),i.defaultField={type:"object",fields:{}},Object.keys(n.items.properties).forEach(R=>{var T=n.items.properties[R];Array.isArray(n.required)&&n.required.indexOf(R)>-1&&(T.required=!0),i.defaultField.fields[R]=Pn({schema:T,isRequired:o})});else{var f=R=>n.type?Object(E.a)(Object(E.a)({},R),{},{type:n.type}):R.pattern&&typeof R.pattern=="string"?Object(E.a)(Object(E.a)({},R),{},{pattern:new RegExp(R.pattern)}):R,O=n.required,v=Object(S.default)(n,["required"]);switch(["type","pattern","min","max","len"].forEach(R=>{Object.keys(v).indexOf(R)>-1&&(m[R]=v[R])}),n.type){case"range":m.type="array";break;case"html":m.type="string";break;default:break}switch(n.format){case"email":case"url":m.type=n.format;break;default:break}var p;if(o&&n.required===!0&&(p={required:!0}),n.rules)if(Array.isArray(n.rules)){var D=[];n.rules.forEach(R=>{R.required===!0?o&&(p=R):D.push(f(R))}),i=[m,...D]}else y(n.rules)?i=[m,f(n.rules)]:i=m;else i=m;if(p&&(Array.isArray(i)?i.push(p):y(i)&&(i=[i,p])),n.format==="image"){var I={validator:(R,T)=>{var V=/([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;return T?!!V.exec(T)||Cn(T):!0},message:"${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage"};Array.isArray(i)?i.push(I):y(i)&&(i=[i,I])}}return i},wn=e=>{var n=e.split(".");return n.map(r=>isNaN(Number(r))?r:"[".concat(r,"]")).reduce((r,o)=>o[0]==="["||r===""?r+o:r+"."+o,"")},In=(e,n)=>{for(var r=e.split(".");r.length>0;){var o=r,i=Object(Kt.a)(o),m=i[0],f=i.slice(1);m=m.split("[")[0];var O=void 0;if(Ft(n)?O=n.properties[m]:pt(n)&&(O=n.items.properties[m]),r=f,O)return In(f.join("."),O);var v={required:!1};if(n.required===!0&&(v.required=!0),n.rules){var p=n.rules.find(D=>D.required);p&&(v=p)}return v}},mn=e=>{var n={};return Ft(e)?Object.keys(e.properties).forEach(r=>{var o=e.properties[r],i=mn(o);n[r]=i}):e.default!==void 0?n=l(e.default):e.type==="boolean"?n=!1:n=void 0,n},Bn=(e,n)=>{if(typeof e!="string")return"";if(!n)return e;if(e=e.replace("${title}",n.title),e=e.replace("${type}",n.format||n.type),n.min&&(e=e.replace("${min}",n.min)),n.max&&(e=e.replace("${max}",n.max)),n.rules){var r=n.rules.find(f=>f.min!==void 0);r&&(e=e.replace("${min}",r.min));var o=n.rules.find(f=>f.max!==void 0);o&&(e=e.replace("${max}",o.max));var i=n.rules.find(f=>f.len!==void 0);i&&(e=e.replace("${len}",i.len));var m=n.rules.find(f=>f.pattern!==void 0);m&&(e=e.replace("${pattern}",m.pattern))}return e},Pt=(e,n)=>{var r=l(e);if(r=n(r),Ft(r)){var o=[];Array.isArray(r.required)&&(o=r.required,delete r.required),Object.keys(r.properties).forEach(i=>{var m=r.properties[i];o.indexOf(i)>-1&&(m.required=!0),r.properties[i]=Pt(m,n)})}else pt(r)&&Object.keys(r.items.properties).forEach(i=>{var m=r.items.properties[i];r.items.properties[i]=Pt(m,n)});return r},vn=e=>Pt(e,Ln),Ln=e=>{try{if(e.rules=e.rules||[],e.props=e.props||{},e["ui:options"]&&(e.props=e["ui:options"],delete e["ui:options"]),e.pattern){var n={pattern:e.pattern};e.message&&e.message.pattern&&(n.message=e.message.pattern),e.rules.push(n),delete e.pattern,delete e.message}return e.minLength&&(e.min=e.minLength,delete e.minLength),e.maxLength&&(e.max=e.maxLength,delete e.maxLength),e.minItems&&(e.min=e.minItems,delete e.minItems),e.maxItems&&(e.max=e.maxItems,delete e.maxItems),e.step&&(e.props.step=e.step,delete e.step),e["ui:className"]&&(e.className=e["ui:className"],delete e["ui:className"]),e["ui:hidden"]&&(e.hidden=e["ui:hidden"],delete e["ui:hidden"]),e["ui:readonly"]&&(e.readOnly=e["ui:readonly"],delete e["ui:readonly"]),e["ui:disabled"]&&(e.disabled=e["ui:disabled"],delete e["ui:disabled"]),e["ui:width"]&&(e.width=e["ui:width"],delete e["ui:width"]),e["ui:labelWidth"]&&(e.labelWidth=e["ui:labelWidth"],delete e["ui:labelWidth"]),e.rules&&e.rules.length===0&&delete e.rules,e}catch(r){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",r),e}},ca=(e,n)=>{var r=parseRootValue(e),o=replaceParseValue(r)},an=e=>{if(typeof e!="string")return!1;var n=/^{{(function.+)}}$/,r=/^{{(.+=>.+)}}$/;return e.match(n)?e.match(n)[1]:e.match(r)?e.match(r)[1]:!1},qn=function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return y(n)?(n.theme&&r[n.theme]&&(o=Object(E.a)(Object(E.a)({},n),r[n.theme])),Object.keys(n).forEach(i=>{o[i]=e(n[i],r)})):o=n,o},fn=e=>Array.isArray(e)?e.map(n=>n&&y(n)?fn(n):n).filter(n=>n!=null):y(e)?Object.entries(e).map(n=>{var r=Object(Xe.default)(n,2),o=r[0],i=r[1];return[o,i&&y(i)?fn(i):i]}).reduce((n,r)=>{var o=Object(Xe.default)(r,2),i=o[0],m=o[1];return m==null||(n[i]=m),n},{}):e,ma=(e,n)=>(Object.keys(n).forEach(r=>{var o=n[r].schema&&n[r].schema.hidden===!0;Object(ce.a)(e,r)!==void 0&&o&&Object(Tt.a)(e,r,void 0)}),e),$n=Object(P.createContext)(()=>{}),rn=Object(P.createContext)({}),pn=Object(P.createContext)({}),Mn=()=>Object(P.useContext)($n),Oe=()=>Object(P.useContext)(rn),We=()=>Object(P.useContext)(pn),jt=e=>Object(P.useReducer)((n,r)=>Object(E.a)(Object(E.a)({},n),r),e);function wt(e,n,r){var o=Object(P.useRef)();Object(P.useEffect)(()=>{o.current=e},[e]);var i=Object(P.useRef)();return Object(P.useEffect)(()=>{if(!r)return;function m(){o&&o.current&&o.current()}if(m(),n!==null)return i.current=setInterval(m,n),()=>clearInterval(i.current)},[n,r]),()=>clearInterval(i.current)}function Hn(e){var n=Object(P.useRef)();return Object(P.useEffect)(()=>{n.current=e},[e]),n.current}var _n=e=>{var n=Object(P.useState)(!1),r=Object(Xe.default)(n,2),o=r[0],i=r[1],m;try{m=localStorage.getItem(e)}catch(f){}return m||(i(!0),localStorage.setItem(e,JSON.stringify(!0))),o},Qn=()=>{var e=Object(P.useState)(!1),n=Object(Xe.default)(e,2),r=n[0],o=n[1],i=()=>o(!r);return[r,i]},ea=e=>{var n=Object(P.useState)(e),r=Object(Xe.default)(n,2),o=r[0],i=r[1];return[o,i]},Vn=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var p=localStorage.getItem(r);if(p)try{return JSON.parse(p)}catch(D){return n}return n},i=Object(P.useState)(o()),m=Object(Xe.default)(i,2),f=m[0],O=m[1],v=p=>{O(p),localStorage.setItem(r,JSON.stringify(p))};return[f,v]},hn=t("SiV7"),sn=t("MaXC"),Wt=t("4IMT"),Jt=t.n(Wt),Na=t("eOfH"),va=t("h0/l"),Gn=t.n(va),ta=t("/MfK"),na=t("lfch"),C=e=>{var n=e.schema,r=e.displayList,o=r===void 0?[]:r,i=e.listData,m=e.changeList,f=e.deleteItem,O=e.addItem,v=e.copyItem,p=e.getFieldsProps,D=n.props,I=D===void 0?{}:D,R=n.itemProps;return d.a.createElement("div",{className:"fr-list-1"},o.map((T,V)=>{var H=p(V);return H.displayType="inline",I.hideTitle&&(H.hideTitle=!0),d.a.createElement("div",{key:V,style:{display:"flex"}},d.a.createElement(da,H),d.a.createElement("div",{style:{marginTop:6}},d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>f(V),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement(ta.a,{style:{fontSize:17,marginLeft:8}})),d.a.createElement(na.a,{style:{fontSize:15,marginLeft:8},onClick:()=>v(V)})))}),d.a.createElement("div",{style:{marginTop:o.length>0?0:8}},d.a.createElement(Jt.a,{type:"dashed",onClick:O},"\u65B0\u589E\u4E00\u6761"),Array.isArray(I.buttons)?I.buttons.map((T,V)=>{var H=T.callback,ie=T.text,X=T.html,Q=()=>{console.log({value:i,onChange:m,schema:n})};return typeof window[H]=="function"&&(Q=()=>{window[H]({value:i,onChange:m,schema:n})}),d.a.createElement(Jt.a,{key:V.toString(),style:{marginLeft:8},type:"dashed",onClick:Q},d.a.createElement("span",{dangerouslySetInnerHTML:{__html:X||ie}}))}):null))},q=C,se=t("lfLe"),Re=t("Cp9S"),Te=t.n(Re),ze=e=>{var n=e.displayList,r=n===void 0?[]:n,o=e.listData,i=e.changeList,m=e.schema,f=e.deleteItem,O=e.copyItem,v=e.addItem,p=e.displayType,D=e.getFieldsProps,I=m.props,R=I===void 0?{}:I,T=m.itemProps;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"fr-card-list"},r.map((V,H)=>{var ie=D(H);return ie.displayType=p,d.a.createElement("div",{className:"fr-card-item ".concat(p==="row"?"fr-card-item-row":""),key:H},d.a.createElement("div",{className:"fr-card-index"},H+1),d.a.createElement(da,ie),d.a.createElement(Te.a,{direction:"horizontal",className:"fr-card-toolbar"},d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>f(H),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement(ta.a,{style:{fontSize:17,marginLeft:8}})),d.a.createElement(na.a,{style:{fontSize:16,marginLeft:8},onClick:()=>O(H)})))})),d.a.createElement("div",{style:{marginTop:r.length>0?0:8}},d.a.createElement(Jt.a,{type:"dashed",onClick:v},"\u65B0\u589E\u4E00\u6761"),Array.isArray(R.buttons)?R.buttons.map((V,H)=>{var ie=V.callback,X=V.text,Q=V.html,K=()=>{console.log({value:o,onChange:i,schema:m})};return typeof window[ie]=="function"&&(K=()=>{window[ie]({value:o,onChange:i,schema:m})}),d.a.createElement(Jt.a,{key:H.toString(),style:{marginLeft:8},type:"dashed",onClick:K},d.a.createElement("span",{dangerouslySetInnerHTML:{__html:Q||X}}))}):null))},Ke=ze,Ae=t("zmYW"),_e=t("DtFj"),ut=t.n(_e),It=120,dt=e=>{var n=e.displayList,r=n===void 0?[]:n,o=e.dataIndex,i=e.children,m=e.deleteItem,f=e.addItem,O=e.flatten,v=e.schema,p=e.listData,D=e.changeList,I=v.props,R=I===void 0?{}:I,T=v.itemProps,V=r.map((ie,X)=>({index:X})),H=i.map(ie=>{var X=O[ie],Q=X&&X.schema||{};return{dataIndex:ie,title:Q.required?d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:"fr-label-required"}," *"),d.a.createElement("span",null,Q.title)):Q.title,width:It,render:(K,Ce,Se)=>{var $e=[...o,Ce.index];return d.a.createElement(da,{hideTitle:!0,displayType:"inline",key:Se.toString(),id:ie,dataIndex:$e})}}});return H.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(ie,X,Q)=>d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>m(Q),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement("a",null,"\u5220\u9664"))}),d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"w-100 mb2 tr"},d.a.createElement(Jt.a,{type:"primary",size:"small",onClick:f},"\u65B0\u589E"),Array.isArray(R.buttons)?R.buttons.map((ie,X)=>{var Q=ie.callback,K=ie.text,Ce=ie.html,Se=()=>{console.log({value:p,onChange:D,schema:v})};return typeof window[Q]=="function"&&(Se=()=>{window[Q]({value:p,onChange:D,schema:v})}),d.a.createElement(Jt.a,{key:X.toString(),style:{marginLeft:8},size:"small",onClick:Se},d.a.createElement("span",{dangerouslySetInnerHTML:{__html:Ce||K}}))}):null),d.a.createElement(ut.a,{scroll:{x:"max-content"},columns:H,dataSource:V,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},zn=dt,gn=t("dc+4"),yn=t("Btem"),bn=t.n(yn),Fn=t("Oxum"),on=e=>{var n=e.message,r=e.schema,o=e.hideValidation,i="";return typeof n=="string"&&(i=n),Array.isArray(n)&&(i=n[0]||""),i=Bn(i,r),!i&&o?null:d.a.createElement("div",{className:"error-message"},i)},Qe=on,Bt=120,St=e=>{var n=e.displayList,r=n===void 0?[]:n,o=e.dataPath,i=e.children,m=e.deleteItem,f=e.addItem,O=e.moveItemDown,v=e.moveItemUp,p=e.flatten,D=e.errorFields,I=e.getFieldsProps,R=e.schema,T=e.changeList,V=e.listData,H=R.props,ie=H===void 0?{}:H,X=R.itemProps,Q=Object(P.useRef)(-1),K=jt({showDrawer:!1}),Ce=Object(Xe.default)(K,2),Se=Ce[0],$e=Ce[1],Fe=Se.showDrawer,oe=r.map((ee,Ge)=>Object(E.a)(Object(E.a)({},ee),{},{$idx:Ge})),De=i.map(ee=>{var Ge=p[ee],Pe=Ge&&Ge.schema||{},we=Rt(ee);return{dataIndex:we,title:Pe.required?d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:"fr-label-required"}," *"),d.a.createElement("span",null,Pe.title)):Pe.title,width:Bt,render:(xn,qt)=>{var Sn=tn(ee,[qt.$idx]),_t=D.find(Tn=>Tn.name==Sn)||{};return d.a.createElement("div",null,d.a.createElement("div",null,Ut(xn,Pe)),_t.error&&d.a.createElement(Qe,{message:_t.error,schema:Pe}))}}});De.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(ee,Ge,Pe)=>{var we=ee&&ee.$idx||0;return d.a.createElement(Te.a,null,d.a.createElement("a",{onClick:()=>Ue(we)},"\u7F16\u8F91"),d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>m(we),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement("a",null,"\u5220\u9664")))}});var Ze=I(Q.current),Ue=ee=>{Q.current=ee,$e({showDrawer:!0})},ft=()=>{Q.current=-1,$e({showDrawer:!1})},st=()=>{var ee=f();Ue(ee)};return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"w-100 mb2 tr"},d.a.createElement(Jt.a,{type:"primary",size:"small",onClick:st},"\u65B0\u589E"),Array.isArray(ie.buttons)?ie.buttons.map((ee,Ge)=>{var Pe=ee.callback,we=ee.text,xn=ee.html,qt=()=>{console.log({value:V,onChange:T,schema:R})};return typeof window[Pe]=="function"&&(qt=()=>{window[Pe]({value:V,onChange:T,schema:R})}),d.a.createElement(Jt.a,{key:Ge.toString(),style:{marginLeft:8},size:"small",onClick:qt},d.a.createElement("span",{dangerouslySetInnerHTML:{__html:xn||we}}))}):null),d.a.createElement(bn.a,{width:"600",title:"\u7F16\u8F91",placement:"right",onClose:ft,visible:Fe,destroyOnClose:!0},d.a.createElement("div",{className:"fr-container"},d.a.createElement(da,Ze))),d.a.createElement(ut.a,{scroll:{x:"max-content"},columns:De,dataSource:oe,rowClassName:(ee,Ge)=>{var Pe=ee&&ee.$idx,we=D.find(xn=>xn.name.indexOf("".concat(o,"[").concat(Pe,"]"))>-1);return we?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},et=St,ct=e=>{var n=e.parentId,r=e.schema,o=r===void 0?{}:r,i=e.dataIndex,m=i===void 0?[]:i,f=e.children,O=f===void 0?[]:f,v=e.errorFields,p=e.displayType,D=Oe(),I=D.formData,R=D.flatten,T=Mn(),V=T.onItemChange,H=T.removeTouched,ie="list";try{ie=o.widget}catch(ee){}var X=tn(n,m),Q;typeof X=="string"&&(Q=Object(ce.a)(I,X));var K=Array.isArray(Q)?Q:[{}],Ce=ee=>{V(X,ee)},Se=()=>{var ee=[...K,{}],Ge=ee.length-1;return V(X,ee),Ge},$e=ee=>{var Ge=K[ee],Pe=[...K.slice(0,ee),Ge,...K.slice(ee)];V(X,Pe)},Fe=ee=>{var Ge=K.filter((Pe,we)=>we!==ee);V(X,Ge),H("".concat(X,"[").concat(ee,"]"))},oe=ee=>{if(ee!==0){var Ge=K[ee],Pe=K[ee-1],we=K;we[ee]=Pe,we[ee-1]=Ge,V(X,we)}},De=ee=>{if(!(ee>=K.length-1)){var Ge=K[ee],Pe=K[ee+1],we=K;we[ee]=Pe,we[ee+1]=Ge,V(X,we)}},Ze={type:"object",properties:{},props:o.props||{},$id:o.$id},Ue={schema:Ze,children:O},ft=(ee,Ge)=>Object(E.a)({_item:Ue,dataIndex:[...m,ee]},Ge),st={displayList:K,changeList:Ce,schema:o,dataPath:X,dataIndex:m,children:O,deleteItem:Fe,addItem:Se,copyItem:$e,moveItemDown:De,moveItemUp:oe,listData:Q,flatten:R,errorFields:v,displayType:p,getFieldsProps:ft};switch(ie){case"list0":return d.a.createElement(Ke,st);case"list1":return d.a.createElement(q,st);case"list2":return d.a.createElement(zn,st);case"list3":return d.a.createElement(et,st);default:return d.a.createElement(Ke,st)}},Mt=ct,Rn=e=>{var n=e.children,r=n===void 0?[]:n,o=e.dataIndex,i=o===void 0?[]:o,m=e.displayType,f=e.hideTitle;return d.a.createElement(d.a.Fragment,null,r.map((O,v)=>{var p={displayType:m,id:O,dataIndex:i,hideTitle:f};return d.a.createElement(da,Object(Z.default)({key:v.toString()},p))}))},Zt=Rn;function ln(e,n,r){var o=this,i=Object(P.useRef)(null),m=Object(P.useRef)(0),f=Object(P.useRef)(null),O=Object(P.useRef)([]),v=Object(P.useRef)(),p=Object(P.useRef)(),D=Object(P.useRef)(e),I=Object(P.useRef)(!0);D.current=e;var R=!n&&n!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0,r=r||{};var T=!!r.leading,V="trailing"in r?!!r.trailing:!0,H="maxWait"in r,ie=H?Math.max(+r.maxWait||0,n):null;Object(P.useEffect)(()=>(I.current=!0,()=>{I.current=!1}),[]);var X=Object(P.useMemo)(()=>{var Q=oe=>{var De=O.current,Ze=v.current;return O.current=v.current=null,m.current=oe,p.current=D.current.apply(Ze,De)},K=(oe,De)=>{R&&cancelAnimationFrame(f.current),f.current=R?requestAnimationFrame(oe):setTimeout(oe,De)},Ce=oe=>{if(!I.current)return!1;var De=oe-i.current,Ze=oe-m.current;return!i.current||De>=n||De<0||H&&Ze>=ie},Se=oe=>(f.current=null,V&&O.current?Q(oe):(O.current=v.current=null,p.current)),$e=()=>{var oe=Date.now();if(Ce(oe))return Se(oe);if(!!I.current){var De=oe-i.current,Ze=oe-m.current,Ue=n-De,ft=H?Math.min(Ue,ie-Ze):Ue;K($e,ft)}},Fe=function(){for(var De=Date.now(),Ze=Ce(De),Ue=arguments.length,ft=new Array(Ue),st=0;st<Ue;st++)ft[st]=arguments[st];if(O.current=ft,v.current=o,i.current=De,Ze){if(!f.current&&I.current)return m.current=i.current,K($e,n),T?Q(i.current):p.current;if(H)return K($e,n),Q(i.current)}return f.current||K($e,n),p.current};return Fe.cancel=()=>{f.current&&(R?cancelAnimationFrame(f.current):clearTimeout(f.current)),m.current=0,O.current=i.current=v.current=f.current=null},Fe.isPending=()=>!!f.current,Fe.flush=()=>f.current?Se(Date.now()):p.current,Fe},[T,H,n,ie,V,R]);return X}var ot=ln,mt=e=>{var n=e.labelClass,r=e.labelStyle,o=e.schema,i=e.displayType,m=We(),f=m.displayType,O=m.readOnly,v=o.title,p=o.description,D=o.required,I=o.type,R=I==="object",T=o.displayType||i||f||"column";return d.a.createElement("div",{className:n,style:r},d.a.createElement("label",{className:"fr-label-title ".concat(Et(o,O)||T==="column"?"no-colon":""),title:v},D===!0&&d.a.createElement("span",{className:"fr-label-required"}," *"),d.a.createElement("span",{className:"".concat(R?"b":""," ").concat(T==="column"?"flex-none":"")},v),p&&(T==="row"?d.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":p},d.a.createElement("i",{className:"fr-tooltip-icon"}),d.a.createElement("div",{className:"fr-tooltip-container"},d.a.createElement("i",{className:"fr-tooltip-triangle"}),p)):T==="inline"?null:d.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",p,"\xA0)"))))},Je=mt,Ot={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:url":"url","string:dateTime":"date","string:date":"date","string:year":"date","string:month":"date","string:week":"date","string:quarter":"date","string:time":"time","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"timeRange","range:dateTime":"dateRange","range:date":"dateRange","range:year":"dateRange","range:month":"dateRange","range:week":"dateRange","range:quarter":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function aa(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ot,r=e.type,o=e.format,i=e.enum,m=e.readOnly,f=e.widget,O=[];m&&(O.push("".concat(r,"?readOnly")),O.push("*?readOnly")),i&&(Array.isArray(i)&&(r==="array"&&i.length>6||r!=="array"&&i.length>2)?(O.push("".concat(r,"?enum_long")),O.push("*?enum_long")):(O.push("".concat(r,"?enum")),O.push("*?enum")));var v=f||o;v&&O.push("".concat(r,":").concat(v)),O.push(r);var p="";return O.some(D=>(p=n[D],!!p)),p}var An={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},Kn=t("6UYH"),Un=t("fTA7"),ra=t.n(Un),sa=t("bd+v"),ia=t("LB4q"),ya=t.n(ia),Qa=t("Hjg5"),ba=t("rmht"),ja=t.n(ba),Ga=t("pJsf"),Ta=t("g4D/"),Pa=t.n(Ta),rr=t("LGkk"),Ua=t("rVaU"),wa=t.n(Ua),Xa=t("b+Mx"),Ia=t("5Dct"),Ba=t.n(Ia),Za=t("cUip"),La=t("iJl9"),Xn=t.n(La),Nn=(e,n)=>r=>o=>{var i=o.schema,m=Object(S.default)(o,["schema"]),f=Object(E.a)(Object(E.a)({},i),n),O=typeof e=="function"?e(Object(E.a)({schema:f},m)):{},v=Object(E.a)(Object(E.a)({schema:f},m),O),p=Oa(v);return d.a.createElement(r,p)},Oa=e=>{var n=e.onChange,r=e.value,o=e.defaultValue,i=e.schema,m=Object(S.default)(e,["onChange","value","defaultValue","schema"]),f=Object(E.a)({},i),O=f||{},v=O.trigger,p=O.valuePropName,D={},I="value",R=r===void 0?o:r;p&&typeof p=="string"?(I=p,D[p]=R):D.value=R;var T=function(){for(var X=arguments.length,Q=new Array(X),K=0;K<X;K++)Q[K]=arguments[K];var Ce=cn(I,...Q);n(Ce)};v&&typeof v=="string"?D[v]=T:D.onChange=T;var V={disabled:f.disabled||f["ui:disabled"],readOnly:f.readOnly||f["ui:readonly"],hidden:f.hidden||f["ui:hidden"]},H=Object(E.a)(Object(E.a)(Object(E.a)({},D),{},{schema:f},V),m);return H},ka=e=>{var n=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var m=n||{},f=m.enum,O=m.enumNames;i=Ve(f).map((v,p)=>{var D=O&&Array.isArray(O)?O[p]:v,I=typeof D=="string"&&D[0]==="<";return I&&(D=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:D}})),{label:D,value:v}})}return{options:i,mode:"multiple",style:Object(E.a)({width:"100%",marginTop:5},r)}},a=Nn(ka)(Pa.a.Group),s=a,c=t("ypy7"),h=t.n(c),b=t("rNQX"),F={"1.00":"FF","0.99":"FC","0.98":"FA","0.97":"F7","0.96":"F5","0.95":"F2","0.94":"F0","0.93":"ED","0.92":"EB","0.91":"E8","0.90":"E6","0.89":"E3","0.88":"E0","0.87":"DE","0.86":"DB","0.85":"D9","0.84":"D6","0.83":"D4","0.82":"D1","0.81":"CF","0.80":"CC","0.79":"C9","0.78":"C7","0.77":"C4","0.76":"C2","0.75":"BF","0.74":"BD","0.73":"BA","0.72":"B8","0.71":"B5","0.70":"B3","0.69":"B0","0.68":"AD","0.67":"AB","0.66":"A8","0.65":"A6","0.64":"A3","0.63":"A1","0.62":"9E","0.61":"9C","0.60":"99","0.59":"96","0.58":"94","0.57":"91","0.56":"8F","0.55":"8C","0.54":"8A","0.53":"87","0.52":"85","0.51":"82","0.50":"80","0.49":"7D","0.48":"7A","0.47":"78","0.46":"75","0.45":"73","0.44":"70","0.43":"6E","0.42":"6B","0.41":"69","0.40":"66","0.39":"63","0.38":"61","0.37":"5E","0.36":"5C","0.35":"59","0.34":"57","0.33":"54","0.32":"52","0.31":"4F","0.30":"4D","0.29":"4A","0.28":"47","0.27":"45","0.26":"42","0.25":"40","0.24":"3D","0.23":"3B","0.22":"38","0.21":"36","0.20":"33","0.19":"30","0.18":"2E","0.17":"2B","0.16":"29","0.15":"26","0.14":"24","0.13":"21","0.12":"1F","0.11":"1C","0.10":"1A","0.09":"17","0.08":"14","0.07":"12","0.06":"0F","0.05":"0D","0.04":"0A","0.03":"08","0.02":"05","0.01":"03","0.00":"00"},g=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#ffffff",r=n.slice(7),o=100;for(var i in F)F[i]===r.toUpperCase()&&(o=Number(i)*100);return o};function N(e){var n=e.schema.format,r=i=>{if(!(e.disabled||e.readonly)){var m=F[(i.alpha/100).toFixed(2)],f=i.color+(i.alpha===100?"":m);e.onChange(f)}},o=i=>{e.onChange(i.target.value)};return d.a.createElement("div",{className:"fr-color-picker"},d.a.createElement(h.a,{type:n,animation:"slide-up",color:e.value&&e.value.slice(0,7)||"#ffffff",alpha:g(e.value),onChange:r}),e.readonly?d.a.createElement("span",null,e.value||"#ffffff"):d.a.createElement(Xn.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var $=t("GBD3"),L=t("wXtC"),M=t.n(L),le=t("wd/R"),z=t.n(le),Ne=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=w(r),O=o||void 0;typeof O=="string"&&(r==="week"&&(O=O&&O.substring(0,O.length-1)),r==="quarter"&&(O=O.replace("Q",""))),O&&(O=z()(O,f));var v=(D,I)=>{n(I)},p={value:O,style:Object(E.a)({width:"100%"},i),onChange:v};return r==="dateTime"&&(p.showTime=!0),["week","month","quarter","year"].indexOf(r)>-1&&(p.picker=r),p=Object(E.a)(Object(E.a)({},p),m),d.a.createElement(M.a,p)},Ee=t("mxgt"),de=t("4ZwL"),be=t.n(de),pe=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=w(r),O=o?z()(o,f):void 0,v=(D,I)=>{n(I)},p=Object(E.a)({value:O,style:Object(E.a)({width:"100%"},i),onChange:v},m);return d.a.createElement(be.a,p)},ue=M.a.RangePicker,xe=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=w(r),O=Array.isArray(o)?o:[],v=Object(Xe.default)(O,2),p=v[0],D=v[1];typeof p=="string"&&typeof D=="string"&&(r==="week"&&(p=p.substring(0,p.length-1),D=D.substring(0,D.length-1)),r==="quarter"&&(p=p.replace("Q",""),D=D.replace("Q","")));var I=[];p&&D&&(I=[z()(p,f),z()(D,f)]);var R=(V,H)=>{n(H)},T={value:I,style:Object(E.a)({width:"100%"},i),onChange:R};return r==="dateTime"&&(T.showTime=!0),["week","month","quarter","year"].indexOf(r)>-1&&(T.picker=r),T=Object(E.a)(Object(E.a)({},T),m),d.a.createElement(ue,T)},Le=xe,qe=be.a.RangePicker,vt=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,m=Object(S.default)(e,["onChange","format","value","style"]),f=w(r),O=Array.isArray(o)?o:[],v=Object(Xe.default)(O,2),p=v[0],D=v[1],I=p&&D?[z()(p,f),z()(D,f)]:[],R=(V,H)=>{n(H)},T=Object(E.a)({style:Object(E.a)({width:"100%"},i),value:I,onChange:R},m);return d.a.createElement(qe,T)},lt=vt;function tt(e){var n=e.children;return d.a.createElement("div",{className:"w-100"},n)}var Dt=t("7LYo"),kt=t("5GXF"),Ct=t.n(kt),un=Ct.a.Panel;function dn(e){var n=e.children,r=e.title,o=Object(S.default)(e,["children","title"]),i=We(),m=i.theme,f=i.displayType;return r?m=="1"?d.a.createElement("div",{className:"w-100"},d.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},r),d.a.createElement("div",{style:{marginLeft:f=="row"?0:12}},n)):d.a.createElement("div",{className:"w-100"},d.a.createElement(Ct.a,{defaultActiveKey:["1"]},d.a.createElement(un,{header:d.a.createElement("div",{style:{fontSize:16,fontWeight:500}},r),key:"1",className:"fr-collapse-object"},n))):d.a.createElement("div",{className:"w-100"},n)}var Wn=t("ek7I"),jn=t("FAat"),Lt=t.n(jn),Yt=e=>{var n=e.schema,r=e.value,o=e.style,i=e.options,m=Object(S.default)(e,["schema","value","style","options"]),f;if(i&&Array.isArray(i))f=i;else{var O=n||{},v=O.enum,p=O.enumNames;f=Ve(v).map((R,T)=>{var V=p&&Array.isArray(p)?p[T]:R,H=typeof V=="string"&&V[0]==="<";return H&&(V=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:V}})),{label:V,value:R}})}var D=Object(E.a)({options:f,mode:"multiple",style:Object(E.a)({width:"100%"},o)},m),I=Array.isArray(r)?r:void 0;return d.a.createElement(Lt.a,Object(Z.default)({value:I},D))},Vt=Yt,oa=t("7kJ1"),Zn=t("qPIi"),On=t.n(Zn),At=e=>{var n=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var m=n||{},f=m.enum,O=m.enumNames;i=Ve(f).map((v,p)=>{var D=O&&Array.isArray(O)?O[p]:v,I=typeof D=="string"&&D[0]==="<";return I&&(D=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:D}})),{label:D,value:v}})}return{options:i,mode:"multiple",style:Object(E.a)({width:"100%",minWidth:120,marginTop:5},r)}},nt=Nn(At)(On.a.Group),En=nt,at=e=>{var n=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var m=n||{},f=m.enum,O=m.enumNames;i=Ve(f).map((v,p)=>{var D=O&&Array.isArray(O)?O[p]:v,I=typeof D=="string"&&D[0]==="<";return I&&(D=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:D}})),{label:D,value:v}})}return{options:i,style:Object(E.a)({width:"100%"},r)}},bt=Nn(at)(Lt.a),he=bt,rt=t("tCGa"),it=t("DH6M"),Ht=t.n(it),zt=e=>{var n=e.schema,r=e.value,o=e.onChange,i=e.hideInput,m=e.inputProps,f=Object(S.default)(e,["schema","value","onChange","hideInput","inputProps"]),O=n.max,v=n.min,p=n.step,D={};return(O||O===0)&&(D={max:O}),(v||v===0)&&(D=Object(E.a)(Object(E.a)({},D),{},{min:v})),p&&(D=Object(E.a)(Object(E.a)({},D),{},{step:p})),d.a.createElement("div",{className:"fr-slider"},d.a.createElement(Ht.a,Object(Z.default)({style:{flexGrow:1,marginRight:i?0:12}},D,{onChange:o,value:typeof r=="number"?r:v||0},f)),i?null:d.a.createElement(Ba.a,Object(Z.default)({},D,m,{style:{width:"90px"},value:r,onChange:o})))},la=zt,$a=t("VDQ/"),ua=t("B8+X"),sr=t.n(ua),Gr=t("tL+A"),ir=t("QpBz"),qa=t.n(ir),or=t("z7Xi");function lr(e){var n=e.action,r=e.value,o=e.onChange,i=e.uploadProps,m=e.buttonProps,f=Object(E.a)({name:"file",type:"file",action:n,onChange(p){p.file.status==="done"?(qa.a.success("".concat(p.file.name," \u4E0A\u4F20\u6210\u529F")),o(p.file.response.url)):p.file.status==="error"&&qa.a.error("".concat(p.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},i),O={icon:d.a.createElement(or.a,null),children:"\u4E0A\u4F20"},v=Object(E.a)(Object(E.a)({},O),m);return d.a.createElement("div",{className:"fr-upload-mod"},d.a.createElement(sr.a,Object(Z.default)({},f,{className:"fr-upload-file"}),d.a.createElement(Jt.a,v)),r&&d.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var Ur=t("/xgg"),ur=t("aOJk"),dr=t.n(ur),cr=t("mpQp"),mr="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",vr=e=>{var n=e.value;return d.a.createElement(dr.a,{content:d.a.createElement("img",{src:n||mr,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},d.a.createElement(cr.a,null))};function fr(e){var n=e.value,r=Object(S.default)(e,["value"]);return d.a.createElement(Xn.a,Object(Z.default)({value:n,addonAfter:d.a.createElement(vr,{value:n})},r))}var pr=e=>{var n=e.value,r=Cn(n);return r?d.a.createElement("a",{target:"_blank",href:n},"\u6D4B\u8BD5\u94FE\u63A5"):d.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function hr(e){var n=e.value,r=Object(S.default)(e,["value"]);return d.a.createElement(Xn.a,Object(Z.default)({value:n,addonAfter:d.a.createElement(pr,{value:n})},r))}function gr(e){var n=e.value,r=e.schema,o="-";if(r.type==="boolean")o=n===!0?"\u2714":"\u2718";else if(Array.isArray(r.enum)&&Array.isArray(r.enumNames)){if(["string","number"].indexOf(typeof n)>-1){var i=r.enum.indexOf(n);o=r.enumNames[i]||"-"}else if(Array.isArray(n)){var m="-";n.forEach(f=>{var O=r.enum.indexOf(f),v=r.enumNames[O];v&&(m+=","+v)}),o=m.replace("-,","")}}else typeof n=="number"?o=String(n):typeof n=="string"&&(o=n);return d.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var yr=Xn.a.TextArea,br=Nn(e=>{var n=e.style;return{style:Object(E.a)({width:"100%"},n)}})(Ba.a),jr=Nn(e=>{var n=e.style;return{style:Object(E.a)({marginTop:5},n)}})(wa.a),Or=Nn(e=>{var n=e.autoSize;return{autoSize:n||{minRows:3}}})(yr),Er=e=>{var n=e.style,r=Object(S.default)(e,["style"]);return d.a.createElement(Pa.a,Object(Z.default)({style:Object(E.a)({paddingTop:4,paddingBottom:4},n)},r))},xr=e=>{var n=e.style,r=Object(S.default)(e,["style"]);return d.a.createElement(ja.a,Object(Z.default)({style:Object(E.a)({width:"100%"},n)},r))},Sr=e=>{var n=e.style,r=Object(S.default)(e,["style"]);return d.a.createElement(ya.a,Object(Z.default)({style:Object(E.a)({width:"100%"},n)},r))},Ma={input:Xn.a,checkbox:Er,checkboxes:s,color:N,date:Ne,time:pe,dateRange:Le,timeRange:lt,imageInput:fr,url:hr,list:tt,map:dn,multiSelect:Vt,number:br,radio:En,select:he,slider:la,switch:jr,textarea:Or,upload:lr,html:gr,rate:ra.a,treeSelect:xr,cascader:Sr},Xr=Object.keys(Ma),Dr=e=>d.a.createElement("div",null,d.a.createElement("div",{style:{color:"red"}},"schema\u672A\u5339\u914D\u5230\u5C55\u793A\u7EC4\u4EF6\uFF1A"),d.a.createElement("div",null,JSON.stringify(e))),Cr=e=>{var n=e.schema,r=e.onChange,o=e.value,i=e.children,m=e.onItemChange,f=e.formData,O=e.getValue,v=e.readOnly,p=e.dataPath,D=e.dataIndex,I=Mn(),R=I.widgets,T=I.mapping,V=aa(n,T),H=n.widget||n["ui:widget"];if(H&&R[H]&&(V=H),v&&!Ft(n)&&!pt(n)&&(V="html"),!V)return V="input",d.a.createElement(Dr,{schema:n});var ie=R[V],X=An[V],Q=Object(E.a)({schema:Object(E.a)(Object(E.a)({},n),X),onChange:r,value:o,children:i},n.props);n.type==="string"&&typeof n.max=="number"&&(Q.maxLength=n.max),["title","placeholder","disabled","format"].forEach(Ce=>{n[Ce]&&(Q[Ce]=n[Ce])}),n.props&&(Q=Object(E.a)(Object(E.a)({},Q),n.props)),Q.addons={onItemChange:m,setValue:m,getValue:O,formData:f,dataPath:p,dataIndex:D};var K=Oa(Q);return d.a.createElement(ie,K)},Fr=(e,n)=>e.schema&&e.schema.$id==="#"?!1:JSON.stringify(e.value)===JSON.stringify(n.value)&&JSON.stringify(e.schema)===JSON.stringify(n.schema),Va=d.a.memo(Cr,Fr),Rr=e=>{var n=e.dataIndex,r=e.dataPath,o=e._value,i=e._schema,m=e.labelClass,f=e.labelStyle,O=e.contentClass,v=e.children,p=e.errorFields,D=p===void 0?[]:p,I=e.hideTitle,R=e.displayType,T=Oe(),V=T.formData,H=We(),ie=H.debounceInput,X=H.readOnly,Q=Mn(),K=Q.onValuesChange,Ce=Q.onItemChange,Se=Q.setEditing,$e=Q.touchKey,Fe=D.find(Tn=>Tn.name===r),oe=Fe&&Fe.error,De=Array.isArray(oe)&&oe.length>0,Ze=De?O+" ant-form-item-has-error":O,Ue={},ft=ot(Se,350),st=X!==void 0?X:i.readOnly,ee=Tn=>{$e(r),ie&&(Se(!0),ft(!1)),typeof r=="string"&&Ce(r,Tn),typeof K=="function"&&K({[r]:Tn},V)},Ge={labelClass:m,labelStyle:f,schema:i,displayType:R},Pe=R==="inline"||st===!0,we={message:oe,schema:i,displayType:R,hideValidation:Pe},xn={className:m,style:f},qt=!I&&!!i.title;I&&i.title&&(i.placeholder=i.placeholder||i.title);var Sn={schema:i,readOnly:st,onChange:ee,getValue:xt,formData:V,value:o,onItemChange:Ce,dataIndex:n,dataPath:r,children:v};if(Et(i,st))return d.a.createElement(d.a.Fragment,null,qt&&d.a.createElement("div",xn),d.a.createElement("div",{className:Ze,style:Ue},d.a.createElement(Va,Sn),d.a.createElement(Qe,we)));var _t=d.a.createElement(Je,Ge);return Ft(i)?(_t=d.a.createElement("div",{style:{display:"flex"}},_t,d.a.createElement(Qe,we)),d.a.createElement("div",{className:Ze,style:Ue},d.a.createElement(Va,Object(Z.default)({},Sn,{message:oe,title:qt?_t:void 0})))):d.a.createElement(d.a.Fragment,null,qt&&_t,d.a.createElement("div",{className:"".concat(Ze," ").concat(I?"fr-content-no-title":""),style:Ue},d.a.createElement(Va,Sn),d.a.createElement(Qe,we)))},Ar=Rr,Nr=e=>{var n=e.id,r=n===void 0?"#":n,o=e._item,i=e.dataIndex,m=i===void 0?[]:i,f=e.hideTitle,O=f===void 0?!1:f,v=e.hideValidation,p=v===void 0?!1:v,D=e.debugCss,I=Object(S.default)(e,["id","_item","dataIndex","hideTitle","hideValidation","debugCss"]),R=Object(P.useRef)(),T=Oe(),V=T.flatten,H=T.errorFields,ie=T.isEditing,X=T.formData,Q=T.allTouched,K=We(),Ce=K.displayType,Se=K.column,$e=K.labelWidth,Fe=K.readOnly,oe=o||V[r];if(!oe)return null;var De=tn(r,m),Ze=xt(X,De),Ue=l(oe.schema);ie&&R.current?Ue=R.current:(fe(Ue)&&(Ue=Ye(Ue,X,De)),R.current=Ue);var ft=ye("labelWidth",r,V)||$e,st=Object(E.a)({id:r,item:oe,dataIndex:m,dataPath:De,_value:Ze,hideTitle:O,hideValidation:p,debugCss:D,schema:Ue,displayType:Ce,column:Se,labelWidth:$e,readOnly:Fe,errorFields:H,effectiveLabelWidth:ft,allTouched:Q},I);return d.a.createElement(wr,st)},Tr=e=>{var n=e.id,r=e.item,o=e.dataIndex,i=e.dataPath,m=e.hideTitle,f=e.hideValidation,O=e.debugCss,v=e.schema,p=e._value,D=e.displayType,I=e.column,R=e.labelWidth,T=e.readOnly,V=e.errorFields,H=e.effectiveLabelWidth,ie=Object(S.default)(e,["id","item","dataIndex","dataPath","hideTitle","hideValidation","debugCss","schema","_value","displayType","column","labelWidth","readOnly","errorFields","effectiveLabelWidth"]);if(v.hidden)return null;var X=v.displayType||ie.displayType||D||"column",Q=pt(v),K=Ft(v),Ce=K||Q,Se=Et(v,T),$e=v.width||v["ui:width"],Fe="fr-field ".concat(X==="inline"?"":"w-100"," flex"),oe="fr-label",De="fr-content";switch(typeof v.className=="string"&&(Fe+=" "+v.className),v.type){case"object":K&&(v.title&&(oe+=" fr-label-object"),Fe+=" fr-field-object");break;case"array":Q&&(v.title&&(oe+=" fr-label-list"),Fe+=" fr-field-column");break;case"boolean":Se&&(De+=" fr-content-column",Fe+=" flex ".concat(X==="column"?"flex-column":""));break;default:}if(!Ce&&!Se)if(X==="column")switch(Fe+=" flex-column",oe+=" fr-label-column",De+=" fr-content-column",v.type){case"object":break;case"array":v.title&&!v.enum;break;case"boolean":break;default:}else X==="row"&&(Fe+="",oe+=" fr-label-row",De+=" fr-content-row",!K&&!Se&&(oe+=" flex-shrink-0 fr-label-row",De+=" flex-grow-1 relative"));var Ze={};K||($e?Ze={width:$e,paddingRight:"12px"}:I>1&&(Ze={width:"calc(100% /".concat(I,")"),paddingRight:"12px"}));var Ue=x(H)?Number(H):u(H)?H:110,ft={width:Ue};(Ce||X==="column")&&(ft={flexGrow:1}),X==="inline"&&(ft={marginTop:5,paddingLeft:12},oe="",De+=" fr-content-inline",Fe.indexOf("fr-field-object")===-1&&(Fe+=" fr-field-inline"));var st=r.children&&r.children.length>0,ee={$id:n,dataIndex:o,dataPath:i,_value:p,_schema:v,labelClass:oe,labelStyle:ft,contentClass:De,errorFields:V,displayType:X,hideTitle:m,hideValidation:f},Ge=d.a.createElement("div",{className:"flex flex-wrap"},d.a.createElement(Zt,{dataIndex:o,errorFields:V,displayType:X,hideTitle:m},r.children)),Pe=d.a.createElement(Mt,{parentId:n,schema:v,dataIndex:o,errorFields:V,displayType:X,hideTitle:m},r.children),we=null;return st?K?we=Ge:Q&&(we=Pe):Se&&(we=v.title),d.a.createElement("div",{style:Ze,className:"".concat(Fe," ").concat(O?"debug":"")},d.a.createElement(Ar,ee,we))},Pr=(e,n)=>e.allTouched!==n.allTouched?!1:JSON.stringify(e._value)===JSON.stringify(n._value)&&JSON.stringify(e.schema)===JSON.stringify(n.schema)&&JSON.stringify(e.errorFields)===JSON.stringify(n.errorFields),wr=d.a.memo(Tr,Pr),da=Nr,Ir=t("SA0R"),Br=t.n(Ir),Zr=t("OVFa"),kr=t("cFvS"),Qt="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",Lr={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:Qt,method:Qt,array:Qt,object:Qt,number:Qt,date:Qt,boolean:Qt,integer:Qt,float:Qt,regexp:Qt,email:Qt,url:Qt,hex:Qt},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},Gt="${title} is not a valid ${type}",$r={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:Gt,method:Gt,array:Gt,object:Gt,number:Gt,date:Gt,boolean:Gt,integer:Gt,float:Gt,regexp:Gt,email:Gt,url:Gt,hex:Gt},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},Mr=t("KpVd"),_a=t("oaNE"),er=e=>{var n=e.formData,r=e.schema,o=r===void 0?{}:r,i=e.isRequired,m=i===void 0?!0:i,f=e.touchedKeys,O=f===void 0?[]:f,v=e.locale,p=v===void 0?"cn":v,D=e.validateMessages,I=D===void 0?{}:D;if(Object.keys(o).length===0)return Promise.resolve();var R=Pn({schema:o,isRequired:m}).fields,T=[];m||O.forEach(Q=>{var K=In(Q,o),Ce=Object(ce.a)(n,Q),Se=[void 0,null,""].indexOf(Ce)>-1,$e=Array.isArray(Ce)&&Ce.length===0;if((Se||$e)&&K.required){var Fe=K.message||I.required||"${title}\u5FC5\u586B";T.push({name:Q,error:[Fe]})}});var V=Lr,H=$r,ie;try{ie=new Mr.a(R)}catch(Q){return Promise.resolve([])}var X=p==="en"?H:V;return Object(_a.a)(X,I),ie.messages(X),ie.validate(n||{}).then(Q=>T.length>0?T:[]).catch(Q=>{var K=Q.errors,Ce=Q.fields,Se=Ve(K).map(Fe=>{var oe=wn(Fe.field);return{name:oe,error:[Fe.message]}});Se=[...Se,...T];var $e=[];return Se.forEach(Fe=>{var oe=$e.findIndex(De=>De.name===Fe.name);oe===-1?$e.push(Fe):$e[oe].error=[...$e[oe].error,...Fe.error]}),$e})},qr={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},_r={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},Vr=t("MMHg"),fa=t("J2yf"),za=(e,n)=>{var r=zr(e,n);return r=Xt(r),r=ma(r,n),r=fn(r),r},zr=(e,n)=>{var r=l(e),o=[],i=[],m=[],f=v=>Array.isArray(v)&&v.every(p=>typeof p=="string");Object.keys(n).forEach(v=>{var p=n[v]&&n[v].schema&&n[v].schema.bind,D=v.replace("[]","");p===!1?o.push(D):typeof p=="string"?i.push({key:D,bind:p}):f(p)&&m.push({key:D,bind:p})});var O=v=>{o.forEach(p=>{Object(fa.a)(v,p)}),i.forEach(p=>{var D=p.key,I=p.bind,R=Object(ce.a)(v,D),T=Object(ce.a)(v,I);y(T)&&(R=Object(E.a)(Object(E.a)({},T),R)),Object(Tt.a)(v,I,R),Object(fa.a)(v,D)}),m.forEach(p=>{var D=p.key,I=p.bind,R=Object(ce.a)(v,D);Array.isArray(R)&&R.forEach((T,V)=>{I[V]&&Object(Tt.a)(v,I[V],T)}),Object(fa.a)(v,D)})};return O(r),r},Kr=(e,n)=>{var r=l(e),o=[],i=[],m=O=>Array.isArray(O)&&O.every(v=>typeof v=="string");Object.keys(n).forEach(O=>{var v=n[O]&&n[O].schema&&n[O].schema.bind,p=O.replace("[]","");typeof v=="string"?o.push({key:p,bind:v}):m(v)&&i.push({key:p,bind:v})});var f=O=>{o.forEach(v=>{var p=v.key,D=v.bind,I=Object(ce.a)(O,D),R=Object(ce.a)(O,p);y(R)&&(I=Object(E.a)(Object(E.a)({},R),I)),Object(Tt.a)(O,p,I),Object(fa.a)(O,D)}),i.forEach(v=>{var p=v.key,D=v.bind,I=[];D.forEach(R=>{I.push(Object(ce.a)(O,R)),Object(fa.a)(O,R)}),Object(Tt.a)(O,p,I)})};return f(r),r},tr=e=>{var n=e||{},r=n.formData,o=n.onChange,i=n.onValidate,m=Object(P.useState)(0),f=Object(Xe.default)(m,2),O=f[0],v=f[1],p=Object(P.useRef)(!1),D=jt({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[],flatten:{}}),I=Object(Xe.default)(D,2),R=I[0],T=I[1],V=Object(P.useRef)({}),H=Object(P.useRef)(()=>{}),ie=Object(P.useRef)(),X=Object(P.useRef)("cn"),Q=Object(P.useRef)(),K=Object(P.useRef)({}),Ce=Object(P.useRef)({}),Se=Object(P.useRef)([]),$e=R.formData,Fe=R.submitData,oe=R.errorFields,De=oe===void 0?[]:oe,Ze=R.isValidating,Ue=R.outsideValidating,ft=R.isSubmitting,st=R.isEditing,ee=R.allTouched,Ge=R.touchedKeys,Pe=R.flatten,we=Object(P.useRef)();we.current=De;var xn=e&&e.hasOwnProperty("formData"),qt=xn?r:$e;K.current=Object(P.useMemo)(()=>Object(_a.a)(mn(V.current),qt),[JSON.stringify(qt),JSON.stringify(V.current)]),Se.current=Ge,Ce.current=Pe;var Sn=ne=>{typeof o=="function"?o(ne):T({formData:ne})},_t=ne=>{if(typeof i=="function"){var Me=ne?ne.map(Nt=>Nt.name):[];i(Me)}T({errorFields:ne})},Tn=ne=>{if(!(Se.current.indexOf(ne)>-1)){var Me=[...Se.current,ne];T({touchedKeys:Me})}},Ka=ne=>{var Me=Se.current.filter(Nt=>Nt.indexOf(ne)===-1);T({touchedKeys:Me})};Object(P.useEffect)(()=>{er({formData:K.current,schema:V.current,isRequired:ee,touchedKeys:Se.current,locale:X.current,validateMessages:Q.current}).then(ne=>{_t(ne)})},[JSON.stringify(K.current),ee]),Object(P.useEffect)(()=>{var ne=ae(V.current);T({flatten:ne})},[JSON.stringify(V.current),O]),Object(P.useEffect)(()=>{p.current===!1&&Pe["#"]&&typeof ie.current=="function"&&(ie.current(),p.current=!0)},[JSON.stringify(Pe)]);var ar=ne=>{T({isEditing:ne})},Ea=(ne,Me)=>{if(typeof ne=="string"){if(ne==="#"){Sn(Object(E.a)({},Me));return}Object(Tt.a)(K.current,ne,Me),Sn(Object(E.a)({},K.current))}},Wa=ne=>{var Me=ne.schema,Nt=ne.locale,ha=ne.validateMessages,kn=ne.beforeFinish,Aa=ne.onMount;V.current=Me,X.current=Nt,Q.current=ha,H.current=kn,ie.current=Aa,v(O+1)},xa=(ne,Me)=>{if(!Ce.current[ne]){console.error("path\uFF1A'".concat(ne,"' \u4E0D\u5B58\u5728(form.setSchemaByPath)"));return}var Nt=l(Ce.current);try{var ha=typeof Me=="function"?Me(Nt[ne].schema):Me;Nt[ne].schema=Object(E.a)(Object(E.a)({},Nt[ne].schema),ha),T({flatten:Object(E.a)({},Nt)})}catch(kn){console.error(kn,"setSchemaByPath")}},Ja=ne=>{try{return Pe[ne].schema}catch(Me){return console.error(Me,"getSchemaByPath"),{}}},Ya=ne=>{var Me=[];Array.isArray(ne)?Me=[...ne,...we.current]:ne&&ne.name?Me=[ne,...we.current]:console.log("error format is wrong"),Me=Object(Vr.a)(Me,Nt=>Nt.name),_t(Me)},Ha=ne=>{var Me=we.current.filter(Nt=>Nt.name.indexOf(ne)===-1);_t(Me)},Dn=()=>za(K.tt,Pe),Sa=ne=>{var Me=Kr(ne,Pe);Sn(Me)},pa=()=>{T({isValidating:!0,allTouched:!0,isSubmitting:!1}),er({formData:K.current,schema:V.current,touchedKeys:[],isRequired:!0,locale:X.current,validateMessages:Q.current}).then(ne=>{if(ne&&ne.length>0&&(console.log("submit:",K.current,ne),T({errorFields:ne})),typeof H.current=="function"){Promise.resolve(za(K.current,Pe)).then(Me=>{T({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:Me})});return}Promise.resolve(za(K.current,Pe)).then(Me=>{T({isValidating:!1,isSubmitting:!0,submitData:Me})})}).catch(ne=>{console.log("submit error:",ne)})},Da=()=>{T({formData:{},submitData:{},errors:[],touchedKeys:[],allTouched:!1})},Ca=()=>T({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),Fa=()=>T({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),Ra={formData:K.current,schema:V.current,flatten:Pe,touchedKeys:Se.current,allTouched:ee,touchKey:Tn,removeTouched:Ka,onItemChange:Ea,setValueByPath:Ea,getSchemaByPath:Ja,setSchemaByPath:xa,setValues:Sa,getValues:Dn,resetFields:Da,submit:pa,submitData:Fe,errorFields:De,isValidating:Ze,outsideValidating:Ue,isSubmitting:ft,endValidating:Ca,endSubmitting:Fa,setErrorFields:Ya,removeErrorField:Ha,isEditing:st,setEditing:ar,syncStuff:Wa};return Ra},Wr=e=>n=>{var r=tr();return d.a.createElement(e,Object(Z.default)({},n,{form:r}))},nr=(e,n)=>{console.log(e,n)};function Jr(e){var n=e.widgets,r=e.mapping,o=e.form,i=e.beforeFinish,m=i===void 0?nr:i,f=e.onFinish,O=f===void 0?nr:f,v=e.displayType,p=v===void 0?"column":v,D=e.schema,I=e.debug,R=e.debugCss,T=e.locale,V=T===void 0?"cn":T,H=e.debounceInput,ie=H===void 0?!1:H,X=e.size,Q=e.configProvider,K=e.theme,Ce=e.validateMessages,Se=e.watch,$e=Se===void 0?{}:Se,Fe=e.config,oe=e.onMount,De=e.labelWidth,Ze=e.readOnly,Ue=e.onValuesChange,ft=e.column,st=Object(S.default)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","debug","debugCss","locale","debounceInput","size","configProvider","theme","validateMessages","watch","config","onMount","labelWidth","readOnly","onValuesChange","column"]);try{var ee=o.submit}catch(ga){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var Ge=o.onItemChange,Pe=o.setEditing,we=o.touchKey,xn=o.setValueByPath,qt=o.getSchemaByPath,Sn=o.setSchemaByPath,_t=o.setValues,Tn=o.getValues,Ka=o.resetFields,ar=o.submit,Ea=o.endValidating,Wa=o.endSubmitting,xa=o.setErrorFields,Ja=o.removeErrorField,Ya=o.removeTouched,Ha=o.syncStuff,Dn=Object(S.default)(o,["onItemChange","setEditing","touchKey","setValueByPath","getSchemaByPath","setSchemaByPath","setValues","getValues","resetFields","submit","endValidating","endSubmitting","setErrorFields","removeErrorField","removeTouched","syncStuff"]),Sa=Dn.submitData,pa=Dn.errorFields,Da=Dn.isValidating,Ca=Dn.outsideValidating,Fa=Dn.isSubmitting,Ra=Dn.formData,ne=Dn.flatten;Object(P.useEffect)(()=>{D&&D.type&&Ha({schema:D,locale:V,validateMessages:Ce,beforeFinish:m,onMount:oe})},[JSON.stringify(D)]),Object(P.useEffect)(()=>()=>{o.resetFields()},[]);var Me=Object(P.useMemo)(()=>Object(E.a)(Object(E.a)({},Dn),st),[JSON.stringify(ne),JSON.stringify(Ra),JSON.stringify(pa)]),Nt=Object(P.useMemo)(()=>({displayType:p,theme:K,column:ft,debounceInput:ie,debug:I,labelWidth:De,locale:V,readOnly:Ze}),[p,K,ie,I,De,V,Ze]),ha=Object(P.useMemo)(()=>({widgets:Object(E.a)(Object(E.a)({},Ma),n),mapping:Object(E.a)(Object(E.a)({},Ot),r),onValuesChange:Ue,onItemChange:Ge,setEditing:Pe,touchKey:we,resetFields:Ka,setErrorFields:xa,removeErrorField:Ja,removeTouched:Ya}),[]);Object(P.useEffect)(()=>{if(Ca===!0){Promise.resolve(m(Object(E.a)({data:Sa,schema:D,errors:pa},Fe))).then(ga=>{ga&&xa(ga),Ea()});return}Da===!1&&Fa===!0&&(Wa(),O(Sa,pa))},[Da,Fa,Ca]);var kn="";X==="small"?kn="fr-form-small":X==="large"&&(kn="fr-form-large");var Aa=Object.keys($e);return d.a.createElement(j.a,Object(Z.default)({locale:Br.a},Q),d.a.createElement(rn.Provider,{value:Me},d.a.createElement(pn.Provider,{value:Nt},d.a.createElement($n.Provider,{value:ha},d.a.createElement("div",{className:"fr-container ".concat(kn)},I?d.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},d.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),d.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),d.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),d.a.createElement("div",null,"allTouched:"+JSON.stringify(o.allTouched)),d.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),d.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),d.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,Aa.length>0?Aa.map((ga,Qr)=>d.a.createElement(Hr,{key:Qr.toString(),watchKey:ga,watch:$e,formData:Ra})):null,d.a.createElement(da,{debugCss:R}))))))}var Yr=e=>{var n=e.isOldVersion,r=n===void 0?!0:n,o=e.schema,i=Object(S.default)(e,["isOldVersion","schema"]),m=Object(P.useRef)(o);return r&&(m.current=vn(o)),d.a.createElement(Jr,Object(Z.default)({schema:m.current},i))},es=G.default=Yr,Hr=e=>{var n=e.watchKey,r=e.watch,o=e.formData,i=xt(o,n),m=r[n],f=Object(P.useRef)(!0);return Object(P.useEffect)(()=>{var O=()=>{typeof m=="function"?m(i):m&&typeof m.handler=="function"&&m.handler(i)};if(f.current){var v=m&&m.immediate;v&&O(),f.current=!1}else O()},[JSON.stringify(i)]),null}},trko:function(ke,G,t){},"xwS/":function(ke,G,t){}}]);
