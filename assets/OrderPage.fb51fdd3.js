import{a as h,Q as m,b as a}from"./QList.1b5f3033.js";import{ad as w,Y as n,as as o,a2 as u,d as e,_ as t,Z as p,F as f,aN as y,au as k,aw as x,L as g,a3 as r,az as i,a4 as v}from"./index.82d2cc82.js";const b=u("div",{class:"window-width text-center"},[u("h5",null,[u("b",null,"\u8A02\u55AE\u7D00\u9304")])],-1),q={class:"text-overline",style:{width:"80vw",margin:"auto"}},D=r("\u8A02\u55AEID"),B=r("\u4E0B\u55AE\u65E5\u671F"),L=r("\u5408\u8A08"),N=r("\u8A02\u55AE\u5167\u5BB9"),Q=u("p",null,"\u6C92\u6709\u8A02\u55AE",-1),F={__name:"OrderPage",setup(S){const d=w([]);return(async()=>{try{const{data:_}=await y.get("/orders");d.push(..._.result.map(c=>(c.totalPrice=c.products.reduce((s,l)=>s+l.product.price*l.quantity,0),c)))}catch{k.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(_,c)=>(n(),o(f,null,[b,u("div",q,[e(h,{class:"justify-start bg-amber-4",style:{"border-radius":"15px 15px 0px 0px"}},{default:t(()=>[e(a,null,{default:t(()=>[D]),_:1}),e(a,null,{default:t(()=>[B]),_:1}),e(a,null,{default:t(()=>[L]),_:1}),e(a,null,{default:t(()=>[N]),_:1})]),_:1}),d.length>0?(n(),p(m,{key:0,separator:"",bordered:"",class:"q-pa-xs q-ma-none",style:{"max-width":"100vw"}},{default:t(()=>[(n(!0),o(f,null,x(d,s=>g((n(),p(h,{clickable:"",class:"q-ma-none",key:s._id},{default:t(()=>[e(a,null,{default:t(()=>[r(i(s._id),1)]),_:2},1024),e(a,null,{default:t(()=>[r(i(new Date(s.date).toLocaleDateString()),1)]),_:2},1024),e(a,null,{default:t(()=>[r("$ "+i(s.totalPrice),1)]),_:2},1024),e(a,null,{default:t(()=>[(n(!0),o(f,null,x(s.products,l=>(n(),o("div",{key:l._id},i(l.product.name)+" x "+i(l.quantity)+" \uFF08"+i(l.remark)+"\uFF09 ",1))),128))]),_:2},1024)]),_:2},1024)),[[v]])),128))]),_:1})):(n(),p(m,{key:1,class:"text-center"},{default:t(()=>[Q]),_:1}))])],64))}};export{F as default};
