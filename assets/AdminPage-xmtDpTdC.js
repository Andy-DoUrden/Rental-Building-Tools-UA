import{n as t,r as c,b as w,j as e,g as v,h as D,L as z}from"./index-1Hj5w2Jg.js";import{D as O}from"./Dropdown-_epqYGjU.js";import{M as k,L as M,a as T,I as C,b as V,T as L,d as u,e as m,n as j}from"./Modal-Apwq9vwM.js";const F=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`,I=t.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;
  margin: 20px;
  font-size: 64px;
  font-weight: 800;
  color: #fff;
`,$=t.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,B=t.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  background-color: #ffffff22;
  width: 100%;
  height: 80px;
  border-radius: 15px;
`,y=t.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  padding: 6px 20px;
  font-size: 18px;
  font-weight: 700;
  background-color: #d80;

  color: #fff;
  border: none;

  transition: background-color 300ms;

  &:hover {
    cursor: pointer;
    background-color: #c50;
  }
`;t.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  font-size: 1.1rem;
  text-transform: capitalize;
`;const g=t.p`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`,E=t.span`
  color: ${r=>{switch(r.status){case"pending":return"#ffff99";case"accepted":return"#33bbff";case"declined":return"#ff6666";case"completed":return"#00cc66";default:return"#fff"}}};
`,P=t.form`
  display: flex;
  align-items: flex-end;
  gap: 18px;

  margin: 0 auto;
  width: 859px;
  height: 74px;
`;t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 300px;
  height: 74px;
`;t.div`
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
`;t.span`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;t.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: none;

  transition: 300ms;

  transform: rotate(
    ${r=>r.isBrandDropDownOpen?"180deg":"0"}
  );
`;t.div`
  position: absolute;
  top: 78px;
  left: 0;

  display: flex;

  width: 300px;
`;t.ul`
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
  opacity: ${r=>r.isBrandDropDownOpen?"1":"0"};

  pointer-events: ${r=>r.isBrandDropDownOpen?"all":"none"};
  z-index: 2;
`;t.li`
  width: 100%;
  color: ${r=>r.itemValue===r.isItemActive?"#0af":"#000"};
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
`;t.div`
  position: relative;
  display: flex;

  width: 474px;
  height: 48px;
`;const b=t.input`
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
`,N=t.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 140px;
  height: 48px;
  margin-left: 18px;
  border-radius: 12px;
  background-color: #d80;
  border: none;
  outline: none;

  color: #fff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  transition: 300ms;

  cursor: pointer;
  &:hover {
    background-color: #c50;
  }
`,S=["pending","accepted","declined","completed"],A=()=>{const[r,n]=c.useState(null),[o,p]=c.useState(null),[i,a]=c.useState(null),[,f]=w(),h=s=>{s.preventDefault();const x={};r&&(x.status=r),o&&(x.query=o),i&&(x.date=i),f(Object.keys(x).length>0?x:{}),n(null)};return e.jsx(e.Fragment,{children:e.jsxs(P,{onSubmit:h,children:[e.jsx(O,{filters:S,typeValue:r,setTypeValue:n}),e.jsx(b,{placeholder:"Вкажіть назву",onChange:s=>p(s.target.value)}),e.jsx(b,{type:"date",placeholder:"Вкажіть дату",onChange:s=>a(s.target.value)}),e.jsx(N,{type:"submit",children:"Пошук"})]})})},U=t.h2`
  color: #fff;
  font-size: 32px;
  text-align: center;
`,W=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,l=t.p`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`,d=t.span`
  color: #d80;
  font-size: 24px;
  font-weight: 500;
`,_=r=>{const{item:n}=r,[o,p]=c.useState(null),[i,a]=c.useState(!1),[,f]=c.useState(null),[h]=v();return e.jsxs(B,{id:n.id,children:[e.jsxs(g,{children:["Інструменти: ",n.goods.length]}),e.jsx(y,{type:"button",onClick:()=>{f(n),a(!i)},children:"Детальніше"}),e.jsxs(g,{children:["Замовник: ",n.firstName," ",n.lastName]}),e.jsxs(g,{children:["Статус: ",e.jsx(E,{status:n.status,children:n.status})]}),e.jsxs(F,{children:[e.jsx(O,{filters:S,typeValue:o,setTypeValue:p}),e.jsx(y,{type:"button",onClick:()=>h({id:n._id,body:{status:`${o}`}}),children:"Змінити статус"})]}),i&&e.jsxs(k,{onClose:()=>{a(!1)},showModal:i,children:[e.jsx(U,{children:"Деталі замовника:"}),e.jsxs(W,{children:[e.jsxs(l,{children:["Замовник:"," ",e.jsxs(d,{children:[n.firstName," ",n.lastName]})]}),e.jsxs(l,{children:["Статус: ",e.jsx(d,{children:n.status})]}),e.jsxs(l,{children:["Адреса: ",e.jsx(d,{children:n.adress})]}),e.jsxs(l,{children:["Телефон: ",e.jsx(d,{children:n.number})]}),e.jsxs(l,{children:["Пошта: ",e.jsx(d,{children:n.email})]}),e.jsxs(l,{children:["Дата старту оренди: ",e.jsx(d,{children:n.rentStartDate})]}),e.jsxs(l,{children:["Дата кінця оренди: ",e.jsx(d,{children:n.rentEndDate})]})]}),e.jsx(M,{children:n.goods.map(s=>e.jsxs(T,{id:s[0].id,children:[e.jsx(C,{children:e.jsx(V,{src:s[0].img})}),e.jsxs(L,{children:[e.jsx(u,{children:s[0].name}),e.jsxs(u,{children:["Тип: ",e.jsx(m,{children:s[0].type})]}),e.jsxs(u,{children:["Ціна/день: ",e.jsxs(m,{children:[s[0].price," грн"]})]})]})]},j()))})]})]},j())},q=()=>{const[r]=w(),n=Object.fromEntries(r.entries()),{data:o,isLoading:p,error:i}=D({params:{...n}});return e.jsx(e.Fragment,{children:e.jsxs($,{children:[e.jsx(A,{}),e.jsx(I,{children:"Історія замовлень"}),p?e.jsx(z,{}):o.orders.map(a=>e.jsx(_,{item:a},a._id)),i&&e.jsx("h1",{children:"Something went wrong"})]})})};function H(){return e.jsx(q,{})}export{H as default};
