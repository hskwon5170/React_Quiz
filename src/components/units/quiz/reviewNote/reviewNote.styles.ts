import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../../styles/media";
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
  color: white;
`;
export const Wrapper = styled.div`
  width: 90vw;
  /* background-color: yellow; */
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 1em;
  padding: 2em;
  margin-bottom: 5em;
  border-bottom: 2px solid white;
  @media ${breakPoints.mobile} {
    margin: 0;
  }
`;
export const WrongAnswerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.div`
  font-weight: 600;
  font-size: 1em;
  color: white;
  border-radius: 2rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: #0d008e;
  display: flex;
  align-items: center;
  @media ${breakPoints.tablet} {
    font-size: 1.6rem;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const TopWrapper = styled.div`
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
  width: 100%;
  white-space: pre-wrap;
  font-size: 2.2em;
  padding: 20px;
  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;
export const WrongQuestionOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const WrongQuestionDifficulty = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  margin-left: 30px;
  font-weight: 600;
  font-size: 1em;
  color: white;
  border-radius: 2rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: #0d008e;
  @media ${breakPoints.mobile} {
    margin-left: 10px;
    background-color: transparent;
  }
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
  color: white;
  border-radius: 2rem;
  width: fit-content;
  padding: 0.5rem 1rem;

  b {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    color: #d4d4d4;
    font-size: 1rem;
    margin-right: 10px;
  }
  &.isActive {
    background-color: ${({ isCorrect }: { isCorrect: boolean }) =>
      isCorrect ? "#00c896aa" : "#fe6768aa"};
  }
`;

export const FlexWrapper = styled.div`
  display: flex;

  @media ${breakPoints.tablet} {
    display: flex;
    align-items: center;
  }
  span {
    @media ${breakPoints.tablet} {
      font-size: 1.6rem;
    }
  }
`;

export const MyPickedAnswer = styled.div`
  font-weight: 600;
  font-size: 1em;
  color: black;
  border-radius: 2rem;
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: #fe6768aa;
  @media ${breakPoints.tablet} {
    font-size: 1.3rem;
  }
`;
export const MemoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 30px 30px;
`;
export const NoteTitle = styled.span`
  font-size: 1.3em;
  font-weight: 600;
  color: white;
  @media ${breakPoints.tablet} {
    font-size: 1.6rem;
  }
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
  font-weight: bold;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #50ffb0;
  color: #0d008e;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
  @media ${breakPoints.tablet} {
    font-size: 1.6rem;
  }
`;
export const ReviewDetailButtons = styled.button`
  margin-bottom: 3em;
  cursor: pointer;
  width: 10%;
  height: 3em;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #0d008e;
  color: #50ffb0;
  :hover {
    transform: scale(1.2);
  }
  transition: all 250ms ease-in;
  @media ${breakPoints.mobile} {
    width: 50%;
  }
  @media ${breakPoints.tablet} {
    width: 30%;
    font-size: 1.9rem;
  }
`;
