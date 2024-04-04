import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px 20px 40px 20px;
  border-radius: 15px;
  width: 450px;
`;

const FormInput = styled.input`
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
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: #fff;
`;

const FormButton = styled.button`
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
`;

export { Form, FormButton, FormInput, FormLabel };
