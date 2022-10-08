import { useRecoilState } from "recoil";
import {
  indexCounterState,
  pickedAnswerState,
} from "../../../../commons/store";
import QuizItemUI from "./quiz.item.presenter";

export default function QuizItem(props) {
  const [indexCounter, setIndexCounter] = useRecoilState(indexCounterState);
  const [, setPickedAnswer] = useRecoilState(pickedAnswerState);
  const onClickMoveToNextQuestion = () => {
    setIndexCounter(indexCounter + 1);
    setPickedAnswer("");
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
