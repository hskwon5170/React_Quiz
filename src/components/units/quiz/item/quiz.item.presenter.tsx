import * as S from "./quiz.item.styles";
import { useRecoilState } from "recoil";
import { pickedAnswerState } from "../../../../commons/store";
import QuizButtonUI from "./quiz.button.presenter";
export default function QuizItemUI(props) {
  const [pickedAnswer] = useRecoilState(pickedAnswerState);
  return (
    <>
      {props.index === props.indexCounter && (
        <S.Section>
          <S.Form>
            <S.QuestionTitle>문제 {props.index + 1}</S.QuestionTitle>
            <S.Question>{props.quiz.question}</S.Question>
            <S.Question>
              {props.Answers[props.indexCounter].map((answer, index) => (
                <QuizButtonUI
                  key={index}
                  answer={answer}
                  index={index}
                  quiz={props.quiz}
                />
              ))}
            </S.Question>
            <S.ButtonBox>
              {(pickedAnswer === props.quiz.correct_answer && (
                <div>정답입니다!!!</div>
              )) ||
                (props.quiz.incorrect_answers.includes(pickedAnswer) && (
                  <div>오답입니다!!!</div>
                ))}
              {/* <S.Buttons>answer</S.Buttons>
              <S.Buttons>answer</S.Buttons>
              <S.Buttons>answer</S.Buttons>
              <S.Buttons>answer</S.Buttons> */}
            </S.ButtonBox>
            <S.NextButton
              inFinished={pickedAnswer}
              onClick={props.onClickMoveToNextQuestion}
            >
              다음
            </S.NextButton>
          </S.Form>
        </S.Section>
      )}
    </>
  );
}
