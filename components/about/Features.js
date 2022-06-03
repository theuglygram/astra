import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Heading, btn, Paragraph } from "styles/globalstyle";

function Features() {
  return (
    <Wrapper>
      <ContentWrapper>
        <ContentHolder>
          <LeftSection>
            <Wrap>
              <TopSection>
                <Titled>Features</Titled>
              </TopSection>
              <Title>
                Tempus ac cras donec eu lacinia consectetur massa magna massa
              </Title>
              <UsersWrapper>
                <Numb>20+ </Numb>
                <User>Elit eu odio interdum</User>
              </UsersWrapper>
              <UsersWrapper>
                <Numb>20+ </Numb>
                <User>Elit eu odio interdum</User>
              </UsersWrapper>
              <UsersWrapper>
                <Numb>20+ </Numb>
                <User>Elit eu odio interdum</User>
              </UsersWrapper>
            </Wrap>
          </LeftSection>

          <RightSection>
            <Image src="/pngs/boy.png" width={595} height={803} alt="boy" />{" "}
          </RightSection>
        </ContentHolder>
      </ContentWrapper>
      <Bottom>
        <Image
          src="/svgs/bottomellipse.svg"
          width={150}
          height={150}
          alt="arr"
        />
      </Bottom>
    </Wrapper>
  );
}

export default Features;

const Wrapper = styled.div`
  background: #000;
  height: 100%;
  position: relative;
  padding: 30px 20px; ;
`;
const ContentWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`;
const ContentHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;
  place-items: center;
  margin-top: 35px;

  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
const TopSection = styled.div``;

const Titled = styled(Heading)`
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  text-transform: uppercase;
  margin: 20px 0;
`;
const Title = styled(Heading)`
  padding-bottom: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

const Bottom = styled.div`
  opacity: 0.2;
  position: absolute;
  left: 0;
  bottom: 0;
`;
const Wrap = styled.div``;
const LeftSection = styled.div``;
const UsersWrapper = styled.div`
  background: #282828;
  border-radius: 16px;
  height: 100px;
  /* max-width: 300px; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 20px 0;
`;
const Numb = styled.h4`
  font-size: 30px;
`;
const User = styled.p`
  font-size: 18px;
`;
const RightSection = styled.div`
  z-index: 999;
`;
