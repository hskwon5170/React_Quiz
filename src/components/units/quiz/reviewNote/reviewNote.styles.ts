import styled from "@emotion/styled";
import { Rate } from "antd";
export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  gap: 3em;
`;
export const Title = styled.h1`
  font-size: 4em;
  color: forestgreen;
`;
export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 2em;
  border-radius: 20px;
  margin-bottom: 5em;
`;
export const WrongAnswerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const WrongQuestionBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const WrongQuestion = styled.pre`
  width: 50%;
  white-space: pre-wrap;
  font-size: 1.2em;
`;
export const WrongQuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const WrongQuestionDifficulty = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;
export const DifficultyTitle = styled.span`
  font-size: 1em;
  font-weight: 600;
`;
export const Difficulty = styled(Rate)``;
export const WrongQuestionAnswerChoiceBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-weight: 600;
  color: forestgreen;
  margin-bottom: 2em;
`;
export const WrongQuestionAnswerChoice = styled.div`
  font-size: 1em;
  font-weight: 600;
  color: black;
`;

export const MyPickedAnswer = styled.div`
  font-weight: 600;
  font-size: 1em;
  color: darkorange;
`;
export const MemoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const NoteTitle = styled.span`
  font-size: 1.3em;
  font-weight: 600;
  color: forestgreen;
`;
export const ButtonBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SaveButton = styled.button`
  margin-bottom: 3em;
  cursor: pointer;
  width: 6em;
  height: 3em;
  font-size: 1.2em;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: forestgreen;
  color: whitesmoke;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
`;
export const ReviewDetailButtons = styled.button`
  cursor: pointer;
  width: 6em;
  height: 3em;
  font-size: 1.4em;
  margin-bottom: 3em;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: darkgray;
  color: black;
  :hover {
    background-color: forestgreen;
    color: whitesmoke;
  }
  transition: all 250ms;
`;
