import { MutableRefObject, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useInterval } from "../../../commons/hooks/useInterval";

export default function QuizTimer({
  timeRef,
}: {
  timeRef: MutableRefObject<number>;
}) {
  const [timeCount, setTimeCount] = useState<number>(0);

  const setTimer = () => {
    setTimeCount((timeRef.current += 1));
  };

  const [timerStart, timerPause] = useInterval(setTimer);

  useEffect(() => {
    timerStart();

    return () => {
      timerPause();
    };
  }, []);

  return (
    <div>
      <Span className="quiz-timer">소요시간 : {timeCount}초</Span>
    </div>
  );
}

const Span = styled.span`
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem 10px;
  min-width: 120px;
  color: #55f4cd;
  font-size: 1.25rem;
`;
