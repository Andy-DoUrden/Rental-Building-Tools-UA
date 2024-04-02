import styled from "@emotion/styled";

const OrderTitle = styled.h2`
  color: #000;
  font-size: 32px;
  text-align: center;
`;

const OrederWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const OrderText = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 500;
`;

const OrederTextSpan = styled.span`
  color: #00c;
  font-size: 24px;
  font-weight: 500;
`;

export { OrderTitle, OrederWrapper, OrderText, OrederTextSpan };
