import React from "react";
import styled from "styled-components";
import { btn, Heading } from "styles/globalstyle";
import Image from "next/image";
function Subscribe() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Sub>Subscribe</Sub>
        <Desc> Massa egestas elementum posuere non sodales</Desc>

        <SubWrapper>
          <NameInput>
            <Image src="/svgs/user.svg" width={20} height={20} alt="user" />
            <Input placeholder="Your Name" />
          </NameInput>
          <NameInput>
            <Image src="/svgs/email.svg" width={20} height={20} alt="user" />
            <Input placeholder="E-mail" />
          </NameInput>
          <SubBtn>Subscribe</SubBtn>
        </SubWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Subscribe;

const Wrapper = styled.div`
  position: relative;
  padding: 0 20px;
  background: #171717;
`;
const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
`;

const Sub = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
`;
const Desc = styled(Heading)`
  text-align: center;
`;
const SubWrapper = styled.div`
  text-align: center;
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const NameInput = styled.div`
  background: #fff;
  display: flex;
  border-radius: 100px;
  padding: 15px 10px;
  margin: 10px 15px;
`;
const Input = styled.input`
  font-family: "ClashDisplay";
  outline: none;
  border: none;
  border-radius: 100px;
  padding: 0 15px;
  font-weight: 500;
  font-size: 18px;
  color: #4a4a4a;
  width: 70%;
`;
const SubBtn = styled(btn)`
  width: 179px;
  height: 64px;
  background: #5ce115;
`;
