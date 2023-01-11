import * as S from "./main.styles";
export default function ThemeItem(props) {
  const { theme } = props;
  return (
    <S.Themes onClick={props.onClickMoveToQuizPage(theme.id)}>
      {theme.name}
    </S.Themes>
  );
}
