import { useRouter } from "next/router";
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
  const [timeRecord, setTimeRecord] = useRecoilState(timeRecordState);
  const [correctAnswerCounter, setCorrectAnswerCounter] =
    useRecoilState(correctAnswersState);
  const [inCorrectAnswerCounter, setInCorrectAnswerCounter] = useRecoilState(
    inCorrectAnswersState
  );

  const onClickMoveToNextQuestion = () => {
    if (pickedAnswer === props.quiz.correect_answer) {
      const correctAnswers = [...correctAnswerCounter];
      correctAnswers.push(pickedAnswer);
      setCorrectAnswerCounter(correctAnswers);
    } else {
      const inCorrectAnswers = [...inCorrectAnswerCounter];
      inCorrectAnswerCounter.push(pickedAnswer);
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
  return (
    <QuizItemUI
      onClickMoveToNextQuestion={onClickMoveToNextQuestion}
      indexCounter={indexCounter}
      quiz={props.quiz}
      index={props.index}
      Answers={props.data.Answers}
    />
  );
}
