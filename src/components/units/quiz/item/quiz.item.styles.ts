import styled from "@emotion/styled";

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;
export const QuestionTitle = styled.h3`
  align-self: flex-start;
`;
export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3em;
`;
export const Question = styled.pre`
  white-space: pre-wrap;
  margin-bottom: 1em;
  font-size: 1.5em;
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
  background-color: darkgray;
  color: black;
  :hover {
    background-color: forestgreen;
    color: whitesmoke;
  }
  transition: all 250ms;
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
  background-color: darkgray;
  color: black;
  :hover {
    background-color: forestgreen;
    color: whitesmoke;
  }
  transition: all 250ms;
`;
