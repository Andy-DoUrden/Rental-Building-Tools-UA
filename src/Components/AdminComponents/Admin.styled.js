import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const MainTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;
  margin: 20px;
  font-size: 64px;
  font-weight: 800;
  color: #fff;
`;

const ListOfOrders = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Order = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;

  background-color: #ffffff22;
  width: 100%;
  height: 80px;
  border-radius: 15px;
`;

const OrderButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  padding: 6px 20px;
  font-size: 18px;
  font-weight: 500;
  background-color: #0b44cd;

  color: #fff;
  border: none;

  transition: background-color 300ms;

  &:hover {
    cursor: pointer;
    background-color: #0af;
  }
`;

const OrderStatus = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  font-size: 1.1rem;
  text-transform: capitalize;
`;

const OrderUserDetails = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

const OrderUserDetailsSpan = styled.span`
  color: ${(props) => {
    switch (props.status) {
      case "pending":
        return "#ffff99";

      case "accepted":
        return "#33bbff";

      case "declined":
        return "#ff6666";

      case "completed":
        return "#00cc66";

      default:
        return "#fff";
    }
  }};
`;

export { Container, MainTitle, ListOfOrders, Order, OrderButton, OrderStatus, OrderUserDetails, OrderUserDetailsSpan };
