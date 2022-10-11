import * as S from "./result.styles";
import { useRecoilState } from "recoil";
import {
  correctAnswersState,
  inCorrectAnswersState,
  timeRecordState,
} from "../../../../commons/store";
import { VictoryPie } from "victory";
import { useEffect, useState } from "react";

export default function QuizResultUI(props) {
  const [timeRecord] = useRecoilState(timeRecordState);
  const [correctAnswerCounter] = useRecoilState(correctAnswersState);
  const [inCorrectAnswerCounter] = useRecoilState(inCorrectAnswersState);
  console.log("맞음", correctAnswerCounter);
  console.log("틀림", inCorrectAnswerCounter);
  const defaultGraphicData = [
    { x: 1, y: 0, label: `정답 Loading...` },
    { x: 2, y: 10, label: `오답 Loading...` },
  ];
  const [quizResult, setQuizResult] = useState({});
  const [graphicData, setGraphicData] = useState(defaultGraphicData);
  const resultKey = () => {
    return Object.keys(correctAnswerCounter.length);
  };
  useEffect(() => {
    // const _data = dataQuizResult.at(-1)[resultKey()];
    const correctCount = correctAnswerCounter.length - 1;
    const wrongCount = inCorrectAnswerCounter.length - 1;
    setQuizResult({
      // dataResult: _data,
      correctCount,
      wrongCount,
    });
    setGraphicData([
      {
        x: 1,
        y: correctCount,
        label: `정답 ${correctCount}개`,
      },
      {
        x: 2,
        y: wrongCount,
        label: `오답 ${wrongCount}개`,
      },
    ]);
  }, []);

  return (
    <S.Wrapper>
      <div>소요된시간</div>
      <div>{`${timeRecord.hours}시:${timeRecord.minutes}분:${timeRecord.seconds}초`}</div>
      <div>--------</div>

      <S.ChartWrapper>
        <VictoryPie
          animate={{ duration: 500 }}
          style={{ labels: { fill: "#fff" } }}
          colorScale={["#00c896", "#d4d4d444"]}
          data={graphicData}
        />
      </S.ChartWrapper>
      <div onClick={props.onClickMoveToRetryPage}>처음부터 다시풀기</div>
      <div onClick={props.onClickMoveToReviewNotePage}>오답노트</div>
    </S.Wrapper>
  );
}
