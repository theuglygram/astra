import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { keyframes } from "styled-components";
function WorkSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Work>Let’s work together </Work>
        <Image src="/svgs/circle.svg" width={25} height={25} alt="circle" />
        <Work>Let’s work together </Work>
      </ContentWrapper>
    </Wrapper>
  );
}

export default WorkSection;

const Wrapper = styled.div`
  background: #171717;
`;

const anime = keyframes`
    0%{
        transform: translateX(100%);
    }
    100%{
            transform: translateX(-100%);
    }`;
const ContentWrapper = styled.div`
  padding: 50px 0;
  animation: ${anime} 90s linear infinite;
  display: flex;
  width: 100vw;
  @media only screen and (max-width: 437px) {
    padding: 30px 0;
  }
`;
const Work = styled.span`
  font-size: 30px;
  font-weight: 400;
  margin: 0 10px;

  @media only screen and (max-width: 615px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 531px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 437px) {
    font-size: 16px;
  }
`;
