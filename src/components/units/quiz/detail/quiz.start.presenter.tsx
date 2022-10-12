import { QuizStartUIProps } from "./quiz.datail.types";
import * as S from "./quiz.detail.styles";

export default function QuizStartUI(props: QuizStartUIProps) {
  return (
    <S.Section>
      <S.QuizStart>퀴즈 시작</S.QuizStart>
      <S.QuizStartButton onClick={props.onClickShowQuizItem}>
        GO
      </S.QuizStartButton>
    </S.Section>
  );
}
