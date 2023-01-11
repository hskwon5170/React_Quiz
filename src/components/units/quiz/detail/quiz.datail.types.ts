export type QuizProps = {
  isRetrying: boolean;
  retryingData?: string[] | undefined;
  data: any;
  quizData: string;
  stage: number;
};

export type Quiz = {
  question: string;
  correct_answer: string;
  answers: string[];
};

export type QuizPageProps = {
  dataQuiz: Quiz[];
  category: string;
  difficulty: string;
};

export type Data = {
  quizData: any[];
  Answers: any[];
};
export type QuizUIProps = {
  retryingData: string[] | undefined;
  isRetrying: boolean;
  data: Data | any;
  isClicked: boolean;
  onClickShowQuizItem: () => void;
  pause: () => void;
  seconds: number;
  minutes: number;
  hours: number;
  stage: number;
  // ***
  dataQuiz: Quiz[];
  category: string;
  difficulty: string;
};
export type QuizStartUIProps = {
  onClickShowQuizItem: () => void;
};
