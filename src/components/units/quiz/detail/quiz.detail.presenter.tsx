import * as S from "./quiz.detail.styles";
import QuizItem from "../item/quiz.item.container";
import QuizStartUI from "./quiz.start.presenter";
export default function QuizUI(props) {
  return (
    <S.Wrapper>
      {!props.isClicked && (
        <QuizStartUI onClickShowQuizItem={props.onClickShowQuizItem} />
      )}
      {props.isClicked && (
        <div>
          {props.data?.quizData?.map((quiz, index) => (
            <QuizItem
              pause={props.pause}
              seconds={props.seconds}
              minutes={props.minutes}
              hours={props.hours}
              key={index}
              quiz={quiz}
              index={index}
              data={props.data}
            />
          ))}
        </div>
      )}
    </S.Wrapper>
  );
}
