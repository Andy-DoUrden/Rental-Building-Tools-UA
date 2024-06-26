import styled from "@emotion/styled";

const Backdrop = styled.div`
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

  opacity: ${(props) => {
    return props.showModal ? "1" : "0";
  }};

  transition: 300ms;
`;

const ModalContainer = styled.div`
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

  scale: ${(props) => {
    return props.showModal ? "1" : "0";
  }};

  transition: 300ms;
`;

export { Backdrop, ModalContainer };
