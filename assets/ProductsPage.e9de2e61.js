import{j as se,a$ as ne,a_ as oe,bf as ue,b0 as re,bg as de,b2 as ce,r as D,b1 as me,bh as fe,bi as pe,c as v,b3 as z,bj as ge,h as x,b7 as ve,g as be,t as ye,l as xe,bk as he,bl as _e,ad as Ve,aa as w,U as h,ap as K,_ as d,d as o,X as _,W as f,bb as we,V as Q,F as O,aJ as P,ar as q,aI as qe,au as Ce,aB as Fe,aC as j,aN as ke,bm as Se,L as A,at as Qe,a0 as Pe,aw as je,a1 as Ae}from"./index.260677d6.js";import{b as Ie,Q as De}from"./QSelect.699343eb.js";import{Q as Le}from"./QForm.b8985981.js";import{Q as R,a as Ne,b as I}from"./QList.e1ba6f7f.js";import"./selection.b014e4c2.js";import"./rtl.4b414a6d.js";var Ue=se({name:"QFile",inheritAttrs:!1,props:{...ne,...oe,...ue,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...re,...de],setup(l,{slots:u,emit:n,attrs:e}){const{proxy:p}=be(),m=ce(),b=D(null),C=D(!1),s=me(l),{pickFiles:t,onDragover:i,onDragleave:y,processFiles:L,getDndNode:J}=fe({editable:m.editable,dnd:C,getFileInput:B,addFilesToQueue:$}),W=pe(l),r=v(()=>Object(l.modelValue)===l.modelValue?"length"in l.modelValue?Array.from(l.modelValue):[l.modelValue]:[]),N=v(()=>z(r.value)),X=v(()=>r.value.map(a=>a.name).join(", ")),U=v(()=>ge(r.value.reduce((a,c)=>a+c.size,0))),G=v(()=>({totalSize:U.value,filesNumber:r.value.length,maxFiles:l.maxFiles})),H=v(()=>({tabindex:-1,type:"file",title:"",accept:l.accept,capture:l.capture,name:s.value,...e,id:m.targetUid.value,disabled:m.editable.value!==!0})),Y=v(()=>"q-file q-field--auto-height"+(C.value===!0?" q-file--dnd":"")),E=v(()=>l.multiple===!0&&l.append===!0);function F(a){const c=r.value.slice();c.splice(a,1),k(c)}function Z(a){const c=r.value.findIndex(a);c>-1&&F(c)}function k(a){n("update:modelValue",l.multiple===!0?a:a[0])}function ee(a){a.keyCode===13&&ye(a)}function te(a){(a.keyCode===13||a.keyCode===32)&&t(a)}function B(){return b.value}function $(a,c){const g=L(a,c,r.value,E.value),S=B();S!=null&&(S.value=""),g!==void 0&&((l.multiple===!0?l.modelValue&&g.every(ie=>r.value.includes(ie)):l.modelValue===g[0])||k(E.value===!0?r.value.concat(g):g))}function V(){return[x("input",{class:[l.inputClass,"q-file__filler"],style:l.inputStyle})]}function le(){if(u.file!==void 0)return r.value.length===0?V():r.value.map((c,g)=>u.file({index:g,file:c,ref:this}));if(u.selected!==void 0)return r.value.length===0?V():u.selected({files:r.value,ref:this});if(l.useChips===!0)return r.value.length===0?V():r.value.map((c,g)=>x(Ie,{key:"file-"+g,removable:m.editable.value,dense:!0,textColor:l.color,tabindex:l.tabindex,onRemove:()=>{F(g)}},()=>x("span",{class:"ellipsis",textContent:c.name})));const a=l.displayValue!==void 0?l.displayValue:X.value;return a.length>0?[x("div",{class:l.inputClass,style:l.inputStyle,textContent:a})]:V()}function ae(){const a={ref:b,...H.value,...W.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:$};return l.multiple===!0&&(a.multiple=!0),x("input",a)}return Object.assign(m,{fieldClass:Y,emitValue:k,hasValue:N,inputRef:b,innerValue:r,floatingLabel:v(()=>N.value===!0||z(l.displayValue)),computedCounter:v(()=>{if(l.counterLabel!==void 0)return l.counterLabel(G.value);const a=l.maxFiles;return`${r.value.length}${a!==void 0?" / "+a:""} (${U.value})`}),getControlChild:()=>J("file"),getControl:()=>{const a={ref:m.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:l.tabindex};return m.editable.value===!0&&Object.assign(a,{onDragover:i,onDragleave:y,onKeydown:ee,onKeyup:te}),x("div",a,[ae()].concat(le()))}}),Object.assign(p,{removeAtIndex:F,removeFile:Z,getNativeElement:()=>b.value}),ve(m)}});function M(l){if(l===!1)return 0;if(l===!0||l===void 0)return 1;const u=parseInt(l,10);return isNaN(u)?0:u}var T=xe({name:"close-popup",beforeMount(l,{value:u}){const n={depth:M(u),handler(e){n.depth!==0&&setTimeout(()=>{const p=he(l);p!==void 0&&_e(p,e,n.depth)})},handlerKey(e){Ve(e,13)===!0&&n.handler(e)}};l.__qclosepopup=n,l.addEventListener("click",n.handler),l.addEventListener("keyup",n.handlerKey)},updated(l,{value:u,oldValue:n}){u!==n&&(l.__qclosepopup.depth=M(u))},beforeUnmount(l){const u=l.__qclosepopup;l.removeEventListener("click",u.handler),l.removeEventListener("keyup",u.handlerKey),delete l.__qclosepopup}});const Ee=d("div",{class:"window-width text-center"},[d("h5",null,[d("b",null,"\u5546\u54C1\u7BA1\u7406")])],-1),Be={class:"window-width text-center q-ma-lg"},$e={style:{"max-width":"80vw","box-shadow":"none"}},ze={class:"row justify-center"},Ke={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Oe={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Re={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Me={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Te={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Je={class:"row items-start"},We={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Xe=["src"],Ge=d("p",null,"\u6C92\u6709\u5546\u54C1",-1),He={class:"window-width text-center q-ma-lg"},it={__name:"ProductsPage",setup(l){const u=w(["\u5929\u7136\u77F3\u624B\u934A","\u881F\u7DDA\u7DE8\u7E69","\u5E03\u54C1\u624B\u4F5C","\u68C9\u9EBB\u7DE8\u7E54"]);D("");const n=w([]),e=w({_id:"",name:"",price:0,category:"",sell:!1,image:[],description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),p=w({required(s){return!!s||"\u5FC5\u586B"},price(s){return s>-1||"\u5FC5\u9808\u5927\u65BC\u7B49\u65BC 0"},size(s){var t,i,y;return!s||!s.length||((i=(t=s[0])==null?void 0:t.type)==null?void 0:i.includes("image"))&&((y=s[0])==null?void 0:y.size)<2048*2048||"\u6A94\u6848\u8D85\u904E4 MB \u6216 \u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}}),m=(s,t)=>{e._id=s,t>-1?(e.name=n[t].name,e.price=n[t].price,e.category=n[t].category,e.sell=n[t].sell,e.description=n[t].description):(e.name="",e.price=0,e.category="",e.sell=!1,e.description=""),e.image=[],e.idx=t,e.dialog=!0,e.valid=!1,e.submitting=!1},b=async()=>{if(e.valid)return;e.submitting=!0;const s=new FormData;for(const t in e)["_id","idx","dialog","valid","submitting"].includes(t)||(t==="image"?s.append(t,e[t][0]):s.append(t,e[t]));try{if(e._id.length===0){const{data:t}=await P.post("/products",s);n.push(t.result),q.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:t}=await P.patch("/products/"+e._id,s);n[e.idx]=t.result,q.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(t){q.fire({icon:"error",title:"\u5931\u6557",text:t.isAxiosError?t.response.data.message:t.message})}e.submitting=!1};return(async()=>{try{const{data:s}=await P.get("/products/all");n.push(...s.result)}catch(s){console.log(s),q.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,t)=>(h(),K(O,null,[Ee,d("div",Be,[o(_,{class:"justify-center",color:"blue-grey-10 text-teal-2",icon:"add_circle_outline",onClick:t[0]||(t[0]=i=>m("",-1)),label:"\u65B0\u589E\u5546\u54C1"})]),d("div",null,[o(we,{modelValue:e.dialog,"onUpdate:modelValue":t[9]||(t[9]=i=>e.dialog=i),persistent:""},{default:f(()=>[d("div",$e,[o(Le,{modelValue:e.valid,"onUpdate:modelValue":t[8]||(t[8]=i=>e.valid=i),onSubmit:qe(b,["prevent"])},{default:f(()=>[o(Ce,{style:{width:"700px","max-width":"80vw"}},{default:f(()=>[o(Fe,null,{default:f(()=>[d("div",ze,[d("div",Ke,[o(j,{filled:"",modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=i=>e.name=i),rules:[p.required],label:"\u540D\u7A31"},null,8,["modelValue","rules"])]),d("div",Oe,[o(j,{filled:"",type:"number",rules:[p.required,p.price],modelValue:e.price,"onUpdate:modelValue":t[2]||(t[2]=i=>e.price=i),label:"\u50F9\u683C"},null,8,["rules","modelValue"])]),d("div",Re,[o(De,{filled:"",options:u,rules:[p.required],modelValue:e.category,"onUpdate:modelValue":t[3]||(t[3]=i=>e.category=i),label:"\u5206\u985E"},null,8,["options","rules","modelValue"])]),d("div",Me,[o(ke,{modelValue:e.sell,"onUpdate:modelValue":t[4]||(t[4]=i=>e.sell=i),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"])]),d("div",Te,[d("div",Je,[o(Ue,{modelValue:e.image,"onUpdate:modelValue":t[5]||(t[5]=i=>e.image=i),label:"\u4E0A\u50B3\u5716\u7247",accept:"image/*",filled:"",counter:"",multiple:"","max-files":"6",style:{"max-width":"300px"},rules:[p.size]},null,8,["modelValue","rules"])])]),d("div",We,[o(j,{filled:"",type:"textarea",modelValue:e.description,"onUpdate:modelValue":t[6]||(t[6]=i=>e.description=i),label:"\u5546\u54C1\u63CF\u8FF0"},null,8,["modelValue"])])])]),_:1}),o(Se,{align:"center",class:"q-mb-md"},{default:f(()=>[A(o(_,{class:"bg-blue-grey-10 text-white",type:"submit",loading:e.submitting,label:"\u78BA\u5B9A"},null,8,["loading"]),[[T]]),A(o(_,{class:"bg-white text-blue-grey-10",disabled:e.submitting,onClick:t[7]||(t[7]=i=>e.dialog=!1),label:"\u53D6\u6D88"},null,8,["disabled"]),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])])]),_:1},8,["modelValue"])]),n.length>0?(h(),Q(R,{key:0,separator:"",class:"q-pa-xs q-ma-none",style:{width:"80vw",margin:"auto"},bordered:""},{default:f(()=>[(h(!0),K(O,null,Qe(n,(i,y)=>A((h(),Q(Ne,{clickable:"",class:"q-ma-none",key:i._id},{default:f(()=>[o(I,{avatar:""},{default:f(()=>[d("img",{style:{"max-width":"10vw"},src:i.image},null,8,Xe)]),_:2},1024),o(I,null,{default:f(()=>[Pe(je(i.name),1)]),_:2},1024),o(I,{class:"q-pa-sm q-gutter-sm justify-end"},{default:f(()=>[o(_,{class:"bg-green-10 text-white self-end",style:{},onClick:L=>m(i._id,y),icon:"border_color",label:"\u7DE8\u8F2F"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)),[[Ae]])),128))]),_:1})):(h(),Q(R,{key:1,class:"text-center"},{default:f(()=>[Ge]),_:1})),d("div",He,[o(_,{class:"justify-center addbtn",color:"blue-grey-10 text-teal-2",icon:"add_circle_outline",onClick:t[10]||(t[10]=i=>m("",-1)),label:"\u65B0\u589E\u5546\u54C1"})])],64))}};export{it as default};