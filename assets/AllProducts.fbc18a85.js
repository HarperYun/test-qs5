import{ad as l,Y as t,as as s,a2 as r,F as o,aw as n,a1 as i,at as d,au as u,Z as m,_,d as p,ax as h}from"./index.e5a82d34.js";import{_ as f}from"./ProductsCard.ac79f452.js";import"./QImg.fe543bbf.js";const x=r("h5",{class:"text-center"},[r("b",null,"\u5168\u90E8\u5546\u54C1")],-1),y={key:0,class:"q-py-lg row items-start q-gutter-md justify-center"},v={__name:"AllProducts",setup(g){const e=l([]);return(async()=>{try{const{data:a}=await d.get("/products");e.push(...a.result)}catch{u.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(a,k)=>(t(),s(o,null,[x,r("div",null,[e.length>0?(t(),s("div",y,[(t(!0),s(o,null,n(e,c=>(t(),m(h,{class:"my-card q-ma-md col-xs-6 col-sm-4 col-md-3",key:c._id},{default:_(()=>[p(f,{product:c,class:"text-white bg-amber-2"},null,8,["product"])]),_:2},1024))),128))])):i("",!0)])],64))}};export{v as default};
