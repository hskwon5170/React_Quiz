import styled from "@emotion/styled";
import { breakPoints } from "../../../../../styles/media";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    max-width: none;
    width: 100%;
  }
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
  @media ${breakPoints.tablet} {
    width: 60%;
    font-size: 2rem;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;

export const ChartWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
  aspect-ratio: 1.5;
  @media ${breakPoints.tablet} {
    max-width: 1000px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  @media ${breakPoints.tablet} {
    margin-top: 3rem;
  }
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
  @media ${breakPoints.tablet} {
    font-size: 1.8rem;
    height: 3.4rem;
    padding: 30px;
  }
  @media ${breakPoints.mobile} {
    width: 8rem;
    font-size: 1.3rem;
  }
`;
