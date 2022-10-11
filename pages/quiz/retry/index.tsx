import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isLoadedState } from "../../../src/commons/store";
import Quiz from "../../../src/components/units/quiz/detail/quiz.detail.container";

export default function RetryPage() {
  const [retryingData, setRetryingData] = useState([]);
  const [isLoading, setIsLoading] = useRecoilState(isLoadedState);
  useEffect(() => {
    const Data = JSON.parse(sessionStorage.getItem("QuizData") || "[]");

    setRetryingData([...Data]);
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? "" : <Quiz isRetrying={true} retryingData={retryingData} />}
    </>
  );
}
