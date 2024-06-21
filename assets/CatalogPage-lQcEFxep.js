import{r as p,u as F,a as S,b as y,c as D,j as e,L as k,i as L,d as M,e as I,n as s}from"./index-7fhQpMCX.js";import{L as B,a as O,I as z,b as P,F as T,c as V,T as $,d as h,e as m,n as E,M as G}from"./Modal-HYB9rFqT.js";import{h as g,B as j,L as q}from"./LearnMoreContent-8eQDIOHE.js";import{D as A}from"./Dropdown-tMtsbduU.js";const Q=()=>{const[n,r]=p.useState(!1),[x,a]=p.useState(null),i=F(t=>t.cart.cart),c=S(),[l]=y(),o=Object.fromEntries(l.entries()),[u,b]=p.useState(12),{data:d,error:f,isLoading:w}=D({params:{...o,limit:u}}),v=t=>{const C=g(i,t);c(C?M(t):I(t))};return e.jsxs(B,{children:[f&&e.jsx("div",{children:f}),w?e.jsx(k,{}):d.goods.map(t=>e.jsxs(O,{id:t.id,children:[e.jsx(z,{children:e.jsx(P,{src:t.img})}),e.jsx(T,{type:"button",onClick:()=>v(t),children:e.jsx(V,{isFavorite:g(i,t),width:40,height:40,children:e.jsx("use",{href:L+"#heart"})})}),e.jsxs($,{children:[e.jsx(h,{children:t.name}),e.jsxs(h,{children:["Тип: ",e.jsx(m,{children:t.type})]}),e.jsxs(h,{children:["Ціна/день: ",e.jsxs(m,{children:[t.price," грн"]})]})]}),e.jsx(j,{type:"button",onClick:()=>{a(t),r(!n)},children:"Детальніше"})]},E())),(d==null?void 0:d.totalCount)>u&&e.jsx(j,{type:"button",onClick:()=>b(t=>t+12),children:"Завантажити ще"}),n&&e.jsx(G,{onClose:()=>{r(!1)},showModal:n,children:e.jsx(q,{data:x,onCrossClick:()=>{r(!1)}})})]})},R=s.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  margin: 0 auto;
  width: 859px;
`;s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 300px;
  height: 74px;
`;s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  height: 48px;
  padding: 0 18px;
  margin-top: auto;

  border-radius: 14px;
  background: #fff;

  cursor: pointer;
  user-select: none;
`;s.span`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;s.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: none;

  transition: 300ms;

  transform: rotate(
    ${n=>n.isBrandDropDownOpen?"180deg":"0"}
  );
`;s.div`
  position: absolute;
  top: 78px;
  left: 0;

  display: flex;

  width: 300px;
`;s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
  height: 300px;
  padding: 14px 8px 14px 18px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  transition: 300ms;

  overflow-y: scroll;
  opacity: ${n=>n.isBrandDropDownOpen?"1":"0"};

  pointer-events: ${n=>n.isBrandDropDownOpen?"all":"none"};
  z-index: 2;
`;s.li`
  width: 100%;
  color: ${n=>n.itemValue===n.isItemActive?"#0af":"#000"};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  transition: 150ms;
  cursor: pointer;

  &:hover {
    color: #0af;
  }
`;s.div`
  position: relative;
  display: flex;

  width: 474px;
  height: 48px;
`;const W=s.input`
  display: flex;
  align-items: center;

  width: 300px;
  height: 48px;
  padding: 0 18px;

  border-radius: 14px;

  outline: none;
  border: none;

  color: #000;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`,H=s.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 136px;
  height: 48px;
  margin-left: 18px;
  border-radius: 12px;
  background-color: #d80;
  border: none;
  outline: none;

  color: #fff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  transition: 300ms;

  cursor: pointer;
  &:hover {
    background-color: #c50;
  }
`,J=["Бензоріз","Бетонозмішувач","Тачка","Генератор","Бензопила","Відбійний молоток","Будтехніка","Станція"],K=()=>{const[n,r]=p.useState(null),[,x]=y(),[a,i]=p.useState(null),c=l=>{l.preventDefault();const o={};a&&(o.type=a),n&&(o.query=n),x(Object.keys(o).length>0?o:{}),i(null)};return e.jsx(e.Fragment,{children:e.jsxs(R,{onSubmit:c,children:[e.jsx(A,{filters:J,typeValue:a,setTypeValue:i}),e.jsx(W,{placeholder:"Вкажіть назву",onChange:l=>r(l.target.value)}),e.jsx(H,{type:"submit",children:"Пошук"})]})})},N=()=>e.jsxs(e.Fragment,{children:[e.jsx(K,{}),e.jsx(Q,{})]});function _(){return e.jsx(N,{})}export{_ as default};
