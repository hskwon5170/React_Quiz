import styled from "@emotion/styled";
import Link from "next/link";
import { FcHome } from "react-icons/fc";

export default function LayoutHeader() {
  return (
    <Container>
      <Wrapper>
        <b>
          <Link href={{ pathname: "/" }}>
            <IconWrapper>
              <FcHome />
            </IconWrapper>
          </Link>
        </b>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #d4d4d466;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  b {
    padding: 1rem 2rem;
    font-size: 1.25rem;
    margin-left: 3rem;

    :last-of-type {
      margin-right: 0;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  font-size: 1.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    transform: scale(1.4);
    transition: transform 0.5s;
  }
  transform: scale(1);
  transition: transform 0.5s;
`;
