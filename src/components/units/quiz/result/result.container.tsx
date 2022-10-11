import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { indexCounterState, isLoadedState } from "../../../../commons/store";
import QuizResultUI from "./result.presenter";

export default function QuizResult() {
  const [, setIndexCounter] = useRecoilState(indexCounterState);
  const router = useRouter();
  const [, setIsLoading] = useRecoilState(isLoadedState);
  const onClickMoveToRetryPage = () => {
    router.push("/quiz/retry");
    setIsLoading(true);
  };
  useEffect(() => {
    setIndexCounter(0);
  }, []);
  return <QuizResultUI onClickMoveToRetryPage={onClickMoveToRetryPage} />;
}
