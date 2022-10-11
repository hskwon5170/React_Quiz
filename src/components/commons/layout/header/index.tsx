import styled from "@emotion/styled";
import Link from "next/link";

export default function LayoutHeader() {
  return (
    <Container>
      <Wrapper>
        <b>
          <Link href={{ pathname: "/" }}>메인</Link>
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
