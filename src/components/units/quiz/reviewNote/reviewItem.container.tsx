import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReviewItemUI from "./reviewItem.presenter";

export default function ReviewItem(props) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const onClickSubmitmyNote = (id) => () => {
    const data = { [id]: value };
    const originsessionData = JSON.parse(
      sessionStorage.getItem("myNote") || "[]"
    );

    originsessionData.unshift(data);

    sessionStorage.setItem("myNote", JSON.stringify(originsessionData));
  };
  useEffect(() => {
    router.asPath === "/quiz/reviewNote" && sessionStorage.removeItem("myNote");
  }, []);
  return (
    <div>
      <ReviewItemUI
        index={props.index}
        isWriting={props.isWriting}
        onClickSubmitmyNote={onClickSubmitmyNote}
        setValue={setValue}
        key={props.index}
        review={props.review}
      />
    </div>
  );
}
