import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReviewItemUI from "./reviewItem.presenter";
import Swal from "sweetalert2";

export default function ReviewItem(props) {
  console.log("리뷰", props.review);
  const [value, setValue] = useState("");
  const router = useRouter();
  const onClickSubmitmyNote = (id) => () => {
    const data = { [id]: value };
    const originsessionData = JSON.parse(
      sessionStorage.getItem("myNote") || "[]"
    );

    originsessionData.unshift(data);

    sessionStorage.setItem("myNote", JSON.stringify(originsessionData));
    Swal.fire({
      title: "오답노트를 저장했어요",
      icon: "success",
      showConfirmButton: false,
      timer: 1000,
      backdrop: false,
    });
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
