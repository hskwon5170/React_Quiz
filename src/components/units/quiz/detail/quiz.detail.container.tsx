import { useState } from "react";
import QuizUI from "./quiz.detail.presenter";

export default function Quiz() {
  const [isClicked, setIsClicked] = useState(false);
  const onClickShowQuizItem = () => {
    setIsClicked(true);
  };
  return (
    <QuizUI onClickShowQuizItem={onClickShowQuizItem} isClicked={isClicked} />
  );
}
