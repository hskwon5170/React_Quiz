import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;

export const QuizStart = styled.h3`
  font-size: 4em;
  color: forestgreen;
  text-align: center;
`;

export const QuizStartButton = styled.button`
  cursor: pointer;
  width: 10em;
  height: 3em;
  font-size: 1.4em;
  margin: auto;
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
