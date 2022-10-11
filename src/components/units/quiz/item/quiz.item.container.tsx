import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  correctAnswersState,
  inCorrectAnswersState,
  indexCounterState,
  pickedAnswerState,
  reviewNoteState,
  timeRecordState,
} from "../../../../commons/store";
import QuizItemUI from "./quiz.item.presenter";

export default function QuizItem(props) {
  const router = useRouter();
  const [reviewNote, setReviewNote] = useRecoilState(reviewNoteState);
  const [indexCounter, setIndexCounter] = useRecoilState(indexCounterState);
  const [pickedAnswer, setPickedAnswer] = useRecoilState(pickedAnswerState);
  const [, setTimeRecord] = useRecoilState(timeRecordState);
  const [correctAnswerCounter, setCorrectAnswerCounter] =
    useRecoilState(correctAnswersState);
  const [inCorrectAnswerCounter, setInCorrectAnswerCounter] = useRecoilState(
    inCorrectAnswersState
  );
  const [stage, setStage] = useState<number>(1);

  const onClickMoveToNextQuestion = (Questions) => () => {
    if (pickedAnswer === props.quiz.correct_answer) {
      const correctAnswers = [...correctAnswerCounter];
      correctAnswers.push(pickedAnswer);
      setCorrectAnswerCounter(correctAnswers);
      // console.log("correct", correctAnswers);
    } else {
      const reviewData = [...reviewNote, Questions];
      setReviewNote(reviewData);
      const inCorrectAnswers = [...inCorrectAnswerCounter];
      inCorrectAnswers.push(pickedAnswer);
      setInCorrectAnswerCounter(inCorrectAnswers);
      // console.log("inCorrect", inCorrectAnswers);
    }

    setIndexCounter(indexCounter + 1);
    setPickedAnswer("");
    if (indexCounter === 9) {
      router.push("/quiz/result");
      props.pause();
      setTimeRecord({
        hours: String(props.hours),
        minutes: String(props.minutes),
        seconds: String(props.seconds),
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
