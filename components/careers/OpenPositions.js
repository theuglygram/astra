import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { btn } from "styles/globalstyle";
function OpenPositions() {
  return (
    <Wrapper>
      <HeroWrapper>
        <TextSection>
          <PositionSection>
            <Position>Position</Position>
            <Role> Brand Designer</Role>

            <RoleWrapper>
              <Section>
                <Position>Department</Position>
                <Work>Design</Work>
              </Section>
              <Section>
                <Position>Type</Position>
                <Work>Full-time</Work>
              </Section>
            </RoleWrapper>
          </PositionSection>

          <StartSection>
            <Title>How to Start</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              viverra quam eget vitae fermentum. Mi, porta arcu quam turpis
              mauris aliquam ut. Auctor egestas mi tellus, sollicitudin
              maecenas. Id porta facilisi at adipiscing. Tellus et etiam urna in
              consectetur. Sem ante tristique etiam aliquam accumsan. Diam amet,
              sit feugiat dui viverra. Consectetur non nibh morbi mi quis
              egestas massa id. A ut pellentesque faucibus sapien morbi in
              vitae.
            </Desc>
          </StartSection>
          <StartSection>
            <Title>Why should you work with us</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              viverra quam eget vitae fermentum. Mi, porta arcu quam turpis
              mauris aliquam ut. Auctor egestas mi tellus, sollicitudin
              maecenas. Id porta facilisi at adipiscing. Tellus et etiam urna in
              consectetur. Sem ante tristique etiam aliquam accumsan. Diam amet,
              sit feugiat dui viverra. Consectetur non nibh morbi mi quis
              egestas massa id. A ut pellentesque faucibus sapien morbi in
              vitae.
            </Desc>
          </StartSection>
        </TextSection>
        <FormSection>
          <Title>Apply for this position</Title>
          <SubWrapper>
            <SmallWrapper>
              <Label>Name</Label>
              <NameInput>
                <Image src="/svgs/user.svg" width={20} height={20} alt="user" />
                <Input placeholder="Your Name" />
              </NameInput>
            </SmallWrapper>
            <SmallWrapper>
              <Label>E-mail</Label>
              <NameInput>
                <Image
                  src="/svgs/email.svg"
                  width={20}
                  height={20}
                  alt="user"
                />
                <Input placeholder="E-mail" />
              </NameInput>
            </SmallWrapper>
            <SmallWrapper>
              <Label>Your message</Label>
              <>
                <TextArea placeholder="Write your message" />
              </>
            </SmallWrapper>

            <SubBtn>Subscribe</SubBtn>
          </SubWrapper>
        </FormSection>
      </HeroWrapper>
    </Wrapper>
  );
}

export default OpenPositions;

const Wrapper = styled.div`
  background: #000;
  padding: 80px 20px 40px;
`;
const HeroWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding: 0 20px;

  @media only screen and (max-width: 740px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const TextSection = styled.div``;
const FormSection = styled.div`
  background: #171717;
  max-width: 405px;
  width: 100%;
  border: 1px solid rgba(92, 225, 21, 0.6);
  border-radius: 16px;
  padding: 35px;
  height: 663px;
  margin: 0 auto;

  @media only screen and (max-width: 340px) {
    padding: 15px;
  }
`;

const PositionSection = styled.div``;
const Position = styled.p`
  font-size: 14px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
`;
const Role = styled.h4`
  font-size: 50px;
  line-height: 100%;
  letter-spacing: -0.02em;
  color: #ffffff;
  font-weight: 400;
`;
const RoleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  margin-top: 30px;
`;
const Work = styled.div``;
const Section = styled.div``;

const StartSection = styled.div`
  margin-top: 50px;
`;
const Title = styled.h6`
  font-weight: 400;
  font-size: 32px;
`;
const Desc = styled.p`
  font-family: "eudoxus Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.95);
`;

const SubWrapper = styled.div`
  display: flex;
  margin-top: 35px;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const NameInput = styled.div`
  background: #fff;
  display: flex;
  border-radius: 100px;
  padding: 15px 10px;
  margin: 10px 0;
`;
const Txt = styled.div`
  background: #fff;
  display: flex;
  border-radius: 100px;
  margin: 10px 15px;
  border-radius: 24px;
  height: 149px;
  width: 100%;
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
  width: 100%;
`;
const TextArea = styled.textarea`
  font-family: "ClashDisplay";
  outline: none;
  border: none;
  border-radius: 24px;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 18px;
  color: #4a4a4a;
  width: 100%;
  height: 149px;
  margin: 10px 0;
`;
const SubBtn = styled(btn)`
  max-width: 315px;
  width: 100%;
  height: 64px;
  background: #5ce115;
  margin-top: 30px;
`;

const Label = styled.label`
  font-size: 14px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
  text-align: left;
  padding-left: 20px;
`;

const SmallWrapper = styled.div``;
