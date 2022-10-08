import { axiosInstance } from "../../../../commons/axiosInstance";

export async function getQuizByTheme(themeId) {
  const result = await axiosInstance.get(
    `/api.php?amount=10&category=${themeId}&type=multiple`
  );
  const quizData = result.data.results;
  const wrongAnswers = quizData.map((quiz) => quiz.incorrect_answers);
  const correctAnswer = quizData.map((quiz) => quiz.correct_answer);
  wrongAnswers.map((answers, index) => answers.push(correctAnswer[index]));
  const Answers = [...wrongAnswers];
  Answers.map((answer) => answer.sort(() => 0.5 - Math.random()));
  console.log(quizData);

  return { quizData, Answers };
}
