import * as S from "./quiz.detail.styles";
import QuizItem from "../item/quiz.item.container";
import QuizStartUI from "./quiz.start.presenter";
export default function QuizUI(props) {
  return (
    <S.Wrapper>
      {/* 카테고리 클릭 안했으면 시작버튼 나타나도록함 */}
      {!props.isClicked && (
        <QuizStartUI onClickShowQuizItem={props.onClickShowQuizItem} />
      )}
      {/* 카테고리 클릭했으면 퀴즈 아이템 나타나도록함 */}
      {props.isClicked && (
        <div>
          {props.data?.quizData?.map((quiz, index) => (
            <QuizItem key={index} quiz={quiz} index={index} data={props.data} />
          ))}
        </div>
      )}
    </S.Wrapper>
  );
}
