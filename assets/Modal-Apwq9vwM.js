import{n as t,r,k as p,j as c}from"./index-1Hj5w2Jg.js";let m=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((o,i)=>(i&=63,i<36?o+=i.toString(36):i<62?o+=(i-26).toString(36).toUpperCase():i>62?o+="-":o+="_",o),"");const h=t.ul`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: 50px;

  padding-bottom: 20px;
`,w=t.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 500px;
  border-radius: 14px;
  border: 2px solid #000;
  align-self: stretch;
  background-color: #333333aa;
  padding: 10px;

  transition: 300ms;

  &:hover {
    border-color: #d80;
  }
`,v=t.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  height: 260px;
  margin: 0 auto;
`,y=t.img`
  display: block;

  width: 100%;
  border-radius: 14px;

  object-fit: cover;
`,b=t.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border: none;
  outline: none;

  z-index: 1;

  &:hover svg {
    scale: 1.2;
  }
`,k=t.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${e=>e.isFavorite?"#d80":"#000"};
  fill: ${e=>e.isFavorite?"#d80":"#aaa"};

  width: 40px;
  height: 40px;

  transition: 300ms;
`,j=t.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`,T=t.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`,E=t.span`
  color: #f90;
  font-size: 20px;
  font-weight: 500;
`,M=t.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: #fff;
`,S=t.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: #fff;
`,f=t.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transform: scale(1);
  padding: 15px;

  z-index: 2;

  opacity: ${e=>e.showModal?"1":"0"};

  transition: 300ms;
`,x=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 600px;
  max-height: 100%;
  padding: 20px 0;

  border-radius: 24px;
  background: #222;

  overflow-y: auto;

  scale: ${e=>e.showModal?"1":"0"};

  transition: 300ms;
`,g=document.querySelector("#modal-root"),z=({onClose:e,showModal:o,children:i})=>{const[l,s]=r.useState(!1);r.useEffect(()=>{s(o)},[o]);const a=r.useMemo(()=>n=>{n.code==="Escape"&&(s(!1),setTimeout(()=>e(),300))},[e]),d=n=>{n.currentTarget===n.target&&(s(!1),setTimeout(()=>e(),300))};return r.useEffect(()=>(window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="visible"}),[a]),p.createPortal(c.jsx(f,{onClick:d,showModal:l,children:c.jsx(x,{showModal:l,children:i})}),g)};export{b as F,v as I,h as L,z as M,S,j as T,w as a,y as b,k as c,T as d,E as e,M as f,m as n};
