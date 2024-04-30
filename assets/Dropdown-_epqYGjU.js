import{n as t,r,j as n,i as x}from"./index-1Hj5w2Jg.js";import{n as f}from"./Modal-Apwq9vwM.js";const u=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 300px;
`,h=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 300px;
  height: 48px;
  padding: 0 18px;

  border-radius: 14px;
  background: #fff;

  cursor: pointer;
  user-select: none;
`,m=t.span`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`,w=t.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: none;

  transition: 300ms;

  transform: rotate(
    ${e=>e.isBrandDropDownOpen?"180deg":"0"}
  );
`,g=t.div`
  position: absolute;
  top: 50px;
  left: 0;

  display: flex;

  width: 300px;
`,D=t.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  width: 100%;
  padding: 14px 8px 14px 18px;

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  transition: 300ms;

  opacity: ${e=>e.isBrandDropDownOpen?"1":"0"};

  pointer-events: ${e=>e.isBrandDropDownOpen?"all":"none"};
  z-index: 2;
`,j=t.li`
  width: 100%;
  height: 30px;
  color: ${e=>e.itemValue===e.isItemActive?"#0af":"#000"};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  border-radius: 14px;
  transition: 150ms;
  cursor: pointer;

  &:hover {
    color: #0af;
  }
`,y=({filters:e,typeValue:i,setTypeValue:d})=>{const[s,a]=r.useState(!1),p=r.useRef(null),c=r.useRef(null);return r.useEffect(()=>{const o=l=>{p.current&&!p.current.contains(l.target)&&!c.current.contains(l.target)&&a(!1)};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[]),n.jsxs(u,{children:[n.jsxs(h,{ref:c,id:"selectButton",onClick:()=>{a(!s)},children:[n.jsx(m,{children:i||"оберіть тип"}),n.jsx(w,{width:20,height:20,isBrandDropDownOpen:s,children:n.jsx("use",{href:x+"#arrowDown"})})]}),n.jsx(g,{ref:p,children:n.jsx(D,{isBrandDropDownOpen:s,children:e.map(o=>n.jsx(j,{onClick:()=>{d(o)},itemValue:o,isItemActive:i,children:o},f()))})})]})};export{y as D};
