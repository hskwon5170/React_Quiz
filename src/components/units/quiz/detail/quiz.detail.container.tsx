import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";
import { useStopwatch } from "react-use-precision-timer";
import QuizUI from "./quiz.detail.presenter";
import { getQuizByTheme } from "./quiz.query";

export default function Quiz(props) {
  const [isClicked, setIsClicked] = useState(false);
  const { seconds, minutes, hours, pause } = useStopwatch({ autoStart: true });
  const router = useRouter();
  const themeId = router.query.id;
  const onClickShowQuizItem = () => {
    setIsClicked(true);
  };
  const fallback = [];
  const { data = fallback } = useQuery(["QuizData"], () =>
    getQuizByTheme(themeId)
  );
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
