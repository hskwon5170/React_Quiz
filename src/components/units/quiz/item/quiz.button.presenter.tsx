import { useState } from "react";
import { useRecoilState } from "recoil";
import { pickedAnswerState } from "../../../../commons/store";
import * as S from "./quiz.item.styles";
export default function QuizButtonUI(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [pickedAnswer, setPickedAnswer] = useRecoilState(pickedAnswerState);
  const onClickAnswer = (event) => {
    setIsClicked(true);
    setPickedAnswer(event.target.innerText);
  };
  const onClickAlert = () => {
    alert("답은 한개만 고를수 있습니다.");
  };
  return (
    <>
      <S.Buttons
        isClicked={isClicked}
        onClick={pickedAnswer ? onClickAlert : onClickAnswer}
      >
        {props.answer}
      </S.Buttons>
    </>
  );
}
