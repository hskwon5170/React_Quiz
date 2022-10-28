import * as S from "./quiz.detail.styles";
import QuizItem from "../item/quiz.item.container";
import QuizStartUI from "./quiz.start.presenter";
import Quiz from "./quiz.detail.container";
import { QuizUIProps } from "./quiz.datail.types";
export default function QuizUI(props: QuizUIProps) {
  return (
    <S.Wrapper>
      {!props.isClicked && (
        <QuizStartUI onClickShowQuizItem={props.onClickShowQuizItem} />
      )}
      {props.isClicked && (
        <div>
          {props.isRetrying
            ? props.retryingData?.map((quiz, index) => (
                <QuizItem
                  isRetrying={props.isRetrying}
                  pause={props.pause}
                  seconds={props.seconds}
                  minutes={props.minutes}
                  hours={props.hours}
                  key={index}
                  quiz={quiz}
                  index={index}
                  retryingData={props.retryingData}
                />
              ))
            : props.data?.quizData?.map((quiz, index) => (
                <QuizItem
                  isRetrying={props.isRetrying}
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
