import styled from "@emotion/styled";

const LearnMoreWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 600px;
  max-height: 80%;
  padding: 40px;

  border-radius: 24px;
  background: #fff;

  overflow-y: auto;

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;

const ExitBtn = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;

  stroke: #121417;
  fill: none;

  width: 32px;
  height: 32px;

  transition: 300ms;
  cursor: pointer;

  &:hover {
    stroke: #3470ff;
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
  color: #000;
  font-size: 20px;
  font-weight: 500;
`;

const TitleSpan = styled.span`
  color: #0af;
  font-size: 20px;
  font-weight: 500;
`;

const CharactTitle = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 500;
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
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

const CharactValue = styled.span`
  color: #0af;
  font-size: 18px;
  font-weight: 500;
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
