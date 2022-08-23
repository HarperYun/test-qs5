import{j as T,c as m,h as V,k as A,l as G,i as K,m as E,r as q,n as J,w,p as W,g as X,u as Y,s as Z,q as ee,t as u,v as i,x as o,d as l,Q as d,y as n,z as f,A as L,B as k,C as B,D as S,R as p}from"./index.9713ecfd.js";import{Q as te,a as F,b as N,c as ae,d as le,e as oe}from"./QLayout.e1f9e69a.js";import{Q as ne,a as C,b as v}from"./QList.180df6fb.js";import{Q as re}from"./QAvatar.83702fb9.js";import{Q as ue}from"./touch.954e4bd7.js";import"./selection.942a6eb8.js";const ie=["top","middle","bottom"];var se=T({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>ie.includes(e)}},setup(e,{slots:b}){const g=m(()=>e.align!==void 0?{verticalAlign:e.align}:null),r=m(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>V("div",{class:r.value,style:g.value,role:"alert","aria-label":e.label},A(b.default,e.label!==void 0?[e.label]:[]))}}),ce=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:b}){const g=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>V("div",{class:g.value},G(b.default))}}),de=T({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:b,emit:g}){const{proxy:{$q:r}}=X(),t=K(E,()=>{console.error("QFooter needs to be child of QLayout")}),h=q(parseInt(e.heightHint,10)),s=q(!0),z=q(J.value===!0||t.isContainer.value===!0?0:window.innerHeight),x=m(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||r.platform.is.ios&&t.isContainer.value===!0),Q=m(()=>t.isContainer.value===!0?t.containerHeight.value:z.value),H=m(()=>{if(e.modelValue!==!0)return 0;if(x.value===!0)return s.value===!0?h.value:0;const a=t.scroll.value.position+Q.value+h.value-t.height.value;return a>0?a:0}),R=m(()=>e.modelValue!==!0||x.value===!0&&s.value!==!0),D=m(()=>e.modelValue===!0&&R.value===!0&&e.reveal===!0),I=m(()=>"q-footer q-layout__section--marginal "+(x.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(R.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(x.value!==!0?" hidden":""):"")),O=m(()=>{const a=t.rows.value.bottom,c={};return a[0]==="l"&&t.left.space===!0&&(c[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(c[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),c});function _(a,c){t.update("footer",a,c)}function y(a,c){a.value!==c&&(a.value=c)}function M({height:a}){y(h,a),_("size",a)}function P(){if(e.reveal!==!0)return;const{direction:a,position:c,inflectionPoint:j}=t.scroll.value;y(s,a==="up"||c-j<100||t.height.value-Q.value-c-h.value<300)}function U(a){D.value===!0&&y(s,!0),g("focusin",a)}w(()=>e.modelValue,a=>{_("space",a),y(s,!0),t.animate()}),w(H,a=>{_("offset",a)}),w(()=>e.reveal,a=>{a===!1&&y(s,e.modelValue)}),w(s,a=>{t.animate(),g("reveal",a)}),w([h,t.scroll,t.height],P),w(()=>r.screen.height,a=>{t.isContainer.value!==!0&&y(z,a)});const $={};return t.instances.footer=$,e.modelValue===!0&&_("size",h.value),_("space",e.modelValue),_("offset",H.value),W(()=>{t.instances.footer===$&&(t.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const a=A(b.default,[V(ue,{debounce:0,onResize:M})]);return e.elevated===!0&&a.push(V("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),V("footer",{class:I.value,style:O.value,onFocusin:U},a)}}});const fe=L("b",null,"\u6676 \u2727 \u7CF8",-1),ve=L("div",{class:"col text-center text-weight-bold"},[L("b")],-1),me={class:"q-pa-md",style:{"max-width":"350px"}},_e=S("0. \u5168\u90E8\u5546\u54C1"),be=S("1. \u5929\u7136\u77F3\u624B\u934A"),ge=S("2. \u881F\u7DDA\u7DE8\u7E69"),he=S("3. \u5E03\u54C1\u624B\u4F5C"),ye=S("4. \u68C9\u9EBB\u7DE8\u7E54"),we=L("div",null," A ",-1),Ve={__name:"MainLayout",setup(e){const b=Y(),{logout:g}=b,{isLogin:r,isAdmin:t,cart:h}=Z(b),s=q(!1);q(!1);function z(){s.value=!s.value}return(x,Q)=>{const H=ee("router-view");return u(),i(te,{view:"hHh lpR fff"},{default:o(()=>[l(ae,{reveal:"",class:"bg-brown-9 text-amber-5","height-hint":"98"},{default:o(()=>[l(F,null,{default:o(()=>[l(d,{dense:"",flat:"",round:"",icon:"menu",onClick:z}),l(N,{flat:""},{default:o(()=>[l(d,{to:"/",class:"text-amber-5 text-h6"},{default:o(()=>[fe]),_:1})]),_:1}),ve,l(N,{outline:""},{default:o(()=>[n(r)&&n(t)?(u(),i(d,{key:0,to:"/admin",outline:"",color:"amber-5",icon:"admin_panel_settings",label:"\u5F8C\u53F0\u7BA1\u7406"})):f("",!0),n(r)&&!n(t)?(u(),i(d,{key:1,to:"/aboutpage",outline:"",color:"amber-5",icon:"auto_awesome",label:"\u95DC\u65BC\u6676\u7CF8"})):f("",!0),n(r)&&!n(t)?(u(),i(d,{key:2,to:"/contactus",outline:"",color:"amber-5",icon:"mail_outline",label:"\u806F\u7D61\u6211\u5011"})):f("",!0),n(r)?f("",!0):(u(),i(d,{key:3,to:"/signup",outline:"",color:"amber-5",icon:"login",label:"\u8A3B\u518A"})),n(r)?f("",!0):(u(),i(d,{key:4,to:"/login",outline:"",color:"amber-5",icon:"person",label:"\u767B\u5165"})),n(r)&&!n(t)?(u(),i(d,{key:5,to:"/personpage",outline:"",color:"amber-5",icon:"person_outline",label:"\u6703\u54E1\u8CC7\u6599"})):f("",!0),n(r)&&!n(t)?(u(),i(d,{key:6,to:"/orderpage",outline:"",color:"amber-5",icon:"fact_check",label:"\u8A02\u55AE\u7D00\u9304"})):f("",!0),n(r)&&!n(t)?(u(),i(d,{key:7,to:"/cartpage",outline:"",color:"amber-5",icon:"shopping_cart",label:"\u8CFC\u7269\u8ECA"},{default:o(()=>[n(h)>0?(u(),i(se,{key:0,rounded:"",floating:"",transparent:"",color:"red"})):f("",!0)]),_:1})):f("",!0),n(r)?(u(),i(d,{key:8,outline:"",color:"amber-5",icon:"logout",onClick:n(g),label:"\u767B\u51FA"},null,8,["onClick"])):f("",!0)]),_:1})]),_:1})]),_:1}),l(le,{modelValue:s.value,"onUpdate:modelValue":Q[0]||(Q[0]=R=>s.value=R),side:"left",overlay:"",bordered:"",elevated:""},{default:o(()=>[L("div",me,[l(ne,{bordered:""},{default:o(()=>[k((u(),i(C,{clickable:"",to:""},{default:o(()=>[l(v,{avatar:""},{default:o(()=>[l(B,{color:"brown-9",name:"piano"})]),_:1}),l(v,null,{default:o(()=>[_e]),_:1})]),_:1})),[[p]]),k((u(),i(C,{clickable:""},{default:o(()=>[l(v,{avatar:""},{default:o(()=>[l(B,{color:"brown-9",name:"brightness_low"})]),_:1}),l(v,null,{default:o(()=>[be]),_:1})]),_:1})),[[p]]),k((u(),i(C,{clickable:"",to:""},{default:o(()=>[l(v,{avatar:""},{default:o(()=>[l(B,{color:"brown-9",name:"spa"})]),_:1}),l(v,null,{default:o(()=>[ge]),_:1})]),_:1})),[[p]]),k((u(),i(C,{clickable:"",to:""},{default:o(()=>[l(v,{avatar:""},{default:o(()=>[l(B,{color:"brown-9",name:"filter_vintage"})]),_:1}),l(v,null,{default:o(()=>[he]),_:1})]),_:1})),[[p]]),k((u(),i(C,{clickable:"",to:""},{default:o(()=>[l(v,{avatar:""},{default:o(()=>[l(B,{color:"brown-9",name:"cruelty_free"})]),_:1}),l(v,null,{default:o(()=>[ye]),_:1})]),_:1})),[[p]])]),_:1})])]),_:1},8,["modelValue"]),l(de,{bordered:"",class:"bg-brown-9 text-amber-5 text-center"},{default:o(()=>[l(F,null,{default:o(()=>[l(ce,null,{default:o(()=>[l(re),we]),_:1})]),_:1})]),_:1}),l(oe,null,{default:o(()=>[l(H)]),_:1})]),_:1})}}};export{Ve as default};
