import * as S from "./result.styles";
import { useRecoilState } from "recoil";
import {
  correctAnswersState,
  inCorrectAnswersState,
  timeRecordState,
} from "../../../../commons/store";

export default function QuizResultUI(props) {
  const [timeRecord] = useRecoilState(timeRecordState);
  const [correctAnswerCounter] = useRecoilState(correctAnswersState);
  const [inCorrectAnswerCounter] = useRecoilState(inCorrectAnswersState);
  return (
    <div>
      <div>소요된시간</div>
      <div>{`${timeRecord.hours}시:${timeRecord.minutes}분:${timeRecord.seconds}초`}</div>
      <div>정답</div>
      <div>{correctAnswerCounter.length}개</div>
      <div>--------</div>
      <div>오답</div>
      <div>{inCorrectAnswerCounter.length - 1}개</div>
      <div>--------</div>
      <div onClick={props.onClickMoveToRetryPage}>다시풀기</div>
      <div>오답노트</div>
    </div>
  );
}
