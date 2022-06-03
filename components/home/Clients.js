import React from "react";
import styled, { keyframes } from "styled-components";
import { btn, Heading } from "styles/globalstyle";
import Image from "next/image";

function Clients() {
  return (
    <Wrapper>
      <HeroWrapper>
        <ClientWrapper>
          <Title>Our clients</Title>
          <Head>These great companies use Astra</Head>
        </ClientWrapper>
        <Client></Client>
        <WorkBtn>Work Together</WorkBtn>

        <LogosWrapper>
          <Image
            src="/svgs/logo1.svg"
            width={150}
            height={150}
            layout="fixed"
            alt="logo"
          />
          <Image
            src="/svgs/logo2.svg"
            width={150}
            height={150}
            layout="fixed"
            alt="logo"
          />
          <Image
            src="/svgs/logo3.svg"
            width={150}
            height={150}
            layout="fixed"
            alt="logo"
          />
          <Image
            src="/svgs/logo4.svg"
            width={150}
            height={150}
            layout="fixed"
            alt="logo"
          />
          <Image
            src="/svgs/logo5.svg"
            width={150}
            height={150}
            layout="fixed"
            alt="logo"
          />
        </LogosWrapper>
      </HeroWrapper>
      <Left>
        <Image
          src="/svgs/leftspiral.svg"
          width={200}
          height={200}
          alt="spiral"
        />
      </Left>
      <Right>
        <Image
          src="/svgs/rightspiral.svg"
          width={200}
          height={200}
          alt="spiral"
        />
      </Right>
    </Wrapper>
  );
}

export default Clients;

const Wrapper = styled.div`
  background: #171717;
  padding: 0 20px;
  position: relative;
`;
const HeroWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-align: center;
  text-transform: uppercase;
`;
const ClientWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 471px;
`;
const Client = styled.p``;
const Head = styled(Heading)`
  text-align: center;
  font-size: 44px;
  margin: 30px 0;
  @media only screen and (max-width: 550px) {
    font-size: 35px;
  }
`;
const WorkBtn = styled(btn)``;

const anime = keyframes`
  
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
  `;
const LogosWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  animation: ${anime} 40s linear infinite;
`;

const Left = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-20%, -50%);
`;
const Right = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(20%, -50%);
`;
