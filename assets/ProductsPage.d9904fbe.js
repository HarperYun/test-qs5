import{j as ie,a_ as ne,aZ as oe,bf as ue,a$ as re,bg as de,b1 as ce,r as D,b0 as me,bh as fe,bi as pe,c as v,b2 as $,bj as ge,h as x,b6 as ve,g as be,t as ye,l as xe,bk as he,bl as _e,ag as Ve,ad as V,Y as h,as as K,a2 as d,d as o,$ as w,_ as f,ba as we,Z as Q,F as O,aN as P,au as q,be as qe,ax as Fe,ay as Ce,aF as A,aL as ke,bm as Se,L,aw as Qe,a3 as Pe,az as Ae,a4 as Le}from"./index.82d2cc82.js";import{b as je,Q as De}from"./QSelect.b4d19f4c.js";import{Q as Ie}from"./QForm.999992f8.js";import{Q as R,a as Ne,b as j}from"./QList.1b5f3033.js";import"./selection.3a3f08d5.js";import"./rtl.4b414a6d.js";var Ee=ie({name:"QFile",inheritAttrs:!1,props:{...ne,...oe,...ue,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...re,...de],setup(t,{slots:u,emit:n,attrs:e}){const{proxy:p}=be(),m=ce(),b=D(null),F=D(!1),i=me(t),{pickFiles:l,onDragover:s,onDragleave:y,processFiles:I,getDndNode:Z}=fe({editable:m.editable,dnd:F,getFileInput:z,addFilesToQueue:B}),Y=pe(t),r=v(()=>Object(t.modelValue)===t.modelValue?"length"in t.modelValue?Array.from(t.modelValue):[t.modelValue]:[]),N=v(()=>$(r.value)),G=v(()=>r.value.map(a=>a.name).join(", ")),E=v(()=>ge(r.value.reduce((a,c)=>a+c.size,0))),H=v(()=>({totalSize:E.value,filesNumber:r.value.length,maxFiles:t.maxFiles})),J=v(()=>({tabindex:-1,type:"file",title:"",accept:t.accept,capture:t.capture,name:i.value,...e,id:m.targetUid.value,disabled:m.editable.value!==!0})),W=v(()=>"q-file q-field--auto-height"+(F.value===!0?" q-file--dnd":"")),U=v(()=>t.multiple===!0&&t.append===!0);function C(a){const c=r.value.slice();c.splice(a,1),k(c)}function X(a){const c=r.value.findIndex(a);c>-1&&C(c)}function k(a){n("update:modelValue",t.multiple===!0?a:a[0])}function ee(a){a.keyCode===13&&ye(a)}function te(a){(a.keyCode===13||a.keyCode===32)&&l(a)}function z(){return b.value}function B(a,c){const g=I(a,c,r.value,U.value),S=z();S!=null&&(S.value=""),g!==void 0&&((t.multiple===!0?t.modelValue&&g.every(se=>r.value.includes(se)):t.modelValue===g[0])||k(U.value===!0?r.value.concat(g):g))}function _(){return[x("input",{class:[t.inputClass,"q-file__filler"],style:t.inputStyle})]}function le(){if(u.file!==void 0)return r.value.length===0?_():r.value.map((c,g)=>u.file({index:g,file:c,ref:this}));if(u.selected!==void 0)return r.value.length===0?_():u.selected({files:r.value,ref:this});if(t.useChips===!0)return r.value.length===0?_():r.value.map((c,g)=>x(je,{key:"file-"+g,removable:m.editable.value,dense:!0,textColor:t.color,tabindex:t.tabindex,onRemove:()=>{C(g)}},()=>x("span",{class:"ellipsis",textContent:c.name})));const a=t.displayValue!==void 0?t.displayValue:G.value;return a.length>0?[x("div",{class:t.inputClass,style:t.inputStyle,textContent:a})]:_()}function ae(){const a={ref:b,...J.value,...Y.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:B};return t.multiple===!0&&(a.multiple=!0),x("input",a)}return Object.assign(m,{fieldClass:W,emitValue:k,hasValue:N,inputRef:b,innerValue:r,floatingLabel:v(()=>N.value===!0||$(t.displayValue)),computedCounter:v(()=>{if(t.counterLabel!==void 0)return t.counterLabel(H.value);const a=t.maxFiles;return`${r.value.length}${a!==void 0?" / "+a:""} (${E.value})`}),getControlChild:()=>Z("file"),getControl:()=>{const a={ref:m.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:t.tabindex};return m.editable.value===!0&&Object.assign(a,{onDragover:s,onDragleave:y,onKeydown:ee,onKeyup:te}),x("div",a,[ae()].concat(le()))}}),Object.assign(p,{removeAtIndex:C,removeFile:X,getNativeElement:()=>b.value}),ve(m)}});function M(t){if(t===!1)return 0;if(t===!0||t===void 0)return 1;const u=parseInt(t,10);return isNaN(u)?0:u}var T=xe({name:"close-popup",beforeMount(t,{value:u}){const n={depth:M(u),handler(e){n.depth!==0&&setTimeout(()=>{const p=he(t);p!==void 0&&_e(p,e,n.depth)})},handlerKey(e){Ve(e,13)===!0&&n.handler(e)}};t.__qclosepopup=n,t.addEventListener("click",n.handler),t.addEventListener("keyup",n.handlerKey)},updated(t,{value:u,oldValue:n}){u!==n&&(t.__qclosepopup.depth=M(u))},beforeUnmount(t){const u=t.__qclosepopup;t.removeEventListener("click",u.handler),t.removeEventListener("keyup",u.handlerKey),delete t.__qclosepopup}});const Ue=d("div",{class:"window-width text-center"},[d("h5",null,"\u5546\u54C1\u7BA1\u7406")],-1),ze={class:"q-ma-md"},Be={style:{"max-width":"80vw","box-shadow":"none"}},$e={class:"row justify-center"},Ke={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Oe={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Re={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Me={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Te={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Ze={class:"row items-start"},Ye={class:"col-xs-12 q-ma-sm q-gutter-md",style:{"max-width":"300px"}},Ge=["src"],He=d("p",null,"\u6C92\u6709\u5546\u54C1",-1),at={__name:"ProductsPage",setup(t){const u=V(["\u5929\u7136\u77F3\u624B\u934A","\u881F\u7DDA\u7DE8\u7E69","\u5E03\u54C1\u624B\u4F5C","\u68C9\u9EBB\u7DE8\u7E54"]);D("");const n=V([]),e=V({_id:"",name:"",price:0,category:"",sell:!1,image:[],description:"",idx:-1,dialog:!1,valid:!1,submitting:!1}),p=V({required(i){return!!i||"\u5FC5\u586B"},price(i){return i>-1||"\u5FC5\u9808\u5927\u65BC\u7B49\u65BC 0"},size(i){var l,s,y;return!i||!i.length||((s=(l=i[0])==null?void 0:l.type)==null?void 0:s.includes("image"))&&((y=i[0])==null?void 0:y.size)<1024*1024||"\u6A94\u6848\u8D85\u904E1 MB \u6216 \u6A94\u6848\u683C\u5F0F\u4E0D\u7B26"}}),m=(i,l)=>{e._id=i,l>-1?(e.name=n[l].name,e.price=n[l].price,e.category=n[l].category,e.sell=n[l].sell,e.description=n[l].description):(e.name="",e.price=0,e.category="",e.sell=!1,e.description=""),e.image=[],e.idx=l,e.dialog=!0,e.valid=!1,e.submitting=!1},b=async()=>{if(console.log(123),e.valid)return;e.submitting=!0,console.log(456);const i=new FormData;for(const l in e)["_id","idx","dialog","valid","submitting"].includes(l)||(l==="image"?i.append(l,e[l][0]):i.append(l,e[l]));try{if(e._id.length===0){const{data:l}=await P.post("/products",i);n.push(l.result),q.fire({icon:"success",title:"\u6210\u529F",text:"\u65B0\u589E\u6210\u529F"})}else{const{data:l}=await P.patch("/products/"+e._id,i);n[e.idx]=l.result,q.fire({icon:"success",title:"\u6210\u529F",text:"\u7DE8\u8F2F\u6210\u529F"})}e.dialog=!1}catch(l){q.fire({icon:"success",title:"\u5931\u6557",text:l.isAxiosError?l.response.data.message:l.message})}e.submitting=!1};return(async()=>{try{const{data:i}=await P.get("/products/all");n.push(...i.result)}catch(i){console.log(i),q.fire({icon:"error",title:"\u5931\u6557",text:i.isAxiosError?i.response.data.message:i.message})}})(),(i,l)=>(h(),K(O,null,[Ue,d("div",ze,[o(w,{class:"justify-center",color:"blue-grey-10 text-teal-2",icon:"add_circle_outline",onClick:l[0]||(l[0]=s=>m("",-1)),label:"\u65B0\u589E\u5546\u54C1"})]),d("div",null,[o(we,{modelValue:e.dialog,"onUpdate:modelValue":l[9]||(l[9]=s=>e.dialog=s),persistent:""},{default:f(()=>[d("div",Be,[o(Ie,{modelValue:e.valid,"onUpdate:modelValue":l[8]||(l[8]=s=>e.valid=s),onSubmit:qe(b,["prevent"])},{default:f(()=>[o(Fe,{style:{width:"700px","max-width":"80vw"}},{default:f(()=>[o(Ce,null,{default:f(()=>[d("div",$e,[d("div",Ke,[o(A,{filled:"",modelValue:e.name,"onUpdate:modelValue":l[1]||(l[1]=s=>e.name=s),rules:[p.required],label:"\u540D\u7A31"},null,8,["modelValue","rules"])]),d("div",Oe,[o(A,{filled:"",type:"number",rules:[p.required,p.price],modelValue:e.price,"onUpdate:modelValue":l[2]||(l[2]=s=>e.price=s),label:"\u50F9\u683C"},null,8,["rules","modelValue"])]),d("div",Re,[o(De,{filled:"",options:u,rules:[p.required],modelValue:e.category,"onUpdate:modelValue":l[3]||(l[3]=s=>e.category=s),label:"\u5206\u985E"},null,8,["options","rules","modelValue"])]),d("div",Me,[o(ke,{modelValue:e.sell,"onUpdate:modelValue":l[4]||(l[4]=s=>e.sell=s),label:"\u662F\u5426\u4E0A\u67B6"},null,8,["modelValue"])]),d("div",Te,[d("div",Ze,[o(Ee,{modelValue:e.image,"onUpdate:modelValue":l[5]||(l[5]=s=>e.image=s),label:"\u4E0A\u50B3\u5716\u7247",accept:"image/*",filled:"",counter:"",multiple:"","max-files":"6",style:{"max-width":"300px"},rules:[p.size]},null,8,["modelValue","rules"])])]),d("div",Ye,[o(A,{filled:"",type:"textarea",modelValue:e.description,"onUpdate:modelValue":l[6]||(l[6]=s=>e.description=s),label:"\u5546\u54C1\u63CF\u8FF0"},null,8,["modelValue"])])])]),_:1}),o(Se,{align:"center",class:"q-mb-md"},{default:f(()=>[L(o(w,{class:"bg-blue-grey-10 text-white",type:"submit",loading:e.submitting,label:"\u78BA\u5B9A"},null,8,["loading"]),[[T]]),L(o(w,{class:"bg-white text-blue-grey-10",disabled:e.submitting,onClick:l[7]||(l[7]=s=>e.dialog=!1),label:"\u53D6\u6D88"},null,8,["disabled"]),[[T]])]),_:1})]),_:1})]),_:1},8,["modelValue","onSubmit"])])]),_:1},8,["modelValue"])]),n.length>0?(h(),Q(R,{key:0,separator:"",class:"q-pa-xs q-ma-none",style:{width:"80vw",margin:"auto"},bordered:""},{default:f(()=>[(h(!0),K(O,null,Qe(n,(s,y)=>L((h(),Q(Ne,{clickable:"",class:"q-ma-none",key:s._id},{default:f(()=>[o(j,{avatar:""},{default:f(()=>[d("img",{style:{"max-width":"10vw"},src:s.image},null,8,Ge)]),_:2},1024),o(j,null,{default:f(()=>[Pe(Ae(s.name),1)]),_:2},1024),o(j,{class:"q-pa-sm q-gutter-sm justify-end"},{default:f(()=>[o(w,{class:"bg-green-10 text-white self-end",style:{},onClick:I=>m(s._id,y),icon:"border_color",label:"\u7DE8\u8F2F"},null,8,["onClick"])]),_:2},1024)]),_:2},1024)),[[Le]])),128))]),_:1})):(h(),Q(R,{key:1,class:"text-center"},{default:f(()=>[He]),_:1}))],64))}};export{at as default};
