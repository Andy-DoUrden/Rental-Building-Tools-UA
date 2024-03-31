import { useState } from "react";
import { nanoid } from "nanoid";
import Dropdown from "../../UI/dropDown/dropDown.jsx";
import { filters } from "../Filters/filtersValues.js";
import Modal from "../../UI/Modal/Modal.jsx";
import { Container, Order, OrderButton, OrderUserDetails } from "../Admin.styled.js";
import { List, ImageWrapper, Image, ListItem, Title, TitleContainer, TitleSpan } from "../../UI/ComponentList.styled.js";
import { useUpdateOrderMutation } from "../../../Redux/API/RTK.js";

const OrderElement = (data) => {
  const { item } = data;
  const [typeValue, setTypeValue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [, setModalData] = useState(null);
  const [updateOrder] = useUpdateOrderMutation();

  return (
    <Order key={nanoid()} id={item.id}>
      <OrderUserDetails>Інструменти: {item.goods.length}</OrderUserDetails>
      <OrderButton
        type="button"
        onClick={() => {
          setModalData(item);
          setShowModal(!showModal);
        }}
      >
        Детальніше
      </OrderButton>
      <OrderUserDetails>
        Замовник: {item.firstName} {item.lastName}
      </OrderUserDetails>
      <OrderUserDetails>Статус: {item.status}</OrderUserDetails>
      <Container>
        <Dropdown filters={filters} typeValue={typeValue} setTypeValue={setTypeValue} />

        <OrderButton type="button" onClick={() => updateOrder({ id: item._id, body: { status: `${typeValue}` } })}>
          Змінити статус
        </OrderButton>
      </Container>

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
          showModal={showModal}
        >
          <List>
            {item.goods.map((item) => (
              <ListItem key={nanoid()} id={item[0].id}>
                <ImageWrapper>
                  <Image src={item[0].img} />
                </ImageWrapper>

                <TitleContainer>
                  <Title>{item[0].name}</Title>
                  <Title>
                    Тип: <TitleSpan>{item[0].type}</TitleSpan>
                  </Title>

                  <Title>
                    Ціна/день: <TitleSpan>{item[0].price} грн</TitleSpan>
                  </Title>
                </TitleContainer>
              </ListItem>
            ))}
          </List>
        </Modal>
      )}
    </Order>
  );
};

export default OrderElement;
