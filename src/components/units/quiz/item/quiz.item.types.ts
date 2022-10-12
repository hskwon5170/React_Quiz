import { Data } from "../detail/quiz.datail.types";
export type Questions = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuizItemProps = {
  isRetrying: boolean;
  pause: () => void;
  seconds: number;
  minutes: number;
  hours: number;
  key: number;
  quiz: any;
  index: number;
  data?: Data | undefined;
  retryingData?: string[] | undefined;
};
export type QuizItemUIProps = {
  retryingData: any;
  isRetrying: boolean;
  onClickMoveToNextQuestion: (Questions: string) => () => void;
  indexCounter: number;
  quiz: any;
  index: number;
  Answers: any;
  onClickAnswer: any;
  isClicked: any;
  isFinished: boolean;
};

export type QuizButtonUIProps = {
  key: number;
  answer: string;
  index: number;
  onClickAnswer: any;
  isFinished: any;
  isClicked: boolean;
};
export type ItemEmotionProps = {
  isClicked: boolean;
  isFinished: any;
  onClickAnswer: any;
};
