import styled from "@emotion/styled";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
  gap: 1em;
`;

export const Title = styled.h1`
  font-size: 4em;
  color: white;
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
`;
export const ThemeBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2em;
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
`;
