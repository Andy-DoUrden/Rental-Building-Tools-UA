import {
  MainBackground,
  MainWrapper,
  MainTitle,
  MainText,
  InfoList,
  InfoItem,
  InfoTitle,
  InfoText,
  InfoSublist,
  InfoSubItem,
  InfoSubItemTitle,
  InfoSubItemText,
} from "./Home.styled";

const Home = () => {
  return (
    <MainWrapper>
      <MainBackground />
      <MainTitle>
        <b>Rental building tools UA [RBTUA]</b>
      </MainTitle>
      <MainText>Запрокатуйте успіх з нами: ваш проект, наші рішення!</MainText>

      <InfoList>
        <InfoItem>
          <InfoTitle>Ласкаво просимо!</InfoTitle>
          <InfoText>{"Ласкаво просимо до RBTUA, вашого надійного партнера у сфері оренди електроприладів!."}</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Що ми пропонуємо</InfoTitle>
          <InfoText>
            {
              "Ми розуміємо, що успішні проекти потребують найкращого обладнання. Тому ми пропонуємо широкий вибір електроприладів від провідних виробників, які допоможуть вам забезпечити ефективну роботу."
            }
          </InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Наша мета</InfoTitle>
          <InfoText>
            {
              "Наша мета - забезпечити вас найвищою якістю обладнання та бездоганним сервісом. Ми ретельно перевіряємо кожен пристрій перед його відправленням, щоб ви могли бути впевнені в його надійності та функціональності."
            }
          </InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Наші можливості</InfoTitle>
          <InfoText>
            {
              "Незалежно від того, чи вам потрібен шуруповерт для ремонту, електрогенератор для енергії при відключеннях, чи будь-який інший електроприлад, у нас є все необхідне для вашого успіху."
            }
          </InfoText>
        </InfoItem>

        <InfoItem>
          <InfoTitle>Чому ми?</InfoTitle>
          <InfoSublist>
            <InfoSubItem>
              <InfoSubItemTitle>Наша якість говорить сама за себе:</InfoSubItemTitle>
              <InfoSubItemText>
                Ми дбаємо про кожен пристрій, щоб ви могли мати впевненість у його бездоганній роботі.
              </InfoSubItemText>
            </InfoSubItem>
            <InfoSubItem>
              <InfoSubItemTitle>Різноманітність для вашого вибору:</InfoSubItemTitle>
              <InfoSubItemText>
                У нас великий асортимент електроприладів від провідних виробників, щоб ви могли знайти саме те, що підходить
                вашим потребам.
              </InfoSubItemText>
            </InfoSubItem>
            <InfoSubItem>
              <InfoSubItemTitle>Спрощений та ефективний процес:</InfoSubItemTitle>
              <InfoSubItemText>
                Наш сервіс спрямований на вашу зручність. Ми пропонуємо швидку та ефективну обробку замовлень, щоб ви могли
                сконцентруватися на своєму проекті.
              </InfoSubItemText>
            </InfoSubItem>
            <InfoSubItem>
              <InfoSubItemTitle>Ваш надійний партнер:</InfoSubItemTitle>
              <InfoSubItemText>
                Ми ставимо ваш успіх на перше місце. З нами ви можете розраховувати на надійну підтримку та співпрацю на
                кожному етапі вашого проекту.
              </InfoSubItemText>
            </InfoSubItem>
          </InfoSublist>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Уперед!</InfoTitle>

          <InfoText>
            {"Зверніться до нас сьогодні, і дозвольте нам допомогти вам зробити ваш проект успішним та продуктивним!"}
          </InfoText>
        </InfoItem>
      </InfoList>
    </MainWrapper>
  );
};

export default Home;
