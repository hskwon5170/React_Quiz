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
          <S.TopWrapper>
            <S.FlexWrapper>
              <S.Category>{props.review.category}</S.Category>
              <S.WrongQuestionDifficulty>
                <S.DifficultyTitle>난이도</S.DifficultyTitle>
                <S.Difficulty value={rate} />
              </S.WrongQuestionDifficulty>
            </S.FlexWrapper>
            <S.WrongQuestion>
              {props.review.question
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&rsquo;/g, "'")}
            </S.WrongQuestion>
          </S.TopWrapper>
          <S.WrongQuestionOptions></S.WrongQuestionOptions>
        </S.WrongQuestionBox>
        <S.WrongQuestionAnswerChoiceBox>
          {props.review.incorrect_answers.map((answers, index) => (
            <>
              <S.WrongQuestionAnswerChoice
                key={index}
                className={
                  props.review.correct_answer === answers ? "isActive" : ""
                }
                isCorrect={props.review.correct_answer === answers}
              >
                <S.FlexWrapper>
                  <b>{index + 1}</b>
                  <span>
                    {answers
                      .replace(/&quot;/g, '"')
                      .replace(/&#039;/g, "'")
                      .replace(/&rsquo;/g, "'")}
                  </span>
                </S.FlexWrapper>
              </S.WrongQuestionAnswerChoice>
            </>
          ))}
        </S.WrongQuestionAnswerChoiceBox>
        <S.MyPickedAnswer>
          내가 고른 답 :
          {inCorrectAnswerCounter.map((myanswer) =>
            props.review.incorrect_answers.find((answer) => answer === myanswer)
          )}
        </S.MyPickedAnswer>
      </S.WrongAnswerBox>
      <S.MemoBox>
        {props.isWriting ? (
          <S.NoteTitle>오답노트를 작성하세요 👨‍💻</S.NoteTitle>
        ) : (
          <S.NoteTitle>내가 작성한 오답노트예요 👨‍💻</S.NoteTitle>
        )}
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
