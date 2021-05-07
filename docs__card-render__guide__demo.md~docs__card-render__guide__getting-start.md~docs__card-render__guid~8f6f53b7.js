(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"36SN":function(Ue,Y,t){"use strict";t.r(Y),t.d(Y,"Column",function(){return ce}),t.d(Y,"Line",function(){return Wn}),t.d(Y,"PivotTable",function(){return St});var ve=t("0Owb"),X=t("PpiC"),g=t("q1tI"),G=t.n(g),j=t("06Lf");function D(q){var Fe=[],$=[];return q.forEach(m=>{m.isDim?Fe.push(m):$.push(m)}),{metaDim:Fe,metaInd:$}}function B(q){var Fe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:12;return+parseFloat(q==null?void 0:q.toPrecision(Fe))}var d=()=>G.a.createElement("div",{style:{color:"rgba(0,0,0,.85)",backgroundColor:"#fff2f0",fontSize:14,border:"1px solid #ffccc7",padding:"8px 15px"}},"\u2757\uFE0F\u4F20\u5165\u7684\u6307\u6807\u6570\u76EE\u6709\u8BEF\uFF01");function Jt(q,Fe){var $=D(q),m=$.metaDim,u=$.metaInd;if(u.length>=1&&m.length===0){var S="type",l="value";return{xField:S,yField:l,data:Fe.map(se=>u.map(ae=>{var Le=ae.id,qe=ae.name;return{[S]:Le,[l]:se[Le]}})).flat(),meta:{[S]:{formatter:se=>{var ae;return((ae=q.find(Le=>{var qe=Le.id;return se===qe}))===null||ae===void 0?void 0:ae.name)||se}}},tooltip:{formatter:se=>{var ae,Le=se[S],qe=se[l];return{name:(ae=q.find(vt=>{var Mt=vt.id;return Le===Mt}))===null||ae===void 0?void 0:ae.name,value:qe}}}}}else if(u.length===1&&m.length===1){var F,w,V,Q=(F=m.shift())===null||F===void 0?void 0:F.id,J=(w=u.shift())===null||w===void 0?void 0:w.id;return{data:Fe,xField:Q,yField:J,meta:{[J]:{alias:(V=q.find(se=>{var ae=se.id;return ae===J}))===null||V===void 0?void 0:V.name}}}}else if(u.length>1&&m.length===1){var k,H=(k=m.shift())===null||k===void 0?void 0:k.id,ue="value",me="type";return{data:Fe.map(se=>u.map(ae=>{var Le=ae.id,qe=ae.name;return{[H]:se[H],[ue]:se[Le],[me]:qe}})).flat(),xField:H,yField:ue,seriesField:me,isGroup:!0}}else if(u.length===1&&m.length===2){var ne,je,pe;return{data:Fe,xField:(ne=m.shift())===null||ne===void 0?void 0:ne.id,yField:(je=u.shift())===null||je===void 0?void 0:je.id,seriesField:(pe=m.shift())===null||pe===void 0?void 0:pe.id,isGroup:!0}}return{data:Fe,xField:"",yField:""}}var Ge=q=>{var Fe=q.className,$=q.style,m=q.meta,u=m===void 0?[]:m,S=q.data,l=S===void 0?[]:S,F=q.inverted,w=Object(X.default)(q,["className","style","meta","data","inverted"]);if(F){var V=Jt(u,l),Q=V.xField,J=V.yField,k=Object(X.default)(V,["xField","yField"]);return G.a.createElement(j.b,Object(ve.default)({xField:J,yField:Q},k,{renderer:"svg",errorTemplate:()=>G.a.createElement(d,null)},w))}else return G.a.createElement(j.c,Object(ve.default)({},Jt(u,l),{renderer:"svg",errorTemplate:()=>G.a.createElement(d,null)},w))},ce=Ge,K=t("k1fw"),Tt=t("sGjT");function xn(q,Fe){var $=D(q),m=$.metaDim,u=$.metaInd;if(u.length===1&&m.length===1){var S,l=m.shift(),F=u.shift(),w=l.id,V=F.id;return{data:Fe,xField:w,yField:V,yAxis:{label:{formatter:De=>F.isRate?"".concat(B(100*Number(De)),"%"):De}},tooltip:{formatter:De=>{var $e=De[w],pt=De[V];return{name:F.name,value:F.isRate?"".concat(B(100*Number(pt)),"%"):pt}}},meta:{[V]:{alias:(S=q.find(De=>{var $e=De.id;return $e===V}))===null||S===void 0?void 0:S.name}}}}else if(u.length===1&&m.length===2){var Q=m.shift(),J=u.shift(),k=m.shift(),H=Q.id,ue=J.id,me=k.id;return{data:Fe,xField:H,yField:ue,seriesField:me,yAxis:{label:{formatter:De=>J.isRate?"".concat(B(100*Number(De)),"%"):De}},tooltip:{formatter:De=>{var $e=De[me],pt=De[ue];return{name:$e,value:J.isRate?"".concat(B(100*Number(pt)),"%"):pt}}}}}else if(u.length===2&&m.length===2){var ne,je,pe,se,ae=Fe.map(De=>{var $e=u[0].id,pt=m[1].id,pn=De[$e],Dt=De[pt],qt=Object(X.default)(De,[$e,pt].map(Tt.a));return Object(K.a)({[m[1].id]:"".concat(Dt,"-").concat(u[0].name)},qt)}),Le=Fe.map(De=>{var $e=u[1].id,pt=m[1].id,pn=De[$e],Dt=De[pt],qt=Object(X.default)(De,[$e,pt].map(Tt.a));return Object(K.a)({[m[1].id]:"".concat(Dt,"-").concat(u[1].name)},qt)});return{data:[Le,ae],geometryOptions:[{geometry:"line",seriesField:m[1].id},{geometry:"line",seriesField:m[1].id,lineStyle:{lineDash:[5,5]}}],xField:(ne=m.shift())===null||ne===void 0?void 0:ne.id,yField:[(je=u.shift())===null||je===void 0?void 0:je.id,(pe=u.shift())===null||pe===void 0?void 0:pe.id],seriesField:(se=m.shift())===null||se===void 0?void 0:se.id}}else if(u.length>1&&m.length===1){var qe,vt=(qe=m.shift())===null||qe===void 0?void 0:qe.id,Mt="value",kt="type";return{data:Fe.map(De=>u.map($e=>{var pt=$e.id,pn=$e.name;return{[vt]:De[vt],[Mt]:De[pt],[kt]:pn}})).flat(),xField:vt,yField:Mt,seriesField:kt}}return{data:Fe}}var bt=q=>{var Fe=q.className,$=q.style,m=q.meta,u=m===void 0?[]:m,S=q.data,l=S===void 0?[]:S,F=q.withArea,w=Object(X.default)(q,["className","style","meta","data","withArea"]),V=xn(u,l);return F?G.a.createElement(j.a,Object(ve.default)({},V,{renderer:"svg",errorTemplate:()=>G.a.createElement(d,null)},w)):Array.isArray(V.yField)?G.a.createElement(j.d,Object(ve.default)({},V,{renderer:"svg",errorTemplate:()=>G.a.createElement(d,null)},w)):G.a.createElement(j.e,Object(ve.default)({},V,{renderer:"svg",errorTemplate:()=>G.a.createElement(d,null)},w))},Wn=bt,rn=t("tJVT"),Ot=t("mA+x"),Jn=t("aMEK"),Zt=t("ARb9"),ft=q=>{var Fe=q.className,$=q.style,m=q.showSubtotal,u=m===void 0?!0:m,S=q.subtotalText,l=S===void 0?["\u603B\u8BA1","\u5C0F\u8BA1"]:S,F=q.meta,w=F===void 0?[]:F,V=q.data,Q=V===void 0?[]:V,J=q.size,k=J===void 0?"middle":J,H=q.indicatorSide,ue=H===void 0?"top":H,me=q.leftDimensionLength,ne=me===void 0?w.length:me,je=q.leftExpandable,pe=je===void 0?!1:je,se=q.topExpandable,ae=se===void 0?!1:se,Le=q.defaultExpandAll,qe=Le===void 0?!0:Le,vt=q.cellRender,Mt=Object(X.default)(q,["className","style","showSubtotal","subtotalText","meta","data","size","indicatorSide","leftDimensionLength","leftExpandable","topExpandable","defaultExpandAll","cellRender"]),kt=Object(g.useState)([]),De=Object(rn.default)(kt,2),$e=De[0],pt=De[1],pn=Object(g.useState)([]),Dt=Object(rn.default)(pn,2),qt=Dt[0],_t=Dt[1],Pn=D(w),In=Pn.metaDim,Bn=Pn.metaInd,hn=Bn.map(Se=>{var He=Se.id,Ct=Se.name,Pt=Se.isRate;return{name:Ct,code:He,align:"right",expression:Pt?"AVG(".concat(He,")"):"SUM(".concat(He,")")}}),$n=In.filter((Se,He)=>He<ne),wt=$n.map(Se=>{var He=Se.id;return He}),gn=Object(Ot.b)(Q,wt,{includeTopWrapper:!0,isExpand:pe?Se=>qt.includes(Se):void 0}),Mn=Object(Ot.d)(gn,{indicators:ue==="left"?hn:void 0,supportsExpand:pe,expandKeys:qt,onChangeExpandKeys:_t,generateSubtotalNode:u?Se=>({position:"start",value:Se.path.length===0?l[0]||"\u603B\u8BA1":l[1]||"\u5C0F\u8BA1"}):void 0}),la=Object(rn.default)(Mn,1),sn=la[0],ea=In.filter((Se,He)=>He>=ne),yn=ea.map(Se=>{var He=Se.id;return He}),ua=Object(Ot.b)(Q,yn,{includeTopWrapper:!0,isExpand:ae?Se=>$e.includes(Se):void 0}),Ln=Object(Ot.d)(ua,{indicators:ue==="top"?hn:void 0,supportsExpand:ae,expandKeys:$e,onChangeExpandKeys:pt,generateSubtotalNode:u?Se=>({position:"start",value:Se.path.length===0?l[0]||"\u603B\u8BA1":l[1]||"\u5C0F\u8BA1"}):void 0}),on=Object(rn.default)(Ln,1),Sn=on[0],bn=Object(Ot.c)({data:Q,leftCodes:wt,topCodes:yn,aggregate:Object(Jn.a)(hn)});return G.a.createElement("div",{style:$,className:"CR-PivotTable CR-PivotTable-".concat(k," ").concat(Fe||"")},G.a.createElement(Ot.a,Object(ve.default)({defaultColumnWidth:100,leftMetaColumns:In.filter(Se=>{var He=Se.id;return wt.includes(He)}).map(Se=>{var He=Se.id,Ct=Se.name;return{code:He,name:Ct}}),leftTree:sn.children,leftTotalNode:sn,topTree:Sn.children,topTotalNode:Sn,getValue:(Se,He)=>{var Ct,Pt=(Ct=bn.get(Se.data.dataKey))===null||Ct===void 0?void 0:Ct.get(He.data.dataKey);return Pt==null?void 0:Pt[He.code]},render:(Se,He,Ct)=>{var Pt;if(vt){var Yn=He.data.dataPath,ta=Yn===void 0?[]:Yn,Qn=Ct.data.dataPath,na=Qn===void 0?[]:Qn,Vn={};return ta.forEach((ln,Rt)=>{var en;Vn[(en=$n[Rt])===null||en===void 0?void 0:en.id]=ln}),na.forEach((ln,Rt)=>{var en;Vn[(en=ea[Rt])===null||en===void 0?void 0:en.id]=ln}),vt(Se,Vn,Ct.code)}return(Pt=Bn.find(ln=>{var Rt=ln.id;return Rt===Ct.code}))!==null&&Pt!==void 0&&Pt.isRate?"".concat(B(Se*100).toFixed(2),"%"):Se}},Mt)))},St=ft},"4l2o":function(Ue,Y,t){},"72KL":function(Ue,Y,t){},"8iYR":function(Ue,Y,t){"use strict";t.r(Y),t.d(Y,"basic",function(){return ve}),t.d(Y,"expression",function(){return X});var ve={labelWidth:130,type:"object",properties:{url:{title:"url\u8F93\u5165\u6846",placeholder:"//www.taobao.com",type:"string",format:"url",required:!0},email:{title:"email\u8F93\u5165\u6846",type:"string",format:"email"},string:{title:"\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32",description:"a-z",type:"string",hidden:!1,disabled:!0}}},X={type:"object",properties:{input:{title:'{{formData.config.title || "\u8F93\u5165\u6846"}}',type:"string",placeholder:"{{formData.config.placeholder}}",props:{size:"{{formData.config.size}}"},hidden:"{{formData.config.hidden === true}}",readOnly:"{{formData.config.readOnly === true}}",disabled:"{{formData.config.disabled === true}}"},rate:{title:"rate",type:"number",widget:"rate"},config:{title:"\u914D\u7F6E",type:"object",properties:{title:{title:"title",type:"string"},placeholder:{title:"placeholder",type:"string"},size:{title:"input\u5927\u5C0F",type:"string",enum:["large","middle","small"],enumNames:["\u5927","\u4E2D","\u5C0F"],widget:"radio"},hidden:{title:"\u662F\u5426\u9690\u85CF",type:"boolean"},readOnly:{title:"\u662F\u5426\u53EA\u8BFB",type:"boolean"},disabled:{title:"\u662F\u5426\u7F6E\u7070",type:"boolean"}}}},required:[]}},ARb9:function(Ue,Y,t){},GYr9:function(Ue,Y,t){},JjdP:function(Ue,Y,t){"use strict";t.r(Y);var ve=t("9og8"),X=t("WmNS"),g=t.n(X),G=t("LtsZ"),j=`import React, { useRef } from 'react';
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

export default Demo;`,D=`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './advanced/utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  const test = {
    type: 'object',
    properties: {
      input1: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'number',
        required: true,
      },
      multiSelect: {
        title: '\u591A\u9009',
        description: '\u4E0B\u62C9\u591A\u9009',
        type: 'array',
        required: true,
        items: {
          type: 'string',
        },
        enum: ['A', 'B', 'C'],
        enumNames: ['\u676D\u5DDE', '\u6B66\u6C49', '\u6E56\u5DDE'],
        widget: 'multiSelect',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      },
    },
  };

  const test1 = {
    displayType: 'column',
    type: 'object',
    properties: {
      dateName: {
        title: '\u65F6\u95F4\u9009\u62E9',
        type: 'string',
        format: 'date',
      },
      selectName: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        widget: 'select',
      },
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
      inputName2: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
      inputName3: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
      listName: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            selectName: {
              title: '\u5355\u9009',
              type: 'string',
              enum: ['a', 'b', 'c'],
              enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              widget: 'select',
            },
            inputName: {
              title: '\u7B80\u5355\u8F93\u5165\u6846',
              type: 'string',
            },
            objectName: {
              title: '\u5BF9\u8C61',
              description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
              type: 'object',
              properties: {
                radioName: {
                  title: '\u5355\u9009radio',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                  widget: 'radio',
                },
                dateName: {
                  title: '\u65F6\u95F4\u9009\u62E9',
                  type: 'string',
                  format: 'date',
                },
                inputName: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  };

  // const onMount = () => {
  //   setSchema(test);
  // };

  useEffect(() => {
    setSchema(test1);
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
    <div>
      <FormRender
        form={form}
        schema={schema}
        debug
        // onMount={onMount}
        onFinish={onFinish}
      />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`,B=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,d=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Jt=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Ge=`export const basic = {
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
};`,ce=`import React, { Component } from 'react';
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

export default Root;`,K=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Tt=`{
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
}`,xn=`import { Select } from 'antd';
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

export default SearchInput;`,bt=`import React from 'react';
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

export default Demo;`,Wn=`/* PrismJS 1.16.0
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
}`,rn=`.markdown p {
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
}`,Ot=`import React from 'react';
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

export default Demo;`,Jn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Zt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,St=`import React, { useState, useRef } from 'react';
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

export default Demo;`,q=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Fe=Y.default={"guide-card":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{jsx:j}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:function(){var m=t("3PQu"),u=t("K+nK"),S=u(t("tJVT")),l=m(t("q1tI")),F=t("36SN"),w=function(){var Q=(0,l.useState)("Line"),J=(0,S.default)(Q,2),k=J[0],H=J[1],ue={Line:F.Line,Column:F.Column,PivotTable:F.PivotTable}[k];return l.default.createElement("div",null,l.default.createElement("div",{style:{marginBottom:10}},l.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return H("Line")}},"\u6298\u7EBF\u56FE"),l.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return H("Column")}},"\u67F1\u72B6\u56FE"),l.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return H("PivotTable")}},"\u4EA4\u53C9\u8868")),l.default.createElement(ue,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))};return l.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=t("36SN"),l=function(){return u.default.createElement(S.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(V,Q,J){return u.default.createElement("div",null,u.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),u.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(Q).length]}},V),u.default.createElement("p",null,JSON.stringify(Q)),u.default.createElement("p",null,JSON.stringify(J)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})};return u.default.createElement(l)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:function(){var m=t("3PQu"),u=t("K+nK"),S=u(t("tJVT")),l=m(t("q1tI")),F=t("36SN"),w=function(){var Q=(0,l.useState)(!1),J=(0,S.default)(Q,2),k=J[0],H=J[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",l.default.createElement("input",{type:"checkbox",value:k,onChange:function(){return H(!k)}})),l.default.createElement(F.PivotTable,{leftExpandable:k,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))};return l.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT")),l=u(t("fWQN")),F=u(t("mtLc")),w=u(t("yKVA")),V=u(t("879j")),Q=u(t("q1tI")),J=t("gdfu"),k=m(t("refC")),H={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},ue=function(ne){(0,w.default)(pe,ne);var je=(0,V.default)(pe);function pe(){return(0,l.default)(this,pe),je.apply(this,arguments)}return(0,F.default)(pe,[{key:"render",value:function(){var ae=this.props.form;return Q.default.createElement("div",null,Q.default.createElement(k.default,{form:ae,schema:H}),Q.default.createElement(S.default,{type:"primary",onClick:ae.submit},"\u63D0\u4EA4"))}}]),pe}(Q.default.Component),me=(0,k.connectForm)(ue);return Q.default.createElement(me)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT")),l=u(t("q1tI")),F=t("gdfu"),w=m(t("refC")),V={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},Q=function(){var H=(0,w.useForm)();return l.default.createElement("div",null,l.default.createElement(w.default,{form:H,schema:V}),l.default.createElement(S.default,{type:"primary",onClick:H.submit},"\u63D0\u4EA4"))},J=Q;return l.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT")),l=u(t("q1tI")),F=t("gdfu"),w=m(t("refC")),V={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},Q=function(){var H=(0,w.useForm)(),ue=function(ne,je){je.length>0?alert("errors:"+JSON.stringify(je)):alert("formData:"+JSON.stringify(ne,null,2))};return l.default.createElement("div",null,l.default.createElement(w.default,{form:H,schema:V,onFinish:ue}),l.default.createElement(S.default,{type:"primary",onClick:H.submit},"\u63D0\u4EA4"))},J=Q;return l.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:function(){var m=t("3PQu"),u=t("K+nK"),S=u(t("q1tI")),l=m(t("refC")),F={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}};function w(){var Q=(0,l.useForm)(),J=function(H,ue){ue.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(ue))):alert(JSON.stringify(H))};return S.default.createElement("div",null,S.default.createElement(l.default,{form:Q,schema:F,onFinish:J}),S.default.createElement("button",{onClick:Q.submit},"\u63D0\u4EA4"))}var V=w;return S.default.createElement(V)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"test-bind-demo":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT")),l=m(t("q1tI")),F=t("gdfu"),w=m(t("refC")),V=function(me){return new Promise(function(ne){return setTimeout(ne,me)})},Q=function(){return"hello"},J={type:"object",displayType:"row",properties:{inputName:{bind:"ttt",title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",format:"image",required:!0},in:{title:"\u6D4B\u8BD5",type:"string","ui:labelWidth":300,"ui:widget":"A"},listName:{bind:"a.x",title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{inputName2:{title:"\u590D\u6742\u8F93\u5165\u6846",description:"\u82F1\u6587\u6216\u6570\u5B57\u7EC4\u5408",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio",labelWidth:200}}}}}},k=function(){var me=(0,w.useForm)();(0,l.useEffect)(function(){me.setValues({ttt:"234",a:{x:[{inputName2:"hello"}]}})},[]);var ne=function(pe,se){se.length>0?alert("errorFields:"+JSON.stringify(se)):alert("formData:"+JSON.stringify(pe,null,2))};return l.default.createElement("div",null,l.default.createElement(w.default,{form:me,schema:J,onFinish:ne,displayType:"column",widgets:{A:Q}}),l.default.createElement(S.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4"))},H=k;return l.default.createElement(H)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Modal } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const A = () => 'hello';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    inputName: {
      bind: 'ttt',
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      format: 'image',
      required: true,
    },
    in: {
      title: '\u6D4B\u8BD5',
      type: 'string',
      'ui:labelWidth': 300,
      'ui:widget': 'A',
    },
    listName: {
      bind: 'a.x',
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          inputName2: {
            title: '\u590D\u6742\u8F93\u5165\u6846',
            description: '\u82F1\u6587\u6216\u6570\u5B57\u7EC4\u5408',
            type: 'string',
          },
          selectName: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'radio',
            labelWidth: 200,
          },
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  useEffect(() => {
    form.setValues({ ttt: '234', a: { x: [{ inputName2: 'hello' }] } });
  }, []);

  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        displayType="column"
        widgets={{
          A,
        }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},identifier:"test-bind-demo"}},"form-render-simple":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"EVAl"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{jsx:D},"advanced/utils/index.js":{import:"./advanced/utils",content:B}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-simple"}},"display-demo":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l=function(V){return{type:"object",displayType:V,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"display: row"),u.default.createElement(S.default,{schema:l("row")}),u.default.createElement("h2",null,"display: column"),u.default.createElement(S.default,{schema:l("column")}))};return u.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return u.default.createElement(S.default,{schema:l})};return u.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return u.default.createElement(S.default,{readOnly:!0,schema:l})};return u.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return u.default.createElement(S.default,{labelWidth:"200",schema:l})};return u.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return u.default.createElement(S.default,{schema:l})},w=F;return u.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return u.default.createElement(S.default,{schema:l})},w=F;return u.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return u.default.createElement(S.default,{schema:l})},w=F;return u.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("bQjt")),l={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return u.default.createElement(S.default,{schema:l})},w=F;return u.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:d}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:function(){var m=t("3PQu"),u=t("K+nK");t("lfLe");var S=u(t("Cp9S"));t("MaXC");var l=u(t("4IMT"));t("tL+A");var F=u(t("QpBz")),w=u(t("tJVT")),V=m(t("q1tI")),Q=t("gdfu"),J=m(t("refC")),k=t("OH0R"),H=function(){var ne=(0,J.useForm)(),je=(0,V.useState)({}),pe=(0,w.default)(je,2),se=pe[0],ae=pe[1],Le=function(){(0,k.fakeApi)("xxx/getForm").then(function(Mt){ne.setValues({input1:"hello world",select1:"c"})})};(0,V.useEffect)(function(){(0,k.delay)(1e3).then(function(vt){ae({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var qe=function(Mt,kt){kt.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(kt.map(function(De){return De.name}))):(0,k.fakeApi)("xxx/submit",Mt).then(function(De){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return V.default.createElement("div",{style:{width:"400px"}},V.default.createElement(J.default,{form:ne,schema:se,onFinish:qe}),V.default.createElement(S.default,null,V.default.createElement(l.default,{onClick:Le},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),V.default.createElement(l.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},ue=H;return V.default.createElement(ue)},previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:B}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT")),l=u(t("PpiC"));t("tL+A");var F=u(t("QpBz")),w=u(t("q1tI")),V=t("gdfu"),Q=m(t("refC")),J=t("OH0R"),k={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},H=function(){var ne=(0,Q.useForm)(),je=function(ae,Le){Le.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Le.map(function(qe){return qe.name}))):(0,J.fakeApi)("xxx/submit",ae).then(function(qe){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},pe=function(ae){var Le=ae.data,qe=ae.errors,vt=ae.schema,Mt=(0,l.default)(ae,["data","errors","schema"]);return(0,J.fakeApi)("xxx/validation").then(function(kt){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return w.default.createElement("div",{style:{width:"400px"}},w.default.createElement(Q.default,{form:ne,schema:k,beforeFinish:pe,onFinish:je}),w.default.createElement(S.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},ue=H;return w.default.createElement(ue)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:B}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:function(){var m=t("3PQu"),u=t("K+nK");t("lfLe");var S=u(t("Cp9S"));t("MaXC");var l=u(t("4IMT"));t("tL+A");var F=u(t("QpBz")),w=u(t("q1tI")),V=t("gdfu"),Q=m(t("refC")),J=t("OH0R"),k={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},H=function(){var ne=(0,Q.useForm)(),je=function(ae,Le){Le.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Le.map(function(qe){return qe.name}))):(0,J.fakeApi)("xxx/submit",ae).then(function(qe){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},pe=function(){(0,J.fakeApi)("xxx/getForm").then(function(ae){ne.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return w.default.createElement("div",{style:{width:"400px"}},w.default.createElement(Q.default,{form:ne,schema:k,onFinish:je}),w.default.createElement(S.default,null,w.default.createElement(l.default,{onClick:pe},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),w.default.createElement(l.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},ue=H;return w.default.createElement(ue)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:B}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT"));t("tL+A");var l=u(t("QpBz")),F=m(t("q1tI")),w=t("gdfu"),V=m(t("refC")),Q=t("OH0R"),J={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},k=function(){var me=(0,V.useForm)(),ne=function(){me.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},je=function(se,ae){ae.length>0?l.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(Le){return Le.name}))):l.default.info(JSON.stringify(se))};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(V.default,{form:me,schema:J,onMount:ne,onFinish:je}),F.default.createElement(S.default,{type:"primary",onClick:me.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},H=k;return F.default.createElement(H)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:B}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:function(){var m=t("3PQu"),u=t("K+nK"),S=u(t("q1tI")),l=m(t("refC")),F={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},w=function(){var J=(0,l.useForm)();return S.default.createElement(l.default,{form:J,schema:F})},V=w;return S.default.createElement(V)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("c2mQ")),l=t("8iYR"),F=function(){return u.default.createElement(S.default,{schema:l.expression})};return u.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Jt},"json/schema.js":{import:"../json/schema",content:Ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:function(){var m=t("3PQu"),u=m(t("q1tI")),S=t("gdfu"),l=m(t("refC")),F=function(k){return new Promise(function(H){return setTimeout(H,k)})},w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},V=function(){var k=(0,l.useForm)(),H=function(){k.setValues({input1:"hello world"}),F(3e3).then(function(me){k.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return u.default.createElement(l.default,{form:k,schema:w,onMount:H})},Q=V;return u.default.createElement(Q)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:function(){var m=t("3PQu"),u=m(t("q1tI")),S=t("gdfu"),l=m(t("refC")),F={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},w=function(){var J=(0,l.useForm)(),k={"#":function(ue){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",ue)},input1:function(ue){J.setValueByPath("input2",ue)}};return u.default.createElement(l.default,{form:J,schema:F,watch:k})},V=w;return u.default.createElement(V)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT")),l=m(t("q1tI")),F=t("gdfu"),w=m(t("refC")),V={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},Q=function(){var H=(0,w.useForm)(),ue=function(je,pe){pe.length>0?alert("errorFields:"+JSON.stringify(pe)):alert("formData:"+JSON.stringify(je,null,2))},me={input1:function(je){je.length>2?H.setSchemaByPath("obj1.select",function(pe){var se=pe.enumNames;return{enumNames:se.map(function(ae){return ae+"a"})}}):H.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return l.default.createElement("div",null,l.default.createElement(w.default,{form:H,schema:V,onFinish:ue,watch:me}),l.default.createElement(S.default,{type:"",style:{marginRight:8},onClick:function(){return H.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),l.default.createElement(S.default,{type:"primary",onClick:H.submit},"\u63D0\u4EA4"))},J=Q;return l.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:function(){var m=t("3PQu"),u=t("K+nK");t("MaXC");var S=u(t("4IMT"));t("cUip");var l=u(t("iJl9")),F=u(t("0Owb")),w=m(t("q1tI")),V=t("gdfu"),Q=m(t("refC")),J={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},k=function(ne){return w.default.createElement(l.default,(0,F.default)({addonBefore:"http://",addonAfter:".com"},ne))},H=function(){var ne=(0,Q.useForm)(),je=function(){};return w.default.createElement("div",null,w.default.createElement(Q.default,{form:ne,schema:J,widgets:{site:k},onFinish:function(se){return alert(JSON.stringify(se,null,2))}}),w.default.createElement(S.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))},ue=H;return w.default.createElement(ue)},previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("c2mQ")),l=t("8iYR"),F=function(){return u.default.createElement(S.default,{schema:l.basic})};return u.default.createElement(F)},previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Jt},"json/schema.js":{import:"../json/schema",content:Ge}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{jsx:ce},"main.js":{import:"./main",content:K},"json/simplest.json":{import:"./json/simplest.json",content:Tt},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:xn},"monaco/index.js":{import:"./monaco",content:bt},"theme.css":{import:"./theme.css",content:Wn},"index.css":{import:"./index.css",content:rn}},dependencies:{antd:{version:"4.14.1",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{tsx:Ot}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:function(){for(var m=t("K+nK"),u=m(t("q1tI")),S=t("P2DI"),l=[],F=0;F<6;F++)l.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});var w={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},V=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(H,ue){return u.default.createElement("a",{onClick:function(){return alert(H.title)}},"\u7F16\u8F91")}}],Q=function(){var H=function(){return{rows:l,total:l.length}};return u.default.createElement(S.TableProvider,null,u.default.createElement(S.Search,{schema:w,api:H}),u.default.createElement(S.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:V,rowKey:"id"}))},J=Q;return u.default.createElement(J)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:function(){var m=t("K+nK"),u=m(t("q1tI")),S=m(t("nYSz")),l={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},F=function(){return u.default.createElement("div",{style:{height:"80vh"}},u.default.createElement(S.default,{defaultValue:l}))},w=F;return u.default.createElement(w)},previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{jsx:Jn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{jsx:Zt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"1.1.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{jsx:ft}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(G.dynamic)({loader:function(){var $=Object(ve.a)(g.a.mark(function u(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([t.e(40),t.e(4)]).then(t.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},u)}));function m(){return $.apply(this,arguments)}return m}()}),previewerProps:{sources:{_:{jsx:St},"index.less":{import:"./index.less",content:q}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.6"},"fr-generator":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},OH0R:function(Ue,Y,t){"use strict";t.r(Y),t.d(Y,"delay",function(){return ve}),t.d(Y,"fakeApi",function(){return X});var ve=g=>new Promise(G=>setTimeout(G,g)),X=(g,G)=>(console.group("request:",g),console.log("params:",G),console.groupEnd(),ve(500))},OVFa:function(Ue,Y,t){},Oxum:function(Ue,Y,t){},P2DI:function(Ue,Y,t){"use strict";t.r(Y),t.d(Y,"Search",function(){return Fe}),t.d(Y,"Table",function(){return na}),t.d(Y,"TableProvider",function(){return fa}),t.d(Y,"useTable",function(){return bt});var ve=t("Saan"),X=t("vgIT"),g=t.n(X),G=t("0Owb"),j=t("k1fw"),D=t("tL+A"),B=t("QpBz"),d=t.n(B),Jt=t("PpiC"),Ge=t("tJVT"),ce=t("q1tI"),K=t.n(ce),Tt=Object(ce.createContext)({}),xn=Object(ce.createContext)({}),bt=()=>Object(ce.useContext)(Tt),Wn=()=>Object(ce.useContext)(xn),rn=C=>{var U=Object(ce.useReducer)((ze,Oe)=>{var _e=Oe;typeof Oe=="function"&&(_e=_e(ze)),Oe.action&&Oe.payload&&(_e=Oe.payload,typeof _e=="function"&&(_e=_e(ze)));var ht=Object(j.a)(Object(j.a)({},ze),_e);return ht},C),_=Object(Ge.default)(U,2),Ce=_[0],Ne=_[1],Ve=(ze,Oe)=>{Ne(ze)};return[Ce,Ve]},Ot=t("MaXC"),Jn=t("4IMT"),Zt=t.n(Jn),ft=t("refC"),St=C=>{var U=C.clearSearch,_=C.style,Ce=_===void 0?{}:_,Ne=C.className,Ve=Ne===void 0?"":Ne,ze=bt(),Oe=ze.tableState,_e=Oe===void 0?{}:Oe,ht=ze.refresh,It=_e.loading;return K.a.createElement("div",{className:"flex justify-end w-100 ".concat(Ve),style:Ce},K.a.createElement(Zt.a,{loading:It,className:"mr",type:"primary",onClick:()=>ht()},"\u67E5\u8BE2"),K.a.createElement(Zt.a,{onClick:U},"\u91CD\u7F6E"))},q=C=>{var U=Object(ce.useState)({}),_=Object(Ge.default)(U,2),Ce=_[0],Ne=_[1],Ve=bt(),ze=Ve.tableState,Oe=Ve.setTable,_e=Ve.refresh,ht=Ve.syncMethods,It=ze.search,gt=C.schema||C.propsSchema,zn=!0;!C.searchOnMount&&C.searchOnMount!==void 0&&(zn=!1);var un=Object(ce.useRef)(),Dn=et=>{Oe({search:et})},jn=et=>{try{var ct=100,Lt=Object.values(et.properties).filter(st=>st.hidden?st.hidden!==!0:st["ui:hidden"]!==!0).map(st=>st.width?st.width:st["ui:width"]),Cn=Lt.lastIndexOf(void 0),tn=Lt.slice(Cn+1).map(st=>Number(st.substring(0,st.length-1))),cn=tn.reduce((st,it)=>{var Ke=st+it;return Ke>100?Math.min(100,it):Ke},0);return ct=100-cn,ct<10&&(ct=100),ct+"%"}catch(st){return console.error(st),"100%"}},Yt=()=>{var et=JSON.stringify(un.current)===JSON.stringify(gt);if(gt&&gt.properties){if(Ce&&et)return;try{var ct=JSON.parse(JSON.stringify(gt));ct.properties.searchBtn={type:"string",widget:"searchBtn",className:"search-btn",width:jn(gt)},Ne(ct)}catch(Lt){console.error(Lt)}}else console.error("SearchForm \u4F20\u5165\u4E86\u4E0D\u6B63\u786E\u7684 schema\uFF0C\u53C2\u8003\u6587\u6863: https://x-render.gitee.io/form-render/form-render/config/schema")},dn=et=>{if(et.length){Oe({checkPassed:!1});return}Oe({checkPassed:!0})},Xe=Object(ft.useForm)({formData:It,onChange:Dn,onValidate:dn}),Bt=()=>{Xe.setValues({})};if(Object(ce.useEffect)(()=>{C.hidden||Yt()},[gt]),Object(ce.useEffect)(()=>{ht({searchApi:C.api,syncOnSearch:C.onSearch,syncAfterSearch:C.afterSearch}),(C.hidden||zn)&&_e()},[]),C.hidden)return null;var Et=typeof C.searchBtnRender=="function"?C.searchBtnRender(_e,Bt):[];return K.a.createElement("div",{className:"tr-search ".concat(C.className),style:C.style,onKeyDown:et=>{et.keyCode===13&&_e()}},K.a.createElement(ft.default,Object(G.default)({form:Xe},C,{schema:Ce,displayType:"row",widgets:Object(j.a)({searchBtn:()=>C.searchBtnRender?K.a.createElement("div",{className:"flex justify-end w-100"},Array.isArray(Et)&&Et.map((et,ct)=>K.a.createElement("div",{key:ct.toString(),style:{marginLeft:8}},et))):K.a.createElement(St,{clearSearch:Bt,style:C.searchBtnStyle||{},className:C.searchBtnClassName||""})},C.widgets)})))},Fe=q,$=t("7kJ1"),m=t("qPIi"),u=t.n(m),S=t("zmYW"),l=t("DtFj"),F=t.n(l),w=t("lfLe"),V=t("Cp9S"),Q=t.n(V),J=t("Wgwc"),k=t.n(J);function H(C,U){return C.indexOf(U)>-1}var ue=C=>H(Object.prototype.toString.call(C),"Object"),me=C=>typeof C!="string"?!1:C.indexOf("$api.")===0||C.indexOf("$func.")===0,ne=C=>C.indexOf("$api.")===0?C.substring(5):C.indexOf("$func.")===0?C.substring(6):"",je=(C,U)=>{if(typeof C!="object"||C===null){if(me(C)){var _=ne(C);return U&&U[_]&&typeof U[_]=="function"?U[_]:()=>{console.error("\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u51FD\u6570")}}return C}if(Array.isArray(C)){var Ce=[...C];return Ce.map(ze=>je(ze,U))}var Ne=Object(j.a)({},C),Ve=Object.keys(Ne);return Ve.forEach(ze=>{Ne[ze]=je(Ne[ze],U)}),Ne},pe=C=>k()(C).format("YYYY-MM-DD HH:mm"),se=C=>k()(C).format("YYYY-MM-DD"),ae=C=>"\xA5".concat(C).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),Le=(C,U,_)=>{var Ce=C;return typeof Ce=="function"?Ce=Ce(U):_&&typeof _=="function"&&_(),Ce},qe=t("NcKm"),vt=t("lbd2"),Mt=t.n(vt),kt=t("93XW"),De=t("d1El"),$e=t.n(De),pt=(C,U,_)=>_.ellipsis?K.a.createElement($e.a,{title:Dt(U,_)},C):K.a.createElement("span",null,C),pn=(C,U)=>U.copyable||U.ellipsis?K.a.createElement(Mt.a.Text,{style:{maxWidth:"100%",margin:0,padding:0},copyable:U.copyable&&C?{text:C,onCopy:()=>d.a.success("\u590D\u5236\u6210\u529F")}:void 0,ellipsis:U.ellipsis||!1},Dt(C,U)):Dt(C,U),Dt=(C,U)=>{var _=U.enum||void 0;return _&&_[C]?_[C]:C},qt=C=>C?K.a.createElement("pre",{style:{padding:16,overflow:"auto",fontSize:"85%",lineHeight:1.45,backgroundColor:"#f6f8fa",borderRadius:3}},K.a.createElement("code",{style:{whiteSpace:"pre-wrap"}},C)):null,_t=(C,U)=>{if(U.valueType==="code")return qt(C);var _=pn(C,U),Ce=pt(_,C,U);return Ce},Pn=t("WbIG"),In=t("hw8t"),Bn=t.n(In);class hn extends K.a.Component{constructor(){super(...arguments);this.state={hasError:!1,errorInfo:""}}static getDerivedStateFromError(U){return{hasError:!0,errorInfo:U.message}}componentDidCatch(U,_){console.log(U,_)}render(){return this.state.hasError?K.a.createElement(Bn.a,{status:"error",title:"Something went wrong.",extra:this.state.errorInfo}):this.props.children}}var $n=hn,wt=t("IehP"),gn=t("3R4v"),Mn=C=>{var U=Object(ce.useState)(!1),_=Object(Ge.default)(U,2),Ce=_[0],Ne=_[1],Ve=C.fullScreen;return Ce?K.a.createElement($e.a,{title:"\u9000\u51FA\u5168\u5C4F"},K.a.createElement(wt.a,{onClick:()=>{document.exitFullscreen(),Ne(!1)}})):K.a.createElement($e.a,{title:"\u5168\u5C4F"},K.a.createElement(gn.a,{onClick:()=>{if(!document.fullscreenEnabled){d.a.warning("\u5F53\u524D\u9875\u9762\u4E0D\u652F\u6301\u5168\u5C4F\u529F\u80FD");return}document.fullscreenElement||(Ne(!0),Ve().catch(ze=>d.a.error(ze.message)))}}))},la=Mn,sn=t("G851"),ea=t("ZvzK"),yn=t.n(ea),ua=t("PFYH"),Ln=t("Jv8k"),on=t.n(Ln),Sn=t("9hi+"),bn=()=>{var C=bt(),U=C.tableState,_=C.setTable;return K.a.createElement(yn.a,{overlay:K.a.createElement(on.a,{selectedKeys:[U.tableSize],onClick:Ce=>{var Ne=Ce.key;_({tableSize:Ne})},style:{width:80}},K.a.createElement(on.a.Item,{key:"default"},"\u9ED8\u8BA4"),K.a.createElement(on.a.Item,{key:"middle"},"\u4E2D\u7B49"),K.a.createElement(on.a.Item,{key:"small"},"\u7D27\u51D1")),trigger:["click"]},K.a.createElement($e.a,{title:"\u8868\u683C\u5BC6\u5EA6"},K.a.createElement(Sn.a,null)))},Se=bn,He=t("rLCj"),Ct=()=>{var C=bt(),U=C.refresh;return K.a.createElement($e.a,{title:"\u5237\u65B0"},K.a.createElement(He.a,{onClick:()=>U()}))},Pt=Ct,Yn=C=>K.a.createElement(Q.a,{size:14,style:{fontSize:16,cursor:"pointer"}},K.a.createElement(Pt,null),K.a.createElement(Se,null),K.a.createElement(la,C)),ta=Yn,Qn=C=>{var U,_,Ce;C.dataSource&&console.error("\u8BBE\u7F6Etable-render\u7684\u6570\u636E\u8BF7\u4F7F\u7528api\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003\uFF1Ahttps://form-render.github.io/table-render/guide/demo#%E5%9F%BA%E6%9C%AC-demo");var Ne=bt(),Ve=Ne.tableState,ze=Ne.setTable,Oe=Ne.doSearch,_e=Ve.dataSource,ht=Ve.pagination,It=Ve.loading,gt=Ve.api,zn=Ve.tableSize,un=Object(ce.useRef)(null),Dn=(it,Ke)=>{ze({pagination:Object(j.a)(Object(j.a)({},ht),{},{current:it,pageSize:Ke})}),!(!C.pageChangeWithRequest&&C.pageChangeWithRequest!==void 0)&&Oe({current:it,pageSize:Ke})},jn=C.headerTitle,Yt=C.toolbarRender,dn=C.columns,Xe=C.style,Bt=Xe===void 0?{}:Xe,Et=C.className,et=Et===void 0?"":Et,ct=C.toolbarAction,Lt=ct===void 0?!1:ct;dn.map(it=>{var Ke=it;if(Ke.render)return Ke;switch(Ke.valueType){case"date":Ke.render=Ft=>_t(se(Ft),Ke);break;case"dateTime":Ke.render=Ft=>_t(pe(Ft),Ke);break;case"money":Ke.render=Ft=>_t(ae(Ft),Ke);break;case"code":Ke.render=Ft=>_t(Ft,Ke);break;case"text":default:Ke.render=Ft=>_t(Ft,Ke)}return Ke});var Cn=Object(j.a)(Object(j.a)({},C),{},{dataSource:_e,pagination:C.pagination===!1?!1:Object(j.a)(Object(j.a)({onChange:Dn,size:"small"},C.pagination),{},{pageSize:((U=C.pagination)===null||U===void 0?void 0:U.pageSize)||ht.pageSize,total:((_=C.pagination)===null||_===void 0?void 0:_.total)||ht.total,current:((Ce=C.pagination)===null||Ce===void 0?void 0:Ce.current)||ht.current}),loading:It,size:zn}),tn=typeof Yt=="function"?Yt():[],cn=jn||tn&&tn.length||Array.isArray(gt),st=()=>{var it;return Promise.resolve((it=un.current)===null||it===void 0?void 0:it.requestFullscreen())};return Object(ce.useEffect)(()=>{C.size&&ze({tableSize:C.size})},[]),K.a.createElement($n,null,K.a.createElement("div",{className:"tr-table-wrapper ".concat(et),style:Bt,ref:un},K.a.createElement("div",{className:cn?"tr-table-top":"tr-table-top-nohead"},K.a.createElement("div",{className:"tr-table-title"},K.a.createElement(Vn,{title:jn})),K.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},K.a.createElement(Q.a,{align:"center"},K.a.createElement(Q.a,{size:8,style:{marginRight:8}},Array.isArray(tn)&&tn.map((it,Ke)=>K.a.createElement("div",{key:Ke.toString()},it))),Lt&&K.a.createElement(ta,{fullScreen:st})))),K.a.createElement(F.a,Cn)))},na=Qn,Vn=C=>{var U=C.title,_=bt(),Ce=_.tableState,Ne=_.setTable,Ve=_.doSearch,ze=Ce.tab,Oe=Ce.api,_e=ze||0,ht=It=>{var gt=It.target.value;Ne({tab:gt}),Ve({tab:gt})};return typeof Oe=="function"?K.a.createElement("div",{className:"tr-single-tab"},U):Oe&&Array.isArray(Oe)?Oe.length===1?K.a.createElement("div",{className:"tr-single-tab"},Oe[0].name):K.a.createElement(K.a.Fragment,null,K.a.createElement(u.a.Group,{onChange:ht,value:_e},Oe.map((It,gt)=>K.a.createElement(u.a.Button,{key:gt.toString(),value:gt},It.name))),U&&K.a.createElement("div",{className:"tr-extra-tab"},U)):K.a.createElement("div",{className:"tr-single-tab"})},ln=t("yDJ3"),Rt=t.n(ln),en=t("SA0R"),da=t.n(en),Gn=t("k/c8"),aa=t("GYr9"),ca=C=>{var U=rn({loading:!1,search:{},api:null,tab:0,dataSource:[],extraData:null,pagination:{current:1,pageSize:10,total:1},tableSize:"default",checkPassed:!0}),_=Object(Ge.default)(U,2),Ce=_[0],Ne=_[1],Ve=Object(ce.useRef)(),ze=Object(ce.useRef)(),Oe=Object(ce.useRef)(),_e=Ce.pagination,ht=Ce.search,It=Ce.tab,gt=Ce.checkPassed,zn=bt(),un=(Xe,Bt)=>{if(delete ht.searchBtn,ze.current&&ze.current(ht),!gt)return;var Et=Xe||{},et=Et.current,ct=Et.pageSize,Lt=Et.tab,Cn=Object(Jt.default)(Et,["current","pageSize","tab"]),tn=et||1,cn=ct||10,st=It;["string","number"].indexOf(typeof Lt)>-1&&(st=Lt);var it={current:tn,pageSize:cn};if(typeof Ve.current=="function")Ft(Ve.current);else if(Array.isArray(Ve.current)){var Ke=Rt()(Ve.current,"[".concat(st,"].api"));typeof Ke=="function"?Ft(Ke):d.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props")}else d.a.warning("api \u4E0D\u662F\u51FD\u6570\uFF0C\u68C0\u67E5 <Search /> \u7684 props");function Ft(va){Ne({loading:!0});var Rn=Object(j.a)(Object(j.a)(Object(j.a)(Object(j.a)({},ht),Bt),Cn),it);Array.isArray(va)&&(Rn=Object(j.a)(Object(j.a)({},Rn),{},{tab:Lt})),Promise.resolve(va(Rn)).then(Fn=>{var ra=Fn.rows,sa=Fn.total,Hn=Fn.pageSize,pa=Object(Jt.default)(Fn,["rows","total","pageSize"]);Ne(Object(j.a)(Object(j.a)({loading:!1,dataSource:ra},pa),{},{pagination:Object(j.a)(Object(j.a)({},it),{},{total:sa,pageSize:Hn||cn})})),Oe.current(Object(j.a)({rows:ra,total:sa,pageSize:Hn},pa))}).catch(Fn=>{Ne({loading:!1})})}},Dn=(Xe,Bt)=>{var Et=Xe&&Xe.stay||!1,et=Xe&&Xe.tab,ct=Bt||{};un(Object(j.a)(Object(j.a)({},Xe),{},{current:Et?_e.current:1,tab:et,pageSize:_e.pageSize}),ct)},jn=Xe=>{["string","number"].indexOf(typeof Xe)>-1?(Ne({tab:Xe}),Dn({tab:Xe})):console.error("changeTab\u7684\u5165\u53C2\u5FC5\u987B\u662Fnumber\u6216string")},Yt=Xe=>{var Bt=Xe.searchApi,Et=Xe.syncOnSearch,et=Xe.syncAfterSearch;Ve.current=Bt,ze.current=Et,Oe.current=et,Ne({api:Bt})},dn={tableState:Ce,setTable:Ne,doSearch:un,refresh:Dn,changeTab:jn,syncMethods:Yt};return dn},ma=(C,U)=>{var _=ca(C);return Object(ce.useImperativeHandle)(U,()=>_),K.a.createElement(g.a,{locale:da.a},K.a.createElement(Tt.Provider,Object(G.default)({},C,{value:_})))},fa=Object(ce.forwardRef)(ma)},RnhZ:function(Ue,Y,t){var ve={"./af":"K/tc","./af.js":"K/tc","./ar":"jnO4","./ar-dz":"o1bE","./ar-dz.js":"o1bE","./ar-kw":"Qj4J","./ar-kw.js":"Qj4J","./ar-ly":"HP3h","./ar-ly.js":"HP3h","./ar-ma":"CoRJ","./ar-ma.js":"CoRJ","./ar-sa":"gjCT","./ar-sa.js":"gjCT","./ar-tn":"bYM6","./ar-tn.js":"bYM6","./ar.js":"jnO4","./az":"SFxW","./az.js":"SFxW","./be":"H8ED","./be.js":"H8ED","./bg":"hKrs","./bg.js":"hKrs","./bm":"p/rL","./bm.js":"p/rL","./bn":"kEOa","./bn-bd":"loYQ","./bn-bd.js":"loYQ","./bn.js":"kEOa","./bo":"0mo+","./bo.js":"0mo+","./br":"aIdf","./br.js":"aIdf","./bs":"JVSJ","./bs.js":"JVSJ","./ca":"1xZ4","./ca.js":"1xZ4","./cs":"PA2r","./cs.js":"PA2r","./cv":"A+xa","./cv.js":"A+xa","./cy":"l5ep","./cy.js":"l5ep","./da":"DxQv","./da.js":"DxQv","./de":"tGlX","./de-at":"s+uk","./de-at.js":"s+uk","./de-ch":"u3GI","./de-ch.js":"u3GI","./de.js":"tGlX","./dv":"WYrj","./dv.js":"WYrj","./el":"jUeY","./el.js":"jUeY","./en-au":"Dmvi","./en-au.js":"Dmvi","./en-ca":"OIYi","./en-ca.js":"OIYi","./en-gb":"Oaa7","./en-gb.js":"Oaa7","./en-ie":"4dOw","./en-ie.js":"4dOw","./en-il":"czMo","./en-il.js":"czMo","./en-in":"7C5Q","./en-in.js":"7C5Q","./en-nz":"b1Dy","./en-nz.js":"b1Dy","./en-sg":"t+mt","./en-sg.js":"t+mt","./eo":"Zduo","./eo.js":"Zduo","./es":"iYuL","./es-do":"CjzT","./es-do.js":"CjzT","./es-mx":"tbfe","./es-mx.js":"tbfe","./es-us":"Vclq","./es-us.js":"Vclq","./es.js":"iYuL","./et":"7BjC","./et.js":"7BjC","./eu":"D/JM","./eu.js":"D/JM","./fa":"jfSC","./fa.js":"jfSC","./fi":"gekB","./fi.js":"gekB","./fil":"1ppg","./fil.js":"1ppg","./fo":"ByF4","./fo.js":"ByF4","./fr":"nyYc","./fr-ca":"2fjn","./fr-ca.js":"2fjn","./fr-ch":"Dkky","./fr-ch.js":"Dkky","./fr.js":"nyYc","./fy":"cRix","./fy.js":"cRix","./ga":"USCx","./ga.js":"USCx","./gd":"9rRi","./gd.js":"9rRi","./gl":"iEDd","./gl.js":"iEDd","./gom-deva":"qvJo","./gom-deva.js":"qvJo","./gom-latn":"DKr+","./gom-latn.js":"DKr+","./gu":"4MV3","./gu.js":"4MV3","./he":"x6pH","./he.js":"x6pH","./hi":"3E1r","./hi.js":"3E1r","./hr":"S6ln","./hr.js":"S6ln","./hu":"WxRl","./hu.js":"WxRl","./hy-am":"1rYy","./hy-am.js":"1rYy","./id":"UDhR","./id.js":"UDhR","./is":"BVg3","./is.js":"BVg3","./it":"bpih","./it-ch":"bxKX","./it-ch.js":"bxKX","./it.js":"bpih","./ja":"B55N","./ja.js":"B55N","./jv":"tUCv","./jv.js":"tUCv","./ka":"IBtZ","./ka.js":"IBtZ","./kk":"bXm7","./kk.js":"bXm7","./km":"6B0Y","./km.js":"6B0Y","./kn":"PpIw","./kn.js":"PpIw","./ko":"Ivi+","./ko.js":"Ivi+","./ku":"JCF/","./ku.js":"JCF/","./ky":"lgnt","./ky.js":"lgnt","./lb":"RAwQ","./lb.js":"RAwQ","./lo":"sp3z","./lo.js":"sp3z","./lt":"JvlW","./lt.js":"JvlW","./lv":"uXwI","./lv.js":"uXwI","./me":"KTz0","./me.js":"KTz0","./mi":"aIsn","./mi.js":"aIsn","./mk":"aQkU","./mk.js":"aQkU","./ml":"AvvY","./ml.js":"AvvY","./mn":"lYtQ","./mn.js":"lYtQ","./mr":"Ob0Z","./mr.js":"Ob0Z","./ms":"6+QB","./ms-my":"ZAMP","./ms-my.js":"ZAMP","./ms.js":"6+QB","./mt":"G0Uy","./mt.js":"G0Uy","./my":"honF","./my.js":"honF","./nb":"bOMt","./nb.js":"bOMt","./ne":"OjkT","./ne.js":"OjkT","./nl":"+s0g","./nl-be":"2ykv","./nl-be.js":"2ykv","./nl.js":"+s0g","./nn":"uEye","./nn.js":"uEye","./oc-lnc":"Fnuy","./oc-lnc.js":"Fnuy","./pa-in":"8/+R","./pa-in.js":"8/+R","./pl":"jVdC","./pl.js":"jVdC","./pt":"8mBD","./pt-br":"0tRk","./pt-br.js":"0tRk","./pt.js":"8mBD","./ro":"lyxo","./ro.js":"lyxo","./ru":"lXzo","./ru.js":"lXzo","./sd":"Z4QM","./sd.js":"Z4QM","./se":"//9w","./se.js":"//9w","./si":"7aV9","./si.js":"7aV9","./sk":"e+ae","./sk.js":"e+ae","./sl":"gVVK","./sl.js":"gVVK","./sq":"yPMs","./sq.js":"yPMs","./sr":"zx6S","./sr-cyrl":"E+lV","./sr-cyrl.js":"E+lV","./sr.js":"zx6S","./ss":"Ur1D","./ss.js":"Ur1D","./sv":"X709","./sv.js":"X709","./sw":"dNwA","./sw.js":"dNwA","./ta":"PeUW","./ta.js":"PeUW","./te":"XLvN","./te.js":"XLvN","./tet":"V2x9","./tet.js":"V2x9","./tg":"Oxv6","./tg.js":"Oxv6","./th":"EOgW","./th.js":"EOgW","./tk":"Wv91","./tk.js":"Wv91","./tl-ph":"Dzi0","./tl-ph.js":"Dzi0","./tlh":"z3Vd","./tlh.js":"z3Vd","./tr":"DoHr","./tr.js":"DoHr","./tzl":"z1FC","./tzl.js":"z1FC","./tzm":"wQk9","./tzm-latn":"tT3J","./tzm-latn.js":"tT3J","./tzm.js":"wQk9","./ug-cn":"YRex","./ug-cn.js":"YRex","./uk":"raLr","./uk.js":"raLr","./ur":"UpQW","./ur.js":"UpQW","./uz":"Loxo","./uz-latn":"AQ68","./uz-latn.js":"AQ68","./uz.js":"Loxo","./vi":"KSF8","./vi.js":"KSF8","./x-pseudo":"/X5v","./x-pseudo.js":"/X5v","./yo":"fzPg","./yo.js":"fzPg","./zh-cn":"XDpg","./zh-cn.js":"XDpg","./zh-hk":"SatO","./zh-hk.js":"SatO","./zh-mo":"OmwH","./zh-mo.js":"OmwH","./zh-tw":"kOpN","./zh-tw.js":"kOpN"};function X(G){var j=g(G);return t(j)}function g(G){if(!t.o(ve,G)){var j=new Error("Cannot find module '"+G+"'");throw j.code="MODULE_NOT_FOUND",j}return ve[G]}X.keys=function(){return Object.keys(ve)},X.resolve=g,Ue.exports=X,X.id="RnhZ"},SiV7:function(Ue,Y,t){},Zs1V:function(Ue){Ue.exports=JSON.parse("{}")},bQjt:function(Ue,Y,t){"use strict";t.r(Y);var ve=t("0Owb"),X=t("q1tI"),g=t.n(X),G=t("refC"),j=D=>{var B=Object(G.useForm)();return g.a.createElement(G.default,Object(ve.default)({form:B},D))};Y.default=j},c2mQ:function(Ue,Y,t){"use strict";t.r(Y);var ve=t("q1tI"),X=t.n(ve),g=t("refC"),G=j=>{var D=j.schema,B=Object(g.useForm)();return X.a.createElement("div",null,X.a.createElement(g.default,{form:B,schema:D}))};Y.default=G},cFvS:function(Ue,Y,t){},fK6R:function(Ue,Y,t){},gO06:function(Ue,Y,t){},iU8R:function(Ue,Y,t){},nYSz:function(Ue,Y,t){"use strict";t.r(Y),t.d(Y,"defaultSettings",function(){return ne}),t.d(Y,"defaultCommonSettings",function(){return J}),t.d(Y,"defaultGlobalSettings",function(){return je}),t.d(Y,"fromFormily",function(){return Nn}),t.d(Y,"toFormily",function(){return Fa}),t.d(Y,"fromFormRender",function(){return Ca}),t.d(Y,"toFormRender",function(){return ja});var ve=t("0Owb"),X=t("q1tI"),g=t.n(X),G=t("kvAW"),j=t("qJlv"),D=t("k1fw"),B=t("tJVT"),d=Object(X.createContext)(()=>{}),Jt=Object(X.createContext)({}),Ge=()=>Object(X.useContext)(d),ce=()=>Object(X.useContext)(Jt),K=a=>{var s=Object(X.useReducer)((p,T)=>{var P=T;typeof T=="function"&&(P=P(p)),T.action&&T.payload&&(P=T.payload,typeof P=="function"&&(P=P(p)));var M=Object(D.a)(Object(D.a)({},p),P);return M},a),c=Object(B.default)(s,2),v=c[0],b=c[1],R=(p,T)=>{b(p)};return[v,R]};function Tt(a,s,c){var v=Object(X.useRef)();Object(X.useEffect)(()=>{v.current=a},[a]);var b=Object(X.useRef)();return Object(X.useEffect)(()=>{if(!c)return;function R(){v&&v.current&&v.current()}if(R(),s!==null)return b.current=setInterval(R,s),()=>clearInterval(b.current)},[s,c]),()=>clearInterval(b.current)}function xn(a){var s=Object(X.useRef)();return Object(X.useEffect)(()=>{s.current=a},[a]),s.current}var bt=a=>{var s=Object(X.useState)(!1),c=Object(B.default)(s,2),v=c[0],b=c[1],R;try{R=localStorage.getItem(a)}catch(p){}return R||(b(!0),localStorage.setItem(a,JSON.stringify(!0))),v},Wn=()=>{var a=Object(X.useState)(!1),s=Object(B.default)(a,2),c=s[0],v=s[1],b=()=>v(!c);return[c,b]},rn=a=>{var s=Object(X.useState)(a),c=Object(B.default)(s,2),v=c[0],b=c[1];return[v,b]},Ot=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",v=()=>{var M=localStorage.getItem(c);if(M)try{return JSON.parse(M)}catch(L){return s}return s},b=Object(X.useState)(v()),R=Object(B.default)(b,2),p=R[0],T=R[1],P=M=>{T(M),localStorage.setItem(c,JSON.stringify(M))};return[p,P]},Jn=t("fwXI"),Zt=t("CC+v"),ft=t.n(Zt),St=t("MaXC"),q=t("4IMT"),Fe=t.n(q),$=t("tL+A"),m=t("QpBz"),u=t.n(m),S=t("PpiC"),l=t("cUip"),F=t("iJl9"),w=t.n(F),V=t("WWur"),Q=t.n(V),J={$id:{title:"ID",description:"\u6570\u636E\u5B58\u50A8\u7684\u540D\u79F0/\u82F1\u6587/\u5FC5\u586B",type:"string",widget:"idInput"},title:{title:"\u6807\u9898",type:"string"},description:{title:"\u8BF4\u660E",type:"string"},default:{title:"\u9ED8\u8BA4\u503C",type:"string"},required:{title:"\u5FC5\u586B",type:"boolean"},placeholder:{title:"\u5360\u4F4D\u7B26",type:"string"},bind:{title:"Bind",type:"string"},min:{title:"\u6700\u5C0F\u503C",type:"number"},max:{title:"\u6700\u5927\u503C",type:"number"},disabled:{title:"\u7981\u7528",type:"boolean"},readOnly:{title:"\u53EA\u8BFB",type:"boolean"},hidden:{title:"\u9690\u85CF",type:"boolean"},width:{title:"\u5143\u7D20\u5BBD\u5EA6",type:"string",widget:"percentSlider"},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",description:"\u9ED8\u8BA4\u503C120",type:"number",widget:"slider",max:400,props:{hideNumber:!0}}},k=[{text:"\u8F93\u5165\u6846",name:"input",widget:"input",schema:{title:"\u8F93\u5165\u6846",type:"string"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{allowClear:{title:"\u662F\u5426\u5E26\u6E05\u9664\u6309\u94AE",description:"\u586B\u5199\u5185\u5BB9\u540E\u624D\u4F1A\u51FA\u73B0x\u54E6",type:"boolean"},addonBefore:{title:"\u524Dtab",type:"string"},addonAfter:{title:"\u540Etab",type:"string"},prefix:{title:"\u524D\u7F00",type:"string"},suffix:{title:"\u540E\u7F00",type:"string"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u5927\u8F93\u5165\u6846",name:"textarea",widget:"textarea",schema:{title:"\u7F16\u8F91\u6846",type:"string",format:"textarea"},setting:{props:{title:"\u9009\u9879",type:"object",labelWidth:80,properties:{autoSize:{title:"\u9AD8\u5EA6\u81EA\u52A8",type:"boolean"},row:{title:"\u6307\u5B9A\u9AD8\u5EA6",type:"number"}}},minLength:{title:"\u6700\u77ED\u5B57\u6570",type:"number"},maxLength:{title:"\u6700\u957F\u5B57\u6570",type:"number"},pattern:{title:"\u6821\u9A8C\u6B63\u5219\u8868\u8FBE\u5F0F",type:"string",props:{placeholder:"\u586B\u5199\u6B63\u5219\u8868\u8FBE\u5F0F"}}}},{text:"\u65E5\u671F\u9009\u62E9",name:"date",widget:"date",schema:{title:"\u65E5\u671F\u9009\u62E9",type:"string",format:"date"},setting:{format:{title:"\u683C\u5F0F",type:"string",enum:["dateTime","date","time"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F","\u65F6\u95F4"]}}},{text:"\u6570\u5B57\u8F93\u5165\u6846",name:"number",widget:"number",schema:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number"},setting:{}},{text:"\u662F\u5426\u9009\u62E9",name:"checkbox",widget:"checkbox",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean",widget:"checkbox"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u52FE\u9009",type:"boolean"}}},{text:"\u662F\u5426switch",name:"switch",widget:"switch",schema:{title:"\u662F\u5426\u9009\u62E9",type:"boolean",widget:"switch"},setting:{default:{title:"\u662F\u5426\u9ED8\u8BA4\u5F00\u542F",type:"boolean"}}},{text:"\u4E0B\u62C9\u5355\u9009",name:"select",widget:"select",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u5355\u9009",name:"radio",widget:"radio",schema:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u4E0B\u62C9\u591A\u9009",name:"multiSelect",widget:"multiSelect",schema:{title:"\u591A\u9009",description:"\u4E0B\u62C9\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"],widget:"multiSelect"},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"\u70B9\u51FB\u591A\u9009",name:"checkboxes",widget:"checkboxes",schema:{title:"\u591A\u9009",description:"\u70B9\u51FB\u591A\u9009",type:"array",items:{type:"string"},enum:["A","B","C","D"],enumNames:["\u676D\u5DDE","\u6B66\u6C49","\u6E56\u5DDE","\u8D35\u9633"]},setting:{enum:{title:"\u9009\u9879\u5B57\u6BB5",type:"array",enum:[],widget:"select",props:{mode:"tags"}},enumNames:{title:"\u9009\u9879\u540D\u79F0",type:"array",enum:[],widget:"select",props:{mode:"tags"}}}},{text:"HTML",name:"html",widget:"html",schema:{title:"HTML",type:"string",widget:"html"},setting:{default:{title:"\u5C55\u793A\u5185\u5BB9",type:"string"}}}],H=[{text:"\u65E5\u671F\u8303\u56F4",name:"dateRange",widget:"dateRange",schema:{title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"dateTime",props:{placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]}},setting:{format:{title:"\u7C7B\u578B",type:"string",enum:["dateTime","date"],enumNames:["\u65E5\u671F\u65F6\u95F4","\u65E5\u671F"]}}},{text:"\u6570\u5B57\uFF08slider\uFF09",name:"slider",widget:"slider",schema:{title:"\u5E26\u6ED1\u52A8\u6761",type:"number",widget:"slider"},setting:{}},{text:"\u56FE\u7247\u5C55\u793A",name:"image",schema:{title:"\u56FE\u7247\u5C55\u793A",type:"string",format:"image"},setting:{}},{text:"\u989C\u8272\u9009\u62E9",name:"color",widget:"color",schema:{title:"\u989C\u8272\u9009\u62E9",type:"string",format:"color"},setting:{}}],ue=[{text:"object",name:"object",schema:{title:"\u5BF9\u8C61",type:"object",properties:{}},widget:"map",setting:{}},{text:"\u5E38\u89C4\u5217\u8868",name:"list",widget:"list",schema:{title:"\u6570\u7EC4",type:"array",items:{type:"object",properties:{}}},setting:{minItems:{title:"\u6700\u5C0F\u957F\u5EA6",type:"number"},maxItems:{title:"\u6700\u5927\u957F\u5EA6",type:"number"},props:{title:"\u9009\u9879",type:"object",properties:{foldable:{title:"\u662F\u5426\u53EF\u6298\u53E0",type:"boolean"}}}}},{text:"\u7B80\u5355\u5217\u8868",name:"list",widget:"list1",schema:{title:"\u6570\u7EC4",type:"array",widget:"list1",items:{type:"object",properties:{}}}},{text:"\u8868\u683C\u5217\u8868",name:"list",widget:"list2",schema:{title:"\u6570\u7EC4",type:"array",widget:"list2",items:{type:"object",properties:{}}}},{text:"\u590D\u6742\u8868\u683C\u5217\u8868",name:"list",widget:"list3",schema:{title:"\u6570\u7EC4",type:"array",widget:"list3",items:{type:"object",properties:{}}}}],me=[{text:"\u590D\u6742\u7ED3\u6784\u6837\u4F8B",name:"something",schema:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"},selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},dateName:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date"},listName:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{rangeName:{title:"\u65E5\u671F/\u65F6\u95F4\u8303\u56F4",type:"range",format:"date",props:{placeholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"]}}}}}}}}],ne=[{title:"\u57FA\u7840\u7EC4\u4EF6",widgets:k,show:!0,useCommon:!0},{title:"\u9AD8\u7EA7\u7EC4\u4EF6",widgets:H},{title:"\u5E03\u5C40\u7EC4\u4EF6",widgets:ue},{title:"\u6A21\u677F",widgets:me}],je={type:"object",properties:{column:{title:"\u6574\u4F53\u5E03\u5C40",type:"number",enum:[1,2,3],enumNames:["\u4E00\u884C\u4E00\u5217","\u4E00\u884C\u4E8C\u5217","\u4E00\u884C\u4E09\u5217"],props:{placeholder:"\u9ED8\u8BA4\u4E00\u884C\u4E00\u5217"}},labelWidth:{title:"\u6807\u7B7E\u5BBD\u5EA6",type:"number",widget:"slider",max:300,props:{hideNumber:!0}},displayType:{title:"\u6807\u7B7E\u5C55\u793A\u6A21\u5F0F",type:"string",enum:["row","column"],enumNames:["\u540C\u884C","\u5355\u72EC\u4E00\u884C"],widget:"radio"}}},pe=t("gO06"),se=t("4b23"),ae=t("JBAE"),Le=t.n(ae);function qe(a,s){return a.indexOf(s)>-1}var vt=a=>qe(Object.prototype.toString.call(a),"Object");function Mt(a){try{return JSON.parse(JSON.stringify(a))}catch(s){return a}}function kt(a){return typeof a=="number"?!0:typeof a=="string"?!Number.isNaN(Number(a)):!1}function De(a){return typeof a!="string"?!1:a.match(/^([0-9])*(%|px|rem|em)$/i)}function $e(a,s){if(a===void 0&&s===void 0)return!0;if(a===void 0||s===void 0)return!1;if(a===null&&s===null)return!0;if(a===null||s===null)return!1;if(a.constructor!==s.constructor)return!1;if(a.constructor===Array){if(a.length!==s.length)return!1;for(var c=0;c<a.length;c++)if(a[c].constructor===Array||a[c].constructor===Object){if(!$e(a[c],s[c]))return!1}else if(a[c]!==s[c])return!1}else if(a.constructor===Object){if(Object.keys(a).length!==Object.keys(s).length)return!1;for(var v=0;v<Object.keys(a).length;v++){var b=Object.keys(a)[v];if(a[b]&&typeof a[b]!="number"&&(a[b].constructor===Array||a[b].constructor===Object)){if(!$e(a[b],s[b]))return!1}else if(a[b]!==s[b])return!1}}else if(a.constructor===String||a.constructor===Number)return a===s;return!0}function pt(a){var s;switch(a){case"date":s="YYYY-MM-DD";break;case"time":s="HH:mm:ss";break;default:s="YYYY-MM-DD HH:mm:ss"}return s}function pn(a){return a.find((s,c,v)=>c!==v.findIndex(b=>JSON.stringify(s)===JSON.stringify(b)))}function Dt(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=_t(a),v=c.map(p=>{var T=p.name,P=p.schema,M=P.type,L=P.enum,oe=P.properties,z=P.items,Re=M==="object"&&oe,ge=M==="array"&&z&&!L,de=T&&s[p.name];if(!de)return p;if(ge){var Ee=Dt(z,de.items||{});return Object(D.a)(Object(D.a)({},p),{},{schema:Object(D.a)(Object(D.a)(Object(D.a)({},p.schema),de),{},{items:Ee})})}if(Re){var fe=Dt(p.schema,de);return Object(D.a)(Object(D.a)({},p),{},{schema:fe})}return Object(D.a)(Object(D.a)({},p),{},{schema:Object(D.a)(Object(D.a)({},p.schema),de)})}),b={};v.forEach(p=>{b[p.name]=p.schema});var R={};return Object.keys(s).forEach(p=>{typeof p=="string"&&p.substring(0,3)==="ui:"&&(R[p]=s[p])}),qt(b)?Object(D.a)(Object(D.a)({},a),R):Object(D.a)(Object(D.a)(Object(D.a)({},a),R),{},{properties:b})}function qt(a){return Object.keys(a).length===0}function _t(a){if(!a)return[];var s=a.properties,c=a.items,v=a.type;if(!s&&!c)return[];var b={};return v==="object"&&(b=s),v==="array"&&(b=c),Object.keys(b).map(R=>({schema:b[R],name:R}))}function Pn(){}var In=a=>Function('"use strict";return ('+a+")")(),Bn=(a,s,c)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(c),`;
    const formData = `).concat(JSON.stringify(s),`;
    return (`).concat(a,")"))();function hn(a){return typeof a=="function"?!0:typeof a=="string"&&a.substring(0,1)==="@"?a.substring(1):typeof a=="string"&&a.substring(0,2)==="{{"&&a.substring(a.length-2,a.length)==="}}"?a.substring(2,a.length-2):!1}function $n(a){return Object.keys(a).some(s=>typeof a[s]=="function"?!0:typeof a[s]=="string"?hn(a[s]):typeof a[s]=="object"?$n(a[s]):!1)}function wt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",c=arguments.length>2?arguments[2]:void 0,v=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},b=Le()(a);b.$id||(b.$id=s);var R=[],p=b.type==="object"&&b.properties,T=b.type==="array"&&b.items&&b.items.properties;return p&&(Object.entries(b.properties).forEach(P=>{var M=Object(B.default)(P,2),L=M[0],oe=M[1],z=s+"/"+L;R.push(z),wt(oe,z,s,v)}),delete b.properties),T&&(Object.entries(b.items.properties).forEach(P=>{var M=Object(B.default)(P,2),L=M[0],oe=M[1],z=s+"/"+L;R.push(z),wt(oe,z,s,v)}),delete b.items.properties),b.type&&(v[s]={parent:c,schema:b,children:R}),v}var gn=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",c=s.split("/");return c[c.length-1]},Mn=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"#",c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"something",v=s.split("/");return(typeof c=="string"||typeof c=="number")&&(v[v.length-1]=c),v.join("/")},la=a=>({parent:a.parent,schema:Object(D.a)({},a.schema),data:a.data,children:a.children});function sn(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,v={},b=a[s],R=Le()(b);return R&&(v=Object(D.a)({},R.schema),c&&v.$id&&delete v.$id,R.children.length>0&&R.children.forEach(p=>{var T=p;if(!!a[p]){try{c&&(T=a[p].schema.$id)}catch(M){console.log("catch",M)}var P=gn(T);v.type==="object"&&(v.properties||(v.properties={}),v.properties[P]=sn(a,p,c)),v.type==="array"&&v.items&&v.items.type==="object"&&(v.items.properties||(v.items.properties={}),v.items.properties[P]=sn(a,p,c))}})),v}var ea=(a,s)=>{var c=wt(s);return a in c&&delete c[a],sn(c)},yn=(a,s)=>{var c=Object(D.a)({},a);try{var v=a[s],b=s+Object(se.a)(6),R=c[v.parent].children,p=R.findIndex(T=>T===s);return R.splice(p+1,0,b),c[b]=Le()(c[s]),c[b].schema.$id=b,[c,b]}catch(T){return console.error(T,"catcherror"),[a,s]}},ua=a=>{var s=a.id,c=a.key,v=a.schema,b=a.subSchema,R=wt(v),p=Mn(s,c)+"$$"+Object(se.a)(10);if(s in R){var T=R[s].parent;if(T&&T in R){var P=R[T].children;try{var M=P.findIndex(L=>L===s);P.splice(M+1,0,p)}catch(L){console.error(L.message)}}try{R[p]={parent:R[s].parent,schema:b,children:[]},R[p].schema.$id=p}catch(L){console.error(L.message)}}return[sn(R),p]},Ln=a=>{var s=a.selected,c=a.name,v=a.schema,b=a.flatten,R=s||"#",p;if(R&&R[0]==="0"||R==="#"){var T=Object(D.a)({},b);try{var P=R.substring(1);p=P+"/"+c+"_"+Object(se.a)(6),R==="#"&&(p="#/"+c+"_"+Object(se.a)(6),P="#");var M=T[P].children;M.push(p);var L={parent:P,schema:Object(D.a)(Object(D.a)({},v),{},{$id:p}),data:void 0,children:[]};T[p]=L}catch(le){console.error(le,"catch")}return{newId:p,newFlatten:T}}var oe=c+"_"+Object(se.a)(6),z=s.split("/");z.pop(),z.push(oe),p=z.join("/");var Re=Object(D.a)({},b);try{var ge=Re[s],de=Re[ge.parent].children,Ee=de.findIndex(le=>le===s);de.splice(Ee+1,0,p);var fe={parent:ge.parent,schema:Object(D.a)(Object(D.a)({},v),{},{$id:p}),data:void 0,children:[]};Re[p]=fe}catch(le){console.error(le)}return{newId:p,newFlatten:Re}},on=a=>{var s=a.dragId,c=a.dragItem,v=a.dropId,b=a.position,R=a.flatten,p=v==="#"?"inside":b,T=Object(D.a)({},R);c&&(T[s]=c);var P=c||T[s],M=T[v],L=M;if(p!=="inside"){var oe=M.parent;L=T[oe]}if(v.indexOf(s)>-1)return[T,s];var z=s;try{var Re=L.schema.$id;z=z.replace(P.parent,Re)}catch(le){}try{var ge=T[P.parent],de=ge.children.indexOf(s);de>-1&&ge.children.splice(de,1)}catch(le){console.error(le)}try{var Ee=L.children||[],fe=Ee.indexOf(v);switch(p){case"up":Ee.splice(fe,0,s);break;case"down":Ee.splice(fe+1,0,s);break;default:Ee.push(s);break}L.children=Ee}catch(le){console.error(le)}return P.parent=L.$id,[T,z]},Sn=(a,s)=>!a||!s?{}:(Object.entries(a).forEach(c=>{var v=Object(B.default)(c,2),b=v[0],R=v[1],p=Yn(s,b);a[b].data=p}),a),bn=a=>(s,c)=>{},Se=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#";try{var v=s[c].data,b=Object.keys(s),R=b.filter(T=>{var P=c.split("/").length,M=T.split("/").length;return T.indexOf(c)>-1&&M>P});if(R&&R.length>0){var p=s[c].schema.type;v===void 0&&(p==="object"?v={}:p==="array"&&(v=[{}])),R.forEach(T=>{var P=c.split("/").length,M=T.split("/").length;if(M===P+1){var L=a(s,T),oe=gn(T);if(L===void 0)return v;p==="array"?v[0][oe]=L:v[oe]=L}})}return v}catch(T){return}},He=(a,s,c)=>{try{var v=c[s];if(v.schema[a]!==void 0)return v.schema[a];if(v&&v.parent){var b=c[v.parent].schema;return b[a]!==void 0?b[a]:He(a,v.parent,c)}}catch(R){return}};function Ct(a){return Function('"use strict";return ('+a+")")()}function Pt(a){if(!a)return[];var s=a.properties,c=a.items,v=a.type;if(!s&&!c)return[];var b={};return v==="object"&&(b=s),v==="array"&&(b=c.properties),Object.keys(b).map(R=>({schema:b[R],name:R}))}function Yn(a,s){s=ta(s,a);for(var c=0,v=s.length;a!=null&&c<v;){var b=Qn(s[c++]);Array.isArray(a)&&typeof a[0]=="object"?a=b?a[0][b]:a:a=b?a[b]:a}return c&&c==v?a:void 0}function ta(a,s){return Array.isArray(a)?a:ln(a,s)?[a]:a.match(/([^\.\/\[\]#"']+)/g)}function Qn(a){if(typeof a=="string")return a.replace(/^#\/?/,"");var s="".concat(a);return s=="0"&&1/a==-INFINITY?"-0":s}var na=/#\/.+\//,Vn=/^\w*$/;function ln(a,s){if(Array.isArray(a))return!1;var c=typeof a;return c==="number"||c==="boolean"||a==null?!0:Vn.test(a)||!na.test(a)||s!=null&&a in Object(s)}var Rt=a=>{if(a&&a.propsSchema){var s=a.propsSchema,c=Object(S.default)(a,["propsSchema"]);return Object(D.a)({schema:s},c)}return a},en=a=>{if(a&&a.schema){var s=a.schema,c=Object(S.default)(a,["schema"]);return Object(D.a)({propsSchema:s},c)}return a};function da(a){var s=arguments.length<=1?void 0:arguments[1];return s&&s.target&&a in s.target?s.target[a]:s}var Gn=a=>{var s=a.onChange,c=a.value,v=a.defaultValue,b=a.schema,R=Object(S.default)(a,["onChange","value","defaultValue","schema"]),p=Object(D.a)({},b),T=p||{},P=T.trigger,M=T.valuePropName,L={},oe="value",z=c===void 0?v:c;M&&typeof M=="string"?(oe=M,L[M]=z):L.value=z;var Re=function(){for(var fe=arguments.length,le=new Array(fe),xe=0;xe<fe;xe++)le[xe]=arguments[xe];var Be=da(oe,...le);s(Be)};P&&typeof P=="string"?L[P]=Re:L.onChange=Re;var ge={disabled:p.disabled||p["ui:disabled"],readOnly:p.readOnly||p["ui:readonly"],hidden:p.hidden||p["ui:hidden"]},de=Object(D.a)(Object(D.a)(Object(D.a)({},L),{},{schema:p},ge),R);return de},aa=t("CLjb"),ca=t("fK6R"),ma=a=>{var s=a.text,c=a.name,v=a.schema,b=a.icon,R=Object(aa.a)({item:{type:"box",dragItem:{parent:"#",schema:v,children:[]},$id:"#/".concat(c,"_").concat(Object(se.a)(6))},end:(de,Ee)=>{var fe=Ee.getDropResult()},collect:de=>({isDragging:de.isDragging()})}),p=Object(B.default)(R,2),T=p[0].isDragging,P=p[1],M=Ge(),L=ce(),oe=L.selected,z=L.flatten,Re=L.onFlattenChange,ge=()=>{var de=Ln({selected:oe,name:c,schema:v,flatten:z}),Ee=de.newId,fe=de.newFlatten;Re(fe),M({selected:Ee})};return g.a.createElement("div",{ref:P},g.a.createElement(C,{text:s,icon:b,onClick:ge}))},fa=ma,C=a=>{var s=a.onClick,c=a.text,v=a.icon;return g.a.createElement("li",{className:"left-item",onClick:s},c)},U=a=>{var s=ce(),c=s.userProps,v=c===void 0?{}:c,b=v.settings,R=Array.isArray(b)?b:ne;return g.a.createElement("div",{className:"left-layout w5-l w4"},Array.isArray(R)?R.map((p,T)=>p&&p.show===!1?null:g.a.createElement("div",{key:T},g.a.createElement("p",{className:"f6 b"},p.title),g.a.createElement("ul",{className:"pl0"},Array.isArray(p.widgets)?p.widgets.map((P,M)=>g.a.createElement(fa,Object(ve.default)({key:M.toString()},P,a))):g.a.createElement("div",null,"\u6B64\u5904\u914D\u7F6E\u6709\u8BEF")))):g.a.createElement("div",null,"\u914D\u7F6E\u9519\u8BEF\uFF1ASetting\u4E0D\u662F\u6570\u7EC4"))},_=U,Ce=t("Z8Mf"),Ne=t("j7zX"),Ve=t.n(Ne),ze=t("UESt"),Oe=t("refC");function _e(a){var s=a.onChange,c=a.value,v=a.disabled,b=a.readonly,R=a.options,p=T=>{try{var P=Mn(c,T.target.value);s(P)}catch(M){}};return g.a.createElement(w.a,Object(ve.default)({disabled:v||b},R,{onChange:p,value:gn(c)}))}var ht=t("tCGa"),It=t("DH6M"),gt=t.n(It),zn=t("b+Mx"),un=t("5Dct"),Dn=t.n(un),jn=a=>{var s=a.invalid?{borderColor:"#f5222d"}:{},c=a.schema,v=c.max,b=c.min,R=c.step,p={};(v||v===0)&&(p={max:v}),(b||b===0)&&(p=Object(D.a)(Object(D.a)({},p),{},{min:b})),R&&(p=Object(D.a)(Object(D.a)({},p),{},{step:R}));var T=!1;a.options&&a.options.hideNumber&&(T=!0);var P=z=>typeof z=="string"&&z.endsWith("%"),M=100;if(P(a.value))try{M=Number(a.value.split("%")[0]),Number.isNaN(M)&&(M=100)}catch(z){}var L=z=>{var Re=z+"%";a.onChange(Re)},oe=a.readonly?g.a.createElement("span",{style:{width:"80px"}},a.value===""?"-":a.value+"%"):g.a.createElement(Dn.a,Object(ve.default)({},a.options,p,{style:Object(D.a)({width:"80px"},s),value:M,disabled:a.disabled,onChange:L,formatter:z=>"".concat(z,"%"),parser:z=>z.replace("%","")}));return g.a.createElement("div",{className:"fr-slider"},g.a.createElement(gt.a,Object(ve.default)({style:{flexGrow:1,marginRight:T?0:12}},p,{onChange:L,max:100,tipFormatter:z=>z+"%",value:M||100,disabled:a.disabled||a.readonly})),T?null:oe)},Yt=jn;function dn(a,s){var c=a.type,v=a.format,b=a.enum,R=a.readonly;if(a.widget)return a.widget;var p=[];R&&(p.push("".concat(c,"?readonly")),p.push("*?readonly")),b&&(p.push("".concat(c,"?enum")),p.push("*?enum")),v&&p.push("".concat(c,":").concat(v)),p.push(c);var T="";return p.some(P=>(T=s[P],!!T)),T}function Xe(){var a=Object(Oe.useForm)(),s=ce(),c=s.selected,v=s.flatten,b=s.onItemChange,R=s.userProps,p=R===void 0?{}:R,T=s.widgets,P=s.mapping,M=p.settings,L=p.commonSettings,oe=Object(X.useState)({}),z=Object(B.default)(oe,2),Re=z[0],ge=z[1],de=Object(D.a)(Object(D.a)({},T),{},{idInput:_e,percentSlider:Yt}),Ee=(le,xe)=>{var Be=[];return le.forEach(tt=>{var mt=tt.widgets,ot=mt.filter(nt=>nt.widget).map(nt=>Object(D.a)(Object(D.a)({},nt),{},{setting:Object(D.a)(Object(D.a)({},xe),nt.setting)}));Be=[...Be,...ot]}),Be},fe=le=>{if(c&&le.$id)try{var xe=v[c];xe&&xe.schema&&b(c,Object(D.a)(Object(D.a)({},xe),{},{schema:le}))}catch(Be){console.log(Be,"catch")}};return Object(X.useEffect)(()=>{var le=Array.isArray(M)?[...M,{widgets:[...k,...H,...ue]}]:ne,xe=vt(L)?L:J,Be=Ee(le,xe),tt,mt;try{if(tt=v[c],tt&&(mt=dn(tt.schema,P)),mt){var ot=Be.find(jt=>jt.widget===mt)||{},nt=ot.setting;ge({type:"object",displayType:"column",showDescIcon:!0,properties:Object(D.a)({},nt)}),setTimeout(()=>{a.setValues(tt.schema)})}}catch(jt){console.log(jt)}},[c]),g.a.createElement("div",{style:{paddingRight:24}},g.a.createElement(Oe.default,{form:a,schema:Re,widgets:de,watch:{"#":le=>fe(le)}}))}function Bt(){var a=Object(Oe.useForm)(),s=ce(),c=s.widgets,v=s.frProps,b=s.userProps,R=Ge(),p=b&&b.globalSettings?b.globalSettings:je,T=P=>{P.displayType&&R({frProps:P})};return Object(X.useEffect)(()=>{a.setValues(v)},[v]),g.a.createElement("div",{style:{paddingRight:24}},g.a.createElement(Oe.default,{form:a,schema:p,watch:{"#":P=>T(P)},widgets:c}))}var Et=t("72KL"),et=Ve.a.TabPane;function ct(){var a=K({showRight:!0,showItemSettings:!1}),s=Object(B.default)(a,2),c=s[0],v=s[1],b=ce(),R=b.selected,p=c.showRight,T=c.showItemSettings,P=()=>v({showRight:!p}),M=()=>g.a.createElement("div",{className:"absolute top-0 left-0 pointer",style:{height:30,width:30,padding:"8px 0 0 8px"},onClick:P},g.a.createElement(ze.a,{className:"f5"})),L=()=>g.a.createElement("div",{className:"absolute right-0 top-0 h2 flex-center",style:{width:40,transform:"rotate(180deg)"}},g.a.createElement(M,null));return Object(X.useEffect)(()=>{R&&R[0]==="0"||R==="#"||!R?v({showItemSettings:!1}):v({showItemSettings:!0})},[R]),p?g.a.createElement("div",{className:"right-layout relative pl2"},g.a.createElement(M,null),g.a.createElement(Ve.a,{defaultActiveKey:"1",onChange:()=>{}},T&&g.a.createElement(et,{tab:"\u7EC4\u4EF6\u914D\u7F6E",key:"1"},g.a.createElement(Xe,null)),g.a.createElement(et,{tab:"\u8868\u5355\u914D\u7F6E",key:T?"2":"1"},g.a.createElement(Bt,null)))):g.a.createElement(L,null)}var Lt=a=>{var s=a.children,c=s===void 0?[]:s,v=a.preview;return g.a.createElement(g.a.Fragment,null,c.map((b,R)=>{var p={id:b,preview:v};return g.a.createElement(ra,Object(ve.default)({key:R.toString()},p))}))},Cn=Lt,tn=a=>{var s=a.$id,c=a.item,v=a.labelClass,b=a.contentClass,R=a.isComplex,p=a.children,T=c.schema,P=c.data,M=ce(),L=M.onItemChange,oe=M.flatten,z=M.widgets,Re=M.mapping,ge=M.frProps,de=ge===void 0?{}:ge,Ee=de.labelWidth,fe=de.displayType,le=de.showDescIcon,xe=de.showValidate,Be=T.title,tt=T.description,mt=T.required,ot=dn(T,Re),nt=T.widget;nt&&z[nt]&&(ot=nt);var jt=z[ot];if(!jt){var mn=Object(D.a)({},T);delete mn.widget,ot=dn(mn,Re),jt=z[ot]||"input"}var Nt=He("labelWidth",s,oe)||Ee,nn=kt(Nt)?Number(Nt):De(Nt)?Nt:110,fn={width:nn};ot==="checkbox"?fn={flexGrow:1}:(R||fe==="column")&&(fn={flexGrow:1});var An=Qt=>{var zt=Object(D.a)({},c);c.schema.type==="boolean"&&c.schema.widget==="checkbox"?zt.data=!Qt:zt.data=Qt,L(s,zt,"data")},Tn={};ot==="checkbox"&&fe==="row"&&(Tn.marginLeft=Nt);var Vt=Gn(Object(D.a)({value:P||T.default,checked:P,disabled:T.disabled,readOnly:T.readOnly,onChange:An,schema:T},T.props));return g.a.createElement(g.a.Fragment,null,T.title?g.a.createElement("div",{className:v,style:fn},g.a.createElement("label",{className:"fr-label-title ".concat(ot==="checkbox"||fe==="column"?"no-colon":""),title:Be},mt&&g.a.createElement("span",{className:"fr-label-required"}," *"),g.a.createElement("span",{className:"".concat(R?"b":""," ").concat(fe==="column"?"flex-none":"")},Be),tt&&(le?g.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":tt},g.a.createElement("i",{className:"fr-tooltip-icon"}),g.a.createElement("div",{className:"fr-tooltip-container"},g.a.createElement("i",{className:"fr-tooltip-triangle"}),tt)):g.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",tt,"\xA0)")),fe!=="row"&&xe&&g.a.createElement("span",{className:"fr-validate"},"validation"))):null,g.a.createElement("div",{className:b,style:Tn},g.a.createElement(jt,Vt,p||null)))},cn=tn,st=t("iU8R"),it=t("dhM6"),Ke=t("/MfK"),Ft=t("lfch"),va=t("aMZS");function Rn(a){var s=a.$id,c=a.item,v=a.inside,b=v===void 0?!1:v,R=a.children,p=a.style,T=Object(X.useState)(),P=Object(B.default)(T,2),M=P[0],L=P[1],oe=ce(),z=oe.flatten,Re=oe.onFlattenChange,ge=oe.selected,de=oe.hovering,Ee=Ge(),fe=c.schema,le=fe.type,xe=Object(X.useRef)(null),Be=Object(aa.a)({item:{type:"box",$id:b?0+s:s},end:(rt,yt)=>{var he=yt.getDropResult()},collect:rt=>({isDragging:rt.isDragging()})}),tt=Object(B.default)(Be,3),mt=tt[0].isDragging,ot=tt[1],nt=tt[2],jt=Object(va.a)({accept:"box",drop:(rt,yt)=>{var he=yt.didDrop();if(!he){console.log(rt.dragItem,"tems");var Ze=on({dragId:rt.$id,dragItem:rt.dragItem,dropId:s,position:M,flatten:z}),lt=Object(B.default)(Ze,2),Gt=lt[0],Kt=lt[1];Re(Gt),Ee({selected:Kt})}},hover:(rt,yt)=>{var he=yt.isOver({shallow:!0});if(he){var Ze=xe.current&&xe.current.getBoundingClientRect(),lt=(Ze.bottom-Ze.top)/2,Gt=yt.getSourceClientOffset(),Kt=Gt.y-Ze.top;b?L("inside"):(Kt<=lt&&L("up"),Kt>lt&&L("down"))}},collect:rt=>({isOver:rt.isOver({shallow:!0}),canDrop:rt.canDrop()})}),mn=Object(B.default)(jt,2),Nt=mn[0],nn=Nt.canDrop,fn=Nt.isOver,An=mn[1],Tn=nn&&fn;nt(An(xe));var Vt=rt=>{rt.stopPropagation();var yt=b?"0"+s:s;Ee({selected:yt})},Qt=rt=>{rt.stopPropagation();var yt=Object(D.a)({},z),he="#";try{var Ze=yt[s].parent,lt=yt[Ze].children,Gt=lt.indexOf(s);Gt>0?he=lt[Gt-1]:he=lt[1]||Ze}catch(Kt){console.log("catch",Kt)}delete yt[s],Re(yt),Ee({selected:he})},zt=rt=>{rt.stopPropagation();var yt=yn(z,s),he=Object(B.default)(yt,2),Ze=he[0],lt=he[1];Re(Ze),Ee({selected:lt})},Xn=()=>{},Zn=()=>{},On=ge===s&&!b;ge&&ge[0]==="0"&&(On=ge.substring(1)===s&&b);var At=b?"0"+s:s,at={backgroundColor:de===At?"#ecf5ff":"#fff",opacity:mt?0:1};if(b?at=Object(D.a)(Object(D.a)({},at),{},{borderColor:"#777",padding:"12px 12px 0",backgroundColor:"#f6f5f6"}):s==="#"?at=Object(D.a)(Object(D.a)({},at),{},{borderColor:"#777",padding:12,height:"100%",overflow:"auto",backgroundColor:"#f6f5f6"}):le==="object"&&(at=Object(D.a)(Object(D.a)({},at),{},{paddingTop:12})),Tn&&(b?at=Object(D.a)(Object(D.a)({},at),{},{boxShadow:"0 -3px 0 red"}):M==="up"?at=Object(D.a)(Object(D.a)({},at),{},{boxShadow:"0 -3px 0 red"}):M==="down"&&(at=Object(D.a)(Object(D.a)({},at),{},{boxShadow:"0 3px 0 red"}))),On&&(at=Object(D.a)(Object(D.a)({},at),{},{outline:"2px solid #409eff",borderColor:"#fff"})),p&&typeof p=="object"&&(at=Object(D.a)(Object(D.a)({},at),p)),s==="#"&&b)return R;var wn=fe&&fe.$id&&gn(fe.$id);return wn==="#"&&(wn=""),g.a.createElement("div",{ref:xe,style:at,className:"field-wrapper relative w-100",onClick:Vt,onMouseEnter:Xn,onMouseLeave:Zn},!b&&On&&s!=="#"&&g.a.createElement("div",{style:{position:"absolute",top:-2,left:-2,height:24,width:24,backgroundColor:"#409eff",padding:"2px 0 0 4px",cursor:"move"},ref:ot},g.a.createElement(it.a,{style:{color:"#fff"}})),!b&&g.a.createElement("div",{className:"absolute top-0 right-1 blue f7"},wn),R,On&&!b&&s!=="#"&&g.a.createElement("div",{style:{position:"absolute",zIndex:20,bottom:-2,right:-2,height:24,width:54,borderTopLeftRadius:8,background:"#409eff",display:"flex",justifyContent:"center",alignItems:"center"}},g.a.createElement("div",{className:"pointer",onClick:Qt},g.a.createElement(Ke.a,{style:{height:16,width:16,margin:"0 8px 0 12px",color:"#fff"}})),g.a.createElement("div",{className:"pointer",onClick:zt},g.a.createElement(Ft.a,{style:{height:16,width:16,marginRight:12,color:"#fff"}}))))}var Fn=a=>{var s=a.id,c=s===void 0?"#":s,v=a.preview,b=v===void 0?!1:v,R=ce(),p=R.flatten,T=R.frProps,P=T===void 0?{}:T,M=P.displayType,L=P.column,oe=p[c];if(!oe)return null;var z=oe.schema,Re=z.type==="object",ge=z.type==="array"&&z.enum===void 0,de=Re||ge,Ee=z.width,fe="fr-field w-100 ".concat(de?"fr-field-complex":""),le="fr-label mb2",xe="fr-content",Be={};switch(!de&&Ee?Be={width:Ee,paddingRight:"12px"}:!de&&L>1&&(Be={width:"calc(100% /".concat(L,")"),paddingRight:"12px"}),z.type){case"object":z.title&&(fe+=" ba b--black-20 pt4 pr3 pb2 relative mt3 mb4",le+=" fr-label-object bg-white absolute ph2 top-upper left-1"),fe+=" fr-field-object",z.title&&(xe+=" ml3");break;case"array":z.title&&!z.enum&&(le+=" mt2 mb3");break;case"boolean":z.widget!=="switch"&&(z.title&&(le+=" ml2",le=le.replace("mb2","mb0")),xe+=" flex items-center",fe+=" flex items-center flex-row-reverse justify-end");break;default:M==="row"&&(le=le.replace("mb2","mb0"))}var tt=z.type==="boolean"&&z.widget!=="switch";M==="row"&&!de&&!tt&&(fe+=" flex items-center",le+=" flex-shrink-0 fr-label-row",le=le.replace("mb2","mb0"),xe+=" flex-grow-1 relative"),M==="row"&&tt&&(xe+=" flex justify-end pr2");var mt={$id:c,item:oe,labelClass:le,contentClass:xe,isComplex:de},ot={children:oe.children,preview:b},nt=oe.children&&oe.children.length>0?g.a.createElement("ul",{className:"flex flex-wrap pl0"},g.a.createElement(Cn,ot)):null;if(b)return g.a.createElement("div",{style:Be,className:fe},g.a.createElement(cn,mt,(Re||ge)&&nt));var jt=Object.keys(p).length<2;return jt?g.a.createElement(Rn,{style:Be,$id:c,item:oe},g.a.createElement("div",{className:"".concat(fe," h-100 f4 black-40 flex items-center justify-center")},"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0")):g.a.createElement(Rn,{style:Be,$id:c,item:oe},g.a.createElement("div",{className:fe},g.a.createElement(cn,mt,(Re||ge)&&g.a.createElement(Rn,{$id:c,item:oe,inside:!0},nt||g.a.createElement("div",{className:"h2"})))))},ra=Fn;function sa(a){var s=a.schema,c=Object(Oe.useForm)(),v=ce(),b=v.flatten,R=v.onFlattenChange;return Object(X.useEffect)(()=>{c.setValues(Se(b))},[]),g.a.createElement(Oe.default,{schema:s,form:c,watch:{"#":p=>{R(Sn(b,p),"data")}}})}var Hn=w.a.TextArea;function pa(a,s){var c=a.schema,v=a.formData,b=a.onChange,R=a.onSchemaChange,p=a.setGlobal,T=a.userProps,P=T===void 0?{}:T,M=a.frProps,L=M===void 0?{}:M,oe=Object(S.default)(a,["schema","formData","onChange","onSchemaChange","setGlobal","userProps","frProps"]),z=K({showModal:!1,showModal2:!1,schemaForImport:""}),Re=Object(B.default)(z,2),ge=Re[0],de=Re[1],Ee=oe.preview,fe=P.transformFrom,le=P.transformTo,xe=P.isNewVersion,Be=P.extraButtons,tt=Be===void 0?[]:Be,mt={};c&&(mt=Dt(c.schema,c.uiSchema));var ot=wt(mt),nt=Sn(ot,v),jt=function(Ze){var lt=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"schema",Gt=sn(Ze),Kt=Se(Ze);lt==="schema"&&R&&R(Gt),b(Kt)},mn=(he,Ze,lt)=>{nt[he]=Ze,jt(nt,lt)},Nt=()=>de({showModal:!ge.showModal}),nn=()=>de({showModal2:!ge.showModal2}),fn=()=>{p({schema:{schema:{type:"object"}},formData:{},selected:void 0})},An=he=>{de({schemaForImport:he.target.value})},Tn=()=>{try{var he=fe(Ct(ge.schemaForImport)),Ze=!0;he&&he.propsSchema&&(Ze=!1);var lt=Rt(he),Gt=lt.schema,Kt=Object(S.default)(lt,["schema"]);p(ha=>({schema:{schema:Gt},formData:{},selected:void 0,isNewVersion:Ze,frProps:Object(D.a)(Object(D.a)({},ha.frProps),Kt)}))}catch(ha){u.a.info("\u683C\u5F0F\u4E0D\u5BF9\u54E6\uFF0C\u8BF7\u91CD\u65B0\u5C1D\u8BD5")}nn()},Vt={},Qt="";try{var zt=sn(nt,"#",!0);L&&L.column&&(zt.column=L.column),L&&L.displayType&&(zt.displayType=L.displayType),L&&L.showDescIcon&&(zt.showDescIcon=L.showDescIcon),Vt=le(Object(D.a)({schema:zt},L)),xe||(Vt=en(Vt)),Qt=JSON.stringify(Vt,null,2)}catch(he){}var Xn=()=>{Q()(Qt),u.a.info("\u590D\u5236\u6210\u529F"),Nt()},Zn=()=>Vt,On=he=>{try{var Ze=he.schema,lt=he.propsSchema,Gt=he.uiSchema,Kt=Object(S.default)(he,["schema","propsSchema","uiSchema"]),ha={schema:Ze||lt},Sa=!0;!Ze&&lt&&(Sa=!1),p(kn=>Object(D.a)(Object(D.a)({},kn),{},{schema:ha,formData:{},selected:void 0,isNewVersion:Sa,frProps:Object(D.a)(Object(D.a)({},kn.frProps),Kt)}))}catch(kn){console.error(kn)}},At=()=>{Q()(Qt)};Object(X.useImperativeHandle)(s,()=>({getValue:Zn,setValue:On,copyValue:At}));var at=Object(D.a)({flatten:nt,onFlattenChange:jt,onItemChange:mn,userProps:P,frProps:L},oe),wn=Array.isArray(tt)?tt:[],rt=wn.filter(he=>he===!0||he===!1),yt=wn.filter(he=>vt(he)&&he.text);return g.a.createElement(d.Provider,{value:p},g.a.createElement(Jt.Provider,{value:at},g.a.createElement("div",{className:"fr-generator-container"},g.a.createElement(_,null),g.a.createElement("div",{className:"mid-layout pr2"},g.a.createElement("div",{className:"mv2 mh1"},rt[0]!==!1&&g.a.createElement(Fe.a,{className:"mr2 mb1",onClick:()=>{p({preview:!Ee,selected:"#"})}},Ee?"\u5F00\u59CB\u7F16\u8F91":"\u6700\u7EC8\u5C55\u793A"),rt[1]!==!1&&g.a.createElement(Fe.a,{className:"mr2",onClick:fn},"\u6E05\u7A7A"),rt[2]!==!1&&g.a.createElement(Fe.a,{className:"mr2",onClick:nn},"\u5BFC\u5165"),rt[3]!==!1&&g.a.createElement(Fe.a,{type:"primary",className:"mr2",onClick:Nt},"\u5BFC\u51FAschema"),yt.map((he,Ze)=>g.a.createElement(Fe.a,Object(ve.default)({key:Ze.toString(),className:"mr2"},he),he.text||he.children))),g.a.createElement("div",{className:"dnd-container"},g.a.createElement("div",{style:{height:Ee?33:0}}),Ee?g.a.createElement(sa,{schema:Vt.schema}):g.a.createElement(ra,null))),g.a.createElement(ct,{globalProps:L}),g.a.createElement(ft.a,{visible:ge.showModal,onOk:Xn,onCancel:Nt,okText:"\u590D\u5236",cancelText:"\u53D6\u6D88"},g.a.createElement("div",{className:"mt3"},g.a.createElement(Hn,{style:{fontSize:12},value:Qt,autoSize:{minRows:10,maxRows:30}}))),g.a.createElement(ft.a,{visible:ge.showModal2,okText:"\u5BFC\u5165",cancelText:"\u53D6\u6D88",onOk:Tn,onCancel:nn},g.a.createElement("div",{className:"mt3"},g.a.createElement(Hn,{style:{fontSize:12},value:ge.schemaForImport,placeholder:"\u8D34\u5165\u9700\u8981\u5BFC\u5165\u7684schema\uFF0C\u6A21\u6837\u53EF\u70B9\u51FB\u5BFC\u51FAschema\u53C2\u8003",onChange:An,autoSize:{minRows:10,maxRows:30}}))))))}var ba=Object(X.forwardRef)(pa);ba.defaultProps={labelWidth:120};var Da=ba,Ca=a=>a,ja=a=>a,Oa=t("w5pM");function $a(a){return g.a.createElement("div",{className:"flex flex-column"},g.a.createElement("div",{className:"fr-set w-100 flex flex-column ba pt4 pb2 ph2 relative b--black-10"},g.a.createElement("span",{className:"fr-move-icon f4"},":::"),a.children,g.a.createElement(Fe.a,{size:"small",className:"self-end",type:"dashed",icon:g.a.createElement(Ke.a,null)},"\u5220\u9664")),g.a.createElement(Fe.a,{size:"small",className:"self-end",icon:g.a.createElement(Oa.a,null)},"\u6DFB\u52A0"))}var Ma=t("xwS/"),La=t("4l2o"),Ga=t("k/c8"),Ra={schema:{type:"object",properties:{}},uiSchema:{},formData:{}};function Ea(a,s){var c=a.defaultValue,v=a.templates,b=a.submit,R=a.transformer,p=a.extraButtons,T=a.settings,P=a.commonSettings,M=a.globalSettings,L=a.widgets,oe=L===void 0?{}:L,z=a.mapping,Re=z===void 0?{}:z,ge=Ca,de=ja;R&&(typeof R.from=="function"&&(ge=R.from),typeof R.to=="function"&&(de=R.to));var Ee=s||Object(X.useRef)(),fe=K({formData:{},frProps:{displayType:"row"},hovering:void 0,isNewVersion:!0,preview:!1,schema:{},selected:void 0}),le=Object(B.default)(fe,2),xe=le[0],Be=le[1];Object(X.useEffect)(()=>{var At=c?ge(c):Ra;At&&At.propsSchema?Be({isNewVersion:!1}):Be({isNewVersion:!0}),Be({schema:Rt(At),formData:At&&At.formData||{}})},[c]);var tt=xe.formData,mt=xe.frProps,ot=xe.hovering,nt=xe.isNewVersion,jt=xe.preview,mn=xe.schema,Nt=xe.selected,nn=mt.displayType,fn=nn==="row",An=Object(D.a)(Object(D.a)({},mt),{},{showDescIcon:fn}),Tn=At=>{Be({formData:At}),a.onChange&&a.onChange(At)},Vt=At=>{var at=Object(D.a)({},mn);at.schema=At,Be({schema:at}),a.onSchemaChange&&setTimeout(()=>{if(!!Ee.current){var wn=Ee.current.getValue();a.onSchemaChange(wn)}},0)},Qt=Object(D.a)(Object(D.a)(Object(D.a)({},Oe.mapping),Re),{},{array:"listEditor"}),zt=Object(D.a)(Object(D.a)(Object(D.a)({},Oe.widgets),oe),{},{listEditor:$a}),Xn={preview:jt,mapping:Qt,widgets:zt,selected:Nt,hovering:ot},Zn={templates:v,submit:b,transformFrom:ge,transformTo:de,isNewVersion:nt,extraButtons:p,settings:T,commonSettings:P,globalSettings:M},On=Object(D.a)(Object(D.a)({schema:mn,formData:tt,onChange:Tn,setGlobal:Be,onSchemaChange:Vt},Xn),{},{userProps:Zn,frProps:An});return g.a.createElement(Da,Object(ve.default)({ref:Ee},On))}var Va=Object(X.forwardRef)(Ea),za=t("trko"),Un=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,v=s.type==="object"&&s.properties,b=s.type==="array"&&s.items&&s.items.properties,R=v||b;if(R){var M=Pt(s);M.map(L=>{v&&(s.properties[L.name]=a(L.schema,s)),b&&(s.items.properties[L.name]=a(L.schema,s))})}else if(s.enum&&Array.isArray(s.enum)){var p=s.enum;if(vt(p[0])&&p[0].label!==void 0&&p[0].value!==void 0){var T=p.map(L=>L.label),P=p.map(L=>L.value);s.enum=P,s.enumNames=T}}return s["x-component"]&&(s.widget=s["x-component"]),s["x-component-props"]&&(s.props=s["x-component-props"]),c&&s.required&&(c.required&&Array.isArray(c.required)?c.required.push(s.name):c.required=[s.name]),delete s.key,delete s.name,delete s.required,delete s["x-component"],delete s["x-component-props"],s},Nn=a=>{var s=Un(a);return{schema:s}},xa=function a(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,b=s.type==="object"&&s.properties,R=s.type==="array"&&s.items&&s.items.properties,p=b||R;if(p){var P=Pt(s);P.map(M=>{b&&(s.properties[M.name]=a(M.schema,s,M.name)),R&&(s.items.properties[M.name]=a(M.schema,s,M.name))})}else if(s.enum&&Array.isArray(s.enum)&&s.enumNames&&Array.isArray(s.enumNames)){var T=s.enum.map((M,L)=>({value:M,label:s.enumNames[L]}));s.enum=T}return s.widget&&(s["x-component"]=s.widget),s.props&&(s["x-component-props"]=s.props),delete s.widget,delete s.props,delete s.enumNames,v&&(s.name=v,s.key=v),c&&v&&c.required&&Array.isArray(c.required)&&c.required.indexOf(v)>-1&&(s.required=!0),s},Fa=a=>{var s=a.schema;return xa(s)},Na=(a,s)=>g.a.createElement(G.a,{backend:j.a,context:window},g.a.createElement(Va,Object(ve.default)({ref:s},a))),Ka=Y.default=Object(X.forwardRef)(Na)},refC:function(Ue,Y,t){"use strict";t.r(Y),t.d(Y,"widgets",function(){return Aa}),t.d(Y,"mapping",function(){return it}),t.d(Y,"useForm",function(){return Ya}),t.d(Y,"connectForm",function(){return Dr}),t.d(Y,"createWidget",function(){return Nn});var ve=t("Saan"),X=t("vgIT"),g=t.n(X),G=t("0Owb"),j=t("k1fw"),D=t("PpiC"),B=t("q1tI"),d=t.n(B),Jt=t("Pv/L"),Ge=t("tJVT"),ce=t("7EGn"),K=t("XIp8"),Tt=t("vEhQ");window.log1=e=>{console.log("%ccommon:","color: #00A7F7; font-weight: 500;",e)},window.log2=e=>{console.log("%cwarning:","color: #f50; font-weight: 500;",e)},window.log3=e=>{console.log("%csuccess:","color: #87d068; font-weight: 500;",e)},window.log4=e=>{console.log("%cspecial:","color: #722ed1; font-weight: 500;",e)};function xn(e){var n=/^(?:\w+:)?\/\/(\S+)$/;return typeof e!="string"?!1:n.test(e)}function bt(e,n){if(n)return!1;if(e.widget==="checkbox")return!0;if(e&&e.type==="boolean")return e.enum?!1:e.widget===void 0}function Wn(e){return typeof e=="string"?e.replace(/\[\]/g,""):e}function rn(e){if(typeof e=="string"){var n=e.split(".");return n.length===1?"#":(n.pop(),n.join("."))}return"#"}function Ot(e,n){if(n==="#"||!n)return e||{};if(typeof n=="string")return Object(ce.a)(e,n);console.error("path has to be a string")}function Jn(e){var n,r;if(e==="#")return{id:"#",dataIndex:[]};if(typeof e!="string")throw Error("path ".concat(e," is not a string!!! Something wrong here"));var o=/\[[0-9]+\]/g,i=e.match(o);return i?(n=e.replace(o,"[]"),r=i.map(f=>Number(f.substring(1,f.length-1)))):n=e,{id:n,dataIndex:r}}function Zt(e,n){if(e==="#")return e;if(typeof e!="string")throw Error("id ".concat(e," is not a string!!! Something wrong here"));var r=e;return Array.isArray(n)&&n.forEach(o=>{r=r.replace(/\[\]/,"[".concat(o,"]"))}),Wn(r)}function ft(e){return e.type==="array"&&e.items&&e.enum===void 0}function St(e){return e.type==="object"&&e.properties}function q(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"#",r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=m(e),f=n;i.$id||(i.$id=f);var y=[];St(i)&&Object.entries(i.properties).forEach(E=>{var h=Object(Ge.default)(E,2),x=h[0],I=h[1],N=ft(I)?x+"[]":x,A=f==="#"?N:f+"."+N;y.push(A),q(I,A,f,o)}),ft(i)&&Object.entries(i.items.properties).forEach(E=>{var h=Object(Ge.default)(E,2),x=h[0],I=h[1],N=ft(I)?x+"[]":x,A=f==="#"?N:f+"."+N;y.push(A),q(I,A,f,o)});var O=Array.isArray(i.rules)?[...i.rules]:[];return["boolean","function","string"].indexOf(typeof i.required)>-1&&O.push({required:i.required}),i.type&&(o[f]={parent:r,schema:i,children:y,rules:O}),o}function Fe(e,n){return e.indexOf(n)>-1}var $=e=>Fe(Object.prototype.toString.call(e),"Object"),m=K.a;function u(e){return typeof e=="number"?!0:typeof e=="string"?!Number.isNaN(Number(e)):!1}function S(e){return typeof e!="string"?!1:e.match(/^([0-9])*(%|px|rem|em)$/i)}function l(e,n){if(e===void 0&&n===void 0)return!0;if(e===void 0||n===void 0)return!1;if(e===null&&n===null)return!0;if(e===null||n===null)return!1;if(e.constructor!==n.constructor)return!1;if(e.constructor===Array){if(e.length!==n.length)return!1;for(var r=0;r<e.length;r++)if(e[r].constructor===Array||e[r].constructor===Object){if(!l(e[r],n[r]))return!1}else if(e[r]!==n[r])return!1}else if(e.constructor===Object){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var o=0;o<Object.keys(e).length;o++){var i=Object.keys(e)[o];if(e[i]&&typeof e[i]!="number"&&(e[i].constructor===Array||e[i].constructor===Object)){if(!l(e[i],n[i]))return!1}else if(e[i]!==n[i])return!1}}else if(e.constructor===String||e.constructor===Number)return e===n;return!0}function F(e){var n;switch(e){case"date":n="YYYY-MM-DD";break;case"time":n="HH:mm:ss";break;case"dateTime":n="YYYY-MM-DD HH:mm:ss";break;case"week":n="YYYY-w";break;case"year":n="YYYY";break;case"quarter":n="YYYY-Q";break;case"month":n="YYYY-MM";break;default:n="YYYY-MM-DD"}return n}function w(e){return e.find((n,r,o)=>r!==o.findIndex(i=>JSON.stringify(n)===JSON.stringify(i)))}function V(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=J(e),o=r.map(y=>{var O=y.name,E=y.schema,h=E.type,x=E.enum,I=E.properties,N=E.items,A=h==="object"&&I,Z=h==="array"&&N&&!x,ie=O&&n[y.name];if(!ie)return y;if(Z){var ye=V(N,ie.items||{});return Object(j.a)(Object(j.a)({},y),{},{schema:Object(j.a)(Object(j.a)(Object(j.a)({},y.schema),ie),{},{items:ye})})}if(A){var Te=V(y.schema,ie);return Object(j.a)(Object(j.a)({},y),{},{schema:Te})}return Object(j.a)(Object(j.a)({},y),{},{schema:Object(j.a)(Object(j.a)({},y.schema),ie)})}),i={};o.forEach(y=>{i[y.name]=y.schema});var f={};return Object.keys(n).forEach(y=>{typeof y=="string"&&y.substring(0,3)==="ui:"&&(f[y]=n[y])}),Q(i)?Object(j.a)(Object(j.a)({},e),f):Object(j.a)(Object(j.a)(Object(j.a)({},e),f),{},{properties:i})}function Q(e){return Object.keys(e).length===0}function J(e){if(!e)return[];var n=e.properties,r=e.items,o=e.type;if(!n&&!r)return[];var i={};return o==="object"&&(i=n),o==="array"&&(i=r),Object.keys(i).map(f=>({schema:i[f],name:f}))}function k(){}var H=e=>Function('"use strict";return ('+e+")")(),ue=(e,n,r)=>Function(`"use strict";
    const rootValue = `.concat(JSON.stringify(r),`;
    const formData = `).concat(JSON.stringify(n),`;
    return (`).concat(e,")"))();function me(e){if(typeof e!="string")return!1;var n=/^{{(.+)}}$/,r=/^{{(function.+)}}$/,o=/^{{(.+=>.+)}}$/;return!!(typeof e=="string"&&e.match(n)&&!e.match(r)&&!e.match(o))}function ne(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,o=rn(r),i=Ot(n,o)||{};if(typeof e=="string"){var f=e.substring(2,e.length-2),y=/formData.([a-zA-Z0-9.$_\[\]]+)/g,O=/rootValue.([a-zA-Z0-9.$_\[\]]+)/g,E=`
    return (`.concat(f.replaceAll(y,(h,x)=>JSON.stringify(Ot(n,x))).replaceAll(O,(h,x)=>JSON.stringify(Ot(i,x))),")");try{return Function(E)()}catch(h){return e}}else return e}var je=function e(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return $(n)?Object.keys(n).some(o=>{var i=n[o];return typeof i=="string"?me(i):!r&&$(i)?e(i,!1):!1}):!1},pe=(e,n,r)=>{var o=m(e);return Object.keys(o).forEach(i=>{var f=o[i];if(me(f)&&(o[i]=ne(f,n,r)),typeof i=="string"&&i.toLowerCase().indexOf("props")>-1){var y=o[i];$(y)&&Object.keys(y).forEach(O=>{o[i][O]=ne(y[O],n,r)})}}),o};function se(e){return Object.keys(e).some(n=>typeof e[n]=="function"?!0:typeof e[n]=="string"?me(e[n]):typeof e[n]=="object"?se(e[n]):!1)}var ae=(e,n,r)=>{try{var o=r[n];if(o.schema[e]!==void 0)return o.schema[e];if(o&&o.parent){var i=r[o.parent].schema;return i[e]!==void 0?i[e]:ae(e,o.parent,r)}}catch(f){return}},Le=()=>{var e=localStorage.getItem("SAVES");if(e)try{var n=JSON.parse(e),r=n.length;if(r)return r+1}catch(o){return 1}else return 1};function qe(e){return Function('"use strict";return ('+e+")")()}function vt(e){if(!e)return[];var n=e.properties,r=e.items,o=e.type;if(!n&&!r)return[];var i={};return o==="object"&&(i=n),o==="array"&&(i=r.properties),Object.keys(i).map(f=>({schema:i[f],name:f}))}var Mt=e=>{if(e&&e.propsSchema){var n=e.propsSchema,r=Object(D.default)(e,["propsSchema"]);return Object(j.a)({schema:n},r)}return e},kt=e=>{if(e&&e.schema){var n=e.schema,r=Object(D.default)(e,["schema"]);return Object(j.a)({propsSchema:n},r)}return e},De=e=>{if(!!e){var n=e&&e.items&&e.items.enum,r=e&&e.enum;return n||r}},$e=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Array.isArray(n)?n:r},pt=e=>{var n="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return!!(e&&new RegExp(n).test(e))};function pn(e){var n=arguments.length<=1?void 0:arguments[1];return n&&n.target&&e in n.target?n.target[e]:n}var Dt=e=>{try{var n=e.split("."),r=n.slice(-1)[0];return r}catch(o){return console.error(o,"getKeyFromPath"),""}},qt=(e,n)=>{if(typeof e=="boolean")return e?"yes":"no";if(St(n)||ft(n))return"-";if(Array.isArray(n.enum)&&Array.isArray(n.enumNames))try{return n.enumNames[n.enum.indexOf(e)]}catch(r){return e}return e},_t=e=>{var n={};return $(e)?Object.keys(e).forEach(r=>{n[r]=_t(e[r])}):Array.isArray(e)?n=e.filter(r=>!!(r&&JSON.stringify(r)!=="{}")):n=e,n},Pn=e=>{var n=e.schema,r=e.isRequired,o=r===void 0?!0:r,i={},f={};if(St(n))i.type="object",o&&n.required===!0&&(i.required=!0),i.fields={},Object.keys(n.properties).forEach(N=>{var A=n.properties[N];Array.isArray(n.required)&&n.required.indexOf(N)>-1&&(A.required=!0),i.fields[N]=Pn({schema:A,isRequired:o})});else if(ft(n))i.type="array",o&&n.required===!0&&(i.required=!0),i.defaultField={type:"object",fields:{}},Object.keys(n.items.properties).forEach(N=>{var A=n.items.properties[N];Array.isArray(n.required)&&n.required.indexOf(N)>-1&&(A.required=!0),i.defaultField.fields[N]=Pn({schema:A,isRequired:o})});else{var y=N=>n.type?Object(j.a)(Object(j.a)({},N),{},{type:n.type}):N.pattern&&typeof N.pattern=="string"?Object(j.a)(Object(j.a)({},N),{},{pattern:new RegExp(N.pattern)}):N,O=n.required,E=Object(D.default)(n,["required"]);switch(["type","pattern","min","max","len"].forEach(N=>{Object.keys(E).indexOf(N)>-1&&(f[N]=E[N])}),n.type){case"range":f.type="array";break;case"html":f.type="string";break;default:break}switch(n.format){case"email":case"url":f.type=n.format;break;default:break}var h;if(o&&n.required===!0&&(h={required:!0}),n.rules)if(Array.isArray(n.rules)){var x=[];n.rules.forEach(N=>{N.required===!0?o&&(h=N):x.push(y(N))}),i=[f,...x]}else $(n.rules)?i=[f,y(n.rules)]:i=f;else i=f;if(h&&(Array.isArray(i)?i.push(h):$(i)&&(i=[i,h])),n.format==="image"){var I={validator:(N,A)=>{var Z=/([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;return A?!!Z.exec(A)||xn(A):!0},message:"${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage"};Array.isArray(i)?i.push(I):$(i)&&(i=[i,I])}}return i},In=e=>{var n=e.split(".");return n.map(r=>isNaN(Number(r))?r:"[".concat(r,"]")).reduce((r,o)=>o[0]==="["||r===""?r+o:r+"."+o,"")},Bn=(e,n)=>{for(var r=e.split(".");r.length>0;){var o=r,i=Object(Jt.a)(o),f=i[0],y=i.slice(1);f=f.split("[")[0];var O=void 0;if(St(n)?O=n.properties[f]:ft(n)&&(O=n.items.properties[f]),r=y,O)return Bn(y.join("."),O);var E={required:!1};if(n.required===!0&&(E.required=!0),n.rules){var h=n.rules.find(x=>x.required);h&&(E=h)}return E}},hn=e=>{var n={};return St(e)?Object.keys(e.properties).forEach(r=>{var o=e.properties[r],i=hn(o);n[r]=i}):e.default!==void 0?n=m(e.default):e.type==="boolean"?n=!1:n=void 0,n},$n=(e,n)=>{if(typeof e!="string")return"";if(!n)return e;if(e=e.replace("${title}",n.title),e=e.replace("${type}",n.format||n.type),n.min&&(e=e.replace("${min}",n.min)),n.max&&(e=e.replace("${max}",n.max)),n.rules){var r=n.rules.find(y=>y.min!==void 0);r&&(e=e.replace("${min}",r.min));var o=n.rules.find(y=>y.max!==void 0);o&&(e=e.replace("${max}",o.max));var i=n.rules.find(y=>y.len!==void 0);i&&(e=e.replace("${len}",i.len));var f=n.rules.find(y=>y.pattern!==void 0);f&&(e=e.replace("${pattern}",f.pattern))}return e},wt=(e,n)=>{var r=m(e);if(r=n(r),St(r)){var o=[];Array.isArray(r.required)&&(o=r.required,delete r.required),Object.keys(r.properties).forEach(i=>{var f=r.properties[i];o.indexOf(i)>-1&&(f.required=!0),r.properties[i]=wt(f,n)})}else ft(r)&&Object.keys(r.items.properties).forEach(i=>{var f=r.items.properties[i];r.items.properties[i]=wt(f,n)});return r},gn=e=>wt(e,Mn),Mn=e=>{try{var n=m(e);if(n.rules=n.rules||[],n.props=n.props||{},n["ui:options"]&&(n.props=n["ui:options"],delete n["ui:options"]),n.pattern){var r={pattern:n.pattern};n.message&&n.message.pattern&&(r.message=n.message.pattern),n.rules.push(r),delete n.pattern,delete n.message}return n.minLength&&(n.rules.push({min:n.minLength}),delete n.minLength),n.maxLength&&(n.rules.push({max:n.maxLength}),n.props.maxLength=n.maxLength,delete n.maxLength),n.min&&(n.rules.push({min:n.min}),n.props.min=n.min,delete n.min),n.max&&(n.rules.push({max:n.max}),n.props.max=n.max,delete n.max),n.step&&(n.props.step=n.step,delete n.step),n.minItems&&(n.props.minItems=n.minItems,delete n.minItems),n.maxItems&&(n.props.maxItems=n.maxItems,delete n.maxItems),n["ui:className"]&&(n.className=n["ui:className"],delete n["ui:className"]),n["ui:hidden"]&&(n.hidden=n["ui:hidden"],delete n["ui:hidden"]),n["ui:readonly"]&&(n.readOnly=n["ui:readonly"],delete n["ui:readonly"]),n["ui:disabled"]&&(n.disabled=n["ui:disabled"],delete n["ui:disabled"]),n["ui:width"]&&(n.width=n["ui:width"],delete n["ui:width"]),n["ui:labelWidth"]&&(n.labelWidth=n["ui:labelWidth"],delete n["ui:labelWidth"]),n.rules&&n.rules.length===0&&delete n.rules,n}catch(o){return console.error("\u65E7schema\u8F6C\u6362\u5931\u8D25\uFF01",o),e}},la=(e,n)=>{var r=parseRootValue(e),o=replaceParseValue(r)},sn=e=>{if(typeof e!="string")return!1;var n=/^{{(function.+)}}$/,r=/^{{(.+=>.+)}}$/;return e.match(n)?e.match(n)[1]:e.match(r)?e.match(r)[1]:!1},ea=function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o={};return $(n)?(n.theme&&r[n.theme]&&(o=Object(j.a)(Object(j.a)({},n),r[n.theme])),Object.keys(n).forEach(i=>{o[i]=e(n[i],r)})):o=n,o},yn=e=>Array.isArray(e)?e.map(n=>n&&$(n)?yn(n):n).filter(n=>n!=null):$(e)?Object.entries(e).map(n=>{var r=Object(Ge.default)(n,2),o=r[0],i=r[1];return[o,i&&$(i)?yn(i):i]}).reduce((n,r)=>{var o=Object(Ge.default)(r,2),i=o[0],f=o[1];return f==null||(n[i]=f),n},{}):e,ua=(e,n)=>(Object.keys(n).forEach(r=>{var o=n[r].schema&&n[r].schema.hidden===!0;Object(ce.a)(e,r)!==void 0&&o&&Object(Tt.a)(e,r,void 0)}),e),Ln=Object(B.createContext)(()=>{}),on=Object(B.createContext)({}),Sn=()=>Object(B.useContext)(Ln),bn=()=>Object(B.useContext)(on),Se=e=>Object(B.useReducer)((n,r)=>Object(j.a)(Object(j.a)({},n),r),e);function He(e,n,r){var o=Object(B.useRef)();Object(B.useEffect)(()=>{o.current=e},[e]);var i=Object(B.useRef)();return Object(B.useEffect)(()=>{if(!r)return;function f(){o&&o.current&&o.current()}if(f(),n!==null)return i.current=setInterval(f,n),()=>clearInterval(i.current)},[n,r]),()=>clearInterval(i.current)}function Ct(e){var n=Object(B.useRef)();return Object(B.useEffect)(()=>{n.current=e},[e]),n.current}var Pt=e=>{var n=Object(B.useState)(!1),r=Object(Ge.default)(n,2),o=r[0],i=r[1],f;try{f=localStorage.getItem(e)}catch(y){}return f||(i(!0),localStorage.setItem(e,JSON.stringify(!0))),o},Yn=()=>{var e=Object(B.useState)(!1),n=Object(Ge.default)(e,2),r=n[0],o=n[1],i=()=>o(!r);return[r,i]},ta=e=>{var n=Object(B.useState)(e),r=Object(Ge.default)(n,2),o=r[0],i=r[1];return[o,i]},Qn=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"SAVES",o=()=>{var h=localStorage.getItem(r);if(h)try{return JSON.parse(h)}catch(x){return n}return n},i=Object(B.useState)(o()),f=Object(Ge.default)(i,2),y=f[0],O=f[1],E=h=>{O(h),localStorage.setItem(r,JSON.stringify(h))};return[y,E]},na=t("SiV7"),Vn=t("MaXC"),ln=t("4IMT"),Rt=t.n(ln),en=t("eOfH"),da=t("h0/l"),Gn=t.n(da),aa=t("/MfK"),ca=t("lfch"),ma=e=>{var n=e.schema,r=e.displayList,o=r===void 0?[]:r,i=e.dataIndex,f=e.deleteItem,y=e.addItem,O=e.copyItem,E=e.getFieldsProps;return d.a.createElement("div",{className:"fr-list-1"},o.map((h,x)=>{var I=E(x);return I.displayType="inline",n.props&&n.props.hideTitle&&(I.hideTitle=!0),d.a.createElement("div",{key:x,style:{display:"flex"}},d.a.createElement(ia,I),d.a.createElement("div",{style:{marginTop:6}},d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>f(x),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement(aa.a,{style:{fontSize:17,marginLeft:8}})),d.a.createElement(ca.a,{style:{fontSize:15,marginLeft:8},onClick:()=>O(x)})))}),d.a.createElement(Rt.a,{style:{marginTop:o.length>0?0:8},type:"dashed",onClick:y},"\u65B0\u589E\u4E00\u6761"))},fa=ma,C=t("lfLe"),U=t("Cp9S"),_=t.n(U),Ce=e=>{var n=e.displayList,r=n===void 0?[]:n,o=e.deleteItem,i=e.copyItem,f=e.addItem,y=e.displayType,O=e.getFieldsProps;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"fr-card-list"},r.map((E,h)=>{var x=O(h);return x.displayType=y,d.a.createElement("div",{className:"fr-card-item ".concat(y==="row"?"fr-card-item-row":""),key:h},d.a.createElement("div",{className:"fr-card-index"},h+1),d.a.createElement(ia,x),d.a.createElement(_.a,{direction:"horizontal",className:"fr-card-toolbar"},d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>o(h),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement(aa.a,{style:{fontSize:17,marginLeft:8}})),d.a.createElement(ca.a,{style:{fontSize:16,marginLeft:8},onClick:()=>i(h)})))})),d.a.createElement(Rt.a,{style:{marginTop:r.length>0?0:8},type:"dashed",onClick:f},"\u65B0\u589E\u4E00\u6761"))},Ne=Ce,Ve=t("zmYW"),ze=t("DtFj"),Oe=t.n(ze),_e=120,ht=e=>{var n=e.displayList,r=n===void 0?[]:n,o=e.dataIndex,i=e.children,f=e.deleteItem,y=e.addItem,O=e.flatten,E=r.map((x,I)=>({index:I})),h=i.map(x=>{var I=O[x],N=I&&I.schema||{};return{dataIndex:x,title:N.required?d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:"fr-label-required"}," *"),d.a.createElement("span",null,N.title)):N.title,width:_e,render:(A,Z,ie)=>{var ye=[...o,Z.index];return d.a.createElement(ia,{hideTitle:!0,displayType:"inline",key:ie.toString(),id:x,dataIndex:ye})}}});return h.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:60,render:(x,I,N)=>d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>f(N),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement("a",null,"\u5220\u9664"))}),d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"w-100 mb2 tr"},d.a.createElement(Rt.a,{type:"primary",size:"small",onClick:y},"\u65B0\u589E")),d.a.createElement(Oe.a,{scroll:{x:"max-content"},columns:h,dataSource:E,rowKey:"index",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},It=ht,gt=t("dc+4"),zn=t("Btem"),un=t.n(zn),Dn=t("Oxum"),jn=e=>{var n=e.message,r=e.schema,o=e.hideValidation,i="";return typeof n=="string"&&(i=n),Array.isArray(n)&&(i=n[0]||""),i=$n(i,r),!i&&o?null:d.a.createElement("div",{className:"error-message"},i)},Yt=jn,dn=120,Xe=e=>{var n=e.displayList,r=n===void 0?[]:n,o=e.dataPath,i=e.dataIndex,f=e.children,y=e.deleteItem,O=e.addItem,E=e.moveItemDown,h=e.moveItemUp,x=e.flatten,I=e.errorFields,N=e.getFieldsProps,A=Object(B.useRef)(-1),Z=Se({showDrawer:!1}),ie=Object(Ge.default)(Z,2),ye=ie[0],Te=ie[1],re=ye.showDrawer,be=r.map((W,Me)=>Object(j.a)(Object(j.a)({},W),{},{$idx:Me})),Je=f.map(W=>{var Me=x[W],Pe=Me&&Me.schema||{},ee=Dt(W);return{dataIndex:ee,title:Pe.required?d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{className:"fr-label-required"}," *"),d.a.createElement("span",null,Pe.title)):Pe.title,width:dn,render:(Ie,ut)=>{var dt=Zt(W,[ut.$idx]),ke=I.find(xt=>xt.name==dt)||{};return d.a.createElement("div",null,d.a.createElement("div",null,qt(Ie,Pe)),ke.error&&d.a.createElement(Yt,{message:ke.error,schema:Pe}))}}});Je.push({title:"\u64CD\u4F5C",key:"$action",fixed:"right",width:80,render:(W,Me,Pe)=>{var ee=W&&W.$idx||0;return d.a.createElement(_.a,null,d.a.createElement("a",{onClick:()=>we(ee)},"\u7F16\u8F91"),d.a.createElement(Gn.a,{title:"\u786E\u5B9A\u5220\u9664?",onConfirm:()=>y(ee),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88"},d.a.createElement("a",null,"\u5220\u9664")))}});var We=N(A.current),we=W=>{A.current=W,Te({showDrawer:!0})},Ye=()=>{A.current=-1,Te({showDrawer:!1})},Ae=()=>{var W=O();we(W)};return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"w-100 mb2 tr"},d.a.createElement(Rt.a,{type:"primary",size:"small",onClick:Ae},"\u65B0\u589E")),d.a.createElement(un.a,{width:"600",title:"\u7F16\u8F91",placement:"right",onClose:Ye,visible:re,destroyOnClose:!0},d.a.createElement("div",{className:"fr-container"},d.a.createElement(ia,We))),d.a.createElement(Oe.a,{scroll:{x:"max-content"},columns:Je,dataSource:be,rowClassName:(W,Me)=>{var Pe=W&&W.$idx,ee=I.find(Ie=>Ie.name.indexOf("".concat(o,"[").concat(Pe,"]"))>-1);return ee?"fr-row-error":""},rowKey:"$idx",size:"small",pagination:{size:"small",hideOnSinglePage:!0}}))},Bt=Xe,Et=e=>{var n=e.parentId,r=e.dataIndex,o=r===void 0?[]:r,i=e.children,f=i===void 0?[]:i,y=e.errorFields,O=e.displayType,E=bn(),h=E.formData,x=E.flatten,I=E.onItemChange,N=E.removeErrorField,A="list";try{A=x[n].schema.widget}catch(ee){}var Z=x[n],ie=Z&&Z.schema,ye=Zt(n,o),Te;typeof ye=="string"&&(Te=Object(ce.a)(h,ye));var re=Array.isArray(Te)?Te:[{}],be=()=>{var ee=[...re,{}],Ie=ee.length-1;return I(ye,ee),Ie},Je=ee=>{var Ie=re[ee],ut=[...re.slice(0,ee),Ie,...re.slice(ee)];I(ye,ut)},We=ee=>{var Ie=re.filter((ut,dt)=>dt!==ee);I(ye,Ie),N("".concat(ye,"[").concat(ee,"]"))},we=ee=>{if(ee!==0){var Ie=re[ee],ut=re[ee-1],dt=re;dt[ee]=ut,dt[ee-1]=Ie,I(ye,dt)}},Ye=ee=>{if(!(ee>=re.length-1)){var Ie=re[ee],ut=re[ee+1],dt=re;dt[ee]=ut,dt[ee+1]=Ie,I(ye,dt)}},Ae={type:"object",properties:{},props:ie.props||{},$id:ie.$id},W={schema:Ae,children:f},Me=(ee,Ie)=>Object(j.a)({_item:W,dataIndex:[...o,ee]},Ie),Pe={displayList:re,schema:ie,dataPath:ye,dataIndex:o,children:f,deleteItem:We,addItem:be,copyItem:Je,moveItemDown:Ye,moveItemUp:we,listData:Te,flatten:x,errorFields:y,displayType:O,getFieldsProps:Me};switch(A){case"list0":return d.a.createElement(Ne,Pe);case"list1":return d.a.createElement(fa,Pe);case"list2":return d.a.createElement(It,Pe);case"list3":return d.a.createElement(Bt,Pe);default:return d.a.createElement(Ne,Pe)}},et=Et,ct=e=>{var n=e.children,r=n===void 0?[]:n,o=e.dataIndex,i=o===void 0?[]:o,f=e.displayType,y=e.hideTitle;return d.a.createElement(d.a.Fragment,null,r.map((O,E)=>{var h={displayType:f,id:O,dataIndex:i,hideTitle:y};return d.a.createElement(ia,Object(G.default)({key:E.toString()},h))}))},Lt=ct;function Cn(e,n,r){var o=this,i=Object(B.useRef)(null),f=Object(B.useRef)(0),y=Object(B.useRef)(null),O=Object(B.useRef)([]),E=Object(B.useRef)(),h=Object(B.useRef)(),x=Object(B.useRef)(e),I=Object(B.useRef)(!0);x.current=e;var N=!n&&n!==0&&typeof window!="undefined";if(typeof e!="function")throw new TypeError("Expected a function");n=+n||0,r=r||{};var A=!!r.leading,Z="trailing"in r?!!r.trailing:!0,ie="maxWait"in r,ye=ie?Math.max(+r.maxWait||0,n):null;Object(B.useEffect)(()=>(I.current=!0,()=>{I.current=!1}),[]);var Te=Object(B.useMemo)(()=>{var re=Ae=>{var W=O.current,Me=E.current;return O.current=E.current=null,f.current=Ae,h.current=x.current.apply(Me,W)},be=(Ae,W)=>{N&&cancelAnimationFrame(y.current),y.current=N?requestAnimationFrame(Ae):setTimeout(Ae,W)},Je=Ae=>{if(!I.current)return!1;var W=Ae-i.current,Me=Ae-f.current;return!i.current||W>=n||W<0||ie&&Me>=ye},We=Ae=>(y.current=null,Z&&O.current?re(Ae):(O.current=E.current=null,h.current)),we=()=>{var Ae=Date.now();if(Je(Ae))return We(Ae);if(!!I.current){var W=Ae-i.current,Me=Ae-f.current,Pe=n-W,ee=ie?Math.min(Pe,ye-Me):Pe;be(we,ee)}},Ye=function(){for(var W=Date.now(),Me=Je(W),Pe=arguments.length,ee=new Array(Pe),Ie=0;Ie<Pe;Ie++)ee[Ie]=arguments[Ie];if(O.current=ee,E.current=o,i.current=W,Me){if(!y.current&&I.current)return f.current=i.current,be(we,n),A?re(i.current):h.current;if(ie)return be(we,n),re(i.current)}return y.current||be(we,n),h.current};return Ye.cancel=()=>{y.current&&(N?cancelAnimationFrame(y.current):clearTimeout(y.current)),f.current=0,O.current=i.current=E.current=y.current=null},Ye.isPending=()=>!!y.current,Ye.flush=()=>y.current?We(Date.now()):h.current,Ye},[A,ie,n,ye,Z,N]);return Te}var tn=Cn,cn=e=>{var n=e.labelClass,r=e.labelStyle,o=e.schema,i=e.displayType,f=bn(),y=f.displayType,O=f.readOnly,E=o.title,h=o.description,x=o.required,I=o.type,N=I==="object",A=o.displayType||i||y||"column";return d.a.createElement("div",{className:n,style:r},d.a.createElement("label",{className:"fr-label-title ".concat(bt(o,O)||A==="column"?"no-colon":""),title:E},x===!0&&d.a.createElement("span",{className:"fr-label-required"}," *"),d.a.createElement("span",{className:"".concat(N?"b":""," ").concat(A==="column"?"flex-none":"")},E),h&&(A==="row"?d.a.createElement("span",{className:"fr-tooltip-toggle","aria-label":h},d.a.createElement("i",{className:"fr-tooltip-icon"}),d.a.createElement("div",{className:"fr-tooltip-container"},d.a.createElement("i",{className:"fr-tooltip-triangle"}),h)):A==="inline"?null:d.a.createElement("span",{className:"fr-desc ml2"},"(\xA0",h,"\xA0)"))))},st=cn,it={default:"input",string:"input",array:"list",boolean:"checkbox",integer:"number",number:"number",object:"map",html:"html","string:upload":"upload","string:url":"url","string:dateTime":"date","string:date":"date","string:year":"date","string:month":"date","string:week":"date","string:quarter":"date","string:time":"time","string:textarea":"textarea","string:color":"color","string:image":"imageInput","range:time":"timeRange","range:dateTime":"dateRange","range:date":"dateRange","range:year":"dateRange","range:month":"dateRange","range:week":"dateRange","range:quarter":"dateRange","*?enum":"radio","*?enum_long":"select","array?enum":"checkboxes","array?enum_long":"multiSelect","*?readOnly":"html"};function Ke(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:it,r=e.type,o=e.format,i=e.enum,f=e.readOnly,y=e.widget,O=[];f&&(O.push("".concat(r,"?readOnly")),O.push("*?readOnly")),i&&(Array.isArray(i)&&(r==="array"&&i.length>6||r!=="array"&&i.length>2)?(O.push("".concat(r,"?enum_long")),O.push("*?enum_long")):(O.push("".concat(r,"?enum")),O.push("*?enum")));var E=y||o;E&&O.push("".concat(r,":").concat(E)),O.push(r);var h="";return O.some(x=>(h=n[x],!!h)),h}var Ft={checkbox:{valuePropName:"checked"},switch:{valuePropName:"checked"}},va=t("6UYH"),Rn=t("fTA7"),Fn=t.n(Rn),ra=t("bd+v"),sa=t("LB4q"),Hn=t.n(sa),pa=t("Hjg5"),ba=t("rmht"),Da=t.n(ba),Ca=t("pJsf"),ja=t("g4D/"),Oa=t.n(ja),$a=t("LGkk"),Ma=t("rVaU"),La=t.n(Ma),Ga=t("b+Mx"),Ra=t("5Dct"),Ea=t.n(Ra),Va=t("cUip"),za=t("iJl9"),Un=t.n(za),Nn=(e,n)=>r=>o=>{var i=o.schema,f=Object(D.default)(o,["schema"]),y=Object(j.a)(Object(j.a)({},i),n),O=typeof e=="function"?e(Object(j.a)({schema:y},f)):{},E=Object(j.a)(Object(j.a)({schema:y},f),O),h=xa(E);return d.a.createElement(r,h)},xa=e=>{var n=e.onChange,r=e.value,o=e.defaultValue,i=e.schema,f=Object(D.default)(e,["onChange","value","defaultValue","schema"]),y=Object(j.a)({},i),O=y||{},E=O.trigger,h=O.valuePropName,x={},I="value",N=r===void 0?o:r;h&&typeof h=="string"?(I=h,x[h]=N):x.value=N;var A=function(){for(var Te=arguments.length,re=new Array(Te),be=0;be<Te;be++)re[be]=arguments[be];var Je=pn(I,...re);n(Je)};E&&typeof E=="string"?x[E]=A:x.onChange=A;var Z={disabled:y.disabled||y["ui:disabled"],readOnly:y.readOnly||y["ui:readonly"],hidden:y.hidden||y["ui:hidden"]},ie=Object(j.a)(Object(j.a)(Object(j.a)({},x),{},{schema:y},Z),f);return ie},Fa=e=>{var n=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var f=n||{},y=f.enum,O=f.enumNames;i=$e(y).map((E,h)=>{var x=O&&Array.isArray(O)?O[h]:E,I=typeof x=="string"&&x[0]==="<";return I&&(x=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:x}})),{label:x,value:E}})}return{options:i,mode:"multiple",style:Object(j.a)({width:"100%",marginTop:5},r)}},Na=Nn(Fa)(Oa.a.Group),Ka=Na,a=t("ypy7"),s=t.n(a),c=t("rNQX");function v(e){var n=e.schema.format,r=i=>{e.disabled||e.readonly||e.onChange(i.color)},o=i=>{e.onChange(i.target.value)};return d.a.createElement("div",{className:"fr-color-picker"},d.a.createElement(s.a,{type:n,animation:"slide-up",color:e.value||"#ffffff",onChange:r}),e.readonly?d.a.createElement("span",null,e.value||"#ffffff"):d.a.createElement(Un.a,{placeholder:"#ffffff",disabled:e.disabled,value:e.value,onChange:o}))}var b=t("GBD3"),R=t("wXtC"),p=t.n(R),T=t("wd/R"),P=t.n(T),M=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,f=Object(D.default)(e,["onChange","format","value","style"]),y=F(r),O=o||void 0;typeof O=="string"&&(r==="week"&&(O=O&&O.substring(0,O.length-1)),r==="quarter"&&(O=O.replace("Q",""))),O&&(O=P()(O,y));var E=(x,I)=>{n(I)},h={value:O,style:Object(j.a)({width:"100%"},i),onChange:E};return r==="dateTime"&&(h.showTime=!0),["week","month","quarter","year"].indexOf(r)>-1&&(h.picker=r),h=Object(j.a)(Object(j.a)({},h),f),d.a.createElement(p.a,h)},L=t("mxgt"),oe=t("4ZwL"),z=t.n(oe),Re=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,f=Object(D.default)(e,["onChange","format","value","style"]),y=F(r),O=o?P()(o,y):void 0,E=(x,I)=>{n(I)},h=Object(j.a)({value:O,style:Object(j.a)({width:"100%"},i),onChange:E},f);return d.a.createElement(z.a,h)},ge=p.a.RangePicker,de=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,f=Object(D.default)(e,["onChange","format","value","style"]),y=F(r),O=Array.isArray(o)?o:[],E=Object(Ge.default)(O,2),h=E[0],x=E[1];typeof h=="string"&&typeof x=="string"&&(r==="week"&&(h=h.substring(0,h.length-1),x=x.substring(0,x.length-1)),r==="quarter"&&(h=h.replace("Q",""),x=x.replace("Q","")));var I=[];h&&x&&(I=[P()(h,y),P()(x,y)]);var N=(Z,ie)=>{n(ie)},A={value:I,style:Object(j.a)({width:"100%"},i),onChange:N};return r==="dateTime"&&(A.showTime=!0),["week","month","quarter","year"].indexOf(r)>-1&&(A.picker=r),A=Object(j.a)(Object(j.a)({},A),f),d.a.createElement(ge,A)},Ee=de,fe=z.a.RangePicker,le=e=>{var n=e.onChange,r=e.format,o=e.value,i=e.style,f=Object(D.default)(e,["onChange","format","value","style"]),y=F(r),O=Array.isArray(o)?o:[],E=Object(Ge.default)(O,2),h=E[0],x=E[1],I=h&&x?[P()(h,y),P()(x,y)]:[],N=(Z,ie)=>{n(ie)},A=Object(j.a)({style:Object(j.a)({width:"100%"},i),value:I,onChange:N},f);return d.a.createElement(fe,A)},xe=le;function Be(e){var n=e.children;return d.a.createElement("div",{className:"w-100"},n)}var tt=t("7LYo"),mt=t("5GXF"),ot=t.n(mt),nt=ot.a.Panel;function jt(e){var n=e.children,r=e.title,o=Object(D.default)(e,["children","title"]),i=bn(),f=i.theme,y=i.displayType;return r?f=="1"?d.a.createElement("div",{className:"w-100"},d.a.createElement("div",{style:{fontSize:17,fontWeight:500,paddingBottom:4,borderBottom:"1px solid rgba( 0, 0, 0, .2 )",marginBottom:16}},r),d.a.createElement("div",{style:{marginLeft:y=="row"?0:12}},n)):d.a.createElement("div",{className:"w-100"},d.a.createElement(ot.a,{defaultActiveKey:["1"]},d.a.createElement(nt,{header:d.a.createElement("div",{style:{fontSize:16,fontWeight:500}},r),key:"1",className:"fr-collapse-object"},n))):d.a.createElement("div",{className:"w-100"},n)}var mn=t("ek7I"),Nt=t("FAat"),nn=t.n(Nt),fn=e=>{var n=e.schema,r=e.value,o=e.style,i=e.options,f=Object(D.default)(e,["schema","value","style","options"]),y;if(i&&Array.isArray(i))y=i;else{var O=n||{},E=O.enum,h=O.enumNames;y=$e(E).map((N,A)=>{var Z=h&&Array.isArray(h)?h[A]:N,ie=typeof Z=="string"&&Z[0]==="<";return ie&&(Z=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:Z}})),{label:Z,value:N}})}var x=Object(j.a)({options:y,mode:"multiple",style:Object(j.a)({width:"100%"},o)},f),I=Array.isArray(r)?r:void 0;return d.a.createElement(nn.a,Object(G.default)({value:I},x))},An=fn,Tn=t("7kJ1"),Vt=t("qPIi"),Qt=t.n(Vt),zt=e=>{var n=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var f=n||{},y=f.enum,O=f.enumNames;i=$e(y).map((E,h)=>{var x=O&&Array.isArray(O)?O[h]:E,I=typeof x=="string"&&x[0]==="<";return I&&(x=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:x}})),{label:x,value:E}})}return{options:i,mode:"multiple",style:Object(j.a)({width:"100%",minWidth:120,marginTop:5},r)}},Xn=Nn(zt)(Qt.a.Group),Zn=Xn,On=e=>{var n=e.schema,r=e.style,o=e.options,i;if(o&&Array.isArray(o))i=o;else{var f=n||{},y=f.enum,O=f.enumNames;i=$e(y).map((E,h)=>{var x=O&&Array.isArray(O)?O[h]:E,I=typeof x=="string"&&x[0]==="<";return I&&(x=d.a.createElement("span",{dangerouslySetInnerHTML:{__html:x}})),{label:x,value:E}})}return{options:i,style:Object(j.a)({width:"100%"},r)}},At=Nn(On)(nn.a),at=At,wn=t("tCGa"),rt=t("DH6M"),yt=t.n(rt),he=e=>{var n=e.schema,r=e.value,o=e.onChange,i=e.hideInput,f=e.inputProps,y=Object(D.default)(e,["schema","value","onChange","hideInput","inputProps"]),O=n.max,E=n.min,h=n.step,x={};return(O||O===0)&&(x={max:O}),(E||E===0)&&(x=Object(j.a)(Object(j.a)({},x),{},{min:E})),h&&(x=Object(j.a)(Object(j.a)({},x),{},{step:h})),d.a.createElement("div",{className:"fr-slider"},d.a.createElement(yt.a,Object(G.default)({style:{flexGrow:1,marginRight:i?0:12}},x,{onChange:o,value:typeof r=="number"?r:E||0},y)),i?null:d.a.createElement(Ea.a,Object(G.default)({},x,f,{style:{width:"90px"},value:r,onChange:o})))},Ze=he,lt=t("VDQ/"),Gt=t("B8+X"),Kt=t.n(Gt),ha=t("tL+A"),Sa=t("QpBz"),kn=t.n(Sa),Ha=t("z7Xi");function Ua(e){var n=e.action,r=e.value,o=e.onChange,i=e.uploadProps,f=e.buttonProps,y=Object(j.a)({name:"file",type:"file",action:n,onChange(h){h.file.status==="done"?(kn.a.success("".concat(h.file.name," \u4E0A\u4F20\u6210\u529F")),o(h.file.response.url)):h.file.status==="error"&&kn.a.error("".concat(h.file.name," \u4E0A\u4F20\u5931\u8D25"))},onRemove(){o("")}},i),O={icon:d.a.createElement(Ha.a,null),children:"\u4E0A\u4F20"},E=Object(j.a)(Object(j.a)({},O),f);return d.a.createElement("div",{className:"fr-upload-mod"},d.a.createElement(Kt.a,Object(G.default)({},y,{className:"fr-upload-file"}),d.a.createElement(Rt.a,E)),r&&d.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"fr-upload-preview"},"\u5DF2\u4E0A\u4F20\u5730\u5740"))}var Mr=t("/xgg"),Xa=t("aOJk"),Za=t.n(Xa),ka=t("mpQp"),qa="https://img.alicdn.com/tfs/TB14tSiKhTpK1RjSZFKXXa2wXXa-354-330.png",_a=e=>{var n=e.value;return d.a.createElement(Za.a,{content:d.a.createElement("img",{src:n||qa,alt:"\u56FE\u7247\u5730\u5740\u9519\u8BEF",className:"fr-preview-image"}),className:"fr-preview",placement:"bottom"},d.a.createElement(ka.a,null))};function er(e){var n=e.value,r=Object(D.default)(e,["value"]);return d.a.createElement(Un.a,Object(G.default)({value:n,addonAfter:d.a.createElement(_a,{value:n})},r))}var tr=e=>{var n=e.value,r=xn(n);return r?d.a.createElement("a",{target:"_blank",href:n},"\u6D4B\u8BD5\u94FE\u63A5"):d.a.createElement("div",null,"\u6D4B\u8BD5\u94FE\u63A5")};function nr(e){var n=e.value,r=Object(D.default)(e,["value"]);return d.a.createElement(Un.a,Object(G.default)({value:n,addonAfter:d.a.createElement(tr,{value:n})},r))}function ar(e){var n=e.value,r=e.schema,o="-";if(r.type==="boolean")o=n===!0?"\u2714":"\u2718";else if(Array.isArray(r.enum)&&Array.isArray(r.enumNames)){if(["string","number"].indexOf(typeof n)>-1){var i=r.enum.indexOf(n);o=r.enumNames[i]||"-"}else if(Array.isArray(n)){var f="-";n.forEach(y=>{var O=r.enum.indexOf(y),E=r.enumNames[O];E&&(f+=","+E)}),o=f.replace("-,","")}}else typeof n=="number"?o=String(n):typeof n=="string"&&(o=n);return d.a.createElement("div",{style:{marginTop:5,minHeight:22},dangerouslySetInnerHTML:{__html:o}})}var rr=Un.a.TextArea,sr=Nn(e=>{var n=e.style;return{style:Object(j.a)({width:"100%"},n)}})(Ea.a),ir=Nn(e=>{var n=e.style;return{style:Object(j.a)({marginTop:5},n)}})(La.a),or=Nn(e=>{var n=e.autoSize;return{autoSize:n||{minRows:3}}})(rr),lr=e=>{var n=e.style,r=Object(D.default)(e,["style"]);return d.a.createElement(Oa.a,Object(G.default)({style:Object(j.a)({paddingTop:4,paddingBottom:4},n)},r))},ur=e=>{var n=e.style,r=Object(D.default)(e,["style"]);return d.a.createElement(Da.a,Object(G.default)({style:Object(j.a)({width:"100%"},n)},r))},dr=e=>{var n=e.style,r=Object(D.default)(e,["style"]);return d.a.createElement(Hn.a,Object(G.default)({style:Object(j.a)({width:"100%"},n)},r))},Aa={input:Un.a,checkbox:lr,checkboxes:Ka,color:v,date:M,time:Re,dateRange:Ee,timeRange:xe,imageInput:er,url:nr,list:Be,map:jt,multiSelect:An,number:sr,radio:Zn,select:at,slider:Ze,switch:ir,textarea:or,upload:Ua,html:ar,rate:Fn.a,treeSelect:ur,cascader:dr},Lr=Object.keys(Aa),cr=e=>d.a.createElement("div",null,d.a.createElement("div",{style:{color:"red"}},"schema\u672A\u5339\u914D\u5230\u5C55\u793A\u7EC4\u4EF6\uFF1A"),d.a.createElement("div",null,JSON.stringify(e))),mr=e=>{var n=e.schema,r=e.onChange,o=e.value,i=e.children,f=e.onItemChange,y=e.formData,O=e.getValue,E=e.readOnly,h=e.dataPath,x=e.dataIndex,I=Sn(),N=I.widgets,A=I.mapping,Z=Ke(n,A),ie=n.widget||n["ui:widget"];if(ie&&N[ie]&&(Z=ie),E&&!St(n)&&!ft(n)&&(Z="html"),!Z)return Z="input",d.a.createElement(cr,{schema:n});var ye=N[Z],Te=Ft[Z],re=Object(j.a)({schema:Object(j.a)(Object(j.a)({},n),Te),onChange:r,value:o,children:i},n.props);["title","placeholder","disabled","format"].forEach(Je=>{n[Je]&&(re[Je]=n[Je])}),n.props&&(re=Object(j.a)(Object(j.a)({},re),n.props)),re.addons={onItemChange:f,setValue:f,getValue:O,formData:y,dataPath:h,dataIndex:x};var be=xa(re);return d.a.createElement(ye,be)},fr=(e,n)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:JSON.stringify(e.value)===JSON.stringify(n.value)&&JSON.stringify(e.schema)===JSON.stringify(n.schema),Ta=d.a.memo(mr,fr),vr=e=>{var n=e.$id,r=e.dataIndex,o=e.item,i=e.labelClass,f=e.labelStyle,y=e.contentClass,O=e.hasChildren,E=e.children,h=e.errorFields,x=h===void 0?[]:h,I=e.hideTitle,N=e.displayType,A=o.schema,Z=bn(),ie=Z.onItemChange,ye=Z.formData,Te=Z.setEditing,re=Z.touchKey,be=Z.debounceInput,Je=Z.readOnly,We=Zt(n,r),we=x.find(vn=>vn.name===We),Ye=we&&we.error,Ae=Array.isArray(Ye)&&Ye.length>0,W=Ae?y+" ant-form-item-has-error":y,Me=Ot(ye,We),Pe={},ee=tn(Te,350),Ie=Je!==void 0?Je:A.readOnly,ut=vn=>{re(We),be&&(Te(!0),ee(!1)),typeof We=="string"&&ie(We,vn)},dt={labelClass:i,labelStyle:f,schema:A,displayType:N},ke=N==="inline"||Ie===!0,xt={message:Ye,schema:A,displayType:N,hideValidation:ke},Xt={className:i,style:f},Wt=!I&&!!A.title;I&&A.title&&(A.placeholder=A.placeholder||A.title);var $t={schema:A,readOnly:Ie,onChange:ut,getValue:Ot,formData:ye,value:Me,onItemChange:ie,dataIndex:r,dataPath:We};if($t.children=O?E:bt(A,Ie)?A.title:null,bt(A,Ie))return d.a.createElement(d.a.Fragment,null,Wt&&d.a.createElement("div",Xt),d.a.createElement("div",{className:W,style:Pe},d.a.createElement(Ta,$t),d.a.createElement(Yt,xt)));var En=d.a.createElement(st,dt);return St(A)?(En=d.a.createElement("div",{style:{display:"flex"}},En,d.a.createElement(Yt,xt)),d.a.createElement("div",{className:W,style:Pe},d.a.createElement(Ta,Object(G.default)({},$t,{message:Ye,title:Wt?En:void 0})))):d.a.createElement(d.a.Fragment,null,Wt&&En,d.a.createElement("div",{className:"".concat(W," ").concat(I?"fr-content-no-title":""),style:Pe},d.a.createElement(Ta,$t),d.a.createElement(Yt,xt)))},Vr=(e,n)=>e.schema&&e.schema.$id==="#"||e.schema&&e.schema.type==="object"?!1:JSON.stringify(e.value)===JSON.stringify(n.value)&&JSON.stringify(e.schema)===JSON.stringify(n.schema),pr=vr,hr=e=>{var n=e.id,r=n===void 0?"#":n,o=e._item,i=e.dataIndex,f=i===void 0?[]:i,y=e.hideTitle,O=y===void 0?!1:y,E=e.hideValidation,h=E===void 0?!1:E,x=e.debugCss,I=Object(D.default)(e,["id","_item","dataIndex","hideTitle","hideValidation","debugCss"]),N=Object(B.useRef)(),A=bn(),Z=A.displayType,ie=A.column,ye=A.flatten,Te=A.errorFields,re=A.labelWidth,be=A.readOnly,Je=A.isEditing,We=A.formData,we=o||ye[r];if(!we)return null;var Ye=we.schema,Ae=Zt(r,f),W=m(Ye);if(Je&&N.current?W=N.current:(je(W)&&(W=pe(W,We,Ae)),N.current=W),W.hidden)return null;var Me=W.displayType||I.displayType||Z||"column",Pe=ft(W),ee=St(W),Ie=ee||Pe,ut=bt(W,be),dt=W.width||W["ui:width"],ke="fr-field ".concat(Me==="inline"?"":"w-100"," flex"),xt="fr-label",Xt="fr-content";switch(W.type){case"object":ee&&(W.title&&(xt+=" fr-label-object"),ke+=" fr-field-object");break;case"array":Pe&&(W.title&&(xt+=" fr-label-list"),ke+=" fr-field-column");break;case"boolean":ut&&(Xt+=" fr-content-column",ke+=" flex ".concat(Me==="column"?"flex-column":""));break;default:}if(!Ie&&!ut)if(Me==="column")switch(ke+=" flex-column",xt+=" fr-label-column",Xt+=" fr-content-column",W.type){case"object":break;case"array":W.title&&!W.enum;break;case"boolean":break;default:}else Me==="row"&&(ke+="",xt+=" fr-label-row",Xt+=" fr-content-row",!ee&&!ut&&(xt+=" flex-shrink-0 fr-label-row",Xt+=" flex-grow-1 relative"));var Wt={};ee||(dt?Wt={width:dt,paddingRight:"12px"}:ie>1&&(Wt={width:"calc(100% /".concat(ie,")"),paddingRight:"12px"}));var $t=ae("labelWidth",r,ye)||re,En=u($t)?Number($t):S($t)?$t:110,vn={width:En};(Ie||Me==="column")&&(vn={flexGrow:1}),Me==="inline"&&(vn={marginTop:5,paddingLeft:12},xt="",Xt+=" fr-content-inline",ke.indexOf("fr-field-object")===-1&&(ke+=" fr-field-inline"));var Kn=we.children&&we.children.length>0,ya={$id:r,dataIndex:f,item:Object(j.a)(Object(j.a)({},we),{},{schema:W}),labelClass:xt,labelStyle:vn,contentClass:Xt,errorFields:Te,hasChildren:Kn,displayType:Me,hideTitle:O,hideValidation:h},qn=Kn?d.a.createElement("div",{className:"flex flex-wrap"},d.a.createElement(Lt,{dataIndex:f,errorFields:Te,displayType:Me,hideTitle:O},we.children)):null,oa=Kn?d.a.createElement(et,{parentId:r,dataIndex:f,errorFields:Te,displayType:Me,hideTitle:O},we.children):null;return d.a.createElement("div",{style:Wt,className:"".concat(ke," ").concat(x?"debug":"")},d.a.createElement(pr,ya,ee&&qn,Pe&&oa))},ia=hr,gr=t("SA0R"),yr=t.n(gr),zr=t("OVFa"),Kr=t("cFvS"),Ht="${title}\u7684\u7C7B\u578B\u4E0D\u662F${type}",br={default:"${title}\u672A\u901A\u8FC7\u6821\u9A8C",required:"${title}\u5FC5\u586B",whitespace:"${title}\u4E0D\u80FD\u4E3A\u7A7A",date:{format:"${title}\u7684\u683C\u5F0F\u9519\u8BEF",parse:"${title}\u65E0\u6CD5\u88AB\u89E3\u6790",invalid:"${title}\u6570\u636E\u4E0D\u5408\u6CD5"},types:{string:Ht,method:Ht,array:Ht,object:Ht,number:Ht,date:Ht,boolean:Ht,integer:Ht,float:Ht,regexp:Ht,email:Ht,url:Ht,hex:Ht},string:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},number:{len:"${title}\u4E0D\u7B49\u4E8E${len}",min:"${title}\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u9700\u5728${min}\u4E0E${max}\u4E4B\u95F4"},array:{len:"${title}\u957F\u5EA6\u4E0D\u662F${len}",min:"${title}\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E${min}",max:"${title}\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E${max}",range:"${title}\u957F\u5EA6\u9700\u5728${min}\u4E8E${max}\u4E4B\u95F4"},pattern:{mismatch:"${title}\u672A\u901A\u8FC7\u6B63\u5219\u5224\u65AD${pattern}"}},Ut="${title} is not a valid ${type}",jr={default:"Validation error on field ${title}",required:"${title} is required",whitespace:"${title} cannot be empty",date:{format:"${title} is invalid for format date",parse:"${title} could not be parsed as date",invalid:"${title} is invalid date"},types:{string:Ut,method:Ut,array:Ut,object:Ut,number:Ut,date:Ut,boolean:Ut,integer:Ut,float:Ut,regexp:Ut,email:Ut,url:Ut,hex:Ut},string:{len:"${title} must be exactly ${len} characters",min:"${title} must be at least ${min} characters",max:"${title} cannot be longer than ${max} characters",range:"${title} must be between ${min} and ${max} characters"},number:{len:"${title} must equal ${len}",min:"${title} cannot be less than ${min}",max:"${title} cannot be greater than ${max}",range:"${title} must be between ${min} and ${max}"},array:{len:"${title} must be exactly ${len} in length",min:"${title} cannot be less than ${min} in length",max:"${title} cannot be greater than ${max} in length",range:"${title} must be between ${min} and ${max} in length"},pattern:{mismatch:"${title} does not match pattern ${pattern}"}},Or=t("KpVd"),Wa=t("oaNE"),Ja=e=>{var n=e.formData,r=e.schema,o=r===void 0?{}:r,i=e.isRequired,f=i===void 0?!0:i,y=e.touchedKeys,O=y===void 0?[]:y,E=e.locale,h=E===void 0?"cn":E,x=e.validateMessages,I=x===void 0?{}:x;if(Object.keys(o).length===0)return Promise.resolve();var N=Pn({schema:o,isRequired:f}).fields,A=[];f||O.forEach(re=>{var be=Bn(re,o),Je=Object(ce.a)(n,re),We=[void 0,null].indexOf(Je)>-1,we=Array.isArray(Je)&&Je.length===0;if((We||we)&&be.required){var Ye=be.message||I.required||"${title}\u5FC5\u586B";A.push({name:re,error:[Ye]})}});var Z=br,ie=jr,ye;try{ye=new Or.a(N)}catch(re){return Promise.resolve([])}var Te=h==="en"?ie:Z;return Object(Wa.a)(Te,I),ye.messages(Te),ye.validate(n||{}).then(re=>A.length>0?A:[]).catch(re=>{var be=re.errors,Je=re.fields,We=$e(be).map(Ye=>{var Ae=In(Ye.field);return{name:Ae,error:[Ye.message]}});We=[...We,...A];var we=[];return We.forEach(Ye=>{var Ae=we.findIndex(W=>W.name===Ye.name);Ae===-1?we.push(Ye):we[Ae].error=[...we[Ae].error,...Ye.error]}),we})},Wr={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},Jr={list:{type:"array",defaultField:{type:"object",fields:{userName:[{bind:!1,title:"User Name",type:"string",rules:[{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}]},{min:5,message:"\u957F\u5EA6\u9700\u8981\u5927\u4E8E5"},{max:12}],selectName:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],required:!0},checkboxName:{title:"\u662F\u5426\u5224\u65AD",type:"boolean",valuePropName:"checked"}}}}},Er=t("MMHg"),ga=t("J2yf"),wa=(e,n)=>{var r=xr(e,n);return r=_t(r),r=ua(r,n),r=yn(r),console.log(r,"asdgghrth"),r},xr=(e,n)=>{var r=m(e),o=[],i=[],f=[],y=E=>Array.isArray(E)&&E.every(h=>typeof h=="string");Object.keys(n).forEach(E=>{var h=n[E]&&n[E].schema&&n[E].schema.bind,x=E.replace("[]","");h===!1?o.push(x):typeof h=="string"?i.push({key:x,bind:h}):y(h)&&f.push({key:x,bind:h})});var O=E=>{o.forEach(h=>{Object(ga.a)(E,h)}),i.forEach(h=>{var x=h.key,I=h.bind,N=Object(ce.a)(E,x),A=Object(ce.a)(E,I);$(A)&&(N=Object(j.a)(Object(j.a)({},A),N)),Object(Tt.a)(E,I,N),Object(ga.a)(E,x)}),f.forEach(h=>{var x=h.key,I=h.bind,N=Object(ce.a)(E,x);Array.isArray(N)&&N.forEach((A,Z)=>{I[Z]&&Object(Tt.a)(E,I[Z],A)}),Object(ga.a)(E,x)})};return O(r),r},Sr=(e,n)=>{var r=m(e),o=[],i=[],f=O=>Array.isArray(O)&&O.every(E=>typeof E=="string");Object.keys(n).forEach(O=>{var E=n[O]&&n[O].schema&&n[O].schema.bind,h=O.replace("[]","");typeof E=="string"?o.push({key:h,bind:E}):f(E)&&i.push({key:h,bind:E})});var y=O=>{o.forEach(E=>{var h=E.key,x=E.bind,I=Object(ce.a)(O,x),N=Object(ce.a)(O,h);$(N)&&(I=Object(j.a)(Object(j.a)({},N),I)),Object(Tt.a)(O,h,I),Object(ga.a)(O,x)}),i.forEach(E=>{var h=E.key,x=E.bind,I=[];x.forEach(N=>{I.push(Object(ce.a)(O,N)),Object(ga.a)(O,N)}),Object(Tt.a)(O,h,I)})};return y(r),r},Ya=e=>{var n=e||{},r=n.formData,o=n.onChange,i=n.onValidate,f=Object(B.useState)(0),y=Object(Ge.default)(f,2),O=y[0],E=y[1],h=Object(B.useRef)(!1),x=Se({formData:{},submitData:{},errorFields:[],isValidating:!1,outsideValidating:!1,isSubmitting:!1,isEditing:!1,allTouched:!1,touchedKeys:[],flatten:{}}),I=Object(Ge.default)(x,2),N=I[0],A=I[1],Z=Object(B.useRef)({}),ie=Object(B.useRef)(()=>{}),ye=Object(B.useRef)(),Te=Object(B.useRef)("cn"),re=Object(B.useRef)(),be=Object(B.useRef)({}),Je=Object(B.useRef)({}),We=Object(B.useRef)([]),we=N.formData,Ye=N.submitData,Ae=N.errorFields,W=Ae===void 0?[]:Ae,Me=N.isValidating,Pe=N.outsideValidating,ee=N.isSubmitting,Ie=N.isEditing,ut=N.allTouched,dt=N.touchedKeys,ke=N.flatten,xt=e&&e.hasOwnProperty("formData"),Xt=xt?r:we;be.current=Object(B.useMemo)(()=>Object(Wa.a)(hn(Z.current),Xt),[JSON.stringify(Xt),JSON.stringify(Z.current)]),We.current=dt,Je.current=ke;var Wt=te=>{typeof o=="function"?o(te):A({formData:te})},$t=te=>{if(typeof i=="function"){var Qe=te?te.map(an=>an.name):[];i(Qe)}A({errorFields:te})},En=te=>{if(!(We.current.indexOf(te)>-1)){var Qe=[...We.current,te];A({touchedKeys:Qe})}};Object(B.useEffect)(()=>{Ja({formData:be.current,schema:Z.current,isRequired:ut,touchedKeys:We.current,locale:Te.current,validateMessages:re.current}).then(te=>{$t(te)})},[JSON.stringify(be.current),ut]),Object(B.useEffect)(()=>{var te=q(Z.current);A({flatten:te})},[JSON.stringify(Z.current),O]),Object(B.useEffect)(()=>{h.current===!1&&ke["#"]&&typeof ye.current=="function"&&(ye.current(),h.current=!0)},[JSON.stringify(ke)]);var vn=te=>{A({isEditing:te})},Kn=(te,Qe)=>{if(typeof te=="string"){if(te==="#"){Wt(Object(j.a)({},Qe));return}Object(Tt.a)(be.current,te,Qe),Wt(Object(j.a)({},be.current))}},ya=te=>{var Qe=te.schema,an=te.locale,Ia=te.validateMessages,Ba=te.beforeFinish,$r=te.onMount;Z.current=Qe,Te.current=an,re.current=Ia,ie.current=Ba,ye.current=$r,E(O+1)},qn=(te,Qe)=>{if(!Je.current[te]){console.error("path\uFF1A'".concat(te,"' \u4E0D\u5B58\u5728(form.setSchemaByPath)"));return}var an=m(Je.current);try{var Ia=typeof Qe=="function"?Qe(an[te].schema):Qe;an[te].schema=Object(j.a)(Object(j.a)({},an[te].schema),Ia),A({flatten:Object(j.a)({},an)})}catch(Ba){console.error(Ba,"setSchemaByPath")}},oa=te=>{try{return ke[te].schema}catch(Qe){return console.error(Qe,"getSchemaByPath"),{}}},_n=te=>{var Qe=[];Array.isArray(te)?Qe=[...te,...W]:te&&te.name?Qe=[te,...W]:console.log("error format is wrong"),Qe=Object(Er.a)(Qe,an=>an.name),$t(Qe)},Pa=te=>{var Qe=W.map(an=>an.name.indexOf(te)===-1);$t(Qe)},Nr=()=>wa(be.current,ke),Ar=te=>{var Qe=Sr(te,ke);Wt(Qe)},Tr=()=>{A({isValidating:!0,allTouched:!0,isSubmitting:!1}),Ja({formData:be.current,schema:Z.current,touchedKeys:[],isRequired:!0,locale:Te.current,validateMessages:re.current}).then(te=>{if(te&&te.length>0&&(console.log("submit:",be.current,te),A({errorFields:te})),typeof ie.current=="function"){Promise.resolve(wa(be.current,ke)).then(Qe=>{A({isValidating:!0,isSubmitting:!1,outsideValidating:!0,submitData:Qe})});return}Promise.resolve(wa(be.current,ke)).then(Qe=>{A({isValidating:!1,isSubmitting:!0,submitData:Qe})})}).catch(te=>{console.log("submit error:",te)})},wr=()=>{A({formData:{},submitData:{},errors:[],touchedKeys:[],allTouched:!1})},Pr=()=>A({isValidating:!1,outsideValidating:!1,isSubmitting:!0}),Ir=()=>A({isSubmitting:!1,isValidating:!1,outsideValidating:!1}),Br={formData:be.current,schema:Z.current,flatten:ke,touchedKeys:We.current,allTouched:ut,touchKey:En,onItemChange:Kn,setValueByPath:Kn,getSchemaByPath:oa,setSchemaByPath:qn,setValues:Ar,getValues:Nr,resetFields:wr,submit:Tr,submitData:Ye,errorFields:W,isValidating:Me,outsideValidating:Pe,isSubmitting:ee,endValidating:Pr,endSubmitting:Ir,setErrorFields:_n,removeErrorField:Pa,isEditing:Ie,setEditing:vn,syncStuff:ya};return Br},Dr=e=>n=>{var r=Ya();return d.a.createElement(e,Object(G.default)({},n,{form:r}))},Qa=(e,n)=>{console.log(e,n)};function Cr(e){var n=e.widgets,r=e.mapping,o=e.form,i=e.beforeFinish,f=i===void 0?Qa:i,y=e.onFinish,O=y===void 0?Qa:y,E=e.displayType,h=E===void 0?"column":E,x=e.schema,I=e.debug,N=e.debugCss,A=e.locale,Z=A===void 0?"cn":A,ie=e.debounceInput,ye=ie===void 0?!1:ie,Te=e.size,re=e.configProvider,be=e.theme,Je=e.validateMessages,We=e.watch,we=We===void 0?{}:We,Ye=e.config,Ae=e.onMount,W=Object(D.default)(e,["widgets","mapping","form","beforeFinish","onFinish","displayType","schema","debug","debugCss","locale","debounceInput","size","configProvider","theme","validateMessages","watch","config","onMount"]);try{var Me=o.submit}catch(_n){console.error("form \u4E3A\u5FC5\u586B props\uFF0C<FormRender /> \u6CA1\u6709\u63A5\u6536\u5230 form \u5C5E\u6027!")}var Pe=o.submitData,ee=o.errorFields,Ie=o.isValidating,ut=o.outsideValidating,dt=o.isSubmitting,ke=o.endValidating,xt=o.endSubmitting,Xt=o.syncStuff,Wt=o.formData,$t=o.isEditing,En=o.setErrorFields,vn=o.flatten;Object(B.useEffect)(()=>{x&&x.type&&Xt({schema:x,locale:Z,validateMessages:Je,beforeFinish:f,onMount:Ae})},[JSON.stringify(x)]),Object(B.useEffect)(()=>()=>{o.resetFields()},[]);var Kn=Object(B.useMemo)(()=>Object(j.a)(Object(j.a)({},o),{},{displayType:h,theme:be,debounceInput:ye,debug:I,isEditing:$t},W),[JSON.stringify(vn),JSON.stringify(Wt),JSON.stringify(ee)]),ya=Object(B.useMemo)(()=>({widgets:Object(j.a)(Object(j.a)({},Aa),n),mapping:Object(j.a)(Object(j.a)({},it),r)}),[]);Object(B.useEffect)(()=>{if(ut===!0){Promise.resolve(f(Object(j.a)({data:Pe,schema:x,errors:ee},Ye))).then(_n=>{_n&&En(_n),ke()});return}Ie===!1&&dt===!0&&(xt(),O(Pe,ee))},[Ie,dt,ut]);var qn="";Te==="small"?qn="fr-form-small":Te==="large"&&(qn="fr-form-large");var oa=Object.keys(we);return d.a.createElement(g.a,Object(G.default)({locale:yr.a},re),d.a.createElement(on.Provider,{value:Kn},d.a.createElement(Ln.Provider,{value:ya},d.a.createElement("div",{className:"fr-container ".concat(qn)},I?d.a.createElement("div",{className:"mv2 bg-black-05 pa2 br2"},d.a.createElement("div",null,"formData:"+JSON.stringify(o.formData)),d.a.createElement("div",null,"errorFields:"+JSON.stringify(o.errorFields)),d.a.createElement("div",null,"touchedKeys:"+JSON.stringify(o.touchedKeys)),d.a.createElement("div",null,"allTouched:"+JSON.stringify(o.allTouched)),d.a.createElement("div",null,"isEditting:"+JSON.stringify(o.isEditing)),d.a.createElement("div",null,"isValidating:"+JSON.stringify(o.isValidating)),d.a.createElement("div",null,"isSubmitting:"+JSON.stringify(o.isSubmitting))):null,oa.length>0?oa.map((_n,Pa)=>d.a.createElement(Fr,{key:Pa.toString(),watchKey:_n,watch:we,formData:Wt})):null,d.a.createElement(ia,{debugCss:N})))))}var Rr=e=>{var n=e.isOldVersion,r=n===void 0?!0:n,o=e.schema,i=Object(D.default)(e,["isOldVersion","schema"]),f=Object(B.useRef)(o);return r&&(f.current=gn(o)),d.a.createElement(Cr,Object(G.default)({schema:f.current},i))},Yr=Y.default=Rr,Fr=e=>{var n=e.watchKey,r=e.watch,o=e.formData,i=Ot(o,n),f=r[n],y=Object(B.useRef)(!0);return Object(B.useEffect)(()=>{var O=()=>{typeof f=="function"?f(i):f&&typeof f.handler=="function"&&f.handler(i)};if(y.current){var E=f&&f.immediate;E&&O(),y.current=!1}else O()},[JSON.stringify(i)]),null}},trko:function(Ue,Y,t){},"xwS/":function(Ue,Y,t){}}]);
