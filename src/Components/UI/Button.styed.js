import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  margin-top: auto;
  padding: 12px 50px;
  background-color: #0b44cd;

  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;

  transition: background-color 300ms;

  &:hover {
    cursor: pointer;
    background-color: #0af;
  }
`;
