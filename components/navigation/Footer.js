import React from "react";
import styled from "styled-components";
import Image from "next/image";

function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Wrap>
          <DetailSection>
            <LogoWrapper>
              <Image src="/svgs/logo.svg" width={150} height={50} alt="logo" />
            </LogoWrapper>
            <Sub>Subscribe for all updates</Sub>
            <SubWrapper>
              <Input placeholder="E-mail"></Input>
              <SmallSub>Subscribe</SmallSub>
            </SubWrapper>
          </DetailSection>
          <PagesSection>
            <Title>Pages</Title>
            <Links>About</Links>
            <Links>Services</Links>
            <Links>Case Studies</Links>
          </PagesSection>
          <PowerSection>
            <Title>powered by</Title>
            <Links>Webflow</Links>
            <Title>Support</Title>
            <Links>Maciej Kociela</Links>
          </PowerSection>
        </Wrap>
        <SocialSection>
          <Title>Social</Title>
          <SocialIcons>
            <Image
              src="/svgs/fb.svg"
              height={20}
              width={20}
              alt="facebook logo"
            />
            <Image
              src="/svgs/ig.svg"
              height={20}
              width={20}
              alt="instagram logo"
            />
            <Image
              src="/svgs/twi.svg"
              height={20}
              width={20}
              alt="twitter logo"
            />
          </SocialIcons>
        </SocialSection>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  background: #000;
  padding: 0 20px;
  height: 100%;
`;
const ContentWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 70px 0 30px;
`;
const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: 100%;
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
  }
`;

const DetailSection = styled.div``;
const LogoWrapper = styled.div`
  margin-bottom: 30px;
`;
const Sub = styled.h4`
  margin-bottom: 30px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.01em;
  text-align: left;
`;
const SubWrapper = styled.div`
  width: 80%;
  height: 59px;

  border-radius: 40px;
  display: flex;
  align-items: center;
  background: #fff;
  margin: 20px 0;
`;
const Input = styled.input`
  background: #ffffff;
  border-radius: 40px 0 0 40px;
  height: 59px;
  background: #000;
  border: none;
  outline: none;
  color: #ffffff;
  padding-left: 25px;
  padding-right: 10px;
  width: 60%;
`;
const SmallSub = styled.p`
  color: #000;
  padding: 0 10px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`;
const PagesSection = styled.div``;
const PowerSection = styled.div``;

const Title = styled.h4`
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.31);
`;
const Links = styled.li`
  list-style: none;
  margin: 15px 0;
  cursor: pointer;
`;

const SocialSection = styled.div`
  margin-top: 50px;
`;
const SocialIcons = styled.div`
  margin-top: 15px;
  span span img {
    margin-right: 15px !important;
  }
`;
