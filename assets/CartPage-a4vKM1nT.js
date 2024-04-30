import{n as m,r,f as N,u as S,j as e,a as L,i as B,d as E,e as I}from"./index-1Hj5w2Jg.js";import{f as T,S as v,L as Z,a as q,I as R,b as J,F as O,c as P,T as W,d as f,e as y,n as $,M as G}from"./Modal-Apwq9vwM.js";import{h as C,B as H,L as K}from"./LearnMoreContent-e87fkpkZ.js";const Q=m.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px 20px 40px 20px;
  border-radius: 15px;
  width: 450px;
`,i=m.input`
  padding-left: 10px;
  height: 32px;
  border: 2px solid #c50;
  background-color: inherit;
  outline: none;

  color: #fff;
  font-size: 20px;

  &::-webkit-calendar-picker-indicator {
    width: 32px;
    height: 32px;
    background-color: #c50;

    transition: 300ms;
    cursor: pointer;
  }

  &::-webkit-calendar-picker-indicator:hover {
    background-color: #d80;
  }

  &::-webkit-calendar-picker-indicator::-webkit-calendar-week-label {
    background-color: #c50;
  }
`,l=m.label`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: #fff;
`,U=m.button`
  margin-top: 15px;
  align-items: center;
  background-color: #d80;
  border: 2px solid #111;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  margin: 20px auto 0 auto;
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  justify-content: center;
  width: 140px;
  padding: 0 20px;
  position: relative;
  text-align: center;
  text-decoration: none;

  &:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 38px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(0, 0);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    transform: translate(8px, 8px);
  }

  &:active {
    background-color: #fa0;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }
  @media (min-width: 768px) {
    & {
      padding: 0 20px;
    }
  }
`,V=()=>{const[n,d]=r.useState(""),[c,u]=r.useState(""),[s,p]=r.useState(""),[h,t]=r.useState(""),[x,j]=r.useState(""),[g,w]=r.useState(""),[b,z]=r.useState(""),[A]=N(),k=S(a=>a.cart.cart),D=()=>{d(""),u(""),t(""),p(""),j("")},M=a=>{if(a.preventDefault(),n===""||c===""||s===""||h===""||x===""||k.length===0){alert("У вас є не заповнені поля або пустий кошик!");return}const F={firstName:n,lastName:c,email:s,number:h,adress:x,goods:k,rentStartDate:g,rentEndDate:b};console.log(F),A(F),D()},o=a=>{switch(a.target.name){case"firstName":d(a.target.value);break;case"lastName":u(a.target.value);break;case"email":p(a.target.value);break;case"number":t(a.target.value);break;case"adress":j(a.target.value);break;case"rentStartDate":w(a.target.value);break;case"rentEndDate":z(a.target.value);break}};return e.jsxs(Q,{action:"",onSubmit:M,children:[e.jsxs(l,{htmlFor:"",children:["Ім'я",e.jsx(i,{type:"text",name:"firstName",pattern:"[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,30}",title:"First name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:o,placeholder:"Микола"})]}),e.jsxs(l,{htmlFor:"",children:["Прізвище",e.jsx(i,{type:"text",name:"lastName",pattern:"[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,30}",title:"Last name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:c,onChange:o,placeholder:"Байда"})]}),e.jsxs(l,{htmlFor:"",children:["Пошта",e.jsx(i,{type:"email",value:s,name:"email",pattern:"[A-Za-zА-Яа-яЁёІіЇїЄєҐґ0-9.,\\s-]{2,100}",onChange:o,placeholder:"MykolaBayda@gmail.com"})]}),e.jsxs(l,{htmlFor:"",children:["Телефон",e.jsx(i,{type:"text",value:h,name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",onChange:o,placeholder:"+380123456789"})]}),e.jsxs(l,{htmlFor:"",children:["Адреса",e.jsx(i,{type:"text",value:x,name:"adress",pattern:"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",onChange:o,placeholder:"м. Київ, обл. Київська, вул. Львівська 1, 02000"})]}),e.jsxs(l,{htmlFor:"",children:["Дата бронювання",e.jsx(i,{type:"date",name:"rentStartDate",required:!0,value:g,onChange:o})]}),e.jsxs(l,{htmlFor:"",children:["Дата повернення",e.jsx(i,{type:"date",name:"rentEndDate",min:g,required:!0,value:b,onChange:o})]}),e.jsx(U,{type:"submit",children:"Запросити"})]})},X=()=>{const[n,d]=r.useState(!1),[c,u]=r.useState(null),s=S(t=>t.cart.cart),p=L(),h=t=>{const x=C(s,t);p(x?E(t):I(t))};return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:"Оформлення замовлення"}),e.jsx(v,{children:"Ваші товари:"}),e.jsxs(Z,{children:[s.length!==0?s.map(t=>e.jsxs(q,{id:t.id,children:[e.jsx(R,{children:e.jsx(J,{src:t.img})}),e.jsx(O,{type:"button",onClick:()=>h(t),children:e.jsx(P,{isFavorite:C(s,t),width:32,height:32,children:e.jsx("use",{href:B+"#heart"})})}),e.jsxs(W,{children:[e.jsx(f,{children:t.name}),e.jsxs(f,{children:["Тип: ",e.jsx(y,{children:t.type})]}),e.jsxs(f,{children:["Ціна/день: ",e.jsxs(y,{children:[t.price,"грн"]})]})]}),e.jsx(H,{type:"button",onClick:()=>{u(t),d(!n)},children:"Детальніше"})]},$())):e.jsx("div",{children:"Корзина пуста"}),n&&e.jsx(G,{onClose:()=>{d(!1)},showModal:n,children:e.jsx(K,{data:c,onCrossClick:()=>{d(!1)}})})]}),e.jsx(v,{children:"Форма для оформлення:"}),e.jsx(V,{})]})};function te(){return e.jsx(X,{})}export{te as default};
