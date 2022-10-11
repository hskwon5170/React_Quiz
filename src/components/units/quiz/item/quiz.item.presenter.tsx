import * as S from "./quiz.item.styles";
import lottie from "lottie-web";
import { useRecoilState } from "recoil";
import { pickedAnswerState } from "../../../../commons/store";
import QuizButtonUI from "./quiz.button.presenter";
import { useEffect, useRef, useState } from "react";
import QuizTimer from "../../../commons/quizTimer";
export default function QuizItemUI(props) {
  const [pickedAnswer] = useRecoilState(pickedAnswerState);
  const retryingAnswers = props.retryingData?.map(
    (Answers) => Answers.incorrect_answers
  );
  const correctContainer = useRef(null);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    lottie.loadAnimation({
      container: correctContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../../public/quizItem/107795-positive.json"),
    });
  }, [pickedAnswer]);

  const incorrectContainer = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: incorrectContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../../../../public/quizItem/103831-circle-x.json"),
    });
  }, [pickedAnswer]);
  return (
    <>
      {props.index === props.indexCounter && (
        <S.Section>
          <S.Wrapper>
            <S.QuestionTitle>문제 {props.index + 1}</S.QuestionTitle>
            <QuizTimer timeRef={timeRef} />
            {/* <S.StateBar state={props.index / props.stage} /> */}
            <S.Question>
              {props.quiz.question
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&rsquo;/g, "'")}
            </S.Question>
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
              <S.LottieWrapper>
                <S.Lottie className="correctContainer" ref={correctContainer} />
                <S.Status>정답이예요!</S.Status>
              </S.LottieWrapper>
            )) ||
              (props.quiz.incorrect_answers.includes(pickedAnswer) && (
                <S.LottieWrapper>
                  <S.Lottie
                    className="incorrectContainer"
                    ref={incorrectContainer}
                  />

                  <S.Status>틀렸어요</S.Status>
                </S.LottieWrapper>
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
