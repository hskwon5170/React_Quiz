import * as S from "./main.styles";
export default function ThemeItem(props) {
  return (
    <S.Themes onClick={props.onClickMoveToQuizPage(props.theme.id)}>
      {props.theme.name}
    </S.Themes>
  );
}
