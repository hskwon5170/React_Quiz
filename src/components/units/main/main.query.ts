import { axiosInstance } from "../../../commons/axiosInstance";

export async function getThemes() {
  const result = await axiosInstance.get("/api_category.php");
  const randomData = result.data.trivia_categories
    .sort(() => 0.5 - Math.random())
    .slice(0, 8);

  return randomData;
}
