import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleIsFavorite from "../../Helpers/handleIsFavorite.js";
import { addFavorite, removeFavorite } from "../../Redux/cartSlice.js";
import icons from "../../images/icons.svg";
import { Button } from "../UI/Button.styed.js";
import Modal from "../UI/Modal/Modal.jsx";
import LearnMoreContent from "../CatalogComponents/CList/LearnMoreContent/LearnMoreContent.jsx";
import CartForm from "./CartForm/CartForm.jsx";

import {
  FavoriteBtn,
  FavoriteIcon,
  ImageWrapper,
  Image,
  List,
  ListItem,
  Title,
  TitleContainer,
  TitleSpan,
  MainTitle,
  SecondaryTitle,
} from "../UI/ComponentList.styled.js";

const Favorite = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(cart, item);
    isFavorite ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item));
  };

  return (
    <>
      <MainTitle>Оформлення замовлення</MainTitle>
      <SecondaryTitle>Ваші товари:</SecondaryTitle>
      <List>
        {cart.length !== 0 ? (
          cart.map((item) => (
            <ListItem key={nanoid()} id={item.id}>
              <ImageWrapper>
                <Image src={item.img} />
              </ImageWrapper>

              <FavoriteBtn type="button" onClick={() => handleFavoriteClick(item)}>
                <FavoriteIcon isFavorite={handleIsFavorite(cart, item)} width={32} height={32}>
                  <use href={icons + "#heart"} />
                </FavoriteIcon>
              </FavoriteBtn>

              <TitleContainer>
                <Title>{item.name}</Title>
                <Title>
                  Тип: <TitleSpan>{item.type}</TitleSpan>
                </Title>

                <Title>
                  Ціна/день: <TitleSpan>{item.price}грн</TitleSpan>
                </Title>
              </TitleContainer>

              <Button
                type="button"
                onClick={() => {
                  setModalData(item);
                  setShowModal(!showModal);
                }}
              >
                Детальніше
              </Button>
            </ListItem>
          ))
        ) : (
          <div>Корзина пуста</div>
        )}

        {showModal && (
          <Modal
            onClose={() => {
              setShowModal(false);
            }}
            showModal={showModal}
          >
            <LearnMoreContent
              data={modalData}
              onCrossClick={() => {
                setShowModal(false);
              }}
            />
          </Modal>
        )}
      </List>
      <SecondaryTitle>Форма для оформлення:</SecondaryTitle>
      <CartForm />
    </>
  );
};

export default Favorite;
