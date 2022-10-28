import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { useStopwatch } from "react-timer-hook";
import { QuizProps } from "./quiz.datail.types";
import QuizUI from "./quiz.detail.presenter";
import { GetQuizByTheme } from "./quiz.query";

export default function Quiz(props: QuizProps) {
  const [isClicked, setIsClicked] = useState(false);
  const { seconds, minutes, hours, pause } = useStopwatch({ autoStart: true });
  const router = useRouter();
  const themeId = router.query.id;
  const onClickShowQuizItem = () => {
    setIsClicked(true);
  };
  const fallback = [];
  const { data = fallback } = useQuery(["QuizData"], () =>
    GetQuizByTheme(themeId)
  );
  console.log("퀴즈디테일:)", data)
  return (
    <QuizUI
      data={data}
      onClickShowQuizItem={onClickShowQuizItem}
      isClicked={isClicked}
      seconds={seconds}
      minutes={minutes}
      hours={hours}
      pause={pause}
      isRetrying={props.isRetrying}
      retryingData={props.retryingData}
    />
  );
}
