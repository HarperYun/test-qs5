import{Q as h,b as e,a as m}from"./QList.ef8bae59.js";import{ad as x,Y as u,as as d,Z as i,_ as t,F as f,a2 as p,aN as y,au as k,d as a,aw as w,L as g,a3 as l,az as c,a4 as q}from"./index.e5a82d34.js";const D=p("div",{class:"window-width text-center"},[p("h5",null,"\u6703\u54E1\u7BA1\u7406")],-1),v=l("\u8A02\u55AEID"),B=l("\u4E0B\u55AE\u65E5\u671F"),L=l("\u5408\u8A08"),N=l("\u4E0B\u55AE\u5E33\u865F"),Q=l("\u8A02\u55AE\u5167\u5BB9"),S=p("p",null,"\u6C92\u6709\u6703\u54E1",-1),F={__name:"MembersPage",setup(b){const _=x([]);return(async()=>{try{const{data:r}=await y.get("/orders/all");_.push(...r.result.map(o=>(o.totalPrice=o.products.reduce((s,n)=>s+n.product.price*n.quantity,0),o)))}catch(r){console.log(r),k.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE1"})}})(),(r,o)=>(u(),d(f,null,[D,_.length>0?(u(),i(h,{key:0,separator:"",bordered:"",class:"q-pa-xs q-ma-none",style:{"max-width":"100vw"}},{default:t(()=>[a(m,null,{default:t(()=>[a(e,null,{default:t(()=>[v]),_:1}),a(e,null,{default:t(()=>[B]),_:1}),a(e,null,{default:t(()=>[L]),_:1}),a(e,null,{default:t(()=>[N]),_:1}),a(e,null,{default:t(()=>[Q]),_:1})]),_:1}),(u(!0),d(f,null,w(_,s=>g((u(),i(m,{clickable:"",class:"q-ma-none",key:s._id},{default:t(()=>[a(e,null,{default:t(()=>[l(c(s._id),1)]),_:2},1024),a(e,null,{default:t(()=>[l(c(new Date(s.date).toLocaleDateString()),1)]),_:2},1024),a(e,null,{default:t(()=>[l("$ "+c(s.totalPrice),1)]),_:2},1024),a(e,null,{default:t(()=>[l(c(s.user.account),1)]),_:2},1024),(u(!0),d(f,null,w(s.products,n=>(u(),i(e,{key:n._id},{default:t(()=>[l(c(n.product.name)+" x "+c(n.quantity)+" \uFF08"+c(n.remark)+"\uFF09 ",1)]),_:2},1024))),128))]),_:2},1024)),[[q]])),128))]),_:1})):(u(),i(h,{key:1,class:"text-center"},{default:t(()=>[S]),_:1}))],64))}};export{F as default};
