import styled from "@emotion/styled";

const FormElementContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 300px;
`;

const SelectBtn = styled.div`
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
`;

const SelectBtnText = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

const SelectBtnIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: none;

  transition: 300ms;

  transform: rotate(
    ${(props) => {
      return props.isBrandDropDownOpen ? "180deg" : "0";
    }}
  );
`;

const SelectContent = styled.div`
  position: absolute;
  top: 50px;
  left: 0;

  display: flex;

  width: 300px;
`;

const SelectOptions = styled.ul`
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

  opacity: ${(props) => {
    return props.isBrandDropDownOpen ? "1" : "0";
  }};

  pointer-events: ${(props) => {
    return props.isBrandDropDownOpen ? "all" : "none";
  }};
  z-index: 2;
`;

const SelectOptionsItem = styled.li`
  width: 100%;
  height: 30px;
  color: ${(props) => {
    return props.itemValue === props.isItemActive ? "#0af" : "#000";
  }};
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
`;

export { FormElementContainer, SelectBtn, SelectBtnText, SelectBtnIcon, SelectContent, SelectOptions, SelectOptionsItem };
