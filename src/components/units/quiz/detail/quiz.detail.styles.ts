import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StateBar = styled.div`
  position: relative;
  padding: 0.5rem 0;

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
  font-weight: bolder;
  color: white;
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
  margin-top: 20px;
  transition: transform 0.2s; /* Animation */
  :hover {
    transform: scale(1.5);
  }
`;
