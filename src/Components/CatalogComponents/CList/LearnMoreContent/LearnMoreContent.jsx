import { nanoid } from "nanoid";
import icons from "../../../../images/icons.svg";
import {
  LearnMoreWrapper,
  ExitBtn,
  ImageWrapper,
  Image,
  TitleContainer,
  Title,
  TitleSpan,
  CharactTitle,
  CharactList,
  CharactItem,
  CharactName,
  CharactValue,
} from "./LearnMoreContent.styled";

const LearnMoreContent = (data) => {
  const item = data.data;

  const characteristics = Object.entries(item.characteristics);

  return (
    <LearnMoreWrapper>
      <ExitBtn onClick={data.onCrossClick}>
        <use href={icons + "#cross"} />
      </ExitBtn>

      <ImageWrapper>
        <Image src={item.img} />
      </ImageWrapper>

      <TitleContainer>
        <Title>{item.name}</Title>
        <Title>
          Тип: <TitleSpan>{item.type}</TitleSpan>
        </Title>

        <Title>
          Ціна/день: <TitleSpan>{item.price} грн</TitleSpan>
        </Title>
      </TitleContainer>

      <CharactList>
        <CharactTitle>Характеристики:</CharactTitle>
        {characteristics.map(([key, value]) => (
          <CharactItem key={nanoid()}>
            <CharactName>{key}:</CharactName>
            <CharactValue>{value}</CharactValue>
          </CharactItem>
        ))}
      </CharactList>
    </LearnMoreWrapper>
  );
};

export default LearnMoreContent;
