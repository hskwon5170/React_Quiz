import * as S from "./main.styles";
export default function ThemeItem(props) {
  return <S.Themes>{props.theme.name}</S.Themes>;
}
