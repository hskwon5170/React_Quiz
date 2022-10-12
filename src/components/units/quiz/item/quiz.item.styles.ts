import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";
import { ItemEmotionProps, QuizButtonUIProps } from "./quiz.item.types";

export const Section = styled.section`
  /* max-width: 1400px; */
  width: 100vw;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 0.8em;
  }
  @media ${breakPoints.tablet} {
    margin-bottom: 30px;
  }
`;
export const QuestionTitle = styled.h3`
  align-self: flex-start;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  @media ${breakPoints.mobile} {
    font-size: 2.5em;
  }
`;

export const StateBar = styled.div`
  position: relative;
  padding: 0.5rem 0;
  width: 100%;

  ::before {
    position: absolute;
    top: 0;
    display: block;
    content: "";
    width: ${({ state }: { state: number }) => `calc(100% * ${state})`};
    height: 10px;
    border-radius: 1rem;
    background-color: #55f4cd;
    z-index: 2;
    transition: all ease 0.5s;
  }

  ::after {
    position: absolute;
    top: 0;
    display: block;
    content: "";
    width: 100%;
    height: 10px;
    border-radius: 1rem;
    background-color: #d4d4d444;
    z-index: 1;
  }
`;

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* gap: 3em; */
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const Question = styled.pre`
  white-space: pre-wrap;
  margin-bottom: 1em;
  font-size: 1.5em;
  color: white;
  /* font-weight: 600; */
  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
  @media ${breakPoints.tablet} {
    margin-top: 1.3em;
    width: 100%;
    font-size: 2.3rem;
  }
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.8em;
`;
export const Buttons = styled.button`
  cursor: pointer;
  width: 100%;
  height: 3em;
  font-size: 1.2em;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${(props: QuizButtonUIProps) =>
    props.isClicked ? "#50ffb0" : "darkgray"};
  color: black;
  margin-bottom: 15px;
  :hover {
    background-color: #50ffb0;
    color: #0d008e;
  }
  transition: all 250ms;
  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
  @media ${breakPoints.tablet} {
    font-size: 1.7rem;
  }
`;
export const NextButton = styled.button`
  cursor: pointer;
  width: 5em;
  height: 2em;
  font-size: 1.2em;
  align-self: flex-end;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: ${(props: ItemEmotionProps) =>
    props.isClicked ? "yellow" : "#d4d4d444"};
  color: ${(props) => (props.isClicked ? "black" : "white")};
  font-weight: bolder;
  transition: all 250ms;
  @media ${breakPoints.tablet} {
    height: 3.4em;
    width: 5.3em;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuizTimerWrapper = styled.div``;

export const StatusWrap = styled.div`
  height: 0;
`;

export const LottieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
`;

export const Lottie = styled.div`
  position: relative;
  width: 50px;
`;

export const Status = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  width: 100%;
  margin-left: 1rem;
`;
