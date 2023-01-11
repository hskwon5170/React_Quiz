import * as S from "./main.styles";
import ThemeItem from "./themeItem.presenter";

export default function MainUI(props) {
  const { data, onClickMoveToQuizPage } = props;
  return (
    <S.Wrapper>
      <S.Title> 두뇌 보완 퀴즈 🧠</S.Title>
      <S.FlexWrapper>
        <S.BottomTitle> Powered by</S.BottomTitle>
        <S.LogoImg src="https://res.cloudinary.com/dle5czgig/image/upload/v1665551595/logo_kswoie.png"></S.LogoImg>
      </S.FlexWrapper>
      <S.ThemeBox>
        {data?.map(theme => (
          <ThemeItem
            key={theme.id}
            theme={theme}
            onClickMoveToQuizPage={onClickMoveToQuizPage}
          />
        ))}
      </S.ThemeBox>
    </S.Wrapper>
  );
}
