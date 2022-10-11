import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  correctAnswersState,
  inCorrectAnswersState,
  indexCounterState,
  pickedAnswerState,
  timeRecordState,
} from "../../../../commons/store";
import QuizItemUI from "./quiz.item.presenter";

export default function QuizItem(props) {
  const router = useRouter();
  const [indexCounter, setIndexCounter] = useRecoilState(indexCounterState);
  const [pickedAnswer, setPickedAnswer] = useRecoilState(pickedAnswerState);
  const [, setTimeRecord] = useRecoilState(timeRecordState);
  const [correctAnswerCounter, setCorrectAnswerCounter] =
    useRecoilState(correctAnswersState);
  const [inCorrectAnswerCounter, setInCorrectAnswerCounter] = useRecoilState(
    inCorrectAnswersState
  );

  const onClickMoveToNextQuestion = (Questions) => () => {
    if (pickedAnswer === props.quiz.correct_answer) {
      const correctAnswers = [...correctAnswerCounter];
      correctAnswers.push(pickedAnswer);
      setCorrectAnswerCounter(correctAnswers);
    } else {
      const inCorrectAnswers = [...inCorrectAnswerCounter];
      inCorrectAnswers.push(pickedAnswer);
      setInCorrectAnswerCounter(inCorrectAnswers);
    }

    setIndexCounter(indexCounter + 1);
    setPickedAnswer("");
    if (indexCounter === 9) {
      router.push("/quiz/result");
      props.pause();
      setTimeRecord({
        hours: props.hours,
        minutes: props.minutes,
        seconds: props.seconds,
      });
    }
  };

  useEffect(() => {
    if (!props.isRetrying) {
      sessionStorage.setItem("QuizData", JSON.stringify(props.data.quizData));
    }
  }, []);
  return (
    <QuizItemUI
      onClickMoveToNextQuestion={onClickMoveToNextQuestion}
      indexCounter={indexCounter}
      quiz={props.quiz}
      index={props.index}
      Answers={props.data.Answers}
      retryingData={props.retryingData}
      isRetrying={props.isRetrying}
    />
  );
}