import Navbar from "components/navigation/Navbar";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { btn, Heading, Paragraph } from "styles/globalstyle";

function HomeHero() {
  return (
    <Wrapper>
      <Navbar />
      <HeroWrapper>
        <ImageHolder>
          <Image
            src="/pngs/bizman.png"
            width={515}
            height={591}
            alt="business man"
          />
          <NewImg>
            <Image src="/svgs/dots.svg" width={150} height={150} alt="dots" />
          </NewImg>
        </ImageHolder>
        <DescHolder>
          <Title>Massa egestas elementum posuere non sodales</Title>
          <Description>
            Massa egestas elementum posuere non sodales Elit eu odio interdum
            facilisis curabitur mauris phasellus vitae. Pretium fames vel tortor
            et arcu, faucibus semper egestas amet. Venenatis arcu viverra
            feugiat vel libero
          </Description>
          <Btn>Explore template</Btn>
        </DescHolder>
      </HeroWrapper>{" "}
      <SpiralWrap>
        <Image
          src="/svgs/spiralbottom.svg"
          alt="spiralbtn"
          width={300}
          height={300}
        />
      </SpiralWrap>
    </Wrapper>
  );
}

export default HomeHero;

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const HeroWrapper = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  width: 100%;
  margin: 50px auto;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 30px auto 60px;
  }
`;
const ImageHolder = styled.div`
  position: relative;
  z-index: 1;
`;
const DescHolder = styled.div``;
const Btn = styled(btn)`
  background: #3a3a3a;
  color: #fff;
  margin: 30px 0;
`;
const Title = styled(Heading)`
  margin: 20px 0;
`;
const Description = styled(Paragraph)``;
const NewImg = styled.div`
  position: absolute;
  bottom: -45px;
  right: 30px;
  z-index: -1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SpiralWrap = styled.div`
  position: absolute;
  bottom: 0;
  right: -70px;
  opacity: 0.2;
`;
