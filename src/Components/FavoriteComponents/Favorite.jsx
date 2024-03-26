import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleIsFavorite from "../../Helpers/handleIsFavorite";
import { addFavorite, removeFavorite } from "../../Redux/favoritesSlice";
import icons from "../../images/icons.svg";
import { Button } from "../UI/Button.styed";
import Modal from "../UI/Modal/Modal.jsx";
import LearnMoreContent from "../CatalogComponents/CList/LearnMoreContent/LearnMoreContent.jsx";

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
} from "../UI/ComponentList.styled.js";

const Favorite = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(favorites, item);
    isFavorite ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item));
  };

  return (
    <List>
      {favorites.length !== 0 ? (
        favorites.map((item) => (
          <ListItem key={nanoid()} id={item.id}>
            <ImageWrapper>
              <Image src={item.img} />
            </ImageWrapper>

            <FavoriteBtn type="button" onClick={() => handleFavoriteClick(item)}>
              <FavoriteIcon isFavorite={handleIsFavorite(favorites, item)} width={32} height={32}>
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
        <div>No Favorites Found</div>
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
  );
};

export default Favorite;
