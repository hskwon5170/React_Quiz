import { useRouter } from "next/router";
import { useQuery } from "react-query";
import MainUI from "./main.presenter";
import { getThemes } from "./main.query";

export default function Main() {
  const { data } = useQuery(["Themes"], getThemes);
  console.log("데이터", data);
  const router = useRouter();
  const onClickMoveToQuizPage = (themeId) => () => {
    router.push(`/quiz/detail/${themeId}`);
  };

  return <MainUI data={data} onClickMoveToQuizPage={onClickMoveToQuizPage} />;
}
