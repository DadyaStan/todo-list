import{_ as F,o as i,c as _,r as S,a as V,d as C,b as f,w as j,v as O,e as c,f as d,g as p,t as b,n as D,h,i as H,j as z,k as g,u as $,U as I,F as P,l as J}from"./index-D8AA7AMF.js";import{U as Y,M as q,a as G}from"./UnorderedListOutlined-Bsp83RS0.js";const x="https://easydev.club/api/v1",Q=async()=>{try{const a=await fetch(`${x}/todos`),o=await a.json();if(!a.ok)throw new Error("Ошибка при загрузки задач "+Error);return o}catch(a){throw console.error(a),new Error("Ошибка при загрузки задач "+Error)}},X=async a=>{try{const o=await fetch(`${x}/todos?filter=${a}`),t=await o.json();if(!o.ok)throw new Error("Ошибка при загрузки задач "+Error);return t}catch(o){throw console.error(o),new Error("Ошибка при загрузки задач "+Error)}},ee=async a=>{try{if(!(await fetch(`${x}/todos`,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({isDone:!1,title:a})})).ok)throw new Error("Ошибка при создании задачи "+Error)}catch(o){throw console.error(o),new Error("Ошибка при создании задачи "+Error)}},te=async(a,o)=>{try{const t=await fetch(`${x}/todos/${a}`,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(o)});if(!t.ok)throw new Error("Ошибка при изменении задачи "+Error);return await t.json()}catch(t){throw console.error(t),new Error("Ошибка при изменении задачи "+Error)}},oe=async a=>{try{if(!(await fetch(`${x}/todos/${a}`,{method:"DELETE",headers:{"Content-type":"application/json"}})).ok)throw new Error("Ошибка при удалении "+Error)}catch(o){throw console.error(o),new Error("Ошибка при удалении "+Error)}},ae={},ne={class:"med-btn"};function se(a,o){return i(),_("button",ne,[S(a.$slots,"default",{},()=>[o[0]||(o[0]=V("Do"))])])}const le=F(ae,[["render",se]]),re={class:"create-task-form"},ie=C({__name:"CreateTaskForm",emits:["createNewTodo"],setup(a,{emit:o}){const t=f(""),n=o,u=async()=>{t.value&&(await n("createNewTodo",t.value),t.value="")};return(l,r)=>(i(),_("div",re,[j(c("input",{"onUpdate:modelValue":r[0]||(r[0]=v=>t.value=v),class:"create-task-form__input",type:"text",placeholder:"Task To Be Done..."},null,512),[[O,t.value]]),d(le,{onClick:u},{default:p(()=>r[1]||(r[1]=[V(" Add ")])),_:1})]))}}),de={class:"nav"},ce=C({__name:"Nav",props:{todoCount:{}},emits:["filterChanged"],setup(a,{emit:o}){const t=o,n=a,u=f("all"),l=r=>{r!==u.value&&(u.value=r,t("filterChanged",r))};return(r,v)=>(i(),_("nav",de,[c("div",{class:D({nav__el:!0,nav__el_active:u.value==="all"}),onClick:v[0]||(v[0]=w=>l("all"))}," Все ("+b(n.todoCount.all?n.todoCount.all:"-")+") ",3),c("div",{class:D({nav__el:!0,nav__el_active:u.value==="inWork"}),onClick:v[1]||(v[1]=w=>l("inWork"))}," В работе ("+b(n.todoCount.inWork?n.todoCount.inWork:"-")+") ",3),c("div",{class:D({nav__el:!0,nav__el_active:u.value==="completed"}),onClick:v[2]||(v[2]=w=>l("completed"))}," Сделано ("+b(n.todoCount.completed?n.todoCount.completed:"-")+") ",3)]))}}),ue="data:image/svg+xml,%3csvg%20fill='%23ffffff'%20width='14px'%20height='14px'%20viewBox='0%200%2032%2032'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3c/defs%3e%3cg%20id='check'%3e%3cpath%20class='cls-1'%20d='M12.16,28a3,3,0,0,1-2.35-1.13L3.22,18.62a1,1,0,0,1,1.56-1.24l6.59,8.24A1,1,0,0,0,13,25.56L27.17,4.44a1,1,0,1,1,1.66,1.12L14.67,26.67A3,3,0,0,1,12.29,28Z'%20/%3e%3c/g%3e%3c/svg%3e",ve="data:image/svg+xml,%3csvg%20fill='%23ffffff'%20width='14px'%20height='14px'%20viewBox='-0.5%20-0.5%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%20preserveAspectRatio='xMinYMin'%20class='jam%20jam-write-f'%3e%3cpath%20d='M21.289.98l.59.59c.813.814.69%202.257-.277%203.223L9.435%2016.96l-3.942%201.442c-.495.182-.977-.054-1.075-.525a.928.928%200%200%201%20.045-.51l1.47-3.976L18.066%201.257c.967-.966%202.41-1.09%203.223-.276zM8.904%202.19a1%201%200%201%201%200%202h-4a2%202%200%200%200-2%202v12a2%202%200%200%200%202%202h12a2%202%200%200%200%202-2v-4a1%201%200%200%201%202%200v4a4%204%200%200%201-4%204h-12a4%204%200%200%201-4-4v-12a4%204%200%200%201%204-4h4z'%20/%3e%3c/svg%3e",pe="data:image/svg+xml,%3csvg%20fill='%23ffffff'%20width='14px'%20height='14px'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z'%20/%3e%3c/svg%3e",_e="data:image/svg+xml,%3csvg%20width='14px'%20height='14px'%20viewBox='0%200%2015%2015'%20fill='%23fff'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.85355%202.14645C5.04882%202.34171%205.04882%202.65829%204.85355%202.85355L3.70711%204H9C11.4853%204%2013.5%206.01472%2013.5%208.5C13.5%2010.9853%2011.4853%2013%209%2013H5C4.72386%2013%204.5%2012.7761%204.5%2012.5C4.5%2012.2239%204.72386%2012%205%2012H9C10.933%2012%2012.5%2010.433%2012.5%208.5C12.5%206.567%2010.933%205%209%205H3.70711L4.85355%206.14645C5.04882%206.34171%205.04882%206.65829%204.85355%206.85355C4.65829%207.04882%204.34171%207.04882%204.14645%206.85355L2.14645%204.85355C1.95118%204.65829%201.95118%204.34171%202.14645%204.14645L4.14645%202.14645C4.34171%201.95118%204.65829%201.95118%204.85355%202.14645Z'%20fill='%23fff'%20/%3e%3c/svg%3e",fe={class:"checkbox-box"},me=["checked"],ge=C({__name:"Checkbox",props:{modelValue:{type:Boolean}},setup(a){const o=a;return(t,n)=>(i(),_("div",fe,[c("input",{type:"checkbox",checked:o.modelValue},null,8,me)]))}}),he={},we={class:"icon-btn"};function ke(a,o){return i(),_("button",we,[S(a.$slots,"default",{},()=>[o[0]||(o[0]=V(" UI "))])])}const E=F(he,[["render",ke]]),ye={class:"task-card__status-box"},Ce={key:1,class:"task-card__content"},xe={class:"task-card__btn-box"},Te=C({__name:"TaskCard",props:{id:{},title:{},created:{},isDone:{type:Boolean}},emits:["deleteTodo","changeTodoStatus","changeTodoTitle"],setup(a,{emit:o}){const t=a,n=o,u=f(t.isDone),l=f(!1),r=f(t.title),v=()=>{n("changeTodoStatus",t.id,{isDone:!t.isDone})},w=()=>{n("deleteTodo",t.id)},L=()=>{n("changeTodoTitle",t.id,{title:r.value}),l.value=!1},T=()=>{l.value=!1,r.value=t.title},B=s=>s?"task-card complete-task":"task-card";return(s,e)=>(i(),_("div",{class:D(B(t.isDone))},[c("div",ye,[d(ge,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=m=>u.value=m),onChange:v},null,8,["modelValue"]),l.value?j((i(),_("input",{key:0,"onUpdate:modelValue":e[1]||(e[1]=m=>r.value=m),class:"task-card__input task-card__content",type:"text"},null,512)),[[O,r.value]]):(i(),_("p",Ce,b(t.title),1))]),c("div",xe,[l.value?(i(),h(E,{key:0,onClick:L,style:{"background-color":"#3ae43a"}},{default:p(()=>e[3]||(e[3]=[c("img",{src:ue,alt:"Accept"},null,-1)])),_:1})):l.value?H("",!0):(i(),h(E,{key:1,onClick:e[2]||(e[2]=m=>l.value=!0),style:{"background-color":"#5391FC"}},{default:p(()=>e[4]||(e[4]=[c("img",{src:ve,alt:"Rewrite"},null,-1)])),_:1})),l.value?l.value?(i(),h(E,{key:3,onClick:T,style:{"background-color":"#5391FC"}},{default:p(()=>e[6]||(e[6]=[c("img",{src:_e,alt:"Back"},null,-1)])),_:1})):H("",!0):(i(),h(E,{key:2,onClick:w,style:{"background-color":"#FC685E"}},{default:p(()=>e[5]||(e[5]=[c("img",{src:pe,alt:"Delete"},null,-1)])),_:1}))])],2))}}),$e={class:"wrapper"},Ee={class:"tasks-list"},be={key:0,class:"tasks-list__loading"},De={key:1,class:"content"},Le={class:"tasks-list"},Me=C({__name:"TodoView",setup(a){const o=f(["1"]),t=f(!1),n=f(!1),u=f(null),l=f(null),r=f("all");z(async()=>{try{n.value=!0;const s=await Q();n.value=!1,u.value=s==null?void 0:s.data,l.value=s==null?void 0:s.info}catch{throw n.value=!1,new Error("Ошибка запроса с сервера "+Error)}});const v=async s=>{const e=await X(s);u.value=e==null?void 0:e.data,l.value=e==null?void 0:e.info},w=async s=>{n.value=!0,u.value=null,l.value=null,r.value=s,await v(s),n.value=!1},L=async s=>{await oe(s),await v(r.value)},T=async(s,e)=>{await te(s,e),await v(r.value)},B=async s=>{await ee(s),await v(r.value)};return(s,e)=>{const m=g("a-menu-item"),M=g("router-link"),W=g("a-menu"),K=g("a-layout-sider"),R=g("a-layout-header"),Z=g("a-layout-content"),N=g("a-layout");return i(),_("div",$e,[d(N,null,{default:p(()=>[d(K,{collapsed:t.value,"onUpdate:collapsed":e[1]||(e[1]=k=>t.value=k),trigger:null,collapsible:""},{default:p(()=>[e[6]||(e[6]=c("div",{class:"logo"},null,-1)),d(W,{selectedKeys:o.value,"onUpdate:selectedKeys":e[0]||(e[0]=k=>o.value=k),theme:"dark",mode:"inline"},{default:p(()=>[d(M,{to:"/todo-list/todo"},{default:p(()=>[d(m,{key:"1"},{default:p(()=>[d($(Y)),e[4]||(e[4]=c("span",null,"Todo",-1))]),_:1})]),_:1}),d(M,{to:"/todo-list/profile"},{default:p(()=>[d(m,{key:"2"},{default:p(()=>[d($(I)),e[5]||(e[5]=c("span",null,"Profile",-1))]),_:1})]),_:1})]),_:1},8,["selectedKeys"])]),_:1},8,["collapsed"]),d(N,null,{default:p(()=>[d(R,{style:{background:"#fff",padding:"0"}},{default:p(()=>[t.value?(i(),h($(q),{key:0,class:"trigger",onClick:e[2]||(e[2]=()=>t.value=!t.value)})):(i(),h($(G),{key:1,class:"trigger",onClick:e[3]||(e[3]=()=>t.value=!t.value)}))]),_:1}),d(Z,{style:{margin:"24px 16px",padding:"24px",minHeight:"100vh"}},{default:p(()=>{var k,U,A;return[c("div",Ee,[d(ie,{onCreateNewTodo:B}),d(ce,{todoCount:{all:((k=l.value)==null?void 0:k.all)||0,completed:((U=l.value)==null?void 0:U.completed)||0,inWork:((A=l.value)==null?void 0:A.inWork)||0},onFilterChanged:w},null,8,["todoCount"]),n.value?(i(),_("div",be," Loading... ")):(i(),_("div",De,[c("div",Le,[(i(!0),_(P,null,J(u.value,y=>(i(),h(Te,{key:y.id,id:y.id,title:y.title,created:y.created,isDone:y.isDone,onDeleteTodo:L,onChangeTodoStatus:T,onChangeTodoTitle:T},null,8,["id","title","created","isDone"]))),128))])]))])]}),_:1})]),_:1})]),_:1})])}}});export{Me as default};