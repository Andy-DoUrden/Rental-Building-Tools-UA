import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import handleIsFavorite from "../../../Helpers/handleIsFavorite.js";
import { addFavorite, removeFavorite } from "../../../Redux/cartSlice.js";
import icons from "../../../images/icons.svg";
import { Button } from "../../UI/Button.styed.js";
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
} from "../../UI/ComponentList.styled.js";
import Loader from "../../UI/Loader.jsx";
import Modal from "../../UI/Modal/Modal.jsx";
import LearnMoreContent from "./LearnMoreContent/LearnMoreContent.jsx";
import { useGetGoodsQuery } from "../../../Redux/API/RTK.js";
import { useSearchParams } from "react-router-dom";

const CList = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());

  const [limit, setLimit] = useState(12);
  const { data, error, isLoading } = useGetGoodsQuery({
    params: {
      ...searchParamsObject,
      limit,
    },
  });

  const handleFavoriteClick = (item) => {
    const isFavorite = handleIsFavorite(cart, item);
    isFavorite ? dispatch(removeFavorite(item)) : dispatch(addFavorite(item));
  };

  return (
    <List>
      {error && <div>{error}</div>}
      {isLoading ? (
        <Loader />
      ) : (
        data.goods.map((item) => (
          <ListItem key={nanoid()} id={item.id}>
            <ImageWrapper>
              <Image src={item.img} />
            </ImageWrapper>

            <FavoriteBtn type="button" onClick={() => handleFavoriteClick(item)}>
              <FavoriteIcon isFavorite={handleIsFavorite(cart, item)} width={40} height={40}>
                <use href={icons + "#heart"} />
              </FavoriteIcon>
            </FavoriteBtn>

            <TitleContainer>
              <Title>{item.name}</Title>
              <Title>
                Тип: <TitleSpan>{item.type}</TitleSpan>
              </Title>

              <Title>
                Ціна/день: <TitleSpan>{item.price} грн</TitleSpan>
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
      )}
      {data?.totalCount > limit && (
        <Button type="button" onClick={() => setLimit((prevLimit) => prevLimit + 12)}>
          Завантажити ще
        </Button>
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

export default CList;
