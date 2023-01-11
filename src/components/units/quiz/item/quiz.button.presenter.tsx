import { useState } from "react";
import { useRecoilState } from "recoil";
import { pickedAnswerState } from "../../../../commons/store";
import * as S from "./quiz.item.styles";
import Swal from "sweetalert2";
import { QuizButtonUIProps } from "./quiz.item.types";

export default function QuizButtonUI(props: QuizButtonUIProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [pickedAnswer, setPickedAnswer] = useRecoilState(pickedAnswerState);

  const onClickAnswer = event => {
    setIsClicked(true);
    setPickedAnswer(event.target.innerText);
  };
  const onClickAlert = () => {
    Swal.fire({
      title: "답은 한개만 선택해주세요!",
      icon: "error",
      showConfirmButton: false,
      timer: 1000,
      backdrop: false,
    });
  };

  return (
    <S.ButtonBox>
      <S.Buttons
        isClicked={isClicked}
        onClick={pickedAnswer ? onClickAlert : onClickAnswer}
      >
        {props.answer
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'")
          .replace(/&rsquo;/g, "'")
          .replace(/&amp;/g, "'")}
      </S.Buttons>
    </S.ButtonBox>
  );
}
