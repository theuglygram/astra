import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Heading, btn, Paragraph } from "styles/globalstyle";

function Values() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Numb>01</Numb>
        <TopSection>
          <Title>Our Values</Title>
        </TopSection>

        <ContentHolder>
          <TitleHolder>
            <Titled>
              We build custom products for awesome companies, teams and
              startups.
            </Titled>
          </TitleHolder>

          <DescHolder>
            <Description>
              Elit eu odio interdum facilisis curabitur mauris phasellus vitae.
              Pretium fames vel tortor et arcu, faucibus semper egestas amet.
              Venenatis arcu viverra feugiat vel libero
            </Description>
            <Btn>Explore open roles</Btn>
          </DescHolder>
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

export default Values;

const Wrapper = styled.div`
  background: #000;
  height: 100%;
  position: relative;
  padding: 30px 20px; ;
`;
const ContentWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 30px auto;
`;
const ContentHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;
  place-items: center;
  margin-top: 35px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const TopSection = styled.div``;
const Numb = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin: 25px 0;
`;
const Title = styled(Heading)`
  border-bottom: 1px solid #ededed;
  width: 100%;
  padding-bottom: 15px;
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  text-transform: uppercase;
`;
const TitleHolder = styled.div``;

const Top = styled.div`
  opacity: 0.2;
  position: absolute;
  right: 0;
  top: 0;
`;
const Bottom = styled.div`
  opacity: 0.2;
  position: absolute;
  left: 0;
  bottom: 0;
  span span img {
    z-index: -1;
  }
`;
const DescHolder = styled.div``;
const Btn = styled(btn)`
  background: #3a3a3a;
  color: #fff;
  margin: 30px 0;
  width: auto;
`;
const Titled = styled(Heading)`
  letter-spacing: unset;
`;
const Description = styled(Paragraph)``;
