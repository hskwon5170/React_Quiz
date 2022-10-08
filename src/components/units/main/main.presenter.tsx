import * as S from "./main.styles";
import ThemeItem from "./themeItem.presenter";

export default function MainUI(props) {
  return (
    <S.Wrapper>
      <S.Title>퀴즈 타임</S.Title>
      <S.Divider></S.Divider>
      <S.SubTitle>테마를 고르세요</S.SubTitle>
      <S.ThemeBox>
        {props.data?.map((theme) => (
          <ThemeItem key={theme.id} theme={theme} />
        ))}
      </S.ThemeBox>
    </S.Wrapper>
  );
}
