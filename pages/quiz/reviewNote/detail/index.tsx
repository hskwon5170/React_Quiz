import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { reviewNoteWritingState } from "../../../../src/commons/store";
import ReviewNote from "../../../../src/components/units/quiz/reviewNote/reviewNote.container";

export default function ReviewNoteDetailPage() {
  const [, setNoteData] = useRecoilState(reviewNoteWritingState);
  useEffect(() => {
    const reviewNoteDetailData = JSON.parse(
      sessionStorage.getItem("myNote") || "[]"
    );
    setNoteData(reviewNoteDetailData);
  }, []);

  return <ReviewNote isWriting={false} />;
}
