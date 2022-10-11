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
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const QuizStartButton = styled.button`
  border-radius: 500px;
  background-color: #50ffb0;
  color: #2941ab;
  line-height: 20px;
  font-weight: 700;
  text-transform: none;
  letter-spacing: normal;
  width: 189px;
  height: 48px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s; /* Animation */
  :hover {
    transform: scale(1.5);
  }
`;
