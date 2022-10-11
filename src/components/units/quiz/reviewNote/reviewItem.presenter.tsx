import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import dynamic from "next/dynamic";
import {
  inCorrectAnswersState,
  reviewNoteWritingState,
} from "../../../../commons/store";
import * as S from "./reviewNote.styles";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ReviewItemUI(props) {
  const [inCorrectAnswerCounter] = useRecoilState(inCorrectAnswersState);
  const [noteData, setNoteData] = useRecoilState(reviewNoteWritingState);
  const [rate, setRate] = useState(0);
  useEffect(() => {
    if (props.review.difficulty === "easy") {
      setRate(1);
    }
    if (props.review.difficulty === "medium") {
      setRate(3);
    }
    if (props.review.difficulty === "hard") {
      setRate(5);
    }
  }, []);

  const reviewData = noteData.find((data) => data[props.index]);

  return (
    <S.Wrapper key={props.index}>
      <S.WrongAnswerBox>
        <S.WrongQuestionBox>
          <S.WrongQuestion>{props.review.question}</S.WrongQuestion>
          <S.WrongQuestionOptions>
            <S.WrongQuestionDifficulty>
              <S.DifficultyTitle>난이도</S.DifficultyTitle>
              <S.Difficulty value={rate} />
            </S.WrongQuestionDifficulty>

            <S.MyPickedAnswer>
              내가 고른 답 :
              {inCorrectAnswerCounter.map((myanswer) =>
                props.review.incorrect_answers.find(
                  (answer) => answer === myanswer
                )
              )}
            </S.MyPickedAnswer>
          </S.WrongQuestionOptions>
        </S.WrongQuestionBox>
        <S.WrongQuestionAnswerChoiceBox>
          {props.review.incorrect_answers.map((answers, index) => (
            <>
              <S.WrongQuestionAnswerChoice
                key={index}
                isCorrect={props.review.correct_answer === answers}
              >
                {`${index + 1}. ${answers} ${
                  props.review.correct_answer === answers ? "정답" : ""
                }`}
              </S.WrongQuestionAnswerChoice>
            </>
          ))}
        </S.WrongQuestionAnswerChoiceBox>
      </S.WrongAnswerBox>
      <S.MemoBox>
        <S.NoteTitle>정답 & 해설풀이</S.NoteTitle>
        {props.isWriting ? (
          <ReactQuill
            theme="snow"
            onChange={props.setValue}
            style={{
              width: "100%",
              height: "10em",
              marginBottom: "3em",
            }}
          />
        ) : (
          <pre
            dangerouslySetInnerHTML={{
              __html: reviewData?.[props.index],
            }}
          ></pre>
        )}
      </S.MemoBox>
      {props.isWriting ? (
        <S.SaveButton onClick={props.onClickSubmitmyNote(props.index)}>
          저장하기
        </S.SaveButton>
      ) : (
        ""
      )}
    </S.Wrapper>
  );
}
