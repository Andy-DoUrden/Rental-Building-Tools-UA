import styled from "@emotion/styled";

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 29px;
  margin-top: 50px;
`;

const ListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 274px;
  height: 500px;
  border-radius: 14px;
  border: 2px solid #000;
  align-self: stretch;
  background-color: #333;
  padding: 10px;

  transition: 300ms;

  &:hover {
    border-color: #fff;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 250px;
  height: 260px;
  margin: 0 auto;
`;

const Image = styled.img`
  display: block;

  width: 100%;
  /* height: auto; */
  border-radius: 14px;

  object-fit: cover;
`;

const FavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--clr-brand-blue-lt);
  border: none;
  outline: none;

  z-index: 1;

  &:hover svg {
    scale: 1.2;
  }
`;

const FavoriteIcon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: ${(props) => {
    return props.isFavorite ? "#3470FF" : "#000";
  }};
  fill: ${(props) => {
    return props.isFavorite ? "#3470FF" : "#fff";
  }};

  width: 32px;
  height: 32px;

  transition: 300ms;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
`;

const TitleSpan = styled.span`
  /* color: #3470ff; */
  color: #0af;
  font-size: 20px;
  font-weight: 500;
`;
const MainTitle = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: #fff;
`;

const SecondaryTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.01em;
  color: #fff;
`;

export {
  List,
  ListItem,
  ImageWrapper,
  Image,
  FavoriteBtn,
  FavoriteIcon,
  TitleContainer,
  Title,
  TitleSpan,
  MainTitle,
  SecondaryTitle,
};
