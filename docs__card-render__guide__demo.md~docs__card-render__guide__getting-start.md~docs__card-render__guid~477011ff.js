(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(Me,G,t){"use strict";t.r(G),t.d(G,"Column",function(){return X}),t.d(G,"Line",function(){return Bt}),t.d(G,"PivotTable",function(){return Z});var re=t("0Owb"),k=t("PpiC"),c=t("q1tI"),Y=t.n(c),D=t("06Lf");function C(O){var h=[],I=[];return O.forEach(p=>{p.isDim?h.push(p):I.push(p)}),{metaDim:h,metaInd:I}}function z(O){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(O==null?void 0:O.toPrecision(h))}var x=()=>Y.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function lt(O,h){var I=C(O),p=I.metaDim,A=I.metaInd;if(A.length>=1&&p.length===0){var P="type",W="value";return{xField:P,yField:W,data:h.map(Re=>A.map(he=>{var Qe=he.id,_e=he.name;return{[P]:Qe,[W]:Re[Qe]}})).flat(),meta:{[P]:{formatter:Re=>{var he;return((he=O.find(Qe=>{var _e=Qe.id;return Re===_e}))===null||he===void 0?void 0:he.name)||Re}}},tooltip:{formatter:Re=>{var he,Qe=Re[P],_e=Re[W];return{name:(he=O.find($e=>{var Ye=$e.id;return Qe===Ye}))===null||he===void 0?void 0:he.name,value:_e}}}}}else if(A.length===1&&p.length===1){var H,U,ee,te=(H=p.shift())===null||H===void 0?void 0:H.id,ve=(U=A.shift())===null||U===void 0?void 0:U.id;return{data:h,xField:te,yField:ve,meta:{[ve]:{alias:(ee=O.find(Re=>{var he=Re.id;return he===ve}))===null||ee===void 0?void 0:ee.name}}}}else if(A.length>1&&p.length===1){var be,me=(be=p.shift())===null||be===void 0?void 0:be.id,Oe="value",Ce="type";return{data:h.map(Re=>A.map(he=>{var Qe=he.id,_e=he.name;return{[me]:Re[me],[Oe]:Re[Qe],[Ce]:_e}})).flat(),xField:me,yField:Oe,seriesField:Ce,isGroup:!0}}else if(A.length===1&&p.length===2){var Ne,Te,Ve;return{data:h,xField:(Ne=p.shift())===null||Ne===void 0?void 0:Ne.id,yField:(Te=A.shift())===null||Te===void 0?void 0:Te.id,seriesField:(Ve=p.shift())===null||Ve===void 0?void 0:Ve.id,isGroup:!0}}return{data:h,xField:"",yField:""}}var Ke=O=>{var h=O.className,I=O.style,p=O.meta,A=p===void 0?[]:p,P=O.data,W=P===void 0?[]:P,H=O.inverted,U=Object(k.a)(O,["className","style","meta","data","inverted"]);if(H){var ee=lt(A,W),te=ee.xField,ve=ee.yField,be=Object(k.a)(ee,["xField","yField"]);return Y.a.createElement(D.b,Object(re.default)({xField:ve,yField:te},be,{renderer:"svg",errorTemplate:()=>Y.a.createElement(x,null)},U))}else return Y.a.createElement(D.c,Object(re.default)({},lt(A,W),{renderer:"svg",errorTemplate:()=>Y.a.createElement(x,null)},U))},X=Ke,V=t("k1fw"),yt=t("sGjT");function tn(O,h){var I=C(O),p=I.metaDim,A=I.metaInd;if(A.length===1&&p.length===1){var P,W,H,U=(P=p.shift())===null||P===void 0?void 0:P.id,ee=(W=A.shift())===null||W===void 0?void 0:W.id;return{data:h,xField:U,yField:ee,meta:{[ee]:{alias:(H=O.find($e=>{var Ye=$e.id;return Ye===ee}))===null||H===void 0?void 0:H.name}}}}else if(A.length===1&&p.length===2){var te,ve,be;return{data:h,xField:(te=p.shift())===null||te===void 0?void 0:te.id,yField:(ve=A.shift())===null||ve===void 0?void 0:ve.id,seriesField:(be=p.shift())===null||be===void 0?void 0:be.id}}else if(A.length===2&&p.length===2){var me,Oe,Ce,Ne,Te=h.map($e=>{var Ye=A[0].id,st=p[1].id,Rt=$e[Ye],ot=$e[st],Et=Object(k.a)($e,[Ye,st].map(yt.a));return Object(V.a)({[p[1].id]:"".concat(ot,"-").concat(A[0].name)},Et)}),Ve=h.map($e=>{var Ye=A[1].id,st=p[1].id,Rt=$e[Ye],ot=$e[st],Et=Object(k.a)($e,[Ye,st].map(yt.a));return Object(V.a)({[p[1].id]:"".concat(ot,"-").concat(A[1].name)},Et)});return{data:[Ve,Te],geometryOptions:[{geometry:"line",seriesField:p[1].id},{geometry:"line",seriesField:p[1].id,lineStyle:{lineDash:[5,5]}}],xField:(me=p.shift())===null||me===void 0?void 0:me.id,yField:[(Oe=A.shift())===null||Oe===void 0?void 0:Oe.id,(Ce=A.shift())===null||Ce===void 0?void 0:Ce.id],seriesField:(Ne=p.shift())===null||Ne===void 0?void 0:Ne.id}}else if(A.length>1&&p.length===1){var Re,he=(Re=p.shift())===null||Re===void 0?void 0:Re.id,Qe="value",_e="type";return{data:h.map($e=>A.map(Ye=>{var st=Ye.id,Rt=Ye.name;return{[he]:$e[he],[Qe]:$e[st],[_e]:Rt}})).flat(),xField:he,yField:Qe,seriesField:_e}}return{data:h}}var dt=O=>{var h=O.className,I=O.style,p=O.meta,A=p===void 0?[]:p,P=O.data,W=P===void 0?[]:P,H=O.withArea,U=Object(k.a)(O,["className","style","meta","data","withArea"]),ee=tn(A,W);return H?Y.a.createElement(D.a,Object(re.default)({},ee,{renderer:"svg",errorTemplate:()=>Y.a.createElement(x,null)},U)):Array.isArray(ee.yField)?Y.a.createElement(D.d,Object(re.default)({},ee,{renderer:"svg",errorTemplate:()=>Y.a.createElement(x,null)},U)):Y.a.createElement(D.e,Object(re.default)({},ee,{renderer:"svg",errorTemplate:()=>Y.a.createElement(x,null)},U))},Bt=dt,$t=t("tJVT"),ft=t("mA+x"),ut=t("aMEK"),ct=t("ARb9"),Ot=O=>{var h=O.className,I=O.style,p=O.showSubtotal,A=p===void 0?!0:p,P=O.subtotalText,W=P===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:P,H=O.meta,U=H===void 0?[]:H,ee=O.data,te=ee===void 0?[]:ee,ve=O.size,be=ve===void 0?"middle":ve,me=O.indicatorSide,Oe=me===void 0?"top":me,Ce=O.leftDimensionLength,Ne=Ce===void 0?U.length:Ce,Te=O.leftExpandable,Ve=Te===void 0?!1:Te,Re=O.topExpandable,he=Re===void 0?!1:Re,Qe=O.defaultExpandAll,_e=Qe===void 0?!0:Qe,$e=O.cellRender,Ye=Object(k.a)(O,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),st=Object(c.useState)([]),Rt=Object($t.default)(st,2),ot=Rt[0],Et=Rt[1],nn=Object(c.useState)([]),Lt=Object($t.default)(nn,2),St=Lt[0],Ft=Lt[1],an=C(U),Ht=an.metaDim,dn=an.metaInd,At=dn.map(je=>{var Le=je.id,nt=je.name,at=je.isRate;return{name:nt,code:Le,align:"right",expression:at?"AVG(".concat(Le,")"):"SUM(".concat(Le,")")}}),Ut=Ht.filter((je,Le)=>Le<Ne),Qt=Ut.map(je=>{var Le=je.id;return Le}),zt=Object(ft.b)(te,Qt,{includeTopWrapper:!0,isExpand:Ve?je=>St.includes(je):void 0}),Yt=Object(ft.d)(zt,{indicators:Oe==="left"?At:void 0,supportsExpand:Ve,expandKeys:St,onChangeExpandKeys:Ft,generateSubtotalNode:A?je=>({position:"start",value:je.path.length===0?W[0]||"\u603B\u8BA1":W[1]||"\u5C0F\u8BA1"}):void 0}),un=Object($t.default)(Yt,1),En=un[0],bt=Ht.filter((je,Le)=>Le>=Ne),rn=bt.map(je=>{var Le=je.id;return Le}),Sn=Object(ft.b)(te,rn,{includeTopWrapper:!0,isExpand:he?je=>ot.includes(je):void 0}),hn=Object(ft.d)(Sn,{indicators:Oe==="top"?At:void 0,supportsExpand:he,expandKeys:ot,onChangeExpandKeys:Et,generateSubtotalNode:A?je=>({position:"start",value:je.path.length===0?W[0]||"\u603B\u8BA1":W[1]||"\u5C0F\u8BA1"}):void 0}),Mt=Object($t.default)(hn,1),cn=Mt[0],mn=Object(ft.c)({data:te,leftCodes:Qt,topCodes:rn,aggregate:Object(ut.a)(At)});return Y.a.createElement("div",{style:I,className:"CR-PivotTable CR-PivotTable-".concat(be," ").concat(h||"")},Y.a.createElement(ft.a,Object(re.default)({defaultColumnWidth:100,leftMetaColumns:Ht.filter(je=>{var Le=je.id;return Qt.includes(Le)}).map(je=>{var Le=je.id,nt=je.name;return{code:Le,name:nt}}),leftTree:En.children,leftTotalNode:En,topTree:cn.children,topTotalNode:cn,getValue:(je,Le)=>{var nt,at=(nt=mn.get(je.data.dataKey))===null||nt===void 0?void 0:nt.get(Le.data.dataKey);return at==null?void 0:at[Le.code]},render:(je,Le,nt)=>{var at;if($e){var Ct=Le.data.dataPath,sn=Ct===void 0?[]:Ct,on=nt.data.dataPath,Nt=on===void 0?[]:on,Vt={};return sn.forEach((Kt,Wt)=>{var jt;Vt[(jt=Ut[Wt])===null||jt===void 0?void 0:jt.id]=Kt}),Nt.forEach((Kt,Wt)=>{var jt;Vt[(jt=bt[Wt])===null||jt===void 0?void 0:jt.id]=Kt}),$e(je,Vt,nt.code)}return(at=dn.find(Kt=>{var Wt=Kt.id;return Wt===nt.code}))!==null&&at!==void 0&&at.isRate?"".concat(z(je*100).toFixed(2),"%"):je}},Ye)))},Z=Ot},"4l2o":function(Me,G,t){},"8iYR":function(Me,G,t){"use strict";t.r(G),t.d(G,"basic",function(){return re}),t.d(G,"expression",function(){return k});var re={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},k={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},"97ez":function(Me,G,t){},ARb9:function(Me,G,t){},GYr9:function(Me,G,t){},JjdP:function(Me,G,t){"use strict";t.r(G);var re=t("9og8"),k=t("WmNS"),c=t.n(k),Y=t("LtsZ"),D=`import React, { useRef } from 'react';
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

export default Demo;`,C=`import React from 'react';
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
};`,x=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,lt=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ke=`import React, { Component } from 'react';
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

export default Root;`,X=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,V=`{
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
}`,yt=`import { Select } from 'antd';
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

export default SearchInput;`,tn=`import React from 'react';
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

export default Demo;`,dt=`/* PrismJS 1.16.0
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
}`,Bt=`.markdown p {
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
}`,$t=`import React from 'react';
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
        pagi
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

export default Demo;`,ft=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ut=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ct=`import React from 'react';
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

export default Demo;`,Ot=G.default={"guide-card":{component:Object(Y.dynamic)({loader:function(){var Z=Object(re.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([t.e(33),t.e(4)]).then(t.bind(null,"oLxE"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function O(){return Z.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:D}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var O=t("3PQu"),h=t("K+nK"),I=h(t("tJVT")),p=O(t("q1tI")),A=t("36SN"),P=function(){var H=(0,p.useState)("Line"),U=(0,I.default)(H,2),ee=U[0],te=U[1],ve={Line:A.Line,Column:A.Column,PivotTable:A.PivotTable}[ee];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return te("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return te("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return te("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(ve,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return p.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=t("36SN"),p=function(){return h.default.createElement(I.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(W,H,U){return h.default.createElement("div",null,h.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),h.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(H).length]}},W),h.default.createElement("p",null,JSON.stringify(H)),h.default.createElement("p",null,JSON.stringify(U)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var O=t("3PQu"),h=t("K+nK"),I=h(t("tJVT")),p=O(t("q1tI")),A=t("36SN"),P=function(){var H=(0,p.useState)(!1),U=(0,I.default)(H,2),ee=U[0],te=U[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:ee,onChange:function(){return te(!ee)}})),p.default.createElement(A.PivotTable,{leftExpandable:ee,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return p.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var O=t("3PQu"),h=t("K+nK");t("MaXC");var I=h(t("4IMT")),p=h(t("fWQN")),A=h(t("mtLc")),P=h(t("yKVA")),W=h(t("879j")),H=h(t("q1tI")),U=t("gdfu"),ee=O(t("refC")),te={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},ve=function(me){(0,P.default)(Ce,me);var Oe=(0,W.default)(Ce);function Ce(){return(0,p.default)(this,Ce),Oe.apply(this,arguments)}return(0,A.default)(Ce,[{key:"render",value:function(){var Te=this.props.form;return H.default.createElement("div",null,H.default.createElement(ee.default,{form:Te,schema:te}),H.default.createElement(I.default,{type:"primary",onClick:Te.submit},"\u63D0\u4EA4"))}}]),Ce}(H.default.Component),be=(0,ee.connectForm)(ve);return H.default.createElement(be)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var O=t("3PQu"),h=t("K+nK");t("MaXC");var I=h(t("4IMT")),p=h(t("q1tI")),A=t("gdfu"),P=O(t("refC")),W={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},H=function(){var te=(0,P.useForm)();return p.default.createElement("div",null,p.default.createElement(P.default,{form:te,schema:W}),p.default.createElement(I.default,{type:"primary",onClick:te.submit},"\u63D0\u4EA4"))},U=H;return p.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var O=t("3PQu"),h=t("K+nK");t("MaXC");var I=h(t("4IMT")),p=h(t("q1tI")),A=t("gdfu"),P=O(t("refC")),W={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},H=function(){var te=(0,P.useForm)(),ve=function(me,Oe){Oe.length>0?alert("errors:"+JSON.stringify(Oe)):alert("formData:"+JSON.stringify(me,null,2))};return p.default.createElement("div",null,p.default.createElement(P.default,{form:te,schema:W,onFinish:ve}),p.default.createElement(I.default,{type:"primary",onClick:te.submit},"\u63D0\u4EA4"))},U=H;return p.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var O=t("3PQu"),h=t("K+nK"),I=h(t("q1tI")),p=O(t("refC")),A={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function P(){var H=(0,p.useForm)(),U=function(te,ve){ve.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(ve))):alert(JSON.stringify(te))};return I.default.createElement("div",null,I.default.createElement(p.default,{form:H,schema:A,onFinish:U}),I.default.createElement("button",{onClick:H.submit},"\u63D0\u4EA4"))}var W=P;return I.default.createElement(W)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("c2mQ")),p=t("8iYR"),A=function(){return h.default.createElement(I.default,{schema:p.basic})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:C},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"test copy-demo":{component:function(){var O=t("3PQu"),h=t("K+nK");t("MaXC");var I=h(t("4IMT")),p=h(t("q1tI")),A=t("gdfu"),P=O(t("refC")),W={type:"object",properties:{objectName:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}},H=function(){var te=(0,P.useForm)(),ve=function(me,Oe){Oe.length>0?alert("errorFields:"+JSON.stringify(Oe)):alert("formData:"+JSON.stringify(me,null,2))};return p.default.createElement("div",null,p.default.createElement(P.default,{form:te,schema:W,onFinish:ve}),p.default.createElement(I.default,{type:"primary",onClick:te.submit},"\u63D0\u4EA4"))},U=H;return p.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    objectName: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
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
};

// const schema = {
//   displayType: 'column',
//   type: 'object',
//   properties: {
//     input1: {
//       title: '\u7B80\u5355\u8F93\u5165\u6846',
//       type: 'string',
//       required: true,
//     },
//     select1: {
//       title: '\u5355\u9009',
//       type: 'string',
//       enum: ['a', 'b', 'c'],
//       enumNames: ['\u65E9', '\u4E2D', '\u665A'],
//     },
//   },
// };

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"test copy-demo"}},"display-demo":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("bQjt")),p=function(W){return{type:"object",displayType:W,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},A=function(){return h.default.createElement("div",null,h.default.createElement("h2",null,"display: row"),h.default.createElement(I.default,{schema:p("row")}),h.default.createElement("h2",null,"display: column"),h.default.createElement(I.default,{schema:p("column")}))};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("bQjt")),p={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){return h.default.createElement(I.default,{schema:p})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("bQjt")),p={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},A=function(){return h.default.createElement(I.default,{readOnly:!0,schema:p})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("bQjt")),p={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},A=function(){return h.default.createElement(I.default,{labelWidth:"200",schema:p})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},A=function(){return h.default.createElement(I.default,{schema:p})},P=A;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},A=function(){return h.default.createElement(I.default,{schema:p})},P=A;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},A=function(){return h.default.createElement(I.default,{schema:p})},P=A;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:function(){var O=t("3PQu"),h=t("K+nK");t("lfLe");var I=h(t("Cp9S"));t("MaXC");var p=h(t("4IMT"));t("tL+A");var A=h(t("QpBz")),P=h(t("tJVT")),W=O(t("q1tI")),H=t("gdfu"),U=O(t("refC")),ee=t("OH0R"),te=function(){var me=(0,U.useForm)(),Oe=(0,W.useState)({}),Ce=(0,P.default)(Oe,2),Ne=Ce[0],Te=Ce[1],Ve=function(){(0,ee.fakeApi)("xxx/getForm").then(function(Qe){me.setValues({input1:"hello world",select1:"c"})})};(0,W.useEffect)(function(){(0,ee.delay)(1e3).then(function(he){Te({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Re=function(Qe,_e){_e.length>0?A.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_e.map(function($e){return $e.name}))):(0,ee.fakeApi)("xxx/submit",Qe).then(function($e){return A.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return W.default.createElement("div",{style:{width:"400px"}},W.default.createElement(U.default,{form:me,schema:Ne,onFinish:Re}),W.default.createElement(I.default,null,W.default.createElement(p.default,{onClick:Ve},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),W.default.createElement(p.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},ve=te;return W.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:lt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var O=t("3PQu"),h=t("K+nK");t("MaXC");var I=h(t("4IMT"));t("tL+A");var p=h(t("QpBz")),A=h(t("q1tI")),P=t("gdfu"),W=O(t("refC")),H=t("OH0R"),U={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},ee=function(){var be=(0,W.useForm)(),me=function(Ne,Te){Te.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Te.map(function(Ve){return Ve.name}))):(0,H.fakeApi)("xxx/submit",Ne).then(function(Ve){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Oe=function(Ne,Te){return(0,H.fakeApi)("xxx/validation").then(function(Ve){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return A.default.createElement("div",{style:{width:"400px"}},A.default.createElement(W.default,{form:be,schema:U,beforeFinish:Oe,onFinish:me}),A.default.createElement(I.default,{type:"primary",onClick:be.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},te=ee;return A.default.createElement(te)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:lt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var O=t("3PQu"),h=t("K+nK");t("lfLe");var I=h(t("Cp9S"));t("MaXC");var p=h(t("4IMT"));t("tL+A");var A=h(t("QpBz")),P=h(t("q1tI")),W=t("gdfu"),H=O(t("refC")),U=t("OH0R"),ee={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},te=function(){var me=(0,H.useForm)(),Oe=function(Te,Ve){Ve.length>0?A.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ve.map(function(Re){return Re.name}))):(0,U.fakeApi)("xxx/submit",Te).then(function(Re){return A.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Ce=function(){(0,U.fakeApi)("xxx/getForm").then(function(Te){me.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(H.default,{form:me,schema:ee,onFinish:Oe}),P.default.createElement(I.default,null,P.default.createElement(p.default,{onClick:Ce},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),P.default.createElement(p.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},ve=te;return P.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:lt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var O=t("3PQu"),h=t("K+nK"),I=h(t("q1tI")),p=O(t("refC")),A={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},P=function(){var U=(0,p.useForm)();return I.default.createElement(p.default,{form:U,schema:A})},W=P;return I.default.createElement(W)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("c2mQ")),p=t("8iYR"),A=function(){return h.default.createElement(I.default,{schema:p.expression})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:C},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"widget-demo":{component:function(){var O=t("3PQu"),h=t("K+nK");t("MaXC");var I=h(t("4IMT"));t("cUip");var p=h(t("iJl9")),A=h(t("0Owb")),P=O(t("q1tI")),W=t("gdfu"),H=O(t("refC")),U={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},ee=function(me){return P.default.createElement(p.default,(0,A.default)({addonBefore:"http://",addonAfter:".com"},me))},te=function(){var me=(0,H.useForm)(),Oe=function(){};return P.default.createElement("div",null,P.default.createElement(H.default,{form:me,schema:U,widgets:{site:ee},onFinish:function(Ne){return alert(JSON.stringify(Ne,null,2))}}),P.default.createElement(I.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4"))},ve=te;return P.default.createElement(ve)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"widget-demo"}},"docs-playground":{component:Object(Y.dynamic)({loader:function(){var Z=Object(re.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([t.e(33),t.e(4)]).then(t.bind(null,"BASV"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function O(){return Z.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:Ke},"main.js":{import:"./main",content:X},"json/simplest.json":{import:"./json/simplest.json",content:V},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:yt},"monaco/index.js":{import:"./monaco",content:tn},"theme.css":{import:"./theme.css",content:dt},"index.css":{import:"./index.css",content:Bt}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.0.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(Y.dynamic)({loader:function(){var Z=Object(re.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([t.e(33),t.e(4)]).then(t.bind(null,"7ZP+"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function O(){return Z.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{tsx:$t}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var O=t("K+nK"),h=O(t("q1tI")),I=t("P2DI"),p=[],A=0;A<6;A++)p.push({id:A.toString(),title:"\u6807\u9898".concat(A+1),created_at:new Date().getTime()});var P={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},W=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(te,ve){return h.default.createElement("a",{onClick:function(){return alert(te.title)}},"\u7F16\u8F91")}}],H=function(){var te=function(){return{rows:p,total:p.length}};return h.default.createElement(I.TableProvider,null,h.default.createElement(I.Search,{schema:P,api:te}),h.default.createElement(I.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:W,rowKey:"id"}))},U=H;return h.default.createElement(U)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
       <Search schema={schema} api={searchApi}/>
       <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var O=t("K+nK"),h=O(t("q1tI")),I=O(t("nYSz")),p={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},A=function(){return h.default.createElement("div",{style:{height:"80vh"}},h.default.createElement(I.default,{defaultValue:p}))},P=A;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(Y.dynamic)({loader:function(){var Z=Object(re.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([t.e(33),t.e(4)]).then(t.bind(null,"PPgD"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function O(){return Z.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:ft}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(Y.dynamic)({loader:function(){var Z=Object(re.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([t.e(33),t.e(4)]).then(t.bind(null,"jktF"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function O(){return Z.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:ut}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(Y.dynamic)({loader:function(){var Z=Object(re.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([t.e(33),t.e(4)]).then(t.bind(null,"M63W"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function O(){return Z.apply(this,arguments)}return O}()}),previewerProps:{sources:{_:{jsx:ct}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},identifier:"generator-settings"}}}},OH0R:function(Me,G,t){"use strict";t.r(G),t.d(G,"delay",function(){return re}),t.d(G,"fakeApi",function(){return k});var re=c=>new Promise(Y=>setTimeout(Y,c)),k=(c,Y)=>(console.group("request:",c),console.log("params:",Y),console.groupEnd(),re(500))},OVFa:function(Me,G,t){},Oxum:function(Me,G,t){},P2DI:function(Me,G,t){"use strict";t.r(G),t.d(G,"Search",function(){return h}),t.d(G,"Table",function(){return Nt}),t.d(G,"TableProvider",function(){return Ln}),t.d(G,"useTable",function(){return dt});var re=t("Saan"),k=t("vgIT"),c=t.n(k),Y=t("0Owb"),D=t("k1fw"),C=t("tL+A"),z=t("QpBz"),x=t.n(z),lt=t("PpiC"),Ke=t("tJVT"),X=t("q1tI"),V=t.n(X),yt=Object(X.createContext)({}),tn=Object(X.createContext)({}),dt=()=>Object(X.useContext)(yt),Bt=()=>Object(X.useContext)(tn),$t=F=>{var K=Object(X.useReducer)((Ie,Pe)=>{var We=Pe;typeof Pe=="function"&&(We=We(Ie)),Pe.action&&Pe.payload&&(We=Pe.payload,typeof We=="function"&&(We=We(Ie)));var Xe=Object(D.a)(Object(D.a)({},Ie),We);return Xe},F),ae=Object(Ke.default)(K,2),fe=ae[0],xe=ae[1],De=(Ie,Pe)=>{xe(Ie)};return[fe,De]},ft=t("MaXC"),ut=t("4IMT"),ct=t.n(ut),Ot=t("refC"),Z=F=>{var K=F.clearSearch,ae=dt(),fe=ae.tableState,xe=fe===void 0?{}:fe,De=ae.refresh,Ie=xe.loading;return V.a.createElement("div",{className:"flex justify-end w-100"},V.a.createElement(ct.a,{loading:Ie,className:"mr",type:"primary",onClick:()=>De()},"\u67E5\u8BE2"),V.a.createElement(ct.a,{onClick:K},"\u91CD\u7F6E"))},O=F=>{var K=Object(X.useState)({}),ae=Object(Ke.default)(K,2),fe=ae[0],xe=ae[1],De=dt(),Ie=De.tableState,Pe=De.setTable,We=De.refresh,Xe=De.syncMethods,xt=Ie.search,Ze=F.schema||F.propsSchema,Xt=!0;!F.searchOnMount&&F.searchOnMount!==void 0&&(console.log("props.searchOnMount",F.searchOnMount),Xt=!1);var Tt=Object(X.useRef)(),Zt=Je=>{Pe({search:Je})},It=Je=>{try{var ke=100,it=Object.values(Je.properties).filter(Ge=>Ge.hidden?Ge.hidden!==!0:Ge["ui:hidden"]!==!0).map(Ge=>Ge.width?Ge.width:Ge["ui:width"]),ln=it.lastIndexOf(void 0),Dt=it.slice(ln+1).map(Ge=>Number(Ge.substring(0,Ge.length-1))),Jt=Dt.reduce((Ge,qe)=>{var Fe=Ge+qe;return Fe>100?Math.min(100,qe):Fe},0);return ke=100-Jt,ke<10&&(ke=100),ke+"%"}catch(Ge){return console.error(Ge),"100%"}},kt=()=>{var Je=JSON.stringify(Tt.current)===JSON.stringify(Ze);if(Ze&&Ze.properties){if(fe&&Je)return;try{var ke=JSON.parse(JSON.stringify(Ze));ke.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:It(Ze)},xe(ke)}catch(it){console.error(it)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},qt=Je=>{if(Je.length){Pe({checkPassed:!1});return}Pe({checkPassed:!0})},ze=Object(Ot.useForm)({formData:xt,onChange:Zt,onValidate:qt}),pt=()=>{ze.setValues({})};if(Object(X.useEffect)(()=>{F.hidden||kt()},[Ze]),Object(X.useEffect)(()=>{Xe({searchApi:F.api,syncOnSearch:F.onSearch,syncAfterSearch:F.afterSearch}),(F.hidden||Xt)&&We()},[]),F.hidden)return null;var rt=typeof F.searchBtnRender=="function"?F.searchBtnRender(We,pt):[];return V.a.createElement("div",{className:"tr-search ".concat(F.className),style:F.style,onKeyDown:Je=>{Je.keyCode===13&&We()}},V.a.createElement(Ot.default,Object(Y.default)({form:ze},F,{schema:fe,displayType:"row",widgets:Object(D.a)({searchBtn:()=>F.searchBtnRender?V.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(rt)&&rt.map((Je,ke)=>V.a.createElement("div",{key:ke.toString(),style:{marginLeft:8}},Je))):V.a.createElement(Z,{clearSearch:pt})},F.widgets)})))},h=O,I=t("7kJ1"),p=t("qPIi"),A=t.n(p),P=t("zmYW"),W=t("DtFj"),H=t.n(W),U=t("lfLe"),ee=t("Cp9S"),te=t.n(ee),ve=t("Wgwc"),be=t.n(ve);function me(F,K){return F.indexOf(K)>-1}var Oe=F=>me(Object.prototype.toString.call(F),"Object"),Ce=F=>typeof F!="string"?!1:F.indexOf("$api.")===0||F.indexOf("$func.")===0,Ne=F=>F.indexOf("$api.")===0?F.substring(5):F.indexOf("$func.")===0?F.substring(6):"",Te=(F,K)=>{if(typeof F!="object"||F===null){if(Ce(F)){var ae=Ne(F);return K&&K[ae]&&typeof K[ae]=="function"?K[ae]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return F}if(Array.isArray(F)){var fe=[...F];return fe.map(Ie=>Te(Ie,K))}var xe=Object(D.a)({},F),De=Object.keys(xe);return De.forEach(Ie=>{xe[Ie]=Te(xe[Ie],K)}),xe},Ve=F=>be()(F).format("YYYY-MM-DD HH:mm"),Re=F=>be()(F).format("YYYY-MM-DD"),he=F=>"\xA5".concat(F).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Qe=(F,K,ae)=>{var fe=F;return typeof fe=="function"?fe=fe(K):ae&&typeof ae=="function"&&ae(),fe},_e=t("NcKm"),$e=t("lbd2"),Ye=t.n($e),st=t("93XW"),Rt=t("d1El"),ot=t.n(Rt),Et=(F,K,ae)=>ae.ellipsis?V.a.createElement(ot.a,{title:Lt(K,ae)},F):V.a.createElement("span",null,F),nn=(F,K)=>K.copyable||K.ellipsis?V.a.createElement(Ye.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:K.copyable&&F?{text:F,onCopy:()=>x.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:K.ellipsis||!1},Lt(F,K)):Lt(F,K),Lt=(F,K)=>{var ae=K.enum||void 0;return ae&&ae[F]?ae[F]:F},St=F=>F?V.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},V.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},F)):null,Ft=(F,K)=>{if(K.valueType==="code")return St(F);var ae=nn(F,K),fe=Et(ae,F,K);return fe},an=t("WbIG"),Ht=t("hw8t"),dn=t.n(Ht);class At extends V.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(K){return{hasError:!0,errorInfo:K.message}}componentDidCatch(K,ae){console.log(K,ae)}render(){return this.state.hasError?V.a.createElement(dn.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var Ut=At,Qt=t("IehP"),zt=t("3R4v"),Yt=F=>{var K=Object(X.useState)(!1),ae=Object(Ke.default)(K,2),fe=ae[0],xe=ae[1],De=F.fullScreen;return fe?V.a.createElement(ot.a,{title:"\u9000\u51FA\u5168\u5C4F"},V.a.createElement(Qt.a,{onClick:()=>{document.exitFullscreen(),xe(!1)}})):V.a.createElement(ot.a,{title:"\u5168\u5C4F"},V.a.createElement(zt.a,{onClick:()=>{if(!document.fullscreenEnabled){x.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(xe(!0),De().catch(Ie=>x.a.error(Ie.message)))}}))},un=Yt,En=t("G851"),bt=t("ZvzK"),rn=t.n(bt),Sn=t("PFYH"),hn=t("Jv8k"),Mt=t.n(hn),cn=t("9hi+"),mn=()=>{var F=dt(),K=F.tableState,ae=F.setTable;return V.a.createElement(rn.a,{overlay:V.a.createElement(Mt.a,{selectedKeys:[K.tableSize],onClick:fe=>{var xe=fe.key;ae({tableSize:xe})},style:{width:80}},V.a.createElement(Mt.a.Item,{key:"default"},"\u9ED8\u8BA4"),V.a.createElement(Mt.a.Item,{key:"middle"},"\u4E2D\u7B49"),V.a.createElement(Mt.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},V.a.createElement(ot.a,{title:"\u8868\u683C\u5BC6\u5EA6"},V.a.createElement(cn.a,null)))},je=mn,Le=t("rLCj"),nt=()=>{var F=dt(),K=F.refresh;return V.a.createElement(ot.a,{title:"\u5237\u65B0"},V.a.createElement(Le.a,{onClick:()=>K()}))},at=nt,Ct=F=>V.a.createElement(te.a,{size:14,style:{fontSize:16,cursor:"pointer"}},V.a.createElement(at,null),V.a.createElement(je,null),V.a.createElement(un,F)),sn=Ct,on=F=>{var K,ae,fe;F.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var xe=dt(),De=xe.tableState,Ie=xe.setTable,Pe=xe.doSearch,We=De.dataSource,Xe=De.pagination,xt=De.loading,Ze=De.api,Xt=De.tableSize,Tt=Object(X.useRef)(null),Zt=(qe,Fe)=>{Ie({pagination:Object(D.a)(Object(D.a)({},Xe),{},{current:qe,pageSize:Fe})}),!(!F.pageChangeWithRequest&&F.pageChangeWithRequest!==void 0)&&Pe({current:qe,pageSize:Fe})},It=F.headerTitle,kt=F.toolbarRender,qt=F.columns,ze=F.style,pt=ze===void 0?{}:ze,rt=F.className,Je=rt===void 0?"":rt,ke=F.toolbarAction,it=ke===void 0?!1:ke;qt.map(qe=>{var Fe=qe;if(Fe.render)return Fe;switch(Fe.valueType){case"date":Fe.render=et=>Ft(Re(et),Fe);break;case"dateTime":Fe.render=et=>Ft(Ve(et),Fe);break;case"money":Fe.render=et=>Ft(he(et),Fe);break;case"code":Fe.render=et=>Ft(et,Fe);break;case"text":default:Fe.render=et=>Ft(et,Fe)}return Fe});var ln=Object(D.a)(Object(D.a)({},F),{},{dataSource:We,pagination:F.pagination===!1?!1:Object(D.a)(Object(D.a)({onChange:Zt,size:"small"},F.pagination),{},{pageSize:((K=F.pagination)===null||K===void 0?void 0:K.pageSize)||Xe.pageSize,total:((ae=F.pagination)===null||ae===void 0?void 0:ae.total)||Xe.total,current:((fe=F.pagination)===null||fe===void 0?void 0:fe.current)||Xe.current}),loading:xt,size:Xt}),Dt=typeof kt=="function"?kt():[],Jt=It||Dt&&Dt.length||Array.isArray(Ze),Ge=()=>{var qe;return Promise.resolve((qe=Tt.current)===null||qe===void 0?void 0:qe.requestFullscreen())};return Object(X.useEffect)(()=>{F.size&&Ie({tableSize:F.size})},[]),V.a.createElement(Ut,null,V.a.createElement("div",{className:"tr-table-wrapper ".concat(Je),style:pt,ref:Tt},V.a.createElement("div",{className:Jt?"tr-table-top":"tr-table-top-nohead"},V.a.createElement("div",{className:"tr-table-title"},V.a.createElement(Vt,{title:It})),V.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},V.a.createElement(te.a,{align:"center"},V.a.createElement(te.a,{size:8,style:{marginRight:8}},Array.isArray(Dt)&&Dt.map((qe,Fe)=>V.a.createElement("div",{key:Fe.toString()},qe))),it&&V.a.createElement(sn,{fullScreen:Ge})))),V.a.createElement(H.a,ln)))},Nt=on,Vt=F=>{var K=F.title,ae=dt(),fe=ae.tableState,xe=ae.setTable,De=ae.doSearch,Ie=fe.tab,Pe=fe.api,We=Ie||0,Xe=xt=>{var Ze=xt.target.value;xe({tab:Ze}),De({tab:Ze})};return typeof Pe=="function"?V.a.createElement("div",{className:"tr-single-tab"},K):Pe&&Array.isArray(Pe)?Pe.length===1?V.a.createElement("div",{className:"tr-single-tab"},Pe[0].name):V.a.createElement(V.a.Fragment,null,V.a.createElement(A.a.Group,{onChange:Xe,value:We},Pe.map((xt,Ze)=>V.a.createElement(A.a.Button,{key:Ze.toString(),value:Ze},xt.name))),K&&V.a.createElement("div",{className:"tr-extra-tab"},K)):V.a.createElement("div",{className:"tr-single-tab"})},Kt=t("yDJ3"),Wt=t.n(Kt),jt=t("SA0R"),wn=t.n(jt),Pn=t("k/c8"),Ga=t("GYr9"),Bn=F=>{var K=$t({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:3,total:1},tableSize:"default",checkPassed:!0}),ae=Object(Ke.default)(K,2),fe=ae[0],xe=ae[1],De=Object(X.useRef)(),Ie=Object(X.useRef)(),Pe=Object(X.useRef)(),We=fe.pagination,Xe=fe.search,xt=fe.tab,Ze=fe.checkPassed,Xt=dt(),Tt=(ze,pt)=>{if(delete Xe.searchBtn,Ie.current&&Ie.current(Xe),!Ze)return;var rt=ze||{},Je=rt.current,ke=rt.pageSize,it=rt.tab,ln=Object(lt.a)(rt,["current","pageSize","tab"]),Dt=Je||1,Jt=ke||10,Ge=xt;["string","number"].indexOf(typeof it)>-1&&(Ge=it);var qe={current:Dt,pageSize:Jt};if(typeof De.current=="function")et(De.current);else if(Array.isArray(De.current)){var Fe=Wt()(De.current,"[".concat(Ge,"].api"));typeof Fe=="function"?et(Fe):x.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else console.log(De.current),x.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function et(gn){xe({loading:!0});var vn=Object(D.a)(Object(D.a)(Object(D.a)(Object(D.a)({},Xe),pt),ln),qe);Array.isArray(gn)&&(vn=Object(D.a)(Object(D.a)({},vn),{},{tab:it})),Promise.resolve(gn(vn)).then(_t=>{var yn=_t.rows,fn=_t.total,bn=_t.pageSize,jn=Object(lt.a)(_t,["rows","total","pageSize"]);xe(Object(D.a)(Object(D.a)({loading:!1,dataSource:yn},jn),{},{pagination:Object(D.a)(Object(D.a)({},qe),{},{total:fn,pageSize:bn||Jt})})),Pe.current(Object(D.a)({rows:yn,total:fn,pageSize:bn},jn))}).catch(_t=>{xe({loading:!1})})}},Zt=(ze,pt)=>{var rt=ze&&ze.stay||!1,Je=ze&&ze.tab,ke=pt||{};Tt(Object(D.a)(Object(D.a)({},ze),{},{current:rt?We.current:1,tab:Je,pageSize:We.pageSize}),ke)},It=ze=>{["string","number"].indexOf(typeof ze)>-1?(xe({tab:ze}),Zt({tab:ze})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},kt=ze=>{var pt=ze.searchApi,rt=ze.syncOnSearch,Je=ze.syncAfterSearch;De.current=pt,Ie.current=rt,Pe.current=Je,xe({api:pt})},qt={tableState:fe,setTable:xe,doSearch:Tt,refresh:Zt,changeTab:It,syncMethods:kt};return qt},$n=(F,K)=>{var ae=Bn(F);return Object(X.useImperativeHandle)(K,()=>ae),V.a.createElement(c.a,{locale:wn.a},V.a.createElement(yt.Provider,Object(Y.default)({},F,{value:ae})))},Ln=Object(X.forwardRef)($n)},RnhZ:function(Me,G,t){var re={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function k(Y){var D=c(Y);return t(D)}function c(Y){if(!t.o(re,Y)){var D=new Error("Cannot find module '"+Y+"'");throw D.code="MODULE_NOT_FOUND",D}return re[Y]}k.keys=function(){return Object.keys(re)},k.resolve=c,Me.exports=k,k.id="RnhZ"},Zs1V:function(Me){Me.exports=JSON.parse("{}")},bQjt:function(Me,G,t){"use strict";t.r(G);var re=t("0Owb"),k=t("q1tI"),c=t.n(k),Y=t("refC"),D=C=>{var z=Object(Y.useForm)();return c.a.createElement(Y.default,Object(re.default)({form:z},C))};G.default=D},c2mQ:function(Me,G,t){"use strict";t.r(G);var re=t("q1tI"),k=t.n(re),c=t("refC"),Y=D=>{var C=D.schema,z=Object(c.useForm)();return k.a.createElement("div",null,k.a.createElement(c.default,{form:z,schema:C}))};G.default=Y},cFvS:function(Me,G,t){},fK6R:function(Me,G,t){},gO06:function(Me,G,t){},iU8R:function(Me,G,t){},nYSz:function(Me,G,t){"use strict";t.r(G),t.d(G,"defaultSettings",function(){return Ne}),t.d(G,"defaultCommonSettings",function(){return ve}),t.d(G,"defaultGlobalSettings",function(){return Te}),t.d(G,"fromFormily",function(){return mt}),t.d(G,"toFormily",function(){return Wa}),t.d(G,"fromFormRender",function(){return qn}),t.d(G,"toFormRender",function(){return _n});var re=t("0Owb"),k=t("q1tI"),c=t.n(k),Y=t("kvAW"),D=t("qJlv"),C=t("k1fw"),z=t("tJVT"),x=Object(k.createContext)(()=>{}),lt=Object(k.createContext)({}),Ke=()=>Object(k.useContext)(x),X=()=>Object(k.useContext)(lt),V=a=>{var r=Object(k.useReducer)((v,E)=>{var R=E;typeof E=="function"&&(R=R(v)),E.action&&E.payload&&(R=E.payload,typeof R=="function"&&(R=R(v)));var N=Object(C.a)(Object(C.a)({},v),R);return N},a),i=Object(z.default)(r,2),u=i[0],d=i[1],y=(v,E)=>{d(v)};return[u,y]};function yt(a,r,i){var u=Object(k.useRef)();Object(k.useEffect)(()=>{u.current=a},[a]);var d=Object(k.useRef)();return Object(k.useEffect)(()=>{if(!i)return;function y(){u&&u.current&&u.current()}if(y(),r!==null)return d.current=setInterval(y,r),()=>clearInterval(d.current)},[r,i]),()=>clearInterval(d.current)}function tn(a){var r=Object(k.useRef)();return Object(k.useEffect)(()=>{r.current=a},[a]),r.current}var dt=a=>{var r=Object(k.useState)(!1),i=Object(z.default)(r,2),u=i[0],d=i[1],y;try{y=localStorage.getItem(a)}catch(v){}return y||(d(!0),localStorage.setItem(a,JSON.stringify(!0))),u},Bt=()=>{var a=Object(k.useState)(!1),r=Object(z.default)(a,2),i=r[0],u=r[1],d=()=>u(!i);return[i,d]},$t=a=>{var r=Object(k.useState)(a),i=Object(z.default)(r,2),u=i[0],d=i[1];return[u,d]},ft=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",u=()=>{var N=localStorage.getItem(i);if(N)try{return JSON.parse(N)}catch(e){return r}return r},d=Object(k.useState)(u()),y=Object(z.default)(d,2),v=y[0],E=y[1],R=N=>{E(N),localStorage.setItem(i,JSON.stringify(N))};return[v,R]},ut=t("fwXI"),ct=t("CC+v"),Ot=t.n(ct),Z=t("MaXC"),O=t("4IMT"),h=t.n(O),I=t("tL+A"),p=t("QpBz"),A=t.n(p),P=t("PpiC"),W=t("cUip"),H=t("iJl9"),U=t.n(H),ee=t("WWur"),te=t.n(ee),ve={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string","ui:widget":"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},"ui:width":{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string","ui:widget":"percentSlider"},"ui:labelWidth":{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number","ui:widget":"slider",max:400,"ui:options":{hideNumber:!0}},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},"ui:readonly":{title:"\u7F6E\u7070",type:"boolean"},required:{title:"\u5FC5\u586B",type:"boolean"}},be=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],"ui:widget":"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],"ui:widget":"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}}],me=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime","ui:options":{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number","ui:widget":"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],Oe=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},"ui:options":{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],Ce=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date","ui:options":{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],Ne=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:be,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:me},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:Oe},{title:"\u6A21\u677F",widgets:Ce}],Te={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"string",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],"ui:options":{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number","ui:widget":"slider",max:300,"ui:options":{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],"ui:widget":"radio"}}},Ve=t("gO06"),Re=t("4b23"),he=t.n(Re),Qe=t("JBAE"),_e=t.n(Qe);function $e(a,r){return a.indexOf(r)>-1}var Ye=a=>$e(Object.prototype.toString.call(a),"Object");function st(a){try{return JSON.parse(JSON.stringify(a))}catch(r){return a}}function Rt(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function ot(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function Et(a,r){if(a===void 0&&r===void 0)return!0;if(a===void 0||r===void 0)return!1;if(a===null&&r===null)return!0;if(a===null||r===null)return!1;if(a.constructor!==r.constructor)return!1;if(a.constructor===Array){if(a.length!==r.length)return!1;for(var i=0;i<a.length;i++)if(a[i].constructor===Array||a[i].constructor===Object){if(!Et(a[i],r[i]))return!1}else if(a[i]!==r[i])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(r).length)return!1;for(var u=0;u<Object.keys(a).length;u++){var d=Object.keys(a)[u];if(a[d]&&typeof a[d]!="number"&&(a[d].constructor===Array||a[d].constructor===Object)){if(!Et(a[d],r[d]))return!1}else if(a[d]!==r[d])return!1}}else if(a.constructor===String||a.constructor===Number)return a===r;return!0}function nn(a){var r;switch(a){case"date":r="YYYY-MM-DD";break;case"time":r="HH:mm:ss";break;default:r="YYYY-MM-DD HH:mm:ss"}return r}function Lt(a){return a.find((r,i,u)=>i!==u.findIndex(d=>JSON.stringify(r)===JSON.stringify(d)))}function St(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=an(a),u=i.map(v=>{var E=v.name,R=v.schema,N=R.type,e=R.enum,n=R.properties,s=R.items,o=N==="object"&&n,l=N==="array"&&s&&!e,m=E&&r[v.name];if(!m)return v;if(l){var f=St(s,m.items||{});return Object(C.a)(Object(C.a)({},v),{},{schema:Object(C.a)(Object(C.a)(Object(C.a)({},v.schema),m),{},{items:f})})}if(o){var b=St(v.schema,m);return Object(C.a)(Object(C.a)({},v),{},{schema:b})}return Object(C.a)(Object(C.a)({},v),{},{schema:Object(C.a)(Object(C.a)({},v.schema),m)})}),d={};u.forEach(v=>{d[v.name]=v.schema});var y={};return Object.keys(r).forEach(v=>{typeof v=="string"&&v.substring(0,3)==="ui:"&&(y[v]=r[v])}),Ft(d)?Object(C.a)(Object(C.a)({},a),y):Object(C.a)(Object(C.a)(Object(C.a)({},a),y),{},{properties:d})}function Ft(a){return Object.keys(a).length===0}function an(a){if(!a)return[];var r=a.properties,i=a.items,u=a.type;if(!r&&!i)return[];var d={};return u==="object"&&(d=r),u==="array"&&(d=i),Object.keys(d).map(y=>({schema:d[y],name:y}))}function Ht(){}var dn=a=>Function('"use strict";return ('+a+")")(),At=(a,r,i)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(i),`;
    const formData = `).concat(JSON.stringify(r),`;
    return (`).concat(a,")"))();function Ut(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function Qt(a){return Object.keys(a).some(r=>typeof a[r]=="function"?!0:typeof a[r]=="string"?Ut(a[r]):typeof a[r]=="object"?Qt(a[r]):!1)}function zt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2?arguments[2]:void 0,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=_e()(a);d.$id||(d.$id=r);var y=[],v=d.type==="object"&&d.properties,E=d.type==="array"&&d.items&&d.items.properties;return v&&(Object.entries(d.properties).forEach(R=>{var N=Object(z.default)(R,2),e=N[0],n=N[1],s=r+"/"+e;y.push(s),zt(n,s,r,u)}),delete d.properties),E&&(Object.entries(d.items.properties).forEach(R=>{var N=Object(z.default)(R,2),e=N[0],n=N[1],s=r+"/"+e;y.push(s),zt(n,s,r,u)}),delete d.items.properties),d.type&&(u[r]={parent:i,schema:d,children:y}),u}var Yt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=r.split("/");return i[i.length-1]},un=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",u=r.split("/");return(typeof i=="string"||typeof i=="number")&&(u[u.length-1]=i),u.join("/")},En=a=>({parent:a.parent,schema:Object(C.a)({},a.schema),data:a.data,children:a.children});function bt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,u={},d=a[r],y=_e()(d);return y&&(u=Object(C.a)({},y.schema),i&&u.$id&&delete u.$id,y.children.length>0&&y.children.forEach(v=>{var E=v;if(!!a[v]){try{i&&(E=a[v].schema.$id)}catch(N){console.log("catch",N)}var R=Yt(E);u.type==="object"&&(u.properties||(u.properties={}),u.properties[R]=bt(a,v,i)),u.type==="array"&&u.items&&u.items.type==="object"&&(u.items.properties||(u.items.properties={}),u.items.properties[R]=bt(a,v,i))}})),u}var rn=(a,r)=>{var i=zt(r);return a in i&&delete i[a],bt(i)},Sn=(a,r)=>{var i=Object(C.a)({},a);try{var u=a[r],d=r+he()(6),y=i[u.parent].children,v=y.findIndex(E=>E===r);return y.splice(v+1,0,d),i[d]=_e()(i[r]),i[d].schema.$id=d,[i,d]}catch(E){return console.error(E,"catcherror"),[a,r]}},hn=a=>{var r=a.id,i=a.key,u=a.schema,d=a.subSchema,y=zt(u),v=un(r,i)+"$$"+he()(10);if(r in y){var E=y[r].parent;if(E&&E in y){var R=y[E].children;try{var N=R.findIndex(e=>e===r);R.splice(N+1,0,v)}catch(e){console.error(e.message)}}try{y[v]={parent:y[r].parent,schema:d,children:[]},y[v].schema.$id=v}catch(e){console.error(e.message)}}return[bt(y),v]},Mt=a=>{var r=a.selected,i=a.name,u=a.schema,d=a.flatten,y=r||"#",v;if(y&&y[0]==="0"||y==="#"){var E=Object(C.a)({},d);try{var R=y.substring(1);v=R+"/"+i+"_"+he()(6),y==="#"&&(v="#/"+i+"_"+he()(6),R="#");var N=E[R].children;N.push(v);var e={parent:R,schema:Object(C.a)(Object(C.a)({},u),{},{$id:v}),data:void 0,children:[]};E[v]=e}catch(g){console.error(g,"catch")}return{newId:v,newFlatten:E}}var n=i+"_"+he()(6),s=r.split("/");s.pop(),s.push(n),v=s.join("/");var o=Object(C.a)({},d);try{var l=o[r],m=o[l.parent].children,f=m.findIndex(g=>g===r);m.splice(f+1,0,v);var b={parent:l.parent,schema:Object(C.a)(Object(C.a)({},u),{},{$id:v}),data:void 0,children:[]};o[v]=b}catch(g){console.error(g)}return{newId:v,newFlatten:o}},cn=a=>{var r=a.dragId,i=a.dragItem,u=a.dropId,d=a.position,y=a.flatten,v=u==="#"?"inside":d,E=Object(C.a)({},y);i&&(E[r]=i);var R=i||E[r],N=E[u],e=N;if(v!=="inside"){var n=N.parent;e=E[n]}if(u.indexOf(r)>-1)return[E,r];var s=r;try{var o=e.schema.$id;s=s.replace(R.parent,o)}catch(g){}try{var l=E[R.parent],m=l.children.indexOf(r);m>-1&&l.children.splice(m,1)}catch(g){console.error(g)}try{var f=e.children||[],b=f.indexOf(u);switch(v){case"up":f.splice(b,0,r);break;case"down":f.splice(b+1,0,r);break;default:f.push(r);break}e.children=f}catch(g){console.error(g)}return R.parent=e.$id,[E,s]},mn=(a,r)=>!a||!r?{}:(Object.entries(a).forEach(i=>{var u=Object(z.default)(i,2),d=u[0],y=u[1],v=sn(r,d);a[d].data=v}),a),je=a=>(r,i)=>{},Le=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var u=r[i].data,d=Object.keys(r),y=d.filter(v=>{var E=i.split("/").length,R=v.split("/").length;return v.indexOf(i)>-1&&R>E});return y&&y.length>0&&(u===void 0&&["object","array"].indexOf(r[i].schema.type)>-1&&(u={}),y.forEach(v=>{var E=i.split("/").length,R=v.split("/").length;if(R===E+1){var N=a(r,v),e=Yt(v);u[e]=N}})),u}catch(v){return}},nt=(a,r,i)=>{try{var u=i[r];if(u.schema[a]!==void 0)return u.schema[a];if(u&&u.parent){var d=i[u.parent].schema;return d[a]!==void 0?d[a]:nt(a,u.parent,i)}}catch(y){return}};function at(a){return Function('"use strict";return ('+a+")")()}function Ct(a){if(!a)return[];var r=a.properties,i=a.items,u=a.type;if(!r&&!i)return[];var d={};return u==="object"&&(d=r),u==="array"&&(d=i.properties),Object.keys(d).map(y=>({schema:d[y],name:y}))}function sn(a,r){r=on(r,a);for(var i=0,u=r.length;a!=null&&i<u;){var d=Nt(r[i++]);a=d?a[d]:a}return i&&i==u?a:void 0}function on(a,r){return Array.isArray(a)?a:Wt(a,r)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function Nt(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var r="".concat(a);return r=="0"&&1/a==-INFINITY?"-0":r}var Vt=/#\/.+\//,Kt=/^\w*$/;function Wt(a,r){if(Array.isArray(a))return!1;var i=typeof a;return i==="number"||i==="boolean"||a==null?!0:Kt.test(a)||!Vt.test(a)||r!=null&&a in Object(r)}var jt=a=>{if(a&&a.propsSchema){var r=a.propsSchema,i=Object(P.a)(a,["propsSchema"]);return Object(C.a)({schema:r},i)}return a},wn=a=>{if(a&&a.schema){var r=a.schema,i=Object(P.a)(a,["schema"]);return Object(C.a)({propsSchema:r},i)}return a},Pn=t("CLjb"),Ga=t("fK6R"),Bn=a=>{var r=a.text,i=a.name,u=a.schema,d=a.icon,y=Object(Pn.a)({item:{type:"box",dragItem:{parent:"#",schema:u,children:[]},$id:"#/".concat(i,"_").concat(he()(6))},end:(m,f)=>{var b=f.getDropResult()},collect:m=>({isDragging:m.isDragging()})}),v=Object(z.default)(y,2),E=v[0].isDragging,R=v[1],N=Ke(),e=X(),n=e.selected,s=e.flatten,o=e.onFlattenChange,l=()=>{var m=Mt({selected:n,name:i,schema:u,flatten:s}),f=m.newId,b=m.newFlatten;o(b),N({selected:f})};return c.a.createElement("div",{ref:R},c.a.createElement(Ln,{text:r,icon:d,onClick:l}))},$n=Bn,Ln=a=>{var r=a.onClick,i=a.text,u=a.icon;return c.a.createElement("li",{className:"left-item",onClick:r},i)},F=a=>{var r=X(),i=r.userProps,u=i===void 0?{}:i,d=u.settings,y=Array.isArray(d)?d:Ne;return c.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(y)?y.map((v,E)=>v&&v.show===!1?null:c.a.createElement("div",{key:E},c.a.createElement("p",{className:"f6 b"},v.title),c.a.createElement("ul",{className:"pl0"},Array.isArray(v.widgets)?v.widgets.map((R,N)=>c.a.createElement($n,Object(re.default)({key:N.toString()},R,a))):c.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):c.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},K=F,ae=t("Z8Mf"),fe=t("j7zX"),xe=t.n(fe),De=t("UESt"),Ie=t("97ez"),Pe=t("pJsf"),We=t("g4D/"),Xe=t.n(We);function xt(a){var r=a.value,i=a.onChange,u=a.disabled,d=a.readonly,y=v=>{i(v.target.checked)};return c.a.createElement(Xe.a,{disabled:u||d,onChange:y,checked:r})}function Ze(a){var r=a.schema||{},i=r.enum,u=r.enumNames,d=a.value&&Array.isArray(a.value)?a.value:[];return c.a.createElement(Xe.a.Group,{disabled:a.disabled||a.readonly,value:d,onChange:a.onChange},(i||[!0,!1]).map((y,v)=>c.a.createElement(Xe.a,{value:y,key:v},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:u?u[v]:y}}))))}var Xt=t("ypy7"),Tt=t.n(Xt),Zt=t("rNQX");function It(a){var r=a.schema.format,i=d=>{a.disabled||a.readonly||a.onChange(d.color)},u=d=>{a.onChange(d.target.value)};return c.a.createElement("div",{className:"fr-color-picker"},c.a.createElement(Tt.a,{type:r,animation:"slide-up",color:a.value?a.value:"#ffffff",onChange:i}),a.readonly?c.a.createElement("span",null,a.value||"#ffffff"):c.a.createElement(U.a,{placeholder:"#ffffff",disabled:a.disabled,value:a.value,onChange:u}))}var kt=t("GBD3"),qt=t("wXtC"),ze=t.n(qt),pt=t("mxgt"),rt=t("4ZwL"),Je=t.n(rt),ke=t("wd/R"),it=t.n(ke),ln=(a,r,i)=>{var u=a.invalid?{borderColor:"#f5222d"}:{},d=a.schema.format,y=d===void 0?"dateTime":d,v=nn(y),E={};a.value?E.value=it()(a.value,v):E.value="";var R=a.description?{placeholder:a.description}:{},N=Object(C.a)(Object(C.a)(Object(C.a)(Object(C.a)({},R),a.options),E),{},{style:Object(C.a)({width:"100%"},u),disabled:a.disabled||a.readonly,onChange:r});return y==="dateTime"&&(N.showTime=!0),c.a.createElement(i,N)};function Dt(a){var r=a.schema.format,i=r===void 0?"dateTime":r,u=(y,v)=>a.onChange(v),d=i==="time"?Je.a:ze.a;return ln(a,u,d)}var Jt=(a,r,i)=>{var u=a.schema.format,d=u===void 0?"dateTime":u,y=nn(d),v={};a.value&&Array.isArray(a.value)&&a.value[0]&&a.value[1]&&(v={defaultValue:[it()(a.value[0],y),it()(a.value[1],y)]});var E=Object(C.a)(Object(C.a)(Object(C.a)({},a.options),v),{},{style:{width:"100%"},showTime:d==="dateTime",disabled:a.disabled||a.readonly,onChange:r});return c.a.createElement(i,E)},Ge=ze.a.RangePicker;function qe(a){var r=(i,u)=>a.onChange(u);return Jt(a,r,Ge)}var Fe=t("RBnf"),et=t("YJCA"),gn=a=>{var r=a.fold,i=r===void 0?!1:r,u=a.width,d=a.height,y=a.fill,v=a.style,E=v===void 0?{}:v,R=Object(P.a)(a,["fold","width","height","fill","style"]);return c.a.createElement("div",Object(re.default)({style:E,className:i?"fold-icon":"fold-icon fold-icon-active"},R),c.a.createElement("svg",{viewBox:"0 0 1024 1024",width:u||18,height:d||18},c.a.createElement("path",{d:"M942.048 306.176c-12.288-12.288-31.328-13.024-43.008-2.016L529.056 674.112c-15.072 15.872-19.008 15.808-34.816 0L124.288 304.16c-11.68-11.04-30.72-10.272-43.008 2.016-12.512 12.512-13.216 32.032-1.6 43.68L490.624 760.8c5.056 5.056 11.648 7.328 18.464 7.744h5.152c6.816-.448 13.408-2.72 18.464-7.744l410.944-410.944c11.584-11.648 10.88-31.2-1.6-43.68z",fill:y||"#3c3c3c"})))},vn=gn,_t=(a,r,i)=>{if(Array.isArray(r)&&Array.isArray(i)){if(typeof a=="string"||typeof a=="number"){var u=r.indexOf(a);return u>-1?i[u]:a}else if(Array.isArray(a)){var d=a.map(y=>_t(a,r,i));return String(d)}return a}return a},yn=a=>{var r=a.schema,i=r===void 0?{}:r,u=a.value,d=u===void 0?[]:u,y=a.index,v=bn({schema:i,value:d,index:y}).filter(E=>E.title).slice(0,3);return c.a.createElement("ul",{className:"flex overflow-hidden",style:{paddingRight:45}},v.map((E,R)=>E.title?c.a.createElement("li",{className:"flex-auto mr2 overflow-hidden",key:R},c.a.createElement("span",{className:"fw5"},E.title,": "),c.a.createElement("span",null,E.text)):null))},fn=yn,bn=a=>{var r=a.schema,i=r===void 0?{}:r,u=a.value,d=u===void 0?[]:u,y=a.index,v=i.items,E=v===void 0?{}:v;if(E.type!=="object")return[];var R=E&&E.properties||{};R=Object.values(R);var N=d&&d.length&&d[y]||{},e=Object.values(N),n=R.map((s,o)=>{var l=s&&s["ui:hidden"];if(!l){var m=s.title,f=e[o];return f===null&&f===void 0?f="":typeof f=="boolean"?f=f?"\u662F":"\u5426":typeof f!="string"&&typeof f!="number"&&f?f="{\u590D\u6742\u7ED3\u6784}":s.enum&&s.enumNames&&(f=_t(f,s.enum,s.enumNames)),{title:m,text:f}}});return n.filter(s=>!!s)},jn=Object(et.c)(()=>c.a.createElement("span",{className:"fr-move-icon"},":::"));class pn extends c.a.Component{constructor(){super(...arguments);this.toggleFold=()=>{this.props.toggleFoldItem(this.props.name)}}componentDidMount(){var r=this.props,i=r.p,u=i===void 0?{}:i,d=r.name,y=r.fold,v=bn({schema:u.schema,value:u.value,index:d}),E=v&&v[0]&&v[0].text;E&&y!==0&&this.props.toggleFoldItem(d)}render(){var r=this.props,i=r.item,u=r.p,d=u===void 0?{}:u,y=r.name,v=r.fold,E=Object(C.a)(Object(C.a)({},d),{},{index:y}),R=d.options,N=R===void 0?{}:R,e=d.readonly,n=d.formData,s=d.value,o=N.foldable,l=N.hideDelete,m=N.itemButtons,f=Ut(l);f&&(typeof f=="string"?l=At(f,n,s):typeof f=="function"&&(l=f(n,s)));var b=d.schema.items&&d.schema.items.type=="object",g="fr-set ba b--black-10 hover-b--black-20 relative flex flex-column";return o&&v?g+=" pv12":d.displayType==="row"&&(g+=" pt44"),c.a.createElement("li",{className:g},o&&v&&b?c.a.createElement(fn,E):i,o&&c.a.createElement(vn,{fold:v,onClick:this.toggleFold,style:{position:"absolute",top:12,right:32}}),!e&&c.a.createElement(jn,null),!(o&&v||l||e)&&c.a.createElement("div",{className:"self-end flex"},c.a.createElement(xn,{type:"dashed",icon:"delete",onClick:()=>{var j=[...d.value];j.splice(y,1),d.onChange(j)}},"\u5220\u9664"),m&&m.length>0&&m.map((j,S)=>c.a.createElement(xn,{key:S.toString(),className:"ml2",type:"dashed",icon:j.icon,onClick:()=>{var T=[...d.value];if(typeof window[j.callback]=="function"){var w=window[j.callback](T,y);d.onChange(w)}}},j.text||""))))}}var Gt=Object(et.b)(pn);class zn extends c.a.Component{constructor(){super(...arguments);this.handleAddClick=()=>{var r=this.props,i=r.p,u=r.addUnfoldItem,d=[...i.value];d.push(i.newItem),i.onChange(d),u()}}render(){var r=this.props,i=r.p,u=r.foldList,d=u===void 0?[]:u,y=r.toggleFoldItem,v=i||{},E=v.options,R=E===void 0?{}:E,N=v.extraButtons,e=N===void 0?{}:N,n=R.buttons||e||[],s=i.readonly,o=i.schema,l=o===void 0?{}:o,m=l.maxItems,f=i.value||[],b=m?m>f.length:!0;return c.a.createElement("ul",{className:"pl0 ma0"},f.map((g,j)=>c.a.createElement(Gt,{key:"item-".concat(j),index:j,name:j,p:i,fold:d[j],toggleFoldItem:y,item:i.children})),!s&&c.a.createElement("div",{className:"tr"},b&&c.a.createElement(xn,{icon:"add",onClick:this.handleAddClick},"\u65B0\u589E"),n&&n.length>0&&n.map((g,j)=>c.a.createElement(xn,{className:"ml2",icon:g.icon,key:j.toString(),onClick:()=>{if(g.callback==="clearAll"){i.onChange([]);return}if(g.callback==="copyLast"){var S=[...i.value],T=S.length-1;S.push(T>-1?S[T]:i.newItem),i.onChange(S);return}if(typeof window[g.callback]=="function"){var w=[...i.value],L=$=>i.onChange($);window[g.callback](w,L,i.newItem)}}},g.text))))}}var ea=Object(et.a)(zn);class Mn extends c.a.Component{constructor(r){super(r);this.addUnfoldItem=()=>this.setState({foldList:[...this.state.foldList,0]}),this.toggleFoldItem=u=>{var d=this.state.foldList,y=d===void 0?[]:d;y[u]=!y[u],this.setState({foldList:y})},this.handleSort=u=>{var d=u.oldIndex,y=u.newIndex,v=this.props,E=v.onChange,R=v.value;E(Object(et.d)(R,d,y)),this.setState({foldList:Object(et.d)(this.state.foldList,d,y)})};var i=this.props.value.length||0;this.state={foldList:new Array(i).fill(!1)||[]}}render(){var r=this.state.foldList;return c.a.createElement(ea,{p:this.props,foldList:r,toggleFoldItem:this.toggleFoldItem,addUnfoldItem:this.addUnfoldItem,distance:6,useDragHandle:!0,helperClass:"fr-sort-help-class",shouldCancelStart:i=>i.toElement&&i.toElement.className==="fr-tooltip-container",onSortEnd:this.handleSort})}}Mn.defaultProps={value:[]};function xn(a){var r=a.icon,i=a.children,u=Object(P.a)(a,["icon","children"]),d;switch(r){case"add":d="PlusCircleOutlined";break;case"delete":d="DeleteOutlined";break;default:d=r;break}var y=Fe[d];return y?c.a.createElement(h.a,Object(re.default)({},u,{icon:c.a.createElement(y,null)}),i):c.a.createElement(h.a,u,i)}var ta=Mn,Vn=t("/MfK"),Ha=t("w5pM");function na(a){return c.a.createElement("div",{className:"flex flex-column"},c.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},c.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,c.a.createElement(h.a,{size:"small",className:"self-end",type:"dashed",icon:c.a.createElement(Vn.a,null)},"\u5220\u9664")),c.a.createElement(h.a,{size:"small",className:"self-end",icon:c.a.createElement(Ha.a,null)},"\u6DFB\u52A0"))}function Ua(a){var r=a.children;return c.a.createElement("div",{className:"w-100"},r)}var Qa=t("ek7I"),Kn=t("FAat"),aa=t.n(Kn),ra=a=>r=>{var i=a.Option,u=N=>r.onChange(N),d=r.invalid?{borderColor:"#f5222d"}:{},y=r.schema||{},v=y.enum,E=y.enumNames,R=r.value&&Array.isArray(r.value)?r.value:[];return c.a.createElement(a,Object(re.default)({},r.options,{style:Object(C.a)({width:"100%"},d),mode:"multiple",disabled:r.disabled||r.readonly,value:R,onChange:u}),(v||[]).map((N,e)=>c.a.createElement(i,{value:N,key:e},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:E?E[e]:N}}))))},Wn=ra(aa.a),Ya=t("b+Mx"),Cn=t("5Dct"),Dn=t.n(Cn),sa=a=>r=>{var i=r.invalid?{borderColor:"#f5222d"}:{},u=r.schema,d=u.max,y=u.min,v=u.step,E={};return(d||d===0)&&(E={max:d}),(y||y===0)&&(E=Object(C.a)(Object(C.a)({},E),{},{min:y})),v&&(E=Object(C.a)(Object(C.a)({},E),{},{step:v})),c.a.createElement(a,Object(re.default)({},E,{style:Object(C.a)({width:"100%"},i),disabled:r.disabled||r.readonly},r.options,{value:r.value,onChange:r.onChange}))},ia=sa(Dn.a),Xa=t("7kJ1"),oa=t("qPIi"),la=t.n(oa),Za=(a,r,i)=>{var u=i.Group,d=a.schema||{},y=d.enum,v=d.enumNames;return c.a.createElement(u,{disabled:a.disabled||a.readonly,value:a.value,onChange:r},(y||[!0,!1]).map((E,R)=>c.a.createElement(i,{value:E,key:R},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:v?v[R]:E}}))))};function da(a){var r=i=>a.onChange(i.target.value);return Za(a,r,la.a)}var Jn=a=>r=>{var i=a.Option,u=R=>r.onChange(R),d=r.invalid?{borderColor:"#f5222d"}:{},y=r.schema||{},v=y.enum,E=y.enumNames;return c.a.createElement(a,Object(re.default)({style:Object(C.a)({width:"100%"},d)},r.options,{disabled:r.disabled||r.readonly,value:r.value,onChange:u}),(v||[]).map((R,N)=>{var e=E?E[N]:R,n=typeof e=="string"&&e[0]==="<";return n&&(e=c.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})),c.a.createElement(i,{value:R,key:N},e)}))},ua=Jn(aa.a),ka=t("tCGa"),qa=t("DH6M"),Gn=t.n(qa),Hn=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,u=i.max,d=i.min,y=i.step,v={};(u||u===0)&&(v={max:u}),(d||d===0)&&(v=Object(C.a)(Object(C.a)({},v),{},{min:d})),y&&(v=Object(C.a)(Object(C.a)({},v),{},{step:y}));var E=!1;a.options&&a.options.hideNumber&&(E=!0);var R=a.readonly?c.a.createElement("span",{style:{width:"90px"}},a.value===""?"-":a.value):c.a.createElement(Dn.a,Object(re.default)({},a.options,v,{style:Object(C.a)({width:"90px"},r),value:a.value,disabled:a.disabled,onChange:a.onChange}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(Gn.a,Object(re.default)({style:{flexGrow:1,marginRight:E?0:12}},v,{onChange:a.onChange,value:typeof a.value=="number"?a.value:d||0,disabled:a.disabled||a.readonly})),E?null:R)},ca=Hn,_a=t("LGkk"),ma=t("rVaU"),er=t.n(ma);function va(a){return c.a.createElement(er.a,{disabled:a.disabled||a.readonly,onChange:r=>a.onChange(a.name,r),defaultChecked:a.value})}var fa=U.a.TextArea;function pa(a){var r=a.options,i=a.invalid,u=i?{borderColor:"#f5222d"}:{},d={rows:3},y=Object(C.a)(Object(C.a)({},d),r),v=E=>a.onChange(E.target.value);return c.a.createElement(fa,Object(re.default)({style:u,disabled:a.disabled||a.readonly,value:a.value},y,{onChange:v}))}var tr=t("VDQ/"),ha=t("B8+X"),ga=t.n(ha),ya=t("z7Xi");function ba(a){var r={name:"file",action:a.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(i){i.file.status==="done"?(A.a.success("".concat(i.file.name," \u4E0A\u4F20\u6210\u529F")),a.onChange(i.file.response.url)):i.file.status==="error"&&A.a.error("".concat(i.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){a.onChange("")}};return c.a.createElement("div",{className:"fr-upload-mod"},c.a.createElement(ga.a,Object(re.default)({},r,{className:"fr-upload-file"}),c.a.createElement(h.a,null,c.a.createElement(ya.a,null)," \u4E0A\u4F20")),a.value&&c.a.createElement("a",{href:a.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var ur=t("/xgg"),ja=t("aOJk"),xa=t.n(ja),Oa=t("mpQp"),Ea="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",nr=(a,r)=>a==="image"?c.a.createElement("img",{src:r||Ea,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}):null,Sa=(a,r)=>a!=="image"?null:c.a.createElement(xa.a,{content:nr(a,r),className:"fr-preview",placement:"bottom"},c.a.createElement(Oa.a,null));function Ca(a){var r=a.options,i=r===void 0?{}:r,u=a.invalid,d=u?{borderColor:"#f5222d"}:{},y=a.schema.format,v=y===void 0?"text":y,E=v==="image"?"text":v,R=N=>a.onChange(N.target.value);return c.a.createElement(U.a,Object(re.default)({style:d},i,{value:a.value,type:E,disabled:a.disabled||a.readonly,addonAfter:i.addonAfter?i.addonAfter:Sa(v,a.value),onChange:R}))}var Da={checkbox:xt,checkboxes:Ze,color:It,date:Dt,dateRange:qe,input:Ca,list:ta,listEditor:na,map:Ua,multiSelect:Wn,number:ia,radio:da,select:ua,slider:ca,switch:va,textarea:pa,upload:ba};function Ra(a){var r=a.onChange,i=a.value,u=a.disabled,d=a.readonly,y=a.options,v=E=>{try{var R=un(i,E.target.value);r(R)}catch(N){}};return c.a.createElement(U.a,Object(re.default)({disabled:u||d},y,{onChange:v,value:Yt(i)}))}var Un=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,u=i.max,d=i.min,y=i.step,v={};(u||u===0)&&(v={max:u}),(d||d===0)&&(v=Object(C.a)(Object(C.a)({},v),{},{min:d})),y&&(v=Object(C.a)(Object(C.a)({},v),{},{step:y}));var E=!1;a.options&&a.options.hideNumber&&(E=!0);var R=s=>typeof s=="string"&&s.endsWith("%"),N=100;if(R(a.value))try{N=Number(a.value.split("%")[0]),Number.isNaN(N)&&(N=100)}catch(s){}var e=s=>{var o=s+"%";a.onChange(o)},n=a.readonly?c.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):c.a.createElement(Dn.a,Object(re.default)({},a.options,v,{style:Object(C.a)({width:"80px"},r),value:N,disabled:a.disabled,onChange:e,formatter:s=>"".concat(s,"%"),parser:s=>s.replace("%","")}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(Gn.a,Object(re.default)({style:{flexGrow:1,marginRight:E?0:12}},v,{onChange:e,max:100,tipFormatter:s=>s+"%",value:N||100,disabled:a.disabled||a.readonly})),E?null:n)},Fa=Un,Qn={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes","*?readonly":"text"};function Yn(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qn,i=a.type,u=a.format,d=a.enum,y=a.readonly;if(a["ui:widget"])return a["ui:widget"];var v=[];y&&(v.push("".concat(i,"?readonly")),v.push("*?readonly")),d&&(v.push("".concat(i,"?enum")),v.push("*?enum")),u&&v.push("".concat(i,":").concat(u)),v.push(i);var E="";return v.some(R=>(E=r[R],!!E)),E}function Aa(){var a=X(),r=a.selected,i=a.flatten,u=a.onItemChange,d=a.userProps,y=d===void 0?{}:d,v=y.settings,E=y.commonSettings,R={},N={},e=(S,T)=>{var w=[];return S.forEach(L=>{var $=L.widgets,M=$.filter(J=>J.widget).map(J=>Object(C.a)(Object(C.a)({},J),{},{setting:Object(C.a)(Object(C.a)({},T),J.setting)}));w=[...w,...M]}),w},n=S=>{if(r)try{var T=i[r];T&&T.schema&&u(r,Object(C.a)(Object(C.a)({},T),{},{schema:S}))}catch(w){console.log(w,"catch")}},s=Array.isArray(v)?[...v,{widgets:[...be,...me,...Oe]}]:Ne,o=Ye(E)?E:ve,l=e(s,o),m,f;try{if(m=i[r],m&&(f=Yn(m.schema)),f){var b=l.find(S=>S.widget===f)||{},g=b.setting;R={schema:{type:"object",properties:Object(C.a)({},g)}},N=m.schema}}catch(S){console.log(S)}var j=Object(C.a)(Object(C.a)({},Da),{},{idInput:Ra,percentSlider:Fa});return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Nn,{schema:R,formData:N,onChange:n,widgets:j,preview:!0,frProps:{displayType:"column",showDescIcon:!1}}))}function Na(){var a=X(),r=a.widgets,i=a.frProps,u=a.userProps,d=Ke(),y=u&&u.globalSettings?u.globalSettings:Te,v=E=>{d({frProps:E})};return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Nn,{schema:{schema:y},formData:i,onChange:v,widgets:r,preview:!0,frProps:{displayType:"column",showDescIcon:!0}}))}var Xn=xe.a.TabPane;function Ta(){var a=V({showRight:!0,showItemSettings:!1}),r=Object(z.default)(a,2),i=r[0],u=r[1],d=X(),y=d.selected,v=i.showRight,E=i.showItemSettings,R=()=>u({showRight:!v}),N=()=>c.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:R},c.a.createElement(De.a,{className:"f5"})),e=()=>c.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},c.a.createElement(N,null));return Object(k.useEffect)(()=>{y&&y[0]==="0"||y==="#"||!y?u({showItemSettings:!1}):u({showItemSettings:!0})},[y]),v?c.a.createElement("div",{className:"right-layout relative pl2"},c.a.createElement(N,null),c.a.createElement(xe.a,{defaultActiveKey:"1",onChange:()=>{}},E&&c.a.createElement(Xn,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},c.a.createElement(Aa,null)),c.a.createElement(Xn,{tab:"\u8868\u5355\u914D\u7F6E",key:E?"2":"1"},c.a.createElement(Na,null)))):c.a.createElement(e,null)}var Ia=a=>{var r=a.children,i=r===void 0?[]:r,u=a.preview;return c.a.createElement(c.a.Fragment,null,i.map((d,y)=>{var v={id:d,preview:u};return c.a.createElement(Fn,Object(re.default)({key:y.toString()},v))}))},wa=Ia,Pa=a=>{var r=a.$id,i=a.item,u=a.labelClass,d=a.contentClass,y=a.isComplex,v=a.children,E=i.schema,R=i.data,N=X(),e=N.onItemChange,n=N.flatten,s=N.widgets,o=N.mapping,l=N.frProps,m=l===void 0?{}:l,f=m.labelWidth,b=m.displayType,g=m.showDescIcon,j=m.showValidate,S=E.type,T=E.title,w=E.description,L=E.required,$=Yn(E,o),M=E["ui:widget"];M&&s[M]&&($=M);var J=s[$];if(!J){var ce=Object(C.a)({},E);delete ce["ui:widget"],$=Yn(ce,o),J=s[$]||"input"}var oe=nt("ui:labelWidth",r,n)||f,se=Rt(oe)?Number(oe):ot(oe)?oe:110,ie={width:se};$==="checkbox"?ie={flexGrow:1}:(y||b==="column")&&(ie={flexGrow:1});var _=B=>{var ne=Object(C.a)({},i);ne.data=B,e(r,ne,"data")},le={};$==="checkbox"&&b==="row"&&(le.marginLeft=oe);var de={disabled:E["ui:disabled"],readonly:E["ui:readonly"],hidden:E["ui:hidden"],options:E["ui:options"],labelWidth:E["ui:labelWidth"],width:E["ui:width"]};return c.a.createElement(c.a.Fragment,null,E.title?c.a.createElement("div",{className:u,style:ie},c.a.createElement("label",{className:"fr-label-title ".concat($==="checkbox"||b==="column"?"no-colon":""),title:T},L&&c.a.createElement("span",{className:"fr-label-required"}," *"),c.a.createElement("span",{className:"".concat(y?"b":""," ").concat(b==="column"?"flex-none":"")},T),w&&(g?c.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":w},c.a.createElement("i",{className:"fr-tooltip-icon"}),c.a.createElement("div",{className:"fr-tooltip-container"},c.a.createElement("i",{className:"fr-tooltip-triangle"}),w)):c.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",w,"\xA0)")),b!=="row"&&j&&c.a.createElement("span",{className:"fr-validate"},"validation"))):null,c.a.createElement("div",{className:d,style:le},c.a.createElement(J,Object(re.default)({value:R,onChange:_,schema:E},de,{children:v}))))},Zn=Pa,ar=t("iU8R"),Ba=t("dhM6"),$a=t("lfch"),La=t("aMZS");function Rn(a){var r=a.$id,i=a.item,u=a.inside,d=u===void 0?!1:u,y=a.children,v=a.style,E=Object(k.useState)(),R=Object(z.default)(E,2),N=R[0],e=R[1],n=X(),s=n.flatten,o=n.onItemChange,l=n.onFlattenChange,m=n.selected,f=n.hovering,b=Ke(),g=i.schema,j=g.type,S=Object(k.useRef)(null),T=Object(Pn.a)({item:{type:"box",$id:d?0+r:r},end:(Se,ge)=>{var Ue=ge.getDropResult()},collect:Se=>({isDragging:Se.isDragging()})}),w=Object(z.default)(T,3),L=w[0].isDragging,$=w[1],M=w[2],J=Object(La.a)({accept:"box",drop:(Se,ge)=>{var Ue=ge.didDrop();if(!Ue){console.log(Se.dragItem,"tems");var ue=cn({dragId:Se.$id,dragItem:Se.dragItem,dropId:r,position:N,flatten:s}),ye=Object(z.default)(ue,2),Be=ye[0],vt=ye[1];l(Be),b({selected:vt})}},hover:(Se,ge)=>{var Ue=ge.isOver({shallow:!0});if(Ue){var ue=S.current&&S.current.getBoundingClientRect(),ye=(ue.bottom-ue.top)/2,Be=ge.getSourceClientOffset(),vt=Be.y-ue.top;d?e("inside"):(vt<=ye&&e("up"),vt>ye&&e("down"))}},collect:Se=>({isOver:Se.isOver({shallow:!0}),canDrop:Se.canDrop()})}),ce=Object(z.default)(J,2),oe=ce[0],se=oe.canDrop,ie=oe.isOver,_=ce[1],le=se&&ie;M(_(S));var de=Se=>{Se.stopPropagation();var ge=d?"0"+r:r;b({selected:ge})},B=Se=>{Se.stopPropagation();var ge=Object(C.a)({},s),Ue="#";try{var ue=ge[r].parent,ye=ge[ue].children,Be=ye.indexOf(r);Be>0?Ue=ye[Be-1]:Ue=ye[1]||ue}catch(vt){console.log("catch",vt)}delete ge[r],l(ge),b({selected:Ue})},ne=Se=>{Se.stopPropagation();var ge=Sn(s,r),Ue=Object(z.default)(ge,2),ue=Ue[0],ye=Ue[1];l(ue),b({selected:ye})},q=()=>{},pe=()=>{},Ae=m===r&&!d;m&&m[0]==="0"&&(Ae=m.substring(1)===r&&d);var He=d?"0"+r:r,Ee={backgroundColor:f===He?"#ecf5ff":"#fff",opacity:L?0:1};if(d?Ee=Object(C.a)(Object(C.a)({},Ee),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):r==="#"?Ee=Object(C.a)(Object(C.a)({},Ee),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):j==="object"&&(Ee=Object(C.a)(Object(C.a)({},Ee),{},{paddingTop:12})),le&&(d?Ee=Object(C.a)(Object(C.a)({},Ee),{},{boxShadow:"0 -3px 0 red"}):N==="up"?Ee=Object(C.a)(Object(C.a)({},Ee),{},{boxShadow:"0 -3px 0 red"}):N==="down"&&(Ee=Object(C.a)(Object(C.a)({},Ee),{},{boxShadow:"0 3px 0 red"}))),Ae&&(Ee=Object(C.a)(Object(C.a)({},Ee),{},{outline:"2px solid #409eff",borderColor:"#fff"})),v&&typeof v=="object"&&(Ee=Object(C.a)(Object(C.a)({},Ee),v)),r==="#"&&d)return y;var tt=g&&g.$id&&Yt(g.$id);return tt==="#"&&(tt=""),c.a.createElement("div",{ref:S,style:Ee,className:"field-wrapper relative w-100",onClick:de,onMouseEnter:q,onMouseLeave:pe},!d&&Ae&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:$},c.a.createElement(Ba.a,{style:{color:"#fff"}})),!d&&c.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},tt),y,Ae&&!d&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"pointer",onClick:B},c.a.createElement(Vn.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),c.a.createElement("div",{className:"pointer",onClick:ne},c.a.createElement($a.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var za=a=>{var r=a.id,i=r===void 0?"#":r,u=a.preview,d=u===void 0?!1:u,y=X(),v=y.flatten,E=y.frProps,R=E===void 0?{}:E,N=R.displayType,e=R.column,n=v[i];if(!n)return null;var s=n.schema,o=s.type==="object",l=s.type==="array"&&s.enum===void 0,m=o||l,f=s["ui:width"],b="fr-field w-100 ".concat(m?"fr-field-complex":""),g="fr-label mb2",j="fr-content",S={};switch(!m&&f?S={width:f,paddingRight:"12px"}:!m&&e>1&&(S={width:"calc(100% /".concat(e,")"),paddingRight:"12px"}),s.type){case"object":s.title&&(b+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",g+=" fr-label-object bg-white absolute ph2 top-upper left-1"),b+=" fr-field-object",s.title&&(j+=" ml3");break;case"array":s.title&&!s.enum&&(g+=" mt2 mb3");break;case"boolean":s["ui:widget"]!=="switch"&&(s.title&&(g+=" ml2",g=g.replace("mb2","mb0")),j+=" flex items-center",b+=" flex items-center flex-row-reverse justify-end");break;default:N==="row"&&(g=g.replace("mb2","mb0"))}var T=s.type==="boolean"&&s["ui:widget"]!=="switch";N==="row"&&!m&&!T&&(b+=" flex items-center",g+=" flex-shrink-0 fr-label-row",g=g.replace("mb2","mb0"),j+=" flex-grow-1 relative"),N==="row"&&T&&(j+=" flex justify-end pr2");var w={$id:i,item:n,labelClass:g,contentClass:j,isComplex:m},L={children:n.children,preview:d},$=n.children&&n.children.length>0?c.a.createElement("ul",{className:"flex flex-wrap pl0"},c.a.createElement(wa,L)):null;if(d)return c.a.createElement("div",{style:S,className:b},c.a.createElement(Zn,w,(o||l)&&$));var M=Object.keys(v).length<2;return M?c.a.createElement(Rn,{style:S,$id:i,item:n},c.a.createElement("div",{className:"".concat(b," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):c.a.createElement(Rn,{style:S,$id:i,item:n},c.a.createElement("div",{className:b},c.a.createElement(Zn,w,(o||l)&&c.a.createElement(Rn,{$id:i,item:n,inside:!0},$||c.a.createElement("div",{className:"h2"})))))},Fn=za,An=U.a.TextArea;function rr(a,r){var i=a.schema,u=a.formData,d=a.onChange,y=a.onSchemaChange,v=a.setGlobal,E=a.userProps,R=E===void 0?{}:E,N=a.frProps,e=N===void 0?{}:N,n=Object(P.a)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),s=V({showModal:!1,showModal2:!1,schemaForImport:""}),o=Object(z.default)(s,2),l=o[0],m=o[1],f=n.simple,b=f===void 0?!0:f,g=n.preview,j=R.transformFrom,S=R.transformTo,T=R.isNewVersion,w=R.extraButtons,L=w===void 0?[]:w,$={};i&&($=St(i.schema,i.uiSchema));var M=zt($),J=mn(M,u),ce=function(ye){var Be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",vt=bt(ye),wt=Le(ye);Be==="schema"&&y&&y(vt),d(wt)},oe=(ue,ye,Be)=>{J[ue]=ye,ce(J,Be)},se=()=>m({showModal:!l.showModal}),ie=()=>m({showModal2:!l.showModal2}),_=()=>{v({schema:{schema:{type:"object"}},formData:{},selected:void 0})},le=ue=>{m({schemaForImport:ue.target.value})},de=()=>{try{var ue=j(at(l.schemaForImport)),ye=!0;ue&&ue.propsSchema&&(ye=!1);var Be=jt(ue),vt=Be.schema,wt=Object(P.a)(Be,["schema"]);v(Pt=>({schema:{schema:vt},formData:{},selected:void 0,isNewVersion:ye,frProps:Object(C.a)(Object(C.a)({},Pt.frProps),wt)}))}catch(Pt){A.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}ie()},B={},ne="";try{var q=bt(J,"#",!0);e&&e.column&&(q["ui:column"]=e.column),e&&e.displayType&&(q["ui:displayType"]=e.displayType),e&&e.showDescIcon&&(q["ui:showDescIcon"]=e.showDescIcon),B=S(Object(C.a)({schema:q},e)),T||(B=wn(B)),ne=JSON.stringify(B,null,2)}catch(ue){}var pe=()=>{te()(ne),A.a.info("\u590D\u5236\u6210\u529F"),se()},Ae=()=>B,He=ue=>{try{var ye=ue.schema,Be=ue.propsSchema,vt=ue.uiSchema,wt=Object(P.a)(ue,["schema","propsSchema","uiSchema"]),Pt={schema:ye||Be},en=!0;!ye&&Be&&(en=!1),v(Q=>Object(C.a)(Object(C.a)({},Q),{},{schema:Pt,formData:{},selected:void 0,isNewVersion:en,frProps:Object(C.a)(Object(C.a)({},Q.frProps),wt)}))}catch(Q){console.error(Q)}},Ee=()=>{te()(ne)};Object(k.useImperativeHandle)(r,()=>({getValue:Ae,setValue:He,copyValue:Ee}));var tt=Object(C.a)({flatten:J,onFlattenChange:ce,onItemChange:oe,userProps:R,frProps:e},n),Se=Array.isArray(L)?L:[],ge=Se.filter(ue=>ue===!0||ue===!1),Ue=Se.filter(ue=>Ye(ue)&&ue.text);return b?c.a.createElement(x.Provider,{value:v},c.a.createElement(lt.Provider,{value:tt},c.a.createElement(Fn,{preview:!0}))):c.a.createElement(x.Provider,{value:v},c.a.createElement(lt.Provider,{value:tt},c.a.createElement("div",{className:"fr-generator-container"},c.a.createElement(K,null),c.a.createElement("div",{className:"mid-layout pr2"},c.a.createElement("div",{className:"mv2 mh1"},ge[0]!==!1&&c.a.createElement(h.a,{className:"mr2 mb1",onClick:()=>{v({preview:!g,selected:"#"})}},g?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),ge[1]!==!1&&c.a.createElement(h.a,{className:"mr2",onClick:_},"\u6E05\u7A7A"),ge[2]!==!1&&c.a.createElement(h.a,{className:"mr2",onClick:ie},"\u5BFC\u5165"),ge[3]!==!1&&c.a.createElement(h.a,{type:"primary",className:"mr2",onClick:se},"\u5BFC\u51FAschema"),Ue.map((ue,ye)=>c.a.createElement(h.a,Object(re.default)({key:ye.toString(),className:"mr2"},ue),ue.text||ue.children))),c.a.createElement("div",{className:"dnd-container"},c.a.createElement("div",{style:{height:g?33:0}}),c.a.createElement(Fn,{preview:g}))),c.a.createElement(Ta,{globalProps:e}),c.a.createElement(Ot.a,{visible:l.showModal,onOk:pe,onCancel:se,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},c.a.createElement("div",{className:"mt3"},c.a.createElement(An,{style:{fontSize:12},value:ne,autoSize:{minRows:10,maxRows:30}}))),c.a.createElement(Ot.a,{visible:l.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:de,onCancel:ie},c.a.createElement("div",{className:"mt3"},c.a.createElement(An,{style:{fontSize:12},value:l.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:le,autoSize:{minRows:10,maxRows:30}}))))))}var kn=Object(k.forwardRef)(rr);kn.defaultProps={labelWidth:120};var Nn=kn,Tn=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=arguments.length>2?arguments[2]:void 0,d=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=d||y;if(v){var E=Ct(r);E.map(N=>{d&&(r.properties[N.name]=a(N.schema,r,N.name)),y&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}if(i&&i.required&&Array.isArray(i.required)){var R=i.required.indexOf(u);R>-1&&(r.required=!0,i.required.splice(R,1)),i.required.length||delete i.required}return r},qn=a=>Object(C.a)(Object(C.a)({},a),{},{schema:Tn(a.schema)}),Ma=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=d||y;if(v){var E=Ct(r);E.map(R=>{d&&(r.properties[R.name]=a(R.schema,r,R.name)),y&&(r.items.properties[R.name]=a(R.schema,r,R.name))})}return typeof r.required=="boolean"&&(r.required&&i&&(i.required&&Array.isArray(i.required)?i.required.push(u):i.required=[u]),delete r.required),r},_n=a=>Object(C.a)(Object(C.a)({},a),{},{schema:Ma(a.schema)}),On=t("xwS/"),sr=t("4l2o"),ir=t("k/c8"),or={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function lr(a,r){var i=a.defaultValue,u=a.templates,d=a.submit,y=a.transformer,v=a.extraButtons,E=a.settings,R=a.commonSettings,N=a.globalSettings,e=a.widgets,n=e===void 0?{}:e,s=qn,o=_n;y&&(typeof y.from=="function"&&(s=y.from),typeof y.to=="function"&&(o=y.to));var l=r||Object(k.useRef)(),m=V({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),f=Object(z.default)(m,2),b=f[0],g=f[1];Object(k.useEffect)(()=>{var ne=i?s(i):or;ne&&ne.propsSchema?g({isNewVersion:!1}):g({isNewVersion:!0}),g({schema:jt(ne),formData:ne&&ne.formData||{}})},[i]);var j=b.formData,S=b.frProps,T=b.hovering,w=b.isNewVersion,L=b.preview,$=b.schema,M=b.selected,J=S.displayType,ce=J==="row",oe=Object(C.a)(Object(C.a)({},S),{},{showDescIcon:ce}),se=ne=>{g({formData:ne}),a.onChange&&a.onChange(ne)},ie=ne=>{var q=Object(C.a)({},$);q.schema=ne,g({schema:q}),a.onSchemaChange&&setTimeout(()=>{var pe=l.current.getValue();a.onSchemaChange(pe)},0)},_=Object(C.a)(Object(C.a)({},Qn),{},{array:"listEditor"}),le={preview:L,simple:!1,mapping:_,widgets:Object(C.a)(Object(C.a)({},Da),n),selected:M,hovering:T},de={templates:u,submit:d,transformFrom:s,transformTo:o,isNewVersion:w,extraButtons:v,settings:E,commonSettings:R,globalSettings:N},B=Object(C.a)(Object(C.a)({schema:$,formData:j,onChange:se,setGlobal:g,onSchemaChange:ie},le),{},{userProps:de,frProps:oe});return c.a.createElement(Nn,Object(re.default)({ref:l},B))}var dr=Object(k.forwardRef)(lr),ht=t("trko"),Va=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=r.type==="object"&&r.properties,d=r.type==="array"&&r.items&&r.items.properties,y=u||d;if(y){var N=Ct(r);N.map(e=>{u&&(r.properties[e.name]=a(e.schema,r)),d&&(r.items.properties[e.name]=a(e.schema,r))})}else if(r.enum&&Array.isArray(r.enum)){var v=r.enum;if(Ye(v[0])&&v[0].label!==void 0&&v[0].value!==void 0){var E=v.map(e=>e.label),R=v.map(e=>e.value);r.enum=R,r.enumNames=E}}return r["x-component"]&&(r["ui:widget"]=r["x-component"]),r["x-component-props"]&&(r["ui:options"]=r["x-component-props"]),i&&r.required&&(i.required&&Array.isArray(i.required)?i.required.push(r.name):i.required=[r.name]),delete r.key,delete r.name,delete r.required,delete r["x-component"],delete r["x-component-props"],r},mt=a=>{var r=Va(a);return{schema:r}},Ka=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=d||y;if(v){var R=Ct(r);R.map(N=>{d&&(r.properties[N.name]=a(N.schema,r,N.name)),y&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}else if(r.enum&&Array.isArray(r.enum)&&r.enumNames&&Array.isArray(r.enumNames)){var E=r.enum.map((N,e)=>({value:N,label:r.enumNames[e]}));r.enum=E}return r["ui:widget"]&&(r["x-component"]=r["ui:widget"]),r["ui:options"]&&(r["x-component-props"]=r["ui:options"]),delete r["ui:widget"],delete r["ui:options"],delete r.enumNames,u&&(r.name=u,r.key=u),i&&u&&i.required&&Array.isArray(i.required)&&i.required.indexOf(u)>-1&&(r.required=!0),r},Wa=a=>{var r=a.schema;return Ka(r)},In=(a,r)=>c.a.createElement(Y.a,{backend:D.a},c.a.createElement(dr,Object(re.default)({ref:r},a))),cr=G.default=Object(k.forwardRef)(In)},refC:function(Me,G,t){"use strict";t.r(G),t.d(G,"useForm",function(){return d}),t.d(G,"connectForm",function(){return y}),t.d(G,"createWidget",function(){return Gt});var re=t("Saan"),k=t("vgIT"),c=t.n(k),Y=t("0Owb"),D=t("k1fw"),C=t("PpiC"),z=t("q1tI"),x=t.n(z),lt=t("Pv/L"),Ke=t("tJVT"),X=t("LvDl");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function V(e){var n=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:n.test(e)}function yt(e,n){return n?!1:e&&e.type==="boolean"&&e.widget!=="switch"}function tn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function dt(e){if(typeof e=="string"){var n=e.split(".");return n.length===1?"#":(n.pop(),n.join("."))}return"#"}function Bt(e,n){if(n==="#")return e;if(typeof n=="string")return Object(X.get)(e,n)}function $t(e){var n,s;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,l=e.match(o);return l?(n=e.replace(o,"[]"),s=l.map(m=>Number(m.substring(1,m.length-1)))):n=e,{id:n,dataIndex:s}}function ft(e,n){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var s=e;return Array.isArray(n)&&n.forEach(o=>{s=s.replace(/\[\]/,"[".concat(o,"]"))}),tn(s)}function ut(e){return e.type==="array"&&e.items&&e.enum===void 0}function ct(e){return e.type==="object"&&e.properties}function Ot(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",s=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=h(e),m=n;l.$id||(l.$id=m);var f=[];ct(l)&&Object.entries(l.properties).forEach(g=>{var j=Object(Ke.default)(g,2),S=j[0],T=j[1],w=ut(T)?S+"[]":S,L=m==="#"?w:m+"."+w;f.push(L),Ot(T,L,m,o)}),ut(l)&&Object.entries(l.items.properties).forEach(g=>{var j=Object(Ke.default)(g,2),S=j[0],T=j[1],w=ut(T)?S+"[]":S,L=m==="#"?w:m+"."+w;f.push(L),Ot(T,L,m,o)});var b=Array.isArray(l.rules)?[...l.rules]:[];return["boolean","function","string"].indexOf(typeof l.required)>-1&&b.push({required:l.required}),l.type&&(o[m]={parent:s,schema:l,children:f,rules:b}),o}function Z(e,n){return e.indexOf(n)>-1}var O=e=>Z(Object.prototype.toString.call(e),"Object"),h=X.cloneDeep;function I(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function p(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function A(e,n){if(e===void 0&&n===void 0)return!0;if(e===void 0||n===void 0)return!1;if(e===null&&n===null)return!0;if(e===null||n===null)return!1;if(e.constructor!==n.constructor)return!1;if(e.constructor===Array){if(e.length!==n.length)return!1;for(var s=0;s<e.length;s++)if(e[s].constructor===Array||e[s].constructor===Object){if(!A(e[s],n[s]))return!1}else if(e[s]!==n[s])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var l=Object.keys(e)[o];if(e[l]&&typeof e[l]!="number"&&(e[l].constructor===Array||e[l].constructor===Object)){if(!A(e[l],n[l]))return!1}else if(e[l]!==n[l])return!1}}else if(e.constructor===String||e.constructor===Number)return e===n;return!0}function P(e){var n;switch(e){case"date":n="YYYY-MM-DD";break;case"time":n="HH:mm:ss";break;default:n="YYYY-MM-DD HH:mm:ss"}return n}function W(e){return e.find((n,s,o)=>s!==o.findIndex(l=>JSON.stringify(n)===JSON.stringify(l)))}function H(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=ee(e),o=s.map(f=>{var b=f.name,g=f.schema,j=g.type,S=g.enum,T=g.properties,w=g.items,L=j==="object"&&T,$=j==="array"&&w&&!S,M=b&&n[f.name];if(!M)return f;if($){var J=H(w,M.items||{});return Object(D.a)(Object(D.a)({},f),{},{schema:Object(D.a)(Object(D.a)(Object(D.a)({},f.schema),M),{},{items:J})})}if(L){var ce=H(f.schema,M);return Object(D.a)(Object(D.a)({},f),{},{schema:ce})}return Object(D.a)(Object(D.a)({},f),{},{schema:Object(D.a)(Object(D.a)({},f.schema),M)})}),l={};o.forEach(f=>{l[f.name]=f.schema});var m={};return Object.keys(n).forEach(f=>{typeof f=="string"&&f.substring(0,3)==="ui:"&&(m[f]=n[f])}),U(l)?Object(D.a)(Object(D.a)({},e),m):Object(D.a)(Object(D.a)(Object(D.a)({},e),m),{},{properties:l})}function U(e){return Object.keys(e).length===0}function ee(e){if(!e)return[];var n=e.properties,s=e.items,o=e.type;if(!n&&!s)return[];var l={};return o==="object"&&(l=n),o==="array"&&(l=s),Object.keys(l).map(m=>({schema:l[m],name:m}))}function te(){}var ve=e=>Function('"use strict";return ('+e+")")(),be=(e,n,s)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(s),`;
    const formData = `).concat(JSON.stringify(n),`;
    return (`).concat(e,")"))();function me(e){if(typeof e!="string")return!1;var n=/^{{(.+)}}$/,s=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(n)&&!e.match(s)&&!e.match(o))}function Oe(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,o=dt(s),l=Bt(n,o)||{};if(typeof e=="string"){var m=e.substring(2,e.length-2),f=/formData.([a-zA-Z0-9.$_\[\]]+)/g,b=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,g=`
    return (`.concat(m.replaceAll(f,(j,S)=>JSON.stringify(Bt(n,S))).replaceAll(b,(j,S)=>JSON.stringify(Bt(l,S))),")");console.log(g,l,n);try{return Function(g)()}catch(j){return e}}else return e}var Ce=e=>Object.keys(e).some(n=>{var s=e[n];return typeof s=="string"?me(s):O(s)?Ce(s):!1}),Ne=(e,n,s)=>{var o=h(e);return Object.keys(o).forEach(l=>{var m=o[l];if(me(m)&&(o[l]=Oe(m,n,s)),typeof l=="string"&&l.toLowerCase().indexOf("props")>-1){var f=o[l];O(f)&&Object.keys(f).forEach(b=>{o[l][b]=Oe(f[b],n,s)})}}),o};function Te(e){return Object.keys(e).some(n=>typeof e[n]=="function"?!0:typeof e[n]=="string"?me(e[n]):typeof e[n]=="object"?Te(e[n]):!1)}var Ve=(e,n,s)=>{try{var o=s[n];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var l=s[o.parent].schema;return l[e]!==void 0?l[e]:Ve(e,o.parent,s)}}catch(m){return}},Re=()=>{var e=localStorage.getItem("SAVES");if(e)try{var n=JSON.parse(e),s=n.length;if(s)return s+1}catch(o){return 1}else return 1};function he(e){return Function('"use strict";return ('+e+")")()}function Qe(e){if(!e)return[];var n=e.properties,s=e.items,o=e.type;if(!n&&!s)return[];var l={};return o==="object"&&(l=n),o==="array"&&(l=s.properties),Object.keys(l).map(m=>({schema:l[m],name:m}))}var _e=e=>{if(e&&e.propsSchema){var n=e.propsSchema,s=Object(C.a)(e,["propsSchema"]);return Object(D.a)({schema:n},s)}return e},$e=e=>{if(e&&e.schema){var n=e.schema,s=Object(C.a)(e,["schema"]);return Object(D.a)({propsSchema:n},s)}return e},Ye=e=>{if(!!e){var n=e&&e.items&&e.items.enum,s=e&&e.enum;return n||s}},st=function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(n)?n:s},Rt=e=>{var n="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(n).test(e))};function ot(e){var n=arguments.length<=1?void 0:arguments[1];return n&&n.target&&e in n.target?n.target[e]:n}var Et=e=>{try{var n=e.split("."),s=n.slice(-1)[0];return s}catch(o){return console.error(o,"getKeyFromPath"),""}},nn=(e,n)=>{if(typeof e=="boolean")return e?"yes":"no";if(ct(n)||ut(n))return"-";if(Array.isArray(n.enum)&&Array.isArray(n.enumNames))try{return n.enumNames[n.enum.indexOf(e)]}catch(s){return e}return e},Lt=e=>{var n={};return O(e)?Object.keys(e).forEach(s=>{n[s]=Lt(e[s])}):Array.isArray(e)?n=e.filter(s=>!!(s&&JSON.stringify(s)!=="{}")):n=e,n},St=e=>{var n=e.schema,s=e.isRequired,o=s===void 0?!0:s,l={};if(ct(n))l.type="object",o&&n.required===!0&&(l.required=!0),l.fields={},Object.keys(n.properties).forEach(j=>{var S=n.properties[j];Array.isArray(n.required)&&n.required.indexOf(j)>-1&&(S.required=!0),l.fields[j]=St({schema:S,isRequired:o})});else if(ut(n))l.type="array",o&&n.required===!0&&(l.required=!0),l.defaultField={type:"object",fields:{}},Object.keys(n.items.properties).forEach(j=>{var S=n.items.properties[j];Array.isArray(n.required)&&n.required.indexOf(j)>-1&&(S.required=!0),l.defaultField.fields[j]=St({schema:S,isRequired:o})});else{var m=j=>n.type?Object(D.a)(Object(D.a)({},j),{},{type:n.type}):j.pattern&&typeof j.pattern=="string"?Object(D.a)(Object(D.a)({},j),{},{pattern:new RegExp(j.pattern)}):j,f=n.required,b=Object(C.a)(n,["required"]);if(o&&n.required===!0&&(b.required=!0),n.rules)if(Array.isArray(n.rules)){var g=n.rules.map(j=>m(j));l=[b,...g]}else O(n.rules)?l=[b,m(n.rules)]:l=b;else l=b;switch(n.type){case"range":l.type="array";break;default:break}switch(n.format){case"email":case"url":l.type=n.format;break;case"image":break;default:break}}return l},Ft=e=>{var n=e.split(".");return n.map(s=>isNaN(Number(s))?s:"[".concat(s,"]")).reduce((s,o)=>o[0]==="["||s===""?s+o:s+"."+o,"")},an=(e,n)=>{for(var s=e.split(".");s.length>0;){var o=s,l=Object(lt.a)(o),m=l[0],f=l.slice(1);m=m.split("[")[0];var b=void 0;return ct(n)?b=n.properties[m]:ut(n)&&(b=n.items.properties[m]),s=f,b?an(f.join("."),b):!!n.required}},Ht=e=>{var n={};return ct(e)?Object.keys(e.properties).forEach(s=>{var o=e.properties[s],l=Ht(o);n[s]=l}):e.default!==void 0?n=e.default:e.type==="boolean"?n=!1:n=void 0,n},dn=(e,n)=>{if(typeof e!="string")return"";if(!n)return e;if(e=e.replace("${title}",n.title),e=e.replace("${type}",n.format||n.type),n.min&&(e=e.replace("${min}",n.min)),n.max&&(e=e.replace("${max}",n.max)),n.rules){var s=n.rules.find(f=>f.min!==void 0);s&&(e=e.replace("${min}",s.min));var o=n.rules.find(f=>f.max!==void 0);o&&(e=e.replace("${max}",o.max));var l=n.rules.find(f=>f.len!==void 0);l&&(e=e.replace("${len}",l.len));var m=n.rules.find(f=>f.pattern!==void 0);m&&(e=e.replace("${pattern}",m.pattern))}return e},At=(e,n)=>{var s=h(e);if(s=n(s),ct(s)){var o=[];Array.isArray(s.required)&&(o=s.required,delete s.required),Object.keys(s.properties).forEach(l=>{var m=s.properties[l];o.indexOf(l)>-1&&(m.required=!0),s.properties[l]=At(m,n)})}else ut(s)&&Object.keys(s.items.properties).forEach(l=>{var m=s.items.properties[l];s.items.properties[l]=At(m,n)});return s},Ut=e=>At(e,Qt),Qt=e=>{try{var n=h(e);if(n.rules=[],n.props=n.props||{},n["ui:options"]&&(n.props=n["ui:options"],delete n["ui:options"]),n.pattern){var s={pattern:n.pattern};n.message&&n.message.pattern&&(s.message=n.message.pattern),n.rules.push(s),delete n.pattern,delete n.message}return n.minLength&&(n.rules.push({min:n.minLength}),delete n.minLength),n.maxLength&&(n.rules.push({max:n.maxLength}),n.props.maxLength=n.maxLength,delete n.maxLength),n.min&&(n.rules.push({min:n.min}),n.props.min=n.min,delete n.min),n.max&&(n.rules.push({max:n.max}),n.props.max=n.max,delete n.max),n.step&&(n.props.step=n.step,delete n.step),n.minItems&&(n.props.minItems=n.minItems,delete n.minItems),n.maxItems&&(n.props.maxItems=n.maxItems,delete n.maxItems),n["ui:className"]&&(n.className=n["ui:className"],delete n["ui:className"]),n["ui:hidden"]&&(n.hidden=n["ui:hidden"],delete n["ui:hidden"]),n["ui:readonly"]&&(n.readOnly=n["ui:readonly"],delete n["ui:readonly"]),n["ui:disabled"]&&(n.disabled=n["ui:disabled"],delete n["ui:disabled"]),n["ui:width"]&&(n.width=n["ui:width"],delete n["ui:width"]),n["ui:labelWidth"]&&(n.labelWidth=n["ui:labelWidth"],delete n["ui:labelWidth"]),n.rules&&n.rules.length===0&&delete n.rules,n}catch(o){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",o),e}},zt=(e,n)=>{var s=parseRootValue(e),o=replaceParseValue(s)},Yt=e=>{if(typeof e!="string")return!1;var n=/^{{(function.+)}}$/,s=/^{{(.+=>.+)}}$/;return e.match(n)?e.match(n)[1]:e.match(s)?e.match(s)[1]:!1},un=function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return O(n)?(n.theme&&s[n.theme]&&(o=Object(D.a)(Object(D.a)({},n),s[n.theme])),Object.keys(n).forEach(l=>{o[l]=e(n[l],s)})):o=n,o},En=t("zmYW"),bt=t("DtFj"),rn=t.n(bt),Sn=t("dc+4"),hn=t("Btem"),Mt=t.n(hn),cn=t("lfLe"),mn=t("Cp9S"),je=t.n(mn),Le=t("MaXC"),nt=t("4IMT"),at=t.n(nt),Ct=Object(z.createContext)(()=>{}),sn=Object(z.createContext)({}),on=()=>Object(z.useContext)(Ct),Nt=()=>Object(z.useContext)(sn),Vt=e=>Object(z.useReducer)((n,s)=>Object(D.a)(Object(D.a)({},n),s),e);function Kt(e,n,s){var o=Object(z.useRef)();Object(z.useEffect)(()=>{o.current=e},[e]);var l=Object(z.useRef)();return Object(z.useEffect)(()=>{if(!s)return;function m(){o&&o.current&&o.current()}if(m(),n!==null)return l.current=setInterval(m,n),()=>clearInterval(l.current)},[n,s]),()=>clearInterval(l.current)}function Wt(e){var n=Object(z.useRef)();return Object(z.useEffect)(()=>{n.current=e},[e]),n.current}var jt=e=>{var n=Object(z.useState)(!1),s=Object(Ke.default)(n,2),o=s[0],l=s[1],m;try{m=localStorage.getItem(e)}catch(f){}return m||(l(!0),localStorage.setItem(e,JSON.stringify(!0))),o},wn=()=>{var e=Object(z.useState)(!1),n=Object(Ke.default)(e,2),s=n[0],o=n[1],l=()=>o(!s);return[s,l]},Pn=e=>{var n=Object(z.useState)(e),s=Object(Ke.default)(n,2),o=s[0],l=s[1];return[o,l]},Ga=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var j=localStorage.getItem(s);if(j)try{return JSON.parse(j)}catch(S){return n}return n},l=Object(z.useState)(o()),m=Object(Ke.default)(l,2),f=m[0],b=m[1],g=j=>{b(j),localStorage.setItem(s,JSON.stringify(j))};return[f,g]};function Bn(e){var n=e.height,s=e.width,o=e.onClick;return x.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||n||256,height:n||s||256,onClick:o},x.a.createElement("path",{d:"M755.2 375.637333a42.666667 42.666667 0 0 0 0.554667-60.330666l-213.333334-217.173334a42.666667 42.666667 0 0 0-60.842666 0l-213.333334 217.173334a42.666667 42.666667 0 1 0 60.842667 59.818666L469.333333 232.32V896a42.666667 42.666667 0 1 0 85.333334 0V232.32l140.245333 142.805333a42.666667 42.666667 0 0 0 60.330667 0.512z",fill:"#1890ff"}))}function $n(e){var n=e.height,s=e.width,o=e.onClick;return x.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||n||256,height:n||s||256,onClick:o},x.a.createElement("path",{d:"M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z",fill:"#1890ff"}))}var Ln=t("Oxum"),F=e=>{var n=e.message,s=e.schema,o=e.hideValidation,l="";return typeof n=="string"&&(l=n),Array.isArray(n)&&(l=n[0]||""),l=dn(l,s),!l&&o?null:x.a.createElement("div",{className:"error-message"},l)},K=F,ae=t("wlus"),fe=120,xe=e=>{var n=e.parentId,s=e.dataIndex,o=s===void 0?[]:s,l=e.children,m=l===void 0?[]:l,f=e.errorFields,b=Nt(),g=b.formData,j=b.flatten,S=b.onItemChange,T=b.removeErrorField,w="list";try{w=j[n].schema.widget}catch(_){}var L=ft(n,o),$;typeof L=="string"&&($=Object(X.get)(g,L));var M=Array.isArray($)?$:[],J=()=>{var _=[...M,void 0],le=_.length-1;return S(L,_),le},ce=_=>{var le=M.filter((de,B)=>B!==_);S(L,le),T("".concat(L,"[").concat(_,"]"))},oe=_=>{if(_!==0){var le=M[_],de=M[_-1],B=M;B[_]=de,B[_-1]=le,S(L,B)}},se=_=>{if(!(_>=M.length-1)){var le=M[_],de=M[_+1],B=M;B[_]=de,B[_+1]=le,S(L,B)}},ie={displayList:M,dataPath:L,dataIndex:o,children:m,deleteItem:ce,addItem:J,moveItemDown:se,moveItemUp:oe,listData:$,flatten:j,errorFields:f};switch(w){case"list1":return x.a.createElement(Ie,ie);case"list2":return x.a.createElement(We,ie);case"list3":return x.a.createElement(Pe,ie);default:return x.a.createElement(Pe,ie)}},De=xe,Ie=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,l=e.children,m=e.deleteItem,f=e.addItem,b={schema:{type:"object",properties:{}},rules:[],children:l};return x.a.createElement("div",null,s.map((g,j)=>x.a.createElement("div",{key:j,style:{display:"flex",alignItems:"center"}},x.a.createElement(On,{displayType:"inline",_item:b,dataIndex:[...o,j]}),x.a.createElement(ae.a,{style:{fontSize:16,marginLeft:8,marginBottom:12},onClick:()=>m(j)}))),x.a.createElement(at.a,{style:{marginTop:s.length>0?0:8},type:"dashed",onClick:f},"\u65B0\u589E\u4E00\u6761"))},Pe=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataPath,l=e.dataIndex,m=e.children,f=e.deleteItem,b=e.addItem,g=e.moveItemDown,j=e.moveItemUp,S=e.flatten,T=e.errorFields,w=Vt({showDrawer:!1,currentIndex:-1}),L=Object(Ke.default)(w,2),$=L[0],M=L[1],J={schema:{type:"object",properties:{}},rules:[],children:m},ce=$.showDrawer,oe=$.currentIndex,se=s.map((B,ne)=>Object(D.a)(Object(D.a)({},B),{},{$idx:ne})),ie=m.map(B=>{var ne=S[B],q=ne&&ne.schema||{},pe=Et(B);return{dataIndex:pe,title:q.title,width:fe,render:(Ae,He)=>{var Ee=ft(B,[He.$idx]),tt=T.find(Se=>Se.name==Ee)||{};return x.a.createElement("div",null,x.a.createElement("div",null,nn(Ae,q)),tt.error&&x.a.createElement(K,{message:tt.error,schema:q}))}}});ie.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(B,ne,q)=>{var pe=B&&B.$idx||0;return x.a.createElement(je.a,null,x.a.createElement("a",{onClick:()=>_(pe)},"\u7F16\u8F91"),x.a.createElement("a",{onClick:()=>f(pe)},"\u5220\u9664"))}});var _=B=>{M({showDrawer:!0,currentIndex:B})},le=()=>{M({showDrawer:!1,currentIndex:-1})},de=()=>{var B=b();_(B)};return x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"w-100 mb2 tr"},x.a.createElement(at.a,{type:"primary",size:"small",onClick:de},"\u65B0\u589E")),x.a.createElement(Mt.a,{width:"500",title:"\u7F16\u8F91",placement:"right",onClose:le,visible:ce},x.a.createElement("div",{className:"fr-container"},x.a.createElement(On,{_item:J,dataIndex:[...l,oe]}))),x.a.createElement(rn.a,{scroll:{x:"max-content"},columns:ie,dataSource:se,rowClassName:(B,ne)=>{var q=B&&B.$idx,pe=T.find(Ae=>Ae.name.indexOf("".concat(o,"[").concat(q,"]"))>-1);return pe?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},We=e=>{var n=e.displayList,s=n===void 0?[]:n,o=e.dataIndex,l=e.children,m=e.deleteItem,f=e.addItem,b=e.flatten,g=s.map((S,T)=>({index:T})),j=l.map(S=>{var T=b[S],w=T&&T.schema||{};return{dataIndex:S,title:w.title,width:fe,render:(L,$,M)=>{var J=[...o,$.index];return x.a.createElement(On,{hideTitle:!0,displayType:"inline",key:M.toString(),id:S,dataIndex:J})}}});return j.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(S,T,w)=>x.a.createElement("a",{onClick:()=>m(w)},"\u5220\u9664")}),x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"w-100 mb2 tr"},x.a.createElement(at.a,{type:"primary",size:"small",onClick:f},"\u65B0\u589E")),x.a.createElement(rn.a,{scroll:{x:"max-content"},columns:j,dataSource:g,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Xe=e=>{var n=e.children,s=n===void 0?[]:n,o=e.dataIndex,l=o===void 0?[]:o,m=e.displayType;return x.a.createElement(x.a.Fragment,null,s.map((f,b)=>{var g={displayType:m,id:f,dataIndex:l};return x.a.createElement(On,Object(Y.default)({key:b.toString()},g))}))},xt=Xe;function Ze(e,n,s){var o=this,l=Object(z.useRef)(null),m=Object(z.useRef)(0),f=Object(z.useRef)(null),b=Object(z.useRef)([]),g=Object(z.useRef)(),j=Object(z.useRef)(),S=Object(z.useRef)(e),T=Object(z.useRef)(!0);S.current=e;var w=!n&&n!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0,s=s||{};var L=!!s.leading,$="trailing"in s?!!s.trailing:!0,M="maxWait"in s,J=M?Math.max(+s.maxWait||0,n):null;Object(z.useEffect)(()=>(T.current=!0,()=>{T.current=!1}),[]);var ce=Object(z.useMemo)(()=>{var oe=B=>{var ne=b.current,q=g.current;return b.current=g.current=null,m.current=B,j.current=S.current.apply(q,ne)},se=(B,ne)=>{w&&cancelAnimationFrame(f.current),f.current=w?requestAnimationFrame(B):setTimeout(B,ne)},ie=B=>{if(!T.current)return!1;var ne=B-l.current,q=B-m.current;return!l.current||ne>=n||ne<0||M&&q>=J},_=B=>(f.current=null,$&&b.current?oe(B):(b.current=g.current=null,j.current)),le=()=>{var B=Date.now();if(ie(B))return _(B);if(!!T.current){var ne=B-l.current,q=B-m.current,pe=n-ne,Ae=M?Math.min(pe,J-q):pe;se(le,Ae)}},de=function(){for(var ne=Date.now(),q=ie(ne),pe=arguments.length,Ae=new Array(pe),He=0;He<pe;He++)Ae[He]=arguments[He];if(b.current=Ae,g.current=o,l.current=ne,q){if(!f.current&&T.current)return m.current=l.current,se(le,n),L?oe(l.current):j.current;if(M)return se(le,n),oe(l.current)}return f.current||se(le,n),j.current};return de.cancel=()=>{f.current&&(w?cancelAnimationFrame(f.current):clearTimeout(f.current)),m.current=0,b.current=l.current=g.current=f.current=null},de.isPending=()=>!!f.current,de.flush=()=>f.current?_(Date.now()):j.current,de},[L,M,n,J,$,w]);return ce}var Xt=Ze,Tt=e=>{var n=e.labelClass,s=e.labelStyle,o=e.schema,l=e.displayType,m=Nt(),f=m.displayType,b=m.readOnly,g=o.title,j=o.description,S=o.required,T=o.type,w=T==="object",L=o.displayType||l||f||"column";return x.a.createElement("div",{className:n,style:s},x.a.createElement("label",{className:"fr-label-title ".concat(yt(o,b)||L==="column"?"no-colon":""),title:g},S===!0&&x.a.createElement("span",{className:"fr-label-required"}," *"),x.a.createElement("span",{className:"".concat(w?"b":""," ").concat(L==="column"?"flex-none":"")},g),j&&(L==="row"?x.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":j},x.a.createElement("i",{className:"fr-tooltip-icon"}),x.a.createElement("div",{className:"fr-tooltip-container"},x.a.createElement("i",{className:"fr-tooltip-triangle"}),j)):L==="inline"?null:x.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",j,"\xA0)"))))},Zt=Tt,It={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:date":"date","string:url":"url","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"dateRange","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function kt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:It,s=e.type,o=e.format,l=e.enum,m=e.readOnly,f=[];m&&(f.push("".concat(s,"?readOnly")),f.push("*?readOnly")),l&&(Array.isArray(l)&&l.length>3?(f.push("".concat(s,"?enum_long")),f.push("*?enum_long")):(f.push("".concat(s,"?enum")),f.push("*?enum"))),o&&f.push("".concat(s,":").concat(o)),f.push(s);var b="";return f.some(g=>(b=n[g],!!b)),b}var qt={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},ze=t("6UYH"),pt=t("fTA7"),rt=t.n(pt),Je=t("pJsf"),ke=t("g4D/"),it=t.n(ke),ln=t("bd+v"),Dt=t("LB4q"),Jt=t.n(Dt),Ge=t("Hjg5"),qe=t("rmht"),Fe=t.n(qe),et=t("LGkk"),gn=t("rVaU"),vn=t.n(gn),_t=t("b+Mx"),yn=t("5Dct"),fn=t.n(yn),bn=t("cUip"),jn=t("iJl9"),pn=t.n(jn),Gt=(e,n)=>s=>o=>{var l=o.schema,m=Object(C.a)(o,["schema"]),f=Object(D.a)(Object(D.a)({},l),n),b=typeof e=="function"?e(Object(D.a)({schema:f},m)):{},g=Object(D.a)(Object(D.a)({schema:f},m),b),j=zn(g);return x.a.createElement(s,j)},zn=e=>{var n=e.onChange,s=e.value,o=e.defaultValue,l=e.schema,m=Object(C.a)(e,["onChange","value","defaultValue","schema"]),f=Object(D.a)({},l),b=f||{},g=b.trigger,j=b.valuePropName,S={},T="value",w=s===void 0?o:s;j&&typeof j=="string"?(T=j,S[j]=w):S.value=w;var L=function(){for(var ce=arguments.length,oe=new Array(ce),se=0;se<ce;se++)oe[se]=arguments[se];var ie=ot(T,...oe);n(ie)};g&&typeof g=="string"?S[g]=L:S.onChange=L;var $={disabled:f.disabled||f["ui:disabled"],readOnly:f.readOnly||f["ui:readonly"],hidden:f.hidden||f["ui:hidden"]},M=Object(D.a)(Object(D.a)(Object(D.a)({},S),{},{schema:f},$),m);return M},ea=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=n||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",marginTop:5},s)}},Mn=Gt(ea)(it.a.Group),xn=Mn,ta=t("ypy7"),Vn=t.n(ta),Ha=t("rNQX");function na(e){var n=e.schema.format,s=l=>{e.disabled||e.readonly||e.onChange(l.color)},o=l=>{e.onChange(l.target.value)};return x.a.createElement("div",{className:"fr-color-picker"},x.a.createElement(Vn.a,{type:n,animation:"slide-up",color:e.value||"#ffffff",onChange:s}),e.readonly?x.a.createElement("span",null,e.value||"#ffffff"):x.a.createElement(pn.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var Ua=t("GBD3"),Qa=t("wXtC"),Kn=t.n(Qa),aa=t("mxgt"),ra=t("4ZwL"),Wn=t.n(ra),Ya=t("wd/R"),Cn=t.n(Ya),Dn=e=>{var n=e.schema.format,s=n===void 0?"dateTime":n;e.options&&e.options.format&&(s=e.options.format);var o=s==="time"?Wn.a:Kn.a,l=P(s),m=e.value||"";typeof m=="string"&&(s==="week"&&(m=m.substring(0,m.length-1)),s==="quarter"&&(m=m.replace("Q",""))),m&&(m=Cn()(m,l));var f=e.description?{placeholder:e.description}:{},b=(j,S)=>e.onChange(S),g=Object(D.a)(Object(D.a)(Object(D.a)({},f),e.options),{},{value:m,style:{width:"100%"},disabled:e.disabled||e.readOnly,onChange:b});return s==="dateTime"&&(g.showTime=!0),["week","month","quarter","year"].indexOf(s)>-1&&(g.picker=s),x.a.createElement(o,g)},sa=Kn.a.RangePicker,ia=Wn.a.RangePicker;function Xa(e){var n=e&&e.schema,s=n.format,o=s===void 0?"dateTime":s,l=(b,g)=>e.onChange(g),m=o==="time"?ia:sa,f=Object(D.a)(Object(D.a)({},e),{},{onChange:l,RangeComponent:m});return x.a.createElement(oa,f)}var oa=e=>{var n=e.onChange,s=e.RangeComponent,o=e.value,l=e.schema,m=l===void 0?{}:l,f=e.options,b=e.disabled,g=e.readOnly,j=m.format,S=j===void 0?"dateTime":j;f&&f.format&&(S=f.format);var T=P(S),w=Array.isArray(o)?o:[],L=Object(Ke.default)(w,2),$=L[0],M=L[1];typeof $=="string"&&typeof M=="string"&&(S==="week"&&($=$.substring(0,$.length-1),M=M.substring(0,M.length-1)),S==="quarter"&&($=$.replace("Q",""),M=M.replace("Q","")));var J=$&&M?[Cn()($,T),Cn()(M,T)]:[],ce=Object(D.a)(Object(D.a)({},f),{},{value:J,style:{width:"100%"},showTime:S==="dateTime",disabled:b||g,onChange:n});return["week","month","quarter","year"].indexOf(S)>-1&&(ce.picker=S),x.a.createElement(s,ce)};function la(e){var n=e.children;return x.a.createElement("div",{className:"w-100"},n)}var Za=t("7LYo"),da=t("5GXF"),Jn=t.n(da),ua=Jn.a.Panel;function ka(e){var n=e.children,s=e.title,o=Object(C.a)(e,["children","title"]),l=Nt(),m=l.theme,f=l.displayType;return s?m=="1"?x.a.createElement("div",{className:"w-100"},x.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},s),x.a.createElement("div",{style:{marginLeft:f=="row"?0:12}},n)):x.a.createElement("div",{className:"w-100"},x.a.createElement(Jn.a,{defaultActiveKey:["1"]},x.a.createElement(ua,{header:x.a.createElement("div",{style:{fontSize:16,fontWeight:500}},s),key:"1",className:"fr-collapse-object"},n))):x.a.createElement("div",{className:"w-100"},n)}var qa=t("ek7I"),Gn=t("FAat"),Hn=t.n(Gn),ca=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=n||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%"},s)}},_a=Gt(ca)(Hn.a),ma=_a,er=t("7kJ1"),va=t("qPIi"),fa=t.n(va),pa=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=n||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",minWidth:120,marginTop:5},s)}},tr=Gt(pa)(fa.a.Group),ha=tr,ga=e=>{var n=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=n||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,style:Object(D.a)({width:"100%",minWidth:120},s)}},ya=Gt(ga)(Hn.a),ba=ya,ur=t("tCGa"),ja=t("DH6M"),xa=t.n(ja),Oa=e=>{var n=e.schema,s=n.max,o=n.min,l=n.step,m={};(s||s===0)&&(m={max:s}),(o||o===0)&&(m=Object(D.a)(Object(D.a)({},m),{},{min:o})),l&&(m=Object(D.a)(Object(D.a)({},m),{},{step:l}));var f=!1;e.options&&e.options.hideNumber&&(f=!0);var b=e.readonly?x.a.createElement("span",{style:{width:"90px"}},e.value===""?"-":e.value):x.a.createElement(fn.a,Object(Y.default)({},e.options,m,{style:{width:"90px"},value:e.value,disabled:e.disabled,onChange:e.onChange}));return x.a.createElement("div",{className:"fr-slider"},x.a.createElement(xa.a,Object(Y.default)({style:{flexGrow:1,marginRight:f?0:12}},m,{onChange:e.onChange,value:typeof e.value=="number"?e.value:o||0,disabled:e.disabled||e.readonly})),f?null:b)},Ea=Oa,nr=t("VDQ/"),Sa=t("B8+X"),Ca=t.n(Sa),Da=t("tL+A"),Ra=t("QpBz"),Un=t.n(Ra),Fa=t("z7Xi");function Qn(e){var n=e.action,s=e.value,o=e.onChange,l=e.uploadProps,m=e.buttonProps,f=Object(D.a)({name:"file",type:"file",action:n,onChange(j){j.file.status==="done"?(Un.a.success("".concat(j.file.name," \u4E0A\u4F20\u6210\u529F")),o(j.file.response.url)):j.file.status==="error"&&Un.a.error("".concat(j.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},l),b={icon:x.a.createElement(Fa.a,null),children:"\u4E0A\u4F20"},g=Object(D.a)(Object(D.a)({},b),m);return x.a.createElement("div",{className:"fr-upload-mod"},x.a.createElement(Ca.a,Object(Y.default)({},f,{className:"fr-upload-file"}),x.a.createElement(at.a,g)),s&&x.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var Yn=t("/xgg"),Aa=t("aOJk"),Na=t.n(Aa),Xn=t("mpQp"),Ta="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Ia=e=>{var n=e.value;return x.a.createElement(Na.a,{content:x.a.createElement("img",{src:n||Ta,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},x.a.createElement(Xn.a,null))};function wa(e){var n=e.value,s=Object(C.a)(e,["value"]);return x.a.createElement(pn.a,Object(Y.default)({value:n,addonAfter:x.a.createElement(Ia,{value:n})},s))}var Pa=e=>{var n=e.value,s=V(n);return s?x.a.createElement("a",{target:"_blank",href:n},"\u6D4B\u8BD5\u94FE\u63A5"):x.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function Zn(e){var n=e.value,s=Object(C.a)(e,["value"]);return x.a.createElement(pn.a,Object(Y.default)({value:n,addonAfter:x.a.createElement(Pa,{value:n})},s))}function ar(e){var n=e.value,s=e.schema,o="-";if(s.type==="boolean")o=n===!0?"\u2714":"\u2718";else if(Array.isArray(s.enum)&&Array.isArray(s.enumNames)){var l=s.enum.indexOf(n);o=s.enumNames[l]||"-"}else typeof n=="number"?o=String(n):typeof n=="string"&&(o=n);return x.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var Ba=pn.a.TextArea,$a=Gt(e=>{var n=e.style;return{style:Object(D.a)({width:"100%"},n)}})(fn.a),La=Gt(e=>{var n=e.style;return{style:Object(D.a)({marginTop:5},n)}})(vn.a),Rn=Gt(e=>{var n=e.autoSize;return{autoSize:n||{minRows:3}}})(Ba),za=e=>{var n=e.style,s=Object(C.a)(e,["style"]);return x.a.createElement(Fe.a,Object(Y.default)({style:Object(D.a)({width:"100%"},n)},s))},Fn=e=>{var n=e.style,s=Object(C.a)(e,["style"]);return x.a.createElement(Jt.a,Object(Y.default)({style:Object(D.a)({width:"100%"},n)},s))},An={input:pn.a,checkbox:it.a,checkboxes:xn,color:na,date:Dn,dateRange:Xa,imageInput:wa,url:Zn,list:la,map:ka,multiSelect:ma,number:$a,radio:ha,select:ba,slider:Ea,switch:La,textarea:Rn,upload:Qn,html:ar,rate:rt.a,treeSelect:za,cascader:Fn},rr=Object.keys(An),kn=e=>{var n=e.schema,s=e.onChange,o=e.value,l=e.children,m=e.onItemChange,f=e.readOnly,b=e.dataPath,g=e.dataIndex,j=on(),S=j.widgets,T=j.mapping,w=kt(n,T);f&&["object","array"].indexOf(n.type)===-1&&(w="html");var L=S[w],$=n.widget||n["ui:widget"];$&&S[$]&&(L=S[$],w=$);var M=qt[w],J=Object(D.a)({schema:Object(D.a)(Object(D.a)({},n),M),onChange:s,value:o,children:l},n.props);["title","placeholder","disabled"].forEach(oe=>{n[oe]&&(J[oe]=n[oe])}),n.default!==void 0&&(J.defaultValue=n.default),n.props&&(J=Object(D.a)(Object(D.a)({},J),n.props)),J.addons={onItemChange:m,dataPath:b,dataIndex:g};var ce=zn(J);return x.a.createElement(L,ce)},Nn=(e,n)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:!!(e.value===n.value&&JSON.stringify(e.schema)===JSON.stringify(n.schema)&&window.NOTHING_CHANGED_IN_WIDGETS),Tn=x.a.memo(kn,Nn),qn=e=>{var n=e.$id,s=e.dataIndex,o=e.item,l=e.labelClass,m=e.labelStyle,f=e.contentClass,b=e.hasChildren,g=e.children,j=e.errorFields,S=j===void 0?[]:j,T=e.hideTitle,w=e.displayType,L=o.schema,$=Nt(),M=$.onItemChange,J=$.formData,ce=$.isEditing,oe=$.setEditing,se=$.touchKey,ie=$.debounceInput,_=$.readOnly;console.log("<renderField>",n);var le=Object(z.useRef)(),de=ft(n,s),B=h(L),ne=[...o.rules];ce&&le.current?B=le.current:(Ce(B)&&(B=Ne(B,J,de)),le.current=B,ne=ne.map(Q=>{var we={};return Object.keys(Q).forEach(gt=>{var Ja=me(Q[gt]);we[gt]=Ja?Oe(Q[gt],J,de):Q[gt]}),we}));var q=S.find(Q=>Q.name===de),pe=q&&q.error,Ae=Array.isArray(pe)&&pe.length>0,He=Ae?f+" ant-form-item-has-error":f,Ee=Bt(J,de),tt={},Se=Xt(oe,350),ge=_!==void 0?_:B.readOnly,Ue=Q=>{se(de),ie&&(oe(!0),Se(!1)),typeof de=="string"&&M(de,Q)},ue={labelClass:l,labelStyle:m,schema:B,displayType:w},ye=w==="inline"||ge===!0,Be={message:pe,schema:B,displayType:w,hideValidation:ye},vt={className:l,style:m},wt=!T&&!!B.title,Pt={schema:B,readOnly:ge,onChange:Ue,value:Ee,onItemChange:M,dataIndex:s,dataPath:de};if(Pt.children=b?g:yt(B,ge)?B.title:null,B.hidden)return null;if(yt(B,ge))return x.a.createElement(x.a.Fragment,null,wt&&x.a.createElement("div",vt),x.a.createElement("div",{className:He,style:tt},x.a.createElement(Tn,Pt),x.a.createElement(K,Be)));var en=x.a.createElement(Zt,ue);return ct(B)?(en=x.a.createElement("div",{style:{display:"flex"}},en,x.a.createElement(K,Be)),x.a.createElement("div",{className:He,style:tt},x.a.createElement(Tn,Object(Y.default)({},Pt,{message:pe,title:wt?en:void 0})))):x.a.createElement(x.a.Fragment,null,wt&&en,x.a.createElement("div",{className:He,style:tt},x.a.createElement(Tn,Pt),x.a.createElement(K,Be)))},Ma=qn,_n=e=>{var n=e.id,s=n===void 0?"#":n,o=e._item,l=e.dataIndex,m=l===void 0?[]:l,f=e.hideTitle,b=f===void 0?!1:f,g=e.hideValidation,j=g===void 0?!1:g,S=Object(C.a)(e,["id","_item","dataIndex","hideTitle","hideValidation"]);console.log("<Core>");var T=Nt(),w=T.displayType,L=T.column,$=T.flatten,M=T.errorFields,J=T.labelWidth,ce=T.readOnly,oe=o||$[s];if(!oe)return null;var se=oe.schema,ie=se.displayType||S.displayType||w||"column",_=se.type==="object",le=ut(se),de=_||le,B=yt(se,ce),ne=se.width||se["ui:width"],q="fr-field ".concat(ie==="inline"?"":"w-100"," flex"),pe="fr-label",Ae="fr-content";switch(se.type){case"object":_&&(se.title&&(pe+=" fr-label-object"),q+=" fr-field-object");break;case"array":le&&(se.title&&(pe+=" fr-label-list"),q+=" fr-field-column");break;case"boolean":B&&(Ae+=" fr-content-column",q+=" flex ".concat(ie==="column"?"flex-column":""));break;default:}if(!de&&!B)if(ie==="column")switch(q+=" flex-column",pe+=" fr-label-column",Ae+=" fr-content-column",se.type){case"object":break;case"array":se.title&&!se.enum;break;case"boolean":break;default:}else ie==="row"&&(q+="",pe+=" fr-label-row",Ae+=" fr-content-row",!_&&!B&&(pe+=" flex-shrink-0 fr-label-row",Ae+=" flex-grow-1 relative"));var He={};_||(ne?He={width:ne,paddingRight:"12px"}:L>1&&(He={width:"calc(100% /".concat(L,")"),paddingRight:"12px"}));var Ee=Ve("labelWidth",s,$)||J,tt=I(Ee)?Number(Ee):p(Ee)?Ee:110,Se={width:tt};(de||ie==="column")&&(Se={flexGrow:1}),ie==="inline"&&(Se={marginTop:5,paddingLeft:12},pe="",q.indexOf("fr-field-object")===-1&&(q+=" fr-field-inline"));var ge=oe.children&&oe.children.length>0,Ue={$id:s,dataIndex:m,item:oe,labelClass:pe,labelStyle:Se,contentClass:Ae,errorFields:M,hasChildren:ge,displayType:ie,hideTitle:b,hideValidation:j},ue=ge?x.a.createElement("div",{className:"flex flex-wrap"},x.a.createElement(xt,{dataIndex:m,errorFields:M,displayType:ie},oe.children)):null,ye=ge?x.a.createElement(De,{parentId:s,dataIndex:m,errorFields:M,displayType:ie},oe.children):null;return x.a.createElement("div",{style:He,className:q+" "},x.a.createElement(Ma,Ue,_&&ue,le&&ye))},On=_n,sr=t("SA0R"),ir=t.n(sr),or=t("OVFa"),lr=t("k/c8"),dr=t("cFvS"),ht="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",Va={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:ht,method:ht,array:ht,object:ht,number:ht,date:ht,boolean:ht,integer:ht,float:ht,regexp:ht,email:ht,url:ht,hex:ht},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},mt="${title} is not a valid ${type}",Ka={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:mt,method:mt,array:mt,object:mt,number:mt,date:mt,boolean:mt,integer:mt,float:mt,regexp:mt,email:mt,url:mt,hex:mt},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},Wa=t("KpVd"),In=e=>{var n=e.formData,s=e.schema,o=s===void 0?{}:s,l=e.isRequired,m=l===void 0?!0:l,f=e.touchedKeys,b=f===void 0?[]:f,g=e.locale,j=g===void 0?"cn":g;if(Object.keys(o).length===0)return Promise.resolve();var S=St({schema:o,isRequired:m}).fields,T=[];m||b.forEach(J=>{var ce=an(J,o),oe=Object(X.get)(n,J);!oe&&ce&&T.push({name:J,error:["${title}\u5FC5\u586B"]})});var w=Va,L=Ka,$;try{$=new Wa.a(S)}catch(J){return Promise.resolve([])}var M=j==="en"?L:w;return $.messages(M),$.validate(n||{}).then(J=>T.length>0?T:[]).catch(J=>{var ce=J.errors,oe=J.fields,se=st(ce).map(_=>{var le=Ft(_.field);return{name:le,error:[_.message]}});se=[...se,...T];var ie=[];return se.forEach(_=>{var le=ie.findIndex(de=>de.name===_.name);le===-1?ie.push(_):ie[le].error=[...ie[le].error,..._.error]}),ie})},cr={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},a={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},r=(e,n)=>{var s=i(e,n);return s=Lt(s),s},i=(e,n)=>{var s=h(e),o=[],l=[],m=[],f=g=>Array.isArray(g)&&g.every(j=>typeof j=="string");Object.keys(n).forEach(g=>{var j=n[g]&&n[g].schema&&n[g].schema.bind;j===!1?o.push(g):typeof j=="string"?l.push({key:g,bind:j}):f(j)&&m.push({key:g,bind:j})});var b=g=>{o.forEach(j=>{j.indexOf("[]")===-1&&Object(X.unset)(g,j)}),l.forEach(j=>{var S=j.key,T=j.bind;if(S.indexOf("[]")===-1){var w=Object(X.get)(g,S),L=Object(X.get)(g,T);O(L)&&(w=Object(D.a)(Object(D.a)({},L),w)),Object(X.set)(g,T,w),Object(X.unset)(g,S)}}),m.forEach(j=>{var S=j.key,T=j.bind;if(S.indexOf("[]")===-1){var w=Object(X.get)(g,S);Array.isArray(w)&&w.forEach((L,$)=>{T[$]&&Object(X.set)(g,T[$],L)}),Object(X.unset)(g,S)}})};return b(s),s},u=(e,n)=>{var s=h(e),o=[],l=[],m=b=>Array.isArray(b)&&b.every(g=>typeof g=="string");Object.keys(n).forEach(b=>{var g=n[b]&&n[b].schema&&n[b].schema.bind;typeof g=="string"?o.push({key:b,bind:g}):m(g)&&l.push({key:b,bind:g})});var f=b=>{o.forEach(g=>{var j=g.key,S=g.bind,T=Object(X.get)(b,S),w=Object(X.get)(b,j);O(w)&&(T=Object(D.a)(Object(D.a)({},w),T)),Object(X.set)(b,j,T),Object(X.unset)(b,S)}),l.forEach(g=>{var j=g.key,S=g.bind,T=[];S.forEach(w=>{T.push(Object(X.get)(b,w)),Object(X.unset)(b,w)}),Object(X.set)(b,j,T)})};return f(s),s},d=e=>{var n=e||{},s=n.formData,o=n.onChange,l=n.onValidate,m=Vt({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),f=Object(Ke.default)(m,2),b=f[0],g=f[1],j=Object(z.useRef)({}),S=Object(z.useRef)({}),T=Object(z.useRef)(!1),w=Object(z.useRef)(),L=Object(z.useRef)("cn"),$=b.formData,M=b.submitData,J=b.errorFields,ce=J===void 0?[]:J,oe=b.isValidating,se=b.outsideValidating,ie=b.isSubmitting,_=b.isEditing,le=b.allTouched,de=b.touchedKeys,B=e&&e.hasOwnProperty("formData"),ne=B?s:$,q=Object(X.merge)(Ht(j.current),ne),pe=Q=>{typeof o=="function"?o(Q):g({formData:Q})},Ae=Q=>{if(typeof l=="function"){var we=Q.map(gt=>gt.name);l(we)}g({errorFields:Q})},He=Q=>{if(!(de.indexOf(Q)>-1)){var we=[...de,Q];g({touchedKeys:we})}};Object(z.useEffect)(()=>{B&&typeof l=="function"&&setTimeout(()=>{In({formData:q,schema:j.current,isRequired:!0,touchedKeys:de,locale:L.current}).then(Q=>{var we=Q.map(gt=>gt.name);l(we)})},200)},[]),Object(z.useEffect)(()=>{if(T.current){T.current=!1;return}In({formData:q,schema:j.current,isRequired:le,touchedKeys:de,locale:L.current}).then(Q=>{Ae(Q),console.log(q,"validate",Q)})},[JSON.stringify(q),le]);var Ee=Q=>{g({isEditing:Q})},tt=(Q,we)=>{if(typeof Q=="string"){if(Q==="#"){pe(Object(D.a)({},we));return}Object(X.set)(q,Q,we),pe(Object(D.a)({},q))}},Se=Q=>{var we=Q.schema,gt=Q.flatten,Ja=Q.beforeFinish,mr=Q.locale;j.current=we,S.current=gt,w.current=Ja,L.current=mr},ge=Q=>{var we=[];Array.isArray(Q)?we=[...Q,...ce]:Q&&Q.name?we=[Q,...ce]:console.log("error format is wrong"),we=Object(X.sortedUniqBy)(we,gt=>gt.name),Ae(we)},Ue=Q=>{var we=ce.map(gt=>gt.name.indexOf(Q)===-1);Ae(we)},ue=()=>i(q,S.current),ye=Q=>{var we=u(Q,S.current);pe(we)},Be=()=>{T.current=!0,g({isValidating:!0,allTouched:!0,isSubmitting:!1}),In({formData:q,schema:j.current,touchedKeys:[],isRequired:!0,locale:L.current}).then(Q=>{if(Q&&Q.length>0&&(console.log("submit:",q,Q),g({errorFields:Q})),typeof w.current=="function"){Promise.resolve(r(q,S.current)).then(we=>{g({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:we})});return}Promise.resolve(r(q,S.current)).then(we=>{g({isValidating:!1,isSubmitting:!0,submitData:we})})}).catch(Q=>{console.log("submit error:",Q)})},vt=()=>{pe({})},wt=()=>g({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),Pt=()=>g({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),en={formData:q,schema:j.current,touchedKeys:de,allTouched:le,touchKey:He,onItemChange:tt,setValues:ye,getValues:ue,resetFields:vt,submit:Be,submitData:M,errorFields:ce,isValidating:oe,outsideValidating:se,isSubmitting:ie,endValidating:wt,endSubmitting:Pt,setErrorFields:ge,removeErrorField:Ue,isEditing:_,setEditing:Ee,syncStuff:Se};return en},y=e=>n=>{var s=d();return x.a.createElement(e,Object(Y.default)({},n,{form:s}))},v=(e,n)=>{console.log(e,n)};function E(e){var n=e.widgets,s=e.mapping,o=e.form,l=e.beforeFinish,m=l===void 0?v:l,f=e.onFinish,b=f===void 0?v:f,g=e.displayType,j=g===void 0?"column":g,S=e.schema,T=e.flatten,w=e.debug,L=e.locale,$=L===void 0?"cn":L,M=e.debounceInput,J=M===void 0?!1:M,ce=e.size,oe=e.configProvider,se=e.theme,ie=Object(C.a)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","locale","debounceInput","size","configProvider","theme"]);try{var _=o.submit}catch(Be){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}console.log("<App/>");var le=o.submitData,de=o.errorFields,B=o.isValidating,ne=o.outsideValidating,q=o.isSubmitting,pe=o.endValidating,Ae=o.endSubmitting,He=o.syncStuff,Ee=o.formData,tt=o.isEditing,Se=o.setErrorFields,ge=Object(z.useMemo)(()=>T||Ot(S),[JSON.stringify(T),JSON.stringify(S)]);Object(z.useEffect)(()=>{He({schema:S,flatten:ge,beforeFinish:m,locale:$})},[JSON.stringify(T),JSON.stringify(S)]);var Ue=Object(z.useMemo)(()=>Object(D.a)(Object(D.a)({flatten:ge},o),{},{displayType:j,theme:se,debounceInput:J,debug:w,isEditing:tt},ie),[JSON.stringify(ge),JSON.stringify(Ee),JSON.stringify(de)]),ue=Object(z.useMemo)(()=>({widgets:Object(D.a)(Object(D.a)({},An),n),mapping:Object(D.a)(Object(D.a)({},It),s)}),[]);Object(z.useEffect)(()=>{if(ne===!0){Promise.resolve(m(le,de)).then(Be=>{Be&&Se(Be),pe()});return}B===!1&&q===!0&&(Ae(),b(le,de))},[B,q,ne]);var ye="";return ce==="small"?ye="fr-form-small":ce==="large"&&(ye="fr-form-large"),x.a.createElement(c.a,Object(Y.default)({locale:ir.a},oe),x.a.createElement(sn.Provider,{value:Ue},x.a.createElement(Ct.Provider,{value:ue},x.a.createElement("div",{className:"fr-container ".concat(ye)},w?x.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},x.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),x.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),x.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),x.a.createElement("div",null,"allTouched:"+JSON.stringify(o.allTouched)),x.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),x.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),x.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,x.a.createElement(On,null)))))}var R=e=>{var n=e.isOldVersion,s=n===void 0?!0:n,o=e.schema,l=Object(C.a)(e,["isOldVersion","schema"]),m=o;return s&&(m=Ut(o)),x.a.createElement(E,Object(Y.default)({schema:m},l))},N=G.default=R},trko:function(Me,G,t){},"xwS/":function(Me,G,t){}}]);
