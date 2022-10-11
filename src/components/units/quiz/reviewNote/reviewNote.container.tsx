import { useRouter } from "next/router";
import ReviewNoteUI from "./reviewNote.presenter";

export default function ReviewNote(props) {
  const router = useRouter();
  const onClickMoveToReviewNote = () => {
    router.push("/quiz/reviewNote/detail");
  };
  return (
    <ReviewNoteUI
      isWriting={props.isWriting}
      onClickMoveToReviewNote={onClickMoveToReviewNote}
    />
  );
}
