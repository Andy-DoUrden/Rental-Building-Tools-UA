import styled from "@emotion/styled";

const LearnMoreWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 600px;
  max-height: 80%;
  padding: 40px;

  border-radius: 24px;
  background: #222;

  overflow-y: auto;

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #dd8800aa;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #dd8800cc;
  }
`;

const ExitBtn = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: #fff;
  fill: #fff;

  width: 32px;
  height: 32px;

  transition: 300ms;
  cursor: pointer;

  &:hover {
    stroke: #d80;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 360px;
  height: 320px;
  margin: 0 auto;
`;

const Image = styled.img`
  display: block;

  width: auto;
  max-height: 320px;
  border-radius: 14px;

  object-fit: contain;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Title = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const TitleSpan = styled.span`
  color: #d80;
  font-size: 20px;
  font-weight: 700;
`;

const CharactTitle = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
`;

const CharactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-top: 20px;
  width: 100%;
`;

const CharactItem = styled.li`
  display: flex;
  gap: 5px;
`;

const CharactName = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

const CharactValue = styled.span`
  color: #d80;
  font-size: 20px;
  font-weight: 700;
`;

export {
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
};
