(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(Ve,U,n){"use strict";n.r(U),n.d(U,"Column",function(){return G}),n.d(U,"Line",function(){return Rt}),n.d(U,"PivotTable",function(){return k});var re=n("0Owb"),Z=n("PpiC"),m=n("q1tI"),H=n.n(m),D=n("06Lf");function C(E){var h=[],I=[];return E.forEach(p=>{p.isDim?h.push(p):I.push(p)}),{metaDim:h,metaInd:I}}function z(E){var h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(E==null?void 0:E.toPrecision(h))}var x=()=>H.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function ut(E,h){var I=C(E),p=I.metaDim,A=I.metaInd;if(A.length>=1&&p.length===0){var $="type",J="value";return{xField:$,yField:J,data:h.map(Re=>A.map(he=>{var Qe=he.id,_e=he.name;return{[$]:Qe,[J]:Re[Qe]}})).flat(),meta:{[$]:{formatter:Re=>{var he;return((he=E.find(Qe=>{var _e=Qe.id;return Re===_e}))===null||he===void 0?void 0:he.name)||Re}}},tooltip:{formatter:Re=>{var he,Qe=Re[$],_e=Re[J];return{name:(he=E.find(Be=>{var Ye=Be.id;return Qe===Ye}))===null||he===void 0?void 0:he.name,value:_e}}}}}else if(A.length===1&&p.length===1){var Q,X,ne,ie=(Q=p.shift())===null||Q===void 0?void 0:Q.id,pe=(X=A.shift())===null||X===void 0?void 0:X.id;return{data:h,xField:ie,yField:pe,meta:{[pe]:{alias:(ne=E.find(Re=>{var he=Re.id;return he===pe}))===null||ne===void 0?void 0:ne.name}}}}else if(A.length>1&&p.length===1){var xe,me=(xe=p.shift())===null||xe===void 0?void 0:xe.id,De="value",Se="type";return{data:h.map(Re=>A.map(he=>{var Qe=he.id,_e=he.name;return{[me]:Re[me],[De]:Re[Qe],[Se]:_e}})).flat(),xField:me,yField:De,seriesField:Se,isGroup:!0}}else if(A.length===1&&p.length===2){var Ne,Te,Ke;return{data:h,xField:(Ne=p.shift())===null||Ne===void 0?void 0:Ne.id,yField:(Te=A.shift())===null||Te===void 0?void 0:Te.id,seriesField:(Ke=p.shift())===null||Ke===void 0?void 0:Ke.id,isGroup:!0}}return{data:h,xField:"",yField:""}}var We=E=>{var h=E.className,I=E.style,p=E.meta,A=p===void 0?[]:p,$=E.data,J=$===void 0?[]:$,Q=E.inverted,X=Object(Z.a)(E,["className","style","meta","data","inverted"]);if(Q){var ne=ut(A,J),ie=ne.xField,pe=ne.yField,xe=Object(Z.a)(ne,["xField","yField"]);return H.a.createElement(D.b,Object(re.default)({xField:pe,yField:ie},xe,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X))}else return H.a.createElement(D.c,Object(re.default)({},ut(A,J),{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X))},G=We,M=n("k1fw"),yt=n("sGjT");function nn(E,h){var I=C(E),p=I.metaDim,A=I.metaInd;if(A.length===1&&p.length===1){var $,J,Q,X=($=p.shift())===null||$===void 0?void 0:$.id,ne=(J=A.shift())===null||J===void 0?void 0:J.id;return{data:h,xField:X,yField:ne,meta:{[ne]:{alias:(Q=E.find(Be=>{var Ye=Be.id;return Ye===ne}))===null||Q===void 0?void 0:Q.name}}}}else if(A.length===1&&p.length===2){var ie,pe,xe;return{data:h,xField:(ie=p.shift())===null||ie===void 0?void 0:ie.id,yField:(pe=A.shift())===null||pe===void 0?void 0:pe.id,seriesField:(xe=p.shift())===null||xe===void 0?void 0:xe.id}}else if(A.length===2&&p.length===2){var me,De,Se,Ne,Te=h.map(Be=>{var Ye=A[0].id,rt=p[1].id,Ft=Be[Ye],lt=Be[rt],Et=Object(Z.a)(Be,[Ye,rt].map(yt.a));return Object(M.a)({[p[1].id]:"".concat(lt,"-").concat(A[0].name)},Et)}),Ke=h.map(Be=>{var Ye=A[1].id,rt=p[1].id,Ft=Be[Ye],lt=Be[rt],Et=Object(Z.a)(Be,[Ye,rt].map(yt.a));return Object(M.a)({[p[1].id]:"".concat(lt,"-").concat(A[1].name)},Et)});return{data:[Ke,Te],geometryOptions:[{geometry:"line",seriesField:p[1].id},{geometry:"line",seriesField:p[1].id,lineStyle:{lineDash:[5,5]}}],xField:(me=p.shift())===null||me===void 0?void 0:me.id,yField:[(De=A.shift())===null||De===void 0?void 0:De.id,(Se=A.shift())===null||Se===void 0?void 0:Se.id],seriesField:(Ne=p.shift())===null||Ne===void 0?void 0:Ne.id}}else if(A.length>1&&p.length===1){var Re,he=(Re=p.shift())===null||Re===void 0?void 0:Re.id,Qe="value",_e="type";return{data:h.map(Be=>A.map(Ye=>{var rt=Ye.id,Ft=Ye.name;return{[he]:Be[he],[Qe]:Be[rt],[_e]:Ft}})).flat(),xField:he,yField:Qe,seriesField:_e}}return{data:h}}var dt=E=>{var h=E.className,I=E.style,p=E.meta,A=p===void 0?[]:p,$=E.data,J=$===void 0?[]:$,Q=E.withArea,X=Object(Z.a)(E,["className","style","meta","data","withArea"]),ne=nn(A,J);return Q?H.a.createElement(D.a,Object(re.default)({},ne,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X)):Array.isArray(ne.yField)?H.a.createElement(D.d,Object(re.default)({},ne,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X)):H.a.createElement(D.e,Object(re.default)({},ne,{renderer:"svg",errorTemplate:()=>H.a.createElement(x,null)},X))},Rt=dt,Bt=n("tJVT"),ft=n("mA+x"),ct=n("aMEK"),mt=n("ARb9"),Ot=E=>{var h=E.className,I=E.style,p=E.showSubtotal,A=p===void 0?!0:p,$=E.subtotalText,J=$===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:$,Q=E.meta,X=Q===void 0?[]:Q,ne=E.data,ie=ne===void 0?[]:ne,pe=E.size,xe=pe===void 0?"middle":pe,me=E.indicatorSide,De=me===void 0?"top":me,Se=E.leftDimensionLength,Ne=Se===void 0?X.length:Se,Te=E.leftExpandable,Ke=Te===void 0?!1:Te,Re=E.topExpandable,he=Re===void 0?!1:Re,Qe=E.defaultExpandAll,_e=Qe===void 0?!0:Qe,Be=E.cellRender,Ye=Object(Z.a)(E,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),rt=Object(m.useState)([]),Ft=Object(Bt.default)(rt,2),lt=Ft[0],Et=Ft[1],an=Object(m.useState)([]),$t=Object(Bt.default)(an,2),St=$t[0],At=$t[1],rn=C(X),Ht=rn.metaDim,dn=rn.metaInd,Nt=dn.map(be=>{var $e=be.id,tt=be.name,nt=be.isRate;return{name:tt,code:$e,align:"right",expression:nt?"AVG(".concat($e,")"):"SUM(".concat($e,")")}}),Gt=Ht.filter((be,$e)=>$e<Ne),Qt=Gt.map(be=>{var $e=be.id;return $e}),Lt=Object(ft.b)(ie,Qt,{includeTopWrapper:!0,isExpand:Ke?be=>St.includes(be):void 0}),Yt=Object(ft.d)(Lt,{indicators:De==="left"?Nt:void 0,supportsExpand:Ke,expandKeys:St,onChangeExpandKeys:At,generateSubtotalNode:A?be=>({position:"start",value:be.path.length===0?J[0]||"\u603B\u8BA1":J[1]||"\u5C0F\u8BA1"}):void 0}),cn=Object(Bt.default)(Yt,1),Sn=cn[0],bt=Ht.filter((be,$e)=>$e>=Ne),sn=bt.map(be=>{var $e=be.id;return $e}),Cn=Object(ft.b)(ie,sn,{includeTopWrapper:!0,isExpand:he?be=>lt.includes(be):void 0}),gn=Object(ft.d)(Cn,{indicators:De==="top"?Nt:void 0,supportsExpand:he,expandKeys:lt,onChangeExpandKeys:Et,generateSubtotalNode:A?be=>({position:"start",value:be.path.length===0?J[0]||"\u603B\u8BA1":J[1]||"\u5C0F\u8BA1"}):void 0}),zt=Object(Bt.default)(gn,1),mn=zt[0],vn=Object(ft.c)({data:ie,leftCodes:Qt,topCodes:sn,aggregate:Object(ct.a)(Nt)});return H.a.createElement("div",{style:I,className:"CR-PivotTable CR-PivotTable-".concat(xe," ").concat(h||"")},H.a.createElement(ft.a,Object(re.default)({defaultColumnWidth:100,leftMetaColumns:Ht.filter(be=>{var $e=be.id;return Qt.includes($e)}).map(be=>{var $e=be.id,tt=be.name;return{code:$e,name:tt}}),leftTree:Sn.children,leftTotalNode:Sn,topTree:mn.children,topTotalNode:mn,getValue:(be,$e)=>{var tt,nt=(tt=vn.get(be.data.dataKey))===null||tt===void 0?void 0:tt.get($e.data.dataKey);return nt==null?void 0:nt[$e.code]},render:(be,$e,tt)=>{var nt;if(Be){var Ct=$e.data.dataPath,on=Ct===void 0?[]:Ct,ln=tt.data.dataPath,Tt=ln===void 0?[]:ln,Vt={};return on.forEach((Mt,Kt)=>{var jt;Vt[(jt=Gt[Kt])===null||jt===void 0?void 0:jt.id]=Mt}),Tt.forEach((Mt,Kt)=>{var jt;Vt[(jt=bt[Kt])===null||jt===void 0?void 0:jt.id]=Mt}),Be(be,Vt,tt.code)}return(nt=dn.find(Mt=>{var Kt=Mt.id;return Kt===tt.code}))!==null&&nt!==void 0&&nt.isRate?"".concat(z(be*100).toFixed(2),"%"):be}},Ye)))},k=Ot},"4l2o":function(Ve,U,n){},"8iYR":function(Ve,U,n){"use strict";n.r(U),n.d(U,"basic",function(){return re}),n.d(U,"expression",function(){return Z});var re={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},Z={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},"97ez":function(Ve,U,n){},ARb9:function(Ve,U,n){},GYr9:function(Ve,U,n){},JjdP:function(Ve,U,n){"use strict";n.r(U);var re=n("9og8"),Z=n("WmNS"),m=n.n(Z),H=n("LtsZ"),D=`import React, { useRef } from 'react';
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

export default Demo;`,ut=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Root;`,G=`import React, { useState, useEffect } from 'react';
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
}`,Rt=`.markdown p {
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
}`,Bt=`import React from 'react';
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

export default Demo;`,ct=`import React, { useState, useRef } from 'react';
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

export default Demo;`,mt=`import React from 'react';
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

export default Demo;`,Ot=U.default={"guide-card":{component:Object(H.dynamic)({loader:function(){var k=Object(re.a)(m.a.mark(function h(){return m.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"oLxE"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:D}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var E=n("3PQu"),h=n("K+nK"),I=h(n("tJVT")),p=E(n("q1tI")),A=n("36SN"),$=function(){var Q=(0,p.useState)("Line"),X=(0,I.default)(Q,2),ne=X[0],ie=X[1],pe={Line:A.Line,Column:A.Column,PivotTable:A.PivotTable}[ne];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return ie("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return ie("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return ie("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(pe,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return p.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=n("36SN"),p=function(){return h.default.createElement(I.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(J,Q,X){return h.default.createElement("div",null,h.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),h.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(Q).length]}},J),h.default.createElement("p",null,JSON.stringify(Q)),h.default.createElement("p",null,JSON.stringify(X)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return h.default.createElement(p)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var E=n("3PQu"),h=n("K+nK"),I=h(n("tJVT")),p=E(n("q1tI")),A=n("36SN"),$=function(){var Q=(0,p.useState)(!1),X=(0,I.default)(Q,2),ne=X[0],ie=X[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:ne,onChange:function(){return ie(!ne)}})),p.default.createElement(A.PivotTable,{leftExpandable:ne,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return p.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.5"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var I=h(n("4IMT")),p=h(n("fWQN")),A=h(n("mtLc")),$=h(n("yKVA")),J=h(n("879j")),Q=h(n("q1tI")),X=n("gdfu"),ne=E(n("refC")),ie={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},pe=function(me){(0,$.default)(Se,me);var De=(0,J.default)(Se);function Se(){return(0,p.default)(this,Se),De.apply(this,arguments)}return(0,A.default)(Se,[{key:"render",value:function(){var Te=this.props.form;return Q.default.createElement("div",null,Q.default.createElement(ne.default,{form:Te,schema:ie}),Q.default.createElement(I.default,{type:"primary",onClick:Te.submit},"\u63D0\u4EA4"))}}]),Se}(Q.default.Component),xe=(0,ne.connectForm)(pe);return Q.default.createElement(xe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var I=h(n("4IMT")),p=h(n("q1tI")),A=n("gdfu"),$=E(n("refC")),J={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},Q=function(){var ie=(0,$.useForm)();return p.default.createElement("div",null,p.default.createElement($.default,{form:ie,schema:J}),p.default.createElement(I.default,{type:"primary",onClick:ie.submit},"\u63D0\u4EA4"))},X=Q;return p.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var I=h(n("4IMT")),p=h(n("q1tI")),A=n("gdfu"),$=E(n("refC")),J={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},Q=function(){var ie=(0,$.useForm)(),pe=function(me,De){De.length>0?alert("errors:"+JSON.stringify(De)):alert("formData:"+JSON.stringify(me,null,2))};return p.default.createElement("div",null,p.default.createElement($.default,{form:ie,schema:J,onFinish:pe}),p.default.createElement(I.default,{type:"primary",onClick:ie.submit},"\u63D0\u4EA4"))},X=Q;return p.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var E=n("3PQu"),h=n("K+nK"),I=h(n("q1tI")),p=E(n("refC")),A={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function $(){var Q=(0,p.useForm)(),X=function(ie,pe){pe.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(pe))):alert(JSON.stringify(ie))};return I.default.createElement("div",null,I.default.createElement(p.default,{form:Q,schema:A,onFinish:X}),I.default.createElement("button",{onClick:Q.submit},"\u63D0\u4EA4"))}var J=$;return I.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"schema-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("c2mQ")),p=n("8iYR"),A=function(){return h.default.createElement(I.default,{schema:p.basic})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from './demo/FR';
import { basic } from './json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"./demo/FR",content:C},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"display-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("bQjt")),p=function(J){return{type:"object",displayType:J,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},A=function(){return h.default.createElement("div",null,h.default.createElement("h2",null,"display: row"),h.default.createElement(I.default,{schema:p("row")}),h.default.createElement("h2",null,"display: column"),h.default.createElement(I.default,{schema:p("column")}))};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("bQjt")),p={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){return h.default.createElement(I.default,{schema:p})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("bQjt")),p={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},A=function(){return h.default.createElement(I.default,{readOnly:!0,schema:p})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("bQjt")),p={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},A=function(){return h.default.createElement(I.default,{labelWidth:"200",schema:p})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},A=function(){return h.default.createElement(I.default,{schema:p})},$=A;return h.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},A=function(){return h.default.createElement(I.default,{schema:p})},$=A;return h.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("bQjt")),p={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},selet1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},A=function(){return h.default.createElement(I.default,{schema:p})},$=A;return h.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:x}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:function(){var E=n("3PQu"),h=n("K+nK");n("lfLe");var I=h(n("Cp9S"));n("MaXC");var p=h(n("4IMT"));n("tL+A");var A=h(n("QpBz")),$=h(n("tJVT")),J=E(n("q1tI")),Q=n("gdfu"),X=E(n("refC")),ne=n("OH0R"),ie=function(){var me=(0,X.useForm)(),De=(0,J.useState)({}),Se=(0,$.default)(De,2),Ne=Se[0],Te=Se[1],Ke=function(){(0,ne.fakeApi)("xxx/getForm").then(function(Qe){me.setValues({input1:"hello world",select1:"c"})})};(0,J.useEffect)(function(){(0,ne.delay)(1e3).then(function(he){Te({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Re=function(Qe,_e){_e.length>0?A.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_e.map(function(Be){return Be.name}))):(0,ne.fakeApi)("xxx/submit",Qe).then(function(Be){return A.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return J.default.createElement("div",{style:{width:"400px"}},J.default.createElement(X.default,{form:me,schema:Ne,onFinish:Re}),J.default.createElement(I.default,null,J.default.createElement(p.default,{onClick:Ke},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),J.default.createElement(p.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},pe=ie;return J.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ut}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var I=h(n("4IMT"));n("tL+A");var p=h(n("QpBz")),A=h(n("q1tI")),$=n("gdfu"),J=E(n("refC")),Q=n("OH0R"),X={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},ne=function(){var xe=(0,J.useForm)(),me=function(Ne,Te){Te.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Te.map(function(Ke){return Ke.name}))):(0,Q.fakeApi)("xxx/submit",Ne).then(function(Ke){return p.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},De=function(Ne,Te){return(0,Q.fakeApi)("xxx/validation").then(function(Ke){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return A.default.createElement("div",{style:{width:"400px"}},A.default.createElement(J.default,{form:xe,schema:X,beforeFinish:De,onFinish:me}),A.default.createElement(I.default,{type:"primary",onClick:xe.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},ie=ne;return A.default.createElement(ie)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ut}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var E=n("3PQu"),h=n("K+nK");n("lfLe");var I=h(n("Cp9S"));n("MaXC");var p=h(n("4IMT"));n("tL+A");var A=h(n("QpBz")),$=h(n("q1tI")),J=n("gdfu"),Q=E(n("refC")),X=n("OH0R"),ne={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},ie=function(){var me=(0,Q.useForm)(),De=function(Te,Ke){Ke.length>0?A.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ke.map(function(Re){return Re.name}))):(0,X.fakeApi)("xxx/submit",Te).then(function(Re){return A.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},Se=function(){(0,X.fakeApi)("xxx/getForm").then(function(Te){me.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return $.default.createElement("div",{style:{width:"400px"}},$.default.createElement(Q.default,{form:me,schema:ne,onFinish:De}),$.default.createElement(I.default,null,$.default.createElement(p.default,{onClick:Se},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),$.default.createElement(p.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},pe=ie;return $.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ut}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"function-demo":{component:function(){var E=n("3PQu"),h=n("K+nK"),I=h(n("q1tI")),p=E(n("refC")),A={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},$=function(){var X=(0,p.useForm)();return I.default.createElement(p.default,{form:X,schema:A})},J=$;return I.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("c2mQ")),p=n("8iYR"),A=function(){return h.default.createElement(I.default,{schema:p.expression})};return h.default.createElement(A)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"./demo/FR",content:C},"json/schema.js":{import:"./json/schema",content:z}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},antd:{version:"^4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"widget-demo":{component:function(){var E=n("3PQu"),h=n("K+nK");n("MaXC");var I=h(n("4IMT"));n("cUip");var p=h(n("iJl9")),A=h(n("0Owb")),$=E(n("q1tI")),J=n("gdfu"),Q=E(n("refC")),X={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},ne=function(me){return $.default.createElement(p.default,(0,A.default)({addonBefore:"http://",addonAfter:".com"},me))},ie=function(){var me=(0,Q.useForm)(),De=function(){};return $.default.createElement("div",null,$.default.createElement(Q.default,{form:me,schema:X,widgets:{site:ne},onFinish:function(Ne){return alert(JSON.stringify(Ne,null,2))}}),$.default.createElement(I.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4"))},pe=ie;return $.default.createElement(pe)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"^4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.0.1"},"react-dom":{version:">=16.8.0"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"}},identifier:"widget-demo"}},"docs-playground":{component:Object(H.dynamic)({loader:function(){var k=Object(re.a)(m.a.mark(function h(){return m.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"BASV"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:We},"main.js":{import:"./main",content:G},"json/simplest.json":{import:"./json/simplest.json",content:M},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:yt},"monaco/index.js":{import:"./monaco",content:nn},"theme.css":{import:"./theme.css",content:dt},"index.css":{import:"./index.css",content:Rt}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.0.1"},"@alifd/next":{version:"^1.x",css:"@alifd/next/dist/next.css"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(H.dynamic)({loader:function(){var k=Object(re.a)(m.a.mark(function h(){return m.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"7ZP+"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:Bt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var E=n("K+nK"),h=E(n("q1tI")),I=n("P2DI"),p=[],A=0;A<6;A++)p.push({id:A.toString(),title:"\u6807\u9898".concat(A+1),created_at:new Date().getTime()});var $={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},J=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(ie,pe){return h.default.createElement("a",{onClick:function(){return alert(ie.title)}},"\u7F16\u8F91")}}],Q=function(){var ie=function(){return{rows:p,total:p.length}};return h.default.createElement(I.TableProvider,null,h.default.createElement(I.Search,{schema:$,api:ie}),h.default.createElement(I.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:J,rowKey:"id"}))},X=Q;return h.default.createElement(X)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var E=n("K+nK"),h=E(n("q1tI")),I=E(n("nYSz")),p={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},A=function(){return h.default.createElement("div",{style:{height:"80vh"}},h.default.createElement(I.default,{defaultValue:p}))},$=A;return h.default.createElement($)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(H.dynamic)({loader:function(){var k=Object(re.a)(m.a.mark(function h(){return m.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"PPgD"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ft}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(H.dynamic)({loader:function(){var k=Object(re.a)(m.a.mark(function h(){return m.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"jktF"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ct}},dependencies:{antd:{version:"^4.1.0",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(H.dynamic)({loader:function(){var k=Object(re.a)(m.a.mark(function h(){return m.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.all([n.e(32),n.e(4)]).then(n.bind(null,"M63W"));case 2:return p.abrupt("return",p.sent.default);case 3:case"end":return p.stop()}},h)}));function E(){return k.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:mt}},dependencies:{react:{version:"^16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"^4.1.0",css:"antd/dist/antd.css"},"react-dom":{version:"^16.8.0"}},identifier:"generator-settings"}}}},OH0R:function(Ve,U,n){"use strict";n.r(U),n.d(U,"delay",function(){return re}),n.d(U,"fakeApi",function(){return Z});var re=m=>new Promise(H=>setTimeout(H,m)),Z=(m,H)=>(console.group("request:",m),console.log("params:",H),console.groupEnd(),re(500))},OVFa:function(Ve,U,n){},Oxum:function(Ve,U,n){},P2DI:function(Ve,U,n){"use strict";n.r(U),n.d(U,"Search",function(){return h}),n.d(U,"Table",function(){return Tt}),n.d(U,"TableProvider",function(){return zn}),n.d(U,"useTable",function(){return dt});var re=n("Saan"),Z=n("vgIT"),m=n.n(Z),H=n("0Owb"),D=n("k1fw"),C=n("tL+A"),z=n("QpBz"),x=n.n(z),ut=n("PpiC"),We=n("tJVT"),G=n("q1tI"),M=n.n(G),yt=Object(G.createContext)({}),nn=Object(G.createContext)({}),dt=()=>Object(G.useContext)(yt),Rt=()=>Object(G.useContext)(nn),Bt=F=>{var K=Object(G.useReducer)((Ie,Pe)=>{var Je=Pe;typeof Pe=="function"&&(Je=Je(Ie)),Pe.action&&Pe.payload&&(Je=Pe.payload,typeof Je=="function"&&(Je=Je(Ie)));var Xe=Object(D.a)(Object(D.a)({},Ie),Je);return Xe},F),ae=Object(We.default)(K,2),ve=ae[0],je=ae[1],Ce=(Ie,Pe)=>{je(Ie)};return[ve,Ce]},ft=n("MaXC"),ct=n("4IMT"),mt=n.n(ct),Ot=n("refC"),k=F=>{var K=F.clearSearch,ae=dt(),ve=ae.tableState,je=ve===void 0?{}:ve,Ce=ae.refresh,Ie=je.loading;return M.a.createElement("div",{className:"flex justify-end w-100"},M.a.createElement(mt.a,{loading:Ie,className:"mr",type:"primary",onClick:()=>Ce()},"\u67E5\u8BE2"),M.a.createElement(mt.a,{onClick:K},"\u91CD\u7F6E"))},E=F=>{var K=Object(G.useState)({}),ae=Object(We.default)(K,2),ve=ae[0],je=ae[1],Ce=dt(),Ie=Ce.tableState,Pe=Ce.setTable,Je=Ce.refresh,Xe=Ce.syncMethods,xt=Ie.search,Ze=F.schema||F.propsSchema,Xt=!0;!F.searchOnMount&&F.searchOnMount!==void 0&&(console.log("props.searchOnMount",F.searchOnMount),Xt=!1);var It=Object(G.useRef)(),Zt=Ue=>{Pe({search:Ue})},wt=Ue=>{try{var ke=100,st=Object.values(Ue.properties).filter(He=>He.hidden?He.hidden!==!0:He["ui:hidden"]!==!0).map(He=>He.width?He.width:He["ui:width"]),un=st.lastIndexOf(void 0),Dt=st.slice(un+1).map(He=>Number(He.substring(0,He.length-1))),Wt=Dt.reduce((He,qe)=>{var Fe=He+qe;return Fe>100?Math.min(100,qe):Fe},0);return ke=100-Wt,ke<10&&(ke=100),ke+"%"}catch(He){return console.error(He),"100%"}},kt=()=>{var Ue=JSON.stringify(It.current)===JSON.stringify(Ze);if(Ze&&Ze.properties){if(ve&&Ue)return;try{var ke=JSON.parse(JSON.stringify(Ze));ke.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:wt(Ze)},je(ke)}catch(st){console.error(st)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},qt=Ue=>{if(Ue.length){Pe({checkPassed:!1});return}Pe({checkPassed:!0})},Le=Object(Ot.useForm)({formData:xt,onChange:Zt,onValidate:qt}),pt=()=>{Le.setValues({})};if(Object(G.useEffect)(()=>{F.hidden||kt()},[Ze]),Object(G.useEffect)(()=>{Xe({searchApi:F.api,syncOnSearch:F.onSearch,syncAfterSearch:F.afterSearch}),(F.hidden||Xt)&&Je()},[]),F.hidden)return null;var at=typeof F.searchBtnRender=="function"?F.searchBtnRender(Je,pt):[];return M.a.createElement("div",{className:"tr-search ".concat(F.className),style:F.style,onKeyDown:Ue=>{Ue.keyCode===13&&Je()}},M.a.createElement(Ot.default,Object(H.default)({form:Le},F,{schema:ve,displayType:"row",widgets:Object(D.a)({searchBtn:()=>F.searchBtnRender?M.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(at)&&at.map((Ue,ke)=>M.a.createElement("div",{key:ke.toString(),style:{marginLeft:8}},Ue))):M.a.createElement(k,{clearSearch:pt})},F.widgets)})))},h=E,I=n("7kJ1"),p=n("qPIi"),A=n.n(p),$=n("zmYW"),J=n("DtFj"),Q=n.n(J),X=n("lfLe"),ne=n("Cp9S"),ie=n.n(ne),pe=n("Wgwc"),xe=n.n(pe);function me(F,K){return F.indexOf(K)>-1}var De=F=>me(Object.prototype.toString.call(F),"Object"),Se=F=>typeof F!="string"?!1:F.indexOf("$api.")===0||F.indexOf("$func.")===0,Ne=F=>F.indexOf("$api.")===0?F.substring(5):F.indexOf("$func.")===0?F.substring(6):"",Te=(F,K)=>{if(typeof F!="object"||F===null){if(Se(F)){var ae=Ne(F);return K&&K[ae]&&typeof K[ae]=="function"?K[ae]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return F}if(Array.isArray(F)){var ve=[...F];return ve.map(Ie=>Te(Ie,K))}var je=Object(D.a)({},F),Ce=Object.keys(je);return Ce.forEach(Ie=>{je[Ie]=Te(je[Ie],K)}),je},Ke=F=>xe()(F).format("YYYY-MM-DD HH:mm"),Re=F=>xe()(F).format("YYYY-MM-DD"),he=F=>"\xA5".concat(F).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Qe=(F,K,ae)=>{var ve=F;return typeof ve=="function"?ve=ve(K):ae&&typeof ae=="function"&&ae(),ve},_e=n("NcKm"),Be=n("lbd2"),Ye=n.n(Be),rt=n("93XW"),Ft=n("d1El"),lt=n.n(Ft),Et=(F,K,ae)=>ae.ellipsis?M.a.createElement(lt.a,{title:$t(K,ae)},F):M.a.createElement("span",null,F),an=(F,K)=>K.copyable||K.ellipsis?M.a.createElement(Ye.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:K.copyable&&F?{text:F,onCopy:()=>x.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:K.ellipsis||!1},$t(F,K)):$t(F,K),$t=(F,K)=>{var ae=K.enum||void 0;return ae&&ae[F]?ae[F]:F},St=F=>F?M.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},M.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},F)):null,At=(F,K)=>{if(K.valueType==="code")return St(F);var ae=an(F,K),ve=Et(ae,F,K);return ve},rn=n("WbIG"),Ht=n("hw8t"),dn=n.n(Ht);class Nt extends M.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(K){return{hasError:!0,errorInfo:K.message}}componentDidCatch(K,ae){console.log(K,ae)}render(){return this.state.hasError?M.a.createElement(dn.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var Gt=Nt,Qt=n("IehP"),Lt=n("3R4v"),Yt=F=>{var K=Object(G.useState)(!1),ae=Object(We.default)(K,2),ve=ae[0],je=ae[1],Ce=F.fullScreen;return ve?M.a.createElement(lt.a,{title:"\u9000\u51FA\u5168\u5C4F"},M.a.createElement(Qt.a,{onClick:()=>{document.exitFullscreen(),je(!1)}})):M.a.createElement(lt.a,{title:"\u5168\u5C4F"},M.a.createElement(Lt.a,{onClick:()=>{if(!document.fullscreenEnabled){x.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(je(!0),Ce().catch(Ie=>x.a.error(Ie.message)))}}))},cn=Yt,Sn=n("G851"),bt=n("ZvzK"),sn=n.n(bt),Cn=n("PFYH"),gn=n("Jv8k"),zt=n.n(gn),mn=n("9hi+"),vn=()=>{var F=dt(),K=F.tableState,ae=F.setTable;return M.a.createElement(sn.a,{overlay:M.a.createElement(zt.a,{selectedKeys:[K.tableSize],onClick:ve=>{var je=ve.key;ae({tableSize:je})},style:{width:80}},M.a.createElement(zt.a.Item,{key:"default"},"\u9ED8\u8BA4"),M.a.createElement(zt.a.Item,{key:"middle"},"\u4E2D\u7B49"),M.a.createElement(zt.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},M.a.createElement(lt.a,{title:"\u8868\u683C\u5BC6\u5EA6"},M.a.createElement(mn.a,null)))},be=vn,$e=n("rLCj"),tt=()=>{var F=dt(),K=F.refresh;return M.a.createElement(lt.a,{title:"\u5237\u65B0"},M.a.createElement($e.a,{onClick:()=>K()}))},nt=tt,Ct=F=>M.a.createElement(ie.a,{size:14,style:{fontSize:16,cursor:"pointer"}},M.a.createElement(nt,null),M.a.createElement(be,null),M.a.createElement(cn,F)),on=Ct,ln=F=>{var K,ae,ve;F.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var je=dt(),Ce=je.tableState,Ie=je.setTable,Pe=je.doSearch,Je=Ce.dataSource,Xe=Ce.pagination,xt=Ce.loading,Ze=Ce.api,Xt=Ce.tableSize,It=Object(G.useRef)(null),Zt=(qe,Fe)=>{Ie({pagination:Object(D.a)(Object(D.a)({},Xe),{},{current:qe,pageSize:Fe})}),!(!F.pageChangeWithRequest&&F.pageChangeWithRequest!==void 0)&&Pe({current:qe,pageSize:Fe})},wt=F.headerTitle,kt=F.toolbarRender,qt=F.columns,Le=F.style,pt=Le===void 0?{}:Le,at=F.className,Ue=at===void 0?"":at,ke=F.toolbarAction,st=ke===void 0?!1:ke;qt.map(qe=>{var Fe=qe;if(Fe.render)return Fe;switch(Fe.valueType){case"date":Fe.render=et=>At(Re(et),Fe);break;case"dateTime":Fe.render=et=>At(Ke(et),Fe);break;case"money":Fe.render=et=>At(he(et),Fe);break;case"code":Fe.render=et=>At(et,Fe);break;case"text":default:Fe.render=et=>At(et,Fe)}return Fe});var un=Object(D.a)(Object(D.a)({},F),{},{dataSource:Je,pagination:F.pagination===!1?!1:Object(D.a)(Object(D.a)({onChange:Zt,size:"small"},F.pagination),{},{pageSize:((K=F.pagination)===null||K===void 0?void 0:K.pageSize)||Xe.pageSize,total:((ae=F.pagination)===null||ae===void 0?void 0:ae.total)||Xe.total,current:((ve=F.pagination)===null||ve===void 0?void 0:ve.current)||Xe.current}),loading:xt,size:Xt}),Dt=typeof kt=="function"?kt():[],Wt=wt||Dt&&Dt.length||Array.isArray(Ze),He=()=>{var qe;return Promise.resolve((qe=It.current)===null||qe===void 0?void 0:qe.requestFullscreen())};return Object(G.useEffect)(()=>{F.size&&Ie({tableSize:F.size})},[]),M.a.createElement(Gt,null,M.a.createElement("div",{className:"tr-table-wrapper ".concat(Ue),style:pt,ref:It},M.a.createElement("div",{className:Wt?"tr-table-top":"tr-table-top-nohead"},M.a.createElement("div",{className:"tr-table-title"},M.a.createElement(Vt,{title:wt})),M.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},M.a.createElement(ie.a,{align:"center"},M.a.createElement(ie.a,{size:8,style:{marginRight:8}},Array.isArray(Dt)&&Dt.map((qe,Fe)=>M.a.createElement("div",{key:Fe.toString()},qe))),st&&M.a.createElement(on,{fullScreen:He})))),M.a.createElement(Q.a,un)))},Tt=ln,Vt=F=>{var K=F.title,ae=dt(),ve=ae.tableState,je=ae.setTable,Ce=ae.doSearch,Ie=ve.tab,Pe=ve.api,Je=Ie||0,Xe=xt=>{var Ze=xt.target.value;je({tab:Ze}),Ce({tab:Ze})};return typeof Pe=="function"?M.a.createElement("div",{className:"tr-single-tab"},K):Pe&&Array.isArray(Pe)?Pe.length===1?M.a.createElement("div",{className:"tr-single-tab"},Pe[0].name):M.a.createElement(M.a.Fragment,null,M.a.createElement(A.a.Group,{onChange:Xe,value:Je},Pe.map((xt,Ze)=>M.a.createElement(A.a.Button,{key:Ze.toString(),value:Ze},xt.name))),K&&M.a.createElement("div",{className:"tr-extra-tab"},K)):M.a.createElement("div",{className:"tr-single-tab"})},Mt=n("yDJ3"),Kt=n.n(Mt),jt=n("SA0R"),Pn=n.n(jt),Bn=n("k/c8"),Ha=n("GYr9"),$n=F=>{var K=Bt({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:3,total:1},tableSize:"default",checkPassed:!0}),ae=Object(We.default)(K,2),ve=ae[0],je=ae[1],Ce=Object(G.useRef)(),Ie=Object(G.useRef)(),Pe=Object(G.useRef)(),Je=ve.pagination,Xe=ve.search,xt=ve.tab,Ze=ve.checkPassed,Xt=dt(),It=(Le,pt)=>{if(delete Xe.searchBtn,Ie.current&&Ie.current(Xe),!Ze)return;var at=Le||{},Ue=at.current,ke=at.pageSize,st=at.tab,un=Object(ut.a)(at,["current","pageSize","tab"]),Dt=Ue||1,Wt=ke||10,He=xt;["string","number"].indexOf(typeof st)>-1&&(He=st);var qe={current:Dt,pageSize:Wt};if(typeof Ce.current=="function")et(Ce.current);else if(Array.isArray(Ce.current)){var Fe=Kt()(Ce.current,"[".concat(He,"].api"));typeof Fe=="function"?et(Fe):x.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else console.log(Ce.current),x.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function et(yn){je({loading:!0});var fn=Object(D.a)(Object(D.a)(Object(D.a)(Object(D.a)({},Xe),pt),un),qe);Array.isArray(yn)&&(fn=Object(D.a)(Object(D.a)({},fn),{},{tab:st})),Promise.resolve(yn(fn)).then(_t=>{var bn=_t.rows,pn=_t.total,jn=_t.pageSize,xn=Object(ut.a)(_t,["rows","total","pageSize"]);je(Object(D.a)(Object(D.a)({loading:!1,dataSource:bn},xn),{},{pagination:Object(D.a)(Object(D.a)({},qe),{},{total:pn,pageSize:jn||Wt})})),Pe.current(Object(D.a)({rows:bn,total:pn,pageSize:jn},xn))}).catch(_t=>{je({loading:!1})})}},Zt=(Le,pt)=>{var at=Le&&Le.stay||!1,Ue=Le&&Le.tab,ke=pt||{};It(Object(D.a)(Object(D.a)({},Le),{},{current:at?Je.current:1,tab:Ue,pageSize:Je.pageSize}),ke)},wt=Le=>{["string","number"].indexOf(typeof Le)>-1?(je({tab:Le}),Zt({tab:Le})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},kt=Le=>{var pt=Le.searchApi,at=Le.syncOnSearch,Ue=Le.syncAfterSearch;Ce.current=pt,Ie.current=at,Pe.current=Ue,je({api:pt})},qt={tableState:ve,setTable:je,doSearch:It,refresh:Zt,changeTab:wt,syncMethods:kt};return qt},Ln=(F,K)=>{var ae=$n(F);return Object(G.useImperativeHandle)(K,()=>ae),M.a.createElement(m.a,{locale:Pn.a},M.a.createElement(yt.Provider,Object(H.default)({},F,{value:ae})))},zn=Object(G.forwardRef)(Ln)},RnhZ:function(Ve,U,n){var re={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function Z(H){var D=m(H);return n(D)}function m(H){if(!n.o(re,H)){var D=new Error("Cannot find module '"+H+"'");throw D.code="MODULE_NOT_FOUND",D}return re[H]}Z.keys=function(){return Object.keys(re)},Z.resolve=m,Ve.exports=Z,Z.id="RnhZ"},Zs1V:function(Ve){Ve.exports=JSON.parse("{}")},bQjt:function(Ve,U,n){"use strict";n.r(U);var re=n("0Owb"),Z=n("q1tI"),m=n.n(Z),H=n("refC"),D=C=>{var z=Object(H.useForm)();return m.a.createElement(H.default,Object(re.default)({form:z},C))};U.default=D},c2mQ:function(Ve,U,n){"use strict";n.r(U);var re=n("q1tI"),Z=n.n(re),m=n("refC"),H=D=>{var C=D.schema,z=Object(m.useForm)();return Z.a.createElement("div",null,Z.a.createElement(m.default,{form:z,schema:C}))};U.default=H},cFvS:function(Ve,U,n){},fK6R:function(Ve,U,n){},gO06:function(Ve,U,n){},iU8R:function(Ve,U,n){},nYSz:function(Ve,U,n){"use strict";n.r(U),n.d(U,"defaultSettings",function(){return Ne}),n.d(U,"defaultCommonSettings",function(){return pe}),n.d(U,"defaultGlobalSettings",function(){return Te}),n.d(U,"fromFormily",function(){return vt}),n.d(U,"toFormily",function(){return Ja}),n.d(U,"fromFormRender",function(){return _n}),n.d(U,"toFormRender",function(){return ea});var re=n("0Owb"),Z=n("q1tI"),m=n.n(Z),H=n("kvAW"),D=n("qJlv"),C=n("k1fw"),z=n("tJVT"),x=Object(Z.createContext)(()=>{}),ut=Object(Z.createContext)({}),We=()=>Object(Z.useContext)(x),G=()=>Object(Z.useContext)(ut),M=a=>{var r=Object(Z.useReducer)((v,O)=>{var R=O;typeof O=="function"&&(R=R(v)),O.action&&O.payload&&(R=O.payload,typeof R=="function"&&(R=R(v)));var N=Object(C.a)(Object(C.a)({},v),R);return N},a),i=Object(z.default)(r,2),d=i[0],u=i[1],y=(v,O)=>{u(v)};return[d,y]};function yt(a,r,i){var d=Object(Z.useRef)();Object(Z.useEffect)(()=>{d.current=a},[a]);var u=Object(Z.useRef)();return Object(Z.useEffect)(()=>{if(!i)return;function y(){d&&d.current&&d.current()}if(y(),r!==null)return u.current=setInterval(y,r),()=>clearInterval(u.current)},[r,i]),()=>clearInterval(u.current)}function nn(a){var r=Object(Z.useRef)();return Object(Z.useEffect)(()=>{r.current=a},[a]),r.current}var dt=a=>{var r=Object(Z.useState)(!1),i=Object(z.default)(r,2),d=i[0],u=i[1],y;try{y=localStorage.getItem(a)}catch(v){}return y||(u(!0),localStorage.setItem(a,JSON.stringify(!0))),d},Rt=()=>{var a=Object(Z.useState)(!1),r=Object(z.default)(a,2),i=r[0],d=r[1],u=()=>d(!i);return[i,u]},Bt=a=>{var r=Object(Z.useState)(a),i=Object(z.default)(r,2),d=i[0],u=i[1];return[d,u]},ft=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",d=()=>{var N=localStorage.getItem(i);if(N)try{return JSON.parse(N)}catch(e){return r}return r},u=Object(Z.useState)(d()),y=Object(z.default)(u,2),v=y[0],O=y[1],R=N=>{O(N),localStorage.setItem(i,JSON.stringify(N))};return[v,R]},ct=n("fwXI"),mt=n("CC+v"),Ot=n.n(mt),k=n("MaXC"),E=n("4IMT"),h=n.n(E),I=n("tL+A"),p=n("QpBz"),A=n.n(p),$=n("PpiC"),J=n("cUip"),Q=n("iJl9"),X=n.n(Q),ne=n("WWur"),ie=n.n(ne),pe={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string","ui:widget":"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},"ui:width":{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string","ui:widget":"percentSlider"},"ui:labelWidth":{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number","ui:widget":"slider",max:400,"ui:options":{hideNumber:!0}},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},"ui:readonly":{title:"\u7F6E\u7070",type:"boolean"},required:{title:"\u5FC5\u586B",type:"boolean"}},xe=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{"ui:options":{title:"\u9009\u9879",type:"object","ui:labelWidth":80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string","ui:options":{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],"ui:widget":"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],"ui:widget":"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],"ui:widget":"select","ui:options":{mode:"tags"}}}}],me=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime","ui:options":{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number","ui:widget":"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],De=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},"ui:options":{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}}],Se=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date","ui:options":{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],Ne=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:xe,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:me},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:De},{title:"\u6A21\u677F",widgets:Se}],Te={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"string",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],"ui:options":{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number","ui:widget":"slider",max:300,"ui:options":{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],"ui:widget":"radio"}}},Ke=n("gO06"),Re=n("4b23"),he=n.n(Re),Qe=n("JBAE"),_e=n.n(Qe);function Be(a,r){return a.indexOf(r)>-1}var Ye=a=>Be(Object.prototype.toString.call(a),"Object");function rt(a){try{return JSON.parse(JSON.stringify(a))}catch(r){return a}}function Ft(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function lt(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function Et(a,r){if(a===void 0&&r===void 0)return!0;if(a===void 0||r===void 0)return!1;if(a===null&&r===null)return!0;if(a===null||r===null)return!1;if(a.constructor!==r.constructor)return!1;if(a.constructor===Array){if(a.length!==r.length)return!1;for(var i=0;i<a.length;i++)if(a[i].constructor===Array||a[i].constructor===Object){if(!Et(a[i],r[i]))return!1}else if(a[i]!==r[i])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(r).length)return!1;for(var d=0;d<Object.keys(a).length;d++){var u=Object.keys(a)[d];if(a[u]&&typeof a[u]!="number"&&(a[u].constructor===Array||a[u].constructor===Object)){if(!Et(a[u],r[u]))return!1}else if(a[u]!==r[u])return!1}}else if(a.constructor===String||a.constructor===Number)return a===r;return!0}function an(a){var r;switch(a){case"date":r="YYYY-MM-DD";break;case"time":r="HH:mm:ss";break;default:r="YYYY-MM-DD HH:mm:ss"}return r}function $t(a){return a.find((r,i,d)=>i!==d.findIndex(u=>JSON.stringify(r)===JSON.stringify(u)))}function St(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=rn(a),d=i.map(v=>{var O=v.name,R=v.schema,N=R.type,e=R.enum,t=R.properties,s=R.items,o=N==="object"&&t,l=N==="array"&&s&&!e,c=O&&r[v.name];if(!c)return v;if(l){var f=St(s,c.items||{});return Object(C.a)(Object(C.a)({},v),{},{schema:Object(C.a)(Object(C.a)(Object(C.a)({},v.schema),c),{},{items:f})})}if(o){var b=St(v.schema,c);return Object(C.a)(Object(C.a)({},v),{},{schema:b})}return Object(C.a)(Object(C.a)({},v),{},{schema:Object(C.a)(Object(C.a)({},v.schema),c)})}),u={};d.forEach(v=>{u[v.name]=v.schema});var y={};return Object.keys(r).forEach(v=>{typeof v=="string"&&v.substring(0,3)==="ui:"&&(y[v]=r[v])}),At(u)?Object(C.a)(Object(C.a)({},a),y):Object(C.a)(Object(C.a)(Object(C.a)({},a),y),{},{properties:u})}function At(a){return Object.keys(a).length===0}function rn(a){if(!a)return[];var r=a.properties,i=a.items,d=a.type;if(!r&&!i)return[];var u={};return d==="object"&&(u=r),d==="array"&&(u=i),Object.keys(u).map(y=>({schema:u[y],name:y}))}function Ht(){}var dn=a=>Function('"use strict";return ('+a+")")(),Nt=(a,r,i)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(i),`;
    const formData = `).concat(JSON.stringify(r),`;
    return (`).concat(a,")"))();function Gt(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function Qt(a){return Object.keys(a).some(r=>typeof a[r]=="function"?!0:typeof a[r]=="string"?Gt(a[r]):typeof a[r]=="object"?Qt(a[r]):!1)}function Lt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2?arguments[2]:void 0,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},u=_e()(a);u.$id||(u.$id=r);var y=[],v=u.type==="object"&&u.properties,O=u.type==="array"&&u.items&&u.items.properties;return v&&(Object.entries(u.properties).forEach(R=>{var N=Object(z.default)(R,2),e=N[0],t=N[1],s=r+"/"+e;y.push(s),Lt(t,s,r,d)}),delete u.properties),O&&(Object.entries(u.items.properties).forEach(R=>{var N=Object(z.default)(R,2),e=N[0],t=N[1],s=r+"/"+e;y.push(s),Lt(t,s,r,d)}),delete u.items.properties),u.type&&(d[r]={parent:i,schema:u,children:y}),d}var Yt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=r.split("/");return i[i.length-1]},cn=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",d=r.split("/");return(typeof i=="string"||typeof i=="number")&&(d[d.length-1]=i),d.join("/")},Sn=a=>({parent:a.parent,schema:Object(C.a)({},a.schema),data:a.data,children:a.children});function bt(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,d={},u=a[r],y=_e()(u);return y&&(d=Object(C.a)({},y.schema),i&&d.$id&&delete d.$id,y.children.length>0&&y.children.forEach(v=>{var O=v;if(!!a[v]){try{i&&(O=a[v].schema.$id)}catch(N){console.log("catch",N)}var R=Yt(O);d.type==="object"&&(d.properties||(d.properties={}),d.properties[R]=bt(a,v,i)),d.type==="array"&&d.items&&d.items.type==="object"&&(d.items.properties||(d.items.properties={}),d.items.properties[R]=bt(a,v,i))}})),d}var sn=(a,r)=>{var i=Lt(r);return a in i&&delete i[a],bt(i)},Cn=(a,r)=>{var i=Object(C.a)({},a);try{var d=a[r],u=r+he()(6),y=i[d.parent].children,v=y.findIndex(O=>O===r);return y.splice(v+1,0,u),i[u]=_e()(i[r]),i[u].schema.$id=u,[i,u]}catch(O){return console.error(O,"catcherror"),[a,r]}},gn=a=>{var r=a.id,i=a.key,d=a.schema,u=a.subSchema,y=Lt(d),v=cn(r,i)+"$$"+he()(10);if(r in y){var O=y[r].parent;if(O&&O in y){var R=y[O].children;try{var N=R.findIndex(e=>e===r);R.splice(N+1,0,v)}catch(e){console.error(e.message)}}try{y[v]={parent:y[r].parent,schema:u,children:[]},y[v].schema.$id=v}catch(e){console.error(e.message)}}return[bt(y),v]},zt=a=>{var r=a.selected,i=a.name,d=a.schema,u=a.flatten,y=r||"#",v;if(y&&y[0]==="0"||y==="#"){var O=Object(C.a)({},u);try{var R=y.substring(1);v=R+"/"+i+"_"+he()(6),y==="#"&&(v="#/"+i+"_"+he()(6),R="#");var N=O[R].children;N.push(v);var e={parent:R,schema:Object(C.a)(Object(C.a)({},d),{},{$id:v}),data:void 0,children:[]};O[v]=e}catch(g){console.error(g,"catch")}return{newId:v,newFlatten:O}}var t=i+"_"+he()(6),s=r.split("/");s.pop(),s.push(t),v=s.join("/");var o=Object(C.a)({},u);try{var l=o[r],c=o[l.parent].children,f=c.findIndex(g=>g===r);c.splice(f+1,0,v);var b={parent:l.parent,schema:Object(C.a)(Object(C.a)({},d),{},{$id:v}),data:void 0,children:[]};o[v]=b}catch(g){console.error(g)}return{newId:v,newFlatten:o}},mn=a=>{var r=a.dragId,i=a.dragItem,d=a.dropId,u=a.position,y=a.flatten,v=d==="#"?"inside":u,O=Object(C.a)({},y);i&&(O[r]=i);var R=i||O[r],N=O[d],e=N;if(v!=="inside"){var t=N.parent;e=O[t]}if(d.indexOf(r)>-1)return[O,r];var s=r;try{var o=e.schema.$id;s=s.replace(R.parent,o)}catch(g){}try{var l=O[R.parent],c=l.children.indexOf(r);c>-1&&l.children.splice(c,1)}catch(g){console.error(g)}try{var f=e.children||[],b=f.indexOf(d);switch(v){case"up":f.splice(b,0,r);break;case"down":f.splice(b+1,0,r);break;default:f.push(r);break}e.children=f}catch(g){console.error(g)}return R.parent=e.$id,[O,s]},vn=(a,r)=>!a||!r?{}:(Object.entries(a).forEach(i=>{var d=Object(z.default)(i,2),u=d[0],y=d[1],v=on(r,u);a[u].data=v}),a),be=a=>(r,i)=>{},$e=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var d=r[i].data,u=Object.keys(r),y=u.filter(v=>{var O=i.split("/").length,R=v.split("/").length;return v.indexOf(i)>-1&&R>O});return y&&y.length>0&&(d===void 0&&["object","array"].indexOf(r[i].schema.type)>-1&&(d={}),y.forEach(v=>{var O=i.split("/").length,R=v.split("/").length;if(R===O+1){var N=a(r,v),e=Yt(v);d[e]=N}})),d}catch(v){return}},tt=(a,r,i)=>{try{var d=i[r];if(d.schema[a]!==void 0)return d.schema[a];if(d&&d.parent){var u=i[d.parent].schema;return u[a]!==void 0?u[a]:tt(a,d.parent,i)}}catch(y){return}};function nt(a){return Function('"use strict";return ('+a+")")()}function Ct(a){if(!a)return[];var r=a.properties,i=a.items,d=a.type;if(!r&&!i)return[];var u={};return d==="object"&&(u=r),d==="array"&&(u=i.properties),Object.keys(u).map(y=>({schema:u[y],name:y}))}function on(a,r){r=ln(r,a);for(var i=0,d=r.length;a!=null&&i<d;){var u=Tt(r[i++]);a=u?a[u]:a}return i&&i==d?a:void 0}function ln(a,r){return Array.isArray(a)?a:Kt(a,r)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function Tt(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var r="".concat(a);return r=="0"&&1/a==-INFINITY?"-0":r}var Vt=/#\/.+\//,Mt=/^\w*$/;function Kt(a,r){if(Array.isArray(a))return!1;var i=typeof a;return i==="number"||i==="boolean"||a==null?!0:Mt.test(a)||!Vt.test(a)||r!=null&&a in Object(r)}var jt=a=>{if(a&&a.propsSchema){var r=a.propsSchema,i=Object($.a)(a,["propsSchema"]);return Object(C.a)({schema:r},i)}return a},Pn=a=>{if(a&&a.schema){var r=a.schema,i=Object($.a)(a,["schema"]);return Object(C.a)({propsSchema:r},i)}return a},Bn=n("CLjb"),Ha=n("fK6R"),$n=a=>{var r=a.text,i=a.name,d=a.schema,u=a.icon,y=Object(Bn.a)({item:{type:"box",dragItem:{parent:"#",schema:d,children:[]},$id:"#/".concat(i,"_").concat(he()(6))},end:(c,f)=>{var b=f.getDropResult()},collect:c=>({isDragging:c.isDragging()})}),v=Object(z.default)(y,2),O=v[0].isDragging,R=v[1],N=We(),e=G(),t=e.selected,s=e.flatten,o=e.onFlattenChange,l=()=>{var c=zt({selected:t,name:i,schema:d,flatten:s}),f=c.newId,b=c.newFlatten;o(b),N({selected:f})};return m.a.createElement("div",{ref:R},m.a.createElement(zn,{text:r,icon:u,onClick:l}))},Ln=$n,zn=a=>{var r=a.onClick,i=a.text,d=a.icon;return m.a.createElement("li",{className:"left-item",onClick:r},i)},F=a=>{var r=G(),i=r.userProps,d=i===void 0?{}:i,u=d.settings,y=Array.isArray(u)?u:Ne;return m.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(y)?y.map((v,O)=>v&&v.show===!1?null:m.a.createElement("div",{key:O},m.a.createElement("p",{className:"f6 b"},v.title),m.a.createElement("ul",{className:"pl0"},Array.isArray(v.widgets)?v.widgets.map((R,N)=>m.a.createElement(Ln,Object(re.default)({key:N.toString()},R,a))):m.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):m.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},K=F,ae=n("Z8Mf"),ve=n("j7zX"),je=n.n(ve),Ce=n("UESt"),Ie=n("97ez"),Pe=n("pJsf"),Je=n("g4D/"),Xe=n.n(Je);function xt(a){var r=a.value,i=a.onChange,d=a.disabled,u=a.readonly,y=v=>{i(v.target.checked)};return m.a.createElement(Xe.a,{disabled:d||u,onChange:y,checked:r})}function Ze(a){var r=a.schema||{},i=r.enum,d=r.enumNames,u=a.value&&Array.isArray(a.value)?a.value:[];return m.a.createElement(Xe.a.Group,{disabled:a.disabled||a.readonly,value:u,onChange:a.onChange},(i||[!0,!1]).map((y,v)=>m.a.createElement(Xe.a,{value:y,key:v},m.a.createElement("span",{dangerouslySetInnerHTML:{__html:d?d[v]:y}}))))}var Xt=n("ypy7"),It=n.n(Xt),Zt=n("rNQX");function wt(a){var r=a.schema.format,i=u=>{a.disabled||a.readonly||a.onChange(u.color)},d=u=>{a.onChange(u.target.value)};return m.a.createElement("div",{className:"fr-color-picker"},m.a.createElement(It.a,{type:r,animation:"slide-up",color:a.value?a.value:"#ffffff",onChange:i}),a.readonly?m.a.createElement("span",null,a.value||"#ffffff"):m.a.createElement(X.a,{placeholder:"#ffffff",disabled:a.disabled,value:a.value,onChange:d}))}var kt=n("GBD3"),qt=n("wXtC"),Le=n.n(qt),pt=n("mxgt"),at=n("4ZwL"),Ue=n.n(at),ke=n("wd/R"),st=n.n(ke),un=(a,r,i)=>{var d=a.invalid?{borderColor:"#f5222d"}:{},u=a.schema.format,y=u===void 0?"dateTime":u,v=an(y),O={};a.value?O.value=st()(a.value,v):O.value="";var R=a.description?{placeholder:a.description}:{},N=Object(C.a)(Object(C.a)(Object(C.a)(Object(C.a)({},R),a.options),O),{},{style:Object(C.a)({width:"100%"},d),disabled:a.disabled||a.readonly,onChange:r});return y==="dateTime"&&(N.showTime=!0),m.a.createElement(i,N)};function Dt(a){var r=a.schema.format,i=r===void 0?"dateTime":r,d=(y,v)=>a.onChange(v),u=i==="time"?Ue.a:Le.a;return un(a,d,u)}var Wt=(a,r,i)=>{var d=a.schema.format,u=d===void 0?"dateTime":d,y=an(u),v={};a.value&&Array.isArray(a.value)&&a.value[0]&&a.value[1]&&(v={defaultValue:[st()(a.value[0],y),st()(a.value[1],y)]});var O=Object(C.a)(Object(C.a)(Object(C.a)({},a.options),v),{},{style:{width:"100%"},showTime:u==="dateTime",disabled:a.disabled||a.readonly,onChange:r});return m.a.createElement(i,O)},He=Le.a.RangePicker;function qe(a){var r=(i,d)=>a.onChange(d);return Wt(a,r,He)}var Fe=n("RBnf"),et=n("YJCA"),yn=a=>{var r=a.fold,i=r===void 0?!1:r,d=a.width,u=a.height,y=a.fill,v=a.style,O=v===void 0?{}:v,R=Object($.a)(a,["fold","width","height","fill","style"]);return m.a.createElement("div",Object(re.default)({style:O,className:i?"fold-icon":"fold-icon fold-icon-active"},R),m.a.createElement("svg",{viewBox:"0 0 1024 1024",width:d||18,height:u||18},m.a.createElement("path",{d:"M942.048 306.176c-12.288-12.288-31.328-13.024-43.008-2.016L529.056 674.112c-15.072 15.872-19.008 15.808-34.816 0L124.288 304.16c-11.68-11.04-30.72-10.272-43.008 2.016-12.512 12.512-13.216 32.032-1.6 43.68L490.624 760.8c5.056 5.056 11.648 7.328 18.464 7.744h5.152c6.816-.448 13.408-2.72 18.464-7.744l410.944-410.944c11.584-11.648 10.88-31.2-1.6-43.68z",fill:y||"#3c3c3c"})))},fn=yn,_t=(a,r,i)=>{if(Array.isArray(r)&&Array.isArray(i)){if(typeof a=="string"||typeof a=="number"){var d=r.indexOf(a);return d>-1?i[d]:a}else if(Array.isArray(a)){var u=a.map(y=>_t(a,r,i));return String(u)}return a}return a},bn=a=>{var r=a.schema,i=r===void 0?{}:r,d=a.value,u=d===void 0?[]:d,y=a.index,v=jn({schema:i,value:u,index:y}).filter(O=>O.title).slice(0,3);return m.a.createElement("ul",{className:"flex overflow-hidden",style:{paddingRight:45}},v.map((O,R)=>O.title?m.a.createElement("li",{className:"flex-auto mr2 overflow-hidden",key:R},m.a.createElement("span",{className:"fw5"},O.title,": "),m.a.createElement("span",null,O.text)):null))},pn=bn,jn=a=>{var r=a.schema,i=r===void 0?{}:r,d=a.value,u=d===void 0?[]:d,y=a.index,v=i.items,O=v===void 0?{}:v;if(O.type!=="object")return[];var R=O&&O.properties||{};R=Object.values(R);var N=u&&u.length&&u[y]||{},e=Object.values(N),t=R.map((s,o)=>{var l=s&&s["ui:hidden"];if(!l){var c=s.title,f=e[o];return f===null&&f===void 0?f="":typeof f=="boolean"?f=f?"\u662F":"\u5426":typeof f!="string"&&typeof f!="number"&&f?f="{\u590D\u6742\u7ED3\u6784}":s.enum&&s.enumNames&&(f=_t(f,s.enum,s.enumNames)),{title:c,text:f}}});return t.filter(s=>!!s)},xn=Object(et.c)(()=>m.a.createElement("span",{className:"fr-move-icon"},":::"));class hn extends m.a.Component{constructor(){super(...arguments);this.toggleFold=()=>{this.props.toggleFoldItem(this.props.name)}}componentDidMount(){var r=this.props,i=r.p,d=i===void 0?{}:i,u=r.name,y=r.fold,v=jn({schema:d.schema,value:d.value,index:u}),O=v&&v[0]&&v[0].text;O&&y!==0&&this.props.toggleFoldItem(u)}render(){var r=this.props,i=r.item,d=r.p,u=d===void 0?{}:d,y=r.name,v=r.fold,O=Object(C.a)(Object(C.a)({},u),{},{index:y}),R=u.options,N=R===void 0?{}:R,e=u.readonly,t=u.formData,s=u.value,o=N.foldable,l=N.hideDelete,c=N.itemButtons,f=Gt(l);f&&(typeof f=="string"?l=Nt(f,t,s):typeof f=="function"&&(l=f(t,s)));var b=u.schema.items&&u.schema.items.type=="object",g="fr-set ba b--black-10 hover-b--black-20 relative flex flex-column";return o&&v?g+=" pv12":u.displayType==="row"&&(g+=" pt44"),m.a.createElement("li",{className:g},o&&v&&b?m.a.createElement(pn,O):i,o&&m.a.createElement(fn,{fold:v,onClick:this.toggleFold,style:{position:"absolute",top:12,right:32}}),!e&&m.a.createElement(xn,null),!(o&&v||l||e)&&m.a.createElement("div",{className:"self-end flex"},m.a.createElement(On,{type:"dashed",icon:"delete",onClick:()=>{var j=[...u.value];j.splice(y,1),u.onChange(j)}},"\u5220\u9664"),c&&c.length>0&&c.map((j,S)=>m.a.createElement(On,{key:S.toString(),className:"ml2",type:"dashed",icon:j.icon,onClick:()=>{var T=[...u.value];if(typeof window[j.callback]=="function"){var w=window[j.callback](T,y);u.onChange(w)}}},j.text||""))))}}var Jt=Object(et.b)(hn);class Vn extends m.a.Component{constructor(){super(...arguments);this.handleAddClick=()=>{var r=this.props,i=r.p,d=r.addUnfoldItem,u=[...i.value];u.push(i.newItem),i.onChange(u),d()}}render(){var r=this.props,i=r.p,d=r.foldList,u=d===void 0?[]:d,y=r.toggleFoldItem,v=i||{},O=v.options,R=O===void 0?{}:O,N=v.extraButtons,e=N===void 0?{}:N,t=R.buttons||e||[],s=i.readonly,o=i.schema,l=o===void 0?{}:o,c=l.maxItems,f=i.value||[],b=c?c>f.length:!0;return m.a.createElement("ul",{className:"pl0 ma0"},f.map((g,j)=>m.a.createElement(Jt,{key:"item-".concat(j),index:j,name:j,p:i,fold:u[j],toggleFoldItem:y,item:i.children})),!s&&m.a.createElement("div",{className:"tr"},b&&m.a.createElement(On,{icon:"add",onClick:this.handleAddClick},"\u65B0\u589E"),t&&t.length>0&&t.map((g,j)=>m.a.createElement(On,{className:"ml2",icon:g.icon,key:j.toString(),onClick:()=>{if(g.callback==="clearAll"){i.onChange([]);return}if(g.callback==="copyLast"){var S=[...i.value],T=S.length-1;S.push(T>-1?S[T]:i.newItem),i.onChange(S);return}if(typeof window[g.callback]=="function"){var w=[...i.value],L=P=>i.onChange(P);window[g.callback](w,L,i.newItem)}}},g.text))))}}var ta=Object(et.a)(Vn);class Mn extends m.a.Component{constructor(r){super(r);this.addUnfoldItem=()=>this.setState({foldList:[...this.state.foldList,0]}),this.toggleFoldItem=d=>{var u=this.state.foldList,y=u===void 0?[]:u;y[d]=!y[d],this.setState({foldList:y})},this.handleSort=d=>{var u=d.oldIndex,y=d.newIndex,v=this.props,O=v.onChange,R=v.value;O(Object(et.d)(R,u,y)),this.setState({foldList:Object(et.d)(this.state.foldList,u,y)})};var i=this.props.value.length||0;this.state={foldList:new Array(i).fill(!1)||[]}}render(){var r=this.state.foldList;return m.a.createElement(ta,{p:this.props,foldList:r,toggleFoldItem:this.toggleFoldItem,addUnfoldItem:this.addUnfoldItem,distance:6,useDragHandle:!0,helperClass:"fr-sort-help-class",shouldCancelStart:i=>i.toElement&&i.toElement.className==="fr-tooltip-container",onSortEnd:this.handleSort})}}Mn.defaultProps={value:[]};function On(a){var r=a.icon,i=a.children,d=Object($.a)(a,["icon","children"]),u;switch(r){case"add":u="PlusCircleOutlined";break;case"delete":u="DeleteOutlined";break;default:u=r;break}var y=Fe[u];return y?m.a.createElement(h.a,Object(re.default)({},d,{icon:m.a.createElement(y,null)}),i):m.a.createElement(h.a,d,i)}var na=Mn,Kn=n("/MfK"),Ga=n("w5pM");function aa(a){return m.a.createElement("div",{className:"flex flex-column"},m.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},m.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,m.a.createElement(h.a,{size:"small",className:"self-end",type:"dashed",icon:m.a.createElement(Kn.a,null)},"\u5220\u9664")),m.a.createElement(h.a,{size:"small",className:"self-end",icon:m.a.createElement(Ga.a,null)},"\u6DFB\u52A0"))}function Qa(a){var r=a.children;return m.a.createElement("div",{className:"w-100"},r)}var Ya=n("ek7I"),Wn=n("FAat"),ra=n.n(Wn),sa=a=>r=>{var i=a.Option,d=N=>r.onChange(N),u=r.invalid?{borderColor:"#f5222d"}:{},y=r.schema||{},v=y.enum,O=y.enumNames,R=r.value&&Array.isArray(r.value)?r.value:[];return m.a.createElement(a,Object(re.default)({},r.options,{style:Object(C.a)({width:"100%"},u),mode:"multiple",disabled:r.disabled||r.readonly,value:R,onChange:d}),(v||[]).map((N,e)=>m.a.createElement(i,{value:N,key:e},m.a.createElement("span",{dangerouslySetInnerHTML:{__html:O?O[e]:N}}))))},Jn=sa(ra.a),Xa=n("b+Mx"),Dn=n("5Dct"),Rn=n.n(Dn),ia=a=>r=>{var i=r.invalid?{borderColor:"#f5222d"}:{},d=r.schema,u=d.max,y=d.min,v=d.step,O={};return(u||u===0)&&(O={max:u}),(y||y===0)&&(O=Object(C.a)(Object(C.a)({},O),{},{min:y})),v&&(O=Object(C.a)(Object(C.a)({},O),{},{step:v})),m.a.createElement(a,Object(re.default)({},O,{style:Object(C.a)({width:"100%"},i),disabled:r.disabled||r.readonly},r.options,{value:r.value,onChange:r.onChange}))},oa=ia(Rn.a),Za=n("7kJ1"),la=n("qPIi"),ua=n.n(la),ka=(a,r,i)=>{var d=i.Group,u=a.schema||{},y=u.enum,v=u.enumNames;return m.a.createElement(d,{disabled:a.disabled||a.readonly,value:a.value,onChange:r},(y||[!0,!1]).map((O,R)=>m.a.createElement(i,{value:O,key:R},m.a.createElement("span",{dangerouslySetInnerHTML:{__html:v?v[R]:O}}))))};function da(a){var r=i=>a.onChange(i.target.value);return ka(a,r,ua.a)}var Un=a=>r=>{var i=a.Option,d=R=>r.onChange(R),u=r.invalid?{borderColor:"#f5222d"}:{},y=r.schema||{},v=y.enum,O=y.enumNames;return m.a.createElement(a,Object(re.default)({style:Object(C.a)({width:"100%"},u)},r.options,{disabled:r.disabled||r.readonly,value:r.value,onChange:d}),(v||[]).map((R,N)=>{var e=O?O[N]:R,t=typeof e=="string"&&e[0]==="<";return t&&(e=m.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})),m.a.createElement(i,{value:R,key:N},e)}))},ca=Un(ra.a),qa=n("tCGa"),_a=n("DH6M"),Hn=n.n(_a),Gn=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,d=i.max,u=i.min,y=i.step,v={};(d||d===0)&&(v={max:d}),(u||u===0)&&(v=Object(C.a)(Object(C.a)({},v),{},{min:u})),y&&(v=Object(C.a)(Object(C.a)({},v),{},{step:y}));var O=!1;a.options&&a.options.hideNumber&&(O=!0);var R=a.readonly?m.a.createElement("span",{style:{width:"90px"}},a.value===""?"-":a.value):m.a.createElement(Rn.a,Object(re.default)({},a.options,v,{style:Object(C.a)({width:"90px"},r),value:a.value,disabled:a.disabled,onChange:a.onChange}));return m.a.createElement("div",{className:"fr-slider"},m.a.createElement(Hn.a,Object(re.default)({style:{flexGrow:1,marginRight:O?0:12}},v,{onChange:a.onChange,value:typeof a.value=="number"?a.value:u||0,disabled:a.disabled||a.readonly})),O?null:R)},ma=Gn,er=n("LGkk"),va=n("rVaU"),tr=n.n(va);function fa(a){return m.a.createElement(tr.a,{disabled:a.disabled||a.readonly,onChange:r=>a.onChange(a.name,r),defaultChecked:a.value})}var pa=X.a.TextArea;function ha(a){var r=a.options,i=a.invalid,d=i?{borderColor:"#f5222d"}:{},u={rows:3},y=Object(C.a)(Object(C.a)({},u),r),v=O=>a.onChange(O.target.value);return m.a.createElement(pa,Object(re.default)({style:d,disabled:a.disabled||a.readonly,value:a.value},y,{onChange:v}))}var nr=n("VDQ/"),ga=n("B8+X"),ya=n.n(ga),ba=n("z7Xi");function ja(a){var r={name:"file",action:a.action,enctype:"multipart/form-data",withCredentials:!0,type:"file",onChange(i){i.file.status==="done"?(A.a.success("".concat(i.file.name," \u4E0A\u4F20\u6210\u529F")),a.onChange(i.file.response.url)):i.file.status==="error"&&A.a.error("".concat(i.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){a.onChange("")}};return m.a.createElement("div",{className:"fr-upload-mod"},m.a.createElement(ya.a,Object(re.default)({},r,{className:"fr-upload-file"}),m.a.createElement(h.a,null,m.a.createElement(ba.a,null)," \u4E0A\u4F20")),a.value&&m.a.createElement("a",{href:a.value,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var cr=n("/xgg"),xa=n("aOJk"),Oa=n.n(xa),Ea=n("mpQp"),Sa="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",ar=(a,r)=>a==="image"?m.a.createElement("img",{src:r||Sa,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}):null,Ca=(a,r)=>a!=="image"?null:m.a.createElement(Oa.a,{content:ar(a,r),className:"fr-preview",placement:"bottom"},m.a.createElement(Ea.a,null));function Da(a){var r=a.options,i=r===void 0?{}:r,d=a.invalid,u=d?{borderColor:"#f5222d"}:{},y=a.schema.format,v=y===void 0?"text":y,O=v==="image"?"text":v,R=N=>a.onChange(N.target.value);return m.a.createElement(X.a,Object(re.default)({style:u},i,{value:a.value,type:O,disabled:a.disabled||a.readonly,addonAfter:i.addonAfter?i.addonAfter:Ca(v,a.value),onChange:R}))}var Ra={checkbox:xt,checkboxes:Ze,color:wt,date:Dt,dateRange:qe,input:Da,list:na,listEditor:aa,map:Qa,multiSelect:Jn,number:oa,radio:da,select:ca,slider:ma,switch:fa,textarea:ha,upload:ja};function Fa(a){var r=a.onChange,i=a.value,d=a.disabled,u=a.readonly,y=a.options,v=O=>{try{var R=cn(i,O.target.value);r(R)}catch(N){}};return m.a.createElement(X.a,Object(re.default)({disabled:d||u},y,{onChange:v,value:Yt(i)}))}var Qn=a=>{var r=a.invalid?{borderColor:"#f5222d"}:{},i=a.schema,d=i.max,u=i.min,y=i.step,v={};(d||d===0)&&(v={max:d}),(u||u===0)&&(v=Object(C.a)(Object(C.a)({},v),{},{min:u})),y&&(v=Object(C.a)(Object(C.a)({},v),{},{step:y}));var O=!1;a.options&&a.options.hideNumber&&(O=!0);var R=s=>typeof s=="string"&&s.endsWith("%"),N=100;if(R(a.value))try{N=Number(a.value.split("%")[0]),Number.isNaN(N)&&(N=100)}catch(s){}var e=s=>{var o=s+"%";a.onChange(o)},t=a.readonly?m.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):m.a.createElement(Rn.a,Object(re.default)({},a.options,v,{style:Object(C.a)({width:"80px"},r),value:N,disabled:a.disabled,onChange:e,formatter:s=>"".concat(s,"%"),parser:s=>s.replace("%","")}));return m.a.createElement("div",{className:"fr-slider"},m.a.createElement(Hn.a,Object(re.default)({style:{flexGrow:1,marginRight:O?0:12}},v,{onChange:e,max:100,tipFormatter:s=>s+"%",value:N||100,disabled:a.disabled||a.readonly})),O?null:t)},Aa=Qn,Yn={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map","string:upload":"upload","string:date":"date","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"input","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"select","array?enum":"checkboxes","*?readonly":"text"};function Xn(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yn,i=a.type,d=a.format,u=a.enum,y=a.readonly;if(a["ui:widget"])return a["ui:widget"];var v=[];y&&(v.push("".concat(i,"?readonly")),v.push("*?readonly")),u&&(v.push("".concat(i,"?enum")),v.push("*?enum")),d&&v.push("".concat(i,":").concat(d)),v.push(i);var O="";return v.some(R=>(O=r[R],!!O)),O}function Na(){var a=G(),r=a.selected,i=a.flatten,d=a.onItemChange,u=a.userProps,y=u===void 0?{}:u,v=y.settings,O=y.commonSettings,R={},N={},e=(S,T)=>{var w=[];return S.forEach(L=>{var P=L.widgets,V=P.filter(W=>W.widget).map(W=>Object(C.a)(Object(C.a)({},W),{},{setting:Object(C.a)(Object(C.a)({},T),W.setting)}));w=[...w,...V]}),w},t=S=>{if(r)try{var T=i[r];T&&T.schema&&d(r,Object(C.a)(Object(C.a)({},T),{},{schema:S}))}catch(w){console.log(w,"catch")}},s=Array.isArray(v)?[...v,{widgets:[...xe,...me,...De]}]:Ne,o=Ye(O)?O:pe,l=e(s,o),c,f;try{if(c=i[r],c&&(f=Xn(c.schema)),f){var b=l.find(S=>S.widget===f)||{},g=b.setting;R={schema:{type:"object",properties:Object(C.a)({},g)}},N=c.schema}}catch(S){console.log(S)}var j=Object(C.a)(Object(C.a)({},Ra),{},{idInput:Fa,percentSlider:Aa});return m.a.createElement("div",{style:{paddingRight:24}},m.a.createElement(Tn,{schema:R,formData:N,onChange:t,widgets:j,preview:!0,frProps:{displayType:"column",showDescIcon:!1}}))}function Ta(){var a=G(),r=a.widgets,i=a.frProps,d=a.userProps,u=We(),y=d&&d.globalSettings?d.globalSettings:Te,v=O=>{u({frProps:O})};return m.a.createElement("div",{style:{paddingRight:24}},m.a.createElement(Tn,{schema:{schema:y},formData:i,onChange:v,widgets:r,preview:!0,frProps:{displayType:"column",showDescIcon:!0}}))}var Zn=je.a.TabPane;function Ia(){var a=M({showRight:!0,showItemSettings:!1}),r=Object(z.default)(a,2),i=r[0],d=r[1],u=G(),y=u.selected,v=i.showRight,O=i.showItemSettings,R=()=>d({showRight:!v}),N=()=>m.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:R},m.a.createElement(Ce.a,{className:"f5"})),e=()=>m.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},m.a.createElement(N,null));return Object(Z.useEffect)(()=>{y&&y[0]==="0"||y==="#"||!y?d({showItemSettings:!1}):d({showItemSettings:!0})},[y]),v?m.a.createElement("div",{className:"right-layout relative pl2"},m.a.createElement(N,null),m.a.createElement(je.a,{defaultActiveKey:"1",onChange:()=>{}},O&&m.a.createElement(Zn,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},m.a.createElement(Na,null)),m.a.createElement(Zn,{tab:"\u8868\u5355\u914D\u7F6E",key:O?"2":"1"},m.a.createElement(Ta,null)))):m.a.createElement(e,null)}var wa=a=>{var r=a.children,i=r===void 0?[]:r,d=a.preview;return m.a.createElement(m.a.Fragment,null,i.map((u,y)=>{var v={id:u,preview:d};return m.a.createElement(An,Object(re.default)({key:y.toString()},v))}))},Pa=wa,Ba=a=>{var r=a.$id,i=a.item,d=a.labelClass,u=a.contentClass,y=a.isComplex,v=a.children,O=i.schema,R=i.data,N=G(),e=N.onItemChange,t=N.flatten,s=N.widgets,o=N.mapping,l=N.frProps,c=l===void 0?{}:l,f=c.labelWidth,b=c.displayType,g=c.showDescIcon,j=c.showValidate,S=O.type,T=O.title,w=O.description,L=O.required,P=Xn(O,o),V=O["ui:widget"];V&&s[V]&&(P=V);var W=s[P];if(!W){var ce=Object(C.a)({},O);delete ce["ui:widget"],P=Xn(ce,o),W=s[P]||"input"}var q=tt("ui:labelWidth",r,t)||f,se=Ft(q)?Number(q):lt(q)?q:110,te={width:se};P==="checkbox"?te={flexGrow:1}:(y||b==="column")&&(te={flexGrow:1});var _=B=>{var ee=Object(C.a)({},i);ee.data=B,e(r,ee,"data")},le={};P==="checkbox"&&b==="row"&&(le.marginLeft=q);var ue={disabled:O["ui:disabled"],readonly:O["ui:readonly"],hidden:O["ui:hidden"],options:O["ui:options"],labelWidth:O["ui:labelWidth"],width:O["ui:width"]};return m.a.createElement(m.a.Fragment,null,O.title?m.a.createElement("div",{className:d,style:te},m.a.createElement("label",{className:"fr-label-title ".concat(P==="checkbox"||b==="column"?"no-colon":""),title:T},L&&m.a.createElement("span",{className:"fr-label-required"}," *"),m.a.createElement("span",{className:"".concat(y?"b":""," ").concat(b==="column"?"flex-none":"")},T),w&&(g?m.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":w},m.a.createElement("i",{className:"fr-tooltip-icon"}),m.a.createElement("div",{className:"fr-tooltip-container"},m.a.createElement("i",{className:"fr-tooltip-triangle"}),w)):m.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",w,"\xA0)")),b!=="row"&&j&&m.a.createElement("span",{className:"fr-validate"},"validation"))):null,m.a.createElement("div",{className:u,style:le},m.a.createElement(W,Object(re.default)({value:R,onChange:_,schema:O},ue,{children:v}))))},kn=Ba,rr=n("iU8R"),$a=n("dhM6"),La=n("lfch"),za=n("aMZS");function Fn(a){var r=a.$id,i=a.item,d=a.inside,u=d===void 0?!1:d,y=a.children,v=a.style,O=Object(Z.useState)(),R=Object(z.default)(O,2),N=R[0],e=R[1],t=G(),s=t.flatten,o=t.onItemChange,l=t.onFlattenChange,c=t.selected,f=t.hovering,b=We(),g=i.schema,j=g.type,S=Object(Z.useRef)(null),T=Object(Bn.a)({item:{type:"box",$id:u?0+r:r},end:(ge,Ee)=>{var ze=Ee.getDropResult()},collect:ge=>({isDragging:ge.isDragging()})}),w=Object(z.default)(T,3),L=w[0].isDragging,P=w[1],V=w[2],W=Object(za.a)({accept:"box",drop:(ge,Ee)=>{var ze=Ee.didDrop();if(!ze){console.log(ge.dragItem,"tems");var oe=mn({dragId:ge.$id,dragItem:ge.dragItem,dropId:r,position:N,flatten:s}),ye=Object(z.default)(oe,2),Me=ye[0],ot=ye[1];l(Me),b({selected:ot})}},hover:(ge,Ee)=>{var ze=Ee.isOver({shallow:!0});if(ze){var oe=S.current&&S.current.getBoundingClientRect(),ye=(oe.bottom-oe.top)/2,Me=Ee.getSourceClientOffset(),ot=Me.y-oe.top;u?e("inside"):(ot<=ye&&e("up"),ot>ye&&e("down"))}},collect:ge=>({isOver:ge.isOver({shallow:!0}),canDrop:ge.canDrop()})}),ce=Object(z.default)(W,2),q=ce[0],se=q.canDrop,te=q.isOver,_=ce[1],le=se&&te;V(_(S));var ue=ge=>{ge.stopPropagation();var Ee=u?"0"+r:r;b({selected:Ee})},B=ge=>{ge.stopPropagation();var Ee=Object(C.a)({},s),ze="#";try{var oe=Ee[r].parent,ye=Ee[oe].children,Me=ye.indexOf(r);Me>0?ze=ye[Me-1]:ze=ye[1]||oe}catch(ot){console.log("catch",ot)}delete Ee[r],l(Ee),b({selected:ze})},ee=ge=>{ge.stopPropagation();var Ee=Cn(s,r),ze=Object(z.default)(Ee,2),oe=ze[0],ye=ze[1];l(oe),b({selected:ye})},de=()=>{},fe=()=>{},Ae=c===r&&!u;c&&c[0]==="0"&&(Ae=c.substring(1)===r&&u);var Ge=u?"0"+r:r,Oe={backgroundColor:f===Ge?"#ecf5ff":"#fff",opacity:L?0:1};if(u?Oe=Object(C.a)(Object(C.a)({},Oe),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):r==="#"?Oe=Object(C.a)(Object(C.a)({},Oe),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):j==="object"&&(Oe=Object(C.a)(Object(C.a)({},Oe),{},{paddingTop:12})),le&&(u?Oe=Object(C.a)(Object(C.a)({},Oe),{},{boxShadow:"0 -3px 0 red"}):N==="up"?Oe=Object(C.a)(Object(C.a)({},Oe),{},{boxShadow:"0 -3px 0 red"}):N==="down"&&(Oe=Object(C.a)(Object(C.a)({},Oe),{},{boxShadow:"0 3px 0 red"}))),Ae&&(Oe=Object(C.a)(Object(C.a)({},Oe),{},{outline:"2px solid #409eff",borderColor:"#fff"})),v&&typeof v=="object"&&(Oe=Object(C.a)(Object(C.a)({},Oe),v)),r==="#"&&u)return y;var it=g&&g.$id&&Yt(g.$id);return it==="#"&&(it=""),m.a.createElement("div",{ref:S,style:Oe,className:"field-wrapper relative w-100",onClick:ue,onMouseEnter:de,onMouseLeave:fe},!u&&Ae&&r!=="#"&&m.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:P},m.a.createElement($a.a,{style:{color:"#fff"}})),!u&&m.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},it),y,Ae&&!u&&r!=="#"&&m.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},m.a.createElement("div",{className:"pointer",onClick:B},m.a.createElement(Kn.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),m.a.createElement("div",{className:"pointer",onClick:ee},m.a.createElement(La.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var Va=a=>{var r=a.id,i=r===void 0?"#":r,d=a.preview,u=d===void 0?!1:d,y=G(),v=y.flatten,O=y.frProps,R=O===void 0?{}:O,N=R.displayType,e=R.column,t=v[i];if(!t)return null;var s=t.schema,o=s.type==="object",l=s.type==="array"&&s.enum===void 0,c=o||l,f=s["ui:width"],b="fr-field w-100 ".concat(c?"fr-field-complex":""),g="fr-label mb2",j="fr-content",S={};switch(!c&&f?S={width:f,paddingRight:"12px"}:!c&&e>1&&(S={width:"calc(100% /".concat(e,")"),paddingRight:"12px"}),s.type){case"object":s.title&&(b+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",g+=" fr-label-object bg-white absolute ph2 top-upper left-1"),b+=" fr-field-object",s.title&&(j+=" ml3");break;case"array":s.title&&!s.enum&&(g+=" mt2 mb3");break;case"boolean":s["ui:widget"]!=="switch"&&(s.title&&(g+=" ml2",g=g.replace("mb2","mb0")),j+=" flex items-center",b+=" flex items-center flex-row-reverse justify-end");break;default:N==="row"&&(g=g.replace("mb2","mb0"))}var T=s.type==="boolean"&&s["ui:widget"]!=="switch";N==="row"&&!c&&!T&&(b+=" flex items-center",g+=" flex-shrink-0 fr-label-row",g=g.replace("mb2","mb0"),j+=" flex-grow-1 relative"),N==="row"&&T&&(j+=" flex justify-end pr2");var w={$id:i,item:t,labelClass:g,contentClass:j,isComplex:c},L={children:t.children,preview:u},P=t.children&&t.children.length>0?m.a.createElement("ul",{className:"flex flex-wrap pl0"},m.a.createElement(Pa,L)):null;if(u)return m.a.createElement("div",{style:S,className:b},m.a.createElement(kn,w,(o||l)&&P));var V=Object.keys(v).length<2;return V?m.a.createElement(Fn,{style:S,$id:i,item:t},m.a.createElement("div",{className:"".concat(b," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):m.a.createElement(Fn,{style:S,$id:i,item:t},m.a.createElement("div",{className:b},m.a.createElement(kn,w,(o||l)&&m.a.createElement(Fn,{$id:i,item:t,inside:!0},P||m.a.createElement("div",{className:"h2"})))))},An=Va,Nn=X.a.TextArea;function sr(a,r){var i=a.schema,d=a.formData,u=a.onChange,y=a.onSchemaChange,v=a.setGlobal,O=a.userProps,R=O===void 0?{}:O,N=a.frProps,e=N===void 0?{}:N,t=Object($.a)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),s=M({showModal:!1,showModal2:!1,schemaForImport:""}),o=Object(z.default)(s,2),l=o[0],c=o[1],f=t.simple,b=f===void 0?!0:f,g=t.preview,j=R.transformFrom,S=R.transformTo,T=R.isNewVersion,w=R.extraButtons,L=w===void 0?[]:w,P={};i&&(P=St(i.schema,i.uiSchema));var V=Lt(P),W=vn(V,d),ce=function(ye){var Me=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",ot=bt(ye),en=$e(ye);Me==="schema"&&y&&y(ot),u(en)},q=(oe,ye,Me)=>{W[oe]=ye,ce(W,Me)},se=()=>c({showModal:!l.showModal}),te=()=>c({showModal2:!l.showModal2}),_=()=>{v({schema:{schema:{type:"object"}},formData:{},selected:void 0})},le=oe=>{c({schemaForImport:oe.target.value})},ue=()=>{try{var oe=j(nt(l.schemaForImport)),ye=!0;oe&&oe.propsSchema&&(ye=!1);var Me=jt(oe),ot=Me.schema,en=Object($.a)(Me,["schema"]);v(Ut=>({schema:{schema:ot},formData:{},selected:void 0,isNewVersion:ye,frProps:Object(C.a)(Object(C.a)({},Ut.frProps),en)}))}catch(Ut){A.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}te()},B={},ee="";try{var de=bt(W,"#",!0);e&&e.column&&(de["ui:column"]=e.column),e&&e.displayType&&(de["ui:displayType"]=e.displayType),e&&e.showDescIcon&&(de["ui:showDescIcon"]=e.showDescIcon),B=S(Object(C.a)({schema:de},e)),T||(B=Pn(B)),ee=JSON.stringify(B,null,2)}catch(oe){}var fe=()=>{ie()(ee),A.a.info("\u590D\u5236\u6210\u529F"),se()},Ae=()=>B,Ge=oe=>{try{var ye=oe.schema,Me=oe.propsSchema,ot=oe.uiSchema,en=Object($.a)(oe,["schema","propsSchema","uiSchema"]),Ut={schema:ye||Me},tn=!0;!ye&&Me&&(tn=!1),v(Pt=>Object(C.a)(Object(C.a)({},Pt),{},{schema:Ut,formData:{},selected:void 0,isNewVersion:tn,frProps:Object(C.a)(Object(C.a)({},Pt.frProps),en)}))}catch(Pt){console.error(Pt)}},Oe=()=>{ie()(ee)};Object(Z.useImperativeHandle)(r,()=>({getValue:Ae,setValue:Ge,copyValue:Oe}));var it=Object(C.a)({flatten:W,onFlattenChange:ce,onItemChange:q,userProps:R,frProps:e},t),ge=Array.isArray(L)?L:[],Ee=ge.filter(oe=>oe===!0||oe===!1),ze=ge.filter(oe=>Ye(oe)&&oe.text);return b?m.a.createElement(x.Provider,{value:v},m.a.createElement(ut.Provider,{value:it},m.a.createElement(An,{preview:!0}))):m.a.createElement(x.Provider,{value:v},m.a.createElement(ut.Provider,{value:it},m.a.createElement("div",{className:"fr-generator-container"},m.a.createElement(K,null),m.a.createElement("div",{className:"mid-layout pr2"},m.a.createElement("div",{className:"mv2 mh1"},Ee[0]!==!1&&m.a.createElement(h.a,{className:"mr2 mb1",onClick:()=>{v({preview:!g,selected:"#"})}},g?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),Ee[1]!==!1&&m.a.createElement(h.a,{className:"mr2",onClick:_},"\u6E05\u7A7A"),Ee[2]!==!1&&m.a.createElement(h.a,{className:"mr2",onClick:te},"\u5BFC\u5165"),Ee[3]!==!1&&m.a.createElement(h.a,{type:"primary",className:"mr2",onClick:se},"\u5BFC\u51FAschema"),ze.map((oe,ye)=>m.a.createElement(h.a,Object(re.default)({key:ye.toString(),className:"mr2"},oe),oe.text||oe.children))),m.a.createElement("div",{className:"dnd-container"},m.a.createElement("div",{style:{height:g?33:0}}),m.a.createElement(An,{preview:g}))),m.a.createElement(Ia,{globalProps:e}),m.a.createElement(Ot.a,{visible:l.showModal,onOk:fe,onCancel:se,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},m.a.createElement("div",{className:"mt3"},m.a.createElement(Nn,{style:{fontSize:12},value:ee,autoSize:{minRows:10,maxRows:30}}))),m.a.createElement(Ot.a,{visible:l.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:ue,onCancel:te},m.a.createElement("div",{className:"mt3"},m.a.createElement(Nn,{style:{fontSize:12},value:l.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:le,autoSize:{minRows:10,maxRows:30}}))))))}var qn=Object(Z.forwardRef)(sr);qn.defaultProps={labelWidth:120};var Tn=qn,In=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2?arguments[2]:void 0,u=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=u||y;if(v){var O=Ct(r);O.map(N=>{u&&(r.properties[N.name]=a(N.schema,r,N.name)),y&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}if(i&&i.required&&Array.isArray(i.required)){var R=i.required.indexOf(d);R>-1&&(r.required=!0,i.required.splice(R,1)),i.required.length||delete i.required}return r},_n=a=>Object(C.a)(Object(C.a)({},a),{},{schema:In(a.schema)}),Ma=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,u=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=u||y;if(v){var O=Ct(r);O.map(R=>{u&&(r.properties[R.name]=a(R.schema,r,R.name)),y&&(r.items.properties[R.name]=a(R.schema,r,R.name))})}return typeof r.required=="boolean"&&(r.required&&i&&(i.required&&Array.isArray(i.required)?i.required.push(d):i.required=[d]),delete r.required),r},ea=a=>Object(C.a)(Object(C.a)({},a),{},{schema:Ma(a.schema)}),En=n("xwS/"),ir=n("4l2o"),or=n("k/c8"),lr={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function ur(a,r){var i=a.defaultValue,d=a.templates,u=a.submit,y=a.transformer,v=a.extraButtons,O=a.settings,R=a.commonSettings,N=a.globalSettings,e=a.widgets,t=e===void 0?{}:e,s=_n,o=ea;y&&(typeof y.from=="function"&&(s=y.from),typeof y.to=="function"&&(o=y.to));var l=r||Object(Z.useRef)(),c=M({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),f=Object(z.default)(c,2),b=f[0],g=f[1];Object(Z.useEffect)(()=>{var ee=i?s(i):lr;ee&&ee.propsSchema?g({isNewVersion:!1}):g({isNewVersion:!0}),g({schema:jt(ee),formData:ee&&ee.formData||{}})},[i]);var j=b.formData,S=b.frProps,T=b.hovering,w=b.isNewVersion,L=b.preview,P=b.schema,V=b.selected,W=S.displayType,ce=W==="row",q=Object(C.a)(Object(C.a)({},S),{},{showDescIcon:ce}),se=ee=>{g({formData:ee}),a.onChange&&a.onChange(ee)},te=ee=>{var de=Object(C.a)({},P);de.schema=ee,g({schema:de}),a.onSchemaChange&&setTimeout(()=>{var fe=l.current.getValue();a.onSchemaChange(fe)},0)},_=Object(C.a)(Object(C.a)({},Yn),{},{array:"listEditor"}),le={preview:L,simple:!1,mapping:_,widgets:Object(C.a)(Object(C.a)({},Ra),t),selected:V,hovering:T},ue={templates:d,submit:u,transformFrom:s,transformTo:o,isNewVersion:w,extraButtons:v,settings:O,commonSettings:R,globalSettings:N},B=Object(C.a)(Object(C.a)({schema:P,formData:j,onChange:se,setGlobal:g,onSchemaChange:te},le),{},{userProps:ue,frProps:q});return m.a.createElement(Tn,Object(re.default)({ref:l},B))}var dr=Object(Z.forwardRef)(ur),ht=n("trko"),Ka=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=r.type==="object"&&r.properties,u=r.type==="array"&&r.items&&r.items.properties,y=d||u;if(y){var N=Ct(r);N.map(e=>{d&&(r.properties[e.name]=a(e.schema,r)),u&&(r.items.properties[e.name]=a(e.schema,r))})}else if(r.enum&&Array.isArray(r.enum)){var v=r.enum;if(Ye(v[0])&&v[0].label!==void 0&&v[0].value!==void 0){var O=v.map(e=>e.label),R=v.map(e=>e.value);r.enum=R,r.enumNames=O}}return r["x-component"]&&(r["ui:widget"]=r["x-component"]),r["x-component-props"]&&(r["ui:options"]=r["x-component-props"]),i&&r.required&&(i.required&&Array.isArray(i.required)?i.required.push(r.name):i.required=[r.name]),delete r.key,delete r.name,delete r.required,delete r["x-component"],delete r["x-component-props"],r},vt=a=>{var r=Ka(a);return{schema:r}},Wa=function a(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,u=r.type==="object"&&r.properties,y=r.type==="array"&&r.items&&r.items.properties,v=u||y;if(v){var R=Ct(r);R.map(N=>{u&&(r.properties[N.name]=a(N.schema,r,N.name)),y&&(r.items.properties[N.name]=a(N.schema,r,N.name))})}else if(r.enum&&Array.isArray(r.enum)&&r.enumNames&&Array.isArray(r.enumNames)){var O=r.enum.map((N,e)=>({value:N,label:r.enumNames[e]}));r.enum=O}return r["ui:widget"]&&(r["x-component"]=r["ui:widget"]),r["ui:options"]&&(r["x-component-props"]=r["ui:options"]),delete r["ui:widget"],delete r["ui:options"],delete r.enumNames,d&&(r.name=d,r.key=d),i&&d&&i.required&&Array.isArray(i.required)&&i.required.indexOf(d)>-1&&(r.required=!0),r},Ja=a=>{var r=a.schema;return Wa(r)},wn=(a,r)=>m.a.createElement(H.a,{backend:D.a},m.a.createElement(dr,Object(re.default)({ref:r},a))),mr=U.default=Object(Z.forwardRef)(wn)},refC:function(Ve,U,n){"use strict";n.r(U),n.d(U,"useForm",function(){return u}),n.d(U,"connectForm",function(){return y}),n.d(U,"createWidget",function(){return Jt});var re=n("Saan"),Z=n("vgIT"),m=n.n(Z),H=n("0Owb"),D=n("k1fw"),C=n("PpiC"),z=n("q1tI"),x=n.n(z),ut=n("Pv/L"),We=n("tJVT"),G=n("LvDl");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function M(e){var t=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:t.test(e)}function yt(e,t){return t?!1:e&&e.type==="boolean"&&e.widget!=="switch"}function nn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function dt(e){if(typeof e=="string"){var t=e.split(".");return t.length===1?"#":(t.pop(),t.join("."))}return"#"}function Rt(e,t){if(t==="#")return e;if(typeof t=="string")return Object(G.get)(e,t)}function Bt(e){var t,s;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,l=e.match(o);return l?(t=e.replace(o,"[]"),s=l.map(c=>Number(c.substring(1,c.length-1)))):t=e,{id:t,dataIndex:s}}function ft(e,t){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var s=e;return Array.isArray(t)&&t.forEach(o=>{s=s.replace(/\[\]/,"[".concat(o,"]"))}),nn(s)}function ct(e){return e.type==="array"&&e.items&&e.enum===void 0}function mt(e){return e.type==="object"&&e.properties}function Ot(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",s=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=h(e),c=t;l.$id||(l.$id=c);var f=[];mt(l)&&Object.entries(l.properties).forEach(g=>{var j=Object(We.default)(g,2),S=j[0],T=j[1],w=ct(T)?S+"[]":S,L=c==="#"?w:c+"."+w;f.push(L),Ot(T,L,c,o)}),ct(l)&&Object.entries(l.items.properties).forEach(g=>{var j=Object(We.default)(g,2),S=j[0],T=j[1],w=ct(T)?S+"[]":S,L=c==="#"?w:c+"."+w;f.push(L),Ot(T,L,c,o)});var b=Array.isArray(l.rules)?[...l.rules]:[];return["boolean","function","string"].indexOf(typeof l.required)>-1&&b.push({required:l.required}),l.type&&(o[c]={parent:s,schema:l,children:f,rules:b}),o}function k(e,t){return e.indexOf(t)>-1}var E=e=>k(Object.prototype.toString.call(e),"Object"),h=G.cloneDeep;function I(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function p(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function A(e,t){if(e===void 0&&t===void 0)return!0;if(e===void 0||t===void 0)return!1;if(e===null&&t===null)return!0;if(e===null||t===null)return!1;if(e.constructor!==t.constructor)return!1;if(e.constructor===Array){if(e.length!==t.length)return!1;for(var s=0;s<e.length;s++)if(e[s].constructor===Array||e[s].constructor===Object){if(!A(e[s],t[s]))return!1}else if(e[s]!==t[s])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var l=Object.keys(e)[o];if(e[l]&&typeof e[l]!="number"&&(e[l].constructor===Array||e[l].constructor===Object)){if(!A(e[l],t[l]))return!1}else if(e[l]!==t[l])return!1}}else if(e.constructor===String||e.constructor===Number)return e===t;return!0}function $(e){var t;switch(e){case"date":t="YYYY-MM-DD";break;case"time":t="HH:mm:ss";break;default:t="YYYY-MM-DD HH:mm:ss"}return t}function J(e){return e.find((t,s,o)=>s!==o.findIndex(l=>JSON.stringify(t)===JSON.stringify(l)))}function Q(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=ne(e),o=s.map(f=>{var b=f.name,g=f.schema,j=g.type,S=g.enum,T=g.properties,w=g.items,L=j==="object"&&T,P=j==="array"&&w&&!S,V=b&&t[f.name];if(!V)return f;if(P){var W=Q(w,V.items||{});return Object(D.a)(Object(D.a)({},f),{},{schema:Object(D.a)(Object(D.a)(Object(D.a)({},f.schema),V),{},{items:W})})}if(L){var ce=Q(f.schema,V);return Object(D.a)(Object(D.a)({},f),{},{schema:ce})}return Object(D.a)(Object(D.a)({},f),{},{schema:Object(D.a)(Object(D.a)({},f.schema),V)})}),l={};o.forEach(f=>{l[f.name]=f.schema});var c={};return Object.keys(t).forEach(f=>{typeof f=="string"&&f.substring(0,3)==="ui:"&&(c[f]=t[f])}),X(l)?Object(D.a)(Object(D.a)({},e),c):Object(D.a)(Object(D.a)(Object(D.a)({},e),c),{},{properties:l})}function X(e){return Object.keys(e).length===0}function ne(e){if(!e)return[];var t=e.properties,s=e.items,o=e.type;if(!t&&!s)return[];var l={};return o==="object"&&(l=t),o==="array"&&(l=s),Object.keys(l).map(c=>({schema:l[c],name:c}))}function ie(){}var pe=e=>Function('"use strict";return ('+e+")")(),xe=(e,t,s)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(s),`;
    const formData = `).concat(JSON.stringify(t),`;
    return (`).concat(e,")"))();function me(e){if(typeof e!="string")return!1;var t=/^{{(.+)}}$/,s=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(t)&&!e.match(s)&&!e.match(o))}function De(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,o=dt(s),l=Rt(t,o)||{};if(typeof e=="string"){var c=e.substring(2,e.length-2),f=/formData.([a-zA-Z0-9.$_\[\]]+)/g,b=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,g=`
    return (`.concat(c.replaceAll(f,(j,S)=>JSON.stringify(Rt(t,S))).replaceAll(b,(j,S)=>JSON.stringify(Rt(l,S))),")");console.log(g,l,t);try{return Function(g)()}catch(j){return e}}else return e}var Se=e=>Object.keys(e).some(t=>{var s=e[t];return typeof s=="string"?me(s):E(s)?Se(s):!1}),Ne=(e,t,s)=>{var o=h(e);return Object.keys(o).forEach(l=>{var c=o[l];if(me(c)&&(o[l]=De(c,t,s)),typeof l=="string"&&l.toLowerCase().indexOf("props")>-1){var f=o[l];E(f)&&Object.keys(f).forEach(b=>{o[l][b]=De(f[b],t,s)})}}),o};function Te(e){return Object.keys(e).some(t=>typeof e[t]=="function"?!0:typeof e[t]=="string"?me(e[t]):typeof e[t]=="object"?Te(e[t]):!1)}var Ke=(e,t,s)=>{try{var o=s[t];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var l=s[o.parent].schema;return l[e]!==void 0?l[e]:Ke(e,o.parent,s)}}catch(c){return}},Re=()=>{var e=localStorage.getItem("SAVES");if(e)try{var t=JSON.parse(e),s=t.length;if(s)return s+1}catch(o){return 1}else return 1};function he(e){return Function('"use strict";return ('+e+")")()}function Qe(e){if(!e)return[];var t=e.properties,s=e.items,o=e.type;if(!t&&!s)return[];var l={};return o==="object"&&(l=t),o==="array"&&(l=s.properties),Object.keys(l).map(c=>({schema:l[c],name:c}))}var _e=e=>{if(e&&e.propsSchema){var t=e.propsSchema,s=Object(C.a)(e,["propsSchema"]);return Object(D.a)({schema:t},s)}return e},Be=e=>{if(e&&e.schema){var t=e.schema,s=Object(C.a)(e,["schema"]);return Object(D.a)({propsSchema:t},s)}return e},Ye=e=>{if(!!e){var t=e&&e.items&&e.items.enum,s=e&&e.enum;return t||s}},rt=function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(t)?t:s},Ft=e=>{var t="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(t).test(e))};function lt(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&e in t.target?t.target[e]:t}var Et=e=>{try{var t=e.split("."),s=t.slice(-1)[0];return s}catch(o){return console.error(o,"getKeyFromPath"),""}},an=(e,t)=>{if(typeof e=="boolean")return e?"yes":"no";if(mt(t)||ct(t))return"-";if(Array.isArray(t.enum)&&Array.isArray(t.enumNames))try{return t.enumNames[t.enum.indexOf(e)]}catch(s){return e}return e},$t=e=>{var t={};return E(e)?Object.keys(e).forEach(s=>{t[s]=$t(e[s])}):Array.isArray(e)?t=e.filter(s=>!!(s&&JSON.stringify(s)!=="{}")):t=e,t},St=e=>{var t=e.schema,s=e.isRequired,o=s===void 0?!0:s,l={};if(mt(t))l.type="object",o&&t.required===!0&&(l.required=!0),l.fields={},Object.keys(t.properties).forEach(j=>{var S=t.properties[j];Array.isArray(t.required)&&t.required.indexOf(j)>-1&&(S.required=!0),l.fields[j]=St({schema:S,isRequired:o})});else if(ct(t))l.type="array",o&&t.required===!0&&(l.required=!0),l.defaultField={type:"object",fields:{}},Object.keys(t.items.properties).forEach(j=>{var S=t.items.properties[j];Array.isArray(t.required)&&t.required.indexOf(j)>-1&&(S.required=!0),l.defaultField.fields[j]=St({schema:S,isRequired:o})});else{var c=j=>t.type?Object(D.a)(Object(D.a)({},j),{},{type:t.type}):j.pattern&&typeof j.pattern=="string"?Object(D.a)(Object(D.a)({},j),{},{pattern:new RegExp(j.pattern)}):j,f=t.required,b=Object(C.a)(t,["required"]);if(o&&t.required===!0&&(b.required=!0),t.rules)if(Array.isArray(t.rules)){var g=t.rules.map(j=>c(j));l=[b,...g]}else E(t.rules)?l=[b,c(t.rules)]:l=b;else l=b;switch(t.type){case"range":l.type="array";break;default:break}switch(t.format){case"email":case"url":l.type=t.format;break;case"image":break;default:break}}return l},At=e=>{var t=e.split(".");return t.map(s=>isNaN(Number(s))?s:"[".concat(s,"]")).reduce((s,o)=>o[0]==="["||s===""?s+o:s+"."+o,"")},rn=(e,t)=>{for(var s=e.split(".");s.length>0;){var o=s,l=Object(ut.a)(o),c=l[0],f=l.slice(1);c=c.split("[")[0];var b=void 0;return mt(t)?b=t.properties[c]:ct(t)&&(b=t.items.properties[c]),s=f,b?rn(f.join("."),b):!!t.required}},Ht=e=>{var t={};return mt(e)?Object.keys(e.properties).forEach(s=>{var o=e.properties[s],l=Ht(o);t[s]=l}):e.default!==void 0?t=e.default:e.type==="boolean"?t=!1:t=void 0,t},dn=(e,t)=>{if(typeof e!="string")return"";if(!t)return e;if(e=e.replace("${title}",t.title),e=e.replace("${type}",t.format||t.type),t.min&&(e=e.replace("${min}",t.min)),t.max&&(e=e.replace("${max}",t.max)),t.rules){var s=t.rules.find(f=>f.min!==void 0);s&&(e=e.replace("${min}",s.min));var o=t.rules.find(f=>f.max!==void 0);o&&(e=e.replace("${max}",o.max));var l=t.rules.find(f=>f.len!==void 0);l&&(e=e.replace("${len}",l.len));var c=t.rules.find(f=>f.pattern!==void 0);c&&(e=e.replace("${pattern}",c.pattern))}return e},Nt=(e,t)=>{var s=h(e);if(s=t(s),mt(s)){var o=[];Array.isArray(s.required)&&(o=s.required,delete s.required),Object.keys(s.properties).forEach(l=>{var c=s.properties[l];o.indexOf(l)>-1&&(c.required=!0),s.properties[l]=Nt(c,t)})}else ct(s)&&Object.keys(s.items.properties).forEach(l=>{var c=s.items.properties[l];s.items.properties[l]=Nt(c,t)});return s},Gt=e=>Nt(e,Qt),Qt=e=>{try{var t=h(e);if(t.rules=[],t.props=t.props||{},t["ui:options"]&&(t.props=t["ui:options"],delete t["ui:options"]),t.pattern){var s={pattern:t.pattern};t.message&&t.message.pattern&&(s.message=t.message.pattern),t.rules.push(s),delete t.pattern,delete t.message}return t.minLength&&(t.rules.push({min:t.minLength}),delete t.minLength),t.maxLength&&(t.rules.push({max:t.maxLength}),t.props.maxLength=t.maxLength,delete t.maxLength),t.min&&(t.rules.push({min:t.min}),t.props.min=t.min,delete t.min),t.max&&(t.rules.push({max:t.max}),t.props.max=t.max,delete t.max),t.step&&(t.props.step=t.step,delete t.step),t.minItems&&(t.props.minItems=t.minItems,delete t.minItems),t.maxItems&&(t.props.maxItems=t.maxItems,delete t.maxItems),t["ui:className"]&&(t.className=t["ui:className"],delete t["ui:className"]),t["ui:hidden"]&&(t.hidden=t["ui:hidden"],delete t["ui:hidden"]),t["ui:readonly"]&&(t.readOnly=t["ui:readonly"],delete t["ui:readonly"]),t["ui:disabled"]&&(t.disabled=t["ui:disabled"],delete t["ui:disabled"]),t["ui:width"]&&(t.width=t["ui:width"],delete t["ui:width"]),t["ui:labelWidth"]&&(t.labelWidth=t["ui:labelWidth"],delete t["ui:labelWidth"]),t.rules&&t.rules.length===0&&delete t.rules,t}catch(o){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",o),e}},Lt=(e,t)=>{var s=parseRootValue(e),o=replaceParseValue(s)},Yt=e=>{if(typeof e!="string")return!1;var t=/^{{(function.+)}}$/,s=/^{{(.+=>.+)}}$/;return e.match(t)?e.match(t)[1]:e.match(s)?e.match(s)[1]:!1},cn=function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return E(t)?(t.theme&&s[t.theme]&&(o=Object(D.a)(Object(D.a)({},t),s[t.theme])),Object.keys(t).forEach(l=>{o[l]=e(t[l],s)})):o=t,o},Sn=n("zmYW"),bt=n("DtFj"),sn=n.n(bt),Cn=n("dc+4"),gn=n("Btem"),zt=n.n(gn),mn=n("lfLe"),vn=n("Cp9S"),be=n.n(vn),$e=n("MaXC"),tt=n("4IMT"),nt=n.n(tt),Ct=Object(z.createContext)(()=>{}),on=Object(z.createContext)({}),ln=()=>Object(z.useContext)(Ct),Tt=()=>Object(z.useContext)(on),Vt=e=>Object(z.useReducer)((t,s)=>Object(D.a)(Object(D.a)({},t),s),e);function Mt(e,t,s){var o=Object(z.useRef)();Object(z.useEffect)(()=>{o.current=e},[e]);var l=Object(z.useRef)();return Object(z.useEffect)(()=>{if(!s)return;function c(){o&&o.current&&o.current()}if(c(),t!==null)return l.current=setInterval(c,t),()=>clearInterval(l.current)},[t,s]),()=>clearInterval(l.current)}function Kt(e){var t=Object(z.useRef)();return Object(z.useEffect)(()=>{t.current=e},[e]),t.current}var jt=e=>{var t=Object(z.useState)(!1),s=Object(We.default)(t,2),o=s[0],l=s[1],c;try{c=localStorage.getItem(e)}catch(f){}return c||(l(!0),localStorage.setItem(e,JSON.stringify(!0))),o},Pn=()=>{var e=Object(z.useState)(!1),t=Object(We.default)(e,2),s=t[0],o=t[1],l=()=>o(!s);return[s,l]},Bn=e=>{var t=Object(z.useState)(e),s=Object(We.default)(t,2),o=s[0],l=s[1];return[o,l]},Ha=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var j=localStorage.getItem(s);if(j)try{return JSON.parse(j)}catch(S){return t}return t},l=Object(z.useState)(o()),c=Object(We.default)(l,2),f=c[0],b=c[1],g=j=>{b(j),localStorage.setItem(s,JSON.stringify(j))};return[f,g]};function $n(e){var t=e.height,s=e.width,o=e.onClick;return x.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||t||256,height:t||s||256,onClick:o},x.a.createElement("path",{d:"M755.2 375.637333a42.666667 42.666667 0 0 0 0.554667-60.330666l-213.333334-217.173334a42.666667 42.666667 0 0 0-60.842666 0l-213.333334 217.173334a42.666667 42.666667 0 1 0 60.842667 59.818666L469.333333 232.32V896a42.666667 42.666667 0 1 0 85.333334 0V232.32l140.245333 142.805333a42.666667 42.666667 0 0 0 60.330667 0.512z",fill:"#1890ff"}))}function Ln(e){var t=e.height,s=e.width,o=e.onClick;return x.a.createElement("svg",{className:"fr-arrow-icon",viewBox:"0 0 1024 1024",width:s||t||256,height:t||s||256,onClick:o},x.a.createElement("path",{d:"M755.2 648.362667a42.666667 42.666667 0 0 1 0.554667 60.330666l-213.333334 217.173334a42.666667 42.666667 0 0 1-60.842666 0l-213.333334-217.173334a42.666667 42.666667 0 0 1 60.842667-59.818666L469.333333 791.68V128a42.666667 42.666667 0 1 1 85.333334 0v663.68l140.245333-142.805333a42.666667 42.666667 0 0 1 60.330667-0.512z",fill:"#1890ff"}))}var zn=n("Oxum"),F=e=>{var t=e.message,s=e.schema,o=e.hideValidation,l="";return typeof t=="string"&&(l=t),Array.isArray(t)&&(l=t[0]||""),l=dn(l,s),!l&&o?null:x.a.createElement("div",{className:"error-message"},l)},K=F,ae=n("wlus"),ve=120,je=e=>{var t=e.parentId,s=e.dataIndex,o=s===void 0?[]:s,l=e.children,c=l===void 0?[]:l,f=e.errorFields,b=Tt(),g=b.formData,j=b.flatten,S=b.onItemChange,T=b.removeErrorField,w="list";try{w=j[t].schema.widget}catch(_){}var L=ft(t,o),P;typeof L=="string"&&(P=Object(G.get)(g,L));var V=Array.isArray(P)?P:[],W=()=>{var _=[...V,void 0],le=_.length-1;return S(L,_),le},ce=_=>{var le=V.filter((ue,B)=>B!==_);S(L,le),T("".concat(L,"[").concat(_,"]"))},q=_=>{if(_!==0){var le=V[_],ue=V[_-1],B=V;B[_]=ue,B[_-1]=le,S(L,B)}},se=_=>{if(!(_>=V.length-1)){var le=V[_],ue=V[_+1],B=V;B[_]=ue,B[_+1]=le,S(L,B)}},te={displayList:V,dataPath:L,dataIndex:o,children:c,deleteItem:ce,addItem:W,moveItemDown:se,moveItemUp:q,listData:P,flatten:j,errorFields:f};switch(w){case"list1":return x.a.createElement(Ie,te);case"list2":return x.a.createElement(Je,te);case"list3":return x.a.createElement(Pe,te);default:return x.a.createElement(Pe,te)}},Ce=je,Ie=e=>{var t=e.displayList,s=t===void 0?[]:t,o=e.dataIndex,l=e.children,c=e.deleteItem,f=e.addItem,b={schema:{type:"object",properties:{}},rules:[],children:l};return x.a.createElement("div",null,s.map((g,j)=>x.a.createElement("div",{key:j,style:{display:"flex",alignItems:"center"}},x.a.createElement(En,{displayType:"inline",_item:b,dataIndex:[...o,j]}),x.a.createElement(ae.a,{style:{fontSize:16,marginLeft:8,marginBottom:12},onClick:()=>c(j)}))),x.a.createElement(nt.a,{style:{marginTop:s.length>0?0:8},type:"dashed",onClick:f},"\u65B0\u589E\u4E00\u6761"))},Pe=e=>{var t=e.displayList,s=t===void 0?[]:t,o=e.dataPath,l=e.dataIndex,c=e.children,f=e.deleteItem,b=e.addItem,g=e.moveItemDown,j=e.moveItemUp,S=e.flatten,T=e.errorFields,w=Vt({showDrawer:!1,currentIndex:-1}),L=Object(We.default)(w,2),P=L[0],V=L[1],W={schema:{type:"object",properties:{}},rules:[],children:c},ce=P.showDrawer,q=P.currentIndex,se=s.map((B,ee)=>Object(D.a)(Object(D.a)({},B),{},{$idx:ee})),te=c.map(B=>{var ee=S[B],de=ee&&ee.schema||{},fe=Et(B);return{dataIndex:fe,title:de.title,width:ve,render:(Ae,Ge)=>{var Oe=ft(B,[Ge.$idx]),it=T.find(ge=>ge.name==Oe)||{};return x.a.createElement("div",null,x.a.createElement("div",null,an(Ae,de)),it.error&&x.a.createElement(K,{message:it.error,schema:de}))}}});te.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(B,ee,de)=>{var fe=B&&B.$idx||0;return x.a.createElement(be.a,null,x.a.createElement("a",{onClick:()=>_(fe)},"\u7F16\u8F91"),x.a.createElement("a",{onClick:()=>f(fe)},"\u5220\u9664"))}});var _=B=>{V({showDrawer:!0,currentIndex:B})},le=()=>{V({showDrawer:!1,currentIndex:-1})},ue=()=>{var B=b();_(B)};return x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"w-100 mb2 tr"},x.a.createElement(nt.a,{type:"primary",size:"small",onClick:ue},"\u65B0\u589E")),x.a.createElement(zt.a,{width:"500",title:"\u7F16\u8F91",placement:"right",onClose:le,visible:ce},x.a.createElement("div",{className:"fr-container"},x.a.createElement(En,{_item:W,dataIndex:[...l,q]}))),x.a.createElement(sn.a,{scroll:{x:"max-content"},columns:te,dataSource:se,rowClassName:(B,ee)=>{var de=B&&B.$idx,fe=T.find(Ae=>Ae.name.indexOf("".concat(o,"[").concat(de,"]"))>-1);return fe?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Je=e=>{var t=e.displayList,s=t===void 0?[]:t,o=e.dataIndex,l=e.children,c=e.deleteItem,f=e.addItem,b=e.flatten,g=s.map((S,T)=>({index:T})),j=l.map(S=>{var T=b[S],w=T&&T.schema||{};return{dataIndex:S,title:w.title,width:ve,render:(L,P,V)=>{var W=[...o,P.index];return x.a.createElement(En,{hideTitle:!0,displayType:"inline",key:V.toString(),id:S,dataIndex:W})}}});return j.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(S,T,w)=>x.a.createElement("a",{onClick:()=>c(w)},"\u5220\u9664")}),x.a.createElement(x.a.Fragment,null,x.a.createElement("div",{className:"w-100 mb2 tr"},x.a.createElement(nt.a,{type:"primary",size:"small",onClick:f},"\u65B0\u589E")),x.a.createElement(sn.a,{scroll:{x:"max-content"},columns:j,dataSource:g,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Xe=e=>{var t=e.children,s=t===void 0?[]:t,o=e.dataIndex,l=o===void 0?[]:o,c=e.displayType;return x.a.createElement(x.a.Fragment,null,s.map((f,b)=>{var g={displayType:c,id:f,dataIndex:l};return x.a.createElement(En,Object(H.default)({key:b.toString()},g))}))},xt=Xe;function Ze(e,t,s){var o=this,l=Object(z.useRef)(null),c=Object(z.useRef)(0),f=Object(z.useRef)(null),b=Object(z.useRef)([]),g=Object(z.useRef)(),j=Object(z.useRef)(),S=Object(z.useRef)(e),T=Object(z.useRef)(!0);S.current=e;var w=!t&&t!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");t=+t||0,s=s||{};var L=!!s.leading,P="trailing"in s?!!s.trailing:!0,V="maxWait"in s,W=V?Math.max(+s.maxWait||0,t):null;Object(z.useEffect)(()=>(T.current=!0,()=>{T.current=!1}),[]);var ce=Object(z.useMemo)(()=>{var q=B=>{var ee=b.current,de=g.current;return b.current=g.current=null,c.current=B,j.current=S.current.apply(de,ee)},se=(B,ee)=>{w&&cancelAnimationFrame(f.current),f.current=w?requestAnimationFrame(B):setTimeout(B,ee)},te=B=>{if(!T.current)return!1;var ee=B-l.current,de=B-c.current;return!l.current||ee>=t||ee<0||V&&de>=W},_=B=>(f.current=null,P&&b.current?q(B):(b.current=g.current=null,j.current)),le=()=>{var B=Date.now();if(te(B))return _(B);if(!!T.current){var ee=B-l.current,de=B-c.current,fe=t-ee,Ae=V?Math.min(fe,W-de):fe;se(le,Ae)}},ue=function(){for(var ee=Date.now(),de=te(ee),fe=arguments.length,Ae=new Array(fe),Ge=0;Ge<fe;Ge++)Ae[Ge]=arguments[Ge];if(b.current=Ae,g.current=o,l.current=ee,de){if(!f.current&&T.current)return c.current=l.current,se(le,t),L?q(l.current):j.current;if(V)return se(le,t),q(l.current)}return f.current||se(le,t),j.current};return ue.cancel=()=>{f.current&&(w?cancelAnimationFrame(f.current):clearTimeout(f.current)),c.current=0,b.current=l.current=g.current=f.current=null},ue.isPending=()=>!!f.current,ue.flush=()=>f.current?_(Date.now()):j.current,ue},[L,V,t,W,P,w]);return ce}var Xt=Ze,It=e=>{var t=e.labelClass,s=e.labelStyle,o=e.schema,l=e.displayType,c=Tt(),f=c.displayType,b=c.readOnly,g=o.title,j=o.description,S=o.required,T=o.type,w=T==="object",L=o.displayType||l||f||"column";return x.a.createElement("div",{className:t,style:s},x.a.createElement("label",{className:"fr-label-title ".concat(yt(o,b)||L==="column"?"no-colon":""),title:g},S===!0&&x.a.createElement("span",{className:"fr-label-required"}," *"),x.a.createElement("span",{className:"".concat(w?"b":""," ").concat(L==="column"?"flex-none":"")},g),j&&(L==="row"?x.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":j},x.a.createElement("i",{className:"fr-tooltip-icon"}),x.a.createElement("div",{className:"fr-tooltip-container"},x.a.createElement("i",{className:"fr-tooltip-triangle"}),j)):L==="inline"?null:x.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",j,"\xA0)"))))},Zt=It,wt={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:date":"date","string:url":"url","string:dateTime":"date","string:time":"date","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"dateRange","range:date":"dateRange","range:dateTime":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function kt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wt,s=e.type,o=e.format,l=e.enum,c=e.readOnly,f=[];c&&(f.push("".concat(s,"?readOnly")),f.push("*?readOnly")),l&&(Array.isArray(l)&&l.length>2?(f.push("".concat(s,"?enum_long")),f.push("*?enum_long")):(f.push("".concat(s,"?enum")),f.push("*?enum"))),o&&f.push("".concat(s,":").concat(o)),f.push(s);var b="";return f.some(g=>(b=t[g],!!b)),b}var qt={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},Le=n("6UYH"),pt=n("fTA7"),at=n.n(pt),Ue=n("pJsf"),ke=n("g4D/"),st=n.n(ke),un=n("bd+v"),Dt=n("LB4q"),Wt=n.n(Dt),He=n("Hjg5"),qe=n("rmht"),Fe=n.n(qe),et=n("LGkk"),yn=n("rVaU"),fn=n.n(yn),_t=n("b+Mx"),bn=n("5Dct"),pn=n.n(bn),jn=n("cUip"),xn=n("iJl9"),hn=n.n(xn),Jt=(e,t)=>s=>o=>{var l=o.schema,c=Object(C.a)(o,["schema"]),f=Object(D.a)(Object(D.a)({},l),t),b=typeof e=="function"?e(Object(D.a)({schema:f},c)):{},g=Object(D.a)(Object(D.a)({schema:f},c),b),j=Vn(g);return x.a.createElement(s,j)},Vn=e=>{var t=e.onChange,s=e.value,o=e.defaultValue,l=e.schema,c=Object(C.a)(e,["onChange","value","defaultValue","schema"]),f=Object(D.a)({},l),b=f||{},g=b.trigger,j=b.valuePropName,S={},T="value",w=s===void 0?o:s;j&&typeof j=="string"?(T=j,S[j]=w):S.value=w;var L=function(){for(var ce=arguments.length,q=new Array(ce),se=0;se<ce;se++)q[se]=arguments[se];var te=lt(T,...q);t(te)};g&&typeof g=="string"?S[g]=L:S.onChange=L;var P={disabled:f.disabled||f["ui:disabled"],readOnly:f.readOnly||f["ui:readonly"],hidden:f.hidden||f["ui:hidden"]},V=Object(D.a)(Object(D.a)(Object(D.a)({},S),{},{schema:f},P),c);return V},ta=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var c=t||{},f=c.enum,b=c.enumNames;l=rt(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",marginTop:5},s)}},Mn=Jt(ta)(st.a.Group),On=Mn,na=n("ypy7"),Kn=n.n(na),Ga=n("rNQX");function aa(e){var t=e.schema.format,s=l=>{e.disabled||e.readonly||e.onChange(l.color)},o=l=>{e.onChange(l.target.value)};return x.a.createElement("div",{className:"fr-color-picker"},x.a.createElement(Kn.a,{type:t,animation:"slide-up",color:e.value||"#ffffff",onChange:s}),e.readonly?x.a.createElement("span",null,e.value||"#ffffff"):x.a.createElement(hn.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var Qa=n("GBD3"),Ya=n("wXtC"),Wn=n.n(Ya),ra=n("mxgt"),sa=n("4ZwL"),Jn=n.n(sa),Xa=n("wd/R"),Dn=n.n(Xa),Rn=e=>{var t=e.schema.format,s=t===void 0?"dateTime":t;e.options&&e.options.format&&(s=e.options.format);var o=s==="time"?Jn.a:Wn.a,l=$(s),c=e.value||"";typeof c=="string"&&(s==="week"&&(c=c.substring(0,c.length-1)),s==="quarter"&&(c=c.replace("Q",""))),c&&(c=Dn()(c,l));var f=e.description?{placeholder:e.description}:{},b=(j,S)=>e.onChange(S),g=Object(D.a)(Object(D.a)(Object(D.a)({},f),e.options),{},{value:c,style:{width:"100%"},disabled:e.disabled||e.readOnly,onChange:b});return s==="dateTime"&&(g.showTime=!0),["week","month","quarter","year"].indexOf(s)>-1&&(g.picker=s),x.a.createElement(o,g)},ia=Wn.a.RangePicker,oa=Jn.a.RangePicker;function Za(e){var t=e&&e.schema,s=t.format,o=s===void 0?"dateTime":s,l=(b,g)=>e.onChange(g),c=o==="time"?oa:ia,f=Object(D.a)(Object(D.a)({},e),{},{onChange:l,RangeComponent:c});return x.a.createElement(la,f)}var la=e=>{var t=e.onChange,s=e.RangeComponent,o=e.value,l=e.schema,c=l===void 0?{}:l,f=e.options,b=e.disabled,g=e.readOnly,j=c.format,S=j===void 0?"dateTime":j;f&&f.format&&(S=f.format);var T=$(S),w=Array.isArray(o)?o:[],L=Object(We.default)(w,2),P=L[0],V=L[1];typeof P=="string"&&typeof V=="string"&&(S==="week"&&(P=P.substring(0,P.length-1),V=V.substring(0,V.length-1)),S==="quarter"&&(P=P.replace("Q",""),V=V.replace("Q","")));var W=P&&V?[Dn()(P,T),Dn()(V,T)]:[],ce=Object(D.a)(Object(D.a)({},f),{},{value:W,style:{width:"100%"},showTime:S==="dateTime",disabled:b||g,onChange:t});return["week","month","quarter","year"].indexOf(S)>-1&&(ce.picker=S),x.a.createElement(s,ce)};function ua(e){var t=e.children;return x.a.createElement("div",{className:"w-100"},t)}var ka=n("7LYo"),da=n("5GXF"),Un=n.n(da),ca=Un.a.Panel;function qa(e){var t=e.children,s=e.title,o=Object(C.a)(e,["children","title"]),l=Tt(),c=l.theme,f=l.displayType;return s?c=="1"?x.a.createElement("div",{className:"w-100"},x.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},s),x.a.createElement("div",{style:{marginLeft:f=="row"?0:12}},t)):x.a.createElement("div",{className:"w-100"},x.a.createElement(Un.a,{defaultActiveKey:["1"]},x.a.createElement(ca,{header:x.a.createElement("div",{style:{fontSize:16,fontWeight:500}},s),key:"1",className:"fr-collapse-object"},t))):x.a.createElement("div",{className:"w-100"},t)}var _a=n("ek7I"),Hn=n("FAat"),Gn=n.n(Hn),ma=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var c=t||{},f=c.enum,b=c.enumNames;l=rt(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%"},s)}},er=Jt(ma)(Gn.a),va=er,tr=n("7kJ1"),fa=n("qPIi"),pa=n.n(fa),ha=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var c=t||{},f=c.enum,b=c.enumNames;l=rt(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,mode:"multiple",style:Object(D.a)({width:"100%",minWidth:120,marginTop:5},s)}},nr=Jt(ha)(pa.a.Group),ga=nr,ya=e=>{var t=e.schema,s=e.style,o=e.options,l;if(o&&Array.isArray(o))l=o;else{var c=t||{},f=c.enum,b=c.enumNames;l=rt(f).map((g,j)=>{var S=b&&Array.isArray(b)?b[j]:g,T=typeof S=="string"&&S[0]==="<";return T&&(S=x.a.createElement("span",{dangerouslySetInnerHTML:{__html:S}})),{label:S,value:g}})}return{options:l,style:Object(D.a)({width:"100%",minWidth:120},s)}},ba=Jt(ya)(Gn.a),ja=ba,cr=n("tCGa"),xa=n("DH6M"),Oa=n.n(xa),Ea=e=>{var t=e.schema,s=t.max,o=t.min,l=t.step,c={};(s||s===0)&&(c={max:s}),(o||o===0)&&(c=Object(D.a)(Object(D.a)({},c),{},{min:o})),l&&(c=Object(D.a)(Object(D.a)({},c),{},{step:l}));var f=!1;e.options&&e.options.hideNumber&&(f=!0);var b=e.readonly?x.a.createElement("span",{style:{width:"90px"}},e.value===""?"-":e.value):x.a.createElement(pn.a,Object(H.default)({},e.options,c,{style:{width:"90px"},value:e.value,disabled:e.disabled,onChange:e.onChange}));return x.a.createElement("div",{className:"fr-slider"},x.a.createElement(Oa.a,Object(H.default)({style:{flexGrow:1,marginRight:f?0:12}},c,{onChange:e.onChange,value:typeof e.value=="number"?e.value:o||0,disabled:e.disabled||e.readonly})),f?null:b)},Sa=Ea,ar=n("VDQ/"),Ca=n("B8+X"),Da=n.n(Ca),Ra=n("tL+A"),Fa=n("QpBz"),Qn=n.n(Fa),Aa=n("z7Xi");function Yn(e){var t=e.action,s=e.value,o=e.onChange,l=e.uploadProps,c=e.buttonProps,f=Object(D.a)({name:"file",type:"file",action:t,onChange(j){j.file.status==="done"?(Qn.a.success("".concat(j.file.name," \u4E0A\u4F20\u6210\u529F")),o(j.file.response.url)):j.file.status==="error"&&Qn.a.error("".concat(j.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},l),b={icon:x.a.createElement(Aa.a,null),children:"\u4E0A\u4F20"},g=Object(D.a)(Object(D.a)({},b),c);return x.a.createElement("div",{className:"fr-upload-mod"},x.a.createElement(Da.a,Object(H.default)({},f,{className:"fr-upload-file"}),x.a.createElement(nt.a,g)),s&&x.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var Xn=n("/xgg"),Na=n("aOJk"),Ta=n.n(Na),Zn=n("mpQp"),Ia="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",wa=e=>{var t=e.value;return x.a.createElement(Ta.a,{content:x.a.createElement("img",{src:t||Ia,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},x.a.createElement(Zn.a,null))};function Pa(e){var t=e.value,s=Object(C.a)(e,["value"]);return x.a.createElement(hn.a,Object(H.default)({value:t,addonAfter:x.a.createElement(wa,{value:t})},s))}var Ba=e=>{var t=e.value,s=M(t);return s?x.a.createElement("a",{target:"_blank",href:t},"\u6D4B\u8BD5\u94FE\u63A5"):x.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function kn(e){var t=e.value,s=Object(C.a)(e,["value"]);return x.a.createElement(hn.a,Object(H.default)({value:t,addonAfter:x.a.createElement(Ba,{value:t})},s))}function rr(e){var t=e.value,s=e.schema,o="-";if(s.type==="boolean")o=t===!0?"\u2714":"\u2718";else if(Array.isArray(s.enum)&&Array.isArray(s.enumNames)){var l=s.enum.indexOf(t);o=s.enumNames[l]||"-"}else typeof t=="number"?o=String(t):typeof t=="string"&&(o=t);return x.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var $a=hn.a.TextArea,La=Jt(e=>{var t=e.style;return{style:Object(D.a)({width:"100%"},t)}})(pn.a),za=Jt(e=>{var t=e.style;return{style:Object(D.a)({marginTop:5},t)}})(fn.a),Fn=Jt(e=>{var t=e.autoSize;return{autoSize:t||{minRows:3}}})($a),Va=e=>{var t=e.style,s=Object(C.a)(e,["style"]);return x.a.createElement(Fe.a,Object(H.default)({style:Object(D.a)({width:"100%"},t)},s))},An=e=>{var t=e.style,s=Object(C.a)(e,["style"]);return x.a.createElement(Wt.a,Object(H.default)({style:Object(D.a)({width:"100%"},t)},s))},Nn={input:hn.a,checkbox:st.a,checkboxes:On,color:aa,date:Rn,dateRange:Za,imageInput:Pa,url:kn,list:ua,map:qa,multiSelect:va,number:La,radio:ga,select:ja,slider:Sa,switch:za,textarea:Fn,upload:Yn,html:rr,rate:at.a,treeSelect:Va,cascader:An},sr=Object.keys(Nn),qn=e=>{var t=e.schema,s=e.onChange,o=e.value,l=e.children,c=e.onItemChange,f=e.formData,b=e.getValue,g=e.readOnly,j=e.dataPath,S=e.dataIndex,T=ln(),w=T.widgets,L=T.mapping,P=kt(t,L);g&&["object","array"].indexOf(t.type)===-1&&(P="html");var V=w[P],W=t.widget||t["ui:widget"];W&&w[W]&&(V=w[W],P=W);var ce=qt[P],q=Object(D.a)({schema:Object(D.a)(Object(D.a)({},t),ce),onChange:s,value:o,children:l},t.props);["title","placeholder","disabled"].forEach(te=>{t[te]&&(q[te]=t[te])}),t.default!==void 0&&(q.defaultValue=t.default),t.props&&(q=Object(D.a)(Object(D.a)({},q),t.props)),q.addons={onItemChange:c,setValue:c,getValue:b,formData:f,dataPath:j,dataIndex:S};var se=Vn(q);return x.a.createElement(V,se)},Tn=(e,t)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:e.value===t.value&&JSON.stringify(e.schema)===JSON.stringify(t.schema),In=x.a.memo(qn,Tn),_n=e=>{var t=e.$id,s=e.dataIndex,o=e.item,l=e.labelClass,c=e.labelStyle,f=e.contentClass,b=e.hasChildren,g=e.children,j=e.errorFields,S=j===void 0?[]:j,T=e.hideTitle,w=e.displayType,L=o.schema,P=Tt(),V=P.onItemChange,W=P.formData,ce=P.isEditing,q=P.setEditing,se=P.touchKey,te=P.debounceInput,_=P.readOnly,le=Object(z.useRef)(),ue=ft(t,s),B=h(L),ee=[...o.rules];ce&&le.current?B=le.current:(Se(B)&&(B=Ne(B,W,ue)),le.current=B,ee=ee.map(Y=>{var we={};return Object.keys(Y).forEach(gt=>{var Ua=me(Y[gt]);we[gt]=Ua?De(Y[gt],W,ue):Y[gt]}),we}));var de=S.find(Y=>Y.name===ue),fe=de&&de.error,Ae=Array.isArray(fe)&&fe.length>0,Ge=Ae?f+" ant-form-item-has-error":f,Oe=Rt(W,ue),it=Y=>{if(Y==="#"||!Y)return W;if(typeof Y=="string")return Rt(W,Y);console.error("path has to be a string")},ge={},Ee=Xt(q,350),ze=_!==void 0?_:B.readOnly,oe=Y=>{se(ue),te&&(q(!0),Ee(!1)),typeof ue=="string"&&V(ue,Y)},ye={labelClass:l,labelStyle:c,schema:B,displayType:w},Me=w==="inline"||ze===!0,ot={message:fe,schema:B,displayType:w,hideValidation:Me},en={className:l,style:c},Ut=!T&&!!B.title,tn={schema:B,readOnly:ze,onChange:oe,getValue:it,formData:W,value:Oe,onItemChange:V,dataIndex:s,dataPath:ue};if(tn.children=b?g:yt(B,ze)?B.title:null,B.hidden)return null;if(yt(B,ze))return x.a.createElement(x.a.Fragment,null,Ut&&x.a.createElement("div",en),x.a.createElement("div",{className:Ge,style:ge},x.a.createElement(In,tn),x.a.createElement(K,ot)));var Pt=x.a.createElement(Zt,ye);return mt(B)?(Pt=x.a.createElement("div",{style:{display:"flex"}},Pt,x.a.createElement(K,ot)),x.a.createElement("div",{className:Ge,style:ge},x.a.createElement(In,Object(H.default)({},tn,{message:fe,title:Ut?Pt:void 0})))):x.a.createElement(x.a.Fragment,null,Ut&&Pt,x.a.createElement("div",{className:Ge,style:ge},x.a.createElement(In,tn),x.a.createElement(K,ot)))},Ma=_n,ea=e=>{var t=e.id,s=t===void 0?"#":t,o=e._item,l=e.dataIndex,c=l===void 0?[]:l,f=e.hideTitle,b=f===void 0?!1:f,g=e.hideValidation,j=g===void 0?!1:g,S=Object(C.a)(e,["id","_item","dataIndex","hideTitle","hideValidation"]),T=Tt(),w=T.displayType,L=T.column,P=T.flatten,V=T.errorFields,W=T.labelWidth,ce=T.readOnly,q=o||P[s];if(!q)return null;var se=q.schema,te=se.displayType||S.displayType||w||"column",_=se.type==="object",le=ct(se),ue=_||le,B=yt(se,ce),ee=se.width||se["ui:width"],de="fr-field ".concat(te==="inline"?"":"w-100"," flex"),fe="fr-label",Ae="fr-content";switch(se.type){case"object":_&&(se.title&&(fe+=" fr-label-object"),de+=" fr-field-object");break;case"array":le&&(se.title&&(fe+=" fr-label-list"),de+=" fr-field-column");break;case"boolean":B&&(Ae+=" fr-content-column",de+=" flex ".concat(te==="column"?"flex-column":""));break;default:}if(!ue&&!B)if(te==="column")switch(de+=" flex-column",fe+=" fr-label-column",Ae+=" fr-content-column",se.type){case"object":break;case"array":se.title&&!se.enum;break;case"boolean":break;default:}else te==="row"&&(de+="",fe+=" fr-label-row",Ae+=" fr-content-row",!_&&!B&&(fe+=" flex-shrink-0 fr-label-row",Ae+=" flex-grow-1 relative"));var Ge={};_||(ee?Ge={width:ee,paddingRight:"12px"}:L>1&&(Ge={width:"calc(100% /".concat(L,")"),paddingRight:"12px"}));var Oe=Ke("labelWidth",s,P)||W,it=I(Oe)?Number(Oe):p(Oe)?Oe:110,ge={width:it};(ue||te==="column")&&(ge={flexGrow:1}),te==="inline"&&(ge={marginTop:5,paddingLeft:12},fe="",de.indexOf("fr-field-object")===-1&&(de+=" fr-field-inline"));var Ee=q.children&&q.children.length>0,ze={$id:s,dataIndex:c,item:q,labelClass:fe,labelStyle:ge,contentClass:Ae,errorFields:V,hasChildren:Ee,displayType:te,hideTitle:b,hideValidation:j},oe=Ee?x.a.createElement("div",{className:"flex flex-wrap"},x.a.createElement(xt,{dataIndex:c,errorFields:V,displayType:te},q.children)):null,ye=Ee?x.a.createElement(Ce,{parentId:s,dataIndex:c,errorFields:V,displayType:te},q.children):null;return x.a.createElement("div",{style:Ge,className:de+" "},x.a.createElement(Ma,ze,_&&oe,le&&ye))},En=ea,ir=n("SA0R"),or=n.n(ir),lr=n("OVFa"),ur=n("k/c8"),dr=n("cFvS"),ht="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",Ka={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:ht,method:ht,array:ht,object:ht,number:ht,date:ht,boolean:ht,integer:ht,float:ht,regexp:ht,email:ht,url:ht,hex:ht},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},vt="${title} is not a valid ${type}",Wa={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:vt,method:vt,array:vt,object:vt,number:vt,date:vt,boolean:vt,integer:vt,float:vt,regexp:vt,email:vt,url:vt,hex:vt},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},Ja=n("KpVd"),wn=e=>{var t=e.formData,s=e.schema,o=s===void 0?{}:s,l=e.isRequired,c=l===void 0?!0:l,f=e.touchedKeys,b=f===void 0?[]:f,g=e.locale,j=g===void 0?"cn":g;if(Object.keys(o).length===0)return Promise.resolve();var S=St({schema:o,isRequired:c}).fields,T=[];c||b.forEach(W=>{var ce=rn(W,o),q=Object(G.get)(t,W);!q&&ce&&T.push({name:W,error:["${title}\u5FC5\u586B"]})});var w=Ka,L=Wa,P;try{P=new Ja.a(S)}catch(W){return Promise.resolve([])}var V=j==="en"?L:w;return P.messages(V),P.validate(t||{}).then(W=>T.length>0?T:[]).catch(W=>{var ce=W.errors,q=W.fields,se=rt(ce).map(_=>{var le=At(_.field);return{name:le,error:[_.message]}});se=[...se,...T];var te=[];return se.forEach(_=>{var le=te.findIndex(ue=>ue.name===_.name);le===-1?te.push(_):te[le].error=[...te[le].error,..._.error]}),te})},mr={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},a={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},r=(e,t)=>{var s=i(e,t);return s=$t(s),s},i=(e,t)=>{var s=h(e),o=[],l=[],c=[],f=g=>Array.isArray(g)&&g.every(j=>typeof j=="string");Object.keys(t).forEach(g=>{var j=t[g]&&t[g].schema&&t[g].schema.bind;j===!1?o.push(g):typeof j=="string"?l.push({key:g,bind:j}):f(j)&&c.push({key:g,bind:j})});var b=g=>{o.forEach(j=>{j.indexOf("[]")===-1&&Object(G.unset)(g,j)}),l.forEach(j=>{var S=j.key,T=j.bind;if(S.indexOf("[]")===-1){var w=Object(G.get)(g,S),L=Object(G.get)(g,T);E(L)&&(w=Object(D.a)(Object(D.a)({},L),w)),Object(G.set)(g,T,w),Object(G.unset)(g,S)}}),c.forEach(j=>{var S=j.key,T=j.bind;if(S.indexOf("[]")===-1){var w=Object(G.get)(g,S);Array.isArray(w)&&w.forEach((L,P)=>{T[P]&&Object(G.set)(g,T[P],L)}),Object(G.unset)(g,S)}})};return b(s),s},d=(e,t)=>{var s=h(e),o=[],l=[],c=b=>Array.isArray(b)&&b.every(g=>typeof g=="string");Object.keys(t).forEach(b=>{var g=t[b]&&t[b].schema&&t[b].schema.bind;typeof g=="string"?o.push({key:b,bind:g}):c(g)&&l.push({key:b,bind:g})});var f=b=>{o.forEach(g=>{var j=g.key,S=g.bind,T=Object(G.get)(b,S),w=Object(G.get)(b,j);E(w)&&(T=Object(D.a)(Object(D.a)({},w),T)),Object(G.set)(b,j,T),Object(G.unset)(b,S)}),l.forEach(g=>{var j=g.key,S=g.bind,T=[];S.forEach(w=>{T.push(Object(G.get)(b,w)),Object(G.unset)(b,w)}),Object(G.set)(b,j,T)})};return f(s),s},u=e=>{var t=e||{},s=t.formData,o=t.onChange,l=t.onValidate,c=Vt({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[]}),f=Object(We.default)(c,2),b=f[0],g=f[1],j=Object(z.useRef)({}),S=Object(z.useRef)({}),T=Object(z.useRef)(!1),w=Object(z.useRef)(),L=Object(z.useRef)("cn"),P=Object(z.useRef)({}),V=b.formData,W=b.submitData,ce=b.errorFields,q=ce===void 0?[]:ce,se=b.isValidating,te=b.outsideValidating,_=b.isSubmitting,le=b.isEditing,ue=b.allTouched,B=b.touchedKeys,ee=e&&e.hasOwnProperty("formData"),de=ee?s:V;P.current=Object(G.merge)(Ht(j.current),de);var fe=Y=>{typeof o=="function"?o(Y):g({formData:Y})},Ae=Y=>{if(typeof l=="function"){var we=Y.map(gt=>gt.name);l(we)}g({errorFields:Y})},Ge=Y=>{if(!(B.indexOf(Y)>-1)){var we=[...B,Y];g({touchedKeys:we})}};Object(z.useEffect)(()=>{ee&&typeof l=="function"&&setTimeout(()=>{wn({formData:P.current,schema:j.current,isRequired:!0,touchedKeys:B,locale:L.current}).then(Y=>{var we=Y.map(gt=>gt.name);l(we)})},200)},[]),Object(z.useEffect)(()=>{if(T.current){T.current=!1;return}wn({formData:P.current,schema:j.current,isRequired:ue,touchedKeys:B,locale:L.current}).then(Y=>{Ae(Y)})},[JSON.stringify(P.current),ue]);var Oe=Y=>{g({isEditing:Y})},it=(Y,we)=>{if(typeof Y=="string"){if(Y==="#"){fe(Object(D.a)({},we));return}Object(G.set)(P.current,Y,we),fe(Object(D.a)({},P.current))}},ge=Y=>{var we=Y.schema,gt=Y.flatten,Ua=Y.beforeFinish,vr=Y.locale;j.current=we,S.current=gt,w.current=Ua,L.current=vr},Ee=Y=>{var we=[];Array.isArray(Y)?we=[...Y,...q]:Y&&Y.name?we=[Y,...q]:console.log("error format is wrong"),we=Object(G.sortedUniqBy)(we,gt=>gt.name),Ae(we)},ze=Y=>{var we=q.map(gt=>gt.name.indexOf(Y)===-1);Ae(we)},oe=()=>i(P.current,S.current),ye=Y=>{var we=d(Y,S.current);fe(we)},Me=()=>{T.current=!0,g({isValidating:!0,allTouched:!0,isSubmitting:!1}),wn({formData:P.current,schema:j.current,touchedKeys:[],isRequired:!0,locale:L.current}).then(Y=>{if(Y&&Y.length>0&&(console.log("submit:",P.current,Y),g({errorFields:Y})),typeof w.current=="function"){Promise.resolve(r(P.current,S.current)).then(we=>{g({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:we})});return}Promise.resolve(r(P.current,S.current)).then(we=>{g({isValidating:!1,isSubmitting:!0,submitData:we})})}).catch(Y=>{console.log("submit error:",Y)})},ot=()=>{fe({})},en=()=>g({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),Ut=()=>g({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),tn=()=>g({formData:{},submitData:{},errorFields:[],allTouched:!1,touchedKeys:[]}),Pt={formData:P.current,schema:j.current,touchedKeys:B,allTouched:ue,touchKey:Ge,onItemChange:it,setValues:ye,getValues:oe,resetFields:ot,submit:Me,submitData:W,errorFields:q,isValidating:se,outsideValidating:te,isSubmitting:_,endValidating:en,endSubmitting:Ut,setErrorFields:Ee,removeErrorField:ze,isEditing:le,setEditing:Oe,syncStuff:ge,destroyForm:tn};return Pt},y=e=>t=>{var s=u();return x.a.createElement(e,Object(H.default)({},t,{form:s}))},v=(e,t)=>{console.log(e,t)};function O(e){var t=e.widgets,s=e.mapping,o=e.form,l=e.beforeFinish,c=l===void 0?v:l,f=e.onFinish,b=f===void 0?v:f,g=e.displayType,j=g===void 0?"column":g,S=e.schema,T=e.flatten,w=e.debug,L=e.locale,P=L===void 0?"cn":L,V=e.debounceInput,W=V===void 0?!1:V,ce=e.size,q=e.configProvider,se=e.theme,te=Object(C.a)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","flatten","debug","locale","debounceInput","size","configProvider","theme"]);try{var _=o.submit}catch(Me){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var le=o.submitData,ue=o.errorFields,B=o.isValidating,ee=o.outsideValidating,de=o.isSubmitting,fe=o.endValidating,Ae=o.endSubmitting,Ge=o.syncStuff,Oe=o.formData,it=o.isEditing,ge=o.setErrorFields,Ee=Object(z.useMemo)(()=>T||Ot(S),[JSON.stringify(T),JSON.stringify(S)]);Object(z.useEffect)(()=>{Ge({schema:S,flatten:Ee,beforeFinish:c,locale:P})},[JSON.stringify(T),JSON.stringify(S)]),Object(z.useEffect)(()=>()=>{o.destroyForm()},[]);var ze=Object(z.useMemo)(()=>Object(D.a)(Object(D.a)({flatten:Ee},o),{},{displayType:j,theme:se,debounceInput:W,debug:w,isEditing:it},te),[JSON.stringify(Ee),JSON.stringify(Oe),JSON.stringify(ue)]),oe=Object(z.useMemo)(()=>({widgets:Object(D.a)(Object(D.a)({},Nn),t),mapping:Object(D.a)(Object(D.a)({},wt),s)}),[]);Object(z.useEffect)(()=>{if(ee===!0){Promise.resolve(c(le,ue)).then(Me=>{Me&&ge(Me),fe()});return}B===!1&&de===!0&&(Ae(),b(le,ue))},[B,de,ee]);var ye="";return ce==="small"?ye="fr-form-small":ce==="large"&&(ye="fr-form-large"),x.a.createElement(m.a,Object(H.default)({locale:or.a},q),x.a.createElement(on.Provider,{value:ze},x.a.createElement(Ct.Provider,{value:oe},x.a.createElement("div",{className:"fr-container ".concat(ye)},w?x.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},x.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),x.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),x.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),x.a.createElement("div",null,"allTouched:"+JSON.stringify(o.allTouched)),x.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),x.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),x.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,x.a.createElement(En,null)))))}var R=e=>{var t=e.isOldVersion,s=t===void 0?!0:t,o=e.schema,l=Object(C.a)(e,["isOldVersion","schema"]),c=o;return s&&(c=Gt(o)),x.a.createElement(O,Object(H.default)({schema:c},l))},N=U.default=R},trko:function(Ve,U,n){},"xwS/":function(Ve,U,n){}}]);
