import { useQuery } from "react-query";
import MainUI from "./main.presenter";
import { getThemes } from "./main.query";

export default function Main() {
  const { data } = useQuery(["Themes"], getThemes);
  console.log("데이터", data);

  return <MainUI data={data} />;
}
