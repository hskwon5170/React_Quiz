import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  color: white;
  margin: 20px;
`;

export const TimeUsage = styled.div`
  background-color: #50ffb0;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 30px;
  width: 20%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const ChartWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  aspect-ratio: 1.5;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const Button = styled.div`
  background-color: #0d008e;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 30px;
  color: #50ffb0;
  width: 13rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  transition: transform 0.2s; /* Animation */
  :hover {
    transform: scale(1.1);
    background-color: #50ffb0;
    color: #0d008e;
    font-weight: bold;
  }
`;
