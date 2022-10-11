import * as S from "./reviewNote.styles";
import { reviewNoteState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import ReviewItem from "./reviewItem.container";

export default function ReviewNoteUI(props) {
  const [reviewNote] = useRecoilState(reviewNoteState);

  return (
    <S.Section>
      <S.Title>오답 노트</S.Title>
      {reviewNote.map((review, index) => (
        <ReviewItem
          key={index}
          review={review}
          isWriting={props.isWriting}
          index={index}
        />
      ))}
      {props.isWriting ? (
        <S.ReviewDetailButtons onClick={props.onClickMoveToReviewNote}>
          오답 노트!!
        </S.ReviewDetailButtons>
      ) : (
        ""
      )}
    </S.Section>
  );
}
