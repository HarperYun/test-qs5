import{Q as u}from"./QImg.b38ac0ac.js";import{h as n,j as p,av as i,Q as l,U as m,V as _,W as x,d as o,_ as e,aw as a,au as v}from"./index.11b28787.js";const h=n("div",{class:"q-space"});var g=p({name:"QSpace",setup(){return()=>h}});const w={class:"text-h6 text-brown-10 q-px-sm q-pt-sm text-weight-bold productname"},C={class:"text-brown-10 text-weight-bold"},Q={class:"text-subtitle2 text-overline q-px-sm productprice"},S={__name:"ProductsCard",props:["product"],setup(t){const c=i();l();const d=s=>{c.push("/product/"+s)};return(s,r)=>(m(),_(v,{"product-card":"",class:"column productscard cursor-pointer full-height",onClick:r[0]||(r[0]=b=>d(t.product._id))},{default:x(()=>[o(u,{src:t.product.image},null,8,["src"]),e("div",w,a(t.product.name),1),o(g),e("div",C,[e("div",Q,"$"+a(t.product.price),1)])]),_:1}))}};export{S as _};