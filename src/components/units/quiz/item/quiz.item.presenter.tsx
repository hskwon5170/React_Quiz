import * as S from "./quiz.item.styles";
export default function QuizItemUI(props) {
  return (
    <S.Section>
      <S.Form>
        <S.QuestionTitle>문제</S.QuestionTitle>
        <S.Question>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          fugiat, delectus asperiores id repudiandae, nam hic veritatis minus,
          fuga ipsa omnis illum maxime perferendis accusantium sequi sed eaque
          sint labore.
        </S.Question>
        <S.ButtonBox>
          <S.Buttons>answer</S.Buttons>
          <S.Buttons>answer</S.Buttons>
          <S.Buttons>answer</S.Buttons>
          <S.Buttons>answer</S.Buttons>
        </S.ButtonBox>
        <S.NextButton>다음</S.NextButton>
      </S.Form>
    </S.Section>
  );
}
