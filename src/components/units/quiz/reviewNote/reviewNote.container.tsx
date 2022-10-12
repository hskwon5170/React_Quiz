import { useRouter } from "next/router";
import ReviewNoteUI from "./reviewNote.presenter";
import { BackTop } from "antd";
import React from "react";

export default function ReviewNote(props) {
  const router = useRouter();
  const onClickMoveToReviewNote = () => {
    router.push("/quiz/reviewNote/detail");
  };
  const style: React.CSSProperties = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "yellow",
    color: "black",
    textAlign: "center",
    fontSize: 14,
  };

  return (
    <div>
      <ReviewNoteUI
        isWriting={props.isWriting}
        onClickMoveToReviewNote={onClickMoveToReviewNote}
      />
      <BackTop>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
}
