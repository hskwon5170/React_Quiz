import * as S from "./main.styles";
import ThemeItem from "./themeItem.presenter";

export default function MainUI(props) {
  return (
    <S.Wrapper>
      <S.Title> 두뇌 보완 퀴즈 🧠</S.Title>
      <S.FlexWrapper>
        <S.BottomTitle> Powered by</S.BottomTitle>
        <S.LogoImg src="https://res.cloudinary.com/dle5czgig/image/upload/v1665551595/logo_kswoie.png"></S.LogoImg>
      </S.FlexWrapper>
      {/* <S.SubTitle>원하는 테마를 선택해주세요</S.SubTitle> */}
      <S.ThemeBox>
         {props.data?.map((theme) => (
          <ThemeItem
            key={theme.id}
            theme={theme}
            onClickMoveToQuizPage={props.onClickMoveToQuizPage}
          />
        ))}
        {/* {props.data?.map((el) => (
          <S.Themes key={el.id} onClick={ props.onClickMoveToQuizPage(el.id)}>{ el.name}</S.Themes>
        ))} */}
      </S.ThemeBox>
    </S.Wrapper>
  );
}
