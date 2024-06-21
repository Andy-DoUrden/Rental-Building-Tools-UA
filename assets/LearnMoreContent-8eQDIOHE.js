import{n as o,j as t,i as d}from"./index-7fhQpMCX.js";import{n as l}from"./Modal-HYB9rFqT.js";const y=(e,i)=>e.some(r=>r.id===i.id),C=o.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  margin-top: auto;
  padding: 12px 50px;
  background-color: #d80;

  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  text-shadow: 0px 0px 10px #000;

  transition: background-color 300ms;

  &:hover {
    cursor: pointer;
    background-color: #d40;
  }
`,p=o.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 600px;
  max-height: 80%;
  padding: 40px;

  border-radius: 24px;
  background: #222;

  overflow-y: auto;

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #dd8800aa;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #dd8800cc;
  }
`,x=o.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: #fff;
  fill: #fff;

  width: 32px;
  height: 32px;

  transition: 300ms;
  cursor: pointer;

  &:hover {
    stroke: #d80;
  }
`,h=o.div`
  display: flex;
  flex-direction: column;

  max-width: 360px;
  height: 320px;
  margin: 0 auto;
`,f=o.img`
  display: block;

  width: auto;
  max-height: 320px;
  border-radius: 14px;

  object-fit: contain;
`,g=o.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`,n=o.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`,a=o.span`
  color: #d80;
  font-size: 20px;
  font-weight: 700;
`,u=o.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
`,m=o.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 20px;
  width: 100%;
`,b=o.li`
  display: flex;
  gap: 5px;
`,j=o.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`,w=o.span`
  color: #d80;
  font-size: 20px;
  font-weight: 700;
`,z=e=>{const i=e.data,s=Object.entries(i.characteristics);return t.jsxs(p,{children:[t.jsx(x,{onClick:e.onCrossClick,children:t.jsx("use",{href:d+"#cross"})}),t.jsx(h,{children:t.jsx(f,{src:i.img})}),t.jsxs(g,{children:[t.jsx(n,{children:i.name}),t.jsxs(n,{children:["Тип: ",t.jsx(a,{children:i.type})]}),t.jsxs(n,{children:["Ціна/день: ",t.jsxs(a,{children:[i.price," грн"]})]})]}),t.jsxs(m,{children:[t.jsx(u,{children:"Характеристики:"}),s.map(([r,c])=>t.jsxs(b,{children:[t.jsxs(j,{children:[r,":"]}),t.jsx(w,{children:c})]},l()))]})]})};export{C as B,z as L,y as h};
