import{j as p,h as n,l as ge,E as bt,C as je,g as Z,V as Se,X as ye,c,r as A,w as E,a5 as mt,a6 as Oe,aD as St,o as yt,am as ht,al as wt,p as _t,k as Ae,ae as qt,af as Ct,aq as be,aI as Fe,aJ as Pt,$ as Ee,aK as kt,aL as ve,aM as N,Q,ay as Rt,u as xt,aa as Ve,t as fe,as as Bt,v as Le,x as Tt,d as Ot,F as Ft,A as me,aN as Vt,ax as Lt}from"./index.9713ecfd.js";import{Q as Ne}from"./QList.180df6fb.js";import{u as Dt,a as $t,c as Qe,Q as Mt}from"./QSelect.f2ac1fa5.js";import{u as jt,a as At,b as Et}from"./use-fullscreen.40ed920a.js";import"./selection.942a6eb8.js";import"./rtl.4b414a6d.js";var Nt=p({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:l}){const g=Z(),{proxy:{$q:u}}=g,i=s=>{l("click",s)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:i},ge(a.default));let s,f;const d=g.vnode.key;if(d){if(s=e.props.colsMap[d],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const r=s.align==="right"?"unshift":"push";f=bt(a.default,[]),f[r](n(je,{class:s.__iconClass,name:u.iconSet.table.arrowUp}))}else f=ge(a.default);const y={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:r=>{s.sortable===!0&&e.props.sort(s),i(r)}};return n("th",y,f)}}});const Qt=["horizontal","vertical","cell","none"];var pt=p({name:"QMarkupTable",props:{...Se,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Qt.includes(e)}},setup(e,{slots:a}){const l=Z(),g=ye(e,l.proxy.$q),u=c(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(g.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:u.value},[n("table",{class:"q-table"},ge(a.default))])}});function pe(e,a){return n("div",e,[n("table",{class:"q-table"},a)])}const zt={list:Ne,table:pt},Ht=["list","table","__qtable"];var Ut=p({name:"QVirtualScroll",props:{...Dt,type:{type:String,default:"list",validator:e=>Ht.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:l}){let g;const u=A(null),i=c(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:f,padVirtualScroll:d,onVirtualScrollEvt:y}=$t({virtualScrollLength:i,getVirtualScrollTarget:C,getVirtualScrollEl:q}),r=c(()=>{if(i.value===0)return[];const O=(F,R)=>({index:s.value.from+R,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),S=c(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=c(()=>e.scrollTarget!==void 0?{}:{tabindex:0});E(i,()=>{f()}),E(()=>e.scrollTarget,()=>{w(),h()});function q(){return u.value.$el||u.value}function C(){return g}function h(){g=mt(q(),e.scrollTarget),g.addEventListener("scroll",y,Oe.passive)}function w(){g!==void 0&&(g.removeEventListener("scroll",y,Oe.passive),g=void 0)}function T(){let O=d(e.type==="list"?"div":"tbody",r.value.map(a.default));return a.before!==void 0&&(O=a.before().concat(O)),Ae(a.after,O)}return St(()=>{f()}),yt(()=>{h()}),ht(()=>{h()}),wt(()=>{w()}),_t(()=>{w()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?pe({ref:u,class:"q-table__middle "+S.value},T()):n(zt[e.type],{...l,ref:u,class:[l.class,S.value],..._.value},T)}}});const It={xs:2,sm:4,md:6,lg:10,xl:14};function De(e,a,l){return{transform:a===!0?`translateX(${l.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var Kt=p({name:"QLinearProgress",props:{...Se,...qt,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:a}){const{proxy:l}=Z(),g=ye(e,l.$q),u=Ct(e,It),i=c(()=>e.indeterminate===!0||e.query===!0),s=c(()=>e.reverse!==e.query),f=c(()=>({...u.value!==null?u.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),y=c(()=>De(e.buffer!==void 0?e.buffer:1,s.value,l.$q)),r=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${g.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),S=c(()=>De(i.value===!0?1:e.value,s.value,l.$q)),_=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${i.value===!0?"in":""}determinate`),q=c(()=>({width:`${e.value*100}%`})),C=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[n("div",{class:r.value,style:y.value}),n("div",{class:_.value,style:S.value})];return e.stripe===!0&&i.value===!1&&h.push(n("div",{class:C.value,style:q.value})),n("div",{class:d.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ae(a.default,h))}}});function Wt(e,a){return new Date(e)-new Date(a)}const Gt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Xt(e,a,l,g){const u=c(()=>{const{sortBy:f}=a.value;return f&&l.value.find(d=>d.name===f)||null}),i=c(()=>e.sortMethod!==void 0?e.sortMethod:(f,d,y)=>{const r=l.value.find(q=>q.name===d);if(r===void 0||r.field===void 0)return f;const S=y===!0?-1:1,_=typeof r.field=="function"?q=>r.field(q):q=>q[r.field];return f.sort((q,C)=>{let h=_(q),w=_(C);return h==null?-1*S:w==null?1*S:r.sort!==void 0?r.sort(h,w,q,C)*S:be(h)===!0&&be(w)===!0?(h-w)*S:Fe(h)===!0&&Fe(w)===!0?Wt(h,w)*S:typeof h=="boolean"&&typeof w=="boolean"?(h-w)*S:([h,w]=[h,w].map(T=>(T+"").toLocaleString().toLowerCase()),h<w?-1*S:h===w?0:S)})});function s(f){let d=e.columnSortOrder;if(Pt(f)===!0)f.sortOrder&&(d=f.sortOrder),f=f.name;else{const S=l.value.find(_=>_.name===f);S!==void 0&&S.sortOrder&&(d=S.sortOrder)}let{sortBy:y,descending:r}=a.value;y!==f?(y=f,r=d==="da"):e.binaryStateSort===!0?r=!r:r===!0?d==="ad"?y=null:r=!1:d==="ad"?r=!0:y=null,g({sortBy:y,descending:r,page:1})}return{columnToSort:u,computedSortMethod:i,sort:s}}const Jt={filter:[String,Object],filterMethod:Function};function Yt(e,a){const l=c(()=>e.filterMethod!==void 0?e.filterMethod:(g,u,i,s)=>{const f=u?u.toLowerCase():"";return g.filter(d=>i.some(y=>{const r=s(y,d)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(f)!==-1}))});return E(()=>e.filter,()=>{Ee(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:l}}function Zt(e,a){for(const l in a)if(a[l]!==e[l])return!1;return!0}function $e(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const el={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function tl(e,a){const{props:l,emit:g}=e,u=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:l.rowsPerPageOptions.length>0?l.rowsPerPageOptions[0]:5},l.pagination)),i=c(()=>{const r=l["onUpdate:pagination"]!==void 0?{...u.value,...l.pagination}:u.value;return $e(r)}),s=c(()=>i.value.rowsNumber!==void 0);function f(r){d({pagination:r,filter:l.filter})}function d(r={}){Ee(()=>{g("request",{pagination:r.pagination||i.value,filter:r.filter||l.filter,getCellValue:a})})}function y(r,S){const _=$e({...i.value,...r});if(Zt(i.value,_)===!0){s.value===!0&&S===!0&&f(_);return}if(s.value===!0){f(_);return}l.pagination!==void 0&&l["onUpdate:pagination"]!==void 0?g("update:pagination",_):u.value=_}return{innerPagination:u,computedPagination:i,isServerSide:s,requestServerInteraction:d,setPagination:y}}function ll(e,a,l,g,u,i){const{props:s,emit:f,proxy:{$q:d}}=e,y=c(()=>g.value===!0?l.value.rowsNumber||0:i.value),r=c(()=>{const{page:R,rowsPerPage:x}=l.value;return(R-1)*x}),S=c(()=>{const{page:R,rowsPerPage:x}=l.value;return R*x}),_=c(()=>l.value.page===1),q=c(()=>l.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/l.value.rowsPerPage))),C=c(()=>S.value===0?!0:l.value.page>=q.value),h=c(()=>(s.rowsPerPageOptions.includes(a.value.rowsPerPage)?s.rowsPerPageOptions:[a.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(x=>({label:x===0?d.lang.table.allRows:""+x,value:x})));E(q,(R,x)=>{if(R===x)return;const z=l.value.page;R&&!z?u({page:1}):R<z&&u({page:R})});function w(){u({page:1})}function T(){const{page:R}=l.value;R>1&&u({page:R-1})}function O(){const{page:R,rowsPerPage:x}=l.value;S.value>0&&R*x<y.value&&u({page:R+1})}function F(){u({page:q.value})}return s["onUpdate:pagination"]!==void 0&&f("update:pagination",{...l.value}),{firstRowIndex:r,lastRowIndex:S,isFirstPage:_,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:h,computedRowsNumber:y,firstPage:w,prevPage:T,nextPage:O,lastPage:F}}const al={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},rl=["update:selected","selection"];function nl(e,a,l,g){const u=c(()=>{const C={};return e.selected.map(g.value).forEach(h=>{C[h]=!0}),C}),i=c(()=>e.selection!=="none"),s=c(()=>e.selection==="single"),f=c(()=>e.selection==="multiple"),d=c(()=>l.value.length>0&&l.value.every(C=>u.value[g.value(C)]===!0)),y=c(()=>d.value!==!0&&l.value.some(C=>u.value[g.value(C)]===!0)),r=c(()=>e.selected.length);function S(C){return u.value[C]===!0}function _(){a("update:selected",[])}function q(C,h,w,T){a("selection",{rows:h,added:w,keys:C,evt:T});const O=s.value===!0?w===!0?h:[]:w===!0?e.selected.concat(h):e.selected.filter(F=>C.includes(g.value(F))===!1);a("update:selected",O)}return{hasSelectionMode:i,singleSelection:s,multipleSelection:f,allRowsSelected:d,someRowsSelected:y,rowsSelectedNumber:r,isRowSelected:S,clearSelection:_,updateSelection:q}}function Me(e){return Array.isArray(e)?e.slice():[]}const ol={expanded:Array},il=["update:expanded"];function sl(e,a){const l=A(Me(e.expanded));E(()=>e.expanded,s=>{l.value=Me(s)});function g(s){return l.value.includes(s)}function u(s){e.expanded!==void 0?a("update:expanded",s):l.value=s}function i(s,f){const d=l.value.slice(),y=d.indexOf(s);f===!0?y===-1&&(d.push(s),u(d)):y!==-1&&(d.splice(y,1),u(d))}return{isRowExpanded:g,setExpanded:u,updateExpanded:i}}const ul={visibleColumns:Array};function cl(e,a,l){const g=c(()=>{if(e.columns!==void 0)return e.columns;const f=e.rows[0];return f!==void 0?Object.keys(f).map(d=>({name:d,label:d.toUpperCase(),field:d,align:be(f[d])?"right":"left",sortable:!0})):[]}),u=c(()=>{const{sortBy:f,descending:d}=a.value;return(e.visibleColumns!==void 0?g.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):g.value).map(r=>{const S=r.align||"right",_=`text-${S}`;return{...r,align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:_+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===f?` sorted ${d===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>_+" "+r.classes:q=>_+" "+r.classes(q):()=>_}})}),i=c(()=>{const f={};return u.value.forEach(d=>{f[d.name]=d}),f}),s=c(()=>e.tableColspan!==void 0?e.tableColspan:u.value.length+(l.value===!0?1:0));return{colList:g,computedCols:u,computedColsMap:i,computedColspan:s}}const Y="q-table__bottom row items-center",ze={};Qe.forEach(e=>{ze[e]={}});var dl=p({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Se,...jt,...ul,...Jt,...el,...ol,...al,...Gt},emits:["request","virtual-scroll",...At,...il,...rl],setup(e,{slots:a,emit:l}){const g=Z(),{proxy:{$q:u}}=g,i=ye(e,u),{inFullscreen:s,toggleFullscreen:f}=Et(),d=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=A(null),r=A(null),S=c(()=>e.grid!==!0&&e.virtualScroll===!0),_=c(()=>" q-table__card"+(i.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(i.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=c(()=>q.value+(e.loading===!0?" q-table--loading":""));E(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{S.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:h,computedPagination:w,isServerSide:T,requestServerInteraction:O,setPagination:F}=tl(g,M),{computedFilterMethod:R}=Yt(e,F),{isRowExpanded:x,setExpanded:z,updateExpanded:He}=sl(e,l),ee=c(()=>{let t=e.rows;if(T.value===!0||t.length===0)return t;const{sortBy:o,descending:v}=w.value;return e.filter&&(t=R.value(t,e.filter,V.value,M)),Ge.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,o,v)),t}),he=c(()=>ee.value.length),D=c(()=>{let t=ee.value;if(T.value===!0)return t;const{rowsPerPage:o}=w.value;return o!==0&&(U.value===0&&e.rows!==t?t.length>I.value&&(t=t.slice(0,I.value)):t=t.slice(U.value,I.value)),t}),{hasSelectionMode:$,singleSelection:Ue,multipleSelection:we,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:te,isRowSelected:le,clearSelection:Ke,updateSelection:H}=nl(e,l,D,d),{colList:We,computedCols:V,computedColsMap:qe,computedColspan:Ce}=cl(e,w,$),{columnToSort:Ge,computedSortMethod:Xe,sort:ae}=Xt(e,w,We,F),{firstRowIndex:U,lastRowIndex:I,isFirstPage:re,isLastPage:ne,pagesNumber:K,computedRowsPerPageOptions:Je,computedRowsNumber:W,firstPage:oe,prevPage:ie,nextPage:se,lastPage:ue}=ll(g,h,w,T,F,he),Ye=c(()=>D.value.length===0),Ze=c(()=>{const t={};return Qe.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function et(){S.value===!0&&r.value.reset()}function tt(){if(e.grid===!0)return ft();const t=e.hideHeader!==!0?Be:null;if(S.value===!0){const v=a["top-row"],b=a["bottom-row"],m={default:k=>ke(k.item,a.body,k.index)};if(v!==void 0){const k=n("tbody",v({cols:V.value}));m.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(m.before=t);return b!==void 0&&(m.after=()=>n("tbody",b({cols:V.value}))),n(Ut,{ref:r,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:D.value,type:"__qtable",tableColspan:Ce.value,onVirtualScroll:at},m)}const o=[rt()];return t!==null&&o.unshift(t()),pe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function lt(t,o){if(r.value!==null){r.value.scrollTo(t,o);return}t=parseInt(t,10);const v=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(v!==null){const b=y.value.querySelector(".q-table__middle.scroll"),{offsetTop:m}=v,k=m<b.scrollTop?"decrease":"increase";b.scrollTop=m,l("virtual-scroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:k})}}function at(t){l("virtual-scroll",t)}function Pe(){return[n(Kt,{class:"q-table__linear-progress",color:e.color,dark:i.value,indeterminate:!0,trackColor:"transparent"})]}function ke(t,o,v){const b=d.value(t),m=le(b);if(o!==void 0)return o(Re({key:b,row:t,pageIndex:v,__trClass:m?"selected":""}));const k=a["body-cell"],P=V.value.map(B=>{const X=a[`body-cell-${B.name}`],J=X!==void 0?X:k;return J!==void 0?J(nt({key:b,row:t,pageIndex:v,col:B})):n("td",{class:B.__tdClass(t),style:B.__tdStyle(t)},M(B,t))});if($.value===!0){const B=a["body-selection"],X=B!==void 0?B(ot({key:b,row:t,pageIndex:v})):[n(ve,{modelValue:m,color:e.color,dark:i.value,dense:e.dense,"onUpdate:modelValue":(J,gt)=>{H([b],[t],J,gt)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},X))}const L={key:b,class:{selected:m}};return e.onRowClick!==void 0&&(L.class["cursor-pointer"]=!0,L.onClick=B=>{l("RowClick",B,t,v)}),e.onRowDblclick!==void 0&&(L.class["cursor-pointer"]=!0,L.onDblclick=B=>{l("RowDblclick",B,t,v)}),e.onRowContextmenu!==void 0&&(L.class["cursor-pointer"]=!0,L.onContextmenu=B=>{l("RowContextmenu",B,t,v)}),n("tr",L,P)}function rt(){const t=a.body,o=a["top-row"],v=a["bottom-row"];let b=D.value.map((m,k)=>ke(m,t,k));return o!==void 0&&(b=o({cols:V.value}).concat(b)),v!==void 0&&(b=b.concat(v({cols:V.value}))),n("tbody",b)}function Re(t){return ce(t),t.cols=t.cols.map(o=>{const v={...o};return N(v,"value",()=>M(o,t.row)),v}),t}function nt(t){return ce(t),N(t,"value",()=>M(t.col,t.row)),t}function ot(t){return ce(t),t}function ce(t){Object.assign(t,{cols:V.value,colsMap:qe.value,sort:ae,rowIndex:U.value+t.pageIndex,color:e.color,dark:i.value,dense:e.dense}),$.value===!0&&N(t,"selected",()=>le(t.key),(o,v)=>{H([t.key],[t.row],o,v)}),N(t,"expand",()=>x(t.key),o=>{He(t.key,o)})}function M(t,o){const v=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(v,o):v}const j=c(()=>({pagination:w.value,pagesNumber:K.value,isFirstPage:re.value,isLastPage:ne.value,firstPage:oe,prevPage:ie,nextPage:se,lastPage:ue,inFullscreen:s.value,toggleFullscreen:f}));function it(){const t=a.top,o=a["top-left"],v=a["top-right"],b=a["top-selection"],m=$.value===!0&&b!==void 0&&te.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(j.value)]);let P;if(m===!0?P=b(j.value).slice():(P=[],o!==void 0?P.push(n("div",{class:"q-table-control"},[o(j.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),v!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[v(j.value)]))),P.length!==0)return n("div",{class:k},P)}const xe=c(()=>_e.value===!0?null:Ie.value);function Be(){const t=st();return e.loading===!0&&a.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Ce.value},Pe())])),n("thead",t)}function st(){const t=a.header,o=a["header-cell"];if(t!==void 0)return t(de({header:!0})).slice();const v=V.value.map(b=>{const m=a[`header-cell-${b.name}`],k=m!==void 0?m:o,P=de({col:b});return k!==void 0?k(P):n(Nt,{key:b.name,props:P},()=>b.label)});if(Ue.value===!0&&e.grid!==!0)v.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(we.value===!0){const b=a["header-selection"],m=b!==void 0?b(de({})):[n(ve,{color:e.color,modelValue:xe.value,dark:i.value,dense:e.dense,"onUpdate:modelValue":Te})];v.unshift(n("th",{class:"q-table--col-auto-width"},m))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},v)]}function de(t){return Object.assign(t,{cols:V.value,sort:ae,colsMap:qe.value,color:e.color,dark:i.value,dense:e.dense}),we.value===!0&&N(t,"selected",()=>xe.value,Te),t}function Te(t){_e.value===!0&&(t=!1),H(D.value.map(d.value),D.value,t)}const G=c(()=>{const t=[e.iconFirstPage||u.iconSet.table.firstPage,e.iconPrevPage||u.iconSet.table.prevPage,e.iconNextPage||u.iconSet.table.nextPage,e.iconLastPage||u.iconSet.table.lastPage];return u.lang.rtl===!0?t.reverse():t});function ut(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const v=e.loading===!0?e.loadingLabel||u.lang.table.loading:e.filter?e.noResultsLabel||u.lang.table.noResults:e.noDataLabel||u.lang.table.noData,b=a["no-data"],m=b!==void 0?[b({message:v,icon:u.iconSet.table.warning,filter:e.filter})]:[n(je,{class:"q-table__bottom-nodata-icon",name:u.iconSet.table.warning}),v];return n("div",{class:Y+" q-table__bottom--nodata"},m)}const t=a.bottom;if(t!==void 0)return n("div",{class:Y},[t(j.value)]);const o=e.hideSelectedBanner!==!0&&$.value===!0&&te.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||u.lang.table.selectedRecords)(te.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:Y+" justify-end"},dt(o));if(o.length>0)return n("div",{class:Y},o)}function ct(t){F({page:1,rowsPerPage:t.value})}function dt(t){let o;const{rowsPerPage:v}=w.value,b=e.paginationLabel||u.lang.table.pagination,m=a.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||u.lang.table.recordsPerPage]),n(Mt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:v,options:Je.value,displayValue:v===0?u.lang.table.allRows:v,dark:i.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ct})])),m!==void 0)o=m(j.value);else if(o=[n("span",v!==0?{class:"q-table__bottom-item"}:{},[v?b(U.value+1,Math.min(I.value,W.value),W.value):b(1,he.value,W.value)])],v!==0&&K.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),K.value>2&&o.push(n(Q,{key:"pgFirst",...P,icon:G.value[0],disable:re.value,onClick:oe})),o.push(n(Q,{key:"pgPrev",...P,icon:G.value[1],disable:re.value,onClick:ie}),n(Q,{key:"pgNext",...P,icon:G.value[2],disable:ne.value,onClick:se})),K.value>2&&o.push(n(Q,{key:"pgLast",...P,icon:G.value[3],disable:ne.value,onClick:ue}))}return t.push(n("div",{class:"q-table__control"},o)),t}function vt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Be()])]:e.loading===!0&&a.loading===void 0?Pe():void 0;return n("div",{class:"q-table__middle"},t)}function ft(){const t=a.item!==void 0?a.item:o=>{const v=o.cols.map(m=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[m.label]),n("div",{class:"q-table__grid-item-value"},[m.value])]));if($.value===!0){const m=a["body-selection"],k=m!==void 0?m(o):[n(ve,{modelValue:o.selected,color:e.color,dark:i.value,dense:e.dense,"onUpdate:modelValue":(P,L)=>{H([o.key],[o.row],P,L)}})];v.unshift(n("div",{class:"q-table__grid-item-row"},k),n(Rt,{dark:i.value}))}const b={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=m=>{l("RowClick",m,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=m=>{l("RowDblclick",m,o.row,o.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[n("div",b,v)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},D.value.map((o,v)=>t(Re({key:d.value(o),row:o,pageIndex:v}))))}return Object.assign(g.proxy,{requestServerInteraction:O,setPagination:F,firstPage:oe,prevPage:ie,nextPage:se,lastPage:ue,isRowSelected:le,clearSelection:Ke,isRowExpanded:x,setExpanded:z,sort:ae,resetVirtualScroll:et,scrollTo:lt,getCellValue:M}),kt(g.proxy,{filteredSortedRows:()=>ee.value,computedRows:()=>D.value,computedRowsNumber:()=>W.value}),()=>{const t=[it()],o={ref:y,class:C.value};return e.grid===!0?t.push(vt()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(tt(),ut()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),n("div",o,t)}}});const vl=me("div",{class:"window-width text-center"},[me("h4",null,"\u8CFC\u7269\u8ECA")],-1),fl=me("p",null,"\u6C92\u6709\u8A02\u55AE",-1),wl={__name:"CartPage",setup(e){const a=A("");xt();const l=Ve([]);c(()=>l.reduce((i,s)=>i+s.product.price*s.quantity,0)),c(()=>l.length>0&&!l.some(i=>!i.product.sell)),(async()=>{try{const{data:i}=await Vt.get("/users/cart");l.push(...i.result),console.log(l)}catch{Lt.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA41"})}})();const u=Ve([{name:"name",align:"left",required:!0,label:"\u5546\u54C1\u540D\u7A31",field:i=>i.product.name,format:i=>`${i}`,sortable:!0},{name:"price",required:!0,label:"\u55AE\u50F9",field:i=>i.product.price},{name:"quantity",required:!0,label:"\u6578\u91CF",field:i=>i.price},{name:"subtotal",required:!0,label:"\u5C0F\u8A08",field:i=>"123"},{name:"todo",required:!0,label:"\u64CD\u4F5C",field:i=>"123",sortable:!0,sort:(i,s)=>parseInt(i,10)-parseInt(s,10)}]);return(i,s)=>(fe(),Bt(Ft,null,[vl,l.length>0?(fe(),Le(dl,{key:0,grid:i.$q.screen.lt.md,title:"\u8CFC\u7269\u8ECA\u5546\u54C1","row-key":"name",filter:a.value,rows:l,columns:u,class:"q-ma-xl q-pa-xl"},null,8,["grid","filter","rows","columns"])):(fe(),Le(Ne,{key:1,class:"text-center"},{default:Tt(()=>[fl]),_:1})),Ot(Q,{class:"bg-amber-5 text-brown-9",label:"\u9001\u51FA\u7D50\u5E33"})],64))}};export{wl as default};