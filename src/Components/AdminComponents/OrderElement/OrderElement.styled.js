import styled from "@emotion/styled";

const OrderTitle = styled.h2`
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

const OrederWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrderText = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: 500;
`;

const OrederTextSpan = styled.span`
  color: #d80;
  font-size: 24px;
  font-weight: 500;
`;

export { OrderTitle, OrederWrapper, OrderText, OrederTextSpan };
