import * as S from "./quiz.item.styles";
import { useRecoilState } from "recoil";
import { pickedAnswerState } from "../../../../commons/store";
import QuizButtonUI from "./quiz.button.presenter";
export default function QuizItemUI(props) {
  const [pickedAnswer] = useRecoilState(pickedAnswerState);
  const retryingAnswers = props.retryingData?.map(
    (Answers) => Answers.incorrect_answers
  );
  return (
    <>
      {props.index === props.indexCounter && (
        <S.Section>
          <S.Wrapper>
            <S.QuestionTitle>문제 {props.index + 1}</S.QuestionTitle>
            <S.Question>{props.quiz.question}</S.Question>
            <S.Question>
              {props.isRetrying
                ? retryingAnswers[props.indexCounter].map((answer, index) => (
                    <QuizButtonUI key={index} answer={answer} index={index} />
                  ))
                : props.Answers[props.indexCounter].map((answer, index) => (
                    <QuizButtonUI key={index} answer={answer} index={index} />
                  ))}
            </S.Question>
            {(pickedAnswer === props.quiz.correct_answer && (
              <div>정답입니다!!!</div>
            )) ||
              (props.quiz.incorrect_answers.includes(pickedAnswer) && (
                <div>오답입니다!!!</div>
              ))}

            <S.NextButton
              inFinished={pickedAnswer}
              onClick={props.onClickMoveToNextQuestion(props.quiz)}
            >
              다음
            </S.NextButton>
          </S.Wrapper>
        </S.Section>
      )}
    </>
  );
}
