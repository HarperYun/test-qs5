import{j as se,a_ as ne,aZ as oe,bf as ue,a$ as re,bg as de,b1 as ce,r as N,b0 as me,bh as fe,bi as pe,c as v,b2 as $,bj as ge,h as y,b6 as ve,g as be,M as xe,G as ye,bk as he,bl as _e,ad as Ve,aa as V,t as h,as as K,A as d,d as o,Q as q,x as f,ba as qe,v as Q,F as O,aN as A,ax as w,be as we,av as Fe,at as Ce,aF as D,aL as ke,bm as Se,B as I,az as Qe,R as Ae,D as De,au as Ie}from"./index.9713ecfd.js";import{b as Le,Q as Ne}from"./QSelect.f2ac1fa5.js";import{Q as Pe}from"./QForm.5b9bc881.js";import{Q as R,a as je,b as L}from"./QList.180df6fb.js";import"./selection.942a6eb8.js";import"./rtl.4b414a6d.js";var Ee=se({name:"QFile",inheritAttrs:!1,props:{...ne,...oe,...ue,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...re,...de],setup(t,{slots:u,emit:n,attrs:e}){const{proxy:p}=be(),m=ce(),b=N(null),F=N(!1),s=me(t),{pickFiles:l,onDragover:i,onDragleave:x,processFiles:P,getDndNode:G}=fe({editable:m.editable,dnd:F,getFileInput:B,addFilesToQueue:z}),Z=pe(t),r=v(()=>Object(t.modelValue)===t.modelValue?"length"in t.modelValue?Array.from(t.modelValue):[t.modelValue]:[]),j=v(()=>$(r.value)),H=v(()=>r.value.map(a=>a.name).join(", ")),E=v(()=>ge(r.value.reduce((a,c)=>a+c.size,0))),J=v(()=>({totalSize:E.value,filesNumber:r.value.length,maxFiles:t.maxFiles})),W=v(()=>({tabindex:-1,type:"file",title:"",accept:t.accept,capture:t.capture,name:s.value,...e,id:m.targetUid.value,disabled:m.editable.value!==!0})),X=v(()=>"q-file q-field--auto-height"+(F.value===!0?" q-file--dnd":"")),U=v(()=>t.multiple===!0&&t.append===!0);function C(a){const c=r.value.slice();c.splice(a,1),k(c)}function Y(a){const c=r.value.findIndex(a);c>-1&&C(c)}function k(a){n("update:modelValue",t.multiple===!0?a:a[0])}function ee(a){a.keyCode===13&&xe(a)}function te(a){(a.keyCode===13||a.keyCode===32)&&l(a)}function B(){return b.value}function z(a,c){const g=P(a,c,r.value,U.value),S=B();S!=null&&(S.value=""),g!==void 0&&((t.multiple===!0?t.modelValue&&g.every(ie=>r.value.includes(ie)):t.modelValue===g[0])||k(U.value===!0?r.value.concat(g):g))}function _(){return[y("input",{class:[t.inputClass,"q-file__filler"],style:t.inputStyle})]}function le(){if(u.file!==void 0)return r.value.length===0?_():r.value.map((c,g)=>u.file({index:g,file:c,ref:this}));if(u.selected!==void 0)return r.value.length===0?_():u.selected({files:r.value,ref:this});if(t.useChips===!0)return r.value.length===0?_():r.value.map((c,g)=>y(Le,{key:"file-"+g,removable:m.editable.value,dense:!0,textColor:t.color,tabindex:t.tabindex,onRemove:()=>{C(g)}},()=>y("span",{class:"ellipsis",textContent:c.name})));const a=t.displayValue!==void 0?t.displayValue:H.value;return a.length>0?[y("div",{class:t.inputClass,style:t.inputStyle,textContent:a})]:_()}function ae(){const a={ref:b,...W.value,...Z.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:z};return t.multiple===!0&&(a.multiple=!0),y("input",a)}return Object.assign(m,{fieldClass:X,emitValue:k,hasValue:j,inputRef:b,innerValue:r,floatingLabel:v(()=>j.value===!0||$(t.displayValue)),computedCounter:v(()=>{if(t.counterLabel!==void 0)return t.counterLabel(J.value);const a=t.maxFiles;return`${r.value.length}${a!==void 0?" / "+a:""} (${E.value})`}),getControlChild:()=>G("file"),getControl:()=>{const a={ref:m.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:t.tabindex};return m.editable.value===!0&&Object.assign(a,{onDragover:i,onDragleave:x,onKeydown:ee,onKeyup:te}),y("div",a,[ae()].concat(le()))}}),Object.assign(p,{removeAtIndex:C,removeFile:Y,getNativeElement:()=>b.value}),ve(m)}});function M(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const u=parseInt(t,10);return isNaN(u)?0:u}var T=ye({name:"close-popup",beforeMount(t,{value:u}){const n={depth:M(u),handler(e){n.depth!==0&&setTimeout(()=>{const p=he(t);p!==void 0&&_e(p,e,n.depth)})},handlerKey(e){Ve(e,13)===!0&&n.handler(e)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:u,oldValue:n}){u!==n&&(t.__qclosepopup.depth=M(u))},beforeUnmount(t){const u=t.__qclosepopup;t.removeEventListener("click",u.handler),t.removeEventListener("keyup",u.handlerKey),delete t.__qclosepopup}});const Ue=d("div",{class:"window-width text-center"},[d("h5",null,"\u5546\u54C1\u7BA1\u7406")],-1),Be={class:"q-ma-md"},ze={style:{"max-width":"80vw","box-shadow":"none"}},$e={class:"row justify-center"},Ke={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Oe={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Re={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Me={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Te={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Ge={class:"row items-start"},Ze={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},He=["src"],Je=d("p",null,"\u6C92\u6709\u5546\u54C1",-1),at={__name:"ProductsPage",setup(t){const u=V(["\u5929\u7136\u77F3\u624B\u934A","\u881F\u7DDA\u7DE8\u7E69","\u5E03\u54C1\u624B\u4F5C","\u68C9\u9EBB\u7DE8\u7E54"]);N("");const n=V([]),e=V({_id:"",name:"",price:0,category:"",sell:!1,image:[],description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),p=V({required(s){return!!s||"\u5FC5\u586B"},price(s){return s>-1||"\u5FC5\u9808\u5927\u65BC\u7B49\u65BC 0"},size(s){var l,i,x;return!s||!s.length||((i=(l=s[0])==null?void 0:l.type)==null?void 0:i.includes("image"))&&((x=s[0])==null?void 0:x.size)<1024*1024||"\u6A94\u6848\u8D85\u904E1 MB \u6216 \u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}}),m=(s,l)=>{e._id=s,l>-1?(e.name=n[l].name,e.price=n[l].price,e.category=n[l].category,e.sell=n[l].sell,e.description=n[l].description):(e.name="",e.price=0,e.category="",e.sell=!1,e.description=""),e.image=[],e.idx=l,e.dialog=!0,e.valid=!1,e.submitting=!1},b=async()=>{if(console.log(123),e.valid)return;e.submitting=!0,console.log(456);const s=new FormData;for(const l in e)["_id","idx","dialog","valid","submitting"].includes(l)||(l==="image"?s.append(l,e[l][0]):s.append(l,e[l]));try{if(e._id.length===0){const{data:l}=await A.post("/products",s);n.push(l.result),w.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:l}=await A.patch("/products/"+e._id,s);n[e.idx]=l.result,w.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(l){w.fire({icon:"success",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}e.submitting=!1};return(async()=>{try{const{data:s}=await A.get("/products/all");n.push(...s.result)}catch(s){console.log(s),w.fire({icon:"error",title:"\u5931\u6557",text:s.isAxiosError?s.response.data.message:s.message})}})(),(s,l)=>(h(),K(O,null,[Ue,d("div",Be,[o(q,{color:"blue-grey-10 text-teal-2",icon:"add_circle_outline",onClick:l[0]||(l[0]=i=>m("",-1)),label:"\u65B0\u589E\u5546\u54C1"})]),d("div",null,[o(qe,{modelValue:e.dialog,"onUpdate:modelValue":l[9]||(l[9]=i=>e.dialog=i),persistent:""},{default:f(()=>[d("div",ze,[o(Pe,{modelValue:e.valid,"onUpdate:modelValue":l[8]||(l[8]=i=>e.valid=i),onSubmit:we(b,["prevent"])},{default:f(()=>[o(Fe,{style:{width:"700px","max-width":"80vw"}},{default:f(()=>[o(Ce,null,{default:f(()=>[d("div",$e,[d("div",Ke,[o(D,{filled:"",modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=i=>e.name=i),rules:[p.required],label:"\u540D\u7A31"},null,8,["modelValue","rules"])]),d("div",Oe,[o(D,{filled:"",type:"number",rules:[p.required,p.price],modelValue:e.price,"onUpdate:modelValue":l[2]||(l[2]=i=>e.price=i),label:"\u50F9\u683C"},null,8,["rules","modelValue"])]),d("div",Re,[o(Ne,{filled:"",options:u,rules:[p.required],modelValue:e.category,"onUpdate:modelValue":l[3]||(l[3]=i=>e.category=i),label:"\u5206\u985E"},null,8,["options","rules","modelValue"])]),d("div",Me,[o(ke,{modelValue:e.sell,"onUpdate:modelValue":l[4]||(l[4]=i=>e.sell=i),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"])]),d("div",Te,[d("div",Ge,[o(Ee,{modelValue:e.image,"onUpdate:modelValue":l[5]||(l[5]=i=>e.image=i),label:"\u4E0A\u50B3\u5716\u7247",accept:"image/*",filled:"",counter:"",multiple:"","max-files":"6",style:{"max-width":"300px"},rules:[p.size]},null,8,["modelValue","rules"])])]),d("div",Ze,[o(D,{filled:"",type:"textarea",modelValue:e.description,"onUpdate:modelValue":l[6]||(l[6]=i=>e.description=i),label:"\u5546\u54C1\u63CF\u8FF0"},null,8,["modelValue"])])])]),_:1}),o(Se,{align:"center",class:"q-mb-md"},{default:f(()=>[I(o(q,{class:"bg-blue-grey-10 text-white",type:"submit",loading:e.submitting,label:"\u78BA\u5B9A"},null,8,["loading"]),[[T]]),I(o(q,{class:"bg-white text-blue-grey-10",disabled:e.submitting,onClick:l[7]||(l[7]=i=>e.dialog=!1),label:"\u53D6\u6D88"},null,8,["disabled"]),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])])]),_:1},8,["modelValue"])]),n.length>0?(h(),Q(R,{key:0,class:"q-pa-xs q-ma-none",style:{"max-width":"80vw"},bordered:""},{default:f(()=>[(h(!0),K(O,null,Qe(n,(i,x)=>I((h(),Q(je,{clickable:"",class:"q-ma-none",key:i._id},{default:f(()=>[o(L,{avatar:""},{default:f(()=>[d("img",{src:i.image},null,8,He)]),_:2},1024),o(L,null,{default:f(()=>[De(Ie(i.name),1)]),_:2},1024),o(L,{class:"q-pa-sm q-gutter-sm justify-end"},{default:f(()=>[o(q,{class:"bg-green-10 text-white",style:{},onClick:P=>m(i._id,x),icon:"border_color",label:"\u7DE8\u8F2F"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)),[[Ae]])),128))]),_:1})):(h(),Q(R,{key:1,class:"text-center"},{default:f(()=>[Je]),_:1}))],64))}};export{at as default};