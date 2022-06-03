import Navbar from "components/navigation/Navbar";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { btn, Heading, Paragraph } from "styles/globalstyle";

function CaseHero() {
  const role = [
    {
      name: "Micky",
      role: "Web design",
    },
    {
      name: "Woldie",
      role: "Web development",
    },
    {
      name: "Milo",
      role: "Ui/ux",
    },
    {
      name: "Ellie",
      role: "branding",
    },
    {
      name: "Malen",
      role: "content creator",
    },
    {
      name: "Functionity",
      role: "aws",
    },
  ];
  return (
    <Wrapper>
      <Navbar />
      <HeroWrapper>
        <DescHolder>
          <Title>Case Studies</Title>
          <Description>
            Elit eu odio interdum facilisis curabitur mauris phasellus vitae.
            Pretium fames vel tortor
          </Description>
          <Btn>Explore open roles</Btn>
        </DescHolder>
        <ImageHolder>
          {role.map((roles, index) => (
            <UserWrap key={index}>
              <Name>{roles.name}</Name>
              <Role>{roles.role}</Role>
            </UserWrap>
          ))}
          <NewImg>
            <Image src="/svgs/dots.svg" width={150} height={150} alt="dots" />
          </NewImg>
        </ImageHolder>
      </HeroWrapper>
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

export default CaseHero;

const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const HeroWrapper = styled.div`
  max-width: 1300px;
  padding: 0 20px;
  width: 100%;
  margin: 60px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 30px; */

  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    margin: 30px auto 60px;
  }
`;
const ImageHolder = styled.div`
  position: relative;
  z-index: 1;
`;
const DescHolder = styled.div`
  /* max-width: 350px; */
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Btn = styled(btn)`
  background: #5ce115;
  color: #000;
  margin: 30px 0;
  width: auto;
`;
const Title = styled(Heading)`
  margin: 20px 0;
  font-size: 40px;
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

const UserWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #4a4a4a;
  margin-bottom: 35px;
`;
const Name = styled.h4`
  font-size: 32px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
`;
const Role = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
`;
