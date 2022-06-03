import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { btn } from "styles/globalstyle";
function WorkHero() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Work>Let’s work together </Work>
        <Button>Explore</Button>
      </ContentWrapper>
    </Wrapper>
  );
}

export default WorkHero;

const Wrapper = styled.div`
  background: url("/pngs/worktogether.png");
  background-size: cover;
`;

const ContentWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 437px) {
    padding: 50px 0;
  }
`;
const Work = styled.span`
  font-size: 30px;
  font-weight: 400;
  margin: 0 10px;

  @media only screen and (max-width: 615px) {
    font-size: 25px;
  }
`;

const Button = styled(btn)`
  background: #5ce115;
  margin: 20px 0;
`;
