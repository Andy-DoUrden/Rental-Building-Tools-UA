import { useState } from "react";
import { nanoid } from "nanoid";
import Dropdown from "../../UI/Dropdown/Dropdown.jsx";
import { filters } from "../Filters/filtersValues.js";
import Modal from "../../UI/Modal/Modal.jsx";
import { Container, Order, OrderButton, OrderUserDetails, OrderUserDetailsSpan } from "../Admin.styled.js";
import { List, ImageWrapper, Image, ListItem, Title, TitleContainer, TitleSpan } from "../../UI/ComponentList.styled.js";
import { useUpdateOrderMutation } from "../../../Redux/API/RTK.js";

import { OrderTitle, OrederWrapper, OrderText, OrederTextSpan } from "./OrderElement.styled.js";

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
      <OrderUserDetails>
        Статус: <OrderUserDetailsSpan status={item.status}>{item.status}</OrderUserDetailsSpan>
      </OrderUserDetails>
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
          <OrderTitle>Деталі замовника:</OrderTitle>
          <OrederWrapper>
            <OrderText>
              Замовник:{" "}
              <OrederTextSpan>
                {item.firstName} {item.lastName}
              </OrederTextSpan>
            </OrderText>

            <OrderText>
              Статус: <OrederTextSpan>{item.status}</OrederTextSpan>
            </OrderText>

            <OrderText>
              Адреса: <OrederTextSpan>{item.adress}</OrederTextSpan>
            </OrderText>

            <OrderText>
              Телефон: <OrederTextSpan>{item.number}</OrederTextSpan>
            </OrderText>

            <OrderText>
              Пошта: <OrederTextSpan>{item.email}</OrederTextSpan>
            </OrderText>

            <OrderText>
              Дата старту оренди: <OrederTextSpan>{item.rentStartDate}</OrederTextSpan>
            </OrderText>

            <OrderText>
              Дата кінця оренди: <OrederTextSpan>{item.rentEndDate}</OrederTextSpan>
            </OrderText>
          </OrederWrapper>
          <List>
            {item.goods.map((details) => (
              <ListItem key={nanoid()} id={details[0].id}>
                <ImageWrapper>
                  <Image src={details[0].img} />
                </ImageWrapper>

                <TitleContainer>
                  <Title>{details[0].name}</Title>
                  <Title>
                    Тип: <TitleSpan>{details[0].type}</TitleSpan>
                  </Title>

                  <Title>
                    Ціна/день: <TitleSpan>{details[0].price} грн</TitleSpan>
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
