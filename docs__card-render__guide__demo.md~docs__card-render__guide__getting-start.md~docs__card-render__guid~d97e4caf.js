(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(Me,G,n){"use strict";n.r(G),n.d(G,"Column",function(){return U}),n.d(G,"Line",function(){return Bt}),n.d(G,"PivotTable",function(){return k});var ae=n("0Owb"),Z=n("PpiC"),c=n("q1tI"),H=n.n(c),D=n("06Lf");function C(E){var h=[],T=[];return E.forEach(p=>{p.isDim?h.push(p):T.push(p)}),{metaDim:h,metaInd:T}}function z(E){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(E==null?void 0:E.toPrecision(h))}var x=()=>H.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function lt(E,h){var T=C(E),p=T.metaDim,F=T.metaInd;if(F.length>=1&&p.length===0){var P="type",J="value";return{xField:P,yField:J,data:h.map(Re=>F.map(he=>{var Qe=he.id,_e=he.name;return{[P]:Qe,[J]:Re[Qe]}})).flat(),meta:{[P]:{formatter:Re=>{var he;return((he=E.find(Qe=>{var _e=Qe.id;return Re===_e}))===null||he===void 0?void 0:he.name)||Re}}},tooltip:{formatter:Re=>{var he,Qe=Re[P],_e=Re[J];return{name:(he=E.find($e=>{var Ye=$e.id;return Qe===Ye}))===null||he===void 0?void 0:he.name,value:_e}}}}}else if(F.length===1&&p.length===1){var Q,X,te,re=(Q=p.shift())===null||Q===void 0?void 0:Q.id,pe=(X=F.shift())===null||X===void 0?void 0:X.id;return{data:h,xField:re,yField:pe,meta:{[pe]:{alias:(te=E.find(Re=>{var he=Re.id;return he===pe}))===null||te===void 0?void 0:te.name}}}}else if(F.length>1&&p.length===1){var xe,me=(xe=p.shift())===null||xe===void 0?void 0:xe.id,De="value",Se="type";return{data:h.map(Re=>F.map(he=>{var Qe=he.id,_e=he.name;return{[me]:Re[me],[De]:Re[Qe],[Se]:_e}})).flat(),xField:me,yField:De,seriesField:Se,isGroup:!0}}else if(F.length===1&&p.length===2){var Ne,Ie,Ve;return{data:h,xField:(Ne=p.shift())===null||Ne===void 0?void 0:Ne.id,yField:(Ie=F.shift())===null||Ie===void 0?void 0:Ie.id,seriesField:(Ve=p.shift())===null||Ve===void 0?void 0:Ve.id,isGroup:!0}}return{data:h,xField:"",yField:""}}var We=E=>{var h=E.className,T=E.style,p=E.meta,F=p===void 0?[]:p,P=E.data,J=P===void 0?[]:P,Q=E.inverted,X=Object(Z.a)(E,["className","style","meta","data","inverted"]);if(Q){var te=lt(F,J),re=te.xField,pe=te.yField,xe=Object(Z.a)(te,["xField","yField"]);return H.a.createElement(D.b,Object(ae.default)({xField:pe,yField:re},xe,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X))}else return H.a.createElement(D.c,Object(ae.default)({},lt(F,J),{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X))},U=We,V=n("k1fw"),yt=n("sGjT");function tn(E,h){var T=C(E),p=T.metaDim,F=T.metaInd;if(F.length===1&&p.length===1){var P,J,Q,X=(P=p.shift())===null||P===void 0?void 0:P.id,te=(J=F.shift())===null||J===void 0?void 0:J.id;return{data:h,xField:X,yField:te,meta:{[te]:{alias:(Q=E.find($e=>{var Ye=$e.id;return Ye===te}))===null||Q===void 0?void 0:Q.name}}}}else if(F.length===1&&p.length===2){var re,pe,xe;return{data:h,xField:(re=p.shift())===null||re===void 0?void 0:re.id,yField:(pe=F.shift())===null||pe===void 0?void 0:pe.id,seriesField:(xe=p.shift())===null||xe===void 0?void 0:xe.id}}else if(F.length===2&&p.length===2){var me,De,Se,Ne,Ie=h.map($e=>{var Ye=F[0].id,st=p[1].id,Rt=$e[Ye],ot=$e[st],Et=Object(Z.a)($e,[Ye,st].map(yt.a));return Object(V.a)({[p[1].id]:"".concat(ot,"-").concat(F[0].name)},Et)}),Ve=h.map($e=>{var Ye=F[1].id,st=p[1].id,Rt=$e[Ye],ot=$e[st],Et=Object(Z.a)($e,[Ye,st].map(yt.a));return Object(V.a)({[p[1].id]:"".concat(ot,"-").concat(F[1].name)},Et)});return{data:[Ve,Ie],geometryOptions:[{geometry:"line",seriesField:p[1].id},{geometry:"line",seriesField:p[1].id,lineStyle:{lineDash:[5,5]}}],xField:(me=p.shift())===null||me===void 0?void 0:me.id,yField:[(De=F.shift())===null||De===void 0?void 0:De.id,(Se=F.shift())===null||Se===void 0?void 0:Se.id],seriesField:(Ne=p.shift())===null||Ne===void 0?void 0:Ne.id}}else if(F.length>1&&p.length===1){var Re,he=(Re=p.shift())===null||Re===void 0?void 0:Re.id,Qe="value",_e="type";return{data:h.map($e=>F.map(Ye=>{var st=Ye.id,Rt=Ye.name;return{[he]:$e[he],[Qe]:$e[st],[_e]:Rt}})).flat(),xField:he,yField:Qe,seriesField:_e}}return{data:h}}var dt=E=>{var h=E.className,T=E.style,p=E.meta,F=p===void 0?[]:p,P=E.data,J=P===void 0?[]:P,Q=E.withArea,X=Object(Z.a)(E,["className","style","meta","data","withArea"]),te=tn(F,J);return Q?H.a.createElement(D.a,Object(ae.default)({},te,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X)):Array.isArray(te.yField)?H.a.createElement(D.d,Object(ae.default)({},te,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X)):H.a.createElement(D.e,Object(ae.default)({},te,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X))},Bt=dt,$t=n("tJVT"),ft=n("mA+x"),ut=n("aMEK"),ct=n("ARb9"),Ot=E=>{var h=E.className,T=E.style,p=E.showSubtotal,F=p===void 0?!0:p,P=E.subtotalText,J=P===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:P,Q=E.meta,X=Q===void 0?[]:Q,te=E.data,re=te===void 0?[]:te,pe=E.size,xe=pe===void 0?"middle":pe,me=E.indicatorSide,De=me===void 0?"top":me,Se=E.leftDimensionLength,Ne=Se===void 0?X.length:Se,Ie=E.leftExpandable,Ve=Ie===void 0?!1:Ie,Re=E.topExpandable,he=Re===void 0?!1:Re,Qe=E.defaultExpandAll,_e=Qe===void 0?!0:Qe,$e=E.cellRender,Ye=Object(Z.a)(E,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),st=Object(c.useState)([]),Rt=Object($t.default)(st,2),ot=Rt[0],Et=Rt[1],nn=Object(c.useState)([]),Lt=Object($t.default)(nn,2),St=Lt[0],At=Lt[1],an=C(X),Ht=an.metaDim,dn=an.metaInd,Ft=dn.map(be=>{var Le=be.id,nt=be.name,at=be.isRate;return{name:nt,code:Le,align:"right",expression:at?"AVG(".concat(Le,")"):"SUM(".concat(Le,")")}}),Ut=Ht.filter((be,Le)=>Le<Ne),Qt=Ut.map(be=>{var Le=be.id;return Le}),zt=Object(ft.b)(re,Qt,{includeTopWrapper:!0,isExpand:Ve?be=>St.includes(be):void 0}),Yt=Object(ft.d)(zt,{indicators:De==="left"?Ft:void 0,supportsExpand:Ve,expandKeys:St,onChangeExpandKeys:At,generateSubtotalNode:F?be=>({position:"start",value:be.path.length===0?J[0]||"\u603B\u8BA1":J[1]||"\u5C0F\u8BA1"}):void 0}),un=Object($t.default)(Yt,1),En=un[0],bt=Ht.filter((be,Le)=>Le>=Ne),rn=bt.map(be=>{var Le=be.id;return Le}),Sn=Object(ft.b)(re,rn,{includeTopWrapper:!0,isExpand:he?be=>ot.includes(be):void 0}),hn=Object(ft.d)(Sn,{indicators:De==="top"?Ft:void 0,supportsExpand:he,expandKeys:ot,onChangeExpandKeys:Et,generateSubtotalNode:F?be=>({position:"start",value:be.path.length===0?J[0]||"\u603B\u8BA1":J[1]||"\u5C0F\u8BA1"}):void 0}),Mt=Object($t.default)(hn,1),cn=Mt[0],mn=Object(ft.c)({data:re,leftCodes:Qt,topCodes:rn,aggregate:Object(ut.a)(Ft)});return H.a.createElement("div",{style:T,className:"CR-PivotTable CR-PivotTable-".concat(xe," ").concat(h||"")},H.a.createElement(ft.a,Object(ae.default)({defaultColumnWidth:100,leftMetaColumns:Ht.filter(be=>{var Le=be.id;return Qt.includes(Le)}).map(be=>{var Le=be.id,nt=be.name;return{code:Le,name:nt}}),leftTree:En.children,leftTotalNode:En,topTree:cn.children,topTotalNode:cn,getValue:(be,Le)=>{var nt,at=(nt=mn.get(be.data.dataKey))===null||nt===void 0?void 0:nt.get(Le.data.dataKey);return at==null?void 0:at[Le.code]},render:(be,Le,nt)=>{var at;if($e){var Ct=Le.data.dataPath,sn=Ct===void 0?[]:Ct,on=nt.data.dataPath,Nt=on===void 0?[]:on,Vt={};return sn.forEach((Wt,Kt)=>{var jt;Vt[(jt=Ut[Kt])===null||jt===void 0?void 0:jt.id]=Wt}),Nt.forEach((Wt,Kt)=>{var jt;Vt[(jt=bt[Kt])===null||jt===void 0?void 0:jt.id]=Wt}),$e(be,Vt,nt.code)}return(at=dn.find(Wt=>{var Kt=Wt.id;return Kt===nt.code}))!==null&&at!==void 0&&at.isRate?"".concat(z(be*100).toFixed(2),"%"):be}},Ye)))},k=Ot},"4l2o":function(Me,G,n){},"8iYR":function(Me,G,n){"use strict";n.r(G),n.d(G,"basic",function(){return ae}),n.d(G,"expression",function(){return Z});var ae={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},Z={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},"97ez":function(Me,G,n){},ARb9:function(Me,G,n){},GYr9:function(Me,G,n){},JjdP:function(Me,G,n){"use strict";n.r(G);var ae=n("9og8"),Z=n("WmNS"),c=n.n(Z),H=n("LtsZ"),D=`import React, { useRef } from 'react';
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
};`,We=`import React, { Component } from 'react';
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

export default Demo;`,Ot=G.default={"guide-card":{component:Object(H.dynamic)({loader:function(){var k=Object(ae.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"oLxE"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:D}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var E=n("3PQu"),h=n("K+nK"),T=h(n("tJVT")),p=E(n("q1tI")),F=n("36SN"),P=function(){var Q=(0,p.useState)("Line"),X=(0,T.default)(Q,2),te=X[0],re=X[1],pe={Line:F.Line,Column:F.Column,PivotTable:F.PivotTable}[te];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return re("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return re("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return re("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(pe,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return p.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=n("36SN"),p=function(){return h.default.createElement(T.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(J,Q,X){return h.default.createElement("div",null,h.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),h.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(Q).length]}},J),h.default.createElement("p",null,JSON.stringify(Q)),h.default.createElement("p",null,JSON.stringify(X)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var E=n("3PQu"),h=n("K+nK"),T=h(n("tJVT")),p=E(n("q1tI")),F=n("36SN"),P=function(){var Q=(0,p.useState)(!1),X=(0,T.default)(Q,2),te=X[0],re=X[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:te,onChange:function(){return re(!te)}})),p.default.createElement(F.PivotTable,{leftExpandable:te,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return p.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var T=h(n("4IMT")),p=h(n("fWQN")),F=h(n("mtLc")),P=h(n("yKVA")),J=h(n("879j")),Q=h(n("q1tI")),X=n("gdfu"),te=E(n("refC")),re={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},pe=function(me){(0,P.default)(Se,me);var De=(0,J.default)(Se);function Se(){return(0,p.default)(this,Se),De.apply(this,arguments)}return(0,F.default)(Se,[{key:"render",value:function(){var Ie=this.props.form;return Q.default.createElement("div",null,Q.default.createElement(te.default,{form:Ie,schema:re}),Q.default.createElement(T.default,{type:"primary",onClick:Ie.submit},"\u63D0\u4EA4"))}}]),Se}(Q.default.Component),xe=(0,te.connectForm)(pe);return Q.default.createElement(xe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var T=h(n("4IMT")),p=h(n("q1tI")),F=n("gdfu"),P=E(n("refC")),J={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},Q=function(){var re=(0,P.useForm)();return p.default.createElement("div",null,p.default.createElement(P.default,{form:re,schema:J}),p.default.createElement(T.default,{type:"primary",onClick:re.submit},"\u63D0\u4EA4"))},X=Q;return p.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var T=h(n("4IMT")),p=h(n("q1tI")),F=n("gdfu"),P=E(n("refC")),J={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},Q=function(){var re=(0,P.useForm)(),pe=function(me,De){De.length>0?alert("errors:"+JSON.stringify(De)):alert("formData:"+JSON.stringify(me,null,2))};return p.default.createElement("div",null,p.default.createElement(P.default,{form:re,schema:J,onFinish:pe}),p.default.createElement(T.default,{type:"primary",onClick:re.submit},"\u63D0\u4EA4"))},X=Q;return p.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var E=n("3PQu"),h=n("K+nK"),T=h(n("q1tI")),p=E(n("refC")),F={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function P(){var Q=(0,p.useForm)(),X=function(re,pe){pe.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(pe))):alert(JSON.stringify(re))};return T.default.createElement("div",null,T.default.createElement(p.default,{form:Q,schema:F,onFinish:X}),T.default.createElement("button",{onClick:Q.submit},"\u63D0\u4EA4"))}var J=P;return T.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1

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
  const form = useForm(); // 2
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"migrate-demo"}},"schema-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("c2mQ")),p=n("8iYR"),F=function(){return h.default.createElement(T.default,{schema:p.basic})};return h.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:C},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("bQjt")),p=function(J){return{type:"object",displayType:J,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return h.default.createElement("div",null,h.default.createElement("h2",null,"display: row"),h.default.createElement(T.default,{schema:p("row")}),h.default.createElement("h2",null,"display: column"),h.default.createElement(T.default,{schema:p("column")}))};return h.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("bQjt")),p={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return h.default.createElement(T.default,{schema:p})};return h.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("bQjt")),p={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return h.default.createElement(T.default,{readOnly:!0,schema:p})};return h.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("bQjt")),p={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return h.default.createElement(T.default,{labelWidth:"200",schema:p})};return h.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return h.default.createElement(T.default,{schema:p})},P=F;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return h.default.createElement(T.default,{schema:p})},P=F;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return h.default.createElement(T.default,{schema:p})},P=F;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:function(){var E=n("3PQu"),h=n("K+nK");n("lfLe");var T=h(n("Cp9S"));n("MaXC");var p=h(n("4IMT"));n("tL+A");var F=h(n("QpBz")),P=h(n("tJVT")),J=E(n("q1tI")),Q=n("gdfu"),X=E(n("refC")),te=n("OH0R"),re=function(){var me=(0,X.useForm)(),De=(0,J.useState)({}),Se=(0,P.default)(De,2),Ne=Se[0],Ie=Se[1],Ve=function(){(0,te.fakeApi)("xxx/getForm").then(function(Qe){me.setValues({input1:"hello world",select1:"c"})})};(0,J.useEffect)(function(){(0,te.delay)(1e3).then(function(he){Ie({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Re=function(Qe,_e){_e.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_e.map(function($e){return $e.name}))):(0,te.fakeApi)("xxx/submit",Qe).then(function($e){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return J.default.createElement("div",{style:{width:"400px"}},J.default.createElement(X.default,{form:me,schema:Ne,onFinish:Re}),J.default.createElement(T.default,null,J.default.createElement(p.default,{onClick:Ve},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),J.default.createElement(p.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},pe=re;return J.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:lt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var T=h(n("4IMT"));n("tL+A");var p=h(n("QpBz")),F=h(n("q1tI")),P=n("gdfu"),J=E(n("refC")),Q=n("OH0R"),X={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},te=function(){var xe=(0,J.useForm)(),me=function(Ne,Ie){Ie.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ie.map(function(Ve){return Ve.name}))):(0,Q.fakeApi)("xxx/submit",Ne).then(function(Ve){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},De=function(Ne,Ie){return(0,Q.fakeApi)("xxx/validation").then(function(Ve){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(J.default,{form:xe,schema:X,beforeFinish:De,onFinish:me}),F.default.createElement(T.default,{type:"primary",onClick:xe.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},re=te;return F.default.createElement(re)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:lt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var E=n("3PQu"),h=n("K+nK");n("lfLe");var T=h(n("Cp9S"));n("MaXC");var p=h(n("4IMT"));n("tL+A");var F=h(n("QpBz")),P=h(n("q1tI")),J=n("gdfu"),Q=E(n("refC")),X=n("OH0R"),te={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},re=function(){var me=(0,Q.useForm)(),De=function(Ie,Ve){Ve.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ve.map(function(Re){return Re.name}))):(0,X.fakeApi)("xxx/submit",Ie).then(function(Re){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Se=function(){(0,X.fakeApi)("xxx/getForm").then(function(Ie){me.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(Q.default,{form:me,schema:te,onFinish:De}),P.default.createElement(T.default,null,P.default.createElement(p.default,{onClick:Se},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),P.default.createElement(p.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},pe=re;return P.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:lt}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var E=n("3PQu"),h=n("K+nK"),T=h(n("q1tI")),p=E(n("refC")),F={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},P=function(){var X=(0,p.useForm)();return T.default.createElement(p.default,{form:X,schema:F})},J=P;return T.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("c2mQ")),p=n("8iYR"),F=function(){return h.default.createElement(T.default,{schema:p.expression})};return h.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:C},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"widget-demo":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var T=h(n("4IMT"));n("cUip");var p=h(n("iJl9")),F=h(n("0Owb")),P=E(n("q1tI")),J=n("gdfu"),Q=E(n("refC")),X={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},te=function(me){return P.default.createElement(p.default,(0,F.default)({addonBefore:"http://",addonAfter:".com"},me))},re=function(){var me=(0,Q.useForm)(),De=function(){};return P.default.createElement("div",null,P.default.createElement(Q.default,{form:me,schema:X,widgets:{site:te},onFinish:function(Ne){return alert(JSON.stringify(Ne,null,2))}}),P.default.createElement(T.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4"))},pe=re;return P.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.0-beta.2"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"widget-demo"}},"docs-playground":{component:Object(H.dynamic)({loader:function(){var k=Object(ae.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"BASV"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:We},"main.js":{import:"./main",content:U},"json/simplest.json":{import:"./json/simplest.json",content:V},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:yt},"monaco/index.js":{import:"./monaco",content:tn},"theme.css":{import:"./theme.css",content:dt},"index.css":{import:"./index.css",content:Bt}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.0.0-beta.2"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(H.dynamic)({loader:function(){var k=Object(ae.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"7ZP+"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:$t}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var E=n("K+nK"),h=E(n("q1tI")),T=n("P2DI"),p=[],F=0;F<6;F++)p.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});var P={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},J=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(re,pe){return h.default.createElement("a",{onClick:function(){return alert(re.title)}},"\u7F16\u8F91")}}],Q=function(){var re=function(){return{rows:p,total:p.length}};return h.default.createElement(T.TableProvider,null,h.default.createElement(T.Search,{schema:P,api:re}),h.default.createElement(T.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:J,rowKey:"id"}))},X=Q;return h.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),T=E(n("nYSz")),p={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},F=function(){return h.default.createElement("div",{style:{height:"80vh"}},h.default.createElement(T.default,{defaultValue:p}))},P=F;return h.default.createElement(P)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(H.dynamic)({loader:function(){var k=Object(ae.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"PPgD"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ft}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(H.dynamic)({loader:function(){var k=Object(ae.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"jktF"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ut}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(H.dynamic)({loader:function(){var k=Object(ae.a)(c.a.mark(function h(){return c.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"M63W"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ct}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},identifier:"generator-settings"}}}},OH0R:function(Me,G,n){"use strict";n.r(G),n.d(G,"delay",function(){return ae}),n.d(G,"fakeApi",function(){return Z});var ae=c=>new Promise(H=>setTimeout(H,c)),Z=(c,H)=>(console.group("request:",c),console.log("params:",H),console.groupEnd(),ae(500))},OVFa:function(Me,G,n){},Oxum:function(Me,G,n){},P2DI:function(Me,G,n){"use strict";n.r(G),n.d(G,"Search",function(){return h}),n.d(G,"Table",function(){return Nt}),n.d(G,"TableProvider",function(){return Ln}),n.d(G,"useTable",function(){return dt});var ae=n("Saan"),Z=n("vgIT"),c=n.n(Z),H=n("0Owb"),D=n("k1fw"),C=n("tL+A"),z=n("QpBz"),x=n.n(z),lt=n("PpiC"),We=n("tJVT"),U=n("q1tI"),V=n.n(U),yt=Object(U.createContext)({}),tn=Object(U.createContext)({}),dt=()=>Object(U.useContext)(yt),Bt=()=>Object(U.useContext)(tn),$t=A=>{var W=Object(U.useReducer)((Te,Pe)=>{var Ke=Pe;typeof Pe=="function"&&(Ke=Ke(Te)),Pe.action&&Pe.payload&&(Ke=Pe.payload,typeof Ke=="function"&&(Ke=Ke(Te)));var Xe=Object(D.a)(Object(D.a)({},Te),Ke);return Xe},A),ne=Object(We.default)(W,2),ve=ne[0],je=ne[1],Ce=(Te,Pe)=>{je(Te)};return[ve,Ce]},ft=n("MaXC"),ut=n("4IMT"),ct=n.n(ut),Ot=n("refC"),k=A=>{var W=A.clearSearch,ne=dt(),ve=ne.tableState,je=ve===void 0?{}:ve,Ce=ne.refresh,Te=je.loading;return V.a.createElement("div",{className:"flex justify-end w-100"},V.a.createElement(ct.a,{loading:Te,className:"mr",type:"primary",onClick:()=>Ce()},"\u67E5\u8BE2"),V.a.createElement(ct.a,{onClick:W},"\u91CD\u7F6E"))},E=A=>{var W=Object(U.useState)({}),ne=Object(We.default)(W,2),ve=ne[0],je=ne[1],Ce=dt(),Te=Ce.tableState,Pe=Ce.setTable,Ke=Ce.refresh,Xe=Ce.syncMethods,xt=Te.search,Ze=A.schema||A.propsSchema,Xt=!0;!A.searchOnMount&&A.searchOnMount!==void 0&&(console.log("props.searchOnMount",A.searchOnMount),Xt=!1);var It=Object(U.useRef)(),Zt=Je=>{Pe({search:Je})},Tt=Je=>{try{var ke=100,it=Object.values(Je.properties).filter(Ge=>Ge.hidden?Ge.hidden!==!0:Ge["ui:hidden"]!==!0).map(Ge=>Ge.width?Ge.width:Ge["ui:width"]),ln=it.lastIndexOf(void 0),Dt=it.slice(ln+1).map(Ge=>Number(Ge.substring(0,Ge.length-1))),Jt=Dt.reduce((Ge,qe)=>{var Ae=Ge+qe;return Ae>100?Math.min(100,qe):Ae},0);return ke=100-Jt,ke<10&&(ke=100),ke+"%"}catch(Ge){return console.error(Ge),"100%"}},kt=()=>{var Je=JSON.stringify(It.current)===JSON.stringify(Ze);if(Ze&&Ze.properties){if(ve&&Je)return;try{var ke=JSON.parse(JSON.stringify(Ze));ke.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:Tt(Ze)},je(ke)}catch(it){console.error(it)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},qt=Je=>{if(Je.length){Pe({checkPassed:!1});return}Pe({checkPassed:!0})},ze=Object(Ot.useForm)({formData:xt,onChange:Zt,onValidate:qt}),pt=()=>{ze.setValues({})};if(Object(U.useEffect)(()=>{A.hidden||kt()},[Ze]),Object(U.useEffect)(()=>{Xe({searchApi:A.api,syncOnSearch:A.onSearch,syncAfterSearch:A.afterSearch}),(A.hidden||Xt)&&Ke()},[]),A.hidden)return null;var rt=typeof A.searchBtnRender=="function"?A.searchBtnRender(Ke,pt):[];return V.a.createElement("div",{className:"tr-search ".concat(A.className),style:A.style,onKeyDown:Je=>{Je.keyCode===13&&Ke()}},V.a.createElement(Ot.default,Object(H.default)({form:ze},A,{schema:ve,displayType:"row",widgets:Object(D.a)({searchBtn:()=>A.searchBtnRender?V.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(rt)&&rt.map((Je,ke)=>V.a.createElement("div",{key:ke.toString(),style:{marginLeft:8}},Je))):V.a.createElement(k,{clearSearch:pt})},A.widgets)})))},h=E,T=n("7kJ1"),p=n("qPIi"),F=n.n(p),P=n("zmYW"),J=n("DtFj"),Q=n.n(J),X=n("lfLe"),te=n("Cp9S"),re=n.n(te),pe=n("Wgwc"),xe=n.n(pe);function me(A,W){return A.indexOf(W)>-1}var De=A=>me(Object.prototype.toString.call(A),"Object"),Se=A=>typeof A!="string"?!1:A.indexOf("$api.")===0||A.indexOf("$func.")===0,Ne=A=>A.indexOf("$api.")===0?A.substring(5):A.indexOf("$func.")===0?A.substring(6):"",Ie=(A,W)=>{if(typeof A!="object"||A===null){if(Se(A)){var ne=Ne(A);return W&&W[ne]&&typeof W[ne]=="function"?W[ne]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return A}if(Array.isArray(A)){var ve=[...A];return ve.map(Te=>Ie(Te,W))}var je=Object(D.a)({},A),Ce=Object.keys(je);return Ce.forEach(Te=>{je[Te]=Ie(je[Te],W)}),je},Ve=A=>xe()(A).format("YYYY-MM-DD HH:mm"),Re=A=>xe()(A).format("YYYY-MM-DD"),he=A=>"\xA5".concat(A).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Qe=(A,W,ne)=>{var ve=A;return typeof ve=="function"?ve=ve(W):ne&&typeof ne=="function"&&ne(),ve},_e=n("NcKm"),$e=n("lbd2"),Ye=n.n($e),st=n("93XW"),Rt=n("d1El"),ot=n.n(Rt),Et=(A,W,ne)=>ne.ellipsis?V.a.createElement(ot.a,{title:Lt(W,ne)},A):V.a.createElement("span",null,A),nn=(A,W)=>W.copyable||W.ellipsis?V.a.createElement(Ye.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:W.copyable&&A?{text:A,onCopy:()=>x.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:W.ellipsis||!1},Lt(A,W)):Lt(A,W),Lt=(A,W)=>{var ne=W.enum||void 0;return ne&&ne[A]?ne[A]:A},St=A=>A?V.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},V.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},A)):null,At=(A,W)=>{if(W.valueType==="code")return St(A);var ne=nn(A,W),ve=Et(ne,A,W);return ve},an=n("WbIG"),Ht=n("hw8t"),dn=n.n(Ht);class Ft extends V.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(W){return{hasError:!0,errorInfo:W.message}}componentDidCatch(W,ne){console.log(W,ne)}render(){return this.state.hasError?V.a.createElement(dn.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var Ut=Ft,Qt=n("IehP"),zt=n("3R4v"),Yt=A=>{var W=Object(U.useState)(!1),ne=Object(We.default)(W,2),ve=ne[0],je=ne[1],Ce=A.fullScreen;return ve?V.a.createElement(ot.a,{title:"\u9000\u51FA\u5168\u5C4F"},V.a.createElement(Qt.a,{onClick:()=>{document.exitFullscreen(),je(!1)}})):V.a.createElement(ot.a,{title:"\u5168\u5C4F"},V.a.createElement(zt.a,{onClick:()=>{if(!document.fullscreenEnabled){x.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(je(!0),Ce().catch(Te=>x.a.error(Te.message)))}}))},un=Yt,En=n("G851"),bt=n("ZvzK"),rn=n.n(bt),Sn=n("PFYH"),hn=n("Jv8k"),Mt=n.n(hn),cn=n("9hi+"),mn=()=>{var A=dt(),W=A.tableState,ne=A.setTable;return V.a.createElement(rn.a,{overlay:V.a.createElement(Mt.a,{selectedKeys:[W.tableSize],onClick:ve=>{var je=ve.key;ne({tableSize:je})},style:{width:80}},V.a.createElement(Mt.a.Item,{key:"default"},"\u9ED8\u8BA4"),V.a.createElement(Mt.a.Item,{key:"middle"},"\u4E2D\u7B49"),V.a.createElement(Mt.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},V.a.createElement(ot.a,{title:"\u8868\u683C\u5BC6\u5EA6"},V.a.createElement(cn.a,null)))},be=mn,Le=n("rLCj"),nt=()=>{var A=dt(),W=A.refresh;return V.a.createElement(ot.a,{title:"\u5237\u65B0"},V.a.createElement(Le.a,{onClick:()=>W()}))},at=nt,Ct=A=>V.a.createElement(re.a,{size:14,style:{fontSize:16,cursor:"pointer"}},V.a.createElement(at,null),V.a.createElement(be,null),V.a.createElement(un,A)),sn=Ct,on=A=>{var W,ne,ve;A.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var je=dt(),Ce=je.tableState,Te=je.setTable,Pe=je.doSearch,Ke=Ce.dataSource,Xe=Ce.pagination,xt=Ce.loading,Ze=Ce.api,Xt=Ce.tableSize,It=Object(U.useRef)(null),Zt=(qe,Ae)=>{Te({pagination:Object(D.a)(Object(D.a)({},Xe),{},{current:qe,pageSize:Ae})}),!(!A.pageChangeWithRequest&&A.pageChangeWithRequest!==void 0)&&Pe({current:qe,pageSize:Ae})},Tt=A.headerTitle,kt=A.toolbarRender,qt=A.columns,ze=A.style,pt=ze===void 0?{}:ze,rt=A.className,Je=rt===void 0?"":rt,ke=A.toolbarAction,it=ke===void 0?!1:ke;qt.map(qe=>{var Ae=qe;if(Ae.render)return Ae;switch(Ae.valueType){case"date":Ae.render=et=>At(Re(et),Ae);break;case"dateTime":Ae.render=et=>At(Ve(et),Ae);break;case"money":Ae.render=et=>At(he(et),Ae);break;case"code":Ae.render=et=>At(et,Ae);break;case"text":default:Ae.render=et=>At(et,Ae)}return Ae});var ln=Object(D.a)(Object(D.a)({},A),{},{dataSource:Ke,pagination:A.pagination===!1?!1:Object(D.a)(Object(D.a)({onChange:Zt,size:"small"},A.pagination),{},{pageSize:((W=A.pagination)===null||W===void 0?void 0:W.pageSize)||Xe.pageSize,total:((ne=A.pagination)===null||ne===void 0?void 0:ne.total)||Xe.total,current:((ve=A.pagination)===null||ve===void 0?void 0:ve.current)||Xe.current}),loading:xt,size:Xt}),Dt=typeof kt=="function"?kt():[],Jt=Tt||Dt&&Dt.length||Array.isArray(Ze),Ge=()=>{var qe;return Promise.resolve((qe=It.current)===null||qe===void 0?void 0:qe.requestFullscreen())};return Object(U.useEffect)(()=>{A.size&&Te({tableSize:A.size})},[]),V.a.createElement(Ut,null,V.a.createElement("div",{className:"tr-table-wrapper ".concat(Je),style:pt,ref:It},V.a.createElement("div",{className:Jt?"tr-table-top":"tr-table-top-nohead"},V.a.createElement("div",{className:"tr-table-title"},V.a.createElement(Vt,{title:Tt})),V.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},V.a.createElement(re.a,{align:"center"},V.a.createElement(re.a,{size:8,style:{marginRight:8}},Array.isArray(Dt)&&Dt.map((qe,Ae)=>V.a.createElement("div",{key:Ae.toString()},qe))),it&&V.a.createElement(sn,{fullScreen:Ge})))),V.a.createElement(Q.a,ln)))},Nt=on,Vt=A=>{var W=A.title,ne=dt(),ve=ne.tableState,je=ne.setTable,Ce=ne.doSearch,Te=ve.tab,Pe=ve.api,Ke=Te||0,Xe=xt=>{var Ze=xt.target.value;je({tab:Ze}),Ce({tab:Ze})};return typeof Pe=="function"?V.a.createElement("div",{className:"tr-single-tab"},W):Pe&&Array.isArray(Pe)?Pe.length===1?V.a.createElement("div",{className:"tr-single-tab"},Pe[0].name):V.a.createElement(V.a.Fragment,null,V.a.createElement(F.a.Group,{onChange:Xe,value:Ke},Pe.map((xt,Ze)=>V.a.createElement(F.a.Button,{key:Ze.toString(),value:Ze},xt.name))),W&&V.a.createElement("div",{className:"tr-extra-tab"},W)):V.a.createElement("div",{className:"tr-single-tab"})},Wt=n("yDJ3"),Kt=n.n(Wt),jt=n("SA0R"),wn=n.n(jt),Pn=n("k/c8"),Ga=n("GYr9"),Bn=A=>{var W=$t({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:3,total:1},tableSize:"default",checkPassed:!0}),ne=Object(We.default)(W,2),ve=ne[0],je=ne[1],Ce=Object(U.useRef)(),Te=Object(U.useRef)(),Pe=Object(U.useRef)(),Ke=ve.pagination,Xe=ve.search,xt=ve.tab,Ze=ve.checkPassed,Xt=dt(),It=(ze,pt)=>{if(delete Xe.searchBtn,Te.current&&Te.current(Xe),!Ze)return;var rt=ze||{},Je=rt.current,ke=rt.pageSize,it=rt.tab,ln=Object(lt.a)(rt,["current","pageSize","tab"]),Dt=Je||1,Jt=ke||10,Ge=xt;["string","number"].indexOf(typeof it)>-1&&(Ge=it);var qe={current:Dt,pageSize:Jt};if(typeof Ce.current=="function")et(Ce.current);else if(Array.isArray(Ce.current)){var Ae=Kt()(Ce.current,"[".concat(Ge,"].api"));typeof Ae=="function"?et(Ae):x.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else console.log(Ce.current),x.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function et(gn){je({loading:!0});var vn=Object(D.a)(Object(D.a)(Object(D.a)(Object(D.a)({},Xe),pt),ln),qe);Array.isArray(gn)&&(vn=Object(D.a)(Object(D.a)({},vn),{},{tab:it})),Promise.resolve(gn(vn)).then(_t=>{var yn=_t.rows,fn=_t.total,bn=_t.pageSize,jn=Object(lt.a)(_t,["rows","total","pageSize"]);je(Object(D.a)(Object(D.a)({loading:!1,dataSource:yn},jn),{},{pagination:Object(D.a)(Object(D.a)({},qe),{},{total:fn,pageSize:bn||Jt})})),Pe.current(Object(D.a)({rows:yn,total:fn,pageSize:bn},jn))}).catch(_t=>{je({loading:!1})})}},Zt=(ze,pt)=>{var rt=ze&&ze.stay||!1,Je=ze&&ze.tab,ke=pt||{};It(Object(D.a)(Object(D.a)({},ze),{},{current:rt?Ke.current:1,tab:Je,pageSize:Ke.pageSize}),ke)},Tt=ze=>{["string","number"].indexOf(typeof ze)>-1?(je({tab:ze}),Zt({tab:ze})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},kt=ze=>{var pt=ze.searchApi,rt=ze.syncOnSearch,Je=ze.syncAfterSearch;Ce.current=pt,Te.current=rt,Pe.current=Je,je({api:pt})},qt={tableState:ve,setTable:je,doSearch:It,refresh:Zt,changeTab:Tt,syncMethods:kt};return qt},$n=(A,W)=>{var ne=Bn(A);return Object(U.useImperativeHandle)(W,()=>ne),V.a.createElement(c.a,{locale:wn.a},V.a.createElement(yt.Provider,Object(H.default)({},A,{value:ne})))},Ln=Object(U.forwardRef)($n)},RnhZ:function(Me,G,n){var ae={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function Z(H){var D=c(H);return n(D)}function c(H){if(!n.o(ae,H)){var D=new Error("Cannot find module '"+H+"'");throw D.code="MODULE_NOT_FOUND",D}return ae[H]}Z.keys=function(){return Object.keys(ae)},Z.resolve=c,Me.exports=Z,Z.id="RnhZ"},Zs1V:function(Me){Me.exports=JSON.parse("{}")},bQjt:function(Me,G,n){"use strict";n.r(G);var ae=n("0Owb"),Z=n("q1tI"),c=n.n(Z),H=n("refC"),D=C=>{var z=Object(H.useForm)();return c.a.createElement(H.default,Object(ae.default)({form:z},C))};G.default=D},c2mQ:function(Me,G,n){"use strict";n.r(G);var ae=n("q1tI"),Z=n.n(ae),c=n("refC"),H=D=>{var C=D.schema,z=Object(c.useForm)();return Z.a.createElement("div",null,Z.a.createElement(c.default,{form:z,schema:C}))};G.default=H},cFvS:function(Me,G,n){},fK6R:function(Me,G,n){},gO06:function(Me,G,n){},iU8R:function(Me,G,n){},nYSz:function(Me,G,n){"use strict";n.r(G),n.d(G,"defaultSettings",function(){return Ne}),n.d(G,"defaultCommonSettings",function(){return pe}),n.d(G,"defaultGlobalSettings",function(){return Ie}),n.d(G,"fromFormily",function(){return mt}),n.d(G,"toFormily",function(){return Ka}),n.d(G,"fromFormRender",function(){return qn}),n.d(G,"toFormRender",function(){return _n});var ae=n("0Owb"),Z=n("q1tI"),c=n.n(Z),H=n("kvAW"),D=n("qJlv"),C=n("k1fw"),z=n("tJVT"),x=Object(Z.createContext)(()=>{}),lt=Object(Z.createContext)({}),We=()=>Object(Z.useContext)(x),U=()=>Object(Z.useContext)(lt),V=a=>{var r=Object(Z.useReducer)((v,O)=>{var R=O;typeof O=="function"&&(R=R(v)),O.action&&O.payload&&(R=O.payload,typeof R=="function"&&(R=R(v)));var N=Object(C.a)(Object(C.a)({},v),R);return N},a),i=Object(z.default)(r,2),u=i[0],d=i[1],y=(v,O)=>{d(v)};return[u,y]};function yt(a,r,i){var u=Object(Z.useRef)();Object(Z.useEffect)(()=>{u.current=a},[a]);var d=Object(Z.useRef)();return Object(Z.useEffect)(()=>{if(!i)return;function y(){u&&u.current&&u.current()}if(y(),r!==null)return d.current=setInterval(y,r),()=>clearInterval(d.current)},[r,i]),()=>clearInterval(d.current)}function tn(a){var r=Object(Z.useRef)();return Object(Z.useEffect)(()=>{r.current=a},[a]),r.current}var dt=a=>{var r=Object(Z.useState)(!1),i=Object(z.default)(r,2),u=i[0],d=i[1],y;try{y=localStorage.getItem(a)}catch(v){}return y||(d(!0),localStorage.setItem(a,JSON.stringify(!0))),u},Bt=()=>{var a=Object(Z.useState)(!1),r=Object(z.default)(a,2),i=r[0],u=r[1],d=()=>u(!i);return[i,d]},$t=a=>{var r=Object(Z.useState)(a),i=Object(z.default)(r,2),u=i[0],d=i[1];return[u,d]},ft=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",u=()=>{var N=localStorage.getItem(i);if(N)try{return JSON.parse(N)}catch(e){return r}return r},d=Object(Z.useState)(u()),y=Object(z.default)(d,2),v=y[0],O=y[1],R=N=>{O(N),localStorage.setItem(i,JSON.stringify(N))};return[v,R]},ut=n("fwXI"),ct=n("CC+v"),Ot=n.n(ct),k=n("MaXC"),E=n("4IMT"),h=n.n(E),T=n("tL+A"),p=n("QpBz"),F=n.n(p),P=n("PpiC"),J=n("cUip"),Q=n("iJl9"),X=n.n(Q),te=n("WWur"),re=n.n(te),pe={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string","ui:widget":"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},"ui:width":{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string","ui:widget":"percentSlider"},"ui:labelWidth":{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number","ui:widget":"slider",max:400,"ui:options":{hideNumber:!0}},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},"ui:readonly":{title:"\u7F6E\u7070",type:"boolean"},required:{title:"\u5FC5\u586B",type:"boolean"}},xe=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],"ui:widget":"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],"ui:widget":"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}}],me=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime","ui:options":{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number","ui:widget":"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],De=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},"ui:options":{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],Se=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date","ui:options":{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],Ne=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:xe,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:me},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:De},{title:"\u6A21\u677F",widgets:Se}],Ie={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"string",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],"ui:options":{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number","ui:widget":"slider",max:300,"ui:options":{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],"ui:widget":"radio"}}},Ve=n("gO06"),Re=n("4b23"),he=n.n(Re),Qe=n("JBAE"),_e=n.n(Qe);function $e(a,r){return a.indexOf(r)>-1}var Ye=a=>$e(Object.prototype.toString.call(a),"Object");function st(a){try{return JSON.parse(JSON.stringify(a))}catch(r){return a}}function Rt(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function ot(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function Et(a,r){if(a===void 0&&r===void 0)return!0;if(a===void 0||r===void 0)return!1;if(a===null&&r===null)return!0;if(a===null||r===null)return!1;if(a.constructor!==r.constructor)return!1;if(a.constructor===Array){if(a.length!==r.length)return!1;for(var i=0;i<a.length;i++)if(a[i].constructor===Array||a[i].constructor===Object){if(!Et(a[i],r[i]))return!1}else if(a[i]!==r[i])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(r).length)return!1;for(var u=0;u<Object.keys(a).length;u++){var d=Object.keys(a)[u];if(a[d]&&typeof a[d]!="number"&&(a[d].constructor===Array||a[d].constructor===Object)){if(!Et(a[d],r[d]))return!1}else if(a[d]!==r[d])return!1}}else if(a.constructor===String||a.constructor===Number)return a===r;return!0}function nn(a){var r;switch(a){case"date":r="YYYY-MM-DD";break;case"time":r="HH:mm:ss";break;default:r="YYYY-MM-DD HH:mm:ss"}return r}function Lt(a){return a.find((r,i,u)=>i!==u.findIndex(d=>JSON.stringify(r)===JSON.stringify(d)))}function St(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=an(a),u=i.map(v=>{var O=v.name,R=v.schema,N=R.type,e=R.enum,t=R.properties,s=R.items,o=N==="object"&&t,l=N==="array"&&s&&!e,m=O&&r[v.name];if(!m)return v;if(l){var f=St(s,m.items||{});return Object(C.a)(Object(C.a)({},v),{},{schema:Object(C.a)(Object(C.a)(Object(C.a)({},v.schema),m),{},{items:f})})}if(o){var b=St(v.schema,m);return Object(C.a)(Object(C.a)({},v),{},{schema:b})}return Object(C.a)(Object(C.a)({},v),{},{schema:Object(C.a)(Object(C.a)({},v.schema),m)})}),d={};u.forEach(v=>{d[v.name]=v.schema});var y={};return Object.keys(r).forEach(v=>{typeof v=="string"&&v.substring(0,3)==="ui:"&&(y[v]=r[v])}),At(d)?Object(C.a)(Object(C.a)({},a),y):Object(C.a)(Object(C.a)(Object(C.a)({},a),y),{},{properties:d})}function At(a){return Object.keys(a).length===0}function an(a){if(!a)return[];var r=a.properties,i=a.items,u=a.type;if(!r&&!i)return[];var d={};return u==="object"&&(d=r),u==="array"&&(d=i),Object.keys(d).map(y=>({schema:d[y],name:y}))}function Ht(){}var dn=a=>Function('"use strict";return ('+a+")")(),Ft=(a,r,i)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(i),`;
    const formData = `).concat(JSON.stringify(r),`;
    return (`).concat(a,")"))();function Ut(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function Qt(a){return Object.keys(a).some(r=>typeof a[r]=="function"?!0:typeof a[r]=="string"?Ut(a[r]):typeof a[r]=="object"?Qt(a[r]):!1)}function zt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2?arguments[2]:void 0,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},d=_e()(a);d.$id||(d.$id=r);var y=[],v=d.type==="object"&&d.properties,O=d.type==="array"&&d.items&&d.items.properties;return v&&(Object.entries(d.properties).forEach(R=>{var N=Object(z.default)(R,2),e=N[0],t=N[1],s=r+"/"+e;y.push(s),zt(t,s,r,u)}),delete d.properties),O&&(Object.entries(d.items.properties).forEach(R=>{var N=Object(z.default)(R,2),e=N[0],t=N[1],s=r+"/"+e;y.push(s),zt(t,s,r,u)}),delete d.items.properties),d.type&&(u[r]={parent:i,schema:d,children:y}),u}var Yt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=r.split("/");return i[i.length-1]},un=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",u=r.split("/");return(typeof i=="string"||typeof i=="number")&&(u[u.length-1]=i),u.join("/")},En=a=>({parent:a.parent,schema:Object(C.a)({},a.schema),data:a.data,children:a.children});function bt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,u={},d=a[r],y=_e()(d);return y&&(u=Object(C.a)({},y.schema),i&&u.$id&&delete u.$id,y.children.length>0&&y.children.forEach(v=>{var O=v;if(!!a[v]){try{i&&(O=a[v].schema.$id)}catch(N){console.log("catch",N)}var R=Yt(O);u.type==="object"&&(u.properties||(u.properties={}),u.properties[R]=bt(a,v,i)),u.type==="array"&&u.items&&u.items.type==="object"&&(u.items.properties||(u.items.properties={}),u.items.properties[R]=bt(a,v,i))}})),u}var rn=(a,r)=>{var i=zt(r);return a in i&&delete i[a],bt(i)},Sn=(a,r)=>{var i=Object(C.a)({},a);try{var u=a[r],d=r+he()(6),y=i[u.parent].children,v=y.findIndex(O=>O===r);return y.splice(v+1,0,d),i[d]=_e()(i[r]),i[d].schema.$id=d,[i,d]}catch(O){return console.error(O,"catcherror"),[a,r]}},hn=a=>{var r=a.id,i=a.key,u=a.schema,d=a.subSchema,y=zt(u),v=un(r,i)+"$$"+he()(10);if(r in y){var O=y[r].parent;if(O&&O in y){var R=y[O].children;try{var N=R.findIndex(e=>e===r);R.splice(N+1,0,v)}catch(e){console.error(e.message)}}try{y[v]={parent:y[r].parent,schema:d,children:[]},y[v].schema.$id=v}catch(e){console.error(e.message)}}return[bt(y),v]},Mt=a=>{var r=a.selected,i=a.name,u=a.schema,d=a.flatten,y=r||"#",v;if(y&&y[0]==="0"||y==="#"){var O=Object(C.a)({},d);try{var R=y.substring(1);v=R+"/"+i+"_"+he()(6),y==="#"&&(v="#/"+i+"_"+he()(6),R="#");var N=O[R].children;N.push(v);var e={parent:R,schema:Object(C.a)(Object(C.a)({},u),{},{$id:v}),data:void 0,children:[]};O[v]=e}catch(g){console.error(g,"catch")}return{newId:v,newFlatten:O}}var t=i+"_"+he()(6),s=r.split("/");s.pop(),s.push(t),v=s.join("/");var o=Object(C.a)({},d);try{var l=o[r],m=o[l.parent].children,f=m.findIndex(g=>g===r);m.splice(f+1,0,v);var b={parent:l.parent,schema:Object(C.a)(Object(C.a)({},u),{},{$id:v}),data:void 0,children:[]};o[v]=b}catch(g){console.error(g)}return{newId:v,newFlatten:o}},cn=a=>{var r=a.dragId,i=a.dragItem,u=a.dropId,d=a.position,y=a.flatten,v=u==="#"?"inside":d,O=Object(C.a)({},y);i&&(O[r]=i);var R=i||O[r],N=O[u],e=N;if(v!=="inside"){var t=N.parent;e=O[t]}if(u.indexOf(r)>-1)return[O,r];var s=r;try{var o=e.schema.$id;s=s.replace(R.parent,o)}catch(g){}try{var l=O[R.parent],m=l.children.indexOf(r);m>-1&&l.children.splice(m,1)}catch(g){console.error(g)}try{var f=e.children||[],b=f.indexOf(u);switch(v){case"up":f.splice(b,0,r);break;case"down":f.splice(b+1,0,r);break;default:f.push(r);break}e.children=f}catch(g){console.error(g)}return R.parent=e.$id,[O,s]},mn=(a,r)=>!a||!r?{}:(Object.entries(a).forEach(i=>{var u=Object(z.default)(i,2),d=u[0],y=u[1],v=sn(r,d);a[d].data=v}),a),be=a=>(r,i)=>{},Le=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var u=r[i].data,d=Object.keys(r),y=d.filter(v=>{var O=i.split("/").length,R=v.split("/").length;return v.indexOf(i)>-1&&R>O});return y&&y.length>0&&(u===void 0&&["object","array"].indexOf(r[i].schema.type)>-1&&(u={}),y.forEach(v=>{var O=i.split("/").length,R=v.split("/").length;if(R===O+1){var N=a(r,v),e=Yt(v);u[e]=N}})),u}catch(v){return}},nt=(a,r,i)=>{try{var u=i[r];if(u.schema[a]!==void 0)return u.schema[a];if(u&&u.parent){var d=i[u.parent].schema;return d[a]!==void 0?d[a]:nt(a,u.parent,i)}}catch(y){return}};function at(a){return Function('"use strict";return ('+a+")")()}function Ct(a){if(!a)return[];var r=a.properties,i=a.items,u=a.type;if(!r&&!i)return[];var d={};return u==="object"&&(d=r),u==="array"&&(d=i.properties),Object.keys(d).map(y=>({schema:d[y],name:y}))}function sn(a,r){r=on(r,a);for(var i=0,u=r.length;a!=null&&i<u;){var d=Nt(r[i++]);a=d?a[d]:a}return i&&i==u?a:void 0}function on(a,r){return Array.isArray(a)?a:Kt(a,r)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function Nt(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var r="".concat(a);return r=="0"&&1/a==-INFINITY?"-0":r}var Vt=/#\/.+\//,Wt=/^\w*$/;function Kt(a,r){if(Array.isArray(a))return!1;var i=typeof a;return i==="number"||i==="boolean"||a==null?!0:Wt.test(a)||!Vt.test(a)||r!=null&&a in Object(r)}var jt=a=>{if(a&&a.propsSchema){var r=a.propsSchema,i=Object(P.a)(a,["propsSchema"]);return Object(C.a)({schema:r},i)}return a},wn=a=>{if(a&&a.schema){var r=a.schema,i=Object(P.a)(a,["schema"]);return Object(C.a)({propsSchema:r},i)}return a},Pn=n("CLjb"),Ga=n("fK6R"),Bn=a=>{var r=a.text,i=a.name,u=a.schema,d=a.icon,y=Object(Pn.a)({item:{type:"box",dragItem:{parent:"#",schema:u,children:[]},$id:"#/".concat(i,"_").concat(he()(6))},end:(m,f)=>{var b=f.getDropResult()},collect:m=>({isDragging:m.isDragging()})}),v=Object(z.default)(y,2),O=v[0].isDragging,R=v[1],N=We(),e=U(),t=e.selected,s=e.flatten,o=e.onFlattenChange,l=()=>{var m=Mt({selected:t,name:i,schema:u,flatten:s}),f=m.newId,b=m.newFlatten;o(b),N({selected:f})};return c.a.createElement("div",{ref:R},c.a.createElement(Ln,{text:r,icon:d,onClick:l}))},$n=Bn,Ln=a=>{var r=a.onClick,i=a.text,u=a.icon;return c.a.createElement("li",{className:"left-item",onClick:r},i)},A=a=>{var r=U(),i=r.userProps,u=i===void 0?{}:i,d=u.settings,y=Array.isArray(d)?d:Ne;return c.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(y)?y.map((v,O)=>v&&v.show===!1?null:c.a.createElement("div",{key:O},c.a.createElement("p",{className:"f6 b"},v.title),c.a.createElement("ul",{className:"pl0"},Array.isArray(v.widgets)?v.widgets.map((R,N)=>c.a.createElement($n,Object(ae.default)({key:N.toString()},R,a))):c.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):c.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},W=A,ne=n("Z8Mf"),ve=n("j7zX"),je=n.n(ve),Ce=n("UESt"),Te=n("97ez"),Pe=n("pJsf"),Ke=n("g4D/"),Xe=n.n(Ke);function xt(a){var r=a.value,i=a.onChange,u=a.disabled,d=a.readonly,y=v=>{i(v.target.checked)};return c.a.createElement(Xe.a,{disabled:u||d,onChange:y,checked:r})}function Ze(a){var r=a.schema||{},i=r.enum,u=r.enumNames,d=a.value&&Array.isArray(a.value)?a.value:[];return c.a.createElement(Xe.a.Group,{disabled:a.disabled||a.readonly,value:d,onChange:a.onChange},(i||[!0,!1]).map((y,v)=>c.a.createElement(Xe.a,{value:y,key:v},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:u?u[v]:y}}))))}var Xt=n("ypy7"),It=n.n(Xt),Zt=n("rNQX");function Tt(a){var r=a.schema.format,i=d=>{a.disabled||a.readonly||a.onChange(d.color)},u=d=>{a.onChange(d.target.value)};return c.a.createElement("div",{className:"fr-color-picker"},c.a.createElement(It.a,{type:r,animation:"slide-up",color:a.value?a.value:"#ffffff",onChange:i}),a.readonly?c.a.createElement("span",null,a.value||"#ffffff"):c.a.createElement(X.a,{placeholder:"#ffffff",disabled:a.disabled,value:a.value,onChange:u}))}var kt=n("GBD3"),qt=n("wXtC"),ze=n.n(qt),pt=n("mxgt"),rt=n("4ZwL"),Je=n.n(rt),ke=n("wd/R"),it=n.n(ke),ln=(a,r,i)=>{var u=a.invalid?{borderColor:"#f5222d"}:{},d=a.schema.format,y=d===void 0?"dateTime":d,v=nn(y),O={};a.value?O.value=it()(a.value,v):O.value="";var R=a.description?{placeholder:a.description}:{},N=Object(C.a)(Object(C.a)(Object(C.a)(Object(C.a)({},R),a.options),O),{},{style:Object(C.a)({width:"100%"},u),disabled:a.disabled||a.readonly,onChange:r});return y==="dateTime"&&(N.showTime=!0),c.a.createElement(i,N)};function Dt(a){var r=a.schema.format,i=r===void 0?"dateTime":r,u=(y,v)=>a.onChange(v),d=i==="time"?Je.a:ze.a;return ln(a,u,d)}var Jt=(a,r,i)=>{var u=a.schema.format,d=u===void 0?"dateTime":u,y=nn(d),v={};a.value&&Array.isArray(a.value)&&a.value[0]&&a.value[1]&&(v={defaultValue:[it()(a.value[0],y),it()(a.value[1],y)]});var O=Object(C.a)(Object(C.a)(Object(C.a)({},a.options),v),{},{style:{width:"100%"},showTime:d==="dateTime",disabled:a.disabled||a.readonly,onChange:r});return c.a.createElement(i,O)},Ge=ze.a.RangePicker;function qe(a){var r=(i,u)=>a.onChange(u);return Jt(a,r,Ge)}var Ae=n("RBnf"),et=n("YJCA"),gn=a=>{var r=a.fold,i=r===void 0?!1:r,u=a.width,d=a.height,y=a.fill,v=a.style,O=v===void 0?{}:v,R=Object(P.a)(a,["fold","width","height","fill","style"]);return c.a.createElement("div",Object(ae.default)({style:O,className:i?"fold-icon":"fold-icon fold-icon-active"},R),c.a.createElement("svg",{viewBox:"0 0 1024 1024",width:u||18,height:d||18},c.a.createElement("path",{d:"M942.048 306.176c-12.288-12.288-31.328-13.024-43.008-2.016L529.056 674.112c-15.072 15.872-19.008 15.808-34.816 0L124.288 304.16c-11.68-11.04-30.72-10.272-43.008 2.016-12.512 12.512-13.216 32.032-1.6 43.68L490.624 760.8c5.056 5.056 11.648 7.328 18.464 7.744h5.152c6.816-.448 13.408-2.72 18.464-7.744l410.944-410.944c11.584-11.648 10.88-31.2-1.6-43.68z",fill:y||"#3c3c3c"})))},vn=gn,_t=(a,r,i)=>{if(Array.isArray(r)&&Array.isArray(i)){if(typeof a=="string"||typeof a=="number"){var u=r.indexOf(a);return u>-1?i[u]:a}else if(Array.isArray(a)){var d=a.map(y=>_t(a,r,i));return String(d)}return a}return a},yn=a=>{var r=a.schema,i=r===void 0?{}:r,u=a.value,d=u===void 0?[]:u,y=a.index,v=bn({schema:i,value:d,index:y}).filter(O=>O.title).slice(0,3);return c.a.createElement("ul",{className:"flex overflow-hidden",style:{paddingRight:45}},v.map((O,R)=>O.title?c.a.createElement("li",{className:"flex-auto mr2 overflow-hidden",key:R},c.a.createElement("span",{className:"fw5"},O.title,": "),c.a.createElement("span",null,O.text)):null))},fn=yn,bn=a=>{var r=a.schema,i=r===void 0?{}:r,u=a.value,d=u===void 0?[]:u,y=a.index,v=i.items,O=v===void 0?{}:v;if(O.type!=="object")return[];var R=O&&O.properties||{};R=Object.values(R);var N=d&&d.length&&d[y]||{},e=Object.values(N),t=R.map((s,o)=>{var l=s&&s["ui:hidden"];if(!l){var m=s.title,f=e[o];return f===null&&f===void 0?f="":typeof f=="boolean"?f=f?"\u662F":"\u5426":typeof f!="string"&&typeof f!="number"&&f?f="{\u590D\u6742\u7ED3\u6784}":s.enum&&s.enumNames&&(f=_t(f,s.enum,s.enumNames)),{title:m,text:f}}});return t.filter(s=>!!s)},jn=Object(et.c)(()=>c.a.createElement("span",{className:"fr-move-icon"},":::"));class pn extends c.a.Component{constructor(){super(...arguments);this.toggleFold=()=>{this.props.toggleFoldItem(this.props.name)}}componentDidMount(){var r=this.props,i=r.p,u=i===void 0?{}:i,d=r.name,y=r.fold,v=bn({schema:u.schema,value:u.value,index:d}),O=v&&v[0]&&v[0].text;O&&y!==0&&this.props.toggleFoldItem(d)}render(){var r=this.props,i=r.item,u=r.p,d=u===void 0?{}:u,y=r.name,v=r.fold,O=Object(C.a)(Object(C.a)({},d),{},{index:y}),R=d.options,N=R===void 0?{}:R,e=d.readonly,t=d.formData,s=d.value,o=N.foldable,l=N.hideDelete,m=N.itemButtons,f=Ut(l);f&&(typeof f=="string"?l=Ft(f,t,s):typeof f=="function"&&(l=f(t,s)));var b=d.schema.items&&d.schema.items.type=="object",g="fr-set ba b--black-10 hover-b--black-20 relative flex flex-column";return o&&v?g+=" pv12":d.displayType==="row"&&(g+=" pt44"),c.a.createElement("li",{className:g},o&&v&&b?c.a.createElement(fn,O):i,o&&c.a.createElement(vn,{fold:v,onClick:this.toggleFold,style:{position:"absolute",top:12,right:32}}),!e&&c.a.createElement(jn,null),!(o&&v||l||e)&&c.a.createElement("div",{className:"self-end flex"},c.a.createElement(xn,{type:"dashed",icon:"delete",onClick:()=>{var j=[...d.value];j.splice(y,1),d.onChange(j)}},"\u5220\u9664"),m&&m.length>0&&m.map((j,S)=>c.a.createElement(xn,{key:S.toString(),className:"ml2",type:"dashed",icon:j.icon,onClick:()=>{var I=[...d.value];if(typeof window[j.callback]=="function"){var w=window[j.callback](I,y);d.onChange(w)}}},j.text||""))))}}var Gt=Object(et.b)(pn);class zn extends c.a.Component{constructor(){super(...arguments);this.handleAddClick=()=>{var r=this.props,i=r.p,u=r.addUnfoldItem,d=[...i.value];d.push(i.newItem),i.onChange(d),u()}}render(){var r=this.props,i=r.p,u=r.foldList,d=u===void 0?[]:u,y=r.toggleFoldItem,v=i||{},O=v.options,R=O===void 0?{}:O,N=v.extraButtons,e=N===void 0?{}:N,t=R.buttons||e||[],s=i.readonly,o=i.schema,l=o===void 0?{}:o,m=l.maxItems,f=i.value||[],b=m?m>f.length:!0;return c.a.createElement("ul",{className:"pl0 ma0"},f.map((g,j)=>c.a.createElement(Gt,{key:"item-".concat(j),index:j,name:j,p:i,fold:d[j],toggleFoldItem:y,item:i.children})),!s&&c.a.createElement("div",{className:"tr"},b&&c.a.createElement(xn,{icon:"add",onClick:this.handleAddClick},"\u65B0\u589E"),t&&t.length>0&&t.map((g,j)=>c.a.createElement(xn,{className:"ml2",icon:g.icon,key:j.toString(),onClick:()=>{if(g.callback==="clearAll"){i.onChange([]);return}if(g.callback==="copyLast"){var S=[...i.value],I=S.length-1;S.push(I>-1?S[I]:i.newItem),i.onChange(S);return}if(typeof window[g.callback]=="function"){var w=[...i.value],L=$=>i.onChange($);window[g.callback](w,L,i.newItem)}}},g.text))))}}var ea=Object(et.a)(zn);class Mn extends c.a.Component{constructor(r){super(r);this.addUnfoldItem=()=>this.setState({foldList:[...this.state.foldList,0]}),this.toggleFoldItem=u=>{var d=this.state.foldList,y=d===void 0?[]:d;y[u]=!y[u],this.setState({foldList:y})},this.handleSort=u=>{var d=u.oldIndex,y=u.newIndex,v=this.props,O=v.onChange,R=v.value;O(Object(et.d)(R,d,y)),this.setState({foldList:Object(et.d)(this.state.foldList,d,y)})};var i=this.props.value.length||0;this.state={foldList:new Array(i).fill(!1)||[]}}render(){var r=this.state.foldList;return c.a.createElement(ea,{p:this.props,foldList:r,toggleFoldItem:this.toggleFoldItem,addUnfoldItem:this.addUnfoldItem,distance:6,useDragHandle:!0,helperClass:"fr-sort-help-class",shouldCancelStart:i=>i.toElement&&i.toElement.className==="fr-tooltip-container",onSortEnd:this.handleSort})}}Mn.defaultProps={value:[]};function xn(a){var r=a.icon,i=a.children,u=Object(P.a)(a,["icon","children"]),d;switch(r){case"add":d="PlusCircleOutlined";break;case"delete":d="DeleteOutlined";break;default:d=r;break}var y=Ae[d];return y?c.a.createElement(h.a,Object(ae.default)({},u,{icon:c.a.createElement(y,null)}),i):c.a.createElement(h.a,u,i)}var ta=Mn,Vn=n("/MfK"),Ha=n("w5pM");function na(a){return c.a.createElement("div",{className:"flex flex-column"},c.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},c.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,c.a.createElement(h.a,{size:"small",className:"self-end",type:"dashed",icon:c.a.createElement(Vn.a,null)},"\u5220\u9664")),c.a.createElement(h.a,{size:"small",className:"self-end",icon:c.a.createElement(Ha.a,null)},"\u6DFB\u52A0"))}function Ua(a){var r=a.children;return c.a.createElement("div",{className:"w-100"},r)}var Qa=n("ek7I"),Wn=n("FAat"),aa=n.n(Wn),ra=a=>r=>{var i=a.Option,u=N=>r.onChange(N),d=r.invalid?{borderColor:"#f5222d"}:{},y=r.schema||{},v=y.enum,O=y.enumNames,R=r.value&&Array.isArray(r.value)?r.value:[];return c.a.createElement(a,Object(ae.default)({},r.options,{style:Object(C.a)({width:"100%"},d),mode:"multiple",disabled:r.disabled||r.readonly,value:R,onChange:u}),(v||[]).map((N,e)=>c.a.createElement(i,{value:N,key:e},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:O?O[e]:N}}))))},Kn=ra(aa.a),Ya=n("b+Mx"),Cn=n("5Dct"),Dn=n.n(Cn),sa=a=>r=>{var i=r.invalid?{borderColor:"#f5222d"}:{},u=r.schema,d=u.max,y=u.min,v=u.step,O={};return(d||d===0)&&(O={max:d}),(y||y===0)&&(O=Object(C.a)(Object(C.a)({},O),{},{min:y})),v&&(O=Object(C.a)(Object(C.a)({},O),{},{step:v})),c.a.createElement(a,Object(ae.default)({},O,{style:Object(C.a)({width:"100%"},i),disabled:r.disabled||r.readonly},r.options,{value:r.value,onChange:r.onChange}))},ia=sa(Dn.a),Xa=n("7kJ1"),oa=n("qPIi"),la=n.n(oa),Za=(a,r,i)=>{var u=i.Group,d=a.schema||{},y=d.enum,v=d.enumNames;return c.a.createElement(u,{disabled:a.disabled||a.readonly,value:a.value,onChange:r},(y||[!0,!1]).map((O,R)=>c.a.createElement(i,{value:O,key:R},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:v?v[R]:O}}))))};function da(a){var r=i=>a.onChange(i.target.value);return Za(a,r,la.a)}var Jn=a=>r=>{var i=a.Option,u=R=>r.onChange(R),d=r.invalid?{borderColor:"#f5222d"}:{},y=r.schema||{},v=y.enum,O=y.enumNames;return c.a.createElement(a,Object(ae.default)({style:Object(C.a)({width:"100%"},d)},r.options,{disabled:r.disabled||r.readonly,value:r.value,onChange:u}),(v||[]).map((R,N)=>{var e=O?O[N]:R,t=typeof e=="string"&&e[0]==="<";return t&&(e=c.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})),c.a.createElement(i,{value:R,key:N},e)}))},ua=Jn(aa.a),ka=n("tCGa"),qa=n("DH6M"),Gn=n.n(qa),Hn=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,u=i.max,d=i.min,y=i.step,v={};(u||u===0)&&(v={max:u}),(d||d===0)&&(v=Object(C.a)(Object(C.a)({},v),{},{min:d})),y&&(v=Object(C.a)(Object(C.a)({},v),{},{step:y}));var O=!1;a.options&&a.options.hideNumber&&(O=!0);var R=a.readonly?c.a.createElement("span",{style:{width:"90px"}},a.value===""?"-":a.value):c.a.createElement(Dn.a,Object(ae.default)({},a.options,v,{style:Object(C.a)({width:"90px"},r),value:a.value,disabled:a.disabled,onChange:a.onChange}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(Gn.a,Object(ae.default)({style:{flexGrow:1,marginRight:O?0:12}},v,{onChange:a.onChange,value:typeof a.value=="number"?a.value:d||0,disabled:a.disabled||a.readonly})),O?null:R)},ca=Hn,_a=n("LGkk"),ma=n("rVaU"),er=n.n(ma);function va(a){return c.a.createElement(er.a,{disabled:a.disabled||a.readonly,onChange:r=>a.onChange(a.name,r),defaultChecked:a.value})}var fa=X.a.TextArea;function pa(a){var r=a.options,i=a.invalid,u=i?{borderColor:"#f5222d"}:{},d={rows:3},y=Object(C.a)(Object(C.a)({},d),r),v=O=>a.onChange(O.target.value);return c.a.createElement(fa,Object(ae.default)({style:u,disabled:a.disabled||a.readonly,value:a.value},y,{onChange:v}))}var tr=n("VDQ/"),ha=n("B8+X"),ga=n.n(ha),ya=n("z7Xi");function ba(a){var r={name:"file",action:a.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(i){i.file.status==="done"?(F.a.success("".concat(i.file.name," \u4E0A\u4F20\u6210\u529F")),a.onChange(i.file.response.url)):i.file.status==="error"&&F.a.error("".concat(i.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){a.onChange("")}};return c.a.createElement("div",{className:"fr-upload-mod"},c.a.createElement(ga.a,Object(ae.default)({},r,{className:"fr-upload-file"}),c.a.createElement(h.a,null,c.a.createElement(ya.a,null)," \u4E0A\u4F20")),a.value&&c.a.createElement("a",{href:a.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var ur=n("/xgg"),ja=n("aOJk"),xa=n.n(ja),Oa=n("mpQp"),Ea="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",nr=(a,r)=>a==="image"?c.a.createElement("img",{src:r||Ea,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}):null,Sa=(a,r)=>a!=="image"?null:c.a.createElement(xa.a,{content:nr(a,r),className:"fr-preview",placement:"bottom"},c.a.createElement(Oa.a,null));function Ca(a){var r=a.options,i=r===void 0?{}:r,u=a.invalid,d=u?{borderColor:"#f5222d"}:{},y=a.schema.format,v=y===void 0?"text":y,O=v==="image"?"text":v,R=N=>a.onChange(N.target.value);return c.a.createElement(X.a,Object(ae.default)({style:d},i,{value:a.value,type:O,disabled:a.disabled||a.readonly,addonAfter:i.addonAfter?i.addonAfter:Sa(v,a.value),onChange:R}))}var Da={checkbox:xt,checkboxes:Ze,color:Tt,date:Dt,dateRange:qe,input:Ca,list:ta,listEditor:na,map:Ua,multiSelect:Kn,number:ia,radio:da,select:ua,slider:ca,switch:va,textarea:pa,upload:ba};function Ra(a){var r=a.onChange,i=a.value,u=a.disabled,d=a.readonly,y=a.options,v=O=>{try{var R=un(i,O.target.value);r(R)}catch(N){}};return c.a.createElement(X.a,Object(ae.default)({disabled:u||d},y,{onChange:v,value:Yt(i)}))}var Un=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,u=i.max,d=i.min,y=i.step,v={};(u||u===0)&&(v={max:u}),(d||d===0)&&(v=Object(C.a)(Object(C.a)({},v),{},{min:d})),y&&(v=Object(C.a)(Object(C.a)({},v),{},{step:y}));var O=!1;a.options&&a.options.hideNumber&&(O=!0);var R=s=>typeof s=="string"&&s.endsWith("%"),N=100;if(R(a.value))try{N=Number(a.value.split("%")[0]),Number.isNaN(N)&&(N=100)}catch(s){}var e=s=>{var o=s+"%";a.onChange(o)},t=a.readonly?c.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):c.a.createElement(Dn.a,Object(ae.default)({},a.options,v,{style:Object(C.a)({width:"80px"},r),value:N,disabled:a.disabled,onChange:e,formatter:s=>"".concat(s,"%"),parser:s=>s.replace("%","")}));return c.a.createElement("div",{className:"fr-slider"},c.a.createElement(Gn.a,Object(ae.default)({style:{flexGrow:1,marginRight:O?0:12}},v,{onChange:e,max:100,tipFormatter:s=>s+"%",value:N||100,disabled:a.disabled||a.readonly})),O?null:t)},Aa=Un,Qn={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes","*?readonly":"text"};function Yn(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qn,i=a.type,u=a.format,d=a.enum,y=a.readonly;if(a["ui:widget"])return a["ui:widget"];var v=[];y&&(v.push("".concat(i,"?readonly")),v.push("*?readonly")),d&&(v.push("".concat(i,"?enum")),v.push("*?enum")),u&&v.push("".concat(i,":").concat(u)),v.push(i);var O="";return v.some(R=>(O=r[R],!!O)),O}function Fa(){var a=U(),r=a.selected,i=a.flatten,u=a.onItemChange,d=a.userProps,y=d===void 0?{}:d,v=y.settings,O=y.commonSettings,R={},N={},e=(S,I)=>{var w=[];return S.forEach(L=>{var $=L.widgets,M=$.filter(K=>K.widget).map(K=>Object(C.a)(Object(C.a)({},K),{},{setting:Object(C.a)(Object(C.a)({},I),K.setting)}));w=[...w,...M]}),w},t=S=>{if(r)try{var I=i[r];I&&I.schema&&u(r,Object(C.a)(Object(C.a)({},I),{},{schema:S}))}catch(w){console.log(w,"catch")}},s=Array.isArray(v)?[...v,{widgets:[...xe,...me,...De]}]:Ne,o=Ye(O)?O:pe,l=e(s,o),m,f;try{if(m=i[r],m&&(f=Yn(m.schema)),f){var b=l.find(S=>S.widget===f)||{},g=b.setting;R={schema:{type:"object",properties:Object(C.a)({},g)}},N=m.schema}}catch(S){console.log(S)}var j=Object(C.a)(Object(C.a)({},Da),{},{idInput:Ra,percentSlider:Aa});return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Nn,{schema:R,formData:N,onChange:t,widgets:j,preview:!0,frProps:{displayType:"column",showDescIcon:!1}}))}function Na(){var a=U(),r=a.widgets,i=a.frProps,u=a.userProps,d=We(),y=u&&u.globalSettings?u.globalSettings:Ie,v=O=>{d({frProps:O})};return c.a.createElement("div",{style:{paddingRight:24}},c.a.createElement(Nn,{schema:{schema:y},formData:i,onChange:v,widgets:r,preview:!0,frProps:{displayType:"column",showDescIcon:!0}}))}var Xn=je.a.TabPane;function Ia(){var a=V({showRight:!0,showItemSettings:!1}),r=Object(z.default)(a,2),i=r[0],u=r[1],d=U(),y=d.selected,v=i.showRight,O=i.showItemSettings,R=()=>u({showRight:!v}),N=()=>c.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:R},c.a.createElement(Ce.a,{className:"f5"})),e=()=>c.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},c.a.createElement(N,null));return Object(Z.useEffect)(()=>{y&&y[0]==="0"||y==="#"||!y?u({showItemSettings:!1}):u({showItemSettings:!0})},[y]),v?c.a.createElement("div",{className:"right-layout relative pl2"},c.a.createElement(N,null),c.a.createElement(je.a,{defaultActiveKey:"1",onChange:()=>{}},O&&c.a.createElement(Xn,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},c.a.createElement(Fa,null)),c.a.createElement(Xn,{tab:"\u8868\u5355\u914D\u7F6E",key:O?"2":"1"},c.a.createElement(Na,null)))):c.a.createElement(e,null)}var Ta=a=>{var r=a.children,i=r===void 0?[]:r,u=a.preview;return c.a.createElement(c.a.Fragment,null,i.map((d,y)=>{var v={id:d,preview:u};return c.a.createElement(An,Object(ae.default)({key:y.toString()},v))}))},wa=Ta,Pa=a=>{var r=a.$id,i=a.item,u=a.labelClass,d=a.contentClass,y=a.isComplex,v=a.children,O=i.schema,R=i.data,N=U(),e=N.onItemChange,t=N.flatten,s=N.widgets,o=N.mapping,l=N.frProps,m=l===void 0?{}:l,f=m.labelWidth,b=m.displayType,g=m.showDescIcon,j=m.showValidate,S=O.type,I=O.title,w=O.description,L=O.required,$=Yn(O,o),M=O["ui:widget"];M&&s[M]&&($=M);var K=s[$];if(!K){var ce=Object(C.a)({},O);delete ce["ui:widget"],$=Yn(ce,o),K=s[$]||"input"}var oe=nt("ui:labelWidth",r,t)||f,se=Rt(oe)?Number(oe):ot(oe)?oe:110,ie={width:se};$==="checkbox"?ie={flexGrow:1}:(y||b==="column")&&(ie={flexGrow:1});var q=B=>{var _=Object(C.a)({},i);_.data=B,e(r,_,"data")},le={};$==="checkbox"&&b==="row"&&(le.marginLeft=oe);var de={disabled:O["ui:disabled"],readonly:O["ui:readonly"],hidden:O["ui:hidden"],options:O["ui:options"],labelWidth:O["ui:labelWidth"],width:O["ui:width"]};return c.a.createElement(c.a.Fragment,null,O.title?c.a.createElement("div",{className:u,style:ie},c.a.createElement("label",{className:"fr-label-title ".concat($==="checkbox"||b==="column"?"no-colon":""),title:I},L&&c.a.createElement("span",{className:"fr-label-required"}," *"),c.a.createElement("span",{className:"".concat(y?"b":""," ").concat(b==="column"?"flex-none":"")},I),w&&(g?c.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":w},c.a.createElement("i",{className:"fr-tooltip-icon"}),c.a.createElement("div",{className:"fr-tooltip-container"},c.a.createElement("i",{className:"fr-tooltip-triangle"}),w)):c.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",w,"\xA0)")),b!=="row"&&j&&c.a.createElement("span",{className:"fr-validate"},"validation"))):null,c.a.createElement("div",{className:d,style:le},c.a.createElement(K,Object(ae.default)({value:R,onChange:q,schema:O},de,{children:v}))))},Zn=Pa,ar=n("iU8R"),Ba=n("dhM6"),$a=n("lfch"),La=n("aMZS");function Rn(a){var r=a.$id,i=a.item,u=a.inside,d=u===void 0?!1:u,y=a.children,v=a.style,O=Object(Z.useState)(),R=Object(z.default)(O,2),N=R[0],e=R[1],t=U(),s=t.flatten,o=t.onItemChange,l=t.onFlattenChange,m=t.selected,f=t.hovering,b=We(),g=i.schema,j=g.type,S=Object(Z.useRef)(null),I=Object(Pn.a)({item:{type:"box",$id:d?0+r:r},end:(Ee,ge)=>{var Ue=ge.getDropResult()},collect:Ee=>({isDragging:Ee.isDragging()})}),w=Object(z.default)(I,3),L=w[0].isDragging,$=w[1],M=w[2],K=Object(La.a)({accept:"box",drop:(Ee,ge)=>{var Ue=ge.didDrop();if(!Ue){console.log(Ee.dragItem,"tems");var ue=cn({dragId:Ee.$id,dragItem:Ee.dragItem,dropId:r,position:N,flatten:s}),ye=Object(z.default)(ue,2),Be=ye[0],vt=ye[1];l(Be),b({selected:vt})}},hover:(Ee,ge)=>{var Ue=ge.isOver({shallow:!0});if(Ue){var ue=S.current&&S.current.getBoundingClientRect(),ye=(ue.bottom-ue.top)/2,Be=ge.getSourceClientOffset(),vt=Be.y-ue.top;d?e("inside"):(vt<=ye&&e("up"),vt>ye&&e("down"))}},collect:Ee=>({isOver:Ee.isOver({shallow:!0}),canDrop:Ee.canDrop()})}),ce=Object(z.default)(K,2),oe=ce[0],se=oe.canDrop,ie=oe.isOver,q=ce[1],le=se&&ie;M(q(S));var de=Ee=>{Ee.stopPropagation();var ge=d?"0"+r:r;b({selected:ge})},B=Ee=>{Ee.stopPropagation();var ge=Object(C.a)({},s),Ue="#";try{var ue=ge[r].parent,ye=ge[ue].children,Be=ye.indexOf(r);Be>0?Ue=ye[Be-1]:Ue=ye[1]||ue}catch(vt){console.log("catch",vt)}delete ge[r],l(ge),b({selected:Ue})},_=Ee=>{Ee.stopPropagation();var ge=Sn(s,r),Ue=Object(z.default)(ge,2),ue=Ue[0],ye=Ue[1];l(ue),b({selected:ye})},ee=()=>{},fe=()=>{},Fe=m===r&&!d;m&&m[0]==="0"&&(Fe=m.substring(1)===r&&d);var He=d?"0"+r:r,Oe={backgroundColor:f===He?"#ecf5ff":"#fff",opacity:L?0:1};if(d?Oe=Object(C.a)(Object(C.a)({},Oe),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):r==="#"?Oe=Object(C.a)(Object(C.a)({},Oe),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):j==="object"&&(Oe=Object(C.a)(Object(C.a)({},Oe),{},{paddingTop:12})),le&&(d?Oe=Object(C.a)(Object(C.a)({},Oe),{},{boxShadow:"0 -3px 0 red"}):N==="up"?Oe=Object(C.a)(Object(C.a)({},Oe),{},{boxShadow:"0 -3px 0 red"}):N==="down"&&(Oe=Object(C.a)(Object(C.a)({},Oe),{},{boxShadow:"0 3px 0 red"}))),Fe&&(Oe=Object(C.a)(Object(C.a)({},Oe),{},{outline:"2px solid #409eff",borderColor:"#fff"})),v&&typeof v=="object"&&(Oe=Object(C.a)(Object(C.a)({},Oe),v)),r==="#"&&d)return y;var tt=g&&g.$id&&Yt(g.$id);return tt==="#"&&(tt=""),c.a.createElement("div",{ref:S,style:Oe,className:"field-wrapper relative w-100",onClick:de,onMouseEnter:ee,onMouseLeave:fe},!d&&Fe&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:$},c.a.createElement(Ba.a,{style:{color:"#fff"}})),!d&&c.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},tt),y,Fe&&!d&&r!=="#"&&c.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},c.a.createElement("div",{className:"pointer",onClick:B},c.a.createElement(Vn.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),c.a.createElement("div",{className:"pointer",onClick:_},c.a.createElement($a.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var za=a=>{var r=a.id,i=r===void 0?"#":r,u=a.preview,d=u===void 0?!1:u,y=U(),v=y.flatten,O=y.frProps,R=O===void 0?{}:O,N=R.displayType,e=R.column,t=v[i];if(!t)return null;var s=t.schema,o=s.type==="object",l=s.type==="array"&&s.enum===void 0,m=o||l,f=s["ui:width"],b="fr-field w-100 ".concat(m?"fr-field-complex":""),g="fr-label mb2",j="fr-content",S={};switch(!m&&f?S={width:f,paddingRight:"12px"}:!m&&e>1&&(S={width:"calc(100% /".concat(e,")"),paddingRight:"12px"}),s.type){case"object":s.title&&(b+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",g+=" fr-label-object bg-white absolute ph2 top-upper left-1"),b+=" fr-field-object",s.title&&(j+=" ml3");break;case"array":s.title&&!s.enum&&(g+=" mt2 mb3");break;case"boolean":s["ui:widget"]!=="switch"&&(s.title&&(g+=" ml2",g=g.replace("mb2","mb0")),j+=" flex items-center",b+=" flex items-center flex-row-reverse justify-end");break;default:N==="row"&&(g=g.replace("mb2","mb0"))}var I=s.type==="boolean"&&s["ui:widget"]!=="switch";N==="row"&&!m&&!I&&(b+=" flex items-center",g+=" flex-shrink-0 fr-label-row",g=g.replace("mb2","mb0"),j+=" flex-grow-1 relative"),N==="row"&&I&&(j+=" flex justify-end pr2");var w={$id:i,item:t,labelClass:g,contentClass:j,isComplex:m},L={children:t.children,preview:d},$=t.children&&t.children.length>0?c.a.createElement("ul",{className:"flex flex-wrap pl0"},c.a.createElement(wa,L)):null;if(d)return c.a.createElement("div",{style:S,className:b},c.a.createElement(Zn,w,(o||l)&&$));var M=Object.keys(v).length<2;return M?c.a.createElement(Rn,{style:S,$id:i,item:t},c.a.createElement("div",{className:"".concat(b," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):c.a.createElement(Rn,{style:S,$id:i,item:t},c.a.createElement("div",{className:b},c.a.createElement(Zn,w,(o||l)&&c.a.createElement(Rn,{$id:i,item:t,inside:!0},$||c.a.createElement("div",{className:"h2"})))))},An=za,Fn=X.a.TextArea;function rr(a,r){var i=a.schema,u=a.formData,d=a.onChange,y=a.onSchemaChange,v=a.setGlobal,O=a.userProps,R=O===void 0?{}:O,N=a.frProps,e=N===void 0?{}:N,t=Object(P.a)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),s=V({showModal:!1,showModal2:!1,schemaForImport:""}),o=Object(z.default)(s,2),l=o[0],m=o[1],f=t.simple,b=f===void 0?!0:f,g=t.preview,j=R.transformFrom,S=R.transformTo,I=R.isNewVersion,w=R.extraButtons,L=w===void 0?[]:w,$={};i&&($=St(i.schema,i.uiSchema));var M=zt($),K=mn(M,u),ce=function(ye){var Be=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",vt=bt(ye),wt=Le(ye);Be==="schema"&&y&&y(vt),d(wt)},oe=(ue,ye,Be)=>{K[ue]=ye,ce(K,Be)},se=()=>m({showModal:!l.showModal}),ie=()=>m({showModal2:!l.showModal2}),q=()=>{v({schema:{schema:{type:"object"}},formData:{},selected:void 0})},le=ue=>{m({schemaForImport:ue.target.value})},de=()=>{try{var ue=j(at(l.schemaForImport)),ye=!0;ue&&ue.propsSchema&&(ye=!1);var Be=jt(ue),vt=Be.schema,wt=Object(P.a)(Be,["schema"]);v(Pt=>({schema:{schema:vt},formData:{},selected:void 0,isNewVersion:ye,frProps:Object(C.a)(Object(C.a)({},Pt.frProps),wt)}))}catch(Pt){F.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}ie()},B={},_="";try{var ee=bt(K,"#",!0);e&&e.column&&(ee["ui:column"]=e.column),e&&e.displayType&&(ee["ui:displayType"]=e.displayType),e&&e.showDescIcon&&(ee["ui:showDescIcon"]=e.showDescIcon),B=S(Object(C.a)({schema:ee},e)),I||(B=wn(B)),_=JSON.stringify(B,null,2)}catch(ue){}var fe=()=>{re()(_),F.a.info("\u590D\u5236\u6210\u529F"),se()},Fe=()=>B,He=ue=>{try{var ye=ue.schema,Be=ue.propsSchema,vt=ue.uiSchema,wt=Object(P.a)(ue,["schema","propsSchema","uiSchema"]),Pt={schema:ye||Be},en=!0;!ye&&Be&&(en=!1),v(Y=>Object(C.a)(Object(C.a)({},Y),{},{schema:Pt,formData:{},selected:void 0,isNewVersion:en,frProps:Object(C.a)(Object(C.a)({},Y.frProps),wt)}))}catch(Y){console.error(Y)}},Oe=()=>{re()(_)};Object(Z.useImperativeHandle)(r,()=>({getValue:Fe,setValue:He,copyValue:Oe}));var tt=Object(C.a)({flatten:K,onFlattenChange:ce,onItemChange:oe,userProps:R,frProps:e},t),Ee=Array.isArray(L)?L:[],ge=Ee.filter(ue=>ue===!0||ue===!1),Ue=Ee.filter(ue=>Ye(ue)&&ue.text);return b?c.a.createElement(x.Provider,{value:v},c.a.createElement(lt.Provider,{value:tt},c.a.createElement(An,{preview:!0}))):c.a.createElement(x.Provider,{value:v},c.a.createElement(lt.Provider,{value:tt},c.a.createElement("div",{className:"fr-generator-container"},c.a.createElement(W,null),c.a.createElement("div",{className:"mid-layout pr2"},c.a.createElement("div",{className:"mv2 mh1"},ge[0]!==!1&&c.a.createElement(h.a,{className:"mr2 mb1",onClick:()=>{v({preview:!g,selected:"#"})}},g?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),ge[1]!==!1&&c.a.createElement(h.a,{className:"mr2",onClick:q},"\u6E05\u7A7A"),ge[2]!==!1&&c.a.createElement(h.a,{className:"mr2",onClick:ie},"\u5BFC\u5165"),ge[3]!==!1&&c.a.createElement(h.a,{type:"primary",className:"mr2",onClick:se},"\u5BFC\u51FAschema"),Ue.map((ue,ye)=>c.a.createElement(h.a,Object(ae.default)({key:ye.toString(),className:"mr2"},ue),ue.text||ue.children))),c.a.createElement("div",{className:"dnd-container"},c.a.createElement("div",{style:{height:g?33:0}}),c.a.createElement(An,{preview:g}))),c.a.createElement(Ia,{globalProps:e}),c.a.createElement(Ot.a,{visible:l.showModal,onOk:fe,onCancel:se,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},c.a.createElement("div",{className:"mt3"},c.a.createElement(Fn,{style:{fontSize:12},value:_,autoSize:{minRows:10,maxRows:30}}))),c.a.createElement(Ot.a,{visible:l.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:de,onCancel:ie},c.a.createElement("div",{className:"mt3"},c.a.createElement(Fn,{style:{fontSize:12},value:l.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:le,autoSize:{minRows:10,maxRows:30}}))))))}var kn=Object(Z.forwardRef)(rr);kn.defaultProps={labelWidth:120};var Nn=kn,In=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=arguments.length>2?arguments[2]:void 0,d=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=d||y;if(v){var O=Ct(r);O.map(N=>{d&&(r.properties[N.name]=a(N.schema,r,N.name)),y&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}if(i&&i.required&&Array.isArray(i.required)){var R=i.required.indexOf(u);R>-1&&(r.required=!0,i.required.splice(R,1)),i.required.length||delete i.required}return r},qn=a=>Object(C.a)(Object(C.a)({},a),{},{schema:In(a.schema)}),Ma=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=d||y;if(v){var O=Ct(r);O.map(R=>{d&&(r.properties[R.name]=a(R.schema,r,R.name)),y&&(r.items.properties[R.name]=a(R.schema,r,R.name))})}return typeof r.required=="boolean"&&(r.required&&i&&(i.required&&Array.isArray(i.required)?i.required.push(u):i.required=[u]),delete r.required),r},_n=a=>Object(C.a)(Object(C.a)({},a),{},{schema:Ma(a.schema)}),On=n("xwS/"),sr=n("4l2o"),ir=n("k/c8"),or={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function lr(a,r){var i=a.defaultValue,u=a.templates,d=a.submit,y=a.transformer,v=a.extraButtons,O=a.settings,R=a.commonSettings,N=a.globalSettings,e=a.widgets,t=e===void 0?{}:e,s=qn,o=_n;y&&(typeof y.from=="function"&&(s=y.from),typeof y.to=="function"&&(o=y.to));var l=r||Object(Z.useRef)(),m=V({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),f=Object(z.default)(m,2),b=f[0],g=f[1];Object(Z.useEffect)(()=>{var _=i?s(i):or;_&&_.propsSchema?g({isNewVersion:!1}):g({isNewVersion:!0}),g({schema:jt(_),formData:_&&_.formData||{}})},[i]);var j=b.formData,S=b.frProps,I=b.hovering,w=b.isNewVersion,L=b.preview,$=b.schema,M=b.selected,K=S.displayType,ce=K==="row",oe=Object(C.a)(Object(C.a)({},S),{},{showDescIcon:ce}),se=_=>{g({formData:_}),a.onChange&&a.onChange(_)},ie=_=>{var ee=Object(C.a)({},$);ee.schema=_,g({schema:ee}),a.onSchemaChange&&setTimeout(()=>{var fe=l.current.getValue();a.onSchemaChange(fe)},0)},q=Object(C.a)(Object(C.a)({},Qn),{},{array:"listEditor"}),le={preview:L,simple:!1,mapping:q,widgets:Object(C.a)(Object(C.a)({},Da),t),selected:M,hovering:I},de={templates:u,submit:d,transformFrom:s,transformTo:o,isNewVersion:w,extraButtons:v,settings:O,commonSettings:R,globalSettings:N},B=Object(C.a)(Object(C.a)({schema:$,formData:j,onChange:se,setGlobal:g,onSchemaChange:ie},le),{},{userProps:de,frProps:oe});return c.a.createElement(Nn,Object(ae.default)({ref:l},B))}var dr=Object(Z.forwardRef)(lr),ht=n("trko"),Va=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=r.type==="object"&&r.properties,d=r.type==="array"&&r.items&&r.items.properties,y=u||d;if(y){var N=Ct(r);N.map(e=>{u&&(r.properties[e.name]=a(e.schema,r)),d&&(r.items.properties[e.name]=a(e.schema,r))})}else if(r.enum&&Array.isArray(r.enum)){var v=r.enum;if(Ye(v[0])&&v[0].label!==void 0&&v[0].value!==void 0){var O=v.map(e=>e.label),R=v.map(e=>e.value);r.enum=R,r.enumNames=O}}return r["x-component"]&&(r["ui:widget"]=r["x-component"]),r["x-component-props"]&&(r["ui:options"]=r["x-component-props"]),i&&r.required&&(i.required&&Array.isArray(i.required)?i.required.push(r.name):i.required=[r.name]),delete r.key,delete r.name,delete r.required,delete r["x-component"],delete r["x-component-props"],r},mt=a=>{var r=Va(a);return{schema:r}},Wa=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,d=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=d||y;if(v){var R=Ct(r);R.map(N=>{d&&(r.properties[N.name]=a(N.schema,r,N.name)),y&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}else if(r.enum&&Array.isArray(r.enum)&&r.enumNames&&Array.isArray(r.enumNames)){var O=r.enum.map((N,e)=>({value:N,label:r.enumNames[e]}));r.enum=O}return r["ui:widget"]&&(r["x-component"]=r["ui:widget"]),r["ui:options"]&&(r["x-component-props"]=r["ui:options"]),delete r["ui:widget"],delete r["ui:options"],delete r.enumNames,u&&(r.name=u,r.key=u),i&&u&&i.required&&Array.isArray(i.required)&&i.required.indexOf(u)>-1&&(r.required=!0),r},Ka=a=>{var r=a.schema;return Wa(r)},Tn=(a,r)=>c.a.createElement(H.a,{backend:D.a},c.a.createElement(dr,Object(ae.default)({ref:r},a))),cr=G.default=Object(Z.forwardRef)(Tn)},refC:function(Me,G,n){"use strict";n.r(G),n.d(G,"useForm",function(){return d}),n.d(G,"connectForm",function(){return y}),n.d(G,"createWidget",function(){return Gt});var ae=n("Saan"),Z=n("vgIT"),c=n.n(Z),H=n("0Owb"),D=n("k1fw"),C=n("PpiC"),z=n("q1tI"),x=n.n(z),lt=n("Pv/L"),We=n("tJVT"),U=n("LvDl");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function V(e){var t=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:t.test(e)}function yt(e,t){return t?!1:e&&e.type==="boolean"&&e.widget!=="switch"}function tn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function dt(e){if(typeof e=="string"){var t=e.split(".");return t.length===1?"#":(t.pop(),t.join("."))}return"#"}function Bt(e,t){if(t==="#")return e;if(typeof t=="string")return Object(U.get)(e,t)}function $t(e){var t,s;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,l=e.match(o);return l?(t=e.replace(o,"[]"),s=l.map(m=>Number(m.substring(1,m.length-1)))):t=e,{id:t,dataIndex:s}}function ft(e,t){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var s=e;return Array.isArray(t)&&t.forEach(o=>{s=s.replace(/\[\]/,"[".concat(o,"]"))}),tn(s)}function ut(e){return e.type==="array"&&e.items&&e.enum===void 0}function ct(e){return e.type==="object"&&e.properties}function Ot(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",s=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=h(e),m=t;l.$id||(l.$id=m);var f=[];ct(l)&&Object.entries(l.properties).forEach(g=>{var j=Object(We.default)(g,2),S=j[0],I=j[1],w=ut(I)?S+"[]":S,L=m==="#"?w:m+"."+w;f.push(L),Ot(I,L,m,o)}),ut(l)&&Object.entries(l.items.properties).forEach(g=>{var j=Object(We.default)(g,2),S=j[0],I=j[1],w=ut(I)?S+"[]":S,L=m==="#"?w:m+"."+w;f.push(L),Ot(I,L,m,o)});var b=Array.isArray(l.rules)?[...l.rules]:[];return["boolean","function","string"].indexOf(typeof l.required)>-1&&b.push({required:l.required}),l.type&&(o[m]={parent:s,schema:l,children:f,rules:b}),o}function k(e,t){return e.indexOf(t)>-1}var E=e=>k(Object.prototype.toString.call(e),"Object"),h=U.cloneDeep;function T(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function p(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function F(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0)return!1;if(e===null&&t===null)return!0;if(e===null||t===null)return!1;if(e.constructor!==t.constructor)return!1;if(e.constructor===Array){if(e.length!==t.length)return!1;for(var s=0;s<e.length;s++)if(e[s].constructor===Array||e[s].constructor===Object){if(!F(e[s],t[s]))return!1}else if(e[s]!==t[s])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var l=Object.keys(e)[o];if(e[l]&&typeof e[l]!="number"&&(e[l].constructor===Array||e[l].constructor===Object)){if(!F(e[l],t[l]))return!1}else if(e[l]!==t[l])return!1}}else if(e.constructor===String||e.constructor===Number)return e===t;return!0}function P(e){var t;switch(e){case"date":t="YYYY-MM-DD";break;case"time":t="HH:mm:ss";break;default:t="YYYY-MM-DD HH:mm:ss"}return t}function J(e){return e.find((t,s,o)=>s!==o.findIndex(l=>JSON.stringify(t)===JSON.stringify(l)))}function Q(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=te(e),o=s.map(f=>{var b=f.name,g=f.schema,j=g.type,S=g.enum,I=g.properties,w=g.items,L=j==="object"&&I,$=j==="array"&&w&&!S,M=b&&t[f.name];if(!M)return f;if($){var K=Q(w,M.items||{});return Object(D.a)(Object(D.a)({},f),{},{schema:Object(D.a)(Object(D.a)(Object(D.a)({},f.schema),M),{},{items:K})})}if(L){var ce=Q(f.schema,M);return Object(D.a)(Object(D.a)({},f),{},{schema:ce})}return Object(D.a)(Object(D.a)({},f),{},{schema:Object(D.a)(Object(D.a)({},f.schema),M)})}),l={};o.forEach(f=>{l[f.name]=f.schema});var m={};return Object.keys(t).forEach(f=>{typeof f=="string"&&f.substring(0,3)==="ui:"&&(m[f]=t[f])}),X(l)?Object(D.a)(Object(D.a)({},e),m):Object(D.a)(Object(D.a)(Object(D.a)({},e),m),{},{properties:l})}function X(e){return Object.keys(e).length===0}function te(e){if(!e)return[];var t=e.properties,s=e.items,o=e.type;if(!t&&!s)return[];var l={};return o==="object"&&(l=t),o==="array"&&(l=s),Object.keys(l).map(m=>({schema:l[m],name:m}))}function re(){}var pe=e=>Function('"use strict";return ('+e+")")(),xe=(e,t,s)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(s),`;
    const formData = `).concat(JSON.stringify(t),`;
    return (`).concat(e,")"))();function me(e){if(typeof e!="string")return!1;var t=/^{{(.+)}}$/,s=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(t)&&!e.match(s)&&!e.match(o))}function De(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,o=dt(s),l=Bt(t,o)||{};if(typeof e=="string"){var m=e.substring(2,e.length-2),f=/formData.([a-zA-Z0-9.$_\[\]]+)/g,b=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,g=`
    return (`.concat(m.replaceAll(f,(j,S)=>JSON.stringify(Bt(t,S))).replaceAll(b,(j,S)=>JSON.stringify(Bt(l,S))),")");console.log(g,l,t);try{return Function(g)()}catch(j){return e}}else return e}var Se=e=>Object.keys(e).some(t=>{var s=e[t];return typeof s=="string"?me(s):E(s)?Se(s):!1}),Ne=(e,t,s)=>{var o=h(e);return Object.keys(o).forEach(l=>{var m=o[l];if(me(m)&&(o[l]=De(m,t,s)),typeof l=="string"&&l.toLowerCase().indexOf("props")>-1){var f=o[l];E(f)&&Object.keys(f).forEach(b=>{o[l][b]=De(f[b],t,s)})}}),o};function Ie(e){return Object.keys(e).some(t=>typeof e[t]=="function"?!0:typeof e[t]=="string"?me(e[t]):typeof e[t]=="object"?Ie(e[t]):!1)}var Ve=(e,t,s)=>{try{var o=s[t];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var l=s[o.parent].schema;return l[e]!==void 0?l[e]:Ve(e,o.parent,s)}}catch(m){return}},Re=()=>{var e=localStorage.getItem("SAVES");if(e)try{var t=JSON.parse(e),s=t.length;if(s)return s+1}catch(o){return 1}else return 1};function he(e){return Function('"use strict";return ('+e+")")()}function Qe(e){if(!e)return[];var t=e.properties,s=e.items,o=e.type;if(!t&&!s)return[];var l={};return o==="object"&&(l=t),o==="array"&&(l=s.properties),Object.keys(l).map(m=>({schema:l[m],name:m}))}var _e=e=>{if(e&&e.propsSchema){var t=e.propsSchema,s=Object(C.a)(e,["propsSchema"]);return Object(D.a)({schema:t},s)}return e},$e=e=>{if(e&&e.schema){var t=e.schema,s=Object(C.a)(e,["schema"]);return Object(D.a)({propsSchema:t},s)}return e},Ye=e=>{if(!!e){var t=e&&e.items&&e.items.enum,s=e&&e.enum;return t||s}},st=function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(t)?t:s},Rt=e=>{var t="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(t).test(e))};function ot(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&e in t.target?t.target[e]:t}var Et=e=>{try{var t=e.split("."),s=t.slice(-1)[0];return s}catch(o){return console.error(o,"getKeyFromPath"),""}},nn=(e,t)=>{if(typeof e=="boolean")return e?"yes":"no";if(ct(t)||ut(t))return"-";if(Array.isArray(t.enum)&&Array.isArray(t.enumNames))try{return t.enumNames[t.enum.indexOf(e)]}catch(s){return e}return e},Lt=e=>{var t={};return E(e)?Object.keys(e).forEach(s=>{t[s]=Lt(e[s])}):Array.isArray(e)?t=e.filter(s=>!!(s&&JSON.stringify(s)!=="{}")):t=e,t},St=e=>{var t=e.schema,s=e.isRequired,o=s===void 0?!0:s,l={};if(ct(t))l.type="object",o&&t.required===!0&&(l.required=!0),l.fields={},Object.keys(t.properties).forEach(j=>{var S=t.properties[j];Array.isArray(t.required)&&t.required.indexOf(j)>-1&&(S.required=!0),l.fields[j]=St({schema:S,isRequired:o})});else if(ut(t))l.type="array",o&&t.required===!0&&(l.required=!0),l.defaultField={type:"object",fields:{}},Object.keys(t.items.properties).forEach(j=>{var S=t.items.properties[j];Array.isArray(t.required)&&t.required.indexOf(j)>-1&&(S.required=!0),l.defaultField.fields[j]=St({schema:S,isRequired:o})});else{var m=j=>t.type?Object(D.a)(Object(D.a)({},j),{},{type:t.type}):j.pattern&&typeof j.pattern=="string"?Object(D.a)(Object(D.a)({},j),{},{pattern:new RegExp(j.pattern)}):j,f=t.required,b=Object(C.a)(t,["required"]);if(o&&t.required===!0&&(b.required=!0),t.rules)if(Array.isArray(t.rules)){var g=t.rules.map(j=>m(j));l=[b,...g]}else E(t.rules)?l=[b,m(t.rules)]:l=b;else l=b;switch(t.type){case"range":l.type="array";break;default:break}switch(t.format){case"email":case"url":l.type=t.format;break;case"image":break;default:break}}return l},At=e=>{var t=e.split(".");return t.map(s=>isNaN(Number(s))?s:"[".concat(s,"]")).reduce((s,o)=>o[0]==="["||s===""?s+o:s+"."+o,"")},an=(e,t)=>{for(var s=e.split(".");s.length>0;){var o=s,l=Object(lt.a)(o),m=l[0],f=l.slice(1);m=m.split("[")[0];var b=void 0;return ct(t)?b=t.properties[m]:ut(t)&&(b=t.items.properties[m]),s=f,b?an(f.join("."),b):!!t.required}},Ht=e=>{var t={};return ct(e)?Object.keys(e.properties).forEach(s=>{var o=e.properties[s],l=Ht(o);t[s]=l}):e.default!==void 0?t=e.default:e.type==="boolean"?t=!1:t=void 0,t},dn=(e,t)=>{if(typeof e!="string")return"";if(!t)return e;if(e=e.replace("${title}",t.title),e=e.replace("${type}",t.format||t.type),t.min&&(e=e.replace("${min}",t.min)),t.max&&(e=e.replace("${max}",t.max)),t.rules){var s=t.rules.find(f=>f.min!==void 0);s&&(e=e.replace("${min}",s.min));var o=t.rules.find(f=>f.max!==void 0);o&&(e=e.replace("${max}",o.max));var l=t.rules.find(f=>f.len!==void 0);l&&(e=e.replace("${len}",l.len));var m=t.rules.find(f=>f.pattern!==void 0);m&&(e=e.replace("${pattern}",m.pattern))}return e},Ft=(e,t)=>{var s=h(e);if(s=t(s),ct(s)){var o=[];Array.isArray(s.required)&&(o=s.required,delete s.required),Object.keys(s.properties).forEach(l=>{var m=s.properties[l];o.indexOf(l)>-1&&(m.required=!0),s.properties[l]=Ft(m,t)})}else ut(s)&&Object.keys(s.items.properties).forEach(l=>{var m=s.items.properties[l];s.items.properties[l]=Ft(m,t)});return s},Ut=e=>Ft(e,Qt),Qt=e=>{try{var t=h(e);if(t.rules=[],t.props=t.props||{},t["ui:options"]&&(t.props=t["ui:options"],delete t["ui:options"]),t.pattern){var s={pattern:t.pattern};t.message&&t.message.pattern&&(s.message=t.message.pattern),t.rules.push(s),delete t.pattern,delete t.message}return t.minLength&&(t.rules.push({min:t.minLength}),delete t.minLength),t.maxLength&&(t.rules.push({max:t.maxLength}),t.props.maxLength=t.maxLength,delete t.maxLength),t.min&&(t.rules.push({min:t.min}),t.props.min=t.min,delete t.min),t.max&&(t.rules.push({max:t.max}),t.props.max=t.max,delete t.max),t.step&&(t.props.step=t.step,delete t.step),t.minItems&&(t.props.minItems=t.minItems,delete t.minItems),t.maxItems&&(t.props.maxItems=t.maxItems,delete t.maxItems),t["ui:className"]&&(t.className=t["ui:className"],delete t["ui:className"]),t["ui:hidden"]&&(t.hidden=t["ui:hidden"],delete t["ui:hidden"]),t["ui:readonly"]&&(t.readOnly=t["ui:readonly"],delete t["ui:readonly"]),t["ui:disabled"]&&(t.disabled=t["ui:disabled"],delete t["ui:disabled"]),t["ui:width"]&&(t.width=t["ui:width"],delete t["ui:width"]),t["ui:labelWidth"]&&(t.labelWidth=t["ui:labelWidth"],delete t["ui:labelWidth"]),t.rules&&t.rules.length===0&&delete t.rules,t}catch(o){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",o),e}},zt=(e,t)=>{var s=parseRootValue(e),o=replaceParseValue(s)},Yt=e=>{if(typeof e!="string")return!1;var t=/^{{(function.+)}}$/,s=/^{{(.+=>.+)}}$/;return e.match(t)?e.match(t)[1]:e.match(s)?e.match(s)[1]:!1},un=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return E(t)?(t.theme&&s[t.theme]&&(o=Object(D.a)(Object(D.a)({},t),s[t.theme])),Object.keys(t).forEach(l=>{o[l]=e(t[l],s)})):o=t,o},En=n("zmYW"),bt=n("DtFj"),rn=n.n(bt),Sn=n("dc+4"),hn=n("Btem"),Mt=n.n(hn),cn=n("lfLe"),mn=n("Cp9S"),be=n.n(mn),Le=n("MaXC"),nt=n("4IMT"),at=n.n(nt),Ct=Object(z.createContext)(()=>{}),sn=Object(z.createContext)({}),on=()=>Object(z.useContext)(Ct),Nt=()=>Object(z.useContext)(sn),Vt=e=>Object(z.useReducer)((t,s)=>Object(D.a)(Object(D.a)({},t),s),e);function Wt(e,t,s){var o=Object(z.useRef)();Object(z.useEffect)(()=>{o.current=e},[e]);var l=Object(z.useRef)();return Object(z.useEffect)(()=>{if(!s)return;function m(){o&&o.current&&o.current()}if(m(),t!==null)return l.current=setInterval(m,t),()=>clearInterval(l.current)},[t,s]),()=>clearInterval(l.current)}function Kt(e){var t=Object(z.useRef)();return Object(z.useEffect)(()=>{t.current=e},[e]),t.current}var jt=e=>{var t=Object(z.useState)(!1),s=Object(We.default)(t,2),o=s[0],l=s[1],m;try{m=localStorage.getItem(e)}catch(f){}return m||(l(!0),localStorage.setItem(e,JSON.stringify(!0))),o},wn=()=>{var e=Object(z.useState)(!1),t=Object(We.default)(e,2),s=t[0],o=t[1],l=()=>o(!s);return[s,l]},Pn=e=>{var t=Object(z.useState)(e),s=Object(We.default)(t,2),o=s[0],l=s[1];return[o,l]},Ga=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var j=localStorage.getItem(s);if(j)try{return JSON.parse(j)}catch(S){return t}return t},l=Object(z.useState)(o()),m=Object(We.default)(l,2),f=m[0],b=m[1],g=j=>{b(j),localStorage.setItem(s,JSON.stringify(j))};return[f,g]};function Bn(e){var t=e.height,s=e.width,o=e.onClick;return x.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||t||256,height:t||s||256,onClick:o},x.a.createElement("path",{d:"M755.2 375.637333a42.666667 42.666667 0 0 0 0.554667-60.330666l-213.333334-217.173334a42.666667 42.666667 0 0 0-60.842666 0l-213.333334 217.173334a42.666667 42.666667 0 1 0 60.842667 59.818666L469.333333 232.32V896a42.666667 42.666667 0 1 0 85.333334 0V232.32l140.245333 142.805333a42.666667 42.666667 0 0 0 60.330667 0.512z",fill:"#1890ff"}))}function $n(e){var t=e.height,s=e.width,o=e.onClick;return x.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||t||256,height:t||s||256,onClick:o},x.a.createElement("path",{d:"M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z",fill:"#1890ff"}))}var Ln=n("Oxum"),A=e=>{var t=e.message,s=e.schema,o=e.hideValidation,l="";return typeof t=="string"&&(l=t),Array.isArray(t)&&(l=t[0]||""),l=dn(l,s),!l&&o?null:x.a.createElement("div",{className:"error-message"},l)},W=A,ne=n("wlus"),ve=120,je=e=>{var t=e.parentId,s=e.dataIndex,o=s===void 0?[]:s,l=e.children,m=l===void 0?[]:l,f=e.errorFields,b=Nt(),g=b.formData,j=b.flatten,S=b.onItemChange,I=b.removeErrorField,w="list";try{w=j[t].schema.widget}catch(q){}var L=ft(t,o),$;typeof L=="string"&&($=Object(U.get)(g,L));var M=Array.isArray($)?$:[],K=()=>{var q=[...M,void 0],le=q.length-1;return S(L,q),le},ce=q=>{var le=M.filter((de,B)=>B!==q);S(L,le),I("".concat(L,"[").concat(q,"]"))},oe=q=>{if(q!==0){var le=M[q],de=M[q-1],B=M;B[q]=de,B[q-1]=le,S(L,B)}},se=q=>{if(!(q>=M.length-1)){var le=M[q],de=M[q+1],B=M;B[q]=de,B[q+1]=le,S(L,B)}},ie={displayList:M,dataPath:L,dataIndex:o,children:m,deleteItem:ce,addItem:K,moveItemDown:se,moveItemUp:oe,listData:$,flatten:j,errorFields:f};switch(w){case"list1":return x.a.createElement(Te,ie);case"list2":return x.a.createElement(Ke,ie);case"list3":return x.a.createElement(Pe,ie);default:return x.a.createElement(Pe,ie)}},Ce=je,Te=e=>{var t=e.displayList,s=t===void 0?[]:t,o=e.dataIndex,l=e.children,m=e.deleteItem,f=e.addItem,b={schema:{type:"object",properties:{}},rules:[],children:l};return x.a.createElement("div",null,s.map((g,j)=>x.a.createElement("div",{key:j,style:{display:"flex",alignItems:"center"}},x.a.createElement(On,{displayType:"inline",_item:b,dataIndex:[...o,j]}),x.a.createElement(ne.a,{style:{fontSize:16,marginLeft:8,marginBottom:12},onClick:()=>m(j)}))),x.a.createElement(at.a,{style:{marginTop:s.length>0?0:8},type:"dashed",onClick:f},"\u65B0\u589E\u4E00\u6761"))},Pe=e=>{var t=e.displayList,s=t===void 0?[]:t,o=e.dataPath,l=e.dataIndex,m=e.children,f=e.deleteItem,b=e.addItem,g=e.moveItemDown,j=e.moveItemUp,S=e.flatten,I=e.errorFields,w=Vt({showDrawer:!1,currentIndex:-1}),L=Object(We.default)(w,2),$=L[0],M=L[1],K={schema:{type:"object",properties:{}},rules:[],children:m},ce=$.showDrawer,oe=$.currentIndex,se=s.map((B,_)=>Object(D.a)(Object(D.a)({},B),{},{$idx:_})),ie=m.map(B=>{var _=S[B],ee=_&&_.schema||{},fe=Et(B);return{dataIndex:fe,title:ee.title,width:ve,render:(Fe,He)=>{var Oe=ft(B,[He.$idx]),tt=I.find(Ee=>Ee.name==Oe)||{};return x.a.createElement("div",null,x.a.createElement("div",null,nn(Fe,ee)),tt.error&&x.a.createElement(W,{message:tt.error,schema:ee}))}}});ie.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(B,_,ee)=>{var fe=B&&B.$idx||0;return x.a.createElement(be.a,null,x.a.createElement("a",{onClick:()=>q(fe)},"\u7F16\u8F91"),x.a.createElement("a",{onClick:()=>f(fe)},"\u5220\u9664"))}});var q=B=>{M({showDrawer:!0,currentIndex:B})},le=()=>{M({showDrawer:!1,currentIndex:-1})},de=()=>{var B=b();q(B)};return x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"w-100 mb2 tr"},x.a.createElement(at.a,{type:"primary",size:"small",onClick:de},"\u65B0\u589E")),x.a.createElement(Mt.a,{width:"500",title:"\u7F16\u8F91",placement:"right",onClose:le,visible:ce},x.a.createElement("div",{className:"fr-container"},x.a.createElement(On,{_item:K,dataIndex:[...l,oe]}))),x.a.createElement(rn.a,{scroll:{x:"max-content"},columns:ie,dataSource:se,rowClassName:(B,_)=>{var ee=B&&B.$idx,fe=I.find(Fe=>Fe.name.indexOf("".concat(o,"[").concat(ee,"]"))>-1);return fe?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Ke=e=>{var t=e.displayList,s=t===void 0?[]:t,o=e.dataIndex,l=e.children,m=e.deleteItem,f=e.addItem,b=e.flatten,g=s.map((S,I)=>({index:I})),j=l.map(S=>{var I=b[S],w=I&&I.schema||{};return{dataIndex:S,title:w.title,width:ve,render:(L,$,M)=>{var K=[...o,$.index];return x.a.createElement(On,{hideTitle:!0,displayType:"inline",key:M.toString(),id:S,dataIndex:K})}}});return j.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(S,I,w)=>x.a.createElement("a",{onClick:()=>m(w)},"\u5220\u9664")}),x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"w-100 mb2 tr"},x.a.createElement(at.a,{type:"primary",size:"small",onClick:f},"\u65B0\u589E")),x.a.createElement(rn.a,{scroll:{x:"max-content"},columns:j,dataSource:g,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Xe=e=>{var t=e.children,s=t===void 0?[]:t,o=e.dataIndex,l=o===void 0?[]:o,m=e.displayType;return x.a.createElement(x.a.Fragment,null,s.map((f,b)=>{var g={displayType:m,id:f,dataIndex:l};return x.a.createElement(On,Object(H.default)({key:b.toString()},g))}))},xt=Xe;function Ze(e,t,s){var o=this,l=Object(z.useRef)(null),m=Object(z.useRef)(0),f=Object(z.useRef)(null),b=Object(z.useRef)([]),g=Object(z.useRef)(),j=Object(z.useRef)(),S=Object(z.useRef)(e),I=Object(z.useRef)(!0);S.current=e;var w=!t&&t!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,s=s||{};var L=!!s.leading,$="trailing"in s?!!s.trailing:!0,M="maxWait"in s,K=M?Math.max(+s.maxWait||0,t):null;Object(z.useEffect)(()=>(I.current=!0,()=>{I.current=!1}),[]);var ce=Object(z.useMemo)(()=>{var oe=B=>{var _=b.current,ee=g.current;return b.current=g.current=null,m.current=B,j.current=S.current.apply(ee,_)},se=(B,_)=>{w&&cancelAnimationFrame(f.current),f.current=w?requestAnimationFrame(B):setTimeout(B,_)},ie=B=>{if(!I.current)return!1;var _=B-l.current,ee=B-m.current;return!l.current||_>=t||_<0||M&&ee>=K},q=B=>(f.current=null,$&&b.current?oe(B):(b.current=g.current=null,j.current)),le=()=>{var B=Date.now();if(ie(B))return q(B);if(!!I.current){var _=B-l.current,ee=B-m.current,fe=t-_,Fe=M?Math.min(fe,K-ee):fe;se(le,Fe)}},de=function(){for(var _=Date.now(),ee=ie(_),fe=arguments.length,Fe=new Array(fe),He=0;He<fe;He++)Fe[He]=arguments[He];if(b.current=Fe,g.current=o,l.current=_,ee){if(!f.current&&I.current)return m.current=l.current,se(le,t),L?oe(l.current):j.current;if(M)return se(le,t),oe(l.current)}return f.current||se(le,t),j.current};return de.cancel=()=>{f.current&&(w?cancelAnimationFrame(f.current):clearTimeout(f.current)),m.current=0,b.current=l.current=g.current=f.current=null},de.isPending=()=>!!f.current,de.flush=()=>f.current?q(Date.now()):j.current,de},[L,M,t,K,$,w]);return ce}var Xt=Ze,It=e=>{var t=e.labelClass,s=e.labelStyle,o=e.schema,l=e.displayType,m=Nt(),f=m.displayType,b=m.readOnly,g=o.title,j=o.description,S=o.required,I=o.type,w=I==="object",L=o.displayType||l||f||"column";return x.a.createElement("div",{className:t,style:s},x.a.createElement("label",{className:"fr-label-title ".concat(yt(o,b)||L==="column"?"no-colon":""),title:g},S===!0&&x.a.createElement("span",{className:"fr-label-required"}," *"),x.a.createElement("span",{className:"".concat(w?"b":""," ").concat(L==="column"?"flex-none":"")},g),j&&(L==="row"?x.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":j},x.a.createElement("i",{className:"fr-tooltip-icon"}),x.a.createElement("div",{className:"fr-tooltip-container"},x.a.createElement("i",{className:"fr-tooltip-triangle"}),j)):L==="inline"?null:x.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",j,"\xA0)"))))},Zt=It,Tt={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:date":"date","string:url":"url","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"dateRange","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tt,s=e.type,o=e.format,l=e.enum,m=e.readOnly,f=[];m&&(f.push("".concat(s,"?readOnly")),f.push("*?readOnly")),l&&(Array.isArray(l)&&l.length>3?(f.push("".concat(s,"?enum_long")),f.push("*?enum_long")):(f.push("".concat(s,"?enum")),f.push("*?enum"))),o&&f.push("".concat(s,":").concat(o)),f.push(s);var b="";return f.some(g=>(b=t[g],!!b)),b}var qt={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},ze=n("6UYH"),pt=n("fTA7"),rt=n.n(pt),Je=n("pJsf"),ke=n("g4D/"),it=n.n(ke),ln=n("bd+v"),Dt=n("LB4q"),Jt=n.n(Dt),Ge=n("Hjg5"),qe=n("rmht"),Ae=n.n(qe),et=n("LGkk"),gn=n("rVaU"),vn=n.n(gn),_t=n("b+Mx"),yn=n("5Dct"),fn=n.n(yn),bn=n("cUip"),jn=n("iJl9"),pn=n.n(jn),Gt=(e,t)=>s=>o=>{var l=o.schema,m=Object(C.a)(o,["schema"]),f=Object(D.a)(Object(D.a)({},l),t),b=typeof e=="function"?e(Object(D.a)({schema:f},m)):{},g=Object(D.a)(Object(D.a)({schema:f},m),b),j=zn(g);return x.a.createElement(s,j)},zn=e=>{var t=e.onChange,s=e.value,o=e.defaultValue,l=e.schema,m=Object(C.a)(e,["onChange","value","defaultValue","schema"]),f=Object(D.a)({},l),b=f||{},g=b.trigger,j=b.valuePropName,S={},I="value",w=s===void 0?o:s;j&&typeof j=="string"?(I=j,S[j]=w):S.value=w;var L=function(){for(var ce=arguments.length,oe=new Array(ce),se=0;se<ce;se++)oe[se]=arguments[se];var ie=ot(I,...oe);t(ie)};g&&typeof g=="string"?S[g]=L:S.onChange=L;var $={disabled:f.disabled||f["ui:disabled"],readOnly:f.readOnly||f["ui:readonly"],hidden:f.hidden||f["ui:hidden"]},M=Object(D.a)(Object(D.a)(Object(D.a)({},S),{},{schema:f},$),m);return M},ea=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=t||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,I=typeof S=="string"&&S[0]==="<";return I&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",marginTop:5},s)}},Mn=Gt(ea)(it.a.Group),xn=Mn,ta=n("ypy7"),Vn=n.n(ta),Ha=n("rNQX");function na(e){var t=e.schema.format,s=l=>{e.disabled||e.readonly||e.onChange(l.color)},o=l=>{e.onChange(l.target.value)};return x.a.createElement("div",{className:"fr-color-picker"},x.a.createElement(Vn.a,{type:t,animation:"slide-up",color:e.value||"#ffffff",onChange:s}),e.readonly?x.a.createElement("span",null,e.value||"#ffffff"):x.a.createElement(pn.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var Ua=n("GBD3"),Qa=n("wXtC"),Wn=n.n(Qa),aa=n("mxgt"),ra=n("4ZwL"),Kn=n.n(ra),Ya=n("wd/R"),Cn=n.n(Ya),Dn=e=>{var t=e.schema.format,s=t===void 0?"dateTime":t;e.options&&e.options.format&&(s=e.options.format);var o=s==="time"?Kn.a:Wn.a,l=P(s),m=e.value||"";typeof m=="string"&&(s==="week"&&(m=m.substring(0,m.length-1)),s==="quarter"&&(m=m.replace("Q",""))),m&&(m=Cn()(m,l));var f=e.description?{placeholder:e.description}:{},b=(j,S)=>e.onChange(S),g=Object(D.a)(Object(D.a)(Object(D.a)({},f),e.options),{},{value:m,style:{width:"100%"},disabled:e.disabled||e.readOnly,onChange:b});return s==="dateTime"&&(g.showTime=!0),["week","month","quarter","year"].indexOf(s)>-1&&(g.picker=s),x.a.createElement(o,g)},sa=Wn.a.RangePicker,ia=Kn.a.RangePicker;function Xa(e){var t=e&&e.schema,s=t.format,o=s===void 0?"dateTime":s,l=(b,g)=>e.onChange(g),m=o==="time"?ia:sa,f=Object(D.a)(Object(D.a)({},e),{},{onChange:l,RangeComponent:m});return x.a.createElement(oa,f)}var oa=e=>{var t=e.onChange,s=e.RangeComponent,o=e.value,l=e.schema,m=l===void 0?{}:l,f=e.options,b=e.disabled,g=e.readOnly,j=m.format,S=j===void 0?"dateTime":j;f&&f.format&&(S=f.format);var I=P(S),w=Array.isArray(o)?o:[],L=Object(We.default)(w,2),$=L[0],M=L[1];typeof $=="string"&&typeof M=="string"&&(S==="week"&&($=$.substring(0,$.length-1),M=M.substring(0,M.length-1)),S==="quarter"&&($=$.replace("Q",""),M=M.replace("Q","")));var K=$&&M?[Cn()($,I),Cn()(M,I)]:[],ce=Object(D.a)(Object(D.a)({},f),{},{value:K,style:{width:"100%"},showTime:S==="dateTime",disabled:b||g,onChange:t});return["week","month","quarter","year"].indexOf(S)>-1&&(ce.picker=S),x.a.createElement(s,ce)};function la(e){var t=e.children;return x.a.createElement("div",{className:"w-100"},t)}var Za=n("7LYo"),da=n("5GXF"),Jn=n.n(da),ua=Jn.a.Panel;function ka(e){var t=e.children,s=e.title,o=Object(C.a)(e,["children","title"]),l=Nt(),m=l.theme,f=l.displayType;return s?m=="1"?x.a.createElement("div",{className:"w-100"},x.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},s),x.a.createElement("div",{style:{marginLeft:f=="row"?0:12}},t)):x.a.createElement("div",{className:"w-100"},x.a.createElement(Jn.a,{defaultActiveKey:["1"]},x.a.createElement(ua,{header:x.a.createElement("div",{style:{fontSize:16,fontWeight:500}},s),key:"1",className:"fr-collapse-object"},t))):x.a.createElement("div",{className:"w-100"},t)}var qa=n("ek7I"),Gn=n("FAat"),Hn=n.n(Gn),ca=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=t||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,I=typeof S=="string"&&S[0]==="<";return I&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%"},s)}},_a=Gt(ca)(Hn.a),ma=_a,er=n("7kJ1"),va=n("qPIi"),fa=n.n(va),pa=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=t||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,I=typeof S=="string"&&S[0]==="<";return I&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",minWidth:120,marginTop:5},s)}},tr=Gt(pa)(fa.a.Group),ha=tr,ga=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var m=t||{},f=m.enum,b=m.enumNames;l=st(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,I=typeof S=="string"&&S[0]==="<";return I&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,style:Object(D.a)({width:"100%",minWidth:120},s)}},ya=Gt(ga)(Hn.a),ba=ya,ur=n("tCGa"),ja=n("DH6M"),xa=n.n(ja),Oa=e=>{var t=e.schema,s=t.max,o=t.min,l=t.step,m={};(s||s===0)&&(m={max:s}),(o||o===0)&&(m=Object(D.a)(Object(D.a)({},m),{},{min:o})),l&&(m=Object(D.a)(Object(D.a)({},m),{},{step:l}));var f=!1;e.options&&e.options.hideNumber&&(f=!0);var b=e.readonly?x.a.createElement("span",{style:{width:"90px"}},e.value===""?"-":e.value):x.a.createElement(fn.a,Object(H.default)({},e.options,m,{style:{width:"90px"},value:e.value,disabled:e.disabled,onChange:e.onChange}));return x.a.createElement("div",{className:"fr-slider"},x.a.createElement(xa.a,Object(H.default)({style:{flexGrow:1,marginRight:f?0:12}},m,{onChange:e.onChange,value:typeof e.value=="number"?e.value:o||0,disabled:e.disabled||e.readonly})),f?null:b)},Ea=Oa,nr=n("VDQ/"),Sa=n("B8+X"),Ca=n.n(Sa),Da=n("tL+A"),Ra=n("QpBz"),Un=n.n(Ra),Aa=n("z7Xi");function Qn(e){var t=e.action,s=e.value,o=e.onChange,l=e.uploadProps,m=e.buttonProps,f=Object(D.a)({name:"file",type:"file",action:t,onChange(j){j.file.status==="done"?(Un.a.success("".concat(j.file.name," \u4E0A\u4F20\u6210\u529F")),o(j.file.response.url)):j.file.status==="error"&&Un.a.error("".concat(j.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},l),b={icon:x.a.createElement(Aa.a,null),children:"\u4E0A\u4F20"},g=Object(D.a)(Object(D.a)({},b),m);return x.a.createElement("div",{className:"fr-upload-mod"},x.a.createElement(Ca.a,Object(H.default)({},f,{className:"fr-upload-file"}),x.a.createElement(at.a,g)),s&&x.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var Yn=n("/xgg"),Fa=n("aOJk"),Na=n.n(Fa),Xn=n("mpQp"),Ia="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",Ta=e=>{var t=e.value;return x.a.createElement(Na.a,{content:x.a.createElement("img",{src:t||Ia,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},x.a.createElement(Xn.a,null))};function wa(e){var t=e.value,s=Object(C.a)(e,["value"]);return x.a.createElement(pn.a,Object(H.default)({addonAfter:x.a.createElement(Ta,{value:t})},s))}var Pa=e=>{var t=e.value,s=V(t);return s?x.a.createElement("a",{target:"_blank",href:t},"\u6D4B\u8BD5\u94FE\u63A5"):x.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function Zn(e){var t=e.value,s=Object(C.a)(e,["value"]);return x.a.createElement(pn.a,Object(H.default)({addonAfter:x.a.createElement(Pa,{value:t})},s))}function ar(e){var t=e.value,s=e.schema,o="-";if(s.type==="boolean")o=t===!0?"\u2714":"\u2718";else if(Array.isArray(s.enum)&&Array.isArray(s.enumNames)){var l=s.enum.indexOf(t);o=s.enumNames[l]||"-"}else typeof t=="number"?o=String(t):typeof t=="string"&&(o=t);return x.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var Ba=pn.a.TextArea,$a=Gt(e=>{var t=e.style;return{style:Object(D.a)({width:"100%"},t)}})(fn.a),La=Gt(e=>{var t=e.style;return{style:Object(D.a)({marginTop:5},t)}})(vn.a),Rn=Gt(e=>{var t=e.autoSize;return{autoSize:t||{minRows:3}}})(Ba),za=e=>{var t=e.style,s=Object(C.a)(e,["style"]);return x.a.createElement(Ae.a,Object(H.default)({style:Object(D.a)({width:"100%"},t)},s))},An=e=>{var t=e.style,s=Object(C.a)(e,["style"]);return x.a.createElement(Jt.a,Object(H.default)({style:Object(D.a)({width:"100%"},t)},s))},Fn={input:pn.a,checkbox:it.a,checkboxes:xn,color:na,date:Dn,dateRange:Xa,imageInput:wa,url:Zn,list:la,map:ka,multiSelect:ma,number:$a,radio:ha,select:ba,slider:Ea,switch:La,textarea:Rn,upload:Qn,html:ar,rate:rt.a,treeSelect:za,cascader:An},rr=Object.keys(Fn),kn=e=>{var t=e.schema,s=e.onChange,o=e.value,l=e.children,m=e.onItemChange,f=e.readOnly,b=e.dataPath,g=e.dataIndex,j=on(),S=j.widgets,I=j.mapping,w=kt(t,I);f&&["object","array"].indexOf(t.type)===-1&&(w="html");var L=S[w],$=t.widget||t["ui:widget"];$&&S[$]&&(L=S[$],w=$);var M=qt[w],K=Object(D.a)({schema:Object(D.a)(Object(D.a)({},t),M),onChange:s,value:o,children:l},t.props);["title","placeholder","disabled"].forEach(oe=>{t[oe]&&(K[oe]=t[oe])}),t.default!==void 0&&(K.defaultValue=t.default),t.props&&(K=Object(D.a)(Object(D.a)({},K),t.props)),K.addons={onItemChange:m,dataPath:b,dataIndex:g};var ce=zn(K);return x.a.createElement(L,ce)},Nn=(e,t)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:!!(e.value===t.value&&JSON.stringify(e.schema)===JSON.stringify(t.schema)&&window.NOTHING_CHANGED_IN_WIDGETS),In=x.a.memo(kn,Nn),qn=e=>{var t=e.$id,s=e.dataIndex,o=e.item,l=e.labelClass,m=e.labelStyle,f=e.contentClass,b=e.hasChildren,g=e.children,j=e.errorFields,S=j===void 0?[]:j,I=e.hideTitle,w=e.displayType,L=o.schema,$=Nt(),M=$.onItemChange,K=$.formData,ce=$.isEditing,oe=$.setEditing,se=$.touchKey,ie=$.debounceInput,q=$.readOnly,le=Object(z.useRef)(),de=ft(t,s),B=h(L),_=[...o.rules];ce&&le.current?B=le.current:(Se(B)&&(B=Ne(B,K,de)),le.current=B,_=_.map(Y=>{var we={};return Object.keys(Y).forEach(gt=>{var Ja=me(Y[gt]);we[gt]=Ja?De(Y[gt],K,de):Y[gt]}),we}));var ee=S.find(Y=>Y.name===de),fe=ee&&ee.error,Fe=Array.isArray(fe)&&fe.length>0,He=Fe?f+" ant-form-item-has-error":f,Oe=Bt(K,de),tt={},Ee=Xt(oe,350),ge=q!==void 0?q:B.readOnly,Ue=Y=>{se(de),ie&&(oe(!0),Ee(!1)),typeof de=="string"&&M(de,Y)},ue={labelClass:l,labelStyle:m,schema:B,displayType:w},ye=w==="inline"||ge===!0,Be={message:fe,schema:B,displayType:w,hideValidation:ye},vt={className:l,style:m},wt=!I&&!!B.title,Pt={schema:B,readOnly:ge,onChange:Ue,value:Oe,onItemChange:M,dataIndex:s,dataPath:de};if(Pt.children=b?g:yt(B,ge)?B.title:null,B.hidden)return null;if(yt(B,ge))return x.a.createElement(x.a.Fragment,null,wt&&x.a.createElement("div",vt),x.a.createElement("div",{className:He,style:tt},x.a.createElement(In,Pt),x.a.createElement(W,Be)));var en=x.a.createElement(Zt,ue);return ct(B)?(en=x.a.createElement("div",{style:{display:"flex"}},en,x.a.createElement(W,Be)),x.a.createElement("div",{className:He,style:tt},x.a.createElement(In,Object(H.default)({},Pt,{message:fe,title:wt?en:void 0})))):x.a.createElement(x.a.Fragment,null,wt&&en,x.a.createElement("div",{className:He,style:tt},x.a.createElement(In,Pt),x.a.createElement(W,Be)))},Ma=qn,_n=e=>{var t=e.id,s=t===void 0?"#":t,o=e._item,l=e.dataIndex,m=l===void 0?[]:l,f=e.hideTitle,b=f===void 0?!1:f,g=e.hideValidation,j=g===void 0?!1:g,S=Object(C.a)(e,["id","_item","dataIndex","hideTitle","hideValidation"]),I=Nt(),w=I.displayType,L=I.column,$=I.flatten,M=I.errorFields,K=I.labelWidth,ce=I.readOnly,oe=o||$[s];if(!oe)return null;var se=oe.schema,ie=se.displayType||S.displayType||w||"column",q=se.type==="object",le=ut(se),de=q||le,B=yt(se,ce),_=se.width||se["ui:width"],ee="fr-field ".concat(ie==="inline"?"":"w-100"," flex"),fe="fr-label",Fe="fr-content";switch(se.type){case"object":q&&(se.title&&(fe+=" fr-label-object"),ee+=" fr-field-object");break;case"array":le&&(se.title&&(fe+=" fr-label-list"),ee+=" fr-field-column");break;case"boolean":B&&(Fe+=" fr-content-column",ee+=" flex ".concat(ie==="column"?"flex-column":""));break;default:}if(!de&&!B)if(ie==="column")switch(ee+=" flex-column",fe+=" fr-label-column",Fe+=" fr-content-column",se.type){case"object":break;case"array":se.title&&!se.enum;break;case"boolean":break;default:}else ie==="row"&&(ee+="",fe+=" fr-label-row",Fe+=" fr-content-row",!q&&!B&&(fe+=" flex-shrink-0 fr-label-row",Fe+=" flex-grow-1 relative"));var He={};q||(_?He={width:_,paddingRight:"12px"}:L>1&&(He={width:"calc(100% /".concat(L,")"),paddingRight:"12px"}));var Oe=Ve("labelWidth",s,$)||K,tt=T(Oe)?Number(Oe):p(Oe)?Oe:110,Ee={width:tt};(de||ie==="column")&&(Ee={flexGrow:1}),ie==="inline"&&(Ee={marginTop:5,paddingLeft:12},fe="",ee.indexOf("fr-field-object")===-1&&(ee+=" fr-field-inline"));var ge=oe.children&&oe.children.length>0,Ue={$id:s,dataIndex:m,item:oe,labelClass:fe,labelStyle:Ee,contentClass:Fe,errorFields:M,hasChildren:ge,displayType:ie,hideTitle:b,hideValidation:j},ue=ge?x.a.createElement("div",{className:"flex flex-wrap"},x.a.createElement(xt,{dataIndex:m,errorFields:M,displayType:ie},oe.children)):null,ye=ge?x.a.createElement(Ce,{parentId:s,dataIndex:m,errorFields:M,displayType:ie},oe.children):null;return x.a.createElement("div",{style:He,className:ee+" "},x.a.createElement(Ma,Ue,q&&ue,le&&ye))},On=_n,sr=n("SA0R"),ir=n.n(sr),or=n("OVFa"),lr=n("k/c8"),dr=n("cFvS"),ht="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",Va={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:ht,method:ht,array:ht,object:ht,number:ht,date:ht,boolean:ht,integer:ht,float:ht,regexp:ht,email:ht,url:ht,hex:ht},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},mt="${title} is not a valid ${type}",Wa={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:mt,method:mt,array:mt,object:mt,number:mt,date:mt,boolean:mt,integer:mt,float:mt,regexp:mt,email:mt,url:mt,hex:mt},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},Ka=n("KpVd"),Tn=e=>{var t=e.formData,s=e.schema,o=s===void 0?{}:s,l=e.isRequired,m=l===void 0?!0:l,f=e.touchedKeys,b=f===void 0?[]:f,g=e.locale,j=g===void 0?"cn":g;if(Object.keys(o).length===0)return Promise.resolve();var S=St({schema:o,isRequired:m}).fields,I=[];m||b.forEach(K=>{var ce=an(K,o),oe=Object(U.get)(t,K);!oe&&ce&&I.push({name:K,error:["${title}\u5FC5\u586B"]})});var w=Va,L=Wa,$;try{$=new Ka.a(S)}catch(K){return Promise.resolve([])}var M=j==="en"?L:w;return $.messages(M),$.validate(t||{}).then(K=>I.length>0?I:[]).catch(K=>{var ce=K.errors,oe=K.fields,se=st(ce).map(q=>{var le=At(q.field);return{name:le,error:[q.message]}});se=[...se,...I];var ie=[];return se.forEach(q=>{var le=ie.findIndex(de=>de.name===q.name);le===-1?ie.push(q):ie[le].error=[...ie[le].error,...q.error]}),ie})},cr={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},a={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},r=(e,t)=>{var s=i(e,t);return s=Lt(s),s},i=(e,t)=>{var s=h(e),o=[],l=[],m=[],f=g=>Array.isArray(g)&&g.every(j=>typeof j=="string");Object.keys(t).forEach(g=>{var j=t[g]&&t[g].schema&&t[g].schema.bind;j===!1?o.push(g):typeof j=="string"?l.push({key:g,bind:j}):f(j)&&m.push({key:g,bind:j})});var b=g=>{o.forEach(j=>{j.indexOf("[]")===-1&&Object(U.unset)(g,j)}),l.forEach(j=>{var S=j.key,I=j.bind;if(S.indexOf("[]")===-1){var w=Object(U.get)(g,S),L=Object(U.get)(g,I);E(L)&&(w=Object(D.a)(Object(D.a)({},L),w)),Object(U.set)(g,I,w),Object(U.unset)(g,S)}}),m.forEach(j=>{var S=j.key,I=j.bind;if(S.indexOf("[]")===-1){var w=Object(U.get)(g,S);Array.isArray(w)&&w.forEach((L,$)=>{I[$]&&Object(U.set)(g,I[$],L)}),Object(U.unset)(g,S)}})};return b(s),s},u=(e,t)=>{var s=h(e),o=[],l=[],m=b=>Array.isArray(b)&&b.every(g=>typeof g=="string");Object.keys(t).forEach(b=>{var g=t[b]&&t[b].schema&&t[b].schema.bind;typeof g=="string"?o.push({key:b,bind:g}):m(g)&&l.push({key:b,bind:g})});var f=b=>{o.forEach(g=>{var j=g.key,S=g.bind,I=Object(U.get)(b,S),w=Object(U.get)(b,j);E(w)&&(I=Object(D.a)(Object(D.a)({},w),I)),Object(U.set)(b,j,I),Object(U.unset)(b,S)}),l.forEach(g=>{var j=g.key,S=g.bind,I=[];S.forEach(w=>{I.push(Object(U.get)(b,w)),Object(U.unset)(b,w)}),Object(U.set)(b,j,I)})};return f(s),s},d=e=>{var t=e||{},s=t.formData,o=t.onChange,l=t.onValidate,m=Vt({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),f=Object(We.default)(m,2),b=f[0],g=f[1],j=Object(z.useRef)({}),S=Object(z.useRef)({}),I=Object(z.useRef)(!1),w=Object(z.useRef)(),L=Object(z.useRef)("cn"),$=b.formData,M=b.submitData,K=b.errorFields,ce=K===void 0?[]:K,oe=b.isValidating,se=b.outsideValidating,ie=b.isSubmitting,q=b.isEditing,le=b.allTouched,de=b.touchedKeys,B=e&&e.hasOwnProperty("formData"),_=B?s:$,ee=Object(U.merge)(Ht(j.current),_),fe=Y=>{typeof o=="function"?o(Y):g({formData:Y})},Fe=Y=>{if(typeof l=="function"){var we=Y.map(gt=>gt.name);l(we)}g({errorFields:Y})},He=Y=>{if(!(de.indexOf(Y)>-1)){var we=[...de,Y];g({touchedKeys:we})}};Object(z.useEffect)(()=>{B&&typeof l=="function"&&setTimeout(()=>{Tn({formData:ee,schema:j.current,isRequired:!0,touchedKeys:de,locale:L.current}).then(Y=>{var we=Y.map(gt=>gt.name);l(we)})},200)},[]),Object(z.useEffect)(()=>{if(I.current){I.current=!1;return}Tn({formData:ee,schema:j.current,isRequired:le,touchedKeys:de,locale:L.current}).then(Y=>{Fe(Y),window.NOTHING_CHANGED_IN_WIDGETS=!0,setTimeout(()=>{window.NOTHING_CHANGED_IN_WIDGETS=!1},500)})},[JSON.stringify(_),le]);var Oe=Y=>{g({isEditing:Y})},tt=(Y,we)=>{if(typeof Y=="string"){if(Y==="#"){fe(Object(D.a)({},we));return}Object(U.set)(ee,Y,we),fe(Object(D.a)({},ee))}},Ee=Y=>{var we=Y.schema,gt=Y.flatten,Ja=Y.beforeFinish,mr=Y.locale;j.current=we,S.current=gt,w.current=Ja,L.current=mr},ge=Y=>{var we=[];Array.isArray(Y)?we=[...Y,...ce]:Y&&Y.name?we=[Y,...ce]:console.log("error format is wrong"),we=Object(U.sortedUniqBy)(we,gt=>gt.name),Fe(we)},Ue=Y=>{var we=ce.map(gt=>gt.name.indexOf(Y)===-1);Fe(we)},ue=()=>i(ee,S.current),ye=Y=>{var we=u(Y,S.current);fe(we)},Be=()=>{I.current=!0,g({isValidating:!0,allTouched:!0,isSubmitting:!1}),Tn({formData:ee,schema:j.current,touchedKeys:[],isRequired:!0,locale:L.current}).then(Y=>{if(Y&&Y.length>0&&(console.log("submit:",ee,Y),g({errorFields:Y})),typeof w.current=="function"){Promise.resolve(r(ee,S.current)).then(we=>{g({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:we})});return}Promise.resolve(r(ee,S.current)).then(we=>{g({isValidating:!1,isSubmitting:!0,submitData:we})})}).catch(Y=>{console.log("submit error:",Y)})},vt=()=>{fe({})},wt=()=>g({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),Pt=()=>g({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),en={formData:ee,schema:j.current,touchedKeys:de,touchKey:He,onItemChange:tt,setValues:ye,getValues:ue,resetFields:vt,submit:Be,submitData:M,errorFields:ce,isValidating:oe,outsideValidating:se,isSubmitting:ie,endValidating:wt,endSubmitting:Pt,setErrorFields:ge,removeErrorField:Ue,isEditing:q,setEditing:Oe,syncStuff:Ee};return en},y=e=>t=>{var s=d();return x.a.createElement(e,Object(H.default)({},t,{form:s}))},v=(e,t)=>{console.log(e,t)};function O(e){var t=e.widgets,s=e.mapping,o=e.form,l=e.beforeFinish,m=l===void 0?v:l,f=e.onFinish,b=f===void 0?v:f,g=e.displayType,j=g===void 0?"column":g,S=e.schema,I=e.flatten,w=e.debug,L=e.locale,$=L===void 0?"cn":L,M=e.debounceInput,K=M===void 0?!1:M,ce=e.size,oe=e.configProvider,se=e.theme,ie=Object(C.a)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","locale","debounceInput","size","configProvider","theme"]);try{var q=o.submit}catch(Be){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var le=o.submitData,de=o.errorFields,B=o.isValidating,_=o.outsideValidating,ee=o.isSubmitting,fe=o.endValidating,Fe=o.endSubmitting,He=o.syncStuff,Oe=o.formData,tt=o.isEditing,Ee=o.setErrorFields,ge=Object(z.useMemo)(()=>I||Ot(S),[JSON.stringify(I),JSON.stringify(S)]);Object(z.useEffect)(()=>{He({schema:S,flatten:ge,beforeFinish:m,locale:$})},[JSON.stringify(I),JSON.stringify(S)]);var Ue=Object(z.useMemo)(()=>Object(D.a)(Object(D.a)({flatten:ge},o),{},{displayType:j,theme:se,debounceInput:K,debug:w,isEditing:tt},ie),[JSON.stringify(ge),JSON.stringify(Oe),JSON.stringify(de)]),ue=Object(z.useMemo)(()=>({widgets:Object(D.a)(Object(D.a)({},Fn),t),mapping:Object(D.a)(Object(D.a)({},Tt),s)}),[]);Object(z.useEffect)(()=>{if(_===!0){Promise.resolve(m(le,de)).then(Be=>{Be&&Ee(Be),fe()});return}B===!1&&ee===!0&&(Fe(),b(le,de))},[B,ee,_]);var ye="";return ce==="small"?ye="fr-form-small":ce==="large"&&(ye="fr-form-large"),x.a.createElement(c.a,Object(H.default)({locale:ir.a},oe),x.a.createElement(sn.Provider,{value:Ue},x.a.createElement(Ct.Provider,{value:ue},x.a.createElement("div",{className:"fr-container ".concat(ye)},w?x.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},x.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),x.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),x.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),x.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),x.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),x.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,x.a.createElement(On,null)))))}var R=e=>{var t=e.isOldVersion,s=t===void 0?!0:t,o=e.schema,l=Object(C.a)(e,["isOldVersion","schema"]),m=o;return s&&(m=Ut(o)),x.a.createElement(O,Object(H.default)({schema:m},l))},N=G.default=R},trko:function(Me,G,n){},"xwS/":function(Me,G,n){}}]);
