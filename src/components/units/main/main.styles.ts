import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  gap: 1em;
  @media ${breakPoints.mobile} {
    margin-top: 8em;
    width: 100%;
    font-size: 0.8em;
  }
  @media ${breakPoints.tablet} {
    margin-top: 8em;
    padding: 3em;
    width: 100%;
    font-size: 1em;
  }
`;

export const Title = styled.div`
  font-size: 4.5em;
  color: white;
`;

export const FlexWrapper = styled.div`
  display: flex;
  position: relative;
  bottom: 1rem;
  width: 20.1%;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const BottomTitle = styled.div`
  font-size: 2em;
  color: white;
  margin-right: 20px;
`;

export const LogoImg = styled.img`
  width: 100px;
`;

export const Divider = styled.div`
  width: 50%;
  height: 5px;
  margin: auto;
  background-color: white;
`;
export const SubTitle = styled.h2`
  font-size: 2em;
  color: cornsilk;
  margin: 10px;
`;
export const ThemeBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2em;
  @media ${breakPoints.mobile} {
    width: 100%;
    margin-bottom: 5em;
  }
  @media ${breakPoints.tablet} {
    width: 100%;
    font-size: 1.5em;
    margin-bottom: 5em;
  }
`;
export const Themes = styled.div`
  width: 20%;
  height: 14em;
  padding: 1em;
  background-color: #0d008e;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  transition: transform 0.2s; /* Animation */
  :hover {
    transform: scale(1.1);
    background-color: #50ffb0;
    color: #0d008e;
    font-weight: bold;
  }
  @media ${breakPoints.mobile} {
    width: 80%;
    margin: auto;
  }
  @media ${breakPoints.tablet} {
    width: 40%;
    font-size: 1.5em;
  }
`;
