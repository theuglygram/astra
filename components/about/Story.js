import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { Heading, btn, Paragraph } from "styles/globalstyle";

function Story() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Numb>Blog</Numb>
        <Titled>Our story</Titled>
        <ContentHolder>
          <DescHolder>
            <Date>2012</Date>
            <Name>Astra is official template</Name>
            <Description>
              Elit eu odio interdum facilisis curabitur mauris phasellus vitae.
              Pretium fames vel tortor et arcu, faucibus semper egestas amet.
              Venenatis arcu viverra feugiat vel libero
            </Description>
          </DescHolder>
          <DescHolder>
            <Date>2012</Date>
            <Name>Astra is official template</Name>
            <Description>
              Elit eu odio interdum facilisis curabitur mauris phasellus vitae.
              Pretium fames vel tortor et arcu, faucibus semper egestas amet.
              Venenatis arcu viverra feugiat vel libero
            </Description>
          </DescHolder>
          <DescHolder>
            <Date>2012</Date>
            <Name>Astra is official template</Name>
            <Description>
              Elit eu odio interdum facilisis curabitur mauris phasellus vitae.
              Pretium fames vel tortor et arcu, faucibus semper egestas amet.
              Venenatis arcu viverra feugiat vel libero
            </Description>
          </DescHolder>
        </ContentHolder>
      </ContentWrapper>
      <Top>
        <Image src="/svgs/topellipse.svg" width={150} height={150} alt="arr" />
      </Top>
    </Wrapper>
  );
}

export default Story;

const Wrapper = styled.div`
  background: #000;
  height: 100%;
  position: relative;
  padding: 30px 0; ;
`;
const ContentWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 30px auto;
  padding: 0 20px;
`;
const ContentHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  align-items: center;
  place-items: center;
  margin-top: 35px;

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const Numb = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  margin: 5px 0;
`;

const Top = styled.div`
  opacity: 0.2;
  position: absolute;
  right: 0;
  top: 0;
`;

const DescHolder = styled.div`
  background: #282828;
  border-radius: 16px;
  padding: 20px;
`;
const Date = styled.h4`
  font-weight: 400;
  font-size: 32px;
`;
const Name = styled.p`
  margin: 15px 0;
`;
const Titled = styled(Heading)`
  letter-spacing: unset;
`;
const Description = styled(Paragraph)``;
