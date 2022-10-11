import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  correctAnswersState,
  inCorrectAnswersState,
  indexCounterState,
  isLoadedState,
  reviewNoteState,
} from "../../../../commons/store";
import QuizResultUI from "./result.presenter";

export default function QuizResult() {
  const [, setIndexCounter] = useRecoilState(indexCounterState);
  const router = useRouter();
  const [, setIsLoading] = useRecoilState(isLoadedState);
  const [, setCorrectAnswerCounter] = useRecoilState(correctAnswersState);
  const [, setInCorrectAnswerCounter] = useRecoilState(inCorrectAnswersState);
  const [, setReviewNote] = useRecoilState(reviewNoteState);

  const onClickMoveToRetryPage = () => {
    router.push("/quiz/retry");
    setIsLoading(true);
    setCorrectAnswerCounter([""]);
    setInCorrectAnswerCounter([""]);
    setReviewNote([]);
    sessionStorage.removeItem("myNote");
  };

  const onClickMoveToReviewNotePage = () => {
    router.push("/quiz/reviewNote");
  };

  useEffect(() => {
    setIndexCounter(0);
  }, []);
  return (
    <QuizResultUI
      onClickMoveToRetryPage={onClickMoveToRetryPage}
      onClickMoveToReviewNotePage={onClickMoveToReviewNotePage}
    />
  );
}
